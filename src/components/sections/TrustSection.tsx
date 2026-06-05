import Image from 'next/image'

const clients = [
  { name: 'Porsche',               src: '/logos/porsche.svg',               width: 4500, height: 300 },
  { name: 'YPO',                   src: '/logos/ypo.svg',                   width:  360, height: 160 },
  { name: 'Panda Restaurant Group',src: '/logos/panda-restaurant-group.svg',width:  228, height:  28 },
  { name: 'UCLA',                  src: '/logos/ucla.svg',                  width:  250, height: 123 },
  { name: 'Michigan State',        src: '/logos/michigan-state.svg',        width:  309, height: 359 },
  { name: 'Toronto Blue Jays',     src: '/logos/toronto-blue-jays.svg',     width:  311, height:  30 },
  { name: 'USA Swimming',          src: '/logos/usa-swimming.svg',          width:  184, height: 150 },
  { name: 'NY Giants',             src: '/logos/ny-giants.svg',             width:  193, height: 150 },
  { name: 'NFLPA',                 src: '/logos/nflpa.svg',                 width:  100, height:  28 },
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
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {all.map((client, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 brightness-0 invert opacity-60 hover:opacity-90 transition-opacity"
              style={{ width: 120, height: 36 }}
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
                unoptimized
              />
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
