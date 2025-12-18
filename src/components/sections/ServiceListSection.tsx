'use client'

import ServiceSection from '@/components/ServiceSection'
import { useSite } from '@/context/SiteContext'
import type { ServiceFromQuery, LocationFromQuery } from '@/sanity/types'

interface ServiceListSectionProps {
  showServicesFrom?: 'current' | 'yoga' | 'therapie'
  alternateBackgrounds?: boolean
  // Services and locations are passed in from the page query
  services?: ServiceFromQuery[]
  locations?: LocationFromQuery[]
}

export default function ServiceListSection({
  alternateBackgrounds = true,
  services = [],
  locations = [],
}: ServiceListSectionProps) {
  const { isYoga } = useSite()

  // Sort services by their order field
  const sortedServices = [...services].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  )

  return (
    <>
      {sortedServices.map((service, index) => {
        // Determine background based on alternation
        const background = alternateBackgrounds
          ? index % 2 === 0
            ? 'light'
            : 'cream'
          : (service.sectionBackground as 'light' | 'cream') || 'light'

        // Check if service has locations (only yoga services have this property)
        const serviceLocations = 'locations' in service ? service.locations : null
        const hasLocations = serviceLocations && serviceLocations.length > 0

        return (
          <ServiceSection
            key={service._id}
            service={service}
            locations={hasLocations ? locations : undefined}
            theme={isYoga ? 'yoga' : 'therapie'}
            background={background}
            imagePosition={service.imagePosition || 'left'}
            badge={service.badge}
            id={service.slug}
          />
        )
      })}
    </>
  )
}

