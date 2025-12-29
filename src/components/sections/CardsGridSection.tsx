'use client'

import IconCard from '@/components/IconCard'
import SectionHeader from '@/components/SectionHeader'
import ServiceIcon from '@/components/ServiceIcon'
import { useSite } from '@/context/SiteContext'  // Still needed for siteId

interface CardItem {
  // Service reference data (expanded in query)
  serviceRef?: {
    _id: string
    title: string
    shortDescription?: string
    icon?: string
    slug?: string
  }
  // Custom card fields
  icon?: string
  title?: string
  description?: string
  href?: string
  ctaText?: string
}

interface CardsGridSectionProps {
  label?: string
  title?: string
  description?: string
  columns?: 2 | 3 | 4
  background?: 'light' | 'cream'
  cardVariant?: 'card' | 'flat'
  cardSize?: 'default' | 'compact'
  cardAlign?: 'center' | 'left'
  cards?: CardItem[]
}

export default function CardsGridSection({
  label,
  title,
  description,
  columns,
  background = 'cream',
  cardVariant = 'card',
  cardSize = 'default',
  cardAlign = 'center',
  cards = [],
}: CardsGridSectionProps) {
  const { siteId } = useSite()  // Still needed for URL construction

  // Background classes
  const bgClass = background === 'light' ? 'bg-warm-white' : 'bg-cream'

  // Determine columns class
  const cardCount = cards.length
  const effectiveColumns = columns || (cardCount >= 4 ? 4 : cardCount >= 3 ? 3 : 2)
  
  const gridClasses: Record<number, string> = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className='container mx-auto px-6'>
        {/* Section header */}
        {(label || title) && (
          <div className='max-w-2xl mx-auto mb-16'>
            <SectionHeader
              label={label || ''}
              title={title || ''}
              align='center'
            />
            {description && (
              <p className='text-charcoal-light text-center'>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Cards grid */}
        <div className={`grid ${gridClasses[effectiveColumns]} gap-8`}>
          {cards.map((card, index) => {
            // Use service data if available, otherwise use custom fields
            const isServiceRef = !!card.serviceRef
            const cardTitle = isServiceRef
              ? card.serviceRef?.title
              : card.title
            const cardDescription = isServiceRef
              ? card.serviceRef?.shortDescription
              : card.description
            const cardIcon = isServiceRef
              ? card.serviceRef?.icon
              : card.icon
            const cardHref = card.href || (isServiceRef && card.serviceRef?.slug
              ? `/${siteId}#${card.serviceRef.slug}`
              : undefined)

            return (
              <IconCard
                key={card.serviceRef?._id || `card-${index}`}
                icon={
                  <ServiceIcon
                    icon={cardIcon}
                    className='w-7 h-7 text-primary-dark'
                  />
                }
                title={cardTitle || ''}
                description={cardDescription || ''}
                href={cardHref}
                ctaText={card.ctaText}
                variant={cardVariant}
                size={cardSize}
                align={cardAlign}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

