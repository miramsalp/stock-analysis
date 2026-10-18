import { DEFAULTS, TICKERS } from '../data/tickers.js'
import { parseDay } from './dates.js'

/**
 * News, as curated at the data pull. Prose, so it is read off DEFAULTS and never
 * persisted. Every accessor tolerates an entry with no `news` at all.
 */
export const NEWS_KINDS = {
  earnings: 'Earnings',
  guidance: 'Guidance',
  product: 'Product',
  deal: 'Deal',
  regulatory: 'Regulatory',
  analyst: 'Analyst',
  capital: 'Capital',
  macro: 'Macro',
}

/**
 * Which model input a story moves, read from its "why" line. Each tag deep-links to
 * the cell it names, so a headline lands on an assumption the reader can change
 * rather than on an opinion.
 */
const DRIVER_RULES = [
  { key: 'growth', label: 'Revenue growth', tab: 'drivers', re: /growth|revenue|top line|demand|bookings|backlog/i },
  { key: 'niMargin', label: 'Net margin', tab: 'drivers', re: /(?<!same )margin|profitab|opex|earnings power/i },
  { key: 'sharesOut', label: 'Share count', tab: 'drivers', re: /share count|dilut|buyback|repurchase|issuance|convertible|offering/i },
  { key: 'peLow', label: 'Exit multiple', tab: 'valuation', re: /multiple|P\/E|valuation|re-?rat/i },
  { key: 'netCash', label: 'Net cash', tab: 'valuation', re: /net cash|net debt|balance sheet|leverage|debt/i },
]

/** Only http(s) links are rendered as links; anything else is shown as plain source text. */
export const safeUrl = (u) => (typeof u === 'string' && /^https?:\/\//i.test(u) ? u : null)

export function driversOf(why) {
  if (typeof why !== 'string') return []
  return DRIVER_RULES.filter((r) => r.re.test(why)).slice(0, 2)
}

function clean(item, key) {
  if (!item || typeof item.h !== 'string') return null
  return {
    key,
    date: item.d || '',
    ms: parseDay(item.d),
    kind: NEWS_KINDS[item.k] ? item.k : null,
    headline: item.h,
    source: item.s || '',
    url: safeUrl(item.u),
    why: item.why || '',
    drivers: driversOf(item.why),
  }
}

const byDate = (a, b) => (isFinite(b.ms) ? b.ms : -Infinity) - (isFinite(a.ms) ? a.ms : -Infinity)

export function newsOf(key) {
  const list = DEFAULTS[key]?.news
  if (!Array.isArray(list)) return []
  return list
    .map((n) => clean(n, key))
    .filter(Boolean)
    .sort(byDate)
}

let book = null

/** Every company's items in one newest-first list, for the cross-book wire. */
export function allNews() {
  if (!book) book = TICKERS.flatMap(newsOf).sort(byDate)
  return book
}

/**
 * An entry may name its next scheduled event; none is required. Accepts either
 * `next: { d, h }` or a bare `nextEarnings` date.
 */
export function nextCatalyst(key) {
  const d = DEFAULTS[key]
  if (d?.next && d.next.d) return { date: d.next.d, ms: parseDay(d.next.d), label: d.next.h || 'Next event' }
  if (d?.nextEarnings) return { date: d.nextEarnings, ms: parseDay(d.nextEarnings), label: 'Next results' }
  return null
}
