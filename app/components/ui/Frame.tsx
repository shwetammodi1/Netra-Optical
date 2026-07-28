import { Icon } from '../Icon'

/**
 * Generated optical artwork — concentric lens rings over a graded field.
 * Deterministic from `seed`, so a grid of Frames looks composed rather than
 * random, and no two neighbours repeat.
 *
 * This is the *designed* empty state: until real store photography is dropped
 * into `site.ts`, the gallery still reads as intentional rather than broken.
 */
const palettes = [
  { a: '#0b1118', b: '#1a2430', ring: '#c9a55c', glow: 'rgba(201,165,92,.55)' },
  { a: '#0a1014', b: '#16262d', ring: '#7fb3c8', glow: 'rgba(127,179,200,.5)' },
  { a: '#120e0a', b: '#2a2018', ring: '#e7d1a1', glow: 'rgba(231,209,161,.45)' },
  { a: '#0d0f16', b: '#1e2130', ring: '#a9cfdd', glow: 'rgba(169,207,221,.42)' },
]

const LensArt = ({ seed = 0 }: { seed?: number }) => {
  const p = palettes[seed % palettes.length]!
  const id = `la${seed}`
  const cx = 50 + ((seed * 37) % 26) - 13
  const cy = 46 + ((seed * 23) % 20) - 10
  const rings = 5 + (seed % 3)
  const rotate = (seed * 31) % 180

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      class="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color={p.a} />
          <stop offset="100%" stop-color={p.b} />
        </linearGradient>
        <radialGradient id={`${id}glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color={p.glow} />
          <stop offset="70%" stop-color="transparent" />
        </radialGradient>
      </defs>

      <rect width="100" height="100" fill={`url(#${id}bg)`} />
      <circle cx={cx} cy={cy} r="42" fill={`url(#${id}glow)`} opacity="0.85" />

      <g transform={`rotate(${rotate} ${cx} ${cy})`} opacity="0.62">
        {Array.from({ length: rings }, (_, i) => (
          <ellipse
            cx={cx}
            cy={cy}
            rx={9 + i * 6.5}
            ry={9 + i * 5.2}
            fill="none"
            stroke={p.ring}
            stroke-width={0.45 - i * 0.03}
            opacity={0.9 - i * 0.11}
          />
        ))}
      </g>

      {/* Lens edge highlight */}
      <ellipse
        cx={cx}
        cy={cy}
        rx="15"
        ry="12.5"
        fill="none"
        stroke={p.ring}
        stroke-width="0.7"
        opacity="0.85"
        transform={`rotate(${rotate} ${cx} ${cy})`}
      />
      <path
        d={`M ${cx - 9} ${cy - 6} Q ${cx - 4} ${cy - 11} ${cx + 3} ${cy - 8}`}
        fill="none"
        stroke="#ffffff"
        stroke-width="0.7"
        stroke-linecap="round"
        opacity="0.35"
      />
    </svg>
  )
}

type Props = {
  /** Real photograph. Omit to render generated artwork instead. */
  src?: string
  alt?: string
  caption?: string
  detail?: string
  seed?: number
  class?: string
  /** `eager` only for above-the-fold imagery. */
  loading?: 'lazy' | 'eager'
  ratio?: string
  rounded?: string
}

export const Frame = ({
  src,
  alt = '',
  caption,
  detail,
  seed = 0,
  class: className = '',
  loading = 'lazy',
  ratio = 'aspect-[4/3]',
  rounded = 'rounded-3xl',
}: Props) => (
  <figure
    class={`group relative isolate overflow-hidden ${rounded} ${ratio} bg-ink-900 shadow-lift-lg ring-1 ring-ink-950/10 ${className}`}
  >
    {src ? (
      <img
        src={src}
        alt={alt || caption || ''}
        loading={loading}
        decoding="async"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
      />
    ) : (
      <div class="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]">
        <LensArt seed={seed} />
      </div>
    )}

    {/* Legibility scrim */}
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-90"
    />

    {!src && (
      <span class="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/50 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-ivory-200/70 backdrop-blur-sm">
        <Icon name="sparkles" size={11} />
        Artwork
      </span>
    )}

    {(caption || detail) && (
      <figcaption class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        {detail && (
          <span class="block text-[0.625rem] font-medium uppercase tracking-[0.22em] text-gold-300/90">
            {detail}
          </span>
        )}
        {caption && (
          <span class="mt-1.5 block font-display text-xl text-ivory-50 sm:text-2xl">{caption}</span>
        )}
      </figcaption>
    )}
  </figure>
)
