const clients = [
  {
    name: 'Porsche',
    src: '/logos/porsche.svg',
    className: 'h-[62px] w-auto',
    filterClass: '[filter:grayscale(1)_brightness(1.35)]',
  },
  { name: 'YPO',                   src: '/logos/ypo.svg' },
  {
    name: 'Panda Restaurant Group',
    src: '/logos/panda-express-emblem.png',
    className: 'h-[68px] w-[190px]',
    filterClass: '[filter:grayscale(1)_brightness(1.25)]',
  },
  { name: 'UCLA',                  src: '/logos/ucla.svg' },
  { name: 'Michigan State',        src: '/logos/michigan-state.svg' },
  {
    name: 'Toronto Blue Jays',
    src: '/logos/toronto-blue-jays.svg',
    className: 'h-[73px] w-auto',
    filterClass: '[filter:grayscale(1)_brightness(1.38)_contrast(1.08)]',
  },
  {
    name: 'USA Swimming',
    src: '/logos/usa-swimming.svg',
    className: 'h-[78px] w-auto',
    filterClass: '[filter:none]',
  },
  { name: 'NY Giants',             src: '/logos/ny-giants.svg' },
  {
    name: 'NFLPA',
    src: '/logos/nflpa.png',
    className: 'h-[65px] w-auto',
    filterClass: '[filter:grayscale(1)_brightness(1.12)_contrast(1.05)]',
  },
]

export default function TrustSection() {
  return (
    <div className="border-y border-line bg-surface py-5 overflow-hidden" style={{ contain: 'layout' }}>
      <div className="flex items-center gap-8 mb-3 px-8">
        <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-pp-muted whitespace-nowrap flex-shrink-0">
          Trusted by Elite Performers
        </span>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1, 2].map((setIndex) => (
            <div
              key={setIndex}
              className="flex shrink-0 items-center gap-5 pr-5"
              aria-hidden={setIndex === 1}
            >
              {clients.map((client) => (
                <div
                  key={`${setIndex}-${client.name}`}
                  className="flex w-[162px] flex-shrink-0 items-center justify-center opacity-75 transition-opacity hover:opacity-100 md:w-[230px]"
                  style={{ height: 100 }}
                >
                  {/* Stable logo boxes keep wide wordmarks and compact icons visually even. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={client.name}
                    className={`${client.className ?? 'h-[52px] w-auto'} object-contain ${client.filterClass ?? '[filter:grayscale(1)_brightness(0)_invert(1)]'}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </div>
  )
}
