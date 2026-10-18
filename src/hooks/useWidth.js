import { useLayoutEffect, useState } from 'react'

/**
 * The rendered width of `ref`'s element. Charts lay out in real pixels off this, so
 * an 11px label is 11px on a phone instead of a 720-wide viewBox shrunk to 4px.
 */
export default function useWidth(ref, fallback = 640) {
  const [width, setWidth] = useState(fallback)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const read = () => {
      const w = Math.round(el.getBoundingClientRect().width)
      if (w > 0) setWidth(w)
    }
    read()
    if (typeof ResizeObserver === 'undefined') return undefined
    const ro = new ResizeObserver(read)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])

  return width
}
