import type { Child } from 'hono/jsx'

type Props = {
  children: Child
  class?: string
  /** `wide` for gallery/marquee rows, `narrow` for long-form reading columns. */
  size?: 'default' | 'wide' | 'narrow'
}

const sizes = {
  narrow: 'max-w-3xl',
  default: 'max-w-7xl',
  wide: 'max-w-[92rem]',
} as const

export const Container = ({ children, class: className = '', size = 'default' }: Props) => (
  <div class={`mx-auto w-full ${sizes[size]} px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
)
