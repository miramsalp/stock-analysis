# -*- coding: utf-8 -*-
import io

KO = u'''
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
      'The frame fits the company but misses half the return. Coca-Cola yields 2.39%, and this model prices capital appreciation only \\u2014 no dividend is reinvested, credited or shown anywhere below. Against a base case worth roughly 2.4% a year in price alone, the dividend is the larger half of the total return and it is invisible here. Read every figure on this page as the price-only component and add the yield yourself. It is also the slowest grower in this book by some distance, which makes the exit multiple, not the revenue line, the thing that decides the outcome.',
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
'''

ARM = u'''
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
      'Three things at once. The fiscal year ends 31 March, so these calendar columns are offset by a quarter against every other company here. The $1.77 FY2026 consensus EPS is non-GAAP and implies a 38% net margin against a 20.25% GAAP trailing margin, so the driver table deliberately sits well below the headline. And the multiple, not the growth rate, decides the outcome: 244x trailing earnings and 237x EV/EBITDA mean a company compounding revenue at 23% a year can still lose you money if the exit multiple lands anywhere near normal. The base case below already assumes 55x in 2030 \\u2014 historically generous \\u2014 and still finishes under today\\u2019s price.',
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
        b: 'The bull case is Arm pricing the architecture AVGO, NVDA and the hyperscalers build on \\u2014 the same custom-silicon question MRVL is in this book for.',
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
    // trailing margin \\u2014 IFRS reporting, so no meaningful adjusted/GAAP gap to correct.
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
        b: 'Three customers set the order book, and a government can remove a market by decree \\u2014 this is the geopolitical name in the semis group.',
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
'''

PLTR = u'''
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
      'The multiple decides this one, not the growth rate \\u2014 the same problem AXON has, at a much larger scale. 159x trailing earnings and 165x EV/EBITDA mean the exit assumption in the scenario cards dominates every driver above it: revenue can compound at 30% a year for five years and the position still loses money if the multiple lands anywhere near the software average. Two other things. The 49% GAAP net margin is flattered by interest income on $9.41B of cash and by tax items, so the driver table steps it down rather than holding it flat. And the stock sits at $187.50 against a $191.68 consensus price target, so nothing here depends on analysts being too cautious.',
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
        c: 'Read GAAP operating income separately from net income. The driver table steps the margin down for exactly this reason \\u2014 check whether that step is too harsh or not harsh enough.',
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
'''

p = 'src/data/watchlist.js'
s = io.open(p, encoding='utf-8').read()
MARK = u'  // ---------------------------------------------------------------- %s'


def before(key, text):
    global s
    m = MARK % key
    assert s.count(m) == 1, (key, s.count(m))
    s = s.replace(m, text.strip(u'\n') + u'\n\n' + m)


before('semis', KO)
before('software', ARM)
before('internet', PLTR)

io.open(p, 'w', encoding='utf-8', newline='').write(s)
print('gen1 ok')
