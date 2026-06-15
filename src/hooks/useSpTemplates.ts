import { useState, useEffect } from 'react'
import type { PartnerTemplate } from '../data/spTemplates'
import { SP_TEMPLATES } from '../data/spTemplates'

const SHEET_ID = '1oH4x0auz8HyjLzJB8Joz-ybiWRk8l-wtUMKOd2sqYaA'
const SHEET_CSV = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`

// Handles quoted fields with embedded newlines/commas
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

// Columns: A=Partner, B=Label, C=TO, D=CC, E=Subject, F=Body
function buildTemplates(rows: string[][]): PartnerTemplate[] {
  const map = new Map<string, PartnerTemplate['variants']>()
  const order: string[] = []

  for (let i = 1; i < rows.length; i++) {
    const cols = rows[i].map(s => s?.trim() ?? '')
    const [partner, label, to, cc, subject, body] = cols
    if (!partner) continue
    const key = partner.toUpperCase()
    if (!map.has(key)) { map.set(key, []); order.push(key) }
    map.get(key)!.push({ label: label || 'Default', to: to || '', cc: cc || '', subject, body })
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
