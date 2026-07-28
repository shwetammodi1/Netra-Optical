import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { buildJsonLd } from '../lib/schema'
import { site } from '../lib/site'

const DEFAULT_TITLE = `${site.name} — ${site.tagline}`
const DEFAULT_DESCRIPTION = site.shortDescription

export default jsxRenderer(({ children, title, description, path = '/', noindex }) => {
  const pageTitle = title ? `${title} · ${site.name}` : DEFAULT_TITLE
  const pageDescription = description ?? DEFAULT_DESCRIPTION
  const canonical = `${site.url}${path}`
  const ogImage = `${site.url}/og.png`

  return (
    <html lang="en-IN" class="scroll-smooth">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        {noindex && <meta name="robots" content="noindex, nofollow" />}

        {/* Theme + platform chrome */}
        <meta name="theme-color" content="#05070a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fdfcfa" media="(prefers-color-scheme: light)" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-title" content={site.name} />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content={`${site.address.geo.lat};${site.address.geo.lng}`} />
        <meta name="ICBM" content={`${site.address.geo.lat}, ${site.address.geo.lng}`} />

        {/* Open Graph */}
        <meta property="og:type" content="business.business" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={site.locale} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${site.name} — ${site.tagline}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Icons + manifest */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fonts — preconnected, swapped, and the only third-party request on the page */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
        />

        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />

        {/* Reveal animations must never hide content when JS is unavailable */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}#preloader{display:none!important}`}</style>
        </noscript>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- trusted, generated from local data
          dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
        />
      </head>
      <body class="antialiased">
        <a
          href="#main"
          class="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[999] focus:rounded-full focus:bg-ink-950 focus:px-6 focus:py-3 focus:text-sm focus:text-ivory-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
})
