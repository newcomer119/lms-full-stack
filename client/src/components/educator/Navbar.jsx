import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {

  const { isEducator } = useContext(AppContext)
  const { user } = useUser()

  return isEducator && user && (
    <div className={`flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3 ${bgColor}`}>
      {/* Logo Left */}
      <Link to="/">
        <img src={assets.fileicon} alt="Logo" className="w-28 lg:w-32" />
      </Link>
      {/* Centered Nav Links */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-8 text-gray-500">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/test-series">Test Series</Link>
          <button onClick={() => {
            if (window.location.pathname === '/') {
              const el = document.getElementById('contact-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#contact-us';
            }
          }}>Contact Us</button>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user.fullName}</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;