import { bil, money, mult } from '../lib/format.js'
import { YearHead } from './Primitives.jsx'

export default function ProjectionTable({ c }) {
  const rows = [
    { label: 'Revenue', values: c.rev.map((v) => bil(v)) },
    { label: 'Net income', values: c.ni.map((v) => bil(v)) },
    { label: 'Adj. EBITDA', values: c.eb.map((v) => bil(v)) },
    { label: 'GAAP diluted EPS', values: c.eps.map((v) => money(v)), emph: true },
    { label: 'Implied P/E at your cost', values: c.impliedPE.map((v) => mult(v)) },
  ]

  return (
    <div className="card scroller">
      <table>
        <YearHead first="Line item" />
        <tbody>
          {rows.map(({ label, values, emph }) => (
            <tr key={label} className={emph ? 'emph' : undefined}>
              <th className="rowh" scope="row">
                {label}
              </th>
              {values.map((v, i) => (
                <td key={i} className="n">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
