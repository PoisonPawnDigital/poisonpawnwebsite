import HeroSection         from '@/components/sections/HeroSection'
import TrustSection        from '@/components/sections/TrustSection'
import HomeSystemSection   from '@/components/sections/HomeSystemSection'
import StatsSection        from '@/components/sections/StatsSection'
import PressSection        from '@/components/sections/PressSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import HomeCTASection      from '@/components/sections/HomeCTASection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <HomeSystemSection />
      <StatsSection />
      <PressSection />
      <TestimonialsSection />
      <HomeCTASection />
    </main>
  )
}
