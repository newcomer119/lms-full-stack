import React from 'react';
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
