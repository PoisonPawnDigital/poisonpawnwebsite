const clients = [
  {
    name: 'Porsche',
    src: '/logos/porsche.svg',
    className: 'h-[42px] w-auto',
    filterClass: '[filter:grayscale(1)_brightness(1.35)]',
  },
  { name: 'YPO',                   src: '/logos/ypo.svg' },
  {
    name: 'Panda Restaurant Group',
    src: '/logos/panda-express-emblem.png',
    className: 'h-[46px] w-[128px]',
    filterClass: '[filter:grayscale(1)_brightness(1.25)]',
  },
  { name: 'UCLA',                  src: '/logos/ucla.svg' },
  { name: 'Michigan State',        src: '/logos/michigan-state.svg' },
  {
    name: 'Toronto Blue Jays',
    src: '/logos/toronto-blue-jays.svg',
    className: 'h-[44px] w-auto',
    filterClass: '[filter:none]',
  },
  {
    name: 'USA Swimming',
    src: '/logos/usa-swimming.svg',
    className: 'h-[42px] w-auto',
    filterClass: '[filter:none]',
  },
  { name: 'NY Giants',             src: '/logos/ny-giants.svg' },
  {
    name: 'NFLPA',
    src: '/logos/nflpa.png',
    className: 'h-[44px] w-auto',
    filterClass: '[filter:grayscale(1)_brightness(1.25)]',
  },
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
              className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              style={{ height: 66 }}
            >
              {/* Stable logo boxes keep wide wordmarks and compact icons visually even. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={client.name}
                className={`${client.className ?? 'h-[34px] w-auto'} object-contain ${client.filterClass ?? '[filter:grayscale(1)_brightness(0)_invert(1)]'}`}
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
