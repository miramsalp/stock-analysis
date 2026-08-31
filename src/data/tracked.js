/**
 * The ten names this model was originally built around — the ones actually held or
 * watched closely. APP carries the owner's real cost basis and its own sourced watch
 * items; the rest use the market price on the reference date as a placeholder cost.
 *
 * See `./watchlist.js` for the broader coverage set, and README.md for how every
 * field was derived.
 */
export const TRACKED = {

  // FY2025 rev $5.481B · TTM $6.829B · TTM net margin 64.6% · 334.65M shares
  // · price $317.76 · FY2026E rev $8.12B, EPS $16.56 · PT $525.58
  // Left exactly as the owner supplied it — it lines up with consensus.
  APP: {
    name: 'AppLovin',
    sector: 'internet',
    shares: 32,
    cost: 319.46,
    priceRef: 317.76,
    prevRev: 5.4795, // CY2025 base, set so CY2026 lands on $8.00B
    growth: [46, 35, 30, 25, 20],
    niMargin: [62, 63, 64, 65, 65],
    ebMargin: [84, 84, 84, 85, 85],
    sharesOut: [0.335, 0.335, 0.335, 0.335, 0.335],
    peLow: 20,
    peHigh: 35,
    evMult: 20,
    netCash: -0.47,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Ad competition and audience saturation cap the AXON flywheel.',
        rev: 16.0,
        margin: 55,
        pe: 18,
      },
      base: {
        label: 'Base',
        thesis: 'AXON keeps compounding as e-commerce becomes the second engine.',
        rev: 21.06,
        margin: 65,
        pe: 25,
      },
      bull: {
        label: 'Bull',
        thesis: 'Global ad-tech dominance — AppLovin takes share outside gaming.',
        rev: 28.0,
        margin: 68,
        pe: 30,
      },
    },
    sourced: true,
    watch: [
      {
        h: 'Revenue guidance execution',
        m: 'Q3 guide $2.055B – $2.085B (+46% to +48% YoY)',
        b: 'Q2 revenue of $1.924B narrowly missed the guidance midpoint on delayed AXON model deployments.',
        c: 'Verify Q3 revenue meets or beats the $2.07B midpoint — that proves the Q2 top-line miss was timing, not structural saturation.',
      },
      {
        h: 'AXON deep-learning model step-up',
        m: 'Engine upgrade live July 2026',
        b: 'Management said a major AXON engine upgrade went live immediately after Q2 closed.',
        c: 'Confirm higher advertiser return-on-ad-spend and better budget retention from mobile gaming clients after that July deployment.',
      },
      {
        h: 'E-commerce and non-gaming momentum',
        m: 'Non-gaming spend +28% over prior Q4 peak',
        b: 'Non-gaming consumer advertiser spend grew 28% past the previous Q4 peak, making e-commerce the growth engine outside core gaming.',
        c: 'Look for merchant adoption through analytics partnerships (Triple Whale, Shopify) and self-serve onboarding metrics. E-commerce has to carry revenue from ~$8B in 2026 toward $21B+ by 2030.',
      },
      {
        h: 'GenAI creative automation',
        m: '~57% qualified-lead onboarding baseline',
        b: 'Producing good 30–60 second video creative is still the bottleneck keeping mid-market merchants from opening their budgets.',
        c: 'Watch product updates on the AI video generators and SparkLabs tooling. Onboarding conversion improving off the ~57% baseline signals the friction is coming down.',
      },
      {
        h: 'EBITDA margin and cash conversion',
        m: 'Q3 adj. EBITDA $1.71B – $1.74B (~83%)',
        b: 'Q3 adjusted EBITDA guidance implies roughly an 83% margin after higher AI compute and training costs.',
        c: 'Ensure adjusted EBITDA margin holds above 82% despite GPU spend, and that free cash flow normalises toward the ~75%-of-EBITDA full-year target as Q2 tax timing noise clears.',
      },
    ],
  },

  // FY2025 rev $200.97B, NI $60.46B (30.1%) · TTM rev $228.25B, NI $68.10B (29.8%)
  // · TTM EBITDA $109.66B (48.0%) · 2.55B shares · net debt $22.1B · price $578.02
  // · FY2026E rev $254.2B, EPS $31.16 · trailing P/E 21.8 · PT $754.77
  META: {
    name: 'Meta Platforms',
    sector: 'internet',
    shares: 5,
    cost: 578.02,
    priceRef: 578.02,
    prevRev: 200.966,
    growth: [26.5, 18, 15, 13, 11],
    niMargin: [31.3, 31.5, 32, 32.5, 33],
    ebMargin: [48, 48.5, 49, 49.5, 50],
    sharesOut: [2.55, 2.51, 2.47, 2.43, 2.39],
    peLow: 18,
    peHigh: 28,
    evMult: 14,
    netCash: -22.06,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI capex outruns ad growth; Reality Labs losses keep eating the margin.',
        rev: 380,
        margin: 26,
        pe: 15,
      },
      base: {
        label: 'Base',
        thesis: 'Ad ranking gains hold pricing while capex depreciation is absorbed.',
        rev: 432.7,
        margin: 33,
        pe: 23,
      },
      bull: {
        label: 'Bull',
        thesis: 'Business messaging and agentic ads open a genuine second revenue line.',
        rev: 490,
        margin: 36,
        pe: 28,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Impressions versus price per ad',
        m: 'TTM revenue growth +27.7%',
        b: 'Revenue growth is the product of ad impressions delivered and average price per ad — only one of those can compound forever, and growth is currently running well above the long-run path this model assumes.',
        c: 'Check whether price per ad is carrying growth as impression growth decelerates. Pricing-led growth is the healthier signal; volume-led growth on flat pricing is a warning.',
      },
      {
        h: 'Reality Labs operating loss',
        m: 'FY2025 net margin 30.1%, down from 37.9% in 2024',
        b: 'The margin already fell nearly eight points in a year. Reality Labs plus AI infrastructure is where it went.',
        c: 'Confirm the segment loss is flattening rather than widening. This model needs the margin to climb back toward 33% by 2030, and it has been moving the other way.',
      },
      {
        h: 'Capex guidance and the depreciation tail',
        m: 'Net debt $22.1B, up from a net cash position',
        b: 'AI infrastructure spend hits the income statement later as depreciation, and Meta has moved to a net debt position funding it.',
        c: "Take the full-year capex guide and ask what it does to next year's D&A line. Rising capex with an unchanged margin guide is the assumption most likely to break first.",
      },
      {
        h: 'AI ad ranking and automated campaigns',
        m: 'Share of revenue through automated tools',
        b: 'Automated campaign products are the mechanism by which AI spend is supposed to convert into advertiser return.',
        c: 'Look for disclosed advertiser counts and the share of ad revenue running through automated campaign products. Rising share is the proof the capex is earning its keep.',
      },
      {
        h: 'Business messaging and newer surfaces',
        m: 'From “ramping” to a disclosed number',
        b: 'Threads and paid messaging are the credible sources of revenue that is not the core feed.',
        c: 'Watch for the moment management puts an actual revenue figure on these instead of describing them as early. That disclosure is what a bull case needs.',
      },
    ],
  },

  // FY2025 rev $402.8B, NI $132.2B (32.8%) · TTM rev $445.9B · TTM EBITDA $173.2B
  // · 12.23B shares · net cash $121.7B · price $346.59 · FY2026E rev $497.9B
  // · FY2026E EPS $20.59 but FY2027E EPS $14.81 — 2026 carries a one-off gain
  GOOGL: {
    name: 'Alphabet',
    sector: 'internet',
    shares: 20,
    cost: 346.59,
    priceRef: 346.59,
    prevRev: 402.8,
    growth: [23.6, 16, 14, 12, 11],
    // Deliberately normalised. Consensus FY2026 EPS of $20.59 falls to $14.81 in
    // FY2027, so the 2026 GAAP number is not a margin this business actually runs at.
    niMargin: [31, 31, 32, 32.5, 33],
    ebMargin: [39, 40, 41, 41.5, 42],
    sharesOut: [12.23, 12.05, 11.87, 11.7, 11.53],
    peLow: 18,
    peHigh: 28,
    evMult: 20,
    netCash: 121.68,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI answers cannibalise search clicks; an antitrust remedy bites.',
        rev: 700,
        margin: 27,
        pe: 15,
      },
      base: {
        label: 'Base',
        thesis: 'Search monetises at parity while Cloud compounds into real margin.',
        rev: 818.5,
        margin: 33,
        pe: 23,
      },
      bull: {
        label: 'Bull',
        thesis: 'Gemini distribution plus Cloud turns Alphabet into the default AI utility.',
        rev: 900,
        margin: 36,
        pe: 28,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Search growth against AI answers',
        m: 'FY2026E revenue $497.9B, +23.6%',
        b: 'The whole model rests on AI-generated answers monetising at least as well as the blue links they replace.',
        c: 'Check search revenue growth stays in double digits and that management still claims monetisation parity for AI surfaces. A single quarter of high-single-digit search growth invalidates the base case.',
      },
      {
        h: 'The 2026 earnings distortion',
        m: 'FY2026E EPS $20.59 → FY2027E EPS $14.81',
        b: 'Consensus EPS falls 28% next year. That is a one-off gain washing out of the 2026 GAAP number, not the business shrinking.',
        c: 'Read 2026 GAAP net income with the one-off stripped out before comparing it with the 31% margin used here. Do not anchor an exit multiple on the inflated figure.',
      },
      {
        h: 'Cloud growth and operating margin',
        m: 'Backlog plus segment margin, together',
        b: 'Cloud is the segment that has to lift the blended net margin toward 33% by 2030.',
        c: 'Read growth and segment operating margin as a pair, alongside committed backlog. Growth bought with margin is not the same result.',
      },
      {
        h: 'Capex against depreciation',
        m: 'Net cash $121.7B — the buffer funding it',
        b: 'Data centre spend converts into a depreciation charge that lands on the income statement a year or two later.',
        c: 'Check whether the capex guide leaves room for the margin path this model assumes, and how fast the net cash pile is being drawn down to pay for it.',
      },
      {
        h: 'Antitrust remedies',
        m: 'What is actually ordered, not proposed',
        b: 'Remedies touching ad-tech structure or default search placement affect both revenue and the multiple the market will pay.',
        c: 'Track what is actually ordered and its compliance date, then decide whether the exit multiple in the bear case is still generous enough.',
      },
    ],
  },

  // FY2025 rev $11.70B with a NET LOSS of $443M · TTM rev $15.32B, NI $551M (3.6%)
  // · TTM EBITDA $658M · 308.33M shares · net cash ~$3.59B (mkt cap $9.39B less EV
  // $5.80B) · price $30.47 · FY2026E rev $18.74B (+60.2%), EPS $1.75 · FY2027E EPS
  // $1.88 · trailing P/E 16.0 · PT $30.40 (essentially at the money)
  OSCR: {
    name: 'Oscar Health',
    sector: 'health',
    shares: 100,
    cost: 30.47,
    priceRef: 30.47,
    prevRev: 11.701,
    growth: [60.2, 18, 14, 11, 9],
    niMargin: [2.9, 3.0, 3.3, 3.6, 3.8],
    ebMargin: [4.3, 4.5, 4.8, 5.0, 5.2],
    sharesOut: [0.315, 0.322, 0.328, 0.334, 0.34],
    peLow: 10,
    peHigh: 20,
    evMult: 9,
    netCash: 3.59,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Subsidies lapse, membership shrinks and the loss ratio returns to 2025 levels.',
        rev: 26,
        margin: 1.5,
        pe: 9,
      },
      base: {
        label: 'Base',
        thesis: 'Membership growth slows to normal while underwriting margin holds near 4%.',
        rev: 30.5,
        margin: 3.8,
        pe: 15,
      },
      bull: {
        label: 'Bull',
        thesis: 'Underwriting discipline sticks and the +Oscar platform earns a software multiple.',
        rev: 34,
        margin: 5.5,
        pe: 20,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Medical loss ratio',
        m: 'FY2025 lost $443M; TTM margin only 3.6%',
        b: 'MLR is the share of premium paid out in claims. Oscar lost money as recently as full-year 2025 and only turned a 3.6% margin over the trailing year — this is a thin-margin business by construction.',
        c: 'Check MLR against the guided range. Roughly every point of MLR is a point of net margin, so a two-point miss erases the base case and puts the company back in a loss.',
      },
      {
        h: 'Membership and the subsidy question',
        m: 'FY2026E revenue $18.74B, +60%',
        b: 'That 60% growth rate is a membership surge, not pricing. Almost all revenue is ACA marketplace premium, and enrollment is highly sensitive to how generous the subsidies are.',
        c: 'Check effectuated membership after open enrollment and what happened to enhanced subsidies. Growth decelerating from 60% to the high teens is the single biggest assumption in this model.',
      },
      {
        h: 'Operating leverage on SG&A',
        m: 'SG&A as a share of revenue',
        b: 'The margin ramp assumes fixed costs are spread across a bigger book, not that claims get cheaper.',
        c: 'Check SG&A as a percentage of revenue keeps falling as membership grows. Flat SG&A ratio with rising membership means the leverage is not arriving.',
      },
      {
        h: 'Risk adjustment true-up',
        m: 'The annual CMS transfer',
        b: 'The risk-adjustment transfer settles once a year and can move by hundreds of millions against a margin this thin.',
        c: 'Check the direction and size of the accrual. A large unfavourable true-up can wipe out a full year of modelled net income on its own — that is roughly what happened in 2025.',
      },
      {
        h: '+Oscar platform revenue',
        m: 'Analyst price target $30.40, at the money',
        b: 'The market currently prices Oscar as an insurer with no premium. Selling the technology stack to other payers is the only part that would justify a software multiple.',
        c: 'Watch for platform revenue becoming a disclosed line with named contracts. Without it, the exit P/E belongs at the insurer end of the band.',
      },
    ],
  },

  // FY2026 (Jan-end) rev $8.195B, NI $2.67B · TTM (Aug'26) rev $9.45B, NI $2.64B
  // (27.9%, flattered by a divestiture gain) · TTM EBITDA $2.85B · 876.93M shares
  // · net debt $1.03B · price $216.62 · trailing P/E 72.8 · next-FY consensus rev
  // $11.56B (+41.1%), EPS $4.05 non-GAAP · PT $278.89
  MRVL: {
    name: 'Marvell Technology',
    sector: 'semis',
    shares: 40,
    cost: 216.62,
    priceRef: 216.62,
    prevRev: 8.195,
    growth: [41.1, 25, 20, 16, 13],
    // GAAP, deliberately below the non-GAAP consensus: Marvell carries heavy
    // acquisition amortisation and stock compensation between the two.
    niMargin: [16, 20, 23, 25, 26],
    ebMargin: [31, 34, 36, 37, 38],
    sharesOut: [0.877, 0.87, 0.862, 0.855, 0.848],
    peLow: 25,
    peHigh: 45,
    evMult: 25,
    netCash: -1.03,
    caveat:
      "Marvell's fiscal year ends in late January, so its reported years run roughly one month ahead of the calendar columns here. The CY2026 column is built from the next-fiscal-year consensus of $11.56B revenue. Note also that trailing net margin is flattered by a divestiture gain, and that consensus EPS of $4.05 is non-GAAP — the margins below are GAAP, which is why they look lower than the headline.",
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'A custom silicon socket is lost and the non-data-centre portfolio stays cyclical.',
        rev: 17,
        margin: 18,
        pe: 22,
      },
      base: {
        label: 'Base',
        thesis: 'Data centre becomes most of the business and GAAP margin catches up with non-GAAP.',
        rev: 22.73,
        margin: 26,
        pe: 35,
      },
      bull: {
        label: 'Bull',
        thesis: 'Custom XPU and optics programmes ramp together at premium margin.',
        rev: 28,
        margin: 30,
        pe: 45,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Data centre share of revenue',
        m: 'Next-FY consensus revenue $11.56B, +41%',
        b: 'A 41% consensus growth rate is a data centre story. The rest of the portfolio — carrier, enterprise networking, automotive — is cyclical and roughly flat.',
        c: 'Check data centre revenue as a share of total keeps rising. If total growth is being carried by a cyclical recovery instead, it will not compound.',
      },
      {
        h: 'What you are paying for it',
        m: 'Trailing P/E 72.8 at $216.62',
        b: 'The stock already discounts several years of the growth in this model. The base case here returns very little because the entry multiple is high, not because the business is bad.',
        c: 'Decide whether 25x–45x is the right 2030 band. That assumption moves the answer far more than any revenue line does.',
      },
      {
        h: 'Custom silicon programme ramps',
        m: 'Named programmes reaching volume production',
        b: 'Custom accelerator and networking sockets are won years ahead and recognised in a burst when they ramp.',
        c: 'Check start-of-production timing on named programmes, and listen for any hint of a socket lost at re-design. One lost programme is the bear case.',
      },
      {
        h: 'The GAAP-to-non-GAAP gap',
        m: 'Consensus EPS $4.05 is non-GAAP',
        b: 'This model uses GAAP net margin. Marvell has historically carried a large gap to non-GAAP from acquisition amortisation and stock compensation, and posted GAAP losses as recently as FY2025.',
        c: 'Check the gap narrows as acquisition amortisation rolls off. If it does not, the 26% GAAP margin here is out of reach whatever the non-GAAP number says.',
      },
      {
        h: 'Customer inventory behaviour',
        m: 'Channel inventory commentary',
        b: 'Semiconductor demand is easy to over-read when customers are building safety stock.',
        c: 'Listen for lead-time normalisation and any double-ordering unwinding. That is what turns a growth year into a digestion year.',
      },
    ],
  },

  // FY2026 (Jun-end) rev $707M with a NET LOSS of $702.6M on $4.33B of capex
  // · TTM EBITDA only $34.7M · 394.06M shares · cash $6.08B, debt $7.84B → net debt
  // $1.76B · price $35.45 · next-FY consensus rev $2.87B (+306%), EPS -$1.00
  // · PT $78.19
  IREN: {
    name: 'IREN',
    sector: 'infra',
    shares: 100,
    cost: 35.45,
    priceRef: 35.45,
    prevRev: 0.707,
    growth: [305.9, 60, 40, 28, 20],
    // Year one is a loss, matching the -$1.00 consensus EPS. Profitability here is a
    // forecast about contracted AI compute, not something the company has yet shown.
    niMargin: [-14, 8, 18, 24, 27],
    ebMargin: [30, 42, 50, 54, 56],
    sharesOut: [0.4, 0.42, 0.44, 0.455, 0.47],
    peLow: 15,
    peHigh: 35,
    evMult: 12,
    netCash: -1.76,
    caveat:
      "IREN's fiscal year ends in June, so these calendar columns are approximate — the CY2026 column is built from the next-fiscal-year consensus of $2.87B. Two things to keep in front of you: the company lost $702.6M last year on $4.33B of capex, and trailing EBITDA was $34.7M, so every margin below year one is a forecast about a business that does not exist yet. The share count row is doing real work — this buildout has been funded partly with equity.",
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI contracts stay small, bitcoin margin compresses and the buildout dilutes holders.',
        rev: 5.5,
        margin: 8,
        pe: 10,
      },
      base: {
        label: 'Base',
        thesis: 'Contracted AI compute becomes the majority of revenue at data-centre economics.',
        rev: 9.87,
        margin: 27,
        pe: 25,
      },
      bull: {
        label: 'Bull',
        thesis: 'Powered capacity is the scarce asset and IREN prices it like a hyperscaler landlord.',
        rev: 14,
        margin: 32,
        pe: 35,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Contracted AI compute versus mining',
        m: 'Next-FY consensus revenue $2.87B, +306%',
        b: 'A megawatt sold on a multi-year AI contract is worth a different multiple from a megawatt pointed at bitcoin, and a 306% consensus growth rate assumes the contracts land.',
        c: 'Check signed contract value, counterparty and term length. The revenue mix shifting to contracted compute is the entire re-rating argument.',
      },
      {
        h: 'The gap between revenue and profit',
        m: 'Last FY: $707M revenue, -$702.6M net loss',
        b: 'Revenue and losses were almost the same size last year. Depreciation on $4.33B of capex is what stands between growth and earnings.',
        c: 'Check the depreciation line as capacity energises, and whether EBITDA — $34.7M trailing — actually scales with revenue. This is the assumption most likely to be wrong.',
      },
      {
        h: 'Energised capacity against schedule',
        m: 'MW energised versus the announced plan',
        b: 'Revenue is a direct function of powered, energised capacity — not of announced capacity.',
        c: 'Check MW actually energised against the schedule, plus grid interconnection dates. Slippage here moves every year of the model to the right.',
      },
      {
        h: 'Funding and share count',
        m: 'Net debt $1.76B; 394M shares and rising',
        b: 'Building data centres is capital intensive, and the cheapest capital for a company like this has often been its own equity.',
        c: 'Check share count against the dilution path in the drivers table. Capacity funded by dilution faster than revenue grows does not reach per-share earnings.',
      },
      {
        h: 'Bitcoin and hashprice exposure',
        m: 'Share of revenue still tied to hashprice',
        b: 'Whatever capacity is still mining earns network hashprice, which is outside management control.',
        c: 'Check how much revenue still moves with bitcoin. The bear case is mostly a statement about this number staying high.',
      },
    ],
  },

  // FY2025 rev $2.348B, NI $128.4M (5.5%) · TTM rev $2.578B but NI -$142.0M and
  // EBITDA -$10.2M — the trailing year swung to a loss · 233.31M shares
  // · cash $841M, debt $1.55B → net debt $0.71B · price $28.84, down 34% over 52
  // weeks · FY2026E rev $3.20B, EPS $0.54 · PT $31.23
  HIMS: {
    name: 'Hims & Hers Health',
    sector: 'health',
    shares: 60,
    cost: 28.84,
    priceRef: 28.84,
    prevRev: 2.348,
    growth: [36.3, 20, 16, 13, 11],
    // Year one matches the $0.54 consensus EPS. Note the trailing twelve months were
    // a net loss, so even that first year is a recovery, not a continuation.
    niMargin: [4.0, 6.0, 8.0, 9.0, 10.0],
    ebMargin: [8, 11, 13, 14, 15],
    sharesOut: [0.235, 0.239, 0.243, 0.247, 0.251],
    peLow: 15,
    peHigh: 30,
    evMult: 12,
    netCash: -0.71,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'The weight-loss category is regulated away and losses persist.',
        rev: 4.2,
        margin: 4,
        pe: 12,
      },
      base: {
        label: 'Base',
        thesis: 'Subscribers compound across several categories and margin recovers on scale.',
        rev: 5.58,
        margin: 10,
        pe: 22,
      },
      bull: {
        label: 'Bull',
        thesis: 'A durable multi-category platform with pricing power and falling marketing intensity.',
        rev: 7.0,
        margin: 13,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Back to profit at all',
        m: 'TTM net income -$142.0M, EBITDA -$10.2M',
        b: 'The company earned $128M in FY2025 and then lost $142M over the trailing twelve months. Year one of this model assumes a swing back to a 4% margin.',
        c: 'Check what drove the loss — one-off charges, or structurally higher cost of revenue. If it is the latter, every margin below is too high.',
      },
      {
        h: 'GLP-1 offering and compounding rules',
        m: 'Regulatory status of compounded semaglutide',
        b: 'Personalised compounded weight-loss medication drove the step-change in growth and sits on contested regulatory ground. The stock is down 34% over 52 weeks largely on this.',
        c: 'Check what remains legally sellable and on what terms. This is the single largest binary in the whole model.',
      },
      {
        h: 'Subscribers and revenue per subscriber',
        m: 'FY2026E revenue $3.20B, +36%',
        b: 'Growth is the product of subscriber count and revenue per subscriber, and it is possible to buy one at the expense of the other.',
        c: 'Check both rise together. Subscriber growth on falling revenue per subscriber means discounting, not demand.',
      },
      {
        h: 'Marketing intensity',
        m: 'Marketing spend as a share of revenue',
        b: 'Subscriber growth funded by ever more marketing is not the same asset as growth from retention and referral.',
        c: 'Check marketing as a percentage of revenue trends down while subscribers still grow. That ratio is the operating leverage the margin ramp depends on.',
      },
      {
        h: 'Category concentration',
        m: 'Revenue split by category',
        b: 'A single dominant category makes the whole company a bet on that category surviving.',
        c: 'Check revenue by category and whether anything outside weight loss is scaling. Diversification is what earns the top of the P/E band.',
      },
    ],
  },

  // FY2025 rev $3.583B, NI $481.3M (13.4%), EPS $0.39 · TTM rev $4.268B, NI $636.3M
  // (14.9%), EPS $0.47 · 1.29B shares · cash $3.37B, debt $3.42B · price $18.06
  // · trailing P/E 38.0 · FY2026E rev $4.89B (+36.4%), EPS $0.60 · PT $20.02
  SOFI: {
    name: 'SoFi Technologies',
    sector: 'finance',
    shares: 200,
    cost: 18.06,
    priceRef: 18.06,
    prevRev: 3.583,
    growth: [36.5, 22, 18, 15, 13],
    niMargin: [16, 17, 18, 19, 20],
    ebMargin: [26, 28, 30, 31, 32],
    sharesOut: [1.31, 1.34, 1.36, 1.38, 1.4],
    peLow: 15,
    peHigh: 30,
    evMult: 12,
    netCash: -0.05,
    caveat:
      'SoFi is a lender with a bank charter, so the EV/EBITDA block is the weakest part of this page for it — EBITDA is not a meaningful measure for a balance-sheet business and data providers do not report one. Read the P/E ladder and ignore the cross-check, or replace the EBITDA margins with your own adjusted-EBITDA view. Tangible book value per share is the number a bank is really judged on, and this model does not compute it.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Credit normalises worse than modelled and lending stays the whole business.',
        rev: 7.5,
        margin: 12,
        pe: 12,
      },
      base: {
        label: 'Base',
        thesis: 'Fee-based revenue keeps taking share of the mix while credit behaves.',
        rev: 9.15,
        margin: 20,
        pe: 22,
      },
      bull: {
        label: 'Bull',
        thesis: 'The platform and fee businesses dominate and SoFi is priced as fintech, not a lender.',
        rev: 11,
        margin: 24,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Fee-based revenue share',
        m: 'FY2026E revenue $4.89B, +36%',
        b: 'Capital-light fee revenue is the entire argument for a fintech multiple rather than a bank multiple, and 36% growth is not something a balance-sheet lender sustains.',
        c: 'Check fee-based revenue keeps taking share of the mix. If it stalls, the exit P/E belongs near the bear case, whatever revenue does.',
      },
      {
        h: 'Credit performance',
        m: 'Annualised net charge-off rate',
        b: 'Personal loans are unsecured. Credit is the risk that turns a growth story into a loss year, as it did in 2023.',
        c: 'Check charge-offs and delinquency stay inside the guided band, and watch the vintage curves rather than the blended number.',
      },
      {
        h: 'Net interest margin and deposit costs',
        m: 'NIM plus cost of deposits',
        b: 'Cheap member deposits funding higher-yielding loans is where most current profit comes from.',
        c: 'Check NIM holds as rates move and what is being paid for deposits. A compressing spread hits the net margin directly.',
      },
      {
        h: 'Dilution against earnings',
        m: '1.29B shares and rising; EPS $0.47 TTM',
        b: 'A lender that grows earnings while issuing shares can leave each holder no better off. The share count row here rises to 1.40B by 2030.',
        c: 'Check share count and tangible book value per share quarter over quarter. If dilution runs faster than the path in the drivers table, lower the 2030 EPS accordingly.',
      },
      {
        h: 'Loan platform volume',
        m: 'Originations sold versus held on balance sheet',
        b: 'Originating loans for other buyers earns a fee without consuming capital, which is what makes the growth rate sustainable.',
        c: 'Check platform origination volume and the fee earned on it. A shift back to holding loans means growth is capital-constrained again.',
      },
    ],
  },

  // FY2025 rev $2.780B, NI $124.7M (4.5%), EPS $1.51 · TTM rev $3.219B, NI $199.3M
  // (6.2%), EPS $2.40 · TTM EBITDA only $165.1M · 81.24M shares · cash $692.5M,
  // debt $1.85B → net debt $1.16B · price $600.73 · trailing P/E 249.8
  // · FY2026E rev $3.71B, EPS $7.71 non-GAAP · PT $693.40
  AXON: {
    name: 'Axon Enterprise',
    sector: 'software',
    shares: 6,
    cost: 600.73,
    priceRef: 600.73,
    prevRev: 2.78,
    growth: [33.5, 25, 21, 18, 16],
    // GAAP. Reported net margin was 4.5% in FY2025 and 6.2% trailing, well under the
    // 16.9% implied by the non-GAAP consensus EPS — the gap is mostly stock compensation.
    niMargin: [7, 10, 13, 15, 17],
    ebMargin: [20, 22, 24, 25, 26],
    sharesOut: [0.0815, 0.0825, 0.0835, 0.0845, 0.0855],
    peLow: 40,
    peHigh: 70,
    evMult: 35,
    netCash: -1.16,
    caveat:
      'Axon trades at roughly 250x trailing earnings, so the entry multiple — not the growth rate — decides the outcome here. Reported GAAP net margin is 4.5–6%, far below the ~17% implied by the non-GAAP consensus EPS of $7.71; the margins below are GAAP and ramp toward 17% by 2030, which is itself an assumption. Trailing EBITDA of $165M against a $50B enterprise value means the EV/EBITDA cross-check is close to meaningless until margin actually arrives.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Agency budgets tighten, growth normalises and the multiple compresses hard.',
        rev: 6.2,
        margin: 10,
        pe: 25,
      },
      base: {
        label: 'Base',
        thesis: 'Software attach keeps rising and the recurring base compounds at a premium multiple.',
        rev: 7.68,
        margin: 17,
        pe: 55,
      },
      bull: {
        label: 'Bull',
        thesis: 'AI plans reprice the installed base and international opens a second TAM.',
        rev: 9.2,
        margin: 20,
        pe: 70,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'What the multiple already assumes',
        m: 'Trailing P/E 249.8 at $600.73',
        b: 'Even the base case here returns single-digit annualised, because 250x trailing earnings prices in most of a decade of growth.',
        c: 'Decide what 2030 multiple you actually believe. Moving the exit P/E from 55x to 35x matters more than any revenue assumption on this page.',
      },
      {
        h: 'ARR and net revenue retention',
        m: 'FY2026E revenue $3.71B, +33.5%',
        b: 'The premium multiple rests on recurring software revenue that expands inside existing agencies.',
        c: 'Check NRR stays above about 120%. Everything in the exit multiple here is a bet on that number holding.',
      },
      {
        h: 'GAAP margin actually arriving',
        m: 'FY2025 GAAP margin 4.5%; consensus EPS is non-GAAP',
        b: 'Reported GAAP profitability fell in 2025 even as revenue grew 33%, mostly on stock compensation.',
        c: 'Check GAAP net margin trends toward the path in the drivers table. If it stays near 5%, the 2030 EPS here is roughly three times too high.',
      },
      {
        h: 'Future contracted revenue',
        m: 'Total contracted but unrecognised revenue',
        b: 'Agencies sign multi-year bundles, so backlog leads reported revenue by years.',
        c: 'Check backlog grows faster than revenue. If backlog growth rolls over, the revenue line follows it a year or two later.',
      },
      {
        h: 'AI plan attach rate',
        m: 'AI bundle adoption among existing agencies',
        b: 'Selling a higher-priced tier into the installed base is the cheapest growth available and the next pricing lever.',
        c: 'Check attach rate and pricing on the AI tiers. This is what would justify the bull case exit multiple rather than just the base.',
      },
    ],
  },

  // FY2025 rev $477.2M · TTM rev $498.4M · TTM net income -$31.37B (bitcoin marks)
  // · 384.23M shares · market cap $48.92B · total debt $6.77B · price $127.31, down
  // 62.8% over 52 weeks · holds 840,447 BTC (~4% of supply) at a $75,385 average
  // cost, worth roughly $66B in late Aug 2026; senior claims including preferreds
  // are reported at roughly $22B
  MSTR: {
    name: 'Strategy',
    sector: 'infra',
    shares: 10,
    cost: 127.31,
    priceRef: 127.31,
    prevRev: 0.477,
    growth: [4, 4, 5, 5, 5],
    niMargin: [5, 8, 10, 12, 14],
    ebMargin: [12, 15, 17, 19, 20],
    sharesOut: [0.384, 0.42, 0.46, 0.5, 0.54],
    peLow: 20,
    peHigh: 40,
    evMult: 20,
    // Bitcoin treasury (~$66B) less senior claims including preferreds (~$22B).
    netCash: 44,
    // Kept out of the cross-company ranking on purpose. The scenario targets here run
    // through the same P/E ladder as everything else, and that ladder is noise for a
    // bitcoin treasury — ranking on it would place Strategy last for a reason that has
    // nothing to do with the asset anyone owns it for.
    rankable: false,
    rankReason: 'the P/E ladder does not value a bitcoin treasury — read net asset value per share instead',
    caveat:
      'A multiple on software earnings does not value Strategy, and reported net income is meaningless here — the trailing twelve months show a $31.4B loss purely from bitcoin marks running through the income statement. What matters: 840,447 BTC (about 4% of all bitcoin) at a $75,385 average cost, worth roughly $66B, against roughly $22B of senior claims once preferreds are counted. Net cash below is set to that difference, which makes the EV/EBITDA "Implied price per share" row read as approximate net asset value per share. Today that is about $115 against a $127 market price — an 11% premium. The share count row is the real story: it rises from 384M to 540M here, so if bitcoin does not appreciate, NAV per share falls even though the bitcoin pile does not. Treat the P/E ladder as noise.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Bitcoin falls, the NAV premium closes and issuance stops funding accumulation.',
        rev: 0.5,
        margin: 5,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'Accumulation outpaces dilution and the premium to net asset value persists.',
        rev: 0.6,
        margin: 14,
        pe: 30,
      },
      bull: {
        label: 'Bull',
        thesis: 'Bitcoin re-rates and Strategy compounds bitcoin per share through cheap capital.',
        rev: 0.65,
        margin: 18,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Bitcoin held per share',
        m: '840,447 BTC ÷ 384.23M shares ≈ 0.00219 BTC',
        b: 'This is the only per-share number that matters. Everything else is financing mechanics around it.',
        c: 'Check bitcoin per share rose this quarter. Strategy made no purchases through much of August 2026 while still selling stock — that combination dilutes you.',
      },
      {
        h: 'Premium to net asset value',
        m: '~$66B BTC less ~$22B senior claims ≈ $115/share',
        b: 'Buying at a premium to NAV means paying more than a dollar for a dollar of bitcoin, on the belief the premium persists. At $127.31 the premium is about 11%.',
        c: 'Recompute NAV per share at the current bitcoin price and share count, then compare. That gap, not earnings, is your entry risk.',
      },
      {
        h: 'Average cost against spot',
        m: 'Average purchase price $75,385 per BTC',
        b: 'The treasury was accumulated at an average well below recent levels, which is what keeps the balance sheet solvent through a drawdown.',
        c: 'Check where spot sits against that $75,385 average. The distance between them is the cushion before the debt becomes the problem.',
      },
      {
        h: 'Issuance and senior claims',
        m: '~$22B of claims ahead of common; $6.77B is debt',
        b: 'Preferred instruments carry a coupon that must be serviced whatever bitcoin does, and they sit ahead of common stock.',
        c: 'Check what was issued this quarter, at what price and what coupon. Selling equity above NAV is accretive; below NAV it is not.',
      },
      {
        h: 'Fair-value accounting swings',
        m: 'TTM net income -$31.4B on $498M of revenue',
        b: 'Under fair-value rules the bitcoin mark runs straight through the income statement, so reported net income tracks bitcoin, not the business.',
        c: 'Separate the operating result from the mark before reading any earnings number. A record profit quarter here can mean nothing changed operationally.',
      },
    ],
  },
}
