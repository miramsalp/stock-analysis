import { DEFAULTS, TICKERS_BY_SECTOR } from '../data/tickers.js'

/**
 * Twenty-six tickers is too many for a tab strip, so selection happens twice:
 * a native grouped <select> in the sticky header, which stays reachable while
 * scrolling, and this wrapping grid, which is what you actually scan.
 */
export function TickerSelect({ active, onSelect }) {
  return (
    <label className="picker-select">
      <span className="sr-only">Company</span>
      <select value={active} onChange={(e) => onSelect(e.target.value)}>
        {TICKERS_BY_SECTOR.map((group) => (
          <optgroup key={group.key} label={group.label}>
            {group.tickers.map((k) => (
              <option key={k} value={k}>
                {k} — {DEFAULTS[k].name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </label>
  )
}

export function TickerGrid({ active, onSelect }) {
  return (
    <div className="picker-grid">
      {TICKERS_BY_SECTOR.map((group) => (
        <div className="picker-group" key={group.key} style={{ '--sec': `var(--sec-${group.key})` }}>
          <span className="picker-label">
            <i />
            {group.label}
          </span>
          <div className="picker-chips">
            {group.tickers.map((k) => (
              <button
                key={k}
                type="button"
                className="chip"
                aria-pressed={k === active}
                title={DEFAULTS[k].name}
                onClick={() => onSelect(k)}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
