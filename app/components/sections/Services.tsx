import { Icon, type IconName } from '../Icon'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { services } from '../../lib/site'

export const Services = () => (
  <section id="services" class="mesh-ink grain relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
    />

    <Container>
      <SectionHeading
        tone="light"
        eyebrow="Our Services"
        title={
          <>
            Everything your eyes need,
            <span class="italic text-foil"> under one roof</span>
          </>
        }
        description="From the first vision check to the last adjustment years later — handled in store, by people you can walk back to."
      />

      <ul class="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {services.map((service, i) => (
          <Reveal as="li" key={service.title} delay={(i % 3) * 110} class="h-full">
            <article class="card-lift group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-7 backdrop-blur-sm hover:border-gold-400/35 hover:bg-white/[0.055] hover:shadow-glow sm:p-8">
              {/* Corner glow on hover */}
              <span
                aria-hidden="true"
                class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/0 blur-3xl transition-all duration-700 group-hover:bg-gold-400/25"
              />

              <span class="relative grid h-13 w-13 place-items-center rounded-2xl border border-gold-400/25 bg-gradient-to-br from-gold-400/18 to-transparent text-gold-200 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110 group-hover:rotate-[-6deg]">
                <Icon name={service.icon as IconName} size={22} />
              </span>

              <h3 class="relative mt-6 font-display text-[1.5rem] leading-tight tracking-tight text-ivory-50">
                {service.title}
              </h3>

              <p class="relative mt-3 text-[0.875rem] leading-relaxed text-ivory-200/60">
                {service.description}
              </p>

              <ul class="relative mt-6 flex flex-wrap gap-1.5 pt-5">
                <span
                  aria-hidden="true"
                  class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/12 to-transparent"
                />
                {service.points.map((point) => (
                  <li
                    key={point}
                    class="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[0.6875rem] font-medium text-ivory-200/55 transition-colors duration-500 group-hover:border-gold-400/20 group-hover:text-gold-100/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <span
                aria-hidden="true"
                class="relative mt-auto flex items-center gap-1.5 pt-7 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-gold-300/0 transition-all duration-500 group-hover:text-gold-300/80"
              >
                In store
                <Icon name="arrow-right" size={13} />
              </span>
            </article>
          </Reveal>
        ))}
      </ul>
    </Container>
  </section>
)
