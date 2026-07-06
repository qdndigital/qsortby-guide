---
name: guide-content
description: Guardrail + how-to for editing the QSortby guide website (qsortby-guide, Astro). Enforces CONTENT + ASSETS ONLY — edit guide .mdx pages and their images, never the site's layout/theme/config unless the user names the file. Use whenever adding, editing, re-screenshotting, or reorganizing guide pages in apps/qsortby/guides.
---

# /guide-content — edit guides, not the guide website

This repo (`qdndigital/qsortby-guide` @ `toanGuide`) is an Astro docs site. When you work here,
you change **guide content and images only**. The site's chrome (layout, theme, build) stays as
it is unless the user explicitly asks for a named file.

## The rule (content + assets only)

**✅ You MAY create/edit/delete:**
- `src/content/docs/**/*.mdx` — the guide pages. Sections are numbered folders
  (`1-getting-started` … `7-help`); the numeric filename prefix (`10-`, `20-`) orders pages in a
  section. Frontmatter: `title`, `description`, `updated`, optional `draft`.
- `public/assets/**` — the guides' screenshots/images (one folder per guide slug).

**🔒 You MUST NOT touch (unless the user names the exact file in their request):**
- `src/layouts/**`, `src/components/**` (Callout, Sidebar, Toc, Video), `src/styles/**`
- `src/pages/**`, `src/lib/**`, `src/config.ts`, `src/content/config.ts`
- `astro.config.mjs`, `tailwind.config.mjs`, `netlify.toml`, `package.json`, `tsconfig.json`

If a content change *seems* to need a locked file (new component, nav change, style tweak),
**stop and ask** — describe what you'd change and why, and let the user decide. Don't do it
silently as part of a content task.

## Preferred path: publish through the tool

Guides are normally authored by the **user-guide** tool (`../tools/user-guide`, skill `guide`),
which captures the running app and lands `.mdx` + images here via `publish.mjs`. Prefer that over
hand-writing `.mdx`. Hand-edit content only for small copy fixes or when the user asks directly.

## Reviewing your changes

- Preview locally: `npm run dev` → http://localhost:4321.
- Content lives on the `toanGuide` branch. Commit content changes with a clear message; open a PR
  for review rather than force-landing (see the `guide` skill's publish flow and `--pr`).

## Scope reminder
Only this repo. Never edit the app (`../app`), the marketing site (`../website`), or the tool
from here. Cross-repo reads are fine; cross-repo edits are not.
