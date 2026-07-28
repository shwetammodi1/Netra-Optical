import type { Child } from 'hono/jsx'

type Props = {
  children: Child
  /** Direction the element travels in from. */
  from?: 'up' | 'left' | 'right' | 'zoom'
  /** Stagger, in milliseconds. */
  delay?: number
  class?: string
  as?: 'div' | 'li' | 'article' | 'span'
}

/**
 * Server-rendered scroll reveal. No JS is shipped for the animation itself —
 * a single IntersectionObserver in `client.ts` toggles `.is-revealed`, and the
 * transition lives in CSS. Falls back to visible when JS is off (see the
 * <noscript> block in `_renderer.tsx`) or when reduced motion is preferred.
 */
export const Reveal = ({ children, from = 'up', delay = 0, class: className = '', as = 'div' }: Props) => {
  const Tag = as as 'div'
  return (
    <Tag
      data-reveal={from === 'up' ? '' : from}
      style={delay ? `--reveal-delay:${delay}ms` : undefined}
      class={className}
    >
      {children}
    </Tag>
  )
}
