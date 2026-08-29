import { SECTORS } from './sectors.js'
import { TRACKED } from './tracked.js'
import { WATCHLIST } from './watchlist.js'

export { YEARS, SCEN_KEYS, DATA_AS_OF } from './meta.js'
export { SECTORS, SECTOR_LABEL, sectorVar } from './sectors.js'

/**
 * Every company the model knows about.
 *
 * `TRACKED` holds the ten this was built around; `WATCHLIST` holds the broader
 * coverage set. They have identical shape — the split is editorial, not structural,
 * so nothing downstream needs to know which file a ticker came from.
 *
 * See README.md for how each field was derived and what is sourced versus modelled.
 */
export const DEFAULTS = { ...TRACKED, ...WATCHLIST }

export const TICKERS = Object.keys(DEFAULTS)

/** Tickers grouped for the picker, in sector render order. Empty groups are dropped. */
export const TICKERS_BY_SECTOR = SECTORS.map((sector) => ({
  ...sector,
  tickers: TICKERS.filter((k) => DEFAULTS[k].sector === sector.key),
})).filter((group) => group.tickers.length > 0)
