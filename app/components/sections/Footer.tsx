import { Icon, WhatsAppIcon } from '../Icon'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { addressOneLine, navLinks, site, telUrl, whatsappUrl } from '../../lib/site'

const serviceLinks = [
  { label: 'Computerised eye testing', href: '#eye-test' },
  { label: 'Prescription eyewear', href: '#eyewear' },
  { label: 'Sunglasses', href: '#sunglasses' },
  { label: 'Contact lenses', href: '#contact-lenses' },
  { label: 'Kids eyewear', href: '#kids' },
  { label: 'Repairs & adjustments', href: '#services' },
]

export const Footer = () => (
  <footer class="mesh-ink grain relative overflow-hidden">
    {/* CTA band */}
    <Container>
      <Reveal>
        <div class="relative -mb-px overflow-hidden rounded-t-[2.5rem] border border-b-0 border-white/8 bg-white/[0.03] px-8 py-14 text-center backdrop-blur-sm sm:px-14 sm:py-20">
          <span
            aria-hidden="true"
            class="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
          />
          <h2 class="mx-auto max-w-3xl font-display text-[2.4rem] leading-[1.05] tracking-tight text-ivory-50 sm:text-6xl">
            Your next pair starts with
            <span class="text-foil italic"> a proper eye test</span>
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-ivory-200/60">
            Walk in during store hours, or message us and we will keep a slot ready.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex h-14 items-center gap-2.5 rounded-full bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 px-8 text-[0.9375rem] font-semibold text-ink-950 shadow-[0_14px_36px_-12px_rgba(201,165,92,.9)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-14px_rgba(201,165,92,1)]"
            >
              <WhatsAppIcon size={18} />
              Book an eye test
            </a>
            <a
              href={site.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-14 items-center gap-2.5 rounded-full border border-white/20 px-8 text-[0.9375rem] font-medium text-ivory-50 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-300/60 hover:bg-white/5"
            >
              <Icon name="navigation" size={16} />
              Get directions
            </a>
          </div>
        </div>
      </Reveal>
    </Container>

    {/* Main footer */}
    <Container>
      <div class="grid gap-12 border-t border-white/8 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-10">
        {/* Brand */}
        <div class="max-w-sm">
          <a href="#top" class="group inline-flex items-center gap-2.5" aria-label={`${site.name} — top of page`}>
            <span class="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-200 to-gold-500 text-ink-950 transition-transform duration-500 group-hover:rotate-[14deg]">
              <Icon name="glasses" size={19} strokeWidth={1.8} />
            </span>
            <span class="font-display text-[1.6rem] tracking-tight text-ivory-50">
              Netra<span class="text-foil"> Optical</span>
            </span>
          </a>

          <p class="mt-5 text-[0.875rem] leading-relaxed text-ivory-200/55">
            {site.shortDescription}
          </p>

          <address class="mt-6 not-italic text-[0.875rem] leading-relaxed text-ivory-200/45">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}, {site.address.state} {site.address.postalCode}
          </address>

          <div class="mt-6 flex flex-wrap gap-2.5">
            <a
              href={telUrl}
              class="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[0.8125rem] font-medium text-ivory-100 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-400/50"
            >
              <Icon name="phone" size={14} />
              <span class="tabular-nums">{site.contact.phoneDisplay}</span>
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[0.8125rem] font-medium text-ivory-100 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-400/50"
              aria-label="Chat with Netra Optical on WhatsApp"
            >
              <WhatsAppIcon size={14} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer — sections">
          <h3 class="text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-300/80">
            Explore
          </h3>
          <ul class="mt-5 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class="link-underline text-[0.875rem] text-ivory-200/55 transition-colors duration-300 hover:text-ivory-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Footer — services">
          <h3 class="text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-300/80">
            Services
          </h3>
          <ul class="mt-5 flex flex-col gap-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  class="link-underline text-[0.875rem] text-ivory-200/55 transition-colors duration-300 hover:text-ivory-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div>
          <h3 class="text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-300/80">
            Store hours
          </h3>
          <dl class="mt-5 flex flex-col gap-3.5">
            {site.hours.map((h) => (
              <div key={h.days}>
                <dt class="text-[0.875rem] text-ivory-100">{h.days}</dt>
                <dd class="mt-0.5 text-[0.875rem] tabular-nums text-ivory-200/50">{h.time}</dd>
              </div>
            ))}
          </dl>
          <a
            href={site.links.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ivory-200/55 transition-colors duration-300 hover:text-gold-200"
          >
            <span class="link-underline">Google Business Profile</span>
            <Icon name="arrow-up-right" size={13} />
          </a>
        </div>
      </div>

      {/* Legal */}
      <div class="flex flex-col items-center justify-between gap-4 border-t border-white/8 py-8 text-center sm:flex-row sm:text-left">
        <p class="text-xs text-ivory-200/35">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
        <p class="max-w-lg text-xs leading-relaxed text-ivory-200/28">
          Information on this site is general in nature and is not a substitute for a professional
          eye examination.
        </p>
      </div>
    </Container>

    <span class="sr-only">{addressOneLine}</span>
  </footer>
)
