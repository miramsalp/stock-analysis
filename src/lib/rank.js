import { DEFAULTS, SCEN_KEYS, TICKERS } from '../data/tickers.js'
import { caveatOf } from './caveat.js'
import { annualise, project } from './model.js'
import { moveOf } from './move.js'

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

/** NaN sorts last instead of breaking the comparator. */
export const sortVal = (v) => (Number.isFinite(v) ? v : -Infinity)

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
    const caveat = caveatOf(key)

    if (DEFAULTS[key].rankable === false) {
      excluded.push({ key, name: d.name, sector: d.sector, reason: DEFAULTS[key].rankReason, caveat })
      continue
    }

    const c = project(d)
    const target = Object.fromEntries(SCEN_KEYS.map((k) => [k, c.scen[k].target]))
    // Limited liability: a below-zero outcome counts as zero in the average, not as a debt.
    const weighted = SCEN_KEYS.reduce(
      (sum, k) => sum + Math.max(0, target[k]) * SCEN_WEIGHTS[k],
      0,
    )
    const price = DEFAULTS[key].priceRef || d.cost

    const ret = {
      bear: annualise(target.bear, price),
      base: annualise(target.base, price),
      bull: annualise(target.bull, price),
      expected: annualise(weighted, price),
    }

    rows.push({
      key,
      name: d.name,
      sector: d.sector,
      caveat,
      move: moveOf(key),
      price,
      cost: d.cost,
      target,
      weighted,
      ret,
      costRet: annualise(target.base, d.cost),
    })
  }

  // Ties (several wiped-out bear cases all at −100%) fall back to the base case and
  // then the ticker, so the order never depends on which data file a name lives in.
  rows.sort(
    (a, b) =>
      sortVal(b.ret[basis]) - sortVal(a.ret[basis]) ||
      sortVal(b.ret.base) - sortVal(a.ret.base) ||
      a.key.localeCompare(b.key),
  )
  rows.forEach((r, i) => {
    r.rank = i + 1
  })
  return { rows, excluded }
}
