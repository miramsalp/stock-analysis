import { useCallback, useEffect, useMemo, useState } from 'react'

import { DATA_AS_OF, SCEN_KEYS, sectorVar, TICKERS } from './data/tickers.js'
import { bil, nf } from './lib/format.js'
import { project } from './lib/model.js'
import { loadStore, persist, resetPositions, resetTicker } from './lib/storage.js'

import DriverTable from './components/DriverTable.jsx'
import Fold from './components/Fold.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import ProjectionTable from './components/ProjectionTable.jsx'
import ScenarioCard from './components/ScenarioCard.jsx'
import Summary from './components/Summary.jsx'
import ValuationTable from './components/ValuationTable.jsx'
import WatchCard from './components/WatchCard.jsx'
import { TickerGrid, TickerSelect } from './components/TickerPicker.jsx'
import { SectionHead } from './components/Primitives.jsx'
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

  const selectTicker = useCallback(
    (k) => setStore((prev) => ({ ...prev, active: k })),
    [],
  )

  const reset = () =>
    setStore((prev) => ({
      ...prev,
      data: { ...prev.data, [prev.active]: resetTicker(prev.active) },
    }))

  const resetAll = () =>
    setStore((prev) => ({ ...prev, data: resetPositions(prev.data) }))

  const toggleCheck = (i) =>
    setStore((prev) => {
      const key = `${prev.active}:${i}`
      return { ...prev, checks: { ...prev.checks, [key]: !prev.checks[key] } }
    })

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <span className="mark">▚▚</span>
          <h1>Ad Stack 2030</h1>
          <span className="sub">where could it be in 2030?</span>
        </div>

        <TickerSelect active={active} onSelect={selectTicker} />

        <button
          type="button"
          className="ghost"
          title={`Restore the shipped assumptions for ${active} — drivers, scenarios and position together.`}
          onClick={reset}
        >
          Reset {active}
        </button>

        <button
          type="button"
          className="ghost"
          title={`Every company: 1 share at its market price on ${DATA_AS_OF}. Drivers and scenarios are left alone.`}
          onClick={resetAll}
        >
          Reset all positions
        </button>
      </header>

      <main>
        <section>
          <SectionHead eyebrow="Pick a company" title={`${TICKERS.length} companies, grouped by sector`}>
            Click a ticker to load it. Everything below updates.
          </SectionHead>
          <div className="card">
            <TickerGrid active={active} onSelect={selectTicker} />
          </div>
        </section>

        <section>
          <Summary ticker={active} d={d} c={c} setScalar={setScalar} />
        </section>

        <section className="folds">
          <Fold
            title="Bear, base and bull in detail"
            hint="Each case sets its own 2030 revenue, margin and P/E"
            tag="editable"
          >
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
                Your cost
              </span>
            </div>
          </Fold>

          <Fold
            title="Growth and margin, year by year"
            hint="Revenue growth, profit margin and share count for 2026–2030"
            tag="editable"
          >
            <p className="note">
              Revenue compounds off the year before, so changing one growth rate moves every year
              after it. Year one is set to analyst consensus; later years are judgement.
            </p>
            <DriverTable d={d} setSeries={setSeries} setScalar={setScalar} />
            <p className="note">
              <strong>What that produces.</strong> Implied P/E is your cost divided by that
              year&apos;s earnings per share — what your entry looks like in hindsight.
            </p>
            <ProjectionTable c={c} />
          </Fold>

          <Fold
            title="Valuation cross-check"
            hint={`P/E band and EV/EBITDA — midpoint ${nf(c.peMid, 1)}x`}
            tag="editable multiples"
          >
            <ValuationTable d={d} c={c} setScalar={setScalar} />
            <div className="chart-head">
              <h3>Midpoint P/E price path · {nf(c.peMid, 1)}x</h3>
            </div>
            <PathChart d={d} c={c} ticker={active} />
            <div className="chart-legend">
              <span>
                <i style={{ background: sectorVar(d.sector) }} />
                {active} midpoint P/E target
              </span>
              <span>
                <i className="dash dot" />
                EV/EBITDA cross-check
              </span>
              <span>
                <i className="dash" />
                Your cost
              </span>
            </div>
            <p className="note">
              <strong>How to read it.</strong> Same earnings, two lenses. The EV/EBITDA line values
              the whole business at {nf(d.evMult, 1)}x EBITDA and adds back {bil(d.netCash)} of net
              cash, so it should land near the P/E midpoint. A wide gap means one of the multiples
              is doing the work, not the earnings.
            </p>
          </Fold>

          <Fold
            title="What to check next quarter"
            hint="Five disclosures that confirm or break the model — tick them off"
          >
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
          </Fold>
        </section>

        <section>
          <SectionHead eyebrow="Compare" title="All companies, ranked by the model" tag="all companies">
            Every company run through its own bear, base and bull cases, sorted by return per year
            to 2030 from the market price on {DATA_AS_OF} — not from your cost, so the order is
            the same for everyone.
          </SectionHead>

          <Leaderboard data={store.data} active={active} onSelect={selectTicker} />
        </section>
      </main>

      <footer>
        <span>Ad Stack 2030 · a personal model, not investment advice</span>
        <span>Prices and reported figures as of {DATA_AS_OF} · your edits save to this browser only</span>
      </footer>
    </>
  )
}
