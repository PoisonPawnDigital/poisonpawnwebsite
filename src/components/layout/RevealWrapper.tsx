'use client'

import { useEffect, useRef } from 'react'

export default function RevealWrapper() {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    // Immediately show anything already in the viewport on load
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

    all.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
