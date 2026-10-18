import { DATA_AS_OF } from '../data/tickers.js'

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
]
const DAY = 86400000
const YEAR = 365.25 * DAY

/**
 * `DATA_AS_OF` is written for people ('6 October 2026'), and `Date.parse` reads that
 * in local time, which moves the day for anyone east of UTC. Parse it by hand, as UTC.
 */
export function parseDay(s) {
  if (!s) return NaN
  const iso = /^(\d{4})-(\d{2})-(\d{2})/.exec(s)
  if (iso) return Date.UTC(+iso[1], +iso[2] - 1, +iso[3])
  const m = /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/.exec(s)
  if (!m) return NaN
  const mi = MONTHS.indexOf(m[2].toLowerCase())
  return mi < 0 ? NaN : Date.UTC(+m[3], mi, +m[1])
}

export const AS_OF_MS = parseDay(DATA_AS_OF)

/**
 * Years from the reference date to the end of a calendar year. Every return on the
 * page is annualised over this, not over a round five: from a 6 October 2026 price,
 * CY2030 is about 4.2 years away and CY2026 under three months.
 */
export function yearsTo(calendarYear) {
  if (!isFinite(AS_OF_MS)) return calendarYear - 2025
  return (Date.UTC(calendarYear, 11, 31) - AS_OF_MS) / YEAR
}

/** Whole days since the reference date, against the viewer's clock. */
export function daysSince(ms = AS_OF_MS, now = Date.now()) {
  return isFinite(ms) ? Math.max(0, Math.floor((now - ms) / DAY)) : NaN
}

const SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** '2026-10-14' → '14 Oct'; adds the year only when it is not the reference year. */
export function shortDate(s) {
  const ms = parseDay(s)
  if (!isFinite(ms)) return s || ''
  const d = new Date(ms)
  const sameYear = isFinite(AS_OF_MS) && new Date(AS_OF_MS).getUTCFullYear() === d.getUTCFullYear()
  return `${d.getUTCDate()} ${SHORT[d.getUTCMonth()]}${sameYear ? '' : ` ${d.getUTCFullYear()}`}`
}

export const AS_OF_SHORT = isFinite(AS_OF_MS) ? shortDate(new Date(AS_OF_MS).toISOString()) : DATA_AS_OF
