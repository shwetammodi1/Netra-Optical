import FaqAccordion from '../../islands/FaqAccordion'
import { Icon, WhatsAppIcon } from '../Icon'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { site, telUrl, whatsappUrl } from '../../lib/site'

export const Faq = () => (
  <section id="faq" class="relative bg-white py-24 sm:py-32 lg:py-40">
    <Container>
      <div class="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div class="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions,
                <span class="text-gold-600"> answered plainly</span>
              </>
            }
            description="The things people ask most often before their first visit."
          />

          <Reveal delay={240}>
            <div class="mt-10 rounded-3xl border border-ink-950/8 bg-ivory-50 p-7">
              <h3 class="font-display text-xl tracking-tight text-ink-950">
                Still not sure about something?
              </h3>
              <p class="mt-2.5 text-[0.875rem] leading-relaxed text-ink-500">
                Ask us directly — we would rather answer a question now than have you guess.
              </p>
              <div class="mt-6 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2.5 rounded-full bg-ink-950 px-5 py-3 text-[0.875rem] font-medium text-ivory-50 transition-transform duration-500 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon size={16} />
                  Ask on WhatsApp
                </a>
                <a
                  href={telUrl}
                  class="inline-flex items-center gap-2.5 rounded-full border border-ink-950/12 px-5 py-3 text-[0.875rem] font-medium text-ink-800 transition-colors duration-500 hover:border-gold-400/60"
                >
                  <Icon name="phone" size={15} />
                  <span class="tabular-nums">{site.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <FaqAccordion />
        </Reveal>
      </div>
    </Container>
  </section>
)
