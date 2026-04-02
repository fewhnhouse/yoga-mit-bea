'use client'

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import type { SiteId, SiteSettingsQueryResult } from '@/sanity/types'
import type {
  HeaderNavLink,
  NavLink,
  ResolvedSiteConfig,
  SanityNavigation,
} from '@/types/site'

const DEFAULT_SITE_ID: SiteId = 'yoga'

const STATIC_FOOTER_INFO_LINKS: NavLink[] = [
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

function resolveSiteConfig(
  siteId: SiteId,
  siteSettings: SiteSettingsQueryResult
): ResolvedSiteConfig {
  if (!siteSettings) {
    throw new Error(`[SiteContext] Missing site settings for site "${siteId}".`)
  }

  const rawName = siteSettings?.name
  const rawTagline = siteSettings?.tagline
  const rawDomain = siteSettings?.domain
  const rawPrimaryColor = siteSettings?.primaryColor
  const rawContactEmail = siteSettings?.contactEmail
  const rawContactPhone = siteSettings?.contactPhone

  if (typeof rawName !== 'string' || rawName.trim().length === 0) {
    throw new Error(`[SiteContext] Missing required field "name" for site "${siteId}".`)
  }
  if (typeof rawDomain !== 'string' || rawDomain.trim().length === 0) {
    throw new Error(`[SiteContext] Missing required field "domain" for site "${siteId}".`)
  }
  if (rawPrimaryColor !== 'sage' && rawPrimaryColor !== 'terracotta') {
    throw new Error(
      `[SiteContext] Missing or invalid required field "primaryColor" for site "${siteId}".`
    )
  }

  return {
    id: siteId,
    name: rawName,
    tagline:
      typeof rawTagline === 'string' && rawTagline.trim().length > 0
        ? rawTagline
        : undefined,
    domain: rawDomain,
    primaryColor: rawPrimaryColor,
    contactEmail:
      typeof rawContactEmail === 'string' && rawContactEmail.trim().length > 0
        ? rawContactEmail
        : undefined,
    contactPhone:
      typeof rawContactPhone === 'string' && rawContactPhone.trim().length > 0
        ? rawContactPhone
        : undefined,
  }
}

interface SiteContextType {
  currentSite: ResolvedSiteConfig
  siteId: SiteId
  isYoga: boolean
  isPsychotherapie: boolean
  // Navigation links from site settings (or fallback to pages)
  navLinks: HeaderNavLink[]
  // Footer links
  footerServiceLinks: NavLink[]
  footerInfoLinks: NavLink[]
}

const SiteContext = createContext<SiteContextType | undefined>(undefined)

// Helper to get site from cookie
function getSiteFromCookie(): SiteId {
  if (typeof document === 'undefined') return DEFAULT_SITE_ID

  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === 'site-id' && (value === 'yoga' || value === 'therapie')) {
      return value as SiteId
    }
  }
  return DEFAULT_SITE_ID
}

// Helper to detect site from hostname (fallback for initial load)
function getSiteFromHostname(): SiteId {
  if (typeof window === 'undefined') return DEFAULT_SITE_ID

  const hostname = window.location.hostname
  if (hostname.includes('therapie')) {
    return 'therapie'
  }
  return 'yoga'
}

// Detect site from cookie or hostname
function getClientSiteId(): SiteId {
  const cookieSite = getSiteFromCookie()
  const hostnameSite = getSiteFromHostname()
  // Prefer cookie as it's set by middleware, but use hostname as fallback
  return cookieSite !== DEFAULT_SITE_ID ? cookieSite : hostnameSite
}

// Subscribe function for useSyncExternalStore (no-op since site doesn't change dynamically)
function subscribe(): () => void {
  // Site ID doesn't change during the session, so no subscription needed
  return () => {}
}

// Hook to get site ID using useSyncExternalStore for proper hydration
function useSiteId(): SiteId {
  return useSyncExternalStore(
    subscribe,
    getClientSiteId, // Client snapshot
    () => DEFAULT_SITE_ID // Server snapshot (for SSR)
  )
}

interface SiteProviderProps {
  children: ReactNode
  sanityNav: SanityNavigation
  siteSettings: SiteSettingsQueryResult
}

export function SiteProvider({
  children,
  sanityNav,
  siteSettings,
}: SiteProviderProps) {
  const siteId = useSiteId()
  const currentSite = resolveSiteConfig(siteId, siteSettings)

  // Sync site ID to HTML element for CSS styling (scrollbar, etc.)
  useEffect(() => {
    document.documentElement.setAttribute('data-site', siteId)
  }, [siteId])

  const normalizeHref = (href: string | null | undefined): string | undefined => {
    if (!href) return undefined
    return href.startsWith('/') ? href : `/${href}`
  }

  // Fallback nav links from Sanity pages (already sorted by order field in query)
  const fallbackNavLinks: HeaderNavLink[] = (sanityNav.pages || []).map((page) => ({
    label: page.title,
    href: `/${page.slug}`,
  }))

  // Configured header nav from site settings (supports optional submenus)
  const configuredNavLinks = (sanityNav.headerNavigation || []).reduce<HeaderNavLink[]>(
    (acc, item) => {
      const label =
        typeof item.label === 'string' && item.label.trim().length > 0
          ? item.label.trim()
          : undefined

      const subLinks =
        item.subLinks
          ?.map((subLink) => {
            const subLabel =
              typeof subLink.label === 'string' && subLink.label.trim().length > 0
                ? subLink.label.trim()
                : undefined
            const subHref = normalizeHref(subLink.href)

            if (!subLabel || !subHref) return null

            return {
              label: subLabel,
              href: subHref,
            }
          })
          .filter((subLink): subLink is { label: string; href: string } => Boolean(subLink)) ||
        []

      if (!label) return acc

      // If sublinks exist, treat this as a submenu parent (no direct href)
      if (subLinks.length > 0) {
        acc.push({
          label,
          subLinks,
        })
        return acc
      }

      const href = normalizeHref(item.href)
      if (!href) return acc

      acc.push({
        label,
        href,
      })
      return acc
    },
    []
  )

  const navLinks = configuredNavLinks.length > 0 ? configuredNavLinks : fallbackNavLinks

  // Build footer service links from explicit service->page references in Sanity
  const footerServiceLinks: NavLink[] =
    sanityNav.services
      ?.map((service) => {
        const href = normalizeHref(service.pageSlug)
        if (!href) return null

        return {
          label: service.title,
          href,
        }
      })
      .filter((link): link is NavLink => Boolean(link)) || []

  const footerInfoLinks = STATIC_FOOTER_INFO_LINKS

  const value: SiteContextType = {
    currentSite,
    siteId,
    isYoga: siteId === 'yoga',
    isPsychotherapie: siteId === 'therapie',
    navLinks,
    footerServiceLinks,
    footerInfoLinks,
  }

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSite() {
  const context = useContext(SiteContext)
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider')
  }
  return context
}
