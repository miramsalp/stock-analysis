import { sectorVar } from '../../data/tickers.js'
import useTip from '../../hooks/useTip.js'
import useWidth from '../../hooks/useWidth.js'
import { money, pctAxis, sgnPct } from '../../lib/format.js'
import { niceTicks, scale, tickCount } from './chartUtils.js'
import Tip from './Tip.jsx'

const T = 26
const B = 30
const ROW_H = 26
const BAR_H = 10

/**
 * The ranked names as annualised-return spans, bear end to bull end, with a solid
 * marker at whichever basis is doing the ranking.
 *
 * A bar chart of the ranking metric alone would say the top name is the best pick.
 * The span says something truer: two names can share a metric and not share a risk,
 * and the widest bars are the ones the model is least sure about.
 *
 * Pointer tooltips only; every value here is also in the sortable table, which is the
 * keyboard and screen-reader path (`describedBy`).
 */
export default function RankChart({ rows, basis, describedBy }) {
  const { ref, tip, track, clear } = useTip()
  const width = useWidth(ref)

  const W = Math.max(300, width)
  const narrow = W < 520
  const L = narrow ? 64 : 92
  const R = narrow ? 58 : 76
  const H = T + B + Math.max(1, rows.length) * ROW_H

  const fin = (v) => (Number.isFinite(v) ? v : 0)
  const lo = Math.min(0, ...rows.map((r) => Math.min(fin(r.ret.bear), fin(r.ret[basis]))))
  const hi = Math.max(0, ...rows.map((r) => Math.max(fin(r.ret.bull), fin(r.ret[basis]))))
  const { ticks, min, max } = niceTicks(lo, hi, tickCount(W - L - R, 80))
  const x = scale(min, max, L, W - R)

  return (
    <div className="chart-wrap" ref={ref} onPointerLeave={clear}>
      <Tip tip={tip} />
      <svg
        className="chart"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Annualised return to 2030 for ${rows.length} names, bear to bull, ranked on ${basis}. Values are in the table.`}
        aria-describedby={describedBy}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line className="gridline" x1={x(t)} x2={x(t)} y1={T} y2={H - B} />
            <text className="axis-t" x={x(t)} y={H - B + 18} textAnchor="middle">
              {pctAxis(t)}
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
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <text className="axis-t" x={x(0)} y={T - 12} textAnchor="middle" fill="var(--ink-2)">
          today
        </text>

        {rows.map((r, i) => {
          const y = T + i * ROW_H
          const mid = y + ROW_H / 2
          const b0 = fin(r.ret.bear)
          const b1 = fin(r.ret.bull)
          const x1 = x(Math.min(b0, b1))
          const x2 = x(Math.max(b0, b1))
          const colour = sectorVar(r.sector)
          const m = r.ret[basis]

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
              {Number.isFinite(m) ? (
                <rect x={x(m) - 2} y={mid - 9} width="4" height="18" rx="2" fill={colour} />
              ) : null}

              <text className="cat-t" x={L - 10} y={mid + 4} textAnchor="end">
                {narrow ? r.key : `${r.rank} · ${r.key}`}
              </text>
              <text className="val-t" x={W - R + 8} y={mid + 4}>
                {sgnPct(m)}
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
                      <div className="b">{sgnPct(m)} a year</div>
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
