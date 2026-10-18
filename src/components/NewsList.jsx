import { daysSince, shortDate } from '../lib/dates.js'
import { NEWS_KINDS } from '../lib/news.js'
import { Swatch } from './Primitives.jsx'

const ago = (ms) => {
  const n = daysSince(ms)
  if (!Number.isFinite(n)) return ''
  return n === 0 ? 'today' : n === 1 ? '1 day ago' : `${n} days ago`
}

/**
 * One story: date, source, kind, the headline linked out, and — always visible — the
 * line saying which driver in this model it moves. Driver tags jump to that input.
 */
export function NewsItem({ item, onDriver, showTicker = false, sector, onTicker }) {
  return (
    <li className="news-item">
      <div className="news-meta">
        {showTicker ? (
          <button type="button" className="news-ticker" onClick={() => onTicker(item.key)}>
            <Swatch sector={sector} />
            {item.key}
          </button>
        ) : null}
        <time dateTime={item.date} title={ago(item.ms)}>
          {shortDate(item.date)}
        </time>
        {item.kind ? <span className={`kind k-${item.kind}`}>{NEWS_KINDS[item.kind]}</span> : null}
        {item.source ? <span className="news-src">{item.source}</span> : null}
      </div>
      <p className="news-h">
        {item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.headline}
            <span className="sr-only"> (opens in a new tab)</span>
            <span aria-hidden="true" className="ext">
              ↗
            </span>
          </a>
        ) : (
          item.headline
        )}
      </p>
      {item.why ? (
        <p className="news-why">
          <span className="why-k">Model:</span> {item.why}
        </p>
      ) : null}
      {item.drivers.length && onDriver ? (
        <div className="news-drivers">
          {item.drivers.map((dr) => (
            <button
              key={dr.key}
              type="button"
              className="driver-tag"
              onClick={() => onDriver(item.key, dr)}
            >
              → {dr.label}
            </button>
          ))}
        </div>
      ) : null}
    </li>
  )
}

export default function NewsList({ items, onDriver, empty }) {
  if (!items.length) return <p className="empty">{empty}</p>
  return (
    <ol className="news">
      {items.map((n, i) => (
        <NewsItem key={`${n.key}-${n.date}-${i}`} item={n} onDriver={onDriver} />
      ))}
    </ol>
  )
}
