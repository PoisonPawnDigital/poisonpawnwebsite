'use client'

import { useState } from 'react'

type Stat = { n: string; k: string; s: string }
type BeforeAfter = { tag: string; value: string }

// Studies 01 & 02 share one rich shape: collapsed → headline + before/after;
// expanded → starting point, method, the numbers, and the bigger picture.
type RichStudy = {
  label: string
  headline: string
  deck: string
  before: BeforeAfter
  after: BeforeAfter
  startingPoint: { h: string; body: string }
  method: { h: string; body: string }
  stats: Stat[]
  footnote: string
  biggerPicture: { h: string; body: string }
}

// Study 03 (UCLA) is one case study with two stories — Football and
// Volleyball — exactly as it appears in the source.
type UclaStory = {
  kicker: string
  headline: string
  body: string
  before: BeforeAfter
  after: BeforeAfter
  stats: Stat[]
  footnote: string
  biggerPicture: string
}

const RICH_STUDIES: RichStudy[] = [
  {
    label: 'Case Study 01 — Major League Baseball',
    headline: 'From the basement to Game 7 of the World Series.',
    deck: 'The Poison Pawn training system, built into the Toronto Blue Jays — in the same season they went from last in the AL East to the World Series.',
    before: { tag: '2024 · Last in AL East', value: '74 wins' },
    after: { tag: '2025 · Division Champions', value: '94 wins' },
    startingPoint: {
      h: 'Dead last, twenty games back.',
      body: 'The year before, the club finished 74–88 — last in its division, twenty games out of first. A roster many had written off as aging and in need of a reset. The talent was there. What the organization wanted was a sharper, more repeatable way of making decisions under pressure, at every level of the club.',
    },
    method: {
      h: 'A decision-making system, installed.',
      body: 'Poison Pawn’s training is built on one idea: the difference between a winning and losing organization is rarely talent — it’s the quality of decisions made under pressure, over a full 162-game season. The Blue Jays integrated the system club-wide, building a shared decision-making language across players and coaching staff. Read the situation. Stay composed after a mistake. Never let one bad moment become two.',
    },
    stats: [
      { n: '74 → 94', k: 'Win Improvement', s: 'in one year' },
      { n: '1st', k: 'AL East Title', s: 'Division champions' },
      { n: '3rd', k: 'Pennant', s: 'In franchise history' },
      { n: '.265', k: 'Team Batting Avg', s: 'Led all of MLB' },
    ],
    footnote:
      'Only the 14th worst-to-first turnaround in the divisional era (since 1969). The club won the division on the final day of the season and reached Game 7 of the World Series. Figures from MLB and public records.',
    biggerPicture: {
      h: 'A whole-organization transformation.',
      body: 'The data tells the story — decision quality improved across the roster, and twenty more wins followed. The brain can be trained to make better decisions under pressure. Over 162 games, that training compounds.',
    },
  },
  {
    label: 'Case Study 02 — Olympic Games',
    headline: 'Twenty years without a medal. Then Olympic Silver.',
    deck: 'The Poison Pawn training system and the U.S. artistic swimming team — from missing the Games entirely to the Olympic podium.',
    before: { tag: 'Olympic medals, prior 20 years', value: '0 since 2004' },
    after: { tag: 'Paris 2024', value: 'Silver' },
    startingPoint: {
      h: 'The margin between qualifying and missing the Games entirely was 0.66 points.',
      body: 'For two decades, the program hadn’t reached an Olympic podium — and it had stopped qualifying for the team event altogether across four straight Games. The low point came one year out, when the team missed Olympic qualification by 0.66 points. The margin between heartbreak and history had never been thinner.',
    },
    method: {
      h: 'Composure is a trainable skill.',
      body: 'In a sport judged on precision under enormous pressure, the smallest mental error is the difference between a podium and fourth place. Poison Pawn’s training builds exactly that capacity: reading patterns, executing a process rather than reacting, and — critically — compartmentalizing a mistake so it never bleeds into the next moment.',
    },
    stats: [
      { n: '20 yrs', k: 'Medal Drought Ended', s: 'First since 2004' },
      { n: '0.66', k: 'Points From Missing', s: 'Qualification, one year prior' },
      { n: '1996', k: 'Last Better Finish', s: 'Best result in 28 years' },
      { n: '2nd', k: 'Of All Nations', s: 'Behind only China' },
    ],
    footnote:
      'The U.S. ended a 20-year Olympic medal drought with silver in the team event at Paris 2024 — its best Olympic finish since 1996 — one year after missing qualification by 0.66 points. Figures from Olympic and public records.',
    biggerPicture: {
      h: 'From the edge of elimination to the podium.',
      body: 'The margin was 0.66 points. At that level, the difference between heartbreak and a podium isn’t physical — it’s the quality of decisions made when the pressure is highest. One year later, the team stood on the Olympic podium. The brain can be trained to perform differently under pressure. This is what that looks like.',
    },
  },
]

const UCLA_STUDY = {
  label: 'Case Study 03 — UCLA Athletics',
  headline: 'UCLA Athletics.',
  deck: 'Poison Pawn was integrated into UCLA Athletics starting in 2019. What began with a single quarterback spread through the program — and produced two separate championship runs across two different sports.',
  stories: [
    {
      kicker: 'Story 01 — Football',
      headline: 'From 12 interceptions to the record books.',
      body: 'In 2019, UCLA brought in Poison Pawn with a single mandate: sharpen its players’ decision-making under time and pressure. The first athlete in the program was Dorian Thompson-Robinson — a sophomore quarterback in his first year as a starter, talented but inconsistent. That season he completed just 59% of his passes and threw 12 interceptions. What was missing was a repeatable process for making clear-headed decisions, every snap, regardless of the situation.',
      before: { tag: 'Sophomore · 2019', value: '59%' },
      after: { tag: 'Final Season · 2022', value: '69.6%' },
      stats: [
        { n: '69.6%', k: 'Completion', s: 'UCLA single-season record' },
        { n: '10,710', k: 'Passing Yards', s: 'UCLA all-time record' },
        { n: '88', k: 'Touchdown Passes', s: 'UCLA all-time record' },
        { n: '12,536', k: 'Total Offense', s: 'UCLA all-time record' },
        { n: '157.4', k: 'Passer Efficiency', s: '2022 · 27 TD passes' },
      ],
      footnote:
        'Sophomore season was his first as a full-time starter. The 2022 completion mark set a UCLA single-season record; career totals stand as program all-time records. Figures from UCLA Athletics and public records.',
      biggerPicture:
        'From 59% to 69.6%. From 12 interceptions to all-time records. The data tracks exactly how decision-making improves when the brain is trained deliberately — pattern recognition sharpens, errors recover faster, and performance under pressure becomes consistent instead of unpredictable. What started with one quarterback spread through the entire program. UCLA went on to land Dante Moore — the #3 quarterback and #4 overall recruit in his class — who pointed to that development culture as a reason he chose the school.',
    },
    {
      kicker: 'Story 02 — Volleyball',
      headline: 'Back-to-Back. National Champions.',
      body: '17 years without a national title. Then back-to-back championships. What changed was how they made decisions when matches got tight.',
      before: { tag: 'Championship drought', value: '17 yrs' },
      after: { tag: '2023 & 2024', value: 'National Champions ×2' },
      stats: [
        { n: '14', k: 'Straight Wins', s: 'To close 2023 & claim the title' },
        { n: '2×', k: 'Back-to-Back', s: 'First repeat since 1995–96' },
        { n: 'No. 1', k: 'Final Ranking', s: 'Top seed, 2024' },
      ],
      footnote:
        'UCLA won 14 straight matches to close the 2023 season and claim the national title, then won 15 of its last 16 in 2024 to repeat — the program’s first back-to-back championships since 1995–96. Figures from NCAA and public records.',
      biggerPicture:
        '14 straight wins to close a season no one expected them to win. Then 15 of 16 to repeat. That kind of run under pressure doesn’t happen by accident — it happens when a team has trained how to decide in the moments that determine championships. Two titles. Two years.',
    },
  ] as UclaStory[],
}

function StatBlock({ before, after, stats, footnote }: { before: BeforeAfter; after: BeforeAfter; stats: Stat[]; footnote: string }) {
  return (
    <div className="border border-line bg-surface-2 rounded-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-8 mb-8 pb-8 border-b border-line">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-1">Before</div>
          <div className="text-bone-dim text-[14px]">{before.tag}: {before.value}</div>
        </div>
        <div className="text-venom text-2xl self-center">→</div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-1">After</div>
          <div className="text-bone text-[14px] font-semibold">{after.tag}: {after.value}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.k}>
            <div className="text-bone text-2xl font-extrabold leading-none mb-1">{s.n}</div>
            <div className="text-venom font-mono text-[10px] tracking-[0.14em] uppercase mb-0.5">{s.k}</div>
            <div className="text-pp-muted text-[12px]">{s.s}</div>
          </div>
        ))}
      </div>
      <p className="text-pp-muted text-[11px] font-mono mt-6 pt-4 border-t border-line">{footnote}</p>
    </div>
  )
}

function BiggerPicture({ h, body }: { h?: string; body: string }) {
  return (
    <div className="mt-8 border-l-2 border-venom pl-5 max-w-3xl">
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-2">The Bigger Picture</div>
      {h && <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">{h}</h4>}
      <p className="text-bone-dim text-[15px] leading-relaxed">{body}</p>
    </div>
  )
}

// Shared collapsible shell — collapsed header + animated expandable body.
function CollapsibleCard({
  label,
  headline,
  deck,
  pill,
  children,
}: {
  label: string
  headline: string
  deck: string
  pill: React.ReactNode
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="reveal border border-line bg-surface rounded-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left px-6 sm:px-8 py-7 hover:bg-surface-2/40 transition-colors duration-200"
      >
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-3">{label}</div>
        <h3 className="text-bone text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-none mb-4">
          {headline}
        </h3>
        <p className="text-bone-dim text-[15px] leading-relaxed max-w-3xl mb-5">{deck}</p>
        <div className="flex flex-wrap items-center gap-4">
          {pill}
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-venom ml-auto">
            {open ? 'Show less ↑' : 'Read more ↓'}
          </span>
        </div>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-line">{children}</div>
        </div>
      </div>
    </div>
  )
}

function BeforeAfterPill({ before, after }: { before: string; after: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[12px] text-bone-dim">
      <span className="text-pp-muted">{before}</span>
      <span className="text-venom">→</span>
      <span className="text-bone font-semibold">{after}</span>
    </span>
  )
}

function RichCard({ study }: { study: RichStudy }) {
  return (
    <CollapsibleCard
      label={study.label}
      headline={study.headline}
      deck={study.deck}
      pill={<BeforeAfterPill before={study.before.value} after={study.after.value} />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 mt-8">
        <div>
          <h4 className="text-venom font-mono text-[11px] tracking-[0.2em] uppercase mb-3">The Starting Point</h4>
          <h5 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">{study.startingPoint.h}</h5>
          <p className="text-bone-dim text-[15px] leading-relaxed">{study.startingPoint.body}</p>
        </div>
        <div>
          <h4 className="text-venom font-mono text-[11px] tracking-[0.2em] uppercase mb-3">The Method</h4>
          <h5 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">{study.method.h}</h5>
          <p className="text-bone-dim text-[15px] leading-relaxed">{study.method.body}</p>
        </div>
      </div>

      <StatBlock before={study.before} after={study.after} stats={study.stats} footnote={study.footnote} />

      <BiggerPicture h={study.biggerPicture.h} body={study.biggerPicture.body} />
    </CollapsibleCard>
  )
}

function UclaCard() {
  return (
    <CollapsibleCard
      label={UCLA_STUDY.label}
      headline={UCLA_STUDY.headline}
      deck={UCLA_STUDY.deck}
      pill={
        <span className="flex flex-wrap items-center gap-2">
          {UCLA_STUDY.stories.map((s) => (
            <span
              key={s.kicker}
              className="font-mono text-[10px] tracking-[0.16em] uppercase text-bone-dim border border-line rounded-sm px-2.5 py-1"
            >
              {s.kicker.replace('Story 01 — ', '').replace('Story 02 — ', '')}
            </span>
          ))}
        </span>
      }
    >
      <div className="mt-8 flex flex-col gap-12">
        {UCLA_STUDY.stories.map((story, i) => (
          <div key={story.kicker} className={i > 0 ? 'border-t border-line pt-12' : ''}>
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-3">{story.kicker}</div>
            <h4 className="text-bone text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-none mb-5">
              {story.headline}
            </h4>
            <p className="text-bone-dim text-[15px] leading-relaxed max-w-3xl mb-8">{story.body}</p>

            <StatBlock before={story.before} after={story.after} stats={story.stats} footnote={story.footnote} />

            <BiggerPicture body={story.biggerPicture} />
          </div>
        ))}
      </div>
    </CollapsibleCard>
  )
}

export default function CaseStudyList() {
  return (
    <section className="py-16 md:py-20 lg:py-[100px] bg-surface border-t border-line">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col gap-5">
          {RICH_STUDIES.map((study) => (
            <RichCard key={study.label} study={study} />
          ))}
          <UclaCard />
        </div>
      </div>
    </section>
  )
}
