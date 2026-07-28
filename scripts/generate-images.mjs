/**
 * Generates the static raster assets that HTML meta tags need but a bundler
 * cannot produce: the 1200×630 Open Graph card and the 180×180 Apple touch
 * icon.
 *
 * Run with `npm run assets` after changing branding. Output lands in /public
 * and is committed, so deploys never depend on this script.
 */
import { Resvg } from '@resvg/resvg-js'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
mkdirSync(publicDir, { recursive: true })

const GOLD_STOPS = `
  <stop offset="0%" stop-color="#f5e9cf"/>
  <stop offset="45%" stop-color="#e7d1a1"/>
  <stop offset="100%" stop-color="#c9a55c"/>`

/** Spectacles line-mark, shared by both assets. */
const glasses = (cx, cy, scale, stroke) => `
  <g transform="translate(${cx} ${cy}) scale(${scale}) translate(-130 -48)"
     fill="none" stroke="${stroke}" stroke-width="4.5" stroke-linecap="round">
    <rect x="16" y="26" width="94" height="52" rx="24"/>
    <rect x="150" y="26" width="94" height="52" rx="24"/>
    <path d="M110 46c8-7 32-7 40 0"/>
    <path d="M16 42 2 30M244 42l14-12"/>
  </g>`

/* ---------------------------------------------------------------- */
/*  Open Graph card — 1200 × 630                                     */
/* ---------------------------------------------------------------- */
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">${GOLD_STOPS}</linearGradient>
    <radialGradient id="glowA" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c9a55c" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="#c9a55c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7fb3c8" stop-opacity="0.26"/>
      <stop offset="100%" stop-color="#7fb3c8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#05070a"/>
  <circle cx="150" cy="60" r="440" fill="url(#glowA)"/>
  <circle cx="1120" cy="600" r="400" fill="url(#glowB)"/>

  <g fill="none" stroke="#c9a55c" stroke-opacity="0.16">
    <circle cx="1010" cy="315" r="250"/>
    <circle cx="1010" cy="315" r="190"/>
    <circle cx="1010" cy="315" r="130"/>
  </g>

  ${glasses(1010, 315, 1.5, '#e7d1a1')}

  <rect x="80" y="78" width="4" height="52" fill="url(#gold)"/>

  <text x="104" y="102" font-family="Segoe UI, Arial, sans-serif" font-size="19"
        letter-spacing="5.5" fill="#c9a55c">OPTICIANS · INDORE</text>
  <text x="104" y="128" font-family="Segoe UI, Arial, sans-serif" font-size="17"
        letter-spacing="2" fill="#8b96a2">SOUTH TUKOGANJ · TRADE CENTRE ROAD</text>

  <text x="80" y="300" font-family="Georgia, Times New Roman, serif" font-size="108"
        fill="#fdfcfa">Netra <tspan fill="url(#gold)">Optical</tspan></text>

  <text x="80" y="372" font-family="Georgia, Times New Roman, serif" font-size="52"
        font-style="italic" fill="#e7d1a1">See the world, beautifully.</text>

  <text x="80" y="440" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#8b96a2">
    Computerised eye testing · Designer frames · Premium lenses
  </text>

  <rect x="80" y="500" width="1040" height="1" fill="#c9a55c" fill-opacity="0.25"/>

  <text x="80" y="556" font-family="Segoe UI, Arial, sans-serif" font-size="25"
        font-weight="600" fill="#fdfcfa">+91 98276 50403</text>
  <text x="330" y="556" font-family="Segoe UI, Arial, sans-serif" font-size="23" fill="#5c6875">
    Hotel Crown Palace, UG10 · Indore 452001
  </text>
</svg>`

/* ---------------------------------------------------------------- */
/*  Apple touch icon — 180 × 180                                     */
/* ---------------------------------------------------------------- */
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">${GOLD_STOPS}</linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="#05070a"/>
  ${glasses(90, 96, 0.58, 'url(#gold)')}
</svg>`

const write = (name, svg, width) => {
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng()
  writeFileSync(join(publicDir, name), png)
  console.log(`✓ public/${name}  (${(png.length / 1024).toFixed(1)} kB)`)
}

write('og.png', og, 1200)
write('apple-touch-icon.png', icon, 180)
