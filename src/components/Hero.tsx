
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-connectu-blue text-white py-16 px-6 md:px-10 rounded-lg mb-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Your Virtual Menopause Clinic
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Expand your practice with our holistic platform that puts comprehensive menopause care at your fingertips. 
          Enhance your expertise while maintaining complete control of all clinical decisions.
        </p>
        <Button className="bg-white text-connectu-blue hover:bg-connectu-cream hover:text-connectu-blue px-8 py-6 text-lg">
          Transform Your Practice Today
        </Button>
      </div>
    </section>
  );
};

export default Hero;
