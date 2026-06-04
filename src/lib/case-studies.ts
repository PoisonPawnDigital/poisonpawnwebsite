export type CaseStudy = {
  slug: string
  label: string        // "01 — Football"
  eyebrow: string
  h1: string
  deck: string
  glance: { k: string; v: string }[]
  sections: {
    label: string
    h2: string
    body: string[]     // paragraphs; [placeholder] text kept as-is
  }[]
  data: {
    head: { left: string; right: string }
    before: { tag: string; value: string; suffix?: string }
    after: { tag: string; value: string; suffix?: string; badge?: string }
    bars?: { val: string; yr: string; hot?: boolean }[]
    records: { n: string; k: string; s: string }[]
    foot: string
  }
  accolades?: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'football-qb',
    label: '01 — Football',
    eyebrow: 'NCAA Division I · Pac-12 → NFL',
    h1: 'From 12 interceptions to the record books.',
    deck: 'How the Poison Pawn method turned a turnover-prone sophomore into the most prolific passer in UCLA history.',
    glance: [
      { k: 'Sport / Level', v: 'D-I football, quarterback → NFL draft pick' },
      { k: 'Engagement', v: 'Embedded mindset training, UCLA — from 2019' },
      { k: 'The Arc', v: '59% sophomore → school record-holder' },
    ],
    sections: [
      {
        label: 'The starting point',
        h2: 'Every physical tool. No repeatable process.',
        body: [
          'In 2019, UCLA brought in Poison Pawn with a single mandate: sharpen its players\' decision-making under time and pressure. The vehicle was unconventional — chess. The first athlete in the program was a sophomore quarterback in his first year as a starter, talented but inconsistent.',
          'That season he completed just 59% of his passes and threw 12 interceptions. The raw ability was never in question. What was missing was a way to make the same clear-headed decision, every snap, regardless of the situation.',
        ],
      },
      {
        label: 'The method',
        h2: 'It was never really about chess.',
        body: [
          'On the board, decision-making becomes visible. You can see how an athlete reads patterns, how they recover from a mistake, whether they follow a process or fall back on instinct. Poison Pawn used that mirror to build a repeatable system.',
          'Study patterns and sequences instead of trusting raw athleticism. Compartmentalize errors, so one bad play never bleeds into the next. Control tempo, so the opponent is the one forced to react. Careless mistakes got reframed for exactly what they are on the field — turnovers — and the goal became driving them toward zero.',
        ],
      },
      {
        label: 'The bigger picture',
        h2: 'One quarterback became an entire culture.',
        body: [
          'What started with a single player spread through the program — first the quarterbacks, then the linemen, then the defense — until it was woven into the team\'s identity. UCLA went on to land the highest-rated quarterback recruit in program history, who pointed to that development work as a reason he chose the school.',
        ],
      },
    ],
    data: {
      head: { left: 'UCLA Quarterback · 2019–2022', right: 'Completion %, efficiency & career records' },
      before: { tag: 'Sophomore · 2019', value: '59', suffix: '%' },
      after: { tag: 'Final season · 2022', value: '69.6', suffix: '%', badge: 'UCLA SINGLE-SEASON RECORD' },
      bars: [
        { val: '59%', yr: '2019' },
        { val: '61.6%', yr: '2021' },
        { val: '69.6%', yr: '2022', hot: true },
      ],
      records: [
        { n: '10,710', k: 'Passing yards', s: 'UCLA all-time record' },
        { n: '88', k: 'Touchdown passes', s: 'UCLA all-time record' },
        { n: '12,536', k: 'Total offense', s: 'UCLA all-time record' },
        { n: '157.4', k: 'Passer efficiency', s: '2022 · 27 TD passes' },
      ],
      foot: 'Sophomore season was his first as a full-time starter. The 2022 completion mark set a UCLA single-season record; career totals stand as program all-time records. Figures from UCLA Athletics and public records.',
    },
  },
  {
    slug: 'baseball-bluejays',
    label: '02 — Baseball',
    eyebrow: 'Major League Baseball · Organization-wide',
    h1: 'From the basement to Game 7 of the World Series.',
    deck: 'The Poison Pawn training system, built into a Major League organization — in the same season it went from worst to first.',
    glance: [
      { k: 'Sport / Level', v: 'MLB — full organization' },
      { k: 'Engagement', v: 'Training system integrated club-wide' },
      { k: 'The Arc', v: 'Last place → World Series' },
    ],
    sections: [
      {
        label: 'The starting point',
        h2: 'Dead last, twenty games back.',
        body: [
          'The year before, the club finished 74–88 — last in its division, twenty games out of first. A roster many had written off as aging and in need of a reset. The talent was there; what the organization wanted was a sharper, more repeatable way of making decisions under pressure, at every level of the club.',
        ],
      },
      {
        label: 'The method',
        h2: 'A decision-making system, installed.',
        body: [
          "Poison Pawn's training is built on one idea: the difference between good and elite is rarely physical — it's the quality and consistency of decisions made under time and pressure. Using chess as the training ground, players build a repeatable process: read patterns, stay composed after a mistake, control tempo, and never let one bad moment compound into the next.",
        ],
      },
      {
        label: 'The bigger picture',
        h2: 'A whole-team transformation.',
        body: [
          "A worst-to-first season is never one thing — it's a full roster rising together. Poison Pawn's role was to sharpen the way the organization thinks and decides under pressure, woven into the club through the season that produced one of the rarest turnarounds in the sport.",
        ],
      },
    ],
    data: {
      head: { left: 'Toronto Blue Jays · 2024 → 2025', right: 'Worst to first' },
      before: { tag: '2024 · last in AL East', value: '74', suffix: ' wins' },
      after: { tag: '2025 · division champions', value: '94', suffix: ' wins' },
      records: [
        { n: '+20', k: 'Win improvement', s: '74 → 94 in one year' },
        { n: '1st', k: 'AL East title', s: 'First since 2015' },
        { n: '3rd', k: 'Pennant', s: 'In franchise history' },
        { n: '.265', k: 'Team batting avg', s: 'Led all of MLB' },
      ],
      foot: 'Only the 14th worst-to-first turnaround in the divisional era (since 1969). The club won the division on the final day of the season and reached Game 7 of the World Series. Figures from MLB and public records.',
    },
  },
  {
    slug: 'artistic-swimming',
    label: '03 — Artistic Swimming',
    eyebrow: 'Olympic Games · National Team',
    h1: 'Twenty years without a medal. Then Olympic silver.',
    deck: 'The Poison Pawn training system and the U.S. artistic swimming team — from missing the Games entirely to the Olympic podium.',
    glance: [
      { k: 'Sport / Level', v: 'Olympic artistic swimming' },
      { k: 'Engagement', v: 'Worked with the team & its captain' },
      { k: 'The Arc', v: '20-year drought → silver medal' },
    ],
    sections: [
      {
        label: 'The starting point',
        h2: 'So close it hurt.',
        body: [
          "For two decades, the program hadn't reached an Olympic podium — and it had stopped qualifying for the team event altogether across four straight Games. The low point came one year out, when the team missed Olympic qualification by 0.66 points. The margin between heartbreak and history had never been thinner.",
        ],
      },
      {
        label: 'The method',
        h2: 'Composure is a trainable skill.',
        body: [
          "In a sport judged on precision under enormous pressure, the smallest mental error is the difference between a podium and fourth place. Poison Pawn's training builds exactly that capacity: reading patterns, executing a process rather than reacting, and — critically — compartmentalizing a mistake so it never bleeds into the next moment of a routine.",
        ],
      },
      {
        label: 'The bigger picture',
        h2: 'From the edge of elimination to the podium.',
        body: [
          'A team that could not even reach the Games returned and stood on the Olympic podium — a complete reversal at the highest level the sport offers.',
        ],
      },
    ],
    data: {
      head: { left: 'U.S. Artistic Swimming · Team Event', right: 'Drought to podium' },
      before: { tag: 'Olympic medals, prior 20 yrs', value: '0', suffix: ' since 2004' },
      after: { tag: 'Paris 2024', value: '🥈 SILVER', suffix: '' },
      records: [
        { n: '20 yrs', k: 'Medal drought ended', s: 'First since 2004' },
        { n: '0.66', k: 'Points from missing', s: 'Qualification, one year prior' },
        { n: '1996', k: 'Last better finish', s: 'Best result in 28 years' },
        { n: '2nd', k: 'Of all nations', s: 'Behind only China' },
      ],
      foot: 'The U.S. ended a 20-year Olympic medal drought with silver in the team event at Paris 2024 — its best Olympic finish since 1996 — one year after missing qualification by 0.66 points. Figures from Olympic and public records.',
    },
  },
  {
    slug: 'volleyball-ucla',
    label: '04 — Volleyball',
    eyebrow: "NCAA Division I · Men's Volleyball",
    h1: '12–12. Then they never lost again.',
    deck: "The Poison Pawn training system and UCLA men's volleyball — from a .500 record to back-to-back national champions.",
    glance: [
      { k: 'Sport / Level', v: "NCAA D-I men's volleyball" },
      { k: 'Engagement', v: 'Program-level mindset training' },
      { k: 'The Arc', v: '.500 season → two national titles' },
    ],
    sections: [
      {
        label: 'The starting point',
        h2: 'Halfway through, a .500 team.',
        body: [
          'Midway through the 2023 season, the program sat at 12–12 — talented, but going nowhere in particular. Few would have picked them to win anything, let alone start a dynasty. What changed wasn\'t the roster. It was how they made decisions when matches got tight.',
        ],
      },
      {
        label: 'The method',
        h2: 'Win the points that decide matches.',
        body: [
          "Volleyball turns on a handful of high-pressure moments per set. Poison Pawn's training builds the capacity to handle exactly those: reading patterns, executing a process under pressure, staying composed after an error, and controlling tempo so the opponent is the one reacting. Decided points stop being a coin flip and start being a skill.",
        ],
      },
      {
        label: 'The bigger picture',
        h2: 'A .500 team became a dynasty.',
        body: [
          "Back-to-back national titles don't come from talent alone — they come from a team that has learned to win the moments that decide championships.",
        ],
      },
    ],
    data: {
      head: { left: 'UCLA Men\'s Volleyball · 2023 & 2024', right: '.500 to back-to-back titles' },
      before: { tag: 'Midway through 2023', value: '12–12' },
      after: { tag: '2023 & 2024', value: 'National Champions ×2' },
      records: [
        { n: '21', k: 'NCAA titles', s: 'Most all-time in the sport' },
        { n: '2×', k: 'Back-to-back', s: 'First repeat since 1995–96' },
        { n: 'No. 1', k: 'Final ranking', s: 'Top seed, 2024' },
      ],
      foot: 'After a 12–12 start in 2023, UCLA won its final 14 matches to claim the national title, then won 15 of its last 16 in 2024 to repeat — the program\'s first back-to-back championships since 1995–96 and its record 20th and 21st titles overall. Figures from NCAA and public records.',
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
