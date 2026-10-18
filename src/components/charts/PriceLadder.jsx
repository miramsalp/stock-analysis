import { useRef } from 'react'

import { SCEN_KEYS } from '../../data/tickers.js'
import useTip from '../../hooks/useTip.js'
import useWidth from '../../hooks/useWidth.js'
import { axisMoney, bil, money, nf, price, sgnPct } from '../../lib/format.js'
import { niceTicks, scale, tickCount } from './chartUtils.js'
import Tip from './Tip.jsx'

const H = 156
const AXIS_Y = 84
const L = 14
const R = 14

/**
 * Push labels apart along one row so none overlap, keeping them inside the plot and
 * as close to their marks as the gap allows. Labels keep their input order.
 */
function spread(items, gap, lo, hi) {
  const out = items.map((it) => ({ ...it, lx: Math.max(lo, Math.min(hi, it.x)) }))
  for (let i = 1; i < out.length; i++) out[i].lx = Math.max(out[i].lx, out[i - 1].lx + gap)
  for (let i = out.length - 1; i >= 0; i--) {
    const cap = i === out.length - 1 ? hi : out[i + 1].lx - gap
    out[i].lx = Math.min(out[i].lx, cap)
  }
  return out
}

/**
 * Today's price against the three 2030 cases, on one dollar axis.
 *
 * Replaces four stat tiles, three case tiles and a bar chart that between them said
 * the same three numbers three times. The question the page answers is "where is it
 * now, against the range of where it could be" — a position on a line, not a bar
 * length. Bear / base / bull keep the diverging red / blue / green trio; today, the
 * previous pull and your cost are ink, so the only colour on the axis is polarity.
 * A case below $0 (a loss-making exit) is drawn left of zero, not clamped.
 */
export default function PriceLadder({ d, c, prev, misfit, compact = false }) {
  const { ref, tip, track, show, clear } = useTip()
  const width = useWidth(ref)
  const svgRef = useRef(null)

  const today = d.priceRef
  const cost = d.cost
  const showCost = cost > 0 && Math.abs(cost - today) / today > 0.001
  const cases = SCEN_KEYS.map((k) => ({ k, label: d.scen[k].label, v: c.scen[k].target, out: c.scen[k] }))
    .filter((s) => Number.isFinite(s.v))
  const values = [today, ...cases.map((s) => s.v), showCost ? cost : null, prev].filter(
    (v) => Number.isFinite(v) && v != null,
  )

  const W = Math.max(280, width)
  const { ticks, min, max, step } = niceTicks(Math.min(0, ...values), Math.max(...values), tickCount(W - L - R, 110))
  const x = scale(min, max, L, W - R)

  const caseLabels = spread(
    [...cases].sort((a, b) => a.v - b.v).map((s) => ({ ...s, x: x(s.v) })),
    compact ? 74 : 86,
    L + 34,
    W - R - 34,
  )
  const bear = cases.find((s) => s.k === 'bear')
  const bull = cases.find((s) => s.k === 'bull')

  const marks = [{ key: 'today', x: x(today), label: `today ${price(today)}` }]
  if (showCost) marks.push({ key: 'cost', x: x(cost), label: `your cost ${price(cost)}` })
  const markLabels = spread(
    marks.sort((a, b) => a.x - b.x),
    120,
    L + 56,
    W - R - 56,
  )

  const summary =
    `Today ${price(today)}` +
    (prev ? `, previous pull ${price(prev)}` : '') +
    (showCost ? `, your cost ${price(cost)}` : '') +
    '. 2030: ' +
    cases.map((s) => `${s.label} ${price(s.v)} (${sgnPct(s.out.cagr)} a year)`).join(', ') +
    '.'

  const caseTip = (s) => (
    <>
      <div className="t">{s.label} case · 2030</div>
      <div className="b">{money(s.v)}</div>
      <div className="s">
        {bil(d.scen[s.k].rev)} rev · {nf(d.scen[s.k].margin, 1)}% margin · {nf(d.scen[s.k].pe, 1)}x
      </div>
      <div className="s">
        {sgnPct(s.out.cagr)} a year · {sgnPct(s.out.roi)} total from {price(cost)}
      </div>
    </>
  )

  return (
    <div className={`chart-wrap ladder${misfit ? ' misfit' : ''}`} ref={ref} onPointerLeave={clear}>
      <Tip tip={tip} />
      <svg
        ref={svgRef}
        className="chart"
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Price ladder. ${summary}`}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line className="gridline" x1={x(t)} x2={x(t)} y1={AXIS_Y - 30} y2={AXIS_Y + 30} />
            <text className="axis-t" x={x(t)} y={H - 6} textAnchor="middle">
              {axisMoney(t, step)}
            </text>
          </g>
        ))}

        <line className="axis-line" x1={L} x2={W - R} y1={AXIS_Y} y2={AXIS_Y} />
        {min < 0 ? <line className="zero-line" x1={x(0)} x2={x(0)} y1={AXIS_Y - 34} y2={AXIS_Y + 34} /> : null}

        {bear && bull ? (
          <rect
            className="ladder-range"
            x={Math.min(x(bear.v), x(bull.v))}
            y={AXIS_Y - 5}
            width={Math.max(2, Math.abs(x(bull.v) - x(bear.v)))}
            height={10}
            rx={5}
          />
        ) : null}

        {prev ? (
          <g className="ladder-prev">
            <line x1={x(prev)} x2={x(prev)} y1={AXIS_Y - 12} y2={AXIS_Y + 12} />
          </g>
        ) : null}

        {showCost ? (
          <line className="ladder-cost" x1={x(cost)} x2={x(cost)} y1={AXIS_Y - 18} y2={AXIS_Y + 22} />
        ) : null}
        <line className="ladder-today" x1={x(today)} x2={x(today)} y1={AXIS_Y - 18} y2={AXIS_Y + 22} />

        {markLabels.map((m) => (
          <g key={m.key}>
            {Math.abs(m.lx - m.x) > 2 ? (
              <path className="leader" d={`M ${m.x} ${AXIS_Y + 22} L ${m.lx} ${AXIS_Y + 30}`} />
            ) : null}
            <text className={`mark-t ${m.key}`} x={m.lx} y={AXIS_Y + 44} textAnchor="middle">
              {m.label}
            </text>
          </g>
        ))}

        {caseLabels.map((s) => (
          <g key={s.k}>
            {Math.abs(s.lx - s.x) > 2 ? (
              <path className="leader" d={`M ${s.x} ${AXIS_Y - 9} L ${s.lx} ${AXIS_Y - 22}`} />
            ) : null}
            <circle
              cx={s.x}
              cy={AXIS_Y}
              r={6}
              fill={`var(--chart-${s.k})`}
              stroke="var(--surface)"
              strokeWidth="2"
            />
            <text className="case-k" x={s.lx} y={AXIS_Y - 50} textAnchor="middle">
              {s.label.toUpperCase()}
            </text>
            <text className="case-v" x={s.lx} y={AXIS_Y - 30} textAnchor="middle">
              {price(s.v)}
            </text>
            <rect
              className="hit"
              x={s.lx - 40}
              y={AXIS_Y - 66}
              width={80}
              height={76}
              fill="transparent"
              tabIndex={0}
              aria-label={`${s.label} case 2030: ${price(s.v)}, ${sgnPct(s.out.cagr)} a year`}
              onPointerMove={(e) => track(e, caseTip(s))}
              onFocus={(e) => show(e.currentTarget, caseTip(s))}
              onBlur={clear}
            />
          </g>
        ))}
      </svg>
      {misfit ? <span className="ladder-flag">Not an earnings story — read the note above first</span> : null}
    </div>
  )
}
