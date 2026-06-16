import { useState, useEffect } from 'react'
import type { PartnerTemplate } from '../data/spTemplates'
import { SP_TEMPLATES, buildDefaultVariant } from '../data/spTemplates'

const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnHMFoz1T0micvk3iZ3M1BaiVOu6opJVlVDndG33ig74BlLCd2NC63YQAbv9dYnvM-nTctHRsfHPpx/pub?output=csv'

function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++ }
      else if (ch === '"') inQuotes = false
      else field += ch
    } else {
      if (ch === '"') inQuotes = true
      else if (ch === ',') { row.push(field); field = '' }
      else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = '' }
      else if (ch !== '\r') field += ch
    }
  }
  if (field || row.length > 0) { row.push(field); rows.push(row) }
  return rows
}

function buildTemplates(rows: string[][]): PartnerTemplate[] {
  if (rows.length < 2) return []
  const header = rows[0][0]?.trim().toLowerCase()
  return header === 'partner' ? buildNewFormat(rows) : buildOriginalSheet(rows)
}

// Original sheet: A=Source Partner, B=Filter/Subscription, C=Doc link,
// D=Cycle, E=Type, F=Name, G=POC email, H=Notes
function buildOriginalSheet(rows: string[][]): PartnerTemplate[] {
  // Pass 1 — build per-partner CC pool from:
  //   a) rows where column G starts with "CC:"  (explicit CC contacts)
  //   b) rows where column H or G contains "cc on all emails"
  const ccPool: Record<string, string[]> = {}

  for (let i = 1; i < rows.length; i++) {
    const c = rows[i].map(s => s?.trim() ?? '')
    if (!c[0]) continue
    const partner = c[0].toUpperCase()
    const pocEmailRaw = c[6] || ''
    const sheetNotes  = c[7] || ''

    const isCCPrefixed = /^cc:/i.test(pocEmailRaw)
    const isAlwaysCC   = /cc on all emails/i.test(sheetNotes) || /cc on all emails/i.test(pocEmailRaw)

    if (isCCPrefixed || isAlwaysCC) {
      const cleaned = pocEmailRaw.replace(/^cc:\s*/i, '')
      const m = cleaned.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/)
      if (m) {
        if (!ccPool[partner]) ccPool[partner] = []
        if (!ccPool[partner].includes(m[0])) ccPool[partner].push(m[0])
      }
    }
  }

  // Pass 2 — build POC variants, skipping CC-only rows
  const map   = new Map<string, PartnerTemplate['variants']>()
  const order: string[] = []

  for (let i = 1; i < rows.length; i++) {
    const c = rows[i].map(s => s?.trim() ?? '')
    const partnerRaw = c[0]
    if (!partnerRaw) continue

    const pocEmailRaw = c[6] || ''

    // Skip rows that are purely CC contacts (no primary POC role)
    if (/^cc:/i.test(pocEmailRaw)) continue

    const partner   = partnerRaw.toUpperCase()
    const filter    = c[1] || ''
    const pocName   = c[5] || ''
    const sheetNote = c[7] || ''
    const label     = pocName || 'Default'

    const emailMatch = pocEmailRaw.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/)
    const to = emailMatch ? emailMatch[0] : ''

    // CC = pool minus self (so Ben isn't CC'd when Ben is the TO)
    const cc = (ccPool[partner] || []).filter(e => e !== to).join(',')

    // Notes: combine filter + sheetNote + any parenthetical text from email cell
    //        but strip the raw "cc on all emails" instruction (already encoded in CC)
    const emailExtra = pocEmailRaw.replace(to, '').replace(/[\s,()]+$|^[\s,()]+/g, '').trim()
    const notes = [filter, sheetNote, emailExtra]
      .map(s => s?.trim())
      .filter(s => s && !/cc on all emails/i.test(s))
      .filter(Boolean)
      .join(' | ')

    // Columns I and J — Subject and Body written directly in the sheet
    // Decode HTML entities left over from the Drive API HTML export
    const decodeEntities = (s: string) => s
      .replace(/&rsquo;|&#8217;/g, "'").replace(/&lsquo;|&#8216;/g, "'")
      .replace(/&rdquo;|&#8221;/g, '"').replace(/&ldquo;|&#8220;/g, '"')
      .replace(/&ndash;|&#8211;/g, '-').replace(/&mdash;|&#8212;/g, '--')
      .replace(/&amp;/g, '&').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))

    let rawSubject = decodeEntities(c[8] || '')
    let rawBody    = decodeEntities(c[9] || '')

    // The Drive API HTML export includes the To/Cc/Bcc/Subject table header at the top of
    // the extracted text. If we detect that pattern, strip the header and pull the real
    // subject + body from the content.
    if (rawBody) {
      // Extract subject from "Subject\n[value]" table format if column I is empty
      if (!rawSubject) {
        const subjectMatch = rawBody.match(/\nSubject\n([^\n]+)/) || rawBody.match(/^Subject:\s*(.+)/m)
        if (subjectMatch) rawSubject = subjectMatch[1].trim()
      }
      // Trim body to start at the email greeting ("Hi ...")
      const greetingIdx = rawBody.search(/\nHi\s+/)
      if (greetingIdx >= 0) rawBody = rawBody.slice(greetingIdx + 1).trim()
    }

    // If the sheet has subject/body, use them; otherwise fall back to SP_TEMPLATES → default skeleton
    let subject: string
    let body: string
    if (rawSubject && rawBody) {
      subject = rawSubject
      body    = rawBody
    } else {
      const baseTpl = SP_TEMPLATES.find(t => t.partner === partner)
                   || SP_TEMPLATES.find(t => t.partner === partner.replace(/\d+$/, ''))
      const existingVariant = baseTpl?.variants.find(v =>
        v.label.toLowerCase().includes(label.toLowerCase()) ||
        label.toLowerCase().includes(v.label.toLowerCase())
      ) ?? baseTpl?.variants[0] ?? buildDefaultVariant(partner)
      subject = rawSubject || existingVariant.subject
      body    = rawBody    || existingVariant.body
    }

    if (!map.has(partner)) { map.set(partner, []); order.push(partner) }
    map.get(partner)!.push({
      label,
      to,
      cc,
      subject,
      body,
      notes,
    })
  }

  return order.map(key => ({ partner: key, variants: map.get(key)! }))
}

// New CSV format: Partner | Label | TO | CC | Subject | Body | Notes
function buildNewFormat(rows: string[][]): PartnerTemplate[] {
  const map   = new Map<string, PartnerTemplate['variants']>()
  const order: string[] = []
  for (let i = 1; i < rows.length; i++) {
    const c = rows[i].map(s => s?.trim() ?? '')
    const [partner, label, to, cc, subject, body, notes] = c
    if (!partner) continue
    const key = partner.toUpperCase()
    if (!map.has(key)) { map.set(key, []); order.push(key) }
    map.get(key)!.push({ label: label || 'Default', to, cc, subject, body, notes: notes || '' })
  }
  return order.map(key => ({ partner: key, variants: map.get(key)! }))
}

export function useSpTemplates() {
  const [templates, setTemplates] = useState<PartnerTemplate[]>(SP_TEMPLATES)
  const [loading, setLoading]     = useState(true)
  const [fromSheet, setFromSheet] = useState(false)

  useEffect(() => {
    fetch(SHEET_CSV)
      .then(r => { if (!r.ok) throw new Error('Sheet not public'); return r.text() })
      .then(text => {
        const parsed = buildTemplates(parseCSV(text))
        if (parsed.length > 0) { setTemplates(parsed); setFromSheet(true) }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { templates, loading, fromSheet }
}
