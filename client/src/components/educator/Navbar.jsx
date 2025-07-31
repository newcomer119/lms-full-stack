import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {

  const { isEducator } = useContext(AppContext)
  const { user } = useUser()
  const [menuOpen, setMenuOpen] = useState(false);

  return isEducator && user && (
    <div className={`flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3 ${bgColor} relative`}>
      {/* Logo Left */}
      <Link to="/">
        <img src={assets.gclogo} alt="Logo" className="w-28 lg:w-32 z-20" />
      </Link>
      {/* Hamburger for mobile */}
      <div className="flex items-center md:hidden z-20">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <div className="ml-2">
          <UserButton />
        </div>
      </div>
      {/* Centered Nav Links (desktop only) */}
      <div className="flex-1 flex justify-center max-md:hidden">
        <div className="flex items-center gap-8 text-gray-500">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/course-list">Courses</Link>
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
      {/* Right Section (desktop only) */}
      <div className="max-md:hidden flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user.fullName}</p>
        <UserButton />
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-10" onClick={() => setMenuOpen(false)}></div>
      )}
      {/* Mobile Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div className="flex flex-col items-center gap-6 mt-20 text-gray-700 text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/course-list" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/test-series" onClick={() => setMenuOpen(false)}>Test Series</Link>
          <button onClick={() => {
            setMenuOpen(false);
            if (window.location.pathname === '/') {
              const el = document.getElementById('contact-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#contact-us';
            }
          }}>Contact Us</button>
          <p>Hi! {user.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;