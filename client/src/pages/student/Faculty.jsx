import React from 'react';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';

const socialIcons = [
  assets.facebook_icon,
  assets.twitter_icon,
  assets.instagram_icon
];

const facultyData = [
  {
    name: 'Mr. Vivek Pandey',
    role: 'Physics Teacher (7+ Years Experience)',
    image: assets.teacher3,
    subject: 'Physics',
    experience: '7+ Years',
    description: 'Specializes in Mechanics, Thermodynamics, and Modern Physics. Known for making complex concepts simple and building strong fundamentals.'
  },
  {
    name: 'Mr. Shashi Yadav',
    role: 'English Teacher (7+ Years Experience)',
    image: 'https://via.placeholder.com/300x300/059669/FFFFFF?text=Shashi+Yadav',
    subject: 'English',
    experience: '7+ Years',
    description: 'Expert in Grammar, Literature, and Communication Skills. Focuses on building confidence in English speaking and writing.'
  },
  {
    name: 'Mr. Ashwani Singh',
    role: 'Mathematics Teacher (5+ Years Experience)',
    image: assets.teacher1,
    subject: 'Mathematics',
    experience: '5+ Years',
    description: 'Specializes in Algebra, Calculus, and Trigonometry. Known for clear explanations and making mathematics approachable.'
  },
  {
    name: 'Mr. Divyansh Singh',
    role: 'Chemistry Teacher (4+ Years Experience)',
    image: assets.teacher2,
    subject: 'Chemistry',
    experience: '4+ Years',
    description: 'Expert in Organic Chemistry and Physical Chemistry. Uses real-world examples to make chemistry engaging and understandable.'
  },
  {
    name: 'Mr. Tamjeed',
    role: 'Chemistry Teacher (6 Years Experience)',
    image: 'https://via.placeholder.com/300x300/DC2626/FFFFFF?text=Tamjeed',
    subject: 'Chemistry',
    experience: '6 Years',
    description: 'Specializes in Inorganic Chemistry and Chemical Bonding. Result-oriented teacher with proven track record.'
  },
  {
    name: 'Mr. Nandan',
    role: 'Biology Teacher (5 Years Experience)',
    image: 'https://via.placeholder.com/300x300/16A34A/FFFFFF?text=Nandan',
    subject: 'Biology',
    experience: '5 Years',
    description: 'Expert in Botany and Zoology. Brings biology to life with practical examples and clear concept explanations.'
  },
  {
    name: 'Mr. Arpit',
    role: 'Hindi Teacher (4 Years Experience)',
    image: 'https://via.placeholder.com/300x300/EA580C/FFFFFF?text=Arpit',
    subject: 'Hindi',
    experience: '4 Years',
    description: 'Specializes in Hindi Literature and Grammar. Dedicated to building strong command over Hindi language and culture.'
  },
];

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="py-20 px-8 md:px-20">
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
            {facultyData.map((teacher, index) => (
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
                        src={teacher.image} 
                        alt={teacher.name} 
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
                    {teacher.name}
                  </h3>
                  <p className="text-sm font-semibold text-center mb-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full inline-block w-full">
                    {teacher.role}
                  </p>
                  <p className="text-gray-600 text-center leading-relaxed mb-6">
                    {teacher.description}
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
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Faculty; 