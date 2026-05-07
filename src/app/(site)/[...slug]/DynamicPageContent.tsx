'use client'

import { SectionRenderer } from '@/components/sections'

interface PageSection {
  _key: string
  _type: string
  [key: string]: unknown
}

interface PageData {
  _id: string
  title: string
  slug: string
  sections?: PageSection[] | null
}

interface Testimonial {
  _id: string
  name: string
  quote: string
}

interface DynamicPageContentProps {
  page: PageData
  testimonials: Testimonial[]
}

export default function DynamicPageContent({
  page,
  testimonials,
}: DynamicPageContentProps) {
  const documentTitle =
    typeof page.title === 'string' && page.title.trim() !== ''
      ? page.title.trim()
      : 'Seite'

  if (!page.sections || page.sections.length === 0) {
    return (
      <>
        <h1 className='sr-only'>{documentTitle}</h1>
        <div className='min-h-screen flex items-center justify-center'>
          <p className='text-charcoal-light'>This page has no content yet.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className='sr-only'>{documentTitle}</h1>
      <SectionRenderer
        sections={page.sections as Parameters<typeof SectionRenderer>[0]['sections']}
        testimonials={testimonials}
        pageUsesSanityDocumentTitleAsH1
      />
    </>
  )
}

