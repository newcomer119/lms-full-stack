// frontend/imageUrl.js
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}
