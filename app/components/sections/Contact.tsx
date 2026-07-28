import ContactForm from '../../islands/ContactForm'
import { Icon } from '../Icon'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { site, telUrl } from '../../lib/site'

const details = [
  {
    icon: 'map-pin' as const,
    label: 'Visit the store',
    lines: [site.address.line1, site.address.line2, `${site.address.city} ${site.address.postalCode}`],
    action: { label: 'Get directions', href: site.links.directions, external: true },
  },
  {
    icon: 'phone' as const,
    label: 'Call us',
    lines: [site.contact.phoneDisplay, 'During store hours'],
    action: { label: 'Tap to call', href: telUrl, external: false },
  },
  {
    icon: 'clock' as const,
    label: 'Opening hours',
    lines: site.hours.map((h) => `${h.days} · ${h.time}`),
  },
]

export const Contact = () => (
  <section id="contact" class="mesh-ivory relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <Container>
      <SectionHeading
        eyebrow="Visit / Contact"
        title={
          <>
            Come and see us in
            <span class="text-gold-600"> South Tukoganj</span>
          </>
        }
        description={`${site.address.landmark} — on the Trade Centre stretch, with parking along the strip.`}
      />

      <div class="mt-16 grid gap-5 sm:mt-20 lg:grid-cols-[1fr_1.05fr]">
        {/* Details + map */}
        <div class="flex flex-col gap-5">
          <Reveal from="left">
            <ul class="grid gap-px overflow-hidden rounded-[2rem] border border-ink-950/8 bg-ink-950/8">
              {details.map((d) => (
                <li key={d.label} class="group bg-white p-6 transition-colors duration-500 hover:bg-ivory-50 sm:p-7">
                  <div class="flex gap-4">
                    <span class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink-950 text-gold-200 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-gold-200 group-hover:to-gold-500 group-hover:text-ink-950">
                      <Icon name={d.icon} size={19} />
                    </span>
                    <div class="min-w-0 flex-1">
                      <span class="text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-600">
                        {d.label}
                      </span>
                      <div class="mt-2 space-y-0.5">
                        {d.lines.map((line) => (
                          <p key={line} class="text-[0.9375rem] leading-relaxed text-ink-800">
                            {line}
                          </p>
                        ))}
                      </div>
                      {d.action && (
                        <a
                          href={d.action.href}
                          {...(d.action.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          class="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink-900"
                        >
                          <span class="link-underline">{d.action.label}</span>
                          <Icon name="arrow-up-right" size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Map — lazy iframe so it never blocks first paint */}
          <Reveal from="left" delay={140} class="flex-1">
            <div class="relative h-full min-h-[20rem] overflow-hidden rounded-[2rem] border border-ink-950/8 bg-ivory-100 shadow-lift">
              <iframe
                src={site.links.mapEmbed}
                title={`Map showing ${site.name}, ${site.address.line2}, ${site.address.city}`}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
                class="absolute inset-0 h-full w-full border-0 grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
              />
              <a
                href={site.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                class="glass-light absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.8125rem] font-medium text-ink-900 shadow-lift transition-transform duration-500 hover:-translate-y-0.5"
              >
                <Icon name="navigation" size={14} class="text-gold-600" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal from="right" delay={100}>
          <div class="rounded-[2rem] border border-ink-950/8 bg-white p-7 shadow-lift-lg sm:p-10">
            <div class="mb-8">
              <span class="text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-600">
                Send an enquiry
              </span>
              <h3 class="mt-3 font-display text-[2rem] leading-tight tracking-tight text-ink-950 sm:text-[2.35rem]">
                Tell us what you need
              </h3>
              <p class="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
                Leave your number and we will call you back during store hours — usually the same
                day.
              </p>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
)
