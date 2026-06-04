const press = [
  { outlet: 'The Athletic', quote: '"A confidant and the most unique quarterback guru in football."' },
  { outlet: 'New York Times', quote: '"Teaching Olympians how to make the right moves — on and off the board."' },
  { outlet: 'LA Times', quote: '"The chess guru turning rising NFL quarterbacks into decision-making machines."' },
  { outlet: 'ESPN', quote: '"Makowsky has revolutionized how decision-making fuels elite performance."' },
]

export default function PressSection() {
  return (
    <div className="border-y border-line bg-surface-2 py-12">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-pp-muted mb-8">
          As Seen In
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {press.map((p) => (
            <div key={p.outlet}>
              <div className="text-venom text-[14px] font-bold tracking-[0.08em] mb-3">{p.outlet}</div>
              <p className="text-bone-dim text-[13px] leading-relaxed italic">{p.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
