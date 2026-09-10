---
brand: TechNext Academy
type: Design System / Color Guideline
version: 1.0
---

# Design System: TechNext Academy

Tech-forward online academy. Cyan-to-blue gradient wordmark on deep navy, hexagon badge motif — reads as futuristic, digital-native, developer-adjacent.

## Usage

Reference this file whenever building or styling any page for TechNext Academy. Stick to the tokens below rather than picking colors ad hoc — consistency across pages matters more than any single "nice" shade.

## Color Palette

### Primary

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#19E7D9` (cyan) | Logo accents, links, active states, icons, headline highlights |
| `--color-primary-dark` | `#10B8AD` | Hover/pressed state for primary elements |

The cyan is the "TechNext" signal color — pulled from the left side of the wordmark gradient and the hexagon outline. Use it sparingly and intentionally (CTAs, key highlights, active nav item) rather than as a background wash — it's most effective against dark surfaces.

### Secondary

| Token | Hex | Usage |
|---|---|---|
| `--color-secondary` | `#5A83E9` (periwinkle blue) | Primary buttons, secondary headings, "ACADEMY" wordmark color, form focus rings |
| `--color-secondary-dark` | `#3F62C9` | Hover/pressed state for secondary elements |

The blue is pulled from the right side of the wordmark gradient and the "ACADEMY" subtext. This is the workhorse brand color — safe to use more broadly than the cyan (buttons, links, borders, badges).

### Gradient (brand signature)

| Token | Value | Usage |
|---|---|---|
| `--gradient-brand` | `linear-gradient(90deg, #19E7D9 0%, #5A83E9 100%)` | Hero headlines, logo lockups, primary CTA buttons, section dividers — the single most "on-brand" visual element, use it for 1–2 high-impact spots per page, not everywhere |

### Neutrals / Background

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0B0428` | Primary page background (deep navy, matches logo canvas) |
| `--color-surface` | `#12132C` | Cards, panels, nav bar, elevated surfaces |
| `--color-border` | `#2A2C4A` | Dividers, card outlines, input borders |
| `--color-text-primary` | `#F5F6FA` | Headings, primary body copy on dark backgrounds |
| `--color-text-secondary` | `#9CA3C7` | Muted text, captions, placeholder copy |

### Status / Utility (supporting, not from logo — use conservatively)

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#34D399` | Confirmations, completed lessons/progress |
| `--color-warning` | `#FBBF24` | Warnings, pending states |
| `--color-error` | `#F87171` | Errors, validation messages |

## How to Apply

- **Backgrounds:** Default to `--color-bg` (deep navy). Never use pure white/black — it breaks the brand's dark, tech aesthetic.
- **Primary CTA buttons:** `--gradient-brand` fill, white text, on hover shift to solid `--color-secondary-dark`.
- **Secondary/ghost buttons:** transparent fill, `--color-secondary` border and text.
- **Links & active nav:** `--color-primary` (cyan), underline or glow on hover.
- **Headings:** `--color-text-primary`; optionally apply `--gradient-brand` as a text-clip effect on hero H1s only (mirrors the logo wordmark) — don't overuse on body headings.
- **Cards/panels:** `--color-surface` background, `--color-border` 1px outline, subtle cyan glow on hover for interactive cards.
- **Body text:** `--color-text-secondary` for anything non-critical (captions, metadata, helper text).

## Don'ts

- Don't put cyan text/elements directly on a light background — the palette is built for dark surfaces.
- Don't use the full gradient on small text (buttons under ~14px, body copy) — it becomes muddy and unreadable at small sizes; use it for large headlines, buttons, and graphic elements only.
- Don't introduce off-brand hues (purple, orange, etc.) for anything beyond the status/utility colors above.
- Don't run secondary blue and primary cyan at equal visual weight in the same component — pick one as dominant per element.

## Typography (suggested pairing)

The logo uses a squared-off, geometric sans for the wordmark. Pair with a clean geometric/grotesk sans for the site:

- **Headings:** Space Grotesk, Sora, or Orbitron (for extra tech feel on hero only)
- **Body:** Inter or IBM Plex Sans
- **Weight:** Bold/Semibold for headings, Regular/Medium for body — keep letter-spacing slightly wide on all-caps labels (mirrors "TECHNEXT" tracking in the logo)
