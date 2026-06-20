# MCDownload

Minecraft download site — MCBE APK mirrors, FCL releases, PCL & NetEase links.

Built with Vue 3 + TypeScript + Cloudflare Workers.

## Pages

| Route | Content |
|-------|---------|
| `/` | Home — intro & entry cards |
| `/mcbe` | Minecraft Bedrock Edition version list with sort & download mirrors |
| `/fcl` | Fold Craft Launcher GitHub releases with per-arch assets |
| `/pcl` | Plain Craft Launcher — link to author's afdian page |
| `/netease` | Minecraft NetEase China Edition — link to mc.163.com |

## Tech Stack

- **Frontend**: Vue 3, TypeScript, Vite 8, vue-router 5
- **Backend**: Cloudflare Workers API (`cf-worker-api`)
- **I18n**: Auto-detect browser language (en/zh/ja/ko), no external deps
- **Dark mode**: CSS variables via `prefers-color-scheme`
- **SEO**: Dynamic page titles, meta tags, auto-generated `sitemap.xml`

## API

Base: `https://a.p.z.ruanhor.dpdns.org`

- `GET /mcdownload/download/mcbe/list` — MCBE version list
- `GET /mcdownload/download/mcbe/download_link?version=X&type=v8a|v7a` — download mirrors
- `GET /mcdownload/fcl/version_list` — FCL releases

## Development

```bash
pnpm install
pnpm dev       # vite dev server
pnpm build     # typecheck + build
pnpm preview   # preview production build
```

## Deployment

Deployed via Cloudflare Pages (Wrangler). The domain is `mcd.wei.qzz.io`.
