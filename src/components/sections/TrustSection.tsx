import Image from 'next/image'

const clients = [
  { name: 'Porsche',               src: '/logos/porsche.svg',               width: 4500, height: 300 },
  { name: 'YPO',                   src: '/logos/ypo.svg',                   width:  360, height: 160 },
  { name: 'Panda Restaurant Group',src: '/logos/panda-restaurant-group.svg',width:  191, height:  15 },
  { name: 'UCLA',                  src: '/logos/ucla.svg',                  width:  250, height: 123 },
  { name: 'Michigan State',        src: '/logos/michigan-state.svg',        width:  309, height: 359 },
  { name: 'Toronto Blue Jays',     src: '/logos/toronto-blue-jays.svg',     width:  311, height:  30 },
  { name: 'USA Swimming',          src: '/logos/usa-swimming.svg',          width:  184, height: 150 },
  { name: 'NY Giants',             src: '/logos/ny-giants.svg',             width:  193, height: 150 },
  { name: 'NFLPA',                 src: '/logos/nflpa.svg',                 width:   71, height:  22 },
]

export default function TrustSection() {
  const all = [...clients, ...clients]

  return (
    <div className="border-y border-line bg-surface py-5 overflow-hidden" style={{ contain: 'layout' }}>
      <div className="flex items-center gap-8 mb-3 px-8">
        <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-pp-muted whitespace-nowrap flex-shrink-0">
          Trusted by Elite Performers
        </span>
      </div>
      <div className="relative">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          {all.map((client, i) => (
            // Actual full-color logos (multi-color brands can't be flattened
            // to one color). On the dark bar they sit on a light chip so
            // navy/dark marks stay legible; every chip is the same size.
            <div
              key={i}
              className="relative flex-shrink-0 flex items-center justify-center bg-bone/95 rounded-md opacity-85 hover:opacity-100 transition-opacity"
              style={{ width: 132, height: 52 }}
            >
              <div className="relative" style={{ width: 104, height: 32 }}>
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </div>
  )
}
