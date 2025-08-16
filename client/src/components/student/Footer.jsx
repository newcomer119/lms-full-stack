import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-16 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.gcdarklogo} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
          Inspired by the ancient Gurukul system, we provide a holistic approach to exam preparation. Our expert faculty and personalized guidance help students excel in competitive exams like JEE, NEET, and Defense services exams. We're dedicated to shaping future leaders, nurturing their potential, and guiding them on a path to success.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/faculty">Contact us</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
          </ul>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Legal</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2024 ©  All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
