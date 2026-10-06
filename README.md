# Ad Stack 2030

A CY2026–CY2030 equity model for 52 companies across 8 sectors. Every company starts at one
share bought at its market price on the reference date, so nothing is sized larger than anything
else by accident. Edit the drivers and every projection, scenario, multiple and IRR on the page
re-runs — then the Compare section at the foot of the page ranks all 52 against each other on
the assumptions you just set.

| Sector | Tickers |
| --- | --- |
| Internet & Ads | APP · META · GOOGL · NFLX · ZETA · TTD · RDDT |
| Semiconductors | MRVL · NVDA · TSM · AVGO · ARM · ASML · AMD · MU |
| Consumer & Commerce | AMZN · AAPL · SHOP · COST · KO · UBER · CHA · GRAB |
| Software & Security | AXON · MSFT · ORCL · CRM · NOW · CRWD · PLTR · SNOW |
| Space & Aerospace | SPCX · RKLB · LMT · ASTS |
| Healthcare | OSCR · HIMS · LLY · UNH |
| Financials | SOFI · V · JPM · HOOD · COIN · BULL |
| Power & Digital Assets | IREN · MSTR · CEG · VST · VRT · BE · NBIS |

Nothing in this list is a recommendation. The coverage names exist so each holding has a
comparison sitting next to it — AVGO against MRVL for custom silicon, LLY against HIMS on the
same GLP-1 question, UNH against OSCR for what mature managed-care margin actually looks like,
NOW against AXON for what an ~80x multiple demands, CEG against IREN on who owns the power, ZETA
against APP and META for what the same ad budget is worth to a company that does not own the
audience, ARM against ASML for two monopolies priced very differently, JPM against SOFI for what
a mature bank multiple looks like, ORCL against MSFT and AMZN for the same AI-capex bet at three
different levels of leverage, UBER against SHOP for two take-rate marketplaces, CHA against COST
at opposite ends of consumer scale, and VST, VRT and BE against IREN and CEG for four ways to sell
the same datacentre buildout.

Ten names were added on **11 September 2026**, on the same principle: TTD against APP for the
demand side of the same ad budget, bought at a multiple that already assumes it is losing;
RDDT against META and GOOGL for what a third-party audience is worth; AMD against NVDA
for the same accelerator market at a different share of it; MU for what a cyclical looks like
priced at a peak; LMT against SPCX and RKLB for a mature prime; ASTS against RKLB one stage
earlier; HOOD against SOFI and COIN against MSTR for two more ways to own the same trading and
crypto exposure; SNOW against PLTR and ORCL on data platforms; and NBIS against IREN for the
other neocloud funded the same way.

**GRAB** and **BULL** were added on **17 September 2026** — GRAB against UBER as the other
take-rate mobility and delivery marketplace, and the cheaper, earlier, riskier version of the same
shape; BULL (Webull) against HOOD and SOFI as a third retail broker at a fraction of the size, and
the only de-SPAC listing in the book. Since the October 2026 re-pull they carry the same reference
date as everything else.

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

The page reads top to bottom, and only the summary card is open by default. Everything that
explains or edits it sits in a collapsed fold underneath, so a first visit answers one question
before it asks you to read a table.

| Part | What it holds |
| --- | --- |
| Header | The ticker select and the two reset buttons. |
| Pick a company | All 52 tickers as a grid, grouped by sector. Clicking one loads it into everything below. |
| Summary card | The selected company in one screen. Its caveat comes first, where it has one, *above* the numbers. Then the price today, the 2030 base-case target, the total gain and the annualised return per year; a bear / base / bull strip with each case's target, per-year return and thesis; one plain-English sentence restating the base and bear cases as assumptions; and the position inputs — shares held and average cost, defaulting to 1 share at the reference-date market price. The returns are measured from that cost, which is why the inputs stay on the card rather than in a fold. |
| Fold · Bear, base and bull in detail | The three editable scenario cards, each setting its own 2030 revenue, margin and exit multiple, and a band chart of the three 2030 prices against your cost. |
| Fold · Growth and margin, year by year | The editable driver table — revenue growth, net margin, EBITDA margin and diluted share count per year, plus the CY2025 revenue base — and the projection it produces: revenue, net income, EBITDA, EPS and the implied P/E your entry price represents. |
| Fold · Valuation cross-check | The P/E low / high / midpoint price ladder with upside and IRR, the EV/EBITDA-plus-net-cash cross-check, and a chart of the midpoint price path. |
| Fold · What to check next quarter | Five disclosures to check at the next earnings release, with a checkbox that persists. |
| Compare | All 52 companies sorted by annualised return to 2030, on a basis you choose, with a note that it ranks your assumptions rather than the companies. |

Two reset buttons sit in the header, and they do different things. **Reset \<TICKER\>** restores
one company's shipped defaults — drivers, scenarios, multiples and position together. **Reset all
positions** rewrites only the two position inputs, across the whole book, to one share at the
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

The Compare section runs every company through its own scenarios and sorts them. It measures from
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

The names that top one list are rarely the names that top another — on the shipped defaults at
the October 2026 pull, the base-case top five and the downside top five share only two names. The chart draws each name
as a **bear-to-bull span** with a marker at the ranking basis, so a wide bar reads as what it is:
a name the model is not confident about.

A ticker can set `rankable: false` with a `rankReason` to stay out of the ranking entirely. Two
do. **MSTR** — its scenario targets run through the same P/E ladder as everything else, and that
ladder is noise for a bitcoin treasury, so ranking on it would place Strategy last for a reason
that has nothing to do with the asset anyone owns it for. And **ASTS**, which trades at 197x
trailing *sales* with no trailing P/E at all: there is no 2030 earnings number solid enough to
sort on, only a view about whether a constellation that does not exist yet gets built. Excluded
names are named under the table, not silently dropped.

## Where the numbers come from

All 52 entries were re-pulled on **6 October 2026**, at the **5 October close**, from the
`/statistics/` and `/forecast/` pages on [stockanalysis.com](https://stockanalysis.com) (which
sources S&P Global consensus). MSTR's bitcoin holdings come from Strategy's 8-K of 5 October, and
the $85,575 bitcoin price is a CoinGecko quote taken on 6 October — a live quote, not a close, so
it is the least precise price in the book. `DATA_AS_OF` in `src/data/meta.js` carries the date,
and the page footer shows it. Every entry now shares that one date; there are no off-date entries
left. **This is a snapshot, not a feed** — re-pull it when it matters.

This replaced the pull dated 10–11 September 2026 (17 September for GRAB and BULL). As in the
fortnight before it, prices moved far more than reported financials: few companies reported a new
quarter in between, and most TTM figures are identical. CRWD rose 30.6% on unchanged estimates,
MSTR 27.9%, SHOP 26.5% and AMD 25.4%; TTD fell 14.2%, AXON 14.0% and NFLX 11.2%. A rising price
on unchanged estimates makes every multiple on the page more demanding without anything in the
business having changed, which is worth keeping in mind when a target looks lower than it did.

Where a consensus or a reported figure itself moved, the entry comment in the data file says so.
The ones that change how an entry reads:

- **GOOGL** — FY2026 consensus EPS fell from $20.60 to $11.81. That is not a collapse in
  expectations: the old figure carried a one-off gain and the new one does not. Year one now lands
  on consensus, so GOOGL has left the below-consensus list further down.
- **AMZN** — consensus EPS is now $8.31, where the September pull recorded $12.55, and it sits
  *below* GAAP. See the UBER paragraph below.
- **MU** — reported FY2026 on 30 September, and its FY2027 estimate is now public. See its own
  section below.
- **ORCL** — total debt rose from $155.93B to $169.14B and the share count from 2.88B to 3.03B
  with no new income statement behind either. That looks like a debt-and-equity raise reaching the
  balance sheet first, but it has **not been checked against a filing**.
- **COST** — FY2026 (ended 30 August) has been reported, and year one now lands on the reported
  figure rather than an estimate.
- **UNH** — not a market move but a correction: `netCash` had held −$41.86B while the September
  header already recorded net debt of $44.74B. It now carries −44.74.

Several FY2027 figures need a follow-up. In September the FY2027 cells on each forecast page's
table went behind stockanalysis.com's paywall, and **ASML, PLTR, RKLB, ZETA, SPCX, JPM, CEG, VST
and VRT** each use an FY2027 consensus in `growth[1]` or `niMargin[1]` that was carried forward
from the 29 August pull. They are still carried forward, unchanged, and both the data file and the
driver comment say so at each site. But the table cells are not the only place the figure
appears: the **"Revenue Next Year" and "EPS Next Year" summary boxes** at the top of the same page
now show FY2027 publicly, and where they were read in this pull they do not always agree with the
carried values — SPCX's box shows +154.01% revenue growth against the carried +136.32%, RKLB's
+41.62% against +42.33%, JPM's +2.82% against +2.51%. The carried values were **kept as-is** for
this pull rather than swapped halfway through. Re-sourcing year two from the summary boxes is the
open follow-up; until it is done, treat year two on those nine as August's consensus, not today's.

For the other entries, every year after the first is modelled judgement, with two exceptions
that come from fiscal years ending away from December. **ARM** ends on 31 March, and its FY2027
estimate is still public and used for year two. **MU** ends in August: year one is now the
**reported** FY2026 rather than an estimate, and year two is the now-public FY2027 consensus.
Offset years also move year one: **SNOW**, ending 31 January, uses the estimate the source labels
FY2027, not FY2026, and so do the other January-year entries. Each says so in its entry comment
and caveat.

`netCash` is defined as total cash less total debt, and for **MU** and **SNOW** the source's own
net-cash figure is larger than that because it counts long-term investments. Both entries carry
the source figure instead, because that is the one the market-cap-less-enterprise-value bridge
agrees with, and `netCash` feeds exactly that bridge. The entry comment records all three numbers.
**OSCR** carries the source figure too, for the opposite reason: as an insurer, much of its cash
is regulatory or restricted, so the source figure is *smaller* than cash less debt.

Three entries need a third page, the `/financials/` annual income statement, because their
forecast tables are on an adjusted basis far from GAAP: **BULL**, **CHA** and **UBER**. That page
was not re-fetched for every entry in this pull; where a GAAP figure is carried from September
(ORCL's FY2026 GAAP EPS of about $5.90, for one), the entry comment says so.

Three currencies are converted rather than reported: **TSM** at NT$31.788 (the Taiwan central
bank's interbank close on 5 October), **ASML** at EUR/USD 1.1204 (the ECB reference rate on 5
October) and **CHA** at USD/CNY 6.70 (a mid-market rate of 6.7048 on 5 October; quotes found
for the same days ranged far enough that the third decimal should be treated as soft). Growth
rates and margins are currency-neutral; every absolute figure for those three moves with the rate,
and ASML's dollar figures fell about 3.6% on the weaker euro alone.

Each ticker was built the same way:

| Field | How it was set |
| --- | --- |
| `prevRev` | Last reported full fiscal year revenue |
| `growth[0]` | Set so CY2026 lands on the **analyst consensus revenue estimate** — or, for MU and COST, on the reported fiscal year that now covers most of CY2026 |
| `growth[1..4]` | A deceleration path — judgement, not consensus. The exceptions are the nine names above, where `growth[1]` is a consensus figure carried forward from August, and ARM and MU, where it is a current public FY2027 estimate |
| `niMargin[0]` | Set so year one lands near the **consensus EPS** — except the nine names below, set deliberately under a non-GAAP consensus, and AMZN, set above one |
| `sharesOut` | Actual current diluted share count, then a dilution/buyback path |
| `peLow` / `peHigh` | A band around where the stock actually trades |
| `netCash` | Total cash less total debt (or market cap less enterprise value) |
| `cost` | The market price on the reference date — a **placeholder** for your real cost basis |

Only **APP** is `sourced: true`: its drivers and the five Q2 CY2026 watch items come from the
owner's own reading of the release, and `cost` is a real entry at $319.46. Its drivers were left
untouched by both re-pulls, so they land CY2026 on $8.00B against a consensus that now sits at
$8.10B — a 1.2% gap, kept rather than quietly overwritten. At the 5 October close the stock was
11.7% below that cost. Everything else has real reported history and real consensus behind year
one, but the 2027–2030 path and the exit multiples are modelled assumptions.

Nine margins are deliberately set **below** the headline consensus, because consensus EPS for
those names is non-GAAP while this model runs on GAAP:

| Ticker | The gap |
| --- | --- |
| ZETA | $0.96 adjusted against a GAAP trailing **net loss** — the widest here, see below |
| CHA | FY2025 consensus basis CNY 10.07 against GAAP EPS of CNY 6.18 for the same year |
| BE | $2.71 implies a 19.4% margin; GAAP trailing is 7.87% |
| ARM | $1.77 implies 38%; GAAP trailing is 20.25% |
| AXON | $7.65 non-GAAP implies about 17%, against a reported 4.5–6% GAAP margin |
| MRVL | $4.21 non-GAAP against the 16% GAAP margin used here |
| ORCL | $8.14 non-GAAP against about $5.90 of GAAP EPS for FY2026 |
| VRT | $6.74 implies 18.5%; GAAP trailing is 15.09% — year one sits between the two |
| BULL | $0.24 for FY2026 implies a 16.07% net margin against a 6.34% GAAP trailing one; the forecast page's own FY2025 comparator is $0.28 against GAAP **−$1.23** |

GOOGL sat in this table until the October pull, on a 2026 consensus inflated by a one-off gain.
That consensus is now normalised at $11.81, and year one lands on it.

**UBER and AMZN run the gap backwards**, and are the reason to check the direction rather than
assume it. UBER's consensus EPS of $3.35 sits *below* GAAP — FY2025 reported $4.73 — because GAAP
earnings carry non-recurring tax and equity-investment gains the estimate strips out. Its forward
P/E (17.13) being higher than its trailing one (15.16) is the same fact. The driver table uses the
lower, consensus-implied margin, which here is the conservative choice.

AMZN now shows the same signature: consensus FY2026 EPS of $8.31 against **$8.53 of GAAP EPS
already reported for the first half of 2026**, and a forward P/E (26.80) above the trailing one
(20.22). The two are treated differently, and that is a judgement call rather than a rule. AMZN's
driver table stays on its GAAP run-rate (16.3%, about $12.51 of year-one EPS), because dropping
year one alone to the ~10.8% consensus-implied margin would leave a cliff into a 2027–2030 path
that was never built for it. So AMZN is the one entry where year one sits deliberately *above* the
headline consensus. If you prefer the UBER treatment, lower year one and revisit the later years
and the base-case margin together.

Check which basis a consensus EPS is on, and which direction it runs, before trusting it against
anything on this page.

### Caveats

An optional `caveat` string renders as an amber note on the summary card, above the price and the
targets, for tickers where the earnings-multiple frame does not cleanly fit. **43 of the 52** carry
one, and all ten of the names added on 11 September 2026 do. The ones worth knowing about before
you read anything else (multiples are at the 5 October 2026 close):

- **SPCX** — listed 12 June 2026, so no full year as a public company and under four months of
  trading history to set a multiple against. TTM shows an $8.89B net loss and −$32.52B free cash
  flow; the share count rose 41.79% in a year. Both consensus years assume >135% revenue growth.
  See below.
- **MSTR** — a bitcoin treasury, so the P/E ladder is noise. See below.
- **ASTS** — 197x trailing sales, no trailing P/E, −$1.64B free cash flow and a share count up
  39.67% in a year. Excluded from the ranking for the same reason MSTR is.
- **MU** — the clearest cyclical here, and one of the entries whose base case sits below the
  current price. FY2026 is now reported — revenue up 256.33% at a 63.80% net margin — and consensus
  has FY2027 more than doubling again; the driver table reverts margin toward 35% by 2030 rather
  than holding it. See below.
- **SNOW** — $1.20B of free cash flow and a $1.09B GAAP net loss in the same twelve months, almost
  entirely stock compensation. On the adjusted basis the consensus uses, the same revenue path
  produces roughly twice the EPS.
- **TTD** — consensus has revenue *falling* 4.96% in year one, one of three here that do (with
  COIN and UNH). In September the price target sat below the market price; after a 14.2% fall it
  now sits 13.52% above it, on almost unchanged estimates.
- **NBIS** — 1,416x trailing earnings, 47x sales, −$5.88B free cash flow against $11.14B of capex,
  and +22.12% shares in a year. The same trade as IREN, funded the same way.
- **COIN** — GAAP loss-making *and* shrinking in the consensus year. Read it with MSTR and HOOD:
  three entries earning from one asset price.
- **HOOD** — a broker, so EV/EBITDA is meaningless; the source publishes none. Much of the margin
  is net interest on customer balances, which is a rate bet.
- **BULL** — listed 11 April 2025 through a de-SPAC, so under eighteen months of history and a
  share count up 147.11% in a year. FY2024 and FY2025 show GAAP net losses of $517.78M and $487.52M
  against *positive* operating income; the losses are listing-related. Consensus EPS is adjusted and
  year one here sits about 61% below it. No EBITDA published, so ignore the EV row as with HOOD.
  See below.
- **GRAB** — trailing operating income is $138.00M on $3.73B of revenue, a 3.70% margin, while net
  income is $598.00M, a 16.03% margin, because most of the profit is interest on $6.53B of cash.
  Free cash flow is negative over the same twelve months. Net cash is about 35% of the market
  capitalisation, so the P/E ladder and the EV/EBITDA cross-check disagree by construction. Read it
  with HOOD: two entries whose reported profitability is substantially a rate bet.
- **AMD** — 161x trailing earnings and 107x EV/EBITDA, so the entry multiple decides the outcome.
  After a 25% rise since September the base case now lands fractionally below the price. The
  MI-series path makes it the same bet as NVDA, not a diversification of it.
- **RDDT** — consensus EPS implies a ~44% net margin; reported FY2025 *operating* margin was
  20.06%, and the trailing net margin is flattered by interest income and tax items.
- **LMT** — the frame fits, but the model prices no dividend and a 2.72% yield is a large part of
  the return. A fixed-price programme charge can remove a year of profit with no warning.
- **ZETA** — the widest GAAP/non-GAAP gap in the book. See below.
- **ORCL** — the most leveraged AI-capex bet here: free cash flow of −$28.72B, net debt of
  $132.06B, and an enterprise value more than a quarter larger than the market cap. See below.
- **RKLB** — loss-making at net income, EBITDA and free cash flow simultaneously, on a $43.70B
  cap. No trailing P/E; the forward P/E is about 3,461x. The price is a claim about Neutron.
- **BE** — 323x trailing earnings, 202x EV/EBITDA, +24.65% share count in one year, and a
  consensus that has revenue more than doubling in 2026. The multiple keeps getting worse: the
  price rose about 27% in the fortnight to 10 September and a further 10.9% by 5 October, both on
  unchanged estimates, and now sits above the consensus price target.
- **IREN** — fiscal year ends in June; lost $702.62M last year, with trailing EBITDA of just
  $38.35M and free cash flow of −$2.23B. The Altman Z-score is 0.98. Everything past year one is a
  forecast about a business that does not exist yet.
- **ARM** — fiscal year ends 31 March, so columns are offset; 310x trailing earnings; consensus
  EPS is non-GAAP and implies nearly double the GAAP margin.
- **CHA** — reports in yuan and trades in dollars; the consensus EPS is adjusted and about 60%
  above GAAP; the share count rose 44.05% in a year, the fastest here. It is also the cheapest
  entry in the book on every multiple, which is the thing to explain before buying it.
- **HIMS** — consensus FY2026 EPS has been cut from $0.54 in August to $0.29 in September and
  $0.28 now, and the trailing twelve months are a GAAP net loss with an Altman Z-score of 1.98.
- **PLTR** — 161x trailing earnings, and the 49% GAAP net margin is flattered by interest income
  and tax items.
- **MRVL** — fiscal year ends in January, so columns are offset; trailing margin is flattered by a
  divestiture gain; up 214.60% over 52 weeks to 91x trailing earnings. `peHigh` was raised from 45
  to 50 in October so the band still brackets the forward multiple — a band that follows the price
  is a description, not a valuation.
- **UBER** — the GAAP/non-GAAP gap runs backwards, so the consensus EPS is *below* GAAP rather
  than above it. AMZN now shows the same signature. The model cannot see the autonomous-vehicle
  question that decides the decade.
- **JPM** and **SOFI** — balance-sheet lenders, so EV/EBITDA is meaningless; read the P/E ladder,
  and for JPM read it against $133.01 of book value per share.
- **VST** — $20.07B of net debt against a $48.63B cap, so the equity is a levered claim on the
  power price.
- **VRT** — a pure derivative of hyperscaler capex, so holding it beside NVDA, AMZN, MSFT, ORCL or
  IREN is one bet rather than two.
- **ASML** — reports in euros and trades in dollars. Until the September 2026 pull the revenue line
  sat in euros against a dollar share price, which understated the implied P/E by roughly the
  exchange rate; it is now converted at 1.1204.
- **TSM** — reports in New Taiwan dollars, and the ADR-equivalent share count is derived from
  market cap divided by the ADR price rather than from the 5:1 ratio, which do not agree. That
  count was derived on 10 September 2026 and deliberately not re-derived in October: the same
  division today gives about 4.32B rather than 4.696B, because the ADR's premium over the Taipei
  line widened, not because the share count changed.
- **KO** — the frame fits, but the model prices no dividend, and a 2.45% yield is close to half
  of the expected total return.
- **AXON** — ~170x trailing earnings, so the entry multiple decides the outcome, not growth.

### SPCX has under four months of trading history

SpaceX came to Nasdaq on **12 June 2026**, which makes it the only entry with no full year as a
public company and no meaningful trading history to set a multiple band against. It is also, at a
$2.32T market capitalisation, one of the largest names here — so getting it wrong costs more than
getting a small one wrong.

What the trailing twelve months actually show: **$23.04B of revenue, an $8.89B net loss, and
−$32.52B of free cash flow**, funded out of a $100.01B cash pile, with the share count up
**41.79%** in a year. EV/EBITDA is 383.6x, up from 330.8x in September on a 15.5% higher price and
the same trailing figures.

Everything that makes the model work happens inside the consensus rather than the history.
Revenue is forecast to rise **about 139% in 2026 and a further 136% in 2027**, and net margin to go
from **2.8% to about 21%** across the same step. Nothing else in this book asks you to believe a
margin step that large in one year. Two of those inputs are softer than they look:

- The **2027 figure is August's**, carried forward from before the paywall. The forecast page's
  "Next Year" summary box now shows a *higher* FY2027 consensus — $113.50B of revenue, +154.01%,
  and $1.93 of EPS, against the carried +136% and $1.58. It was not adopted in this pull.
- The **2026 EPS could not be verified.** The page shows **−$0.09** for FY2026, in both the table
  and the summary box, while the same table shows FY2026 net income of **+$1.90B**; the September
  pull recorded +$0.09. Whether that is a sign error at the source, an IPO-year effect on earnings
  attributable to common, or a September misread is not resolvable from the public page.
  `niMargin[0]` stays at 2.8% until it is.

`growth[2..4]` is a guess at how a curve like that decays, and it is a guess about a business that
does not exist yet. Treat the position sizing, not the model, as the risk control here.

### ZETA has the widest GAAP gap in the book

The same problem AXON and MRVL have, an order of magnitude larger. The FY2026 consensus EPS of
**$0.96 is adjusted**; on GAAP the trailing twelve months show a **$2.17M net loss** on $1.57B of
revenue. Trailing EBITDA is **$115.94M — 7.4% of revenue** — against the roughly 20% adjusted
EBITDA margin the company reports. Stock compensation is most of both gaps, so `niMargin` starts
at 1% and `ebMargin` at 8%, not at anything resembling the headline numbers. None of those
reported figures, nor the consensus, moved in either re-pull —
only the price and the price target did.

That makes it a share count problem as much as a margin one. The diluted count rose **13.60% in a
single year**, to 251.01M. The `sharesOut` path assumes that decelerates to about 4% and then
below — an assumption, and the one in this entry most likely to be too kind.

Two things frame the result. The stock sits at **$32.88, 3.77% above a $31.64 consensus price
target**, and at **70.4x EV/EBITDA**, so `evMult` is set to 20 rather than held at today's multiple
— the base case is earnings catching up to the multiple, not the multiple re-rating. And **free
cash flow of $224.41M exceeds both trailing EBITDA and reported net income**, because compensation
paid in stock costs no cash. That single comparison is the bull case and the 2024 short thesis
restated as one number, which is why the watch items track free cash flow *per share* rather than
in total.

### MSTR is a special case

A multiple on software earnings does not value Strategy, and reported net income is meaningless:
the trailing twelve months show a **$31.4B loss** purely from bitcoin marks running through the
income statement under fair-value rules. So the P/E ladder for MSTR is noise, and the page says so.

What was done instead: `netCash` is set to the **bitcoin treasury less senior claims** — 848,000
BTC (about 4% of all bitcoin) at a blended cost of about $75,441, worth roughly **$72.6B** at an
$85,575 bitcoin price on 6 October 2026, against roughly $22B of debt and preferreds. That last
figure is still carried forward from the August pull and is the softest number in the entry;
Strategy has been buying back some of its STRC preferred since, which would nudge it down, and the
bridge also ignores its separate USD reserve. The result makes the EV/EBITDA **"Implied price per
share" row read as approximate net asset value per share**: about **$135** against a **$164.43**
market price, a premium of roughly 22%, up from about 12% in September.

The cushion has rebuilt, on the bitcoin price alone. Spot sits about **13% above the treasury's
own blended cost**, where on 10 September it was about 2%. Nothing in the treasury's behaviour
changed: the latest tranche — 334 BTC at about $85,839 — was again bought slightly *above* the
spot price used here, which raises the average and thins the cushion in the same transaction. A
cushion that rebuilt on an 11% move in bitcoin can thin the same way.

The share count row is still the real story. It rises from 384M to 540M, so on a flat bitcoin
price NAV per share falls to about $98 by 2030 even though the bitcoin pile does not shrink. The
five watch items are about bitcoin per share, the NAV premium, blended cost against spot, senior
claims and the accounting swing — not software revenue.

### ORCL is the leveraged version of the AI-capex bet

Every hyperscaler in this book is spending ahead of the revenue. Oracle is the one doing it with
borrowed money, and the market has already repriced it: the stock is **down 50.21% over 52 weeks**.

Free cash flow is **−$28.72B** against $34.43B of trailing EBITDA. Net debt is **$132.06B**, so
enterprise value ($563.99B) exceeds market capitalisation ($431.93B) by more than a quarter — the
only name here where the debt is a larger part of the story than the equity. AMZN and MSFT carry
the same shape at a fraction of the leverage: Amazon's free cash flow has just turned negative
(−$11.63B on $173.03B of capex) and Microsoft converts only half its net income to cash.

The leverage rose between pulls without a new income statement to explain it. Total debt went
from $155.93B to **$169.14B** and the share count from 2.88B to **3.03B**, while trailing revenue,
net income, cash and free cash flow did not move at all. That is consistent with a debt-and-equity
raise reaching the balance sheet ahead of the next quarter, but it **has not been checked against a
filing**. The model takes the new count, which together with a slightly higher revenue
consensus moves year-one EPS from about $6.52 to $6.27.

Three qualifications sit on top. The fiscal year ends **31 May**, so the CY2026 column is built
from FY2027 and the calendar labels are offset by roughly half a year. The $8.14 consensus EPS is
non-GAAP against about **$5.90** of GAAP EPS for FY2026 — a figure carried from the September pull,
not re-fetched. And the +34.28% consensus growth rate is a backlog-conversion forecast — it assumes
contracted AI compute is delivered on schedule, which requires the capex producing the negative
free cash flow in the first place.

`niMargin` therefore starts at **21%**, below both the 25.2% Oracle actually earned in FY2026 and
the ~27% the consensus EPS implies, because neither of those carries the depreciation on assets
being bought now or the interest on $169.14B of debt. That step down is the single most important
assumption in the entry, and it is judgement rather than consensus.

### MU's base case sits below the current price

Micron's shipped base case values the equity well *below* what it trades at today, and that is the
honest output of the model rather than a slip in it. It is not the only entry where that is true —
after a month in which several prices rose on unchanged estimates, a dozen base cases land below
the price — but it is the one where the reason is clearest.

Micron reported FY2026 on 30 September: **$133.19B of revenue, up 256.33%**, at a **63.80%** GAAP
net margin and **$74.33** of GAAP diluted EPS. Year one now uses those reported figures rather than
a consensus. Year two uses the FY2027 consensus, which is now public: **$274.73B, up a further
106.27%**, on **$176.42** of EPS — scaled down slightly to a GAAP basis, a net margin above 70%.
Both years are a cycle peak. Memory has never held one for five years, so `niMargin` drops to 42%
in 2028 and reverts toward **35%** by 2030 — a sharp turn, and judgement rather than consensus —
leaving the driver table at roughly $101 of 2030 EPS, against $75 in year one and $174 in year two.

The base scenario is more cautious still, and it does not inherit the driver table. It assumes
2030 revenue of $177.21B — barely a third above FY2026 and well below what consensus expects for
FY2027 alone — at a 38% margin and an 11x exit multiple, a mid-cycle memory multiple rather than a
growth-stock one. That is roughly **$673 against a $1,063.96 share price**, about −8.7% a year.
The gap between the driver table and the base scenario is itself the point: the two disagree about
how fast the cycle turns.

Reverse the single assumption and the answer reverses with it. If high-bandwidth memory has made
this business structurally less cyclical than it has ever been, the 2030 margin and the exit
multiple are both too low, and the entry looks entirely different. **That is the argument, and
the page exists so you can have it with the numbers in front of you** — the ranking says it ranks
assumptions rather than companies, and this is what that sentence means in practice.

Two mechanical notes. The fiscal year ends in **August** (FY2026 was a 53-week year to 3
September), so every column sits about a quarter behind the calendar. And the 6.03x forward P/E
is struck against that FY2027 estimate — the market is paying very little for a year consensus
already expects to be the largest in the company's history, which is a statement about how much
the market trusts the estimate, not a bargain the model has found.

### BULL is the only de-SPAC here, and its GAAP history says so

Webull began trading on Nasdaq on **11 April 2025** through a business combination with SK Growth
Opportunities. Everything odd about the entry follows from that, and none of it is a modelling
error.

The share count is up **147.11%** in twelve months, to 539.62M — the count itself did not change
between pulls; the year-ago base it is measured against did. FY2024 and FY2025 report GAAP net
losses of **$517.78M** and **$487.52M** — while FY2025 operating income was **positive $53.01M**.
Losses that large against a profitable operating line are listing accounting, not the business, so
the watch items tell you to read income from operations first. The trailing twelve months to June
2026, which sit mostly after the charges, show $672.28M of revenue, **$77.23M of operating income
(11.49%)** and **$42.60M of net income (6.34%)**.

That 6.34% is what `niMargin[0]` uses, and it is why this entry joins the nine that sit below the
headline. Consensus EPS for FY2026 is **$0.24**, which implies a **16.07%** net margin — higher
than the margin the business currently earns at the *operating* line. The forecast page's own
FY2025 comparator is **$0.28**, against GAAP **−$1.23**. Year one here lands near **$0.09**, about
**61% below** the headline, deliberately.

Three more things frame it. There is **no published EBITDA and no EV/EBITDA**, because it is a
broker — so `ebMargin` and `evMult` are placeholders and the EV row is noise, exactly as in HOOD.
The **$1.85B of net cash is 47% of the market capitalisation** but sits on a balance sheet holding
customer money; it is not distributable. And year one rests on **four analysts**, against twenty to
fifty everywhere else in this book, with FY2027 paywalled — so nothing after the first column is
sourced at all. At **92.90x trailing earnings**, the exit multiple decides this entry, not the
growth rate.

Nothing here is investment advice.

## Layout

```
src/
  data/meta.js             years, scenario keys, DATA_AS_OF
  data/sectors.js          the 8 sector groups and their render order
  data/tracked.js          the 10 names this was built around
  data/watchlist.js        the 42 coverage names
  data/tickers.js          merges both, groups by sector
  lib/model.js             the five-year projection
  lib/rank.js              cross-company ranking and its three bases
  lib/format.js            number formatting
  lib/storage.js           localStorage load/persist (numbers only)
  hooks/useTip.js          shared chart tooltip plumbing
  components/              tables, cards, inputs, ticker picker
  components/Summary.jsx   the summary card: caveat, headline stats, bear/base/bull strip, position
  components/Fold.jsx      the collapsible <details> wrapper for the four folds
  components/Leaderboard.jsx  Compare: controls, ranked table, honesty note
  components/charts/       hand-rolled SVG band, path and rank charts
  App.jsx                  page shell and state
  index.css                design tokens and all component styles
```

`tracked.js` and `watchlist.js` have identical shape — the split is editorial, not structural.

Only numeric fields are persisted. Copy, scenario theses and watch items always come from
the data files in `src/data/`, so editing them updates every saved model instead of leaving
stale wording in someone's browser.

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

An optional `caveat` string renders as an amber note on the summary card, above the price and
the targets. Use it whenever the earnings-multiple frame does not cleanly fit: a non-calendar
fiscal year, a GAAP/non-GAAP gap large enough to mislead, a balance-sheet business, or a multiple
extreme enough that it — not the growth rate — decides the outcome. 43 of the 52 carry one, and
the Compare ranking marks every ranked row that has one.
