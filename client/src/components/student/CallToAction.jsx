import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  const handleYouTubeClick = () => {
    // Replace with your actual YouTube channel URL
    window.open('https://www.youtube.com/@yourchannel', '_blank')
  }

  return (
    <div className='flex flex-col items-center gap-8 pt-10 pb-24 px-8 md:px-0'>
      {/* Original CTA Section */}
      <div className='flex flex-col items-center gap-4'>
        <h1 className='md:text-4xl text-xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
        <p className='text-gray-500 sm:text-sm'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
        <div className='flex items-center font-medium gap-6 mt-4'>
          <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
          <button className='flex items-center gap-2'>
            Learn more
            <img src={assets.arrow_icon} alt="arrow_icon" />
          </button>
        </div>
      </div>

      {/* YouTube Channel Subscription Section */}
      <div className='flex flex-col items-center gap-6 w-full max-w-4xl'>
        <div className='text-center'>
          <h2 className='md:text-3xl text-xl text-gray-800 font-semibold mb-3'>Subscribe to Our YouTube Channel</h2>
          <p className='text-gray-600 text-sm md:text-base'>Watch videos to crack competitive exams and enhance your learning</p>
        </div>
        
        {/* YouTube Video Box */}
        <div 
          className='relative w-full max-w-2xl cursor-pointer group'
          onClick={handleYouTubeClick}
        >
          <div className='relative overflow-hidden rounded-lg shadow-lg'>
            {/* Placeholder for YouTube thumbnail - replace with actual thumbnail */}
            <div className='w-full h-64 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center'>
              <div className='text-white text-center'>
                <div className='text-6xl mb-4'>▶️</div>
                <p className='text-lg font-semibold'>Watch Our Latest Videos</p>
                <p className='text-sm opacity-90'>Click to visit our YouTube channel</p>
              </div>
            </div>
            
            {/* Play button overlay */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all duration-300'>
                <svg className='w-12 h-12 text-red-600' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>
            
            {/* YouTube logo */}
            <div className='absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
              YouTube
            </div>
          </div>
          
          {/* Video description */}
          <div className='mt-4 text-center'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Competitive Exam Preparation</h3>
            <p className='text-gray-600 text-sm'>Get expert tips, strategies, and solutions for JEE, NEET, and other competitive exams</p>
          </div>
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