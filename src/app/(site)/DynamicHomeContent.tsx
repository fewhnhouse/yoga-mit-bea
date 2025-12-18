'use client'

import { SectionRenderer } from '@/components/sections'
import type { ServiceFromQuery, LocationFromQuery } from '@/sanity/types'

interface PageSection {
  _key: string
  _type: string
  [key: string]: unknown
}

interface PageData {
  _id: string
  title: string
  slug: string
  sections?: PageSection[]
}

interface Testimonial {
  _id: string
  name: string
  quote: string
}

interface DynamicHomeContentProps {
  page: PageData
  services: ServiceFromQuery[]
  locations: LocationFromQuery[]
  testimonials: Testimonial[]
}

export default function DynamicHomeContent({
  page,
  services,
  locations,
  testimonials,
}: DynamicHomeContentProps) {
  if (!page.sections || page.sections.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-charcoal-light'>This page has no content yet.</p>
      </div>
    )
  }

  return (
    <SectionRenderer
      sections={page.sections as Parameters<typeof SectionRenderer>[0]['sections']}
      services={services}
      locations={locations}
      testimonials={testimonials}
    />
  )
}

