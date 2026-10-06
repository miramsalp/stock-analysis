/**
 * The ten names this model was originally built around — the ones actually held or
 * watched closely. APP carries the owner's real cost basis and its own sourced watch
 * items; the rest use the market price on the reference date as a placeholder cost.
 *
 * See `./watchlist.js` for the broader coverage set, and README.md for how every
 * field was derived.
 */
export const TRACKED = {

  // FY2025 rev $5.48B · TTM rev $6.83B, NI $4.41B (64.58%) · TTM EBITDA $5.41B
  // (79.29%) · 334.65M shares (-1.81% YoY) · cash $3.05B, debt $3.52B → net debt
  // $461.77M · price $281.97, down 58.70% over 52 weeks · trailing P/E 21.68,
  // forward 15.67 · FY2026E rev $8.10B (+47.77%), EPS $16.67 · PT $497.05
  // Drivers left exactly as the owner supplied them. They land CY2026 on $8.00B
  // against the $8.10B consensus — a 1.2% gap, kept rather than quietly overwritten.
  APP: {
    name: 'AppLovin',
    sector: 'internet',
    shares: 1,
    cost: 319.46,
    priceRef: 281.97,
    prevRev: 5.4795, // CY2025 base, set so CY2026 lands on $8.00B
    growth: [46, 35, 30, 25, 20],
    niMargin: [62, 63, 64, 65, 65],
    ebMargin: [84, 84, 84, 85, 85],
    sharesOut: [0.335, 0.335, 0.335, 0.335, 0.335],
    peLow: 20,
    peHigh: 35,
    evMult: 20,
    netCash: -0.46,
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

  // FY2025 rev $200.97B, NI $60.46B (30.1%) · TTM rev $228.25B, NI $68.10B (29.84%)
  // · TTM EBITDA $109.66B (48.04%) · 2.55B shares (-1.08% YoY) · cash $90.26B, debt
  // $112.32B → net debt $22.06B · price $741.90 · trailing P/E 27.96, forward 23.07
  // · FY2026E rev $254.16B (+26.47%), EPS $30.79 · PT $793.91
  META: {
    name: 'Meta Platforms',
    sector: 'internet',
    shares: 1,
    cost: 741.9,
    priceRef: 741.9,
    prevRev: 200.966,
    growth: [26.47, 18, 15, 13, 11],
    niMargin: [30.9, 31.5, 32, 32.5, 33],
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

  // FY2025 rev $402.84B, GAAP EPS $10.80 · TTM rev $445.87B, NI $244.12B (54.77%)
  // · TTM EBITDA $173.16B (38.84%) · 12.23B shares (-0.56% YoY) · cash $242.47B,
  // debt $120.79B → net cash $121.68B · price $346.47 · FY2026E rev $498.63B
  // (+23.78%), EPS $11.81 · PT $429.36
  // A 54.77% trailing net margin, and a forward P/E (25.80) ABOVE the trailing one
  // (17.38), are the same fact stated twice: the trailing year carries a one-off gain
  // that washes out. FY2026 consensus EPS was $20.60 on 10 September and is $11.81
  // now — the estimate itself no longer carries the gain, which is why year one
  // below now matches it rather than sitting under it.
  GOOGL: {
    name: 'Alphabet',
    sector: 'internet',
    shares: 1,
    cost: 346.47,
    priceRef: 346.47,
    prevRev: 402.84,
    growth: [23.78, 16, 14, 12, 11],
    // Year one lands on the $11.81 consensus (11.81 × 12.23 / 498.63 = 29%). Neither
    // the 54.77% trailing GAAP margin nor the $20.60 consensus quoted in September is
    // a margin this business runs at — both carried the one-off gain. Later years are
    // judgement and were left as they were.
    niMargin: [29, 31, 32, 32.5, 33],
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
        rev: 818.9,
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
        m: 'FY2026E revenue $498.63B, +23.78%',
        b: 'The whole model rests on AI-generated answers monetising at least as well as the blue links they replace.',
        c: 'Check search revenue growth stays in double digits and that management still claims monetisation parity for AI surfaces. A single quarter of high-single-digit search growth invalidates the base case.',
      },
      {
        h: 'The 2026 earnings distortion',
        m: 'Trailing P/E 17.38, forward P/E 25.80',
        b: 'A forward multiple above the trailing one usually means earnings are expected to fall, but consensus estimates are not falling — FY2027 EPS is shown about 28% above FY2026. The step down is a one-off gain in the trailing GAAP number washing out, not the business shrinking — and the 54.77% trailing net margin is the same artefact seen from the other side.',
        c: 'Read 2026 GAAP net income with the one-off stripped out before comparing it with the 29% year-one margin used here. Do not anchor an exit multiple on the inflated figure.',
      },
      {
        h: 'Cloud growth and operating margin',
        m: 'Backlog plus segment margin, together',
        b: 'Cloud is the segment that has to lift the blended net margin toward 33% by 2030.',
        c: 'Read growth and segment operating margin as a pair, alongside committed backlog. Growth bought with margin is not the same result.',
      },
      {
        h: 'Capex against depreciation',
        m: 'Net cash $121.68B — the buffer funding it',
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

  // FY2025 rev $11.70B with a NET LOSS of $443M · TTM rev $15.32B, NI $550.74M
  // (3.60%) · TTM EBITDA $657.96M · 308.33M shares (+17.37% YoY) · net cash ~$3.59B
  // (mkt cap $10.00B less EV $6.40B) · price $32.42 · trailing P/E 16.99, forward
  // 18.58 · FY2026E rev $18.73B (+60.08%), EPS $1.91 — up from $1.75 on 10 September
  // · PT $35.40 — now 9.2% ABOVE the market price, where in September it sat 6.7% below
  OSCR: {
    name: 'Oscar Health',
    sector: 'health',
    shares: 1,
    cost: 32.42,
    priceRef: 32.42,
    prevRev: 11.701,
    growth: [60.08, 18, 14, 11, 9],
    niMargin: [3.2, 3.3, 3.4, 3.6, 3.8],
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
        m: 'FY2025 lost $443M; TTM margin only 3.60%',
        b: 'MLR is the share of premium paid out in claims. Oscar lost money as recently as full-year 2025 and only turned a 3.6% margin over the trailing year — this is a thin-margin business by construction.',
        c: 'Check MLR against the guided range. Roughly every point of MLR is a point of net margin, so a two-point miss erases the base case and puts the company back in a loss.',
      },
      {
        h: 'Membership and the subsidy question',
        m: 'FY2026E revenue $18.73B, +60%',
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
        m: 'Analyst price target $35.40, 9.2% above the price',
        b: 'Analysts see only modest room above the quote — the target sits 9.2% higher, after spending September below it. Selling the technology stack to other payers is the only part that would justify a software multiple.',
        c: 'Watch for platform revenue becoming a disclosed line with named contracts. Without it, the exit P/E belongs at the insurer end of the band.',
      },
    ],
  },

  // FY2026 (Jan-end) rev $8.19B · TTM (Sep'26) rev $9.45B, NI $2.64B (27.93%,
  // flattered by a divestiture gain) · TTM EBITDA $2.85B (30.16%) · 876.93M shares
  // (+2.56% YoY) · cash $3.93B, debt $5.29B → net debt $1.35B · price $271.25, up
  // 214.60% over 52 weeks · trailing P/E 91.13, forward 49.71 · next-FY consensus
  // rev $12.05B (+47.05%), EPS $4.21 non-GAAP · PT $290.97
  MRVL: {
    name: 'Marvell Technology',
    sector: 'semis',
    shares: 1,
    cost: 271.25,
    priceRef: 271.25,
    prevRev: 8.195,
    growth: [47.05, 25, 20, 16, 13],
    // GAAP, deliberately below the non-GAAP consensus: Marvell carries heavy
    // acquisition amortisation and stock compensation between the two.
    niMargin: [16, 20, 23, 25, 26],
    ebMargin: [31, 34, 36, 37, 38],
    sharesOut: [0.877, 0.87, 0.862, 0.855, 0.848],
    peLow: 25,
    peHigh: 50,
    evMult: 25,
    netCash: -1.35,
    caveat:
      "Marvell's fiscal year ends in late January, so its reported years run roughly one month ahead of the calendar columns here. The CY2026 column is built from the next-fiscal-year consensus of $12.05B revenue, raised from $11.56B in late August. Note also that the 27.93% trailing net margin is flattered by a divestiture gain, and that consensus EPS of $4.21 is non-GAAP — the margins below are GAAP, which is why they look lower than the headline. The stock is up 214.60% over 52 weeks to 91x trailing earnings, so the exit multiple decides this one, not the revenue line.",
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
        rev: 23.69,
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
        m: 'Next-FY consensus revenue $12.05B, +47%',
        b: 'A 47% consensus growth rate is a data centre story, and it was 41% in late August. The rest of the portfolio — carrier, enterprise networking, automotive — is cyclical and roughly flat.',
        c: 'Check data centre revenue as a share of total keeps rising. If total growth is being carried by a cyclical recovery instead, it will not compound.',
      },
      {
        h: 'What you are paying for it',
        m: 'Trailing P/E 91.1 at $271.25',
        b: 'The stock already discounts several years of the growth in this model. The base case here returns very little because the entry multiple is high, not because the business is bad.',
        c: 'Decide whether 25x–50x is the right 2030 band. That assumption moves the answer far more than any revenue line does.',
      },
      {
        h: 'Custom silicon programme ramps',
        m: 'Named programmes reaching volume production',
        b: 'Custom accelerator and networking sockets are won years ahead and recognised in a burst when they ramp.',
        c: 'Check start-of-production timing on named programmes, and listen for any hint of a socket lost at re-design. One lost programme is the bear case.',
      },
      {
        h: 'The GAAP-to-non-GAAP gap',
        m: 'Consensus EPS $4.21 is non-GAAP',
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

  // FY2026 (Jun-end) rev $707.01M with a NET LOSS of $702.62M · TTM EBITDA only
  // $38.35M (5.42%) · TTM FCF -$2.23B · 394.06M shares (+41.60% YoY) · cash $5.90B,
  // debt $7.84B → net debt $1.94B · price $40.48 · EV/EBITDA 466.67 · Altman Z-score
  // 0.98 · next-FY consensus rev $2.80B (+296.31%), EPS -$3.42 on an unverified
  // basis · PT $77.69
  IREN: {
    name: 'IREN',
    sector: 'infra',
    shares: 1,
    cost: 40.48,
    priceRef: 40.48,
    prevRev: 0.707,
    growth: [296.31, 60, 40, 28, 20],
    // Year one is a loss. The free page now shows a next-fiscal-year consensus EPS of
    // -$3.42, but its basis cannot be pinned down: the same table puts FY2026 at -$0.47
    // against -$2.22 of reported GAAP EPS. So this -14% stays judgement anchored on the
    // -$2.22 trailing GAAP figure rather than consensus. Profitability here is a
    // forecast about contracted AI compute, not something the company has yet shown.
    niMargin: [-14, 8, 18, 24, 27],
    ebMargin: [30, 42, 50, 54, 56],
    sharesOut: [0.4, 0.42, 0.44, 0.455, 0.47],
    peLow: 15,
    peHigh: 35,
    evMult: 12,
    netCash: -1.94,
    caveat:
      "IREN's fiscal year ends in June, so these calendar columns are approximate — the CY2026 column is built from the next-fiscal-year consensus of $2.80B. Three things to keep in front of you. The company lost $702.62M last year and trailing EBITDA is $38.35M on $707.01M of revenue, so every margin below year one is a forecast about a business that does not exist yet. Free cash flow is -$2.23B and the share count rose 41.60% in twelve months, which is how the buildout is being paid for. And the Altman Z-score is 0.98, in the range that flags real bankruptcy risk — worth holding next to the 92% upside in the analyst target.",
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
        rev: 9.7,
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
        m: 'Next-FY consensus revenue $2.80B, +296%',
        b: 'A megawatt sold on a multi-year AI contract is worth a different multiple from a megawatt pointed at bitcoin, and a 296% consensus growth rate assumes the contracts land.',
        c: 'Check signed contract value, counterparty and term length. The revenue mix shifting to contracted compute is the entire re-rating argument.',
      },
      {
        h: 'The gap between revenue and profit',
        m: 'Last FY: $707.01M revenue, -$702.62M net loss',
        b: 'Revenue and losses were almost the same size last year. Depreciation on the buildout is what stands between growth and earnings.',
        c: 'Check the depreciation line as capacity energises, and whether EBITDA — $38.35M trailing — actually scales with revenue. This is the assumption most likely to be wrong.',
      },
      {
        h: 'Energised capacity against schedule',
        m: 'MW energised versus the announced plan',
        b: 'Revenue is a direct function of powered, energised capacity — not of announced capacity.',
        c: 'Check MW actually energised against the schedule, plus grid interconnection dates. Slippage here moves every year of the model to the right.',
      },
      {
        h: 'Funding and share count',
        m: 'Net debt $1.94B; 394M shares, +41.6% in a year',
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

  // FY2025 rev $2.35B, NI $128.4M (5.5%) · TTM rev $2.58B but NI -$142.03M (-5.51%)
  // and EBITDA -$10.18M — the trailing year swung to a loss · FCF still +$83.03M
  // · 233.31M shares (-7.33% YoY) · cash $841.05M, debt $1.55B → net debt $705.19M
  // · Altman Z-score 1.98 · price $29.67 · no trailing P/E, forward 86.02
  // · FY2026E rev $3.21B (+36.65%), EPS $0.28 — $0.54 on 29 August, $0.29 on
  // 10 September · PT $31.15
  HIMS: {
    name: 'Hims & Hers Health',
    sector: 'health',
    shares: 1,
    cost: 29.67,
    priceRef: 29.67,
    prevRev: 2.348,
    growth: [36.65, 20, 16, 13, 11],
    // Year one matches the $0.28 consensus EPS — down from $0.54 at the end of August,
    // and adjusted at that. The trailing twelve months were a GAAP net loss, so even
    // this much thinner first year is a recovery, not a continuation.
    niMargin: [2.1, 5.0, 7.5, 9.0, 10.0],
    ebMargin: [8, 11, 13, 14, 15],
    sharesOut: [0.235, 0.239, 0.243, 0.247, 0.251],
    peLow: 15,
    peHigh: 30,
    evMult: 12,
    netCash: -0.705,
    caveat:
      'The consensus moved further in six weeks than anything else in this book: FY2026 EPS was cut from $0.54 to $0.29 between 29 August and 10 September 2026, and to $0.28 by 6 October, and year one of the driver table below has been halved with it. Read the rest in that light. The trailing twelve months are a GAAP net loss of $142.03M with EBITDA of -$10.18M, so the model needs a swing back to profit before any of the later years mean anything; free cash flow is still positive at $83.03M, which is the strongest fact on the page. There is no trailing P/E because there are no trailing earnings, and the Altman Z-score of 1.98 sits in the range that flags real financial stress against $1.55B of debt.',
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
        rev: 5.6,
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
        m: 'TTM net income -$142.03M, EBITDA -$10.18M',
        b: 'The company earned $128M in FY2025 and then lost $142M over the trailing twelve months. Year one of this model assumes a swing back to a 2.1% margin — and consensus has roughly halved its estimate of that swing since late August.',
        c: 'Check what drove the loss — one-off charges, or structurally higher cost of revenue. If it is the latter, every margin below is too high.',
      },
      {
        h: 'GLP-1 offering and compounding rules',
        m: 'Regulatory status of compounded semaglutide',
        b: 'Personalised compounded weight-loss medication drove the step-change in growth and sits on contested regulatory ground. The stock is down 44% over 52 weeks largely on this.',
        c: 'Check what remains legally sellable and on what terms. This is the single largest binary in the whole model.',
      },
      {
        h: 'Subscribers and revenue per subscriber',
        m: 'FY2026E revenue $3.21B, +36.7%',
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

  // FY2025 rev $3.58B, NI $481.3M (13.4%), EPS $0.39 · TTM rev $4.27B, NI $636.26M
  // (14.91%), EPS $0.47 · 1.29B shares (+14.49% YoY) · cash $3.37B, debt $3.42B →
  // net debt $48.88M · price $15.92 · trailing P/E 33.52, forward 21.88
  // · FY2026E rev $4.88B (+36.22%), EPS $0.59 · PT $20.35
  SOFI: {
    name: 'SoFi Technologies',
    sector: 'finance',
    shares: 1,
    cost: 15.92,
    priceRef: 15.92,
    prevRev: 3.583,
    growth: [36.22, 22, 18, 15, 13],
    niMargin: [16, 17, 18, 19, 20],
    ebMargin: [26, 28, 30, 31, 32],
    sharesOut: [1.31, 1.34, 1.36, 1.38, 1.4],
    peLow: 15,
    peHigh: 30,
    evMult: 12,
    netCash: -0.0489,
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
        m: 'FY2026E revenue $4.88B, +36.2%',
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

  // FY2025 rev $2.78B, NI $124.7M (4.5%), EPS $1.51 · TTM rev $3.22B, NI $199.30M
  // (6.19%), EPS $2.40 · TTM EBITDA only $165.11M (5.13%) · 81.24M shares (+2.43%
  // YoY) · cash $692.53M, debt $1.85B → net debt $1.16B · EV $34.61B · price $411.81,
  // down from $478.85 on 10 September and $600.73 in late August · trailing P/E
  // 171.27, forward 45.96 · FY2026E rev $3.70B (+33.29%), EPS $7.65 non-GAAP
  // · PT $704.11
  AXON: {
    name: 'Axon Enterprise',
    sector: 'software',
    shares: 1,
    cost: 411.81,
    priceRef: 411.81,
    prevRev: 2.78,
    growth: [33.29, 25, 21, 18, 16],
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
      'Axon trades at roughly 170x trailing earnings, so the entry multiple — not the growth rate — decides the outcome here. Reported GAAP net margin is 4.5–6%, far below the ~17% implied by the non-GAAP consensus EPS of $7.65; the margins below are GAAP and ramp toward 17% by 2030, which is itself an assumption. Trailing EBITDA of $165.11M against a $34.61B enterprise value means the EV/EBITDA cross-check is close to meaningless until margin actually arrives. The stock fell about 20% in the fortnight to 10 September 2026 and a further 14% by 6 October without the consensus estimates moving much, which is what a multiple-driven name looks like from the inside.',
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
        m: 'Trailing P/E 171.3 at $411.81',
        b: 'Even after a 31% fall since late August, 171x trailing earnings prices in most of a decade of growth.',
        c: 'Decide what 2030 multiple you actually believe. Moving the exit P/E from 55x to 35x matters more than any revenue assumption on this page.',
      },
      {
        h: 'ARR and net revenue retention',
        m: 'FY2026E revenue $3.70B, +33.3%',
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

  // FY2025 rev $477.23M · TTM rev $498.35M · TTM net income -$31.37B (bitcoin marks)
  // · 384.23M shares (+24.59% YoY) · market cap $63.18B · total debt $6.77B · price
  // $164.43 · FY2026E rev $501.70M (+5.13%), EPS -$17.44 · PT $229.87 · holds 848,000
  // BTC (~4% of supply) at a blended cost of about $75,441, worth roughly $72.6B at the
  // $85,575 bitcoin price on 6 October 2026; senior claims including preferreds are
  // reported at roughly $22B, a figure carried forward from the August pull
  MSTR: {
    name: 'Strategy',
    sector: 'infra',
    shares: 1,
    cost: 164.43,
    priceRef: 164.43,
    prevRev: 0.477,
    growth: [5.13, 4, 5, 5, 5],
    niMargin: [5, 8, 10, 12, 14],
    ebMargin: [12, 15, 17, 19, 20],
    sharesOut: [0.384, 0.42, 0.46, 0.5, 0.54],
    peLow: 20,
    peHigh: 40,
    evMult: 20,
    // Bitcoin treasury (~$72.6B) less senior claims including preferreds (~$22B).
    netCash: 50.6,
    // Kept out of the cross-company ranking on purpose. The scenario targets here run
    // through the same P/E ladder as everything else, and that ladder is noise for a
    // bitcoin treasury — ranking on it would place Strategy last for a reason that has
    // nothing to do with the asset anyone owns it for.
    rankable: false,
    rankReason: 'the P/E ladder does not value a bitcoin treasury — read net asset value per share instead',
    caveat:
      'A multiple on software earnings does not value Strategy, and reported net income is meaningless here — the trailing twelve months show a $31.4B loss purely from bitcoin marks running through the income statement. What matters: 848,000 BTC (about 4% of all bitcoin) at a blended cost of roughly $75,441, worth about $72.6B at the $85,575 bitcoin price on 6 October 2026, against roughly $22B of senior claims once preferreds are counted. That last figure is carried forward from the August pull and is the softest number here. Net cash below is set to the difference, which makes the EV/EBITDA "Implied price per share" row read as approximate net asset value per share — about $135 against a $164.43 market price, a premium of roughly 22%. Two things have moved since September. Spot is now about 13% above the treasury’s own average cost, up from about 2% on 10 September, so the cushion has rebuilt on the bitcoin price alone — and can thin again the same way. And the share count row is still the real story: it rises from 384M to 540M here, so if bitcoin does not appreciate, NAV per share falls even though the bitcoin pile does not. Treat the P/E ladder as noise.',
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
        m: '848,000 BTC ÷ 384.23M shares ≈ 0.00221 BTC',
        b: 'This is the only per-share number that matters. Everything else is financing mechanics around it.',
        c: 'Check bitcoin per share rose this quarter. Strategy made no purchases through much of August 2026 while still selling stock — that combination dilutes you.',
      },
      {
        h: 'Premium to net asset value',
        m: '~$72.6B BTC less ~$22B senior claims ≈ $132/share',
        b: 'Buying at a premium to NAV means paying more than a dollar for a dollar of bitcoin, on the belief the premium persists. At $164.43 the premium is about 25% on NAV, and it has widened since 10 September as the stock rose faster than bitcoin.',
        c: 'Recompute NAV per share at the current bitcoin price and share count, then compare. That gap, not earnings, is your entry risk.',
      },
      {
        h: 'Average cost against spot',
        m: 'Blended cost ~$75,441 vs $85,575 spot',
        b: 'The cushion that keeps the balance sheet solvent through a drawdown is the gap between spot and the blended purchase price, and it is now about 13%, up from about 2% on 10 September. The most recent tranche — 334 BTC for roughly $28.7M — was bought at $85,839, above spot.',
        c: 'Check where spot sits against that blended average after every purchase. Buying above spot raises the average and thins the cushion at the same time.',
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
