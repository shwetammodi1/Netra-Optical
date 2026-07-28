import { Icon } from '../Icon'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Frame } from '../ui/Frame'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { site } from '../../lib/site'

const pillars = [
  {
    icon: 'scan-eye',
    title: 'Measured, then advised',
    body: 'Every recommendation starts from a refraction result, not a price list.',
  },
  {
    icon: 'gem',
    title: 'An edited frame wall',
    body: 'Fewer frames, chosen properly — so the decision stays enjoyable.',
  },
  {
    icon: 'wrench',
    title: 'Fitted by hand',
    body: 'Bridge, temple and pantoscopic tilt adjusted until it sits right.',
  },
] as const

export const About = () => (
  <section id="about" class="mesh-ivory relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <Container>
      <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        {/* Visual */}
        <div class="relative order-2 lg:order-1">
          <Reveal from="left">
            <Frame
              caption="The frame wall"
              detail="Curated collection"
              seed={2}
              ratio="aspect-[4/5]"
              rounded="rounded-[2.5rem]"
              class="lg:mr-14"
            />
          </Reveal>

          <Reveal from="zoom" delay={220}>
            <div class="glass-light absolute -bottom-8 right-0 w-[15rem] rounded-3xl p-5 shadow-lift-lg sm:w-[17rem] lg:-right-2">
              <span class="text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-600">
                Find us at
              </span>
              <p class="mt-2.5 font-display text-xl leading-snug tracking-tight text-ink-950">
                Hotel Crown Palace, UG10
              </p>
              <p class="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-500">
                Trade Centre Road, South Tukoganj
                <br />
                {site.address.landmark}
              </p>
              <a
                href={site.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink-900"
              >
                <span class="link-underline">Get directions</span>
                <Icon name="arrow-up-right" size={14} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div class="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="About Netra Optical"
            title={
              <>
                An optical showroom that
                <span class="italic text-gold-600"> starts with your eyes</span>
              </>
            }
            description="We are a neighbourhood optical store in the middle of Indore, built on a simple order of operations: test properly, explain honestly, then fit beautifully."
          />

          <Reveal delay={230}>
            <p class="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ink-500">
              That means a full computerised refraction before any frame comes off the wall, lens
              options explained in plain language, and a fitting bench you can walk back to any time
              your glasses feel a degree off. The frames are genuine, the lenses are branded, and
              the paperwork comes with you.
            </p>
          </Reveal>

          <ul class="mt-10 flex flex-col gap-5">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={300 + i * 90}>
                <div class="group flex gap-4">
                  <span class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-ink-950/8 bg-white text-gold-600 shadow-lift transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-0.5 group-hover:border-gold-400/50 group-hover:text-gold-500">
                    <Icon name={p.icon} size={19} />
                  </span>
                  <div>
                    <h3 class="text-[0.9375rem] font-semibold tracking-tight text-ink-950">
                      {p.title}
                    </h3>
                    <p class="mt-1 text-[0.875rem] leading-relaxed text-ink-500">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={600}>
            <div class="mt-11">
              <Button href="#services" variant="ink" icon="arrow-right">
                What we do
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
)
