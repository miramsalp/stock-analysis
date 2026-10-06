import { DATA_AS_OF, SCEN_KEYS, SECTOR_LABEL, sectorVar } from '../data/tickers.js'
import { money, nf, sgnPct, tone } from '../lib/format.js'
import NumField from './NumField.jsx'
import { Stat } from './Primitives.jsx'

/**
 * The one-screen answer for the company on screen: where it trades, where the
 * model's three cases put it in 2030, and what that is per year from your cost.
 *
 * Returns are measured from `cost`, which ships equal to the market price, so the
 * position inputs stay on this card — hiding them would leave a number that
 * silently depends on something the reader cannot see.
 */
export default function Summary({ ticker, d, c, setScalar }) {
  const base = c.scen.base
  const bear = c.scen.bear
  const costIsMarket = d.cost === d.priceRef

  return (
    <div className="summary card" style={{ '--sec': sectorVar(d.sector) }}>
      <div className="sum-head">
        <span className="sum-ticker">{ticker}</span>
        <h2>{d.name}</h2>
        <span className="sum-sector">
          <i />
          {SECTOR_LABEL[d.sector]}
        </span>
      </div>

      {/* Sits above the numbers on purpose: on a ticker the earnings frame does
          not fit, the caveat has to be read before the targets are. */}
      {d.caveat ? (
        <p className="note warn">
          <strong>Read this first.</strong> {d.caveat}
        </p>
      ) : null}

      <div className="stats">
        <Stat label="Price today" value={money(d.priceRef)} sub={`as of ${DATA_AS_OF}`} />
        <Stat
          label="2030 target · base"
          value={money(base.target)}
          sub={`${nf(d.scen.base.pe, 1)}x on ${money(base.eps)} EPS`}
        />
        <Stat
          label="Total gain"
          value={sgnPct(base.roi)}
          toneClass={tone(base.roi)}
          sub={costIsMarket ? 'from today’s price' : `from your ${money(d.cost)} cost`}
        />
        <Stat
          label="Per year"
          value={sgnPct(base.cagr)}
          toneClass={tone(base.cagr)}
          sub="annualised, 5 years"
        />
      </div>

      <div className="sum-cases">
        {SCEN_KEYS.map((k) => (
          <div key={k} className={`sum-case sc-${k}`}>
            <span className="sum-case-k">
              <span className="sq" />
              {d.scen[k].label}
            </span>
            <span className="sum-case-v">{money(c.scen[k].target)}</span>
            <span className={`sum-case-r ${tone(c.scen[k].cagr)}`}>
              {sgnPct(c.scen[k].cagr)} / yr
            </span>
            <p>{d.scen[k].thesis}</p>
          </div>
        ))}
      </div>

      <p className="sum-plain">
        In the model&apos;s base case, {d.name} earns {money(base.eps)} a share in 2030 and trades
        at {nf(d.scen.base.pe, 1)}x — about {money(base.target)}, or {sgnPct(base.cagr)} a year.
        The bear case gives {sgnPct(bear.cagr)} a year. These are assumptions, not a forecast;
        open the sections below to see or change them.
      </p>

      <div className="sum-pos">
        <span className="sum-pos-k">Your position</span>
        <div className="inwrap">
          <NumField
            id="shares"
            value={d.shares}
            step={1}
            min={0}
            ariaLabel="Shares held"
            onChange={(v) => setScalar('shares', Math.max(0, v))}
          />
          <span className="post">shares</span>
        </div>
        <span className="sum-pos-at">at</span>
        <div className="inwrap">
          <span className="pre">$</span>
          <NumField
            id="cost"
            value={d.cost}
            step={0.01}
            min={0}
            ariaLabel="Average cost per share"
            onChange={(v) => setScalar('cost', Math.max(0, v))}
          />
        </div>
        <span className="sum-pos-out">
          {money(c.invested, 0)} in → {money(base.value, 0)} in 2030 (base)
        </span>
      </div>
    </div>
  )
}
