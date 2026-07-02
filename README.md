# QDN Guide

A standalone documentation / user-guide site. Content is plain Markdown/MDX in
folders — **edit a file, deploy, done**. Built on Astro, sharing the QDN brand.
It's designed as a **template**: point it at an app in `src/config.ts` and the
whole guide reskins to that app's colour + logo.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/  (static)
```

## Structure = folders + numbers

Categories are **folders**; order comes from a **numeric prefix** on folders and
files. The prefix is **stripped from the URL**, so links stay clean.

```
src/content/docs/
  1-getting-started/          → group "Getting started" (order 1)
    10-welcome.mdx            → /docs/getting-started/welcome
    20-install.mdx            → /docs/getting-started/install
  2-using-the-app/            → group "Using the app" (order 2)
    10-how-it-works.mdx       → /docs/using-the-app/how-it-works
  3-help/                     → group "Help" (order 3)
    10-faq.mdx                → /docs/help/faq
```

- **Folder number** (`1-`, `2-`…) orders the sidebar groups.
- **File number** (`10-`, `20-`…) orders pages within a group.
- **Group label** is auto from the folder name (`getting-started` → "Getting started").
- **Page title** comes from the file's `title` frontmatter.

### Ordering rules

- Use **steps of 10** (`10-`, `20-`, `30-`) so you can insert `15-` later without
  renumbering.
- Numbers are compared **as numbers**, not text — so past ten items,
  `100-`, `110-` sort correctly (right after `90-`). Any number of digits is fine.
- Sidebar / "On this page" / prev-next / the home landing all update automatically.

### Frontmatter

```mdx
---
title: Install the app          # required
description: One-line summary    # shown under the title + on the home cards
updated: 2026-07-01              # "Last updated"
draft: false                     # true = excluded from build
# optional overrides (rarely needed):
# section: Custom group label
# order: 25
# sectionOrder: 2
---
```

## Style it for an app — `src/config.ts`

This is the **one file** to change per guide. Pick a preset and everything
(accent colour, logo glyph, wordmark) follows:

```ts
export const site = {
  preset: 'qsortby',   // 'qdn' | 'qsortby' | 'qnotify' | 'qmember'
  guideLabel: 'Guide',
  tagline: '…',
  homeUrl: 'https://qdn.vn',
  // custom overrides if you're not using a preset app:
  // brand: 'My App', accent: '#123456', accentInk: '#0a1a2e',
  // accentSoft: '#dbe7f5', glyph: 'square',
};
```

Presets reuse the exact QDN-family marks + colours:

| preset | colour | glyph |
| --- | --- | --- |
| `qdn` | ember | square |
| `qsortby` | green | ranked stack |
| `qnotify` | blue | signal |
| `qmember` | violet | rosette |

> Swap `public/favicon.svg` to match the chosen app's colour (optional).

## Spin up a guide for another app

1. Copy this whole folder → `qsortby-guide/` (etc.).
2. Change `preset` in `src/config.ts`.
3. Replace the content in `src/content/docs/`.

Same engine, different brand — no code changes.

## Rich content (MDX only)

Use `.mdx` (not `.md`) for components. Import at the top of the file:

```mdx
import Video from '../../../components/Video.astro';
import Callout from '../../../components/Callout.astro';

<Callout type="tip" title="Heads up">Markdown inside.</Callout>

<Video src="https://www.youtube.com/watch?v=..." title="Demo" />
```

`Callout` types: `note` · `tip` · `warning` · `danger`.
(Import path is `../../../components/…` from inside a two-level docs folder.)

## Images & video

- **Images** — drop in `public/assets/`, reference `/assets/name.png`. Fine in the
  repo for doc-sized images; for many/large images use a CDN bucket + paste the URL.
- **Video — never commit to git.** Host it and embed with `<Video>`:
  - YouTube / Vimeo → paste the normal URL (auto-embeds).
  - **Cloudflare Stream / Mux / Bunny Stream** (best for product demos) → paste the embed URL.
  - A direct `.mp4`/`.webm` on your CDN → rendered as a native player.

## Versioning

- **Edit history / rollback** — free via git once pushed to a repo.
- **Multiple doc versions** (v1 / v2) — add a top folder like `0-v2/…`; URLs follow.

## Optional: search

Add [Pagefind](https://pagefind.app) for zero-infra static search:

```bash
npm i -D pagefind
# package.json → "postbuild": "pagefind --site dist"
```

## Deploy

Push to Git → connect Netlify (`netlify.toml` included). Or upload `dist/` to any
static host.
