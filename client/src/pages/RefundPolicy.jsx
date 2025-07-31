import React from 'react';
import Footer from '../components/student/Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">1. Overview</h2>
            <p className="text-gray-700 mb-4">
              At The Gurukul Classes, we are committed to providing high-quality educational services. This refund policy outlines the terms and conditions under which refunds may be provided for our courses, test series, and other educational products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. General Refund Terms</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-medium text-blue-600 mb-3">Important Notes:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>All refund requests must be submitted within the specified timeframes</li>
                <li>Refunds are processed through the original payment method (PhonePe)</li>
                <li>Processing time may take 5-10 business days</li>
                <li>Refund amounts are subject to deduction of applicable charges</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">3. Course Refund Policy</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-blue-600 mb-3">Live Courses:</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 mb-2">100% Refund Available:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Before the course start date</li>
                  <li>Within 7 days of course commencement (if not satisfied)</li>
                  <li>If course is cancelled by The Gurukul Classes</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Partial Refund (50%):</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Between 8-15 days of course commencement</li>
                  <li>Valid reason required (medical emergency, technical issues)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">No Refund:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>After 15 days of course commencement</li>
                  <li>If more than 30% of course content has been accessed</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-blue-600 mb-3">Recorded Courses:</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 mb-2">100% Refund Available:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Within 7 days of purchase</li>
                  <li>If less than 20% of content has been accessed</li>
                  <li>Technical issues preventing access</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">No Refund:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>After 7 days of purchase</li>
                  <li>If more than 20% of content has been accessed</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">4. Test Series Refund Policy</h2>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-800 mb-2">100% Refund Available:</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Before attempting any test</li>
                <li>Within 3 days of purchase (if no tests attempted)</li>
                <li>Technical issues preventing test access</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Partial Refund (50%):</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>If less than 25% of tests have been attempted</li>
                <li>Within 7 days of purchase</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">No Refund:</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>If more than 25% of tests have been attempted</li>
                <li>After 7 days of purchase</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">5. PhonePe Payment Gateway Refunds</h2>
            <p className="text-gray-700 mb-4">
              All payments are processed securely through PhonePe payment gateway. Refunds are processed as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Processing Time:</strong> 5-10 business days</li>
              <li><strong>Refund Method:</strong> Original payment method (PhonePe wallet/UPI/Bank account)</li>
              <li><strong>Transaction Charges:</strong> PhonePe may deduct processing fees (typically 1-2%)</li>
              <li><strong>Failed Transactions:</strong> Automatically refunded within 3-5 business days</li>
              <li><strong>Duplicate Payments:</strong> Full refund of duplicate amounts</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Note:</strong> For PhonePe-specific refund queries, you can also contact PhonePe support at{' '}
                <a href="https://phonepe.com/support" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  phonepe.com/support
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">6. How to Request a Refund</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-blue-600 mb-3">Step-by-Step Process:</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li><strong>Contact Support:</strong> Email us at refunds@gurukulclasses.com with your request</li>
                <li><strong>Provide Details:</strong> Include your order ID, course/test name, and reason for refund</li>
                <li><strong>Review Process:</strong> Our team will review your request within 2-3 business days</li>
                <li><strong>Approval:</strong> If approved, refund will be processed through PhonePe</li>
                <li><strong>Confirmation:</strong> You'll receive email confirmation with refund details</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">7. Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">The following items are non-refundable:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Free trial periods</li>
              <li>Downloadable study materials</li>
              <li>One-time consultation sessions</li>
              <li>Certificates and completion documents</li>
              <li>Processing fees and transaction charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">8. Special Circumstances</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Medical Emergencies:</h3>
              <p className="text-gray-700 mb-2">
                Full refunds may be provided for medical emergencies with proper documentation.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Technical Issues:</h3>
              <p className="text-gray-700 mb-2">
                Refunds for technical issues will be evaluated on a case-by-case basis.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium text-blue-600 mb-2">Course Cancellation:</h3>
              <p className="text-gray-700 mb-2">
                If we cancel a course, full refunds will be provided to all enrolled students.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">9. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              If you disagree with a refund decision, you may:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Request a review by our management team</li>
              <li>Provide additional documentation or evidence</li>
              <li>Contact our customer support for mediation</li>
              <li>Escalate to relevant consumer protection authorities if necessary</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">10. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                For refund-related queries, please contact us at:<br />
                <strong>Email:</strong> refunds@gurukulclasses.com<br />
                <strong>Phone:</strong> +91-XXXXXXXXXX<br />
                <strong>Response Time:</strong> Within 24-48 hours<br />
                <strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">11. Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              This refund policy may be updated from time to time. Any changes will be posted on this page with an updated "Last updated" date. Continued use of our services after policy changes constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy; 