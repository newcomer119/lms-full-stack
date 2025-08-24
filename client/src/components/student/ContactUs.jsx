import React from 'react';
import { assets } from '../../assets/assets';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <div className="w-full flex justify-center items-center px-1 md:px-4 py-16 bg-white">
      <Helmet>
        <title>Contact Us - GK Classes | Get in Touch</title>
        <meta name="description" content="Contact GK Classes for any queries about our online courses, test series, or competitive exam preparation. Reach us via phone, email, or visit our center in Prayagraj, India." />
        <meta name="keywords" content="contact GK classes, customer support, online education help, competitive exam queries, GK classes contact information" />
        <meta property="og:title" content="Contact Us - GK Classes | Get in Touch" />
        <meta property="og:description" content="Contact GK Classes for any queries about our online courses, test series, or competitive exam preparation." />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="w-full max-w-6xl bg-white border-2 rounded-lg md:rounded-xl flex flex-col md:flex-row p-0 overflow-hidden" style={{minHeight: '520px'}}>
        {/* Left: Contact Form */}
        <div className="flex-1 p-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">Contact Us</h2>
          <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
          <form className="flex flex-col gap-4 w-full">
            <input type="text" placeholder="Name" className="border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Email" className="border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="tel" placeholder="Phone No." className="border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Your Message..." rows={5} className="border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
            <button type="submit" className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
        {/* Right: Contact Info */}
        <div className="flex-1 p-12 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">Contact Information</h2>
          <div className="h-1 w-32 bg-blue-600 rounded mb-8" />
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl mt-1">📍</span>
              <div>
                <span className="font-semibold">Address</span>
                <p className="text-gray-700 text-sm">Katra & Sarai Akil Kaushambi Prayagraj, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl mt-1">📞</span>
              <div>
                <span className="font-semibold">Customer Support</span>
                <p className="text-gray-700 text-sm">+91-7355740382</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl mt-1">✉️</span>
              <div>
                <span className="font-semibold">Email</span>
                <p className="text-gray-700 text-sm">thegurukulclasses@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <span className="flex items-center font-semibold text-blue-700">FOLLOW US</span>
            <div className="flex gap-5 mt-3">
              <a href="#" aria-label="Facebook" className="hover:scale-110 transition"><img src={assets.facebook_icon} alt="Facebook" className="w-7 h-7" /></a>
              <a href="#" aria-label="Twitter" className="hover:scale-110 transition"><img src={assets.twitter_icon} alt="Twitter" className="w-7 h-7" /></a>
              <a href="#" aria-label="Instagram" className="hover:scale-110 transition"><img src={assets.instagram_icon} alt="Instagram" className="w-7 h-7" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 