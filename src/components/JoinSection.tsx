
import React from 'react';
import CaregiverForm from './CaregiverForm';

const JoinSection = () => {
  return (
    <section className="py-12 px-6 md:px-10 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-connectu-blue">Lead The Transformation in Menopause Care</h2>
            <p className="text-gray-600 mb-6">
              You're invited to pioneer a new approach to menopause care—one that places your expertise at the center while
              expanding your capabilities through technology and a trusted network of specialists.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>The ConnectU Promise:</strong> Our 80-20 platform provides you with comprehensive tools and insights 
              while ensuring you maintain 100% control over all clinical decisions that define your unique practice.
            </p>
            <p className="text-gray-600 mb-6">
              After submitting your details, a ConnectU expert will guide you through personalizing the platform 
              to complement your specific approach to care, ensuring it enhances—never replaces—your expertise.
            </p>
            <div className="bg-connectu-cream p-4 rounded-lg border-l-4 border-connectu-blue">
              <p className="text-gray-700 italic">
                "ConnectU has transformed how I deliver care. I can now offer a more comprehensive approach while maintaining
                complete control over all treatment decisions. My patients have never been more satisfied."
              </p>
              <p className="text-connectu-blue font-semibold mt-2">— Dr. Sarah Johnson, Nutritionist</p>
            </div>
          </div>
          <div>
            <CaregiverForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
