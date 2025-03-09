
import React from 'react';
import BenefitCard from './BenefitCard';
import { Users, Activity, MessageCircle } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-12 px-6 md:px-10 bg-connectu-beige rounded-lg mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-connectu-purple">Why Join Our Community?</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          As a wellness caregiver, you understand the unique challenges of managing menopause care. 
          Our platform empowers you while keeping the important decisions in your hands.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={Users}
            title="Expand Your Services"
            description="Join our multi-disciplinary approach while maintaining your autonomy. Our 80-20 platform gives you the expertise while keeping decision-making in your hands."
          />
          <BenefitCard 
            icon={Activity}
            title="Enhance Patient Outcomes"
            description="Provide personalized care plans using our AI-powered insights, resulting in improved patient satisfaction and more effective treatments."
          />
          <BenefitCard 
            icon={MessageCircle}
            title="Collaborative Network"
            description="Connect with specialists in nutrition, fitness, alternative medicine, and more to provide comprehensive menopause care for women over 40."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
