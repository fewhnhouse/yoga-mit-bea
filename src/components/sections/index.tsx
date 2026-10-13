'use client'

import type { SanityImageValue } from '@/components/SanityImage'
import ImageHeroLogoSection from './ImageHeroLogoSection'
import TextSectionBlock from './TextSectionBlock'
import CTASectionBlock from './CTASectionBlock'
import ImageTextSection from './ImageTextSection'
import CardsGridSection from './CardsGridSection'
import ServiceSection from '@/components/ServiceSection'
import TestimonialsSection from './TestimonialsSection'
import GoogleMeetSection from './GoogleMeetSection'
import type { ServiceFromQuery } from '@/sanity/types'
import type { PortableTextBlock } from '@portabletext/types'

// Type for section data from Sanity
interface BaseSection {
  _key: string
  _type: string
}

interface ImageHeroLogoSectionData extends BaseSection {
  _type: 'imageHeroLogoSection'
  image?: SanityImageValue
  imageUrl?: string
  imageAlt?: string
  logoUrl?: string
}

interface TextSectionData extends BaseSection {
  _type: 'textSection'
  title: string
  description?: PortableTextBlock[] | string[] | string
  cta?: { text?: string | null; href?: string | null } | null
  align?: 'left' | 'center'
  background?: 'transparent' | 'light' | 'cream' | 'gradient' | 'primary'
  padding?: 'hero' | 'section'
}

interface CTASectionData extends BaseSection {
  _type: 'ctaSection'
  title: string
  description: string
  ctas?: Array<{ _key: string; text?: string | null; href?: string | null }>
}

interface ImageTextSectionData extends BaseSection {
  _type: 'imageTextSection'
  imageUrl?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  title: string
  description?: PortableTextBlock[] | string[] | string
  cta?: { text?: string | null; href?: string | null } | null
  background?: 'light' | 'cream' | 'gradient' | 'pattern'
  decorativeBlobs?: boolean
  padding?: 'hero' | 'section'
}

interface CardsGridSectionData extends BaseSection {
  _type: 'cardsGridSection'
  label?: string
  title?: PortableTextBlock[]
  columns?: 2 | 3 | 4
  cardVariant?: 'card' | 'flat'
  cardSize?: 'default' | 'compact'
  cardAlign?: 'center' | 'left'
  cards?: Array<{
    serviceRef?: {
      _id: string
      title: string
      shortDescription?: string
      icon?: string
      pageSlug?: string
    }
    icon?: string
    title?: PortableTextBlock[]
    description?: string
    ctaText?: string
  }>
}

interface ServiceSectionData extends BaseSection {
  _type: 'serviceSection'
  service?: ServiceFromQuery
  title?: string
}

interface TestimonialsSectionData extends BaseSection {
  _type: 'testimonialsSection'
  title?: string
}

interface GoogleMeetSectionData extends BaseSection {
  _type: 'googleMeetSection'
  title: string
  schedule?: string
  instructionsTitle?: string
  instructions?: string[]
  meetLink: string
  buttonText?: string
  footnote?: string
  background?: 'light' | 'cream'
}

// Union type for all sections
type SectionData =
  | ImageHeroLogoSectionData
  | TextSectionData
  | CTASectionData
  | ImageTextSectionData
  | CardsGridSectionData
  | ServiceSectionData
  | TestimonialsSectionData
  | GoogleMeetSectionData

// Props for the SectionRenderer
interface SectionRendererProps {
  sections: SectionData[]
  // Additional data that some sections need
  testimonials?: Array<{ _id: string; name: string; quote: string }>
}

/**
 * SectionRenderer - Maps Sanity section types to React components
 * Used by dynamic pages to render their content
 */
export function SectionRenderer({
  sections,
  testimonials = [],
}: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section._type) {

          case 'textSection':
            return (
              <TextSectionBlock
                key={section._key}
                title={section.title}
                description={section.description}
                cta={section.cta}
                align={section.align}
                background={section.background}
                padding={section.padding}
              />
            )

          case 'imageHeroLogoSection':
            return (
              <ImageHeroLogoSection
                key={section._key}
                image={section.image}
                imageUrl={section.imageUrl}
                imageAlt={section.imageAlt}
                logoUrl={section.logoUrl}
              />
            )

          case 'ctaSection':
            return (
              <CTASectionBlock
                key={section._key}
                title={section.title}
                description={section.description}
                ctas={section.ctas}
              />
            )

          case 'imageTextSection':
            return (
              <ImageTextSection
                key={section._key}
                imageUrl={section.imageUrl}
                imageAlt={section.imageAlt}
                imagePosition={section.imagePosition}
                title={section.title}
                description={section.description}
                cta={section.cta}
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
                columns={section.columns}
                cardVariant={section.cardVariant}
                cardSize={section.cardSize}
                cardAlign={section.cardAlign}
                cards={section.cards}
              />
            )

          case 'serviceSection':
            if (!section.service) return null
            return (
              <ServiceSection
                key={section._key}
                service={section.service}
                title={section.title}
              />
            )

          case 'testimonialsSection':
            return (
              <TestimonialsSection
                key={section._key}
                title={section.title}
                testimonials={testimonials}
              />
            )


          case 'googleMeetSection':
            return (
              <GoogleMeetSection
                key={section._key}
                title={section.title}
                schedule={section.schedule}
                instructionsTitle={section.instructionsTitle}
                instructions={section.instructions}
                meetLink={section.meetLink}
                buttonText={section.buttonText}
                footnote={section.footnote}
                background={section.background}
              />
            )

          default:
            console.warn(
              `Unknown section type: ${(section as BaseSection)._type}`
            )
            return null
        }
      })}
    </>
  )
}

// Re-export individual components for direct use
export {
  ImageHeroLogoSection,
  TextSectionBlock,
  CTASectionBlock,
  ImageTextSection,
  CardsGridSection,
  ServiceSection,
  TestimonialsSection,
  GoogleMeetSection,
}
