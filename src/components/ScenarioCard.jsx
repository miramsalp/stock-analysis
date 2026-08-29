import { money, sgnMoney, sgnPct, tone } from '../lib/format.js'
import NumField from './NumField.jsx'
import { ORow } from './Primitives.jsx'

const FIELDS = [
  { label: '2030 rev $B', field: 'rev', step: 1 },
  { label: 'Margin %', field: 'margin', step: 0.5 },
  { label: 'Exit P/E', field: 'pe', step: 0.5 },
]

export default function ScenarioCard({ scenKey, scen, out, setScen }) {
  return (
    <div className={`card sc sc-${scenKey}`}>
      <div className="bar" />
      <div className="body">
        <h3>
          <span className="sq" />
          {scen.label} case
        </h3>
        <p className="thesis">{scen.thesis}</p>

        <div className="ins">
          {FIELDS.map(({ label, field, step }) => (
            <div className="field" key={field}>
              <label htmlFor={`${scenKey}-${field}`}>{label}</label>
              <NumField
                id={`${scenKey}-${field}`}
                className="cell-in"
                step={step}
                value={scen[field]}
                ariaLabel={`${scen.label} case ${label}`}
                onChange={(v) => setScen(scenKey, field, v)}
              />
            </div>
          ))}
        </div>

        <div className="out">
          <ORow label="2030 EPS" value={money(out.eps)} />
          <ORow label="Target price" value={money(out.target)} big />
          <ORow label="Your position" value={money(out.value, 0)} />
          <ORow label="Net profit" value={sgnMoney(out.profit)} toneClass={tone(out.profit)} />
          <ORow label="Return on cost" value={sgnPct(out.roi)} toneClass={tone(out.roi)} />
          <ORow label="Annualised" value={sgnPct(out.cagr)} toneClass={tone(out.cagr)} />
        </div>
      </div>
    </div>
  )
}
