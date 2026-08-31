/** Round an axis maximum up to a readable step so gridlines land on tidy numbers. */
export function niceMax(v) {
  if (!isFinite(v) || v <= 0) return 10
  const magnitude = Math.pow(10, Math.floor(Math.log10(v)))
  for (const step of [1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10]) {
    if (v <= step * magnitude) return step * magnitude
  }
  return 10 * magnitude
}

export const axisLabel = (v) => `$${Math.round(v).toLocaleString('en-US')}`

export const QUARTER_TICKS = [0, 1, 2, 3, 4]

/**
 * Tidy tick positions spanning `lo`..`hi`, for axes that cross zero (the ranking
 * chart runs from negative to positive annualised return, so `niceMax` alone is not
 * enough). Returns the widened domain along with the ticks inside it.
 */
export function niceTicks(lo, hi, target = 7) {
  const span = Math.max(hi - lo, 1e-9)
  const raw = span / target
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const step = [1, 2, 2.5, 5, 10].map((s) => s * mag).find((s) => s >= raw) ?? 10 * mag

  const min = Math.floor(lo / step) * step
  const max = Math.ceil(hi / step) * step
  const ticks = []
  for (let i = 0; min + i * step <= max + step / 2; i++) ticks.push(min + i * step)

  return { ticks, min, max }
}

export const pctAxisLabel = (v) => `${Math.round(v * 100)}%`
