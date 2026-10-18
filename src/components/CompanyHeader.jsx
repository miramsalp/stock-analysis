import { DATA_AS_OF, SECTOR_LABEL } from '../data/tickers.js'
import { AS_OF_SHORT, daysSince, shortDate } from '../lib/dates.js'
import { arrow, nf, price, sgnPct, tone } from '../lib/format.js'
import { nextCatalyst } from '../lib/news.js'
import CaveatBand from './CaveatBand.jsx'
import { Swatch } from './Primitives.jsx'

/** "as of 6 Oct · 13 days old" — muted while fresh, amber after 14 days, "stale" after 30. */
export function Staleness({ compact = false }) {
  const days = daysSince()
  if (!Number.isFinite(days)) return <span className="stale-chip">as of {DATA_AS_OF}</span>
  const level = days > 30 ? 'stale' : days > 14 ? 'aging' : 'fresh'
  return (
    <span
      className={`stale-chip ${level}`}
      title={`Prices are the close before ${DATA_AS_OF}. This is a snapshot, not a feed.`}
    >
      {compact ? '' : 'as of '}
      {AS_OF_SHORT} · {days === 0 ? 'today' : `${days}d old`}
      {level === 'stale' ? ' · stale' : ''}
    </span>
  )
}

/** "▲ +4.1%" with the dollar move on wider layouts. Renders a dash when there is no previous price. */
export function Move({ move, long = false }) {
  if (!Number.isFinite(move?.pct)) {
    return <span className="move none">{long ? 'no previous pull to compare' : '—'}</span>
  }
  return (
    <span className={`move ${tone(move.pct)}`}>
      <span aria-hidden="true">{arrow(move.pct)}</span>
      {long ? ` ${move.abs < 0 ? '−' : '+'}$${nf(Math.abs(move.abs), 2)} · ` : ' '}
      {sgnPct(move.pct)}
      {long ? <span className="move-k"> since previous pull</span> : null}
    </span>
  )
}

/**
 * Identity, then the caveat, then the numbers — in that reading order on purpose.
 * The caveat has to be met before the price and targets are.
 */
export default function CompanyHeader({ ticker, d, c, row, onStep, headingRef }) {
  const base = c.scen.base
  const costIsMarket = Math.abs(d.cost - d.priceRef) < 0.005
  const next = nextCatalyst(ticker)

  return (
    <header className="co-head" style={{ '--sec': `var(--sec-${d.sector})` }}>
      <div className="co-id">
        <span className="co-sector">
          <Swatch sector={d.sector} />
          {SECTOR_LABEL[d.sector]}
        </span>
        <div className="co-title">
          <span className="co-ticker">{ticker}</span>
          <h2 tabIndex={-1} ref={headingRef}>
            {d.name}
          </h2>
        </div>
        <div className="co-step">
          <button type="button" className="icon-btn" onClick={() => onStep(-1)} aria-label="Previous company (k)">
            ‹
          </button>
          <button type="button" className="icon-btn" onClick={() => onStep(1)} aria-label="Next company (j)">
            ›
          </button>
        </div>
      </div>

      <CaveatBand ticker={ticker} caveat={row.caveat} />

      <div className="co-nums">
        <div className="co-price">
          <span className="k">Price</span>
          <span className="v">{price(d.priceRef)}</span>
          <span className="sub">
            <Move move={row.move} long />
          </span>
          <span className="sub">
            <Staleness />
          </span>
        </div>
        <div className="co-target">
          <span className="k">Base case · 2030</span>
          <span className="v">{price(base.target)}</span>
          <span className="sub">
            <b className={tone(base.cagr)}>{sgnPct(base.cagr)}</b> a year{' '}
            {costIsMarket ? 'from today' : `from your ${price(d.cost)} cost`}
          </span>
          <span className="sub muted">
            Bear {price(c.scen.bear.target)} · Bull {price(c.scen.bull.target)}
          </span>
        </div>
        {next ? (
          <div className="co-next">
            <span className="k">Next catalyst</span>
            <span className="v small">{shortDate(next.date)}</span>
            <span className="sub">{next.label}</span>
          </div>
        ) : null}
      </div>
    </header>
  )
}
