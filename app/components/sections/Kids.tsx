import { Icon } from '../Icon'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Frame } from '../ui/Frame'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { kidsFeatures, whatsappUrl } from '../../lib/site'

export const Kids = () => (
  <section id="kids" class="relative overflow-hidden bg-ivory-50 py-24 sm:py-32 lg:py-40">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(127,179,200,.14),transparent_65%)]"
    />

    <Container class="relative">
      <div class="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Kids Eyewear"
            title={
              <>
                Small faces need
                <span class="text-gold-600"> different engineering</span>
              </>
            }
            description="Children do not treat glasses gently, and they should not have to. We fit flexible frames with impact-resistant lenses, sized to the bridge rather than scaled down from an adult shape."
          />

          <ul class="mt-11 grid gap-4 sm:grid-cols-2">
            {kidsFeatures.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 100}>
                <div class="group h-full rounded-3xl border border-ink-950/8 bg-white p-6 shadow-lift transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-lens-400/45 hover:shadow-lift-lg">
                  <span class="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-lens-300/40 to-gold-200/40 text-ink-800 transition-transform duration-700 group-hover:scale-110">
                    <Icon name="check" size={17} strokeWidth={2.2} />
                  </span>
                  <h3 class="mt-4 text-[0.9375rem] font-semibold leading-snug tracking-tight text-ink-950">
                    {f.title}
                  </h3>
                  <p class="mt-2 text-[0.8125rem] leading-relaxed text-ink-500">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={430}>
            <div class="mt-10">
              <Button
                href={whatsappUrl('Hi, I’d like to book an eye test for my child.')}
                external
                variant="ink"
                icon="arrow-up-right"
              >
                Book a child’s eye test
              </Button>
            </div>
          </Reveal>
        </div>

        <div class="relative">
          <Reveal from="right">
            <Frame
              caption="Kids corner"
              detail="Flexible frames · Polycarbonate"
              seed={3}
              ratio="aspect-[4/5]"
              rounded="rounded-[2.5rem]"
            />
          </Reveal>

          <Reveal from="zoom" delay={240}>
            <div class="glass-light absolute -left-4 bottom-8 max-w-[16rem] rounded-3xl p-5 shadow-lift-lg sm:-left-10">
              <span class="flex items-center gap-2 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gold-600">
                <Icon name="sparkles" size={12} />
                Parent tip
              </span>
              <p class="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-600">
                Squinting at the board, sitting too close to a screen or frequent headaches after
                school are the three signs teachers spot first.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
)
