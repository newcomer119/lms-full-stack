import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { urlFor } from '../../../imageUrl'
import { sanityClient } from '../../../sanity'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const GallerySlider = () => {
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    const fetchGallery = async () => {
      const data = await sanityClient.fetch(`
        *[_type == "galleryItem"] | order(index asc){
          _id,
          index,
          image
        }
      `)
      setGalleryImages(data)
    }

    fetchGallery()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Gallery</h2>
      <Slider {...settings}>
        {galleryImages.map(item => (
          <div key={item._id} className="px-2">
            <img
              src={urlFor(item.image).width(1200).height(600).url()}
              alt={`Gallery image ${item.index}`}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default GallerySlider
