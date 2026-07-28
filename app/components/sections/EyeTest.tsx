import { Icon } from '../Icon'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { eyeTestSigns, eyeTestSteps, whatsappUrl } from '../../lib/site'

export const EyeTest = () => (
  <section id="eye-test" class="mesh-ink grain relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <Container>
      <SectionHeading
        tone="light"
        eyebrow="Computer Eye Testing"
        title={
          <>
            Fifteen minutes that change
            <span class="italic text-foil"> how you see everything</span>
          </>
        }
        description="A calibrated auto-refractor gives us an objective starting point. An optometrist then refines it lens by lens, so the number on your prescription is the one your eyes actually agree with."
      />

      {/* Process */}
      <ol class="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {eyeTestSteps.map((step, i) => (
          <Reveal as="li" key={step.step} delay={i * 110} class="h-full">
            <div class="group relative flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-7 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:border-gold-400/35 hover:bg-white/[0.06]">
              {/* Connector */}
              {i < eyeTestSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  class="absolute -right-2 top-12 hidden h-px w-4 bg-gradient-to-r from-gold-400/40 to-transparent lg:block"
                />
              )}

              <span class="font-display text-4xl leading-none text-gold-400/35 transition-colors duration-700 group-hover:text-gold-300/70">
                {step.step}
              </span>
              <h3 class="mt-5 text-[1.0625rem] font-semibold tracking-tight text-ivory-50">
                {step.title}
              </h3>
              <p class="mt-2.5 text-[0.875rem] leading-relaxed text-ivory-200/55">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* Signs + CTA */}
      <div class="mt-14 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <Reveal from="left">
          <div class="h-full rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 sm:p-10">
            <span class="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/8 px-3.5 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gold-200">
              <Icon name="scan-eye" size={13} />
              Time for a test?
            </span>
            <h3 class="mt-5 font-display text-[1.9rem] leading-tight tracking-tight text-ivory-50 sm:text-[2.25rem]">
              Six signs your eyes are asking for attention
            </h3>
            <ul class="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {eyeTestSigns.map((sign) => (
                <li key={sign} class="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ivory-200/65">
                  <Icon name="check" size={15} class="mt-0.5 shrink-0 text-gold-300" strokeWidth={2.2} />
                  {sign}
                </li>
              ))}
            </ul>
            <p class="mt-7 border-t border-white/8 pt-6 text-[0.8125rem] leading-relaxed text-ivory-200/45">
              An eye test also screens for changes you cannot feel yet. Adults should be checked
              yearly; children more often while their vision is still developing.
            </p>
          </div>
        </Reveal>

        <Reveal from="right" delay={140}>
          <div class="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 p-8 text-ink-950 sm:p-10">
            {/* Snellen-style motif */}
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.07]">
              <div class="flex h-full flex-col justify-center gap-1 px-6 text-center font-display leading-none">
                <span class="text-[5rem]">E</span>
                <span class="text-[3rem]">F P</span>
                <span class="text-[2rem]">T O Z</span>
                <span class="text-[1.35rem]">L P E D</span>
                <span class="text-[0.9rem]">P E C F D</span>
              </div>
            </div>

            <div class="relative">
              <span class="text-[0.625rem] font-medium uppercase tracking-[0.26em] text-ink-950/55">
                Walk in or reserve
              </span>
              <h3 class="mt-4 font-display text-[2.1rem] leading-[1.05] tracking-tight sm:text-[2.6rem]">
                Book your eye test today
              </h3>
              <p class="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-ink-950/70">
                Message us on WhatsApp and we will hold a slot — evenings and weekends fill up
                fastest.
              </p>
            </div>

            <div class="relative mt-9 flex flex-wrap gap-3">
              <Button
                href={whatsappUrl('Hi, I’d like to book an eye test at Netra Optical.')}
                external
                variant="ink"
                icon="arrow-up-right"
              >
                Reserve a slot
              </Button>
              <a
                href="#contact"
                class="inline-flex h-12 items-center gap-2 rounded-full border border-ink-950/25 px-6 text-sm font-medium text-ink-950 transition-all duration-500 hover:-translate-y-0.5 hover:border-ink-950/60"
              >
                Store hours
                <Icon name="clock" size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
)
