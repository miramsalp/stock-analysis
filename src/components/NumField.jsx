import { useEffect, useRef, useState } from 'react'

/**
 * A number input that keeps its own text while focused, so a half-typed value like
 * "1." or "" is not rewritten under the caret. The parsed number is pushed up on every
 * keystroke; the displayed text re-syncs from the prop on blur, and whenever the value
 * changes from outside (switching ticker, resetting to defaults).
 */
export default function NumField({ value, step, onChange, className, ariaLabel, id, min }) {
  const [text, setText] = useState(() => String(value))
  const focused = useRef(false)

  useEffect(() => {
    if (!focused.current) setText(String(value))
  }, [value])

  return (
    <input
      id={id}
      type="number"
      inputMode="decimal"
      step={step}
      min={min}
      className={className}
      aria-label={ariaLabel}
      value={text}
      onFocus={() => {
        focused.current = true
      }}
      onBlur={() => {
        focused.current = false
        setText(String(value))
      }}
      onChange={(e) => {
        setText(e.target.value)
        const parsed = parseFloat(e.target.value)
        onChange(isFinite(parsed) ? parsed : 0)
      }}
    />
  )
}
