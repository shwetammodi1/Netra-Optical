import { Icon } from '../Icon'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Frame } from '../ui/Frame'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { eyewearCollection, whatsappUrl } from '../../lib/site'

export const Eyewear = () => (
  <section id="eyewear" class="relative bg-ivory-50 py-24 sm:py-32 lg:py-40">
    <Container>
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Premium Eyewear"
          title={
            <>
              Frames worth
              <span class="italic text-gold-600"> looking twice at</span>
            </>
          }
          description="Six house edits covering how people actually live — featherweight titanium for all-day wear, Italian acetate for character, and deep-B shapes built for progressives."
        />
        <Reveal delay={220} class="shrink-0">
          <Button href={whatsappUrl('Hi, I’d like to see the eyewear collection.')} external variant="ink" icon="arrow-up-right">
            Ask what’s in stock
          </Button>
        </Reveal>
      </div>

      <ul class="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {eyewearCollection.map((item, i) => (
          <Reveal as="li" key={item.name} delay={(i % 3) * 110} class="h-full">
            <article class="card-lift group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink-950/8 bg-white shadow-lift hover:border-gold-400/40 hover:shadow-lift-lg">
              <div class="relative overflow-hidden">
                <Frame
                  seed={i + 1}
                  ratio="aspect-[16/11]"
                  rounded="rounded-none"
                  class="shadow-none ring-0"
                />
                {item.tag && (
                  <span class="absolute left-4 top-4 rounded-full border border-white/20 bg-ink-950/60 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-gold-200 backdrop-blur-md">
                    {item.tag}
                  </span>
                )}
              </div>

              <div class="flex flex-1 flex-col p-6 sm:p-7">
                <span class="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-600">
                  {item.material}
                </span>
                <h3 class="mt-2.5 font-display text-[1.55rem] leading-tight tracking-tight text-ink-950 transition-colors duration-500 group-hover:text-gold-600">
                  {item.name}
                </h3>
                <p class="mt-3 text-[0.875rem] leading-relaxed text-ink-500">{item.blurb}</p>

                <span
                  aria-hidden="true"
                  class="mt-auto flex items-center gap-1.5 pt-6 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink-300 transition-colors duration-500 group-hover:text-gold-600"
                >
                  Try in store
                  <Icon
                    name="arrow-right"
                    size={13}
                    class="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      {/* Lens technology strip */}
      <Reveal delay={200}>
        <div class="mt-14 overflow-hidden rounded-[2rem] border border-ink-950/8 bg-gradient-to-br from-ink-950 to-ink-800 p-8 sm:mt-16 sm:p-11">
          <div class="grid gap-9 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <span class="text-[0.625rem] font-medium uppercase tracking-[0.26em] text-gold-300">
                Lens technology
              </span>
              <h3 class="mt-3 font-display text-[2rem] leading-tight tracking-tight text-ivory-50 sm:text-4xl">
                The frame is the half you see. The lens is the half you live in.
              </h3>
              <p class="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-ivory-200/60">
                We fit branded lenses only, and we will tell you when a coating is genuinely worth
                it — and when it is not.
              </p>
            </div>

            <ul class="grid gap-3 sm:grid-cols-2">
              {[
                ['High-index thinning', 'Up to 40% slimmer edges on strong powers'],
                ['Anti-reflective', 'Cleaner night vision, better eye contact'],
                ['Blue-filter', 'Reduces glare fatigue on long screen days'],
                ['Photochromic', 'Darkens outdoors, clears indoors'],
              ].map(([title, body]) => (
                <li
                  key={title}
                  class="group rounded-2xl border border-white/8 bg-white/[0.04] p-5 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:border-gold-400/30 hover:bg-white/[0.07]"
                >
                  <span class="flex items-center gap-2 text-[0.875rem] font-medium text-ivory-50">
                    <Icon name="check" size={14} class="text-gold-300" strokeWidth={2.2} />
                    {title}
                  </span>
                  <p class="mt-1.5 text-[0.8125rem] leading-relaxed text-ivory-200/50">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
)
