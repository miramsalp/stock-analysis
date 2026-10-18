import { useEffect, useRef, useState } from 'react'

/** "1,5" and "1.5" both parse; a lone "-", "." or "" does not. */
function parse(text) {
  const t = String(text).trim().replace(/\s/g, '').replace(/,(?=\d*$)/, '.').replace(/,/g, '')
  if (!/^[-−]?(\d+\.?\d*|\.\d+)$/.test(t)) return NaN
  return parseFloat(t.replace('−', '-'))
}

const decimals = (n) => (String(n).split('.')[1] || '').length

/**
 * A number field that keeps its own text while focused, so a half-typed "1." or "-"
 * is not rewritten under the caret.
 *
 * Only a value that parses — and is allowed — is pushed up. Clearing a field to
 * retype it leaves the model on its last good value instead of flashing every chart
 * to zero, and on blur the text re-syncs to whatever the model holds.
 *
 * `type="text"` rather than `number`: iOS's decimal pad has no minus key, and IREN's
 * margins, net debt and bear-case margins all need one. Fields that can be negative
 * get a full keyboard; the rest keep the decimal pad. ↑/↓ step by `step`, and the
 * wheel never changes a value.
 *
 * `positive` refuses zero and below (P/E, share count, revenue base, cost — where zero
 * is not an assumption but a typo); `min` clamps.
 */
export default function NumField({
  value,
  step = 1,
  onChange,
  className,
  ariaLabel,
  id,
  min,
  signed = false,
  positive = false,
}) {
  const [text, setText] = useState(() => String(value))
  const [bad, setBad] = useState(false)
  const focused = useRef(false)

  useEffect(() => {
    if (!focused.current) setText(String(value))
  }, [value])

  const allowed = (v) =>
    Number.isFinite(v) && !(positive && v <= 0) && !(min != null && v < min)

  const commit = (raw) => {
    const v = parse(raw)
    const good = allowed(v)
    setBad(!good && String(raw).trim() !== '')
    if (good && v !== value) onChange(v)
  }

  return (
    <input
      id={id}
      type="text"
      inputMode={signed ? 'text' : 'decimal'}
      autoComplete="off"
      spellCheck={false}
      className={className}
      aria-label={ariaLabel}
      aria-invalid={bad || undefined}
      value={text}
      onFocus={() => {
        focused.current = true
      }}
      onBlur={() => {
        focused.current = false
        setBad(false)
        setText(String(value))
      }}
      onChange={(e) => {
        setText(e.target.value)
        commit(e.target.value)
      }}
      onKeyDown={(e) => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
        e.preventDefault()
        const base = Number.isFinite(parse(text)) ? parse(text) : value
        const dp = Math.max(decimals(step), decimals(base))
        const next = +(base + (e.key === 'ArrowUp' ? step : -step)).toFixed(Math.min(dp, 6))
        if (!allowed(next)) return
        setText(String(next))
        setBad(false)
        onChange(next)
      }}
    />
  )
}
