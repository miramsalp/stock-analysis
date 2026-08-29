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

**APP** ships with the owner's own figures and the five Q2 CY2026 watch items behind them.

**Every other ticker** ships with modelled defaults — reasonable, but not company guidance, and
the `shares` / `cost` values are placeholders to overwrite with your real position. Their watch
items are deliberately structural: they name the disclosure to read rather than a number
management has committed to. Each is flagged in the page with a source note. Replace them with
real guided figures as releases land.

### MSTR is a special case

A multiple on software earnings does not value Strategy, so the P/E ladder for MSTR is noise —
the model shows it, and the page says so in a caveat above the summary stats. What was done
instead: `netCash` is set to the bitcoin treasury less convertible debt, which makes the
**EV/EBITDA "Implied price per share" row read as approximate net asset value per share**.
Compare the market price against that to see the premium you are paying. The diluted share count
row is the other half of the story, because issuing stock above NAV is the strategy. The five
watch items are about bitcoin per share, mNAV, issuance, debt maturities and the fair-value
accounting swing — not about software revenue.

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
