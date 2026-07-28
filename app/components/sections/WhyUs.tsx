import { Icon, type IconName } from '../Icon'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { differentiators } from '../../lib/site'

export const WhyUs = () => (
  <section id="why-us" class="mesh-ivory relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <Container>
      <SectionHeading
        eyebrow="Why Netra Optical"
        title={
          <>
            Six reasons people come back,
            <span class="italic text-gold-600"> and send their family</span>
          </>
        }
      />

      <ul class="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-ink-950/8 bg-ink-950/8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 110} class="h-full bg-white">
            <article class="group relative flex h-full flex-col overflow-hidden bg-white p-8 transition-colors duration-700 hover:bg-ivory-50 sm:p-10">
              {/* Sweep */}
              <span
                aria-hidden="true"
                class="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100"
              />

              <span class="grid h-12 w-12 place-items-center rounded-2xl bg-ink-950 text-gold-200 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-200 group-hover:to-gold-500 group-hover:text-ink-950">
                <Icon name={item.icon as IconName} size={20} />
              </span>

              <h3 class="mt-6 font-display text-[1.45rem] leading-tight tracking-tight text-ink-950">
                {item.title}
              </h3>
              <p class="mt-3 text-[0.875rem] leading-relaxed text-ink-500">{item.description}</p>

              <span
                aria-hidden="true"
                class="mt-auto pt-8 text-[0.625rem] font-medium tabular-nums tracking-[0.2em] text-ink-300 transition-colors duration-500 group-hover:text-gold-600"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </article>
          </Reveal>
        ))}
      </ul>
    </Container>
  </section>
)
