import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { SanityLive } from '@/sanity/lib/live'
import { DisableDraftMode } from '@/components/DisableDraftMode'
import { DraftLive } from '@/components/DraftLive'

/**
 * Live content updates and visual editing for the public site. Kept out of the
 * root layout so the embedded Studio doesn't subscribe to live events itself.
 */
export async function LivePreview() {
  const { isEnabled: isDraftMode } = await draftMode()
  const token = process.env.SANITY_VIEWER_TOKEN

  if (!isDraftMode) return <SanityLive />

  return (
    <>
      {token ? <DraftLive token={token} /> : <SanityLive />}
      <VisualEditing />
      <DisableDraftMode />
    </>
  )
}
