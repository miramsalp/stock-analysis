import { useState } from 'react'

import { CAVEAT_KINDS } from '../lib/caveat.js'

export function CaveatBadges({ kinds, max = 4 }) {
  if (!kinds?.length) return null
  return (
    <span className="badges">
      {kinds.slice(0, max).map((k) => (
        <span key={k} className={`badge${k === 'misfit' ? ' severe' : ''}`} title={CAVEAT_KINDS[k]?.hint}>
          {CAVEAT_KINDS[k]?.label ?? k}
        </span>
      ))}
    </span>
  )
}

/**
 * Sits above every number on the company page — the price, the targets and the
 * returns all come after it. Compact by default (badges and one lead sentence, with
 * the full note expanding in place, still above the numbers). Where the earnings
 * frame does not fit at all, the full note is open from the start.
 */
export default function CaveatBand({ ticker, caveat }) {
  const [openFor, setOpenFor] = useState(null)
  if (!caveat) return null
  const open = caveat.severe || openFor === ticker
  const id = `caveat-${ticker}`

  return (
    <aside className={`caveat${caveat.severe ? ' severe' : ''}`} aria-label="Read this first">
      <div className="caveat-top">
        <span className="caveat-k">{caveat.severe ? 'Frame does not fit — read first' : 'Read this first'}</span>
        <CaveatBadges kinds={caveat.kinds} />
      </div>
      <p className="caveat-lead">{caveat.lead}</p>
      {caveat.rest ? (
        <>
          <div id={id} className="caveat-rest" hidden={!open}>
            <p>{caveat.rest}</p>
          </div>
          {caveat.severe ? null : (
            <button
              type="button"
              className="linkish caveat-more"
              aria-expanded={open}
              aria-controls={id}
              onClick={() => setOpenFor(open ? null : ticker)}
            >
              {open ? 'Show less' : 'Read the full note'}
            </button>
          )}
        </>
      ) : null}
    </aside>
  )
}
