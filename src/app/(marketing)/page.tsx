export default function HomePage() {
  return (
    <main>
      {/* Placeholder — hero and all sections coming in Phase 3 */}
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center gap-4 pt-24">
        <p className="font-mono text-venom text-xs tracking-[0.3em] uppercase">
          // Phase 2 — Nav &amp; Footer
        </p>
        <h1 className="text-bone text-4xl font-extrabold uppercase tracking-tight">
          Poison Pawn
        </h1>
        <p className="text-bone-dim text-sm tracking-wide max-w-sm text-center">
          Decision-Making Under Pressure
        </p>
      </div>
      {/* Extra height to test nav scroll state */}
      <div className="h-[200vh] bg-surface" />
    </main>
  );
}
