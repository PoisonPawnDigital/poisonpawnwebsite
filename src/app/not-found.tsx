import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-obsidian flex flex-col items-center justify-center px-8 text-center">
      <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
        404
      </div>
      <h1 className="text-bone text-4xl font-extrabold uppercase tracking-tight leading-none mb-6">
        Page Not Found
      </h1>
      <p className="text-bone-dim text-[15px] max-w-sm mb-8">
        This page doesn&apos;t exist. The game continues elsewhere.
      </p>
      <Link
        href="/"
        className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom border border-venom px-6 py-3 hover:bg-venom hover:text-black transition-all duration-200"
      >
        ← Back to Home
      </Link>
    </main>
  )
}
