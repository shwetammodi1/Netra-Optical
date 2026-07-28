import { Container } from '../ui/Container'
import { Frame } from '../ui/Frame'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { gallery } from '../../lib/site'

/**
 * Server-rendered masonry-style grid. Each tile carries `data-lightbox`, which
 * the Lightbox island picks up by delegation — so the gallery itself ships no
 * JavaScript at all.
 */
export const Gallery = () => (
  <section id="gallery" class="relative bg-ivory-50 py-24 sm:py-32 lg:py-40">
    <Container size="wide">
      <SectionHeading
        eyebrow="Gallery"
        title={
          <>
            Inside the store on
            <span class="italic text-gold-600"> Trade Centre Road</span>
          </>
        }
        description="The frame wall, the testing room and the fitting bench — have a look before you visit."
      />

      <ul class="mt-16 grid auto-rows-[13rem] grid-cols-2 gap-3 sm:mt-20 sm:auto-rows-[15rem] sm:gap-4 lg:grid-cols-4">
        {gallery.map((item, i) => (
          <Reveal
            as="li"
            key={item.caption}
            delay={(i % 4) * 90}
            from="zoom"
            class={`${item.span === 'wide' ? 'col-span-2' : ''} ${
              item.span === 'tall' ? 'row-span-2' : ''
            }`}
          >
            <button
              type="button"
              data-lightbox
              data-caption={item.caption}
              data-detail={item.detail}
              class="group block h-full w-full cursor-zoom-in text-left transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1"
              aria-label={`View ${item.caption}`}
            >
              <Frame
                src={item.src}
                caption={item.caption}
                detail={item.detail}
                seed={i}
                ratio="h-full"
                rounded="rounded-3xl"
                class="h-full"
              />
            </button>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={140}>
        <p class="mt-8 text-center text-xs text-ink-300">
          Store photography coming soon — the tiles above show generated optical artwork in the
          meantime.
        </p>
      </Reveal>
    </Container>
  </section>
)
