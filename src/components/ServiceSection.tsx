import Image from 'next/image'
import type { PricingEntry, ServiceFromQuery } from '@/sanity/types'
import { formatLocationAddress } from '@/lib/formatLocationAddress'
import SectionHeader from '@/components/SectionHeader'

interface ServiceSectionProps {
  service: ServiceFromQuery
  /** Override the service title for this section */
  title?: string
}

type LocationPricing = NonNullable<ServiceFromQuery['locations']>[number]['pricing']

function normalizePricingEntries(pricing: LocationPricing): Array<{ _key?: string; title?: string; description: string }> {
  if (!pricing) return []

  if (typeof pricing === 'string') {
    return [{ description: pricing }]
  }

  return pricing.reduce<Array<{ _key?: string; title?: string; description: string }>>((acc, entry) => {
      if (entry?.title && entry?.description) {
        acc.push({ _key: entry._key, title: entry.title, description: entry.description })
        return acc
      }

      if (entry?.description) {
        acc.push({ _key: entry._key, description: entry.description })
        return acc
      }

      // Backward compatibility for entries created before schema simplification.
      const legacyEntry = entry as PricingEntry & {
        label?: string | null
        price?: string | null
        note?: string | null
      }

      if (!legacyEntry.price) return acc

      const legacyDescription = [
        legacyEntry.label ? `${legacyEntry.label}: ${legacyEntry.price}` : legacyEntry.price,
        legacyEntry.note ? `(${legacyEntry.note})` : null,
      ]
        .filter(Boolean)
        .join(' ')

      if (!legacyDescription) {
        return acc
      }

      const normalizedEntry: { _key?: string; title?: string; description: string } = {
        _key: legacyEntry._key,
        description: legacyDescription,
      }

      if (legacyEntry.label) {
        normalizedEntry.title = legacyEntry.label
      }

      acc.push(normalizedEntry)
      return acc
    }, [])
}

export default function ServiceSection({
  service,
  title,
}: ServiceSectionProps) {
  const displayTitle = title ?? service.title

  // Use locations from the service itself (embedded via reference)
  const serviceLocations = service.locations
  const hasLocations = serviceLocations && serviceLocations.length > 0

  return (
    <section
      id={service.slug}
      className='py-24 bg-warm-white scroll-mt-24'
    >
      <div className='container mx-auto px-6'>
        {hasLocations && serviceLocations ? (
          // Layout with locations (for group courses)
          <LocationsLayout
            service={service}
            locations={serviceLocations}
            title={displayTitle}
          />
        ) : null}
      </div>
    </section>
  )
}

// Sub-component for services with locations (like group courses)
function LocationsLayout({
  service,
  locations,
  title,
}: {
  service: ServiceFromQuery
  locations: NonNullable<ServiceFromQuery['locations']>
  title: string
}) {
  const hasSingleLocation = locations.length === 1

  return (
    <>
      {/* Header */}
      <div className='mb-12'>
        <SectionHeader
          title={title}
          align='center'
        />
        {service.shortDescription && (
          <p className='text-charcoal-light leading-relaxed max-w-2xl mx-auto text-center'>
            {service.shortDescription}
          </p>
        )}
      </div>

      {/* Location Cards */}
      <div
        className={`grid gap-8 items-start ${
          hasSingleLocation ? 'max-w-2xl mx-auto' : 'lg:grid-cols-2'
        }`}
      >
        {locations.map((location) => (
          <div
            key={location._id}
            className='bg-warm-white rounded-2xl overflow-hidden shadow-lg self-start'
          >
            {/* Image Area */}
            {location.imageUrl && (
              <div className='aspect-video relative'>
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  fill
                  className='object-cover'
                />
              </div>
            )}
            {!location.imageUrl && (
              <div className='h-1 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent' />
            )}

            {/* Content */}
            <div className='p-6'>
              <h3 className='font-display text-xl font-light text-charcoal mb-2'>
                {location.name}
              </h3>
              {location.description && (
                <p className='text-charcoal-light text-sm mb-4'>
                  {location.description}
                </p>
              )}

              {/* Info Grid */}
              <div className='space-y-3 mb-4'>
                {/* Address */}
                <div className='flex items-start gap-2'>
                  <svg
                    className='w-4 h-4 text-primary mt-0.5 shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {location.googleMapsUrl ? (
                    <a
                      href={location.googleMapsUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-charcoal-light hover:text-primary-dark underline underline-offset-2 transition-colors'
                    >
                      {formatLocationAddress(location)}
                    </a>
                  ) : (
                    <span className='text-sm text-charcoal-light'>
                      {formatLocationAddress(location)}
                    </span>
                  )}
                </div>

                {/* Schedule */}
                {location.schedule && location.schedule.length > 0 && (
                  <div className='flex items-start gap-2'>
                    <svg
                      className='w-4 h-4 text-primary mt-0.5 shrink-0'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <div className='text-sm'>
                      {location.schedule.map((slot) => (
                        <p key={`${slot.day}-${slot.times}`} className='text-charcoal'>
                          {slot.day && (
                            <>
                              <span className='font-medium'>{slot.day}:</span>{' '}
                            </>
                          )}
                          <span className='text-charcoal-light'>{slot.times}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
                {normalizePricingEntries(location.pricing).length > 0 && (
                  <div className='flex items-start gap-2'>
                    <svg
                      className='w-4 h-4 text-primary mt-0.5 shrink-0'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <ul className='space-y-1 text-sm text-charcoal-light'>
                      {normalizePricingEntries(location.pricing).map((entry, index) => (
                        <li key={entry._key || `price-${index}`} className='leading-snug'>
                          {entry.title && (
                            <p className='font-medium text-charcoal'>{entry.title}</p>
                          )}
                          <p className='whitespace-pre-line text-charcoal-light'>{entry.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

