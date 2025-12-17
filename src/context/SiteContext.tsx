'use client'

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import {
  type SiteId,
  type SiteConfig,
  sites,
  defaultSite,
} from '@/config/sites'

interface SiteContextType {
  currentSite: SiteConfig
  siteId: SiteId
  isYoga: boolean
  isTherapie: boolean
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

export function SiteProvider({ children }: { children: ReactNode }) {
  const siteId = useSiteId()

  const value: SiteContextType = {
    currentSite: sites[siteId],
    siteId,
    isYoga: siteId === 'yoga',
    isTherapie: siteId === 'therapie',
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
