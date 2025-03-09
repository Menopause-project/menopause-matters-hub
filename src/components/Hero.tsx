
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-connectu-purple text-white py-16 px-6 md:px-10 rounded-lg mb-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Transforming Menopause Care Together
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Empower your practice by joining our multi-disciplinary platform for women's health. 
          Expand your reach and provide personalized menopause care while maintaining full control of your expertise.
        </p>
        <Button className="bg-white text-connectu-purple hover:bg-connectu-cream hover:text-connectu-purple px-8 py-6 text-lg">
          Discover How to Join
        </Button>
      </div>
    </section>
  );
};

export default Hero;
