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

  // NOT from the 28–29 August 2026 pull — see the caveat. Figures below are the last
  // full-year numbers on record plus a modelled path: FY2025 rev ~$1.245B (+24% on
  // FY2024's $1.006B), adjusted EBITDA ~20% of revenue, GAAP still loss-making on
  // stock compensation, ~252M diluted shares, cash slightly ahead of debt.
  ZETA: {
    name: 'Zeta Global',
    sector: 'internet',
    shares: 200,
    cost: 24.0,
    priceRef: 24.0,
    prevRev: 1.245,
    growth: [21, 18, 16, 14, 12],
    // GAAP, not adjusted. Year one is still a small net loss: stock compensation is
    // most of the gap, and the crossover to GAAP profit is the whole thesis here.
    niMargin: [-2.5, 1.5, 5, 8, 10.5],
    ebMargin: [21, 22.5, 24, 25, 26],
    sharesOut: [0.252, 0.259, 0.265, 0.27, 0.274],
    peLow: 22,
    peHigh: 40,
    evMult: 14,
    netCash: 0.1,
    caveat:
      'Two separate warnings. First, these figures were not pulled on the same date as the rest of the book — they are the last full-year numbers on record plus a modelled path, and the price is a placeholder, so re-pull revenue, share count and price before you read anything below as current. Second, Zeta reports adjusted EBITDA and adjusted EPS, and the ladder here runs on GAAP: stock compensation is large enough that the company is still GAAP loss-making in year one, which is why the CY2026 EPS and P/E rows read negative and why every multiple quoted elsewhere will look cheaper than this one. The share count row is the live risk — compensation paid in stock is what turns revenue growth into a smaller per-share result than it looks.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Growth normalises to the ad market, GAAP profit never arrives and compensation keeps diluting.',
        rev: 1.85,
        margin: 5,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'Direct platform revenue compounds, stock compensation normalises and GAAP earnings emerge.',
        rev: 2.63,
        margin: 10.5,
        pe: 31,
      },
      bull: {
        label: 'Bull',
        thesis: 'The data-plus-activation stack wins budget from the walled gardens and earns a software margin.',
        rev: 3.2,
        margin: 14,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Direct platform revenue mix',
        m: 'Direct versus integrated-platform revenue',
        b: 'Revenue routed through agency and integrated partners carries different economics and different durability from revenue the platform earns directly.',
        c: 'Check the direct share of revenue and whether it is growing faster than the total. A headline growth rate carried by the integrated channel is a weaker result than the same number carried by direct.',
      },
      {
        h: 'Stock compensation and diluted shares',
        m: '~252M diluted shares in the model, rising to 274M',
        b: 'This is the single largest gap between the adjusted numbers the company reports and the GAAP numbers this model runs on.',
        c: 'Check stock compensation as a percentage of revenue and the diluted count against the drivers table. If the count grows faster than the path here, the 2030 EPS is wrong before any operating assumption is tested.',
      },
      {
        h: 'The crossover to GAAP profit',
        m: 'Year one modelled at a −2.5% GAAP net margin',
        b: 'The base case is a claim that GAAP net income turns positive and reaches a double-digit margin by 2030. Nothing in the P/E ladder works until that first part happens.',
        c: 'Check GAAP net income, not adjusted. The quarter it crosses zero — and whether it stays there — is the disclosure that confirms or breaks this model.',
      },
      {
        h: 'Scaled customers and spend per customer',
        m: 'Scaled customer count and ARPU',
        b: 'Growth from more customers and growth from existing customers spending more are different businesses with different ceilings.',
        c: 'Check both counts and the average spend, plus super-scaled customers separately. Flat customer additions with rising ARPU means the model depends on a narrow base.',
      },
      {
        h: 'Cash conversion and the short thesis',
        m: 'Free cash flow against adjusted EBITDA',
        b: 'A published short thesis in late 2024 attacked the quality of the revenue and the customer-acquisition spend behind it, and the stock has not fully recovered. Cash is the answer to that argument or the confirmation of it.',
        c: 'Check free cash flow against adjusted EBITDA. Persistent conversion is what settles the argument; EBITDA that never becomes cash is what the short case predicted.',
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
