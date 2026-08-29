/**
 * Sector groups, in the order they render.
 *
 * The order is not arbitrary: the seven accent colours were validated as a
 * categorical palette in this sequence (adjacent-pair CVD separation passes in both
 * light and dark against `scripts/validate_palette.js` from the dataviz skill).
 * Reordering these can put two confusable hues next to each other — re-run the
 * validator if you change it.
 *
 * Colour never carries identity alone here: every chip is labelled with its ticker
 * and every group with its sector name.
 */
export const SECTORS = [
  { key: 'internet', label: 'Internet & Ads' },
  { key: 'semis', label: 'Semiconductors' },
  { key: 'consumer', label: 'Consumer & Commerce' },
  { key: 'software', label: 'Software & Security' },
  { key: 'health', label: 'Healthcare' },
  { key: 'finance', label: 'Financials' },
  { key: 'infra', label: 'Power & Digital Assets' },
]

export const SECTOR_LABEL = Object.fromEntries(SECTORS.map((s) => [s.key, s.label]))

/** CSS custom property holding a sector's accent colour. */
export const sectorVar = (key) => `var(--sec-${key})`
