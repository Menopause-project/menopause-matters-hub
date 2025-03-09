
import React from 'react';
import BenefitCard from './BenefitCard';
import { Zap, TrendingUp, Users, MessageSquareHeart } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-12 px-6 md:px-10 bg-connectu-beige rounded-lg mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-connectu-purple">Why ConnectU? Empowering Caregivers.</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          We believe that dedicated caregivers are the cornerstone of transforming menopause care. Our innovative 80-20 platform 
          empowers you by enhancing your expertise while you retain complete control over clinical decisions. Together, we can 
          bridge the gap in comprehensive menopause support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <BenefitCard 
            icon={Zap}
            title="Comprehensive Patient Insights"
            description="Gain a complete view of your patients' health journeys with our AI-driven platform, enabling you to deliver more targeted and effective care."
          />
          <BenefitCard 
            icon={TrendingUp}
            title="Expand Your Practice"
            description="Scale your services efficiently and reach more patients through our virtual clinic framework—while preserving your unique approach to care."
          />
          <BenefitCard 
            icon={Users}
            title="Trusted Referral Network"
            description="Leverage our vetted network to seamlessly connect your patients with specialists in nutrition, fitness, and mental health—ensuring coordinated care with you at the helm."
          />
          <BenefitCard 
            icon={MessageSquareHeart}
            title="Empower Women's Health"
            description="Join a movement that addresses the critical gap in menopause care, making a significant difference in women's lives during this transformative stage."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
