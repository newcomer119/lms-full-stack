import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/student/Footer';

const DataPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - GK Classes | Data Protection & Privacy</title>
        <meta name="description" content="Read GK Classes privacy policy to understand how we collect, use, and protect your personal information. Learn about data security, payment processing, and your privacy rights." />
        <meta name="keywords" content="privacy policy, data protection, GK classes privacy, personal information security, online education privacy" />
        <meta property="og:title" content="Privacy Policy - GK Classes | Data Protection & Privacy" />
        <meta property="og:description" content="Read GK Classes privacy policy to understand how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://yourdomain.com/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              The Gurukul Classes ("we," "our," or "us") collects information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Create an account or register for our services</li>
              <li>Enroll in courses or purchase test series</li>
              <li>Make payments through our platform</li>
              <li>Contact us for support or inquiries</li>
              <li>Participate in our educational programs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Types of Information Collected</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Personal Information:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name, email address, phone number</li>
                <li>Educational background and preferences</li>
                <li>Payment information (processed securely through PhonePe)</li>
                <li>Profile pictures and biographical information</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Usage Information:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Course progress and completion data</li>
                <li>Test results and performance analytics</li>
                <li>Device information and IP addresses</li>
                <li>Browsing patterns and preferences</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide and maintain our educational services</li>
              <li>Process payments and manage subscriptions</li>
              <li>Personalize your learning experience</li>
              <li>Track your progress and provide feedback</li>
              <li>Send important updates and notifications</li>
              <li>Improve our platform and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Payment Processing and PhonePe</h2>
            <p className="text-gray-700 mb-4">
              We use PhonePe as our payment gateway to process your payments securely. When you make a payment:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Payment information is encrypted and processed by PhonePe</li>
              <li>We do not store your complete payment card details</li>
              <li>PhonePe may collect additional information as per their privacy policy</li>
              <li>We receive confirmation of successful payments only</li>
              <li>All transactions are secured using industry-standard encryption</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For more information about PhonePe's privacy practices, please visit their privacy policy at{' '}
              <a href="https://phonepe.com/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                phonepe.com/privacy-policy
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. Information Sharing</h2>
            <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>With your explicit consent</li>
              <li>With service providers who assist in our operations (e.g., PhonePe for payments)</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure payment processing through PhonePe</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>The Gurukul Classes</strong><br />
                Email: privacy@gurukulclasses.com<br />
                Phone: +91-XXXXXXXXXX<br />
                Address: [Your Business Address]
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataPolicy; 