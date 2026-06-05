'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

// Links ordered top → bottom as they appear on the page
const links = [
  { href: '#how', label: 'How It Works' },      // ~section 6
  { href: '#proof', label: 'Case Studies' },    // ~section 11
  { href: '#media', label: 'Media' },           // ~section 13
  { href: '#founder', label: 'Founder' },       // ~section 14
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-400',
        scrolled
          ? 'py-3.5 bg-black/82 backdrop-blur-md border-b border-line'
          : 'py-5 border-b border-transparent',
      )}
    >
      <a href="/" className="font-sans text-[15px] font-semibold tracking-[0.26em] uppercase text-bone hover:text-venom transition-colors duration-200">
        Poison&nbsp;Pawn
      </a>

      <div className="flex items-center gap-8">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="hidden lg:block text-bone-dim text-[13px] tracking-[0.04em] hover:text-bone transition-colors duration-250 py-3 px-1"
          >
            {label}
          </a>
        ))}
        <a
          href="#apply"
          className="whitespace-nowrap border border-line-strong px-3 py-2 md:px-[18px] md:py-[9px] rounded-sm text-[12px] md:text-[13px] tracking-[0.04em] text-bone hover:bg-venom hover:text-black hover:border-venom transition-all duration-300"
        >
          <span className="md:hidden">Apply</span>
          <span className="hidden md:inline">Apply For Training</span>
        </a>
      </div>
    </nav>
  )
}
