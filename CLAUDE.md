# CLAUDE.md

Ad Stack 2030 — a CY2026–CY2030 equity model for 37 companies. React 19 + Vite, no backend,
no router, no state library, no chart library. `README.md` is the substantive document: how each
number was derived, what is sourced versus modelled, and why. Read it before changing data.

## Commands

```bash
npm run dev      # http://localhost:5173
npm run build    # must pass before calling anything done
npm run lint     # oxlint
```

There is no test suite. `npm run build` plus a scratch `node` script that imports `src/lib/*.js`
directly (the package is `type: module`, so plain `node script.mjs` from the repo root works) is
how model changes get checked.

## Conventions that are not obvious from the code

**Money is in billions, share counts are in billions.** `prevRev: 1.245` is $1.245B and
`sharesOut: [0.252, …]` is 252M shares. Percentages are whole numbers, not fractions:
`growth: [21, …]` is 21%. Getting a unit wrong produces a plausible-looking page, not an error.

**Only numbers persist.** `src/lib/storage.js` writes scalars and the four five-element series to
`localStorage` and nothing else. Copy, theses, caveats and watch items always come from
`src/data/`, so editing prose there updates every saved model instead of leaving stale wording in
someone's browser. Never persist a string.

**`DEFAULTS` vs `store.data`.** `store.data` is the user's edited copy; `DEFAULTS` is the shipped
one. Non-numeric fields — `caveat`, `rankable`, `rankReason`, `sourced` — are read off `DEFAULTS`,
because a saved payload will not carry them.

**Scenarios do not inherit the driver table.** Each of bear/base/bull sets its own 2030 revenue,
margin and exit multiple, so the three cases can disagree about more than one variable at a time.
This is deliberate — do not "fix" it by deriving scenarios from the drivers.

**Negative margins are legitimate.** IREN is modelled loss-making in year one, which makes EPS,
implied P/E and the price ladder go negative for that column. That is the honest output of a GAAP
model on a GAAP-unprofitable company, not a bug to clamp away.

**Consensus EPS is often non-GAAP; this model is not.** Seven entries deliberately sit far below
the headline consensus for that reason — ZETA, BE, ARM, AXON, MRVL, VRT and GOOGL. Do not
"correct" a margin toward a consensus EPS without first checking which basis that consensus is on.
ZETA is the extreme case: $0.96 adjusted against a GAAP trailing net loss.

**Positions all start at 1 share.** Every `shares` field in the data files is `1`, so the position
column compares like with like. Do not reintroduce per-ticker share counts. `resetTicker(key)`
restores one company's shipped defaults; `resetPositions(data)` sets every ticker to 1 share at
`priceRef` and leaves drivers and scenarios untouched — they are different operations and the
header has a button for each.

## Data

`tracked.js` (10 names) and `watchlist.js` (27) have identical shape — the split is editorial,
not structural. `tickers.js` merges them. Adding a company means one object in `watchlist.js`
with an existing `sector` key; nothing else needs touching.

Adding a *sector* means `SECTORS` in `sectors.js` plus a `--sec-<key>` colour in **all three**
theme blocks in `index.css`. The eight accent colours were validated as a categorical palette
**in declaration order**, on adjacent pairs (not all pairs — that has never passed here, which is
why every chip is labelled with its ticker). Re-run the dataviz-skill validator if you reorder or
extend, and expect to solve for *position in the list* as much as for hue: Space & Aerospace sits
fifth because its olive fails against the red at the end and passes between the purple and the
pink. The exact commands are in README.md.

Every figure carries a reference date, `DATA_AS_OF` in `data/meta.js` — 29 August 2026, with
ZETA pulled on 31 August. Figures come from stockanalysis.com; each entry's header comment records
the exact numbers it was built from, so a re-pull is a diff rather than a re-derivation. **Do not
model a ticker from memory.** Fetch the quote, financials, statistics and forecast pages first —
estimated figures look identical to sourced ones on the page and are indistinguishable a week
later. If a figure genuinely cannot be verified, say so in the entry's `caveat`.

## Tone

The page is written to resist being read as advice. Where the earnings-multiple frame does not
fit a company, an amber `caveat` string renders *above* the summary stats — before the numbers,
not after. Section 07's ranking carries a note saying it ranks assumptions rather than companies.
Keep that posture: when a change makes a number look more authoritative than it is, add the
qualifier in the same commit.

## Style

Two-space indent, no semicolons, single quotes, ESM with explicit `.js`/`.jsx` extensions on every
relative import. Charts are hand-rolled SVG on a fixed `viewBox` with a shared `useTip` hook —
match that rather than adding a dependency. Comments explain *why* a number or a decision is what
it is; they do not narrate the code.
