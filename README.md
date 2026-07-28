# Netra Optical

Marketing site for **Netra Optical** — opticians in South Tukoganj, Indore.
Built with **HonoX**, **TypeScript** and **Tailwind CSS v4**, deploying to **Cloudflare Pages**.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

| Script              | What it does                                                  |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Vite dev server with HMR                                      |
| `npm run build`     | Client bundle + SSR worker → `dist/`                          |
| `npm run preview`   | Builds, then serves `dist/` on the real Workers runtime       |
| `npm run deploy`    | Builds and deploys to Cloudflare Pages                        |
| `npm run typecheck` | `tsc --noEmit`                                                |
| `npm run assets`    | Regenerates `public/og.png` and `public/apple-touch-icon.png` |

---

## ⚠ Before you go live

Everything below lives in **`app/lib/site.ts`** unless stated otherwise.

1. **Confirm the opening hours.** Google only gave us the closing time (9:15 pm).
   The daily opening times in `site.hours` / `site.openingHoursSpec` are sensible
   defaults, not confirmed facts. Both must be updated together.
2. **Replace the testimonials.** `testimonials` currently holds six clearly
   labelled `Placeholder — Customer A…F` entries. Swap in real, consented quotes
   or live Google reviews. Do not publish the placeholders.
3. **Set the real domain.** `site.url` is `https://netraoptical.pages.dev`. Change
   it, then update the `Sitemap:` line in `public/robots.txt` to match — canonical
   URLs, Open Graph tags and JSON-LD all derive from `site.url`.
4. **Confirm the email address.** `site.contact.email` is a guess; correct it or
   remove it.
5. **Check the brand list.** `brands` lists names commonly stocked by opticians.
   Trim it to what Netra Optical actually carries — listing a brand you don't
   stock is a trading-standards risk.
6. **Verify the map pin.** `site.address.geo` is approximate for South Tukoganj.
   Copy the exact coordinates from the Google Business Profile.
7. **Add store photography.** See below.

---

## Adding real photos

Every image slot degrades to generated optical artwork rather than a broken
image, so the site looks finished from day one. To use real photographs:

1. Drop optimised images into `public/images/` (WebP or AVIF, ~1600px wide).
2. Add a `src` to the matching entry in the `gallery` array:

```ts
{ caption: 'The frame wall', detail: 'Designer & house collections', src: '/images/frame-wall.webp', span: 'wide' },
```

The `<Frame>` component switches to a real `<img>` automatically — lazy-loaded,
`decoding="async"`, with the same hover and scrim treatment. The "Artwork" badge
and the caveat line under the gallery disappear on their own once every tile has
a `src`; remove that line manually in `app/components/sections/Gallery.tsx` if
you only fill some.

---

## Wiring up the enquiry form

`app/routes/api/enquiry.ts` validates submissions server-side and currently
**logs them to the Worker log stream** (`wrangler pages deployment tail`). That
means nothing is lost, but nobody is notified. Pick a delivery method and add it
where the `console.log` is:

- **Email** — Cloudflare Email Routing, Resend, or MailChannels
- **Spreadsheet / CRM** — POST to a Zapier, Make or Google Apps Script webhook
- **Database** — a Cloudflare D1 table or KV namespace

Add any API keys as Pages secrets (`wrangler pages secret put RESEND_API_KEY`) —
never in `site.ts`.

Most customers will use the WhatsApp button regardless, which needs no backend.

---

## Deploying to Cloudflare Pages

```bash
npx wrangler login
npm run deploy
```

Or connect the Git repo in the Cloudflare dashboard:

- **Build command:** `npm run build`
- **Output directory:** `dist`

`wrangler.jsonc` sets `compatibility_flags: ["nodejs_compat"]`, which is
**required** — `hono/jsx` uses `AsyncLocalStorage` for its render context, and
the Worker fails to boot without it. Pages reads that file on deploy, so no
dashboard configuration is needed.

---

## Architecture

```
app/
├── client.ts              # hydration + IntersectionObserver (reveal, section spy, preloader)
├── server.ts              # HonoX app entry
├── style.css              # design tokens (@theme), base layer, component utilities
├── global.d.ts            # typed props for c.render()
├── lib/
│   ├── site.ts            # ← single source of truth for all business content
│   └── schema.ts          # schema.org JSON-LD (@graph)
├── components/
│   ├── Icon.tsx           # inline icon set, Lucide-style, zero JS
│   ├── Preloader.tsx      # server-rendered loading curtain
│   ├── WhatsAppButton.tsx # floating CTA, CSS-only
│   ├── ui/                # Container, Section heading, Button, Reveal, Frame
│   └── sections/          # one file per page section
├── islands/               # the only client-side JavaScript
│   ├── Navbar.tsx         ScrollToTop.tsx   Lightbox.tsx
│   └── FaqAccordion.tsx   ContactForm.tsx
└── routes/
    ├── _renderer.tsx      # <head>, meta, Open Graph, JSON-LD
    ├── index.tsx          _404.tsx          sitemap.xml.ts
    └── api/enquiry.ts
```

### Design system

Tokens live in the `@theme` block of `app/style.css` — change a colour there and
it propagates everywhere. The palette is deep ink + champagne gold + warm ivory,
with a cool "lens" tint reserved for glass and optical highlights. Type is
Instrument Serif for display and Inter for text.

Reusable utilities: `.glass-dark` / `.glass-light`, `.text-foil`, `.rule-gold`,
`.mesh-ink` / `.mesh-ivory`, `.grain`, `.card-lift`, `.link-underline`,
`.marquee-mask`.

### Performance notes

- **~11 kB gzipped of JavaScript** on first load; island chunks load on demand.
- Scroll animations use **one** shared `IntersectionObserver` and CSS
  transitions — no motion library.
- Icons, the marquee, the testimonial rail, the WhatsApp button and the gallery
  are all server-rendered and ship no JavaScript.
- The map `<iframe>` is lazy-loaded so it never blocks first paint.
- Google Fonts is the only third-party request, preconnected and `display=swap`.
- `public/_headers` sets immutable caching for hashed assets plus security
  headers.

### Accessibility

Skip link, semantic landmarks, one `<h1>`, labelled form fields with
`aria-invalid` / `aria-describedby`, `aria-expanded` on disclosures, keyboard
support in the lightbox (arrows + Escape), visible focus rings, and a global
`prefers-reduced-motion` override.

The preloader has three independent dismissal paths (the `load` event, a 2.5s JS
timeout, and a pure-CSS 3s fallback) plus a `<noscript>` rule, so it can never
trap a visitor behind a blank screen.
