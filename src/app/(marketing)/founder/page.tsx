import Image from 'next/image'

export const metadata = { title: 'Founder — Poison Pawn' }

const engagements = [
  {
    title: 'Keynote Speaking',
    body: 'Seth speaks to teams, organizations, and leadership groups on decision-making, performance under pressure, and the Poison Pawn system. Available for conferences, offsites, and leadership events.',
  },
  {
    title: 'Organization Training',
    body: 'Full Poison Pawn program integration for your organization. App access, chess sets, workshops, and ongoing support. Built around your specific needs.',
  },
  {
    title: 'Advisory',
    body: 'One on one advisory for executives, leaders, and high-performers who want direct access to Seth\'s expertise. Limited availability.',
  },
]

export default function FounderPage() {
  return (
    <main className="pt-20">

      {/* Hero — Two Column */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Jalen Hurts image */}
            <div className="reveal">
              <Image
                src="https://cdn.prod.website-files.com/6a0e74426980c14129cf2c05/6a1dc7e2bf7ec4976492d026_JALEN%2BHURTS%2BSETH%2BMAKOWSKY%2BFIELD.webp"
                alt="Jalen Hurts and Seth Makowsky on the field"
                width={800}
                height={600}
                className="w-full h-auto"
                unoptimized
              />
            </div>

            {/* Right — intro */}
            <div className="reveal" data-d="2">
              <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
                Founder
              </div>
              <h1 className="text-bone text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-8">
                Seth<br />Makowsky.
              </h1>
              <p className="text-bone text-[16px] leading-relaxed italic mb-6 border-l-2 border-venom pl-5">
                &ldquo;The most unique confidant and quarterback guru in football.&rdquo; — The Athletic
              </p>
              <p className="text-bone-dim text-[16px] leading-relaxed">
                Founder of Poison Pawn. Performance coach to Super Bowl champions, Olympic gold
                medalists, and Fortune 500 executives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Story — Two Column */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — story copy */}
            <div className="reveal">
              <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
                The Origin
              </div>
              <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-8">
                He Didn&apos;t Invent A Theory.<br />He Built A System.
              </h2>
              <div className="space-y-5 text-bone-dim text-[16px] leading-relaxed">
                <p>
                  Seth Makowsky has spent his career in rooms most people never get access to. Working
                  one on one with NFL quarterbacks, Olympic athletes, championship coaching staffs,
                  Fortune 500 executives, and leadership teams across industries — he has seen elite
                  performance up close in almost every form it takes.
                </p>
                <p>
                  What he kept seeing was the same gap. Preparation at the highest level is
                  extraordinary. The training, the technology, the support systems — all world class.
                  But decision-making — the one skill that determines everything else — was being left
                  entirely untrained. Performers were expected to figure it out under fire.
                </p>
                <p>
                  Seth built Poison Pawn to close that gap. Using chess as the training environment,
                  he developed a system that does for decision-making what the best coaches do for
                  execution — identifies weaknesses, targets them specifically, tracks progress over
                  time, and makes improvement measurable. The result is a performance system unlike
                  anything else that exists.
                </p>
              </div>
            </div>

            {/* Right — Mookie Betts image (display full, not cropped) */}
            <div className="reveal" data-d="2">
              <Image
                src="https://cdn.prod.website-files.com/6a0e74426980c14129cf2c05/6a1dc7e7dc7c504c25f4d1c2_mookie%20image.webp"
                alt="Mookie Betts and Seth Makowsky"
                width={800}
                height={600}
                className="w-full h-auto"
                unoptimized
              />
            </div>

          </div>
        </div>
      </section>

      {/* Work With Seth */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Work With Seth
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              Three Ways To Engage.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {engagements.map((e, i) => (
              <div
                key={e.title}
                className="reveal border border-line bg-surface rounded-sm p-8"
                data-d={(i % 3) + 1}
              >
                <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">
                  {e.title}
                </h3>
                <p className="text-bone-dim text-[14px] leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
          <div className="reveal">
            <a
              href="/contact"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
