# DESIGN.md - mizar (friend Lee landing)

register: brand

## Theme

Dark-native. The scene: a prospective client opens the studio site on a laptop, day or night, expecting something bolder than the usual agency page. friend Lee's identity is acid lime on near-black, so dark is the home theme. A light theme exists (toggle), built as a deliberate inverted scheme (warm off-white canvas, near-black type, deepened lime for text accents so lime stays legible on light). Lime fills (smiley, button, marquee, tech section) stay bright in both themes.

## Color (OKLCH intent, hex tokens in globals.scss)

Strategy: committed. One electric lime carries the identity against a tinted near-black canvas.

- `--lime` #c8f500 - the brand accent. Used as fills and, on dark, as text.
- `--accent-strong` - lime for TEXT: bright on dark, deepened (#6f8c00) on light for legibility.
- Canvas dark: `--bg` #000 / `--bg-soft` #0d0d0d / `--bg-card` #141414, `--fg` #fff.
- Canvas light: `--bg` #f3f4ec / cards #fff, `--fg` #0a0a0a.
- Never pure-flat usage as decoration; lime is the signal, not wallpaper.

## Typography

- Display: Unbounded (variable), heavy (800), uppercase headlines, tight tracking. Wide-grotesque energy matching the brand.
- Body: Inter. Body line length capped (~56-65ch on lede/notes).
- Hierarchy by scale + weight, large jumps (hero clamp up to 6.5rem).

## Layout

- Full-bleed, single consistent gutter `--gutter: clamp(1rem, 2vw, 1.5rem)` (matches friendlee.pro). No narrow centered container.
- Sections rhythm via `.section { padding-block: clamp(3.5rem, 9vw, 8rem) }`.
- Brutalist rotated cards in Services / TechStack (no pixel-corner gimmicks - removed).
- Projects: responsive 1/2/3-col grid of real case cards, each a link with a site screenshot (16:10) + name + summary + tags.

## Motion

- Calm, ease-out (`--ease: cubic-bezier(0.22, 1, 0.36, 1)`).
- Infinite hero marquee, scroll-reveal (IntersectionObserver), count-up stats, dashed SVG arrow draw, smiley pop+breathe, card hover lift + image zoom, footer terminal cursor blink.
- All animation guarded by `prefers-reduced-motion`.

## Components / motifs

- Wordmark: `>_ friend lee` (lime prompt).
- Mascot: friend Lee's real happyFace smiley (SVG), recoloured to lime, no glow.
- Footer: terminal flourish `>_ npm run обнять` + author credit (concept-redesign by Selim, selim.services / github).

## Bans (project-specific)

- No floating pixel-doodad decorations (removed - they competed with content).
- No glow on the smiley. No pixel-corner card accents. No em dashes anywhere.
- No Tailwind / utility CSS. Pure SCSS modules only.
