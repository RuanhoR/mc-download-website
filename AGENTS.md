# AGENTS — MCDownload

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # typecheck (vue-tsc) + vite build
pnpm preview    # preview production build
```

## Project Structure

```
src/
  main.ts              — app entry, mounts router
  App.vue              — root layout (NavBar + RouterView + Footer)
  router.ts            — vue-router with lazy-loaded routes
  routes.ts            — route definitions (shared with sitemap)
  routes.json          — route metadata for sitemap generator
  types.ts             — shared TypeScript interfaces
  api.ts               — API_BASE constant
  style.css            — global CSS variables, light/dark theme
  i18n/
    index.ts           — browser-lang auto-detect, t() function
    locales.ts         — en/zh/ja/ko translations
  components/
    NavBar.vue         — sticky nav with hamburger menu on mobile
    Footer.vue         — site footer (tech stack + API credits)
    MCVersionCard.vue  — MCBE version card with arch selector & mirror list
    FCLVersionCard.vue — FCL release card with per-arch download links
  views/
    Home.vue           — landing page with feature cards + disclaimer
    MCBE.vue           — version list with sort controls
    FCL.vue            — release list
    PCL.vue            — PCL external link page
    NetEase.vue        — NetEase external link page
vite.config.ts         — Vite config (cssMinify disabled for lightningcss compat)
vite.sitemap.ts        — auto-generates sitemap.xml from routes.json + wrangler.jsonc
wrangler.jsonc         — Cloudflare Pages config, routes to mcd.wei.qzz.io
```

## Conventions

- Use `<script setup lang="ts">` in all SFCs
- No external resources, no emoji
- All user-facing text goes through `t('key')` with entries in all 4 languages
- Route paths and sitemap metadata are in `routes.json` — both router and sitemap plugin read from it
- Build: `vue-tsc -b` first, then `vite build`. CSS minification disabled (lightningcss bug with Vue scoped styles)
- All changes should be committed in logical granular commits
