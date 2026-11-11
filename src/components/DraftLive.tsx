'use client'

import { createClient } from 'next-sanity'
import { useRouter } from 'next/navigation'
import { startTransition, useEffect, useEffectEvent, useMemo } from 'react'
import { apiVersion, dataset, projectId } from '@/sanity/config'

// Sync tags of every query rendered on the current page, ref-counted because
// several components can register the same tag.
const pageTags = new Map<string, number>()

/**
 * Registers the cache tags returned by `sanityFetch` so draft edits to the
 * documents behind them refresh the page.
 */
export function LiveTags({ tags }: { tags: string[] }) {
  const key = tags.join(',')
  useEffect(() => {
    const registered = key.split(',').filter(Boolean)
    for (const tag of registered) pageTags.set(tag, (pageTags.get(tag) ?? 0) + 1)
    return () => {
      for (const tag of registered) {
        const count = (pageTags.get(tag) ?? 1) - 1
        if (count > 0) pageTags.set(tag, count)
        else pageTags.delete(tag)
      }
    }
  }, [key])
  return null
}

/**
 * Draft-mode replacement for `<SanityLive />`. The stock component refreshes
 * the page on every draft change in the dataset; this one only refreshes when
 * a change touches a query the current page rendered.
 */
export function DraftLive({ token }: { token: string }) {
  const router = useRouter()
  const client = useMemo(
    () =>
      createClient({
        projectId,
        dataset,
        apiVersion,
        token,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
      }),
    [token]
  )

  const onEvent = useEffectEvent(
    (event: { type: string; tags?: string[] }) => {
      if (event.type === 'restart') {
        startTransition(() => router.refresh())
        return
      }
      if (event.type !== 'message') return
      if (event.tags?.some((tag) => pageTags.has(`sanity:${tag}`))) {
        startTransition(() => router.refresh())
      }
    }
  )

  useEffect(() => {
    const subscription = client.live
      .events({ includeDrafts: true, tag: 'next-loader.live' })
      .subscribe({ next: onEvent, error: (error) => console.error(error) })
    return () => subscription.unsubscribe()
  }, [client])

  return null
}
