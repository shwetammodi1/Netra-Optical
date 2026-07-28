import { useState } from 'hono/jsx'
import { Icon } from '../components/Icon'
import { faqs } from '../lib/site'

/**
 * Single-open accordion. Answers stay in the DOM (collapsed with grid-rows)
 * so the FAQPage structured data and the rendered text always agree — Google
 * penalises answers that only exist after a click.
 */
export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div class="divide-y divide-ink-950/8 border-y border-ink-950/8">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                class="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold-600 sm:py-7"
              >
                <span class="flex items-start gap-4 sm:gap-6">
                  <span
                    aria-hidden="true"
                    class={`mt-1 shrink-0 text-[0.6875rem] font-medium tabular-nums tracking-[0.14em] transition-colors duration-300 ${
                      isOpen ? 'text-gold-500' : 'text-ink-300'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span class="font-display text-[1.35rem] leading-snug tracking-tight text-ink-950 transition-colors duration-300 group-hover:text-gold-600 sm:text-[1.6rem]">
                    {faq.q}
                  </span>
                </span>
                <span
                  class={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                    isOpen
                      ? 'rotate-180 border-gold-400 bg-gold-400 text-ink-950'
                      : 'border-ink-950/12 text-ink-500 group-hover:border-gold-400/60'
                  }`}
                >
                  <Icon name="chevron-down" size={16} />
                </span>
              </button>
            </h3>

            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              class={`grid transition-[grid-template-rows,opacity] duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div class="overflow-hidden">
                <p class="max-w-2xl pb-7 pl-0 text-[0.9375rem] leading-relaxed text-ink-500 sm:pl-[3.25rem]">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
