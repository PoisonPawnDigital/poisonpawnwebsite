const platformLinks = [
  { href: '#shift', label: 'The Method' },
  { href: '#system', label: 'The System' },
  { href: '#data', label: 'The Data' },
  { href: '#who', label: "Who It's For" },
]

const companyLinks = [
  { href: '#founder', label: 'Founder' },
  { href: '#proof', label: 'Proof' },
  { href: '#media', label: 'Media' },
  { href: '#apply', label: 'Apply' },
  { href: '#', label: 'Contact' },
]

const connectLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'X / Twitter' },
]

function FooterLinkGroup({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom mb-1">{title}</p>
      {links.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          className="text-bone-dim text-[13px] tracking-[0.02em] hover:text-bone transition-colors duration-200"
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-line">
          <div className="max-w-xs">
            <div className="mb-4">
              <a href="/" className="font-sans text-[15px] font-semibold tracking-[0.26em] uppercase text-bone hover:text-venom transition-colors duration-200">
                Poison&nbsp;Pawn
              </a>
            </div>
            <p className="text-bone-dim text-[13px] leading-relaxed">
              A proprietary system that trains how you decide. Personalized. Game-theoretic. Measurable.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16">
            <FooterLinkGroup title="Platform" links={platformLinks} />
            <FooterLinkGroup title="Company" links={companyLinks} />
            <FooterLinkGroup title="Connect" links={connectLinks} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <span className="text-pp-muted text-[12px] tracking-[0.04em]">
            © 2026 Poison Pawn. All rights reserved.
          </span>
          <span className="text-pp-muted text-[12px] tracking-[0.04em] font-mono">
            #PlayerNotAPiece
          </span>
        </div>
      </div>
    </footer>
  )
}
