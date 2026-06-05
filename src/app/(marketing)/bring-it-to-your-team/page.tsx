import TrustSection from '@/components/sections/TrustSection'

export const metadata = { title: 'Bring It To Your Team — Poison Pawn' }

const sectors = [
  {
    tag: '/ Finance',
    title: 'Finance & Investment',
    body: 'In finance, the wrong call at the wrong moment is permanent. We build the decision discipline to stay clear-headed when capital, reputation, and outcomes are on the line.',
    wide: false,
  },
  {
    tag: '/ Medicine',
    title: 'Surgeons & Clinicians',
    body: 'In medicine, there is no second take. We train the cognitive clarity and composure that allow practitioners to make the right call — precisely, every time.',
    wide: false,
  },
  {
    tag: '/ Elite Athletics',
    title: 'Athletes & Teams',
    body: 'Elite physical preparation is table stakes. What separates programs at the highest level is how they think — and how consistently that thinking holds when everything is on the line.',
    wide: false,
  },
  {
    tag: '/ Legal & Government',
    title: 'Legal & Government',
    body: 'The courtroom, the hearing room, the negotiation table — high-stakes legal environments demand the ability to read situations fast and respond without hesitation.',
    wide: false,
  },
  {
    tag: '/ Tactical',
    title: 'Military, Law Enforcement & First Responders',
    body: 'Tactical environments demand decisions in fractions of a second with zero room for error. We train the mental framework that performs when protocols alone are not enough.',
    wide: false,
  },
  {
    tag: '/ Education',
    title: 'Educators & Institutions',
    body: 'The most valuable skill a student can develop is how to think clearly when the stakes are real. We bring decision-making into the curriculum as a discipline, not an afterthought.',
    wide: false,
  },
  {
    tag: '/ Leadership',
    title: 'Corporate & Entrepreneurial',
    body: 'For executives and founders who carry the weight of decisions that shape organizations — we build the clarity and composure to lead at the highest level.',
    wide: true,
  },
]

const steps = [
  {
    n: '01',
    title: 'Reach Out',
    body: 'Submit an application. Tell us about your organization, your group size, and what you\'re trying to improve. We\'ll review and follow up within 48 hours.',
  },
  {
    n: '02',
    title: 'Onboard',
    body: 'Once approved, your group is set up directly and supported throughout. We handle the setup, the access, and the orientation — so everyone is ready to train from day one.',
  },
  {
    n: '03',
    title: 'Train',
    body: 'Your people train through the app on their own schedule. Performance data builds over time. The system identifies patterns, delivers targeted drills, and tracks progress continuously.',
  },
]

const included = [
  { title: 'App Access',           body: 'Full access to the Poison Pawn training platform for every member of your organization.' },
  { title: 'Decision Profiles',    body: 'Individual profiles built for each person — identifying how they think, where they\'re sharp, and where their gaps are.' },
  { title: 'Targeted Drills',      body: 'Personalized drills delivered through the app based on each person\'s decision-making patterns and tendencies.' },
  { title: 'Performance Tracking', body: 'Real-time dashboards showing progress over time — visible to leaders and administrators.' },
  { title: 'Workshops',            body: 'Live sessions with the Poison Pawn team to orient your organization and reinforce the system.' },
  { title: 'Training Equipment',   body: 'Every approved organization receives Poison Pawn\'s custom training equipment — used in live sessions to reinforce the decision-making principles from the app.' },
  { title: 'Ongoing Support',      body: 'Your organization is supported throughout the process — not just at onboarding.' },
  { title: 'Results',              body: 'Decision-making improves. Performance follows. Every organization that goes through the system sees it — and the data makes it undeniable.' },
]

export default function BringItToYourTeamPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              For Teams & Organizations
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Built For Organizations<br />That Demand More.
            </h1>
            <p className="text-bone-dim text-lg leading-relaxed max-w-[520px]">
              Poison Pawn is designed to integrate into any high-performance environment without
              disruption — giving your people a measurable edge in decision-making from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Who This Is For
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              Built For Every<br />High-Stakes Environment.
            </h2>
          </div>
          {/* 6 cards 2×3 + 1 wide card spanning full width */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {sectors.filter(s => !s.wide).map((s, i) => (
              <div
                key={s.title}
                className="reveal border border-line bg-surface-2 rounded-sm p-8"
                data-d={(i % 3) + 1}
              >
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-venom mb-4">{s.tag}</div>
                <h3 className="text-bone text-lg font-extrabold uppercase tracking-tight mb-3">{s.title}</h3>
                <p className="text-bone-dim text-[14px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          {/* Wide leadership card */}
          {sectors.filter(s => s.wide).map(s => (
            <div key={s.title} className="reveal border border-venom/30 bg-surface-2 rounded-sm p-8">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-venom mb-4">{s.tag}</div>
              <h3 className="text-bone text-lg font-extrabold uppercase tracking-tight mb-3">{s.title}</h3>
              <p className="text-bone-dim text-[14px] leading-relaxed max-w-2xl">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              The Process
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              Three Steps. No Disruption.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal border border-line bg-surface rounded-sm p-8"
                data-d={(i % 3) + 1}
              >
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-venom border border-venom/40 inline-block px-2 py-0.5 mb-5">{s.n}</div>
                <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-bone-dim text-[14px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              What&apos;s Included
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              Everything Your Team Needs.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item, i) => (
              <div
                key={item.title}
                className="reveal border border-line bg-surface-2 rounded-sm p-6"
                data-d={(i % 4) + 1}
              >
                <h3 className="text-bone text-[15px] font-extrabold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-bone-dim text-[13px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's Already In The System */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-8">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom">
              Who&apos;s Already In The System
            </div>
          </div>
          <TrustSection />
          <div className="reveal mt-12 border-l-2 border-venom pl-6 max-w-2xl">
            <blockquote className="text-bone text-[16px] leading-relaxed italic mb-4">
              &ldquo;It&apos;s just as important for our team to train our minds as it is our physical
              strength or volleyball skills.&rdquo;
            </blockquote>
            <div className="text-bone-dim text-[13px]">
              — Coach John Speraw, UCLA Men&apos;s Volleyball, 2023 &amp; 2024 National Champions
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-10">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Pricing
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Custom Pricing<br />For Every Program.
            </h2>
            <p className="text-bone-dim text-[16px] leading-relaxed max-w-xl">
              Poison Pawn pricing is based on team size and program needs. There are no standard
              packages — every organization is different, and pricing reflects that.
            </p>
          </div>
          <div className="reveal">
            <a
              href="/contact"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Apply For Training →
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-obsidian border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <div className="reveal">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">Apply</div>
            <h2 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Perform At A<br />Different Level.
            </h2>
            <p className="text-bone-dim text-[16px] leading-relaxed max-w-xl mx-auto mb-10">
              Book a call with the Poison Pawn team. Tell us about your program. We&apos;ll take it
              from there.
            </p>
            <a
              href="/contact"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Apply For Training →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
