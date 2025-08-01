import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import NoticeBoard from "./NoticeBoard";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Main Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 md:px-20 pt-24 pb-16 bg-white">
        {/* Top Row: Text Content and Image */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center md:pr-10 z-10 w-full md:w-1/2 mb-8 md:mb-0">
            {/* Badge */}
            <span className="flex items-center bg-yellow-400 text-blue-900 font-semibold px-4 py-1 rounded-full text-xs mb-6 shadow-md ">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2l2.39 4.84L18 7.27l-3.91 3.81L14.78 18 10 15.27 5.22 18l.69-6.92L2 7.27l5.61-.43L10 2z" />
              </svg>
              THE GURUKUL CLASSES
            </span>
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 leading-tight mb-4 text-left max-w-4xl">
              Empowering Futures
              <br />
              <span className="text-orange-400 mt-4">Crack JEE, NEET, NDA</span> with Top
              Faculty
            </h1>
            {/* Description */}
            <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl text-left font-medium">
              Join The Gurukul Classes – the most trusted coaching institute in
              Kaushambi for JEE, NEET, and Defence exams. Learn from 7+ years
              experienced educators. Free demo classes, doubt sessions, and
              personalized mentoring available.
            </p>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-4 justify-start items-start">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-md shadow transition text-lg"
                onClick={() => navigate('/course-list')}
              >
                Courses
              </button>
            </div>
          </div>
          
          {/* Right: Founder Image */}
          <div className="flex-1 flex items-center justify-center w-full md:w-1/2">
            <img
              src="https://i.ibb.co/jZ5fpZpb/teacherimage.jpg"
              alt="Founder and Lead Educator - The Gurukul Classes"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
        
        {/* Bottom Row: Founder's Message */}
        <div className="w-full flex justify-center items-center">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-blue-100 max-w-2xl w-full">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-blue-800 mb-1">Vivek Pandey</h3>
              <p className="text-orange-500 font-semibold text-base">Founder & Lead Educator</p>
            </div>
            <div className="relative">
              <svg className="absolute -top-2 -left-2 w-6 h-6 text-orange-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-gray-700 text-base leading-relaxed italic font-medium text-center">
                "Our mission is to provide the best guidance to students for both academic excellence and career success in competitive fields like IIT, NEET, NDA, and more.<br /><br />
                With dedication and discipline, every student can achieve their goal."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats and Notice Board Section */}
      <div className="w-full bg-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Stats Section */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-6 justify-center items-center">
                <div className="bg-blue-100 rounded-xl px-8 py-8 flex flex-col items-center min-w-[160px] shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
                  <span className="text-orange-500 text-4xl font-bold mb-2">99.2%</span>
                  <span className="text-blue-900 text-base font-semibold text-center">
                    JEE Success Rate
                  </span>
                </div>
                <div className="bg-blue-100 rounded-xl px-8 py-8 flex flex-col items-center min-w-[160px] shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
                  <span className="text-orange-500 text-4xl font-bold mb-2">97.8%</span>
                  <span className="text-blue-900 text-base font-semibold text-center">
                    NEET Success Rate
                  </span>
                </div>
                <div className="bg-blue-100 rounded-xl px-8 py-8 flex flex-col items-center min-w-[160px] shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
                  <span className="text-orange-500 text-4xl font-bold mb-2">15,000+</span>
                  <span className="text-blue-900 text-base font-semibold text-center">
                    Students Enrolled
                  </span>
                </div>
                <div className="bg-blue-100 rounded-xl px-8 py-8 flex flex-col items-center min-w-[160px] shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
                  <span className="text-orange-500 text-4xl font-bold mb-2">500+</span>
                  <span className="text-blue-900 text-base font-semibold text-center">
                    Top 100 Ranks
                  </span>
                </div>
              </div>
            </div>
            
            {/* Notice Board Section */}
            <div className="lg:col-span-1">
              <NoticeBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
