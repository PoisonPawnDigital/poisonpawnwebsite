import Image from 'next/image'

const clients = [
  { name: 'Porsche',               src: '/logos/porsche.svg',               width: 420 },
  { name: 'YPO',                   src: '/logos/ypo.svg',                   width:  63 },
  { name: 'Panda Restaurant Group',src: '/logos/panda-restaurant-group.svg',width: 228 },
  { name: 'UCLA',                  src: '/logos/ucla.svg',                  width:  57 },
  { name: 'Michigan State',        src: '/logos/michigan-state.svg',        width:  24 },
  { name: 'Toronto Blue Jays',     src: '/logos/toronto-blue-jays.svg',     width: 290 },
  { name: 'USA Swimming',          src: '/logos/usa-swimming.svg',          width:  34 },
  { name: 'NY Giants',             src: '/logos/ny-giants.svg',             width:  36 },
  { name: 'NFLPA',                 src: '/logos/nflpa.svg',                 width: 100 },
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
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {all.map((client, i) => (
            <Image
              key={i}
              src={client.src}
              alt={client.name}
              width={client.width}
              height={28}
              className="h-7 w-auto flex-shrink-0 brightness-0 invert opacity-60 transition-opacity hover:opacity-90"
              unoptimized
            />
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
