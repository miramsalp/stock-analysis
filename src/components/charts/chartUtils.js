/**
 * Tidy tick positions spanning `lo`..`hi`, widened to whole steps. Used by every
 * chart, because every chart here can cross zero: a loss-making year gives a negative
 * P/E price, and a bear case can sit below today. Returns the widened domain, the
 * ticks inside it and the step (so labels can carry exactly the precision it needs).
 */
export function niceTicks(lo, hi, target = 5) {
  const finite = [lo, hi].filter(Number.isFinite)
  if (finite.length < 2) return { ticks: [0, 1], min: 0, max: 1, step: 1 }
  let a = Math.min(...finite)
  let b = Math.max(...finite)
  // A degenerate domain (every value identical) would divide by zero downstream.
  if (b - a < 1e-9) {
    const pad = Math.abs(a) > 1e-9 ? Math.abs(a) * 0.5 : 1
    a -= pad
    b += pad
  }
  const raw = (b - a) / Math.max(1, target)
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const step = [1, 2, 2.5, 5, 10].map((s) => s * mag).find((s) => s >= raw) ?? 10 * mag

  const min = Math.floor(a / step + 1e-9) * step
  const max = Math.ceil(b / step - 1e-9) * step
  const ticks = []
  for (let i = 0; min + i * step <= max + step / 2; i++) ticks.push(+(min + i * step).toFixed(10))

  return { ticks, min, max, step }
}

/** Linear scale over a domain; collapses safely if the domain is empty. */
export const scale = (d0, d1, r0, r1) => (v) =>
  d1 === d0 ? (r0 + r1) / 2 : r0 + ((v - d0) / (d1 - d0)) * (r1 - r0)

/** Ticks to show at a given pixel length, roughly one every `px` pixels. */
export const tickCount = (len, px = 90) => Math.max(2, Math.min(8, Math.round(len / px)))
