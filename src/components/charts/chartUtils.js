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
