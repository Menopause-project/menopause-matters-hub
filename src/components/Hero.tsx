
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="bg-white border border-connectu-purple shadow-md text-gray-800 py-16 px-6 md:px-10 rounded-lg mb-16 relative overflow-hidden">
      {/* Purple decorative frame elements */}
      <div className="absolute inset-0 border-4 border-connectu-purple rounded-lg opacity-20"></div>
      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-connectu-purple rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-connectu-purple rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-connectu-purple rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-connectu-purple rounded-br-lg"></div>
      
      {/* Diagonal purple accent lines */}
      <div className="absolute top-0 right-0 w-32 h-2 bg-connectu-purple opacity-40 rotate-45 translate-x-10 -translate-y-5"></div>
      <div className="absolute bottom-0 left-0 w-32 h-2 bg-connectu-purple opacity-40 rotate-45 -translate-x-10 translate-y-5"></div>
      
      {/* Background graphic elements - subtle beige patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-connectu-cream opacity-40 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-connectu-beige opacity-30 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-connectu-beige opacity-20 rounded-full blur-xl"></div>
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-connectu-purple">
          Your Virtual Menopause Clinic
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-medium text-gray-700">
          Expand Your Practice with Menopause Expert Care
        </p>
        <div className="bg-connectu-beige p-6 md:p-8 rounded-lg mb-8 border border-connectu-purple/20 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-connectu-purple">The Menopause Challenge</h2>
          
          <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 gap-y-4 mb-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-purple mb-2">80M</div>
              <div className="text-md md:text-lg font-medium text-gray-700">Women in Menopause</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-purple mb-2">$10B+</div>
              <div className="text-md md:text-lg font-medium text-gray-700">Spent in 2024 on non-medical treatments</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-purple mb-2">2000</div>
              <div className="text-md md:text-lg font-medium text-gray-700">Certified specialists nationwide</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-connectu-purple mb-2">4+</div>
              <div className="text-md md:text-lg font-medium text-gray-700">Fields of care required for support</div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-6 text-center">
            AARP Report 10/2024 – The Impact of Menopause in the Workplace<br />
            (Fields include OB/Gyn, Nutrition, Psychology, and Pelvic Floor Physiotherapy)
          </p>
        </div>
        <Link to="join-form" smooth={true} duration={500}>
          <Button className="bg-connectu-purple text-white hover:bg-connectu-purple/90 px-8 py-6 text-lg relative z-10 shadow-md font-semibold">
            Transform Your Practice Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
