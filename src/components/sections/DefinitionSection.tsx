export default function DefinitionSection() {
  return (
    <div className="py-20 border-t border-b border-line bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
          <span className="text-bone text-2xl font-bold tracking-tight">poi·son pawn</span>
          <span className="font-mono text-[12px] tracking-[0.16em] text-pp-muted">
            noun · /ˈpoiz(ə)n pôn/
          </span>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            A move in which you{' '}
            <strong className="text-bone">sacrifice a pawn to gain the advantage</strong> — and win
            the game.
          </p>
        </div>
      </div>
    </div>
  )
}
