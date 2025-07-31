import React from 'react';
import Footer from '../components/student/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using The Gurukul Classes platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              The Gurukul Classes provides online educational services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Live and recorded courses for JEE, NEET, and Defence exams</li>
              <li>Online test series and practice exams</li>
              <li>Study materials and resources</li>
              <li>Doubt resolution and mentoring services</li>
              <li>Progress tracking and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. User Registration and Accounts</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Account Creation:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You must provide accurate, current, and complete information during registration</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must be at least 13 years old to create an account</li>
                <li>One account per person is allowed</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Account Responsibilities:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You are responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Do not share your account credentials with others</li>
                <li>Keep your contact information updated</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Payment Terms and PhonePe Integration</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Payment Processing:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All payments are processed securely through PhonePe payment gateway</li>
                <li>Payment methods include UPI, credit/debit cards, net banking, and PhonePe wallet</li>
                <li>Prices are displayed in Indian Rupees (INR) and are inclusive of applicable taxes</li>
                <li>Payment confirmation will be sent via email and SMS</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">PhonePe Terms:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>By using PhonePe, you agree to their terms of service and privacy policy</li>
                <li>PhonePe may charge additional transaction fees as per their policy</li>
                <li>Failed transactions will be automatically refunded within 3-5 business days</li>
                <li>For payment disputes, contact both The Gurukul Classes and PhonePe support</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Subscription and Billing:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Course access is granted upon successful payment confirmation</li>
                <li>Access duration is as specified in the course description</li>
                <li>Automatic renewals may apply for subscription-based services</li>
                <li>You can cancel subscriptions through your account settings</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. Course Access and Usage</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Access Rights:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Course access is personal and non-transferable</li>
                <li>You may access courses on multiple devices but not simultaneously</li>
                <li>Downloading course content for offline use is not permitted</li>
                <li>Sharing course access with others is strictly prohibited</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Usage Restrictions:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Do not record, copy, or distribute course content</li>
                <li>Do not attempt to reverse engineer or hack the platform</li>
                <li>Do not use automated tools to access the service</li>
                <li>Respect intellectual property rights of content creators</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">6. User Conduct and Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Upload malicious content or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Use the service for commercial purposes without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">7. Intellectual Property Rights</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Our Rights:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All content on the platform is owned by The Gurukul Classes or licensed to us</li>
                <li>Course materials, videos, and resources are protected by copyright</li>
                <li>Our trademarks and branding are our exclusive property</li>
                <li>You may not use our content for commercial purposes</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Your Rights:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You retain ownership of content you create and submit</li>
                <li>You grant us license to use your content for service improvement</li>
                <li>You can request removal of your personal content</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">8. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using our service, you consent to our collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">9. Disclaimers and Limitations</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Service Availability:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service</li>
                <li>We may temporarily suspend service for maintenance or updates</li>
                <li>We are not responsible for internet connectivity issues</li>
                <li>Course content may be updated or modified without notice</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Educational Disclaimer:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We do not guarantee specific exam results or scores</li>
                <li>Success depends on individual effort and preparation</li>
                <li>Course content is for educational purposes only</li>
                <li>We are not responsible for exam schedule changes or cancellations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">10. Termination and Suspension</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Account Termination:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You may terminate your account at any time</li>
                <li>We may terminate accounts for violation of these terms</li>
                <li>Upon termination, access to paid content will cease</li>
                <li>Refunds will be processed according to our Refund Policy</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Service Suspension:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We may suspend accounts for investigation of violations</li>
                <li>Repeated violations may result in permanent termination</li>
                <li>We will provide notice of suspension when possible</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">11. Dispute Resolution</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Governing Law:</h3>
              <p className="text-gray-700 mb-4">
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in [Your City], India.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Dispute Process:</h3>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>Contact our customer support first</li>
                <li>If unresolved, escalate to management</li>
                <li>Consider mediation for complex disputes</li>
                <li>Legal action as a last resort</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes constitutes acceptance of the new terms. We will notify users of significant changes via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">13. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                For questions about these Terms & Conditions, please contact us at:<br />
                <strong>Email:</strong> legal@gurukulclasses.com<br />
                <strong>Phone:</strong> +91-XXXXXXXXXX<br />
                <strong>Address:</strong> [Your Business Address]<br />
                <strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">14. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these terms will otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">15. Entire Agreement</h2>
            <p className="text-gray-700 mb-4">
              These terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and The Gurukul Classes regarding the use of our service.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions; 