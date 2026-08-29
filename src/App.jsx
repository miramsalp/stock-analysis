import { useCallback, useEffect, useMemo, useState } from 'react'

import { DATA_AS_OF, DEFAULTS, SCEN_KEYS, TICKERS } from './data/tickers.js'
import { bil, money, nf, sgnMoney, sgnPct, tone } from './lib/format.js'
import { project } from './lib/model.js'
import { loadStore, persist, resetTicker } from './lib/storage.js'

import DriverTable from './components/DriverTable.jsx'
import NumField from './components/NumField.jsx'
import ProjectionTable from './components/ProjectionTable.jsx'
import ScenarioCard from './components/ScenarioCard.jsx'
import ValuationTable from './components/ValuationTable.jsx'
import WatchCard from './components/WatchCard.jsx'
import { ORow, SectionHead, Stat } from './components/Primitives.jsx'
import BandChart from './components/charts/BandChart.jsx'
import PathChart from './components/charts/PathChart.jsx'

const clone = (o) => JSON.parse(JSON.stringify(o))

export default function App() {
  const [store, setStore] = useState(loadStore)

  useEffect(() => {
    persist(store)
  }, [store])

  const active = store.active
  const d = store.data[active]
  const c = useMemo(() => project(d), [d])

  /** Single immutable edit path for whichever ticker is on screen. */
  const edit = useCallback((mutate) => {
    setStore((prev) => {
      const next = clone(prev.data[prev.active])
      mutate(next)
      return { ...prev, data: { ...prev.data, [prev.active]: next } }
    })
  }, [])

  const setScalar = useCallback(
    (field, v) => edit((m) => {
      m[field] = v
    }),
    [edit],
  )
  const setSeries = useCallback(
    (field, i, v) => edit((m) => {
      m[field][i] = v
    }),
    [edit],
  )
  const setScen = useCallback(
    (scenKey, field, v) => edit((m) => {
      m.scen[scenKey][field] = v
    }),
    [edit],
  )

  const reset = () =>
    setStore((prev) => ({
      ...prev,
      data: { ...prev.data, [prev.active]: resetTicker(prev.active) },
    }))

  const toggleCheck = (i) =>
    setStore((prev) => {
      const key = `${prev.active}:${i}`
      return { ...prev, checks: { ...prev.checks, [key]: !prev.checks[key] } }
    })

  const base = c.scen.base

  return (
    <>
      <header className="topbar">
        <div className="topbar-row">
          <div className="brand">
            <span className="mark">▚▚</span>
            <h1>Ad Stack 2030</h1>
            <span className="sub">CY26–CY30 model</span>
          </div>

          <button type="button" className="ghost" onClick={reset}>
            Reset {active}
          </button>
        </div>

        <nav className="tickers" role="tablist" aria-label="Company">
          {TICKERS.map((k) => (
            <button
              key={k}
              type="button"
              className="tk"
              role="tab"
              aria-selected={k === active}
              title={DEFAULTS[k].name}
              style={{ '--tk': `var(${DEFAULTS[k].cssvar})` }}
              onClick={() => setStore((prev) => ({ ...prev, active: k }))}
            >
              <span className="dot" />
              {k}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section>
          <SectionHead eyebrow="01 / Position" title={`Your ${d.name} holding`}>
            Everything below is priced off these two numbers. Edit either and the whole model
            re-runs. Cost defaults to the market price on {DATA_AS_OF} — replace it with what you
            actually paid.
          </SectionHead>

          {/* Sits above the summary stats on purpose: on a ticker the earnings frame
              does not fit, the caveat has to be read before the numbers are. */}
          {d.caveat ? (
            <p className="note warn">
              <strong>Read this first.</strong> {d.caveat}
            </p>
          ) : null}

          <div className="deck">
            <div className="card entry">
              <div className="field">
                <label htmlFor="shares">Shares held</label>
                <div className="inwrap">
                  <NumField
                    id="shares"
                    value={d.shares}
                    step={1}
                    min={0}
                    ariaLabel="Shares held"
                    onChange={(v) => setScalar('shares', Math.max(0, v))}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="cost">Average cost / share</label>
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
              </div>

              <ORow label="Total invested" value={money(c.invested)} />
              <ORow
                label={`Market ${DATA_AS_OF.slice(0, 6)}`}
                value={money(d.priceRef)}
                toneClass={d.cost > 0 ? tone(d.priceRef - d.cost) : ''}
              />
            </div>

            <div className="stats">
              <Stat
                label="2030 base target"
                value={money(base.target)}
                sub={`${nf(d.scen.base.pe, 1)}x on ${money(base.eps)} EPS`}
              />
              <Stat
                label="Position value 2030"
                value={money(base.value, 0)}
                sub={`${nf(d.shares, 0)} shares @ ${money(d.cost)}`}
              />
              <Stat
                label="Net profit"
                value={sgnMoney(base.profit)}
                toneClass={tone(base.profit)}
                sub={`${sgnPct(base.roi)} on cost`}
              />
              <Stat
                label="Annualised (5 yr)"
                value={sgnPct(base.cagr)}
                toneClass={tone(base.cagr)}
                sub="base case, 2026 → 2030"
              />
            </div>
          </div>
        </section>

        <section>
          <SectionHead eyebrow="02 / Drivers" title="Model assumptions" tag="editable">
            The only numbers you have to believe. Revenue compounds off the prior year, so changing
            one growth rate moves every year after it.
          </SectionHead>
          <DriverTable d={d} setSeries={setSeries} setScalar={setScalar} />
        </section>

        <section>
          <SectionHead eyebrow="03 / Build" title="Earnings projection">
            Derived from the drivers above. Implied P/E is what you paid divided by that year&apos;s
            EPS — the multiple your entry looks like in hindsight.
          </SectionHead>
          <ProjectionTable c={c} />
        </section>

        <section>
          <SectionHead eyebrow="04 / Range" title="2030 scenarios" tag="editable">
            Three independent 2030 endpoints. Each sets its own revenue, margin and exit multiple —
            they do not inherit the driver table.
          </SectionHead>

          <div className="scen">
            {SCEN_KEYS.map((k) => (
              <ScenarioCard
                key={k}
                scenKey={k}
                scen={d.scen[k]}
                out={c.scen[k]}
                setScen={setScen}
              />
            ))}
          </div>

          <div className="card">
            <div className="chart-head">
              <h3>2030 price per share by scenario</h3>
            </div>
            <BandChart d={d} c={c} />
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
                <i className="dash" />
                Your cost basis
              </span>
            </div>
          </div>
        </section>

        <section>
          <SectionHead eyebrow="05 / Multiples" title="Valuation ladder" tag="editable multiples">
            Same earnings, two lenses. The P/E band brackets the equity price; EV/EBITDA
            cross-checks it on cash flow and adds back net cash.
          </SectionHead>

          <div className="deck stack">
            <ValuationTable d={d} c={c} setScalar={setScalar} />

            <div className="card">
              <div className="chart-head">
                <h3>Midpoint P/E price path · {nf(c.peMid, 1)}x</h3>
              </div>
              <PathChart d={d} c={c} ticker={active} />
              <div className="chart-legend">
                <span>
                  <i style={{ background: `var(${d.cssvar})` }} />
                  {active} midpoint P/E target
                </span>
                <span>
                  <i className="dash dot" />
                  EV/EBITDA cross-check
                </span>
                <span>
                  <i className="dash" />
                  Your cost basis
                </span>
              </div>
            </div>
          </div>

          <p className="note">
            <strong>How to read it.</strong> IRR annualises the midpoint target over the years to
            that column — CY2026 is one year out, CY2030 five. The EV/EBITDA row values the whole
            business at {nf(d.evMult, 1)}x EBITDA and adds back {bil(d.netCash)} of net cash before
            dividing by shares, so it should land near the P/E midpoint. A wide gap between the two
            means one of the multiples is doing the work, not the earnings.
          </p>
        </section>

        <section>
          <SectionHead eyebrow="06 / Verify" title={`What to check next quarter — ${active}`}>
            The model above is a claim. These are the five disclosures that confirm or break it.
            Tick them off as the release lands.
          </SectionHead>

          <div className="watch">
            {d.watch.map((item, i) => (
              <WatchCard
                key={item.h}
                item={item}
                checked={Boolean(store.checks[`${active}:${i}`])}
                onToggle={() => toggleCheck(i)}
              />
            ))}
          </div>

          <p className="note">
            <strong>Source note.</strong>{' '}
            {d.sourced
              ? 'These five benchmarks come from your own reading of the Q2 CY2026 release and management commentary. Re-anchor them each quarter — a benchmark from two quarters ago is no longer a test.'
              : `The ${d.name} benchmarks are structural — they name the disclosure to read, not a figure management has guided to. Replace each one with the actual guided number when the release lands, then judge the quarter against that.`}
          </p>
        </section>
      </main>

      <footer>
        <span>Ad Stack 2030 · a personal model, not investment advice</span>
        <span>Reported figures and prices as of {DATA_AS_OF} · inputs save to this browser only</span>
      </footer>
    </>
  )
}
