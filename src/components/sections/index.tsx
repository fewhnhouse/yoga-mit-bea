'use client'

import HeroSection from './HeroSection'
import ImageHeroLogoSection from './ImageHeroLogoSection'
import TextSectionBlock from './TextSectionBlock'
import CTASectionBlock from './CTASectionBlock'
import ImageTextSection from './ImageTextSection'
import CardsGridSection from './CardsGridSection'
import ServiceSection from '@/components/ServiceSection'
import TestimonialsSection from './TestimonialsSection'
import RichTextSection from './RichTextSection'
import GoogleMeetSection from './GoogleMeetSection'
import type { ServiceFromQuery } from '@/sanity/types'
import type { PortableTextBlock } from '@portabletext/types'

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
  imageUrl?: string
  personName?: string
  personRole?: string
}

interface ImageHeroLogoSectionData extends BaseSection {
  _type: 'imageHeroLogoSection'
  imageUrl?: string
  imageAlt?: string
  logoUrl?: string
}

interface TextSectionData extends BaseSection {
  _type: 'textSection'
  label?: string
  title: string
  description?: PortableTextBlock[] | string[] | string
  cta?: { text?: string; href?: string }
  align?: 'left' | 'center'
  background?: 'transparent' | 'light' | 'cream' | 'gradient' | 'primary'
  padding?: 'hero' | 'section'
}

interface CTASectionData extends BaseSection {
  _type: 'ctaSection'
  title: string
  description: string
  ctas?: Array<{
    text: string
    href: string
    variant?: 'primary' | 'secondary'
  }>
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
  description?: PortableTextBlock[] | string[] | string
  cta?: { text?: string; href?: string }
  /** @deprecated Ignored in UI; document uses sr-only h1; sections use h2. */
  headingLevel?: 'h1' | 'h2'
  background?: 'light' | 'cream' | 'gradient' | 'pattern'
  decorativeBlobs?: boolean
  padding?: 'hero' | 'section'
}

interface CardsGridSectionData extends BaseSection {
  _type: 'cardsGridSection'
  label?: string
  title?: PortableTextBlock[]
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
  background?: 'light' | 'cream'
  imagePosition?: 'left' | 'right'
  badge?: string
  customId?: string
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
  | HeroSectionData
  | ImageHeroLogoSectionData
  | TextSectionData
  | CTASectionData
  | ImageTextSectionData
  | CardsGridSectionData
  | ServiceSectionData
  | TestimonialsSectionData
  | RichTextSectionData
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
          case 'heroSection':
            return (
              <HeroSection
                key={section._key}
                title={section.title}
                tagline={section.tagline}
                subtitle={section.subtitle}
                primaryCta={section.primaryCta}
                secondaryCta={section.secondaryCta}
                imageUrl={section.imageUrl}
                personName={section.personName}
                personRole={section.personRole}
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

          case 'imageHeroLogoSection':
            return (
              <ImageHeroLogoSection
                key={section._key}
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

          case 'serviceSection':
            if (!section.service) return null
            return (
              <ServiceSection
                key={section._key}
                service={section.service}
                background={section.background || 'light'}
                imagePosition={section.imagePosition || section.service.imagePosition || 'left'}
                badge={section.badge || section.service.badge}
                id={section.customId || section.service.slug}
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
  HeroSection,
  ImageHeroLogoSection,
  TextSectionBlock,
  CTASectionBlock,
  ImageTextSection,
  CardsGridSection,
  ServiceSection,
  TestimonialsSection,
  RichTextSection,
  GoogleMeetSection,
}
