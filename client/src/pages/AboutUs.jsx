import React from 'react';
import Footer from '../components/student/Footer';
import Gallery from '../components/student/GallerySlider';
import { assets } from '../assets/assets';

const faculty = [
  { name: 'Mr. Vivek Pandey', subject: 'Physics', experience: '7+ Years' },
  { name: 'Mr. Shashi Yadav', subject: 'English', experience: '7+ Years' },
  { name: 'Mr. Ashwani Singh', subject: 'Mathematics', experience: '5+ Years' },
  { name: 'Mr. Divyansh Singh', subject: 'Chemistry', experience: '4+ Years' },
  { name: 'Mr. Tamjeed', subject: 'Chemistry', experience: '6 Years' },
  { name: 'Mr. Nandan', subject: 'Biology', experience: '5 Years' },
  { name: 'Mr. Arpit', subject: 'Hindi', experience: '4 Years' },
];

const AboutUs = () => (
  <div className="bg-blue-50 min-h-screen flex flex-col">
    <main className="flex flex-col items-center w-full flex-1 px-2 md:px-0 py-10">
      <div className="w-full max-w-7xl min-h-[80vh] bg-white rounded-2xl shadow p-6 md:p-16 flex flex-col gap-10">
        {/* About Us Section */}
        <section>
          <div className="flex flex-col items-center">
            <img src={assets.gclogo} alt="The Gurukul Classes Logo" className="w-28 mb-4" />
            <h1 className="text-3xl font-bold mb-2 text-blue-700 text-center">Welcome to The Gurukul Classes</h1>
            <p className="mb-2 text-center">At The Gurukul Classes, we are committed to nurturing academic excellence, building strong foundations, and shaping future leaders. Founded with a vision to provide the best educational guidance, we cater to students aiming for academic brilliance and success in competitive examinations like IIT-JEE, NEET, NDA, and more.</p>
          </div>
        </section>

        {/* Founder Message */}
        <section>
          <div className="max-w-3xl mx-auto bg-blue-100 rounded-lg shadow p-6 flex flex-col items-center border-l-4 border-blue-600">
            <div className="text-2xl mb-2">🧑‍🏫</div>
            <blockquote className="italic text-lg text-gray-800 text-center">“Our mission is to provide the best guidance to students for both academic excellence and career success in competitive fields like IIT, NEET, NDA, and more. With dedication and discipline, every student can achieve their goal.”</blockquote>
            <div className="mt-4 text-right w-full">
              <span className="font-bold text-blue-700">— Vivek Pandey,</span><br/>
              <span className="text-gray-700">Founder & Director, The Gurukul Classes</span>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col items-center">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-blue-600 mb-2">Academic Classes (School Level)</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>Class 9 – All Subjects</li>
                <li>Class 10 – All Subjects</li>
                <li>Class 11 (Science) – Physics, Chemistry, Maths, Biology</li>
                <li>Class 12 (Science) – Physics, Chemistry, Maths, Biology</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col items-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-blue-600 mb-2">Defence Entrance Coaching</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>NDA (National Defence Academy)</li>
                <li>CDS (Combined Defence Services)</li>
                <li>Agniveer (Army, Airforce, Navy)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col items-center">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-blue-600 mb-2">Competitive Exam Preparation</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>IIT-JEE (Main + Advanced)</li>
                <li>NEET (UG – Medical Entrance)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Expert Faculty</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-blue-100 rounded-lg">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-2 px-4 font-semibold text-blue-700">Teacher Name</th>
                  <th className="py-2 px-4 font-semibold text-blue-700">Subject</th>
                  <th className="py-2 px-4 font-semibold text-blue-700">Experience</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((t, i) => (
                  <tr key={i} className="border-t border-blue-50">
                    <td className="py-2 px-4">{t.name}</td>
                    <td className="py-2 px-4">{t.subject}</td>
                    <td className="py-2 px-4">{t.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Locations Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col">
              <div className="flex items-center mb-2"><span className="text-xl mr-2">📍</span><span className="font-semibold">Main Branch – Sarai Akil</span></div>
              <p className="text-gray-700 text-sm ml-6">Near Post Office, Sarai Akil, Kaushambi, UP</p>
              <p className="text-gray-700 text-sm ml-6">📞 Contact: +91-991111111</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col">
              <div className="flex items-center mb-2"><span className="text-xl mr-2">📍</span><span className="font-semibold">Branch – Katra</span></div>
              <p className="text-gray-700 text-sm ml-6">Katra Basuhar Road, Kaushambi, UP</p>
              <p className="text-gray-700 text-sm ml-6">📞 Contact: +91-991111111</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="list-none grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔️</span>Admissions Open</li>
            <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔️</span>Free Demo Classes</li>
            <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔️</span>Personalized Doubt Sessions</li>
            <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔️</span>Dedicated Faculty Team</li>
            <li className="flex items-center"><span className="text-green-500 text-xl mr-2">✔️</span>Focus on Concept Clarity & Exam Strategy</li>
          </ul>
        </section>

        {/* Gallery Section */}
        <section>
          <Gallery />
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutUs; 