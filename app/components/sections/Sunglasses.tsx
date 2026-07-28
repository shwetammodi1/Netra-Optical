import { Icon } from '../Icon'
import { Container } from '../ui/Container'
import { Frame } from '../ui/Frame'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { sunglassesCollection } from '../../lib/site'

export const Sunglasses = () => (
  <section
    id="sunglasses"
    class="relative overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 py-24 sm:py-32 lg:py-40"
  >
    {/* Sun flare */}
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(231,209,161,.18),transparent_62%)]"
    />

    <Container class="relative">
      <div class="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            tone="light"
            align="left"
            eyebrow="Sunglasses"
            title={
              <>
                UV protection that
                <span class="italic text-foil"> happens to look incredible</span>
              </>
            }
            description="Indore sun is not gentle. Every pair on our sunglass bar is UV400 rated, with polarised options for driving and prescription lenses cut to your exact power."
          />

          <Reveal delay={260}>
            <dl class="mt-10 grid grid-cols-3 gap-5 border-t border-white/8 pt-8">
              {[
                ['UV400', 'Full UVA + UVB block'],
                ['Polarised', 'Kills road & water glare'],
                ['Rx-ready', 'Your power, tinted'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt class="font-display text-2xl text-gold-200">{k}</dt>
                  <dd class="mt-1 text-[0.75rem] leading-snug text-ivory-200/50">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ul class="grid gap-4 sm:grid-cols-2">
          {sunglassesCollection.map((item, i) => (
            <Reveal
              as="li"
              key={item.name}
              from={i % 2 === 0 ? 'up' : 'right'}
              delay={i * 100}
              class={i % 2 === 1 ? 'sm:mt-10' : ''}
            >
              <article class="card-lift group relative h-full overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03] hover:border-gold-400/35 hover:shadow-glow">
                <Frame
                  seed={i + 5}
                  ratio="aspect-[5/4]"
                  rounded="rounded-none"
                  class="shadow-none ring-0"
                />
                <div class="p-6">
                  <div class="flex items-start justify-between gap-3">
                    <h3 class="font-display text-[1.4rem] leading-tight tracking-tight text-ivory-50">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span class="mt-1 shrink-0 rounded-full border border-gold-400/25 px-2.5 py-0.5 text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-gold-200">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span class="mt-2 block text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gold-300/70">
                    {item.material}
                  </span>
                  <p class="mt-3 text-[0.8125rem] leading-relaxed text-ivory-200/55">{item.blurb}</p>
                </div>

                <span
                  aria-hidden="true"
                  class="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-ink-950/50 text-gold-200 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100"
                >
                  <Icon name="sun" size={15} />
                </span>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Container>
  </section>
)
