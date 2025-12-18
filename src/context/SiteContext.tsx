'use client'

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import {
  type SiteId,
  type SiteConfig,
  type SanityNavigation,
  type NavLink,
  sites,
  defaultSite,
} from '@/config/sites'

interface SiteContextType {
  currentSite: SiteConfig
  siteId: SiteId
  isYoga: boolean
  isTherapie: boolean
  // Navigation links derived from Sanity pages
  navLinks: NavLink[]
  // Footer links
  footerServiceLinks: NavLink[]
  footerInfoLinks: NavLink[]
}

const SiteContext = createContext<SiteContextType | undefined>(undefined)

// Helper to get site from cookie
function getSiteFromCookie(): SiteId {
  if (typeof document === 'undefined') return defaultSite

  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === 'site-id' && (value === 'yoga' || value === 'therapie')) {
      return value as SiteId
    }
  }
  return defaultSite
}

// Helper to detect site from hostname (fallback for initial load)
function getSiteFromHostname(): SiteId {
  if (typeof window === 'undefined') return defaultSite

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
  return cookieSite !== defaultSite ? cookieSite : hostnameSite
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
    () => defaultSite // Server snapshot (for SSR)
  )
}

interface SiteProviderProps {
  children: ReactNode
  sanityNav?: SanityNavigation
}

export function SiteProvider({ children, sanityNav }: SiteProviderProps) {
  const siteId = useSiteId()

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

  // Footer info links are static from config
  const footerInfoLinks = sites[siteId].footerInfoLinks

  const value: SiteContextType = {
    currentSite: sites[siteId],
    siteId,
    isYoga: siteId === 'yoga',
    isTherapie: siteId === 'therapie',
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
