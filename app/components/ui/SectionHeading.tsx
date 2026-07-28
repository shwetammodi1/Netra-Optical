import type { Child } from 'hono/jsx'
import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: Child
  description?: Child
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  class?: string
}

/** Eyebrow + display headline + optional lede. The typographic anchor of every section. */
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  class: className = '',
}: Props) => {
  const isCenter = align === 'center'
  const onLight = tone === 'dark' // dark text on a light surface

  return (
    <div class={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      <Reveal>
        <div class={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <span
            aria-hidden="true"
            class={`h-px w-8 ${onLight ? 'bg-gold-500/50' : 'bg-gold-300/50'}`}
          />
          <span
            class={`text-[0.6875rem] font-medium uppercase tracking-[0.28em] ${
              onLight ? 'text-gold-600' : 'text-gold-300'
            }`}
          >
            {eyebrow}
          </span>
          {isCenter && (
            <span
              aria-hidden="true"
              class={`h-px w-8 ${onLight ? 'bg-gold-500/50' : 'bg-gold-300/50'}`}
            />
          )}
        </div>
      </Reveal>

      <Reveal delay={90}>
        <h2
          class={`mt-5 font-display text-[2.15rem] leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem] ${
            onLight ? 'text-ink-950' : 'text-ivory-50'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={170}>
          <p
            class={`mt-5 text-[0.9375rem] leading-relaxed sm:text-base ${
              isCenter ? 'mx-auto max-w-2xl' : ''
            } ${onLight ? 'text-ink-500' : 'text-ivory-200/70'}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
