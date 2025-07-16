import React from 'react';
import { assets } from '../../assets/assets';

const Hero = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-24 pb-12 bg-white relative overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-start justify-center md:pr-10 z-10 w-full md:w-1/2">
        {/* Badge */}
        <span className="flex items-center bg-yellow-400 text-blue-900 font-semibold px-4 py-1 rounded-full text-xs mb-6 shadow-md mt-8">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.84L18 7.27l-3.91 3.81L14.78 18 10 15.27 5.22 18l.69-6.92L2 7.27l5.61-.43L10 2z" /></svg>
          INDIA'S #1 JEE & NEET COACHING
        </span>
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-4 text-left max-w-4xl">
          Crack <span className="text-yellow-400">JEE & NEET</span><br />With Confidence
        </h1>
        {/* Description */}
        <p className="text-xl md:text-2xl text-blue-700 mb-8 max-w-2xl text-left font-medium">
          Join India's most trusted coaching institute with proven track record of producing top rankers in JEE Main, JEE Advanced, and NEET examinations. Expert faculty, comprehensive study material, and personalized mentoring.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 justify-start items-start">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-md shadow transition text-lg">START FREE TRIAL</button>
          <button className="border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-md shadow transition hover:bg-yellow-400 hover:text-blue-900 text-lg">VIEW RESULTS</button>
        </div>
      </div>
      {/* Right: Video Card */}
      <div className="flex-1 flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0 mb-8 md:mb-0">
        <div className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-6 w-full max-w-md flex flex-col items-center">
          <div className="relative w-full h-40 md:h-56 rounded-xl overflow-hidden flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" alt="Success Story" className="w-full h-full object-cover opacity-90" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-full p-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </button>
            <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Watch Success Stories</span>
          </div>
          <div className="mt-3 text-center">
            <span className="text-blue-900 font-bold text-base md:text-lg">From Dreams to IIT/AIIMS</span>
            <p className="text-blue-700 text-xs md:text-sm mt-1">Watch how our students achieved their goals with expert guidance</p>
          </div>
        </div>
      </div>
      {/* Stats at the bottom */}
      <div className="w-full flex flex-wrap gap-6 mt-24 justify-center items-center mb-4 md:mb-0 md:absolute md:bottom-8 left-0 px-4 md:px-20">
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">99.2%</span>
          <span className="text-blue-900 text-base mt-2 font-semibold">JEE Success Rate</span>
        </div>
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">97.8%</span>
          <span className="text-blue-900 text-base mt-2 font-semibold">NEET Success Rate</span>
        </div>
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">15,000+</span>
          <span className="text-blue-900 text-base mt-2 font-semibold">Students Enrolled</span>
        </div>
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">500+</span>
          <span className="text-blue-900 text-base mt-2 font-semibold">Top 100 Ranks</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
