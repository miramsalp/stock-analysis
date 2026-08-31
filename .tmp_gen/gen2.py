# -*- coding: utf-8 -*-
import io

SPACE = u'''
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
      'The newest listing in this book and the least testable entry in it. SpaceX came to Nasdaq on 12 June 2026, so there is no full year as a public company, no trading history to set a multiple band against, and the share count has risen 41.79% in twelve months. The trailing twelve months show an $8.89B net loss and $32.52B of negative free cash flow on $23.04B of revenue \\u2014 a company consuming capital at enormous scale, funded by a $100.01B cash pile. Everything that makes the model work happens inside the consensus: revenue forecast to rise 139% in 2026 and a further 136% in 2027, with net margin going from 2.7% to 20.6% in the same step. That is Starship and Starlink both scaling on schedule, priced as though they will. EV/EBITDA is 317.8x today. Treat every column past CY2026 as a forecast about a business that does not exist yet, and size the position accordingly.',
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
      'Loss-making at every line \\u2014 net income -$165.46M, EBITDA -$150.52M and free cash flow -$371.14M on $769.15M of trailing revenue \\u2014 while carrying a $38.16B market capitalisation. There is no trailing P/E because there are no earnings; the forward P/E is 2,834x. That combination means the price is not a claim about the current business, it is a claim about Neutron, and Neutron has not yet flown a commercial manifest. The share count rose 15.68% in a year to fund exactly that. This is the same shape as IREN in this book: real revenue, real losses, and every margin past year one a forecast about capacity that does not exist yet. On these assumptions the base case lands below today\\u2019s price \\u2014 the model is saying the expectation is already in the stock.',
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
        b: 'Roughly six years of runway at the current burn, before Neutron\\u2019s ramp costs. The count already grew 15.68% in a year.',
        c: 'Check quarterly free cash flow and capex guidance. The next equity raise \\u2014 its size and its price \\u2014 is what turns a good outcome into a mediocre per-share one.',
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
'''

JPM = u'''
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
      'A balance-sheet bank, so half this page does not apply \\u2014 the same problem SOFI has, at forty times the size. Ignore the EV/EBITDA row entirely: EBITDA is not meaningful for a business whose funding cost is its cost of goods, and the $183.11B "net cash" figure is an artefact of netting $1.53T of cash against $1.34T of debt on a bank balance sheet, not distributable cash. Read the P/E ladder, and read it against book value of $133.01 per share \\u2014 at $354.87 that is 2.67x book, which is the frame that actually governs a bank\\u2019s multiple. Two more omissions: the model prices no dividend, and it cannot see credit costs, which is the line that decides a bank\\u2019s earnings in the year it matters.',
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
        b: 'The line this model cannot see and the one that decides a bank\\u2019s year. Revenue and margin both look fine right up until it moves.',
        c: 'Check provisions, net charge-offs and reserve build against the prior quarter. A reserve release flattering earnings is not the same as earnings.',
      },
      {
        h: 'Net interest income guidance',
        m: 'FY2026E revenue $207.98B, +14.0%',
        b: 'Most of the revenue step is rates and balance growth, and the FY2027 consensus already has it flattening to +2.5%.',
        c: 'Check the NII guide and the deposit beta. The 2027 deceleration in this model is consensus \\u2014 confirm it is still what management expects.',
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
'''

p = 'src/data/watchlist.js'
s = io.open(p, encoding='utf-8').read()
MARK = u'  // ---------------------------------------------------------------- %s'


def before(key, text):
    global s
    m = MARK % key
    assert s.count(m) == 1, (key, s.count(m))
    s = s.replace(m, text.strip(u'\n') + u'\n\n' + m)


before('health', SPACE)
before('infra', JPM)

io.open(p, 'w', encoding='utf-8', newline='').write(s)
print('gen2 ok')
