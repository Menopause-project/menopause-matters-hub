
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <section className="py-12 px-6 md:px-10 mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-connectu-purple">How It Works</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Our platform seamlessly integrates with your practice, providing valuable tools while leaving the crucial decisions to you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">AI-Driven Assessments</h3>
              <p className="text-gray-600">
                Our AI-powered system provides evidence-based evaluations that create comprehensive health profiles, 
                while keeping you in control of the assessment process.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Tailored Care Plans</h3>
              <p className="text-gray-600">
                You craft adaptive, personalized protocols aligned with your patient's lifestyle and evolving health requirements, 
                using our recommendations as a supportive foundation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Continuous Engagement</h3>
              <p className="text-gray-600">
                Through AI insights and interactive tracking, both you and your patients receive ongoing guidance, 
                while you maintain full authority over treatment decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
