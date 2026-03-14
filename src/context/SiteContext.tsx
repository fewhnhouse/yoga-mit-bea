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
  NavLink,
  ResolvedSiteConfig,
  SanityNavigation,
} from '@/types/site'

const DEFAULT_SITE_ID: SiteId = 'yoga'

const FALLBACK_SITE_CONFIGS: Record<SiteId, ResolvedSiteConfig> = {
  yoga: {
    id: 'yoga',
    name: 'Yoga mit Bea',
    tagline: 'Durch Yoga gehst du nur auf dich selbst zu',
    domain: 'yogamitbea.de',
    primaryColor: 'sage',
  },
  therapie: {
    id: 'therapie',
    name: 'Psychotherapie mit Bea',
    tagline: 'Heilung für Körper und Seele',
    domain: 'therapiemitbea.de',
    primaryColor: 'terracotta',
  },
}

const STATIC_FOOTER_INFO_LINKS: NavLink[] = [
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

function resolveSiteConfig(
  siteId: SiteId,
  siteSettings?: SiteSettingsQueryResult
): ResolvedSiteConfig {
  const fallback = FALLBACK_SITE_CONFIGS[siteId]
  const rawName = siteSettings?.name
  const rawTagline = siteSettings?.tagline
  const rawDomain = siteSettings?.domain
  const rawPrimaryColor = siteSettings?.primaryColor

  return {
    id: siteId,
    name:
      typeof rawName === 'string' && rawName.trim().length > 0
        ? rawName
        : fallback.name,
    tagline:
      typeof rawTagline === 'string' && rawTagline.trim().length > 0
        ? rawTagline
        : fallback.tagline,
    domain:
      typeof rawDomain === 'string' && rawDomain.trim().length > 0
        ? rawDomain
        : fallback.domain,
    primaryColor:
      rawPrimaryColor === 'sage' || rawPrimaryColor === 'terracotta'
        ? rawPrimaryColor
        : fallback.primaryColor,
  }
}

interface SiteContextType {
  currentSite: ResolvedSiteConfig
  siteId: SiteId
  isYoga: boolean
  isPsychotherapie: boolean
  // Navigation links derived from Sanity pages
  navLinks: NavLink[]
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
  sanityNav?: SanityNavigation
  siteSettings?: SiteSettingsQueryResult
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

  // Build nav links from Sanity pages (already sorted by order field in query)
  const navLinks: NavLink[] = (sanityNav?.pages || []).map((page) => ({
    label: page.title,
    href: `/${page.slug}`,
  }))

  // Build footer service links from Sanity services
  // Each service links to the services page with an anchor
  const footerServiceLinks: NavLink[] =
    sanityNav?.services?.map((service) => ({
      label: service.title,
      href: `/${siteId}#${service.slug}`,
    })) || []

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
