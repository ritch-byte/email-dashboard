import { useState, useEffect } from 'react'
import type { PartnerTemplate } from '../data/spTemplates'
import { SP_TEMPLATES } from '../data/spTemplates'

const SHEET_ID = '1oH4x0auz8HyjLzJB8Joz-ybiWRk8l-wtUMKOd2sqYaA'
const SHEET_CSV = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`

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
  // Detect which format the sheet uses
  return header === 'partner' ? buildNewFormat(rows) : buildOriginalSheet(rows)
}

// Original sheet columns: A=Source Partner, B=Filter/Subscription, C=Templates(doc),
// D=Cycle, E=Type, F=Name(POC), G=POC email, H=Notes
function buildOriginalSheet(rows: string[][]): PartnerTemplate[] {
  const map = new Map<string, PartnerTemplate['variants']>()
  const order: string[] = []

  for (let i = 1; i < rows.length; i++) {
    const c = rows[i].map(s => s?.trim() ?? '')
    const partnerRaw = c[0]
    if (!partnerRaw) continue

    const partner   = partnerRaw.toUpperCase()
    const filter    = c[1] || ''
    const pocName   = c[5] || ''
    const pocEmail  = c[6] || ''
    const sheetNote = c[7] || ''

    const label = pocName || 'Default'

    // Extract email address — cell sometimes has "email@x.com (extra note)"
    const emailMatch = pocEmail.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/)
    const to = emailMatch ? emailMatch[0] : ''
    const emailExtra = pocEmail.replace(to, '').replace(/^[\s,()]+|[\s,()]+$/g, '').trim()

    // Merge filter + sheet notes + any parenthetical in email cell
    const notes = [filter, sheetNote, emailExtra].filter(Boolean).join(' | ')

    // Look up hardcoded template for subject/body — try exact match, then strip trailing digits
    const baseTpl = SP_TEMPLATES.find(t => t.partner === partner)
                 || SP_TEMPLATES.find(t => t.partner === partner.replace(/\d+$/, ''))

    // Match POC variant by label similarity, else use first variant
    const existingVariant = baseTpl?.variants.find(v =>
      v.label.toLowerCase().includes(label.toLowerCase()) ||
      label.toLowerCase().includes(v.label.toLowerCase())
    ) ?? baseTpl?.variants[0]

    if (!map.has(partner)) { map.set(partner, []); order.push(partner) }
    map.get(partner)!.push({
      label,
      to,
      cc: existingVariant?.cc ?? '',
      subject: existingVariant?.subject ?? '',
      body: existingVariant?.body ?? '',
      notes,
    })
  }

  return order.map(key => ({ partner: key, variants: map.get(key)! }))
}

// New CSV format: Partner | Label | TO | CC | Subject | Body | Notes
function buildNewFormat(rows: string[][]): PartnerTemplate[] {
  const map = new Map<string, PartnerTemplate['variants']>()
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
  const [loading, setLoading] = useState(true)
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
