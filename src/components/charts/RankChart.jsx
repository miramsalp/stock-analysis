import { sectorVar } from '../../data/tickers.js'
import useTip from '../../hooks/useTip.js'
import { money, sgnPct } from '../../lib/format.js'
import { niceTicks, pctAxisLabel } from './chartUtils.js'
import Tip from './Tip.jsx'

const W = 720
const L = 74
const R = 92
const T = 20
const B = 30
const ROW_H = 32
const BAR_H = 12

/**
 * The ranked names as annualised-return spans, bear end to bull end, with a solid
 * marker at whichever basis is doing the ranking.
 *
 * A bar chart of the ranking metric alone would say the top name is the best pick.
 * The span says something truer: two names can share a metric and not share a risk,
 * and the widest bars are the ones the model is least sure about.
 */
export default function RankChart({ rows, basis }) {
  const { ref, tip, track, clear } = useTip()

  const H = T + B + rows.length * ROW_H
  const lo = Math.min(0, ...rows.map((r) => Math.min(r.ret.bear, r.ret[basis])))
  const hi = Math.max(0, ...rows.map((r) => Math.max(r.ret.bull, r.ret[basis])))
  const { ticks, min, max } = niceTicks(lo, hi)
  const x = (v) => L + ((v - min) / (max - min)) * (W - L - R)

  return (
    <div className="chart-wrap" ref={ref} onPointerLeave={clear}>
      <Tip tip={tip} />
      <svg
        className="chart"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Annualised return to 2030 for the top ${rows.length} names, bear to bull`}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line className="gridline" x1={x(t)} x2={x(t)} y1={T} y2={H - B} />
            <text className="axis-t" x={x(t)} y={H - B + 16} textAnchor="middle">
              {pctAxisLabel(t)}
            </text>
          </g>
        ))}

        {/* Today's price: the line every span is measured against. */}
        <line
          x1={x(0)}
          x2={x(0)}
          y1={T - 8}
          y2={H - B + 2}
          stroke="var(--ink-3)"
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        <text className="axis-t" x={x(0)} y={T - 13} textAnchor="middle" fill="var(--ink-2)">
          today
        </text>

        {rows.map((r, i) => {
          const y = T + i * ROW_H
          const mid = y + ROW_H / 2
          const x1 = x(Math.min(r.ret.bear, r.ret.bull))
          const x2 = x(Math.max(r.ret.bear, r.ret.bull))
          const colour = sectorVar(r.sector)

          return (
            <g key={r.key}>
              <rect
                x={x1}
                y={mid - BAR_H / 2}
                width={Math.max(2, x2 - x1)}
                height={BAR_H}
                rx="3"
                fill={colour}
                opacity="0.28"
              />
              <rect x={x(r.ret[basis]) - 2} y={mid - 11} width="4" height="22" rx="2" fill={colour} />

              <text className="cat-t" x={L - 10} y={mid + 4} textAnchor="end">
                {i + 1} · {r.key}
              </text>
              <text className="val-t" x={W - R + 10} y={mid + 4}>
                {sgnPct(r.ret[basis])}
              </text>

              <rect
                x={L}
                y={y}
                width={W - L - R}
                height={ROW_H}
                fill="transparent"
                onPointerMove={(e) =>
                  track(
                    e,
                    <>
                      <div className="t">
                        {r.key} · {r.name}
                      </div>
                      <div className="b">{sgnPct(r.ret[basis])} a year</div>
                      <div className="s">
                        Bear {money(r.target.bear)} · Base {money(r.target.base)} · Bull{' '}
                        {money(r.target.bull)}
                      </div>
                      <div className="s">
                        From {money(r.price)} today · {sgnPct(r.ret.bear)} to {sgnPct(r.ret.bull)} a
                        year
                      </div>
                    </>,
                  )
                }
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
