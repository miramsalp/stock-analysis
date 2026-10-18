import { useMemo, useState } from 'react'

import { SECTORS } from '../data/tickers.js'
import { matchScore, orderTickers, RAIL_SORTS, RETURN_SORTS } from '../lib/book.js'
import { price, sgnPct, tone } from '../lib/format.js'
import { Move } from './CompanyHeader.jsx'

function Glyph({ caveat }) {
  if (!caveat) return <span className="glyph" aria-hidden="true" />
  return caveat.severe ? (
    <span className="glyph severe" title="Frame does not fit — unranked">
      !
    </span>
  ) : (
    <span className="glyph" title="Carries a caveat — read it first">
      ·
    </span>
  )
}

function RailRow({ r, active, onPick }) {
  return (
    <li>
      <a
        href={`#/${r.key}`}
        className="rail-row"
        aria-current={active ? 'page' : undefined}
        style={{ '--sec': `var(--sec-${r.sector})` }}
        onClick={onPick}
      >
        <span className="rr-t">{r.key}</span>
        <span className="rr-p">{price(r.price)}</span>
        <span className="rr-m">
          <Move move={r.move} />
        </span>
        {r.rankable ? (
          <span className={`rr-b ${tone(r.base)}`} title="Base case, a year, from today’s price">
            {!Number.isFinite(r.base) ? 'n/m' : Math.abs(r.base) < 0.005 ? '0%' : sgnPct(r.base, 0)}
          </span>
        ) : (
          <span className="rr-b" title="The earnings frame does not fit — not ranked">
            n/m
          </span>
        )}
        <Glyph caveat={r.caveat} />
        <span className="sr-only">
          {r.name}
          {r.caveat ? ', carries a caveat' : ''}
        </span>
      </a>
    </li>
  )
}

/**
 * Persistent navigation for the whole book: grouped by sector in the validated
 * palette order, filterable, sortable, and every row a real link (middle-click opens
 * a company in a new tab). The sort order here is also the order j / k step through.
 */
export default function SectorRail({ rows, active, sort, setSort, onPick, view }) {
  const [q, setQ] = useState('')
  const order = useMemo(() => orderTickers(rows, sort), [rows, sort])
  const shown = q ? order.filter((k) => matchScore(rows[k], q) > 0) : order

  const groups =
    sort === 'sector' && !q
      ? SECTORS.map((s) => ({ ...s, keys: shown.filter((k) => rows[k].sector === s.key) })).filter(
          (g) => g.keys.length,
        )
      : RETURN_SORTS.has(sort) && !q
        ? [
            { key: 'all', label: null, keys: shown.filter((k) => rows[k].rankable) },
            { key: 'unranked', label: 'Not ranked', keys: shown.filter((k) => !rows[k].rankable) },
          ].filter((g) => g.keys.length)
        : [{ key: 'all', label: null, keys: shown }]

  return (
    <nav className="rail" id="company-rail" aria-label="Companies">
      <div className="rail-views">
        <a href="#/compare" className="rail-view" aria-current={view === 'compare' ? 'page' : undefined}>
          Compare all
        </a>
        <a href="#/news" className="rail-view" aria-current={view === 'news' ? 'page' : undefined}>
          Newswire
        </a>
      </div>
      <div className="rail-tools">
        <label className="sr-only" htmlFor="rail-filter">
          Filter companies
        </label>
        <input
          id="rail-filter"
          className="rail-filter"
          type="search"
          placeholder={`Filter ${order.length} companies`}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoComplete="off"
        />
        <div className="rail-sort" role="group" aria-label="Sort companies by">
          {RAIL_SORTS.map((s) => (
            <button
              key={s.key}
              type="button"
              className="mini"
              aria-pressed={sort === s.key}
              onClick={() => setSort(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="rail-cols" aria-hidden="true">
          <span>Ticker</span>
          <span>Price</span>
          <span>Pull Δ</span>
          <span>Base</span>
        </div>
      </div>

      <div className="rail-list">
        {groups.map((g) => (
          <div key={g.key} className="rail-group">
            {g.label ? (
              <h2 className="rail-gh" style={{ '--sec': `var(--sec-${g.key})` }}>
                <i aria-hidden="true" />
                {g.label}
                <span className="count">{g.keys.length}</span>
              </h2>
            ) : null}
            <ul>
              {g.keys.map((k) => (
                <RailRow key={k} r={rows[k]} active={view === 'company' && k === active} onPick={onPick} />
              ))}
            </ul>
          </div>
        ))}
        {!shown.length ? <p className="empty">No company matches “{q}”.</p> : null}
        <p className="rail-note">
          Base is the base case a year from today’s price, not from your cost. Names the
          earnings frame does not fit show n/m and are never ranked.
        </p>
      </div>
    </nav>
  )
}
