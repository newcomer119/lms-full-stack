import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { urlFor } from '../../../imageUrl'
import { sanityClient } from '../../../sanity'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GallerySlider = () => {
  const [galleryImages, setGalleryImages] = useState([])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

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

  const imageUrls = galleryImages.map(item => urlFor(item.image).width(1200).height(600).url())

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-semibold text-black mb-6 text-center">Gallery</h2>
      <Slider {...settings}>
        {galleryImages.map((item, idx) => (
          <div key={item._id} className="px-2">
            <img
              src={urlFor(item.image).width(1200).height(600).url()}
              alt={`Gallery image ${item.index}`}
              className="rounded-lg w-full h-auto object-cover cursor-zoom-in"
              onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
            />
          </div>
        ))}
      </Slider>
      {lightboxOpen && (
        <Lightbox
          mainSrc={imageUrls[lightboxIndex]}
          onCloseRequest={() => setLightboxOpen(false)}
          nextSrc={imageUrls[(lightboxIndex + 1) % imageUrls.length]}
          prevSrc={imageUrls[(lightboxIndex + imageUrls.length - 1) % imageUrls.length]}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + imageUrls.length - 1) % imageUrls.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % imageUrls.length)}
        />
      )}
    </div>
  )
}

export default GallerySlider
