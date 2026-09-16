# Ad Stack 2030

A CY2026–CY2030 equity model for 52 companies across 8 sectors. Every company starts at one
share bought at its market price on the reference date, so nothing is sized larger than anything
else by accident. Edit the drivers and every projection, scenario, multiple and IRR on the page
re-runs — then section 07 ranks all 52 against each other on the assumptions you just set.

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
the only de-SPAC listing in the book. Both were pulled that day rather than on the reference date
the rest of the book carries, so their prices and multiples are a week younger than everything
else here.

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
| 07 Rank | All 52 companies sorted by annualised return to 2030, on a basis you choose. |

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

A ticker can set `rankable: false` with a `rankReason` to stay out of the ranking entirely. Two
do. **MSTR** — its scenario targets run through the same P/E ladder as everything else, and that
ladder is noise for a bitcoin treasury, so ranking on it would place Strategy last for a reason
that has nothing to do with the asset anyone owns it for. And **ASTS**, which trades at 202x
trailing *sales* with no trailing P/E at all: there is no 2030 earnings number solid enough to
sort on, only a view about whether a constellation that does not exist yet gets built. Excluded
names are named under the table, not silently dropped.

## Where the numbers come from

All reported figures, share counts and prices were pulled on **10–11 September 2026** from
[stockanalysis.com](https://stockanalysis.com) (which sources S&P Global consensus), with MSTR's
bitcoin holdings and the $76,902 bitcoin price taken alongside it. `DATA_AS_OF` in
`src/data/tickers.js` carries the date, and the page footer shows it. **This is a snapshot, not a
feed** — re-pull it when it matters.

This replaced an earlier pull dated 28–29 August 2026. A fortnight moved prices and price targets
far more than it moved reported financials: most TTM figures were identical, while AXON fell about
20%, SHOP 17%, BE rose 27% and ORCL sat 36.67% below where it traded a year earlier. Where a
consensus estimate itself moved — HIMS FY2026 EPS halved from $0.54 to $0.29, MRVL's next-year
revenue rose from $11.56B to $12.05B — the entry comment in the data file says so.

One thing got worse between the two pulls: several FY2027 consensus figures that were public in
August are now behind stockanalysis.com's paywall. **ASML, PLTR, RKLB, ZETA, SPCX, JPM, CEG, VST
and VRT** each use one in `growth[1]` or `niMargin[1]`. Those values are carried forward from the
August pull rather than re-sourced, and both the data file and the driver comment say so at each
site. Re-source them before leaning on year two.

The ten names added on 11 September 2026 were pulled the same way, from the `/statistics/` and
`/forecast/` pages for each ticker. The paywall meant none of them could source an FY2027 figure,
so for those ten **every year after the first is modelled judgement** rather than carried-forward
consensus — SNOW is the one exception, because its January fiscal year puts a still-public
estimate over CY2026. Two of the ten sit on a non-calendar year: **MU** ends in August and
**SNOW** on 31 January, which is offset far enough that year one uses the estimate the source
labels FY2027, not FY2026. Both say so in the entry comment and the caveat.

`netCash` is defined as total cash less total debt, and for **MU** and **SNOW** the source's own
net-cash figure is larger than that because it counts long-term investments. Both entries carry
the source figure instead, because that is the one the market-cap-less-enterprise-value bridge
agrees with, and `netCash` feeds exactly that bridge. The entry comment records all three numbers.

**GRAB** and **BULL** are the two entries not on the reference date. Both were pulled on
**17 September 2026**, a week later, from the same pages, so their prices, market capitalisations
and every multiple derived from them sit a week ahead of the other fifty. `DATA_AS_OF` was
deliberately left at 10 September rather than moved forward, because moving it would claim a
re-pull of fifty entries that did not happen; the two entry comments carry their own date instead.
Both have a paywalled FY2027 consensus, so for both, every year after the first is modelled
judgement. BULL needed a third page — the `/financials/` annual income statement — because its
forecast table is on an adjusted basis far from GAAP, the same reason CHA and UBER need one.

Three currencies are converted rather than reported: **TSM** at NT$31.5, **ASML** at EUR/USD
1.1627 and **CHA** at USD/CNY 6.71. Growth rates and margins are currency-neutral; every absolute
figure for those three moves with the rate.

Each ticker was built the same way:

| Field | How it was set |
| --- | --- |
| `prevRev` | Last reported full fiscal year revenue |
| `growth[0]` | Set so CY2026 lands on the **analyst consensus revenue estimate** |
| `growth[1..4]` | A deceleration path — judgement, not consensus. The exceptions are the nine names above whose FY2027 consensus was published in August, where `growth[1]` is a (now paywalled) consensus figure and only `growth[2..4]` are judgement |
| `niMargin[0]` | Set so year one lands near the **consensus EPS** |
| `sharesOut` | Actual current diluted share count, then a dilution/buyback path |
| `peLow` / `peHigh` | A band around where the stock actually trades |
| `netCash` | Total cash less total debt (or market cap less enterprise value) |
| `cost` | The market price on the reference date — a **placeholder** for your real cost basis |

Only **APP** is `sourced: true`: its drivers and the five Q2 CY2026 watch items come from the
owner's own reading of the release, and `cost` is a real entry at $319.46. Its drivers were left
untouched by the September re-pull, so they land CY2026 on $8.00B against a consensus that has
since moved to $8.11B — a 1.4% gap, kept rather than quietly overwritten. Everything else has
real reported history and real consensus behind year one, but the 2027–2030 path and the exit
multiples are modelled assumptions.

Ten margins are deliberately set **below** the headline consensus, because consensus EPS for
those names is non-GAAP while this model runs on GAAP:

| Ticker | The gap |
| --- | --- |
| ZETA | $0.96 adjusted against a GAAP trailing **net loss** — the widest here, see below |
| CHA | FY2025 consensus basis CNY 10.07 against GAAP EPS of CNY 6.18 for the same year |
| BE | $2.71 implies a 19.4% margin; GAAP trailing is 7.87% |
| ARM | $1.77 implies 38%; GAAP trailing is 20.25% |
| AXON | $7.67 non-GAAP against a reported 4.5% GAAP margin |
| MRVL | $4.20 non-GAAP against the 16% GAAP margin used here |
| ORCL | $8.06 non-GAAP against about $5.90 of GAAP EPS for FY2026 |
| VRT | $6.73 implies 18.5%; GAAP trailing is 15.09% — year one sits between the two |
| GOOGL | A 54.77% trailing net margin, and a forward P/E (24.93) above the trailing one (16.69), because 2026 carries a one-off gain |
| BULL | $0.24 for FY2026 implies a 16.07% net margin against a 6.34% GAAP trailing one; the forecast page's own FY2025 comparator is $0.28 against GAAP **−$1.23** |

**UBER runs the gap backwards**, and is the reason to check the direction rather than assume it.
Its consensus EPS of $3.36 sits *below* GAAP — FY2025 reported $4.73 — because GAAP earnings carry
non-recurring tax and equity-investment gains the estimate strips out. Its forward P/E (17.37)
being higher than its trailing one (15.83) is the same fact. The driver table uses the lower,
consensus-implied margin, which here is the conservative choice.

Check which basis a consensus EPS is on, and which direction it runs, before trusting it against
anything on this page.

### Caveats

An optional `caveat` string renders as an amber note above the summary stats, for tickers where
the earnings-multiple frame does not cleanly fit. **43 of the 52** carry one, and all ten of the
names added on 11 September 2026 do. The ones worth knowing about before you read anything else:

- **SPCX** — listed 12 June 2026, so no full year as a public company and no trading history to
  set a multiple against. TTM shows an $8.89B net loss and −$32.52B free cash flow; the share
  count rose 41.79% in a year. Both consensus years assume >135% revenue growth. See below.
- **MSTR** — a bitcoin treasury, so the P/E ladder is noise. See below.
- **ASTS** — 202x trailing sales, no trailing P/E, −$1.64B free cash flow and a share count up
  39.67% in a year. Excluded from the ranking for the same reason MSTR is.
- **MU** — the clearest cyclical here, and the only entry whose base case sits below the current
  price. Consensus has FY2026 revenue up 247.09% at a 63% net margin; the driver table reverts
  that margin toward 35% by 2030 rather than holding it. See below.
- **SNOW** — $1.20B of free cash flow and a $1.09B GAAP net loss in the same twelve months, almost
  entirely stock compensation. On the adjusted basis the consensus uses, the same revenue path
  produces roughly twice the EPS.
- **TTD** — consensus has revenue *falling* 5.23% in year one, one of three here that do (with
  COIN and UNH), and the price target sits below the market price — one of two, with AAPL.
- **NBIS** — 1,474x trailing earnings, 46x sales, −$5.88B free cash flow against $11.14B of capex,
  and +22.12% shares in a year. The same trade as IREN, funded the same way.
- **COIN** — GAAP loss-making *and* shrinking in the consensus year. Read it with MSTR and HOOD:
  three entries earning from one asset price.
- **HOOD** — a broker, so EV/EBITDA is meaningless; the source publishes none. Much of the margin
  is net interest on customer balances, which is a rate bet.
- **BULL** — listed 11 April 2025 through a de-SPAC, so under eighteen months of history and a
  share count up 143.55% in a year. FY2024 and FY2025 show GAAP net losses of $517.78M and $487.52M
  against *positive* operating income; the losses are listing-related. Consensus EPS is adjusted and
  year one here sits about 61% below it. No EBITDA published, so ignore the EV row as with HOOD.
  See below.
- **GRAB** — trailing operating income is $138.00M on $3.73B of revenue, a 3.70% margin, while net
  income is $598.00M, a 16.03% margin, because most of the profit is interest on $6.53B of cash.
  Free cash flow is negative over the same twelve months. Net cash is 38% of the market
  capitalisation, so the P/E ladder and the EV/EBITDA cross-check disagree by construction. Read it
  with HOOD: two entries whose reported profitability is substantially a rate bet.
- **AMD** — 128.54x trailing earnings and 85.05x EV/EBITDA, so the entry multiple decides the
  outcome. The MI-series path makes it the same bet as NVDA, not a diversification of it.
- **RDDT** — consensus EPS implies a ~44% net margin; reported FY2025 *operating* margin was
  20.06%, and the trailing net margin is flattered by interest income and tax items.
- **LMT** — the frame fits, but the model prices no dividend and a 2.60% yield is a large part of
  the return. A fixed-price programme charge can remove a year of profit with no warning.
- **ZETA** — the widest GAAP/non-GAAP gap in the book. See below.
- **ORCL** — the most leveraged AI-capex bet here: free cash flow of −$28.72B, net debt of
  $118.85B, and an enterprise value a quarter larger than the market cap. See below.
- **RKLB** — loss-making at net income, EBITDA and free cash flow simultaneously, on a $37.08B
  cap. No trailing P/E; the forward P/E is 2,753x. The price is a claim about Neutron.
- **BE** — 291x trailing earnings, 182.2x EV/EBITDA, +24.65% share count in one year, and a
  consensus that has revenue more than doubling in 2026. The multiple got worse in a fortnight:
  the price rose 27% on unchanged estimates.
- **IREN** — fiscal year ends in June; lost $702.62M last year, with trailing EBITDA of just
  $38.35M and free cash flow of −$2.23B. The Altman Z-score is 0.98. Everything past year one is a
  forecast about a business that does not exist yet.
- **ARM** — fiscal year ends 31 March, so columns are offset; 259x trailing earnings; consensus
  EPS is non-GAAP and implies nearly double the GAAP margin.
- **CHA** — reports in yuan and trades in dollars; the consensus EPS is adjusted and about 60%
  above GAAP; the share count rose 44.05% in a year, the fastest here. It is also the cheapest
  entry in the book on every multiple, which is the thing to explain before buying it.
- **HIMS** — consensus FY2026 EPS was halved from $0.54 to $0.29 between the two pulls, and the
  trailing twelve months are a GAAP net loss with an Altman Z-score of 1.98.
- **PLTR** — 142x trailing earnings, and the 49% GAAP net margin is flattered by interest income
  and tax items.
- **MRVL** — fiscal year ends in January, so columns are offset; trailing margin is flattered by a
  divestiture gain; up 239.56% over 52 weeks to 76x trailing earnings.
- **UBER** — the GAAP/non-GAAP gap runs backwards, so the consensus EPS is *below* GAAP rather
  than above it. The model cannot see the autonomous-vehicle question that decides the decade.
- **JPM** and **SOFI** — balance-sheet lenders, so EV/EBITDA is meaningless; read the P/E ladder,
  and for JPM read it against $133.01 of book value per share.
- **VST** — $20.07B of net debt against a $49.36B cap, so the equity is a levered claim on the
  power price.
- **VRT** — a pure derivative of hyperscaler capex, so holding it beside NVDA, AMZN, MSFT, ORCL or
  IREN is one bet rather than two.
- **ASML** — reports in euros and trades in dollars. Until the September pull the revenue line sat
  in euros against a dollar share price, which understated the implied P/E by roughly the exchange
  rate; it is now converted at 1.1627.
- **TSM** — reports in New Taiwan dollars, and the ADR-equivalent share count is derived from
  market cap divided by the ADR price rather than from the 5:1 ratio, which do not agree.
- **KO** — the frame fits, but the model prices no dividend, and a 2.39% yield is the larger half
  of the expected total return.
- **AXON** — ~200x trailing earnings, so the entry multiple decides the outcome, not growth.

### SPCX is a three-month-old listing

SpaceX came to Nasdaq on **12 June 2026**, which makes it the only entry with no full year as a
public company and no trading history to set a multiple band against. It is also, at a $2.01T
market capitalisation, one of the largest names here — so getting it wrong costs more than
getting a small one wrong.

What the trailing twelve months actually show: **$23.04B of revenue, an $8.89B net loss, and
−$32.52B of free cash flow**, funded out of a $100.01B cash pile, with the share count up
**41.79%** in a year. EV/EBITDA is 330.8x.

Everything that makes the model work happens inside the consensus rather than the history.
Revenue is forecast to rise **139.6% in 2026 and a further 136% in 2027**, and net margin to go
from **2.8% to about 21%** across the same step. The 2026 figures are current; the 2027 revenue
estimate is now paywalled and carried forward from the August pull, which is worth knowing given
how much of this entry rests on it. Nothing else in this book asks you to believe a margin step
that large in one year.
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

Two things frame the result. The stock sits at **$30.56 against a $31.36 consensus price target**
and **65.4x EV/EBITDA**, so `evMult` is set to 20 rather than held at today's multiple — the base
case is earnings catching up to the multiple, not the multiple re-rating. And **free cash flow of
$224.41M exceeds both trailing EBITDA and reported net income**, because compensation paid in
stock costs no cash. That single comparison is the bull case and the 2024 short thesis restated as
one number, which is why the watch items track free cash flow *per share* rather than in total.

### MSTR is a special case

A multiple on software earnings does not value Strategy, and reported net income is meaningless:
the trailing twelve months show a **$31.4B loss** purely from bitcoin marks running through the
income statement under fair-value rules. So the P/E ladder for MSTR is noise, and the page says so.

What was done instead: `netCash` is set to the **bitcoin treasury less senior claims** — 845,050
BTC (about 4% of all bitcoin) at a blended cost of about $75,412, worth roughly **$65.0B** at the
$76,902 bitcoin price on 10 September 2026, against roughly $22B of debt and preferreds. That last
figure is carried forward from the August pull and is the softest number in the entry. The result
makes the EV/EBITDA **"Implied price per share" row read as approximate net asset value per
share**: about **$115** against a **$128.56** market price, a premium of roughly 12%.

The cushion is nearly gone. Spot sits about **2% above the treasury's own blended cost**, where in
August it was closer to 4%, and the most recent tranche — 4,603 BTC for roughly $369.7M — was
bought at $80,318, *above* today's spot. Buying above spot raises the average and thins the
cushion in the same transaction.

The share count row is still the real story. It rises from 384M to 540M, so on a flat bitcoin
price NAV per share falls to about $84 by 2030 even though the bitcoin pile does not shrink. The
five watch items are about bitcoin per share, the NAV premium, blended cost against spot, senior
claims and the accounting swing — not software revenue.

### ORCL is the leveraged version of the AI-capex bet

Every hyperscaler in this book is spending ahead of the revenue. Oracle is the one doing it with
borrowed money, and the market has already repriced it: the stock is **down 36.67% over 52 weeks**.

Free cash flow is **−$28.72B** against $34.21B of trailing EBITDA. Net debt is **$118.85B**, so
enterprise value ($559.39B) exceeds market capitalisation ($440.54B) by more than a quarter — the
only name here where the debt is a larger part of the story than the equity. AMZN and MSFT carry
the same shape at a fraction of the leverage: Amazon's free cash flow has just turned negative
(−$11.63B on $173.03B of capex) and Microsoft converts only half its net income to cash.

Three qualifications sit on top. The fiscal year ends **31 May**, so the CY2026 column is built
from FY2027 and the calendar labels are offset by roughly half a year. The $8.06 consensus EPS is
non-GAAP against about **$5.90** of GAAP EPS for FY2026. And the +32.68% consensus growth rate is a
backlog-conversion forecast — it assumes contracted AI compute is delivered on schedule, which
requires the capex producing the negative free cash flow in the first place.

`niMargin` therefore starts at **21%**, below both the 25.2% Oracle actually earned in FY2026 and
the ~26% the consensus EPS implies, because neither of those carries the depreciation on assets
being bought now or the interest on $155.93B of debt. That step down is the single most important
assumption in the entry, and it is judgement rather than consensus.

### MU is the one entry whose base case is below the current price

Micron is the only company in the book where the shipped base case values the equity *below* what
it trades at today, and that is the honest output of the model rather than a slip in it.

Consensus has FY2026 revenue at **$129.74B, up 247.09%**, on a net margin of about **63%** — a
figure that lands year one almost exactly on the $73.40 consensus EPS. Both numbers are a cycle
peak. Memory has never held one for five years, so `niMargin` reverts toward **35%** by 2030 and
`growth` decelerates to low single digits, which leaves 2030 EPS around $56 against $72 in year
one. At an 11x exit multiple — a mid-cycle memory multiple, not a growth-stock one — that is
roughly $673 against a $977.41 share price.

Reverse the single assumption and the answer reverses with it. If high-bandwidth memory has made
this business structurally less cyclical than it has ever been, the 2030 margin and the exit
multiple are both too low, and the entry looks entirely different. **That is the argument, and
the page exists so you can have it with the numbers in front of you** — section 07 says it ranks
assumptions rather than companies, and this is what that sentence means in practice.

Two mechanical notes. The fiscal year ends in **August**, so every column sits about a quarter
behind the calendar. And the 6.80x forward P/E is struck against an FY2027 estimate behind the
paywall, implying roughly **$143** of EPS — nearly double FY2026, and a much stronger claim than
anything modelled here. Source it properly before leaning on it; it is doing more work in the
share price than any figure visible on the page.

### BULL is the only de-SPAC here, and its GAAP history says so

Webull began trading on Nasdaq on **11 April 2025** through a business combination with SK Growth
Opportunities. Everything odd about the entry follows from that, and none of it is a modelling
error.

The share count is up **143.55%** in twelve months, to 539.62M. FY2024 and FY2025 report GAAP net
losses of **$517.78M** and **$487.52M** — while FY2025 operating income was **positive $53.01M**.
Losses that large against a profitable operating line are listing accounting, not the business, so
the watch items tell you to read income from operations first. The trailing twelve months to June
2026, which sit mostly after the charges, show $672.28M of revenue, **$77.23M of operating income
(11.49%)** and **$42.60M of net income (6.34%)**.

That 6.34% is what `niMargin[0]` uses, and it is why this entry joins the ten that sit below the
headline. Consensus EPS for FY2026 is **$0.24**, which implies a **16.07%** net margin — higher
than the margin the business currently earns at the *operating* line. The forecast page's own
FY2025 comparator is **$0.28**, against GAAP **−$1.23**. Year one here lands near **$0.09**, about
**61% below** the headline, deliberately.

Three more things frame it. There is **no published EBITDA and no EV/EBITDA**, because it is a
broker — so `ebMargin` and `evMult` are placeholders and the EV row is noise, exactly as in HOOD.
The **$1.85B of net cash is 44% of the market capitalisation** but sits on a balance sheet holding
customer money; it is not distributable. And year one rests on **four analysts**, against twenty to
fifty everywhere else in this book, with FY2027 paywalled — so nothing after the first column is
sourced at all. At **97.63x trailing earnings**, the exit multiple decides this entry, not the
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
growth rate — decides the outcome. 43 of the 52 carry one, and section 07 marks every ranked row
that has one.
