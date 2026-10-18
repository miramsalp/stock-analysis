import { DATA_AS_OF, DEFAULTS, SCEN_KEYS, TICKERS } from '../data/tickers.js'

/*
 * Persistence.
 *
 * v1 wrote every number of every ticker on the first visit, with no date, so a data
 * re-pull never reached a browser that had opened the page before: ASML's currency
 * fix, the October prices and every later pull were silently overwritten by whatever
 * the first visit saw. v2 fixes both halves:
 *
 *   - only fields that differ from DEFAULTS are written, so an untouched ticker always
 *     shows the shipped numbers, whatever pull they come from;
 *   - the payload is stamped with DATA_AS_OF. Edits saved against a different pull are
 *     not applied silently — they are held aside and the page asks whether to re-apply
 *     them, because some will be the reader's edits and some will be stale data.
 *
 * Still numbers only. The stamp and the active ticker are identifiers, not copy;
 * prose, theses, caveats, news and watch items always come from DEFAULTS.
 */
const KEY = 'adstack2030.v2'
const KEY_V1 = 'adstack2030.v1'
const SCALARS = ['shares', 'cost', 'prevRev', 'peLow', 'peHigh', 'evMult', 'netCash']
const SERIES = ['growth', 'niMargin', 'ebMargin', 'sharesOut']
const SCEN_FIELDS = ['rev', 'margin', 'pe']

const clone = (o) => JSON.parse(JSON.stringify(o))
const isNum = (v) => typeof v === 'number' && Number.isFinite(v)

export function freshData() {
  const out = {}
  for (const k of TICKERS) out[k] = clone(DEFAULTS[k])
  return out
}

export function resetTicker(key) {
  return clone(DEFAULTS[key])
}

/**
 * A clean sheet across the whole book: one share of everything, bought at the market
 * price on the reference date.
 *
 * Deliberately not the same as resetting each ticker in turn. `resetTicker` restores
 * that company's shipped defaults, which for APP means a real $319.46 entry; this puts
 * every name on the same footing instead, so the position column compares like with
 * like and no holding is sized larger than another by accident. Drivers, scenarios and
 * multiples are left exactly as the user has them — only the two position inputs move.
 */
export function resetPositions(data) {
  const out = {}
  for (const k of TICKERS) {
    const d = clone(data[k] ?? DEFAULTS[k])
    d.shares = 1
    d.cost = DEFAULTS[k].priceRef
    out[k] = d
  }
  return out
}

/** The numeric fields of `d` that differ from the shipped defaults, or null. */
export function overridesOf(key, d) {
  const base = DEFAULTS[key]
  if (!base || !d) return null
  const o = {}
  for (const f of SCALARS) if (isNum(d[f]) && d[f] !== base[f]) o[f] = d[f]
  for (const f of SERIES) {
    if (Array.isArray(d[f]) && d[f].some((v, i) => v !== base[f][i])) o[f] = d[f].slice()
  }
  for (const sk of SCEN_KEYS) {
    for (const f of SCEN_FIELDS) {
      const v = d.scen?.[sk]?.[f]
      if (isNum(v) && v !== base.scen[sk][f]) {
        o.scen ??= {}
        o.scen[sk] ??= {}
        o.scen[sk][f] = v
      }
    }
  }
  return Object.keys(o).length ? o : null
}

/** Copy only well-formed numbers from a saved record onto `d`. */
function applyOverrides(d, s) {
  if (!s || typeof s !== 'object') return d
  for (const f of SCALARS) if (isNum(s[f])) d[f] = s[f]
  for (const f of SERIES) {
    if (Array.isArray(s[f]) && s[f].length === 5) d[f] = s[f].map((v, i) => (isNum(v) ? v : d[f][i]))
  }
  for (const sk of SCEN_KEYS) {
    const ss = s.scen?.[sk]
    if (!ss) continue
    for (const f of SCEN_FIELDS) if (isNum(ss[f])) d.scen[sk][f] = ss[f]
  }
  return d
}

/** Saved records → overrides against *today's* defaults, dropping any that now match. */
function diffSaved(savedData) {
  const out = {}
  for (const k of TICKERS) {
    const s = savedData?.[k]
    if (!s) continue
    const o = overridesOf(k, applyOverrides(clone(DEFAULTS[k]), s))
    if (o) out[k] = o
  }
  return out
}

/** A stable key for a watch item: its heading, slugged. Re-ordering items keeps ticks. */
export const slug = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48)

export const watchKey = (ticker, item) => `${ticker}:${slug(item.h)}`

/** v1 keyed ticks by array position; map each onto the heading now at that position. */
function migrateChecks(checks) {
  const out = {}
  if (!checks || typeof checks !== 'object') return out
  for (const [k, v] of Object.entries(checks)) {
    if (v !== true) continue
    const [ticker, rest] = k.split(':')
    if (!DEFAULTS[ticker] || rest == null) continue
    if (/^\d+$/.test(rest)) {
      const item = DEFAULTS[ticker].watch?.[+rest]
      if (item) out[watchKey(ticker, item)] = true
    } else {
      out[k] = true
    }
  }
  return out
}

function read(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null')
  } catch {
    return null
  }
}

/**
 * A read that throws (private browsing, a corrupt payload) falls back to defaults
 * rather than blanking the page.
 */
export function loadStore() {
  const store = { active: TICKERS.includes('APP') ? 'APP' : TICKERS[0], data: freshData(), checks: {}, stale: null }

  const v2 = read(KEY)
  const saved = v2 && typeof v2 === 'object' ? v2 : read(KEY_V1)
  if (!saved || typeof saved !== 'object') return store

  if (TICKERS.includes(saved.active)) store.active = saved.active
  store.checks = migrateChecks(saved.checks)

  const current = saved === v2 && saved.asOf === DATA_AS_OF
  if (current) {
    for (const k of TICKERS) if (saved.data?.[k]) applyOverrides(store.data[k], saved.data[k])
  } else {
    const held = diffSaved(saved.data)
    const count = Object.keys(held).length
    if (count) store.stale = { asOf: saved === v2 ? saved.asOf || null : null, data: held, count }
  }

  // A stale set that was already pending is carried forward until it is resolved.
  if (current && saved.stale?.data) {
    const held = diffSaved(saved.stale.data)
    const count = Object.keys(held).length
    if (count) store.stale = { asOf: saved.stale.asOf ?? null, data: held, count }
  }

  return store
}

/** Re-apply edits saved against an earlier pull, on top of whatever is on screen now. */
export function reapplyStale(store) {
  if (!store.stale) return store
  const data = { ...store.data }
  for (const [k, o] of Object.entries(store.stale.data)) {
    if (data[k]) data[k] = applyOverrides(clone(data[k]), o)
  }
  return { ...store, data, stale: null }
}

export function persist(store) {
  const data = {}
  for (const k of TICKERS) {
    const o = overridesOf(k, store.data[k])
    if (o) data[k] = o
  }
  const checks = {}
  for (const [k, v] of Object.entries(store.checks)) if (v === true) checks[k] = true

  const payload = { v: 2, asOf: DATA_AS_OF, active: store.active, data, checks }
  if (store.stale) payload.stale = { asOf: store.stale.asOf, data: store.stale.data }

  try {
    localStorage.setItem(KEY, JSON.stringify(payload))
  } catch {
    // Storage unavailable: the session still works, it just will not be remembered.
  }
}

/** Which tabs hold a value that differs from the shipped defaults. */
export function editedSections(key, d) {
  const o = overridesOf(key, d) || {}
  return {
    overview: 'shares' in o || 'cost' in o,
    scenarios: 'scen' in o,
    drivers: SERIES.some((f) => f in o) || 'prevRev' in o,
    valuation: ['peLow', 'peHigh', 'evMult', 'netCash'].some((f) => f in o),
  }
}
