import { useEffect, useState } from 'hono/jsx'
import { Icon, WhatsAppIcon } from '../components/Icon'
import { navLinks, site, telUrl, whatsappUrl } from '../lib/site'

/**
 * Sticky navbar. Starts transparent over the hero, then condenses into a
 * glass bar once the user scrolls. Highlights the section in view via the
 * `netra:section` event dispatched from `client.ts`.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onSection = (e: Event) => setActive((e as CustomEvent<{ id: string }>).detail.id)
    window.addEventListener('netra:section', onSection)
    return () => window.removeEventListener('netra:section', onSection)
  }, [])

  // Lock body scroll and close on Escape while the mobile sheet is open
  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <>
      <header
        class={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
          scrolled ? 'py-2.5' : 'py-4 sm:py-6'
        }`}
      >
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          <nav
            aria-label="Primary"
            class={`flex items-center justify-between rounded-full transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
              scrolled
                ? 'glass-dark px-4 py-2.5 shadow-[0_18px_50px_-24px_rgba(5,7,10,.9)] sm:px-5'
                : 'border border-transparent px-1 py-2 sm:px-2'
            }`}
          >
            {/* Wordmark */}
            <a
              href="#top"
              class="group flex shrink-0 items-center gap-2.5 pl-1"
              aria-label={`${site.name} — home`}
            >
              <span class="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold-200 to-gold-500 text-ink-950 shadow-[0_6px_18px_-6px_rgba(201,165,92,.8)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-[14deg]">
                <Icon name="glasses" size={18} strokeWidth={1.8} />
              </span>
              <span class="flex flex-col leading-none">
                <span class="font-display text-[1.3rem] tracking-tight text-ivory-50">
                  Netra
                  <span class="text-foil"> Optical</span>
                </span>
                <span class="mt-0.5 text-[0.5625rem] font-medium uppercase tracking-[0.3em] text-ivory-200/45">
                  Indore
                </span>
              </span>
            </a>

            {/* Desktop links */}
            <ul class="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      class={`relative rounded-full px-3.5 py-2 text-[0.8125rem] font-medium tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-gold-200' : 'text-ivory-100/70 hover:text-ivory-50'
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        class={`absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-gold-300 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Desktop actions */}
            <div class="hidden shrink-0 items-center gap-2 lg:flex">
              <a
                href={telUrl}
                class="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-[0.8125rem] font-medium text-ivory-100 transition-all duration-500 hover:border-gold-300/60 hover:bg-white/5"
              >
                <Icon name="phone" size={15} />
                <span class="tabular-nums">{site.contact.phoneDisplay}</span>
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 px-5 text-[0.8125rem] font-semibold text-ink-950 shadow-[0_8px_24px_-10px_rgba(201,165,92,.9)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_rgba(201,165,92,1)]"
              >
                Book Eye Test
                <Icon
                  name="arrow-up-right"
                  size={15}
                  class="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-ivory-50 transition-colors duration-300 hover:bg-white/8 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" size={19} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        class={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
      >
        <div
          onClick={() => setOpen(false)}
          class={`absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          class={`mesh-ink grain absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto border-l border-white/10 px-6 pb-8 pt-5 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div class="flex items-center justify-between">
            <span class="font-display text-2xl text-ivory-50">
              Netra<span class="text-foil"> Optical</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              class="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-ivory-50 transition-colors hover:bg-white/8"
              aria-label="Close menu"
            >
              <Icon name="x" size={19} />
            </button>
          </div>

          <ul class="mt-9 flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href} class="border-b border-white/8">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={`transition-delay:${open ? 90 + i * 45 : 0}ms`}
                  class={`flex items-baseline justify-between py-4 font-display text-[1.7rem] text-ivory-100 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:text-gold-200 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                  }`}
                >
                  {link.label}
                  <span class="text-[0.625rem] font-sans font-medium tracking-[0.2em] text-ivory-200/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div class="mt-9 flex flex-col gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 py-4 text-sm font-semibold text-ink-950"
            >
              <WhatsAppIcon size={17} />
              Book on WhatsApp
            </a>
            <a
              href={telUrl}
              class="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/18 py-4 text-sm font-medium text-ivory-100"
            >
              <Icon name="phone" size={16} />
              {site.contact.phoneDisplay}
            </a>
          </div>

          <p class="mt-auto pt-9 text-[0.8125rem] leading-relaxed text-ivory-200/45">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city} {site.address.postalCode}
          </p>
        </div>
      </div>
    </>
  )
}
