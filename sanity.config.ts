import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './src/sanity/schemas'
import { structure } from './src/sanity/lib/structure'

export default defineConfig({
  name: 'yoga-und-therapie-mit-bea',
  title: 'Yoga & Psychotherapie mit Bea',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: {
        initial: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  // The project is on the Free plan, which doesn't include these features.
  // Hide them instead of showing tools that fail or prompt for an upgrade.
  releases: { enabled: false },
  scheduledDrafts: { enabled: false },
  scheduledPublishing: { enabled: false },
  tasks: { enabled: false },
  document: {
    comments: { enabled: false },
  },
})
