import { YEARS } from '../data/tickers.js'

/** Shared `Driver | CY2026 … CY2030` header used by all three tables. */
export function YearHead({ first }) {
  return (
    <thead>
      <tr>
        <th className="rowh" scope="col">
          {first}
        </th>
        {YEARS.map((y) => (
          <th key={y} scope="col">
            CY{y}
          </th>
        ))}
      </tr>
    </thead>
  )
}

/**
 * A horizontally scrolling table region. Focusable and labelled, so a keyboard user
 * can scroll the columns that hold no inputs (Safari and Firefox do not focus a
 * scroller on their own).
 */
export function Scroller({ label, children }) {
  return (
    <div className="scroller" tabIndex={0} role="region" aria-label={label}>
      {children}
    </div>
  )
}

/** Section heading inside a panel: a small title and an optional one-line aside. */
export function PanelHead({ title, aside, id, level = 3 }) {
  const H = `h${level}`
  return (
    <div className="panel-head">
      <H id={id}>{title}</H>
      {aside ? <span className="panel-aside">{aside}</span> : null}
    </div>
  )
}

/** Visible explanation of n/m wherever a table can print it. */
export function NmNote() {
  return (
    <p className="note">
      <strong>n/m</strong> — not meaningful: a multiple of a loss is not a price, so implied P/E,
      upside and IRR are left blank on a loss-making year instead of printing a confident zero.
    </p>
  )
}

export function Swatch({ sector }) {
  return <i className="swatch" aria-hidden="true" style={{ background: `var(--sec-${sector})` }} />
}
