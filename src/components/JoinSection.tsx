
import React from 'react';
import CaregiverForm from './CaregiverForm';
import TestimonialCarousel from './TestimonialCarousel';

const JoinSection = () => {
  return (
    <section id="join-form" className="py-12 px-6 md:px-10 mb-16 bg-connectu-beige rounded-lg shadow-md relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-white opacity-40 rounded-full translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-40 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-connectu-purple">Why Now? Lead the Transformation in Menopause Care</h2>
            <p className="text-gray-600 mb-6">
              The current gap in menopause care is not merely a medical challenge—it's an opportunity for dedicated caregivers like you 
              to make a profound impact. Women are seeking better solutions, and you can be at the forefront of delivering them.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>The ConnectU Promise:</strong> Our 80-20 platform equips you with comprehensive tools and insights, 
              while ensuring you retain 100% control over the clinical decisions that define your unique practice.
            </p>
            <p className="text-gray-600 mb-6">
              Once you submit your details, a ConnectU expert will work with you to tailor the platform to complement your specific approach 
              to care—enhancing, not replacing, your expertise.
            </p>
            <div className="h-64 md:h-72">
              <TestimonialCarousel />
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
