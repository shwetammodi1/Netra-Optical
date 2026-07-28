import { createClient } from 'honox/client'

createClient()

/* ------------------------------------------------------------------
   Scroll reveal
   One shared IntersectionObserver for every [data-reveal] element on the
   page, rather than a motion library per component. ~700 bytes, no layout
   thrash, and it unobserves as soon as an element has played.
------------------------------------------------------------------ */
const prefersReducedMotion =
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches

const initReveal = () => {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)')
  if (!targets.length) return

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  )

  targets.forEach((el) => observer.observe(el))
}

/* ------------------------------------------------------------------
   Section spy — highlights the current section in the navbar.
   Communicates via a custom event so the Navbar island stays decoupled.
------------------------------------------------------------------ */
const initSectionSpy = () => {
  const sections = document.querySelectorAll<HTMLElement>('section[id]')
  if (!sections.length || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (!visible) return
      window.dispatchEvent(
        new CustomEvent('netra:section', { detail: { id: visible.target.id } }),
      )
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
  )

  sections.forEach((s) => observer.observe(s))
}

/* ------------------------------------------------------------------
   Preloader — dismissed on `load`, with a hard 2.5s ceiling so a slow
   third-party font can never hold the page hostage.
------------------------------------------------------------------ */
const dismissPreloader = () => {
  const el = document.getElementById('preloader')
  if (!el || el.dataset.done) return
  el.dataset.done = '1'
  el.classList.add('opacity-0', 'pointer-events-none')
  document.documentElement.classList.remove('overflow-hidden')
  window.setTimeout(() => el.remove(), 750)
}

const boot = () => {
  initReveal()
  initSectionSpy()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}

if (document.readyState === 'complete') {
  dismissPreloader()
} else {
  window.addEventListener('load', dismissPreloader, { once: true })
}
window.setTimeout(dismissPreloader, 2500)
