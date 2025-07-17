import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {

  const location = useLocation();

  const isCoursesListPage = location.pathname.includes('/course-list');

  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext)

  const { openSignIn } = useClerk()
  const { user } = useUser()

  const becomeEducator = async () => {

    try {

      if (isEducator) {
        navigate('/educator')
        return;
      }

      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        toast.success(data.message)
        setIsEducator(true)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={"flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-white"}>
      {/* Logo Left */}
      <img onClick={() => navigate('/')} src={assets.fileicon} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
      {/* Centered Nav Links */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-8 text-gray-500">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/test-series">Test Series</Link>
          <button onClick={() => {
            if (location.pathname === '/') {
              const el = document.getElementById('contact-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/');
              setTimeout(() => {
                const el = document.getElementById('contact-us');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }
          }}>Contact Us</button>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex items-center gap-5 text-gray-500">
        {user && isEducator && (
          <button onClick={() => navigate('/educator')}>Educator Dashboard</button>
        )}
        {user && <>
          {isEducator && ' | '}<Link to='/my-enrollments' >My Enrollments</Link>
        </>}
        {user
          ? <UserButton />
          : <button onClick={() => openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Login
          </button>}
      </div>
      {/* For Phone Screens */}
      <div className='md:hidden flex-1 flex justify-center items-center gap-2 sm:gap-5 text-gray-500'>
        <div className="flex items-center gap-2 sm:gap-4 max-sm:text-xs">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/test-series">Test Series</Link>
          <button onClick={() => {
            if (location.pathname === '/') {
              const el = document.getElementById('contact-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/');
              setTimeout(() => {
                const el = document.getElementById('contact-us');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }
          }}>Contact Us</button>
        </div>
      </div>
      <div className='md:hidden flex items-center gap-2'>
        {user && isEducator && <button onClick={() => navigate('/educator')}>Educator Dashboard</button>}
        {user && isEducator && ' | '}
        {user && <Link to='/my-enrollments' >My Enrollments</Link>}
        {user
          ? <UserButton />
          : <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>}
      </div>
    </div>
  );
};

export default Navbar;