import { Icon } from '../Icon'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { site, telUrl, whatsappUrl } from '../../lib/site'

const assurances = [
  { icon: 'scan-eye', label: 'Computerised eye testing' },
  { icon: 'shield-check', label: 'Genuine brands & warranty' },
  { icon: 'refresh-cw', label: 'Free lifetime adjustments' },
  { icon: 'clock', label: 'Same-day single vision' },
] as const

export const Hero = () => (
  <section id="top" class="mesh-ink grain relative isolate overflow-hidden">
    {/* Ambient optics — decorative, GPU-cheap, paused for reduced motion */}
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="animate-float-slow absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full border border-gold-400/12" />
      <div class="absolute -right-24 -top-24 h-[30rem] w-[30rem] rounded-full border border-gold-400/8" />
      <div class="animate-spin-slow absolute -left-52 bottom-[-14rem] h-[42rem] w-[42rem] rounded-full border border-dashed border-lens-400/10" />
      <div class="absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
    </div>

    <Container class="relative flex min-h-[100svh] flex-col justify-center pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div class="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        {/* ---------------------------------------------------------- */}
        <div class="max-w-2xl">
          <Reveal>
            <div class="inline-flex items-center gap-2.5 rounded-full border border-gold-400/25 bg-gold-400/8 py-1.5 pl-2 pr-4 backdrop-blur-sm">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-gold-400/20">
                <Icon name="map-pin" size={12} class="text-gold-200" />
              </span>
              <span class="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-gold-100/90">
                South Tukoganj · Indore
              </span>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <h1 class="mt-7 font-display text-[3.1rem] leading-[0.95] tracking-[-0.03em] text-ivory-50 sm:text-7xl lg:text-[5.4rem]">
              See the world
              <br />
              <span class="text-foil animate-shimmer">beautifully.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p class="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-ivory-200/70">
              Precision eye testing, a curated wall of designer frames and premium lenses fitted by
              hand. Netra Optical has been looking after Indore’s eyes from Trade Centre Road — a
              minute from Treasure Island Mall.
            </p>
          </Reveal>

          <Reveal delay={290}>
            <div class="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button href={whatsappUrl()} external variant="gold" size="lg" icon="arrow-up-right">
                Book an Eye Test
              </Button>
              <Button href="#eyewear" variant="outline-light" size="lg" icon="arrow-right">
                Explore the collection
              </Button>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <a
              href={telUrl}
              class="mt-8 inline-flex items-center gap-3 text-sm text-ivory-200/55 transition-colors duration-300 hover:text-gold-200"
            >
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Walk in today · Call
              <span class="link-underline font-medium tabular-nums text-ivory-100">
                {site.contact.phoneDisplay}
              </span>
            </a>
          </Reveal>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Glass spec card — the "showroom" object                     */}
        <Reveal from="zoom" delay={260} class="relative hidden lg:block">
          <div class="relative mx-auto max-w-md">
            <div class="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-gold-400/22 via-transparent to-lens-400/18 blur-3xl" />

            <div class="glass-dark relative overflow-hidden rounded-[2.5rem] p-8 shadow-[0_50px_100px_-40px_rgba(0,0,0,.9)]">
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-[0.625rem] font-medium uppercase tracking-[0.26em] text-gold-300/80">
                    In store now
                  </span>
                  <p class="mt-2 font-display text-3xl leading-tight text-ivory-50">
                    Titanium
                    <br />
                    Featherline
                  </p>
                </div>
                <span class="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-gold-200">
                  9 g
                </span>
              </div>

              {/* Spectacle line drawing */}
              <div class="relative my-9 grid place-items-center">
                <div class="absolute h-40 w-40 rounded-full bg-gold-400/12 blur-2xl" />
                <svg
                  viewBox="0 0 260 96"
                  class="relative w-full max-w-[17rem] text-gold-200"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="lensfill" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="rgba(169,207,221,.28)" />
                      <stop offset="100%" stop-color="rgba(201,165,92,.14)" />
                    </linearGradient>
                  </defs>
                  <rect x="16" y="26" width="94" height="52" rx="24" fill="url(#lensfill)" />
                  <rect x="150" y="26" width="94" height="52" rx="24" fill="url(#lensfill)" />
                  <rect
                    x="16"
                    y="26"
                    width="94"
                    height="52"
                    rx="24"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <rect
                    x="150"
                    y="26"
                    width="94"
                    height="52"
                    rx="24"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <path
                    d="M110 46c8-7 32-7 40 0"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 42 2 30M244 42l14-12"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M30 40c6-8 18-11 26-9"
                    stroke="#ffffff"
                    stroke-opacity=".45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div class="rule-gold" />

              <dl class="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  ['Material', 'β-Titanium'],
                  ['Fit', 'Rimless'],
                  ['Lens', 'High-index'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt class="text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-ivory-200/40">
                      {k}
                    </dt>
                    <dd class="mt-1.5 text-[0.8125rem] font-medium text-ivory-100">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Floating chip */}
            <div class="glass-dark animate-float-slow absolute -bottom-7 -left-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_24px_50px_-20px_rgba(0,0,0,.9)]">
              <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-500 text-ink-950">
                <Icon name="badge-check" size={17} strokeWidth={1.8} />
              </span>
              <div>
                <p class="text-[0.8125rem] font-medium text-ivory-50">Optometrist-led</p>
                <p class="text-[0.6875rem] text-ivory-200/50">Testing before selling</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Assurance strip                                               */}
      <Reveal delay={460} class="mt-16 sm:mt-24">
        <ul class="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/8 pt-8 lg:grid-cols-4">
          {assurances.map((a) => (
            <li key={a.label} class="group flex items-center gap-3">
              <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-gold-300 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:border-gold-400/50 group-hover:bg-gold-400/10">
                <Icon name={a.icon} size={17} />
              </span>
              <span class="text-[0.8125rem] leading-tight text-ivory-200/65">{a.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>

    {/* Scroll cue */}
    <a
      href="#about"
      aria-label="Scroll to About"
      class="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
    >
      <span class="text-[0.5625rem] font-medium uppercase tracking-[0.3em] text-ivory-200/35 transition-colors group-hover:text-gold-200">
        Scroll
      </span>
      <span class="relative h-10 w-px overflow-hidden bg-white/12">
        <span
          class="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-gold-300 to-transparent"
          style="animation:scroll-cue 2.2s cubic-bezier(.4,0,.2,1) infinite"
        />
      </span>
    </a>
  </section>
)
