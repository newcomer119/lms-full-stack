import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/student/Footer';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import ContactUs from '../../components/student/ContactUs';
import GallerySlider from '../../components/student/GallerySlider';

const Home = () => {

  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Helmet>
        <title>GK Classes - Home | Best Online Learning Platform</title>
        <meta name="description" content="Welcome to GK Classes - Your premier destination for online learning. Discover expert-led courses, comprehensive test series, and prepare for competitive exams with confidence." />
        <meta name="keywords" content="GK classes home, online learning platform, competitive exam preparation, test series, online courses" />
        <meta property="og:title" content="GK Classes - Home | Best Online Learning Platform" />
        <meta property="og:description" content="Welcome to GK Classes - Your premier destination for online learning. Discover expert-led courses and comprehensive test series." />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <CoursesSection />
      <TestimonialsSection />
      <GallerySlider />
      <div id="contact-us">
        <ContactUs />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
