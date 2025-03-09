
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="bg-connectu-purple text-white py-16 px-6 md:px-10 rounded-lg mb-16 relative overflow-hidden">
      {/* Background graphic elements - enhanced */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-connectu-lightblue opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-connectu-cream opacity-10 rounded-full blur-lg"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full blur-xl"></div>
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Your Virtual Menopause Clinic
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Expand your practice with our holistic platform that delivers comprehensive menopause care at your fingertips. 
          Connect your patients with specialized services in OB/Gyn, Nutrition, Psychology, and Pelvic Floor Physiotherapy—while 
          you retain complete control over clinical decisions.
        </p>
        <div className="bg-white/10 p-6 rounded-lg mb-8 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">The Menopause Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-center mb-6">
            <ul className="text-left list-disc pl-6 space-y-2">
              <li>80M Women in Menopause</li>
              <li>In the U.S., 1.5M women enter menopause annually</li>
              <li>Only 2000 certified specialists nationwide</li>
            </ul>
            <ul className="text-left list-disc pl-6 space-y-2">
              <li>Over $10B spent in 2024 on non-medical treatments by women</li>
              <li>More than 4 fields of care are required for comprehensive support</li>
            </ul>
          </div>
          <p className="text-xs text-white/70 mt-4 text-left">
            AARP Report 10/2024 – The Impact of Menopause in the Workplace<br />
            (Fields include OB/Gyn, Nutrition, Psychology, and Pelvic Floor Physiotherapy)
          </p>
        </div>
        <Link to="join-form" smooth={true} duration={500}>
          <Button className="bg-white text-connectu-purple hover:bg-connectu-cream hover:text-connectu-purple px-8 py-6 text-lg relative z-10 shadow-lg">
            Transform Your Practice Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
