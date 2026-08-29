const DASH = '—'

export const nf = (v, dp = 2) =>
  v == null || !isFinite(v)
    ? DASH
    : v.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp })

export const money = (v, dp = 2) =>
  !isFinite(v) ? DASH : (v < 0 ? '−$' : '$') + nf(Math.abs(v), dp)

export const bil = (v) => (!isFinite(v) ? DASH : `$${nf(v, 2)} B`)

export const sgnPct = (v, dp = 1) =>
  !isFinite(v) ? DASH : `${v >= 0 ? '+' : '−'}${nf(Math.abs(v) * 100, dp)}%`

export const sgnMoney = (v, dp = 0) =>
  !isFinite(v) ? DASH : `${v >= 0 ? '+$' : '−$'}${nf(Math.abs(v), dp)}`

export const mult = (v) => (!isFinite(v) ? DASH : `${nf(v, 1)}x`)

/** Semantic class name for a signed number. */
export const tone = (v) => (v >= 0 ? 'pos' : 'neg')
