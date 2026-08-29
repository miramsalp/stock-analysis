import { YEARS } from '../data/tickers.js'
import NumField from './NumField.jsx'
import { YearHead } from './Primitives.jsx'

const ROWS = [
  { label: 'Revenue growth (% YoY)', field: 'growth', step: 0.5 },
  { label: 'Net income margin (%)', field: 'niMargin', step: 0.5 },
  { label: 'Adj. EBITDA margin (%)', field: 'ebMargin', step: 0.5 },
  { label: 'Diluted shares out (B)', field: 'sharesOut', step: 0.005 },
]

export default function DriverTable({ d, setSeries, setScalar }) {
  return (
    <div className="card scroller">
      <table>
        <YearHead first="Driver" />
        <tbody>
          {ROWS.map(({ label, field, step }) => (
            <tr key={field}>
              <th className="rowh" scope="row">
                {label}
              </th>
              {YEARS.map((y, i) => (
                <td key={y}>
                  <NumField
                    className="cell-in"
                    step={step}
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
                className="cell-in"
                step={0.1}
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
    </div>
  )
}
