import { YEARS } from '../data/tickers.js'

export function Stat({ label, value, sub, toneClass }) {
  return (
    <div className="stat">
      <span className="k">{label}</span>
      <span className={`v ${toneClass ?? ''}`}>{value}</span>
      <span className="m">{sub}</span>
    </div>
  )
}

export function ORow({ label, value, toneClass, big }) {
  return (
    <div className={`orow${big ? ' big' : ''}`}>
      <span className="k">{label}</span>
      <span className={`v ${toneClass ?? ''}`}>{value}</span>
    </div>
  )
}

export function SectionHead({ eyebrow, title, tag, children }) {
  return (
    <div className="shead">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title}
        {tag ? <span className="tag edit">{tag}</span> : null}
      </h2>
      <p>{children}</p>
    </div>
  )
}

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
