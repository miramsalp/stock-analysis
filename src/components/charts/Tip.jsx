import { useLayoutEffect, useRef } from 'react'

const PAD = 4

/**
 * Centred above the pointer, then clamped inside the chart wrapper: near either edge
 * it slides inward, and near the top it flips below the pointer. Positioned in a
 * layout effect so the clamp uses the tip's real rendered size.
 */
export default function Tip({ tip }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !tip) return
    const wrap = el.offsetParent
    const W = wrap ? wrap.clientWidth : Infinity
    const w = el.offsetWidth
    const h = el.offsetHeight
    const left = Math.max(PAD, Math.min(tip.x - w / 2, W - w - PAD))
    const above = tip.y - h - 12
    el.style.left = `${left}px`
    el.style.top = `${above >= -8 ? above : tip.y + 16}px`
    el.style.visibility = 'visible'
  }, [tip])

  if (!tip) return null
  return (
    <div className="tip" role="tooltip" ref={ref} style={{ visibility: 'hidden' }}>
      {tip.content}
    </div>
  )
}
