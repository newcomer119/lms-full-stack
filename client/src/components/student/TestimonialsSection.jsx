import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const socialIcons = [
  assets.facebook_icon,
  assets.twitter_icon,
  assets.instagram_icon
];

const TestimonialsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 px-8 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Faculty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated faculty and team who are committed to your success.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyTestimonial.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Profile Image Section */}
              <div className="relative p-8 pb-4">
                <div className="relative mx-auto">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                    <img 
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 pb-8">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2 uppercase tracking-wide">
                  {testimonial.name}
                </h3>
                <p className="text-sm font-semibold text-center mb-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full inline-block w-full">
                  {testimonial.role}
                </p>
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  Glavi amet rintsi libero molestie ante ut fringilla purus eros quis glavr id from dolor amet iquam lorem bibendum
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  {socialIcons.map((icon, i) => (
                    <a 
                      href="#" 
                      key={i}
                      className="w-10 h-10 bg-gray-100 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    >
                      <img 
                        src={icon} 
                        alt="social" 
                        className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/faculty')} 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            See All Faculty
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
