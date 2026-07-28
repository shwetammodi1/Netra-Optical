import type { NotFoundHandler } from 'hono'
import { Icon } from '../components/Icon'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { site, telUrl, whatsappUrl } from '../lib/site'

/** Out-of-focus 404 — on theme, and still gives people a way back. */
const handler: NotFoundHandler = (c) =>
  c.render(
    <main class="mesh-ink grain relative grid min-h-[100svh] place-items-center overflow-hidden py-24">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/10"
      />

      <Container class="relative text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/8 px-4 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-200">
          <Icon name="scan-eye" size={13} />
          Error 404
        </span>

        <h1 class="mt-8 font-display text-[4.5rem] leading-none tracking-tight text-ivory-50 blur-[3px] transition-[filter] duration-1000 hover:blur-0 sm:text-[8rem]">
          Out of focus
        </h1>

        <p class="mx-auto mt-6 max-w-md text-[0.9375rem] leading-relaxed text-ivory-200/60">
          This page isn’t where you expected it to be. Hover the heading to sharpen it — then head
          back to somewhere useful.
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="gold" size="lg" icon="arrow-right">
            Back to home
          </Button>
          <Button href={whatsappUrl()} external variant="outline-light" size="lg" icon="arrow-up-right">
            Message us
          </Button>
        </div>

        <a
          href={telUrl}
          class="mt-8 inline-flex items-center gap-2 text-sm text-ivory-200/45 transition-colors hover:text-gold-200"
        >
          <Icon name="phone" size={14} />
          <span class="tabular-nums">{site.contact.phoneDisplay}</span>
        </a>
      </Container>
    </main>,
    { title: 'Page not found', path: '/404', noindex: true },
  )

export default handler
