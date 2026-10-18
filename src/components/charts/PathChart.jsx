import { sectorVar, YEARS } from '../../data/tickers.js'
import useTip from '../../hooks/useTip.js'
import useWidth from '../../hooks/useWidth.js'
import { axisMoney, money, nf, price, sgnPct } from '../../lib/format.js'
import { niceTicks, scale, tickCount } from './chartUtils.js'
import Tip from './Tip.jsx'

const H = 260
const T = 18
const B = 34

/**
 * The midpoint P/E target by year in the company's sector colour, the low–high P/E
 * band as the shaded area around it (the real uncertainty, where a decorative fade
 * used to be), the EV/EBITDA cross-check as a recessive dotted line, and the cost
 * basis as a dashed rule.
 *
 * The y-domain crosses zero when any year does. A loss-making year (IREN's CY2026,
 * ASTS's first three) is honest GAAP output, so it is drawn below a labelled $0 rule
 * inside the plot — never through the year labels, never clamped away.
 */
export default function PathChart({ d, c, ticker }) {
  const { ref, tip, track, show, clear } = useTip()
  const width = useWidth(ref)

  const W = Math.max(300, width)
  const narrow = W < 520
  const L = narrow ? 50 : 62
  const R = narrow ? 44 : 66

  const accent = sectorVar(d.sector)
  const all = [...c.priceLow, ...c.priceHigh, ...c.evPrice, d.cost].filter(Number.isFinite)
  const { ticks, min, max, step } = niceTicks(Math.min(0, ...all), Math.max(0, ...all) * 1.04, tickCount(H - T - B, 52))
  const x = (i) => L + (i * (W - L - R)) / 4
  const y = scale(min, max, H - B, T)

  const ok = (i) => Number.isFinite(c.priceMid[i])
  const idx = YEARS.map((_, i) => i).filter(ok)
  const band =
    idx.length > 1
      ? idx.map((i, j) => `${j ? 'L' : 'M'} ${x(i)} ${y(c.priceHigh[i])}`).join(' ') +
        ' ' +
        [...idx].reverse().map((i) => `L ${x(i)} ${y(c.priceLow[i])}`).join(' ') +
        ' Z'
      : ''
  const line = idx.map((i, j) => `${j ? 'L' : 'M'} ${x(i)} ${y(c.priceMid[i])}`).join(' ')
  const evIdx = YEARS.map((_, i) => i).filter((i) => Number.isFinite(c.evPrice[i]))
  const evLine = evIdx.map((i, j) => `${j ? 'L' : 'M'} ${x(i)} ${y(c.evPrice[i])}`).join(' ')
  const hitWidth = (W - L - R) / 4
  const last = idx.includes(4) ? [x(4), y(c.priceMid[4])] : null
  const costY = d.cost > 0 ? y(d.cost) : null
  // Put the end label on whichever side of the point is further from the cost rule.
  const endBelow = last && costY != null && Math.abs(last[1] - 12 - costY) < 14

  const tipFor = (yr, i) => (
    <>
      <div className="t">
        CY{yr} · {nf(c.peMid, 1)}x midpoint
      </div>
      <div className="b">{money(c.priceMid[i])}</div>
      <div className="s">
        EPS {money(c.eps[i])} · band {money(c.priceLow[i], 0)} to {money(c.priceHigh[i], 0)}
      </div>
      <div className="s">
        {sgnPct(c.upside[i])} vs cost · IRR {sgnPct(c.irr[i])}
      </div>
      <div className="s">EV/EBITDA check {money(c.evPrice[i])}</div>
    </>
  )

  const summary = YEARS.map(
    (yr, i) => `CY${yr} ${money(c.priceMid[i], 0)} (band ${money(c.priceLow[i], 0)} to ${money(c.priceHigh[i], 0)})`,
  ).join('; ')

  return (
    <div className="chart-wrap" ref={ref} onPointerLeave={clear}>
      <Tip tip={tip} />
      <svg
        className="chart"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`${ticker} price at the midpoint P/E by year: ${summary}. EV/EBITDA cross-check and your cost ${price(d.cost)} also drawn.`}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line className={t === 0 ? 'zero-line' : 'gridline'} x1={L} x2={W - R} y1={y(t)} y2={y(t)} />
            <text className="axis-t" x={L - 8} y={y(t) + 4} textAnchor="end">
              {axisMoney(t, step)}
            </text>
          </g>
        ))}

        {YEARS.map((yr, i) => (
          <text key={yr} className="axis-t" x={x(i)} y={H - B + 20} textAnchor="middle">
            {narrow ? `’${String(yr).slice(2)}` : `CY${yr}`}
          </text>
        ))}

        {band ? <path d={band} fill={accent} opacity="0.16" /> : null}
        {evLine ? (
          <path
            d={evLine}
            fill="none"
            stroke="var(--ink-3)"
            strokeWidth="1.5"
            strokeDasharray="2 4"
            strokeLinecap="round"
          />
        ) : null}
        <path
          d={line}
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {costY != null && d.cost >= min && d.cost <= max ? (
          <g>
            <line
              x1={L}
              x2={W - R}
              y1={costY}
              y2={costY}
              stroke="var(--ink-3)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <text className="axis-t" x={W - R + 6} y={costY + 4} fill="var(--ink-2)">
              cost
            </text>
          </g>
        ) : null}

        {idx.map((i) => (
          <circle
            key={i}
            cx={x(i)}
            cy={y(c.priceMid[i])}
            r={i === 4 ? 5.5 : 4}
            fill={accent}
            stroke="var(--surface)"
            strokeWidth="2"
          />
        ))}
        {last ? (
          <text
            className="val-t"
            x={last[0]}
            y={endBelow ? last[1] + 22 : last[1] - 12}
            textAnchor="middle"
          >
            {money(c.priceMid[4], 0)}
          </text>
        ) : null}

        {YEARS.map((yr, i) => (
          <rect
            key={yr}
            className="hit"
            x={x(i) - hitWidth / 2}
            y={T}
            width={hitWidth}
            height={H - B - T}
            fill="transparent"
            tabIndex={0}
            aria-label={`CY${yr}: ${money(c.priceMid[i])} at ${nf(c.peMid, 1)}x, band ${money(c.priceLow[i], 0)} to ${money(c.priceHigh[i], 0)}, EV/EBITDA ${money(c.evPrice[i])}`}
            onPointerMove={(e) => track(e, tipFor(yr, i))}
            onFocus={(e) => show(e.currentTarget, tipFor(yr, i))}
            onBlur={clear}
          />
        ))}
      </svg>
    </div>
  )
}
