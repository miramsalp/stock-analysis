import { useCallback, useRef, useState } from 'react'

/**
 * Pointer-following tooltip plumbing shared by both charts.
 *
 * `ref` goes on the positioned wrapper, `track(event, content)` on each hit target,
 * and `clear` on the wrapper's onPointerLeave.
 */
export default function useTip() {
  const ref = useRef(null)
  const [tip, setTip] = useState(null)

  const track = useCallback((event, content) => {
    const box = ref.current?.getBoundingClientRect()
    if (!box) return
    setTip({ x: event.clientX - box.left, y: event.clientY - box.top, content })
  }, [])

  const clear = useCallback(() => setTip(null), [])

  return { ref, tip, track, clear }
}
