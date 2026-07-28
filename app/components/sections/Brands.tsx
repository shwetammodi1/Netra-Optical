import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { brands } from '../../lib/site'

/**
 * Infinite marquee. The list is rendered twice inside a track translated by
 * -50%, which loops seamlessly with a single CSS animation — no JS, no
 * measurement, no jank. The duplicate is aria-hidden so screen readers hear
 * each brand once.
 */
export const Brands = () => (
  <section
    id="brands"
    class="relative overflow-hidden border-y border-ink-950/8 bg-white py-16 sm:py-20"
  >
    <Container>
      <Reveal>
        <div class="flex flex-col items-center gap-3 text-center">
          <span class="text-[0.625rem] font-medium uppercase tracking-[0.28em] text-gold-600">
            Featured Brands
          </span>
          <p class="max-w-xl text-[0.9375rem] leading-relaxed text-ink-500">
            Frames, lenses and contact lenses from names you already trust — supplied genuine, with
            warranty documentation.
          </p>
        </div>
      </Reveal>
    </Container>

    <div class="marquee-mask relative mt-11 flex overflow-hidden">
      <div class="marquee-track flex w-max shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? 'true' : undefined}
            class="flex shrink-0 items-center gap-14 sm:gap-20"
          >
            {brands.map((brand) => (
              <span
                key={brand}
                class="whitespace-nowrap font-display text-2xl tracking-tight text-ink-300 transition-colors duration-500 hover:text-ink-900 sm:text-[1.75rem]"
              >
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>

    <Container>
      <p class="mt-10 text-center text-xs text-ink-300">
        Brand availability varies by model and season — message us to check a specific frame.
      </p>
    </Container>
  </section>
)
