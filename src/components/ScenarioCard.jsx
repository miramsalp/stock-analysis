import { money, price, sgnPct, tone } from '../lib/format.js'
import NumField from './NumField.jsx'

const FIELDS = [
  { label: '2030 revenue ($B)', field: 'rev', step: 1, positive: true },
  { label: 'Net margin (%)', field: 'margin', step: 0.5, signed: true },
  { label: 'Exit P/E', field: 'pe', step: 0.5, positive: true },
]

/**
 * One case's three inputs and what they produce. Each case sets its own revenue,
 * margin and multiple — scenarios do not inherit the driver table, on purpose.
 */
export default function ScenarioCard({ scenKey, scen, out, setScen, edited }) {
  return (
    <section className={`sc sc-${scenKey}`} aria-labelledby={`sc-h-${scenKey}`}>
      <h3 id={`sc-h-${scenKey}`}>
        <span className="sq" aria-hidden="true" />
        {scen.label} case
        {edited ? <span className="dot" title="Edited — differs from the shipped value" /> : null}
      </h3>
      <p className="thesis">{scen.thesis}</p>

      <div className="ins">
        {FIELDS.map(({ label, field, step, signed, positive }) => (
          <div className="field" key={field}>
            <label htmlFor={`${scenKey}-${field}`}>{label}</label>
            <NumField
              id={`${scenKey}-${field}`}
              className="cell-in"
              step={step}
              signed={signed}
              positive={positive}
              value={scen[field]}
              onChange={(v) => setScen(scenKey, field, v)}
            />
          </div>
        ))}
      </div>

      <dl className="out">
        <div>
          <dt>2030 EPS</dt>
          <dd className={tone(out.eps < 0 ? -1 : 0)}>{money(out.eps)}</dd>
        </div>
        <div className="big">
          <dt>Target price</dt>
          <dd>{price(out.target)}</dd>
        </div>
        <div>
          <dt>Per year</dt>
          <dd className={tone(out.cagr)}>{sgnPct(out.cagr)}</dd>
        </div>
        <div>
          <dt>Total</dt>
          <dd className={tone(out.roi)}>{sgnPct(out.roi)}</dd>
        </div>
      </dl>
      {out.target <= 0 ? (
        <p className="note">
          A loss-making exit: the P/E on a loss is not a price, and a long position cannot fall
          below zero, so returns are floored at −100%.
        </p>
      ) : null}
    </section>
  )
}
