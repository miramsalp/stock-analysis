/**
 * Broader coverage set — added to give the model something to compare the tracked
 * names against, not because anyone is recommending them. Each one is here because
 * it sits next to something already in the book: AVGO against MRVL, LLY against HIMS,
 * UNH against OSCR, V against SOFI, NOW against AXON's multiple, CEG against IREN,
 * ORCL against MSFT on the same AI-capex question, UBER against SHOP as the other
 * take-rate marketplace, and CHA against COST at the opposite end of consumer scale.
 *
 * Every figure below was pulled 10–11 September 2026 from stockanalysis.com (S&P
 * Global consensus), replacing the 28–29 August pull this file was first built from.
 * A fortnight moved prices and price targets far more than it moved reported
 * financials; where a consensus estimate itself moved, the entry comment says so.
 * Several FY2027 estimates that were public in August now sit behind a paywall — the
 * entries that relied on one say where the figure came from.
 *
 * Built the same way as `./tracked.js`:
 *
 *   prevRev     backed out of the consensus estimate and its stated growth rate,
 *               or trailing-twelve-month revenue where no growth rate was published
 *   growth[0]   set so CY2026 lands on the consensus revenue estimate
 *   niMargin[0] set so year one lands near the consensus EPS — on a GAAP basis, which
 *               is why several sit well below the headline non-GAAP number
 *   sharesOut   actual current share count, then a dilution or buyback path
 *   netCash     total cash less total debt
 *   cost        the market price on the reference date — a PLACEHOLDER
 *
 * Years 2027–2030 and every exit multiple are modelled judgement, not consensus.
 *
 * Ten names were added on 11 September 2026 — TTD, RDDT, AMD, MU, LMT, ASTS, HOOD,
 * COIN, SNOW and NBIS — on the same principle, each placed at the end of its sector
 * group: TTD against APP for the demand side of the same ad budget, RDDT against META
 * and GOOGL, AMD against NVDA, MU for a cyclical priced at a peak, LMT as the mature
 * prime beside SPCX and RKLB, ASTS beside RKLB one stage earlier, HOOD against SOFI,
 * COIN against MSTR on the same asset, SNOW against PLTR and ORCL, and NBIS against
 * IREN as the other neocloud.
 *
 * The paywall meant none of the ten could source an FY2027 consensus figure, so for
 * those entries EVERY year after the first is modelled judgement rather than a
 * carried-forward estimate. SNOW is the exception: its 31 January fiscal year puts a
 * still-public estimate over CY2026, and year one uses the column the source labels
 * FY2027, not FY2026. MU is offset too, ending in August.
 *
 * Two of them qualify the netCash rule above. For MU and SNOW the source's own net
 * cash exceeds total cash less total debt, because it counts long-term investments;
 * both carry the source figure, since that is what the market-cap-less-EV bridge
 * agrees with and netCash feeds exactly that bridge. The entry comments record all
 * three numbers so a re-pull stays a diff.
 */
export const WATCHLIST = {
  // ---------------------------------------------------------------- consumer
  // Price $251.89 · cap $2.72T · EV $2.85T · 10.79B shares (+0.88% YoY) · TTM rev
  // $775.68B · TTM EBITDA $168.91B (21.78%) · TTM NI $135.28B (17.44%) · FCF -$11.63B
  // on $173.03B of capex · cash $122.99B, debt $251.64B → net debt $128.65B · P/E
  // 20.26 trailing, 27.19 forward · EV/EBITDA 16.85 · FY2026E rev $828.28B (+15.53%),
  // EPS $12.55 · PT $328.17
  AMZN: {
    name: 'Amazon',
    sector: 'consumer',
    shares: 1,
    cost: 251.89,
    priceRef: 251.89,
    prevRev: 716.92,
    growth: [15.53, 13, 12, 11, 10],
    niMargin: [16.3, 17.5, 18.5, 19.5, 20],
    ebMargin: [22, 23, 24, 25, 26],
    sharesOut: [10.79, 10.75, 10.71, 10.67, 10.63],
    peLow: 20,
    peHigh: 32,
    evMult: 16,
    netCash: -128.65,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Retail margin stalls and AWS growth is competed away by cheaper compute.',
        rev: 1100,
        margin: 13,
        pe: 16,
      },
      base: {
        label: 'Base',
        thesis: 'AWS and advertising keep lifting the blended margin as retail scales.',
        rev: 1279.9,
        margin: 20,
        pe: 26,
      },
      bull: {
        label: 'Bull',
        thesis: 'Advertising and AWS dominate the mix and Amazon earns a software margin.',
        rev: 1400,
        margin: 23,
        pe: 32,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'AWS growth and backlog',
        m: 'FY2026E revenue $828.28B, +15.5%',
        b: 'Retail is most of the revenue but AWS is most of the profit. The margin ramp in this model is an AWS-and-advertising story.',
        c: 'Check AWS growth and committed backlog separately from group revenue. Retail growth with flat AWS does not produce the 2030 margin here.',
      },
      {
        h: 'Advertising revenue',
        m: 'Ad revenue as a share of the mix',
        b: 'Advertising is the highest-margin line Amazon has, and it competes directly with META and GOOGL — the other names in this book.',
        c: 'Check ad revenue growth against META and GOOGL in the same quarter. Share shifts between them show up here first.',
      },
      {
        h: 'Capex and the depreciation tail',
        m: 'FCF -$11.63B on $173.03B of capex',
        b: 'Free cash flow has gone negative: $173.03B of capex against $168.91B of trailing EBITDA, alongside $128.65B of net debt. AI infrastructure lands as depreciation later.',
        c: 'Check the capex guide against operating cash flow. Capex already exceeds EBITDA, so the margin path below is a bet on those assets earning before the depreciation arrives.',
      },
      {
        h: 'Retail operating margin by segment',
        m: 'North America and International margin',
        b: 'International has historically run near break-even, so consolidated margin depends on it turning.',
        c: 'Check both segments separately. A consolidated margin carried entirely by North America is a thinner result than it looks.',
      },
      {
        h: 'Unit economics of same-day logistics',
        m: 'Cost to serve per unit',
        b: 'Faster delivery raises both cost and conversion, and only one of those is visible in the revenue line.',
        c: 'Listen for cost-to-serve commentary. Rising fulfilment cost per unit against flat pricing is what caps the margin path.',
      },
    ],
  },

  // Price $326.57 · cap $4.77T · EV $4.70T · 14.59B shares (-2.13% YoY) · TTM rev
  // $466.82B · TTM EBITDA $167.96B (35.98%) · TTM NI $128.93B (27.62%) · FCF $136.68B
  // · cash $146.52B, debt $84.34B → net cash $62.17B · P/E 37.46 trailing, 35.48
  // forward · EV/EBITDA 28.01 · FY2026E (Sep-end) rev $477.81B (+14.81%), EPS $8.83
  // · PT $324.53 — 0.6% BELOW the market price
  AAPL: {
    name: 'Apple',
    sector: 'consumer',
    shares: 1,
    cost: 326.57,
    priceRef: 326.57,
    prevRev: 416.16,
    growth: [14.81, 8, 7, 6, 6],
    niMargin: [26.9, 27.5, 28, 28.5, 29],
    ebMargin: [36, 36.5, 37, 37.5, 38],
    sharesOut: [14.59, 14.3, 14.0, 13.7, 13.4],
    peLow: 25,
    peHigh: 38,
    evMult: 22,
    netCash: 62.17,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Hardware replacement cycles lengthen and services growth is capped by regulation.',
        rev: 560,
        margin: 25,
        pe: 22,
      },
      base: {
        label: 'Base',
        thesis: 'Services keeps lifting the margin while buybacks shrink the share count.',
        rev: 620.4,
        margin: 29,
        pe: 31,
      },
      bull: {
        label: 'Bull',
        thesis: 'An on-device AI cycle pulls forward upgrades and services attaches to it.',
        rev: 680,
        margin: 32,
        pe: 38,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Services growth and gross margin',
        m: 'FY2026E revenue $477.81B, +14.8%',
        b: 'Services carries roughly double the hardware gross margin, so the mix decides the margin path more than volume does.',
        c: 'Check services revenue growth and its gross margin separately. Hardware-led growth does not get you to 29% net margin.',
      },
      {
        h: 'The buyback',
        m: '14.59B shares, modelled down to 13.4B',
        b: 'A meaningful part of EPS growth here is share count shrinking, not profit rising.',
        c: 'Check shares outstanding quarter over quarter against the path in the drivers table. If buybacks slow, so does EPS.',
      },
      {
        h: 'Regulatory pressure on the App Store',
        m: 'Court and regulator rulings on commissions',
        b: 'A large share of services profit comes from a commission rate that regulators keep testing.',
        c: 'Track actual rulings and their compliance dates, not proposals. A commission cut hits the highest-margin revenue Apple has.',
      },
      {
        h: 'China revenue',
        m: 'Greater China as a share of total',
        b: 'China is both a large market and a concentrated manufacturing base, so it is two exposures in one line.',
        c: 'Check China revenue direction and any supply chain relocation commentary.',
      },
      {
        h: 'What the AI cycle actually delivers',
        m: 'Price target $324.53 — just below the market price',
        b: 'The consensus target sits within 2% of the price, which says the market is waiting for evidence rather than pricing a new cycle.',
        c: 'Check whether on-device AI features actually shorten the replacement cycle. The bull case here needs a hardware refresh, not a software update.',
      },
    ],
  },

  // Price $126.60, down from $152.90 a fortnight earlier · cap $162.89B · EV $157.60B
  // · 1.29B shares (-0.74% YoY) · TTM rev $13.27B · TTM EBITDA $2.40B (18.05%) · TTM
  // NI $1.93B (14.53%) · FCF $2.35B · cash $4.95B, debt $178.00M · P/E 85.45 trailing,
  // 59.95 forward · EV/EBITDA 65.80 · FY2026E rev $15.24B (+31.84%), EPS $1.91
  // · PT $171.08
  SHOP: {
    name: 'Shopify',
    sector: 'consumer',
    shares: 1,
    cost: 126.6,
    priceRef: 126.6,
    prevRev: 11.56,
    growth: [31.84, 24, 20, 17, 15],
    niMargin: [14.5, 16, 18, 19, 20],
    ebMargin: [18, 20, 22, 23, 24],
    sharesOut: [1.29, 1.3, 1.31, 1.32, 1.33],
    peLow: 35,
    peHigh: 65,
    evMult: 30,
    netCash: 4.77,
    caveat:
      'Shopify trades at roughly 85x trailing earnings — down from 103x a fortnight earlier, on a 17% fall in the share price with the estimates barely moving — so the exit multiple decides most of the outcome here. Note also that revenue is largely a take rate on merchant sales, which makes it a leveraged bet on e-commerce volume: the same volume AppLovin is trying to sell advertising against, and the same take-rate shape as UBER further down this file.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Merchant growth slows and payments take rate is competed down.',
        rev: 24,
        margin: 11,
        pe: 25,
      },
      base: {
        label: 'Base',
        thesis: 'Take rate holds while enterprise merchants lift gross merchandise volume.',
        rev: 30.51,
        margin: 20,
        pe: 48,
      },
      bull: {
        label: 'Bull',
        thesis: 'Shopify becomes default commerce infrastructure with payments attached.',
        rev: 36,
        margin: 24,
        pe: 65,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Gross merchandise volume and take rate',
        m: 'FY2026E revenue $15.24B, +31.8%',
        b: 'Revenue is roughly volume times take rate. Only one of those two is under management control.',
        c: 'Check GMV growth and take rate separately. Revenue growth driven by take rate increases has a ceiling; volume growth does not.',
      },
      {
        h: 'What 103x already assumes',
        m: 'Trailing P/E 85.5 at $126.60',
        b: 'The multiple prices in years of the growth in this model. The bear case here is mostly a multiple compression scenario.',
        c: 'Decide what 2030 multiple you believe before touching the revenue line — it moves the answer more.',
      },
      {
        h: 'Merchant Solutions margin',
        m: 'Split between subscriptions and merchant solutions',
        b: 'Payments and shipping revenue carry far lower gross margin than subscription revenue, so a good revenue mix can be a bad margin mix.',
        c: 'Check gross margin by segment. Growth concentrated in merchant solutions dilutes the net margin path assumed here.',
      },
      {
        h: 'Enterprise wins',
        m: 'Named large-merchant migrations',
        b: 'Moving upmarket is what extends the growth runway past small-business formation rates.',
        c: 'Look for named enterprise migrations and their GMV contribution, not just merchant counts.',
      },
      {
        h: 'Consumer spending backdrop',
        m: 'E-commerce volume growth generally',
        b: 'A take-rate business is levered to the underlying spending cycle in both directions.',
        c: 'Read the GMV number against broader e-commerce growth. Underperforming a soft market is worse news than a soft market.',
      },
    ],
  },

  // Price $902.38, down 7.85% over 52 weeks · cap $400.19B · EV $388.42B · 443.48M
  // shares (-0.09% YoY) · TTM rev $293.59B · TTM EBITDA $13.79B (4.70%) · TTM NI
  // $8.84B (3.01%) · FCF $8.81B · cash $20.00B, debt $8.23B → net cash $11.76B
  // · P/E 45.40 trailing, 41.33 forward · EV/EBITDA 28.14 · FY2026E (Aug-end) rev
  // $301.98B (+9.72%), EPS $20.58 · PT $1,072.20
  COST: {
    name: 'Costco',
    sector: 'consumer',
    shares: 1,
    cost: 902.38,
    priceRef: 902.38,
    prevRev: 275.24,
    growth: [9.72, 8, 7.5, 7, 7],
    niMargin: [3.03, 3.1, 3.2, 3.3, 3.4],
    ebMargin: [4.7, 4.8, 4.9, 5.0, 5.1],
    sharesOut: [0.4435, 0.443, 0.4425, 0.442, 0.4415],
    peLow: 30,
    peHigh: 50,
    evMult: 25,
    netCash: 11.76,
    caveat:
      'Costco earns a ~3% net margin and trades at ~45x earnings, which is unusual enough to be the whole thesis: the market is paying for membership fee durability and inventory turns, not for margin. Small changes to the exit multiple swamp anything the revenue line does. It is in this book as the low-beta anchor against a lot of high-multiple growth — though it is down 7.85% over 52 weeks, so the anchor has not been still. Its fiscal year ended 31 August 2026, so the CY2026 column is built from a year already reported rather than forecast.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'The premium multiple normalises toward other retailers.',
        rev: 380,
        margin: 2.8,
        pe: 25,
      },
      base: {
        label: 'Base',
        thesis: 'Membership renewal holds, warehouses keep opening, multiple stays rich.',
        rev: 401.4,
        margin: 3.4,
        pe: 40,
      },
      bull: {
        label: 'Bull',
        thesis: 'Fee increases and e-commerce lift margin without denting renewal rates.',
        rev: 420,
        margin: 3.8,
        pe: 50,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Membership renewal rate',
        m: 'Renewal rate, US and worldwide',
        b: 'Membership fees are close to pure profit and are most of the operating income. Renewal rate is the single most important disclosure.',
        c: 'Check renewal rates by region. A one-point drop matters far more than a comparable-sales miss.',
      },
      {
        h: 'Membership fee increases',
        m: 'Timing and size of the next fee rise',
        b: 'Fee increases flow almost entirely to the bottom line, on a lag as memberships renew.',
        c: 'Watch for an announced increase and model the lag. This is the cleanest margin lever the company has.',
      },
      {
        h: 'Comparable sales excluding fuel',
        m: 'Ex-fuel, ex-FX comparable sales',
        b: 'Headline comps move with petrol prices and currency, neither of which says anything about the business.',
        c: 'Always read the adjusted comp. Traffic growth matters more than ticket size for a membership model.',
      },
      {
        h: 'The multiple',
        m: 'P/E 45.4 on a 3.01% net margin',
        b: 'You are paying a software multiple for a retail margin. That is the risk, and it is a re-rating risk rather than an earnings risk.',
        c: 'Ask what would have to be true for 40x to still be right in 2030. If the answer is only "it always has been", the bear case deserves more weight.',
      },
      {
        h: 'Warehouse openings',
        m: 'Net new warehouses per year',
        b: 'Unit growth is the durable part of the revenue line once comps normalise.',
        c: 'Check the opening schedule and international mix against the growth path in the drivers table.',
      },
    ],
  },

  // Price $87.83 · cap $377.89B · EV $405.78B · 4.30B shares (-0.09% YoY) · TTM rev
  // $50.13B · TTM EBITDA $17.00B (33.91%) · TTM NI $14.32B (28.56%) · FCF $14.30B
  // · cash $16.37B, debt $44.26B → net debt $27.89B · P/E 26.40 trailing, 25.84
  // forward · EV/EBITDA 23.87 · FY2026E rev $49.72B (+3.72%), EPS $3.30 · PT $94.70
  KO: {
    name: 'Coca-Cola',
    sector: 'consumer',
    shares: 1,
    cost: 87.83,
    priceRef: 87.83,
    prevRev: 47.94,
    growth: [3.72, 4.5, 4.5, 4, 4],
    // Consensus EPS $3.30 on 4.30B shares implies a 28.5% margin against a 28.56%
    // GAAP trailing margin. One of the few names here where the two simply agree.
    niMargin: [28.5, 29, 29.5, 30, 30],
    ebMargin: [34, 34.5, 35, 35, 35.5],
    sharesOut: [4.3, 4.28, 4.26, 4.24, 4.22],
    peLow: 20,
    peHigh: 28,
    evMult: 20,
    netCash: -27.89,
    caveat:
      'The frame fits the company but misses half the return. Coca-Cola yields 2.39%, and this model prices capital appreciation only \u2014 no dividend is reinvested, credited or shown anywhere below. Against a base case worth roughly 2.4% a year in price alone, the dividend is the larger half of the total return and it is invisible here. Read every figure on this page as the price-only component and add the yield yourself. It is also the slowest grower in this book by some distance, which makes the exit multiple, not the revenue line, the thing that decides the outcome.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Volumes stagnate, pricing power fades with inflation and the defensive multiple de-rates.',
        rev: 55,
        margin: 26,
        pe: 18,
      },
      base: {
        label: 'Base',
        thesis: 'Low-single-digit volume with pricing, steady margin, and the multiple holds.',
        rev: 58.73,
        margin: 30,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Mix shifts to higher-margin categories and the brand earns a scarcity premium in a slow-growth market.',
        rev: 62,
        margin: 32,
        pe: 28,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Organic volume against price',
        m: 'FY2026E revenue $49.72B, +3.7%',
        b: 'Revenue growth of 4% can be all price or all volume, and only one of those repeats indefinitely.',
        c: 'Split organic growth into concentrate volume and price/mix. Growth carried entirely by price is borrowed from future volume.',
      },
      {
        h: 'The dividend this model ignores',
        m: '2.39% yield; FCF $14.30B against $14.32B net income',
        b: 'Free cash flow almost exactly covers reported earnings, which is what funds both the payout and the buyback that shrinks the share count.',
        c: 'Check the payout ratio against free cash flow, then add the yield to every return figure on this page before comparing KO with anything else in the book.',
      },
      {
        h: 'Net debt against a defensive multiple',
        m: 'Net debt $27.89B; EV $405.78B against a $377.89B cap',
        b: 'A staples business carries debt cheaply, but the debt is why the EV/EBITDA row sits above the P/E row here.',
        c: 'Check net debt and the average coupon. Refinancing at higher rates is the quiet way a defensive name loses its margin.',
      },
      {
        h: 'Currency',
        m: 'Reported versus organic revenue',
        b: 'Most of the revenue is earned outside the US, so the reported line and the underlying business routinely disagree.',
        c: 'Read organic growth and the currency drag separately. This model runs on reported dollars, so a strong dollar shows up as a miss it cannot tell apart from a volume problem.',
      },
      {
        h: 'Category mix',
        m: 'Sparkling versus still, and sugar-tax exposure',
        b: 'The margin path here assumes mix improves. Regulation and consumer shift both act on that assumption.',
        c: 'Check growth by category and any new excise or labelling regime in the large markets. Mix is the only lever left once volume growth is low single digit.',
      },
    ],
  },

  // Price $72.56 · cap $148.21B · EV $152.95B · 2.04B shares (-2.28% YoY) · TTM rev
  // $55.23B · TTM EBITDA $7.47B (13.53%) · TTM NI $9.58B (17.34%), EPS $4.58 · FCF
  // $10.12B · cash $5.39B, debt $14.73B → net debt $9.34B · P/E 15.83 trailing, 17.37
  // forward · EV/EBITDA 20.46 · PS 2.68 · FY2025 rev $52.02B (+18.28%), GAAP NI
  // $10.05B, GAAP EPS $4.73 against a $2.45 consensus · FY2026E rev $57.90B (+11.31%),
  // EPS $3.36 · PT $102.13
  UBER: {
    name: 'Uber Technologies',
    sector: 'consumer',
    shares: 1,
    cost: 72.56,
    priceRef: 72.56,
    prevRev: 52.017,
    growth: [11.31, 11, 10, 10, 9],
    // The inverse of the usual problem in this book. Consensus EPS of $3.36 implies an
    // 11.83% net margin — BELOW the 17.34% GAAP trailing figure, not above it, because
    // reported GAAP earnings carry non-recurring tax and equity-investment gains that
    // the estimate strips out. Year one uses the consensus-implied number, which is the
    // conservative choice here even though it sits under GAAP.
    niMargin: [11.83, 13, 14, 15, 16],
    // Trailing EBITDA margin is 13.53%. The adjusted EBITDA margin Uber reports is
    // higher; this path stays on the reported basis.
    ebMargin: [14, 16, 17, 18, 19],
    // Down 2.28% in a year on buybacks — one of only a handful of shrinking counts here.
    sharesOut: [2.04, 2.0, 1.96, 1.92, 1.88],
    peLow: 18,
    peHigh: 30,
    evMult: 16,
    netCash: -9.34,
    caveat:
      'The GAAP-versus-adjusted gap runs backwards here, and it is the first thing to understand. Everywhere else in this book the headline consensus EPS sits above GAAP; at Uber it sits below — $3.36 for FY2026 against $4.73 of GAAP EPS reported for FY2025 — because GAAP earnings carry non-recurring tax and equity-investment gains that the estimate excludes. The forward P/E of 17.37 being HIGHER than the trailing 15.83 is the same fact stated again. The driver table uses the lower, consensus-implied margin. Two other things. Revenue is a take rate on gross bookings, the same shape as SHOP elsewhere in this file, so it is a leveraged claim on mobility and delivery volume rather than on price. And the model cannot see the one question that decides the decade: whether autonomous vehicles arrive as a supply cost Uber captures or as a platform that routes around it.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Autonomous fleets disintermediate the network and take rate is competed down.',
        rev: 70,
        margin: 9,
        pe: 14,
      },
      base: {
        label: 'Base',
        thesis: 'Mobility and delivery keep compounding, and advertising plus membership lift the margin.',
        rev: 84.76,
        margin: 16,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Uber becomes the demand layer every autonomous fleet has to plug into, and prices that access.',
        rev: 95,
        margin: 19,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'GAAP earnings against the estimate',
        m: 'FY2025 GAAP EPS $4.73; consensus basis $2.45',
        b: 'Reported net income is nearly double the number analysts model, because tax valuation and equity-stake gains run through GAAP and not through the estimate. Read the wrong one and the company looks twice as profitable as the business is.',
        c: 'Read income from operations first — $5.57B on $52.02B of FY2025 revenue, a 10.70% operating margin — and treat that as the real starting point for the margin path here.',
      },
      {
        h: 'Take rate on gross bookings',
        m: 'FY2026E revenue $57.90B, +11.3%',
        b: 'Revenue is a percentage of what riders and eaters actually spend, so the growth rate is bookings growth multiplied by any change in the cut Uber keeps.',
        c: 'Check gross bookings and revenue growth separately. Revenue growing faster than bookings is take-rate expansion, which is the part that can be competed away.',
      },
      {
        h: 'Autonomous vehicle partnerships',
        m: 'Named AV partners and cities live',
        b: 'This is the binary the model cannot price. An AV fleet that lists on Uber is a supply cost; an AV fleet that runs its own app is a competitor.',
        c: 'Track which operators route through Uber and on what commercial terms, city by city. Terms matter more than the count.',
      },
      {
        h: 'Advertising and membership revenue',
        m: 'Uber One members and ad revenue run-rate',
        b: 'Both are higher-margin than the core take rate and are what has to carry the net margin from 11.8% toward 16%.',
        c: 'Check whether these are disclosed as separate lines and growing faster than total revenue. If they are not, the margin path below is doing the work instead.',
      },
      {
        h: 'Driver supply cost and classification',
        m: 'Incentive spend; worker-status rulings',
        b: 'The cost of attracting drivers is the largest lever on contribution margin, and a reclassification ruling in a major market changes it by decree.',
        c: 'Watch incentive spend per trip and any employment-status ruling in the US, UK or EU. One adverse decision resets the margin path, not just one quarter.',
      },
    ],
  },

  // Reports in CNY; the ADR trades in USD. Revenue below is converted at USD/CNY 6.71
  // (10 September 2026).
  // Price $12.35 · cap $2.36B · EV $1.39B · 190.76M shares (+44.05% YoY) · TTM rev
  // $1.93B · TTM EBITDA $247.30M (12.78%) · TTM NI $180.12M (10.20%), EPS $0.94 · FCF
  // $120.42M · cash $1.20B, debt $234.41M → net cash $968.93M · P/E 13.11 trailing,
  // 8.54 forward · EV/EBITDA 5.61 · PS 1.22 · FY2025 rev CNY 12.91B, GAAP NI CNY
  // 1.02B, GAAP EPS CNY 6.18 · FY2026E rev CNY 14.26B (+10.51%), EPS CNY 9.65 on an
  // adjusted basis (FY2025 equivalent CNY 10.07, so consensus has it FALLING 4.18%)
  // · PT $15.04
  CHA: {
    name: 'Chagee Holdings',
    sector: 'consumer',
    shares: 1,
    cost: 12.35,
    priceRef: 12.35,
    // FY2025 revenue of CNY 12.907B at 6.71.
    prevRev: 1.924,
    growth: [10.51, 12, 12, 10, 10],
    // GAAP, and anchored on the 10.20% trailing margin rather than on the consensus EPS,
    // which is adjusted: CNY 9.65 against GAAP FY2025 EPS of CNY 6.18. Revenue growth
    // of 10.51% is currency-neutral and taken straight from consensus.
    niMargin: [10.2, 11, 11.5, 12, 12.5],
    ebMargin: [13, 14, 15, 16, 16.5],
    // Up 44.05% in twelve months, the fastest in this book. This path assumes that stops
    // almost completely, which is the single most generous assumption in the entry.
    sharesOut: [0.191, 0.196, 0.2, 0.203, 0.205],
    peLow: 10,
    peHigh: 20,
    evMult: 8,
    netCash: 0.966,
    caveat:
      'The cheapest entry in this book on every multiple — 13.1x trailing earnings, 8.5x forward, 5.6x EV/EBITDA, with net cash of $968.93M against a $2.36B market capitalisation, so roughly 41% of the market value is cash. That is the whole argument, and there are four reasons it might be cheap for a reason. The accounts are in Chinese yuan and the ADR is in dollars: revenue below is converted at 6.71, so a 5% currency move shifts every absolute figure by about 5% before the business does anything. The consensus EPS of CNY 9.65 is adjusted and sits well above GAAP EPS of CNY 6.18 for FY2025, so the driver table is built off the trailing GAAP margin instead. The share count rose 44.05% in a single year, faster than anything else here including SpaceX, which is why per-share earnings can fall while the company grows. And consensus has adjusted EPS declining 4.18% in 2026 on 10.51% revenue growth — margin compression is the base case, not an outcome to be argued against.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Store expansion outruns demand, unit economics fall with competition and dilution continues.',
        rev: 2.6,
        margin: 7,
        pe: 9,
      },
      base: {
        label: 'Base',
        thesis: 'Low-double-digit revenue growth with modest margin recovery as new stores mature.',
        rev: 3.23,
        margin: 12.5,
        pe: 15,
      },
      bull: {
        label: 'Bull',
        thesis: 'International expansion works, the brand earns premium pricing and the multiple normalises upward.',
        rev: 4.0,
        margin: 15,
        pe: 20,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Same-store sales, not store count',
        m: 'FY2026E revenue CNY 14.26B, +10.51%',
        b: 'Revenue growth of a store network is new stores multiplied by what each one sells, and only the second is a statement about demand. FY2025 grew 4.05% on a much larger base than FY2024 — the deceleration is already visible.',
        c: 'Check same-store sales separately from net new teahouses. Growth carried entirely by openings, with same-store sales flat or down, is the bear case arriving quietly.',
      },
      {
        h: 'Dilution',
        m: '190.76M shares, +44.05% year over year',
        b: 'The count rose by nearly half in twelve months. The driver table assumes that stops almost completely; if it does not, 2030 earnings per share are wrong before any operating assumption is tested.',
        c: 'Check the diluted count each quarter against the path in the drivers table. This is the assumption most likely to be too kind.',
      },
      {
        h: 'GAAP against adjusted',
        m: 'FY2025 GAAP EPS CNY 6.18; consensus basis CNY 10.07',
        b: 'The headline consensus is roughly 60% above the GAAP figure for the same year. Every multiple quoted on the forward number carries that gap.',
        c: 'Read GAAP net income and the reconciliation to adjusted before using any forward P/E. This model runs on the GAAP side.',
      },
      {
        h: 'The currency, twice over',
        m: 'Converted at USD/CNY 6.71',
        b: 'Earnings are made in yuan and the ADR is priced in dollars, so the return has an FX leg that none of the drivers below can see.',
        c: 'Re-run the conversion when the rate moves more than a few percent. TSM and ASML in this same file carry the identical problem in different currencies.',
      },
      {
        h: 'Why it is this cheap',
        m: '8.5x forward earnings; 41% of the cap is cash',
        b: 'A profitable, growing, net-cash consumer brand at 8.5x forward earnings is either mispriced or is being marked down for China listing risk, governance, or doubt about the reported numbers.',
        c: 'Decide which before sizing anything. If the answer is listing and governance risk, the exit multiple band below — 10x to 20x — is the assumption to argue with, not the revenue line.',
      },
    ],
  },

  // ---------------------------------------------------------------- semis
  // Price $218.36 · cap $5.27T · EV $5.25T · 24.15B shares (-1.04% YoY) · TTM rev
  // $302.97B · TTM EBITDA $201.27B (66.43%) · TTM NI $192.88B (63.66%) · FCF $127.01B
  // · cash $62.47B, debt $38.86B → net cash $23.61B · P/E 27.61 trailing, 18.12
  // forward · EV/EBITDA 26.08 · FY2027E (Jan-end) rev $411.31B (+90.48% on FY2026),
  // EPS $9.31 · PT $327.65
  NVDA: {
    name: 'NVIDIA',
    sector: 'semis',
    shares: 1,
    cost: 218.36,
    priceRef: 218.36,
    prevRev: 302.97,
    growth: [35.76, 22, 16, 12, 10],
    niMargin: [54.7, 54, 53, 52, 52],
    ebMargin: [65, 64, 63, 62, 62],
    sharesOut: [24.15, 23.9, 23.65, 23.4, 23.15],
    peLow: 22,
    peHigh: 40,
    evMult: 22,
    netCash: 23.61,
    caveat:
      "NVIDIA's fiscal year ends in late January, so the calendar columns here are approximate; CY2026 is built from the next-fiscal-year consensus of $411.31B, against $302.97B of trailing revenue. The striking thing about the setup is that at 27.6x trailing and 18.1x forward earnings it is not obviously expensive — the risk in this model is entirely in whether a 52% net margin survives competition from custom silicon, which is precisely what MRVL and AVGO in this same book are selling.",
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Custom accelerators take share and the margin normalises toward merchant semis.',
        rev: 550,
        margin: 45,
        pe: 18,
      },
      base: {
        label: 'Base',
        thesis: 'Compute demand compounds and CUDA keeps the margin near current levels.',
        rev: 717.1,
        margin: 52,
        pe: 30,
      },
      bull: {
        label: 'Bull',
        thesis: 'NVIDIA remains the default AI platform and prices full systems, not chips.',
        rev: 850,
        margin: 56,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Gross margin against custom silicon',
        m: 'TTM net margin 63.66%, EBITDA margin 66.43%',
        b: 'A 50%+ net margin is the whole valuation. It exists because there is no equivalent alternative, and hyperscalers are actively funding alternatives.',
        c: 'Check gross margin quarter over quarter. Any sustained decline is the bear case arriving, whatever revenue does.',
      },
      {
        h: 'Customer concentration',
        m: 'Share of revenue from the largest few customers',
        b: 'A handful of hyperscalers account for a large share of revenue, and each is building its own silicon with MRVL or AVGO.',
        c: 'Read the customer concentration disclosure in the 10-Q. Rising concentration and rising custom-silicon spend at the same customers is the risk.',
      },
      {
        h: 'Data centre revenue composition',
        m: 'Next-FY consensus revenue $411.31B',
        b: 'Networking and systems revenue carries different economics from GPUs alone.',
        c: 'Check the split between compute and networking. Systems-led growth supports the multiple better than chip-led growth.',
      },
      {
        h: 'Inventory and supply commitments',
        m: 'Inventory plus purchase obligations',
        b: 'Committing to supply ahead of demand is how a shortage turns into a glut.',
        c: 'Watch inventory and supply commitments against forward revenue. Both rising faster than revenue is a warning.',
      },
      {
        h: 'Export controls',
        m: 'What is actually licensable, by region',
        b: 'A meaningful market has been opened and closed by policy more than once.',
        c: 'Track the actual rules rather than the commentary, and what management says about the affected revenue.',
      },
    ],
  },

  // Price $428.03 (ADR) · cap $2.01T · EV $1.93T · 25.93B ordinary shares (+0.01%
  // YoY) · TTM rev $139.57B USD · TTM EBITDA $99.56B (71.33%) · TTM NI $69.68B
  // (49.92%) · FCF $36.13B · cash $110.58B, debt $33.59B → net cash $76.99B · P/E
  // 28.80 trailing, 19.65 forward · EV/EBITDA 19.39 · FY2026E revenue NT$5.43T
  // (+42.68%), EPS NT$107.64 · PT $552.38
  TSM: {
    name: 'TSMC',
    sector: 'semis',
    shares: 1,
    cost: 428.03,
    priceRef: 428.03,
    prevRev: 121.0,
    growth: [42.68, 20, 16, 13, 11],
    niMargin: [46.9, 47, 47.5, 48, 48],
    ebMargin: [70, 70.5, 71, 71.5, 72],
    // ADR-equivalent, derived as market capitalisation divided by the ADR price.
    sharesOut: [4.696, 4.696, 4.696, 4.696, 4.696],
    peLow: 18,
    peHigh: 30,
    evMult: 14,
    netCash: 76.99,
    caveat:
      'Two conversions to keep in mind. TSMC reports in New Taiwan dollars — the consensus is NT$5.43T revenue and NT$107.64 EPS for 2026 — and the figures here are converted to USD at roughly NT$31.5 to the dollar, so currency moves alone will shift them. And the share count is ADR-equivalent (about 4.70B), not the 25.93B ordinary shares outstanding; it is derived as market capitalisation divided by the ADR price, which is what makes EPS comparable to the $428.03 ADR quote. Note that 25.93B ÷ 5 gives 5.19B rather than 4.70B, so the two routes to an ADR count do not agree — the derived figure is used because it is the one consistent with the price this model compares against.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI capex digests, utilisation falls and leading-edge pricing softens.',
        rev: 240,
        margin: 40,
        pe: 14,
      },
      base: {
        label: 'Base',
        thesis: 'Leading-edge demand compounds and TSMC keeps pricing power as sole supplier.',
        rev: 301.4,
        margin: 48,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Advanced packaging and 2nm scarcity let TSMC raise prices through the cycle.',
        rev: 350,
        margin: 52,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Advanced node revenue mix',
        m: 'FY2026E revenue +42.68% in NT dollars',
        b: 'Leading-edge nodes carry the margin. Everything in this model rests on that mix continuing to shift forward.',
        c: 'Check revenue by node each quarter. A stalling advanced-node share caps the margin path regardless of total revenue.',
      },
      {
        h: 'Advanced packaging capacity',
        m: 'CoWoS and related capacity additions',
        b: 'Packaging has been the binding constraint on AI accelerator supply, which makes it a pricing lever.',
        c: 'Track announced packaging capacity against customer demand commentary. This is where scarcity becomes margin.',
      },
      {
        h: 'Capex intensity',
        m: 'Annual capex against revenue',
        b: 'Foundry is the most capital-hungry business in this book. Capex sets both the growth ceiling and the depreciation floor.',
        c: 'Check the capex guide and what it implies for depreciation. Overseas fabs run structurally lower margin than Taiwan fabs.',
      },
      {
        h: 'Currency',
        m: 'NT dollar per US dollar',
        b: 'Costs are largely in NT dollars and pricing is largely in US dollars, so the exchange rate lands directly in the margin.',
        c: 'Check the rate used in guidance. A several-percent move is worth more than a quarter of operational progress.',
      },
      {
        h: 'Geopolitical and customer concentration',
        m: 'Share of revenue from the largest customers',
        b: 'A small number of customers — including several others in this book — account for a large share of revenue.',
        c: 'Read the concentration disclosure, and treat the location risk as a permanent discount to the exit multiple rather than something to forecast.',
      },
    ],
  },

  // Price $360.83 · cap $1.72T · EV $1.76T · 4.77B shares (+1.00% YoY) · TTM rev
  // $89.10B · TTM EBITDA $52.26B (58.65%) · TTM NI $38.27B (42.94%) · FCF $39.40B
  // · cash $23.98B, debt $59.42B → net debt $35.44B · P/E 46.06 trailing, 20.84
  // forward · EV/EBITDA 33.64 · FY2025 (Oct-end) rev $63.89B · FY2026E rev $105.97B
  // (+65.86%), EPS $11.64 (non-GAAP) · PT $533.41
  AVGO: {
    name: 'Broadcom',
    sector: 'semis',
    shares: 1,
    cost: 360.83,
    priceRef: 360.83,
    // FY2025 (October year-end), so growth[0] is the published +65.86% rather than a
    // rate backed out of trailing revenue. Lands CY2026 on the same $106B either way.
    prevRev: 63.89,
    growth: [65.86, 22, 18, 15, 12],
    // GAAP. Trailing GAAP net margin has risen to 42.94%; the $11.64 consensus EPS is
    // non-GAAP and implies about 52%.
    niMargin: [43, 45, 46, 47, 48],
    ebMargin: [56, 57, 58, 59, 60],
    sharesOut: [4.76, 4.75, 4.74, 4.73, 4.72],
    peLow: 25,
    peHigh: 45,
    evMult: 25,
    netCash: -35.44,
    caveat:
      "Broadcom's fiscal year ends in the autumn, so the calendar columns are offset. More importantly, consensus EPS of $11.64 is non-GAAP — trailing GAAP net margin is 42.94%, and the margins below are GAAP, which is why they sit under the roughly 52% the headline implies. Broadcom is the direct comparison for MRVL: both sell custom accelerators to the same handful of hyperscalers, and both are priced as if they win.",
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Custom silicon programmes slip and the software segment stops growing.',
        rev: 150,
        margin: 35,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'XPU programmes ramp on schedule and VMware software margin holds.',
        rev: 196.5,
        margin: 48,
        pe: 32,
      },
      bull: {
        label: 'Bull',
        thesis: 'Broadcom becomes the default custom accelerator partner at scale.',
        rev: 240,
        margin: 52,
        pe: 45,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Custom accelerator programme ramps',
        m: 'FY2026E revenue $105.97B, +65.9% on FY2025',
        b: 'A growth rate like that at this size is almost entirely custom silicon for a few named hyperscalers.',
        c: 'Check disclosed programme counts and their ramp timing. Broadcom and MRVL are competing for the same sockets — a win for one is often a loss for the other.',
      },
      {
        h: 'Infrastructure software margin',
        m: 'Software segment operating margin',
        b: 'The VMware acquisition made software roughly half the profit, on much higher margin than semis.',
        c: 'Check software segment margin and renewal pricing. Customer churn on repriced contracts is the risk nobody sees in the headline.',
      },
      {
        h: 'The GAAP-to-non-GAAP gap',
        m: 'Consensus EPS $11.64 is non-GAAP; GAAP margin 42.94%',
        b: 'Acquisition amortisation from VMware is large and runs for years.',
        c: 'Check GAAP net income directly. The 48% GAAP margin assumed by 2030 requires that amortisation to roll off roughly on schedule.',
      },
      {
        h: 'Leverage',
        m: 'Net debt $35.44B',
        b: 'The software business was bought with debt, which is fine while cash flow grows and less fine if it does not.',
        c: 'Check net debt against EBITDA and the maturity schedule.',
      },
      {
        h: 'Customer concentration',
        m: 'Share of revenue from the largest customers',
        b: 'The same concentration risk as NVDA and TSM, in a book that already holds all three.',
        c: 'Read the concentration disclosure and note how much of your total exposure across this list traces to the same few buyers.',
      },
    ],
  },

  // Price $254.18 · cap $271.48B · EV $268.08B · 1.07B shares (+0.66% YoY) · TTM rev
  // $5.16B · TTM EBITDA $1.06B (20.63%) · TTM NI $1.04B (20.25%) · cash $3.89B, debt
  // $485.00M → net cash $3.40B · FCF $1.51B · P/E 259.45 trailing, 106.45 forward
  // · EV/EBITDA 252.03 · FY2026E rev $4.92B (+22.79%), EPS $1.77 · FY2027E rev $6.06B
  // (+23.09%), EPS $2.23 · PT $288.36 · fiscal year ends 31 March
  ARM: {
    name: 'Arm Holdings',
    sector: 'semis',
    shares: 1,
    cost: 254.18,
    priceRef: 254.18,
    prevRev: 4.007,
    // Both consensus years are published and both run near +23%, so growth[1] is
    // consensus too. Only 2028-2030 are judgement.
    growth: [22.79, 23.09, 20, 18, 16],
    // GAAP. The $1.77 consensus EPS implies a 38% net margin; trailing GAAP is 20.25%,
    // so year one is set near the GAAP figure and allowed to climb on operating leverage.
    niMargin: [21, 24, 27, 29, 31],
    ebMargin: [22, 25, 28, 30, 32],
    sharesOut: [1.07, 1.08, 1.09, 1.1, 1.11],
    // Not the 244x it trades at today. A band this wide is still generous for 2030.
    peLow: 45,
    peHigh: 80,
    evMult: 35,
    netCash: 3.4,
    caveat:
      'Three things at once. The fiscal year ends 31 March, so these calendar columns are offset by a quarter against every other company here. The $1.77 FY2026 consensus EPS is non-GAAP and implies a 38% net margin against a 20.25% GAAP trailing margin, so the driver table deliberately sits well below the headline. And the multiple, not the growth rate, decides the outcome: 259x trailing earnings and 252x EV/EBITDA mean a company compounding revenue at 23% a year can still lose you money if the exit multiple lands anywhere near normal. The base case below already assumes 55x in 2030 \u2014 historically generous \u2014 and still finishes under today\u2019s price.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Royalty growth is steady but the multiple normalises toward the rest of semis.',
        rev: 8,
        margin: 22,
        pe: 30,
      },
      base: {
        label: 'Base',
        thesis: 'Royalty rates rise with v9 and compute subsystems, and the premium multiple half-holds.',
        rev: 9.95,
        margin: 31,
        pe: 55,
      },
      bull: {
        label: 'Bull',
        thesis: 'Arm takes datacentre CPU share and prices its architecture like a tax on all compute.',
        rev: 12,
        margin: 35,
        pe: 80,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Royalty revenue and the v9 rate',
        m: 'FY2026E revenue $4.92B, +22.8%',
        b: 'Licensing is lumpy; royalties are the annuity. The 2030 margin here is a royalty-mix story, not a licensing one.',
        c: 'Split royalty from licence revenue and check the v9 share of royalties. Royalty growth below chip-unit growth means the rate story is not working.',
      },
      {
        h: 'GAAP against non-GAAP',
        m: 'FY2026E EPS $1.77 adjusted; 20.25% GAAP trailing margin',
        b: 'The gap is stock compensation, and it is large enough to change the answer by more than the growth rate does.',
        c: 'Read GAAP operating income and the reconciliation. This model runs on the GAAP side of that bridge.',
      },
      {
        h: 'Datacentre and custom silicon share',
        m: 'Arm-based server CPU share',
        b: 'The bull case is Arm pricing the architecture AVGO, NVDA and the hyperscalers build on \u2014 the same custom-silicon question MRVL is in this book for.',
        c: 'Check named datacentre design wins and the compute-subsystem pipeline against MRVL and AVGO in the same quarter.',
      },
      {
        h: 'The multiple, not the model',
        m: '259x trailing, 106x forward, 252x EV/EBITDA',
        b: 'At this multiple the exit assumption dominates every operating assumption in the driver table.',
        c: 'Before editing any growth rate, decide what P/E you believe for 2030 and put it in the scenario cards. That number, not revenue, is the model.',
      },
      {
        h: 'Fiscal calendar',
        m: 'Year ends 31 March',
        b: 'Every column here is offset a quarter from the calendar-year companies it is ranked against.',
        c: 'When comparing ARM with NVDA, AVGO or TSM, line the quarters up first. A like-for-like read needs the offset removed.',
      },
    ],
  },

  // Price $1,687.43 (USD), up 109.59% over 52 weeks · cap $658.34B · EV $651.83B
  // · 384.10M shares (-1.44% YoY) · TTM rev $40.29B USD · TTM EBITDA $15.38B (38.18%)
  // · TTM NI $12.13B (30.11%), EPS $31.41 · cash $8.65B, debt $2.26B → net cash
  // $6.38B · FCF $11.66B · P/E 54.26 trailing, 30.19 forward · EV/EBITDA 42.37
  // · FY2026E rev €42.82B (+31.08%), EPS €38.19 · PT $2,168
  // ASML reports in EUR and trades in USD. The revenue figures below are converted at
  // EUR/USD 1.1627 (10 September 2026); growth rates and margins are currency-neutral.
  ASML: {
    name: 'ASML',
    sector: 'semis',
    shares: 1,
    cost: 1687.43,
    priceRef: 1687.43,
    // FY2025 revenue of €32.67B converted at 1.1627. Previously held in EUR against a
    // USD share price, which made every per-share figure on the page wrong by the rate.
    prevRev: 37.99,
    // growth[1] was the published FY2027 consensus on 29 August (+25.69%); that estimate
    // is now behind a paywall, so it is carried forward here rather than re-sourced.
    growth: [31.08, 25.69, 18, 14, 12],
    // Consensus EPS €38.19 on 384.1M shares implies 34.3% of €42.82B of revenue, close
    // to the 30.11% GAAP trailing margin \u2014 IFRS reporting, so no meaningful
    // adjusted/GAAP gap to correct.
    niMargin: [34.3, 36, 37, 38, 38],
    ebMargin: [39, 41, 42, 43, 43],
    sharesOut: [0.3841, 0.379, 0.374, 0.369, 0.364],
    peLow: 25,
    peHigh: 40,
    evMult: 22,
    netCash: 6.38,
    caveat:
      'ASML reports in euros and its ADR trades in dollars, and this entry converts the revenue line at EUR/USD 1.1627 as at 10 September 2026 so that revenue, earnings and the share price are all in the same currency. Until this pull they were not: revenue sat in euros against a dollar price, which understated the implied P/E by roughly the exchange rate. Growth rates, margins and multiples are currency-neutral, but every absolute figure below moves with the rate, and a 5% swing in EUR/USD moves the 2030 price ladder by about the same amount. One further gap: the FY2027 consensus that growth[1] uses was public on 29 August and is now paywalled, so it is carried forward rather than re-verified.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'A capex digestion cycle arrives, High-NA adoption slips and orders are pushed right.',
        rev: 76,
        margin: 32,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'EUV stays the bottleneck for leading-edge logic and memory, and High-NA ramps on schedule.',
        rev: 94.3,
        margin: 38,
        pe: 32.5,
      },
      bull: {
        label: 'Bull',
        thesis: 'AI capacity keeps leading edge sold out and ASML prices a monopoly tool into a shortage.',
        rev: 110,
        margin: 40,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Bookings, not revenue',
        m: 'FY2026E revenue €42.82B ($49.80B), +31.1%',
        b: 'Revenue is backlog conversion; net bookings are the leading indicator and they move first and hardest.',
        c: 'Read net bookings and the EUV share of them. A revenue beat on falling bookings is the classic top of this cycle.',
      },
      {
        h: 'High-NA units and pricing',
        m: 'FY2027E +25.7% — a 29 August figure, now paywalled',
        b: 'The 2027 consensus step assumes High-NA systems ship and are recognised, at prices well above standard EUV. That estimate is no longer published free, so the model carries the August number.',
        c: 'Check High-NA units shipped, recognised and in backlog, plus average selling price, and re-source the 2027 estimate before leaning on it. Slippage moves the whole model right.',
      },
      {
        h: 'Customer concentration and export rules',
        m: 'TSM, Samsung and Intel are most of leading edge',
        b: 'Three customers set the order book, and a government can remove a market by decree \u2014 this is the geopolitical name in the semis group.',
        c: 'Check the China revenue share and any change to Dutch or US export licensing. TSM in this book is the demand side of the same question.',
      },
      {
        h: 'Installed base and service revenue',
        m: 'Service and field option revenue',
        b: 'Service is the annuity that holds margin through a downturn, and it grows with the installed base rather than with new orders.',
        c: 'Track service revenue separately. It is what makes the bear case a slowdown rather than a collapse.',
      },
      {
        h: 'Gross margin against mix',
        m: '30.11% GAAP net margin trailing',
        b: 'The margin path assumes mix keeps shifting toward EUV and High-NA.',
        c: 'Check gross margin against the EUV revenue share. Margin expanding without a mix shift is the number to be sceptical of.',
      },
    ],
  },

  // Price $503.60 · cap $822.11B · EV $813.28B · 1.63B shares (+1.07% YoY) · TTM rev
  // $41.31B · TTM EBITDA $9.56B (23.15%) · TTM NI $6.43B (15.58%), EPS $3.90 · cash
  // $13.11B, debt $4.28B → net cash $8.83B · FCF $8.40B on $1.68B capex · P/E 128.54
  // trailing, 45.51 forward · EV/EBITDA 85.05 · PS 19.90 · FY2026E rev $50.83B
  // (+46.75%), EPS $7.56 · PT $613.84 · 54 analysts
  AMD: {
    name: 'AMD',
    sector: 'semis',
    shares: 1,
    cost: 503.6,
    priceRef: 503.6,
    prevRev: 34.634,
    growth: [46.75, 32, 26, 22, 18],
    // Consensus EPS $7.56 on ~1.64B shares implies a 24.4% net margin against a
    // 15.58% GAAP trailing margin — an adjusted number. Year one splits the
    // difference at 17%, on the view that scale rather than add-backs closes the gap.
    niMargin: [17, 20, 23, 25, 26],
    ebMargin: [25, 28, 31, 33, 34],
    sharesOut: [1.64, 1.65, 1.66, 1.67, 1.68],
    peLow: 25,
    peHigh: 45,
    evMult: 22,
    netCash: 8.83,
    caveat:
      'The multiple, not the growth rate, decides this one. At 128.54x trailing earnings and 85.05x EV/EBITDA the price already contains a datacentre-accelerator business several times the size of the one AMD reports, so the base case below can be right about revenue and still return very little. Two things to hold separately: the consensus $7.56 FY2026 EPS is adjusted and implies a 24.4% net margin against a 15.58% GAAP trailing margin, and this model runs on the GAAP basis, which is why year one sits at 17%. The second is concentration — the revenue path here is an MI-series accelerator story, which makes AMD the same bet as NVDA at a different share of the same market rather than a diversification of it.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'MI-series stays a second source, the software lock holds and the multiple compresses toward the client business.',
        rev: 85,
        margin: 18,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'AMD takes a durable minority share of accelerators while server CPU keeps compounding.',
        rev: 121.72,
        margin: 26,
        pe: 33,
      },
      bull: {
        label: 'Bull',
        thesis: 'Open software matures, hyperscalers second-source at scale and AMD earns a merchant-silicon margin.',
        rev: 150,
        margin: 30,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Accelerator revenue, disclosed separately',
        m: 'FY2026E revenue $50.83B, +46.8%',
        b: 'Almost all of the growth in this model is accelerators. Group revenue can grow on client and embedded while the part that justifies the multiple does not.',
        c: 'Look for a datacentre GPU number given on its own, with named hyperscale customers behind it. A group figure alone does not settle it.',
      },
      {
        h: 'GAAP margin against the adjusted headline',
        m: 'FY2026E EPS $7.56 adjusted; 15.58% GAAP trailing margin',
        b: 'The gap is most of a factor of two, and the driver table runs on the smaller number.',
        c: 'Read GAAP gross and operating margin, and how much of the difference is acquisition amortisation versus stock compensation. Only one of those ends.',
      },
      {
        h: 'Software maturity',
        m: 'Framework support outside the largest buyers',
        b: 'The bull case is that software stops being the reason to buy NVDA instead. That is a developer question, not a silicon one.',
        c: 'Watch support landing upstream and inference deployments run by customers who are not being subsidised to try it.',
      },
      {
        h: 'Foundry and packaging allocation',
        m: 'Leading-edge and advanced packaging capacity',
        b: 'AMD and NVDA buy the same wafers and the same packaging from the same supplier, which is already in this book as TSM.',
        c: 'Check TSM capacity commentary alongside this entry. An allocation constraint caps both names at once and is invisible in either one on its own.',
      },
      {
        h: 'Client and embedded as ballast',
        m: 'Segment mix and PC demand',
        b: 'The non-datacentre half funds the effort and cushions a slow accelerator ramp.',
        c: 'Check whether client margin is holding. A weak PC cycle removes the cushion in exactly the year the ramp needs it.',
      },
    ],
  },

  // Fiscal year ends August, so the columns sit about a quarter behind the calendar —
  // FY2026 covers September 2025 to August 2026.
  // Price $977.41 · cap $1.10T · EV $1.08T · 1.13B shares (+0.62% YoY) · TTM rev
  // $90.27B · TTM EBITDA $68.22B (75.57%) · TTM NI $50.47B (55.91%), EPS $44.31 ·
  // cash $26.02B, debt $6.38B; the site's net cash of $23.75B is larger than cash less
  // debt because it counts long-term investments, and the EV bridge (cap less EV)
  // agrees with the larger figure, so that is what netCash carries here · FCF $26.17B
  // on $25.26B capex · P/E 22.06 trailing, 6.80 forward · EV/EBITDA 15.83 · PS 12.23 ·
  // FY2026E rev $129.74B (+247.09%), EPS $73.40 · PT $1,513 · 49 analysts
  MU: {
    name: 'Micron Technology',
    sector: 'semis',
    shares: 1,
    cost: 977.41,
    priceRef: 977.41,
    prevRev: 37.379,
    // Year one is the consensus. Years two to five are a cycle, not a trend: memory
    // has never held a peak for five years, and the deceleration below is this
    // model's judgement rather than anything sourced.
    growth: [247.09, 18, 6, 4, 5],
    // 63% lands year one on the $73.40 consensus EPS. The decline after it is
    // deliberate — 55.91% trailing is a peak-cycle margin, and the path reverts
    // toward something a memory maker can hold instead of extending the peak.
    niMargin: [63, 52, 42, 33, 35],
    ebMargin: [78, 72, 64, 56, 58],
    sharesOut: [1.13, 1.13, 1.12, 1.11, 1.1],
    // A cyclical is cheapest on trailing earnings exactly when it is most expensive.
    // The band is low on purpose; it is not a growth-stock ladder.
    peLow: 6,
    peHigh: 14,
    evMult: 6,
    netCash: 23.75,
    caveat:
      'The base case here returns less than the current price, and that is the honest output rather than a slip. Consensus has FY2026 revenue up 247.09% at a 63% net margin, which is a cycle peak, and the driver table reverts margin toward 35% by 2030 instead of holding it. Reverse that one assumption and the answer reverses with it — which is exactly why section 07 says it ranks assumptions rather than companies. What the model cannot settle is whether high-bandwidth memory makes this business structurally less cyclical than it has ever been; if you think it does, raise the 2030 margin and the exit multiple and the entry looks entirely different. Two smaller notes: the fiscal year ends in August, so every column sits about a quarter behind the calendar, and the 6.80x forward P/E is struck against an FY2027 estimate that is behind the paywall, implying roughly $143 of EPS — nearly double the FY2026 consensus, and a far stronger claim than anything modelled below.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Capacity arrives, the cycle turns and memory prices do what memory prices do.',
        rev: 95,
        margin: 12,
        pe: 8,
      },
      base: {
        label: 'Base',
        thesis: 'AI demand raises the floor under the cycle, but the peak margin still normalises.',
        rev: 177.21,
        margin: 38,
        pe: 11,
      },
      bull: {
        label: 'Bull',
        thesis: 'High-bandwidth memory is a contracted, sold-forward business and memory re-rates permanently as an AI input.',
        rev: 220,
        margin: 45,
        pe: 14,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'How much supply is already contracted',
        m: 'Share of capacity sold forward',
        b: 'The bull case rests on high-bandwidth memory behaving like a contracted component rather than a spot commodity.',
        c: 'Check how much of the next year is committed, at what pricing, and for how long. Sold out is not the same as priced.',
      },
      {
        h: 'Industry capex, not just Micron capex',
        m: '$25.26B own capex against $26.17B free cash flow',
        b: 'Memory downturns are made of everyone expanding at once. Competitor capacity decides the price Micron receives.',
        c: 'Read the other large suppliers’ capacity plans alongside this. Micron spending alone does not cause the turn, and it will not prevent it.',
      },
      {
        h: 'Conventional DRAM and NAND pricing',
        m: '55.91% trailing net margin',
        b: 'The non-HBM half is where the cycle shows up first, and it is still most of the bit supply.',
        c: 'Track bit shipments against average selling price separately. Volume growth with falling price is the shape of a peak.',
      },
      {
        h: 'The FY2027 estimate behind the paywall',
        m: 'Forward P/E 6.80 implies roughly $143 of EPS',
        b: 'The market is not paying 22x trailing earnings; it is paying under 7x an estimate that assumes the peak extends another year.',
        c: 'Source the FY2027 consensus properly before leaning on it. It is doing more work in the share price than anything visible on this page.',
      },
      {
        h: 'Capital return through the cycle',
        m: '$23.75B net cash',
        b: 'A strong balance sheet at the peak is what funds the trough. It is also what gets spent on capacity at the wrong moment.',
        c: 'Watch buybacks and capex against the cycle position. Retiring stock at the peak is a worse use of it than surviving the bottom.',
      },
    ],
  },

  // ---------------------------------------------------------------- software
  // Price $492.44 · cap $3.66T · EV $3.71T · 7.43B shares (-0.16% YoY) · TTM rev
  // $331.84B · TTM EBITDA $194.24B (58.53%) · TTM NI $133.75B (40.31%), EPS $17.95
  // · FCF $66.99B · cash $76.84B, debt $128.81B → net debt $51.97B · P/E 27.43
  // trailing, 24.93 forward · EV/EBITDA 19.09 · FY2026 (Jun-end, reported) rev
  // $331.84B · FY2027E rev $391.08B (+17.85%), EPS $19.75 · PT $572.92
  MSFT: {
    name: 'Microsoft',
    sector: 'software',
    shares: 1,
    cost: 492.44,
    priceRef: 492.44,
    prevRev: 331.84,
    growth: [17.85, 14, 13, 12, 11],
    niMargin: [37.5, 38, 38.5, 39, 39],
    ebMargin: [58, 58.5, 59, 59.5, 60],
    sharesOut: [7.43, 7.39, 7.35, 7.31, 7.27],
    peLow: 24,
    peHigh: 36,
    evMult: 22,
    netCash: -51.97,
    caveat:
      "Microsoft's fiscal year ends in June, so the calendar columns are approximate — CY2026 is built from the next-fiscal-year consensus of $391.08B. Note the company now carries net debt of about $52B against AI infrastructure spend, which is a change in character worth tracking, and that free cash flow of $66.99B is only half of $133.75B of net income for the same reason. ORCL, elsewhere in this file, is the same bet made with far more leverage.",
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI capex depresses margin while Azure growth normalises toward the market.',
        rev: 540,
        margin: 33,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'Azure and Copilot attach compound while margin holds near current levels.',
        rev: 626.4,
        margin: 39,
        pe: 30,
      },
      bull: {
        label: 'Bull',
        thesis: 'AI becomes a per-seat upsell across the whole installed base.',
        rev: 700,
        margin: 42,
        pe: 36,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Azure growth and AI contribution',
        m: 'Next-FY consensus revenue $391.08B, +17.9%',
        b: 'Azure is the growth engine and management has been separating AI-driven growth from the rest.',
        c: 'Check Azure growth and the disclosed AI contribution. Non-AI Azure decelerating while AI carries the number is a narrower story than it looks.',
      },
      {
        h: 'Capex and the margin',
        m: 'Net debt $51.97B; FCF $66.99B on NI $133.75B',
        b: 'Data centre spend converts to depreciation on a lag, and Microsoft has moved from large net cash to net debt funding it.',
        c: 'Check capex guidance against the operating margin guide. Both rising is fine; capex rising while margin guidance falls is the bear case.',
      },
      {
        h: 'Copilot seat adoption',
        m: 'Paid seats, not trials',
        b: 'Per-seat AI pricing across the Office base is the cheapest revenue Microsoft could add.',
        c: 'Look for disclosed paid seat counts and attach rates rather than usage anecdotes.',
      },
      {
        h: 'The OpenAI relationship',
        m: 'Terms, equity treatment and compute commitments',
        b: 'It affects both the income statement and the competitive position, in ways that have changed more than once.',
        c: 'Track the actual reported terms and any equity-method losses running through net income.',
      },
      {
        h: 'Gaming and other segments',
        m: 'Segment revenue and margin',
        b: 'Non-cloud segments dilute the blended margin this model assumes.',
        c: 'Check whether the lower-margin segments are growing faster than cloud. Mix, not cost, is what moves consolidated margin here.',
      },
    ],
  },

  // Price $152.94, down 36.67% over 52 weeks · cap $440.54B · EV $559.39B · 2.88B
  // shares (+1.95% YoY) · TTM rev $71.78B · TTM EBITDA $34.21B (47.66%) · TTM NI
  // $18.74B (26.36%), EPS $6.38 · FCF -$28.72B · cash $37.08B, debt $155.93B → net
  // debt $118.85B · P/E 26.23 trailing, 17.85 forward · EV/EBITDA 16.35 · FY2026
  // (May-end, reported) rev $67.36B (+17.35%), earnings $16.98B (+36.49%), so GAAP EPS
  // about $5.90 against a $7.63 consensus · FY2027E rev $89.37B (+32.68%), EPS $8.06
  // · PT $241.43
  ORCL: {
    name: 'Oracle',
    sector: 'software',
    shares: 1,
    cost: 152.94,
    priceRef: 152.94,
    prevRev: 67.36,
    growth: [32.68, 22, 18, 15, 12],
    // GAAP, and deliberately below both the reported FY2026 margin and the consensus.
    // FY2026 earned 25.2% of revenue and the $8.06 FY2027 consensus EPS implies about
    // 26%, but that estimate is non-GAAP and neither figure carries the depreciation on
    // a buildout that is currently running free cash flow at -$28.72B, or the interest
    // on $155.93B of debt. Year one steps down rather than extrapolating.
    niMargin: [21, 21, 22, 23, 24],
    // EBITDA sits above the net line precisely because it is struck before that
    // depreciation and interest. The mild decline is cloud mix against licence.
    ebMargin: [47, 46, 45, 45, 45],
    sharesOut: [2.88, 2.91, 2.94, 2.96, 2.98],
    peLow: 15,
    peHigh: 28,
    evMult: 14,
    netCash: -118.85,
    caveat:
      'The most leveraged version of the AI-capex bet in this book, and the market has already repriced it: the stock is down 36.67% over 52 weeks. Free cash flow is -$28.72B against $34.21B of trailing EBITDA, net debt is $118.85B, and enterprise value ($559.39B) exceeds market capitalisation ($440.54B) by more than a quarter — the debt is now a larger part of this company than it is of anything else here. Three further qualifications. The fiscal year ends 31 May, so the CY2026 column is built from FY2027 (June 2026 to May 2027) and the calendar labels are offset by roughly half a year. The $8.06 consensus EPS is non-GAAP against GAAP earnings of about $5.90 for FY2026, so the margins below are deliberately lower than the headline. And the +32.68% consensus growth rate is a backlog-conversion forecast: it assumes contracted AI compute is delivered on schedule, which requires the capex that is producing the negative free cash flow in the first place. MSFT elsewhere in this file is the same bet with a fraction of the leverage.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Contracted compute converts slowly, depreciation and interest arrive on schedule, and leverage does the rest.',
        rev: 120,
        margin: 15,
        pe: 12,
      },
      base: {
        label: 'Base',
        thesis: 'The AI backlog converts roughly on time and OCI earns an infrastructure margin against the debt.',
        rev: 165.72,
        margin: 24,
        pe: 21.5,
      },
      bull: {
        label: 'Bull',
        thesis: 'Oracle becomes a genuine third hyperscaler and the database estate migrates with it.',
        rev: 200,
        margin: 28,
        pe: 28,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Remaining performance obligations, and their conversion',
        m: 'FY2027E revenue $89.37B, +32.68%',
        b: 'A 33% growth rate at this size is contracted AI compute converting into revenue. The contract is signed; the capacity to serve it is being built with borrowed money.',
        c: 'Read RPO alongside the share of it expected to convert within twelve months. A rising backlog with a falling conversion share is the signal that the growth rate is moving right.',
      },
      {
        h: 'Free cash flow and the debt that funds it',
        m: 'FCF -$28.72B; net debt $118.85B',
        b: 'This is the number that separates Oracle from every other name in this file. Capex is being funded by borrowing, and the interest is permanent while the revenue is a forecast.',
        c: 'Track capex against operating cash flow and the maturity schedule on the debt. Watch credit ratings and spreads as closely as the earnings — here they are the same story.',
      },
      {
        h: 'The depreciation that has not landed yet',
        m: 'FY2026 GAAP margin 25.2%; model starts at 21%',
        b: 'Assets bought this year depreciate for years afterwards. Reported margin still reflects a company that had not yet built this much, which is why the driver table steps down instead of extrapolating.',
        c: 'Check the depreciation and amortisation line quarter by quarter against revenue growth. If D&A grows faster, the margin path below is still too generous.',
      },
      {
        h: 'GAAP against non-GAAP',
        m: 'Consensus EPS $8.06 is non-GAAP; GAAP about $5.90',
        b: 'The gap is stock compensation and acquisition amortisation, and it is roughly 30% of the headline.',
        c: 'Read GAAP net income first, then the reconciliation. Every forward multiple quoted for Oracle in the press uses the adjusted number.',
      },
      {
        h: 'Customer concentration in the AI backlog',
        m: 'Share of RPO from the largest counterparties',
        b: 'A backlog concentrated in a few AI companies is only as good as those companies\u2019 own funding, and several of them are themselves loss-making.',
        c: 'Check what is disclosed about counterparty concentration and contract term. A single large customer renegotiating changes the growth rate and the credit story at once.',
      },
    ],
  },

  // Price $243.00 · cap $199.99B · EV $230.96B · 823.00M shares (-7.44% YoY) · TTM
  // rev $43.94B · TTM EBITDA $12.90B (29.36%) · TTM NI $9.66B (21.99%), EPS $10.79
  // · FCF $15.15B · cash $11.40B, debt $42.38B → net debt $30.97B · P/E 22.52
  // trailing, 16.59 forward · EV/EBITDA 17.91 · FY2027E (Jan-end) rev $46.27B
  // (+11.42%), EPS $16.65 (non-GAAP) · PT $273.37
  CRM: {
    name: 'Salesforce',
    sector: 'software',
    shares: 1,
    cost: 243.0,
    priceRef: 243.0,
    prevRev: 41.53,
    growth: [11.42, 10, 9, 9, 8],
    // GAAP. Trailing GAAP net margin is 21.99%; the $16.65 consensus is non-GAAP.
    niMargin: [22, 23, 24, 25, 26],
    ebMargin: [29, 31, 32, 33, 34],
    sharesOut: [0.823, 0.81, 0.797, 0.784, 0.771],
    peLow: 18,
    peHigh: 30,
    evMult: 16,
    netCash: -30.97,
    caveat:
      "Salesforce's fiscal year ends in January, so the calendar columns are offset. Consensus EPS of $16.65 is non-GAAP against a trailing GAAP net margin of 21.99%; the margins below are GAAP. At 22.5x trailing and 16.6x forward earnings the market is treating this as a value software name now, not a growth one, which is the interesting part — and the share count fell 7.44% in a year, the fastest buyback in this book.",
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Seat growth stalls as AI agents reduce the number of seats customers need.',
        rev: 58,
        margin: 17,
        pe: 14,
      },
      base: {
        label: 'Base',
        thesis: 'Low-double-digit growth with steady margin expansion and buybacks.',
        rev: 65.31,
        margin: 26,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Agentic products get priced on consumption and reopen the growth rate.',
        rev: 72,
        margin: 30,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'The seat-count question',
        m: 'Next-FY consensus revenue growth +11.4%',
        b: 'Salesforce sells seats. If AI agents let customers do the same work with fewer people, the pricing model is the problem, not the product.',
        c: 'Check whether consumption-based pricing is growing as a share of bookings. That is the hedge against seat compression.',
      },
      {
        h: 'Current remaining performance obligation',
        m: 'cRPO growth',
        b: 'cRPO leads revenue by a couple of quarters and is harder to manage than revenue itself.',
        c: 'Check cRPO growth against revenue growth. cRPO decelerating first is the early warning.',
      },
      {
        h: 'Operating margin expansion',
        m: 'GAAP margin 21.99% trailing',
        b: 'Most of the recent shareholder return has come from margin discipline rather than growth.',
        c: 'Check whether margin is still expanding. Once it plateaus, the story needs the growth rate back.',
      },
      {
        h: 'Buybacks against dilution',
        m: '823M shares, modelled down to 771M',
        b: 'Stock compensation is large, so gross buybacks and net share count reduction are very different numbers.',
        c: 'Check net shares outstanding, not buyback dollars.',
      },
      {
        h: 'Agentforce adoption',
        m: 'Disclosed paid deployments',
        b: 'The agentic product is the answer to the seat-compression risk, so its adoption is the bull case.',
        c: 'Look for paid deployment counts and consumption revenue, not announcements.',
      },
    ],
  },

  // Price $131.17 · cap $135.61B · EV $137.36B · 1.03B shares (-0.40% YoY) · TTM rev
  // $14.73B · TTM EBITDA $2.90B (19.66%) · TTM NI $1.67B (11.34%), EPS $1.60 · FCF
  // $4.58B · cash $4.66B, debt $8.45B → net debt $1.75B · P/E 81.95 trailing, 28.95
  // forward · EV/EBITDA 47.41 · FY2026E rev $16.22B (+22.15%), EPS $4.07 (non-GAAP)
  // · PT $142.28
  NOW: {
    name: 'ServiceNow',
    sector: 'software',
    shares: 1,
    cost: 131.17,
    priceRef: 131.17,
    prevRev: 13.28,
    growth: [22.15, 19, 17, 15, 13],
    // GAAP. Trailing GAAP net margin is 11.2%; the $4.07 consensus is non-GAAP.
    niMargin: [11, 14, 17, 19, 21],
    ebMargin: [20, 23, 25, 27, 28],
    sharesOut: [1.03, 1.04, 1.05, 1.06, 1.07],
    peLow: 30,
    peHigh: 55,
    evMult: 30,
    netCash: -3.79,
    caveat:
      'The closest comparison in this book to AXON: high-quality recurring revenue and roughly 82x trailing earnings. As with AXON, the exit multiple decides the outcome, and GAAP margin of 11.34% is far below the ~26% implied by the non-GAAP consensus EPS. The two also moved together — both fell about 10-20% in the fortnight to 10 September 2026 on unchanged estimates, which is what a multiple-driven pair looks like.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Growth decelerates into the teens and the premium multiple compresses.',
        rev: 24,
        margin: 14,
        pe: 22,
      },
      base: {
        label: 'Base',
        thesis: 'Workflow expansion continues and GAAP margin catches up with non-GAAP.',
        rev: 29.34,
        margin: 21,
        pe: 42,
      },
      bull: {
        label: 'Bull',
        thesis: 'ServiceNow becomes the workflow layer for enterprise AI agents.',
        rev: 34,
        margin: 25,
        pe: 55,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Subscription revenue growth',
        m: 'FY2026E revenue $16.22B, +22.2%',
        b: 'The multiple requires growth to stay in the high teens or better for years.',
        c: 'Check subscription revenue growth and the current remaining performance obligation together. A single sub-20% quarter tends to reset the multiple.',
      },
      {
        h: 'Large deal counts',
        m: 'Customers above $5M and $20M ACV',
        b: 'Expansion inside large accounts is what produces the growth rate at this revenue scale.',
        c: 'Check the count of very large customers, not total customer count.',
      },
      {
        h: 'GAAP margin against the multiple',
        m: 'GAAP net margin 11.34%; P/E 81.95',
        b: 'The gap between GAAP and non-GAAP is mostly stock compensation, which is a real cost to shareholders.',
        c: 'Check GAAP margin trending toward the path in the drivers table. If it does not, the 2030 EPS here is roughly double what it should be.',
      },
      {
        h: 'AI product monetisation',
        m: 'Pro Plus tier adoption and pricing',
        b: 'A higher-priced AI tier sold into the installed base is the cleanest way to defend the growth rate.',
        c: 'Look for disclosed attach rates and net new ACV from the AI tiers.',
      },
      {
        h: 'Share count',
        m: '1.03B shares, modelled up to 1.07B',
        b: 'Unlike most names here, the share count in this model rises — stock compensation outpaces buybacks.',
        c: 'Check net dilution each year. It quietly removes several points of EPS growth.',
      },
    ],
  },

  // Price $208.86 · cap $213.86B · EV $209.67B · 1.02B shares (+3.24% YoY) · TTM rev
  // $5.40B · TTM EBITDA $106.86M (1.98%) · TTM NI $45.00M (0.83%), EPS $0.04 · FCF
  // $1.61B · cash $5.01B, debt $820.18M → net cash $4.19B · P/E 4,752.95 trailing,
  // 148.22 forward · EV/EBITDA 1,962.04 · FY2027E (Jan-end) rev $6.01B (+24.82%),
  // EPS $1.26 (non-GAAP) · PT $232.69
  CRWD: {
    name: 'CrowdStrike',
    sector: 'software',
    shares: 1,
    cost: 208.86,
    priceRef: 208.86,
    prevRev: 4.81,
    growth: [24.82, 22, 20, 18, 16],
    // GAAP, and barely positive today: a trailing P/E of ~4,753 on EPS of $0.04 means
    // GAAP earnings are close to zero. The $1.26 consensus is non-GAAP.
    niMargin: [1, 4, 8, 12, 15],
    ebMargin: [4, 9, 14, 18, 21],
    sharesOut: [1.02, 1.04, 1.06, 1.08, 1.1],
    peLow: 40,
    peHigh: 80,
    evMult: 30,
    netCash: 4.19,
    caveat:
      'CrowdStrike is essentially not profitable on a GAAP basis — a trailing P/E of about 4,753 on $0.04 of EPS, and TTM EBITDA of $106.86M on $5.40B of revenue, say so plainly. Consensus EPS of $1.26 is non-GAAP and excludes very large stock compensation, which is also why the share count rose 3.24% in a year while free cash flow ran at $1.61B. Everything below year one is a forecast that GAAP margin arrives; the fiscal year also ends in January, so the columns are offset. Treat this as one of the most speculative entries in the book, alongside IREN and RKLB.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Growth slows to the mid-teens and GAAP profitability never really arrives.',
        rev: 9.5,
        margin: 8,
        pe: 30,
      },
      base: {
        label: 'Base',
        thesis: 'Platform consolidation continues and stock compensation stops growing with revenue.',
        rev: 12.03,
        margin: 15,
        pe: 55,
      },
      bull: {
        label: 'Bull',
        thesis: 'CrowdStrike becomes the default security platform with real operating leverage.',
        rev: 15,
        margin: 19,
        pe: 80,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Annual recurring revenue and net new ARR',
        m: 'Next-FY consensus revenue $6.01B, +24.82%',
        b: 'Net new ARR is the cleanest read on demand and turns before reported revenue does.',
        c: 'Check net new ARR quarter over quarter, not just total ARR growth.',
      },
      {
        h: 'GAAP profitability',
        m: 'TTM EBITDA $106.86M on $5.40B revenue; P/E ~4,753',
        b: 'The company converts almost none of its revenue into GAAP profit today.',
        c: 'Check GAAP operating income directly and how much stock compensation is inside the gap. This is the assumption most likely to be wrong.',
      },
      {
        h: 'Module adoption',
        m: 'Customers running 6+ and 8+ modules',
        b: 'Selling more modules into existing customers is what produces both growth and eventual margin.',
        c: 'Check the module adoption disclosures, which lead net revenue retention.',
      },
      {
        h: 'Dilution',
        m: '1.02B shares, modelled up to 1.10B',
        b: 'Share count rises in this model because stock compensation is the main cost of the growth.',
        c: 'Check net share count each year and reduce the 2030 EPS if it is climbing faster than the path here.',
      },
      {
        h: 'Competitive pricing',
        m: 'Bundled security from MSFT and others',
        b: 'The largest competitor gives security away inside a bundle that customers already pay for.',
        c: 'Listen for discounting or contract-length changes. Both show up before the growth rate does.',
      },
    ],
  },

  // Price $165.86 · cap $398.57B · EV $389.37B · 2.40B shares (+1.79% YoY) · TTM rev
  // $6.16B · TTM EBITDA $2.66B (43.25%) · TTM NI $3.02B (49.00%), EPS $1.17 · FCF
  // $3.36B · cash $9.41B, debt $211.40M → net cash $9.20B · P/E 141.85 trailing,
  // 87.14 forward · EV/EBITDA 146.24 · PS 64.75 · FY2026E rev $8.19B (+82.97%),
  // EPS $1.61 · PT $193.88
  PLTR: {
    name: 'Palantir',
    sector: 'software',
    shares: 1,
    cost: 165.86,
    priceRef: 165.86,
    prevRev: 4.48,
    // growth[1] was the published FY2027 consensus on 29 August (+48.68%); that estimate
    // is now behind a paywall, so it is carried forward here rather than re-sourced.
    growth: [82.97, 48.68, 35, 28, 24],
    // Consensus EPS $1.61 implies 48.0%, close to the 49.00% GAAP trailing margin, so
    // there is no adjusted/GAAP gap to correct. The decline after year one is judgement:
    // a 49% net margin on $6B of revenue is flattered by interest income and tax items,
    // and is not what the operating business earns.
    niMargin: [48.0, 45, 43, 41, 40],
    ebMargin: [44, 45, 46, 46, 47],
    sharesOut: [2.44, 2.48, 2.51, 2.54, 2.56],
    peLow: 40,
    peHigh: 80,
    evMult: 40,
    netCash: 9.2,
    caveat:
      'The multiple decides this one, not the growth rate \u2014 the same problem AXON has, at a much larger scale. 142x trailing earnings and 146x EV/EBITDA mean the exit assumption in the scenario cards dominates every driver above it: revenue can compound at 30% a year for five years and the position still loses money if the multiple lands anywhere near the software average. Two other things. The 49% GAAP net margin is flattered by interest income on $9.41B of cash and by tax items, so the driver table steps it down rather than holding it flat. And the stock sits at $165.86 against a $193.88 consensus price target, so nothing here depends on analysts being too cautious. Note also that the FY2027 estimate behind growth[1] is now paywalled and carried forward from 29 August rather than re-sourced.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Commercial growth slows to enterprise-software normal and the multiple compresses to match.',
        rev: 18,
        margin: 32,
        pe: 30,
      },
      base: {
        label: 'Base',
        thesis: 'US commercial keeps compounding, government renews, and the premium multiple half-holds.',
        rev: 26.09,
        margin: 40,
        pe: 60,
      },
      bull: {
        label: 'Bull',
        thesis: 'The platform becomes the default deployment layer for enterprise AI and pricing power holds.',
        rev: 32,
        margin: 45,
        pe: 80,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'US commercial growth and customer count',
        m: 'FY2026E revenue $8.19B, +82.97%',
        b: 'Government revenue is durable but slow; the growth rate that justifies the multiple is the US commercial line.',
        c: 'Check US commercial revenue growth and net new customers separately from government. The consensus curve assumes commercial carries it.',
      },
      {
        h: 'Where the 49% margin comes from',
        m: 'TTM net income $3.02B on $6.16B revenue',
        b: 'Interest income on $9.41B of cash and tax items sit inside that margin. Operating margin is the number that scales with the business.',
        c: 'Read GAAP operating income separately from net income. The driver table steps the margin down for exactly this reason \u2014 check whether that step is too harsh or not harsh enough.',
      },
      {
        h: 'Stock compensation and dilution',
        m: '2.40B shares, +1.79% year over year',
        b: 'Dilution is modest in percentage terms but the share count is enormous, so small percentages are large absolute numbers against 2030 EPS.',
        c: 'Check the diluted count against the drivers table and stock compensation as a share of revenue.',
      },
      {
        h: 'Remaining performance obligation',
        m: 'RPO and its duration',
        b: 'Bookings and contract duration tell you whether growth is contracted or has to be won again next year.',
        c: 'Check total RPO and how much converts within twelve months. Growth on shortening contracts is lower quality than the headline suggests.',
      },
      {
        h: 'The multiple, not the model',
        m: '142x trailing earnings, 146x EV/EBITDA',
        b: 'At this level the exit P/E is the whole investment case, and it is a judgement rather than a disclosure.',
        c: 'Set the 2030 P/E in the scenario cards first and read the result, then decide whether the growth assumptions matter at all.',
      },
    ],
  },

  // Fiscal year ends 31 January, so the labels are offset by almost a full year: the
  // year stockanalysis.com calls FY2027 runs February 2026 to January 2027 and is the
  // one that overlaps CY2026. That is the estimate used for year one here, not the
  // FY2026 column, which has already finished.
  // Price $329.72 · cap $116.21B · EV $114.64B · 352.46M shares (+3.43% YoY) · TTM rev
  // $5.43B · TTM EBITDA -$1.04B (-19.07%) · TTM NI -$1.09B (-20.07%), EPS -$3.17 ·
  // cash $2.34B, debt $2.76B; the site's net cash of $1.57B counts long-term
  // investments and matches the EV bridge (cap less EV), so netCash carries that ·
  // FCF $1.20B · no trailing P/E, forward 131.09 · PS 21.38 · FY2026E (Jan-end, done)
  // rev $4.68B (+29.16%), EPS $1.25 · FY2027E rev $6.32B (+34.83%), EPS $2.20 — one of
  // the few second years still outside the paywall · PT $413.29 · 51 analysts
  SNOW: {
    name: 'Snowflake',
    sector: 'software',
    shares: 1,
    cost: 329.72,
    priceRef: 329.72,
    // Backs out of the FY2027 estimate at its stated growth rate, and lands on $4.687B
    // — the FY2026 actual of $4.68B, which is the cross-check that the offset is right.
    prevRev: 4.6874,
    growth: [34.83, 28, 24, 21, 18],
    // The consensus $2.20 EPS implies a 12.3% net margin; the trailing GAAP margin is
    // -20.07%. Almost the whole gap is stock compensation, so this path stays negative
    // for two years and crosses into profit in CY2028.
    niMargin: [-8, -2, 4, 8, 12],
    ebMargin: [-5, 2, 8, 13, 17],
    sharesOut: [0.358, 0.365, 0.371, 0.376, 0.38],
    peLow: 30,
    peHigh: 55,
    evMult: 20,
    netCash: 1.57,
    caveat:
      'A GAAP-versus-adjusted gap wide enough to invert the answer, and the same one ZETA has at a much larger size. Snowflake generated $1.20B of free cash flow and a $1.09B GAAP net loss in the same twelve months; the difference is very largely stock-based compensation, which is also why the share count rises about 3.4% a year. This model is GAAP, so it shows losses until CY2028 and a base case below today’s price — on the adjusted basis the consensus uses, the same revenue path produces roughly twice the EPS and a completely different conclusion. Decide which basis you believe before reading the ladder, and note that at 21.38x sales the exit multiple is doing more work here than the growth rate. The fiscal year ending 31 January is the second trap: year one is the estimate labelled FY2027, not FY2026, which has already closed.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Consumption pricing cuts both ways in a slowdown and the lakehouse competitors commoditise storage and compute.',
        rev: 10,
        margin: 3,
        pe: 25,
      },
      base: {
        label: 'Base',
        thesis: 'Snowflake stays the default governed data platform and operating leverage finally reaches GAAP.',
        rev: 14.32,
        margin: 14,
        pe: 45,
      },
      bull: {
        label: 'Bull',
        thesis: 'AI workloads run where the governed data already is, and the consumption meter runs much faster.',
        rev: 18,
        margin: 17,
        pe: 55,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Net revenue retention',
        m: 'FY2027E revenue $6.32B, +34.8%',
        b: 'Consumption pricing means growth is mostly existing customers spending more, which is the first thing to move in either direction.',
        c: 'Read net revenue retention with new-customer counts. Retention falling while headline growth holds means the mix is being carried by land, not expand.',
      },
      {
        h: 'Stock compensation as a share of revenue',
        m: '$1.20B free cash flow against a $1.09B GAAP net loss',
        b: 'This is the entire gap between the two bases, and it is the reason the driver table disagrees with the consensus EPS.',
        c: 'Track SBC against revenue each quarter. Falling as a percentage is what turns the adjusted story into a GAAP one; flat means the dilution continues.',
      },
      {
        h: 'Share count',
        m: '352.46M shares, +3.43% year over year',
        b: 'Buybacks here largely offset issuance rather than shrinking the count, so per-share progress lags the business.',
        c: 'Compare the diluted count year over year against buyback spend. Cash spent to stand still is a real cost that free cash flow flatters.',
      },
      {
        h: 'AI workload attachment',
        m: 'Consumption from AI and machine-learning features',
        b: 'The bull case is that model training and inference pull compute to the data instead of the other way round.',
        c: 'Look for disclosed consumption from AI products, not customer counts using them. Adoption without consumption does not pay.',
      },
      {
        h: 'Competitive floor on pricing',
        m: '21.38x sales',
        b: 'Open table formats let customers keep data outside any one vendor, which caps what storage and governance can charge.',
        c: 'Watch pricing commentary and gross margin. A stable gross margin under open-format pressure is the thing to verify, not assume.',
      },
    ],
  },

  // ---------------------------------------------------------------- internet
  // Price $76.01 (post-split) · cap $316.50B · EV $324.03B · 4.16B shares (-1.48%
  // YoY) · TTM rev $48.37B · TTM EBITDA $14.73B (30.45%) · TTM NI $13.65B (28.22%),
  // EPS $3.17 · FCF $11.15B · cash $9.13B, debt $16.65B → net debt $7.53B · P/E 23.95
  // trailing, 21.94 forward · EV/EBITDA 22.00 · FY2026E rev $51.22B (+13.36% from
  // $45.18B), EPS $3.59 · PT $93.66
  NFLX: {
    name: 'Netflix',
    sector: 'internet',
    shares: 1,
    cost: 76.01,
    priceRef: 76.01,
    prevRev: 45.18,
    growth: [13.36, 11, 10, 9, 8],
    niMargin: [29.2, 30, 31, 31.5, 32],
    ebMargin: [31, 32, 33, 34, 34],
    sharesOut: [4.16, 4.12, 4.08, 4.04, 4.0],
    peLow: 20,
    peHigh: 34,
    evMult: 18,
    netCash: -7.53,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Subscriber growth saturates and content costs rise faster than pricing.',
        rev: 65,
        margin: 25,
        pe: 16,
      },
      base: {
        label: 'Base',
        thesis: 'Pricing and the advertising tier lift margin as subscriber growth normalises.',
        rev: 73.62,
        margin: 32,
        pe: 27,
      },
      bull: {
        label: 'Bull',
        thesis: 'Advertising and live events make Netflix a second home for brand budgets.',
        rev: 82,
        margin: 35,
        pe: 34,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Advertising tier revenue',
        m: 'FY2026E revenue $51.22B, +13.4%',
        b: 'The ad tier is why Netflix belongs in this sector group at all — it competes for the same budgets as META, GOOGL and APP.',
        c: 'Watch for a disclosed advertising revenue figure and its growth. This is both the margin lever and the direct read-across to the ad names in this book.',
      },
      {
        h: 'Average revenue per member',
        m: 'ARM by region',
        b: 'Netflix stopped reporting subscriber counts, so revenue per member and total revenue are what is left.',
        c: 'Check ARM by region against price increases. Pricing-led growth with flat engagement is a different quality of growth.',
      },
      {
        h: 'Content spend against amortisation',
        m: 'Cash content spend versus the P&L charge',
        b: 'Cash spend and the amortisation charge diverge, which is how margin can look better than cash generation.',
        c: 'Compare cash content spend with the income statement charge and with free cash flow.',
      },
      {
        h: 'Live events and sport',
        m: 'Rights costs and their contract length',
        b: 'Live rights are expensive, non-amortisable in the usual way, and bring advertising inventory.',
        c: 'Check what rights were bought, for how long and at what cost, against the advertising revenue they bring.',
      },
      {
        h: 'Password sharing and engagement',
        m: 'Engagement hours per member',
        b: 'The one-off boost from paid sharing has largely been harvested; engagement is what sustains pricing power now.',
        c: 'Watch engagement commentary. Falling hours with rising prices is how churn starts.',
      },
    ],
  },

  // Price $30.56 · cap $7.67B · EV $7.58B · 251.01M shares, +13.60% YoY · TTM rev
  // $1.57B · TTM EBITDA $115.94M (7.38%) · TTM net income −$2.17M (−0.14%) · FCF
  // $224.41M · cash $309.95M, debt $220.25M → net cash $89.70M · P/E n/a, forward
  // 27.98 · EV/EBITDA 65.39 · PS 4.88 · FY2025 rev $1.30B (+29.72%) · FY2026E rev
  // $1.82B (+39.47%), EPS $0.96 · PT $31.36 (at the money)
  // The one entry whose reported figures did not move at all between the 29 August and
  // 10 September pulls — only the price and the FY2027 estimate's availability did.
  ZETA: {
    name: 'Zeta Global',
    sector: 'internet',
    shares: 1,
    cost: 30.56,
    priceRef: 30.56,
    prevRev: 1.305,
    // Two consensus years, not one: FY2026 at +39.47% and FY2027 at +16.02% were both
    // published on 29 August, and the deceleration between them is steep enough to be
    // worth keeping rather than smoothing. The FY2027 figure is now paywalled and is
    // carried forward rather than re-sourced. Only 2028–2030 are judgement.
    growth: [39.47, 16.02, 14, 12, 11],
    // GAAP, and nowhere near the $0.96 consensus — that number is adjusted. Trailing GAAP
    // net income is −$2.17M on $1.571B of revenue, so year one is a company that has only
    // just reached break-even, not one earning a 20% margin.
    niMargin: [1, 3.5, 6, 8, 10],
    // Also GAAP-ish: trailing EBITDA of $115.94M is 7.4% of revenue, against the ~20%
    // adjusted EBITDA margin the company reports. Stock compensation is the difference.
    ebMargin: [8, 10, 12.5, 14.5, 16],
    // The count rose 13.60% in the last year. This path assumes that decelerates hard to
    // ~4% and then below — an assumption, and the one most likely to be too kind.
    sharesOut: [0.259, 0.272, 0.283, 0.292, 0.3],
    peLow: 25,
    peHigh: 45,
    // Not the 65.3x it trades at today. Holding that multiple to 2030 would be assuming
    // the answer; this is where a mid-teens grower with real GAAP earnings could sit.
    evMult: 20,
    netCash: 0.0897,
    caveat:
      'The widest GAAP-versus-adjusted gap in this book, and it is not close. The $0.96 FY2026 consensus EPS is adjusted; on GAAP the trailing twelve months show a $2.17M net loss, and trailing EBITDA of $115.94M is 7.4% of revenue against the roughly 20% adjusted EBITDA margin the company reports. Stock compensation is most of that difference, which makes it a share count problem as much as a margin one — the count rose 13.60% in a single year, and the path below assumes that decelerates to about 4%. Two more things before the numbers. The stock is at $30.56 against a $31.36 consensus price target and 65.39x EV/EBITDA, so the base case here is earnings catching up to the multiple, not the multiple re-rating. And free cash flow of $224.41M exceeds both trailing EBITDA and reported net income — the cash story is far stronger than the earnings story, which is exactly the argument the 2024 short thesis picked at.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Growth reverts to the ad market, GAAP margin stalls near break-even and the multiple compresses.',
        rev: 2.3,
        margin: 6,
        pe: 22,
      },
      base: {
        label: 'Base',
        thesis: 'Growth decelerates as consensus expects, stock compensation normalises and GAAP earnings arrive.',
        rev: 2.99,
        margin: 10,
        pe: 35,
      },
      bull: {
        label: 'Bull',
        thesis: 'The data-plus-activation stack takes budget from the walled gardens and earns a software margin.',
        rev: 3.6,
        margin: 14,
        pe: 45,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'GAAP against adjusted',
        m: 'FY2026E EPS $0.96 adjusted; TTM GAAP net income −$2.17M',
        b: 'Every headline multiple quoted for this company uses the adjusted number. This model uses the GAAP one, and the two disagree by more than an order of magnitude.',
        c: 'Read GAAP net income first, then the reconciliation to adjusted. The size of the stock-compensation line in that bridge is the single most important number in the release.',
      },
      {
        h: 'Diluted share count',
        m: '251.01M shares, +13.60% year over year',
        b: 'Compensation paid in stock is what turns revenue growth into a smaller per-share result than it looks, and 13.6% in one year is fast.',
        c: 'Check the diluted count against the drivers table, which assumes roughly 4% and falling. If dilution stays in double digits, the 2030 EPS is wrong before any operating assumption is tested.',
      },
      {
        h: 'The deceleration consensus already expects',
        m: 'FY2026E +39.5%, then FY2027E +16.0%',
        b: 'Consensus itself has growth more than halving between 2026 and 2027. The model inherits that, so an early sign either way moves every year after it.',
        c: 'Check the forward guide against the +16% shape for 2027, not just the beat on the current quarter. Twenty consecutive beat-and-raise quarters set an expectation that the estimate curve does not.',
      },
      {
        h: 'Cash conversion',
        m: 'FCF $224.41M against TTM EBITDA $115.94M',
        b: 'Free cash flow is running ahead of both EBITDA and net income, largely because compensation paid in stock costs no cash. That is the bull case and the short case restated as one number.',
        c: 'Track free cash flow per share, not in total — cash generated while the share count grows 13.6% is a different result from the same cash on a flat count.',
      },
      {
        h: 'Direct platform revenue mix',
        m: 'FY2026E revenue $1.82B, +39.5%',
        b: 'Revenue routed through agency and integrated partners carries different economics and different durability from revenue the platform earns directly.',
        c: 'Check the direct share and whether it is growing faster than the total, plus scaled customer count against spend per customer. Growth carried by the integrated channel is a weaker result than the same headline carried by direct.',
      },
    ],
  },

  // One of three entries whose consensus has revenue falling in year one — COIN is
  // down 23.01% and UNH 0.32% — and one of two whose price target sits below the
  // market price, AAPL being the other.
  // Price $13.97 · cap $6.56B · EV $5.51B · 469.88M shares (-4.27% YoY) · TTM rev
  // $2.99B · TTM EBITDA $697.98M (23.34%) · TTM NI $406.89M (13.61%), EPS $0.85 ·
  // cash $1.49B, debt $434.11M → net cash $1.06B · FCF $863.05M on $218.63M capex ·
  // P/E 16.43 trailing, 15.29 forward · EV/EBITDA 7.90 · PS 2.20 · FY2026E rev $2.74B
  // (-5.23%), EPS $1.16 · PT $13.55, 3.01% BELOW the price · 36 analysts
  TTD: {
    name: 'The Trade Desk',
    sector: 'internet',
    shares: 1,
    cost: 13.97,
    priceRef: 13.97,
    prevRev: 2.8912,
    // Year one is the consensus decline. The recovery after it is modelled judgement:
    // a business that stabilises and grows with connected-TV budgets, not one that
    // returns to the 20%+ it compounded at before.
    growth: [-5.23, 3, 6, 7, 7],
    // Consensus EPS $1.16 implies a 19.9% net margin against 13.61% trailing GAAP.
    // Year one sits at the GAAP level and improves only with scale.
    niMargin: [14, 15, 16, 17, 18],
    ebMargin: [23, 24, 25, 26, 26],
    sharesOut: [0.465, 0.455, 0.446, 0.437, 0.429],
    // A no-growth ad-tech band, not the one this company used to earn.
    peLow: 10,
    peHigh: 18,
    evMult: 8,
    netCash: 1.06,
    caveat:
      'Read this one as the counterexample to APP rather than as a second position in the same trade. Consensus has revenue declining 5.23% in CY2026 — one of only three negative year-one growth rates here, alongside COIN and UNH — and the average price target of $13.55 sits 3.01% below the market price — analysts covering it do not think it is cheap even here. At 2.20x sales and 7.90x EV/EBITDA the multiple already reflects that, which is the case for owning it and also the reason the base case below is a stabilisation story rather than a growth one. Two specifics to check before believing either: the consensus $1.16 EPS is adjusted and implies a 19.9% net margin against 13.61% GAAP trailing, and the whole question is whether the demand-side platform keeps its share of connected-TV budgets against retail media networks and the walled gardens — three of which (APP, META, GOOGL) are already in this book on the other side of the same trade.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'The open internet keeps losing budget to walled gardens and retail media, and the take rate follows it down.',
        rev: 2.8,
        margin: 10,
        pe: 8,
      },
      base: {
        label: 'Base',
        thesis: 'Connected TV stabilises the business as the independent buy-side of the open internet.',
        rev: 3.43,
        margin: 18,
        pe: 14,
      },
      bull: {
        label: 'Bull',
        thesis: 'Identity and supply-path products win back share, and the platform re-rates on renewed growth.',
        rev: 4.2,
        margin: 22,
        pe: 20,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Whether revenue actually declines',
        m: 'FY2026E revenue $2.74B, -5.2%',
        b: 'A shrinking top line at an advertising platform is usually share loss, not a soft market — the market itself is still growing.',
        c: 'Check reported revenue against the prior year each quarter. The entire entry turns on whether the decline is a reset or the start of a trend.',
      },
      {
        h: 'Connected TV share of spend',
        m: 'CTV as a proportion of gross spend',
        b: 'CTV is the part of the business that justifies any recovery, and it competes with content owners selling their own inventory.',
        c: 'Look for CTV growth disclosed separately, with named streaming supply partners. Group growth hides the mix.',
      },
      {
        h: 'The price target below the price',
        m: 'PT $13.55 against $13.97, 36 analysts',
        b: 'Two entries in this book carry that inversion. It means the sell side sees the current price as full, not as a discount.',
        c: 'Re-check the target after the next two prints. A target that keeps falling with the price is a different signal from one that holds.',
      },
      {
        h: 'Retail media and walled-garden competition',
        m: 'Take rate on managed spend',
        b: 'AMZN, META and GOOGL all sell the same budget with first-party data the open internet cannot match.',
        c: 'Read this entry beside APP and META in the same quarter. Budget moving between them shows up here first and worst.',
      },
      {
        h: 'Buyback pace against the cash pile',
        m: '469.88M shares, -4.27% year over year; $1.06B net cash',
        b: 'Shrinking the count 4% a year is a meaningful part of the per-share return when revenue is flat.',
        c: 'Check repurchases against free cash flow of $863.05M. A buyback funded from a declining business is a choice, not a given.',
      },
    ],
  },

  // FY2025 GAAP: revenue $2.203B, operating income $441.98M (20.06%), net income
  // $529.72M — net income ABOVE operating income, on interest from a large cash
  // balance plus tax effects. That gap matters for reading the trailing margin below.
  // Price $155.34 · cap $29.89B · EV $27.12B · 192.40M shares (+8.43% YoY) · TTM rev
  // $2.78B · TTM EBITDA $801.52M (28.84%) · TTM NI $871.10M (31.35%), EPS $4.29 ·
  // cash $2.79B, debt $20.87M → net cash $2.77B · FCF $1.02B · P/E 36.21 trailing,
  // 25.70 forward · EV/EBITDA 33.84 · PS 10.76 · FY2026E rev $3.38B (+53.66%), EPS
  // $7.68 · PT $213.10 · 34 analysts
  RDDT: {
    name: 'Reddit',
    sector: 'internet',
    shares: 1,
    cost: 155.34,
    priceRef: 155.34,
    // Backs out of the consensus at its stated growth rate to $2.20B, which matches
    // the FY2025 reported revenue of $2.203B — the cross-check that the anchor is right.
    prevRev: 2.203,
    growth: [53.66, 35, 28, 22, 18],
    // Consensus EPS $7.68 implies about a 44% net margin. Reported FY2025 operating
    // margin was 20.06%; trailing net margin of 31.35% is itself flattered by interest
    // income and tax items. Year one starts at 26% and climbs on operating leverage.
    niMargin: [26, 28, 30, 31, 32],
    ebMargin: [30, 33, 35, 37, 38],
    sharesOut: [0.198, 0.205, 0.211, 0.216, 0.22],
    peLow: 25,
    peHigh: 45,
    evMult: 25,
    netCash: 2.77,
    caveat:
      'Three separate reasons the headline margin overstates the business. The consensus $7.68 FY2026 EPS implies roughly a 44% net margin, which no advertising platform in this book earns — META, the most profitable of them, does not. The trailing 31.35% GAAP net margin is itself above the 20.06% operating margin Reddit reported for FY2025, because interest on $2.77B of net cash and tax items sit below the operating line; strip those and the operating business is roughly a fifth-margin company growing quickly, not a third-margin one. And the share count rose 8.43% in a year, so per-share progress trails the company. What the model cannot price at all is the single largest swing factor: a meaningful share of traffic arrives through one search engine, owned by GOOGL, which is also in this book and is being paid separately for data licensing.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Search referrals fall away, AI answers absorb the queries and advertising growth stalls near current scale.',
        rev: 5.5,
        margin: 18,
        pe: 18,
      },
      base: {
        label: 'Base',
        thesis: 'Reddit becomes a standard line on the social buy alongside its data-licensing income.',
        rev: 8.41,
        margin: 32,
        pe: 30,
      },
      bull: {
        label: 'Bull',
        thesis: 'Community data proves uniquely valuable to both advertisers and model builders, and pricing power follows.',
        rev: 11,
        margin: 36,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Traffic dependence on external search',
        m: 'Logged-out users as a share of the base',
        b: 'A large part of the audience arrives from one search engine. That is a supplier relationship, not a moat, and the supplier is GOOGL.',
        c: 'Read daily active uniques split between logged-in and logged-out. Logged-in growth is the part that survives an algorithm change.',
      },
      {
        h: 'Operating margin, not net margin',
        m: 'FY2025 operating margin 20.06% against a 31.35% trailing net margin',
        b: 'The difference is interest income and tax, neither of which is the advertising business getting better.',
        c: 'Track operating income directly. It is the line the 2030 margin assumption below actually has to reach.',
      },
      {
        h: 'Average revenue per user, by region',
        m: 'FY2026E revenue $3.38B, +53.7%',
        b: 'International users are most of the growth in users and a small part of the growth in money.',
        c: 'Check ARPU for the US against the rest of the world separately. User growth in cheap markets does not fund this revenue path.',
      },
      {
        h: 'Data licensing renewals',
        m: 'Licensing income and its counterparties',
        b: 'These are a handful of large contracts, high margin and lumpy, with the same companies that also send the traffic.',
        c: 'Watch renewal terms and how much of revenue they represent. A non-renewal moves both the licensing line and the traffic behind it.',
      },
      {
        h: 'Dilution',
        m: '192.40M shares, +8.43% year over year',
        b: 'Faster than any of the large-cap advertising platforms this entry is valued against.',
        c: 'Compare the diluted count against the modelled path. If it keeps compounding at 8%, the per-share result falls well short of the business.',
      },
    ],
  },

  // ---------------------------------------------------------------- space
  // Listed on Nasdaq 12 June 2026, so there is no full year as a public company and no
  // trading history to build a multiple band from.
  // Price $148.18 · cap $2.01T · EV $1.95T · 13.57B shares (+41.79% YoY) · TTM rev
  // $23.04B · TTM EBITDA $5.90B (25.59%) · TTM NI -$8.89B (-35.66%), EPS -$2.27 · FCF
  // -$32.52B · cash $100.01B, debt $39.71B → net cash $60.30B · fwd P/E 102.40
  // · EV/EBITDA 330.83 · PS 87.28 · FY2026E rev $44.74B (+139.58%), EPS $0.09
  // · FY2027E EPS $1.58; the FY2027 revenue estimate is now paywalled · PT $220.68
  SPCX: {
    name: 'SpaceX',
    sector: 'space',
    shares: 1,
    cost: 148.18,
    priceRef: 148.18,
    prevRev: 18.67,
    // Both consensus years were published on 29 August and both were above +135%.
    // Nothing else in this book has a curve like it. The FY2027 revenue estimate is now
    // paywalled, so growth[1] is carried forward; 2028-2030 are a guess at how it decays.
    growth: [139.58, 136.32, 60, 40, 30],
    // Consensus-derived: $0.09 FY2026 EPS is 2.8% of revenue, $1.58 FY2027 about 21%.
    // The jump between them is consensus, not judgement, and it is the single largest
    // assumption in this entry.
    niMargin: [2.8, 21, 24, 26, 27],
    ebMargin: [22, 28, 32, 34, 35],
    sharesOut: [13.8, 14.1, 14.3, 14.5, 14.6],
    peLow: 25,
    peHigh: 45,
    evMult: 20,
    netCash: 60.3,
    caveat:
      'The newest listing in this book and the least testable entry in it. SpaceX came to Nasdaq on 12 June 2026, so there is no full year as a public company, no trading history to set a multiple band against, and the share count has risen 41.79% in twelve months. The trailing twelve months show an $8.89B net loss and $32.52B of negative free cash flow on $23.04B of revenue \u2014 a company consuming capital at enormous scale, funded by a $100.01B cash pile. Everything that makes the model work happens inside the consensus: revenue forecast to rise 139% in 2026 and a further 136% in 2027, with net margin going from 2.7% to 20.6% in the same step. That is Starship and Starlink both scaling on schedule, priced as though they will. EV/EBITDA is 330.83x today. Treat every column past CY2026 as a forecast about a business that does not exist yet, and size the position accordingly.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Starship cadence slips, Starlink pricing meets competition and capital keeps being consumed.',
        rev: 150,
        margin: 12,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'Launch cadence and Starlink subscribers both scale, and the loss turns into a real operating margin.',
        rev: 307.8,
        margin: 27,
        pe: 35,
      },
      bull: {
        label: 'Bull',
        thesis: 'Reusable launch is a monopoly, Starlink is global infrastructure, and both are priced as such.',
        rev: 400,
        margin: 32,
        pe: 45,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Free cash flow, before anything else',
        m: 'TTM FCF -$32.52B against $100.01B of cash',
        b: 'At the current burn the cash pile is a finite runway, and the share count already grew 41.79% in a year. This is the number that decides whether the rest of the model gets a chance to happen.',
        c: 'Check quarterly free cash flow and the trajectory of the burn, then divide remaining cash by it. Compare that with the next planned raise.',
      },
      {
        h: 'The 2027 margin step',
        m: 'FY2026E EPS $0.09 -> FY2027E $1.58',
        b: 'Consensus has net margin going from 2.7% to 20.6% in one year. Nothing else in this book asks you to believe a step that large.',
        c: 'Check gross margin by segment. If Starlink is not carrying it, the step does not happen and every year after 2027 in this model is wrong.',
      },
      {
        h: 'Starlink subscribers and revenue per user',
        m: 'FY2026E revenue $44.74B, +139.6%',
        b: 'Launch is lumpy and contract-driven; the recurring, high-margin revenue that would justify a software-like multiple is Starlink.',
        c: 'Check subscriber count, revenue per user and churn separately from launch revenue. The connectivity segment is the whole margin argument.',
      },
      {
        h: 'Share count',
        m: '13.57B shares, +41.79% year over year',
        b: 'A newly listed company funding a buildout with equity dilutes fastest exactly when the story is best.',
        c: 'Check the diluted count against the path in the drivers table, plus any lock-up expiry. Dilution at this rate outruns the margin story.',
      },
      {
        h: 'Launch cadence against plan',
        m: 'Starship flights flown versus announced',
        b: 'Revenue is a function of flights actually flown and satellites actually deployed, not of announced schedules.',
        c: 'Count flights and successful deployments against the published manifest. Slippage moves every column of this model to the right.',
      },
    ],
  },

  // Price $61.96 · cap $37.08B · EV $34.83B · 598.46M shares (+15.68% YoY) · TTM rev
  // $769.15M · TTM EBITDA -$150.52M (-19.57%) · TTM NI -$165.46M (-21.51%), EPS -$0.28
  // · FCF -$371.14M · cash $2.30B, debt $133.69M → net cash $2.25B · P/E n/a, fwd P/E
  // 2,753.78 · PS 48.21 · FY2026E rev $958.27M (+59.23%), EPS -$0.05 · FY2027E figures
  // are now paywalled · PT $111.00
  RKLB: {
    name: 'Rocket Lab',
    sector: 'space',
    shares: 1,
    cost: 61.96,
    priceRef: 61.96,
    prevRev: 0.6018,
    // growth[1] was the published FY2027 consensus on 29 August (+42.33%); that estimate
    // is now behind a paywall, so it is carried forward here rather than re-sourced.
    growth: [59.23, 42.33, 38, 32, 28],
    // Year one is consensus: -$0.05 FY2026 EPS is -3.2% of revenue. The +2.2% crossover
    // in year two came from the August FY2027 estimate and is likewise carried forward.
    niMargin: [-3.21, 2.2, 7, 11, 14],
    ebMargin: [2, 8, 14, 19, 22],
    sharesOut: [0.615, 0.64, 0.66, 0.678, 0.692],
    peLow: 35,
    peHigh: 70,
    evMult: 25,
    netCash: 2.25,
    caveat:
      'Loss-making at every line \u2014 net income -$165.46M, EBITDA -$150.52M and free cash flow -$371.14M on $769.15M of trailing revenue \u2014 while carrying a $37.08B market capitalisation. There is no trailing P/E because there are no earnings; the forward P/E is 2,753x. That combination means the price is not a claim about the current business, it is a claim about Neutron, and Neutron has not yet flown a commercial manifest. The share count rose 15.68% in a year to fund exactly that. This is the same shape as IREN in this book: real revenue, real losses, and every margin past year one a forecast about capacity that does not exist yet. On these assumptions the base case lands below today\u2019s price \u2014 the model is saying the expectation is already in the stock.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Neutron slips again, Electron growth is steady but small, and dilution funds the gap.',
        rev: 2.2,
        margin: 5,
        pe: 25,
      },
      base: {
        label: 'Base',
        thesis: 'Neutron flies and Space Systems scales, turning a launch business into a components annuity.',
        rev: 3.18,
        margin: 14,
        pe: 52.5,
      },
      bull: {
        label: 'Bull',
        thesis: 'Neutron takes real medium-lift share and Rocket Lab becomes the second credible launch provider.',
        rev: 4.5,
        margin: 20,
        pe: 70,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Neutron first commercial flight',
        m: 'FY2027E +42.3% — a 29 August figure, now paywalled',
        b: 'Every consensus figure past 2026 assumes Neutron flies and sells. It is one binary event sitting under a five-year model.',
        c: 'Check the stated first-flight date against the last four quarters of stated dates. Repeated slippage is the most reliable signal here.',
      },
      {
        h: 'Space Systems against Launch',
        m: 'TTM revenue $769.15M',
        b: 'Components and spacecraft are the larger, steadier half of the business and carry different margins from launch.',
        c: 'Read the two segments separately, with backlog for each. A launch story funded by a components business is a different investment from what the price implies.',
      },
      {
        h: 'Cash burn and the raise after this one',
        m: 'FCF -$371.14M against $2.25B net cash',
        b: 'Roughly six years of runway at the current burn, before Neutron\u2019s ramp costs. The count already grew 15.68% in a year.',
        c: 'Check quarterly free cash flow and capex guidance. The next equity raise \u2014 its size and its price \u2014 is what turns a good outcome into a mediocre per-share one.',
      },
      {
        h: 'The crossover to profit',
        m: 'FY2026E EPS -$0.05; the FY2027 estimate is paywalled',
        b: 'Consensus has the company crossing into profit next year, and every margin in the driver table builds from that crossing happening.',
        c: 'Check gross margin by segment and the operating loss trend. A crossing achieved by one-off items is not the crossing this model needs.',
      },
      {
        h: 'Backlog and its conversion',
        m: 'Contracted backlog and expected recognition',
        b: 'Backlog is the closest thing to visibility a launch company has, and its conversion rate is the honest growth signal.',
        c: 'Check total backlog, how much is expected within twelve months, and what converted last quarter against what was promised.',
      },
    ],
  },

  // The incumbent, added so SPCX and RKLB have something mature to sit against.
  // Price $530.12 · cap $122.35B · EV $139.09B · 230.79M shares (-1.97% YoY) · TTM rev
  // $77.01B · TTM EBITDA $9.68B (12.57%) · TTM NI $6.29B (8.16%), EPS $27.14 · cash
  // $3.79B, debt $20.54B → net debt $16.75B · FCF $8.73B on $1.67B capex · P/E 19.53
  // trailing, 17.23 forward · EV/EBITDA 14.37 · PS 1.59 · dividend yield 2.60% ·
  // FY2026E rev $80.95B (+7.87%), EPS $30.47 · PT $637.84 · 21 analysts
  LMT: {
    name: 'Lockheed Martin',
    sector: 'space',
    shares: 1,
    cost: 530.12,
    priceRef: 530.12,
    prevRev: 75.044,
    // Defence procurement growth, not technology growth. Nothing past year one is
    // sourced; 4-5% is roughly the pace of the budgets this revenue comes out of.
    growth: [7.87, 5, 4, 4, 4],
    // Consensus EPS $30.47 implies 8.69% against an 8.16% trailing margin. Close
    // enough that no adjustment is needed — one of the few entries where the
    // consensus and the GAAP basis agree.
    niMargin: [8.5, 8.8, 9, 9.2, 9.5],
    ebMargin: [12.6, 13, 13.2, 13.5, 13.8],
    sharesOut: [0.229, 0.225, 0.221, 0.217, 0.213],
    peLow: 15,
    peHigh: 21,
    evMult: 13,
    netCash: -16.75,
    caveat:
      'The frame fits this one better than almost anything else in the book, which is exactly why the two omissions matter. The model prices no dividend, and at a 2.60% yield that is a large part of the expected total return on a company growing 4% — the same problem KO has here. And a fixed-price development programme can take a multi-billion-dollar charge in a single quarter with no warning in any line above, which is the specific way defence primes lose money; an 8-9% net margin looks stable until one does. Two further notes: revenue is a function of government budgets rather than of demand, so the growth path is a political forecast wearing a financial one, and $16.75B of net debt against $122.35B of market cap means the equity is modestly levered to it.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Budget pressure caps procurement, a fixed-price programme takes charges and the multiple stays where defence multiples go.',
        rev: 88,
        margin: 7,
        pe: 13,
      },
      base: {
        label: 'Base',
        thesis: 'Sustained defence spending and a long F-35 sustainment tail compound slowly and reliably.',
        rev: 95.61,
        margin: 9.5,
        pe: 18,
      },
      bull: {
        label: 'Bull',
        thesis: 'Munitions replenishment, missile defence and classified work lift both growth and mix.',
        rev: 105,
        margin: 11,
        pe: 21,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Fixed-price programme charges',
        m: '8.16% trailing net margin',
        b: 'This is the mechanism by which a prime loses a year of profit at once, and none of it is visible before it is announced.',
        c: 'Read the charges disclosure every quarter, not the annual summary. A single classified fixed-price programme has done most of the damage in recent years.',
      },
      {
        h: 'Backlog and book-to-bill',
        m: 'FY2026E revenue $80.95B, +7.9%',
        b: 'Backlog converts to revenue over years, so it leads the income statement by longer than most businesses.',
        c: 'Track total backlog and new orders against revenue. Backlog falling while revenue grows is the shape of the following slowdown.',
      },
      {
        h: 'F-35 sustainment versus production',
        m: 'Segment mix within Aeronautics',
        b: 'Sustainment carries a better margin than building aircraft, and the fleet keeps growing regardless of the production rate.',
        c: 'Check delivery counts and the sustainment revenue split separately. Fewer deliveries with more fleet hours is not the bad outcome it reads as.',
      },
      {
        h: 'The dividend the model ignores',
        m: '2.60% yield',
        b: 'On a company growing 4%, the dividend is most of the total return and the page shows none of it.',
        c: 'Add the yield to any figure in the ladder before comparing this entry with the growth names beside it.',
      },
      {
        h: 'Space segment against the new entrants',
        m: 'Launch and satellite revenue',
        b: 'The part of Lockheed that competes directly with SPCX and RKLB is a minority of revenue and the part under most pressure.',
        c: 'Read the Space segment on its own. Group stability can conceal that half of it losing share to the two names beside it here.',
      },
    ],
  },

  // Pre-scale: $115.30M of trailing revenue against a $23.32B market cap, so the PS
  // ratio is 202.21 and there is no P/E at all.
  // Price $59.91 · cap $23.32B · EV $24.02B · 389.17M shares (+39.67% YoY) · TTM rev
  // $115.30M · TTM EBITDA -$406.32M · TTM NI -$618.76M, EPS -$2.16 · cash $2.29B,
  // debt $2.99B → net debt $705.48M · FCF -$1.64B on $1.49B capex · PS 202.21 ·
  // FY2026E rev $168.84M (+138.08%), EPS -$2.04 · PT $79.61 · 13 analysts
  ASTS: {
    name: 'AST SpaceMobile',
    sector: 'space',
    shares: 1,
    cost: 59.91,
    priceRef: 59.91,
    prevRev: 0.07092,
    // Every one of these is a forecast about a constellation that is not built yet.
    // Year one is the consensus; the rest is a satellite-deployment schedule expressed
    // as revenue, which is a different kind of number from the ones above it.
    growth: [138.08, 180, 120, 80, 55],
    // -500% lands year one on the consensus -$2.04 EPS. Profitability arrives in the
    // model in CY2029, which assumes the constellation is finished and carrying traffic.
    niMargin: [-500, -120, -20, 12, 22],
    ebMargin: [-350, -80, 0, 25, 35],
    // Up 39.67% in a year, behind only CHA, SPCX and IREN. Satellites are paid for
    // with equity until they earn, and this path assumes the pace roughly halves.
    sharesOut: [0.42, 0.46, 0.5, 0.53, 0.55],
    peLow: 20,
    peHigh: 40,
    evMult: 15,
    netCash: -0.70548,
    rankable: false,
    rankReason:
      'there is no meaningful 2030 earnings number to rank — 202x sales, no trailing P/E, and a result that depends entirely on whether a constellation that does not exist yet gets built',
    caveat:
      'The price already contains the outcome. At 202.21x trailing sales, a $23.32B market cap rests on $115.30M of revenue, so the base case below — which assumes the constellation is built, operating and carrying a 22% net margin on $2.9B of revenue in 2030 — still values the equity at less than today. That is not a forecast that the business fails; it is what a 202x sales multiple means arithmetically, and it is the same shape as SPCX and RKLB at an earlier stage. Everything else compounds it: free cash flow of -$1.64B against $1.49B of capex, $705.48M of net debt, and a share count up 39.67% in a year because satellites are funded with equity until they earn. This entry is excluded from the section 07 ranking for the same reason MSTR is — the earnings ladder has nothing real to stand on. Read the deployment schedule and the mobile-network agreements instead.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Deployment slips, funding comes at a worse price and direct-to-device stays a niche beside terrestrial coverage.',
        rev: 1.2,
        margin: 2,
        pe: 12,
      },
      base: {
        label: 'Base',
        thesis: 'The constellation reaches continuous coverage and carriers pay wholesale for the gaps in their networks.',
        rev: 2.9,
        margin: 22,
        pe: 30,
      },
      bull: {
        label: 'Bull',
        thesis: 'Direct-to-device becomes a standard feature on every handset and the wholesale agreements scale with it.',
        rev: 5,
        margin: 30,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Satellites actually in orbit and operating',
        m: 'FY2026E revenue $168.84M',
        b: 'Continuous service needs a constellation, not a demonstration. Every revenue figure below year one assumes a launch schedule holds.',
        c: 'Count operational satellites against the plan, not launches attempted. Slippage here moves every later column.',
      },
      {
        h: 'Carrier agreements converting to payments',
        m: 'Definitive agreements versus memoranda',
        b: 'Most announced partnerships are non-binding. The revenue path needs wholesale contracts with money attached.',
        c: 'Check which agreements are definitive, with committed minimums, and which are still letters of intent.',
      },
      {
        h: 'Funding and dilution',
        m: '389.17M shares, +39.67% year over year; FCF -$1.64B',
        b: 'The constellation costs more than the company earns for years, so the gap is filled with equity and converts.',
        c: 'Track the cash balance against quarterly burn and every convertible issue with its strike. This is the assumption most likely to be too kind.',
      },
      {
        h: 'Spectrum rights',
        m: 'Regulatory approvals by market',
        b: 'Operating a direct-to-device network requires spectrum access granted country by country, and it can be refused.',
        c: 'Watch national regulator decisions in the large markets. The technology working does not confer the right to use it.',
      },
      {
        h: 'The price target against the model',
        m: 'PT $79.61 on 13 analysts',
        b: 'The sell side sees upside from here while this model, run on GAAP earnings at a 30x exit, does not.',
        c: 'Work out which assumption differs. It is almost always the 2030 revenue, and it is worth forming your own view of it rather than adopting either.',
      },
    ],
  },

  // ---------------------------------------------------------------- health
  // Price $1,123.00 · cap $1.00T · EV $1.05T · 891.36M shares (-0.62% YoY) · TTM rev
  // $79.67B · TTM EBITDA $41.71B (52.35%) · TTM NI $26.71B (33.53%), EPS $29.79 · FCF
  // $18.19B · cash $8.95B, debt $54.91B → net debt $45.96B · P/E 37.70 trailing, 27.53
  // forward · EV/EBITDA 25.08 · FY2026E rev $88.18B (+35.29%), EPS $36.71 · PT $1,316
  LLY: {
    name: 'Eli Lilly',
    sector: 'health',
    shares: 1,
    cost: 1123.0,
    priceRef: 1123.0,
    prevRev: 65.18,
    growth: [35.29, 20, 16, 13, 11],
    niMargin: [37.1, 38, 39, 39.5, 40],
    ebMargin: [50, 51, 52, 53, 53],
    sharesOut: [0.891, 0.891, 0.89, 0.889, 0.888],
    peLow: 22,
    peHigh: 38,
    evMult: 20,
    netCash: -45.96,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Incretin competition and payer pressure compress price faster than volume grows.',
        rev: 120,
        margin: 32,
        pe: 16,
      },
      base: {
        label: 'Base',
        thesis: 'Obesity and diabetes demand compounds with manufacturing capacity to match.',
        rev: 154.0,
        margin: 40,
        pe: 28,
      },
      bull: {
        label: 'Bull',
        thesis: 'Oral incretins expand the market and Lilly holds share at premium pricing.',
        rev: 180,
        margin: 43,
        pe: 38,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Incretin net pricing',
        m: 'FY2026E revenue $88.18B, +35.3%',
        b: 'Gross-to-net discounts on obesity drugs have moved fast as payers negotiate. Volume growth and revenue growth are diverging.',
        c: 'Check net price per prescription, not scripts. This is also the number that decides what HIMS can charge for compounded alternatives.',
      },
      {
        h: 'Manufacturing capacity',
        m: 'Announced capacity coming online',
        b: 'Supply has been the constraint on revenue more than demand.',
        c: 'Track new fill-finish capacity against demand commentary. Capacity arriving faster than demand is a pricing risk, not a win.',
      },
      {
        h: 'Oral incretin data and launch',
        m: 'Phase III results and regulatory timing',
        b: 'An oral formulation changes both the addressable market and the manufacturing constraint.',
        c: 'Read the actual efficacy and tolerability data against injectables, plus approval timing.',
      },
      {
        h: 'Competitive share',
        m: 'Prescription share against Novo and newcomers',
        b: 'This is a two-horse market becoming a bigger field, and share is the input to every revenue line here.',
        c: 'Check weekly prescription share trends rather than quarterly commentary.',
      },
      {
        h: 'Patent cliff timing',
        m: 'Key exclusivity expiry dates',
        b: 'The 2030 revenue in this model assumes exclusivity holds throughout the window.',
        c: 'Check the expiry schedule for the main products against the last column of the model.',
      },
    ],
  },

  // Price $388.28 · cap $348.52B · EV $393.26B · 897.59M shares (-1.47% YoY) · TTM rev
  // $450.53B · TTM EBITDA $26.68B (5.92%) · TTM NI $14.12B (3.13%), EPS $15.53 · FCF
  // $23.62B · cash $31.47B, debt $73.33B → net debt $44.74B · P/E 25.00 trailing, 18.24
  // forward · EV/EBITDA 14.74 · FY2026E rev $446.53B (-0.32%), EPS $19.81 · PT $475.23
  UNH: {
    name: 'UnitedHealth Group',
    sector: 'health',
    shares: 1,
    cost: 388.28,
    priceRef: 388.28,
    prevRev: 447.96,
    growth: [-0.32, 6, 6, 6, 5],
    niMargin: [4.0, 4.4, 4.8, 5.0, 5.2],
    ebMargin: [6, 6.4, 6.8, 7.0, 7.2],
    sharesOut: [0.898, 0.89, 0.882, 0.874, 0.866],
    peLow: 12,
    peHigh: 22,
    evMult: 10,
    netCash: -41.86,
    caveat:
      'Consensus has UnitedHealth revenue slightly shrinking in 2026 — the only negative growth rate in this book. It is here as the scaled comparison for OSCR: same industry, roughly thirty times the revenue, and a 4% net margin that shows what mature managed care actually earns. If you hold OSCR, the margin here is the ceiling to argue against.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Medical costs keep running hot and regulatory pressure caps pricing.',
        rev: 520,
        margin: 3,
        pe: 10,
      },
      base: {
        label: 'Base',
        thesis: 'Cost trend normalises and margin recovers toward historical levels.',
        rev: 558.4,
        margin: 5.2,
        pe: 17,
      },
      bull: {
        label: 'Bull',
        thesis: 'Optum carries the mix and the company re-rates as a health services business.',
        rev: 590,
        margin: 6.2,
        pe: 22,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Medical care ratio',
        m: 'FY2026E revenue -0.32%, EPS $19.81',
        b: 'Revenue is forecast to shrink slightly while EPS grows 21% — that is entirely a cost-ratio recovery story, not a growth one.',
        c: 'Check the medical care ratio against guidance. It is the same mechanic as OSCR, at thirty times the scale.',
      },
      {
        h: 'Medicare Advantage enrolment and rates',
        m: 'Annual CMS rate notice and membership',
        b: 'Medicare Advantage is the most profitable membership and the most politically exposed.',
        c: 'Read the final rate notice and what management says about which plans they will keep or exit.',
      },
      {
        h: 'Optum Health margin',
        m: 'Segment margin and patients under value-based care',
        b: 'Optum is the reason the company might deserve more than an insurer multiple.',
        c: 'Check Optum Health margin separately. It has been the source of recent disappointments.',
      },
      {
        h: 'Regulatory and legal overhang',
        m: 'Active investigations and their scope',
        b: 'Multiple regulatory threads affect both the multiple and, potentially, the business model.',
        c: 'Track what is actually filed or ordered, and whether it touches risk coding practices specifically.',
      },
      {
        h: 'Buyback pace',
        m: '898M shares, modelled down to 866M',
        b: 'Share count reduction is a meaningful part of the EPS path in this model.',
        c: 'Check shares outstanding against the drivers table each year.',
      },
    ],
  },

  // ---------------------------------------------------------------- finance
  // Price $367.21 · cap $674.05B · EV $684.12B · 1.84B shares (-2.88% YoY) · TTM rev
  // $44.49B · TTM EBITDA $31.09B (69.89%) · TTM NI $22.40B (50.78%), EPS $11.75 · FCF
  // $21.01B · cash $13.79B, debt $23.86B → net debt $10.07B · P/E 31.26 trailing, 25.39
  // forward · EV/EBITDA 22.00 · FY2026E (Sep-end) rev $45.76B (+14.39%), EPS $13.23
  // · PT $419.36
  V: {
    name: 'Visa',
    sector: 'finance',
    shares: 1,
    cost: 367.21,
    priceRef: 367.21,
    prevRev: 40.0,
    growth: [14.39, 11, 10, 9, 9],
    niMargin: [53.2, 54, 54.5, 55, 55],
    ebMargin: [70, 70.5, 71, 71, 71],
    sharesOut: [1.84, 1.8, 1.76, 1.72, 1.68],
    peLow: 22,
    peHigh: 34,
    evMult: 22,
    netCash: -10.07,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Interchange regulation and account-to-account rails erode the take rate.',
        rev: 58,
        margin: 48,
        pe: 18,
      },
      base: {
        label: 'Base',
        thesis: 'Payment volume compounds with cash displacement and value-added services grow.',
        rev: 66.38,
        margin: 55,
        pe: 28,
      },
      bull: {
        label: 'Bull',
        thesis: 'Visa keeps the rails and sells software services on top of them.',
        rev: 74,
        margin: 58,
        pe: 34,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Payment volume and cross-border',
        m: 'FY2026E revenue $45.76B, +14.4%',
        b: 'Cross-border volume carries much higher yield than domestic, so the mix matters more than the total.',
        c: 'Check cross-border volume growth separately. It is also the most cyclical part of the business.',
      },
      {
        h: 'Interchange and routing regulation',
        m: 'Active litigation and rule changes',
        b: 'The take rate is set partly by regulators and courts, not by Visa.',
        c: 'Track actual settlements and rules rather than proposals, and what they do to the yield on domestic volume.',
      },
      {
        h: 'Account-to-account competition',
        m: 'Real-time payment rail adoption',
        b: 'Bank-to-bank rails bypass the card networks entirely and are gaining regulatory support in several markets.',
        c: 'Watch adoption in markets where these rails are mandated. This is the structural risk, not a cyclical one.',
      },
      {
        h: 'Value-added services',
        m: 'VAS revenue as a share of the mix',
        b: 'Fraud, tokenisation and consulting revenue grows faster than transaction revenue and is stickier.',
        c: 'Check VAS growth. It is the argument for the top of the multiple band.',
      },
      {
        h: 'Buyback pace',
        m: '1.84B shares, modelled down to 1.68B',
        b: 'Visa has consistently retired shares, and a good part of the EPS path here depends on that continuing.',
        c: 'Check net share count against the drivers table.',
      },
    ],
  },

  // Price $353.56 · cap $939.83B · EV $756.72B · 2.66B shares (-3.57% YoY) · TTM rev
  // $186.33B · TTM NI $63.63B (34.92%), EPS $23.30 · P/E 15.17 trailing, 14.59 forward
  // · PS 5.04 · book value $133.01/share · cash $1.53T, debt $1.34T · FY2026E rev
  // $207.98B (+13.99%), EPS $24.22 · PT $376.14
  // growth[1] (+2.51%) was the published FY2027 consensus on 29 August; that estimate
  // is now behind a paywall and is carried forward rather than re-sourced.
  JPM: {
    name: 'JPMorgan Chase',
    sector: 'finance',
    shares: 1,
    cost: 353.56,
    priceRef: 353.56,
    prevRev: 182.45,
    growth: [13.99, 2.51, 4, 4, 4],
    // Consensus EPS $24.22 on 2.66B shares implies 31%, against a 34.92% trailing
    // margin. Close enough that no adjustment is needed.
    niMargin: [31, 32, 32.5, 33, 33],
    // A placeholder. See the caveat: EBITDA has no meaning for a bank, and the
    // EV/EBITDA row this feeds should not be read.
    ebMargin: [40, 40, 41, 41, 41],
    sharesOut: [2.6, 2.54, 2.48, 2.42, 2.36],
    peLow: 11,
    peHigh: 16,
    evMult: 8,
    netCash: 183.11,
    caveat:
      'A balance-sheet bank, so half this page does not apply \u2014 the same problem SOFI has, at forty times the size. Ignore the EV/EBITDA row entirely: EBITDA is not meaningful for a business whose funding cost is its cost of goods, and the $183.11B "net cash" figure is an artefact of netting $1.53T of cash against $1.34T of debt on a bank balance sheet, not distributable cash. Read the P/E ladder, and read it against book value of $133.01 per share \u2014 at $353.56 that is 2.66x book, which is the frame that actually governs a bank\u2019s multiple. Two more omissions: the model prices no dividend, and it cannot see credit costs, which is the line that decides a bank\u2019s earnings in the year it matters.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Credit normalises hard, net interest income compresses and the multiple returns to book.',
        rev: 210,
        margin: 25,
        pe: 9,
      },
      base: {
        label: 'Base',
        thesis: 'Scale advantages hold, buybacks shrink the count, and the premium to book persists.',
        rev: 239.82,
        margin: 33,
        pe: 13.5,
      },
      bull: {
        label: 'Bull',
        thesis: 'Share gains across every segment and a through-cycle return on equity the market pays up for.',
        rev: 260,
        margin: 36,
        pe: 16,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Credit costs',
        m: 'Provision for credit losses and net charge-offs',
        b: 'The line this model cannot see and the one that decides a bank\u2019s year. Revenue and margin both look fine right up until it moves.',
        c: 'Check provisions, net charge-offs and reserve build against the prior quarter. A reserve release flattering earnings is not the same as earnings.',
      },
      {
        h: 'Net interest income guidance',
        m: 'FY2026E revenue $207.98B, +13.99%',
        b: 'Most of the revenue step is rates and balance growth, and the FY2027 consensus already has it flattening to +2.5%.',
        c: 'Check the NII guide and the deposit beta. The 2027 deceleration in this model is consensus \u2014 confirm it is still what management expects.',
      },
      {
        h: 'Book value and the premium to it',
        m: '$133.01 book value against a $353.56 price',
        b: 'A bank is valued on returns against book, not on an earnings multiple in isolation. 2.67x book is the real entry multiple here.',
        c: 'Track tangible book value per share and return on tangible common equity. The P/E ladder on this page is a proxy for those two.',
      },
      {
        h: 'Buybacks and the share count',
        m: '2.66B shares, -3.57% year over year',
        b: 'The count falling 3.6% a year is doing more work in the 2030 EPS than the margin path is.',
        c: 'Check repurchases against the capital return plan and the regulatory capital requirement. Buybacks are the first thing suspended when capital rules tighten.',
      },
      {
        h: 'Capital requirements',
        m: 'CET1 ratio against the requirement',
        b: 'Regulatory capital sets the ceiling on both buybacks and the dividend, and it moves by decree rather than by performance.',
        c: 'Check the CET1 ratio and the stress-test outcome. A higher requirement takes the buyback out of the model above.',
      },
    ],
  },

  // Price $113.33 · cap $101.89B · EV $100.91B · 899.08M shares (+0.89% YoY) · TTM rev
  // $4.93B · TTM NI $2.07B (42.01%), EPS $2.26 · EBITDA and EV/EBITDA both n/a on the
  // source, which is the tell for a brokerage · cash $23.91B, debt $22.93B → net cash
  // $980.00M · FCF $219.00M · P/E 50.19 trailing, 47.22 forward · PS 20.66 · FY2026E
  // rev $5.20B (+16.26%), EPS $2.53 · PT $126.85 · 28 analysts
  HOOD: {
    name: 'Robinhood Markets',
    sector: 'finance',
    shares: 1,
    cost: 113.33,
    priceRef: 113.33,
    prevRev: 4.4727,
    growth: [16.26, 14, 12, 11, 10],
    // Consensus EPS $2.53 implies 43.7% against a 42.01% trailing margin. They agree,
    // which is unusual here — but both are flattered by interest income earned on
    // customer balances, which is a rate bet rather than a business improving.
    niMargin: [42, 42, 43, 43, 44],
    // A placeholder. See the caveat: EBITDA is not reported for this business and the
    // source does not compute EV/EBITDA for it, so the EV row this feeds is noise.
    ebMargin: [50, 50, 51, 51, 52],
    sharesOut: [0.905, 0.912, 0.918, 0.924, 0.93],
    peLow: 20,
    peHigh: 40,
    evMult: 15,
    netCash: 0.98,
    caveat:
      'Read the P/E ladder and ignore the EV/EBITDA row entirely — the same problem JPM and SOFI have here. The source publishes no EBITDA and no EV/EBITDA for this company because a broker’s funding and interest costs are its cost of goods, and the $980.00M of "net cash" is what is left after netting $23.91B against $22.93B on a balance sheet that holds customer money; it is not distributable cash. Two things decide the outcome and neither is in the driver table. A large share of revenue is net interest on customer balances, so an interest-rate cut cuts earnings directly with no change in the business. And transaction revenue is concentrated in options and crypto, which means the 42% margin was earned in an active market — the same trading conditions that show up in COIN two entries down. At 50.19x trailing earnings the entry multiple then decides the rest.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Rates fall, retail engagement normalises and both halves of the revenue line contract at once.',
        rev: 6,
        margin: 25,
        pe: 15,
      },
      base: {
        label: 'Base',
        thesis: 'Retirement accounts and subscriptions turn a trading app into a durable relationship.',
        rev: 8.106,
        margin: 44,
        pe: 30,
      },
      bull: {
        label: 'Bull',
        thesis: 'Robinhood becomes the primary account for a generation and cross-sells advisory, banking and credit into it.',
        rev: 10.5,
        margin: 48,
        pe: 38,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Net interest revenue as a share of the total',
        m: '42.01% trailing net margin',
        b: 'Interest on customer cash and margin lending is earned from the rate environment, not from the product.',
        c: 'Split revenue into transaction, net interest and other every quarter. A rate cut takes the second one down with no warning in the first.',
      },
      {
        h: 'Transaction mix',
        m: 'Options and crypto share of transaction revenue',
        b: 'The high-margin volume is concentrated in the most cyclical products, and crypto volume moves with the same prices COIN and MSTR depend on.',
        c: 'Read the three transaction lines separately. Equities volume holding while options and crypto fall is the version that hurts.',
      },
      {
        h: 'Net deposits and funded accounts',
        m: 'FY2026E revenue $5.20B, +16.3%',
        b: 'Assets under custody are what converts a trading app into a compounding business; account counts on their own do not.',
        c: 'Track net deposits and assets under custody against funded accounts. Growth in accounts without deposits is the weaker result.',
      },
      {
        h: 'Subscription revenue',
        m: 'Gold subscribers and revenue per subscriber',
        b: 'Subscription income is the only part of the model that does not move with markets or rates.',
        c: 'Check subscriber count with revenue per subscriber. This is the line that would justify the base-case multiple.',
      },
      {
        h: 'Regulation of payment for order flow',
        m: 'Transaction-based revenue',
        b: 'A structural change to how retail orders are routed and paid for is a rule change, not a competitive one.',
        c: 'Watch rulemaking on order routing and execution quality. It arrives as an external decision with no lead time in the numbers.',
      },
    ],
  },

  // Loss-making on a GAAP basis with revenue FALLING in the consensus year — the only
  // entry in the book with both at once.
  // Price $172.28 · cap $45.45B · EV $43.33B · 263.84M shares (-4.45% YoY) · TTM rev
  // $6.04B · TTM EBITDA $699.55M (11.57%) · TTM NI -$987.77M (-16.34%), EPS -$3.73 ·
  // cash $8.79B, debt $6.67B → net cash $2.12B · FCF $1.71B · no trailing P/E,
  // forward 147.11 · EV/EBITDA 61.94 · PS 7.52 · FY2026E rev $5.30B (-23.01%), EPS
  // -$1.97 · PT $198.97 · 34 analysts
  COIN: {
    name: 'Coinbase Global',
    sector: 'finance',
    shares: 1,
    cost: 172.28,
    priceRef: 172.28,
    prevRev: 6.884,
    // Year one is the consensus decline. The recovery after it is modelled judgement
    // and, unavoidably, a view about crypto prices dressed up as a revenue forecast.
    growth: [-23.01, 12, 15, 12, 10],
    // -9.8% lands year one on the consensus -$1.97 EPS. The company is GAAP
    // loss-making over the trailing year despite positive EBITDA and $1.71B of free
    // cash flow, largely on crypto asset marks.
    niMargin: [-9.8, 5, 14, 18, 20],
    ebMargin: [10, 18, 25, 28, 30],
    sharesOut: [0.264, 0.266, 0.268, 0.27, 0.272],
    peLow: 15,
    peHigh: 35,
    evMult: 18,
    netCash: 2.12,
    caveat:
      'Everything below year one is a forecast about the price of an asset the company does not control, which is the same exposure MSTR has — hold both and it is one bet, not two, at different levels of directness. The specifics: consensus has revenue falling 23.01% in CY2026 and a GAAP loss of $1.97 a share, so this entry starts underwater on both lines, and the forward P/E of 147.11 is struck against an estimate that is itself a loss turning into a small profit. Trading volume, custody balances and interest income all move together with the crypto price, so the bear and bull cases below are much further apart than the arithmetic makes them look. And a regulatory decision can change the revenue mix in one quarter with no lead time in any of these numbers.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'A long crypto winter takes volumes and balances down together, and fee pressure does the rest.',
        rev: 5,
        margin: 5,
        pe: 12,
      },
      base: {
        label: 'Base',
        thesis: 'Custody, staking and subscription revenue build a floor under the trading cycle.',
        rev: 8.41,
        margin: 20,
        pe: 25,
      },
      bull: {
        label: 'Bull',
        thesis: 'Coinbase becomes the regulated financial infrastructure for tokenised assets, well beyond trading.',
        rev: 13,
        margin: 26,
        pe: 35,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Transaction revenue against subscription revenue',
        m: 'FY2026E revenue $5.30B, -23.0%',
        b: 'Subscription and services income is the part that does not require anyone to trade, and it is the whole case for a non-cyclical multiple.',
        c: 'Read the two lines separately every quarter. Subscription growth through a volume decline is the result that would change this entry.',
      },
      {
        h: 'Retail take rate',
        m: 'Fees per dollar of retail volume',
        b: 'Retail trading carries most of the margin and is where competition shows up first.',
        c: 'Track retail take rate over time, not just volume. Volume growth at a falling take rate is not the same business.',
      },
      {
        h: 'The GAAP loss and what caused it',
        m: 'TTM net loss $987.77M against $1.71B of free cash flow',
        b: 'Positive EBITDA and positive free cash flow with a GAAP loss means marks on crypto holdings, which reverse in both directions.',
        c: 'Read the crypto asset gains and losses line in the income statement. It tells you how much of any result is operating and how much is the price.',
      },
      {
        h: 'Regulatory perimeter',
        m: 'Which listed assets count as securities',
        b: 'A ruling on staking, listings or custody changes the revenue mix by decree rather than by competition.',
        c: 'Watch enforcement actions and legislation directly. There is no version of this number that can be derived from the financial statements.',
      },
      {
        h: 'Correlation with the rest of the book',
        m: 'Read alongside MSTR and HOOD',
        b: 'Three entries here earn from the same asset price: a treasury, an exchange and a broker taking crypto volume.',
        c: 'Check the combined exposure before treating these as separate positions. They fall together, and the model shows them separately.',
      },
    ],
  },

  // ---------------------------------------------------------------- infra
  // Price $285.97 · cap $101.32B · EV $125.32B · 354.31M shares (+6.85% YoY) · TTM rev
  // $31.27B · TTM EBITDA $7.95B (25.43%) · TTM NI $3.47B (11.08%), EPS $10.33 · FCF
  // $295.00M · cash $697.00M, debt $24.70B → net debt $24.00B · P/E 27.69 trailing,
  // 23.16 forward · EV/EBITDA 15.76 · FY2026E rev $35.13B (+37.58%), EPS $12.12
  // · PT $348.30
  // growth[1] (+3.61%) was the published FY2027 consensus on 29 August; that estimate
  // is now behind a paywall and is carried forward rather than re-sourced.
  CEG: {
    name: 'Constellation Energy',
    sector: 'infra',
    shares: 1,
    cost: 285.97,
    priceRef: 285.97,
    prevRev: 25.53,
    // Consensus has a 37.6% jump in 2026 then only 3.6% in 2027 — the step-up is
    // contracting and acquisition, not an ongoing growth rate.
    growth: [37.58, 3.61, 6, 6, 6],
    niMargin: [12.2, 13.0, 13.5, 14, 14.5],
    ebMargin: [25, 26, 27, 28, 28],
    sharesOut: [0.3543, 0.352, 0.3497, 0.3474, 0.3451],
    peLow: 18,
    peHigh: 30,
    evMult: 14,
    netCash: -24.0,
    caveat:
      'The counterpart to IREN: instead of buying compute and needing power, Constellation owns the nuclear generation that data centres are competing for. Note the consensus shape — 37.6% revenue growth in 2026 then 3.6% in 2027 — which says the jump is contracted supply and acquisition, not a compounding rate. Utilities also carry heavy debt by design; $24.7B here is normal, not a warning.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Power prices normalise and data centre demand is met by new build elsewhere.',
        rev: 40,
        margin: 10,
        pe: 14,
      },
      base: {
        label: 'Base',
        thesis: 'Long-term nuclear supply contracts with data centres at premium pricing.',
        rev: 43.35,
        margin: 14.5,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Carbon-free baseload becomes genuinely scarce and reprices for a decade.',
        rev: 48,
        margin: 17,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Data centre power agreements',
        m: 'Signed PPAs: counterparty, price, term',
        b: 'The entire re-rating case is that AI data centres will pay a premium for carbon-free baseload on long contracts.',
        c: 'Check each signed agreement for price per MWh and term length. This is the direct read-across to what IREN pays for power.',
      },
      {
        h: 'Nuclear capacity factor',
        m: 'Fleet capacity factor and outage schedule',
        b: 'Revenue is generation times price, and generation depends on the fleet running.',
        c: 'Check capacity factor and any unplanned outages. A single extended outage moves a quarter materially.',
      },
      {
        h: 'Power price curves',
        m: 'Forward power prices in its markets',
        b: 'Uncontracted output is sold at market, so forward curves set the unhedged part of revenue.',
        c: 'Check the hedged percentage for each forward year alongside the curve.',
      },
      {
        h: 'Production tax credit floor',
        m: 'The nuclear PTC and its terms',
        b: 'The tax credit puts a floor under revenue, which is a large part of why the multiple expanded.',
        c: 'Track any change to the credit. It matters more to the downside case than power prices do.',
      },
      {
        h: 'Licence extensions and uprates',
        m: 'Approved life extensions and capacity uprates',
        b: 'Extending existing plants is far cheaper than building anything new, and it lengthens the cash flow tail.',
        c: 'Check approvals against the 2030 column. The terminal value assumption depends on them.',
      },
    ],
  },
  // Price $147.05 · cap $49.36B · EV $69.43B · 335.64M shares (+0.45% YoY) · TTM rev
  // $19.21B · TTM EBITDA $6.65B (34.59%) · TTM NI $2.03B (11.55%), EPS $5.87 · cash
  // $435.00M, debt $20.51B → net debt $20.07B · FCF $2.26B · P/E 25.07 trailing, 14.28
  // forward · EV/EBITDA 10.45 · PS 2.57 · FY2026E rev $22.83B (+28.70%), EPS $8.62
  // · PT $217.42 (+47.85%)
  // growth[1] (+4.98%) was the published FY2027 consensus on 29 August; that estimate
  // is now behind a paywall and is carried forward rather than re-sourced.
  VST: {
    name: 'Vistra',
    sector: 'infra',
    shares: 1,
    cost: 147.05,
    priceRef: 147.05,
    prevRev: 17.74,
    growth: [28.7, 4.98, 6, 5, 5],
    // Consensus EPS $8.62 implies 12.7% against an 11.55% trailing margin. No
    // adjusted/GAAP gap worth correcting.
    niMargin: [12.67, 14, 15, 16, 16.5],
    ebMargin: [33, 34, 35, 36, 36],
    sharesOut: [0.3356, 0.33, 0.324, 0.318, 0.312],
    peLow: 12,
    peHigh: 22,
    evMult: 11,
    netCash: -20.07,
    caveat:
      'The cheapest-looking name in this book, and the leverage is why. Net debt of $20.07B sits against a $49.36B market capitalisation, so enterprise value is $69.43B and the equity is a levered claim on the power price \u2014 read the EV/EBITDA row and the P/E row together, because here they answer different questions. Two consequences. Earnings swing with wholesale power prices, which no management controls, so the margin path below forecasts a commodity as much as a company. And the stock has risen 7.2% in the fortnight to 10 September 2026 and still sits 47.85% below the $217.42 consensus target, which means the market and the analysts disagree about this one more than about anything else here.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Power prices normalise, the datacentre demand story stalls and leverage does the rest.',
        rev: 24,
        margin: 10,
        pe: 10,
      },
      base: {
        label: 'Base',
        thesis: 'Datacentre load growth keeps the fleet tight and buybacks compound the per-share result.',
        rev: 28.01,
        margin: 16.5,
        pe: 17,
      },
      bull: {
        label: 'Bull',
        thesis: 'Existing nuclear and gas capacity is repriced as scarce, contracted power for AI load.',
        rev: 32,
        margin: 19,
        pe: 22,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Contracted capacity for datacentre load',
        m: 'FY2026E revenue $22.83B, +28.7%',
        b: 'The re-rating case is existing generation signed to long-term AI contracts \u2014 the same argument CEG and IREN are in this book for.',
        c: 'Check signed power purchase agreements: counterparty, term, price. Compare directly with CEG in the same quarter.',
      },
      {
        h: 'Net debt against EBITDA',
        m: 'Net debt $20.07B; TTM EBITDA $6.65B',
        b: 'Roughly three times EBITDA. Manageable while power prices hold, dangerous when they do not.',
        c: 'Check net debt to EBITDA, the maturity schedule and the average coupon. Leverage is why the bear case here is worse than the revenue decline implies.',
      },
      {
        h: 'The 2027 flattening',
        m: 'FY2026E +28.7%, then FY2027E +5.0%',
        b: 'Consensus has growth collapsing to 5% the year after next, which the driver table inherits.',
        c: 'Check whether guidance still implies that shape. The gap between the +5% consensus and the +58% price target is the disagreement to resolve.',
      },
      {
        h: 'Buybacks',
        m: '335.64M shares; model assumes 312M by 2030',
        b: 'A meaningful part of the 2030 EPS comes from the count shrinking, not from the business growing.',
        c: 'Check repurchases against free cash flow after debt service. Buybacks funded by debt at this leverage are not the same result.',
      },
      {
        h: 'Power price exposure',
        m: 'Hedged versus merchant share of the fleet',
        b: 'Whatever is unhedged earns the spot power price, which is outside management control entirely.',
        c: 'Check the hedge percentage for the next two years and the realised price against the forward curve.',
      },
    ],
  },

  // Price $248.13, up 97.59% over 52 weeks · cap $95.53B · EV $95.75B · 384.99M shares
  // (+1.06% YoY) · TTM rev $11.48B · TTM EBITDA $2.68B (23.34%) · TTM NI $1.73B
  // (15.09%), EPS $4.42 · cash $3.11B, debt $3.34B → net debt $227.60M · FCF $2.93B
  // · P/E 56.16 trailing, 31.67 forward · EV/EBITDA 35.75 · PS 8.32 · FY2026E rev
  // $14.02B (+37.04%), EPS $6.73 · PT $338.15
  // growth[1] (+29.49%) was the published FY2027 consensus on 29 August; that estimate
  // is now behind a paywall and is carried forward rather than re-sourced.
  VRT: {
    name: 'Vertiv',
    sector: 'infra',
    shares: 1,
    cost: 248.13,
    priceRef: 248.13,
    prevRev: 10.23,
    growth: [37.04, 29.49, 22, 18, 15],
    // Consensus EPS $6.73 implies 18.5% against a 15.09% GAAP trailing margin \u2014 a real
    // but modest adjusted/GAAP gap, so year one sits between the two, nearer GAAP.
    niMargin: [16.5, 18, 19, 20, 20.5],
    ebMargin: [23, 24, 25, 26, 26],
    sharesOut: [0.385, 0.386, 0.386, 0.385, 0.384],
    peLow: 20,
    peHigh: 35,
    evMult: 18,
    netCash: -0.2276,
    caveat:
      'A pure derivative of one capex cycle. Vertiv sells the power and cooling that goes inside a datacentre, so its revenue is a direct function of what NVDA, AMZN, MSFT and IREN choose to spend \u2014 which means holding it alongside those names is one bet, not two. At 56.2x trailing earnings and 35.8x EV/EBITDA the exit multiple matters more than the growth rate, and the growth rate on offer is a consensus already forecasting +37% then +29%. Watch the order book rather than the revenue line: this is a business that finds out about a capex pause four quarters before its income statement does.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Hyperscaler capex pauses, the backlog converts and there is nothing behind it.',
        rev: 22,
        margin: 13,
        pe: 16,
      },
      base: {
        label: 'Base',
        thesis: 'The datacentre buildout continues and liquid cooling lifts content per rack, and margin with it.',
        rev: 30.05,
        margin: 20.5,
        pe: 27.5,
      },
      bull: {
        label: 'Bull',
        thesis: 'Thermal management becomes the binding constraint on AI capacity and Vertiv prices it.',
        rev: 36,
        margin: 23,
        pe: 35,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Orders and book-to-bill',
        m: 'FY2026E revenue $14.02B, +37.04%',
        b: 'Revenue is backlog conversion. Orders are the leading indicator, and they turn before the revenue line does.',
        c: 'Check organic orders, book-to-bill and backlog. A revenue beat with book-to-bill below one is the top of this cycle.',
      },
      {
        h: 'Concentration in names you already own',
        m: 'Hyperscaler share of revenue',
        b: 'The same capex that drives NVDA, AMZN, MSFT and IREN in this book drives Vertiv. Holding them together concentrates one risk rather than diversifying it.',
        c: 'Check customer concentration, then compare with the capex guides those companies gave in the same quarter.',
      },
      {
        h: 'Liquid cooling content per rack',
        m: 'FY2027E +29.5% — a 29 August figure, now paywalled',
        b: 'The margin path assumes higher-value thermal content, not just more units at the same price.',
        c: 'Check liquid-cooling revenue and content per megawatt. Volume growth without mix improvement does not produce the 2030 margin here.',
      },
      {
        h: 'GAAP against adjusted',
        m: 'FY2026E EPS $6.73 adjusted; 15.09% GAAP trailing margin',
        b: 'The consensus EPS implies 18.4%, above the GAAP trailing figure. The driver table sits between them, nearer GAAP.',
        c: 'Read GAAP operating margin and the reconciliation, then decide whether year one at 16.5% is too conservative or not conservative enough.',
      },
      {
        h: 'Pricing against input costs',
        m: 'Gross margin trend',
        b: 'This is a hardware business with real bills of materials, so margin depends on holding price against copper, steel and freight.',
        c: 'Check gross margin and pricing commentary. Margin expansion attributed entirely to volume is the version that reverses.',
      },
    ],
  },

  // Price $258.49, up 27% in the fortnight to 10 September 2026 · cap $76.13B · EV
  // $76.23B · 294.53M shares (+24.65% YoY) · TTM rev $3.11B · TTM EBITDA $418.48M
  // (13.44%) · TTM NI $244.94M (7.87%), EPS $0.89 · cash $2.72B, debt $2.82B -> net
  // debt $98.16M · FCF $624.71M · P/E 291.32 trailing, 73.19 forward · EV/EBITDA
  // 182.16 · PS 24.46 · FY2026E rev $4.12B (+103.35%), EPS $2.71 · PT $276.05 — only
  // 6.79% above the market price after that run
  BE: {
    name: 'Bloom Energy',
    sector: 'infra',
    shares: 1,
    cost: 258.49,
    priceRef: 258.49,
    prevRev: 2.026,
    growth: [103.35, 45, 32, 25, 20],
    // Consensus EPS $2.71 implies a 19.4% net margin against a 7.87% GAAP trailing
    // margin \u2014 an adjusted number. Year one is set near GAAP and climbs from there.
    niMargin: [9, 12, 15, 17, 18],
    ebMargin: [15, 18, 21, 23, 24],
    // Up 24.65% in twelve months. This path assumes that halves, and then halves again.
    sharesOut: [0.305, 0.32, 0.332, 0.342, 0.35],
    peLow: 25,
    peHigh: 45,
    evMult: 20,
    netCash: -0.09816,
    caveat:
      'Four problems stacked on one another, and the first got worse in a fortnight: the share price rose about 27% between 29 August and 10 September 2026 on unchanged estimates, taking the multiple from 230x trailing earnings to 291x, and EV/EBITDA from 143.8x to 182.2x. The consensus price target is now only 6.79% above the price. The consensus: $2.71 FY2026 EPS implies a 19.4% net margin against a 7.87% GAAP trailing margin, so the headline is adjusted and the driver table starts at less than half of it. The dilution: the share count rose 24.65% in a single year, the fastest here after SpaceX, and the path below assumes that decelerates sharply. And the growth itself: consensus has revenue more than doubling in 2026, which makes year one of this model entirely a bet on fuel-cell orders for datacentre power landing on schedule. That last point makes it the same trade as VST, VRT and IREN, at a much higher multiple.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Datacentre orders slip, the margin ramp stalls near break-even and equity funds the gap.',
        rev: 8,
        margin: 8,
        pe: 18,
      },
      base: {
        label: 'Base',
        thesis: 'Fuel cells become a standard on-site power option for AI load and manufacturing scale lifts margin.',
        rev: 11.83,
        margin: 18,
        pe: 35,
      },
      bull: {
        label: 'Bull',
        thesis: 'Interconnection queues make behind-the-meter generation the only fast option, and Bloom owns it.',
        rev: 15,
        margin: 22,
        pe: 45,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Orders and product backlog',
        m: 'FY2026E revenue $4.12B, +103.4%',
        b: 'Doubling revenue in a year is an order-book claim, not a capacity claim. It either shows up in bookings or it does not happen.',
        c: 'Check total backlog, new orders in the quarter, and the named datacentre customers behind them.',
      },
      {
        h: 'Share count',
        m: '294.53M shares, +24.65% year over year',
        b: 'Second-fastest dilution in this book. At that rate the per-share result falls behind the business even when the business works.',
        c: 'Check the diluted count against the drivers table, plus any convertible notes and their strike. This is the assumption most likely to be too kind.',
      },
      {
        h: 'GAAP margin against the adjusted headline',
        m: 'FY2026E EPS $2.71 adjusted; 7.87% GAAP trailing margin',
        b: 'The gap is more than a factor of two, and this model runs on the smaller number.',
        c: 'Read GAAP gross and operating margin, and the product-versus-service split inside them. Service has historically been the weaker half.',
      },
      {
        h: 'Cost per kilowatt',
        m: 'Product cost trend and installed cost',
        b: 'The margin path assumes manufacturing scale brings cost down. Without that, volume growth does not become profit.',
        c: 'Check product cost per kilowatt against the prior year, and factory utilisation.',
      },
      {
        h: 'Policy and interconnection',
        m: 'Tax credit eligibility and grid queue times',
        b: 'The demand case rests on interconnection queues being slow and incentives being available. Both are set by policy, not by the company.',
        c: 'Check any change to the credit regime and to interconnection timelines in the large markets. Faster grid connections weaken the whole thesis.',
      },
    ],
  },

  // The other neocloud, added so IREN has a direct comparison rather than only the
  // power producers. Price $228.11 · cap $62.52B · EV $64.68B · 274.10M shares
  // (+22.12% YoY) · TTM rev $1.36B · TTM EBITDA $258.00M (19.04%) · TTM NI $42.40M
  // (3.13%), EPS $0.16 · cash $8.04B, debt $10.20B → net debt $2.15B · FCF -$5.88B on
  // $11.14B capex · P/E 1,474.64 trailing, forward n/a · EV/EBITDA 250.69 · PS 46.14 ·
  // FY2026E rev $3.34B (+531.06%), EPS -$2.08 · PT $286.69 · 18 analysts
  NBIS: {
    name: 'Nebius Group',
    sector: 'infra',
    shares: 1,
    cost: 228.11,
    priceRef: 228.11,
    // Backs out of the consensus at its stated growth rate to $529M for CY2025. Note
    // the trailing twelve months already show $1.36B, so the business is growing
    // through the year rather than starting it from the CY2025 base.
    prevRev: 0.52927,
    growth: [531.06, 95, 55, 38, 28],
    // -17.5% lands year one on the consensus -$2.08 EPS. Trailing GAAP net income is
    // barely positive at $42.40M, and turns negative as the capex depreciates.
    niMargin: [-17.5, -6, 4, 10, 14],
    ebMargin: [22, 30, 38, 43, 46],
    // Up 22.12% in a year. Datacentres bought with equity, the same way IREN and
    // ASTS fund theirs, and the path assumes the pace decelerates rather than stops.
    sharesOut: [0.285, 0.305, 0.322, 0.335, 0.345],
    peLow: 25,
    peHigh: 45,
    evMult: 18,
    netCash: -2.15,
    caveat:
      'Read this beside IREN rather than instead of it: two companies renting the same accelerators to the same customers, funded the same way. The numbers are extreme in every direction. Consensus has revenue up 531.06% in CY2026 — by far the largest year-one growth rate in the book — and a GAAP loss of $2.08 a share at the same time, because the capex that produces the revenue depreciates before it earns. Free cash flow is -$5.88B against $11.14B of capex, net debt is $2.15B, the share count rose 22.12% in a year, and the trailing multiple is 1,474.64x earnings and 46.14x sales. What none of that prices is customer concentration: revenue of this shape comes from a small number of very large contracts, so the difference between the bear and base cases below is mostly whether one or two counterparties renew. The 2030 margin also assumes accelerator rental does not become a commodity, which is the one thing a market with this much capital entering it usually does.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Capacity outruns demand, rental prices fall toward the cost of the hardware and the debt stays.',
        rev: 9,
        margin: 2,
        pe: 18,
      },
      base: {
        label: 'Base',
        thesis: 'Nebius holds a durable European position as contracted capacity for model builders.',
        rev: 17.83,
        margin: 14,
        pe: 32,
      },
      bull: {
        label: 'Bull',
        thesis: 'Inference demand keeps utilisation and pricing high, and the platform layer earns a software margin on top.',
        rev: 25,
        margin: 18,
        pe: 42,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Contracted revenue and who it is with',
        m: 'FY2026E revenue $3.34B, +531.1%',
        b: 'A sixfold revenue year is an order-book claim. It comes from a handful of contracts, and concentration is the risk the growth rate hides.',
        c: 'Check annualised run-rate revenue, contracted backlog, and how much of it sits with the largest one or two customers.',
      },
      {
        h: 'Capex funding and dilution',
        m: 'FCF -$5.88B on $11.14B capex; shares +22.12%',
        b: 'The hardware is bought years before the contracts pay for it, and the gap is filled with equity and debt.',
        c: 'Track the cash balance against committed capex, plus every convertible and its strike. This is where the per-share result is decided.',
      },
      {
        h: 'Utilisation and rental pricing',
        m: 'EV/EBITDA 250.69',
        b: 'The whole margin path assumes accelerator rental does not commoditise while a great deal of capital builds the same capacity.',
        c: 'Look for utilisation and revenue per accelerator over time. Falling price per unit with rising volume is the commoditisation case arriving.',
      },
      {
        h: 'Depreciation schedule',
        m: 'Useful life assumed for accelerators',
        b: 'Stretching the assumed life flatters current earnings and postpones the cost. It is an accounting choice with a large effect here.',
        c: 'Read the stated useful life and any change to it. A lengthened schedule is the fastest way to make this margin path look achieved.',
      },
      {
        h: 'Power and siting',
        m: 'Contracted capacity by site',
        b: 'The constraint on this business is energy and interconnection, which is the same constraint CEG, VST, VRT and BE sell into on the other side.',
        c: 'Check secured power capacity against the buildout plan. Read it with the power names in this book rather than on its own.',
      },
    ],
  },
}
