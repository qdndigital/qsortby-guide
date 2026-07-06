# Identity: qsortby · GUIDES

**This folder = `qdndigital/qsortby-guide` @ `toanGuide` — the docs/guide hub.**

- **What:** Astro docs site hosting the QSortby user guide (`.mdx` pages + `/assets/`).
- **How content lands here:** authored by the **user-guide** tool (`../tools/user-guide`,
  skill `guide`) and published via its bridge onto the `toanGuide` branch — staged for you
  to review → commit → push → PR. See the tool's `apps.config.mjs` (`qsortby` target).
- **Siblings:** the app it documents → `../app` (read-only), site → `../website`.
  App map → [`../CLAUDE.md`](../CLAUDE.md).

## ⛔ Scope guardrail — CONTENT + ASSETS ONLY

Only edit this repo, and within it **only guide content and its images**. The site's
layout/theme/build is off-limits unless the user **names the specific file** in their request.
See the `guide-content` skill for the full rule.

- ✅ **Editable:** `src/content/docs/**/*.mdx` (the guide pages) · `public/assets/**` (their
  screenshots/images).
- 🔒 **Locked** (do NOT touch without explicit per-file permission): `src/layouts/**`,
  `src/components/**`, `src/styles/**`, `src/pages/**`, `src/lib/**`, `src/config.ts`,
  `src/content/config.ts`, `astro.config.mjs`, `tailwind.config.mjs`, `netlify.toml`,
  `package.json`, `tsconfig.json`.
- Prefer publishing through the tool over hand-writing `.mdx`.
