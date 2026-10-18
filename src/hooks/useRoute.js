import { useCallback, useEffect, useState } from 'react'

import { TICKERS } from '../data/tickers.js'

/**
 * A hash router in a page's worth of code — no dependency, and the URL is the state:
 *
 *   #/APP                    company, overview tab
 *   #/APP/valuation          company, one tab
 *   #/APP/drivers?focus=growth   …and put the caret in that row's first cell
 *   #/compare?basis=bear&sector=semis&sort=since
 *   #/news?kind=earnings
 *
 * Every navigation is a real history entry, so Back undoes a switch and any view can
 * be linked or bookmarked.
 */
export const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'scenarios', label: 'Scenarios', editable: true },
  { key: 'drivers', label: 'Drivers', editable: true },
  { key: 'valuation', label: 'Valuation', editable: true },
  { key: 'catalysts', label: 'Catalysts & news' },
]
const TAB_KEYS = TABS.map((t) => t.key)

export function parseHash(hash) {
  const raw = (hash || '').replace(/^#\/?/, '')
  const [path, qs = ''] = raw.split('?')
  const query = Object.fromEntries(new URLSearchParams(qs))
  const [head = '', sub = ''] = path.split('/').map((s) => decodeURIComponent(s))

  if (head === 'compare') return { view: 'compare', query }
  if (head === 'news') return { view: 'news', query }

  const ticker = TICKERS.find((k) => k === head.toUpperCase()) || null
  const tab = TAB_KEYS.includes(sub) ? sub : 'overview'
  return { view: 'company', ticker, tab, query }
}

export function hrefOf(route) {
  const q = new URLSearchParams(
    Object.entries(route.query || {}).filter(([, v]) => v != null && v !== ''),
  ).toString()
  const tail = q ? `?${q}` : ''
  if (route.view === 'compare') return `#/compare${tail}`
  if (route.view === 'news') return `#/news${tail}`
  const tab = route.tab && route.tab !== 'overview' ? `/${route.tab}` : ''
  return `#/${route.ticker}${tab}${tail}`
}

export default function useRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const on = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const go = useCallback((next, { replace = false } = {}) => {
    const h = hrefOf(next)
    if (h === window.location.hash) return
    if (replace) {
      window.history.replaceState(null, '', h)
      setRoute(parseHash(h))
    } else {
      window.location.hash = h
    }
  }, [])

  return [route, go]
}
