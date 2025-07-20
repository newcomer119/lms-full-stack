import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-24 pb-12 bg-white relative overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-start justify-center md:pr-10 z-10 w-full md:w-1/2">
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
            onClick={() => navigate('/courses')}
          >
            Courses
          </button>
        </div>
      </div>
      {/* Right: Founder Image */}
      <div className="flex-1 flex items-center justify-center w-full md:w-1/2 mt-2 md:mt-0 mb-8 md:mb-0">
        <img
          src="https://i.ibb.co/jZ5fpZpb/teacherimage.jpg"
          alt="Founder and Lead Educator - The Gurukul Classes"
          className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
        />
      </div>
      {/* Stats at the bottom */}
      <div className="w-full flex flex-wrap gap-6 mt-24 justify-center items-center mb-4 md:mb-0 md:absolute md:bottom-8 left-0 px-4 md:px-20">
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">99.2%</span>
          <span className="text-blue-900 text-base mt-1 font-semibold">
            JEE Success Rate
          </span>
        </div>
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">97.8%</span>
          <span className="text-blue-900 text-base mt-1 font-semibold">
            NEET Success Rate
          </span>
        </div>
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">15,000+</span>
          <span className="text-blue-900 text-base mt-1 font-semibold">
            Students Enrolled
          </span>
        </div>
        <div className="bg-blue-100 rounded-lg px-8 py-6 flex flex-col items-center min-w-[140px] shadow">
          <span className="text-yellow-400 text-3xl font-bold">500+</span>
          <span className="text-blue-900 text-base mt-1 font-semibold">
            Top 100 Ranks
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
