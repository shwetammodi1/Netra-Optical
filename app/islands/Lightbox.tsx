import { useEffect, useState } from 'hono/jsx'
import { Icon } from '../components/Icon'

type Shot = { html: string; caption: string; detail: string }

/**
 * Delegated lightbox. The gallery itself stays server-rendered and ships no
 * JavaScript; this island listens at the document level for clicks on
 * `[data-lightbox]` and clones the tile's markup into an overlay.
 */
export default function Lightbox() {
  const [shots, setShots] = useState<Shot[]>([])
  const [index, setIndex] = useState<number | null>(null)

  useEffect(() => {
    const tiles = Array.from(document.querySelectorAll<HTMLElement>('[data-lightbox]'))
    setShots(
      tiles.map((t) => ({
        html: t.querySelector('figure')?.innerHTML ?? t.innerHTML,
        caption: t.dataset.caption ?? '',
        detail: t.dataset.detail ?? '',
      })),
    )

    const onClick = (e: MouseEvent) => {
      const tile = (e.target as HTMLElement).closest<HTMLElement>('[data-lightbox]')
      if (!tile) return
      e.preventDefault()
      setIndex(tiles.indexOf(tile))
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    if (index === null) return
    document.documentElement.classList.add('overflow-hidden')

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((i) => (i === null ? i : (i + 1) % shots.length))
      if (e.key === 'ArrowLeft') setIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length))
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [index, shots.length])

  if (index === null || !shots.length) return null
  const shot = shots[index]!

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption || 'Gallery image'}
      class="fixed inset-0 z-[90] flex flex-col bg-ink-950/92 backdrop-blur-xl"
      onClick={(e: Event) => {
        if (e.target === e.currentTarget) setIndex(null)
      }}
    >
      <div class="flex items-center justify-between px-5 py-4 sm:px-8">
        <span class="text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-ivory-200/50 tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}
        </span>
        <button
          type="button"
          onClick={() => setIndex(null)}
          class="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-ivory-50 transition-colors hover:bg-white/10"
          aria-label="Close gallery"
        >
          <Icon name="x" size={19} />
        </button>
      </div>

      <div class="flex flex-1 items-center gap-3 px-3 pb-8 sm:gap-6 sm:px-8">
        <button
          type="button"
          onClick={() => setIndex((index - 1 + shots.length) % shots.length)}
          class="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 text-ivory-50 transition-all duration-500 hover:-translate-x-0.5 hover:bg-white/10"
          aria-label="Previous image"
        >
          <Icon name="arrow-right" size={19} class="rotate-180" />
        </button>

        <figure class="relative mx-auto aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-4xl bg-ink-900 shadow-lift-lg ring-1 ring-white/10">
          <div class="absolute inset-0" dangerouslySetInnerHTML={{ __html: shot.html }} />
        </figure>

        <button
          type="button"
          onClick={() => setIndex((index + 1) % shots.length)}
          class="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 text-ivory-50 transition-all duration-500 hover:translate-x-0.5 hover:bg-white/10"
          aria-label="Next image"
        >
          <Icon name="arrow-right" size={19} />
        </button>
      </div>
    </div>
  )
}
