import type { SiteId } from '@/sanity/types'

/**
 * Maps production hostnames to site — keep in sync with `src/proxy.ts`.
 */
export function getSiteIdFromHostname(hostname: string): SiteId {
  const h = hostname.toLowerCase()
  if (h.includes('therapie') || h.includes('therapie-mit-bea')) {
    return 'therapie'
  }
  return 'yoga'
}

/**
 * Canonical origin for the current request (Vercel sets x-forwarded-*).
 */
export function getCanonicalOriginFromHeaders(headersList: Headers): string {
  const forwardedHost = headersList.get('x-forwarded-host')
  const host = (
    forwardedHost?.split(',')[0]?.trim() ||
    headersList.get('host') ||
    ''
  ).trim()

  const proto =
    headersList.get('x-forwarded-proto')?.split(',')[0]?.trim() || 'https'

  if (!host) {
    return (
      process.env.NEXT_PUBLIC_SITE_URL || 'https://yogamitbea.de'
    ).replace(/\/$/, '')
  }

  return `${proto}://${host}`
}
