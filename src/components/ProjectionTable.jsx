import { bil, money, mult } from '../lib/format.js'
import { Scroller, YearHead } from './Primitives.jsx'

export default function ProjectionTable({ c }) {
  const rows = [
    { label: 'Revenue', values: c.rev.map((v) => bil(v)) },
    { label: 'Net income', values: c.ni.map((v) => bil(v)), toned: c.ni },
    { label: 'Adj. EBITDA', values: c.eb.map((v) => bil(v)) },
    { label: 'GAAP diluted EPS', values: c.eps.map((v) => money(v)), emph: true, toned: c.eps },
    { label: 'Implied P/E at your cost', values: c.impliedPE.map((v) => mult(v)) },
  ]

  return (
    <Scroller label="Projected results, CY2026 to CY2030">
      <table>
        <caption className="sr-only">What the drivers produce, CY2026 to CY2030</caption>
        <YearHead first="Line item" />
        <tbody>
          {rows.map(({ label, values, emph, toned }) => (
            <tr key={label} className={emph ? 'emph' : undefined}>
              <th className="rowh" scope="row">
                {label}
              </th>
              {values.map((v, i) => (
                <td key={i} className={`n ${toned && toned[i] < 0 ? 'neg' : ''}`}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Scroller>
  )
}
