import { DEFAULTS, SCEN_KEYS, TICKERS } from '../data/tickers.js'

const KEY = 'adstack2030.v1'
const SCALARS = ['shares', 'cost', 'prevRev', 'peLow', 'peHigh', 'evMult', 'netCash']
const SERIES = ['growth', 'niMargin', 'ebMargin', 'sharesOut']

const clone = (o) => JSON.parse(JSON.stringify(o))
const isNum = (v) => typeof v === 'number' && isFinite(v)

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
    const d = clone(data[k])
    d.shares = 1
    d.cost = DEFAULTS[k].priceRef
    out[k] = d
  }
  return out
}

/**
 * Only numbers survive a reload — copy and watch items always come from DEFAULTS, so
 * a saved model can never pin stale wording. A read that throws (private browsing, or
 * a corrupt payload) falls back to defaults rather than blanking the page.
 */
export function loadStore() {
  const store = { active: 'APP', data: freshData(), checks: {} }

  let saved = null
  try {
    saved = JSON.parse(localStorage.getItem(KEY) || 'null')
  } catch {
    return store
  }
  if (!saved) return store

  if (TICKERS.includes(saved.active)) store.active = saved.active
  if (saved.checks && typeof saved.checks === 'object') store.checks = saved.checks

  for (const k of TICKERS) {
    const s = saved.data?.[k]
    if (!s) continue
    const d = store.data[k]

    for (const f of SCALARS) if (isNum(s[f])) d[f] = s[f]

    for (const f of SERIES) {
      if (Array.isArray(s[f]) && s[f].length === 5) {
        d[f] = s[f].map((v, i) => (isNum(v) ? v : d[f][i]))
      }
    }

    for (const sk of SCEN_KEYS) {
      const ss = s.scen?.[sk]
      if (!ss) continue
      for (const f of ['rev', 'margin', 'pe']) if (isNum(ss[f])) d.scen[sk][f] = ss[f]
    }
  }

  return store
}

export function persist(store) {
  const data = {}
  for (const k of TICKERS) {
    const d = store.data[k]
    const o = { scen: {} }
    for (const f of SCALARS) o[f] = d[f]
    for (const f of SERIES) o[f] = d[f]
    for (const sk of SCEN_KEYS) {
      o.scen[sk] = { rev: d.scen[sk].rev, margin: d.scen[sk].margin, pe: d.scen[sk].pe }
    }
    data[k] = o
  }

  try {
    localStorage.setItem(KEY, JSON.stringify({ active: store.active, data, checks: store.checks }))
  } catch {
    // Storage unavailable: the session still works, it just will not be remembered.
  }
}
