export default function WatchCard({ item, checked, onToggle }) {
  return (
    <div className={`card wc${checked ? ' done' : ''}`}>
      <div className="top">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          aria-label={`Mark checked: ${item.h}`}
        />
        <h3>{item.h}</h3>
      </div>

      <span className="metric">{item.m}</span>

      <div className="blk">
        <span className="lbl">The benchmark</span>
        <p>{item.b}</p>
      </div>

      <div className="blk">
        <span className="lbl hit">What to check</span>
        <p>{item.c}</p>
      </div>
    </div>
  )
}
