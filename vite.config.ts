import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sitemapPlugin } from './vite.sitemap'

export default defineConfig({
  plugins: [vue(), sitemapPlugin()],
  build: {
    cssMinify: false,
    minify: false,
  },
})
