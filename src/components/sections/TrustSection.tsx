const clients = [
  'Porsche', 'YPO', 'Panda Restaurant Group', 'UCLA', 'Michigan State',
  'Toronto Blue Jays', 'USA Swimming', 'NY Giants', 'NFLPA',
]

export default function TrustSection() {
  // Double for seamless marquee loop
  const all = [...clients, ...clients]

  return (
    <div className="border-y border-line bg-surface py-5 overflow-hidden">
      <div className="flex items-center gap-8 mb-3 px-8">
        <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-pp-muted whitespace-nowrap flex-shrink-0">
          Trusted by Elite Performers
        </span>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {all.map((name, i) => (
            <span
              key={i}
              className="font-sans text-[13px] font-semibold tracking-[0.16em] uppercase text-bone-dim flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  )
}
