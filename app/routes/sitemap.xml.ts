import { createRoute } from 'honox/factory'
import { site } from '../lib/site'

/** Single-page site, so the sitemap is short — but it still declares freshness. */
export default createRoute((c) => {
  const lastmod = new Date().toISOString().slice(0, 10)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

  return c.body(xml, 200, {
    'content-type': 'application/xml; charset=utf-8',
    'cache-control': 'public, max-age=3600',
  })
})
