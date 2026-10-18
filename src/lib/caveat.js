import { DEFAULTS } from '../data/tickers.js'

/**
 * Structured caveats.
 *
 * Most of the book carries a caveat, and a page that opens every company with an
 * amber essay teaches the reader to skip amber. So the caveat is still rendered before
 * any number, but as type badges plus one lead sentence, with the full note expanding
 * in place. Names the earnings frame does not fit at all (`rankable: false`) keep the
 * full-strength treatment: the whole note, open, and a desaturated price ladder.
 *
 * The badge vocabulary is fixed. An entry may declare `caveatKind` and `caveatLead`
 * directly; otherwise both are inferred from the prose, which is conservative by
 * construction — a pattern that misses just means one fewer badge, never a missing
 * caveat, because the full text is always one click away and always above the numbers.
 */
export const CAVEAT_KINDS = {
  misfit: { label: 'Frame does not fit', hint: 'An earnings multiple does not value this company.' },
  'gaap-gap': { label: 'GAAP ≠ adjusted', hint: 'Consensus EPS is on a different basis from this GAAP model.' },
  'loss-making': { label: 'Loss-making', hint: 'GAAP losses in at least part of the window; ratios on loss years show n/m.' },
  multiple: { label: 'Multiple decides it', hint: 'The exit multiple moves the answer more than any driver.' },
  fiscal: { label: 'Fiscal-year offset', hint: 'Reported years do not line up with the calendar columns.' },
  fx: { label: 'Currency converted', hint: 'Reported in another currency and converted to USD.' },
  'ev-na': { label: 'EV/EBITDA n/a', hint: 'EBITDA is not meaningful for this business; ignore the cross-check.' },
  dividend: { label: 'Dividend not modelled', hint: 'Price return only; the yield is a real part of the total.' },
  leverage: { label: 'Leverage', hint: 'Net debt makes the equity a levered claim.' },
  dilution: { label: 'Dilution', hint: 'Share count is rising fast.' },
  young: { label: 'Short history', hint: 'Recently listed; little trading history to set a multiple band.' },
  asset: { label: 'Asset-price exposure', hint: 'Results follow a market price the company does not control.' },
  consensus: { label: 'Consensus moving', hint: 'Estimates have moved sharply between pulls.' },
}

const RULES = [
  ['gaap-gap', /non-GAAP|adjusted|GAAP-versus/i],
  ['loss-making', /loss-making|net loss|not profitable|lost \$|GAAP net losses|no earnings/i],
  ['multiple', /\d[\d,.]*x trailing|the multiple|exit multiple|exit assumption|entry multiple/i],
  ['fiscal', /fiscal year ends|fiscal-year/i],
  ['fx', /convert(ed|s)? .*(dollar|USD)|NT\$|EUR\/USD|USD\/CNY|in euros|renminbi/i],
  ['ev-na', /ignore the (EV\/EBITDA|cross-check)|EBITDA is not (a )?meaningful|EV\/EBITDA block is the weakest/i],
  ['dividend', /dividend/i],
  ['leverage', /net debt of|leverage|levered/i],
  ['dilution', /share count (is |has )?(up|risen|rose)|share count up|dilution/i],
  ['young', /newest listing|de-SPAC|came to Nasdaq|no full year as a public/i],
  ['asset', /bitcoin|price of an asset/i],
  ['consensus', /consensus moved|was cut from|cut from \$/i],
]

/** First sentence, or the first two when the first is a throat-clear like "Three things at once." */
function leadOf(text) {
  const parts = text.split(/(?<=[.!?])\s+(?=[A-Z"“(])/)
  let lead = parts[0] || ''
  if (lead.length < 70 && parts[1]) lead = `${lead} ${parts[1]}`
  return lead
}

const cache = new Map()

/** `{ text, lead, rest, kinds, severe }` for a ticker, or null when it carries no caveat. */
export function caveatOf(key) {
  if (cache.has(key)) return cache.get(key)
  const d = DEFAULTS[key]
  const text = typeof d?.caveat === 'string' ? d.caveat.trim() : ''
  const severe = d?.rankable === false
  let out = null

  if (text || severe) {
    const declared = Array.isArray(d.caveatKind) ? d.caveatKind.filter((k) => CAVEAT_KINDS[k]) : null
    let kinds = declared?.length ? declared : RULES.filter(([, re]) => re.test(text)).map(([k]) => k)
    if (severe) kinds = ['misfit', ...kinds.filter((k) => k !== 'misfit')]
    const lead = typeof d.caveatLead === 'string' && d.caveatLead ? d.caveatLead : leadOf(text)
    const rest = text.startsWith(lead) ? text.slice(lead.length).trim() : text
    out = { text, lead, rest, kinds: kinds.slice(0, 4), severe }
  }

  cache.set(key, out)
  return out
}
