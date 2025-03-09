
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
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
          Expand Your Practice with Menopause Expert Care
        </p>
        <div className="bg-white/10 p-6 md:p-8 rounded-lg mb-8 backdrop-blur-sm border border-white/20 shadow-xl transform scale-105">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-connectu-cream">The Menopause Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-center mb-6">
            <ul className="text-left list-disc pl-6 space-y-3 text-lg">
              <li className="font-medium">80M Women in Menopause</li>
              <li className="font-medium">In the U.S., 1.5M women enter menopause annually</li>
              <li className="font-medium">Only 2000 certified specialists nationwide</li>
            </ul>
            <ul className="text-left list-disc pl-6 space-y-3 text-lg">
              <li className="font-medium">Over $10B spent in 2024 on non-medical treatments by women</li>
              <li className="font-medium">More than 4 fields of care are required for comprehensive support</li>
            </ul>
          </div>
          <p className="text-xs text-white/70 mt-4 text-left">
            AARP Report 10/2024 – The Impact of Menopause in the Workplace<br />
            (Fields include OB/Gyn, Nutrition, Psychology, and Pelvic Floor Physiotherapy)
          </p>
        </div>
        <Link to="join-form" smooth={true} duration={500}>
          <Button className="bg-white text-connectu-purple hover:bg-connectu-cream hover:text-connectu-purple px-8 py-6 text-lg relative z-10 shadow-lg font-semibold">
            Transform Your Practice Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
