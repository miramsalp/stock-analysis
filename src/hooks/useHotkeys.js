import { useEffect, useLayoutEffect, useRef } from 'react'

const typing = (el) =>
  el &&
  (el.isContentEditable ||
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.tagName === 'SELECT')

/**
 * Single-key shortcuts, plus two-key `g x` sequences. Suppressed while focus is in a
 * field — every table cell on this page is an input, and typing "k" into a margin
 * must not switch company. `mod+k` is the one chord allowed from anywhere.
 *
 * `map` keys: 'j', '?', '[', 'g c', 'mod+k'. Handlers return nothing.
 */
export default function useHotkeys(map) {
  const ref = useRef(map)
  useLayoutEffect(() => {
    ref.current = map
  })

  useEffect(() => {
    let pending = null
    let timer = null

    const on = (e) => {
      const m = ref.current
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && m['mod+k']) {
        e.preventDefault()
        m['mod+k']()
        return
      }
      if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return
      if (typing(e.target) || document.querySelector('dialog[open]')) return

      const key = e.key
      if (pending) {
        const fn = m[`${pending} ${key}`]
        pending = null
        clearTimeout(timer)
        if (fn) {
          e.preventDefault()
          fn()
        }
        return
      }
      if (Object.keys(m).some((k) => k.startsWith(`${key} `))) {
        pending = key
        timer = setTimeout(() => {
          pending = null
        }, 900)
        return
      }
      const fn = m[key]
      if (fn) {
        e.preventDefault()
        fn()
      }
    }

    window.addEventListener('keydown', on)
    return () => {
      window.removeEventListener('keydown', on)
      clearTimeout(timer)
    }
  }, [])
}
