import { YEARS } from '../data/tickers.js'
import NumField from './NumField.jsx'
import { Scroller, YearHead } from './Primitives.jsx'

const ROWS = [
  { label: 'Revenue growth (% YoY)', field: 'growth', step: 0.5, signed: true },
  { label: 'Net income margin (%)', field: 'niMargin', step: 0.5, signed: true },
  { label: 'Adj. EBITDA margin (%)', field: 'ebMargin', step: 0.5, signed: true },
  { label: 'Diluted shares out (B)', field: 'sharesOut', step: 0.005, positive: true },
]

/** Cell ids are `cell-<field>-<year index>`: news driver tags deep-link to them. */
export default function DriverTable({ d, setSeries, setScalar }) {
  return (
    <Scroller label="Driver assumptions, CY2026 to CY2030">
      <table>
        <caption className="sr-only">Driver assumptions, CY2026 to CY2030 — editable</caption>
        <YearHead first="Driver" />
        <tbody>
          {ROWS.map(({ label, field, step, signed, positive }) => (
            <tr key={field}>
              <th className="rowh" scope="row">
                {label}
              </th>
              {YEARS.map((y, i) => (
                <td key={y}>
                  <NumField
                    id={`cell-${field}-${i}`}
                    className="cell-in"
                    step={step}
                    signed={signed}
                    positive={positive}
                    value={d[field][i]}
                    ariaLabel={`${label} CY${y}`}
                    onChange={(v) => setSeries(field, i, v)}
                  />
                </td>
              ))}
            </tr>
          ))}

          <tr className="rule">
            <th className="rowh" scope="row">
              CY2025 revenue base ($B)
            </th>
            <td>
              <NumField
                id="cell-prevRev"
                className="cell-in"
                step={0.1}
                positive
                value={d.prevRev}
                ariaLabel="CY2025 revenue base"
                onChange={(v) => setScalar('prevRev', v)}
              />
            </td>
            <td className="n hint" colSpan={4}>
              CY2026 revenue compounds off this base.
            </td>
          </tr>
        </tbody>
      </table>
    </Scroller>
  )
}
