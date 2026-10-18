import { useCallback, useEffect, useState } from 'react'

/*
 * System / light / dark. Kept in its own localStorage key, outside storage.js: it is
 * a per-browser display preference, not part of the model. index.html applies the
 * same key from an inline script before first paint, so a forced theme never flashes.
 */
const KEY = 'adstack2030.theme'
export const THEMES = ['system', 'light', 'dark']

function apply(theme) {
  const root = document.documentElement
  if (theme === 'light' || theme === 'dark') root.dataset.theme = theme
  else delete root.dataset.theme
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const t = localStorage.getItem(KEY)
      return THEMES.includes(t) ? t : 'system'
    } catch {
      return 'system'
    }
  })

  useEffect(() => {
    apply(theme)
    try {
      if (theme === 'system') localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, theme)
    } catch {
      // Not remembered; still applied for this visit.
    }
  }, [theme])

  const cycle = useCallback(
    () => setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]),
    [],
  )

  return [theme, setTheme, cycle]
}
