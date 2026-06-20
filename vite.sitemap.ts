import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

function readJsonc(path: string): Record<string, unknown> {
  const raw = readFileSync(path, 'utf-8');
  const stripped = raw.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  return JSON.parse(stripped);
}

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-sitemap',
    closeBundle() {
      const wrangler = readJsonc(resolve(__dirname, 'wrangler.jsonc'));
      const routes = wrangler.routes as Array<{ pattern: string }> | undefined;
      if (!routes?.[0]?.pattern) {
        console.warn('sitemap: no route pattern found in wrangler.jsonc');
        return;
      }
      const siteUrl = `https://${routes[0].pattern.replace('/*', '')}`;

      const routeInfos: Array<{ path: string; changefreq: string; priority: string }> =
        JSON.parse(readFileSync(resolve(__dirname, 'src/routes.json'), 'utf-8'));

      const outDir = resolve(__dirname, 'dist');
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

      const urls = routeInfos
        .map(
          (r) => `  <url>
    <loc>${siteUrl}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
        )
        .join('\n');

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

      writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap, 'utf-8');
      console.log('sitemap.xml generated');
    },
  };
}
