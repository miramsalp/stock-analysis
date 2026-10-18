import { DEFAULTS } from '../data/tickers.js'

/**
 * Price move between the previous pull and this one, read off DEFAULTS and never
 * persisted: a saved payload must not be able to freeze an old move. It is the change
 * between two snapshots of this model's data, not a live quote.
 */
export function moveOf(key) {
  const d = DEFAULTS[key]
  const now = d?.priceRef
  const prev = d?.pricePrev
  if (!(now > 0) || !(prev > 0)) return { now, prev: null, abs: null, pct: null }
  return { now, prev, abs: now - prev, pct: now / prev - 1 }
}
