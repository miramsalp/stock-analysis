import { SCEN_KEYS } from '../../data/tickers.js'
import useTip from '../../hooks/useTip.js'
import { bil, money, nf, sgnPct } from '../../lib/format.js'
import { axisLabel, niceMax, QUARTER_TICKS } from './chartUtils.js'
import Tip from './Tip.jsx'

const W = 720
const H = 200
const L = 62
const R = 96
const T = 14
const B = 30
const BAR_H = 30

/**
 * Bear / base / bull 2030 price per share. Bear-to-bull is a polarity, so the three
 * marks use the diverging red / blue / green trio rather than the page accent, and
 * every bar is direct-labelled so identity never rests on colour alone.
 */
export default function BandChart({ d, c }) {
  const { ref, tip, track, clear } = useTip()

  const maxV = niceMax(Math.max(d.cost, ...SCEN_KEYS.map((k) => c.scen[k].target)) * 1.02)
  const x = (v) => L + (v / maxV) * (W - L - R)
  const bandH = (H - T - B) / SCEN_KEYS.length

  return (
    <div className="chart-wrap" ref={ref} onPointerLeave={clear}>
      <Tip tip={tip} />
      <svg
        className="chart"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="2030 target price per share by scenario"
      >
        {QUARTER_TICKS.map((t) => {
          const v = (maxV * t) / 4
          return (
            <g key={t}>
              <line className="gridline" x1={x(v)} x2={x(v)} y1={T} y2={H - B} />
              <text className="axis-t" x={x(v)} y={H - B + 16} textAnchor="middle">
                {axisLabel(v)}
              </text>
            </g>
          )
        })}

        {SCEN_KEYS.map((k, i) => {
          const out = c.scen[k]
          const scen = d.scen[k]
          const y = T + i * bandH + (bandH - BAR_H) / 2
          const w = Math.max(0, x(out.target) - L)

          return (
            <g key={k}>
              <rect x={L} y={y} width={w} height={BAR_H} rx="4" fill={`var(--chart-${k})`} />
              <text className="cat-t" x={L - 10} y={y + BAR_H / 2 + 4} textAnchor="end">
                {scen.label.toUpperCase()}
              </text>
              <text className="val-t" x={L + w + 10} y={y + BAR_H / 2 + 4}>
                {money(out.target)}
              </text>

              <rect
                x={L}
                y={T + i * bandH}
                width={W - L - R}
                height={bandH}
                fill="transparent"
                onPointerMove={(e) =>
                  track(
                    e,
                    <>
                      <div className="t">{scen.label} case · 2030</div>
                      <div className="b">{money(out.target)}</div>
                      <div className="s">
                        {bil(scen.rev)} rev · {nf(scen.margin, 1)}% margin · {nf(scen.pe, 1)}x
                      </div>
                      <div className="s">
                        Position {money(out.value, 0)} · {sgnPct(out.roi)}
                      </div>
                    </>,
                  )
                }
              />
            </g>
          )
        })}

        {d.cost > 0 && d.cost <= maxV ? (
          <g>
            <line
              x1={x(d.cost)}
              x2={x(d.cost)}
              y1={T - 6}
              y2={H - B + 2}
              stroke="var(--ink-3)"
              strokeWidth="2"
              strokeDasharray="5 4"
            />
            <text
              className="axis-t"
              x={x(d.cost)}
              y={T - 11}
              textAnchor="middle"
              fill="var(--ink-2)"
            >
              cost {money(d.cost)}
            </text>
          </g>
        ) : null}
      </svg>
    </div>
  )
}
