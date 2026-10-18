import { bil, money, sgnPct, tone } from '../lib/format.js'
import NumField from './NumField.jsx'
import { Scroller, YearHead } from './Primitives.jsx'

/*
 * These row components live at module scope on purpose. Defining them inside
 * ValuationTable would hand React a brand-new component type on every keystroke,
 * remounting the inputs and dropping focus mid-edit.
 */

function DividerRow({ label }) {
  return (
    <tr className="head-in">
      <th colSpan={6} scope="colgroup">
        {label}
      </th>
    </tr>
  )
}

function ScalarRow({ id, label, value, step, onChange, signed, positive }) {
  return (
    <tr>
      <th className="rowh" scope="row">
        {label}
      </th>
      <td>
        <NumField
          id={id}
          className="cell-in"
          step={step}
          signed={signed}
          positive={positive}
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
    <Scroller label="Valuation, CY2026 to CY2030">
      <table>
        <caption className="sr-only">Valuation cross-check, CY2026 to CY2030</caption>
        <YearHead first="Valuation metric" />
        <tbody>
          <DividerRow label="P/E band" />
          <ScalarRow
            id="cell-peLow"
            label="Target P/E — low"
            value={d.peLow}
            step={0.5}
            positive
            onChange={(v) => setScalar('peLow', v)}
          />
          <ScalarRow
            id="cell-peHigh"
            label="Target P/E — high"
            value={d.peHigh}
            step={0.5}
            positive
            onChange={(v) => setScalar('peHigh', v)}
          />
          <ValueRow label="Price at low end of band" values={c.priceLow.map((v) => money(v))} toned={c.priceLow.map((v) => (v < 0 ? -1 : 0))} />
          <ValueRow label="Price at high end of band" values={c.priceHigh.map((v) => money(v))} toned={c.priceHigh.map((v) => (v < 0 ? -1 : 0))} />
          <ValueRow label="Price at midpoint P/E" values={c.priceMid.map((v) => money(v))} toned={c.priceMid.map((v) => (v < 0 ? -1 : 0))} emph />
          <ValueRow
            label="Market cap at midpoint ($B)"
            values={c.ni.map((v) => bil(v * c.peMid))}
            toned={c.ni.map((v) => (v < 0 ? -1 : 0))}
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
            id="cell-evMult"
            label="Target EV/EBITDA"
            value={d.evMult}
            step={0.5}
            signed
            onChange={(v) => setScalar('evMult', v)}
          />
          <ScalarRow
            id="cell-netCash"
            label="Net cash ($B)"
            value={d.netCash}
            step={1}
            signed
            onChange={(v) => setScalar('netCash', v)}
          />
          <ValueRow
            label="Implied price per share"
            values={c.evPrice.map((v) => money(v))}
            toned={c.evPrice.map((v) => (v < 0 ? -1 : 0))}
            emph
          />
          <ValueRow
            label="Upside vs your cost"
            values={c.evUpside.map((v) => sgnPct(v))}
            toned={c.evUpside}
          />
        </tbody>
      </table>
    </Scroller>
  )
}
