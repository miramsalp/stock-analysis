import { SCEN_KEYS } from '../data/tickers.js'
import { HORIZON } from '../lib/model.js'
import { money, nf, price, sgnPct, tone } from '../lib/format.js'
import { AS_OF_SHORT } from '../lib/dates.js'
import PriceLadder from './charts/PriceLadder.jsx'
import NumField from './NumField.jsx'
import { PanelHead } from './Primitives.jsx'

export function LadderLegend({ hasPrev, hasCost }) {
  return (
    <div className="chart-legend">
      <span>
        <i style={{ background: 'var(--chart-bear)' }} />
        Bear
      </span>
      <span>
        <i style={{ background: 'var(--chart-base)' }} />
        Base
      </span>
      <span>
        <i style={{ background: 'var(--chart-bull)' }} />
        Bull
      </span>
      <span>
        <i className="bar-ink" />
        Today ({AS_OF_SHORT})
      </span>
      {hasPrev ? (
        <span>
          <i className="bar-prev" />
          Previous pull
        </span>
      ) : null}
      {hasCost ? (
        <span>
          <i className="dash" />
          Your cost
        </span>
      ) : null}
    </div>
  )
}

/**
 * The one-screen answer: today's price against the three 2030 cases, the three cases
 * in words, one plain sentence, and the position — each number said once.
 */
export default function Overview({ ticker, d, c, row, setScalar, latest, onOpenNews }) {
  const base = c.scen.base
  const bear = c.scen.bear
  const prev = row.move.prev
  const hasCost = d.cost > 0 && Math.abs(d.cost - d.priceRef) / d.priceRef > 0.001

  return (
    <div className="stack">
      <section className="panel">
        <PanelHead title="Where the three cases put it in 2030" aside={`annualised over ${nf(HORIZON, 1)} years to end-2030`} />
        <PriceLadder d={d} c={c} prev={prev} misfit={!row.rankable} />
        <LadderLegend hasPrev={Boolean(prev)} hasCost={hasCost} />

        <div className="cases">
          {SCEN_KEYS.map((k) => (
            <div key={k} className={`case sc-${k}`}>
              <span className="case-k">
                <span className="sq" aria-hidden="true" />
                {d.scen[k].label}
              </span>
              <span className="case-r">
                <b className={tone(c.scen[k].cagr)}>{sgnPct(c.scen[k].cagr)}</b> a year ·{' '}
                {sgnPct(c.scen[k].roi)} total
              </span>
              <p>{d.scen[k].thesis}</p>
            </div>
          ))}
        </div>

        <p className="plain">
          In the base case {d.name} earns {money(base.eps)} a share in 2030 and trades at{' '}
          {nf(d.scen.base.pe, 1)}x. The bear case gives {sgnPct(bear.cagr)} a year. These are
          assumptions, not a forecast — the Scenarios, Drivers and Valuation tabs show and change
          them.
        </p>
      </section>

      <section className="panel position" aria-labelledby="pos-h">
        <PanelHead id="pos-h" title="Your position" aside="saved in this browser only" />
        <div className="pos-row">
          <label className="inwrap">
            <span className="sr-only">Shares held</span>
            <NumField
              id="shares"
              value={d.shares}
              step={1}
              min={0}
              onChange={(v) => setScalar('shares', v)}
            />
            <span className="post">shares</span>
          </label>
          <span className="pos-at">at</span>
          <label className="inwrap">
            <span className="pre">$</span>
            <span className="sr-only">Average cost per share</span>
            <NumField
              id="cost"
              value={d.cost}
              step={0.01}
              positive
              onChange={(v) => setScalar('cost', v)}
            />
          </label>
          <span className="pos-out">
            {money(c.invested, 0)} in → {money(base.value, 0)} in 2030 (base)
          </span>
        </div>
        {hasCost ? (
          <p className="note">
            Returns on this page are from your {price(d.cost)} cost. The rail and Compare measure
            from today&apos;s {price(d.priceRef)}, so their numbers for {ticker} differ.
          </p>
        ) : null}
      </section>

      {latest ? (
        <section className="panel latest" aria-labelledby="latest-h">
          <PanelHead id="latest-h" title="Latest" aside="curated at the data pull" />
          <p className="latest-h">{latest.headline}</p>
          <button type="button" className="linkish" onClick={onOpenNews}>
            All news and catalysts for {ticker} →
          </button>
        </section>
      ) : null}
    </div>
  )
}
