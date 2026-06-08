const clients = [
  {
    name: 'Porsche',
    src: '/logos/porsche.svg',
    className: 'h-[38px]',
    filterClass: '[filter:grayscale(1)_brightness(1.35)]',
  },
  { name: 'YPO',                   src: '/logos/ypo.svg' },
  { name: 'Panda Restaurant Group',src: '/logos/panda-restaurant-group.svg' },
  { name: 'UCLA',                  src: '/logos/ucla.svg' },
  { name: 'Michigan State',        src: '/logos/michigan-state.svg' },
  {
    name: 'Toronto Blue Jays',
    src: '/logos/toronto-blue-jays.svg',
    className: 'h-[38px]',
    filterClass: '[filter:none]',
  },
  {
    name: 'USA Swimming',
    src: '/logos/usa-swimming.svg',
    className: 'h-[34px]',
    filterClass: '[filter:none]',
  },
  { name: 'NY Giants',             src: '/logos/ny-giants.svg' },
  { name: 'NFLPA',                 src: '/logos/nflpa.svg' },
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
              style={{ height: 54 }}
            >
              {/* Uniform height keeps every logo the same visual size regardless of
                  aspect ratio; the filter renders each as a clean grayscale (white)
                  mark with no background on the dark bar. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={client.name}
                className={`${client.className ?? 'h-[26px]'} w-auto object-contain ${client.filterClass ?? '[filter:grayscale(1)_brightness(0)_invert(1)]'}`}
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
