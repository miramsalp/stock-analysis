# CLAUDE.md

Ad Stack 2030 — a CY2026–CY2030 equity model for 27 companies. React 19 + Vite, no backend,
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

**Negative margins are legitimate.** IREN and ZETA are modelled loss-making in year one, which
makes EPS, implied P/E and the price ladder go negative for that column. That is the honest
output of a GAAP model on a GAAP-unprofitable company, not a bug to clamp away.

## Data

`tracked.js` (10 names) and `watchlist.js` (17) have identical shape — the split is editorial,
not structural. `tickers.js` merges them. Adding a company means one object in `watchlist.js`
with an existing `sector` key; nothing else needs touching.

Adding a *sector* means `SECTORS` in `sectors.js` plus a `--sec-<key>` colour in **all three**
theme blocks in `index.css`. The seven accent colours were validated as a categorical palette
**in declaration order** — re-run the dataviz-skill validator if you reorder or extend. Colour
never carries identity alone here: every chip is labelled with its ticker.

Every figure carries a reference date, `DATA_AS_OF` in `data/meta.js`. **ZETA is the one entry
that is not from that pull** — see its caveat and the README section. If you add a ticker whose
figures you could not actually verify, say so in its `caveat` rather than letting it sit silently
alongside sourced data.

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
