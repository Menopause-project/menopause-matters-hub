
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <section className="py-12 px-6 md:px-10 mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-connectu-purple">How We Support Your Mission</h2>
        <p className="text-center mb-6 text-gray-600 max-w-3xl mx-auto">
          Our platform integrates seamlessly with your practice, offering powerful tools while preserving your autonomy in decision-making.
        </p>
        <p className="text-center mb-12 text-gray-700 max-w-3xl mx-auto italic">
          "Women deserve better menopause care. Caregivers deserve better tools. Together, we're making that a reality."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Holistic Patient Profiles</h3>
              <p className="text-gray-600">
                Access detailed health assessments that capture the complete picture of your patients' menopause journeys, 
                while you retain full control over interpretation and clinical decisions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Your Care, Enhanced</h3>
              <p className="text-gray-600">
                Our AI-assisted recommendations augment your expertise, empowering you to create personalized care plans 
                that align seamlessly with your clinical judgment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-connectu-purple border-t-4 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-connectu-purple">Seamless Specialist Network</h3>
              <p className="text-gray-600">
                Effortlessly connect your patients with trusted specialists in complementary fields, ensuring a 
                coordinated care experience with you at the center.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
