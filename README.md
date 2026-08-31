# Ad Stack 2030

A CY2026–CY2030 equity model for 27 companies across 7 sectors. Enter your shares and average
cost, edit the drivers, and every projection, scenario, multiple and IRR on the page re-runs —
then section 07 ranks all 27 against each other on the assumptions you just set.

| Sector | Tickers |
| --- | --- |
| Internet & Ads | APP · META · GOOGL · NFLX · ZETA |
| Semiconductors | MRVL · NVDA · TSM · AVGO |
| Consumer & Commerce | AMZN · AAPL · SHOP · COST |
| Software & Security | AXON · MSFT · CRM · NOW · CRWD |
| Healthcare | OSCR · HIMS · LLY · UNH |
| Financials | SOFI · V |
| Power & Digital Assets | IREN · MSTR · CEG |

Nothing in this list is a recommendation. The coverage names exist so each holding has a
comparison sitting next to it — AVGO against MRVL for custom silicon, LLY against HIMS on the
same GLP-1 question, UNH against OSCR for what mature managed-care margin actually looks like,
NOW against AXON for what a ~90x multiple demands, CEG against IREN on who owns the power, ZETA
against APP and META for what the same ad budget is worth to a company that does not own the
audience.

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
| 07 Rank | All 27 companies sorted by annualised return to 2030, on a basis you choose. |

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

### The ranking

Section 07 runs every company through its own scenarios and sorts them. It measures from
`priceRef` — the market price on the reference date — not from `cost`, so the ordering asks the
same forward question for everyone instead of depending on what any one holder paid. The
cost-basis return travels alongside in its own column.

```
weighted = 0.25 × bear.target + 0.50 × base.target + 0.25 × bull.target
return   = (target / priceRef)^(1/5) − 1        target ≤ 0 → −1 (total loss)
```

Three ranking bases, because one hides the trade-off:

| Basis | Sorts on | Rewards |
| --- | --- | --- |
| Expected | the 25 / 50 / 25 weighted target | the whole distribution |
| Base case | `base.target` alone | the central estimate |
| Downside first | `bear.target` alone | survivability |

The names that top one list are rarely the names that top another — on the shipped defaults,
only four of the base-case top five survive into the downside top five. The chart draws each name
as a **bear-to-bull span** with a marker at the ranking basis, so a wide bar reads as what it is:
a name the model is not confident about.

A ticker can set `rankable: false` with a `rankReason` to stay out of the ranking entirely. Only
**MSTR** does — its scenario targets run through the same P/E ladder as everything else, and that
ladder is noise for a bitcoin treasury, so ranking on it would place Strategy last for a reason
that has nothing to do with the asset anyone owns it for. Excluded names are named under the
table, not silently dropped.

## Where the numbers come from

All reported figures, share counts and prices were pulled on **28–29 August 2026** from
[stockanalysis.com](https://stockanalysis.com) (which sources S&P Global consensus), with MSTR's
bitcoin holdings from company 8-K filings and ZETA pulled two days later, on 31 August 2026. `DATA_AS_OF` in `src/data/tickers.js` carries the date,
and the page footer shows it. **This is a snapshot, not a feed** — re-pull it when it matters.

Each ticker was built the same way:

| Field | How it was set |
| --- | --- |
| `prevRev` | Last reported full fiscal year revenue |
| `growth[0]` | Set so CY2026 lands on the **analyst consensus revenue estimate** |
| `growth[1..4]` | A deceleration path — judgement, not consensus. **ZETA** is the exception: FY2027 consensus was published too, so `growth[1]` is consensus there and only `growth[2..4]` are judgement |
| `niMargin[0]` | Set so year one lands near the **consensus EPS** |
| `sharesOut` | Actual current diluted share count, then a dilution/buyback path |
| `peLow` / `peHigh` | A band around where the stock actually trades |
| `netCash` | Total cash less total debt (or market cap less enterprise value) |
| `cost` | The market price on the reference date — a **placeholder** for your real cost basis |

Only **APP** is `sourced: true`: its drivers and the five Q2 CY2026 watch items come from the
owner's own reading of the release, and `cost` is a real entry at $319.46. Everything else has
real reported history and real consensus behind year one, but the 2027–2030 path and the exit
multiples are modelled assumptions.

Four margins are deliberately set **below** the headline consensus, because consensus EPS for
those names is non-GAAP while this model runs on GAAP: **MRVL** ($4.05 non-GAAP vs 16% GAAP
margin here), **AXON** ($7.71 non-GAAP against a reported 4.5% GAAP margin), **GOOGL**, whose
FY2026 consensus EPS of $20.59 drops to $14.81 in FY2027 because 2026 carries a one-off gain, and
**ZETA**, where the gap is widest of all — see below.

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
- **ZETA** — the widest GAAP/non-GAAP gap in the book, see below.
- **MSTR** — see below.

### ZETA has the widest GAAP gap in the book

The same problem AXON and MRVL have, an order of magnitude larger. The FY2026 consensus EPS of
**$0.96 is adjusted**; on GAAP the trailing twelve months show a **$2.17M net loss** on $1.571B of
revenue. Trailing EBITDA is **$115.94M — 7.4% of revenue** — against the roughly 20% adjusted
EBITDA margin the company reports. Stock compensation is most of both gaps, so `niMargin` starts
at 1% and `ebMargin` at 8%, not at anything resembling the headline numbers.

That makes it a share count problem as much as a margin one. The diluted count rose **13.60% in a
single year**, to 251.01M. The `sharesOut` path assumes that decelerates to about 4% and then
below — an assumption, and the one in this entry most likely to be too kind.

Two things frame the result. The stock sits at **$30.91 against a $31.36 consensus price target**
and **65.3x EV/EBITDA**, so `evMult` is set to 20 rather than held at today's multiple — the base
case is earnings catching up to the multiple, not the multiple re-rating. And **free cash flow of
$224.41M exceeds both trailing EBITDA and reported net income**, because compensation paid in
stock costs no cash. That single comparison is the bull case and the 2024 short thesis restated as
one number, which is why the watch items track free cash flow *per share* rather than in total.

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
  data/meta.js             years, scenario keys, DATA_AS_OF
  data/sectors.js          the 7 sector groups and their render order
  data/tracked.js          the 10 names this was built around
  data/watchlist.js        the 16 coverage names
  data/tickers.js          merges both, groups by sector
  lib/model.js             the five-year projection
  lib/rank.js              cross-company ranking and its three bases
  lib/format.js            number formatting
  lib/storage.js           localStorage load/persist (numbers only)
  hooks/useTip.js          shared chart tooltip plumbing
  components/              tables, cards, inputs, ticker picker
  components/Leaderboard.jsx  section 07: controls, ranked table, honesty note
  components/charts/       hand-rolled SVG band, path and rank charts
  App.jsx                  page shell and state
  index.css                design tokens and all component styles
```

`tracked.js` and `watchlist.js` have identical shape — the split is editorial, not structural.

Only numeric fields are persisted. Copy, scenario theses and watch items always come from
`src/data/tickers.js`, so editing that file updates every saved model instead of leaving stale
wording in someone's browser.

## Adding a company

Add an entry to `WATCHLIST` in `src/data/watchlist.js` with the same shape as the others, giving
it a `sector` key that already exists. The picker, tables, charts and watch grid all read from
that object — nothing else needs touching.

Adding a *new sector* means adding it to `SECTORS` in `src/data/sectors.js` and a matching
`--sec-<key>` colour to all three theme blocks in `src/index.css`. The seven accent colours were
validated as a categorical palette **in that declaration order** — adjacent-pair colour-vision
separation passes in both light and dark. If you reorder or add, re-run the validator from the
dataviz skill:

```bash
node scripts/validate_palette.js "#a6650a,#3355c9,#1b7a4f,#7a3fbf,#b8356f,#0086a0,#b02a38" --mode light
node scripts/validate_palette.js "#c4841a,#5a7fe8,#35a96f,#a472e0,#db5f8e,#1f9db0,#dc5057" --mode dark
```

Colour never carries identity alone here — every chip is labelled with its ticker and every group
with its sector name.

An optional `caveat` string renders as an amber note above the summary stats. Use it whenever the
earnings-multiple frame does not cleanly fit: a non-calendar fiscal year, a GAAP/non-GAAP gap
large enough to mislead, a balance-sheet business, or a multiple extreme enough that it — not the
growth rate — decides the outcome. Seventeen of the 27 carry one, and section 07 marks every
ranked row that has one.
