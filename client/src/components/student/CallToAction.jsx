import React from 'react'
import { assets } from '../../assets/assets'
import utubeprofile from '../../assets/profile.jpg'

const CallToAction = () => {
  const handleYouTubeClick = () => {
    // Replace with your actual YouTube channel URL
    window.open('https://www.youtube.com/@vivekpandeygurukul', '_blank')
  }

  return (
    <div className='flex flex-col items-center gap-8 pt-10 pb-24 px-8 md:px-0'>
      {/* YouTube Channel Subscription Section */}
      <div className='flex flex-col items-center gap-6 w-full max-w-4xl'>
        {/* YouTube Video Box */}
        <div 
          className='relative w-full max-w-2xl cursor-pointer group'
          onClick={handleYouTubeClick}
        >
          <div className='relative overflow-hidden rounded-lg shadow-lg'>
            
          </div>
        </div>
        
        {/* YouTube Channel Profile Image */}
        <div className='flex flex-col items-center gap-4'>
          <img 
            src={assets.utubeprofile} 
            alt="YouTube Channel Profile" 
            className='w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white'
          />
          <h4 className='text-xl font-bold text-gray-900'>The Gurukul Classes</h4>
          <p className='text-gray-600 text-center max-w-md'>Your trusted partner for JEE, NEET, and competitive exam preparation</p>
        </div>
        
        {/* Subscribe button */}
        <button 
          onClick={handleYouTubeClick}
          className='px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center gap-2'
        >
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
          </svg>
          Subscribe to Channel
        </button>
      </div>
    </div>
  )
}

export default CallToAction