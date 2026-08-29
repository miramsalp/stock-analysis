import { YEARS } from '../../data/tickers.js'
import useTip from '../../hooks/useTip.js'
import { money, nf, sgnPct } from '../../lib/format.js'
import { axisLabel, niceMax, QUARTER_TICKS } from './chartUtils.js'
import Tip from './Tip.jsx'

const W = 720
const H = 250
const L = 62
const R = 66
const T = 22
const B = 34

/**
 * One series — the midpoint P/E target by year — in the active ticker's colour, with
 * the EV/EBITDA cross-check as a recessive dotted line and the cost basis as a dashed
 * rule. Single series, so the title names it and no legend box is required.
 */
export default function PathChart({ d, c, ticker }) {
  const { ref, tip, track, clear } = useTip()

  const accent = `var(${d.cssvar})`
  const maxV = niceMax(Math.max(d.cost, ...c.priceMid, ...c.evPrice) * 1.06)
  const x = (i) => L + (i * (W - L - R)) / 4
  const y = (v) => H - B - (v / maxV) * (H - B - T)

  const points = c.priceMid.map((v, i) => [x(i), y(v)])
  const area =
    `M ${points[0][0]} ${H - B} ` +
    points.map(([px, py]) => `L ${px} ${py}`).join(' ') +
    ` L ${points[4][0]} ${H - B} Z`
  const line = points.map(([px, py], i) => `${i ? 'L' : 'M'} ${px} ${py}`).join(' ')
  const evLine = c.evPrice.map((v, i) => `${i ? 'L' : 'M'} ${x(i)} ${y(v)}`).join(' ')
  const hitWidth = (W - L - R) / 4
  const gradientId = `fade-${ticker}`

  return (
    <div className="chart-wrap" ref={ref} onPointerLeave={clear}>
      <Tip tip={tip} />
      <svg
        className="chart"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Midpoint P/E price target by year for ${ticker}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {QUARTER_TICKS.map((t) => {
          const v = (maxV * t) / 4
          return (
            <g key={t}>
              <line className="gridline" x1={L} x2={W - R} y1={y(v)} y2={y(v)} />
              <text className="axis-t" x={L - 10} y={y(v) + 4} textAnchor="end">
                {axisLabel(v)}
              </text>
            </g>
          )
        })}

        {YEARS.map((yr, i) => (
          <text key={yr} className="axis-t" x={x(i)} y={H - B + 18} textAnchor="middle">
            CY{yr}
          </text>
        ))}

        <path d={area} fill={`url(#${gradientId})`} />
        <path
          d={evLine}
          fill="none"
          stroke="var(--ink-3)"
          strokeWidth="1.5"
          strokeDasharray="2 4"
          strokeLinecap="round"
        />
        <path
          d={line}
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {d.cost > 0 && d.cost <= maxV ? (
          <g>
            <line
              x1={L}
              x2={W - R}
              y1={y(d.cost)}
              y2={y(d.cost)}
              stroke="var(--ink-3)"
              strokeWidth="2"
              strokeDasharray="5 4"
            />
            <text className="axis-t" x={W - R + 8} y={y(d.cost) + 4} fill="var(--ink-2)">
              cost
            </text>
          </g>
        ) : null}

        {points.map(([px, py], i) => (
          <circle
            key={i}
            cx={px}
            cy={py}
            r={i === 4 ? 5.5 : 4}
            fill={accent}
            stroke="var(--surface)"
            strokeWidth="2"
          />
        ))}
        <text className="val-t" x={points[4][0] + 10} y={points[4][1] - 10}>
          {money(c.priceMid[4], 0)}
        </text>

        {YEARS.map((yr, i) => (
          <rect
            key={yr}
            x={x(i) - hitWidth / 2}
            y={T}
            width={hitWidth}
            height={H - B - T}
            fill="transparent"
            onPointerMove={(e) =>
              track(
                e,
                <>
                  <div className="t">
                    CY{yr} · {nf(c.peMid, 1)}x midpoint
                  </div>
                  <div className="b">{money(c.priceMid[i])}</div>
                  <div className="s">
                    EPS {money(c.eps[i])} · band {money(c.priceLow[i], 0)}–
                    {money(c.priceHigh[i], 0)}
                  </div>
                  <div className="s">
                    {sgnPct(c.upside[i])} vs cost · IRR {sgnPct(c.irr[i])}
                  </div>
                  <div className="s">EV/EBITDA check {money(c.evPrice[i])}</div>
                </>,
              )
            }
          />
        ))}
      </svg>
    </div>
  )
}
