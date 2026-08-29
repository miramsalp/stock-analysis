# Ad Stack 2030

A CY2026–CY2030 equity model for ten names: **APP**, **META**, **GOOGL**, **OSCR**, **MRVL**,
**IREN**, **HIMS**, **SOFI**, **AXON** and **MSTR**. Enter your shares and average cost, edit the
drivers, and every projection, scenario, multiple and IRR on the page re-runs.

React 19 + Vite. No backend — inputs persist to `localStorage` in your own browser.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
npm run lint     # oxlint
```

## What the page does

| Section | What it holds |
| --- | --- |
| 01 Position | Shares held and average cost. Everything downstream is priced off these two. |
| 02 Drivers | Editable revenue growth, net margin, EBITDA margin and diluted share count per year, plus the CY2025 revenue base. |
| 03 Build | Derived revenue, net income, EBITDA, EPS, and the implied P/E your entry price represents. |
| 04 Range | Bear / base / bull 2030 endpoints, each with its own revenue, margin and exit multiple, plus a band chart against your cost basis. |
| 05 Multiples | P/E low / high / midpoint price ladder with upside and IRR, cross-checked against EV/EBITDA plus net cash. |
| 06 Verify | Five disclosures to check at the next earnings release, with a checkbox that persists. |

## The model

Revenue compounds off the prior year, so one growth edit moves every year after it:

```
rev[i]   = rev[i-1] × (1 + growth[i])        rev[-1] = prevRev (CY2025 base)
ni[i]    = rev[i] × niMargin[i]
eps[i]   = ni[i] / sharesOut[i]
ebitda[i]= rev[i] × ebMargin[i]

price    = eps × P/E                          IRR = (price / cost)^(1 / yearsOut) − 1
evPrice  = (ebitda × evMult + netCash) / sharesOut
```

Scenarios do **not** inherit the driver table — each sets its own 2030 revenue, margin and exit
multiple, so the three cases can disagree about more than one variable at a time.

`yearsOut` counts CY2026 as one year out and CY2030 as five.

## Where the numbers come from

All reported figures, share counts and prices were pulled on **28–29 August 2026** from
[stockanalysis.com](https://stockanalysis.com) (which sources S&P Global consensus), with MSTR's
bitcoin holdings from company 8-K filings. `DATA_AS_OF` in `src/data/tickers.js` carries the date,
and the page footer shows it. **This is a snapshot, not a feed** — re-pull it when it matters.

Each ticker was built the same way:

| Field | How it was set |
| --- | --- |
| `prevRev` | Last reported full fiscal year revenue |
| `growth[0]` | Set so CY2026 lands on the **analyst consensus revenue estimate** |
| `growth[1..4]` | A deceleration path — judgement, not consensus |
| `niMargin[0]` | Set so year one lands near the **consensus EPS** |
| `sharesOut` | Actual current diluted share count, then a dilution/buyback path |
| `peLow` / `peHigh` | A band around where the stock actually trades |
| `netCash` | Total cash less total debt (or market cap less enterprise value) |
| `cost` | The market price on the reference date — a **placeholder** for your real cost basis |

Only **APP** is `sourced: true`: its drivers and the five Q2 CY2026 watch items come from the
owner's own reading of the release, and `cost` is a real entry at $319.46. Everything else has
real reported history and real consensus behind year one, but the 2027–2030 path and the exit
multiples are modelled assumptions.

Three margins are deliberately set **below** the headline consensus, because consensus EPS for
those names is non-GAAP while this model runs on GAAP: **MRVL** ($4.05 non-GAAP vs 16% GAAP
margin here), **AXON** ($7.71 non-GAAP against a reported 4.5% GAAP margin), and **GOOGL**, whose
FY2026 consensus EPS of $20.59 drops to $14.81 in FY2027 because 2026 carries a one-off gain.

### Caveats

An optional `caveat` string renders as an amber note above the summary stats, for tickers where
the earnings-multiple frame does not cleanly fit. Five carry one:

- **MRVL** — fiscal year ends in January, so columns are offset; trailing margin is flattered by a
  divestiture gain.
- **IREN** — fiscal year ends in June; lost $702.6M last year on $4.33B of capex, with trailing
  EBITDA of just $34.7M. Everything past year one is a forecast about a business that does not
  exist yet.
- **SOFI** — a balance-sheet lender, so EV/EBITDA is close to meaningless; read the P/E ladder.
- **AXON** — ~250x trailing earnings, so the entry multiple decides the outcome, not growth.
- **MSTR** — see below.

### MSTR is a special case

A multiple on software earnings does not value Strategy, and reported net income is meaningless:
the trailing twelve months show a **$31.4B loss** purely from bitcoin marks running through the
income statement under fair-value rules. So the P/E ladder for MSTR is noise, and the page says so.

What was done instead: `netCash` is set to the **bitcoin treasury less senior claims** — 840,447
BTC (about 4% of all bitcoin) at a $75,385 average cost, worth roughly $66B, against roughly $22B
of debt and preferreds. That makes the EV/EBITDA **"Implied price per share" row read as
approximate net asset value per share**: about **$115** against a **$127.31** market price, an 11%
premium.

The share count row is the real story. It rises from 384M to 540M, so on a flat bitcoin price NAV
per share falls to about $86 by 2030 even though the bitcoin pile does not shrink. The five watch
items are about bitcoin per share, the NAV premium, average cost against spot, senior claims and
the accounting swing — not software revenue.

Nothing here is investment advice.

## Layout

```
src/
  data/tickers.js          per-company defaults, scenarios and watch items
  lib/model.js             the five-year projection
  lib/format.js            number formatting
  lib/storage.js           localStorage load/persist (numbers only)
  hooks/useTip.js          shared chart tooltip plumbing
  components/              tables, cards, inputs
  components/charts/       hand-rolled SVG band and path charts
  App.jsx                  page shell and state
  index.css                design tokens and all component styles
```

Only numeric fields are persisted. Copy, scenario theses and watch items always come from
`src/data/tickers.js`, so editing that file updates every saved model instead of leaving stale
wording in someone's browser.

## Adding a company

Add an entry to `DEFAULTS` in `src/data/tickers.js` with the same shape as the existing ten, then
add a `--tick-<key>` colour to `src/index.css` (both the light block and the two dark blocks). The
tab strip, tables, charts and watch grid all read from that object — nothing else needs touching.

An optional `caveat` string on a ticker renders as a warning note above the summary stats. Use it
when the earnings-multiple frame does not actually fit the company, as with MSTR.
