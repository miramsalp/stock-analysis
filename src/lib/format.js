const DASH = '—'
const NM = 'n/m'

/*
 * Two different blanks. `null`/`undefined` means "no value here" and prints a dash;
 * a non-finite number (the model's NaN) means "computed, but not meaningful" — a P/E
 * on a loss, a return from a zero cost — and prints n/m, so the reader can tell an
 * empty cell from an answer the model declines to give.
 */
const blank = (v) => (v == null ? DASH : NM)
const ok = (v) => typeof v === 'number' && Number.isFinite(v)

export const nf = (v, dp = 2) =>
  !ok(v)
    ? blank(v)
    : v.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp })

export const money = (v, dp = 2) => (!ok(v) ? blank(v) : (v < 0 ? '−$' : '$') + nf(Math.abs(v), dp))

/** Price with sensible precision: cents under $1,000, whole dollars above. */
export const price = (v) => money(v, ok(v) && Math.abs(v) >= 1000 ? 0 : 2)

export const bil = (v) => (!ok(v) ? blank(v) : `${v < 0 ? '−' : ''}$${nf(Math.abs(v), 2)} B`)

export const sgnPct = (v, dp = 1) =>
  !ok(v) ? blank(v) : `${v >= 0 ? '+' : '−'}${nf(Math.abs(v) * 100, dp)}%`

export const sgnMoney = (v, dp = 0) =>
  !ok(v) ? blank(v) : `${v >= 0 ? '+$' : '−$'}${nf(Math.abs(v), dp)}`

export const mult = (v) => (!ok(v) ? blank(v) : `${nf(v, 1)}x`)

/** Semantic class for a signed number. Zero and n/m are neutral, never green. */
export const tone = (v) => (!ok(v) || v === 0 ? '' : v > 0 ? 'pos' : 'neg')

/** ▲ / ▼ so direction never rests on colour alone. */
export const arrow = (v) => (!ok(v) || v === 0 ? '' : v > 0 ? '▲' : '▼')

/** Axis label whose precision follows the tick step, so $1.875 is never printed as $2. */
export function axisMoney(v, step) {
  let dp = 0
  while (dp < 2 && Math.abs(step * 10 ** dp - Math.round(step * 10 ** dp)) > 1e-6) dp++
  const a = Math.abs(v)
  const s = a >= 10000 ? `${nf(a / 1000, a % 1000 ? 1 : 0)}k` : nf(a, dp)
  return `${v < -1e-9 ? '−' : ''}$${s}`
}

export const pctAxis = (v) => `${v < -1e-9 ? '−' : ''}${Math.round(Math.abs(v) * 100)}%`
