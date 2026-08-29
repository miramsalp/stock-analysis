import { SCEN_KEYS } from '../data/tickers.js'

/**
 * Run the five-year model off one ticker's drivers.
 *
 * Revenue compounds off `prevRev`, so changing any single growth rate moves every
 * later year. Everything else is derived from revenue, margins and share count.
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
    eps[i] = d.sharesOut[i] > 0 ? ni[i] / d.sharesOut[i] : 0
    eb[i] = (rev[i] * d.ebMargin[i]) / 100
  }

  const peMid = (d.peLow + d.peHigh) / 2
  const cost = d.cost || 0

  const priceLow = eps.map((e) => e * d.peLow)
  const priceHigh = eps.map((e) => e * d.peHigh)
  const priceMid = eps.map((e) => e * peMid)
  // Enterprise value on EBITDA, plus net cash, back to a per-share equity price.
  const evPrice = eb.map((e, i) =>
    d.sharesOut[i] > 0 ? (e * d.evMult + d.netCash) / d.sharesOut[i] : 0,
  )

  const scen = {}
  for (const k of SCEN_KEYS) {
    const s = d.scen[k]
    const sharesOut2030 = d.sharesOut[4] || 1
    const netIncome = (s.rev * s.margin) / 100
    const scenEps = netIncome / sharesOut2030
    const target = scenEps * s.pe
    const value = target * d.shares
    const invested = cost * d.shares

    scen[k] = {
      ni: netIncome,
      eps: scenEps,
      target,
      value,
      profit: value - invested,
      roi: invested > 0 ? (value - invested) / invested : 0,
      cagr: cost > 0 && target > 0 ? Math.pow(target / cost, 1 / 5) - 1 : 0,
    }
  }

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
    invested: cost * d.shares,
    impliedPE: eps.map((e) => (e > 0 ? cost / e : 0)),
    upside: priceMid.map((p) => (cost > 0 ? p / cost - 1 : 0)),
    evUpside: evPrice.map((p) => (cost > 0 ? p / cost - 1 : 0)),
    // Annualised over the years to that column: CY2026 is one year out, CY2030 five.
    irr: priceMid.map((p, i) => (cost > 0 && p > 0 ? Math.pow(p / cost, 1 / (i + 1)) - 1 : 0)),
  }
}
