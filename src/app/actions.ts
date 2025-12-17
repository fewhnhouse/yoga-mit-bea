'use server'

import { draftMode } from 'next/headers'

export async function disableDraftMode() {
  const disable = (await draftMode()).disable()
  // Add a delay to ensure a loading state is shown
  const delay = new Promise((resolve) => setTimeout(resolve, 1000))

  await Promise.allSettled([disable, delay])
}

