'use client'

import { useEffect } from 'react'

// Inline Calendly embed (not a popup/redirect). The color params render it on
// the site's dark palette so there's no bright white Calendly box.
const CALENDLY_URL =
  'https://calendly.com/poisonpawn/consultation?hide_gdpr_banner=1&background_color=0c0b09&text_color=f5ede0&primary_color=d4a24a'

export default function CalendlyInline() {
  useEffect(() => {
    const id = 'calendly-widget-script'
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.id = id
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget rounded-sm overflow-hidden border border-line bg-surface"
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  )
}
