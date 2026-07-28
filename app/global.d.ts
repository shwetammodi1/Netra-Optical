import '@hono/vite-dev-server'
import type {} from 'hono'

type Head = {
  title?: string
  description?: string
  /** Canonical path, e.g. "/" — joined onto site.url. */
  path?: string
  noindex?: boolean
}

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
