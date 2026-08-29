import { bil, money, sgnPct, tone } from '../lib/format.js'
import NumField from './NumField.jsx'
import { YearHead } from './Primitives.jsx'

/*
 * These row components live at module scope on purpose. Defining them inside
 * ValuationTable would hand React a brand-new component type on every keystroke,
 * remounting the inputs and dropping focus mid-edit.
 */

function DividerRow({ label }) {
  return (
    <tr className="head-in">
      <th className="rowh" scope="row">
        {label}
      </th>
      <td colSpan={5} />
    </tr>
  )
}

function ScalarRow({ label, value, step, onChange }) {
  return (
    <tr>
      <th className="rowh" scope="row">
        {label}
      </th>
      <td>
        <NumField
          className="cell-in"
          step={step}
          value={value}
          ariaLabel={label}
          onChange={onChange}
        />
      </td>
      <td className="n hint" colSpan={4}>
        Held flat across all five years.
      </td>
    </tr>
  )
}

function ValueRow({ label, values, emph, toned }) {
  return (
    <tr className={emph ? 'emph' : undefined}>
      <th className="rowh" scope="row">
        {label}
      </th>
      {values.map((v, i) => (
        <td key={i} className={`n ${toned ? tone(toned[i]) : ''}`}>
          {v}
        </td>
      ))}
    </tr>
  )
}

export default function ValuationTable({ d, c, setScalar }) {
  return (
    <div className="card scroller">
      <table>
        <YearHead first="Valuation metric" />
        <tbody>
          <DividerRow label="P/E band" />
          <ScalarRow
            label="Target P/E — low"
            value={d.peLow}
            step={0.5}
            onChange={(v) => setScalar('peLow', v)}
          />
          <ScalarRow
            label="Target P/E — high"
            value={d.peHigh}
            step={0.5}
            onChange={(v) => setScalar('peHigh', v)}
          />
          <ValueRow label="Price at low P/E" values={c.priceLow.map((v) => money(v))} />
          <ValueRow label="Price at high P/E" values={c.priceHigh.map((v) => money(v))} />
          <ValueRow label="Price at midpoint P/E" values={c.priceMid.map((v) => money(v))} emph />
          <ValueRow
            label="Market cap at midpoint ($B)"
            values={c.ni.map((v) => bil(v * c.peMid))}
          />
          <ValueRow
            label="Upside vs your cost"
            values={c.upside.map((v) => sgnPct(v))}
            toned={c.upside}
          />
          <ValueRow
            label="IRR from your entry"
            values={c.irr.map((v) => sgnPct(v))}
            toned={c.irr}
          />

          <DividerRow label="EV / EBITDA cross-check" />
          <ScalarRow
            label="Target EV/EBITDA"
            value={d.evMult}
            step={0.5}
            onChange={(v) => setScalar('evMult', v)}
          />
          <ScalarRow
            label="Net cash ($B)"
            value={d.netCash}
            step={1}
            onChange={(v) => setScalar('netCash', v)}
          />
          <ValueRow label="Implied price per share" values={c.evPrice.map((v) => money(v))} emph />
          <ValueRow
            label="Upside vs your cost"
            values={c.evUpside.map((v) => sgnPct(v))}
            toned={c.evUpside}
          />
        </tbody>
      </table>
    </div>
  )
}
