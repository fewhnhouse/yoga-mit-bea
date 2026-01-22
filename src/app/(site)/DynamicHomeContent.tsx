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
  slug?: string | null
  sections?: PageSection[] | null
}

interface DynamicHomeContentProps {
  page: PageData
  testimonials?: unknown[]
}

export default function DynamicHomeContent({
  page,
  testimonials = [],
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
      testimonials={testimonials as Parameters<typeof SectionRenderer>[0]['testimonials']}
    />
  )
}

