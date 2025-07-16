import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const socialIcons = [
  assets.facebook_icon,
  assets.twitter_icon,
  assets.instagram_icon
];

const Faculty = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">Our Faculty</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Meet our dedicated faculty and team who are committed to your success.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-left border border-gray-500/30 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden flex flex-col items-center px-6 py-8"
          >
            <img className="h-24 w-24 rounded object-cover mb-4" src={testimonial.image} alt={testimonial.name} />
            <h1 className="text-lg font-bold text-gray-800 uppercase mb-1">{testimonial.name}</h1>
            <p className="text-sm font-semibold mb-2" style={{ color: '#b2b300' }}>{testimonial.role}</p>
            <p className="text-gray-500 text-sm mb-4 text-center">Glavi amet rintsi libero molestie ante ut fringilla purus eros quis glavr id from dolor amet iquam lorem bibendum</p>
            <div className="flex gap-4 mt-auto">
              {socialIcons.map((icon, i) => (
                <a href="#" key={i}>
                  <img src={icon} alt="social" className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty; 