import { useState } from 'react'

import { DATA_AS_OF, DEFAULTS } from '../data/tickers.js'
import { daysSince, daysUntil, shortDate } from '../lib/dates.js'
import { newsOf, nextCatalyst } from '../lib/news.js'
import { watchKey } from '../lib/storage.js'
import NewsList from './NewsList.jsx'
import { PanelHead } from './Primitives.jsx'

function WatchItem({ id, item, checked, onToggle, open, onOpen }) {
  return (
    <li className={`watch-item${checked ? ' done' : ''}`}>
      <div className="watch-row">
        {/* The whole heading is the hit target, not a 17px box. */}
        <label className="watch-check">
          <input type="checkbox" checked={checked} onChange={onToggle} />
          <span className="watch-h">{item.h}</span>
        </label>
        <button
          type="button"
          className="icon-btn small"
          aria-expanded={open}
          aria-controls={id}
          aria-label={`${open ? 'Hide' : 'Show'} detail: ${item.h}`}
          onClick={onOpen}
        >
          {open ? '−' : '+'}
        </button>
      </div>
      <span className="metric">{item.m}</span>
      <div id={id} className="watch-detail" hidden={!open}>
        <p>
          <span className="lbl">Benchmark</span> {item.b}
        </p>
        <p>
          <span className="lbl hit">What to check</span> {item.c}
        </p>
      </div>
    </li>
  )
}

/**
 * Next catalyst, the quarter's watch list and dated, sourced news. Beside the company
 * at wide widths, a tab otherwise — never above the caveat or the numbers: a fresh
 * headline at the top of a page that resists being read as advice would undo that.
 */
export default function CatalystPanel({ ticker, d, checks, onToggle, onDriver, expanded = false }) {
  const [open, setOpen] = useState({})
  const items = newsOf(ticker)
  const next = nextCatalyst(ticker)
  const watch = Array.isArray(DEFAULTS[ticker].watch) ? DEFAULTS[ticker].watch : []
  const done = watch.filter((w) => checks[watchKey(ticker, w)]).length

  return (
    <div className="catalysts">
      {next ? (
        <section className="cat-sec next">
          <PanelHead title="Next catalyst" />
          <p className="next-date">
            {shortDate(next.date)}
            {daysUntil(next.ms) ? <span className="muted"> · in {daysUntil(next.ms)} days</span> : null}
          </p>
          <p className="muted">{next.label}</p>
        </section>
      ) : null}

      <section className="cat-sec" aria-labelledby={`watch-h-${ticker}`}>
        <PanelHead id={`watch-h-${ticker}`} title="What to check next quarter" aside={`${done} of ${watch.length} checked`} />
        <ul className="watch">
          {watch.map((item) => {
            const k = watchKey(ticker, item)
            const isOpen = open[k] ?? expanded
            return (
              <WatchItem
                key={k}
                id={`w-${k.replace(':', '-')}`}
                item={item}
                checked={Boolean(checks[k])}
                onToggle={() => onToggle(k)}
                open={isOpen}
                onOpen={() => setOpen((o) => ({ ...o, [k]: !isOpen }))}
              />
            )
          })}
        </ul>
        <p className="note">
          {DEFAULTS[ticker].sourced
            ? 'Benchmarks from the Q2 CY2026 release and management commentary. Re-anchor them each quarter — a benchmark from two quarters ago is no longer a test.'
            : `Structural benchmarks: each names the disclosure to read, not a figure ${d.name} has guided to. Replace it with the guided number when the release lands.`}
        </p>
      </section>

      <section className="cat-sec" aria-labelledby={`news-h-${ticker}`}>
        <PanelHead id={`news-h-${ticker}`} title="News that moves a driver" aside={`${items.length} items`} />
        <p className="note">
          Curated at the {DATA_AS_OF} pull ({daysSince()} days ago) — not a live feed. Only stories
          that touch an input in this model; each says which.
        </p>
        <NewsList items={items} onDriver={onDriver} empty="No news items in this data pull for this company." />
      </section>
    </div>
  )
}
