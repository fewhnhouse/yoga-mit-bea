import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/live'
import {
  pageWithSectionsDataQuery,
  allPageSlugsQuery,
} from '@/sanity/lib/queries'
import { getSiteId } from '@/lib/getSiteId'
import DynamicPageContent from './DynamicPageContent'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

// Generate static params for all pages
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: allPageSlugsQuery,
    perspective: 'published',
    stega: false,
  })

  if (!data) return []

  return data.map((page: { slug: string }) => ({
    slug: page.slug.split('/'),
  }))
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug.join('/')

  const siteId = await getSiteId()

  const { data } = await sanityFetch({
    query: pageWithSectionsDataQuery,
    params: { slug, siteId },
  })

  if (!data?.page) {
    return {
      title: 'Page Not Found',
    }
  }

  const page = data.page

  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription,
    openGraph: page.ogImageUrl
      ? {
          images: [{ url: page.ogImageUrl }],
        }
      : undefined,
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug.join('/')

  const siteId = await getSiteId()

  const { data } = await sanityFetch({
    query: pageWithSectionsDataQuery,
    params: { slug, siteId },
  })

  if (!data?.page) {
    return notFound()
  }

  return (
    <DynamicPageContent
      page={data.page}
      services={data.services || []}
      locations={data.locations || []}
      testimonials={data.testimonials || []}
    />
  )
}
