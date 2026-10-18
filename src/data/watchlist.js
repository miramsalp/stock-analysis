/**
 * Broader coverage set — added to give the model something to compare the tracked
 * names against, not because anyone is recommending them. Each one is here because
 * it sits next to something already in the book: AVGO against MRVL, LLY against HIMS,
 * UNH against OSCR, V against SOFI, NOW against AXON's multiple, CEG against IREN,
 * ORCL against MSFT on the same AI-capex question, UBER against SHOP as the other
 * take-rate marketplace, and CHA against COST at the opposite end of consumer scale.
 *
 * Every figure below is from the 2026-10-18 pull of stockanalysis.com (S&P Global
 * consensus), with prices at the 16 October 2026 close. That replaces the 6 October
 * pull (prices at the 5 October close), which itself replaced the 10–11 September and
 * 28–29 August pulls this file was first built from. Each entry now carries
 * `pricePrev`, the 5 October close it held before this pull, and a short `news` list
 * of items from roughly 1 September onward that touch one of its drivers. Only four of
 * the 42 — TSM, ASML, UNH and JPM — reported a quarter between the two pulls; for the
 * rest the trailing figures are unchanged and only prices, consensus and targets moved.
 * Where a consensus estimate moved, the entry comment says from what to what. Most
 * FY2027 estimates that went behind a paywall in September are public again in the
 * forecast summary boxes; entries that had carried an August figure forward now use
 * the re-sourced one, and entries whose year two was judgement note the gap instead.
 *
 * Built the same way as `./tracked.js`:
 *
 *   prevRev     backed out of the consensus estimate and its stated growth rate,
 *               or trailing-twelve-month revenue where no growth rate was published
 *   growth[0]   set so CY2026 lands on the consensus revenue estimate
 *   niMargin[0] set so year one lands near the consensus EPS — on a GAAP basis, which
 *               is why several sit well below the headline non-GAAP number
 *   sharesOut   actual current share count, then a dilution or buyback path
 *   netCash     total cash less total debt; JPM, MU and SNOW carry the source's
 *               figure instead, and each entry says why
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
 * When they were added, the paywall meant none of the ten could source an FY2027
 * consensus figure, so for those entries every year after the first is modelled
 * judgement rather than a carried-forward estimate. The 18 October pull shows those
 * estimates again; each entry's comment records where its year two differs. SNOW is the exception: its 31 January fiscal year puts a
 * still-public estimate over CY2026, and year one uses the column the source labels
 * FY2027, not FY2026. MU is offset too, ending in August, and is now the second
 * exception: it reported FY2026 on 30 September, so year one is that actual, and its
 * FY2027 consensus was public again on 6 October, so year two is consensus as well.
 *
 * Two of them qualify the netCash rule above. For MU and SNOW the source's own net
 * cash exceeds total cash less total debt, because it counts long-term investments;
 * both carry the source figure, since that is what the market-cap-less-EV bridge
 * agrees with and netCash feeds exactly that bridge. The entry comments record all
 * three numbers so a re-pull stays a diff.
 *
 * GRAB was added on 17 September 2026, against UBER as the other take-rate mobility and
 * delivery marketplace and against SHOP for the take-rate shape generally. Its first
 * figures came from a 17 September pull, a week after the rest of the book; since the
 * 6 October refresh it sits on the same date as every other entry.
 *
 * BULL was added the same day, against HOOD and SOFI as a third retail broker and a much
 * smaller one. It is the only entry here that listed through a de-SPAC, which is why its
 * share count is up 147.11% in a year and why FY2024 and FY2025 both show nine-figure
 * GAAP net losses against positive operating income. Its consensus EPS is adjusted and
 * the gap is large enough that niMargin[0] is anchored on the trailing GAAP margin
 * instead — the same treatment CHA gets above. It too was first pulled on 17 September
 * and has sat on the same date as the rest since 6 October.
 */
export const WATCHLIST = {
  // ---------------------------------------------------------------- consumer
  // Price $250.00 at the 16 October close (5 October: $251.40, -0.6%) · cap $2.70T · EV
  // $2.83T · 10.79B shares (+0.88% YoY). No quarter reported since the 6 October pull, so
  // the trailing figures are unchanged. TTM rev $775.68B · TTM EBITDA $168.91B (21.78%) ·
  // TTM NI $135.28B (17.44%) · FCF -$11.63B on $173.03B of capex · cash $122.99B, debt
  // $251.64B → net debt $128.65B · P/E 20.10 trailing (was 20.22), 26.58 forward (was
  // 26.80) · EV/EBITDA 16.73 · FY2026E rev $828.56B (+15.57%; was $828.29B, +15.53%), EPS
  // $8.31 unchanged — BELOW GAAP: H1 2026 alone reported $8.53 ($2.78 + $5.75), most of it
  // investment gains the estimate excludes. Year one stays on the GAAP run-rate. · FY2027E
  // is public again: rev $949.30B (+14.57%, against 13% modelled for year two), EPS $10.45
  // · PT $331.46 (was $330.59), 60 analysts · Q3 reports 29 October.
  AMZN: {
    name: 'Amazon',
    sector: 'consumer',
    shares: 1,
    cost: 250,
    priceRef: 250,
    pricePrev: 251.4,
    prevRev: 716.92,
    growth: [15.57, 13, 12, 11, 10],
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
        m: 'FY2026E revenue $828.56B, +15.6%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'regulatory', h: 'Amazon threatens to close NYC last-mile warehouses and cut thousands of jobs if Delivery Protection Act passes', s: 'New York Post (republished by DNYUZ)', u: 'https://dnyuz.com/?p=302839', why: 'Bill would force Amazon to directly employ ~5,000 NYC delivery workers now at contractors; if it passes and spreads it raises cost-to-serve, a downside risk to the retail margin path (no vote scheduled yet).' },
      { d: '2026-10-16', k: 'analyst', h: 'ARK trims Amazon as article recaps Q2: revenue +20% to $200.6B, AWS +37% to $42.2B, ~$220B 2026 capex plan', s: 'TipRanks', u: 'https://www.tipranks.com/news/rocket-lab-or-amazon-cathie-wood-buys-9-3m-of-one-stock-sells-7-7m-of-the-other', why: 'Restates the ~$220B capex plan against $168.91B TTM EBITDA — keeps FCF negative and depreciation rising, pressure on the margin ramp in 2027-28.' },
      { d: '2026-10-15', k: 'product', h: 'Amazon returns to wearables with $75 Bee Frontier, $100 Bee Eclipse and a $12/month Bee Pro tier', s: 'TipRanks', u: 'https://www.tipranks.com/news/amazon-amzn-returns-to-wearables-market-with-75-bee-frontier-wristband-100-eclipse-recorder-and-12-software-tier', why: 'Small new subscription line; immaterial to growth near term, so no driver change — noted mainly as a consumer-AI option and a privacy/regulatory exposure.' },
      { d: '2026-10-15', k: 'macro', h: 'NRF forecasts Nov–Dec 2026 holiday sales of $1.013T, up 4.2% year over year', s: 'TipRanks', u: 'https://www.tipranks.com/news/retail-stocks-amzn-wmt-cost-set-for-holiday-windfall-despite-pressure-on-shoppers', why: 'Steady but unspectacular holiday backdrop supports the retail half of the 15.57% FY2026 growth estimate rather than raising it.' },
      { d: '2026-09-17', k: 'deal', h: 'Generac signs up-to-$8B data-center backup-generator supply deal with Amazon; Amazon gets warrant on ~1.69M Generac…', s: 'Pulse 2.0 (citing Generac regulatory filing)', u: 'https://pulse2.com/generac-signs-long-term-amazon-data-center-generator-agreement-with-up-to-8-billion-in-payments/', why: 'Multi-year commitment ($2.4B of deliveries in 2027-28) confirms the AWS capex build continues past 2026 — supports AWS growth but extends the capex/depreciation tail.' },
    ],
  },

  // Price $343.46 (5 October: $332.89, +3.2%) · cap $5.01T · EV $4.95T · 14.59B shares
  // (-2.13% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $466.82B · TTM EBITDA $167.96B (35.98%) · TTM NI $128.93B (27.62%) ·
  // FCF $136.68B · cash $146.52B, debt $84.34B → net cash $62.17B · P/E 39.40 trailing (was
  // 38.19), 37.34 forward · EV/EBITDA 29.47 · FY2026E (Sep-end, closed but not yet
  // reported) rev $478.22B (+14.91%; was $477.85B, +14.82%), EPS $8.83 unchanged · FY2027E
  // rev $528.11B (+10.43%, against 8% modelled for year two), EPS $9.58 · PT $329.38 (was
  // $328.09) — now 4.1% BELOW the market price (was 1.4%) · FY2026 results 2 November.
  AAPL: {
    name: 'Apple',
    sector: 'consumer',
    shares: 1,
    cost: 343.46,
    priceRef: 343.46,
    pricePrev: 332.89,
    prevRev: 416.16,
    growth: [14.91, 8, 7, 6, 6],
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
        m: 'FY2026E revenue $478.22B, +14.9%',
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
        m: 'Price target $329.38 — 4.1% below the market price',
        b: 'The consensus target sits about 4% below the price, which says the market has moved ahead of the analysts rather than the analysts pricing a new cycle.',
        c: 'Check whether on-device AI features actually shorten the replacement cycle. The bull case here needs a hardware refresh, not a software update.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'product', h: 'Apple calls iPhone Duo pre-order demand \'nothing short of extraordinary\'; shipping slips to late January', s: 'TheFly (Bloomberg report)', u: 'https://www.tipranks.com/news/the-fly/apple-iphone-duo-demand-nothing-short-of-extraordinary-bloomberg-reports-thefly-news', why: 'A $1,999 foldable lifts iPhone ASP and is the first evidence for the bull case\'s hardware refresh; supportive of FY2027 growth (consensus +10.43%), though supply-limited.' },
      { d: '2026-10-16', k: 'product', h: 'iPhone Duo sells out in minutes at $1,999; Counterpoint sees ~6M units in 2026 (~$12B)', s: 'TipRanks', u: 'https://www.tipranks.com/news/apple-stock-aapl-rises-as-iphone-duo-sells-out-in-minutes-deliveries-pushed-to-january', why: '~$12B is ~2.5% of FY2026 revenue — material to the FY2027 growth step-up but not a new cycle by itself; yield problems (~60% reportedly) cap the upside.' },
      { d: '2026-10-16', k: 'analyst', h: 'UBS keeps Hold, $296 PT: Evidence Lab shows iPhone 18 Pro wait times shorter year over year after price rises', s: 'TipRanks', u: 'https://www.tipranks.com/news/apple-stock-aapl-why-ubs-is-worried-about-possible-weaker-iphone-demand', why: 'Counter-signal on core iPhone units after price increases — risk to volume-driven growth and evidence the multiple (39x trailing) is ahead of fundamentals.' },
      { d: '2026-10-16', k: 'analyst', h: 'Evercore ISI (Outperform, $380) sees iPhone Duo ~100-day lead times as positive but flags supply limits', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/iphone-duo-lead-times-positive-for-apple-says-evercore-isi-thefly-news', why: 'Bullish read on mix/ASP; same caveat that lead times may reflect supply, not demand — keep growth near consensus.' },
      { d: '2026-10-16', k: 'regulatory', h: 'UK CMA to propose iPhone changes letting users choose tap-to-pay alternatives to Apple Pay, FT says', s: 'TheFly (FT report)', u: 'https://www.tipranks.com/news/the-fly/uk-competition-watchdog-seeks-changes-to-apple-tap-to-pay-feature-ft-says-thefly-news', why: 'Another regulator testing a high-margin services fee stream — small negative risk to the services-led net-margin path (consultation stage only).' },
      { d: '2026-10-15', k: 'product', h: 'Apple and Meta collaborate to run Meta\'s 816B-parameter Muse Spark Open model locally on Mac Studio', s: 'PYMNTS', u: 'https://www.pymnts.com/news/artificial-intelligence/2026/apple-meta-team-up-to-put-big-ai-on-desktops/', why: 'No disclosed financial terms; a modest Mac-demand and on-device-AI narrative positive, no driver change.' },
    ],
  },

  // Price $169.52 (5 October: $160.11, +5.9%; it closed -4.84% on 16 October after $178.14
  // the day before) · cap $218.11B · EV $212.82B · 1.29B shares (-0.74% YoY). No quarter
  // reported since the 6 October pull, so the trailing figures are unchanged. TTM rev
  // $13.27B · TTM EBITDA $2.40B (18.05%) · TTM NI $1.93B (14.53%) · FCF $2.35B · cash
  // $4.95B, debt $178.00M → net cash $4.77B (the statistics page now prints $5.29B, which
  // probably counts investments; this entry stays on cash less debt) · P/E 114.42 trailing
  // (was 108.07), 80.82 forward · EV/EBITDA 88.86 · FY2026E rev $15.25B (+31.97%; was
  // $15.24B), EPS $1.91 unchanged, basis not stated on the page · FY2027E rev $19.21B
  // (+25.95%, against 24% modelled), EPS $2.46 · PT $175.71 (was $172.77), 54 analysts · Q3
  // reports 3 November.
  SHOP: {
    name: 'Shopify',
    sector: 'consumer',
    shares: 1,
    cost: 169.52,
    priceRef: 169.52,
    pricePrev: 160.11,
    prevRev: 11.56,
    growth: [31.92, 24, 20, 17, 15],
    niMargin: [14.5, 16, 18, 19, 20],
    ebMargin: [18, 20, 22, 23, 24],
    sharesOut: [1.29, 1.3, 1.31, 1.32, 1.33],
    peLow: 35,
    peHigh: 65,
    evMult: 30,
    netCash: 4.77,
    caveat:
      'Shopify trades at roughly 114x trailing earnings — up from 85x on 10 September and 108x on 6 October, on a share price that keeps rising while the estimates barely move — so the exit multiple decides most of the outcome here. Note also that revenue is largely a take rate on merchant sales, which makes it a leveraged bet on e-commerce volume: the same volume AppLovin is trying to sell advertising against, and the same take-rate shape as UBER further down this file.',
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
        m: 'FY2026E revenue $15.25B, +32.0%',
        b: 'Revenue is roughly volume times take rate. Only one of those two is under management control.',
        c: 'Check GMV growth and take rate separately. Revenue growth driven by take rate increases has a ceiling; volume growth does not.',
      },
      {
        h: 'What 114x already assumes',
        m: 'Trailing P/E 114.4 at $169.52',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'RBC raises Shopify PT to $200 from $180; third-party data point to Q3 beat, price increase adds ~110bp to growth', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/shopify-price-target-raised-to-200-from-180-at-rbc-capital-thefly-news', why: 'Points to upside on the growth line (subscription price rise ~+1.1pt annualised) into the Nov 3 print.' },
      { d: '2026-10-14', k: 'analyst', h: 'Jefferies (Buy, $175) expects another strong quarter on third-party GMV data; wants clarity on Muse relationship', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/shopify-to-report-another-strong-quarter-says-jefferies-thefly-news', why: 'GMV tracking ahead supports holding growth[0] at consensus 31.97% with upside risk.' },
      { d: '2026-10-01', k: 'product', h: 'Shopify launches Canvas, letting merchants build and edit stores by chatting with its Sidekick AI agent', s: 'TechCrunch', u: 'https://techcrunch.com/2026/10/01/shopify-debuts-canvas-a-way-to-build-online-stores-by-chatting-with-ai/', why: 'Lowers merchant setup cost — supports merchant formation and so GMV growth; no pricing disclosed.' },
      { d: '2026-09-28', k: 'product', h: 'Shopify opens checkout, including Shop Pay, to browser-based AI agents via WebMCP for all eligible merchants', s: 'TechCrunch', u: 'https://techcrunch.com/2026/09/28/shopify-opens-checkout-to-browser-based-ai-agents/', why: 'Positions Shopify as the agentic-commerce rail (Amazon blocks agents) — supports GMV and payments take rate, but merchant-solutions revenue carries lower margin.' },
      { d: '2026-09-21', k: 'deal', h: 'Shopify partners with Meta to enable agentic Shop Pay checkout on all Shopify stores inside Muse', s: 'PYMNTS', u: 'https://www.pymnts.com/commerce/ecommerce/2026/shopify-brings-shop-pay-checkout-solution-to-metas-muse-ai-agent/', why: 'New demand channel for GMV; terms undisclosed — the stock re-rated on it (multiple, not earnings), which raises the exit-multiple risk the caveat describes.' },
    ],
  },

  // Price $989.11 (5 October: $923.52, +7.1%), up 3.57% over 52 weeks · cap $438.30B · EV
  // $427.18B · 443.13M shares (-0.09% YoY) · FY2026 (ended 30 August 2026) REPORTED: rev
  // $303.15B (+10.14%), NI $9.23B (3.04%), diluted EPS $20.76 · No new quarter, but the
  // balance sheet moved, most likely on the 10-K filed around 7 October (not verified):
  // total debt $8.58B → $10.18B, so cash $21.30B less debt gives net cash $11.12B (was
  // $12.73B); TTM EBITDA $14.36B → $14.19B (4.68%); FCF $9.38B · P/E 47.64 trailing (was
  // 44.49), 43.35 forward · EV/EBITDA 30.12 · FY2027E rev $329.41B (+8.66%; was $328.50B,
  // +8.36%), EPS $22.82 (was $22.79) · FY2028E now public: $353.44B (+7.30%), EPS $25.02 ·
  // PT $1,066 (was $1,058) · September sales (7 October): net sales $30.02B, +13%;
  // comparable sales ex-gas and FX +7.6%.
  // prevRev stays on FY2025: the CY2026 column is FY2026, which overlaps eight months of
  // the calendar year, so year one is an actual rather than an estimate, and year two is
  // the FY2027 consensus.
  COST: {
    name: 'Costco',
    sector: 'consumer',
    shares: 1,
    cost: 989.11,
    priceRef: 989.11,
    pricePrev: 923.52,
    prevRev: 275.24,
    growth: [10.14, 8.66, 7.5, 7, 7],
    niMargin: [3.04, 3.07, 3.2, 3.3, 3.4],
    ebMargin: [4.7, 4.8, 4.9, 5.0, 5.1],
    sharesOut: [0.4431, 0.443, 0.4425, 0.442, 0.4415],
    peLow: 30,
    peHigh: 50,
    evMult: 25,
    netCash: 11.12,
    caveat:
      'Costco earns a ~3% net margin and trades at ~48x earnings, which is unusual enough to be the whole thesis: the market is paying for membership fee durability and inventory turns, not for margin. Small changes to the exit multiple swamp anything the revenue line does. It is in this book as the low-beta anchor against a lot of high-multiple growth — and it is up just 3.57% over 52 weeks, so the anchor has at least held still. Its fiscal year ended 30 August 2026, so the CY2026 column is built from a year already reported rather than forecast.',
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
        rev: 405.42,
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
        m: 'P/E 47.6 on a 3.04% net margin',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'analyst', h: 'Tigress Financial raises Costco PT to $1,250 from $1,065, citing membership growth and Executive penetration', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/costco-price-target-raised-to-1250-from-1065-at-tigress-financial-thefly-news', why: 'Bullish on membership fee income, the main profit lever — supports the multiple more than the revenue line.' },
      { d: '2026-10-08', k: 'earnings', h: 'Costco September comps ex-gas/FX +7.6% (vs 5.4% Aug); net sales $30.02B, +13%; Labor Day shift added ~50bp', s: 'TipRanks', u: 'https://www.tipranks.com/news/costco-cost-delivers-one-of-its-biggest-2026-sales-gains-in-september', why: 'Strong start to FY2027 supports the 8.66% consensus growth used for growth[1] (model has 8.36), with mild upside; Truist still flags slowing membership growth.' },
      { d: '2026-10-07', k: 'earnings', h: 'Costco reports September comparable sales up 11.4% headline', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/costco-reports-september-comparable-sales-up-11-4-thefly-news', why: 'Headline comp inflated by gas and FX; read with the 7.6% ex-gas figure — no extra driver change beyond the item above.' },
      { d: '2026-09-25', k: 'earnings', h: 'Costco received $184M of tariff refunds in Q4 and is reinvesting most of it in lower member prices', s: 'Fox Business', u: 'https://www.foxbusiness.com/markets/costco-receives-184m-tariff-refunds-says-most-go-toward-lower-prices', why: 'Refunds are non-recurring and passed through to prices, so they neither lift the 3.04% net margin nor the margin path through FY2027.' },
    ],
  },

  // Price $93.90, a record (5 October: $86.51, +8.5%) · cap $404.01B · EV $431.90B · 4.30B
  // shares (-0.09% YoY). No quarter reported since the 6 October pull, so the trailing
  // figures are unchanged. TTM rev $50.13B · TTM EBITDA $17.00B (33.91%) · TTM NI $14.32B
  // (28.56%) · FCF $14.30B · cash $16.37B, debt $44.26B → net debt $27.89B · P/E 28.22
  // trailing (was 26.00), 27.63 forward · EV/EBITDA 25.41 · yield 2.26% (was 2.45%) ·
  // FY2026E rev $49.83B (+3.94%; was $49.72B, +3.71%), EPS $3.30 unchanged · FY2027E rev
  // $49.80B (-0.07%, FLAT, against 4.5% modelled) with EPS $3.52 (+6.66%); the page gives
  // no reason, and refranchising or a Costa sale is an inference, not a sourced explanation
  // · PT $94.74 (was $94.65), now only 0.9% above the price · Q3 reports 27 October.
  KO: {
    name: 'Coca-Cola',
    sector: 'consumer',
    shares: 1,
    cost: 93.9,
    priceRef: 93.9,
    pricePrev: 86.51,
    prevRev: 47.94,
    growth: [3.94, 4.5, 4.5, 4, 4],
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
      'The frame fits the company but misses half the return. Coca-Cola yields 2.26%, and this model prices capital appreciation only — no dividend is reinvested, credited or shown anywhere below. Against a base case worth roughly 1.6% a year in price alone at the 16 October price, the dividend is more than half of the total return and it is invisible here. Read every figure on this page as the price-only component and add the yield yourself. It is also the slowest grower in this book by some distance, which makes the exit multiple, not the revenue line, the thing that decides the outcome.',
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
        rev: 58.85,
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
        m: 'FY2026E revenue $49.83B, +3.9%',
        b: 'Revenue growth of 4% can be all price or all volume, and only one of those repeats indefinitely.',
        c: 'Split organic growth into concentrate volume and price/mix. Growth carried entirely by price is borrowed from future volume.',
      },
      {
        h: 'The dividend this model ignores',
        m: '2.26% yield; FCF $14.30B against $14.32B net income',
        b: 'Free cash flow almost exactly covers reported earnings, which is what funds both the payout and the buyback that shrinks the share count.',
        c: 'Check the payout ratio against free cash flow, then add the yield to every return figure on this page before comparing KO with anything else in the book.',
      },
      {
        h: 'Net debt against a defensive multiple',
        m: 'Net debt $27.89B; EV $431.90B against a $404.01B cap',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'deal', h: 'KFC to switch its US restaurants from Pepsi to Coca-Cola beverages, completing by end of Q1 2027', s: 'TipRanks', u: 'https://www.tipranks.com/news/coca-cola-stock-ko-rises-as-kfc-ditches-pepsico-to-strike-a-new-beverage-deal', why: 'Adds US fountain volume from 2027 — small positive to organic volume growth; deal value undisclosed.' },
      { d: '2026-10-16', k: 'analyst', h: 'Barclays raises Coca-Cola PT to $98 from $93 (Overweight) in Q3 staples preview', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/coca-cola-price-target-raised-to-98-from-93-at-barclays-thefly-news', why: 'Rationale is scarcity of \'dependably defensive\' staples — a multiple argument, supports the bull-case P/E rather than any earnings driver.' },
      { d: '2026-10-14', k: 'analyst', h: 'Citi raises Coca-Cola PT to $102 from $100 (Buy) while warning of another challenging staples quarter on high gas prices', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/coca-cola-price-target-raised-to-102-from-100-at-citi-thefly-news', why: 'Signals soft Q3 volumes across the sector — mild risk to the 3.94% FY2026 growth estimate, offset by relative resilience.' },
      { d: '2026-10-08', k: 'deal', h: 'Coca-Cola again exploring a sale of Costa Coffee, bought for $5.1B in 2018, Semafor reports', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/coca-cola-exploring-sale-of-costa-coffee-semafor-says-thefly-news', why: 'A sale would cut reported revenue (lower growth) but likely lift net margin, consistent with the flat FY2027 consensus revenue.' },
      { d: '2026-09-28', k: 'analyst', h: 'JPMorgan trims KO PT to $95 from $96, keeps Overweight after Monster\'s Rob Gehring named North America president from…', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/coca-cola-price-target-lowered-to-95-from-96-at-jpmorgan-thefly-news', why: 'Management change in the largest operating unit; no driver change.' },
    ],
  },

  // Price $70.35 (5 October: $69.48, +1.3%) · cap $143.69B · EV $148.44B · 2.04B shares
  // (-2.28% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $55.23B · TTM EBITDA $7.47B (13.53%) · TTM operating income $6.70B ·
  // TTM NI $9.58B (17.34%), EPS $4.58 · FCF $10.12B · cash $5.39B, debt $14.73B → net debt
  // $9.34B (the statistics page prints -$4.74B, probably counting short-term investments;
  // not verified, and this entry stays on cash less debt) · P/E 15.35 trailing, 17.43
  // forward · EV/EBITDA 19.86 · PS 2.60 · FY2025 rev $52.02B (+18.28%), GAAP NI $10.05B,
  // GAAP EPS $4.73 against a $2.45 consensus · FY2026E rev $57.89B (+11.28%) unchanged, EPS
  // $3.36 (was $3.35) · FY2027E rev $66.76B (+15.34%, against 11% modelled for year two;
  // the page does not say whether it includes ezCater), EPS $4.41 · PT $100.86 (was
  // $100.77), 50 analysts · Q3 reports 4 November.
  UBER: {
    name: 'Uber Technologies',
    sector: 'consumer',
    shares: 1,
    cost: 70.35,
    priceRef: 70.35,
    pricePrev: 69.48,
    prevRev: 52.017,
    growth: [11.28, 11, 10, 10, 9],
    // The inverse of the usual problem in this book. Consensus EPS of $3.36 implies an
    // 11.84% net margin — BELOW the 17.34% GAAP trailing figure, not above it, because
    // reported GAAP earnings carry non-recurring tax and equity-investment gains that
    // the estimate strips out. Year one uses the consensus-implied number, which is the
    // conservative choice here even though it sits under GAAP.
    niMargin: [11.84, 13, 14, 15, 16],
    // Trailing EBITDA margin is 13.53%. The adjusted EBITDA margin Uber reports is
    // higher; this path stays on the reported basis.
    ebMargin: [14, 16, 17, 18, 19],
    // Down 2.28% in a year on buybacks. The path keeps shrinking it about 2% a year.
    sharesOut: [2.04, 2.0, 1.96, 1.92, 1.88],
    peLow: 18,
    peHigh: 30,
    evMult: 16,
    netCash: -9.34,
    caveat:
      'The GAAP-versus-adjusted gap runs backwards here, and it is the first thing to understand. Everywhere else in this book the headline consensus EPS sits above GAAP; at Uber it sits below — $3.36 for FY2026 against $4.73 of GAAP EPS reported for FY2025 — because GAAP earnings carry non-recurring tax and equity-investment gains that the estimate excludes. The forward P/E of 17.43 being HIGHER than the trailing 15.35 is the same fact stated again. The driver table uses the lower, consensus-implied margin. Two other things. Revenue is a take rate on gross bookings, the same shape as SHOP elsewhere in this file, so it is a leveraged claim on mobility and delivery volume rather than on price. And the model cannot see the one question that decides the decade: whether autonomous vehicles arrive as a supply cost Uber captures or as a platform that routes around it.',
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
        m: 'FY2026E revenue $57.89B, +11.3%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'Guggenheim reiterates Buy, $125 PT; calls AV a Waymo-Zoox-Tesla \'three-horse race\' but sees AV supply on Uber doubling…', s: 'TipRanks', u: 'https://www.tipranks.com/news/uber-stock-uber-why-guggenheim-is-bullish-despite-three-horse-race-with-waymo-zoox-and-tesla', why: 'Directly about the binary AV risk in the caveat; the leaders being non-Uber platforms is the bear case, so it argues for keeping the exit multiple band wide.' },
      { d: '2026-10-14', k: 'product', h: 'Sarfraz Maredia, head of Uber\'s global autonomous-vehicle effort, to leave on November 16', s: 'TheFly (Bloomberg report)', u: 'https://www.tipranks.com/news/the-fly/uber-executive-overseeing-autonomous-efforts-to-depart-bloomberg-says-thefly-news', why: 'Leadership gap in the AV strategy the bull case depends on — small negative for the multiple, no earnings driver change.' },
      { d: '2026-10-08', k: 'deal', h: 'Uber and Pony.ai plan London robotaxi testing within weeks, extending a 2,000-vehicle European plan that began in Zagreb', s: 'TechCrunch', u: 'https://techcrunch.com/2026/10/08/uber-and-chinas-pony-ai-plan-to-launch-robotaxis-in-london/', why: 'Evidence for the \'AV fleets list on Uber\' path (third party owns fleet, Uber supplies demand) — supportive of take rate holding in the base/bull case.' },
      { d: '2026-10-06', k: 'deal', h: 'Uber to buy catering marketplace ezCater for $2.3B in cash; ezCater has >$2.5B TTM gross bookings growing high teens', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/uber-to-acquire-ezcater-in-2-3b-all-cash-transaction-thefly-news', why: 'Adds ~4% to delivery gross bookings and is described as margin-accretive on non-GAAP operating income; raises growth modestly from close (timing \'coming months\') and adds ~$2.3B to net debt.' },
      { d: '2026-10-05', k: 'analyst', h: 'Wells Fargo lifts Uber PT to $92 from $89 (Overweight), expecting accelerating US mobility volumes in Q3', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/uber-price-target-raised-to-92-from-89-at-wells-fargo-thefly-news', why: 'Points to mobility bookings acceleration and cost room from workforce reductions — supports growth[1] moving toward the 15.34% consensus.' },
    ],
  },

  // Reports in CNY; the ADR trades in USD. Revenue below is converted at USD/CNY 6.722, the
  // CFETS central parity for 16 October 2026 (Xinhua); a 16 October closing rate could not
  // be verified. The 6 October pull used 6.70, so the switch moves every converted figure
  // by about -0.3%.
  // Price $12.30 (5 October: $11.19, +9.9%), -25.23% over 52 weeks · cap $2.35B · EV $1.38B
  // · 190.76M shares (+44.05% YoY). No quarter reported since the 6 October pull, so the
  // trailing figures are unchanged. TTM rev $1.93B · TTM EBITDA $247.30M (12.78%) · TTM NI
  // $180.12M (10.20%), EPS $0.94 · FCF $120.71M (was $120.46M) · cash $1.20B, debt $234.41M
  // → net cash $968.93M · P/E 13.05 trailing (was 11.88), 7.20 forward (was 7.73) ·
  // EV/EBITDA 5.57 · PS 1.21 · FY2025 rev CNY 12.91B, GAAP NI CNY 1.02B, GAAP EPS CNY 6.18
  // · FY2026E rev CNY 14.25B (+10.40%), EPS CNY 10.06 on an adjusted basis (was CNY 9.65;
  // against a FY2025 equivalent of CNY 10.07 it is now FLAT, -0.10%, not falling 4.18%) ·
  // FY2026E net income CNY 1.69B (11.9% of revenue) in the forecast table · FY2027E rev CNY
  // 15.86B (+11.30%), EPS CNY 10.97 · PT $15.27 (was $15.04), last updated 2 September · Q3
  // results estimated 27 November.
  // No CHA news dated September or October 2026 turned up; the latest items are the 28
  // August Q2 results, whose figures come from Quiver Quantitative's summary because the
  // GlobeNewswire release returned 403.
  CHA: {
    name: 'Chagee Holdings',
    sector: 'consumer',
    shares: 1,
    cost: 12.3,
    priceRef: 12.3,
    pricePrev: 11.19,
    // FY2025 revenue of CNY 12.907B at 6.722.
    prevRev: 1.9201,
    growth: [10.4, 12, 12, 10, 10],
    // GAAP, and anchored on the 10.20% trailing margin rather than on the consensus EPS,
    // which is adjusted: CNY 10.06 against GAAP FY2025 EPS of CNY 6.18. Revenue growth
    // of 10.40% is currency-neutral and taken straight from consensus.
    niMargin: [10.2, 11, 11.5, 12, 12.5],
    ebMargin: [13, 14, 15, 16, 16.5],
    // Up 44.05% in twelve months, second only to BULL's de-SPAC here. This path assumes that stops
    // almost completely, which is the single most generous assumption in the entry.
    sharesOut: [0.191, 0.196, 0.2, 0.203, 0.205],
    peLow: 10,
    peHigh: 20,
    evMult: 8,
    netCash: 0.969,
    caveat:
      'The cheapest entry in this book on every multiple — 13.1x trailing earnings, 7.2x forward, 5.6x EV/EBITDA, with net cash of $968.93M against a $2.35B market capitalisation, so roughly 41% of the market value is cash. That is the whole argument, and there are four reasons it might be cheap for a reason. The accounts are in Chinese yuan and the ADR is in dollars: revenue below is converted at 6.722 (the 16 October 2026 central parity, not a closing rate), so a 5% currency move shifts every absolute figure by about 5% before the business does anything. The consensus EPS of CNY 10.06 is adjusted and sits well above GAAP EPS of CNY 6.18 for FY2025, so the driver table is built off the trailing GAAP margin instead. The share count rose 44.05% in a single year — faster than SpaceX, and behind only BULL’s de-SPAC here — which is why per-share earnings can fall while the company grows. And consensus has adjusted EPS flat in 2026 (-0.10%) on 10.40% revenue growth — the margin is not expected to expand, which is the base case to argue with, not an outcome to assume away.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Store expansion outruns demand, unit economics fall with competition and dilution continues.',
        rev: 2.59,
        margin: 7,
        pe: 9,
      },
      base: {
        label: 'Base',
        thesis: 'Low-double-digit revenue growth with modest margin recovery as new stores mature.',
        rev: 3.22,
        margin: 12.5,
        pe: 15,
      },
      bull: {
        label: 'Bull',
        thesis: 'International expansion works, the brand earns premium pricing and the multiple normalises upward.',
        rev: 3.99,
        margin: 15,
        pe: 20,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Same-store sales, not store count',
        m: 'FY2026E revenue CNY 14.25B, +10.40%',
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
        m: 'Converted at USD/CNY 6.722',
        b: 'Earnings are made in yuan and the ADR is priced in dollars, so the return has an FX leg that none of the drivers below can see.',
        c: 'Re-run the conversion when the rate moves more than a few percent. TSM and ASML in this same file carry the identical problem in different currencies.',
      },
      {
        h: 'Why it is this cheap',
        m: '7.2x forward earnings; 41% of the cap is cash',
        b: 'A profitable, growing, net-cash consumer brand at 7.2x forward earnings is either mispriced or is being marked down for China listing risk, governance, or doubt about the reported numbers.',
        c: 'Decide which before sizing anything. If the answer is listing and governance risk, the exit multiple band below — 10x to 20x — is the assumption to argue with, not the revenue line.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-08-28', k: 'earnings', h: 'Chagee Q2 2026: revenue +2.5% to RMB3.41B, same-store GMV -16.1%, Greater China GMV down, overseas GMV +114%', s: 'Quiver Quantitative (company release summary)', u: 'https://www.quiverquant.com/news/Chagee+Holdings+Reports+Second+Quarter+2026+Financial+Results%2C+With+Revenue+Growth+and+Strong+Overseas+GMV+Increase', why: 'Same-store GMV -16.1% and active members down to 47.1M from 50.0M are the bear case arriving — risk to the +10.40% growth estimate, which leans on store count and overseas.' },
      { d: '2026-08-28', k: 'earnings', h: 'Chagee Q2 GAAP net income RMB464.8M (13.6% margin) as opex fell 10.4%; operating income +388% to RMB524.7M', s: 'Quiver Quantitative (company release summary)', u: 'https://www.quiverquant.com/news/Chagee+Holdings+Reports+Second+Quarter+2026+Financial+Results%2C+With+Revenue+Growth+and+Strong+Overseas+GMV+Increase', why: 'Quarterly GAAP margin of 13.6% is above the 10.20% trailing margin used for niMargin[0] — upside to the year-one margin, though on falling same-store sales.' },
      { d: '2026-08-28', k: 'capital', h: 'Chagee has repurchased ~2.57M ADSs for $29.5M under a $150M buyback authorised from 1 June 2026', s: 'Quiver Quantitative (company release summary)', u: 'https://www.quiverquant.com/news/Chagee+Holdings+Reports+Second+Quarter+2026+Financial+Results%2C+With+Revenue+Growth+and+Strong+Overseas+GMV+Increase', why: 'A buyback (~1.3% of ADSs so far) argues against the rising sharesOut path in the drivers — share-count assumption may be too punitive, or dilution may already be over.' },
      { d: '2026-08-28', k: 'analyst', h: 'Macquarie upgrades Chagee to Outperform from Neutral after Q2 EPS of RMB2.54 beat RMB2.30 consensus', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/chagee-upgraded-to-outperform-from-neutral-at-macquarie-thefly-news', why: 'Sell-side turning up on margins — consistent with the adjusted EPS estimate rising from CNY 9.65 to 10.06; no PT given.' },
    ],
  },

  // Reports in US dollars; no conversion. Price $2.94 (5 October: $3.17, -7.3%), -50.34%
  // over 52 weeks · cap $11.99B · EV $7.49B · 4.08B shares (+4.45% YoY). No quarter
  // reported since the 6 October pull, so the trailing figures are unchanged. TTM rev
  // $3.73B · TTM EBITDA $343.00M (9.19%) · TTM NI $598.00M (16.03%), EPS $0.11 — but TTM
  // operating income only $138.00M (3.70%) · FCF -$160.00M · cash $6.53B, debt $2.03B → net
  // cash $4.50B · P/E 25.70 trailing (was 27.71), 16.87 forward · EV/EBITDA 21.84 · PS 3.21
  // · FY2025 rev $3.37B, GAAP NI $268.00M, GAAP EPS $0.06 · FY2026E rev $4.19B (+24.39%;
  // was +24.48%), EPS $0.14 (+96.11%; was $0.13) in the summary box, but the forecast
  // table's FY2026 net income of $533.83M on 4.08B shares is about $0.131 · FY2027E is
  // public again: rev $5.24B (+25.00%, against 20% modelled), EPS $0.13 · PT $5.58 (was
  // $5.76), +89.8%, 24 analysts · Q3 reports 2 November.
  // Two things since the last pull touch the drivers without changing year one. The Atome
  // deal (6-K, 15 September) is $1.49B of cash for 60%, closing by Q3 2027, with the other
  // 40% due about two years later at $2.0–4.5B, at least half in cash — that spends down
  // the net cash whose interest carries much of today's net margin. And management's target
  // of more than 30% revenue CAGR for 2025–28 sits well above the 20%/18% modelled for
  // years two and three.
  GRAB: {
    name: 'Grab Holdings',
    sector: 'consumer',
    shares: 1,
    cost: 2.94,
    priceRef: 2.94,
    pricePrev: 3.17,
    prevRev: 3.37,
    growth: [24.39, 20, 18, 16, 14],
    // GAAP. FY2025 net income of $268.00M over ~4.0B shares is the $0.07 the forecast page
    // shows as the actual. Its FY2026 EPS box now says $0.14 (+96.11%), described as
    // non-GAAP, while the table's FY2026 net income of $533.83M is 12.74% of $4.19B and
    // about $0.131 a share, which matches GAAP. Year one is anchored on that table figure.
    // What the number hides is where the profit comes from. Trailing operating margin is
    // 3.70%; the 16.03% net margin is mostly interest on $6.53B of cash plus other
    // non-operating items. Interest income is roughly fixed in dollars, so it shrinks as a
    // share of revenue — carrying 12.74% to 16% by 2030 requires operating margin to go
    // from about 4% to about 13%. That is the whole bet in this entry.
    niMargin: [12.74, 13, 14, 15, 16],
    // Reported basis, not the adjusted EBITDA Grab guides to.
    ebMargin: [10, 12, 14, 16, 18],
    // Up 4.45% in a year. This path assumes that decelerates to about 2% — an assumption,
    // not a disclosure.
    sharesOut: [4.08, 4.24, 4.37, 4.48, 4.57],
    peLow: 15,
    peHigh: 32,
    evMult: 14,
    netCash: 4.5,
    caveat:
      'Read the operating line before the net line. Trailing operating income is $138.00M on $3.73B of revenue — a 3.70% margin — while net income is $598.00M, a 16.03% margin, because the company earns interest on $6.53B of cash and books other non-operating items on top. Free cash flow is NEGATIVE $160.00M over the same twelve months. So the profitability that makes the trailing P/E of 25.70 look reasonable is not, for the most part, coming from moving people and food yet. The margin path in the drivers requires operating margin to roughly triple by 2030, since interest income is fixed in dollars and shrinks against a growing revenue line. Two structural notes. Net cash of $4.50B is 37.5% of the $11.99B market capitalisation — and the Atome purchase will spend part of it — so the P/E ladder and the EV/EBITDA cross-check below are answering different questions and will disagree. And revenue is a take rate on gross merchandise value across mobility, deliveries and financial services in eight Southeast Asian countries, reported in US dollars but earned in local currency — a leveraged claim on volume, with an FX leg none of the drivers can see. The consensus price target of $5.58 is 90% above the market price, which is a measure of how wide the range of opinion is, not of the return.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Incentive competition holds take rate down, the digital banks keep absorbing capital and operating margin stays near zero.',
        rev: 6.0,
        margin: 7,
        pe: 14,
      },
      base: {
        label: 'Base',
        thesis: 'Mid-teens volume growth with advertising and financial services lifting the blended take rate, and operating margin finally carrying the net line.',
        rev: 7.85,
        margin: 16,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'The superapp compounds across all three segments, lending scales without credit losses, and the market pays a platform multiple.',
        rev: 9.5,
        margin: 20,
        pe: 32,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Operating income, not net income',
        m: 'TTM operating income $138.00M against $598.00M of net income',
        b: 'The gap is interest on the cash pile and other non-operating items. A 16% net margin on a 3.7% operating margin is a balance-sheet result, not a business result, and it moves with interest rates rather than with the platform.',
        c: 'Read income from operations first, every quarter, and check it against the margin path in the drivers. UBER in this same file has a version of the same problem — GAAP earnings carrying items the estimate strips out.',
      },
      {
        h: 'Free cash flow against reported earnings',
        m: 'FCF -$160.00M on $598.00M of net income',
        b: 'Cash is going out while accounting profit is going up. For a company whose fintech arm lends, that can be the loan book growing rather than anything wrong — but it is the opposite sign to the earnings line and worth resolving.',
        c: 'Reconcile operating cash flow to net income and check how much of the difference is loans originated. Treat sustained negative FCF against rising net income as unexplained until the filing explains it.',
      },
      {
        h: 'Take rate on gross merchandise value',
        m: 'FY2026E revenue $4.19B, +24.4%',
        b: 'Revenue is a cut of what riders, eaters and borrowers spend, so growth is volume growth multiplied by any change in the cut Grab keeps. The cut is the part competitors can attack directly.',
        c: 'Check GMV and revenue growth separately, and by segment. Revenue outgrowing GMV is take-rate expansion; the reverse is incentives being paid to hold volume.',
      },
      {
        h: 'Digital banks and the loan book',
        m: 'Lending balances, credit losses and segment losses',
        b: 'The financial services segment is the fastest-growing and the least like a marketplace: it carries credit risk on the balance sheet and regulatory capital requirements in each country it banks in.',
        c: 'Check non-performing loans and provisions alongside loan growth, and whether the digital banks are still loss-making at the segment line. Credit costs arrive after the growth, not with it.',
      },
      {
        h: 'Dilution, and the currency underneath',
        m: '4.08B shares, +4.45% year over year',
        b: 'The count grew 4.45% in twelve months and the driver table assumes that slows to about 2%. Separately, revenue is reported in dollars but earned in Singapore dollars, rupiah, ringgit, baht and dong, so the reported growth rate already contains a currency move.',
        c: 'Check the diluted count each quarter against the path in the drivers, and read the constant-currency growth rate next to the reported one. Both are assumptions this model cannot see.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-09-25', k: 'analyst', h: 'BofA cuts Grab PT to $4.50 from $4.90 (Buy) on higher rates and lower FY27 EBITDA multiples for delivery and mobility', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/grab-holdings-price-target-lowered-to-4-50-from-4-90-at-bofa-thefly-news', why: 'Multiple compression, not an earnings cut — argues for the lower end of the peLow/peHigh band.' },
      { d: '2026-09-22', k: 'capital', h: 'Grab CEO Anthony Tan buys 10.4M shares for ~$29.9M after stock falls to multi-year low', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/grab-holdings-ceo-buys-29-9m-in-common-stock-thefly-news', why: 'Insider open-market buying (~$2.87/share) — signal only; no change to share count since these are existing shares.' },
      { d: '2026-09-15', k: 'deal', h: 'Grab to buy 60% of BNPL lender Atome for $1.49B cash (closing by Q3 2027), with the remaining 40% ~2 years later at…', s: 'Grab Form 6-K (SEC)', u: 'https://www.sec.gov/Archives/edgar/data/0001855612/000185561226000133/exhibit991-atometransactio.htm', why: 'Consumes ~$1.5B of the $6.53B cash now and $2-4.5B later (at least half cash) — shrinks netCash and the interest income propping the net margin, while adding ~$1B of loans and credit risk.' },
      { d: '2026-09-15', k: 'guidance', h: 'Grab raises 2028 targets: group revenue CAGR >30% for 2025–28, adjusted EBITDA $1.7B, Financial Services loan book >$6B', s: 'Grab Form 6-K (SEC)', u: 'https://www.sec.gov/Archives/edgar/data/0001855612/000185561226000133/exhibit991-atometransactio.htm', why: 'Management\'s >30% CAGR (incl. Atome) sits far above the model\'s 20/18% for 2027-28 — upside to growth, but partly acquired revenue with lending margins.' },
      { d: '2026-09-15', k: 'deal', h: 'Atome deal recap: 2025 revenue +80% to $470M, 25M users, five markets; Grab shares down 39% YTD', s: 'TipRanks', u: 'https://www.tipranks.com/news/ma-news-grab-holdings-acquires-majority-stake-in-asian-ai-lender-atome-financial-for-1-49b', why: '~$470M revenue is ~11% of FY2026E revenue — material uplift to growth from consolidation (from Q3 2027 close), not organic.' },
    ],
  },

  // ---------------------------------------------------------------- semis
  // Price $214.13 (5 October: $238.90, -10.4%) · cap $5.17T · EV $5.15T · 24.15B shares
  // (-1.04% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $302.97B · TTM EBITDA $201.27B (66.43%) · TTM NI $192.88B (63.66%) ·
  // FCF $127.01B · cash $62.47B, debt $38.86B → net cash $23.61B · P/E 27.08 trailing (was
  // 30.21), 17.70 forward (was 19.75) · EV/EBITDA 25.57 · FY2027E (Jan-end) rev $411.65B
  // (+90.64% on FY2026; was $411.56B), EPS $9.31 unchanged, non-GAAP against $7.91 of TTM
  // GAAP EPS · FY2028E is visible in the summary box: $692.21B (+68.15%), EPS $15.91 — far
  // above the 22% modelled for year two, which stays judgement · PT $328.72 (was $327.70),
  // 62 analysts · Q3 FY2027 reports 18 November. The fall is a sector de-rating on AI-capex
  // funding doubts, not an estimate cut.
  NVDA: {
    name: 'NVIDIA',
    sector: 'semis',
    shares: 1,
    cost: 214.13,
    priceRef: 214.13,
    pricePrev: 238.9,
    prevRev: 302.97,
    growth: [35.87, 22, 16, 12, 10],
    niMargin: [54.7, 54, 53, 52, 52],
    ebMargin: [65, 64, 63, 62, 62],
    sharesOut: [24.15, 23.9, 23.65, 23.4, 23.15],
    peLow: 22,
    peHigh: 40,
    evMult: 22,
    netCash: 23.61,
    caveat:
      "NVIDIA's fiscal year ends in late January, so the calendar columns here are approximate; CY2026 is built from the next-fiscal-year consensus of $411.65B, against $302.97B of trailing revenue. The striking thing about the setup is that at 27.1x trailing and 17.7x forward earnings it is not obviously expensive — the risk in this model is entirely in whether a 52% net margin survives competition from custom silicon, which is precisely what MRVL and AVGO in this same book are selling.",
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
        m: 'Next-FY consensus revenue $411.65B',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'product', h: 'Nvidia launches RTX Spark Windows laptops combining RTX graphics with its AI stack', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/nvidia-announces-availability-of-nvidia-rtx-spark-laptops-thefly-news', why: 'A new client-PC revenue line outside the datacentre; small against $300B+ of revenue, marginally positive for growth diversification and a direct challenge to AMD and Intel client.' },
      { d: '2026-10-16', k: 'macro', h: 'Nvidia edges up premarket as Huang eases CoreWeave concerns; Barclays strategist says "best of the AI trade may be over"', s: 'TipRanks', u: 'https://www.tipranks.com/news/why-nvidia-stock-is-rising-while-amd-broadcom-and-intel-stocks-are-falling-in-premarket-today-october-16', why: 'Multiple, not estimates: the sector narrative has turned toward AI return-on-capital, which compresses peHigh before it touches growth.' },
      { d: '2026-10-15', k: 'capital', h: 'Huang says Nvidia need not backstop CoreWeave as CoreWeave\'s 5-year CDS hit a record ~1,194bp', s: 'The Next Web (citing Bloomberg)', u: 'https://thenextweb.com/news/huang-coreweave-backstop-stockholm', why: 'Customer-financing risk: Nvidia holds ~10% of CoreWeave and has a residual-capacity purchase commitment, so neocloud credit stress is a downside risk to growth and to the multiple.' },
      { d: '2026-10-14', k: 'macro', h: 'Chip stocks drop on AI-spending doubts and CoreWeave debt stress; AMD -5.7%, NVDA -3.2%, AVGO -3.1%, TSM -3.4%', s: 'TipRanks', u: 'https://www.tipranks.com/news/advanced-micro-devices-sinks-5-7-to-570-82-as-chip-stocks-drop-on-ai-spending-doubts', why: 'Sector-wide de-rating rather than an estimate cut: consensus barely moved, so the exit multiple (peLow/peHigh/evMult) is what the market is repricing.' },
      { d: '2026-10-09', k: 'analyst', h: 'UBS maintains Buy, $300 target; Citi reiterates Buy $315 (Oct 6); BNP Paribas raises to $345 (Oct 5)', s: 'stockanalysis.com forecast page', u: 'https://stockanalysis.com/stocks/nvda/forecast/', why: 'Consensus PT $328.72 is ~53% above the $214.13 price; with estimates flat the gap is entirely a multiple disagreement, not a growth one.' },
    ],
  },

  // REPORTED Q3 2026 on 15 October: revenue NT$1,494.24B (US$46.72B), +50.9% YoY in NT$ and
  // +41.2% in US$; net income NT$763.06B, a 51.1% net margin; EPS NT$29.43 (US$4.60 per
  // ADR); 2nm 8% of wafer revenue. Q4 guide US$52.3–54.3B at 65–67% gross margin, struck at
  // NT$31.8. 2026 capex $60–64B (The Motley Fool, citing the call; transcript not opened).
  // Price $412.61 (ADR; 5 October: $485.80, -15.1% despite the beat) · cap $1.93T · EV
  // $1.84T · 25.93B ordinary shares (+0.01% YoY) · TTM rev $155.16B USD (was $139.57B) ·
  // TTM EBITDA $113.32B · TTM NI $79.31B (was $69.68B) · FCF $45.63B · cash $126.04B, debt
  // $25.68B → net cash $100.36B (was $76.99B) · P/E 26.98 trailing, 18.83 forward ·
  // EV/EBITDA 16.20 · FY2026E revenue NT$5.56T (+46.00%; was NT$5.44T, +42.90%), EPS
  // NT$110.13 (was NT$107.89) · FY2027E now public: NT$7.65T (+37.51%), EPS NT$148.61 · PT
  // $584.39 (was $552.26) · converted at NT$32.338 (Taipei forex close, 16 October 2026,
  // Focus Taiwan; the last pull used 31.788).
  // Changed beyond the pull: the share count is now 25.93B ÷ 5 = 5.186B ADR-equivalents (it
  // had sat at a stale 4.696B from 10 September, which only landed year one on consensus
  // because it was paired with a 46.53% margin). With the right count, the consensus needs
  // 51.36% — the margin Q3 just printed — so the margin path was raised and eases back to
  // the 48% the base case already used. Year two moves from 20% to 26% after the beat,
  // still well under the 37.51% consensus; the bull case moves up with it, the bear case
  // only by the currency.
  TSM: {
    name: 'TSMC',
    sector: 'semis',
    shares: 1,
    cost: 412.61,
    priceRef: 412.61,
    pricePrev: 485.8,
    prevRev: 117.76,
    growth: [46, 26, 16, 13, 11],
    // NT$110.13 × 25.93B ordinary shares ÷ 32.338 is $88.31B of net income on $171.93B
    // of revenue: 51.36%, in line with Q3's reported 51.1%.
    niMargin: [51.36, 50.5, 49.5, 48.5, 48],
    ebMargin: [70, 70.5, 71, 71.5, 72],
    // ADR-equivalent: 25.93B ordinary shares at five per ADR. Market cap ÷ ADR price gives
    // 4.678B instead, because the source strikes the cap on the cheaper Taipei line; the
    // ADR premium (about 11% here) is the gap, and per-ADR EPS needs the 5:1 count.
    sharesOut: [5.186, 5.186, 5.186, 5.186, 5.186],
    peLow: 18,
    peHigh: 30,
    evMult: 14,
    netCash: 100.36,
    caveat:
      'Two conversions to keep in mind. TSMC reports in New Taiwan dollars — the consensus is NT$5.56T revenue and NT$110.13 EPS for 2026 — and the figures here are converted to USD at NT$32.338 to the dollar, the 16 October 2026 Taipei close, so currency moves alone will shift them: the NT dollar weakened 1.7% between the two pulls, which by itself took about 1.7% off every converted figure. And the share count is ADR-equivalent, 25.93B ordinary shares at five per ADR = 5.186B, which is what makes EPS comparable to the $412.61 ADR quote. Until this pull it was 4.70B, derived from market capitalisation in September; that route understates the count because the source strikes the cap on the cheaper Taipei shares, and the ADR has traded at roughly an 11% premium to them. Implied market cap on this page therefore runs about 11% above the source figure — that is the premium, not an error. The stock fell 15% in the fortnight even as Q3 beat; the moves were in the multiple, not the drivers.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'AI capex digests, utilisation falls and leading-edge pricing softens.',
        rev: 233.8,
        margin: 40,
        pe: 14,
      },
      base: {
        label: 'Base',
        thesis: 'Leading-edge demand compounds and TSMC keeps pricing power as sole supplier.',
        rev: 315.2,
        margin: 48,
        pe: 24,
      },
      bull: {
        label: 'Bull',
        thesis: 'Advanced packaging and 2nm scarcity let TSMC raise prices through the cycle.',
        rev: 360,
        margin: 52,
        pe: 30,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Advanced node revenue mix',
        m: 'FY2026E revenue +46.0% in NT dollars; Q3 2nm share 8%',
        b: 'Leading-edge nodes carry the margin. Everything in this model rests on that mix continuing to shift forward.',
        c: 'Check revenue by node in the Q4 release in mid-January. A stalling advanced-node share caps the margin path regardless of total revenue.',
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
        c: 'Check the rate used in guidance — NT$31.8 for Q4, against 32.338 at the 16 October close. A several-percent move is worth more than a quarter of operational progress.',
      },
      {
        h: 'Geopolitical and customer concentration',
        m: 'Share of revenue from the largest customers',
        b: 'A small number of customers — including several others in this book — account for a large share of revenue.',
        c: 'Read the concentration disclosure, and treat the location risk as a permanent discount to the exit multiple rather than something to forecast.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'D.A. Davidson calls Q3 "beats and raises"; capex guide reiterated on very strong AI demand, 2nm at 8% of wafer revenue', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/tsmcs-q3-results-highlighted-by-beats-and-raises-says-da-davidson-thefly-news', why: 'Supports raising growth[1] toward the now-visible +37.5% FY2027 consensus; the 2nm ramp is a mix tailwind for margin.' },
      { d: '2026-10-15', k: 'earnings', h: 'TSMC Q3 2026 revenue NT$1.49T (+50.9%), net margin 51.1%, EPS NT$29.43; guides Q4 to US$52.3-54.3B at 65-67% GM', s: 'TSMC press release', u: 'https://pr.tsmc.com/english/news/3346', why: 'Revenue and margin both ran above the old driver path (~46% growth vs 42.9%, ~51% net margin vs 46.53%); this pull lifts year one to match.' },
      { d: '2026-10-15', k: 'guidance', h: 'TSMC keeps 2026 capex at $60-64B; Q4 revenue guide implies another sequential jump', s: 'The Motley Fool', u: 'https://www.fool.com/investing/2026/10/18/tsmc-spending-64-billion-this-year-great-news/', why: 'Capex intensity holds the depreciation floor up, which caps how far net margin can rise even as revenue grows.' },
      { d: '2026-10-15', k: 'macro', h: 'Stock falls despite sixth straight record profit; CEO warns rising component prices hit consumer and price-sensitive…', s: 'The Motley Fool', u: 'https://www.fool.com/investing/2026/10/15/tsmc-just-posted-record-profit-for-the-sixth-straight-quarter-why-did-the-stock-fall/', why: 'Smartphone/PC weakness from memory-price inflation is a modest headwind to non-AI growth; the price drop is a multiple move, not an estimate move.' },
      { d: '2026-10-14', k: 'macro', h: 'Chip stocks drop on AI-spending doubts and CoreWeave debt stress; AMD -5.7%, NVDA -3.2%, AVGO -3.1%, TSM -3.4%', s: 'TipRanks', u: 'https://www.tipranks.com/news/advanced-micro-devices-sinks-5-7-to-570-82-as-chip-stocks-drop-on-ai-spending-doubts', why: 'Sector-wide de-rating rather than an estimate cut: consensus barely moved, so the exit multiple (peLow/peHigh/evMult) is what the market is repricing.' },
    ],
  },

  // Price $328.75 (5 October: $362.51, -9.3%) · cap $1.57T · EV $1.60T · 4.77B shares
  // (+0.99% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $89.10B · TTM EBITDA $52.26B (58.65%) · TTM NI $38.27B (42.94%) ·
  // FCF $39.40B · cash $23.98B, debt $59.42B → net debt $35.44B · P/E 41.96 trailing (was
  // 46.27), 18.96 forward · EV/EBITDA 30.71 · FY2025 (Oct-end) rev $63.89B · FY2026E rev
  // $105.98B (+65.88%), EPS $11.66 (non-GAAP) unchanged; Q3 FY2026 GAAP EPS was $2.68
  // against $3.32 non-GAAP · FY2027E is public again: $173.97B (+64.16%), EPS $19.40 — far
  // above the 22% modelled for year two, which stays judgement · PT $527.59 (was $531.85),
  // 50 analysts. The Broadcom–OpenAI financing reported by WSJ is not confirmed by either
  // company.
  AVGO: {
    name: 'Broadcom',
    sector: 'semis',
    shares: 1,
    cost: 328.75,
    priceRef: 328.75,
    pricePrev: 362.51,
    // FY2025 (October year-end), so growth[0] is the published +65.88% rather than a
    // rate backed out of trailing revenue. Lands CY2026 on the same $106B either way.
    prevRev: 63.89,
    growth: [65.88, 22, 18, 15, 12],
    // GAAP. Trailing GAAP net margin has risen to 42.94%; the $11.66 consensus EPS is
    // non-GAAP and implies about 52%.
    niMargin: [43, 45, 46, 47, 48],
    ebMargin: [56, 57, 58, 59, 60],
    sharesOut: [4.76, 4.75, 4.74, 4.73, 4.72],
    peLow: 25,
    peHigh: 45,
    evMult: 25,
    netCash: -35.44,
    caveat:
      "Broadcom's fiscal year ends in the autumn, so the calendar columns are offset. More importantly, consensus EPS of $11.66 is non-GAAP — trailing GAAP net margin is 42.94%, and the margins below are GAAP, which is why they sit under the roughly 52% the headline implies. Broadcom is the direct comparison for MRVL: both sell custom accelerators to the same handful of hyperscalers, and both are priced as if they win.",
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
        m: 'Consensus EPS $11.66 is non-GAAP; GAAP margin 42.94%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-14', k: 'macro', h: 'Chip stocks drop on AI-spending doubts and CoreWeave debt stress; AMD -5.7%, NVDA -3.2%, AVGO -3.1%, TSM -3.4%', s: 'TipRanks', u: 'https://www.tipranks.com/news/advanced-micro-devices-sinks-5-7-to-570-82-as-chip-stocks-drop-on-ai-spending-doubts', why: 'Sector-wide de-rating rather than an estimate cut: consensus barely moved, so the exit multiple (peLow/peHigh/evMult) is what the market is repricing.' },
      { d: '2026-10-13', k: 'macro', h: 'Broadcom and Intel CEOs warn access to capital could become the AI build-out bottleneck', s: 'TheFly via TipRanks (citing CNBC)', u: 'https://www.tipranks.com/news/the-fly/broadcom-intel-ceos-warn-of-ai-capital-crunch-cnbc-reports-thefly-news', why: 'Customer funding, not demand, becomes the cap on 2027-2028 growth for every AI-capex name; bear-case growth is the driver to stress.' },
      { d: '2026-10-12', k: 'macro', h: 'Broadcom CEO Hock Tan likens AI investors to a casino; says OpenAI runs at a loss on training costs', s: 'TipRanks', u: 'https://www.tipranks.com/news/broadcom-avgo-ceo-criticizes-gambling-mindset-among-ai-investors', why: 'No guidance change, but it questions the funding capacity of the custom-silicon customers behind AVGO growth[1]; pressure falls on the multiple first.' },
      { d: '2026-10-07', k: 'capital', h: 'Broadcom seeks $50B+ in financing (Apollo, Blackstone approached) so OpenAI can buy its custom "Nexus" chips', s: 'investingLive (citing WSJ)', u: 'https://investinglive.com/stocks/wsj-broadcom-seeks-over-50-billion-for-openai-chips-as-oracle-spacex-chase-ai-debt-deals/', why: 'Vendor financing supports the FY2027 revenue ramp but raises credit exposure to a loss-making customer; positive for growth, negative for the multiple and potentially for net debt.' },
      { d: '2026-09-02', k: 'earnings', h: 'Q3 FY2026 revenue $29.6B (+86%), AI semis $16.7B (+221%); Q4 guide $34.8B with AI $21.7B', s: 'Broadcom 8-K (SEC)', u: 'https://www.sec.gov/Archives/edgar/data/0001730168/000173016826000076/avgo-08022026x8kxex99.htm', why: 'Confirms the FY2026 ~$106B landing used for growth[0]; Q3 GAAP NI $13.1B on $29.6B (44%) supports the 43-45% GAAP margin path.' },
    ],
  },

  // Fiscal year ends 31 March. Changed on this pull: year one is now FY2027 (April 2026 to
  // March 2027, nine months of CY2026), the same mapping NVDA, CRM, CRWD, SNOW, MSFT and
  // ORCL use. It had been FY2026 (April 2025 to March 2026), which was already reported and
  // put every column a year early. prevRev is that FY2026 actual, $4.92B; growth[0] is the
  // FY2027 consensus and growth[1] the FY2028 consensus, now public. Years three to five
  // step down from the 20/18/16 used before because they now sit a year later in the same
  // decay.
  // Price $227.80 (5 October: $302.90, -24.8%, the largest fall among the semis) · cap
  // $243.31B · EV $239.91B · 1.07B shares (+0.66% YoY). No quarter reported since the 6
  // October pull, so the trailing figures are unchanged. TTM rev $5.16B · TTM EBITDA $1.06B
  // (20.63%) · TTM NI $1.04B (20.25%), GAAP EPS $0.98 · cash $3.89B, debt $485.00M → net
  // cash $3.40B · FCF $1.51B · P/E 232.52 trailing (was 309.89), 95.49 forward · EV/EBITDA
  // 225.54 · FY2026 (reported) rev $4.92B, EPS $1.77 · FY2027E rev $6.06B (+23.14%; was
  // $6.05B, +22.89%), EPS $2.23 (non-GAAP; was $2.22) · FY2028E rev $8.25B (+36.23%), EPS
  // $3.06 · PT $290.71 (was $288.71), now 27.6% ABOVE the price where it was below ·
  // reports 4 November.
  ARM: {
    name: 'Arm Holdings',
    sector: 'semis',
    shares: 1,
    cost: 227.8,
    priceRef: 227.8,
    pricePrev: 302.9,
    prevRev: 4.92,
    // FY2027 and FY2028 consensus: the step-up to +36% in year two is the street's, not
    // this model's. Only the last three years are judgement.
    growth: [23.14, 36.23, 16, 14, 12],
    // GAAP. The $2.23 consensus EPS implies a 39% net margin; trailing GAAP is 20.25%,
    // so year one is set near the GAAP figure and allowed to climb on operating leverage.
    niMargin: [21, 24, 27, 29, 31],
    ebMargin: [22, 25, 28, 30, 32],
    sharesOut: [1.07, 1.08, 1.09, 1.1, 1.11],
    // Not the 233x it trades at today. A band this wide is still generous for 2030.
    peLow: 45,
    peHigh: 80,
    evMult: 35,
    netCash: 3.4,
    caveat:
      'Three things at once. The fiscal year ends 31 March, so each column is the fiscal year ending the following March — CY2026 is FY2027 — and runs a quarter ahead of the calendar year it is labelled with. Before 18 October 2026 the columns sat a full year early, on a fiscal year that had already been reported. The $2.23 FY2027 consensus EPS is non-GAAP and implies a 39% net margin against a 20.25% GAAP trailing margin, so the driver table deliberately sits well below the headline. And the multiple, not the growth rate, decides the outcome: 233x trailing earnings and 226x EV/EBITDA mean a company compounding revenue at 25% a year can still lose you money if the exit multiple lands anywhere near normal. The base case below already assumes 55x in 2030 — historically generous — still finishes about 18% under today’s price, even after the fall. The share price fell 25% in the fortnight to 16 October on unchanged estimates; the consensus target is now above it.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Royalty growth is steady but the multiple normalises toward the rest of semis.',
        rev: 9.5,
        margin: 22,
        pe: 30,
      },
      base: {
        label: 'Base',
        thesis: 'Royalty rates rise with v9 and compute subsystems, and the premium multiple half-holds.',
        rev: 12.22,
        margin: 31,
        pe: 55,
      },
      bull: {
        label: 'Bull',
        thesis: 'Arm takes datacentre CPU share and prices its architecture like a tax on all compute.',
        rev: 15,
        margin: 35,
        pe: 80,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Royalty revenue and the v9 rate',
        m: 'FY2027E (Mar-end) revenue $6.06B, +23.1%',
        b: 'Licensing is lumpy; royalties are the annuity. The 2030 margin here is a royalty-mix story, not a licensing one.',
        c: 'Split royalty from licence revenue and check the v9 share of royalties. Royalty growth below chip-unit growth means the rate story is not working.',
      },
      {
        h: 'GAAP against non-GAAP',
        m: 'FY2027E EPS $2.23 adjusted; 20.25% GAAP trailing margin',
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
        m: '233x trailing, 95x forward, 226x EV/EBITDA',
        b: 'At this multiple the exit assumption dominates every operating assumption in the driver table.',
        c: 'Before editing any growth rate, decide what P/E you believe for 2030 and put it in the scenario cards. That number, not revenue, is the model.',
      },
      {
        h: 'Fiscal calendar',
        m: 'Year ends 31 March',
        b: 'Each column is the fiscal year ending the following March, so it runs a quarter ahead of the calendar-year companies it is ranked against.',
        c: 'When comparing ARM with NVDA, AVGO or TSM, line the quarters up first. A like-for-like read needs the offset removed.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-14', k: 'macro', h: 'Chip stocks drop on AI-spending doubts and CoreWeave debt stress; AMD -5.7%, NVDA -3.2%, AVGO -3.1%, TSM -3.4%', s: 'TipRanks', u: 'https://www.tipranks.com/news/advanced-micro-devices-sinks-5-7-to-570-82-as-chip-stocks-drop-on-ai-spending-doubts', why: 'Sector-wide de-rating rather than an estimate cut: consensus barely moved, so the exit multiple (peLow/peHigh/evMult) is what the market is repricing.' },
      { d: '2026-10-13', k: 'regulatory', h: 'Delaware jury finds Arm breached Qualcomm license and interfered with Meta relationship; $2 nominal damages, royalty…', s: 'The Star (Reuters)', u: 'https://www.thestar.com.my/tech/tech-news/2026/10/14/qualcomm-says-jury-found-arm-breached-license-agreement', why: 'If the judge enforces the five-year royalty-holiday clause, Qualcomm royalties disappear — a direct cut to growth and margin; until ruled, a discount on the multiple.' },
      { d: '2026-10-13', k: 'regulatory', h: 'Arm says the jury found in its favour on four Qualcomm claims, including those on pricing', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/arm-says-jury-found-in-favor-of-company-vs-qualcomm-on-four-claims-thefly-news', why: 'Pricing claims rejected, so the royalty-rate increases underpinning the margin path are not directly impaired.' },
      { d: '2026-09-18', k: 'guidance', h: 'CEO Haas "more confident" on $2B AI data-centre chip revenue; sees ~$15B by 2031, supply the main constraint', s: 'The Outpost (citing CNBC)', u: 'https://theoutpost.ai/news-story/arm-holdings-ceo-rene-haas-grows-more-confident-about-hitting-2-billion-ai-chip-revenue-target-31021/', why: 'Own-silicon revenue would lift growth well above the royalty trend but at a chip-company (lower) margin than licensing; supports the FY2028 +36% consensus.' },
    ],
  },

  // REPORTED Q3 2026 on 14 October: net sales €11.662B (+55.2% YoY), gross margin 57.5%,
  // net income €4.96B, which secondary summaries say includes about €0.51B of
  // equity-investment gain (not in the release itself); €4.1B bought back in the quarter.
  // Bookings were not disclosed. Q4 guide €14.2–15.2B at ~57% gross margin; FY2026 guide
  // €44–45B.
  // Price $1,641.52 (USD; 5 October: $1,859.86, -11.7% after the print) · cap $638.23B · EV
  // $626.11B · 383.10M shares (-1.34% YoY) · TTM rev $44.98B USD (was $40.29B) · TTM EBITDA
  // $18.44B · TTM NI $15.36B (34.15%; was $12.13B) · cash $14.51B, debt $2.24B → net cash
  // $12.27B (was $6.38B) · FCF $23.78B · P/E 41.56 trailing (was 58.76), 25.97 forward ·
  // EV/EBITDA 33.95 · FY2026E rev €44.47B (+36.13%; was €42.88B, +31.25%), EPS €41.21 (was
  // €38.34) · FY2027E public again: €57.21B (+28.66%), EPS €55.93 · PT $2,152 (was $2,095).
  // ASML reports in EUR and trades in USD. The revenue figures below are converted at
  // EUR/USD 1.1253 (ECB reference rate, 16 October 2026; the last pull used 1.1204); growth
  // rates and margins are currency-neutral. Base-case 2030 revenue follows the higher
  // consensus path; the bull case was raised modestly with it.
  ASML: {
    name: 'ASML',
    sector: 'semis',
    shares: 1,
    cost: 1641.52,
    priceRef: 1641.52,
    pricePrev: 1859.86,
    // FY2025 revenue of €32.67B converted at 1.1253. Previously held in EUR against a
    // USD share price, which made every per-share figure on the page wrong by the rate.
    prevRev: 36.76,
    // growth[1] is the FY2027 consensus, public again on 18 October (+28.66%). It had been
    // carried forward at +25.69% from 29 August while the estimate was paywalled.
    growth: [36.13, 28.66, 18, 14, 12],
    // Consensus EPS €41.21 on 383.1M shares implies 35.5% of €44.47B of revenue, close
    // to the 34.15% GAAP trailing margin \u2014 IFRS reporting, so no meaningful
    // adjusted/GAAP gap to correct.
    niMargin: [35.5, 36, 37, 38, 38],
    ebMargin: [39, 41, 42, 43, 43],
    sharesOut: [0.3831, 0.379, 0.374, 0.369, 0.364],
    peLow: 25,
    peHigh: 40,
    evMult: 22,
    netCash: 12.27,
    caveat:
      'ASML reports in euros and its ADR trades in dollars, and this entry converts the revenue line at EUR/USD 1.1253 (ECB, 16 October 2026) so that revenue, earnings and the share price are all in the same currency. Until the September 2026 pull they were not: revenue sat in euros against a dollar price, which understated the implied P/E by roughly the exchange rate. Growth rates, margins and multiples are currency-neutral, but every absolute figure below moves with the rate, and a 5% swing in EUR/USD moves the 2030 price ladder by about the same amount. The FY2027 consensus behind growth[1] is public again and was re-sourced on this pull. Note that Q3 net income included an equity-investment gain of roughly €0.51B according to secondary summaries, so the trailing margin overstates the operating business slightly.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'A capex digestion cycle arrives, High-NA adoption slips and orders are pushed right.',
        rev: 73.52,
        margin: 32,
        pe: 20,
      },
      base: {
        label: 'Base',
        thesis: 'EUV stays the bottleneck for leading-edge logic and memory, and High-NA ramps on schedule.',
        rev: 97,
        margin: 38,
        pe: 32.5,
      },
      bull: {
        label: 'Bull',
        thesis: 'AI capacity keeps leading edge sold out and ASML prices a monopoly tool into a shortage.',
        rev: 112,
        margin: 40,
        pe: 40,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Bookings, not revenue',
        m: 'FY2026E revenue €44.47B ($50.04B), +36.1%',
        b: 'Revenue is backlog conversion; net bookings are the leading indicator and they move first and hardest.',
        c: 'Read net bookings and the EUV share of them — the Q3 release did not disclose them, so the Q4 release in January is the next chance. A revenue beat on falling bookings is the classic top of this cycle.',
      },
      {
        h: 'High-NA units and pricing',
        m: 'FY2027E €57.21B, +28.7%',
        b: 'The 2027 consensus step assumes High-NA systems ship and are recognised, at prices well above standard EUV. Consensus is now €57.21B, up from the August figure the model had carried.',
        c: 'Check High-NA units shipped, recognised and in backlog, plus average selling price, against that €57.21B estimate. Slippage moves the whole model right.',
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
        m: '34.15% GAAP net margin trailing',
        b: 'The margin path assumes mix keeps shifting toward EUV and High-NA.',
        c: 'Check gross margin against the EUV revenue share. Margin expanding without a mix shift is the number to be sceptical of.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'analyst', h: 'Citi raises ASML target to EUR 2,300 from 2,200; JPMorgan trims to $2,350 and BofA to $2,858 after results', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/asml-price-target-raised-to-eur-2300-from-eur-2200-at-citi-thefly-news', why: 'Mixed target moves on higher estimates: the street raised earnings but trimmed the multiple it pays for them.' },
      { d: '2026-10-14', k: 'guidance', h: 'ASML: planned 2027 and 2028 supply will not meet demand; studying 2028 capacity beyond +30%; value pricing lifts…', s: 'The Motley Fool (call takeaways)', u: 'https://www.fool.com/earnings/takeaways/2026/10/16/asml-3-key-takeaways-for-long-term-investors/', why: 'Supply-capped growth with pricing power: supports growth[1] near the +28.7% consensus and the rising margin path in 2027-2028.' },
      { d: '2026-10-14', k: 'earnings', h: 'ASML Q3 2026 sales €11.7B, net income €5.0B, GM 57.5%; guides Q4 €14.2-15.2B and FY2026 €44-45B', s: 'ASML 6-K (SEC)', u: 'https://www.sec.gov/Archives/edgar/data/0000937966/000162828026065813/pressreleasefinancialresul.htm', why: 'FY2026 guide midpoint ~€44.5B is ~37% growth, above the 31.25% the entry held; this pull lifts growth[0] to the new consensus.' },
      { d: '2026-10-14', k: 'capital', h: 'ASML repurchased about €4.1B of shares in Q3 under its 2026-2028 programme; interim dividend €1.88', s: 'ASML 6-K (SEC)', u: 'https://www.sec.gov/Archives/edgar/data/0000937966/000162828026065813/pressreleasefinancialresul.htm', why: 'Supports the declining sharesOut path (383.1M now vs 384.1M at last pull).' },
    ],
  },

  // Price $528.75 (5 October: $631.75, -16.3%) · cap $863.17B · EV $854.34B · 1.63B shares
  // (+1.07% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $41.31B · TTM EBITDA $9.56B (23.15%) · TTM NI $6.43B (15.58%), EPS
  // $3.90 · cash $13.11B, debt $4.28B → net cash $8.83B · FCF $8.40B on $1.68B capex · P/E
  // 134.96 trailing (was 161.25), 47.54 forward · EV/EBITDA 89.35 · FY2026E rev $50.95B
  // (+47.08%; was $50.94B), EPS $7.59 (was $7.58) · FY2027E is public: $89.05B (+74.79%),
  // EPS $15.76 — far above the 32% modelled for year two, which stays judgement · PT
  // $636.21 (was $619.51), now 20% ABOVE the price where it was below · Q3 reports 3
  // November.
  AMD: {
    name: 'AMD',
    sector: 'semis',
    shares: 1,
    cost: 528.75,
    priceRef: 528.75,
    pricePrev: 631.75,
    prevRev: 34.634,
    growth: [47.11, 32, 26, 22, 18],
    // Consensus EPS $7.59 on 1.63B shares implies a 24.3% net margin against a
    // 15.58% GAAP trailing margin — an adjusted number. Year one splits the
    // difference at 17%, on the view that scale rather than add-backs closes the gap.
    niMargin: [17, 20, 23, 25, 26],
    ebMargin: [25, 28, 31, 33, 34],
    sharesOut: [1.63, 1.65, 1.66, 1.67, 1.68],
    peLow: 25,
    peHigh: 45,
    evMult: 22,
    netCash: 8.83,
    caveat:
      'The multiple, not the growth rate, decides this one. At 134.96x trailing earnings and 89.35x EV/EBITDA, even after a 16% fall in the fortnight to 16 October, the price already contains a datacentre-accelerator business several times the size of the one AMD reports, so the base case below can be right about revenue and still return very little. Two things to hold separately: the consensus $7.59 FY2026 EPS is adjusted and implies a 24.3% net margin against a 15.58% GAAP trailing margin, and this model runs on the GAAP basis, which is why year one sits at 17%. The second is concentration — the revenue path here is an MI-series accelerator story, which makes AMD the same bet as NVDA at a different share of the same market rather than a diversification of it.',
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
        rev: 121.99,
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
        m: 'FY2026E revenue $50.95B, +47.1%',
        b: 'Almost all of the growth in this model is accelerators. Group revenue can grow on client and embedded while the part that justifies the multiple does not.',
        c: 'Look for a datacentre GPU number given on its own, with named hyperscale customers behind it. A group figure alone does not settle it.',
      },
      {
        h: 'GAAP margin against the adjusted headline',
        m: 'FY2026E EPS $7.59 adjusted; 15.58% GAAP trailing margin',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'macro', h: 'AMD extends losses as CoreWeave drop raises doubts on aggressive data-centre expansion', s: 'TipRanks', u: 'https://www.tipranks.com/news/why-micron-and-amd-stocks-are-falling-while-apple-edges-higher-and-what-wall-street-expects-next', why: 'Neocloud financing stress hits the second-source accelerator buyer first; downside to bear-case growth and the multiple.' },
      { d: '2026-10-14', k: 'macro', h: 'Chip stocks drop on AI-spending doubts and CoreWeave debt stress; AMD -5.7%, NVDA -3.2%, AVGO -3.1%, TSM -3.4%', s: 'TipRanks', u: 'https://www.tipranks.com/news/advanced-micro-devices-sinks-5-7-to-570-82-as-chip-stocks-drop-on-ai-spending-doubts', why: 'Sector-wide de-rating rather than an estimate cut: consensus barely moved, so the exit multiple (peLow/peHigh/evMult) is what the market is repricing.' },
      { d: '2026-10-13', k: 'deal', h: 'Scaleway to build an AMD MI355X AI supercomputer in Sweden, its first outside France', s: 'The Star (Reuters)', u: 'https://www.thestar.com.my/tech/tech-news/2026/10/13/scaleway-to-build-amd-powered-ai-supercomputer-in-sweden', why: 'Small, undisclosed-size win; incremental evidence for the European second-sourcing thesis behind accelerator growth.' },
      { d: '2026-10-06', k: 'analyst', h: 'Citi raises AMD target to $800 from $575 on agentic-AI CPU demand (Meta Muse runs on EPYC); sees CPU TAM $300B by 2030', s: 'TIKR', u: 'https://www.tikr.com/blog/amd-stock-citi-raises-price-target-800-meta-ai-demand', why: 'Shifts the growth case toward server CPU as well as accelerators; supports growth[1] but the thesis is one analyst\'s TAM view, highest of three estimates.' },
    ],
  },

  // Fiscal year ends August, so the columns sit about a quarter behind the calendar —
  // FY2026 covers September 2025 to August 2026 (a 53-week year ending 3 September) and was
  // reported on 30 September 2026, so year one is an actual, not a consensus.
  // Price $878.84 (5 October: $1,063.96, -17.4%) · cap $994.34B · EV $926.07B · 1.13B
  // shares (+1.60% YoY). No quarter reported since the 6 October pull, so the trailing
  // figures are unchanged. TTM rev $133.19B · TTM EBITDA $108.84B (81.72%) · TTM NI $84.97B
  // (63.80%), EPS $74.33 · cash $43.43B, debt $5.18B; the site's net cash of $68.27B is
  // larger than cash less debt ($38.25B) because it counts long-term investments, and the
  // EV bridge (cap less EV) agrees with the larger figure, so that is what netCash carries
  // here · FCF $58.96B on $30.71B capex · P/E 11.82 trailing (was 14.31), 4.98 forward (was
  // 6.03) · EV/EBITDA 8.51 · FY2026 (reported) rev $133.19B (+256.33%), EPS $75.52 ·
  // FY2027E rev $274.54B (+106.13%; was $274.73B), EPS $176.55 (was $176.42) · the 'Next
  // Year' box, not in the table and so its fiscal year is inferred, shows $317.09B
  // (+15.5%), EPS $204.47 — against 6% and a 42% margin modelled for that year · PT $1,561
  // (was $1,536).
  // Changed beyond the pull: the scenarios. Bull 2030 revenue had been $220B, below the
  // driver table's own year two; the base case now follows the driver table to CY2030 at
  // its 35% margin, and the bull case sits above it. The bear case is unchanged. These had
  // predated the FY2026 report and the FY2027 jump.
  MU: {
    name: 'Micron Technology',
    sector: 'semis',
    shares: 1,
    cost: 878.84,
    priceRef: 878.84,
    pricePrev: 1063.96,
    prevRev: 37.379,
    // Year one is the FY2026 actual, reported 30 September 2026, and year two the
    // public FY2027 consensus. Years three to five are a cycle, not a trend: memory
    // has never held a peak for five years, and the deceleration below is this
    // model's judgement rather than anything sourced.
    growth: [256.33, 106.13, 6, 4, 5],
    // 63.8% is the reported FY2026 margin; 71.4% lands year two on the $176.55 FY2027
    // consensus EPS, scaled to GAAP by the FY2026 GAAP-to-headline ratio. The fall after
    // it is deliberate — that is a peak-cycle margin, and the path reverts toward
    // something a memory maker can hold instead of extending the peak. The single-year
    // drop from 71.4% to 42% is judgement, and sharper than any cycle has to be.
    niMargin: [63.8, 71.4, 42, 33, 35],
    // 82% is FY2026 as reported (81.72%). 88% is judgement, set so EBITDA margin does
    // not fall below the 71.4% net margin in a year when revenue doubles.
    ebMargin: [82, 88, 64, 56, 58],
    sharesOut: [1.13, 1.13, 1.12, 1.11, 1.1],
    // A cyclical is cheapest on trailing earnings exactly when it is most expensive.
    // The band is low on purpose; it is not a growth-stock ladder.
    peLow: 6,
    peHigh: 14,
    evMult: 6,
    netCash: 68.27,
    caveat:
      "The base case here now returns about 27% to 2030, roughly 6% a year, because it follows the driver table: revenue still near $318B in 2030 at a 35% margin. Until the 18 October pull the scenarios had 2030 revenue collapsing to $177B and returned less than the price — but that predated the FY2026 report and sat below the driver table’s own 2027, so it was stale rather than a view. FY2026 is now reported — revenue up 256.33% at a 63.80% net margin — and consensus has FY2027 more than doubling again to $274.54B on $176.55 of EPS, a net margin above 70%. That is a cycle peak, and the driver table reverts margin toward 35% by 2030 instead of holding it. Reverse that one assumption and the answer reverses with it — which is exactly why the ranking says it ranks assumptions rather than companies. What the model cannot settle is whether high-bandwidth memory makes this business structurally less cyclical than it has ever been; if you think it does, raise the 2030 margin and the exit multiple and the entry looks entirely different. Two smaller notes: the fiscal year ends in August, so every column sits about a quarter behind the calendar, and the 4.98x forward P/E is struck against that FY2027 estimate — the market is paying very little for a year consensus already expects to be the largest in the company's history.",
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
        rev: 317.8,
        margin: 35,
        pe: 11,
      },
      bull: {
        label: 'Bull',
        thesis: 'High-bandwidth memory is a contracted, sold-forward business and memory re-rates permanently as an AI input.',
        rev: 360,
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
        m: '$30.71B own capex against $58.96B free cash flow',
        b: 'Memory downturns are made of everyone expanding at once. Competitor capacity decides the price Micron receives.',
        c: 'Read the other large suppliers’ capacity plans alongside this. Micron spending alone does not cause the turn, and it will not prevent it.',
      },
      {
        h: 'Conventional DRAM and NAND pricing',
        m: '63.80% trailing net margin',
        b: 'The non-HBM half is where the cycle shows up first, and it is still most of the bit supply.',
        c: 'Track bit shipments against average selling price separately. Volume growth with falling price is the shape of a peak.',
      },
      {
        h: 'The FY2027 estimate',
        m: 'Forward P/E 4.98 on $176.55 of FY2027 EPS',
        b: 'The market is not paying 12x trailing earnings; it is paying about 5x an estimate that assumes the peak extends another year.',
        c: 'Track how that estimate moves through the year before leaning on it. It is doing more work in the share price than anything visible on this page.',
      },
      {
        h: 'Capital return through the cycle',
        m: '$68.27B net cash',
        b: 'A strong balance sheet at the peak is what funds the trough. It is also what gets spent on capacity at the wrong moment.',
        c: 'Watch buybacks and capex against the cycle position. Retiring stock at the peak is a worse use of it than surviving the bottom.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'macro', h: 'Memory stocks slide on China CXMT server-DRAM architecture and 2029 oversupply worries; Micron ~-11% in five sessions', s: 'Digital Today (citing CNBC)', u: 'https://www.digitaltoday.co.kr/en/view/115400/why-samsung-sk-hynix-shares-tumbled-truth-behind-china-chase-and-oversupply-fears', why: 'Directly the bear case in this entry: a supply response compresses margin in years three to five; the market is pulling the peak-cycle exit multiple down, not FY2027 estimates.' },
      { d: '2026-10-15', k: 'macro', h: 'Rosenblatt calls CXMT a \'paper tiger\'; Micron down 17% since late-September earnings', s: 'TipRanks', u: 'https://www.tipranks.com/news/why-micron-and-amd-stocks-are-falling-while-apple-edges-higher-and-what-wall-street-expects-next', why: 'Analysts dispute the supply threat; consensus FY2027 EPS unchanged, so the move is a multiple de-rating.' },
      { d: '2026-10-06', k: 'regulatory', h: 'Micron settles Netlist patent fight for $600M ($30M/quarter over five years), ending ITC import-ban threat on HBM', s: 'The Star (Reuters)', u: 'https://www.thestar.com.my/tech/tech-news/2026/10/06/micron-enters-600-million-settlement-of-netlist-patent-dispute', why: 'Removes an HBM import-ban tail risk at a trivial cost (~$0.12B/yr vs ~$85B NI); neutral to margin, slightly positive for the multiple.' },
      { d: '2026-09-30', k: 'guidance', h: 'Micron guides Q1 FY2027 revenue $61.5B ± $1.5B, GAAP GM ~85.95%, GAAP EPS $37.84; FY2027 to grow every quarter', s: 'Micron release (Finviz)', u: 'https://finviz.com/news/397277/micron-technology-inc-reports-record-fiscal-fourth-quarter-and-full-year-2026-results', why: 'Q1 run-rate ~$246B annualised with sequential growth supports the ~$275B FY2027 consensus behind growth[1]; GAAP Q1 net margin ~70% supports niMargin[1] 71.4%.' },
    ],
  },

  // ---------------------------------------------------------------- software
  // Price $529.05 (5 October: $525.18, +0.7%) · cap $3.93T · EV $3.98T · 7.43B shares
  // (-0.16% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $331.84B · TTM EBITDA $194.24B (58.53%) · TTM NI $133.75B (40.31%),
  // EPS $17.95 · FCF $66.99B · cash $76.84B, debt $128.81B → net debt $51.97B · P/E 29.47
  // trailing, 26.75 forward · EV/EBITDA 20.49 · FY2026 (Jun-end, reported) rev $331.84B,
  // non-GAAP EPS $17.28 — BELOW the $17.95 of trailing GAAP EPS, so here the gap runs the
  // UBER way · FY2027E rev $391.34B (+17.93%; was $391.04B, +17.84%), EPS $19.78 (was
  // $19.75) · FY2028E $468.28B (+19.66%), EPS $23.72 · PT $599.24 (was $577.26), 56
  // analysts · FQ1 FY2027 reports 28 October. The $175–190B capex figure for this year and
  // up to $260B for 2027 come from TipRanks citing BofA, not a filing.
  MSFT: {
    name: 'Microsoft',
    sector: 'software',
    shares: 1,
    cost: 529.05,
    priceRef: 529.05,
    pricePrev: 525.18,
    prevRev: 331.84,
    growth: [17.93, 14, 13, 12, 11],
    niMargin: [37.55, 38, 38.5, 39, 39],
    ebMargin: [58, 58.5, 59, 59.5, 60],
    sharesOut: [7.43, 7.39, 7.35, 7.31, 7.27],
    peLow: 24,
    peHigh: 36,
    evMult: 22,
    netCash: -51.97,
    caveat:
      "Microsoft's fiscal year ends in June, so the calendar columns are approximate — CY2026 is built from the next-fiscal-year consensus of $391.34B. Note the company now carries net debt of about $52B against AI infrastructure spend, which is a change in character worth tracking, and that free cash flow of $66.99B is only half of $133.75B of net income for the same reason. ORCL, elsewhere in this file, is the same bet made with far more leverage.",
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
        m: 'Next-FY consensus revenue $391.34B, +17.9%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-18', k: 'deal', h: 'Microsoft reportedly withdraws from planned UK data-center deal with Nscale at Loughton, Essex, ahead of Nscale\'s ~$3B…', s: 'TipRanks (citing The Telegraph)', u: 'https://www.tipranks.com/news/microsoft-msft-exits-uk-data-center-deal-ahead-of-nscales-3b-ipo', why: 'Marginal signal on capex discipline: pulling third-party capacity eases the capex/FCF pressure behind the net-debt watch item, but no value disclosed.' },
      { d: '2026-10-16', k: 'regulatory', h: 'UK CMA proposes designating Microsoft with strategic market status in business software; roadmap includes bundling…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/uks-cma-says-microsoft-aws-can-do-more-to-address-cloud-services-barriers-thefly-news', why: 'Bundling remedies would pressure the Copilot/Office attach thesis and the bull-case pricing power; a consultation, not a ruling, so multiple risk only for now.' },
      { d: '2026-10-16', k: 'analyst', h: 'BofA expects Microsoft to keep free cash flow positive despite $175-190B capex this year and up to $260B signalled for…', s: 'TipRanks', u: 'https://www.tipranks.com/news/microsofts-msft-free-cash-flow-expected-to-remain-positive-despite-heavy-ai-spending', why: 'Capex trajectory is the main drag on GAAP margin via depreciation; a $260B 2027 figure argues against the rising niMargin path in out-years.' },
      { d: '2026-10-16', k: 'deal', h: 'NiSource signs 20-year power deal for Microsoft\'s NW Indiana data-center campus, ~1,100 MW from 2028; Microsoft funds…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/nisource-enters-long-term-energy-agreement-with-microsoft-thefly-news', why: 'Microsoft funding generation and transmission adds to the capex and fixed-cost base behind the net-debt position; supports Azure capacity growth from 2028.' },
      { d: '2026-10-16', k: 'analyst', h: 'StoneX raises Microsoft target to $600 from $525 ahead of Oct 28 FQ1 print, says Azure must clear a \'highly reasonable…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/microsoft-price-target-raised-to-600-from-525-at-stonex-thefly-news', why: 'Consistent with the consensus PT drift to $599; no change to revenue or margin drivers before the Oct 28 report.' },
    ],
  },

  // Price $128.23 (5 October: $142.48, -10.0%) · cap $388.73B · EV $520.80B · 3.03B shares
  // (+1.95% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. The last report, Q1 FY2027 on 10 September, was already inside the 6 October
  // figures: revenue $19.3B (+30%), RPO $664B, OCI +121%, capex $28.5B, FCF -$5.4B, GAAP
  // EPS $1.56 against $1.92 non-GAAP (from a secondary write-up, not Oracle's release). TTM
  // rev $71.78B · TTM EBITDA $34.43B (47.97%) · TTM NI $18.74B (26.36%), EPS $6.38 · FCF
  // -$28.72B · cash $37.08B, debt $169.14B → net debt $132.06B · P/E 20.11 trailing (was
  // 22.34), 15.06 forward · EV/EBITDA 15.12 · FY2026 (May-end, reported) rev $67.36B
  // (+17.35%), earnings $16.98B (+36.49%), so GAAP EPS about $5.90 against a $7.63
  // consensus · FY2027E rev $90.42B (+34.25%; was $90.45B), EPS $8.14 · FY2028E $131.71B
  // (+45.66%), EPS $10.99 · PT $237.36 (was $237.97), 43 analysts.
  // Unverified and worth checking by hand: a WSJ headline from about 8 October says Oracle
  // is seeking large new debt deals, which would contradict its earlier statement that it
  // would issue no more debt in CY2026. The article could not be opened.
  ORCL: {
    name: 'Oracle',
    sector: 'software',
    shares: 1,
    cost: 128.23,
    priceRef: 128.23,
    pricePrev: 142.48,
    prevRev: 67.36,
    growth: [34.25, 22, 18, 15, 12],
    // GAAP, and deliberately below both the reported FY2026 margin and the consensus.
    // FY2026 earned 25.2% of revenue and the $8.14 FY2027 consensus EPS implies about
    // 27%, but that estimate is non-GAAP and neither figure carries the depreciation on
    // a buildout that is currently running free cash flow at -$28.72B, or the interest
    // on $169.14B of debt. Year one steps down rather than extrapolating.
    niMargin: [21, 21, 22, 23, 24],
    // EBITDA sits above the net line precisely because it is struck before that
    // depreciation and interest. The mild decline is cloud mix against licence.
    ebMargin: [47, 46, 45, 45, 45],
    sharesOut: [3.03, 3.06, 3.09, 3.11, 3.13],
    peLow: 15,
    peHigh: 28,
    evMult: 14,
    netCash: -132.06,
    caveat:
      'The most leveraged version of the AI-capex bet in this book, and the market has already repriced it: the stock was down 50.21% over 52 weeks at the 5 October close and fell a further 10.0% by 16 October on unchanged estimates. Free cash flow is -$28.72B against $34.43B of trailing EBITDA, net debt is $132.06B, and enterprise value ($520.80B) exceeds market capitalisation ($388.73B) by about a third — the debt is now a larger part of this company than it is of anything else here. Three further qualifications. The fiscal year ends 31 May, so the CY2026 column is built from FY2027 (June 2026 to May 2027) and the calendar labels are offset by roughly half a year. The $8.14 consensus EPS is non-GAAP against GAAP earnings of about $5.90 for FY2026, so the margins below are deliberately lower than the headline. And the +34.25% consensus growth rate is a backlog-conversion forecast: it assumes contracted AI compute is delivered on schedule, which requires the capex that is producing the negative free cash flow in the first place. MSFT elsewhere in this file is the same bet with a fraction of the leverage.',
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
        rev: 167.68,
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
        m: 'FY2027E revenue $90.42B, +34.25%',
        b: 'A 33% growth rate at this size is contracted AI compute converting into revenue. The contract is signed; the capacity to serve it is being built with borrowed money.',
        c: 'Read RPO alongside the share of it expected to convert within twelve months. A rising backlog with a falling conversion share is the signal that the growth rate is moving right.',
      },
      {
        h: 'Free cash flow and the debt that funds it',
        m: 'FCF -$28.72B; net debt $132.06B',
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
        m: 'Consensus EPS $8.14 is non-GAAP; GAAP about $5.90',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'guidance', h: 'Oracle plans $90-95B capex this fiscal year (net ~$70B or less after customer prepayments); ~half of $664B RPO to…', s: 'TipRanks', u: 'https://www.tipranks.com/news/article/oracle-stock-is-a-waiting-game-says-top-investor', why: 'Capex at this scale against -$28.72B FCF argues the depreciation drag on GAAP niMargin is still ahead; RPO conversion timing supports the +34% year-one growth.' },
      { d: '2026-10-13', k: 'deal', h: 'Oracle proposes El Paso Electric backup-power agreement for Project Jupiter at $10M/yr for 10 years; Bloom fuel cells…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/oracle-reaches-agreement-with-el-paso-electric-says-bloom-still-primary-source-thefly-news', why: 'Small fixed cost, but another committed infrastructure obligation on top of the capex bill; immaterial to margin individually.' },
      { d: '2026-10-08', k: 'macro', h: 'Oracle falls ~4.7% after FT reports OpenAI annualized revenue ~$50B vs ~$70B widely cited; Oracle\'s ~$300B OpenAI…', s: 'OfficeChai (citing Financial Times)', u: 'https://officechai.com/ai/oracle-drops-5-nvidia-microsoft-also-fall-after-report-that-openais-revenue-is-lower-than-initially-reported/', why: 'Counterparty-concentration risk on the RPO behind the growth path; pushes toward the bear scenario\'s slow conversion and a lower exit multiple.' },
      { d: '2026-09-11', k: 'earnings', h: 'Oracle Q1 FY27: revenue $19.3B (+30%), RPO $664B, OCI +121%, capex $28.5B, FCF -$5.4B; FY27 guide >= $90B, non-GAAP…', s: 'Crypto Briefing', u: 'https://cryptobriefing.com/oracle-q1-fy27-earnings-revenue-rpo/', why: 'Confirms year-one growth (~34%) and the GAAP/non-GAAP gap ($1.56 vs $1.92); quarterly capex near $28.5B keeps FCF and net debt the binding constraint.' },
    ],
  },

  // Price $240.70 (5 October: $229.79, +4.7%) · cap $198.10B · EV $229.07B · 823.00M shares
  // (-7.44% YoY); the $25B accelerated repurchase settles finally in October 2026 and the
  // page does not say whether this count reflects all of it. No quarter reported since the
  // 6 October pull, so the trailing figures are unchanged. TTM rev $43.94B · TTM EBITDA
  // $12.90B (29.36%) · TTM NI $9.66B (21.99%), EPS $10.79 · FCF $15.15B · cash $11.40B,
  // debt $42.38B → net debt $30.97B · P/E 22.30 trailing (was 21.29), 16.41 forward ·
  // EV/EBITDA 17.76 · FY2027E (Jan-end) rev $46.30B (+11.49%) unchanged, EPS $16.76
  // (non-GAAP; was $16.75); Q2 FY2027 GAAP diluted EPS was $4.29 against $5.90 non-GAAP ·
  // FY2028E $50.80B (+9.73%), EPS $16.02 — a 4.37% DECLINE the page shows without
  // explanation · PT $285.68 (was $281.08), 56 analysts · next report about 2 December.
  CRM: {
    name: 'Salesforce',
    sector: 'software',
    shares: 1,
    cost: 240.7,
    priceRef: 240.7,
    pricePrev: 229.79,
    prevRev: 41.53,
    growth: [11.49, 10, 9, 9, 8],
    // GAAP. Trailing GAAP net margin is 21.99%; the $16.76 consensus is non-GAAP.
    niMargin: [22, 23, 24, 25, 26],
    ebMargin: [29, 31, 32, 33, 34],
    sharesOut: [0.823, 0.81, 0.797, 0.784, 0.771],
    peLow: 18,
    peHigh: 30,
    evMult: 16,
    netCash: -30.97,
    caveat:
      "Salesforce's fiscal year ends in January, so the calendar columns are offset. Consensus EPS of $16.76 is non-GAAP against a trailing GAAP net margin of 21.99%; the margins below are GAAP. At 22.3x trailing and 16.4x forward earnings the market is treating this as a value software name now, not a growth one, which is the interesting part — and the share count fell 7.44% in a year, the fastest buyback in this book.",
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
        m: 'Next-FY consensus revenue growth +11.5%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-12', k: 'analyst', h: 'BofA double-upgrades Salesforce to Buy from Underperform, PT $285 from $160, arguing AI deepens platform lock-in', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/salesforce-upgraded-to-buy-from-underperform-at-bofa-thefly-news', why: 'Directly addresses the seat-compression bear case; supports the multiple rather than the revenue line.' },
      { d: '2026-09-29', k: 'deal', h: 'Salesforce agrees to acquire Listen Labs, AI customer-research platform; close expected Q4 FY27, price undisclosed', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/salesforce-agrees-to-acquire-listen-labs-thefly-news', why: 'Tuck-in; immaterial to growth, but adds to the run of acquisitions (Informatica, Contentful, Fin) that inflate reported growth versus organic.' },
      { d: '2026-08-26', k: 'earnings', h: 'Salesforce Q2 FY27: revenue $11.3B (+11%, incl. $456M Informatica), cRPO $33.5B (+14%); FY27 guide raised to…', s: 'Salesforce', u: 'https://www.salesforce.com/news/press-releases/2026/08/26/fy27-q2-earnings/', why: 'Confirms ~11.5% year-one growth (partly acquired); the $25B ASR (103M shares initially delivered, final settlement Oct 2026) supports the falling sharesOut path; GAAP op-margin guide cut to 20.1% caps near-term niMargin.' },
    ],
  },

  // Price $141.97 (5 October: $136.08, +4.3%) · cap $146.78B · EV $148.52B · 1.03B shares
  // (-0.40% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $14.73B · TTM EBITDA $2.90B (19.66%) · TTM NI $1.67B (11.34%), EPS
  // $1.60 · FCF $4.58B · cash $4.66B, debt $8.45B → net debt $3.79B (the site shows
  // −$1.75B, which matches the cap-less-EV bridge; this entry stays on cash less debt) ·
  // P/E 88.70 trailing (was 85.02), 31.34 forward · EV/EBITDA 51.27 · FY2026E rev $16.22B
  // (+22.14%), EPS $4.07 (non-GAAP), both unchanged · FY2027E $19.27B (+18.80%, matching
  // the 19% modelled), EPS $5.01 · PT $152.23 (was $144.99) after a run of target raises
  // ahead of Q3, 49 analysts · Q3 reports 28 October.
  NOW: {
    name: 'ServiceNow',
    sector: 'software',
    shares: 1,
    cost: 141.97,
    priceRef: 141.97,
    pricePrev: 136.08,
    prevRev: 13.28,
    growth: [22.14, 19, 17, 15, 13],
    // GAAP. Trailing GAAP net margin is 11.34%; the $4.07 consensus is non-GAAP.
    niMargin: [11, 14, 17, 19, 21],
    ebMargin: [20, 23, 25, 27, 28],
    sharesOut: [1.03, 1.04, 1.05, 1.06, 1.07],
    peLow: 30,
    peHigh: 55,
    evMult: 30,
    netCash: -3.79,
    caveat:
      'The closest comparison in this book to AXON: high-quality recurring revenue and roughly 89x trailing earnings. As with AXON, the exit multiple decides the outcome, and GAAP margin of 11.34% is far below the ~26% implied by the non-GAAP consensus EPS. The two also moved together — both fell about 10-20% in the fortnight to 10 September 2026 on unchanged estimates, which is what a multiple-driven pair looks like.',
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
        m: 'FY2026E revenue $16.22B, +22.1%',
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
        m: 'GAAP net margin 11.34%; P/E 88.70',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'Piper Sandler lifts ServiceNow target to $175 from $140, says guidance implies modest Q4 organic growth acceleration', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/servicenow-price-target-raised-to-175-from-140-at-piper-sandler-thefly-news', why: 'Supports holding growth near 19-22% rather than the bear deceleration; multiple-driven name, so sentiment matters.' },
      { d: '2026-10-15', k: 'product', h: 'ServiceNow launches AI Passport to govern agent and MCP-server actions, plus expanded AI governance and spend tracking', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/servicenow-announces-new-ai-passport-solution-thefly-news', why: 'Positions NOW as the agent-governance layer (bull thesis); no pricing disclosed, so no change to revenue drivers yet.' },
      { d: '2026-10-14', k: 'deal', h: 'ServiceNow COO says \'no interest\' in acquiring AI agent startup Decagon after M&A-talk reports; prioritises organic…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/servicenow-coo-says-no-interest-in-acquiring-decagon-thefly-news', why: 'Removes a dilution/large-deal overhang on the share count and net cash; reinforces organic growth assumption.' },
      { d: '2026-10-12', k: 'analyst', h: 'RBC raises ServiceNow target to $176 from $130 in Q3 software preview, citing improved sentiment and bullish checks in…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/servicenow-price-target-raised-to-176-from-130-at-rbc-capital-thefly-news', why: 'Part of the consensus PT rise to $152; multiple re-rating, not a driver change.' },
    ],
  },

  // Price $227.39 (5 October: $272.67, -16.6%, including -7.0% on 16 October with no
  // company-specific cause found) · cap $233.33B · EV $229.14B · 1.03B shares (+3.24% YoY).
  // No quarter reported since the 6 October pull, so the trailing figures are unchanged.
  // TTM rev $5.40B · TTM EBITDA $106.86M (1.98%) · TTM NI $45.00M (0.83%), EPS $0.04 · FCF
  // $1.61B · cash $5.01B, debt $820.18M → net cash $4.19B · P/E 5,185.72 trailing (was
  // 6,218.35), 160.96 forward · EV/EBITDA 2,144.26 · FY2027E (Jan-end) rev $6.01B (+24.84%;
  // was +24.82%), EPS $1.26 (non-GAAP) · FY2028E $7.37B (+22.71%), EPS $1.61 · PT $246.15
  // (was $235.67): the price now sits about 8% BELOW the target, where on 5 October the
  // target sat 13.57% below the price · 53 analysts · next report about 1 December.
  CRWD: {
    name: 'CrowdStrike',
    sector: 'software',
    shares: 1,
    cost: 227.39,
    priceRef: 227.39,
    pricePrev: 272.67,
    prevRev: 4.81,
    growth: [24.82, 22, 20, 18, 16],
    // GAAP, and barely positive today: a trailing P/E of ~5,186 on EPS of $0.04 means
    // GAAP earnings are close to zero. The $1.26 consensus is non-GAAP.
    niMargin: [1, 4, 8, 12, 15],
    ebMargin: [4, 9, 14, 18, 21],
    sharesOut: [1.03, 1.04, 1.06, 1.08, 1.1],
    peLow: 40,
    peHigh: 80,
    evMult: 30,
    netCash: 4.19,
    caveat:
      'CrowdStrike is essentially not profitable on a GAAP basis — a trailing P/E of about 5,186 on $0.04 of EPS, and TTM EBITDA of $106.86M on $5.40B of revenue, say so plainly. Consensus EPS of $1.26 is non-GAAP and excludes very large stock compensation, which is also why the share count rose 3.24% in a year while free cash flow ran at $1.61B. Everything below year one is a forecast that GAAP margin arrives; the fiscal year also ends in January, so the columns are offset. Treat this as one of the most speculative entries in the book, alongside IREN and RKLB.',
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
        m: 'TTM EBITDA $106.86M on $5.40B revenue; P/E ~5,186',
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
        m: '1.03B shares, modelled up to 1.10B',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'analyst', h: 'Citi raises CrowdStrike target to $295 from $260, citing improved security spending in its CIO survey and AI-driven…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/crowdstrike-price-target-raised-to-295-from-260-at-citi-thefly-news', why: 'Supports holding growth in the low-20s; analysts are raising targets while the stock falls, so the move is multiple compression, not estimate cuts.' },
      { d: '2026-10-15', k: 'product', h: 'CrowdStrike shares fall 3.3% after Semafor reports Perplexity is \'giving away\' an AI sandbox', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/crowdstrike-shares-down-3-3-as-semafor-says-perplexity-giving-away-ai-sandbox-thefly-news', why: 'Competitive-pricing worry (free AI tooling) hits the exit multiple; no evidence yet of effect on ARR or growth.' },
      { d: '2026-10-12', k: 'analyst', h: 'Wells Fargo lifts CrowdStrike target to $300 from $235, expects platform security vendors to benefit from 2027 budgets', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/crowdstrike-price-target-raised-to-300-from-235-at-wells-fargo-thefly-news', why: 'Budget-consolidation thesis supports the base case\'s platform-consolidation growth path.' },
    ],
  },

  // Price $186.03 (5 October: $189.40, -1.8%, after -7.2% on 16 October with no
  // company-specific cause found) · cap $447.04B · EV $437.84B · 2.40B shares (+1.79% YoY).
  // No quarter reported since the 6 October pull, so the trailing figures are unchanged.
  // TTM rev $6.16B · TTM EBITDA $2.66B (43.25%) · TTM NI $3.02B (49.00%), EPS $1.17 · FCF
  // $3.36B · cash $9.41B, debt $211.40M → net cash $9.20B · P/E 159.10 trailing (was
  // 161.43), 98.03 forward · EV/EBITDA 164.44 · FY2026E rev $8.22B (+83.56%; was $8.21B),
  // EPS $1.62 · FY2027E public again: $12.33B (+50.12%), EPS $2.35 · PT $206.43 (was
  // $195.57), 32 analysts · Q3 reports 2 November. A Guardian report (17 October) that many
  // NHS trusts have rejected Palantir's patient-data platform could not be opened and is
  // not a news item.
  PLTR: {
    name: 'Palantir',
    sector: 'software',
    shares: 1,
    cost: 186.03,
    priceRef: 186.03,
    pricePrev: 189.4,
    prevRev: 4.48,
    // growth[1] is the FY2027 consensus, public again on 18 October (+50.12%). It had been
    // carried forward at +48.68% from 29 August while the estimate was paywalled.
    growth: [83.56, 50.12, 35, 28, 24],
    // Consensus EPS $1.62 on 2.40B shares implies 47.3%, close to the 49.00% GAAP trailing margin, so
    // there is no adjusted/GAAP gap to correct. The decline after year one is judgement:
    // a 49% net margin on $6B of revenue is flattered by interest income and tax items,
    // and is not what the operating business earns.
    niMargin: [47.3, 45, 43, 41, 40],
    ebMargin: [44, 45, 46, 46, 47],
    sharesOut: [2.4, 2.48, 2.51, 2.54, 2.56],
    peLow: 40,
    peHigh: 80,
    evMult: 40,
    netCash: 9.2,
    caveat:
      'The multiple decides this one, not the growth rate — the same problem AXON has, at a much larger scale. 159x trailing earnings and 164x EV/EBITDA mean the exit assumption in the scenario cards dominates every driver above it: revenue can compound at 30% a year for five years and the position still loses money if the multiple lands anywhere near the software average. Two other things. The 49% GAAP net margin is flattered by interest income on $9.41B of cash and by tax items, so the driver table steps it down rather than holding it flat. And the stock sits at $186.03 against a $206.43 consensus price target, about 11% below it, so nothing here depends on analysts being too cautious.',
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
        rev: 26.45,
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
        m: 'FY2026E revenue $8.22B, +83.56%',
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
        m: '159x trailing earnings, 164x EV/EBITDA',
        b: 'At this level the exit P/E is the whole investment case, and it is a judgement rather than a disclosure.',
        c: 'Set the 2030 P/E in the scenario cards first and read the result, then decide whether the growth assumptions matter at all.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'analyst', h: 'Mizuho raises Palantir target to $245 from $215 ahead of Q3, calling channel checks \'very healthy\' on cloud…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/palantir-price-target-raised-to-245-from-215-at-mizuho-thefly-news', why: 'Supports the FY2027 +50% consensus now visible, i.e. growth[1] nudges up from 48.68.' },
      { d: '2026-10-15', k: 'analyst', h: 'ARK sells $6.3M of Palantir after >60% rally since early August; article flags ~129x forward P/E as leaving little…', s: 'TipRanks', u: 'https://www.tipranks.com/news/crwv-meta-cbrs-cathie-wood-buys-26-4m-in-ai-stocks-sells-6-3m-in-palantir', why: 'Valuation pressure point: the exit multiple, not growth, decides this entry, consistent with the caveat.' },
      { d: '2026-10-14', k: 'regulatory', h: 'Palantir and London\'s MOPAC settle legal dispute over blocked GBP50M Met Police analytics contract; each side drops…', s: 'TheFly via TipRanks (citing Politico)', u: 'https://www.tipranks.com/news/the-fly/palantir-sadiq-khan-settle-dispute-politico-reports-thefly-news', why: 'Contract stays blocked, so no revenue; removes litigation cost but underlines political risk on non-US government revenue.' },
      { d: '2026-10-12', k: 'deal', h: 'Ondas and Palantir form Regna AI, a Palantir-powered sovereign/edge AI company funded by Ondas, with Ondas as first…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/ondas-palantir-announce-formation-of-regna-ai-thefly-news', why: 'Small commercial channel deal; marginal support for the commercial growth line, immaterial to drivers.' },
    ],
  },

  // Fiscal year ends 31 January, so the labels are offset by almost a full year: the year
  // stockanalysis.com calls FY2027 runs February 2026 to January 2027 and is the one that
  // overlaps CY2026. That is the estimate used for year one here, not the FY2026 column,
  // which has already finished.
  // Price $306.84 (5 October: $338.99, -9.5%, including -8.4% on 16 October with no
  // company-specific cause found) · cap $108.15B · EV $106.57B · 352.46M shares (+3.43%
  // YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $5.43B · TTM EBITDA -$1.04B (-19.07%) · TTM NI -$1.09B (-20.07%),
  // EPS -$3.17 · cash $2.34B, debt $2.76B; the site’s net cash of $1.57B counts long-term
  // investments and matches the EV bridge (cap less EV), so netCash carries that · FCF
  // $1.20B · no trailing P/E, forward 121.70 (was 134.58) · PS 19.92 · FY2026E (Jan-end,
  // done) rev $4.68B (+29.16%), EPS $1.25 · FY2027E rev $6.32B (+34.92%), EPS $2.22,
  // unchanged · FY2028E $8.10B (+28.19%, matching the 28% modelled), EPS $3.01 · PT $425.14
  // unchanged, 52 analysts · next report about 2 December.
  // Not yet in any sourced balance sheet: the $3.75B 0% convertible priced 28 September
  // (closing about 1 October; about $3.70B net, a $383.5M capped call, and $548.3M spent
  // buying back 2027 notes). The site's figures are as of 31 July. My own arithmetic from
  // the press release puts net cash roughly $0.7B lower once it lands; netCash is left on
  // the sourced $1.57B until a filing shows it.
  SNOW: {
    name: 'Snowflake',
    sector: 'software',
    shares: 1,
    cost: 306.84,
    priceRef: 306.84,
    pricePrev: 338.99,
    // Backs out of the FY2027 estimate at its stated growth rate, and lands on $4.687B
    // — the FY2026 actual of $4.68B, which is the cross-check that the offset is right.
    prevRev: 4.6874,
    growth: [34.83, 28, 24, 21, 18],
    // The consensus $2.22 EPS implies a 12.6% net margin; the trailing GAAP margin is
    // -20.07%. Almost the whole gap is stock compensation, so this path stays negative
    // for two years and crosses into profit in CY2028.
    niMargin: [-8, -2, 4, 8, 12],
    ebMargin: [-5, 2, 8, 13, 17],
    sharesOut: [0.3525, 0.365, 0.371, 0.376, 0.38],
    peLow: 30,
    peHigh: 55,
    evMult: 20,
    netCash: 1.57,
    caveat:
      'A GAAP-versus-adjusted gap wide enough to invert the answer, and the same one ZETA has at a much larger size. Snowflake generated $1.20B of free cash flow and a $1.09B GAAP net loss in the same twelve months; the difference is very largely stock-based compensation, which is also why the share count rises about 3.4% a year. This model is GAAP, so it shows losses until CY2028 and a base case below today’s price — on the adjusted basis the consensus uses, the same revenue path produces roughly twice the EPS and a completely different conclusion. Decide which basis you believe before reading the ladder, and note that at about 20x sales the exit multiple is doing more work here than the growth rate. The $3.75B convertible priced on 28 September is not yet in the balance sheet the source shows, and will add to the dilution. The fiscal year ending 31 January is the second trap: year one is the estimate labelled FY2027, not FY2026, which has already closed.',
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
        m: '19.9x sales',
        b: 'Open table formats let customers keep data outside any one vendor, which caps what storage and governance can charge.',
        c: 'Watch pricing commentary and gross margin. A stable gross margin under open-format pressure is the thing to verify, not assume.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'deal', h: 'Lumen and Snowflake announce intent to collaborate on private data connectivity, governance and security for…', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/lumen-snowflake-announce-intent-to-collaborate-thefly-news', why: 'Intent-stage partnership; marginal support for AI workload attachment, no driver change.' },
      { d: '2026-10-12', k: 'analyst', h: 'Phillip Securities downgrades Snowflake to Accumulate from Buy, $423 target, after the software rally', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/snowflake-downgraded-to-accumulate-from-buy-at-phillip-securities-thefly-news', why: 'Valuation-driven; supports a more cautious exit multiple, not a growth change.' },
      { d: '2026-10-06', k: 'regulatory', h: 'Snowflake tells Bloomberg it has found \'no compromise\' of its platform so far in probe of purported ASOS breach', s: 'TheFly via TipRanks', u: 'https://www.tipranks.com/news/the-fly/snowflake-tells-bloomberg-found-no-compromise-of-platform-thefly-news', why: 'Repeat-breach headline risk for a governed-data vendor; probe still open, so a tail risk to the multiple only.' },
      { d: '2026-09-28', k: 'capital', h: 'Snowflake prices upsized $3.75B of 0% converts due 2029/2031 (conv. ~$500/~$484), buys capped calls and repurchases…', s: 'Snowflake', u: 'https://www.snowflake.com/en/news/press-releases/snowflake-prices-upsized-private-placement-3-75-billion-convertible-senior-notes/', why: 'Adds ~$3.5B net debt against ~$2.8B net cash added (after $383.5M capped call, $548.3M 2027-note buyback), lowering netCash by ~$0.7B; conversion above ~$484-500 (capped to $820) is future dilution on sharesOut.' },
    ],
  },

  // ---------------------------------------------------------------- internet
  // ---------------------------------------------------------------- internet
  // Price $70.53 (post-split; 5 October: $67.50, +4.5%, despite -2.86% on 16 October) · cap
  // $293.68B · EV $301.21B · 4.16B shares (-1.48% YoY). No quarter reported since the 6
  // October pull, so the trailing figures are unchanged. TTM rev $48.37B · TTM EBITDA
  // $14.73B (30.45%) · TTM NI $13.65B (28.22%), EPS $3.17 · FCF $11.15B · cash $9.13B, debt
  // $16.65B → net debt $7.53B · P/E 22.22 trailing (was 21.27), 20.34 forward · EV/EBITDA
  // 20.45 · FY2026E rev $51.22B (+13.36% from $45.18B) unchanged, EPS $3.58 (was $3.59) ·
  // FY2027E $56.96B (+11.21%, matching the 11% modelled), EPS $3.80 · PT $91.39 (was
  // $92.82), 52 analysts · Q3 reports 20 October, two days after this pull — re-pull after
  // it. Netflix received a $2.8B Warner Bros. Discovery break-up fee in early 2026
  // (Variety, 5 March), which may flatter trailing GAAP net income; not checked against the
  // 10-Q.
  NFLX: {
    name: 'Netflix',
    sector: 'internet',
    shares: 1,
    cost: 70.53,
    priceRef: 70.53,
    pricePrev: 67.5,
    prevRev: 45.18,
    growth: [13.36, 11, 10, 9, 8],
    niMargin: [29.1, 30, 31, 31.5, 32],
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'Wedbush cuts Netflix target to $90 from $105, keeps Outperform; sees ad revenue roughly doubling to ~$3B in 2026', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/netflix-price-target-lowered-to-90-from-105-at-wedbush-thefly-news', why: 'Supports the ad-tier margin lever behind niMargin/base thesis while trimming the multiple analysts will pay (peHigh pressure).' },
      { d: '2026-10-16', k: 'analyst', h: 'BMO trims Netflix target to $125 from $135, flags muted Q3 engagement and slowing US/Canada growth', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/netflix-price-target-lowered-to-125-from-135-at-bmo-capital-thefly-news', why: 'Engagement weakness is a downside risk to the 11%/10% growth path in years two and three.' },
      { d: '2026-10-16', k: 'product', h: 'Netflix CCO Bela Bajaria to leave; former Disney/Fox executive Peter Rice named chief content officer', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/now-streaming-netflix-cuts-6-of-staff-and-names-new-cco-thefly-news', why: 'Content leadership change amid engagement concerns; a qualitative risk to growth, no direct number yet.' },
      { d: '2026-10-14', k: 'guidance', h: 'Netflix cutting ~1,000 jobs (about 6% of staff), mostly product, tech, legal and HR; says it remains on track for…', s: 'Fox Business', u: 'https://www.foxbusiness.com/fox-news-tech/netflix-reportedly-cutting-1000-jobs-largest-round-layoffs-since-2022', why: 'Cost cuts support the ebMargin/niMargin path; reaffirmed full-year outlook keeps FY2026 growth (13.36%) intact.' },
    ],
  },

  // Price $31.81 (5 October: $32.88, -3.3%, including -5.19% on 16 October despite a
  // Goldman upgrade) · cap $7.98B · EV $7.90B · 251.01M shares, +13.60% YoY. No quarter
  // reported since the 6 October pull, so the trailing figures are unchanged. TTM rev
  // $1.57B · TTM EBITDA $115.94M (7.38%) · TTM net income −$2.17M (−0.14%) · FCF $224.41M ·
  // cash $309.95M, debt $220.25M → net cash $89.70M · P/E n/a, forward 29.49 · EV/EBITDA
  // 68.10 · PS 5.08 · FY2025 rev $1.30B (+29.72%) · FY2026E rev $1.82B (+39.47%), EPS $0.95
  // (adjusted; was $0.96); the forecast table's FY2026 net income is $28.44M, about 1.6% of
  // revenue · FY2027E public again: $2.11B (+16.12%), EPS $1.20 · PT $37.86 (was $31.64),
  // now 19.0% ABOVE the price where it was 3.77% below, after target raises around the 7–8
  // October Zeta Live event · 15 analysts · Q3 reports about 3 November.
  ZETA: {
    name: 'Zeta Global',
    sector: 'internet',
    shares: 1,
    cost: 31.81,
    priceRef: 31.81,
    pricePrev: 32.88,
    prevRev: 1.305,
    // Two consensus years, not one: FY2026 at +39.47% and FY2027 at +16.12% (re-sourced on
    // 18 October; +16.02% in August), and the deceleration between them is steep enough to
    // be worth keeping rather than smoothing. Only 2028–2030 are judgement.
    growth: [39.47, 16.12, 14, 12, 11],
    // GAAP, and nowhere near the $0.95 consensus — that number is adjusted. Trailing GAAP
    // net income is −$2.17M on $1.571B of revenue, so year one is a company that has only
    // just reached break-even, not one earning a 20% margin.
    niMargin: [1, 3.5, 6, 8, 10],
    // Also GAAP-ish: trailing EBITDA of $115.94M is 7.4% of revenue, against the ~20%
    // adjusted EBITDA margin the company reports. Stock compensation is the difference.
    ebMargin: [8, 10, 12.5, 14.5, 16],
    // The count rose 13.60% in the last year. This path assumes that decelerates hard to
    // ~4% and then below — an assumption, and the one most likely to be too kind.
    sharesOut: [0.251, 0.272, 0.283, 0.292, 0.3],
    peLow: 25,
    peHigh: 45,
    // Not the 68.1x it trades at today. Holding that multiple to 2030 would be assuming
    // the answer; this is where a mid-teens grower with real GAAP earnings could sit.
    evMult: 20,
    netCash: 0.0897,
    caveat:
      'The widest GAAP-versus-adjusted gap in this book, and it is not close. The $0.95 FY2026 consensus EPS is adjusted; on GAAP the trailing twelve months show a $2.17M net loss, and trailing EBITDA of $115.94M is 7.4% of revenue against the roughly 20% adjusted EBITDA margin the company reports. Stock compensation is most of that difference, which makes it a share count problem as much as a margin one — the count rose 13.60% in a single year, and the path below assumes that decelerates to about 4%. Two more things before the numbers. The stock is at $31.81 against a $37.86 consensus price target and 68.10x EV/EBITDA; the target jumped 20% in a fortnight on unchanged estimates, so it is the analysts’ multiple that moved, and the base case here is still earnings catching up to the multiple, not the multiple re-rating. And free cash flow of $224.41M exceeds both trailing EBITDA and reported net income — the cash story is far stronger than the earnings story, which is exactly the argument the 2024 short thesis picked at.',
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
        rev: 3,
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
        m: 'FY2026E EPS $0.95 adjusted; TTM GAAP net income −$2.17M',
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
        m: 'FY2026E +39.5%, then FY2027E +16.1%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'Goldman Sachs upgrades Zeta Global to Buy from Neutral, target $45 from $30, expects results above consensus', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/zeta-global-upgraded-to-buy-from-neutral-at-goldman-sachs-thefly-news', why: 'Lifts the consensus target and argues for share gains from platform consolidation — upside to the multiple and to growth[1].' },
      { d: '2026-10-09', k: 'analyst', h: 'Needham raises Zeta target to $40 from $30 after Zeta Live, citing stronger AI marketing budget demand', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/zeta-global-price-target-raised-to-40-from-30-at-needham-thefly-news', why: 'One of roughly ten PT raises in the week (KeyBanc, Truist, B. Riley, Canaccord, Roth, Craig-Hallum, RBC, DA Davidson) that moved the consensus target from below to well above the price.' },
      { d: '2026-10-08', k: 'product', h: 'Zeta unveils AthenaOS \'enterprise intelligence operating system\' at Zeta Live 2026; no financial targets announced', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/zeta-global-announces-athenaos-enterprise-intelligence-operating-system-thefly-news', why: 'Product narrative only; no change to the revenue or margin drivers until it shows in reported growth.' },
      { d: '2026-10-06', k: 'deal', h: 'Zeta to acquire data-infrastructure firm Digital Audience, expanding in Europe; terms not disclosed', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/zeta-global-to-acquire-digital-audience-terms-not-disclosed-thefly-news', why: 'Small inorganic revenue add and possible further share issuance — watch the share count (already +13.6% YoY) if paid in stock.' },
      { d: '2026-10-05', k: 'deal', h: 'Zeta to acquire YC-backed AI engineering firm Senso, which powers its generative engine optimization product; terms…', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/zeta-global-to-acquire-senso-terms-not-disclosed-thefly-news', why: 'Second tuck-in in two days; undisclosed consideration is a share-count risk rather than a growth driver at this size.' },
    ],
  },

  // One of two entries whose consensus has revenue falling in year one — COIN is down
  // 21.96%. UNH was a third until its FY2026 consensus turned to +0.16% after its Q3
  // report.
  // Price $12.23 (5 October: $11.98, +2.1%, after -6.85% on 16 October) · cap $5.78B · EV
  // $4.73B · 472.80M shares (-4.27% YoY). No quarter reported since the 6 October pull, so
  // the trailing figures are unchanged. TTM rev $2.99B · TTM EBITDA $697.98M (23.34%) · TTM
  // NI $406.89M (13.61%), EPS $0.85 · cash $1.49B, debt $434.11M → net cash $1.06B (the
  // site rounds to $1.05B) · FCF $863.05M on $218.63M capex · P/E 14.39 trailing, 13.27
  // forward · EV/EBITDA 6.78 · PS 1.93 · FY2026E rev $2.75B (-4.97%), EPS $1.16, both
  // unchanged · NEW: FY2027E shows a SECOND decline, $2.60B (-5.42%), EPS $1.00 — consensus
  // no longer has the recovery the +3% modelled for year two assumes · the FY2026 net
  // income in the forecast table is $183.69M, 6.7% of revenue on what looks like a GAAP
  // basis, against 14% modelled for year one · PT $13.53 (was $13.60), 36 analysts, rating
  // Hold · Q3 reports about 5 November.
  TTD: {
    name: 'The Trade Desk',
    sector: 'internet',
    shares: 1,
    cost: 12.23,
    priceRef: 12.23,
    pricePrev: 11.98,
    prevRev: 2.8912,
    // Year one is the consensus decline. The recovery after it is modelled judgement:
    // a business that stabilises and grows with connected-TV budgets, not one that
    // returns to the 20%+ it compounded at before.
    growth: [-4.88, 3, 6, 7, 7],
    // Consensus EPS $1.16 implies a 19.9% net margin against 13.61% trailing GAAP.
    // Year one sits at the GAAP level and improves only with scale.
    niMargin: [14, 15, 16, 17, 18],
    ebMargin: [23, 24, 25, 26, 26],
    sharesOut: [0.4728, 0.455, 0.446, 0.437, 0.429],
    // A no-growth ad-tech band, not the one this company used to earn.
    peLow: 10,
    peHigh: 18,
    evMult: 8,
    netCash: 1.06,
    caveat:
      'Read this one as the counterexample to APP rather than as a second position in the same trade. Consensus has revenue declining 4.97% in CY2026 — one of only two negative year-one growth rates here, alongside COIN — and, new on the 18 October pull, a second decline of 5.42% in 2027, which the +3% modelled for year two does not reflect. The average price target of $13.53 sits about 11% above the market price only because the price fell sharply after 10 September while the target barely moved — analysts covering it did not think it was cheap at $13.97. At 1.93x sales and 6.78x EV/EBITDA the multiple already reflects that, which is the case for owning it and also the reason the base case below is a stabilisation story rather than a growth one. Two specifics to check before believing either: the consensus $1.16 EPS is adjusted and implies a 19.9% net margin against 13.61% GAAP trailing — and the forecast table’s own FY2026 net income is only 6.7% of revenue, so year one at 14% may be generous — and the whole question is whether the demand-side platform keeps its share of connected-TV budgets against retail media networks and the walled gardens — three of which (APP, META, GOOGL) are already in this book on the other side of the same trade.',
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
        rev: 3.44,
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
        m: 'FY2026E revenue $2.75B, -5.0%',
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
        h: 'The price target against the price',
        m: 'PT $13.53 against $12.23, 36 analysts',
        b: 'On 10 September the target sat 3% below the price; it is now about 11% above, because the price fell and the target did not move with it.',
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
        m: '472.80M shares, -4.27% year over year; $1.06B net cash',
        b: 'Shrinking the count 4% a year is a meaningful part of the per-share return when revenue is flat.',
        c: 'Check repurchases against free cash flow of $863.05M. A buyback funded from a declining business is a choice, not a given.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-14', k: 'analyst', h: 'UBS cuts Trade Desk target to $15 from $16, keeps Buy; ad checks show spend continuing to shift to Amazon', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/trade-desk-price-target-lowered-to-15-from-16-at-ubs-thefly-news', why: 'Share loss to retail media (AMZN) is the bear driver; supports lower growth[1-2] than the modelled +3%/+6%.' },
      { d: '2026-09-15', k: 'product', h: 'Trade Desk expands Veeva Crossix and IQVIA Digital integrations for in-flight pharma campaign optimisation', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/trade-desk-announces-expanded-integrations-with-veeva-crossix-iqvia-digital-thefly-news', why: 'Vertical product depth; marginal for growth, no number attached.' },
      { d: '2026-09-08', k: 'guidance', h: 'Trade Desk cuts ~15% of workforce (~575 roles), $39M–$51M severance charge; S&P will drop it from the S&P 500…', s: 'CFO Dive', u: 'https://www.cfodive.com/news/trade-desk-cuts-15-workforce/829838/', why: 'One-off charge hits 2H26 GAAP margin, then lowers opex — supportive of the 2027+ ebMargin path; index exit is a multiple/flow headwind.' },
      { d: '2026-09-08', k: 'analyst', h: 'Evercore ISI lifts Trade Desk target to $14 from $13 (In Line), says cuts are needed but a bigger strategic pivot is…', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/trade-desk-price-target-raised-to-14-from-13-at-evercore-isi-thefly-news', why: 'Cost-cut-not-growth framing is consistent with the low peLow/peHigh band (10–18).' },
    ],
  },

  // FY2025 GAAP: revenue $2.203B, operating income $441.98M (20.06%), net income $529.72M —
  // net income ABOVE operating income, on interest from a large cash balance plus tax
  // effects. That gap matters for reading the trailing margin below.
  // Price $156.14 (5 October: $150.42, +3.8%) · cap $30.04B · EV $27.28B · 192.40M shares
  // (+8.43% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $2.78B · TTM EBITDA $801.52M (28.84%) · TTM NI $871.10M (31.35%),
  // EPS $4.29 · cash $2.79B, debt $20.87M → net cash $2.77B · FCF $1.02B · P/E 36.40
  // trailing (was 35.06), 25.79 forward · EV/EBITDA 34.03 · PS 10.81 · FY2026E rev $3.39B
  // (+53.97% on a restated $2.20B base; was +53.75%), EPS $7.67 (was $7.68); the forecast
  // table's FY2026 net income is $1.09B, about 32% · FY2027E $4.47B (+31.90%, against 35%
  // modelled for year two), EPS $9.68 · PT $213.71 unchanged, 34 analysts · Q3 reports 29
  // October.
  RDDT: {
    name: 'Reddit',
    sector: 'internet',
    shares: 1,
    cost: 156.14,
    priceRef: 156.14,
    pricePrev: 150.42,
    // Backs out of the consensus at its stated growth rate to $2.20B, which matches
    // the FY2025 reported revenue of $2.203B — the cross-check that the anchor is right.
    prevRev: 2.203,
    growth: [53.88, 35, 28, 22, 18],
    // Consensus EPS $7.67 implies about a 44% net margin. Reported FY2025 operating
    // margin was 20.06%; trailing net margin of 31.35% is itself flattered by interest
    // income and tax items. Year one starts at 26% and climbs on operating leverage.
    niMargin: [26, 28, 30, 31, 32],
    ebMargin: [30, 33, 35, 37, 38],
    sharesOut: [0.1924, 0.205, 0.211, 0.216, 0.22],
    peLow: 25,
    peHigh: 45,
    evMult: 25,
    netCash: 2.77,
    caveat:
      'Three separate reasons the headline margin overstates the business. The consensus $7.67 FY2026 EPS implies roughly a 44% net margin, which no advertising platform in this book earns — META, the most profitable of them, does not. The trailing 31.35% GAAP net margin is itself above the 20.06% operating margin Reddit reported for FY2025, because interest on $2.77B of net cash and tax items sit below the operating line; strip those and the operating business is roughly a fifth-margin company growing quickly, not a third-margin one. And the share count rose 8.43% in a year, so per-share progress trails the company. What the model cannot price at all is the single largest swing factor: a meaningful share of traffic arrives through one search engine, owned by GOOGL, which is also in this book and is being paid separately for data licensing.',
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
        rev: 8.43,
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
        m: 'FY2026E revenue $3.39B, +54.0%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-09-30', k: 'regulatory', h: 'Reddit to end RSS feeds on 13 Nov and public API access in March 2027, citing AI scraping; AI users will need…', s: 'TechCrunch', u: 'https://techcrunch.com/2026/09/30/reddit-is-killing-rss-feeds-ending-public-api-access-because-of-ai-bots/', why: 'Pushes AI data users toward paid licences — upside to the data-licensing (\'other\') revenue line, which was $43M in Q2 (+24% YoY).' },
      { d: '2026-09-22', k: 'regulatory', h: 'California judge denies Anthropic\'s bid to drop Reddit\'s lawsuit over scraping posts for AI training', s: 'TipRanks', u: 'https://www.tipranks.com/news/reddit-stock-surges-over-5-as-big-court-win-against-ai-giant-anthropic-drives-wall-street-rally', why: 'Strengthens Reddit\'s leverage to monetise its data; a settlement/licence would lift high-margin licensing revenue.' },
      { d: '2026-09-18', k: 'analyst', h: 'DA Davidson cuts Reddit target to $185 from $200 (Buy), citing Similarweb data showing pressure on global daily actives', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/reddit-price-target-lowered-to-185-from-200-at-da-davidson-thefly-news', why: 'User-traffic softness is a downside risk to the 35%/28% growth assumed for 2027–28.' },
      { d: '2026-09-18', k: 'analyst', h: 'BNP Paribas initiates Reddit at Neutral with a $180 target', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/reddit-initiated-with-a-neutral-at-bnp-paribas-thefly-news', why: 'Another sub-consensus target; tempers the multiple rather than any operating driver.' },
      { d: '2026-09-15', k: 'analyst', h: 'Wells Fargo sees lower odds of a successful Reddit–Google AI data deal renewal after Google pilots paying publishers…', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/wells-fargo-sees-lower-probability-of-successful-reddit-google-ai-deal-renewal-thefly-news', why: 'Directly hits the GOOGL dependency in the caveat: risk to both licensing revenue and search-referred traffic (growth).' },
    ],
  },

  // ---------------------------------------------------------------- space
  // Listed on Nasdaq 12 June 2026, so there is no full year as a public company and no
  // trading history to build a multiple band from.
  // Price $146.03 (5 October: $171.09, -14.6%) · cap $1.98T · EV $1.92T · 13.57B shares
  // (+41.79% YoY). No quarter reported since the 6 October pull, so the trailing figures
  // are unchanged. TTM rev $23.04B · TTM EBITDA $5.90B (25.59%) · TTM NI -$8.89B (-35.66%),
  // EPS -$2.27 · FCF -$32.52B · cash $100.01B, debt $39.71B → net cash $60.30B · fwd P/E
  // 92.05 (was 109.70) · EV/EBITDA 325.88 (was 383.56) · PS 86.01 · FY2026E rev $45.20B
  // (+142.04%; was $44.68B, +139.27%), EPS +$0.01 — the sign is now settled (was -$0.09),
  // though the forecast table's FY2026 net income of $2.30B would be about 5.1% of revenue;
  // FY2026E FCF -$50.83B · FY2027E rev $116.04B (+156.72%; the model had carried +136.32%
  // from August), EPS $1.99 (was $1.93) · PT $222.71 (was $226.04), 38 analysts · Q3
  // reports 20 October — re-pull after it.
  // Two things the drivers do not hold. Analysts now treat SpaceX largely as an AI-compute
  // business: Q2 capex was $18.4B, $15.8B of it AI. And the pending EchoStar spectrum deal
  // ($17B or $19.6B depending on the source) would be paid partly in stock, which would add
  // to the share count.
  SPCX: {
    name: 'SpaceX',
    sector: 'space',
    shares: 1,
    cost: 146.03,
    priceRef: 146.03,
    pricePrev: 171.09,
    prevRev: 18.67,
    // Both consensus years are above +140%, and nothing else in this book has a curve like
    // it. growth[1] is the FY2027 consensus re-sourced on 18 October (+156.72%; +136.32% in
    // August). 2028-2030 are a guess at how it decays.
    growth: [142.04, 156.72, 60, 40, 30],
    // Consensus-derived: $0.01 FY2026 EPS on 13.57B shares is 0.3% of revenue, $1.99
    // FY2027 on 14.1B shares about 24.2%. Year one would be 5.1% on the table's $2.30B
    // net income instead; the EPS is used because it is what every other entry lands on.
    // The jump between them is consensus, not judgement, and it is the single largest
    // assumption in this entry.
    niMargin: [0.3, 24.2, 25, 26, 27],
    ebMargin: [22, 28, 32, 34, 35],
    sharesOut: [13.57, 14.1, 14.3, 14.5, 14.6],
    peLow: 25,
    peHigh: 45,
    evMult: 20,
    netCash: 60.3,
    caveat:
      'The newest listing in this book and the least testable entry in it. SpaceX came to Nasdaq on 12 June 2026, so there is no full year as a public company, no trading history to set a multiple band against, and the share count has risen 41.79% in twelve months. The trailing twelve months show an $8.89B net loss and $32.52B of negative free cash flow on $23.04B of revenue — a company consuming capital at enormous scale, funded by a $100.01B cash pile. Everything that makes the model work happens inside the consensus: revenue forecast to rise 142% in 2026 and a further 157% in 2027, with net margin going from roughly break-even to about 24% in the same step. That is Starship and Starlink both scaling on schedule — and, increasingly, a large AI-compute buildout (Q2 capex was $18.4B, $15.8B of it AI) — priced as though all of it works. Consensus free cash flow for 2026 is -$50.83B, worse than the trailing figure. EV/EBITDA is 325.88x today, after a 15% fall in the fortnight to 16 October. Treat every column past CY2026 as a forecast about a business that does not exist yet, and size the position accordingly.',
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
        rev: 337.82,
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
        m: 'FY2026E EPS $0.01 -> FY2027E $1.99',
        b: 'Consensus has net margin going from about 0.3% to about 24% in one year. Nothing else in this book asks you to believe a step that large.',
        c: 'Check gross margin by segment. If Starlink is not carrying it, the step does not happen and every year after 2027 in this model is wrong.',
      },
      {
        h: 'Starlink subscribers and revenue per user',
        m: 'FY2026E revenue $45.20B, +142.0%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-18', k: 'earnings', h: 'Q3 preview: consensus revenue $12.89B (+65% YoY) and EPS $0.14 ahead of 20 Oct report; Q2 capex was $18.4B, $15.83B on…', s: 'TipRanks', u: 'https://www.tipranks.com/news/spacex-stock-forecast-what-analysts-expect-ahead-of-october-20-earnings', why: 'Q2 AI capex at this scale is the FCF burn driver; the print two days after this pull will reset growth[0] and niMargin[0].' },
      { d: '2026-10-16', k: 'analyst', h: 'Evercore ISI raises SpaceX target to $275 from $230 (Outperform), lifts 2029 adj. EBITDA to $266B, sees $104B…', s: 'TipRanks', u: 'https://www.tipranks.com/news/spacex-stock-the-proof-points-are-closer-says-evercore-as-it-raises-price-target', why: 'Bull-side support for the steep growth curve, but with a lower multiple (15.3x from 16.6x EBITDA) for AI funding risk.' },
      { d: '2026-10-16', k: 'deal', h: 'Tesla–SpaceX merger odds on Kalshi jump to 55% (before April 2027) after flying Roadster demo; no agreement announced', s: 'TipRanks', u: 'https://www.tipranks.com/news/tesla-spacex-merger-odds-surge-from-30-to-55-in-just-2-days-heres-why', why: 'Speculative; a share-based combination would reset sharesOut and the whole entry. No driver change until something is announced.' },
      { d: '2026-10-16', k: 'regulatory', h: 'Trump denies ordering Starshield restrictions in Ukraine after military users report failed missions; accounts…', s: 'Meduza', u: 'https://meduza.io/en/news/2026/10/16/trump-denies-ordering-restrictions-on-ukraine-s-military-starlink-service-and-says-he-doesn-t-think-elon-musk-did-either', why: 'Government/geopolitical risk to the Starlink/Starshield franchise; supports a lower multiple, not a revenue change.' },
      { d: '2026-10-09', k: 'deal', h: 'SpaceX agrees to buy Grain Management\'s 800 MHz spectrum for about $8B cash (per WSJ) for Starlink Mobile…', s: 'Broadband Breakfast', u: 'https://broadbandbreakfast.com/earthquake-in-the-sky-spacex-pays-8-billion-for-grain-management-airwaves-to-advance-starlink-mobile/', why: '~$8B more cash out on top of the AI build — reduces netCash ($60.3B) and lengthens the path to positive FCF; long-run growth option for Starlink.' },
    ],
  },

  // Price $50.84 (5 October: $73.02, -30.4%, mostly after the 14 October news that
  // Neutron's first launch slips from Q4 2026 into 2027) · cap $30.43B · EV $28.17B ·
  // 598.46M shares (+15.68% YoY). No quarter reported since the 6 October pull, so the
  // trailing figures are unchanged. TTM rev $769.15M · TTM EBITDA -$150.52M (-19.57%) · TTM
  // NI -$165.46M (-21.51%), EPS -$0.28 · FCF -$371.14M · cash $2.30B, debt $133.69M → net
  // cash $2.17B (the site prints $2.25B; this entry now uses cash less debt, as the file
  // header says) · P/E n/a, fwd P/E 3,610.50 · PS 39.56 · FY2026E rev $958.59M (+59.29%;
  // was $962.29M, +59.90%), EPS -$0.05 adjusted (was -$0.04) · on a GAAP basis the forecast
  // table's FY2026 net income is -$182.94M, -19.1% of revenue · FY2027E public again:
  // $1.33B (+38.82%; the model had carried +42.33% from August), EPS +$0.06 adjusted · PT
  // $102.26 (was $109.37), 21 analysts; target cuts after the delay may not all be in it
  // yet · Q3 reports about 9 November.
  // Changed beyond the pull: year one had been set from the adjusted EPS (-2.56%). The
  // model is GAAP, and the source now shows GAAP-basis consensus net income, so year one is
  // -19.1% and year two -6% rather than the adjusted +2.2%; years three to five are
  // unchanged.
  RKLB: {
    name: 'Rocket Lab',
    sector: 'space',
    shares: 1,
    cost: 50.84,
    priceRef: 50.84,
    pricePrev: 73.02,
    prevRev: 0.6018,
    // growth[1] is the FY2027 consensus, public again on 18 October (+38.82%; +42.33% in
    // August). It has not obviously absorbed the Neutron slip yet.
    growth: [59.29, 38.82, 38, 32, 28],
    // GAAP: -19.1% is the forecast table's FY2026 net income of -$182.94M on $958.59M. The
    // adjusted -$0.05 EPS would be about -3%, and the old year two of +2.2% came from the
    // adjusted FY2027 estimate, so it is now -6% — still improving, but on the GAAP line.
    niMargin: [-19.1, -6, 7, 11, 14],
    ebMargin: [2, 8, 14, 19, 22],
    sharesOut: [0.5985, 0.64, 0.66, 0.678, 0.692],
    peLow: 35,
    peHigh: 70,
    evMult: 25,
    netCash: 2.17,
    caveat:
      'Loss-making at every line — net income -$165.46M, EBITDA -$150.52M and free cash flow -$371.14M on $769.15M of trailing revenue — while carrying a $30.43B market capitalisation, down from $43.70B on 5 October. There is no trailing P/E because there are no earnings; the forward P/E is about 3,600x on an adjusted estimate. That combination means the price is not a claim about the current business, it is a claim about Neutron, and Neutron has not yet flown at all — its first launch slipped from Q4 2026 into 2027 on 14 October. The share count rose 15.68% in a year to fund exactly that. This is the same shape as IREN in this book: real revenue, real losses, and every margin past year one a forecast about capacity that does not exist yet. On these assumptions the base case lands below today’s price — the model is saying the expectation is already in the stock.',
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
        rev: 3.1,
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
        m: 'First launch now 2027; FY2027E revenue $1.33B, +38.8%',
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
        m: 'FCF -$371.14M against $2.17B net cash',
        b: 'Roughly six years of runway at the current burn, before Neutron\u2019s ramp costs. The count already grew 15.68% in a year.',
        c: 'Check quarterly free cash flow and capex guidance. The next equity raise \u2014 its size and its price \u2014 is what turns a good outcome into a mediocre per-share one.',
      },
      {
        h: 'The crossover to profit',
        m: 'FY2026E net income -$182.94M (GAAP basis); FY2027E EPS +$0.06 adjusted',
        b: 'Adjusted consensus has the company crossing into profit next year, and every margin in the driver table builds from that crossing happening.',
        c: 'Check gross margin by segment and the operating loss trend. A crossing achieved by one-off items is not the crossing this model needs.',
      },
      {
        h: 'Backlog and its conversion',
        m: 'Contracted backlog and expected recognition',
        b: 'Backlog is the closest thing to visibility a launch company has, and its conversion rate is the honest growth signal.',
        c: 'Check total backlog, how much is expected within twelve months, and what converted last quarter against what was promised.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'Goldman cuts Rocket Lab target to $67 from $75 (Hold), expects higher costs and cash burn; Clear Street cuts to $105…', s: 'TipRanks', u: 'https://www.tipranks.com/news/rklb-stock-forecast-goldman-sachs-cuts-price-target-to-67-after-neutron-launch-delay', why: 'Higher burn lowers netCash path and raises dilution risk; Clear Street says growth/profit pushed back ~3 quarters — shifts growth and niMargin curves right.' },
      { d: '2026-10-16', k: 'analyst', h: 'Citizens cuts Rocket Lab target to $90 from $130 (Outperform); main impact is delayed FY27–FY28 Neutron launch revenue', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/rocket-lab-price-target-lowered-to-90-from-130-at-citizens-thefly-news', why: 'Directly lowers growth[1] (FY2027) and growth[2]; model still carries the August +42.33%.' },
      { d: '2026-10-15', k: 'product', h: 'Neutron debut slips from Q4 2026 into 2027 after voids found in carbon-composite propellant dome; new date after Q1…', s: 'Via Satellite', u: 'https://www.satellitetoday.com/launch/2026/10/15/rocket-labs-neutron-debut-now-delayed-to-2027/', why: 'The binary event under the whole entry moved right; every margin past year one in the driver table assumes Neutron flies and sells.' },
      { d: '2026-10-15', k: 'analyst', h: 'KeyBanc cuts Rocket Lab target to $100 from $135, keeps Overweight after Neutron delay', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/rocket-lab-price-target-lowered-to-100-from-135-at-keybanc-thefly-news', why: 'Multiple compression on timing, not thesis; peHigh 70 looks more stretched.' },
      { d: '2026-10-09', k: 'deal', h: 'Synspective books 20 more Electron launches (2028–2031), Rocket Lab\'s largest commercial Electron contract; launch…', s: 'CompositesWorld', u: 'https://www.compositesworld.com/news/rocket-lab-secures-20-launch-commercial-contract-for-all-composite-electron', why: 'Supports the steady Electron base in 2028–30 growth; value undisclosed.' },
    ],
  },

  // The incumbent, added so SPCX and RKLB have something mature to sit against.
  // Price $552.09 (5 October: $506.63, +9.0%) · cap $127.42B · EV $144.16B · 230.79M shares
  // (-1.97% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $77.01B · TTM EBITDA $9.68B (12.57%) · TTM NI $6.29B (8.16%), EPS
  // $27.14 · cash $3.79B, debt $20.54B → net debt $16.75B · FCF $8.73B on $1.67B capex ·
  // P/E 20.34 trailing (was 18.67), 17.79 forward · EV/EBITDA 14.89 · PS 1.65 · dividend
  // yield 2.61% (was 2.72%; the quarterly dividend rose to $3.60 from $3.45) · FY2026E rev
  // $80.99B (+7.91%; was $81.01B), EPS $30.45 (was $30.50) · FY2027E $85.60B (+5.70%,
  // against 5% modelled), EPS $32.63 · PT $618.86 (was $636.74), 23 analysts · Q3 reports
  // 22 October — re-pull after it.
  LMT: {
    name: 'Lockheed Martin',
    sector: 'space',
    shares: 1,
    cost: 552.09,
    priceRef: 552.09,
    pricePrev: 506.63,
    prevRev: 75.044,
    // Defence procurement growth, not technology growth. Nothing past year one is
    // sourced; 4-5% is roughly the pace of the budgets this revenue comes out of.
    growth: [7.92, 5, 4, 4, 4],
    // Consensus EPS $30.45 on 230.79M shares implies 8.68% against an 8.16% trailing margin. Close
    // enough that no adjustment is needed — one of the few entries where the
    // consensus and the GAAP basis agree.
    niMargin: [8.68, 8.8, 9, 9.2, 9.5],
    ebMargin: [12.6, 13, 13.2, 13.5, 13.8],
    sharesOut: [0.2308, 0.225, 0.221, 0.217, 0.213],
    peLow: 15,
    peHigh: 21,
    evMult: 13,
    netCash: -16.75,
    caveat:
      'The frame fits this one better than almost anything else in the book, which is exactly why the two omissions matter. The model prices no dividend, and at a 2.61% yield that is a large part of the expected total return on a company growing 4% — the same problem KO has here. And a fixed-price development programme can take a multi-billion-dollar charge in a single quarter with no warning in any line above, which is the specific way defence primes lose money; an 8-9% net margin looks stable until one does. Two further notes: revenue is a function of government budgets rather than of demand, so the growth path is a political forecast wearing a financial one, and $16.75B of net debt against $127.42B of market cap means the equity is modestly levered to it.',
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
        m: 'FY2026E revenue $80.99B, +7.9%',
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
        m: '2.61% yield',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-14', k: 'capital', h: 'Lockheed expands Grand Prairie, Texas munitions plant ($300M) within an $8–9B commitment through 2030 to scale…', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/lockheed-martin-expands-advanced-munitions-manufacturing-in-texas-driving-thousands-of-new-american-jobs-302909170.html', why: 'Capacity build behind the bull-case munitions thesis (growth); $8–9B of spend through 2030 is a drag on FCF and buyback pace (sharesOut).' },
      { d: '2026-10-14', k: 'analyst', h: 'Bernstein cuts Lockheed target to $564 from $629 (Market Perform); FY27 budget stalled in Congress, little help before…', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/lockheed-martin-price-target-lowered-to-564-from-629-at-bernstein-thefly-news', why: 'Budget delay is the specific risk to growth[1] (5%) and the political-forecast point in the caveat.' },
      { d: '2026-10-14', k: 'analyst', h: 'Vertical Research upgrades Lockheed to Buy from Hold, $600 target; sees missiles division growing ~11% a year through…', s: 'TheFly (TipRanks)', u: 'https://www.tipranks.com/news/the-fly/lockheed-martin-upgraded-to-buy-at-vertical-research-following-selloff-thefly-news', why: 'Mix shift to missiles supports the bull case\'s growth and margin.' },
      { d: '2026-10-09', k: 'capital', h: 'Lockheed declares Q4 2026 dividend of $3.60 per share, up $0.15; payable 31 Dec', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/lockheed-martin-declares-fourth-quarter-2026-dividend-302903859.html', why: 'Raises the unmodelled dividend ($14.40 annualised, ~2.6% yield) the caveat says is most of total return.' },
      { d: '2026-10-09', k: 'product', h: 'Lockheed debuts PAC-3 Edge interceptor for Army\'s Future Interceptor competition; testing 2027, deployment targeted by…', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/lockheed-martin-debuts-pac-3-edge-for-the-us-armys-innovative-future-interceptor-program-302903852.html', why: 'Long-dated missile-defence growth option; no revenue inside the 2030 window yet.' },
    ],
  },

  // Pre-scale: $115.30M of trailing revenue against a $15.82B market cap, so the PS ratio
  // is 137.24 and there is no P/E at all.
  // Price $40.66 (5 October: $58.44, -30.4%, on the SpaceX spectrum news) · cap $15.82B ·
  // EV $16.53B · 389.17M shares (+39.67% YoY). No quarter reported since the 6 October
  // pull, so the trailing figures are unchanged. TTM rev $115.30M · TTM EBITDA -$406.32M ·
  // TTM NI -$618.76M, EPS -$2.16 · cash $2.29B, debt $2.99B → net debt $705.48M · FCF
  // -$1.64B on $1.49B capex · PS 137.24 (was 197.25) · FY2026E rev $167.49M (+136.18%; was
  // $168.84M, +138.08%), EPS -$2.03 unchanged · FY2027E $581.65M (+247.27%, against 180%
  // modelled), EPS -$1.29 · PT $74.28 (was $79.61), 13 analysts, consensus now Hold · Q3
  // reports 9 November. No BlueBird launch date could be verified.
  ASTS: {
    name: 'AST SpaceMobile',
    sector: 'space',
    shares: 1,
    cost: 40.66,
    priceRef: 40.66,
    pricePrev: 58.44,
    prevRev: 0.07092,
    // Every one of these is a forecast about a constellation that is not built yet.
    // Year one is the consensus; the rest is a satellite-deployment schedule expressed
    // as revenue, which is a different kind of number from the ones above it.
    growth: [136.18, 180, 120, 80, 55],
    // -472% lands year one on the consensus -$2.03 EPS at 389.17M shares. Profitability arrives in the
    // model in CY2029, which assumes the constellation is finished and carrying traffic.
    niMargin: [-472, -120, -20, 12, 22],
    ebMargin: [-350, -80, 0, 25, 35],
    // Up 39.67% in a year, behind only BULL, CHA, SPCX and IREN. Satellites are paid for
    // with equity until they earn, and this path assumes the pace roughly halves.
    sharesOut: [0.3892, 0.46, 0.5, 0.53, 0.55],
    peLow: 20,
    peHigh: 40,
    evMult: 15,
    netCash: -0.70548,
    rankable: false,
    rankReason:
      'there is no meaningful 2030 earnings number to rank — 137x sales, no trailing P/E, and a result that depends entirely on whether a constellation that does not exist yet gets built',
    caveat:
      'The price already contains the outcome. At 137.24x trailing sales — after a 30% fall in the fortnight to 16 October — a $15.82B market cap rests on $115.30M of revenue, so the base case below — which assumes the constellation is built, operating and carrying a 22% net margin on $2.9B of revenue in 2030 — still values the equity at less than today. That is not a forecast that the business fails; it is what a 137x sales multiple means arithmetically, and it is the same shape as SPCX and RKLB at an earlier stage. Everything else compounds it: free cash flow of -$1.64B against $1.49B of capex, $705.48M of net debt, and a share count up 39.67% in a year because satellites are funded with equity until they earn. This entry is excluded from the ranking for the same reason MSTR is — the earnings ladder has nothing real to stand on. Read the deployment schedule and the mobile-network agreements instead.',
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
        rev: 2.88,
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
        m: 'FY2026E revenue $167.49M',
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
        m: 'PT $74.28 on 13 analysts, consensus Hold',
        b: 'The sell side sees upside from here while this model, run on GAAP earnings at a 30x exit, does not.',
        c: 'Work out which assumption differs. It is almost always the 2030 revenue, and it is worth forming your own view of it rather than adopting either.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'regulatory', h: 'Kaplan Fox notifies ASTS investors of 13 Nov lead-plaintiff deadline in securities class action (class period Mar…', s: 'Newsfile Corp', u: 'https://www.newsfilecorp.com/release/319011/Kaplan-Fox-Notifies-Investors-of-AST-SpaceMobile-Inc.-ASTS-of-the-Lead-Plaintiff-Deadline-on-November-13-2026', why: 'Allegations target overstated competitive position and capital sufficiency (the July 2026 $1B convert) — a pressure on the multiple and a reminder that dilution funds the build.' },
      { d: '2026-10-13', k: 'analyst', h: 'Piper Sandler downgrades AST SpaceMobile to Neutral, cuts PT to $54 from $98 on slower 2026-27 launch cadence', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/ast-spacemobile-downgraded-to-neutral-from-overweight-at-piper-sandler-thefly-news', why: 'Lower conviction in satellite launch pace pushes the revenue ramp right — argues for less growth in years two and three.' },
      { d: '2026-10-12', k: 'analyst', h: 'Deutsche Bank upgrades AST SpaceMobile to Buy from Hold after a roughly 65% pullback', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/ast-spacemobile-upgraded-to-buy-from-hold-at-deutsche-bank-thefly-news', why: 'Valuation-driven call; no change to the revenue drivers, only to the entry price.' },
      { d: '2026-10-09', k: 'deal', h: 'SpaceX to buy Grain Management\'s nationwide spectrum, pending FCC approval; Berenberg says it raises AST\'s strategic…', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/ast-strategic-value-raised-by-spacex-spectrum-deal-says-berenberg-thefly-news', why: 'SpaceX building its own direct-to-device network is the competitive threat to AST\'s carrier-partner revenue path; bulls read it as AST becoming the carriers\' default partner — either way it moves the 2030 revenue, not year one.' },
      { d: '2026-10-09', k: 'product', h: 'AST CEO says ~1,000 MHz of US carrier low/mid-band spectrum is tunable on its network, plus 45 MHz of owned L-band', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/ast-spacemobile-ceo-says-1000-mhz-of-spectrum-tunable-on-network-thefly-news', why: 'Management\'s rebuttal to the SpaceX threat; supports the capacity case behind the later growth years but is a claim, not a contract.' },
    ],
  },

  // ---------------------------------------------------------------- health
  // Price $1,257.03 (5 October: $1,143.12, +10.0%) · cap $1.12T · EV $1.17T · 891.36M
  // shares (-0.62% YoY). No quarter reported since the 6 October pull, so the trailing
  // figures are unchanged. TTM rev $79.67B · TTM EBITDA $41.71B (52.35%) · TTM NI $26.71B
  // (33.53%), EPS $29.79 · FCF $18.19B · cash $8.95B, debt $54.91B → net debt $45.96B (the
  // source prints $45.16B) · P/E 42.20 trailing (was 38.37), 32.22 forward · EV/EBITDA
  // 27.95 · FY2026E rev $88.55B (+35.86%; was $88.50B), EPS $35.22 (was $36.95) — most
  // likely Lilly's non-GAAP basis · FY2027E $102.30B (+15.53%, against 20% modelled), EPS
  // $47.48 · PT $1,328 (was $1,328.83), 31 analysts · Q3 reports 29 October.
  // Year one moved from 37.2% to 35.45%, which lands on the new $35.22. That is a move
  // DOWN, toward GAAP, so it does not run into the non-GAAP problem; the true GAAP figure
  // is probably lower again.
  LLY: {
    name: 'Eli Lilly',
    sector: 'health',
    shares: 1,
    cost: 1257.03,
    priceRef: 1257.03,
    pricePrev: 1143.12,
    prevRev: 65.18,
    growth: [35.86, 20, 16, 13, 11],
    niMargin: [35.45, 38, 39, 39.5, 40],
    ebMargin: [50, 51, 52, 53, 53],
    sharesOut: [0.8914, 0.891, 0.89, 0.889, 0.888],
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
        rev: 154.61,
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
        m: 'FY2026E revenue $88.55B, +35.9%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'regulatory', h: 'EMA\'s CHMP recommends EU approval of Foundayo (oral orforglipron) for type 2 diabetes and weight management', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/ema-adopts-positive-opinion-on-eli-lillys-foundayo-recommending-approval-thefly-news', why: 'Opens the EU for the oral incretin, supporting revenue growth in the out-years and easing the injectable manufacturing constraint.' },
      { d: '2026-10-08', k: 'analyst', h: 'Cantor raises Lilly PT to $1,440 from $1,410; flags high bar from premium 2027 valuation and pricing pressure', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/eli-lilly-price-target-raised-to-1440-from-1410-at-cantor-fitzgerald-thefly-news', why: 'Expects modest Zepbound US beat and ex-US Mounjaro strength but names net pricing as the offset — a margin and multiple risk, not a volume one.' },
      { d: '2026-10-07', k: 'regulatory', h: 'WHO\'s first childhood-obesity guideline advises against weight-loss drugs for children under 10', s: 'TipRanks', u: 'https://www.tipranks.com/news/eli-lilly-and-novo-heres-why-whos-new-childhood-obesity-guidelines-matter-for-these-drug-giants', why: 'Narrows one pediatric extension of the incretin market at the margin; small for the growth path, no near-term revenue effect quantified.' },
      { d: '2026-10-05', k: 'regulatory', h: 'FDA grants orphan drug designation to Lilly\'s KRAS G12C drug olomorasib, after August breakthrough status in…', s: 'TipRanks', u: 'https://www.tipranks.com/news/eli-lilly-stock-lly-gains-on-regulatory-win-for-experimental-cancer-drug', why: 'Oncology pipeline optionality that reduces dependence on incretins by 2030; no effect on year-one revenue.' },
    ],
  },

  // REPORTED Q3 2026 on 13 October (SEC 8-K): revenue $112.694B (-0.41% YoY), net income
  // $4.110B, GAAP EPS $4.56, adjusted $4.69 against about $4.14 expected; medical care
  // ratio 88.4% (89.9% a year ago); UnitedHealthcare served 48.3M people, down about 1.8M.
  // FY2026 outlook raised to at least $19.50 GAAP and at least $20.50 adjusted EPS (from
  // $18.45–18.95 and $19.50–20.00).
  // Price $401.43 (5 October: $378.58, +6.0%) · cap $360.32B · EV $408.81B · 897.59M shares
  // (-0.98% YoY) · TTM rev $450.06B · TTM EBITDA $28.90B (6.42%) · TTM NI $15.88B (3.53%;
  // was $14.12B), EPS $17.50 · FCF $22.83B · cash $28.55B, debt $74.33B → net debt $45.78B
  // (the source prints $48.49B; this entry now uses cash less debt — it had carried the EV
  // bridge) · P/E 22.94 trailing, 17.72 forward · EV/EBITDA 14.14 · FY2026E rev $448.67B
  // (+0.16%; was $447.08B, -0.20%), EPS $20.51 adjusted (was $19.87) · FY2027E $463.78B
  // (+3.37%), EPS $23.23 · PT $477.04 (was $481.72).
  // Year one stays at 4.0%, about $19.99 a share — between the GAAP guide floor ($19.50,
  // about 3.9%) and the adjusted consensus. Year two moves from 6% to 4% because membership
  // is shrinking; consensus is +3.37%. The base case follows the driver table down.
  UNH: {
    name: 'UnitedHealth Group',
    sector: 'health',
    shares: 1,
    cost: 401.43,
    priceRef: 401.43,
    pricePrev: 378.58,
    prevRev: 447.96,
    growth: [0.16, 4, 6, 6, 5],
    niMargin: [4.0, 4.4, 4.8, 5.0, 5.2],
    ebMargin: [6, 6.4, 6.8, 7.0, 7.2],
    sharesOut: [0.8976, 0.89, 0.882, 0.874, 0.866],
    peLow: 12,
    peHigh: 22,
    evMult: 10,
    netCash: -45.78,
    caveat:
      'Consensus has UnitedHealth revenue essentially flat in 2026 (+0.16%, after -0.20% before the Q3 report), with the earnings recovery coming from the medical cost ratio rather than from growth. It is here as the scaled comparison for OSCR: same industry, roughly thirty times the revenue, and a 4% net margin that shows what mature managed care actually earns. If you hold OSCR, the margin here is the ceiling to argue against. One basis note: the $20.51 consensus is adjusted; GAAP guidance is at least $19.50, and year one here sits between the two.',
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
        rev: 550.51,
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
        m: 'Q3 MCR 88.4%, against 89.9% a year earlier',
        b: 'Revenue is forecast roughly flat (+0.16%) while adjusted EPS rises about 25% — that is entirely a cost-ratio recovery story, not a growth one.',
        c: 'Check the medical care ratio in the Q4 release in January against the raised guidance. It is the same mechanic as OSCR, at thirty times the scale.',
      },
      {
        h: 'Medicare Advantage enrolment and rates',
        m: 'Annual CMS rate notice; people served down 1.8M in a year',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'analyst', h: 'Raymond James cuts UnitedHealth PT to $450 from $475 despite Q3 beat, citing regulatory uncertainty and commercial…', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/unitedhealth-price-target-lowered-to-450-from-475-at-raymond-james-thefly-news', why: 'Earnings path up, multiple down: management called 2027 estimates possibly conservative, but the analyst lowered the multiple it is willing to pay.' },
      { d: '2026-10-13', k: 'earnings', h: 'UnitedHealth Q3: adjusted EPS $4.69, MCR 88.4%, raises 2026 outlook to at least $20.50 adjusted / $19.50 GAAP', s: 'SEC 8-K (UnitedHealth Group)', u: 'https://www.sec.gov/Archives/edgar/data/0000731766/000073176626000255/earningsrelease3q26unh.htm', why: 'Medical cost ratio recovery lifts year-one margin toward the 4% in the model; revenue still flat with 1.8M fewer people served, so growth[1..] at 6% sits above the +3.4% FY2027 consensus.' },
      { d: '2026-10-13', k: 'guidance', h: 'UnitedHealth says costs remain "stubbornly high" across healthcare; expects ~75% of members in 4+ Star plans for 2027-28', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/unitedhealth-says-costs-remain-stubbornly-high-across-healthcare-landscape-thefly-news', why: 'Star ratings set Medicare Advantage bonus payments — supportive for 2027-28 margin; elevated cost trend caps how fast it recovers.' },
      { d: '2026-10-08', k: 'regulatory', h: 'Managed-care stocks move after CMS releases Star ratings; UnitedHealth slips about 1% after hours', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/managed-care-organization-stock-moving-after-cms-releases-star-ratings-thefly-news', why: 'Rating outcome feeds Medicare Advantage revenue and margin from 2027; the article gave no UnitedHealth-specific rating, so treat as direction only.' },
    ],
  },

  // ---------------------------------------------------------------- finance
  // Price $402.61, an all-time high (5 October: $369.71, +8.9%) · cap $739.03B · EV
  // $749.10B · 1.84B shares (-2.88% YoY). No quarter reported since the 6 October pull, so
  // the trailing figures are unchanged. TTM rev $44.49B · TTM EBITDA $31.09B (69.89%) · TTM
  // NI $22.40B (50.78%), GAAP EPS $11.75 · FCF $21.01B · cash $13.79B, debt $23.86B → net
  // debt $10.07B · P/E 34.27 trailing (was 31.47), 27.86 forward · EV/EBITDA 24.09 ·
  // FY2026E (Sep-end, closed but not yet reported) rev $45.78B (+14.45%; was $45.76B), EPS
  // $13.23 unchanged · FY2027E $50.80B (+10.97%, matching the 11% modelled), EPS $15.01 ·
  // PT $422.77 (was $419.36), 40 analysts · FY2026 results 27 October.
  // Basis flag, not changed here: 53.2% lands year one on the $13.23 consensus, which is
  // Visa's non-GAAP number. Trailing GAAP is 50.35%, so year one sits above a GAAP
  // run-rate; V may belong on the CLAUDE.md non-GAAP list. Left for an editorial decision
  // after the 27 October report.
  V: {
    name: 'Visa',
    sector: 'finance',
    shares: 1,
    cost: 402.61,
    priceRef: 402.61,
    pricePrev: 369.71,
    prevRev: 40.0,
    growth: [14.45, 11, 10, 9, 9],
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
        m: 'FY2026E revenue $45.78B, +14.5%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'product', h: 'Visa Direct moves stablecoin prefunding from pilot to production; Inyo Global first to offer USDC-funded cross-border…', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/visa-direct-launches-stablecoin-powered-money-movement-thefly-news', why: 'Keeps cross-border and money-movement flows on Visa rails as stablecoins grow — supports value-added-services growth rather than threatening the take rate.' },
      { d: '2026-10-15', k: 'analyst', h: 'BMO raises Visa PT to $425 from $405; upside hinges on value-added services growing in the high-20s', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/visa-price-target-raised-to-425-from-405-at-bmo-capital-thefly-news', why: 'Argues growth persists longer than expected as VAS and new flows offset a slowing core — the case for the top of the multiple band.' },
      { d: '2026-10-13', k: 'regulatory', h: 'PBOC approves Visa to begin preparations for a domestic bankcard clearing business in China', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/visa-receives-approval-to-begin-preparations-for-domestic-business-in-china-thefly-news', why: 'Preparatory approval only; a long-dated optional addition to payment volume growth, not in any year of the current driver table.' },
    ],
  },

  // REPORTED Q3 2026 on 13 October. The source shows revenue $47.429B (+10.24%) and net
  // income $14.936B; the company reported $50.2B and $15.3B (via TradingNEWS — the release
  // itself could not be opened). EPS $5.57 against $5.90 expected, $5.75 excluding $658M of
  // securities losses; NII $27.1B (+13%); credit costs $2.7B including a $539M reserve
  // build; net buybacks $664M (from $6.2B in Q2); CET1 13.9%. 2026 NII guide raised to
  // about $106.2B; preliminary 2027 NII ex-Markets about $107B.
  // Price $339.72 (5 October: $332.38, +2.2%) · cap $902.16B · EV $346.94B (was $700.42B) ·
  // 2.66B shares (-3.48% YoY) · TTM rev $190.73B · TTM NI $64.53B (33.83%), EPS $23.81 ·
  // P/E 14.27 trailing, 13.54 forward · PS 4.73 · book value $132.30/share (was $133.01),
  // 2.57x · cash $1.88T, debt $1.33T, so the source's "net cash" is $555.22B (was $183.11B)
  // · FY2026E rev $207.95B (+13.98%; was $208.68B, +14.38%), EPS $24.07 · FY2027E public
  // again: $216.31B (+4.02%), EPS $25.50 · PT $372.57 (was $375.81), 26 analysts.
  // growth[1] is that re-sourced +4.02%, replacing the +2.51% carried from 29 August. The
  // share-count path is flattened because buybacks fell to $664M in the quarter; that is
  // judgement, prompted by the report.
  JPM: {
    name: 'JPMorgan Chase',
    sector: 'finance',
    shares: 1,
    cost: 339.72,
    priceRef: 339.72,
    pricePrev: 332.38,
    prevRev: 182.45,
    growth: [13.98, 4.02, 4, 4, 4],
    // Consensus EPS $24.07 on 2.66B shares implies 30.8%, against a 33.83% trailing
    // margin. Close enough that no adjustment is needed.
    niMargin: [30.8, 32, 32.5, 33, 33],
    // A placeholder. See the caveat: EBITDA has no meaning for a bank, and the
    // EV/EBITDA row this feeds should not be read.
    ebMargin: [40, 40, 41, 41, 41],
    sharesOut: [2.66, 2.62, 2.57, 2.52, 2.47],
    peLow: 11,
    peHigh: 16,
    evMult: 8,
    netCash: 555.22,
    caveat:
      'A balance-sheet bank, so half this page does not apply — the same problem SOFI has, at forty times the size. Ignore the EV/EBITDA row entirely: EBITDA is not meaningful for a business whose funding cost is its cost of goods, and the $555.22B "net cash" figure is an artefact of netting $1.88T of cash against $1.33T of debt on a bank balance sheet, not distributable cash — it tripled from $183.11B between the 6 and 18 October pulls with no change in the business, which is the clearest demonstration of that. Read the P/E ladder, and read it against book value of $132.30 per share — at $339.72 that is 2.57x book, which is the frame that actually governs a bank’s multiple. Two more omissions: the model prices no dividend, and it cannot see credit costs, which is the line that decides a bank’s earnings in the year it matters.',
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
        rev: 243.33,
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
        c: 'Q3 credit costs were $2.7B including a $539M reserve build; check the Q4 release in mid-January against that. A reserve release flattering earnings is not the same as earnings.',
      },
      {
        h: 'Net interest income guidance',
        m: 'FY2026E revenue $207.95B, +13.98%; 2026 NII guide ~$106.2B',
        b: 'Most of the revenue step is rates and balance growth, and the FY2027 consensus already has it flattening to +4.0%.',
        c: 'Check the NII guide and the deposit beta. The 2027 deceleration in this model is consensus \u2014 confirm it is still what management expects.',
      },
      {
        h: 'Book value and the premium to it',
        m: '$132.30 book value against a $339.72 price',
        b: 'A bank is valued on returns against book, not on an earnings multiple in isolation. 2.57x book is the real entry multiple here.',
        c: 'Track tangible book value per share and return on tangible common equity. The P/E ladder on this page is a proxy for those two.',
      },
      {
        h: 'Buybacks and the share count',
        m: '2.66B shares, -3.48% year over year; Q3 net buybacks $664M',
        b: 'The count has been falling about 3.5% a year, but Q3 net buybacks dropped to $664M from $6.2B, and the path here now assumes about 2% a year.',
        c: 'Check repurchases against the capital return plan and the regulatory capital requirement. Buybacks are the first thing suspended when capital rules tighten.',
      },
      {
        h: 'Capital requirements',
        m: 'CET1 ratio against the requirement',
        b: 'Regulatory capital sets the ceiling on both buybacks and the dividend, and it moves by decree rather than by performance.',
        c: 'Check the CET1 ratio and the stress-test outcome. A higher requirement takes the buyback out of the model above.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'analyst', h: 'Citi trims JPMorgan PT to $350 from $360, models fewer buybacks after bank prioritises deploying capital', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/jpmorgan-price-target-lowered-to-350-from-360-at-citi-thefly-news', why: 'Directly flattens the modelled share-count decline (sharesOut path), lowering out-year EPS.' },
      { d: '2026-10-14', k: 'analyst', h: 'Morgan Stanley lifts JPMorgan PT to $377 from $370 on stronger NII outlook; Corporate line drove most of the miss', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/jpmorgan-price-target-raised-to-377-from-370-at-morgan-stanley-thefly-news', why: 'Expects ~4% lift to consensus 2027 EPS from NII without matching expense growth — supports growth[1] above the old +2.51%.' },
      { d: '2026-10-13', k: 'earnings', h: 'JPMorgan Q3 EPS $5.57 misses $5.90; NII guide raised to ~$106.2B, 2027 NII ex-Markets ~$107B; buybacks cut to $664M', s: 'TradingNEWS', u: 'https://www.tradingnews.com/news/jpm-reverses-3-percent-premarket-drop-to-336-usd-as-20-percent-rotce-and-107b-usd-2027-nii-outlook', why: 'Revenue holds (NII up) but expenses +12% and a $539M reserve build press margin; the buyback slowdown hits the share-count path.' },
    ],
  },

  // Price $98.87 (5 October: $114.11, -13.4%) · cap $88.89B · EV $87.91B · 899.08M shares
  // (+0.89% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $4.93B · TTM NI $2.07B (42.01%), EPS $2.26 · EBITDA and EV/EBITDA
  // both n/a on the source, which is the tell for a brokerage · cash $23.91B, debt $22.93B
  // → net cash $980.00M · FCF $219.00M · P/E 43.79 trailing (was 50.54), 38.93 forward · PS
  // 18.02 · FY2026E rev $5.30B (+18.46%; was $5.25B, +17.36%), EPS $2.55 unchanged ·
  // FY2027E $6.85B (+29.28%, against 14% modelled for year two), EPS $3.43 · PT $134.38
  // (was $131.08), 31 analysts · Q3 reports 27 October. September operating data could not
  // be found or opened.
  HOOD: {
    name: 'Robinhood Markets',
    sector: 'finance',
    shares: 1,
    cost: 98.87,
    priceRef: 98.87,
    pricePrev: 114.11,
    prevRev: 4.4727,
    growth: [18.46, 14, 12, 11, 10],
    // Consensus EPS $2.55 implies 43.7% against a 42.01% trailing margin. They agree,
    // which is unusual here — but both are flattered by interest income earned on
    // customer balances, which is a rate bet rather than a business improving.
    niMargin: [42, 42, 43, 43, 44],
    // A placeholder. See the caveat: EBITDA is not reported for this business and the
    // source does not compute EV/EBITDA for it, so the EV row this feeds is noise.
    ebMargin: [50, 50, 51, 51, 52],
    sharesOut: [0.8991, 0.912, 0.918, 0.924, 0.93],
    peLow: 20,
    peHigh: 40,
    evMult: 15,
    netCash: 0.98,
    caveat:
      'Read the P/E ladder and ignore the EV/EBITDA row entirely — the same problem JPM and SOFI have here. The source publishes no EBITDA and no EV/EBITDA for this company because a broker’s funding and interest costs are its cost of goods, and the $980.00M of "net cash" is what is left after netting $23.91B against $22.93B on a balance sheet that holds customer money; it is not distributable cash. Two things decide the outcome and neither is in the driver table. A large share of revenue is net interest on customer balances, so an interest-rate cut cuts earnings directly with no change in the business. And transaction revenue is concentrated in options and crypto, which means the 42% margin was earned in an active market — the same trading conditions that show up in COIN two entries down. At 43.79x trailing earnings the entry multiple then decides the rest.',
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
        rev: 8.26,
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
        m: 'FY2026E revenue $5.30B, +18.5%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-14', k: 'analyst', h: 'Wells Fargo trims Robinhood PT to $120 from $125 (Equal Weight) after updating volume and AUM estimates', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/robinhood-price-target-lowered-to-120-from-125-at-wells-fargo-thefly-news', why: 'Small cut to transaction-volume assumptions — a modest drag on year-one growth.' },
      { d: '2026-10-12', k: 'analyst', h: 'Evercore ISI initiates Robinhood at Outperform, $130 PT, on product ecosystem and deposit growth', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/robinhood-initiated-with-an-outperform-at-evercore-isi-thefly-news', why: 'Thesis rests on monetising a broader product set — the subscription/deposit path that would justify the base multiple.' },
      { d: '2026-10-09', k: 'analyst', h: 'Morgan Stanley raises Robinhood PT to $160 from $150, says higher rates support broker earnings', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/robinhood-price-target-raised-to-160-from-150-at-morgan-stanley-thefly-news', why: 'Confirms net interest on customer cash as a rate bet propping margin — exactly the exposure the caveat flags.' },
      { d: '2026-10-01', k: 'product', h: 'Robinhood Agents let in-app AI agents trade without per-order sign-off; 150,000+ agentic customers by late September', s: 'PYMNTS', u: 'https://www.pymnts.com/news/investment-tracker/2026/robinhood-lets-ai-agents-trade-without-customer-sign-off/', why: 'New transaction volume and paid data subscriptions ($5-30/mo) lift growth; also a new conduct/regulatory risk since customers bear all agent-trade risk.' },
      { d: '2026-09-30', k: 'product', h: 'Cboe and Robinhood plan KPI-linked binary options on 23 companies from October, fees waived through 2026', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/cboe-and-robinhood-announce-planned-launch-of-new-kpi-contracts-further-expanding-prediction-market-offerings-302894389.html', why: 'Extends prediction-market volume, but fee waivers mean no revenue until 2027 — a growth[1] input, not year one.' },
    ],
  },

  // Loss-making on a GAAP basis with revenue FALLING in the consensus year — the only entry
  // in the book with both at once.
  // Price $173.16 (5 October: $188.22, -8.0%) · cap $45.69B · EV $43.57B · 263.84M shares
  // (-4.45% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $6.04B · TTM EBITDA $699.55M (11.57%) · TTM NI -$987.77M (-16.34%),
  // EPS -$3.73 · cash $8.79B, debt $6.67B → net cash $2.12B · FCF $1.71B · no trailing P/E,
  // forward 169.02 (was 182.77) · EV/EBITDA 62.28 · PS 7.56 · FY2026E rev $5.37B (-21.96%;
  // was $5.34B, -22.49%), EPS -$1.87 (was -$1.94) · FY2027E $6.99B (+30.12%, against 12%
  // modelled), EPS $3.01 — the 5% margin modelled for year two gives about $1.42 · PT
  // $212.15 (was $207.35), 38 analysts · Q3 reports 29 October.
  COIN: {
    name: 'Coinbase Global',
    sector: 'finance',
    shares: 1,
    cost: 173.16,
    priceRef: 173.16,
    pricePrev: 188.22,
    prevRev: 6.884,
    // Year one is the consensus decline. The recovery after it is modelled judgement
    // and, unavoidably, a view about crypto prices dressed up as a revenue forecast.
    growth: [-21.96, 12, 15, 12, 10],
    // -9.2% lands year one on the consensus -$1.87 EPS. The company is GAAP
    // loss-making over the trailing year despite positive EBITDA and $1.71B of free
    // cash flow, largely on crypto asset marks.
    niMargin: [-9.2, 5, 14, 18, 20],
    ebMargin: [10, 18, 25, 28, 30],
    sharesOut: [0.264, 0.266, 0.268, 0.27, 0.272],
    peLow: 15,
    peHigh: 35,
    evMult: 18,
    netCash: 2.12,
    caveat:
      'Everything below year one is a forecast about the price of an asset the company does not control, which is the same exposure MSTR has — hold both and it is one bet, not two, at different levels of directness. The specifics: consensus has revenue falling 21.96% in CY2026 and a GAAP loss of $1.87 a share, so this entry starts underwater on both lines, and the forward P/E of 169.02 is struck against an estimate that is itself a loss turning into a small profit. Trading volume, custody balances and interest income all move together with the crypto price, so the bear and bull cases below are much further apart than the arithmetic makes them look. And a regulatory decision can change the revenue mix in one quarter with no lead time in any of these numbers.',
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
        rev: 8.52,
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
        m: 'FY2026E revenue $5.37B, -22.0%',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'deal', h: 'Marqeta and Coinbase expand partnership to offer stablecoin-backed payment cards settled on Base', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/marqeta-coinbase-collaborate-for-stablecoin-backed-card-payments-thefly-news', why: 'Grows stablecoin balances and non-trading revenue, the lines less tied to crypto prices — supportive of out-year growth.' },
      { d: '2026-10-14', k: 'macro', h: 'Coinbase falls ~5% after urging early quantum-resistance upgrades for Bitcoin; it custodies ~5% of all BTC', s: 'TipRanks', u: 'https://www.tipranks.com/news/coinbase-stock-coin-plummets-5-after-the-exchange-calls-for-early-quantum-defense-upgrades-for-bitcoin', why: 'A tail risk to the underlying asset that every revenue line depends on — a multiple question, not a near-term driver change.' },
      { d: '2026-10-13', k: 'analyst', h: 'Citi raises Coinbase PT to $230 from $210 in Q3 preview, citing a "considerably stronger backdrop"', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/coinbase-price-target-raised-to-230-from-210-at-citi-thefly-news', why: 'Favours tokenisation and market-infrastructure exposure — supports the FY2027 rebound in consensus.' },
      { d: '2026-10-09', k: 'analyst', h: 'Citizens cuts Coinbase PT to $280 from $325, expects uneven Q3 amid rates, AI worries and ETF outflows', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/coinbase-price-target-lowered-to-280-from-325-at-citizens-thefly-news', why: 'Multiple compression rather than estimate cuts — relevant to peLow/peHigh, not the revenue path.' },
      { d: '2026-09-30', k: 'regulatory', h: 'Coinbase urges Brazil not to classify stablecoins as e-money or FX, warning of transaction taxes', s: 'PYMNTS', u: 'https://www.pymnts.com/cryptocurrency/2026/ripple-expands-brazil-coinbase-pushes-back-stablecoin-taxes/', why: 'International stablecoin regulation shapes the growth of a revenue line the bull case leans on; small near term.' },
    ],
  },

  // Listed on Nasdaq 11 April 2025 through a de-SPAC with SK Growth Opportunities, which is
  // the reason the share count is up 147.11% in twelve months and the reason both prior
  // fiscal years show enormous GAAP net losses against POSITIVE operating income.
  // Price $6.07 (5 October: $7.36, -17.5%, on the 6–7 October House select committee report
  // on China ties) · cap $3.28B · EV $1.43B · 539.62M shares (+147.11% YoY). No quarter
  // reported since the 6 October pull, so the trailing figures are unchanged. TTM rev
  // $672.28M · TTM operating income $77.23M (11.49%) · TTM NI $42.60M (6.34%), EPS $0.08 ·
  // TTM EBITDA and EV/EBITDA NOT PUBLISHED — the source computes neither for this business
  // · FCF $32.22M · cash $1.93B, debt $78.73M → net cash $1.85B, now 56% of the cap · P/E
  // 76.62 trailing (was 92.90), 21.68 forward · FY2025 rev $564.33M, GAAP operating income
  // $53.01M, GAAP NI -$487.52M, GAAP EPS -$1.23 · FY2024 rev $388.97M, GAAP NI -$517.78M,
  // GAAP EPS -$3.73 · FY2026E rev $806.19M (+42.86%; was $805.74M), EPS $0.24 (adjusted)
  // unchanged — the forecast page's own FY2025 comparator is $0.28 against that -$1.23 of
  // GAAP · FY2027E now public: $981.70M (+21.77%, against 25% modelled), EPS $0.31 · PT
  // $11.25 (was $12.75), +85%, on 4 analysts · Q3 reports 19 November.
  // New overhang: the committee report was followed by a securities class action
  // (lead-plaintiff deadline 7 December), and Webull filed an F-3/A and a 424B3 on 16
  // October. Only the EDGAR index entry was verified, so whether that is a primary or a
  // resale offering, and its size, are unknown.
  BULL: {
    name: 'Webull',
    sector: 'finance',
    shares: 1,
    cost: 6.07,
    priceRef: 6.07,
    pricePrev: 7.36,
    prevRev: 0.56433,
    growth: [42.86, 25, 20, 17, 15],
    // Anchored on the 6.34% TRAILING GAAP margin, not on the consensus EPS, which is
    // adjusted: $0.24 for FY2026 against a stated FY2025 comparator of $0.28 while GAAP
    // EPS for that year was -$1.23. That $0.24 implies a 16.07% net margin — above the
    // 11.49% the business currently earns at the OPERATING line — so year one here lands
    // near $0.09 of EPS, roughly 61% below the headline. The ramp after it assumes
    // operating margin roughly doubles as the platform scales; that is the assumption to
    // argue with, not year one.
    niMargin: [6.34, 9, 11, 13, 15],
    // A placeholder, exactly as in HOOD. No EBITDA is reported for this business and the
    // source computes no EV/EBITDA, so the EV row this feeds is noise — see the caveat.
    ebMargin: [14, 16, 18, 20, 22],
    // Up 147.11% in a year on the de-SPAC. This path assumes it settles to low single
    // digits, which is what a normal year would look like — not what the last one did.
    sharesOut: [0.54, 0.57, 0.59, 0.605, 0.615],
    peLow: 18,
    peHigh: 40,
    evMult: 15,
    netCash: 1.85,
    caveat:
      'Three things about this entry before the numbers. It has traded since 11 April 2025, and only through a de-SPAC with SK Growth Opportunities — under eighteen months of history, a share count up 147.11% in twelve months, and GAAP net losses of $487.52M in FY2025 and $517.78M in FY2024 against POSITIVE operating income of $53.01M in FY2025. Those losses are listing-related, not operating; read the operating line. Second, the consensus EPS of $0.24 is adjusted, and the gap is the ZETA problem in this book repeated on a smaller share price: the forecast page shows FY2025 as $0.28 while GAAP for that year was -$1.23, and $0.24 for FY2026 implies a 16.07% net margin when the business currently earns 11.49% at the operating line and 6.34% at the net line. The driver table runs on that 6.34%, so year one sits about 61% below the headline — deliberately. Third, this is a broker, so ignore the EV/EBITDA row entirely, the same instruction HOOD, JPM and SOFI carry here. The source publishes no EBITDA and no EV/EBITDA for it, and the $1.85B of net cash — 56% of the market capitalisation — sits on a balance sheet that holds customer money and is not distributable. At 76.62x trailing earnings on a four-analyst price target, the entry multiple decides this, not the growth rate. And since 6 October there is a regulatory overhang the drivers cannot see: a House select committee report on China ties, a securities class action after it, and an F-3/A filed on 16 October whose size this pull could not read.',
    scen: {
      bear: {
        label: 'Bear',
        thesis: 'Growth continues but margin never expands past today, and a 77x multiple compresses to what a small broker is normally worth.',
        rev: 1.1,
        margin: 7,
        pe: 14,
      },
      base: {
        label: 'Base',
        thesis: 'International accounts and asset gathering scale the platform, and operating margin roughly doubles on the way.',
        rev: 1.63,
        margin: 15,
        pe: 28,
      },
      bull: {
        label: 'Bull',
        thesis: 'Webull becomes the default retail broker outside the US and earns a platform margin on a much larger asset base.',
        rev: 2.2,
        margin: 20,
        pe: 38,
      },
    },
    sourced: false,
    watch: [
      {
        h: 'Operating income, not net income',
        m: 'FY2025 operating income $53.01M against a $487.52M GAAP net loss',
        b: 'The two numbers describe the same year and point in opposite directions. The loss is listing-related; the operating line is the business. Reading either one alone gets the company wrong by an order of magnitude.',
        c: 'Read income from operations every quarter and check how much of the distance to net income is still de-SPAC accounting. When that distance closes, the GAAP margin here should move toward the consensus one.',
      },
      {
        h: 'The share count after a de-SPAC',
        m: '539.62M shares, +147.11% year over year',
        b: 'The count more than doubled in twelve months. The driver table assumes it settles to low single digits; lock-up expiries and earnout tranches are what would break that.',
        c: 'Check the diluted count each quarter against the path in the drivers, and read the earnout and lock-up terms once. This is the assumption in this entry most likely to be too kind — the same problem CHA and ZETA carry.',
      },
      {
        h: 'Net interest on customer balances',
        m: '$1.93B of cash on a broker balance sheet',
        b: 'A large share of a retail broker’s revenue is interest earned on customer cash and margin lending, which is a rate bet rather than a business improving. HOOD in this same file is the larger version of the identical exposure.',
        c: 'Split revenue into transaction, net interest and other every quarter. A rate cut takes the second one down with no warning in the first, and neither the margin path nor the multiple below can see it coming.',
      },
      {
        h: 'Funded accounts and assets under custody',
        m: 'FY2026E revenue $806.19M, +42.9%',
        b: 'A 42.8% growth rate in a brokerage is account growth multiplied by what each account trades and holds, and only the second survives a quiet market.',
        c: 'Track net deposits and assets under custody against funded account counts, and by region. Account growth without deposits is the weaker result, and it is the one that shows up first.',
      },
      {
        h: 'Four analysts',
        m: 'Price target $11.25, +85%, on 4 estimates',
        b: 'Year one of this model is anchored on a consensus formed by four people. Everywhere else in this book that number is twenty to fifty, and a four-person average moves a long way when one of them changes their mind.',
        c: 'Treat the FY2026 revenue and EPS figures as a thin estimate rather than a consensus, and re-check them after each report. FY2027 is public again at +21.77%, against the 25% modelled here; nothing after it is sourced.',
      },
    ],
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'capital', h: 'Webull files amended F-3 registration statement (F-3/A) and a 424B3 prospectus with the SEC', s: 'SEC EDGAR', u: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001866364&type=&dateb=&owner=include&count=40', why: 'Share count: a shelf/resale registration adds supply or dilution risk to the 539.62M count the driver path assumes settles; contents (primary vs resale, size) not verified.' },
      { d: '2026-10-14', k: 'regulatory', h: 'Securities class action filed over China-ties disclosures; class period Apr 26 2025 - Oct 6 2026, lead-plaintiff…', s: 'Newsfile (Kaplan Fox)', u: 'https://www.newsfilecorp.com/release/318927/Kaplan-Fox-Notifies-Investors-of-Webull-Corporation-BULL-of-the-Lead-Plaintiff-Deadline-on-December-7-2026', why: 'Multiple: litigation overhang plus allegation that ~863 staff (62% of workforce) sit in a mainland subsidiary lowers the exit P/E a US-listed broker can command.' },
      { d: '2026-10-09', k: 'analyst', h: 'Scotiabank upgrades Webull to Outperform on valuation, calls House report non-punitive; $9 target', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/scotiabank-upgrades-webull-to-outperform-on-valuation-after-selloff-thefly-news', why: 'Multiple: frames the likely remedy as disclosure or ring-fencing the US broker-dealer, i.e. limited hit to growth or margin.' },
      { d: '2026-10-09', k: 'analyst', h: 'Rosenblatt cuts Webull target to $12 from $15, keeps Buy, calls report \'more headline risk than fundamental\'', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/webull-price-target-lowered-to-12-from-15-at-rosenblatt-thefly-news-2', why: 'Multiple: one of only four covering analysts trims target 20%, pulling the consensus PT from $12.75 to $11.25.' },
      { d: '2026-10-07', k: 'regulatory', h: 'Webull falls ~20% after House China committee finds its China ties pose a national security risk', s: 'TipRanks', u: 'https://www.tipranks.com/news/why-webull-bull-stock-is-crashing-today-october-7-2026', why: 'Growth and multiple: flags data-flow and ownership concerns that could put its US regulatory position at risk; a regulatory follow-up would hit US account growth and the exit P/E.' },
      { d: '2026-10-02', k: 'deal', h: 'Webull becomes Cashtag partner on X, letting X users trade stocks and crypto through Webull', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/webull-announces-strategic-partnership-with-x-thefly-news', why: 'Growth: a new funded-account acquisition channel; no financial terms disclosed.' },
    ],
  },

  // ---------------------------------------------------------------- infra
  // Price $271.37 (5 October: $267.62, +1.4%; the 6 October Google deal moved it about 14%
  // intraday around the reference close) · cap $96.15B · EV $120.15B · 354.31M shares
  // (+6.85% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $31.27B · TTM EBITDA $7.95B (25.43%) · TTM NI $3.47B (11.08%), EPS
  // $10.33 · FCF $295.00M · cash $697.00M, debt $24.70B → net debt $24.00B · P/E 26.28
  // trailing (was 25.91), 21.95 forward · EV/EBITDA 15.11 · PS 3.07 · FY2026E rev $36.09B
  // (+41.35%; was $35.47B, +38.92%), EPS $12.13 (was $12.14) · FY2027E public again:
  // $37.36B (+3.52%; the model had carried +3.61% from August), EPS $13.29 · PT $337.57
  // (was $342.98), 24 analysts · Q3 reports 9 November. Proceeds from the Brazos Valley
  // sale were not disclosed at close (about $860M was agreed in August).
  CEG: {
    name: 'Constellation Energy',
    sector: 'infra',
    shares: 1,
    cost: 271.37,
    priceRef: 271.37,
    pricePrev: 267.62,
    prevRev: 25.53,
    // Consensus has a 41.4% jump in 2026 then only 3.5% in 2027 — the step-up is
    // contracting and acquisition, not an ongoing growth rate.
    growth: [41.35, 3.52, 6, 6, 6],
    niMargin: [11.91, 13, 13.5, 14, 14.5],
    ebMargin: [25, 26, 27, 28, 28],
    sharesOut: [0.3543, 0.352, 0.3497, 0.3474, 0.3451],
    peLow: 18,
    peHigh: 30,
    evMult: 14,
    netCash: -24.0,
    caveat:
      'The counterpart to IREN: instead of buying compute and needing power, Constellation owns the nuclear generation that data centres are competing for. Note the consensus shape — 41.4% revenue growth in 2026 then 3.5% in 2027 — which says the jump is contracted supply and acquisition, not a compounding rate. Utilities also carry heavy debt by design; $24.7B here is normal, not a warning.',
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
        rev: 44.49,
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'analyst', h: 'CIBC initiates Constellation at Outperformer with a $358 target', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/constellation-energy-initiated-with-an-outperformer-at-cibc-thefly-news', why: 'Multiple: new coverage above the $337.57 consensus PT; no change to the driver inputs.' },
      { d: '2026-10-14', k: 'deal', h: 'Constellation completes sale of 606 MW Brazos Valley gas plant to LS Power under its DOJ Calpine commitments', s: 'Constellation Energy', u: 'https://www.constellationenergy.com/news/2026/10/constellation-completes-sale-of-brazos-valley-energy-center-to-ls-power.html', why: 'Growth (slightly down) and net debt: removes a 606 MW ERCOT gas asset from the post-Calpine base; proceeds (~$860M agreed in Aug) not disclosed at close. PJM divestiture still pending.' },
      { d: '2026-10-06', k: 'deal', h: 'Google signs ~3.6 GW nuclear deal: 20-year PPA for 890 MW of uprates plus 15-year supply of 2,700 MW in PJM', s: 'Enerdata', u: 'https://www.enerdata.net/publications/daily-energy-news/google-contracts-36-gw-power-constellation-energys-nuclear-fleet-us.html', why: 'Margin and multiple up: long-dated contracted pricing on existing fleet plus new uprate capacity from 2028 supports the base-case margin and terminal value; uprate capex (> $4B reported elsewhere) weighs on FCF.' },
      { d: '2026-10-02', k: 'analyst', h: 'BMO trims Constellation target to $350 from $379 after the Amazon PPA, keeps Outperform', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/constellation-energy-price-target-lowered-to-350-from-379-at-bmo-capital-thefly-news', why: 'Multiple: target cut despite a contract win, implying the Amazon pricing came in below what was embedded.' },
      { d: '2026-10-01', k: 'deal', h: 'Amazon signs 20-year PPA for 690 MW from Calvert Cliffs including a ~190 MW uprate due 2030-32', s: 'ESG Dive', u: 'https://www.esgdive.com/news/amazon-constellation-sign-20-year-ppa-to-expand-maryland-nuclear-plant/831942/', why: 'Growth and terminal value: contracted output plus relicensing for 20 more years lengthens the cash-flow tail; $3B+ investment is a capex draw.' },
    ],
  },
  // Price $152.02 (5 October: $144.89, +4.9%) · cap $51.02B · EV $71.10B · 335.64M shares
  // (+0.45% YoY). No quarter reported since the 6 October pull, so the trailing figures are
  // unchanged. TTM rev $19.21B · TTM EBITDA $6.65B (34.59%) · TTM NI $2.03B (11.55%), EPS
  // $5.87 · cash $435.00M, debt $20.51B → net debt $20.07B · FCF $2.26B · P/E 25.91
  // trailing (was 24.70), 14.99 forward · EV/EBITDA 10.70 · PS 2.66 · FY2026E rev $22.33B
  // (+25.89%; was $22.48B, +26.76%), EPS $8.66 (was $8.78) · FY2027E public again: $24.42B
  // (+9.37%; the model had carried +4.98% from August), EPS $10.21 · PT $210.10 (was
  // $212.79), +38.2%, 22 analysts · Q3 reports 6 November. The $1B Series A preferred
  // redemption, funded partly by September's $1.5B of junior subordinated notes, swaps one
  // claim for another rather than reducing net debt.
  VST: {
    name: 'Vistra',
    sector: 'infra',
    shares: 1,
    cost: 152.02,
    priceRef: 152.02,
    pricePrev: 144.89,
    prevRev: 17.74,
    growth: [25.89, 9.37, 6, 5, 5],
    // Consensus EPS $8.66 implies 13.0% against an 11.55% trailing margin. No
    // adjusted/GAAP gap worth correcting.
    niMargin: [13, 14, 15, 16, 16.5],
    ebMargin: [33, 34, 35, 36, 36],
    sharesOut: [0.3356, 0.33, 0.324, 0.318, 0.312],
    peLow: 12,
    peHigh: 22,
    evMult: 11,
    netCash: -20.07,
    caveat:
      'The cheapest-looking name in this book, and the leverage is why. Net debt of $20.07B sits against a $51.02B market capitalisation, so enterprise value is $71.10B and the equity is a levered claim on the power price — read the EV/EBITDA row and the P/E row together, because here they answer different questions. Two consequences. Earnings swing with wholesale power prices, which no management controls, so the margin path below forecasts a commodity as much as a company. And at $152.02 the stock still sits well below the $210.10 consensus target, which is 38.2% above the price — the market and the analysts disagree about this one more than about most names here.',
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
        rev: 28.54,
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
        m: 'FY2026E revenue $22.33B, +25.9%',
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
        // Keeps ticks saved under the earlier 'The 2027 flattening' heading.
        id: 'the-flattening',
        h: 'The 2027 slowdown',
        m: 'FY2026E +25.9%, then FY2027E +9.4%',
        b: 'Consensus has growth slowing to about 9% the year after next — up from 5% on the August estimate — and the driver table inherits it.',
        c: 'Check whether guidance still implies that shape. The gap between a +9% growth consensus and a target 38% above the price is the disagreement to resolve.',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'capital', h: 'Vistra to redeem all $1.0B of its Series A preferred stock at $1,000 per share', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/vistra-announces-redemption-of-all-outstanding-series-a-preferred-stock-302910429.html', why: 'Net debt/capital structure: retires 8% perpetual preferred, refinanced by the September junior subordinated notes; neutral to common share count.' },
      { d: '2026-10-15', k: 'analyst', h: 'CIBC initiates Vistra at Outperformer with a $201 target', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/vistra-initiated-with-an-outperformer-at-cibc-thefly-news', why: 'Multiple: new coverage, target slightly below the $210.10 consensus.' },
      { d: '2026-10-06', k: 'regulatory', h: 'DOE offers Vistra a $4.2B conditional loan for 433 MW of uprates at Perry, Davis-Besse and Beaver Valley', s: 'Utility Dive', u: 'https://www.utilitydive.com/news/doe-intends-to-loan-vistra-42b-for-nuclear-fleet-improvements/832236/', why: 'Growth and cost of capital: cheap federal financing for capacity tied to the 2.6 GW Meta PPA, supporting out-year growth; conditional, not yet funded, and adds gross debt.' },
      { d: '2026-10-05', k: 'analyst', h: 'BMO cuts Vistra target to $210 from $231, keeps Outperform, citing regulatory and political challenges', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/vistra-price-target-lowered-to-210-from-231-at-bmo-capital-thefly-news', why: 'Multiple: regulatory/political risk on large-load deals trims the exit multiple even with demand intact.' },
      { d: '2026-09-10', k: 'capital', h: 'Vistra prices $1.5B of 7.00%/7.25% junior subordinated notes due 2057 to fund preferred redemptions', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/vistra-prices-registered-offering-of-1-5-billion-of-junior-subordinated-notes-302875819.html', why: 'Net debt: adds $1.5B of debt-like capital to replace preferreds; raises interest cost, a small drag on net margin.' },
    ],
  },

  // Price $206.42 (5 October: $253.62, -18.6%, with no company-specific cause found; rising
  // Treasury yields and AI funding-cost fears hit AI-infrastructure names in the same
  // window) · cap $79.47B · EV $79.70B · 384.99M shares (+1.06% YoY). No quarter reported
  // since the 6 October pull, so the trailing figures are unchanged. TTM rev $11.48B · TTM
  // EBITDA $2.68B (23.34%) · TTM NI $1.73B (15.09%), EPS $4.42 · cash $3.11B, debt $3.34B →
  // net debt $227.60M · FCF $2.93B · P/E 46.72 trailing (was 57.40), 25.99 forward ·
  // EV/EBITDA 29.75 · PS 6.92 · FY2026E rev $14.00B (+36.86%; was $14.02B, +37.08%), EPS
  // $6.74 · FY2027E public again: $18.27B (+30.48%; the model had carried +29.49% from
  // August), EPS $9.19 · PT $333.71 (was $337.74), 30 analysts · Q3 reports 28 October. The
  // UtilityInnovation purchase ($1.45B cash plus up to $1.15B of earnout, closing Q4 2026)
  // would take net debt to about $1.7B on completion; netCash waits for the close.
  VRT: {
    name: 'Vertiv',
    sector: 'infra',
    shares: 1,
    cost: 206.42,
    priceRef: 206.42,
    pricePrev: 253.62,
    prevRev: 10.23,
    growth: [36.86, 30.48, 22, 18, 15],
    // Consensus EPS $6.74 implies 18.5% against a 15.09% GAAP trailing margin \u2014 a real
    // but modest adjusted/GAAP gap, so year one sits between the two, nearer GAAP.
    niMargin: [16.5, 18, 19, 20, 20.5],
    ebMargin: [23, 24, 25, 26, 26],
    sharesOut: [0.385, 0.386, 0.386, 0.385, 0.384],
    peLow: 20,
    peHigh: 35,
    evMult: 18,
    netCash: -0.2276,
    caveat:
      'A pure derivative of one capex cycle. Vertiv sells the power and cooling that goes inside a datacentre, so its revenue is a direct function of what NVDA, AMZN, MSFT and IREN choose to spend — which means holding it alongside those names is one bet, not two. Even after an 18.6% fall in the fortnight to 16 October, at 46.7x trailing earnings and 29.8x EV/EBITDA the exit multiple matters more than the growth rate, and the growth rate on offer is a consensus already forecasting +37% then +30%. Watch the order book rather than the revenue line: this is a business that finds out about a capex pause four quarters before its income statement does.',
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
        rev: 30.24,
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
        m: 'FY2026E revenue $14.00B, +36.86%',
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
        m: 'FY2027E revenue $18.27B, +30.5%',
        b: 'The margin path assumes higher-value thermal content, not just more units at the same price.',
        c: 'Check liquid-cooling revenue and content per megawatt. Volume growth without mix improvement does not produce the 2030 margin here.',
      },
      {
        h: 'GAAP against adjusted',
        m: 'FY2026E EPS $6.74 adjusted; 15.09% GAAP trailing margin',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'Morgan Stanley lowers Vertiv target to $330 from $350, keeps Overweight', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/vertiv-price-target-lowered-to-330-from-350-at-morgan-stanley-thefly-news', why: 'Multiple: second pre-earnings target cut in two days with estimates unchanged — the exit multiple, not growth, is being revised.' },
      { d: '2026-10-15', k: 'analyst', h: 'Mizuho trims Vertiv target to $280 from $300 in Q3 electrical-equipment preview, keeps Outperform', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/vertiv-price-target-lowered-to-280-from-300-at-mizuho-thefly-news', why: 'Multiple: seasonality/model recalibration ahead of Q3; signals softer near-term expectations for the 28 Oct print.' },
      { d: '2026-10-14', k: 'earnings', h: 'Vertiv sets Q3 2026 results for 28 October before the open', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/vertiv-announces-date-of-third-quarter-2026-earnings-release-and-conference-call-302907659.html', why: 'Growth: orders and book-to-bill on 28 Oct are the next test of the +36.9% / +30.5% consensus path.' },
      { d: '2026-10-06', k: 'analyst', h: 'GLJ Research initiates Vertiv with a Sell', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/vertiv-initiated-with-a-sell-at-glj-research-thefly-news', why: 'Multiple: first Sell in the coverage set, arriving as the stock de-rated.' },
      { d: '2026-09-24', k: 'deal', h: 'Vertiv agrees to buy King Environmental Services, a Dublin fluid-management and load-testing firm', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/vertiv-announces-agreement-to-acquire-king-environmental-services-ltd-expanding-global-fluid-management-services-302889097.html', why: 'Growth (services mix): bolt-on, price undisclosed, stated not material to results.' },
      { d: '2026-09-02', k: 'deal', h: 'Vertiv to buy UtilityInnovation Group for ~$1.45B cash plus up to $1.15B earnout, ~13x 2027 EBITDA', s: 'PR Newswire', u: 'https://www.prnewswire.com/news-releases/vertiv-announces-agreement-to-acquire-utilityinnovation-group-to-accelerate-time-to-power-for-ai-data-centers-302867612.html', why: 'Growth up and net debt up: adds on-site power/microgrid revenue, accretive to adjusted EPS in year one, all-cash so net debt rises ~$1.45B at Q4 close.' },
    ],
  },

  // Price $221.31 (5 October: $286.65, -22.8%; rates pressure, the force-majeure notice on
  // Oracle's Project Jupiter and a scandium-sourcing class action, which was seen only in
  // law-firm notices) · cap $65.18B · EV $65.28B · 294.53M shares (+24.65% YoY). No quarter
  // reported since the 6 October pull, so the trailing figures are unchanged. TTM rev
  // $3.11B · TTM EBITDA $418.48M (13.44%) · TTM NI $244.94M (7.87%), EPS $0.89 · cash
  // $2.72B, debt $2.82B -> net debt $98.16M · FCF $624.71M · P/E 249.42 trailing (was
  // 323.06), 62.15 forward · EV/EBITDA 155.99 · PS 20.96 · FY2026E rev $4.12B (+103.42%),
  // EPS $2.71, both unchanged · FY2027E $6.81B (+65.47%, against 45% modelled), EPS $4.93 ·
  // PT $285.43 (was $282.82) — now 29% ABOVE the price, where it was 1.34% below · Q3
  // reports 22 October — re-pull after it.
  BE: {
    name: 'Bloom Energy',
    sector: 'infra',
    shares: 1,
    cost: 221.31,
    priceRef: 221.31,
    pricePrev: 286.65,
    prevRev: 2.026,
    growth: [103.35, 45, 32, 25, 20],
    // Consensus EPS $2.71 implies a 19.4% net margin against a 7.87% GAAP trailing
    // margin \u2014 an adjusted number. Year one is set near GAAP and climbs from there.
    niMargin: [9, 12, 15, 17, 18],
    ebMargin: [15, 18, 21, 23, 24],
    // Up 24.65% in twelve months. This path assumes that halves, and then halves again.
    sharesOut: [0.2945, 0.32, 0.332, 0.342, 0.35],
    peLow: 25,
    peHigh: 45,
    evMult: 20,
    netCash: -0.09816,
    caveat:
      'Four problems stacked on one another, and the first is how far the multiple moves on unchanged estimates: the share price rose about 27% between 29 August and 10 September 2026 and a further 10.9% by 6 October, taking the multiple to 323x trailing earnings, then fell 22.8% by 16 October, taking it back to 249x and EV/EBITDA to 156x. The consensus price target went from 1.34% below the price to 29% above it in the same fortnight. The consensus: $2.71 FY2026 EPS implies a 19.4% net margin against a 7.87% GAAP trailing margin, so the headline is adjusted and the driver table starts at less than half of it. The dilution: the share count rose 24.65% in a single year, among the fastest here after BULL, CHA, SPCX, IREN and ASTS, and the path below assumes that decelerates sharply. And the growth itself: consensus has revenue more than doubling in 2026, which makes year one of this model entirely a bet on fuel-cell orders for datacentre power landing on schedule. That last point makes it the same trade as VST, VRT and IREN, at a much higher multiple.',
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
        b: 'Some of the fastest dilution in this book. At that rate the per-share result falls behind the business even when the business works.',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-16', k: 'analyst', h: 'Truist raises Bloom target to $240 from $218, keeps Hold, expects strong Q3 but says valuation prices in long-term…', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/bloom-energy-price-target-raised-to-240-from-218-at-truist-thefly-news', why: 'Margin and growth up near term (better profitability, higher per-site content), but multiple capped — the entry multiple is the issue, not the estimates.' },
      { d: '2026-10-15', k: 'analyst', h: 'Baird raises Bloom target to $351 from $310, keeps Outperform', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/bloom-energy-price-target-raised-to-351-from-310-at-baird-thefly-news', why: 'Multiple: targets keep rising into Q3 while the price falls, widening the gap the caveat describes in the other direction.' },
      { d: '2026-10-14', k: 'deal', h: 'AEP to build $4B, 702 MW Bloom fuel-cell plant in Wyoming under 20-year Google PPA; Oracle says Bloom remains…', s: 'TipRanks', u: 'https://www.tipranks.com/news/bloom-energy-stock-be-sinks-despite-progress-in-deals-tied-to-google-and-oracle-heres-why', why: 'Growth up: a named hyperscaler-backed order supports the +103% / +65% path; stock still fell >8% that day on CPI and a Roth Hold.' },
      { d: '2026-09-29', k: 'product', h: 'Bloom buys a 158,000 sq ft Fremont facility, roughly doubling floor space; RBC reads it as demand above forecast', s: 'TipRanks', u: 'https://www.tipranks.com/news/why-is-bloom-energy-stock-be-up-over-13-today', why: 'Growth and margin: added manufacturing capacity is the precondition for the revenue path and the scale-driven cost-per-kW decline.' },
      { d: '2026-09-25', k: 'deal', h: 'Oracle sends force-majeure notice on 2.45 GW Project Jupiter, which is designed to run on Bloom fuel cells; pipeline…', s: 'Mobile World Live', u: 'https://www.mobileworldlive.com/ai-cloud/oracle-seeks-protection-against-stargate-delays/', why: 'Growth down risk: the single largest named Bloom deployment could slip toward 2029 if permits stall, moving revenue out of the 2026-27 consensus years.' },
    ],
  },

  // The other neocloud, added so IREN has a direct comparison rather than only the power
  // producers. Price $165.47 (5 October: $232.57, -28.9%, with estimates flat: rising
  // yields, CoreWeave bonds near 14.5% and Gartner's 14 October forecast that most
  // neoclouds will not stay independent) · cap $45.36B · EV $47.51B · 274.10M shares
  // (+22.12% YoY). No quarter reported since the 6 October pull, so the trailing figures
  // are unchanged. TTM rev $1.36B · TTM EBITDA $258.00M (19.04%) · TTM NI $42.40M (3.13%),
  // EPS $0.16 · cash $8.04B, debt $10.20B → net debt $2.15B · FCF -$5.88B on $11.14B capex
  // · P/E 1,069.70 trailing (was 1,415.87), forward n/a · EV/EBITDA 184.14 · PS 33.35 ·
  // FY2025 rev $529.80M · FY2026E rev $3.34B (+530.45%), EPS -$2.19 (was -$2.23) · FY2027E
  // $12.29B (+267.97%, against 95% modelled), EPS -$3.56 — consensus has the loss WIDENING
  // in 2027 while the margin path here improves to -6% · PT $283.60, 22 analysts · Q3
  // reports 10 November.
  NBIS: {
    name: 'Nebius Group',
    sector: 'infra',
    shares: 1,
    cost: 165.47,
    priceRef: 165.47,
    pricePrev: 232.57,
    // The $529.80M CY2025 revenue the forecast page lists as the base year. Note
    // the trailing twelve months already show $1.36B, so the business is growing
    // through the year rather than starting it from the CY2025 base.
    prevRev: 0.5298,
    growth: [530.45, 95, 55, 38, 28],
    // -18.0% lands year one on the consensus -$2.19 EPS at 274.10M shares. Trailing GAAP net income is
    // barely positive at $42.40M, and turns negative as the capex depreciates.
    niMargin: [-18, -6, 4, 10, 14],
    ebMargin: [22, 30, 38, 43, 46],
    // Up 22.12% in a year. Datacentres bought with equity, the same way IREN and
    // ASTS fund theirs, and the path assumes the pace decelerates rather than stops.
    sharesOut: [0.2741, 0.305, 0.322, 0.335, 0.345],
    peLow: 25,
    peHigh: 45,
    evMult: 18,
    netCash: -2.15,
    caveat:
      'Read this beside IREN rather than instead of it: two companies renting the same accelerators to the same customers, funded the same way. The numbers are extreme in every direction. Consensus has revenue up 530.45% in CY2026 — by far the largest year-one growth rate in the book — and a GAAP loss of $2.19 a share at the same time — widening to $3.56 in 2027, where this model’s margin path has it narrowing — because the capex that produces the revenue depreciates before it earns. Free cash flow is -$5.88B against $11.14B of capex, net debt is $2.15B, the share count rose 22.12% in a year, and the trailing multiple is 1,069.70x earnings and 33.4x sales even after a 29% fall in the fortnight to 16 October. What none of that prices is customer concentration: revenue of this shape comes from a small number of very large contracts, so the difference between the bear and base cases below is mostly whether one or two counterparties renew. The 2030 margin also assumes accelerator rental does not become a commodity, which is the one thing a market with this much capital entering it usually does.',
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
        m: 'FY2026E revenue $3.34B, +530.5%',
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
        m: 'EV/EBITDA 184.14',
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
    news: [
      // newest first, 3–6 items, only things that touch a model driver
      { d: '2026-10-15', k: 'macro', h: 'Gartner forecasts over 80% of neoclouds will stop operating independently by 2030; Nebius falls ~4% that morning', s: '24/7 Wall St.', u: 'https://247wallst.com/investing/2026/10/15/ai-cloud-stocks-sink-as-gartner-warns-most-neoclouds-wont-survive-independently-iren-and-coreweave-fall-5-nebius-drops-4/', why: 'Multiple and margin down: a credible third-party case for the bear thesis that rental pricing commoditises before the 2030 margin is reached.' },
      { d: '2026-10-14', k: 'macro', h: 'Neoclouds plunge (NBIS -10%) as tech CDS spreads hit records and CoreWeave CDS tops 1,000bp on AI funding fears', s: 'TipRanks', u: 'https://www.tipranks.com/news/why-neocloud-stocks-crwv-nbis-and-iren-are-still-down-despite-wednesdays-plunge', why: 'Share count and net debt: higher cost of debt pushes more of the capex bill onto equity, worsening the dilution path the drivers assume decelerates.' },
      { d: '2026-10-08', k: 'macro', h: 'Neocloud selloff extends as 10-year yield nears 5.33% and oil jumps, raising AI buildout funding costs', s: 'TipRanks', u: 'https://www.tipranks.com/news/coreweave-nebius-and-iren-stocks-extend-losses-in-premarket-today-whats-behind-the-sell-off', why: 'Multiple down: a higher discount rate hits a long-duration, loss-making cash-flow profile hardest.' },
      { d: '2026-10-07', k: 'analyst', h: 'Rosenblatt initiates Nebius at Buy, $304 target; estimates active power ~1/6 of CoreWeave\'s 1.5 GW', s: 'TheFly', u: 'https://www.tipranks.com/news/the-fly/nebius-initiated-with-a-buy-at-rosenblatt-thefly-news', why: 'Growth: flags that Nebius does not disclose revenue-generating power, the input that gates the +268% FY2027 consensus.' },
      { d: '2026-10-01', k: 'deal', h: 'Nebius acquires Inferize to strengthen its Token Factory inference stack; terms undisclosed', s: 'Nebius', u: 'https://nebius.com/newsroom/nebius-acquires-inferize-to-strengthen-nebius-token-factorys-production-inference-stack', why: 'Margin: a push up-stack into managed inference, the bull case\'s \'software margin on top\'; immaterial in size.' },
      { d: '2026-09-08', k: 'deal', h: 'Palantir names Nebius its preferred sovereign AI infrastructure partner', s: 'Nebius', u: 'https://nebius.com/newsroom/palantir-and-nebius-partner-to-deliver-a-complete-sovereign-ai-stack-to-palantir-customers', why: 'Growth and concentration: a distribution channel beyond the one or two anchor contracts; no contract value disclosed.' },
    ],
  },
}
