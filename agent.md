# ArenaForge — Project Context

> Trước khi làm việc, đọc `rule.md` và `todo.md` để nắm quy ước và tiến độ.

## What this is
A static website that showcases and distributes ORIGINAL indie 2D 
fighting games, filtered by platform (All / PC / Mobile). Each game 
has a cover, screenshots, a YouTube demo (embedded lazily), controls, 
system requirements, and a Download button that goes through a 
monetized short link. The site is fed by the owner's YouTube and 
TikTok gameplay channels; most visitors are on phones over 4G.

## Hard rules
- Only original games/characters or assets with a clear commercial 
  licence. NO copyrighted characters, NO cracked/modded files, NO 
  adult content. Sample data must use invented names only.
- The Download button must show the note "Opens a short ad page first".
- No game files or raw videos in this repo. Production images must be 
  compressed .webp only (under 1 MB).
- **Mock Data Phase:** Since real games and images are not ready yet, 
  generate 6 fictional 2D fighting games in `src/data/games.json` 
  (mix of PC and Mobile). Use lightweight inline SVG placeholders or 
  `https://placehold.co` URLs (matching our dark theme `#1C1920` and 
  `#FF5A36`) for covers/screenshots, a safe sample YouTube ID, and 
  `https://example.com/shortlink-demo` for download URLs.

## Tech
- Astro (static output) + TypeScript (strict) + Tailwind CSS. No backend 
  in Phase 1. Data lives in `src/data/games.json`, typed with a schema.
- Deploy: Cloudflare Pages (free), `*.pages.dev` address.
- Mobile-first, responsive, fast on 4G. Minimal client-side JS.
- Routes: `/` , `/games/[slug]` , `/how-to-download` , `/legal`

## Design tokens (flat colours only: no gradients, glow, blur, shadows)
background #121014 | card #1C1920 | border #2E2A34
text #F2EEE9 | text-muted #A39DA8
accent #FF5A36 (Download button, active tab) | accent-2 #FFC247 (badges, stars)
Text on the orange button: #121014. Card radius 12px, button radius 8px.

## Working style
- Small commits, one feature per branch. Explain what you changed.
- Ask before adding any dependency or any paid service.
- Never invent game data that implies a real brand.