# Poison Pawn — Case Studies & Exhibit Feature — Build Brief

A handoff summary of what's in this package and the decisions behind it.

## What's here
Five standalone HTML pages (self-contained, drop-in) plus a shared image folder. **Note the structure: FOUR case studies + ONE featured/media piece.**

### Case Studies (Site section: "Case Studies")
Depth pieces — one subject, before → after arc, hard numbers.
1. **case-study-01-football-qb.html** — Football QB transformation (Dorian Thompson-Robinson, UCLA). 59% completion → 69.6% (school record); UCLA all-time records.
2. **case-study-02-baseball-bluejays.html** — Toronto Blue Jays, organization-wide. 74 wins → 94 wins, last place → World Series.
3. **case-study-03-artistic-swimming.html** — Team USA Artistic Swimming. 20-year medal drought → Olympic silver; missed qualifying by 0.66.
4. **case-study-04-volleyball-ucla.html** — UCLA men's volleyball. 12–12 → back-to-back national champions.

### Featured Piece (Site section: "Media" / "Featured" — NOT Case Studies)
A breadth-and-credibility piece, not a before/after case study. Place it as the halo/anchor above or alongside the case studies.
5. **featured-quarterback-mind.html** — "The Quarterback Mind," tied to the World Chess Hall of Fame exhibit. Brand-led title, NFL roster + champions tier + installation/panel photos. Frame as a featured exhibit or published article — do not number it among the case studies.

**/wchof-assets/** — All photos, web-optimized and named by subject (use these for the real build instead of the embedded base64 in the featured piece).

## Core decisions (locked)
- **Through-line:** "Last to first." Every study is a transformation arc (worst→first, drought→podium, .500→champions, turnovers→records).
- **Brand over founder:** Pages are Poison-Pawn-forward. Seth Makowsky's name is kept out of page copy (the one exception: the museum's own wall-panel image, which uses the museum's wording).
- **Two proof types / placement:** Case studies 01–04 = depth (one subject, before/after, hard numbers) → file under **Case Studies**. The Quarterback Mind = breadth + institutional credibility (roster + exhibit) → file under **Media/Featured**, NOT as a case study. It's the halo piece that frames the four.
- **Honest attribution:** Team achievements (Blue Jays, swim) are framed as a training partnership during the result, not as causing the championship. Keep this.
- **Design system:** Shared "chess dossier" theme — ink background, brass accents, Fraunces/Spectral/Space Mono. All five share one stylesheet; easy to consolidate into one template.

## Verified facts
All stats checked against public records (UCLA Athletics, MLB, Olympic/Team USA, NCAA). Exhibit: *Game Plan: The Strategy of Chess & Sports*, World Chess Hall of Fame & Galleries, Saint Louis, on view May 7, 2026 – May 2027.

## Open items before publishing
- **Placeholders to fill** (marked in red in each file): engagement scope, attributable-contribution line, and testimonial quotes for studies 01–04.
- **Confirm current NFL teams:** Sean Clifford (drafted by Green Bay; a photo file labels Bengals), Trey Lance, Darnay Holmes, Colson Yankoff.
- **Confirm the live "currently in the NFL" count** on the featured piece (placeholder shown).
- **Photos:** a few roster shots are social-media screenshots; swap for headshots/originals when available.
- **Permissions:** confirm clearance to feature each named athlete in commercial/web context (separate from the museum exhibit). Not legal advice.
- **Museum panel image** names co-founders Seth & Rebecca Makowsky (museum wording) — crop to brand-only if preferred.
- **Assets:** `founder-at-exhibit.jpg` is in the folder but not placed on any page. A projector video (.mov) exists and can be embedded by the web team.

## Not yet built (next steps discussed)
- Index/landing page tying all pieces together under an "As seen at the World Chess Hall of Fame" banner.
- Full profiles for Jalen Hurts / Mookie Betts / Anita Alvarez (currently in the champions tier of the featured piece).
- Optional: a published-article version of "The Quarterback Mind."
