import { useState } from 'hono/jsx'
import { Icon, WhatsAppIcon } from '../components/Icon'
import { whatsappUrl } from '../lib/site'

type Fields = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const SERVICES = [
  'Eye test / vision check',
  'Prescription glasses',
  'Sunglasses',
  'Contact lenses',
  "Child's eye test",
  'Repair or adjustment',
  'Something else',
]

const EMPTY: Fields = { name: '', phone: '', email: '', service: SERVICES[0]!, message: '' }

/** Indian mobile: optional +91/0 prefix, then 6-9 followed by 9 digits. */
const PHONE_RE = /^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const validate = (v: Fields): Errors => {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please tell us your name.'
  if (!PHONE_RE.test(v.phone.replace(/\s+/g, ''))) e.phone = 'Enter a valid 10-digit mobile number.'
  if (v.email.trim() && !EMAIL_RE.test(v.email.trim())) e.email = 'That email address looks incomplete.'
  if (v.message.trim().length < 5) e.message = 'A line or two about what you need helps us prepare.'
  return e
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set = (key: keyof Fields) => (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    const next = { ...values, [key]: value }
    setValues(next)
    if (touched[key]) setErrors(validate(next))
  }

  const blur = (key: keyof Fields) => () => {
    setTouched({ ...touched, [key]: true })
    setErrors(validate(values))
  }

  const onSubmit = async (e: Event) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, phone: true, email: true, service: true, message: true })
    if (Object.keys(found).length) {
      document.querySelector<HTMLElement>('[data-invalid="true"]')?.focus()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setValues(EMPTY)
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (key: keyof Fields) =>
    `peer w-full rounded-2xl border bg-white/70 px-4 py-3.5 text-[0.9375rem] text-ink-950 outline-none transition-all duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)] placeholder:text-ink-300 focus:bg-white focus:ring-4 ${
      errors[key] && touched[key]
        ? 'border-red-400/70 focus:border-red-500 focus:ring-red-500/10'
        : 'border-ink-950/10 hover:border-ink-950/20 focus:border-gold-400 focus:ring-gold-400/12'
    }`

  const labelClass = 'mb-2 block text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink-400'

  if (status === 'sent') {
    return (
      <div class="flex min-h-[26rem] flex-col items-center justify-center rounded-4xl border border-gold-400/25 bg-gradient-to-b from-gold-100/50 to-white p-10 text-center">
        <span class="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-200 to-gold-500 text-ink-950 shadow-[0_14px_36px_-12px_rgba(201,165,92,.9)]">
          <Icon name="check" size={26} strokeWidth={2} />
        </span>
        <h3 class="mt-6 font-display text-3xl tracking-tight text-ink-950">Enquiry received</h3>
        <p class="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-500">
          Thank you — we have your details and will call you back during store hours. For anything
          urgent, WhatsApp is the fastest way to reach us.
        </p>
        <div class="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-12 items-center gap-2.5 rounded-full bg-ink-950 px-6 text-sm font-medium text-ivory-50 transition-transform duration-500 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={16} />
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            class="inline-flex h-12 items-center rounded-full border border-ink-950/12 px-6 text-sm font-medium text-ink-700 transition-colors hover:border-ink-950/30"
          >
            Send another
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} novalidate class="flex flex-col gap-5" aria-describedby="form-note">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label class={labelClass} for="f-name">
            Your name
          </label>
          <input
            id="f-name"
            name="name"
            type="text"
            autocomplete="name"
            placeholder="e.g. Rahul Sharma"
            value={values.name}
            onInput={set('name')}
            onBlur={blur('name')}
            data-invalid={Boolean(errors.name && touched.name)}
            aria-invalid={Boolean(errors.name && touched.name)}
            aria-describedby={errors.name && touched.name ? 'err-name' : undefined}
            class={fieldClass('name')}
          />
          {errors.name && touched.name && (
            <p id="err-name" class="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label class={labelClass} for="f-phone">
            Mobile number
          </label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            inputmode="tel"
            autocomplete="tel"
            placeholder="98xxxxxxxx"
            value={values.phone}
            onInput={set('phone')}
            onBlur={blur('phone')}
            data-invalid={Boolean(errors.phone && touched.phone)}
            aria-invalid={Boolean(errors.phone && touched.phone)}
            aria-describedby={errors.phone && touched.phone ? 'err-phone' : undefined}
            class={fieldClass('phone')}
          />
          {errors.phone && touched.phone && (
            <p id="err-phone" class="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label class={labelClass} for="f-email">
            Email <span class="normal-case tracking-normal text-ink-300">(optional)</span>
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="you@example.com"
            value={values.email}
            onInput={set('email')}
            onBlur={blur('email')}
            data-invalid={Boolean(errors.email && touched.email)}
            aria-invalid={Boolean(errors.email && touched.email)}
            class={fieldClass('email')}
          />
          {errors.email && touched.email && (
            <p class="mt-1.5 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label class={labelClass} for="f-service">
            What do you need?
          </label>
          <div class="relative">
            <select
              id="f-service"
              name="service"
              value={values.service}
              onChange={set('service')}
              class={`${fieldClass('service')} cursor-pointer appearance-none pr-11`}
            >
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              size={16}
              class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400"
            />
          </div>
        </div>
      </div>

      <div>
        <label class={labelClass} for="f-message">
          Message
        </label>
        <textarea
          id="f-message"
          name="message"
          rows={4}
          placeholder="Tell us about your prescription, preferred timing, or the frame you're after…"
          value={values.message}
          onInput={set('message')}
          onBlur={blur('message')}
          data-invalid={Boolean(errors.message && touched.message)}
          aria-invalid={Boolean(errors.message && touched.message)}
          aria-describedby={errors.message && touched.message ? 'err-message' : undefined}
          class={`${fieldClass('message')} resize-none`}
        />
        {errors.message && touched.message && (
          <p id="err-message" class="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" class="rounded-2xl border border-red-300/60 bg-red-50 px-4 py-3 text-sm text-red-700">
          We couldn’t send that just now. Please try again, or reach us directly on WhatsApp.
        </p>
      )}

      <div class="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          class="group relative inline-flex h-14 flex-1 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink-950 px-8 text-[0.9375rem] font-medium text-ivory-50 shadow-[0_14px_36px_-14px_rgba(5,7,10,.8)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_-16px_rgba(5,7,10,.9)] active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-300/30 to-transparent transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-full"
          />
          {status === 'sending' ? (
            <>
              <Icon name="loader" size={17} class="relative animate-spin" />
              <span class="relative">Sending…</span>
            </>
          ) : (
            <>
              <span class="relative">Send enquiry</span>
              <Icon
                name="send"
                size={16}
                class="relative transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-ink-950/12 px-7 text-[0.9375rem] font-medium text-ink-800 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-400/60 hover:bg-white"
        >
          <WhatsAppIcon size={17} class="text-[#25D366]" />
          WhatsApp instead
        </a>
      </div>

      <p id="form-note" class="text-xs leading-relaxed text-ink-400">
        We use your number only to respond to this enquiry. No marketing messages, no sharing with
        third parties.
      </p>
    </form>
  )
}
