import { useEffect, useState } from 'react'

/** Live `matchMedia`. Layout breakpoints that change *what renders* use this, not CSS alone. */
export default function useMedia(query) {
  const [match, setMatch] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    if (!window.matchMedia) return undefined
    const mq = window.matchMedia(query)
    const on = () => setMatch(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])

  return match
}
