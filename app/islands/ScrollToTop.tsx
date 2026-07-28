import { useEffect, useState } from 'hono/jsx'
import { Icon } from '../components/Icon'

/** Appears past one viewport, with a ring that tracks reading progress. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setVisible(window.scrollY > window.innerHeight * 0.9)
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const r = 20
  const circumference = 2 * Math.PI * r

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        })
      }
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      class={`group fixed bottom-6 left-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-ink-950/10 bg-ivory-50/85 text-ink-900 shadow-lift backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-gold-400/50 sm:bottom-8 sm:left-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(5,7,10,.08)" stroke-width="1.5" />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="var(--color-gold-400)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-dasharray={circumference}
          stroke-dashoffset={circumference * (1 - progress)}
          style="transition:stroke-dashoffset .18s linear"
        />
      </svg>
      <Icon
        name="arrow-up"
        size={17}
        class="relative transition-transform duration-500 group-hover:-translate-y-0.5"
      />
    </button>
  )
}
