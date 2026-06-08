'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RevealWrapper() {
  const pathname = usePathname()

  useEffect(() => {
    const all = document.querySelectorAll<HTMLElement>('.reveal')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        // Fire slightly before element reaches viewport edge
        rootMargin: '0px 0px -40px 0px',
      },
    )

    all.forEach((el) => {
      el.classList.remove('visible')
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible')
        return
      }
      io.observe(el)
    })

    return () => io.disconnect()
  }, [pathname])

  return null
}
