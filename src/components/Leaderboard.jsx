import { useMemo, useState } from 'react'

import { SECTOR_LABEL, sectorVar } from '../data/tickers.js'
import { money, sgnPct, tone } from '../lib/format.js'
import { RANK_BASES, RANK_SIZES, rankTickers } from '../lib/rank.js'
import RankChart from './charts/RankChart.jsx'

/**
 * Which names the model currently likes, across the whole book.
 *
 * Every other section answers a question about one company. This one is comparative,
 * so it is deliberately built to resist being read as a tip sheet: the basis is a
 * control rather than a default, the bear column sits next to the winning column, and
 * names carrying a caveat are marked in the ranking itself.
 */
export default function Leaderboard({ data, active, onSelect }) {
  const [basis, setBasis] = useState('expected')
  const [size, setSize] = useState(5)

  const { rows, excluded } = useMemo(() => rankTickers(data, basis), [data, basis])
  const top = rows.slice(0, size)
  const basisMeta = RANK_BASES.find((b) => b.key === basis)

  // Named in the copy below: the ordering is only interesting if it actually moves.
  const baseOrder = useMemo(() => rankTickers(data, 'base').rows.slice(0, size), [data, size])
  const bearOrder = useMemo(() => rankTickers(data, 'bear').rows.slice(0, size), [data, size])
  const survivors = baseOrder.filter((r) => bearOrder.some((b) => b.key === r.key)).length

  return (
    <>
      <div className="rank-controls">
        <div className="seg" role="group" aria-label="Ranking basis">
          <span className="seg-label">Rank on</span>
          {RANK_BASES.map((b) => (
            <button
              key={b.key}
              type="button"
              className="chip"
              aria-pressed={b.key === basis}
              title={b.hint}
              onClick={() => setBasis(b.key)}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="seg" role="group" aria-label="How many names to show">
          <span className="seg-label">Show</span>
          {RANK_SIZES.map((n) => (
            <button
              key={n}
              type="button"
              className="chip"
              aria-pressed={n === size}
              onClick={() => setSize(n)}
            >
              Top {n}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="chart-head">
          <h3>
            Annualised return to CY2030 · ranked on {basisMeta.label.toLowerCase()}
          </h3>
          <span className="chart-note">{basisMeta.hint}</span>
        </div>
        <RankChart rows={top} basis={basis} />
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
      </div>

      <div className="scroller">
        <table className="rank-table">
          <thead>
            <tr>
              <th className="rowh" scope="col">
                #
              </th>
              <th scope="col">Company</th>
              <th scope="col">2030 base</th>
              <th scope="col">Expected 2030</th>
              <th scope="col">{basisMeta.label} / yr</th>
              <th scope="col">Bear / yr</th>
              <th scope="col">Bull / yr</th>
              <th scope="col">From your cost</th>
            </tr>
          </thead>
          <tbody>
            {top.map((r, i) => (
              <tr key={r.key} className={r.key === active ? 'is-active' : ''}>
                <td className="rowh rank-n">{i + 1}</td>
                <th scope="row" className="rank-name">
                  <button
                    type="button"
                    className="linkish"
                    style={{ '--sec': sectorVar(r.sector) }}
                    onClick={() => onSelect(r.key)}
                  >
                    <i />
                    {r.key}
                  </button>
                  <span className="rank-sub">
                    {r.name} · {SECTOR_LABEL[r.sector]}
                    {r.caveat ? (
                      <abbr className="flag" title="This name carries a caveat — read it in section 01 before trusting the ranking.">
                        caveat
                      </abbr>
                    ) : null}
                  </span>
                </th>
                <td className="n">{money(r.target.base)}</td>
                <td className="n">{money(r.weighted)}</td>
                <td className={`n strong ${tone(r.ret[basis])}`}>{sgnPct(r.ret[basis])}</td>
                <td className={`n ${tone(r.ret.bear)}`}>{sgnPct(r.ret.bear)}</td>
                <td className={`n ${tone(r.ret.bull)}`}>{sgnPct(r.ret.bull)}</td>
                <td className={`n ${tone(r.costRet)}`}>{sgnPct(r.costRet)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="note warn">
        <strong>This ranks your assumptions, not these companies.</strong> Every number above comes
        out of the scenario cards in section 04, which are editable and mostly modelled judgement.
        Change one exit multiple and the order changes. Two tests before you believe it: only{' '}
        {survivors} of the top {size} on base case survive into the top {size} on downside, and the
        ranking is measured from the market price on the reference date, so it goes stale the same
        day the prices do.
      </p>

      {excluded.length > 0 ? (
        <p className="note">
          <strong>Not ranked.</strong>{' '}
          {excluded.map((e) => `${e.key} — ${e.reason}`).join('; ')}.
        </p>
      ) : null}
    </>
  )
}
