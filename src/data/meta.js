export const YEARS = [2026, 2027, 2028, 2029, 2030]
export const SCEN_KEYS = ['bear', 'base', 'bull']

/**
 * Reference date for every price, share count and reported figure in the data files:
 * the 18 October 2026 pull, with prices at the 16 October close (the Friday before).
 * The staleness chip, the annualisation horizon and the storage stamp all read this,
 * so it moves in the same commit as the prices. A snapshot, not a feed.
 */
export const DATA_AS_OF = '18 October 2026'
