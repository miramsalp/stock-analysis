export default function Tip({ tip }) {
  if (!tip) return null
  return (
    <div className="tip" style={{ left: `${tip.x}px`, top: `${tip.y}px` }}>
      {tip.content}
    </div>
  )
}
