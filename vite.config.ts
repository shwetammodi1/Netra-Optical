import build from '@hono/vite-build/cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import tailwindcss from '@tailwindcss/vite'
import honox from 'honox/vite'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
  plugins: [
    honox({
      devServer: { adapter },
      client: {
        // NOTE: this replaces honox's default entry rather than extending it,
        // so `/app/client.ts` must be listed explicitly alongside the stylesheet.
        input: ['/app/client.ts', '/app/style.css'],
      },
    }),
    tailwindcss(),
    build(),
  ],
  build: {
    cssMinify: 'lightningcss',
    assetsInlineLimit: 2048,
  },
})
