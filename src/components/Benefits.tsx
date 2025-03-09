
import React from 'react';
import BenefitCard from './BenefitCard';
import { Zap, TrendingUp, Users } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-12 px-6 md:px-10 bg-connectu-beige rounded-lg mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-connectu-blue">Elevate Your Practice</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Our platform enhances your expertise while you maintain full control of all clinical decisions.
          The 80-20 approach gives you the tools you need, while keeping you firmly in the driver's seat.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={Zap}
            title="Comprehensive Patient Insights"
            description="Access holistic patient profiles with our AI-driven platform, seeing the complete picture of a woman's health journey to deliver more targeted care."
          />
          <BenefitCard 
            icon={TrendingUp}
            title="Expand Your Practice"
            description="Efficiently scale your services and reach more patients through our virtual clinic framework, all while maintaining your unique approach to care."
          />
          <BenefitCard 
            icon={Users}
            title="Trusted Referral Network"
            description="Connect with vetted specialists across nutrition, fitness, and mental health to provide comprehensive care while maintaining your central role."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
