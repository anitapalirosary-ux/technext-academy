---
project: TechNext Academy — Website
type: Project Brief
version: 1.0
stack-note: Next.js, SSR-optimized (implementation details covered in a separate SSR.md — not addressed here)
---

# Project Brief: TechNext Academy

## What This Is

TechNext Academy is a tech-focused career-readiness and mentorship academy — modeled on the placement-prep/industry-mentorship category (reference: devtodesk.com). It helps students and early-career developers become job-ready through structured cohort-based programs: technical fundamentals, mock interviews, resume/LinkedIn optimization, and direct mentorship from working engineers.

This is not a generic "online course marketplace." It's a small-cohort, mentor-led program that sells trust and outcomes (placements, interview confidence) — not just content.

## Business Goals

- Convert visiting students into applicants for a paid cohort program.
- Build credibility fast — visitors should believe within seconds that real engineers, not just instructors, run this.
- Make the program structure and pricing scannable — students compare tracks before committing.
- Capture low-commitment leads (free community / WhatsApp join) as a funnel into paid programs.
- Support urgency for time-boxed batches (limited seats, live session countdowns, founding-batch pricing).

## Target Audience

- College students (BCA, BSc IT, Diploma, engineering) and recent graduates preparing for their first tech job.
- Also non-technical students seeking a path into tech roles.
- India-based primarily (pricing in ₹, weekend-friendly scheduling, Naukri.com references) — assume an Indian student audience with price sensitivity and familiarity with WhatsApp as a primary community channel.
- Visitors are often anxious about interviews, unsure if they're "ready," and comparing this against free YouTube tutorials, paid bootcamps, and other prep platforms. The brief and the site should visibly justify the price by proving mentor credibility, not by fields on a checklist.

## Brand Voice & Positioning

- Practitioner-led, not academic. Every claim should feel backed by "someone who's actually done the job," not a course catalog.
- Direct, confident, outcome-oriented — not hype-y or salesy. Avoid vague motivational language; prefer concrete numbers (weeks, rounds, Q&A count, mentor experience).
- Reassuring but honest — the brief should never imply guaranteed placement; frame outcomes as "readiness" and "introductions at our discretion," not guarantees.
- Visual identity: TechNext Academy logo uses a cyan-to-blue gradient wordmark on deep navy (see `design.md` for tokens) — the site should read as modern/technical, not playful or "edu-cartoonish."

## Core Site Structure (Pages)

1. **Home** — hero with core value prop + primary CTA, program stats/social proof, "why us" differentiators, condensed program overview, testimonials, final CTA. This is the primary conversion page.
2. **About** — mentor/team credibility, mission, why the practitioner-led approach exists.
3. **Programs / Pricing** — the 2–3 program tracks, what's included in each, phase-by-phase breakdown, comparison at a glance.
4. **Roadmap** — the week-by-week curriculum structure (phases, topics per phase).
5. **Mock Interviews / Process** — how the interview rounds work, what feedback looks like.
6. **Live Sessions** — upcoming/one-off paid sessions, countdown-driven urgency.
7. **Careers / Contact** — internal hiring page + general contact.
8. **Login / Signup** — student portal entry points (treat as auth stubs unless told otherwise — this brief does not define the authenticated dashboard experience).

## Key Content Sections (reference: devtodesk.com structure)

- Hero with urgency banner (batch/seat availability, next live session).
- Trust stats (students enrolled, internships/placements delivered, years of mentor experience, mock interview rounds).
- "Why us" differentiators (real industry experience, interview-focused prep, personalized/small cohorts, structured mock interviews).
- Phased program structure (e.g., Foundations → Interview Prep → Career Launch), each phase listing concrete topics covered.
- Mock interview breakdown by round (technical, technical+domain, HR) with what's assessed in each.
- Domain/industry exposure section — showing real-world business domains mentors have worked in (adapt to whatever domains TechNext's mentors actually specialize in).
- Pricing tiers as comparable cards — clearly mark "best value" / "flagship" / entry-level tracks, each with what's included, price anchoring (strike-through original price), and a distinct CTA.
- Testimonials — specific, story-driven quotes tied to a named program tier, not generic praise.
- Final conversion section — low-friction free community join + high-intent apply CTA, offered side by side.

## Functional Requirements (business-level, not technical)

- Clear, repeated CTAs: a low-commitment action (join free community) and a high-commitment action (apply/enroll) should both be reachable from most sections.
- Pricing must support "early bird / founding batch" style time-limited offers.
- A live countdown or urgency element for scheduled sessions/batches.
- Testimonials attributed to a name + which program they took.
- Content should be structured so non-technical staff can update program details (weeks, pricing, curriculum topics) without a redesign — treat program/pricing data as content, not hardcoded copy.

## Explicit Non-Goals

- This brief does not cover authentication, student dashboards, payment gateway integration logic, or CMS/backend architecture.
- This brief does not cover SSR/rendering strategy — that's defined separately in the SSR-focused document; simply build with the assumption that key marketing pages (Home, Programs, Roadmap) are server-rendered for SEO and fast first paint.
- Not defining exact copy/microcopy here — this is context for tone and structure, not a copy deck.

## Reference

- Visual/color system: see `design.md` (TechNext Academy brand tokens).
- Structural/content reference: devtodesk.com (do not copy their copy verbatim — match structure and intent, write original content for TechNext Academy).
