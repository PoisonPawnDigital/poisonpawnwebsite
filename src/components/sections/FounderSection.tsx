export default function FounderSection() {
  return (
    <section id="founder" className="py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal max-w-2xl" data-d="1">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
            From the founder
          </div>
          <blockquote className="text-bone text-xl md:text-2xl leading-relaxed mb-8 border-l-2 border-venom pl-8">
            &ldquo;I spent a decade in the room with the most elite performers alive — and the pattern
            was always the same. The edge was never talent.{' '}
            <em className="text-venom not-italic">
              It was the quality of the decision under pressure.
            </em>{' '}
            Poison Pawn is that decade, turned into a system anyone serious can train.&rdquo;
          </blockquote>
          <div className="mb-8">
            <div className="text-bone text-[16px] font-bold tracking-wide">Seth Makowsky</div>
            <div className="text-bone-dim text-[13px] mt-1">
              Founder · Creator of the Poison Pawn Method
            </div>
          </div>
          <p className="text-bone-dim text-[15px] leading-relaxed max-w-xl">
            For nearly a decade, Seth has trained the most elite performers in the world —
            professional athletes, Olympians and executives — to think more clearly and decide more
            decisively under pressure. His work with athletes earned recognition in the World Chess
            Hall of Fame, and his methods have been applied at the highest levels of sport, including
            UCLA Athletics.
          </p>
        </div>
      </div>
    </section>
  )
}
