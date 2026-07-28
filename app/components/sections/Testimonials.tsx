import { Icon } from '../Icon'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { site, testimonials } from '../../lib/site'

/**
 * Horizontal scroll-snap rail on mobile, three-column grid from `lg`.
 * Pure CSS — no carousel library, no JavaScript, no layout shift.
 */
export const Testimonials = () => (
  <section id="testimonials" class="mesh-ink grain relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <Container>
      <SectionHeading
        tone="light"
        eyebrow="Customer Stories"
        title={
          <>
            What people say
            <span class="italic text-foil"> after they walk out</span>
          </>
        }
      />
    </Container>

    <div class="mt-16 sm:mt-20">
      <ul class="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:px-8 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:overflow-visible lg:px-12 lg:pb-0">
        {testimonials.map((t, i) => (
          <Reveal
            as="li"
            key={t.name}
            delay={(i % 3) * 110}
            class="w-[85vw] max-w-sm shrink-0 snap-center sm:w-[24rem] lg:w-auto lg:max-w-none"
          >
            <figure class="card-lift group relative flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-white/[0.035] p-7 backdrop-blur-sm hover:border-gold-400/30 hover:bg-white/[0.06] sm:p-8">
              <Icon
                name="quote"
                size={26}
                class="text-gold-400/35 transition-colors duration-700 group-hover:text-gold-300/70"
              />

              <blockquote class="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-ivory-100/80">
                “{t.quote}”
              </blockquote>

              <figcaption class="mt-7 flex items-center gap-3.5 border-t border-white/8 pt-6">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-400/25 bg-gradient-to-br from-gold-400/22 to-transparent font-display text-lg text-gold-200">
                  {t.initials}
                </span>
                <span class="min-w-0">
                  <span class="block truncate text-[0.875rem] font-medium text-ivory-50">
                    {t.name}
                  </span>
                  <span class="block text-[0.75rem] text-ivory-200/45">{t.context}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </div>

    <Container>
      <Reveal delay={160}>
        <div class="mt-12 flex flex-col items-center gap-4 text-center">
          <a
            href={site.links.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2.5 rounded-full border border-white/12 px-6 py-3 text-[0.875rem] font-medium text-ivory-100 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-white/5"
          >
            <Icon name="star" size={15} class="text-gold-300" />
            Read our reviews on Google
            <Icon
              name="arrow-up-right"
              size={15}
              class="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <p class="max-w-md text-xs leading-relaxed text-ivory-200/35">
            Been in recently? A review helps other people in Indore find us.
          </p>
        </div>
      </Reveal>
    </Container>
  </section>
)
