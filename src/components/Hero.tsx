
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="bg-connectu-purple text-white py-16 px-6 md:px-10 rounded-lg mb-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Your Virtual Menopause Clinic
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Expand your practice with our holistic platform that puts comprehensive menopause care at your fingertips. 
          Connect women with specialized care in OB/Gyn, Nutrition, Psychology, and Pelvic Floor Physiotherapy, 
          while maintaining complete control of all clinical decisions.
        </p>
        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">The Menopause Challenge</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">80M</p>
              <p className="text-sm md:text-base font-medium">Women in Menopause</p>
              <p className="text-xs md:text-sm text-white/80">In the U.S. with 1.5M entering annually</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">2000</p>
              <p className="text-sm md:text-base font-medium">Vs. Certified Specialists</p>
              <p className="text-xs md:text-sm text-white/80">Nation wide, from all related professions</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">80%</p>
              <p className="text-sm md:text-base font-medium">Family & OB/Gyn</p>
              <p className="text-xs md:text-sm text-white/80">Feel inadequate treating menopause*</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">$3-7K</p>
              <p className="text-sm md:text-base font-medium">Annual Spending</p>
              <p className="text-xs md:text-sm text-white/80">By women suffering moderate to severe symptoms**</p>
            </div>
          </div>
          <p className="text-xs text-white/70 mt-4 text-left">
            *AARP Report 10/2024 The Impact of Menopause at the workplace<br />
            **See below the employer cut in these expenses
          </p>
        </div>
        <Link to="join-form" smooth={true} duration={500}>
          <Button className="bg-white text-connectu-purple hover:bg-connectu-cream hover:text-connectu-purple px-8 py-6 text-lg">
            Transform Your Practice Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
