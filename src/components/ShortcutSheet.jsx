import { useEffect, useRef } from 'react'

const KEYS = [
  [['/', 'Ctrl K'], 'Search companies and actions'],
  [['j', 'k'], 'Next / previous company, in rail order'],
  [['[', ']'], 'Previous / next tab'],
  [['1', '…', '5'], 'Jump to a tab'],
  [['g', 'c'], 'Go to Compare'],
  [['g', 'n'], 'Go to Newswire'],
  [['g', 'h'], 'Back to the company you were on'],
  [['t'], 'Cycle theme: system, light, dark'],
  [['?'], 'This sheet'],
]

/** Shortcuts are off while a field has focus — every table cell is an input. */
export default function ShortcutSheet({ open, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (open && !dlg.open) dlg.showModal()
    if (!open && dlg.open) dlg.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="keys-h"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
    >
      <div className="sheet-box">
        <h2 id="keys-h">Keyboard</h2>
        <dl className="keys">
          {KEYS.map(([ks, what]) => (
            <div key={what}>
              <dt>
                {ks.map((k) => (k === '…' ? <span key={k}>–</span> : <kbd key={k}>{k}</kbd>))}
              </dt>
              <dd>{what}</dd>
            </div>
          ))}
        </dl>
        <p className="note">Shortcuts pause while the caret is in a field.</p>
        <button type="button" className="ghost" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  )
}
