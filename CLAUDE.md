# Nimbous Website — Claude Instructions

## Project overview

Single-page GitHub Pages marketing site for Nimbous, an Australian software engineering studio.
All content lives in `index.html` — no build step, no framework, no bundler.

## Stack

- Pure HTML5, CSS (inline in `<style>`), vanilla JS (inline in `<script>`)
- Google Fonts: Syne (headings) + DM Sans (body)
- Deployed via GitHub Pages from `main` branch

## Linting & formatting

Always run before committing:

```bash
npm run lint       # html + format check
npm run format     # auto-fix formatting with Prettier
```

Config files: `.htmlhintrc`, `.stylelintrc.json`, `.prettierrc`

## Design tokens (CSS custom properties)

All colours, spacing, and font stacks are defined as CSS variables in `:root`.
Do not hard-code values — use the variables. Dark mode is handled via
`@media (prefers-color-scheme: dark)` plus `[data-theme]` attribute overrides.

Key tokens:
- `--accent` / `--accent-h` — primary green
- `--bg` / `--surface` / `--raised` — background layers
- `--text` / `--muted` — typography
- `--pad` — responsive horizontal padding (clamp)
- `--max` — max content width (1180px)

## Conventions

- All sections use `<section id="...">` with a consistent `.section-header` pattern
- Responsive: mobile-first, breakpoints at 600px and 900px
- No external JS libraries — keep it dependency-free at runtime
- Contact email: vishal.patel@nimbous.com.au

## Branch strategy

- `main` — production (auto-deploys to GitHub Pages)
- `feature/*` — work branches, PR into `main`

## Do not

- Add a build step or bundler without discussion
- Introduce runtime dependencies (CDN scripts, npm packages loaded at runtime)
- Push directly to `main`
