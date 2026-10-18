import { DATA_AS_OF, DEFAULTS, SECTOR_LABEL, SECTORS } from '../data/tickers.js'
import { allNews, NEWS_KINDS } from '../lib/news.js'
import { NewsItem } from './NewsList.jsx'

/**
 * The whole book's news on one wire, newest first. Same items as each company's
 * panel — curated at the pull, each one tied to a driver — so it reads as "what moved
 * which assumption this month", not as a headline feed.
 */
export default function NewsView({ query, setQuery, onTicker, onDriver }) {
  const kind = NEWS_KINDS[query.kind] ? query.kind : ''
  const sector = SECTOR_LABEL[query.sector] ? query.sector : ''
  const all = allNews()
  const items = all.filter(
    (n) => (!kind || n.kind === kind) && (!sector || DEFAULTS[n.key]?.sector === sector),
  )

  return (
    <div className="newswire">
      <header className="view-head">
        <span className="eyebrow">Newswire</span>
        <h2 tabIndex={-1}>What moved an assumption</h2>
        <p>
          {all.length} items across the book, curated at the {DATA_AS_OF} pull. Not a live feed, and
          not a reason to trade: each item names the model input it touches, and the tag takes you to
          that input.
        </p>
      </header>

      <div className="controls">
        <div className="seg wrap" role="group" aria-label="Kind of news">
          <span className="seg-label">Kind</span>
          <button type="button" className="chip" aria-pressed={!kind} onClick={() => setQuery({ kind: '' })}>
            All
          </button>
          {Object.entries(NEWS_KINDS).map(([k, label]) => (
            <button key={k} type="button" className="chip" aria-pressed={kind === k} onClick={() => setQuery({ kind: k })}>
              {label}
            </button>
          ))}
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

      {items.length ? (
        <ol className="news wire panel">
          {items.map((n, i) => (
            <NewsItem
              key={`${n.key}-${n.date}-${i}`}
              item={n}
              showTicker
              sector={DEFAULTS[n.key]?.sector}
              onTicker={onTicker}
              onDriver={onDriver}
            />
          ))}
        </ol>
      ) : (
        <p className="empty panel">
          {all.length ? 'Nothing matches these filters.' : 'No news items in this data pull yet.'}
        </p>
      )}
    </div>
  )
}
