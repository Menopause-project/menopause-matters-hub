
import React from 'react';
import CaregiverForm from './CaregiverForm';

const JoinSection = () => {
  return (
    <section id="join-form" className="py-12 px-6 md:px-10 mb-16 bg-gradient-to-br from-connectu-purple/10 to-connectu-beige rounded-lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-connectu-purple">Why Now? Lead The Transformation in Menopause Care</h2>
            <p className="text-gray-600 mb-6">
              The current gap in menopause care is not just a medical challenge—it's an opportunity for caregivers like you to make a profound impact.
              Women are seeking better solutions, and you can be at the forefront of providing them.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>The ConnectU Promise:</strong> Our 80-20 platform provides you with comprehensive tools and insights 
              while ensuring you maintain 100% control over all clinical decisions that define your unique practice.
            </p>
            <p className="text-gray-600 mb-6">
              After submitting your details, a ConnectU expert will guide you through personalizing the platform 
              to complement your specific approach to care, ensuring it enhances—never replaces—your expertise.
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-connectu-purple shadow-md">
              <p className="text-gray-700 italic">
                "ConnectU has transformed how I deliver care. I can now offer a more comprehensive approach while maintaining
                complete control over all treatment decisions. My patients have never been more satisfied."
              </p>
              <p className="text-connectu-purple font-semibold mt-2">— Dr. Sarah Johnson, Nutritionist</p>
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
