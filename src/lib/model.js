import { SCEN_KEYS, YEARS } from '../data/tickers.js'
import { yearsTo } from './dates.js'

/** Years from the reference price to the end of CY2030, and to the end of each column. */
export const HORIZON = yearsTo(2030)
export const COL_YEARS = YEARS.map(yearsTo)

const pos = (v) => typeof v === 'number' && v > 0

/**
 * Annualised return from `from` to `to` over `years`.
 *
 * A target at or below zero is a total loss to a long holder — the equity cannot be
 * worth less than nothing — so it returns −100% rather than a flattering 0. A zero or
 * missing cost has no meaningful return at all, so that is NaN (rendered n/m). The
 * ranking uses this same function, so the two screens can never disagree on sign.
 */
export function annualise(to, from, years = HORIZON) {
  if (!pos(from) || !pos(years) || !Number.isFinite(to)) return NaN
  if (to <= 0) return -1
  return Math.pow(to / from, 1 / years) - 1
}

/** Total return to a long holder, floored at −100% for the same reason. */
export const totalReturn = (to, from) =>
  !pos(from) || !Number.isFinite(to) ? NaN : Math.max(to, 0) / from - 1

/** One scenario's 2030 exit, shared by the company page and the ranking. */
export function scenarioOut(s, sharesOut2030) {
  const ni = (s.rev * s.margin) / 100
  // No invented share count: a blank or non-positive CY2030 count is n/m, not 1B.
  const eps = pos(sharesOut2030) ? ni / sharesOut2030 : NaN
  return { ni, eps, target: eps * s.pe }
}

/**
 * Run the five-year model off one ticker's drivers.
 *
 * Revenue compounds off `prevRev`, so changing any single growth rate moves every
 * later year. Everything else is derived from revenue, margins and share count.
 *
 * Negative EPS and negative P/E "prices" are kept: they are the honest GAAP output on
 * a loss-making year. What is not kept is any ratio built on top of them — implied
 * P/E, upside and IRR on a loss year are NaN, because a multiple of a loss is not a
 * price anyone can sell at.
 */
export function project(d) {
  const rev = []
  const ni = []
  const eps = []
  const eb = []

  let prev = d.prevRev
  for (let i = 0; i < 5; i++) {
    rev[i] = prev * (1 + d.growth[i] / 100)
    prev = rev[i]
    ni[i] = (rev[i] * d.niMargin[i]) / 100
    eps[i] = pos(d.sharesOut[i]) ? ni[i] / d.sharesOut[i] : NaN
    eb[i] = (rev[i] * d.ebMargin[i]) / 100
  }

  const peMid = (d.peLow + d.peHigh) / 2
  const cost = pos(d.cost) ? d.cost : NaN
  const held = pos(d.shares) ? d.shares : 0

  // Sorted per year: on a loss, the lower multiple gives the less negative price.
  const priceLow = eps.map((e) => Math.min(e * d.peLow, e * d.peHigh))
  const priceHigh = eps.map((e) => Math.max(e * d.peLow, e * d.peHigh))
  const priceMid = eps.map((e) => e * peMid)
  // Enterprise value on EBITDA, plus net cash, back to a per-share equity price.
  const evPrice = eb.map((e, i) =>
    pos(d.sharesOut[i]) ? (e * d.evMult + d.netCash) / d.sharesOut[i] : NaN,
  )

  const scen = {}
  for (const k of SCEN_KEYS) {
    const o = scenarioOut(d.scen[k], d.sharesOut[4])
    // Position value floors at zero: a long position cannot be worth less than nothing.
    const value = Number.isFinite(o.target) ? Math.max(o.target, 0) * held : NaN
    scen[k] = {
      ...o,
      value,
      profit: value - (cost || 0) * held,
      // Per share, so it does not depend on how many shares are held.
      roi: totalReturn(o.target, cost),
      cagr: annualise(o.target, cost),
    }
  }

  // A P/E-derived "price" at or below zero is not a price: no upside or IRR off it.
  const fromCost = (p, years) => (p > 0 ? annualise(p, cost, years) : NaN)

  return {
    rev,
    ni,
    eps,
    eb,
    peMid,
    priceLow,
    priceHigh,
    priceMid,
    evPrice,
    scen,
    invested: (cost || 0) * held,
    impliedPE: eps.map((e) => (e > 0 && cost > 0 ? cost / e : NaN)),
    upside: priceMid.map((p) => (p > 0 ? totalReturn(p, cost) : NaN)),
    evUpside: evPrice.map((p) => (p > 0 ? totalReturn(p, cost) : NaN)),
    // Annualised over the real time to each column's year end. Under a year (CY2026,
    // about three months from the reference date) is not annualised: that would turn
    // a quarter's move into a headline rate. The upside row carries it instead.
    irr: priceMid.map((p, i) => (COL_YEARS[i] >= 1 ? fromCost(p, COL_YEARS[i]) : NaN)),
  }
}
