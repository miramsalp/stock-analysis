export const YEARS = [2026, 2027, 2028, 2029, 2030]
export const SCEN_KEYS = ['bear', 'base', 'bull']

/**
 * One entry per company.
 *
 * The numeric fields are the editable model. The copy — `name`, each scenario's
 * `thesis`, and the `watch` items — is source-of-truth text that is never persisted,
 * so editing this file updates every saved model instead of leaving stale wording
 * behind in someone's localStorage.
 *
 * APP's figures and watch items come from the owner's own reading of the Q2 CY2026
 * release. META and GOOGL ship with modelled defaults, flagged by `sourced: false`.
 */
export const DEFAULTS = {
  APP: {
    name: 'AppLovin',
    cssvar: '--tick-app',
    shares: 32,
    cost: 319.46,
    prevRev: 5.4795, // CY2025 base, set so CY2026 lands on $8.00B
    growth: [46, 35, 30, 25, 20],
    niMargin: [62, 63, 64, 65, 65],
    ebMargin: [84, 84, 84, 85, 85],
    sharesOut: [0.335, 0.335, 0.335, 0.335, 0.335],
    peLow: 20,
    peHigh: 35,
    evMult: 20,
    netCash: 0,
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

  META: {
    name: 'Meta Platforms',
    cssvar: '--tick-meta',
    shares: 5,
    cost: 655.0,
    prevRev: 194.0,
    growth: [16, 14, 12, 11, 10],
    niMargin: [34, 35, 36, 36.5, 37],
    ebMargin: [52, 53, 53, 54, 54],
    sharesOut: [2.53, 2.5, 2.47, 2.44, 2.41],
    peLow: 20,
    peHigh: 30,
    evMult: 13,
    netCash: 20,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI capex outruns ad growth; Reality Labs losses keep eating the margin.',
        rev: 300,
        margin: 30,
        pe: 16,
      },
      base: {
        label: 'Base',
        thesis: 'Ad ranking gains hold pricing while capex depreciation is absorbed.',
        rev: 350.8,
        margin: 37,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Business messaging and agentic ads open a genuine second revenue line.',
        rev: 400,
        margin: 40,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Impressions versus price per ad',
        m: 'The growth split, not just the headline',
        b: 'Revenue growth is the product of ad impressions delivered and average price per ad — only one of those can compound forever.',
        c: 'Check whether price per ad is carrying growth as impression growth decelerates. Pricing-led growth is the healthier signal; volume-led growth on flat pricing is a warning.',
      },
      {
        h: 'Reality Labs operating loss',
        m: 'Direction of the annual loss',
        b: 'Reality Labs is the largest deliberate drag between operating income and the net margin this model assumes.',
        c: 'Confirm the loss is flattening rather than widening, and look for commentary on capping or re-scoping the spend. The margin ramp to 37% depends on it.',
      },
      {
        h: 'Capex guidance and the depreciation tail',
        m: 'Full-year capex, then next-year D&A',
        b: 'AI infrastructure spend hits the income statement later as depreciation, one to two years after the cash goes out.',
        c: "Take the full-year capex guide and ask what it does to next year's D&A line. Rising capex against an unchanged margin guide is the assumption most likely to break first.",
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

  GOOGL: {
    name: 'Alphabet',
    cssvar: '--tick-googl',
    shares: 20,
    cost: 252.0,
    prevRev: 390.4,
    growth: [14, 13, 12, 11, 10],
    niMargin: [30, 31, 32, 32.5, 33],
    ebMargin: [40, 41, 42, 42, 43],
    sharesOut: [11.9, 11.7, 11.5, 11.3, 11.1],
    peLow: 20,
    peHigh: 28,
    evMult: 12,
    netCash: 80,
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI answers cannibalise search clicks; an antitrust remedy bites.',
        rev: 580,
        margin: 26,
        pe: 15,
      },
      base: {
        label: 'Base',
        thesis: 'Search monetises at parity while Cloud compounds into real margin.',
        rev: 687.7,
        margin: 33,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Gemini distribution plus Cloud turns Alphabet into the default AI utility.',
        rev: 780,
        margin: 36,
        pe: 28,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Search growth against AI answers',
        m: 'Search revenue growth staying double-digit',
        b: 'The whole model rests on AI-generated answers monetising at least as well as the blue links they replace.',
        c: 'Check that search revenue growth stays in double digits and that management still claims monetisation parity for AI surfaces. A single quarter of high-single-digit search growth invalidates the base case.',
      },
      {
        h: 'Cloud growth and operating margin',
        m: 'Backlog plus segment margin, together',
        b: 'Cloud is the segment that has to lift the blended net margin toward 33% by 2030.',
        c: 'Read growth and segment operating margin as a pair, alongside committed backlog. Growth bought with margin is not the same result.',
      },
      {
        h: 'Capex against depreciation',
        m: 'Full-year capex, then next-year D&A',
        b: 'Data centre spend converts into a depreciation charge that lands on the income statement a year or two later.',
        c: 'Check whether the capex guide leaves room for the margin path this model assumes. This is the assumption most likely to be wrong first.',
      },
      {
        h: 'Antitrust remedies',
        m: 'What is actually ordered, not proposed',
        b: 'Remedies touching ad-tech structure or default search placement affect both revenue and the multiple the market will pay.',
        c: 'Track what is actually ordered and its compliance date, then decide whether the exit multiple in the bear case is still generous enough.',
      },
      {
        h: 'YouTube and subscription ARPU',
        m: 'Subscriptions as a share of the mix',
        b: 'Subscriptions are the least cyclical revenue line and the strongest argument for a higher multiple.',
        c: 'Watch subscription revenue as a share of the total and the direction of YouTube ad pricing. A rising non-advertising mix is what justifies the top of the P/E band.',
      },
    ],
  },
}

export const TICKERS = Object.keys(DEFAULTS)
