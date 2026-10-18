import { useEffect, useMemo, useRef, useState } from 'react'

import { matchScore } from '../lib/book.js'
import { price } from '../lib/format.js'
import { Move } from './CompanyHeader.jsx'
import { Swatch } from './Primitives.jsx'

/**
 * `/` or Ctrl/⌘+K. Fuzzy search over ticker, name and sector, plus the page's actions.
 * A native <dialog>, so focus is trapped and Esc closes it; focus returns to whatever
 * opened it.
 */
export default function CommandPalette({ open, onClose, rows, order, actions, onPick }) {
  const ref = useRef(null)
  const input = useRef(null)
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)

  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (open && !dlg.open) {
      dlg.showModal()
      input.current?.focus()
    }
    if (!open && dlg.open) dlg.close()
  }, [open])

  const results = useMemo(() => {
    const companies = order
      .map((k) => ({ type: 'co', key: k, r: rows[k], score: matchScore(rows[k], q) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
    const s = q.trim().toLowerCase()
    const acts = actions
      .filter((a) => !s || a.label.toLowerCase().includes(s) || a.keywords?.includes(s))
      .map((a) => ({ type: 'act', key: a.id, a }))
    return q ? [...companies.slice(0, 12), ...acts] : [...acts, ...companies]
  }, [q, rows, order, actions])

  const choose = (item) => {
    if (!item) return
    onClose()
    setQ('')
    setSel(0)
    if (item.type === 'co') onPick(item.key)
    else item.a.run()
  }

  const onKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSel((i) => Math.min(results.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSel((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      choose(results[sel])
    }
  }

  useEffect(() => {
    document.getElementById(`pal-${sel}`)?.scrollIntoView({ block: 'nearest' })
  }, [sel])

  return (
    <dialog
      ref={ref}
      className="palette"
      aria-label="Search companies and actions"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
    >
      <div className="pal-box">
        <input
          ref={input}
          className="pal-input"
          role="combobox"
          aria-expanded="true"
          aria-controls="pal-list"
          aria-activedescendant={results.length ? `pal-${sel}` : undefined}
          aria-autocomplete="list"
          placeholder="Ticker, company, sector or action…"
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setSel(0)
          }}
          onKeyDown={onKey}
          autoComplete="off"
          spellCheck={false}
        />
        <ul id="pal-list" role="listbox" className="pal-list" aria-label="Results">
          {results.map((it, i) => (
            <li
              key={`${it.type}-${it.key}`}
              id={`pal-${i}`}
              role="option"
              aria-selected={i === sel}
              className={`pal-item${i === sel ? ' on' : ''}`}
              onPointerMove={() => setSel(i)}
              onClick={() => choose(it)}
            >
              {it.type === 'co' ? (
                <>
                  <Swatch sector={it.r.sector} />
                  <span className="pi-t">{it.key}</span>
                  <span className="pi-n">{it.r.name}</span>
                  <span className="pi-s">{it.r.sectorLabel}</span>
                  <span className="pi-p">{price(it.r.price)}</span>
                  <span className="pi-m">
                    <Move move={it.r.move} />
                  </span>
                </>
              ) : (
                <>
                  <span className="pi-act">Action</span>
                  <span className="pi-n">{it.a.label}</span>
                  {it.a.hint ? <kbd>{it.a.hint}</kbd> : null}
                </>
              )}
            </li>
          ))}
          {!results.length ? <li className="empty">Nothing matches “{q}”.</li> : null}
        </ul>
        <div className="pal-foot" aria-hidden="true">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> move
          </span>
          <span>
            <kbd>Enter</kbd> open
          </span>
          <span>
            <kbd>Esc</kbd> close
          </span>
        </div>
      </div>
    </dialog>
  )
}
