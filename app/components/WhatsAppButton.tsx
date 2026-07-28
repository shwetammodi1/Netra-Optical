import { WhatsAppIcon } from './Icon'
import { whatsappUrl } from '../lib/site'

/**
 * Floating WhatsApp action. Server-rendered and CSS-only — the label expands
 * on hover while the icon stays put, so it costs no JavaScript.
 */
export const WhatsAppButton = () => (
  <div class="fixed bottom-6 right-5 z-40 sm:bottom-8 sm:right-8">
    {/* Attention ping — slow single ring, sits behind the button */}
    <span
      aria-hidden="true"
      class="pointer-events-none absolute bottom-0 right-0 h-14 w-14 rounded-full bg-[#25D366]/70 [animation:ping_3.4s_cubic-bezier(0,0,.2,1)_infinite]"
    />

    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      class="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-[1.15rem] shadow-[0_14px_38px_-10px_rgba(37,211,102,.65)] transition-all duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:pr-6 hover:shadow-[0_22px_50px_-12px_rgba(37,211,102,.85)]"
      aria-label="Chat with Netra Optical on WhatsApp"
    >
      <WhatsAppIcon size={24} class="shrink-0 text-white" />
      <span class="max-w-0 whitespace-nowrap text-[0.9375rem] font-semibold text-white opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:max-w-[9rem] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  </div>
)
