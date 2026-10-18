import { useEffect, useRef, useState } from 'react'

import { TICKERS } from '../data/tickers.js'
import { Staleness } from './CompanyHeader.jsx'

const THEME_LABEL = { system: 'System', light: 'Light', dark: 'Dark' }
const THEME_ICON = { system: '◐', light: '○', dark: '●' }

/**
 * Brand, search, the data date, theme and a menu for the two resets. The resets are
 * destructive-ish, so they sit behind the menu rather than beside navigation, and
 * each one offers an undo afterwards.
 */
export default function TopBar({ onSearch, onRail, railOpen, railToggleRef, theme, cycleTheme, active, onReset, onResetAll, onKeys }) {
  const [menu, setMenu] = useState(false)
  const wrap = useRef(null)

  useEffect(() => {
    if (!menu) return undefined
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !wrap.current?.contains(e.target)) setMenu(false)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [menu])

  return (
    <header className="topbar" inert={railOpen ? true : undefined}>
      <button
        type="button"
        ref={railToggleRef}
        className="icon-btn rail-toggle"
        onClick={onRail}
        aria-label="Show companies"
        aria-expanded={Boolean(railOpen)}
        aria-controls="company-rail"
      >
        ☰
      </button>
      <a className="brand" href={`#/${active}`}>
        <span className="mark" aria-hidden="true">
          ▚▚
        </span>
        <span className="brand-name">Ad Stack 2030</span>
        <span className="sub">a {TICKERS.length}-company equity desk</span>
      </a>

      <button type="button" className="search-pill" onClick={onSearch}>
        <span aria-hidden="true">⌕</span>
        <span className="sp-text">Search {TICKERS.length} companies</span>
        <kbd aria-hidden="true">/</kbd>
      </button>

      <span className="tb-asof">
        <Staleness />
      </span>

      <button
        type="button"
        className="ghost theme-btn"
        onClick={cycleTheme}
        aria-label={`Theme: ${THEME_LABEL[theme]}. Change theme`}
        title="Theme (t)"
      >
        <span aria-hidden="true">{THEME_ICON[theme]}</span>
        <span className="tb-label">{THEME_LABEL[theme]}</span>
      </button>

      <div className="menu-wrap" ref={wrap}>
        <button
          type="button"
          className="ghost"
          aria-haspopup="true"
          aria-expanded={menu}
          aria-controls="tb-menu"
          onClick={() => setMenu((m) => !m)}
        >
          <span aria-hidden="true">⋯</span>
          <span className="sr-only">More</span>
        </button>
        {menu ? (
          <div id="tb-menu" className="menu">
            <button
              type="button"
              onClick={() => {
                setMenu(false)
                onReset()
              }}
            >
              Reset {active}
              <span>Drivers, scenarios and position back to the shipped values</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMenu(false)
                onResetAll()
              }}
            >
              Reset all positions
              <span>Every company to 1 share at today’s price; assumptions untouched</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMenu(false)
                onKeys()
              }}
            >
              Keyboard shortcuts
              <span>Press ? anywhere</span>
            </button>
          </div>
        ) : null}
      </div>
    </header>
  )
}
