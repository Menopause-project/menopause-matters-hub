
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <section className="py-12 px-6 md:px-10 mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-connectu-purple">How We Support Your Mission</h2>
        <p className="text-center mb-6 text-gray-600 max-w-3xl mx-auto">
          Our platform seamlessly integrates with your practice, providing valuable tools while preserving your autonomy in decision-making.
        </p>
        <p className="text-center mb-12 text-gray-700 max-w-3xl mx-auto italic">
          "Women deserve better menopause care. Caregivers deserve better tools. Together, we're making both a reality."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Holistic Patient Profiles</h3>
              <p className="text-gray-600">
                Access comprehensive health assessments that reveal the full picture of your patient's menopause journey,
                while you maintain control of interpretation and care decisions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Your Care, Enhanced</h3>
              <p className="text-gray-600">
                Our AI-assisted recommendations support your expertise, allowing you to craft personalized care plans
                that remain aligned with your professional judgment and approach.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Seamless Specialist Network</h3>
              <p className="text-gray-600">
                Effortlessly connect your patients with trusted specialists in complementary fields, creating a 
                coordinated care experience while maintaining your central role.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
