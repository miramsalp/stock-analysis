import { useRef } from 'react'

import { price, sgnPct, tone } from '../lib/format.js'

/**
 * Sticky tab bar under the company header. Its left end carries the live base-case
 * target, so an edit in Drivers or Scenarios shows its result while you type — the
 * thing the old folds could not do, with inputs in one place and results scrolled
 * away above them. An amber dot marks any tab holding a value that differs from the
 * shipped defaults; edits save to this browser only.
 */
export default function Tabs({ tabs, active, onSelect, edited, ticker, base, panelId }) {
  const refs = useRef({})

  const onKey = (e) => {
    const i = tabs.findIndex((t) => t.key === active)
    let j = null
    if (e.key === 'ArrowRight') j = (i + 1) % tabs.length
    if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length
    if (e.key === 'Home') j = 0
    if (e.key === 'End') j = tabs.length - 1
    if (j == null) return
    e.preventDefault()
    onSelect(tabs[j].key)
    refs.current[tabs[j].key]?.focus()
  }

  return (
    <div className="tabbar">
      {/* On phones this wraps onto its own line above the tabs rather than hiding: it is
          the only result in view while the driver cells are being edited. */}
      <div className="tab-live" aria-hidden="true">
        <span className="tl-ticker">{ticker}</span>
        <span className="tl-k">Base 2030</span>
        <span className="tl-v">{price(base.target)}</span>
        <span className={`tl-r ${tone(base.cagr)}`}>{sgnPct(base.cagr)}/yr</span>
      </div>
      <div className="tabs" role="tablist" aria-label={`${ticker} sections`} onKeyDown={onKey}>
        {tabs.map((t) => {
          const on = t.key === active
          return (
            <button
              key={t.key}
              ref={(el) => {
                refs.current[t.key] = el
              }}
              type="button"
              role="tab"
              id={`tab-${t.key}`}
              aria-selected={on}
              aria-controls={panelId}
              tabIndex={on ? 0 : -1}
              className="tab"
              onClick={() => onSelect(t.key)}
            >
              {t.short ? (
                <>
                  <span className="t-long">{t.label}</span>
                  <span className="t-short" aria-hidden="true">
                    {t.short}
                  </span>
                </>
              ) : (
                t.label
              )}
              {edited[t.key] ? (
                <span className="dot" role="img" aria-label="edited — saved in this browser only" />
              ) : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}
