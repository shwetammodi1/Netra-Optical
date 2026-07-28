import { Icon } from '../Icon'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { contactLensTypes, whatsappUrl } from '../../lib/site'

const safetyNotes = [
  'Never sleep in lenses that are not approved for overnight wear',
  'Replace the case every three months, and the solution daily',
  'Stop wearing and visit us if an eye turns red, painful or blurry',
]

export const ContactLenses = () => (
  <section id="contact-lenses" class="mesh-ivory relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <Container>
      <SectionHeading
        eyebrow="Contact Lenses"
        title={
          <>
            Fitted properly.
            <span class="text-gold-600"> Worn safely.</span>
          </>
        }
        description="A contact lens is a medical device sitting on your cornea — the curve has to match. We measure before we sell, and we make sure you can insert, remove and clean them confidently before you leave."
      />

      <ul class="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {contactLensTypes.map((lens, i) => (
          <Reveal as="li" key={lens.title} delay={i * 100} class="h-full">
            <article class="card-lift group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink-950/8 bg-white p-7 shadow-lift hover:border-gold-400/40 hover:shadow-lift-lg">
              {/* Lens disc */}
              <span class="relative mb-6 grid h-16 w-16 place-items-center">
                <span class="absolute inset-0 rounded-full bg-gradient-to-br from-lens-300/45 to-gold-200/35 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110" />
                <span class="absolute inset-2 rounded-full border border-white/70" />
                <span class="absolute inset-[1.375rem] rounded-full bg-white/60" />
                <span class="relative text-[0.6875rem] font-semibold tabular-nums text-ink-800">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </span>

              <h3 class="font-display text-[1.4rem] leading-tight tracking-tight text-ink-950">
                {lens.title}
              </h3>
              <p class="mt-3 flex-1 text-[0.875rem] leading-relaxed text-ink-500">
                {lens.description}
              </p>
              <span class="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-ivory-100 px-3 py-1.5 text-[0.6875rem] font-medium text-ink-600 transition-colors duration-500 group-hover:bg-gold-100">
                <Icon name="check" size={12} class="text-gold-600" strokeWidth={2.4} />
                {lens.meta}
              </span>
            </article>
          </Reveal>
        ))}
      </ul>

      {/* Safety + CTA */}
      <Reveal delay={180}>
        <div class="mt-14 grid gap-8 rounded-[2rem] border border-ink-950/8 bg-white p-8 shadow-lift sm:p-11 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-ivory-100 px-3.5 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-ink-600">
              <Icon name="shield-check" size={13} class="text-gold-600" />
              Wear them safely
            </span>
            <h3 class="mt-5 font-display text-[1.9rem] leading-tight tracking-tight text-ink-950 sm:text-[2.25rem]">
              Three rules we go through with every new wearer
            </h3>
            <ul class="mt-6 flex flex-col gap-3">
              {safetyNotes.map((note, i) => (
                <li key={note} class="flex items-start gap-3 text-[0.875rem] leading-relaxed text-ink-500">
                  <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-100 text-[0.625rem] font-semibold text-gold-600">
                    {i + 1}
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div class="rounded-[1.5rem] bg-gradient-to-br from-ink-950 to-ink-800 p-7 sm:p-8">
            <h4 class="font-display text-2xl leading-snug text-ivory-50">
              First time in contacts?
            </h4>
            <p class="mt-3 text-[0.875rem] leading-relaxed text-ivory-200/60">
              Book a fitting session. We take the measurements, trial a lens on your eye, and take
              you through handling and hygiene step by step — usually 25 to 30 minutes.
            </p>
            <div class="mt-7">
              <Button
                href={whatsappUrl('Hi, I’d like to book a contact lens fitting.')}
                external
                variant="gold"
                icon="arrow-up-right"
              >
                Book a fitting
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
)
