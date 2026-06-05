const quotes = [
  {
    q: '"It definitely helped my game. If I move this here — it\'s just like, about life. If I move this one way, something else can happen. You could get captured. It definitely helped me... That week was what changed my life."',
    who: 'C.J. Stroud',
    role: 'Pro Bowl NFL Quarterback',
  },
  {
    q: '"It\'s just as important for our team to train our minds as it is our physical strength or volleyball skills."',
    who: 'John Speraw',
    role: 'UCLA Men\'s Volleyball Head Coach — 2023 & 2024 National Champions',
  },
  {
    q: '"I\'ve been working with Poison Pawn, and it really ties into the training and the elite mindset of things. There\'s so much strategy that goes into it — learning how to think quickly and how to see steps ahead, which I translate into my sport."',
    who: 'Michael Andrew',
    role: 'Gold Medal Olympic Swimmer',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="reveal mb-12">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            What Elite Performers Say
          </div>
        </div>

        {/* Video placeholder */}
        <div className="reveal mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="aspect-video bg-surface-2 border border-line rounded-sm flex items-center justify-center">
              <div className="text-center">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-2">
                  Placeholder
                </div>
                <p className="text-bone-dim text-[13px]">Cameron Diaz — Training Video</p>
                <p className="text-pp-muted text-[11px] mt-1">Asset needed from client</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="text-bone text-[15px] font-semibold">Cameron Diaz</div>
              <div className="text-bone-dim text-[13px]">Actor, Entrepreneur, Mother</div>
            </div>
          </div>
        </div>

        {/* Pull quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="reveal border border-line bg-surface-2 p-8 rounded-sm"
              data-d={(i % 3) + 1}
            >
              <div className="text-venom text-4xl font-serif leading-none mb-4">&ldquo;</div>
              <blockquote className="text-bone text-[14px] leading-relaxed mb-6 italic">
                {q.q}
              </blockquote>
              <div className="text-bone-dim text-[13px]">
                <strong className="text-bone font-semibold not-italic">— {q.who}</strong>
                <br />{q.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
