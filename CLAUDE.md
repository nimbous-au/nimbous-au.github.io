# Nimbous Website — Claude Instructions

## Project overview

Single-page GitHub Pages marketing site for Nimbous, an Australian software engineering studio.
Built with Astro + Tailwind CSS. Content for services lives in markdown files.

## Stack

- **Astro** (static output) — components in `src/components/`, pages in `src/pages/`
- **Tailwind CSS** — layout/spacing utilities; theming via CSS custom properties
- **Content collections** — service descriptions in `src/content/services/*.md`
- **Google Fonts** — Syne (headings, `font-display`) + DM Sans (body, `font-body`)
- Deployed via GitHub Pages from `main` branch

## Linting & formatting

Always run before committing:

```bash
npm run lint       # eslint (astro) + stylelint (css)
npm run check      # astro type check
npm run format     # prettier (astro, ts, md, css)
npm run build      # verify the build passes
```

Config files: `eslint.config.js`, `.stylelintrc.json`, `.prettierrc`

## Design tokens (CSS custom properties)

Defined in `src/styles/global.css` under `:root`. Dark mode via
`@media (prefers-color-scheme: dark)` plus `[data-theme]` attribute overrides.

Mapped to Tailwind in `tailwind.config.mjs` so you can use `text-accent`, `bg-surface` etc.

Key tokens:
- `--accent` / `--accent-h` — primary green
- `--bg` / `--surface` / `--raised` — background layers
- `--text` / `--muted` — typography
- `--pad` — responsive horizontal padding (clamp)
- `--max` — max content width (1180px)

## Conventions

- Components use scoped `<style>` blocks; global styles only in `src/styles/global.css`
- `.wrap` utility class = max-width + horizontal padding
- `.reveal` / `.reveal.in` = scroll-reveal animation (IntersectionObserver in `index.astro`)
- Responsive: mobile-first, main breakpoint at 780px
- No external JS libraries at runtime
- Contact email: vishal.patel@nimbous.com.au

## Adding a service

Create a new file in `src/content/services/`:

```md
---
title: Your Service Title
icon: code   # one of: code | cloud | monitor | users
order: 5
---

Your service description here (one paragraph, rendered as markdown).
```

## Branch strategy

- `main` — production (auto-deploys to GitHub Pages)
- `feature/*` — work branches, PR into `main`

## Do not

- Add runtime dependencies (CDN scripts, npm packages loaded at runtime)
- Push directly to `main`
- Hard-code colour values — use CSS variables or Tailwind tokens
