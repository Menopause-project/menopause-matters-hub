
import React from 'react';
import CaregiverForm from './CaregiverForm';

const JoinSection = () => {
  return (
    <section className="py-12 px-6 md:px-10 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-connectu-purple">Be Part of Our Community</h2>
            <p className="text-gray-600 mb-6">
              Join us in building a future where every woman receives the holistic menopause care she deserves. 
              Become part of a vibrant community of caregivers dedicated to supporting women's health and transforming 
              the menopause journey.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>The ConnectU Difference:</strong> Our platform follows the 80-20 principle - we provide 80% of 
              the expertise and resources, while you maintain 100% control over the crucial 20% of decision-making that 
              defines your unique practice.
            </p>
            <p className="text-gray-600 mb-6">
              After submitting your details, you'll be connected with ConnectU experts who will guide you through 
              the onboarding process and customize the platform to complement your specific approach to care.
            </p>
            <div className="bg-connectu-cream p-4 rounded-lg border-l-4 border-connectu-purple">
              <p className="text-gray-700 italic">
                "ConnectU has transformed how I deliver care to my menopausal patients. The platform enhances my 
                expertise while keeping me firmly in the driver's seat of all clinical decisions."
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
