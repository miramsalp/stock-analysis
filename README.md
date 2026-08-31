# Ad Stack 2030

A CY2026–CY2030 equity model for 37 companies across 8 sectors. Every company starts at one
share bought at its market price on the reference date, so nothing is sized larger than anything
else by accident. Edit the drivers and every projection, scenario, multiple and IRR on the page
re-runs — then section 07 ranks all 37 against each other on the assumptions you just set.

| Sector | Tickers |
| --- | --- |
| Internet & Ads | APP · META · GOOGL · NFLX · ZETA |
| Semiconductors | MRVL · NVDA · TSM · AVGO · ARM · ASML |
| Consumer & Commerce | AMZN · AAPL · SHOP · COST · KO |
| Software & Security | AXON · MSFT · CRM · NOW · CRWD · PLTR |
| Space & Aerospace | SPCX · RKLB |
| Healthcare | OSCR · HIMS · LLY · UNH |
| Financials | SOFI · V · JPM |
| Power & Digital Assets | IREN · MSTR · CEG · VST · VRT · BE |

Nothing in this list is a recommendation. The coverage names exist so each holding has a
comparison sitting next to it — AVGO against MRVL for custom silicon, LLY against HIMS on the
same GLP-1 question, UNH against OSCR for what mature managed-care margin actually looks like,
NOW against AXON for what a ~90x multiple demands, CEG against IREN on who owns the power, ZETA
against APP and META for what the same ad budget is worth to a company that does not own the
audience, ARM against ASML for two monopolies priced very differently, JPM against SOFI for what
a mature bank multiple looks like, and VST, VRT and BE against IREN and CEG for four ways to sell
the same datacentre buildout.

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
| 01 Position | Shares held and average cost. Everything downstream is priced off these two. Defaults to 1 share at the reference-date market price. |
| 02 Drivers | Editable revenue growth, net margin, EBITDA margin and diluted share count per year, plus the CY2025 revenue base. |
| 03 Build | Derived revenue, net income, EBITDA, EPS, and the implied P/E your entry price represents. |
| 04 Range | Bear / base / bull 2030 endpoints, each with its own revenue, margin and exit multiple, plus a band chart against your cost basis. |
| 05 Multiples | P/E low / high / midpoint price ladder with upside and IRR, cross-checked against EV/EBITDA plus net cash. |
| 06 Verify | Five disclosures to check at the next earnings release, with a checkbox that persists. |
| 07 Rank | All 37 companies sorted by annualised return to 2030, on a basis you choose. |

Two reset buttons sit in the header, and they do different things. **Reset \<TICKER\>** restores
one company's shipped defaults — drivers, scenarios, multiples and position together. **1 share
of everything** rewrites only the two position inputs, across the whole book, to one share at the
reference-date market price; every driver and scenario you have edited is left alone. Use the
second one to put the position column back on a like-for-like footing after experimenting.

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

Seven margins are deliberately set **below** the headline consensus, because consensus EPS for
those names is non-GAAP while this model runs on GAAP:

| Ticker | The gap |
| --- | --- |
| ZETA | $0.96 adjusted against a GAAP trailing **net loss** — the widest here, see below |
| BE | $2.71 implies a 19.4% margin; GAAP trailing is 7.87% |
| ARM | $1.77 implies 38%; GAAP trailing is 20.25% |
| AXON | $7.71 non-GAAP against a reported 4.5% GAAP margin |
| MRVL | $4.05 non-GAAP against the 16% GAAP margin used here |
| VRT | $6.71 implies 18.4%; GAAP trailing is 15.09% — year one sits between the two |
| GOOGL | FY2026 consensus EPS of $20.59 drops to $14.81 in FY2027 because 2026 carries a one-off gain |

Check which basis a consensus EPS is on before trusting it against anything on this page.

### Caveats

An optional `caveat` string renders as an amber note above the summary stats, for tickers where
the earnings-multiple frame does not cleanly fit. **26 of the 37** carry one. The ones worth
knowing about before you read anything else:

- **SPCX** — listed 12 June 2026, so no full year as a public company and no trading history to
  set a multiple against. TTM shows an $8.89B net loss and −$32.52B free cash flow; the share
  count rose 41.79% in a year. Both consensus years assume >135% revenue growth. See below.
- **MSTR** — a bitcoin treasury, so the P/E ladder is noise. See below.
- **ZETA** — the widest GAAP/non-GAAP gap in the book. See below.
- **RKLB** — loss-making at net income, EBITDA and free cash flow simultaneously, on a $38.16B
  cap. No trailing P/E; the forward P/E is 2,834x. The price is a claim about Neutron.
- **BE** — 230x trailing earnings, 143.8x EV/EBITDA, +24.65% share count in one year, and a
  consensus that has revenue more than doubling in 2026.
- **IREN** — fiscal year ends in June; lost $702.6M last year on $4.33B of capex, with trailing
  EBITDA of just $34.7M. Everything past year one is a forecast about a business that does not
  exist yet.
- **ARM** — fiscal year ends 31 March, so columns are offset; 244x trailing earnings; consensus
  EPS is non-GAAP and implies nearly double the GAAP margin.
- **PLTR** — 159x trailing earnings, and the 49% GAAP net margin is flattered by interest income
  and tax items.
- **MRVL** — fiscal year ends in January, so columns are offset; trailing margin is flattered by a
  divestiture gain.
- **JPM** and **SOFI** — balance-sheet lenders, so EV/EBITDA is meaningless; read the P/E ladder,
  and for JPM read it against $133.01 of book value per share.
- **VST** — $20.07B of net debt against a $46.04B cap, so the equity is a levered claim on the
  power price.
- **VRT** — a pure derivative of hyperscaler capex, so holding it beside NVDA, AMZN, MSFT or IREN
  is one bet rather than two.
- **KO** — the frame fits, but the model prices no dividend, and a 2.39% yield is the larger half
  of the expected total return.
- **AXON** — ~250x trailing earnings, so the entry multiple decides the outcome, not growth.

### SPCX is a three-month-old listing

SpaceX came to Nasdaq on **12 June 2026**, which makes it the only entry with no full year as a
public company and no trading history to set a multiple band against. It is also, at a $1.93T
market capitalisation, one of the largest names here — so getting it wrong costs more than
getting a small one wrong.

What the trailing twelve months actually show: **$23.04B of revenue, an $8.89B net loss, and
−$32.52B of free cash flow**, funded out of a $100.01B cash pile, with the share count up
**41.79%** in a year. EV/EBITDA is 317.8x.

Everything that makes the model work happens inside the consensus rather than the history.
Revenue is forecast to rise **139% in 2026 and a further 136% in 2027**, and net margin to go from
**2.7% to 20.6%** across the same step — both consensus figures, both carried straight into the
driver table. Nothing else in this book asks you to believe a margin step that large in one year.
`growth[2..4]` is a guess at how a curve like that decays, and it is a guess about a business that
does not exist yet. Treat the position sizing, not the model, as the risk control here.

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
`--sec-<key>` colour to all three theme blocks in `src/index.css`. The eight accent colours were
validated as a categorical palette **in that declaration order** — adjacent-pair colour-vision
separation passes in both light and dark. If you reorder or add, re-run the validator from the
dataviz skill:

```bash
node scripts/validate_palette.js "#a6650a,#3355c9,#1b7a4f,#7a3fbf,#6b7a0a,#b8356f,#0086a0,#b02a38" --mode light
node scripts/validate_palette.js "#c4841a,#5a7fe8,#35a96f,#a472e0,#829420,#db5f8e,#1f9db0,#dc5057" --mode dark
```

**Space & Aerospace sits fifth in that list for the palette, not for the taxonomy.** Its olive
(`#6b7a0a` / `#829420`) is confusable with the red at the end of the list under deuteranopia —
adjacent ΔE 5.0, a clear FAIL — but separates cleanly between the purple and the pink. Placing it
there passes every check in both modes and, as a side effect, improves the worst normal-vision
adjacent pair from ΔE 17.7 to 24.4 in light and 15.2 to 24.7 in dark. Note the palette passes on
**adjacent** pairs, not all pairs; that has always been true here and is why every chip is
labelled with its ticker and every group with its sector name.

Colour never carries identity alone here — every chip is labelled with its ticker and every group
with its sector name.

An optional `caveat` string renders as an amber note above the summary stats. Use it whenever the
earnings-multiple frame does not cleanly fit: a non-calendar fiscal year, a GAAP/non-GAAP gap
large enough to mislead, a balance-sheet business, or a multiple extreme enough that it — not the
growth rate — decides the outcome. 26 of the 37 carry one, and section 07 marks every ranked row
that has one.
