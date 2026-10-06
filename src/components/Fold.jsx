/**
 * A collapsed section. The summary card answers the question most visitors came
 * with; everything that explains or edits it sits behind one of these, so the
 * page reads top-down instead of as eight equal-weight sections.
 */
export default function Fold({ title, hint, tag, children }) {
  return (
    <details className="fold card">
      <summary>
        <span className="fold-title">
          {title}
          {tag ? <span className="tag edit">{tag}</span> : null}
        </span>
        {hint ? <span className="fold-hint">{hint}</span> : null}
      </summary>
      <div className="fold-body">{children}</div>
    </details>
  )
}
