# -*- coding: utf-8 -*-
import io

INFRA = u'''
  // Price $137.18 · cap $46.04B · EV $66.12B · 335.64M shares (+0.45% YoY) · TTM rev
  // $19.21B · TTM EBITDA $6.65B · TTM NI $2.03B (11.55%) · cash $435M, debt $20.51B ->
  // net debt $20.07B · FCF $2.26B · P/E 23.4 trailing, 13.3 forward · EV/EBITDA 9.94 ·
  // down 27.42% over 52 weeks · FY2026E rev $22.83B (+28.70%), EPS $8.62 · FY2027E rev
  // $23.97B (+4.98%), EPS $10.37 · PT $217.42 (+58%)
  VST: {
    name: 'Vistra',
    sector: 'infra',
    shares: 1,
    cost: 137.18,
    priceRef: 137.18,
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
      'The cheapest-looking name in this book, and the leverage is why. Net debt of $20.07B sits against a $46.04B market capitalisation, so enterprise value is $66.12B and the equity is a levered claim on the power price \\u2014 read the EV/EBITDA row and the P/E row together, because here they answer different questions. Two consequences. Earnings swing with wholesale power prices, which no management controls, so the margin path below forecasts a commodity as much as a company. And the stock is down 27.42% over 52 weeks against a $217.42 consensus target 58% above the current price, which means the market and the analysts currently disagree about this one more than about anything else here.',
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
        b: 'The re-rating case is existing generation signed to long-term AI contracts \\u2014 the same argument CEG and IREN are in this book for.',
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

  // Price $258.76 · cap $99.62B · EV $99.85B · 384.99M shares (+1.06% YoY) · TTM rev
  // $11.48B · TTM EBITDA $2.68B · TTM NI $1.73B (15.09%) · cash $3.11B, debt $3.34B ->
  // net debt $227.6M · FCF $2.93B · P/E 58.6 trailing, 33.1 forward · EV/EBITDA 37.2 ·
  // FY2026E rev $14.02B (+37.01%), EPS $6.71 · FY2027E rev $18.15B (+29.49%), EPS $9.10
  // · PT $338.15
  VRT: {
    name: 'Vertiv',
    sector: 'infra',
    shares: 1,
    cost: 258.76,
    priceRef: 258.76,
    prevRev: 10.23,
    growth: [37.01, 29.49, 22, 18, 15],
    // Consensus EPS $6.71 implies 18.4% against a 15.09% GAAP trailing margin \\u2014 a real
    // but modest adjusted/GAAP gap, so year one sits between the two, nearer GAAP.
    niMargin: [16.5, 18, 19, 20, 20.5],
    ebMargin: [23, 24, 25, 26, 26],
    sharesOut: [0.385, 0.386, 0.386, 0.385, 0.384],
    peLow: 20,
    peHigh: 35,
    evMult: 18,
    netCash: -0.2276,
    caveat:
      'A pure derivative of one capex cycle. Vertiv sells the power and cooling that goes inside a datacentre, so its revenue is a direct function of what NVDA, AMZN, MSFT and IREN choose to spend \\u2014 which means holding it alongside those names is one bet, not two. At 58.6x trailing earnings and 37.2x EV/EBITDA the exit multiple matters more than the growth rate, and the growth rate on offer is a consensus already forecasting +37% then +29%. Watch the order book rather than the revenue line: this is a business that finds out about a capex pause four quarters before its income statement does.',
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
        m: 'FY2026E revenue $14.02B, +37.0%',
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
        m: 'FY2027E revenue $18.15B, +29.5%',
        b: 'The margin path assumes higher-value thermal content, not just more units at the same price.',
        c: 'Check liquid-cooling revenue and content per megawatt. Volume growth without mix improvement does not produce the 2030 margin here.',
      },
      {
        h: 'GAAP against adjusted',
        m: 'FY2026E EPS $6.71 adjusted; 15.09% GAAP trailing margin',
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

  // Price $204.22 · cap $60.15B · EV $60.25B · 294.53M shares (+24.65% YoY) · TTM rev
  // $3.11B · TTM EBITDA $418.48M · TTM NI $244.94M (7.87%) · cash $2.72B, debt $2.82B ->
  // net debt $98.16M · FCF $624.71M · P/E 230.0 trailing, 57.8 forward · EV/EBITDA 143.8
  // · FY2026E rev $4.12B (+103.35%), EPS $2.71 · FY2027E EPS $4.92 · PT $275.08
  BE: {
    name: 'Bloom Energy',
    sector: 'infra',
    shares: 1,
    cost: 204.22,
    priceRef: 204.22,
    prevRev: 2.026,
    growth: [103.35, 45, 32, 25, 20],
    // Consensus EPS $2.71 implies a 19.4% net margin against a 7.87% GAAP trailing
    // margin \\u2014 an adjusted number. Year one is set near GAAP and climbs from there.
    niMargin: [9, 12, 15, 17, 18],
    ebMargin: [15, 18, 21, 23, 24],
    // Up 24.65% in twelve months. This path assumes that halves, and then halves again.
    sharesOut: [0.305, 0.32, 0.332, 0.342, 0.35],
    peLow: 25,
    peHigh: 45,
    evMult: 20,
    netCash: -0.09816,
    caveat:
      'Four problems stacked on one another. The multiple: 230x trailing earnings and 143.8x EV/EBITDA. The consensus: $2.71 FY2026 EPS implies a 19.4% net margin against a 7.87% GAAP trailing margin, so the headline is adjusted and the driver table starts at less than half of it. The dilution: the share count rose 24.65% in a single year, the fastest here after SpaceX, and the path below assumes that decelerates sharply. And the growth itself: consensus has revenue more than doubling in 2026, which makes year one of this model entirely a bet on fuel-cell orders for datacentre power landing on schedule. That last point makes it the same trade as VST, VRT and IREN, at a much higher multiple.',
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
'''

p = 'src/data/watchlist.js'
s = io.open(p, encoding='utf-8').read().rstrip()
assert s.endswith(u'},\n}'), repr(s[-24:])
s = s[:s.rfind(u'\n}')] + u'\n' + INFRA.strip(u'\n') + u'\n}\n'
io.open(p, 'w', encoding='utf-8', newline='').write(s)
print('gen3 ok')
