import { DEFAULTS, SECTOR_LABEL, SECTORS, TICKERS } from '../data/tickers.js'
import { caveatOf } from './caveat.js'
import { annualise, project } from './model.js'
import { moveOf } from './move.js'
import { sortVal } from './rank.js'

/**
 * One light row per company for the rail and the palette: price, move since the last
 * pull and the base / bear return from today's price (the market, not the holder's
 * cost — the same basis the ranking uses, so the rail and Compare agree).
 */
export function bookRows(data) {
  const out = {}
  for (const key of TICKERS) {
    const d = data[key]
    const c = project(d)
    const p = DEFAULTS[key].priceRef
    out[key] = {
      key,
      name: d.name,
      sector: d.sector,
      sectorLabel: SECTOR_LABEL[d.sector] || d.sector,
      price: p,
      move: moveOf(key),
      base: annualise(c.scen.base.target, p),
      bear: annualise(c.scen.bear.target, p),
      caveat: caveatOf(key),
      rankable: DEFAULTS[key].rankable !== false,
    }
  }
  return out
}

export const RAIL_SORTS = [
  { key: 'sector', label: 'Sector' },
  { key: 'az', label: 'A–Z' },
  { key: 'move', label: 'Move' },
  { key: 'base', label: 'Base/yr' },
  { key: 'bear', label: 'Bear/yr' },
]

/** Sorts that order by a modelled return, and so must keep unrankable names apart. */
export const RETURN_SORTS = new Set(['base', 'bear'])

const sectorIndex = Object.fromEntries(SECTORS.map((s, i) => [s.key, i]))

/**
 * Ticker order for the rail and for j / k. The return sorts put the names the
 * earnings frame does not fit (MSTR, ASTS) after everything else, in their own group,
 * so the rail never makes the ranking that Compare refuses to.
 */
export function orderTickers(rows, sort) {
  const list = Object.values(rows)
  const by = {
    sector: (a, b) => (sectorIndex[a.sector] ?? 99) - (sectorIndex[b.sector] ?? 99),
    az: (a, b) => a.key.localeCompare(b.key),
    move: (a, b) => sortVal(b.move.pct) - sortVal(a.move.pct),
    base: (a, b) => sortVal(b.base) - sortVal(a.base),
    bear: (a, b) => sortVal(b.bear) - sortVal(a.bear),
  }[sort]
  if (sort === 'sector') return TICKERS.slice().sort((a, b) => by(rows[a], rows[b]))
  const ranks = RETURN_SORTS.has(sort)
  return list
    .sort((a, b) => (ranks ? a.rankable === false : 0) - (ranks ? b.rankable === false : 0) || by(a, b) || a.key.localeCompare(b.key))
    .map((r) => r.key)
}

/**
 * Small fuzzy match for the palette and the rail filter: ticker prefix beats name
 * word prefix beats substring beats an in-order subsequence of the name. "crowd"
 * finds CRWD by name, "taiwan" finds TSM, "power" finds the infra sector.
 */
export function matchScore(row, q) {
  const s = q.trim().toLowerCase()
  if (!s) return 1
  const t = row.key.toLowerCase()
  const n = row.name.toLowerCase()
  const sec = row.sectorLabel.toLowerCase()
  if (t === s) return 100
  if (t.startsWith(s)) return 90
  if (n.split(/[\s&.,-]+/).some((w) => w.startsWith(s))) return 70
  if (n.includes(s)) return 55
  if (t.includes(s)) return 50
  if (sec.split(/[\s&]+/).some((w) => w.startsWith(s))) return 35
  let i = 0
  for (const ch of n) if (ch === s[i]) i++
  return i === s.length ? 15 : 0
}
