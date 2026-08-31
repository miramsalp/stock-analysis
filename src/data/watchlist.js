/**
 * Broader coverage set — added to give the model something to compare the tracked
 * names against, not because anyone is recommending them. Each one is here because
 * it sits next to something already in the book: AVGO against MRVL, LLY against HIMS,
 * UNH against OSCR, V against SOFI, NOW against AXON's multiple, CEG against IREN.
 *
 * Every figure below was pulled 28–29 August 2026 from stockanalysis.com (S&P Global
 * consensus). Built the same way as `./tracked.js`:
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
 */
export const WATCHLIST = {
  // ---------------------------------------------------------------- consumer
  // Price $266.43 · cap $2.87T · 10.79B shares · TTM rev $775.68B · TTM EBITDA
  // $168.91B · cash $122.99B, debt $251.64B · P/E 21.4 · FY2026E rev $828.19B
  // (+15.52%), EPS $12.48 · PT $327.67
  AMZN: {
    name: 'Amazon',
    sector: 'consumer',
    shares: 15,
    cost: 266.43,
    priceRef: 266.43,
    prevRev: 716.92,
    growth: [15.52, 13, 12, 11, 10],
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
        m: 'FY2026E revenue $828.19B, +15.5%',
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
        m: 'Net debt $128.65B; TTM EBITDA $168.91B',
        b: 'Amazon carries real net debt and is spending heavily on AI infrastructure, which lands as depreciation later.',
        c: 'Check the capex guide against operating cash flow. If capex grows faster than EBITDA, the free cash flow story weakens even as revenue compounds.',
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

  // Price $319.70 · cap $4.67T · 14.59B shares · TTM rev $466.82B · TTM EBITDA
  // $167.96B · cash $146.52B, debt $84.34B · P/E 36.7 · FY2026E rev $477.68B
  // (+14.78%), EPS $8.82 · PT $324.45 (essentially at the money)
  AAPL: {
    name: 'Apple',
    sector: 'consumer',
    shares: 12,
    cost: 319.7,
    priceRef: 319.7,
    prevRev: 416.17,
    growth: [14.78, 8, 7, 6, 6],
    niMargin: [26.9, 27.5, 28, 28.5, 29],
    ebMargin: [36, 36.5, 37, 37.5, 38],
    sharesOut: [14.59, 14.3, 14.0, 13.7, 13.4],
    peLow: 25,
    peHigh: 38,
    evMult: 22,
    netCash: 62.18,
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
        rev: 620.3,
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
        m: 'FY2026E revenue $477.68B, +14.8%',
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
        m: 'Price target $324.45 — analysts see almost no upside',
        b: 'The consensus target sits within 2% of the price, which says the market is waiting for evidence rather than pricing a new cycle.',
        c: 'Check whether on-device AI features actually shorten the replacement cycle. The bull case here needs a hardware refresh, not a software update.',
      },
    ],
  },

  // Price $152.90 · cap $196.73B · 1.29B shares · TTM rev $13.27B · TTM EBITDA
  // $2.40B · cash $4.95B, debt $178M · P/E 103.2 · FY2026E rev $15.23B (+31.82%),
  // EPS $1.91 · PT $171.15
  SHOP: {
    name: 'Shopify',
    sector: 'consumer',
    shares: 25,
    cost: 152.9,
    priceRef: 152.9,
    prevRev: 11.55,
    growth: [31.82, 24, 20, 17, 15],
    niMargin: [14.5, 16, 18, 19, 20],
    ebMargin: [18, 20, 22, 23, 24],
    sharesOut: [1.29, 1.3, 1.31, 1.32, 1.33],
    peLow: 35,
    peHigh: 65,
    evMult: 30,
    netCash: 4.77,
    caveat:
      'Shopify trades at roughly 103x trailing earnings, so the exit multiple decides most of the outcome here. Note also that revenue is largely a take rate on merchant sales, which makes it a leveraged bet on e-commerce volume — the same volume AppLovin is trying to sell advertising against.',
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
        rev: 30.5,
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
        m: 'FY2026E revenue $15.23B, +31.8%',
        b: 'Revenue is roughly volume times take rate. Only one of those two is under management control.',
        c: 'Check GMV growth and take rate separately. Revenue growth driven by take rate increases has a ceiling; volume growth does not.',
      },
      {
        h: 'What 103x already assumes',
        m: 'Trailing P/E 103.2 at $152.90',
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

  // Price $945.47 · cap $419.30B · 443.48M shares · TTM rev $293.59B · TTM EBITDA
  // $13.79B · cash $20.00B, debt $8.23B · P/E 47.6 · FY2026E rev $301.58B (+9.57%),
  // EPS $20.58 · FY2027E EPS $22.66 · PT $1,077
  COST: {
    name: 'Costco',
    sector: 'consumer',
    shares: 4,
    cost: 945.47,
    priceRef: 945.47,
    prevRev: 275.24,
    growth: [9.57, 8, 7.5, 7, 7],
    niMargin: [3.03, 3.1, 3.2, 3.3, 3.4],
    ebMargin: [4.7, 4.8, 4.9, 5.0, 5.1],
    sharesOut: [0.4435, 0.443, 0.4425, 0.442, 0.4415],
    peLow: 30,
    peHigh: 50,
    evMult: 25,
    netCash: 11.77,
    caveat:
      'Costco earns a ~3% net margin and trades at ~48x earnings, which is unusual enough to be the whole thesis: the market is paying for membership fee durability and inventory turns, not for margin. Small changes to the exit multiple swamp anything the revenue line does. It is in this book as the low-beta anchor against a lot of high-multiple growth.',
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
        rev: 400.8,
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
        m: 'P/E 47.6 on a 3% net margin',
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

  // Price $88.80 · cap $382.04B · EV $409.93B · 4.30B shares (-0.09% YoY) · TTM rev
  // $50.13B · TTM EBITDA $17.00B · TTM NI $14.32B (28.56%) · cash $16.37B, debt
  // $44.26B -> net debt $27.89B · P/E 26.95 · EV/EBITDA 24.18 · yield 2.39% · FY2026E
  // rev $49.72B (+3.72%), EPS $3.30 · FY2027E EPS $3.53 · PT $94.70
  KO: {
    name: 'Coca-Cola',
    sector: 'consumer',
    shares: 1,
    cost: 88.8,
    priceRef: 88.8,
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
        m: 'Net debt $27.89B; EV $409.93B against a $382.04B cap',
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

  // ---------------------------------------------------------------- semis
  // Price $217.55 · cap $5.25T · 24.15B shares · TTM rev $302.97B · TTM EBITDA
  // $201.27B (66.4%) · cash $62.47B, debt $38.86B · P/E 27.5 · next-FY consensus rev
  // $409.00B, EPS $9.27 · PT $323.42
  NVDA: {
    name: 'NVIDIA',
    sector: 'semis',
    shares: 20,
    cost: 217.55,
    priceRef: 217.55,
    prevRev: 302.97,
    growth: [35, 22, 16, 12, 10],
    niMargin: [54.7, 54, 53, 52, 52],
    ebMargin: [65, 64, 63, 62, 62],
    sharesOut: [24.15, 23.9, 23.65, 23.4, 23.15],
    peLow: 22,
    peHigh: 40,
    evMult: 22,
    netCash: 23.61,
    caveat:
      "NVIDIA's fiscal year ends in late January, so the calendar columns here are approximate; CY2026 is built from the next-fiscal-year consensus of $409B. The striking thing about the setup is that at 27.5x trailing earnings it is not obviously expensive — the risk in this model is entirely in whether a 52% net margin survives competition from custom silicon, which is precisely what MRVL and AVGO in this same book are selling.",
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
        rev: 713.1,
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
        m: 'TTM net margin 54.7%, EBITDA margin 66.4%',
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
        m: 'Next-FY consensus revenue $409B',
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

  // Price $417.52 (ADR) · cap $1.98T · 25.93B ordinary shares · TTM rev $139.57B USD
  // · TTM EBITDA $99.56B (71.3%) · cash $110.58B, debt $33.59B · P/E 28.4
  // · FY2026E revenue NT$5.44T (+42.69%), EPS NT$107.64 · PT $554.45
  TSM: {
    name: 'TSMC',
    sector: 'semis',
    shares: 10,
    cost: 417.52,
    priceRef: 417.52,
    prevRev: 121.0,
    growth: [42.69, 20, 16, 13, 11],
    niMargin: [46.9, 47, 47.5, 48, 48],
    ebMargin: [70, 70.5, 71, 71.5, 72],
    sharesOut: [4.742, 4.742, 4.742, 4.742, 4.742],
    peLow: 18,
    peHigh: 30,
    evMult: 14,
    netCash: 76.99,
    caveat:
      'Two conversions to keep in mind. TSMC reports in New Taiwan dollars — the consensus is NT$5.44T revenue and NT$107.64 EPS for 2026 — and the figures here are converted to USD at roughly NT$31.5 to the dollar, so currency moves alone will shift them. And the share count is ADR-equivalent (about 4.74B), not the 25.93B ordinary shares outstanding, because one ADR represents five ordinary shares; that is what makes EPS comparable to the $417.52 ADR price.',
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
        rev: 301.5,
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
        m: 'FY2026E revenue +42.7% in NT dollars',
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

  // Price $368.79 · cap $1.75T · 4.76B shares · TTM rev $75.47B · TTM EBITDA $42.08B
  // (55.8%) · cash $19.63B, debt $64.91B · P/E 61.4 · FY2026E rev $106.09B,
  // EPS $11.63 (non-GAAP) · PT $525.97
  AVGO: {
    name: 'Broadcom',
    sector: 'semis',
    shares: 10,
    cost: 368.79,
    priceRef: 368.79,
    prevRev: 75.47,
    growth: [40.57, 22, 18, 15, 12],
    // GAAP. Trailing GAAP net margin is 37.9%; the $11.63 consensus EPS is non-GAAP.
    niMargin: [38, 42, 45, 47, 48],
    ebMargin: [56, 57, 58, 59, 60],
    sharesOut: [4.76, 4.75, 4.74, 4.73, 4.72],
    peLow: 25,
    peHigh: 45,
    evMult: 25,
    netCash: -45.28,
    caveat:
      "Broadcom's fiscal year ends in the autumn, so the calendar columns are offset. More importantly, consensus EPS of $11.63 is non-GAAP — trailing GAAP net margin is 37.9%, and the margins below are GAAP, which is why they look lower than the headline. Broadcom is the direct comparison for MRVL: both sell custom accelerators to the same handful of hyperscalers, and both are priced as if they win.",
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
        rev: 196.7,
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
        m: 'FY2026E revenue $106.09B, +40.6%',
        b: 'A 40% growth rate at this size is almost entirely custom silicon for a few named hyperscalers.',
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
        m: 'Consensus EPS $11.63 is non-GAAP; GAAP margin 37.9%',
        b: 'Acquisition amortisation from VMware is large and runs for years.',
        c: 'Check GAAP net income directly. The 48% GAAP margin assumed by 2030 requires that amortisation to roll off roughly on schedule.',
      },
      {
        h: 'Leverage',
        m: 'Net debt $45.28B',
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

  // Price $241.02 · cap $257.43B · EV $254.03B · 1.07B shares (+0.66% YoY) · TTM rev
  // $5.16B · TTM EBITDA $1.06B · TTM NI $1.04B (20.25%) · cash $3.89B, debt $485M ->
  // net cash $3.40B · FCF $1.51B · P/E 244.0 trailing, 100.2 forward · EV/EBITDA 236.8
  // · FY2026E rev $4.92B (+22.79%), EPS $1.77 · FY2027E rev $6.05B (+22.95%), EPS
  // $2.23 · PT $286.44 · fiscal year ends 31 March
  ARM: {
    name: 'Arm Holdings',
    sector: 'semis',
    shares: 1,
    cost: 241.02,
    priceRef: 241.02,
    prevRev: 4.007,
    // Both consensus years are published and both run near +23%, so growth[1] is
    // consensus too. Only 2028-2030 are judgement.
    growth: [22.79, 22.95, 20, 18, 16],
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
      'Three things at once. The fiscal year ends 31 March, so these calendar columns are offset by a quarter against every other company here. The $1.77 FY2026 consensus EPS is non-GAAP and implies a 38% net margin against a 20.25% GAAP trailing margin, so the driver table deliberately sits well below the headline. And the multiple, not the growth rate, decides the outcome: 244x trailing earnings and 237x EV/EBITDA mean a company compounding revenue at 23% a year can still lose you money if the exit multiple lands anywhere near normal. The base case below already assumes 55x in 2030 \u2014 historically generous \u2014 and still finishes under today\u2019s price.',
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
        rev: 9.94,
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
        m: '244x trailing, 100x forward, 237x EV/EBITDA',
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

  // Price $1,692.08 · cap $666.04B · EV $659.54B · 384.10M shares (-1.44% YoY) · TTM
  // rev $40.29B · TTM EBITDA $15.38B · TTM NI $12.13B (30.11%) · cash $8.65B, debt
  // $2.26B -> net cash $6.38B · FCF $11.64B · P/E 54.9 · EV/EBITDA 42.9 · FY2026E rev
  // $43.31B (+32.59%), EPS $38.19 · FY2027E rev $54.44B (+25.69%), EPS $51.69 · PT $2,155
  ASML: {
    name: 'ASML',
    sector: 'semis',
    shares: 1,
    cost: 1692.08,
    priceRef: 1692.08,
    prevRev: 32.67,
    growth: [32.59, 25.69, 18, 14, 12],
    // Consensus EPS $38.19 on 384.1M shares implies 33.9%, close to the 30.11% GAAP
    // trailing margin \u2014 IFRS reporting, so no meaningful adjusted/GAAP gap to correct.
    niMargin: [33.9, 36, 37, 38, 38],
    ebMargin: [39, 41, 42, 43, 43],
    sharesOut: [0.3841, 0.379, 0.374, 0.369, 0.364],
    peLow: 25,
    peHigh: 40,
    evMult: 22,
    netCash: 6.38,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'A capex digestion cycle arrives, High-NA adoption slips and orders are pushed right.',
        rev: 65,
        margin: 32,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'EUV stays the bottleneck for leading-edge logic and memory, and High-NA ramps on schedule.',
        rev: 82.02,
        margin: 38,
        pe: 32.5,
      },
      bull: {
        label: 'Bull',
        thesis: 'AI capacity keeps leading edge sold out and ASML prices a monopoly tool into a shortage.',
        rev: 95,
        margin: 40,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Bookings, not revenue',
        m: 'FY2026E revenue $43.31B, +32.6%',
        b: 'Revenue is backlog conversion; net bookings are the leading indicator and they move first and hardest.',
        c: 'Read net bookings and the EUV share of them. A revenue beat on falling bookings is the classic top of this cycle.',
      },
      {
        h: 'High-NA units and pricing',
        m: 'FY2027E revenue $54.44B, +25.7%',
        b: 'The 2027 consensus step assumes High-NA systems ship and are recognised, at prices well above standard EUV.',
        c: 'Check High-NA units shipped, recognised and in backlog, plus average selling price. Slippage moves the whole model right.',
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

  // ---------------------------------------------------------------- software
  // Price $513.53 · cap $3.81T · 7.43B shares · TTM rev $331.84B · TTM EBITDA
  // $194.24B (58.5%) · cash $76.84B, debt $128.81B · P/E 28.6 · next-FY consensus
  // rev $391.08B, EPS $19.75 · PT $569.45
  MSFT: {
    name: 'Microsoft',
    sector: 'software',
    shares: 8,
    cost: 513.53,
    priceRef: 513.53,
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
      "Microsoft's fiscal year ends in June, so the calendar columns are approximate — CY2026 is built from the next-fiscal-year consensus of $391.08B. Note the company now carries net debt of about $52B against AI infrastructure spend, which is a change in character worth tracking.",
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
        m: 'Net debt $51.97B and rising with capex',
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

  // Price $256.00 · cap $210.69B · 823.00M shares · TTM rev $43.94B · TTM EBITDA
  // $12.90B · cash $11.40B, debt $42.38B · P/E 23.7 · next-FY consensus rev $46.24B
  // (+11.37%), EPS $16.72 (non-GAAP) · PT $262.54
  CRM: {
    name: 'Salesforce',
    sector: 'software',
    shares: 15,
    cost: 256.0,
    priceRef: 256.0,
    prevRev: 41.52,
    growth: [11.37, 10, 9, 9, 8],
    // GAAP. Trailing GAAP net margin is 20.2%; the $16.72 consensus is non-GAAP.
    niMargin: [20, 22, 24, 25, 26],
    ebMargin: [29, 31, 32, 33, 34],
    sharesOut: [0.823, 0.81, 0.797, 0.784, 0.771],
    peLow: 18,
    peHigh: 30,
    evMult: 16,
    netCash: -30.98,
    caveat:
      "Salesforce's fiscal year ends in January, so the calendar columns are offset. Consensus EPS of $16.72 is non-GAAP against a trailing GAAP net margin of 20.2%; the margins below are GAAP. The analyst price target of $262.54 is 2.5% above the price — the market is treating this as a value software name now, not a growth one, which is the interesting part.",
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
        rev: 65.27,
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
        m: 'GAAP margin 20.2% trailing',
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

  // Price $144.71 · cap $149.61B · 1.03B shares · TTM rev $14.73B · TTM EBITDA
  // $2.90B · cash $4.66B, debt $8.45B · P/E 90.4 · FY2026E rev $16.22B (+22.15%),
  // EPS $4.07 (non-GAAP) · PT $142.23 (slightly below the price)
  NOW: {
    name: 'ServiceNow',
    sector: 'software',
    shares: 25,
    cost: 144.71,
    priceRef: 144.71,
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
      'The closest comparison in this book to AXON: high-quality recurring revenue, roughly 90x trailing earnings, and an analyst price target ($142.23) that sits slightly below the market price. As with AXON, the exit multiple decides the outcome, and GAAP margin of 11.2% is far below the ~26% implied by the non-GAAP consensus EPS.',
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
        m: 'GAAP net margin 11.2%; P/E 90.4',
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

  // Price $218.40 · cap $223.63B · 1.02B shares · TTM rev $5.40B · TTM EBITDA
  // $106.86M · cash $5.01B, debt $820.18M · P/E 4,970 · next-FY consensus rev $6.01B
  // (+24.83%), EPS $1.26 (non-GAAP) · PT $227.58
  CRWD: {
    name: 'CrowdStrike',
    sector: 'software',
    shares: 18,
    cost: 218.4,
    priceRef: 218.4,
    prevRev: 4.815,
    growth: [24.83, 22, 20, 18, 16],
    // GAAP, and barely positive today: the trailing P/E of ~4,970 means GAAP EPS is
    // close to zero. The $1.26 consensus is non-GAAP.
    niMargin: [1, 4, 8, 12, 15],
    ebMargin: [4, 9, 14, 18, 21],
    sharesOut: [1.02, 1.04, 1.06, 1.08, 1.1],
    peLow: 40,
    peHigh: 80,
    evMult: 30,
    netCash: 4.19,
    caveat:
      'CrowdStrike is essentially not profitable on a GAAP basis — the trailing P/E of about 4,970 and TTM EBITDA of $107M on $5.40B of revenue say so plainly. Consensus EPS of $1.26 is non-GAAP and excludes very large stock compensation. Everything below year one is a forecast that GAAP margin arrives; the fiscal year also ends in January, so the columns are offset. Treat this as the most speculative entry in the book after IREN.',
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
        rev: 12.04,
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
        m: 'Next-FY consensus revenue $6.01B, +24.8%',
        b: 'Net new ARR is the cleanest read on demand and turns before reported revenue does.',
        c: 'Check net new ARR quarter over quarter, not just total ARR growth.',
      },
      {
        h: 'GAAP profitability',
        m: 'TTM EBITDA $106.86M on $5.40B revenue; P/E ~4,970',
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

  // Price $187.50 · cap $450.57B · EV $441.38B · 2.40B shares (+1.79% YoY) · TTM rev
  // $6.16B · TTM EBITDA $2.66B · TTM NI $3.02B (49.00%) · cash $9.41B, debt $211.4M ->
  // net cash $9.20B · FCF $3.36B · P/E 159.3 · EV/EBITDA 164.6 · FY2026E rev $8.19B
  // (+82.97%), EPS $1.60 · FY2027E rev $12.18B (+48.68%), EPS $2.31 · PT $191.68
  PLTR: {
    name: 'Palantir',
    sector: 'software',
    shares: 1,
    cost: 187.5,
    priceRef: 187.5,
    prevRev: 4.48,
    growth: [82.97, 48.68, 35, 28, 24],
    // Consensus EPS $1.60 implies 46.9%, close to the 49.00% GAAP trailing margin, so
    // there is no adjusted/GAAP gap to correct. The decline after year one is judgement:
    // a 49% net margin on $6B of revenue is flattered by interest income and tax items,
    // and is not what the operating business earns.
    niMargin: [46.9, 45, 43, 41, 40],
    ebMargin: [44, 45, 46, 46, 47],
    sharesOut: [2.44, 2.48, 2.51, 2.54, 2.56],
    peLow: 40,
    peHigh: 80,
    evMult: 40,
    netCash: 9.2,
    caveat:
      'The multiple decides this one, not the growth rate \u2014 the same problem AXON has, at a much larger scale. 159x trailing earnings and 165x EV/EBITDA mean the exit assumption in the scenario cards dominates every driver above it: revenue can compound at 30% a year for five years and the position still loses money if the multiple lands anywhere near the software average. Two other things. The 49% GAAP net margin is flattered by interest income on $9.41B of cash and by tax items, so the driver table steps it down rather than holding it flat. And the stock sits at $187.50 against a $191.68 consensus price target, so nothing here depends on analysts being too cautious.',
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
        m: 'FY2026E revenue $8.19B, +83.0%',
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
        m: '159x trailing earnings, 165x EV/EBITDA',
        b: 'At this level the exit P/E is the whole investment case, and it is a judgement rather than a disclosure.',
        c: 'Set the 2030 P/E in the scenario cards first and read the result, then decide whether the growth assumptions matter at all.',
      },
    ],
  },

  // ---------------------------------------------------------------- internet
  // Price $81.72 (post-split) · cap $340.28B · 4.16B shares · TTM rev $48.37B
  // · TTM EBITDA $14.73B · cash $9.13B, debt $16.65B · P/E 25.8 · FY2026E rev
  // $51.22B (+13.36% from $45.18B), EPS $3.59 · PT $93.66
  NFLX: {
    name: 'Netflix',
    sector: 'internet',
    shares: 50,
    cost: 81.72,
    priceRef: 81.72,
    prevRev: 45.18,
    growth: [13.36, 11, 10, 9, 8],
    niMargin: [29.2, 30, 31, 31.5, 32],
    ebMargin: [31, 32, 33, 34, 34],
    sharesOut: [4.16, 4.12, 4.08, 4.04, 4.0],
    peLow: 20,
    peHigh: 34,
    evMult: 18,
    netCash: -7.52,
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

  // Price $30.91 (31 Aug 2026) · cap $7.76B · EV $7.67B · 251.01M shares, +13.60% YoY
  // · TTM rev $1.571B (+35.91%) · TTM EBITDA $115.94M · TTM net income −$2.17M · FCF
  // $224.41M · cash $309.95M, debt $220.25M → net cash $89.70M · P/E n/a · EV/EBITDA
  // 65.3x · FY2025 rev $1.305B (+29.72%), net −$31.51M · FY2026E rev $1.82B (+39.47%),
  // EPS $0.96 · FY2027E rev $2.11B (+16.02%), EPS $1.21 · PT $31.36 (at the money)
  ZETA: {
    name: 'Zeta Global',
    sector: 'internet',
    shares: 200,
    cost: 30.91,
    priceRef: 30.91,
    prevRev: 1.305,
    // Two consensus years, not one: FY2026 at +39.47% and FY2027 at +16.02% are both
    // published, and the deceleration between them is steep enough to be worth keeping
    // rather than smoothing. Only 2028–2030 are judgement.
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
      'The widest GAAP-versus-adjusted gap in this book, and it is not close. The $0.96 FY2026 consensus EPS is adjusted; on GAAP the trailing twelve months show a $2.17M net loss, and trailing EBITDA of $115.94M is 7.4% of revenue against the roughly 20% adjusted EBITDA margin the company reports. Stock compensation is most of that difference, which makes it a share count problem as much as a margin one — the count rose 13.60% in a single year, and the path below assumes that decelerates to about 4%. Two more things before the numbers. The stock is at $30.91 against a $31.36 consensus price target and 65.3x EV/EBITDA, so the base case here is earnings catching up to the multiple, not the multiple re-rating. And free cash flow of $224.41M exceeds both trailing EBITDA and reported net income — the cash story is far stronger than the earnings story, which is exactly the argument the 2024 short thesis picked at.',
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

  // ---------------------------------------------------------------- space
  // Listed on Nasdaq 12 June 2026, so there is no full year as a public company and no
  // trading history to build a multiple band from.
  // Price $142.21 · cap $1.93T · EV $1.87T · 13.57B shares (+41.79% YoY) · TTM rev
  // $23.04B · TTM EBITDA $5.90B · TTM NI -$8.89B (-35.66%) · FCF -$32.52B · cash
  // $100.01B, debt $39.71B -> net cash $60.30B · fwd P/E 109.1 · EV/EBITDA 317.8
  // · FY2026E rev $44.63B (+138.99%), EPS $0.09 · FY2027E rev $105.47B (+136.32%),
  // EPS $1.60 · PT $219.22
  SPCX: {
    name: 'SpaceX',
    sector: 'space',
    shares: 1,
    cost: 142.21,
    priceRef: 142.21,
    prevRev: 18.67,
    // Both consensus years are published and both are above +135%. Nothing else in this
    // book has a curve like it, and 2028-2030 are a guess at how it decays.
    growth: [138.99, 136.32, 60, 40, 30],
    // Consensus-derived: $0.09 FY2026 EPS is 2.7% of revenue, $1.60 FY2027 is 20.6%.
    // The jump between them is consensus, not judgement, and it is the single largest
    // assumption in this entry.
    niMargin: [2.7, 20.6, 24, 26, 27],
    ebMargin: [22, 28, 32, 34, 35],
    sharesOut: [13.8, 14.1, 14.3, 14.5, 14.6],
    peLow: 25,
    peHigh: 45,
    evMult: 20,
    netCash: 60.3,
    caveat:
      'The newest listing in this book and the least testable entry in it. SpaceX came to Nasdaq on 12 June 2026, so there is no full year as a public company, no trading history to set a multiple band against, and the share count has risen 41.79% in twelve months. The trailing twelve months show an $8.89B net loss and $32.52B of negative free cash flow on $23.04B of revenue \u2014 a company consuming capital at enormous scale, funded by a $100.01B cash pile. Everything that makes the model work happens inside the consensus: revenue forecast to rise 139% in 2026 and a further 136% in 2027, with net margin going from 2.7% to 20.6% in the same step. That is Starship and Starlink both scaling on schedule, priced as though they will. EV/EBITDA is 317.8x today. Treat every column past CY2026 as a forecast about a business that does not exist yet, and size the position accordingly.',
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
        rev: 307,
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
        m: 'FY2026E EPS $0.09 -> FY2027E $1.60',
        b: 'Consensus has net margin going from 2.7% to 20.6% in one year. Nothing else in this book asks you to believe a step that large.',
        c: 'Check gross margin by segment. If Starlink is not carrying it, the step does not happen and every year after 2027 in this model is wrong.',
      },
      {
        h: 'Starlink subscribers and revenue per user',
        m: 'FY2026E revenue $44.63B, +139%',
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

  // Price $63.77 · cap $38.16B · EV $35.91B · 598.46M shares (+15.68% YoY) · TTM rev
  // $769.15M · TTM EBITDA -$150.52M · TTM NI -$165.46M (-21.51%) · FCF -$371.14M ·
  // cash $2.30B, debt $133.69M -> net cash $2.25B · P/E n/a, fwd P/E 2,834 · FY2026E
  // rev $953.34M (+58.42%), EPS -$0.05 · FY2027E rev $1.36B (+42.33%), EPS $0.05 · PT $112.94
  RKLB: {
    name: 'Rocket Lab',
    sector: 'space',
    shares: 1,
    cost: 63.77,
    priceRef: 63.77,
    prevRev: 0.6018,
    growth: [58.42, 42.33, 38, 32, 28],
    // Consensus for both years: -$0.05 FY2026 EPS is -3.1% of revenue, +$0.05 FY2027 is
    // +2.2%. Year one is still a loss and the crossover is next year on these estimates.
    niMargin: [-3.14, 2.2, 7, 11, 14],
    ebMargin: [2, 8, 14, 19, 22],
    sharesOut: [0.615, 0.64, 0.66, 0.678, 0.692],
    peLow: 35,
    peHigh: 70,
    evMult: 25,
    netCash: 2.25,
    caveat:
      'Loss-making at every line \u2014 net income -$165.46M, EBITDA -$150.52M and free cash flow -$371.14M on $769.15M of trailing revenue \u2014 while carrying a $38.16B market capitalisation. There is no trailing P/E because there are no earnings; the forward P/E is 2,834x. That combination means the price is not a claim about the current business, it is a claim about Neutron, and Neutron has not yet flown a commercial manifest. The share count rose 15.68% in a year to fund exactly that. This is the same shape as IREN in this book: real revenue, real losses, and every margin past year one a forecast about capacity that does not exist yet. On these assumptions the base case lands below today\u2019s price \u2014 the model is saying the expectation is already in the stock.',
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
        rev: 3.16,
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
        m: 'FY2027E revenue $1.36B, +42.3%',
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
        m: 'FY2026E EPS -$0.05 -> FY2027E +$0.05',
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

  // ---------------------------------------------------------------- health
  // Price $1,174.61 · cap $1.05T · 891.36M shares · TTM rev $79.67B · TTM EBITDA
  // $41.71B · cash $8.95B, debt $54.91B · P/E 39.4 · FY2026E rev $88.18B (+35.29%),
  // EPS $36.71 · PT $1,315
  LLY: {
    name: 'Eli Lilly',
    sector: 'health',
    shares: 3,
    cost: 1174.61,
    priceRef: 1174.61,
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

  // Price $392.95 · cap $352.71B · 897.59M shares · TTM rev $450.53B · TTM EBITDA
  // $26.68B · cash $31.47B, debt $73.33B · P/E 25.3 · FY2026E rev $446.53B (-0.32%),
  // EPS $19.81 · FY2027E EPS $22.44 · PT $475.23
  UNH: {
    name: 'UnitedHealth Group',
    sector: 'health',
    shares: 10,
    cost: 392.95,
    priceRef: 392.95,
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
  // Price $381.60 · cap $700.47B · 1.84B shares · TTM rev $44.49B · TTM EBITDA
  // $31.09B (69.9%) · cash $13.79B, debt $23.86B · P/E 32.5 · FY2026E rev $45.76B
  // (+14.39%), EPS $13.23 · PT $418.92
  V: {
    name: 'Visa',
    sector: 'finance',
    shares: 10,
    cost: 381.6,
    priceRef: 381.6,
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

  // Price $354.87 · cap $943.31B · 2.66B shares (-3.57% YoY) · TTM rev $186.33B · TTM
  // NI $63.63B (34.92%) · P/E 15.35 · book value $133.01/share · cash $1.53T, debt
  // $1.34T · FY2026E rev $207.98B (+13.99%), EPS $24.21 · FY2027E rev $213.20B
  // (+2.51%), EPS $25.01 · PT $374.57
  JPM: {
    name: 'JPMorgan Chase',
    sector: 'finance',
    shares: 1,
    cost: 354.87,
    priceRef: 354.87,
    prevRev: 182.45,
    growth: [13.99, 2.51, 4, 4, 4],
    // Consensus EPS $24.21 on 2.66B shares implies 31%, against a 34.92% trailing
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
      'A balance-sheet bank, so half this page does not apply \u2014 the same problem SOFI has, at forty times the size. Ignore the EV/EBITDA row entirely: EBITDA is not meaningful for a business whose funding cost is its cost of goods, and the $183.11B "net cash" figure is an artefact of netting $1.53T of cash against $1.34T of debt on a bank balance sheet, not distributable cash. Read the P/E ladder, and read it against book value of $133.01 per share \u2014 at $354.87 that is 2.67x book, which is the frame that actually governs a bank\u2019s multiple. Two more omissions: the model prices no dividend, and it cannot see credit costs, which is the line that decides a bank\u2019s earnings in the year it matters.',
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
        m: 'FY2026E revenue $207.98B, +14.0%',
        b: 'Most of the revenue step is rates and balance growth, and the FY2027 consensus already has it flattening to +2.5%.',
        c: 'Check the NII guide and the deposit beta. The 2027 deceleration in this model is consensus \u2014 confirm it is still what management expects.',
      },
      {
        h: 'Book value and the premium to it',
        m: '$133.01 book value against a $354.87 price',
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

  // ---------------------------------------------------------------- infra
  // Price $276.75 · cap $98.05B · 354.31M shares · TTM rev $31.27B · TTM EBITDA
  // $7.95B · cash $697M, debt $24.70B · P/E 26.8 · FY2026E rev $35.13B (+37.58%),
  // EPS $12.12 · FY2027E rev $36.40B (+3.61%), EPS $13.34 · PT $348.30
  CEG: {
    name: 'Constellation Energy',
    sector: 'infra',
    shares: 14,
    cost: 276.75,
    priceRef: 276.75,
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
}
