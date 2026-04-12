'use client'

import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import type { ReactNode } from 'react'
import IconCard from '@/components/IconCard'
import ServiceIcon from '@/components/ServiceIcon'

interface CardItem {
  // Service reference data (expanded in query)
  serviceRef?: {
    _id: string
    title: string
    shortDescription?: string
    icon?: string
    pageSlug?: string
  }
  // Custom card fields
  icon?: string
  title?: PortableTextBlock[]
  description?: string
  ctaText?: string
}

interface CardsGridSectionProps {
  label?: string
  title?: PortableTextBlock[]
  description?: string
  columns?: 2 | 3 | 4
  background?: 'light' | 'cream'
  cardVariant?: 'card' | 'flat'
  cardSize?: 'default' | 'compact'
  cardAlign?: 'center' | 'left'
  cards?: CardItem[]
}

const HEX_COLOR_REGEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

function getValidHexColor(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  return HEX_COLOR_REGEX.test(value) ? value : undefined
}

function isPortableTextArray(value: unknown): value is PortableTextBlock[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === 'object' &&
    value[0] !== null &&
    '_type' in value[0]
  )
}

const inlinePortableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <>{children}</>,
  },
  marks: {
    textColor: ({ children, value }) => {
      const hex = getValidHexColor(value?.hex || value?.color)
      return <span style={hex ? { color: hex } : undefined}>{children}</span>
    },
  },
}

function renderInlineColorText(value?: PortableTextBlock[] | string): ReactNode {
  if (!value) return null
  if (typeof value === 'string') return value
  if (!isPortableTextArray(value)) return null

  return (
    <PortableText
      value={value}
      components={inlinePortableTextComponents}
    />
  )
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
          <div className='max-w-2xl mx-auto mb-16 text-center'>
            {label && (
              <span className='text-primary-dark font-body text-sm tracking-widest uppercase mb-4 block'>
                {label}
              </span>
            )}
            {title && (
              <h2 className='font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6'>
                {renderInlineColorText(title)}
              </h2>
            )}
            <div
              className='w-20 h-0.5 mb-6 mx-auto'
              style={{
                background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
              }}
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
              : renderInlineColorText(card.title)
            const cardDescription = isServiceRef
              ? card.serviceRef?.shortDescription
              : card.description
            const cardIcon = isServiceRef
              ? card.serviceRef?.icon
              : card.icon
            const cardHref = isServiceRef && card.serviceRef?.pageSlug
              ? `/${card.serviceRef.pageSlug}`
              : undefined

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

