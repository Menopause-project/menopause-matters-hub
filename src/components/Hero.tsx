
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
        <div className="bg-white/15 p-6 md:p-8 rounded-lg mb-8 border border-white/25 shadow-xl transform scale-105">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">The Menopause Challenge</h2>
          
          <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 gap-y-4 mb-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-cream mb-2">80M</div>
              <div className="text-md md:text-lg font-medium">Women in Menopause</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-cream mb-2">$10B+</div>
              <div className="text-md md:text-lg font-medium">Spent in 2024 on non-medical treatments</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-cream mb-2">2000</div>
              <div className="text-md md:text-lg font-medium">Certified specialists nationwide</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-cream mb-2">4+</div>
              <div className="text-md md:text-lg font-medium">Fields of care required for support</div>
            </div>
          </div>
          
          <p className="text-xs text-white/80 mt-6 text-center">
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
