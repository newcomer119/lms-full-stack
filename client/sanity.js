// frontend/sanityClient.js
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'gva0pbxf',        // 👈 same as in sanity.cli.ts
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-07-17',     // 👈 today’s date or a fixed version
})
