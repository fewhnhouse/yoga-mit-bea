'use client'

import HeroSection from './HeroSection'
import TextSectionBlock from './TextSectionBlock'
import CTASectionBlock from './CTASectionBlock'
import ImageTextSection from './ImageTextSection'
import CardsGridSection from './CardsGridSection'
import ServiceListSection from './ServiceListSection'
import TestimonialsSection from './TestimonialsSection'
import RichTextSection from './RichTextSection'
import type { ServiceFromQuery, LocationFromQuery } from '@/sanity/types'

// Type for section data from Sanity
interface BaseSection {
  _key: string
  _type: string
}

interface HeroSectionData extends BaseSection {
  _type: 'heroSection'
  title?: string
  tagline?: string
  subtitle?: string
  primaryCta?: { text?: string; href?: string }
  secondaryCta?: { text?: string; href?: string }
}

interface TextSectionData extends BaseSection {
  _type: 'textSection'
  label?: string
  title: string
  description?: string[]
  cta?: { text?: string; href?: string }
  align?: 'left' | 'center'
  background?: 'transparent' | 'light' | 'cream' | 'gradient' | 'primary'
  padding?: 'hero' | 'section'
}

interface CTASectionData extends BaseSection {
  _type: 'ctaSection'
  title: string
  description: string
  ctas?: Array<{ text: string; href: string; variant?: 'primary' | 'secondary' }>
  variant?: 'solid' | 'light'
  isQuote?: boolean
  icon?: string
  decorative?: boolean
  padding?: 'default' | 'large'
}

interface ImageTextSectionData extends BaseSection {
  _type: 'imageTextSection'
  imageUrl?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  aspectRatio?: '4/5' | '3/4' | '4/3'
  label?: string
  title: string
  tagline?: string
  description?: string[]
  cta?: { text?: string; href?: string }
  headingLevel?: 'h1' | 'h2'
  background?: 'light' | 'cream' | 'gradient' | 'pattern'
  decorativeBlobs?: boolean
  padding?: 'hero' | 'section'
}

interface CardsGridSectionData extends BaseSection {
  _type: 'cardsGridSection'
  label?: string
  title?: string
  description?: string
  columns?: 2 | 3 | 4
  background?: 'light' | 'cream'
  cardVariant?: 'card' | 'flat'
  cardSize?: 'default' | 'compact'
  cardAlign?: 'center' | 'left'
  cards?: Array<{
    serviceRef?: {
      _id: string
      title: string
      shortDescription?: string
      icon?: string
      slug?: string
    }
    icon?: string
    title?: string
    description?: string
    href?: string
    ctaText?: string
  }>
}

interface ServiceListSectionData extends BaseSection {
  _type: 'serviceListSection'
  showServicesFrom?: 'current' | 'yoga' | 'therapie'
  alternateBackgrounds?: boolean
}

interface TestimonialsSectionData extends BaseSection {
  _type: 'testimonialsSection'
  label?: string
  title?: string
  showTestimonialsFrom?: 'current' | 'yoga' | 'therapie' | 'both'
  featuredOnly?: boolean
}

interface RichTextSectionData extends BaseSection {
  _type: 'richTextSection'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[]
  background?: 'light' | 'cream' | 'transparent'
  maxWidth?: 'narrow' | 'medium' | 'wide'
}

// Union type for all sections
type SectionData =
  | HeroSectionData
  | TextSectionData
  | CTASectionData
  | ImageTextSectionData
  | CardsGridSectionData
  | ServiceListSectionData
  | TestimonialsSectionData
  | RichTextSectionData

// Props for the SectionRenderer
interface SectionRendererProps {
  sections: SectionData[]
  // Additional data that some sections need
  services?: ServiceFromQuery[]
  locations?: LocationFromQuery[]
  testimonials?: Array<{ _id: string; name: string; quote: string }>
}

/**
 * SectionRenderer - Maps Sanity section types to React components
 * Used by dynamic pages to render their content
 */
export function SectionRenderer({
  sections,
  services = [],
  locations = [],
  testimonials = [],
}: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case 'heroSection':
            return (
              <HeroSection
                key={section._key}
                title={section.title}
                tagline={section.tagline}
                subtitle={section.subtitle}
                primaryCta={section.primaryCta}
                secondaryCta={section.secondaryCta}
              />
            )

          case 'textSection':
            return (
              <TextSectionBlock
                key={section._key}
                label={section.label}
                title={section.title}
                description={section.description}
                cta={section.cta}
                align={section.align}
                background={section.background}
                padding={section.padding}
              />
            )

          case 'ctaSection':
            return (
              <CTASectionBlock
                key={section._key}
                title={section.title}
                description={section.description}
                ctas={section.ctas}
                variant={section.variant}
                isQuote={section.isQuote}
                icon={section.icon}
                decorative={section.decorative}
                padding={section.padding}
              />
            )

          case 'imageTextSection':
            return (
              <ImageTextSection
                key={section._key}
                imageUrl={section.imageUrl}
                imageAlt={section.imageAlt}
                imagePosition={section.imagePosition}
                aspectRatio={section.aspectRatio}
                label={section.label}
                title={section.title}
                tagline={section.tagline}
                description={section.description}
                cta={section.cta}
                headingLevel={section.headingLevel}
                background={section.background}
                decorativeBlobs={section.decorativeBlobs}
                padding={section.padding}
              />
            )

          case 'cardsGridSection':
            return (
              <CardsGridSection
                key={section._key}
                label={section.label}
                title={section.title}
                description={section.description}
                columns={section.columns}
                background={section.background}
                cardVariant={section.cardVariant}
                cardSize={section.cardSize}
                cardAlign={section.cardAlign}
                cards={section.cards}
              />
            )

          case 'serviceListSection':
            return (
              <ServiceListSection
                key={section._key}
                showServicesFrom={section.showServicesFrom}
                alternateBackgrounds={section.alternateBackgrounds}
                services={services}
                locations={locations}
              />
            )

          case 'testimonialsSection':
            return (
              <TestimonialsSection
                key={section._key}
                label={section.label}
                title={section.title}
                testimonials={testimonials}
              />
            )

          case 'richTextSection':
            return (
              <RichTextSection
                key={section._key}
                content={section.content}
                background={section.background}
                maxWidth={section.maxWidth}
              />
            )

          default:
            console.warn(`Unknown section type: ${(section as BaseSection)._type}`)
            return null
        }
      })}
    </>
  )
}

// Re-export individual components for direct use
export {
  HeroSection,
  TextSectionBlock,
  CTASectionBlock,
  ImageTextSection,
  CardsGridSection,
  ServiceListSection,
  TestimonialsSection,
  RichTextSection,
}

