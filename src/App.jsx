import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { DATA_AS_OF, DEFAULTS, SCEN_KEYS, sectorVar, TICKERS } from './data/tickers.js'
import { bookRows, orderTickers } from './lib/book.js'
import { bil, nf, price, sgnPct } from './lib/format.js'
import { project } from './lib/model.js'
import { newsOf } from './lib/news.js'
import {
  editedSections,
  loadStore,
  persist,
  reapplyStale,
  resetPositions,
  resetTicker,
} from './lib/storage.js'
import useHotkeys from './hooks/useHotkeys.js'
import useMedia from './hooks/useMedia.js'
import useRoute, { TABS } from './hooks/useRoute.js'
import useTheme from './hooks/useTheme.js'

import CatalystPanel from './components/CatalystPanel.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import CompanyHeader from './components/CompanyHeader.jsx'
import CompareView from './components/CompareView.jsx'
import DriverTable from './components/DriverTable.jsx'
import NewsView from './components/NewsView.jsx'
import Overview, { LadderLegend } from './components/Overview.jsx'
import ProjectionTable from './components/ProjectionTable.jsx'
import ScenarioCard from './components/ScenarioCard.jsx'
import SectorRail from './components/SectorRail.jsx'
import ShortcutSheet from './components/ShortcutSheet.jsx'
import Tabs from './components/Tabs.jsx'
import TopBar from './components/TopBar.jsx'
import ValuationTable from './components/ValuationTable.jsx'
import { NmNote, PanelHead } from './components/Primitives.jsx'
import PathChart from './components/charts/PathChart.jsx'
import PriceLadder from './components/charts/PriceLadder.jsx'

const clone = (o) => JSON.parse(JSON.stringify(o))

export default function App() {
  const [store, setStore] = useState(loadStore)
  const [route, go] = useRoute()
  const [theme, , cycleTheme] = useTheme()
  const wide = useMedia('(min-width: 1280px)')

  const [railSort, setRailSort] = useState('sector')
  const [railOpen, setRailOpen] = useState(false)
  const [palette, setPalette] = useState(false)
  const [keys, setKeys] = useState(false)
  const [toast, setToast] = useState(null)
  const [live, setLive] = useState('')

  const headingRef = useRef(null)
  const focusHeading = useRef(false)
  const railToggleRef = useRef(null)
  // The latest store, for callbacks memoised before the most recent edit (the palette's
  // reset actions). A snapshot taken from render scope would undo to a stale copy.
  const storeRef = useRef(store)
  storeRef.current = store
  // Set by the edit path only, so the live region speaks after an edit — not on first
  // render, navigation, reset or undo, and never ahead of a caveat on mount.
  const announce = useRef(false)

  useEffect(() => {
    persist(store)
  }, [store])

  const ticker =
    route.view === 'company' && route.ticker ? route.ticker : store.active
  const view = route.view

  // An empty or unknown hash lands on the last company, without a history entry.
  useEffect(() => {
    if (route.view === 'company' && !route.ticker) {
      go({ view: 'company', ticker: store.active, tab: route.tab }, { replace: true })
    }
  }, [route, store.active, go])

  // The URL is the source of truth; storage only remembers it for a bare visit.
  useEffect(() => {
    if (route.view === 'company' && route.ticker && route.ticker !== store.active) {
      setStore((prev) => ({ ...prev, active: route.ticker }))
    }
  }, [route, store.active])

  const d = store.data[ticker]
  const c = useMemo(() => project(d), [d])
  const rows = useMemo(() => bookRows(store.data), [store.data])
  const order = useMemo(() => orderTickers(rows, railSort), [rows, railSort])
  const edited = useMemo(() => editedSections(ticker, d), [ticker, d])
  const tabs = wide ? TABS.filter((t) => t.key !== 'catalysts') : TABS
  const tab = wide && route.tab === 'catalysts' ? 'overview' : route.tab || 'overview'

  /** Single immutable edit path for whichever ticker is on screen. */
  const edit = useCallback(
    (mutate) =>
      setStore((prev) => {
        announce.current = true
        const next = clone(prev.data[ticker])
        mutate(next)
        return { ...prev, data: { ...prev.data, [ticker]: next } }
      }),
    [ticker],
  )
  const setScalar = useCallback((field, v) => edit((m) => void (m[field] = v)), [edit])
  const setSeries = useCallback((field, i, v) => edit((m) => void (m[field][i] = v)), [edit])
  const setScen = useCallback((k, field, v) => edit((m) => void (m.scen[k][field] = v)), [edit])

  // Announce the live base result after an edit settles — once, not on every keystroke.
  useEffect(() => {
    if (!announce.current) return undefined
    const t = setTimeout(() => {
      announce.current = false
      setLive(`${ticker} base 2030 target ${price(c.scen.base.target)}, ${sgnPct(c.scen.base.cagr)} a year`)
    }, 700)
    return () => clearTimeout(t)
  }, [c, ticker])
  useEffect(() => {
    announce.current = false
  }, [ticker])

  // Navigation.
  const openCompany = useCallback(
    (k, tabKey = 'overview', query) => {
      focusHeading.current = true
      setRailOpen(false)
      go({ view: 'company', ticker: k, tab: tabKey, query })
    },
    [go],
  )
  const setTab = (k) => go({ view: 'company', ticker, tab: k })
  const step = (dir) => {
    const i = order.indexOf(ticker)
    const k = order[(i + dir + order.length) % order.length]
    go({ view: 'company', ticker: k, tab: route.view === 'company' ? tab : 'overview' })
  }
  const stepTab = (dir) => {
    if (view !== 'company') return
    const i = tabs.findIndex((t) => t.key === tab)
    setTab(tabs[(i + dir + tabs.length) % tabs.length].key)
  }
  const setQuery = (patch) => go({ view, query: { ...route.query, ...patch } }, { replace: true })
  const onDriver = useCallback(
    (k, dr) => go({ view: 'company', ticker: k, tab: dr.tab, query: { focus: dr.key } }),
    [go],
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    if (focusHeading.current) {
      focusHeading.current = false
      headingRef.current?.focus({ preventScroll: true })
    }
  }, [ticker, view])

  // Driver tags from news land the caret in the input they name.
  useEffect(() => {
    const f = route.query?.focus
    if (view !== 'company' || !f) return
    const el = document.getElementById(`cell-${f}-0`) || document.getElementById(`cell-${f}`)
    if (el) {
      el.focus({ preventScroll: true })
      el.scrollIntoView({ block: 'center' })
      el.select?.()
    }
  }, [route, view])

  // Resets, each with one step of undo.
  const withUndo = (msg, mutate) => {
    setToast({ msg, undo: storeRef.current.data })
    setStore((prev) => ({ ...prev, data: mutate(prev.data) }))
  }
  const reset = () =>
    withUndo(`Reset ${ticker} to the shipped values.`, (data) => ({ ...data, [ticker]: resetTicker(ticker) }))
  const resetAll = () => withUndo('Every position reset to 1 share at today’s price.', resetPositions)
  useEffect(() => {
    if (!toast) return undefined
    const t = setTimeout(() => setToast(null), 8000)
    return () => clearTimeout(t)
  }, [toast])

  const toggleCheck = (k) =>
    setStore((prev) => {
      const checks = { ...prev.checks }
      if (checks[k]) delete checks[k]
      else checks[k] = true
      return { ...prev, checks }
    })

  // The companies drawer below 900px behaves as a dialog: focus moves in, Escape
  // closes it and returns focus to the toggle, and the page behind is inert.
  const closeRail = useCallback(() => {
    setRailOpen(false)
    // After the re-render that lifts `inert` from the top bar, or focus cannot land.
    requestAnimationFrame(() => railToggleRef.current?.focus())
  }, [])
  useEffect(() => {
    if (!railOpen) return undefined
    document.getElementById('rail-filter')?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        closeRail()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [railOpen, closeRail])

  const lastCompany = useRef(ticker)
  useEffect(() => {
    if (view === 'company') lastCompany.current = ticker
  }, [view, ticker])

  useHotkeys({
    '/': () => setPalette(true),
    'mod+k': () => setPalette(true),
    j: () => step(1),
    k: () => step(-1),
    ']': () => stepTab(1),
    '[': () => stepTab(-1),
    ...Object.fromEntries(tabs.map((t, i) => [String(i + 1), () => view === 'company' && setTab(t.key)])),
    'g c': () => go({ view: 'compare', query: {} }),
    'g n': () => go({ view: 'news', query: {} }),
    'g h': () => go({ view: 'company', ticker: lastCompany.current, tab: 'overview' }),
    t: cycleTheme,
    '?': () => setKeys(true),
  })

  const actions = useMemo(
    () => [
      { id: 'compare', label: 'Compare every company', hint: 'g c', run: () => go({ view: 'compare', query: {} }) },
      { id: 'downside', label: 'Compare: rank on downside first', keywords: 'bear', run: () => go({ view: 'compare', query: { basis: 'bear' } }) },
      { id: 'news', label: 'Newswire: all news', hint: 'g n', run: () => go({ view: 'news', query: {} }) },
      ...TABS.map((t) => ({ id: `tab-${t.key}`, label: `${ticker}: ${t.label}`, run: () => go({ view: 'company', ticker, tab: t.key }) })),
      { id: 'theme', label: 'Change theme', hint: 't', run: cycleTheme },
      { id: 'reset', label: `Reset ${ticker} to shipped values`, run: reset },
      { id: 'resetall', label: 'Reset all positions to 1 share', run: resetAll },
      { id: 'keys', label: 'Keyboard shortcuts', hint: '?', run: () => setKeys(true) },
    ],
    // reset / resetAll read `ticker` from this render and the data to undo to from
    // storeRef at call time, so `ticker` is the only render value they need.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ticker, go, cycleTheme],
  )

  const news = newsOf(ticker)
  const row = rows[ticker]
  const panelId = 'tabpanel'

  const catalysts = (expanded) => (
    <CatalystPanel
      ticker={ticker}
      d={d}
      checks={store.checks}
      onToggle={toggleCheck}
      onDriver={onDriver}
      expanded={expanded}
    />
  )

  let body = null
  if (tab === 'overview') {
    body = (
      <Overview
        ticker={ticker}
        d={d}
        c={c}
        row={row}
        setScalar={setScalar}
        latest={wide ? null : news[0]}
        onOpenNews={() => setTab('catalysts')}
      />
    )
  } else if (tab === 'scenarios') {
    body = (
      <div className="stack">
        <p className="note">
          Each case sets its own 2030 revenue, net margin and exit P/E, so the three can disagree
          about more than one thing at a time. They do not inherit the Drivers tab — on purpose.
        </p>
        <div className="scen">
          {SCEN_KEYS.map((k) => (
            <ScenarioCard
              key={k}
              scenKey={k}
              scen={d.scen[k]}
              out={c.scen[k]}
              setScen={setScen}
              edited={['rev', 'margin', 'pe'].some((f) => d.scen[k][f] !== DEFAULTS[ticker].scen[k][f])}
            />
          ))}
        </div>
        <section className="panel">
          <PanelHead title="The three cases against today" aside="updates as you type" />
          <PriceLadder d={d} c={c} prev={row.move.prev} misfit={!row.rankable} compact />
          <LadderLegend hasPrev={Boolean(row.move.prev)} hasCost={Math.abs(d.cost - d.priceRef) / d.priceRef > 0.001} />
        </section>
      </div>
    )
  } else if (tab === 'drivers') {
    body = (
      <div className="stack">
        <p className="note">
          Revenue compounds off the year before, so changing one growth rate moves every year after
          it. Year one is set to analyst consensus; later years are judgement.
        </p>
        <DriverTable d={d} setSeries={setSeries} setScalar={setScalar} />
        <p className="note">
          <strong>What that produces.</strong> Implied P/E is your cost divided by that year&apos;s
          earnings per share — what your entry looks like in hindsight.
        </p>
        <ProjectionTable c={c} />
        <NmNote />
      </div>
    )
  } else if (tab === 'valuation') {
    body = (
      <div className="stack">
        <ValuationTable d={d} c={c} setScalar={setScalar} />
        <section className="panel">
          <PanelHead title={`Price path at the midpoint P/E · ${nf(c.peMid, 1)}x`} aside="shaded: the low–high P/E band" />
          <PathChart d={d} c={c} ticker={ticker} />
          <div className="chart-legend">
            <span>
              <i style={{ background: sectorVar(d.sector) }} />
              Midpoint P/E target
            </span>
            <span>
              <i className="band" style={{ background: sectorVar(d.sector) }} />
              P/E band {nf(d.peLow, 1)}x–{nf(d.peHigh, 1)}x
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
            <strong>How to read it.</strong> Same earnings, two lenses. The EV/EBITDA line values the
            whole business at {nf(d.evMult, 1)}x EBITDA and adds back {bil(d.netCash)} of net cash, so
            it should land near the P/E midpoint. A wide gap means one of the multiples is doing the
            work, not the earnings.
          </p>
        </section>
        <NmNote />
      </div>
    )
  } else if (tab === 'catalysts') {
    body = <div className="panel">{catalysts(true)}</div>
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <TopBar
        onSearch={() => setPalette(true)}
        onRail={() => setRailOpen(true)}
        railOpen={railOpen}
        railToggleRef={railToggleRef}
        theme={theme}
        cycleTheme={cycleTheme}
        active={ticker}
        onReset={reset}
        onResetAll={resetAll}
        onKeys={() => setKeys(true)}
      />

      <div className={`shell${railOpen ? ' rail-open' : ''}`}>
        <SectorRail
          rows={rows}
          active={ticker}
          sort={railSort}
          setSort={setRailSort}
          view={view}
          onPick={() => {
            focusHeading.current = true
            setRailOpen(false)
          }}
        />
        <button type="button" className="scrim" aria-label="Close companies" tabIndex={-1} onClick={closeRail} />

        <main id="main" tabIndex={-1} inert={railOpen ? true : undefined}>
          {store.stale ? (
            <div className="banner" role="status">
              <p>
                <strong>Saved edits from an earlier data pull.</strong> This browser holds numbers for{' '}
                {store.stale.count} {store.stale.count === 1 ? 'company' : 'companies'} saved against{' '}
                {store.stale.asOf || 'an earlier pull'}. The page now shows the {DATA_AS_OF} pull.
                Some of those numbers may be your edits; most are probably the old data.
              </p>
              <div className="banner-act">
                <button type="button" className="ghost" onClick={() => setStore((s) => reapplyStale(s))}>
                  Re-apply my saved numbers
                </button>
                <button type="button" className="ghost" onClick={() => setStore((s) => ({ ...s, stale: null }))}>
                  Use the new data
                </button>
              </div>
            </div>
          ) : null}

          {view === 'company' ? (
            <div className="desk">
              <div className="desk-main">
                <CompanyHeader ticker={ticker} d={d} c={c} row={row} onStep={step} headingRef={headingRef} />
                <Tabs
                  tabs={tabs}
                  active={tab}
                  onSelect={setTab}
                  edited={edited}
                  ticker={ticker}
                  base={c.scen.base}
                  panelId={panelId}
                />
                <div id={panelId} role="tabpanel" aria-labelledby={`tab-${tab}`} className="tabpanel">
                  {body}
                </div>
              </div>
              {wide ? (
                <aside className="desk-side" aria-label={`${ticker} catalysts and news`}>
                  {catalysts(false)}
                </aside>
              ) : null}
            </div>
          ) : null}

          {view === 'compare' ? (
            <CompareView
              data={store.data}
              query={route.query}
              setQuery={setQuery}
              active={store.active}
              onOpen={(k) => {
                focusHeading.current = true
                setStore((s) => ({ ...s, active: k }))
              }}
            />
          ) : null}

          {view === 'news' ? (
            <NewsView
              query={route.query}
              setQuery={setQuery}
              onTicker={(k) => openCompany(k, wide ? 'overview' : 'catalysts')}
              onDriver={onDriver}
            />
          ) : null}
        </main>
      </div>

      <footer inert={railOpen ? true : undefined}>
        <span>Ad Stack 2030 · a personal model, not investment advice</span>
        <span>
          {TICKERS.length} companies · prices and reported figures as of {DATA_AS_OF} · your edits save
          to this browser only
        </span>
      </footer>

      <CommandPalette
        open={palette}
        onClose={() => setPalette(false)}
        rows={rows}
        order={order}
        actions={actions}
        onPick={(k) => openCompany(k)}
      />
      <ShortcutSheet open={keys} onClose={() => setKeys(false)} />

      {toast ? (
        <div className="toast" role="status">
          <span>{toast.msg}</span>
          <button
            type="button"
            className="linkish"
            onClick={() => {
              setStore((s) => ({ ...s, data: toast.undo }))
              setToast(null)
            }}
          >
            Undo
          </button>
        </div>
      ) : null}
      <div className="sr-only" aria-live="polite">
        {live}
      </div>
    </>
  )
}
