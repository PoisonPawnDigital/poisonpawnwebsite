'use client'

import { useState } from 'react'

type Stat = { n: string; k: string; s: string }
type BeforeAfter = { tag: string; value: string }

// One uniform shape for every case study so they all read the same way:
// collapsed → headline + before/after; expanded → starting point, method,
// the numbers, and the bigger picture. UCLA Football and UCLA Volleyball are
// each their own standalone study, exactly like Blue Jays and the Olympics.
type CaseStudy = {
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

const STUDIES: CaseStudy[] = [
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
  {
    label: 'Case Study 03 — UCLA Football',
    headline: 'From 12 interceptions to the record books.',
    deck: 'UCLA brought in Poison Pawn to sharpen decision-making under pressure. It started with one quarterback — Dorian Thompson-Robinson — and became part of how the program develops talent.',
    before: { tag: 'Sophomore · 2019', value: '59%' },
    after: { tag: 'Final season · 2022', value: '69.6%' },
    startingPoint: {
      h: 'Every tool. No repeatable process.',
      body: 'In 2019, UCLA brought in Poison Pawn with a single mandate: sharpen its players’ decision-making under time and pressure. The first athlete in the program was Dorian Thompson-Robinson, a sophomore quarterback in his first year as a starter. That season he completed just 59% of his passes and threw 12 interceptions. The raw ability was never in question — what was missing was a way to make the same clear-headed decision, every snap.',
    },
    method: {
      h: 'It was never really about chess.',
      body: 'On the board, decision-making becomes visible — how an athlete reads patterns, recovers from a mistake, whether they follow a process or fall back on instinct. Poison Pawn used that mirror to build a repeatable system: study patterns instead of trusting raw athleticism, compartmentalize errors so one bad play never bleeds into the next, and control tempo so the opponent is the one forced to react.',
    },
    stats: [
      { n: '69.6%', k: 'Completion', s: 'UCLA single-season record' },
      { n: '10,710', k: 'Passing Yards', s: 'UCLA all-time record' },
      { n: '88', k: 'TD Passes', s: 'UCLA all-time record' },
      { n: '3rd', k: 'Overall Recruit', s: 'Quarterback recruit in the country' },
    ],
    footnote:
      'Thompson-Robinson’s 2022 completion mark set a UCLA single-season record; his career totals stand as program all-time records. Figures from UCLA Athletics and public records.',
    biggerPicture: {
      h: 'The work outlived the player.',
      body: 'What started with Dorian Thompson-Robinson became part of how UCLA develops quarterbacks — and helped the program land Dante Moore, the No. 3 quarterback in the country, who pointed to that development work as a reason he chose the school.',
    },
  },
  {
    label: 'Case Study 04 — UCLA Volleyball',
    headline: '12–12. Then they never lost again.',
    deck: 'The Poison Pawn training system and UCLA men’s volleyball — from a .500 record to back-to-back national champions.',
    before: { tag: 'Midway through 2023', value: '12–12' },
    after: { tag: '2023 & 2024', value: 'Champions ×2' },
    startingPoint: {
      h: 'Halfway through, a .500 team.',
      body: 'Midway through the 2023 season, the program sat at 12–12 — talented, but going nowhere in particular. Few would have picked them to win anything, let alone start a dynasty. What changed wasn’t the roster. It was how they made decisions when matches got tight.',
    },
    method: {
      h: 'Win the points that decide matches.',
      body: 'Volleyball turns on a handful of high-pressure moments per set. Poison Pawn’s training builds the capacity to handle exactly those: reading patterns, executing a process under pressure, staying composed after an error, and controlling tempo so the opponent is the one reacting. Decided points stop being a coin flip and start being a skill.',
    },
    stats: [
      { n: '14', k: 'Straight Wins', s: 'to close 2023' },
      { n: '2×', k: 'Back-to-Back', s: 'First repeat since 1995–96' },
      { n: 'No. 1', k: 'Final Ranking', s: 'Top seed, 2024' },
      { n: '21', k: 'NCAA Titles', s: 'Most all-time in the sport' },
    ],
    footnote:
      'After a 12–12 start in 2023, UCLA won its final 14 matches to claim the national title, then won 15 of its last 16 in 2024 to repeat — the program’s first back-to-back championships since 1995–96 and its record 20th and 21st titles overall. Figures from NCAA and public records.',
    biggerPicture: {
      h: 'A .500 team became a dynasty.',
      body: 'Two championships in two years don’t happen by accident. The physical preparation at that level is table stakes — every program in contention has it. What separates the ones that close it out is how they make decisions when the pressure is highest and the margin is smallest. That’s the edge that compounds over a full season.',
    },
  },
]

function StatBlock({ study }: { study: CaseStudy }) {
  return (
    <div className="border border-line bg-surface-2 rounded-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-8 mb-8 pb-8 border-b border-line">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-1">Before</div>
          <div className="text-bone-dim text-[14px]">{study.before.tag}: {study.before.value}</div>
        </div>
        <div className="text-venom text-2xl self-center">→</div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-1">After</div>
          <div className="text-bone text-[14px] font-semibold">{study.after.tag}: {study.after.value}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {study.stats.map((s) => (
          <div key={s.k}>
            <div className="text-bone text-2xl font-extrabold leading-none mb-1">{s.n}</div>
            <div className="text-venom font-mono text-[10px] tracking-[0.14em] uppercase mb-0.5">{s.k}</div>
            <div className="text-pp-muted text-[12px]">{s.s}</div>
          </div>
        ))}
      </div>
      <p className="text-pp-muted text-[11px] font-mono mt-6 pt-4 border-t border-line">{study.footnote}</p>
    </div>
  )
}

function CaseStudyRow({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="reveal border border-line bg-surface rounded-sm overflow-hidden">
      {/* Collapsed header — always visible */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left px-6 sm:px-8 py-7 hover:bg-surface-2/40 transition-colors duration-200"
      >
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-3">
          {study.label}
        </div>
        <h3 className="text-bone text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-none mb-4">
          {study.headline}
        </h3>
        <p className="text-bone-dim text-[15px] leading-relaxed max-w-3xl mb-5">{study.deck}</p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] text-bone-dim">
            <span className="text-pp-muted">{study.before.value}</span>
            <span className="text-venom">→</span>
            <span className="text-bone font-semibold">{study.after.value}</span>
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-venom ml-auto">
            {open ? 'Show less ↑' : 'Read more ↓'}
          </span>
        </div>
      </button>

      {/* Expandable detail — animated via grid-rows 0fr → 1fr */}
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-line">
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

            <StatBlock study={study} />

            <div className="mt-8 border-l-2 border-venom pl-5 max-w-3xl">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-2">The Bigger Picture</div>
              <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">{study.biggerPicture.h}</h4>
              <p className="text-bone-dim text-[15px] leading-relaxed">{study.biggerPicture.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudyList() {
  return (
    <section className="py-16 md:py-20 lg:py-[100px] bg-surface border-t border-line">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col gap-5">
          {STUDIES.map((study) => (
            <CaseStudyRow key={study.label} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
