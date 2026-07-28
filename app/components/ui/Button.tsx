import type { Child } from 'hono/jsx'
import { Icon, type IconName } from '../Icon'

type Variant = 'gold' | 'ink' | 'ghost' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  children: Child
  href?: string
  type?: 'button' | 'submit'
  variant?: Variant
  size?: Size
  icon?: IconName
  /** Renders the icon before the label instead of after. */
  iconLeading?: boolean
  class?: string
  external?: boolean
  disabled?: boolean
  ariaLabel?: string
}

const base =
  'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-medium tracking-tight ' +
  'transition-[transform,box-shadow,background-color,color,border-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ' +
  'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 will-change-transform'

const variants: Record<Variant, string> = {
  gold:
    'bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 text-ink-950 shadow-[0_10px_30px_-10px_rgba(201,165,92,.65)] ' +
    'hover:shadow-[0_18px_46px_-12px_rgba(201,165,92,.8)] hover:-translate-y-0.5',
  ink:
    'bg-ink-950 text-ivory-50 shadow-[0_10px_30px_-12px_rgba(5,7,10,.6)] ' +
    'hover:bg-ink-800 hover:shadow-[0_18px_44px_-14px_rgba(5,7,10,.7)] hover:-translate-y-0.5',
  ghost:
    'border border-ink-900/12 bg-white/60 text-ink-900 backdrop-blur hover:border-ink-900/25 hover:bg-white hover:-translate-y-0.5',
  'outline-light':
    'border border-white/25 text-ivory-50 hover:border-gold-300/70 hover:bg-white/8 hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-[0.8125rem]',
  md: 'h-12 px-7 text-sm',
  lg: 'h-14 px-9 text-[0.9375rem]',
}

export const Button = ({
  children,
  href,
  type = 'button',
  variant = 'gold',
  size = 'md',
  icon,
  iconLeading = false,
  class: className = '',
  external = false,
  disabled = false,
  ariaLabel,
}: Props) => {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const inner = (
    <>
      {/* Sheen sweep on hover */}
      <span
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-full"
      />
      {icon && iconLeading && <Icon name={icon} size={17} class="relative shrink-0" />}
      <span class="relative">{children}</span>
      {icon && !iconLeading && (
        <Icon
          name={icon}
          size={17}
          class="relative shrink-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        class={cls}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }

  return (
    <button type={type} class={cls} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  )
}
