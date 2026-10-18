import { useCallback, useRef, useState } from 'react'

/**
 * Tooltip plumbing shared by every chart.
 *
 * `ref` goes on the positioned wrapper. Each hit target gets `track(event, content)`
 * for the pointer, and — so the same values reach keyboard users — is focusable with
 * `onFocus={(e) => show(e.currentTarget, content)}`. `clear` goes on the wrapper's
 * onPointerLeave and each target's onBlur. The `Tip` component clamps the box inside
 * the wrapper, so it never pushes the page sideways on a phone.
 */
export default function useTip() {
  const ref = useRef(null)
  const [tip, setTip] = useState(null)

  const track = useCallback((event, content) => {
    const box = ref.current?.getBoundingClientRect()
    if (!box) return
    setTip({ x: event.clientX - box.left, y: event.clientY - box.top, content })
  }, [])

  const show = useCallback((el, content) => {
    const box = ref.current?.getBoundingClientRect()
    const r = el?.getBoundingClientRect?.()
    if (!box || !r) return
    setTip({ x: r.left + r.width / 2 - box.left, y: r.top + Math.min(r.height / 2, 40) - box.top, content })
  }, [])

  const clear = useCallback(() => setTip(null), [])

  return { ref, tip, track, show, clear }
}
