import { useMemo } from 'react'

import { DATA_AS_OF, SECTOR_LABEL, SECTORS } from '../data/tickers.js'
import { HORIZON } from '../lib/model.js'
import { money, nf, price, sgnPct, tone } from '../lib/format.js'
import { RANK_BASES, rankTickers, sortVal } from '../lib/rank.js'
import { CaveatBadges } from './CaveatBand.jsx'
import { Move } from './CompanyHeader.jsx'
import RankChart from './charts/RankChart.jsx'
import { Swatch } from './Primitives.jsx'

const COLS = [
  { key: 'rank', label: '#', get: (r) => -r.rank, num: true },
  { key: 'ticker', label: 'Company', get: (r) => r.key, text: true },
  { key: 'since', label: 'Since pull', get: (r) => r.move.pct, num: true },
  { key: 'price', label: 'Price', get: (r) => r.price, num: true },
  { key: 'bearT', label: 'Bear 2030', get: (r) => r.target.bear, num: true },
  { key: 'baseT', label: 'Base 2030', get: (r) => r.target.base, num: true },
  { key: 'bullT', label: 'Bull 2030', get: (r) => r.target.bull, num: true },
  { key: 'basis', label: '/ yr', get: (r, b) => r.ret[b], num: true },
  { key: 'bear', label: 'Bear / yr', get: (r) => r.ret.bear, num: true },
  { key: 'bull', label: 'Bull / yr', get: (r) => r.ret.bull, num: true },
  { key: 'cost', label: 'Base from your cost', get: (r) => r.costRet, num: true },
]

/**
 * Every company, side by side. Deliberately built to resist being read as a tip
 * sheet: the warning sits above the table rather than under it, the basis is a
 * control rather than a default, the bear columns sit next to the ranking column,
 * caveats are named in the row, and the unranked names are listed with their reasons
 * instead of dropped.
 */
export default function CompareView({ data, query, setQuery, active, onOpen }) {
  const basis = RANK_BASES.some((b) => b.key === query.basis) ? query.basis : 'expected'
  const sector = SECTOR_LABEL[query.sector] ? query.sector : ''
  const sort = COLS.some((c) => c.key === query.sort) ? query.sort : 'rank'
  const dir = query.dir === 'asc' ? 'asc' : 'desc'
  const basisMeta = RANK_BASES.find((b) => b.key === basis)

  const { rows, excluded } = useMemo(() => rankTickers(data, basis), [data, basis])
  const { survivors, n } = useMemo(() => {
    const top = 10
    const b = rankTickers(data, 'base').rows.slice(0, top).map((r) => r.key)
    const d = new Set(rankTickers(data, 'bear').rows.slice(0, top).map((r) => r.key))
    return { survivors: b.filter((k) => d.has(k)).length, n: top }
  }, [data])

  const filtered = sector ? rows.filter((r) => r.sector === sector) : rows
  const col = COLS.find((c) => c.key === sort)
  const sorted = [...filtered].sort((a, b) => {
    const va = col.get(a, basis)
    const vb = col.get(b, basis)
    const cmp = col.text ? String(va).localeCompare(String(vb)) : sortVal(va) - sortVal(vb)
    return (dir === 'asc' ? cmp : -cmp) || a.rank - b.rank
  })
  const chartRows = filtered

  const setSort = (key) => {
    const nextDir = sort === key ? (dir === 'desc' ? 'asc' : 'desc') : COLS.find((c) => c.key === key).text ? 'asc' : 'desc'
    setQuery({ sort: key === 'rank' && nextDir === 'desc' ? '' : key, dir: nextDir === 'desc' ? '' : nextDir })
  }

  const unranked = sector ? excluded.filter((e) => e.sector === sector) : excluded

  return (
    <div className="compare">
      <header className="view-head">
        <span className="eyebrow">Compare</span>
        <h2 tabIndex={-1}>Every company, run through its own three cases</h2>
        <p>
          Sorted by return a year to the end of 2030 (about {nf(HORIZON, 1)} years) from the market
          price on {DATA_AS_OF} — not from your cost, so the order is the same for everyone.
        </p>
      </header>

      <p className="note warn">
        <strong>This ranks your assumptions, not these companies.</strong> Every number below comes
        out of each company’s bear / base / bull cases, which are editable and mostly modelled
        judgement. Change one exit multiple and the order changes. Two tests before you believe it:
        only {survivors} of the top {n} on base case survive into the top {n} on downside, and the
        ranking is measured from the price on the reference date, so it goes stale the same day the
        prices do.
      </p>

      <div className="controls">
        <div className="seg" role="group" aria-label="Ranking basis">
          <span className="seg-label">Rank on</span>
          {RANK_BASES.map((b) => (
            <button
              key={b.key}
              type="button"
              className="chip"
              aria-pressed={b.key === basis}
              onClick={() => setQuery({ basis: b.key === 'expected' ? '' : b.key })}
            >
              {b.label}
            </button>
          ))}
          <span className="seg-hint">{basisMeta.hint}</span>
        </div>
        <div className="seg wrap" role="group" aria-label="Sector">
          <span className="seg-label">Sector</span>
          <button type="button" className="chip" aria-pressed={!sector} onClick={() => setQuery({ sector: '' })}>
            All
          </button>
          {SECTORS.map((s) => (
            <button
              key={s.key}
              type="button"
              className="chip sec"
              style={{ '--sec': `var(--sec-${s.key})` }}
              aria-pressed={sector === s.key}
              onClick={() => setQuery({ sector: s.key })}
            >
              <i aria-hidden="true" />
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="scroller panel flush" tabIndex={0} role="region" aria-labelledby="cmp-cap">
        <table className="rank-table">
          <caption id="cmp-cap" className="sr-only">
            {filtered.length} companies ranked on {basisMeta.label.toLowerCase()}, sortable by column
          </caption>
          <thead>
            <tr>
              {COLS.map((c) => {
                const on = c.key === sort
                return (
                  <th
                    key={c.key}
                    scope="col"
                    className={c.key === 'ticker' ? 'rowh' : undefined}
                    aria-sort={on ? (dir === 'asc' ? 'ascending' : 'descending') : undefined}
                  >
                    <button type="button" className="th-sort" onClick={() => setSort(c.key)}>
                      {c.key === 'basis' ? `${basisMeta.label} / yr` : c.label}
                      <span aria-hidden="true" className="sort-ind">
                        {on ? (dir === 'asc' ? '↑' : '↓') : ''}
                      </span>
                    </button>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={r.key} className={r.key === active ? 'is-active' : ''}>
                <td className="n rank-n">{r.rank}</td>
                <th scope="row" className="rowh rank-name">
                  <a href={`#/${r.key}`} className="rank-link" onClick={() => onOpen(r.key)}>
                    {/* On phones the # column is hidden and the rank rides in the sticky cell. */}
                    <span className="rank-inline" aria-hidden="true">
                      {r.rank}
                    </span>
                    <Swatch sector={r.sector} />
                    {r.key}
                  </a>
                  <span className="rank-sub">{r.name}</span>
                  {r.caveat ? <CaveatBadges kinds={r.caveat.kinds} max={2} /> : null}
                </th>
                <td className="n">
                  <Move move={r.move} />
                </td>
                <td className="n">{price(r.price)}</td>
                <td className="n">{money(r.target.bear, 0)}</td>
                <td className="n">{money(r.target.base, 0)}</td>
                <td className="n">{money(r.target.bull, 0)}</td>
                <td className={`n strong ${tone(r.ret[basis])}`}>{sgnPct(r.ret[basis])}</td>
                <td className={`n ${tone(r.ret.bear)}`}>{sgnPct(r.ret.bear)}</td>
                <td className={`n ${tone(r.ret.bull)}`}>{sgnPct(r.ret.bull)}</td>
                <td className={`n ${tone(r.costRet)}`}>{sgnPct(r.costRet)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="panel">
        <div className="panel-head">
          <h3>Bear-to-bull spread · ranked on {basisMeta.label.toLowerCase()}</h3>
          <span className="panel-aside">the widest bars are the least certain</span>
        </div>
        <RankChart rows={chartRows} basis={basis} describedBy="cmp-cap" />
        <div className="chart-legend">
          <span>
            <i className="span" />
            Bear to bull range
          </span>
          <span>
            <i className="tickmark" />
            {basisMeta.label} — what the order is built on
          </span>
          <span>
            <i className="dash" />
            Today&apos;s market price
          </span>
        </div>
      </section>

      {unranked.length ? (
        <section className="panel unranked" aria-labelledby="unr-h">
          <h3 id="unr-h">Not ranked</h3>
          <ul>
            {unranked.map((e) => (
              <li key={e.key}>
                <a href={`#/${e.key}`} className="rank-link" onClick={() => onOpen(e.key)}>
                  <Swatch sector={e.sector} />
                  {e.key}
                </a>{' '}
                {e.name} — {e.reason}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
