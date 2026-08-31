import { DEFAULTS, SCEN_KEYS, TICKERS } from '../data/tickers.js'
import { project } from './model.js'

/**
 * Cross-company ranking.
 *
 * Everything else on the page looks at one company at a time. This looks at all of
 * them at once and answers the only question the rest of the page cannot: given the
 * assumptions currently in the model, which names carry the best 2030 return.
 *
 * It is a ranking of assumptions, not of companies. Edit a growth rate or an exit
 * multiple and the order changes — that is the point, and it is also the warning.
 */

/** Probability weights behind the `expected` basis. Deliberately fat-tailed at both ends. */
export const SCEN_WEIGHTS = { bear: 0.25, base: 0.5, bull: 0.25 }

/**
 * How the ranking metric is chosen. Three bases, because a single one hides the
 * trade-off: `expected` and `base` reward upside, `bear` rewards survivability, and
 * the names that top one list are rarely the names that top another.
 */
export const RANK_BASES = [
  { key: 'expected', label: 'Expected', hint: '25% bear · 50% base · 25% bull' },
  { key: 'base', label: 'Base case', hint: 'the base scenario alone' },
  { key: 'bear', label: 'Downside first', hint: 'the bear scenario alone' },
]

export const RANK_SIZES = [3, 5, 10]

/** Annualised return from `from` to `to` over the five years to CY2030. */
const cagr = (to, from) => (from > 0 ? (to > 0 ? Math.pow(to / from, 1 / 5) - 1 : -1) : 0)

/**
 * One row per ticker, sorted by the chosen basis.
 *
 * Ranking runs off `priceRef` — the market price on the reference date — not off
 * `cost`, so the order is a forward question everyone sees the same way rather than a
 * function of what any one holder happened to pay. The cost-basis return travels
 * alongside as a separate column.
 */
export function rankTickers(data, basis = 'expected') {
  const rows = []
  const excluded = []

  for (const key of TICKERS) {
    const d = data[key]
    if (!d) continue

    if (DEFAULTS[key].rankable === false) {
      excluded.push({ key, name: d.name, reason: DEFAULTS[key].rankReason })
      continue
    }

    const c = project(d)
    const target = Object.fromEntries(SCEN_KEYS.map((k) => [k, c.scen[k].target]))
    const weighted = SCEN_KEYS.reduce((sum, k) => sum + target[k] * SCEN_WEIGHTS[k], 0)
    const price = d.priceRef || d.cost

    const ret = {
      bear: cagr(target.bear, price),
      base: cagr(target.base, price),
      bull: cagr(target.bull, price),
      expected: cagr(weighted, price),
    }

    rows.push({
      key,
      name: d.name,
      sector: d.sector,
      caveat: Boolean(d.caveat),
      price,
      cost: d.cost,
      target,
      weighted,
      ret,
      costRet: cagr(target.base, d.cost),
    })
  }

  rows.sort((a, b) => b.ret[basis] - a.ret[basis])
  return { rows, excluded }
}
