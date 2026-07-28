import { createRoute } from 'honox/factory'

type Payload = {
  name?: string
  phone?: string
  email?: string
  service?: string
  message?: string
}

const PHONE_RE = /^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Enquiry endpoint.
 *
 * Validates server-side (never trust the client's own check) and logs the
 * enquiry to the Worker log stream, so nothing is lost on day one.
 *
 * To actually deliver these somewhere, pick one and wire it up here:
 *   • Email      — Cloudflare Email Routing, Resend, or MailChannels
 *   • Sheet/CRM  — a webhook POST to Zapier / Make / Google Apps Script
 *   • Storage    — a Cloudflare D1 table or KV namespace
 * See README.md § "Wiring up the enquiry form".
 */
export const POST = createRoute(async (c) => {
  let body: Payload
  try {
    body = await c.req.json<Payload>()
  } catch {
    return c.json({ ok: false, error: 'Malformed request body.' }, 400)
  }

  const name = (body.name ?? '').trim()
  const phone = (body.phone ?? '').replace(/\s+/g, '')
  const email = (body.email ?? '').trim()
  const service = (body.service ?? '').trim()
  const message = (body.message ?? '').trim()

  const errors: string[] = []
  if (name.length < 2 || name.length > 100) errors.push('name')
  if (!PHONE_RE.test(phone)) errors.push('phone')
  if (email && !EMAIL_RE.test(email)) errors.push('email')
  if (message.length < 5 || message.length > 2000) errors.push('message')

  if (errors.length) {
    return c.json({ ok: false, error: 'Validation failed.', fields: errors }, 422)
  }

  const enquiry = {
    receivedAt: new Date().toISOString(),
    name,
    phone,
    email: email || null,
    service: service || 'Unspecified',
    message,
    // Cloudflare adds these; useful for spotting spam bursts
    country: c.req.raw.headers.get('cf-ipcountry'),
    userAgent: c.req.raw.headers.get('user-agent'),
  }

  console.log('[netra:enquiry]', JSON.stringify(enquiry))

  return c.json({ ok: true }, 200)
})

/** Anything other than POST is a client mistake, not a 404. */
export default createRoute((c) => c.json({ ok: false, error: 'Method not allowed.' }, 405))
