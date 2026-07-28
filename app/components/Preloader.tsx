/**
 * Premium loading curtain.
 *
 * Deliberately *not* a hydrated island: it is server-rendered markup that
 * `client.ts` fades out on `load` (or after 2.5s, whichever comes first), so
 * it costs zero JavaScript. Two independent safety nets guarantee a JS
 * failure can never trap a visitor behind it — the <noscript> rule in
 * `_renderer.tsx`, and a pure-CSS auto-dismiss at 3s (see `style.css`).
 */
export const Preloader = () => (
  <div
    id="preloader"
    aria-hidden="true"
    class="mesh-ink fixed inset-0 z-[100] grid place-items-center transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
  >
    <div class="flex flex-col items-center gap-7">
      <div class="relative h-24 w-24">
        <span class="absolute inset-0 rounded-full border border-gold-400/25" />
        <span class="absolute inset-2 rounded-full border border-gold-400/20" />
        <span
          class="absolute inset-0 rounded-full border border-transparent border-t-gold-300 border-r-gold-400/50"
          style="animation:spin 1.1s cubic-bezier(.5,0,.5,1) infinite"
        />
        <span
          class="absolute inset-4 rounded-full border border-transparent border-b-lens-400/70"
          style="animation:spin 1.6s cubic-bezier(.5,0,.5,1) infinite reverse"
        />
        <span class="absolute inset-0 grid place-items-center">
          <span class="h-2 w-2 rounded-full bg-gold-300 shadow-[0_0_20px_4px_rgba(201,165,92,.55)]" />
        </span>
      </div>

      <div class="text-center">
        <span class="font-display text-2xl tracking-tight text-ivory-50">
          Netra<span class="text-foil"> Optical</span>
        </span>
        <span class="mt-2 block text-[0.5625rem] font-medium uppercase tracking-[0.4em] text-ivory-200/40">
          Bringing things into focus
        </span>
      </div>
    </div>
  </div>
)
