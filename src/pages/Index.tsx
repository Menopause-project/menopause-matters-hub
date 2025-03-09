
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import TeamBanner from '@/components/TeamBanner';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Background graphic elements for the entire page - more subtle */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-connectu-cream opacity-30 rounded-full -translate-y-1/3 translate-x-1/3 blur-xl"></div>
      <div className="fixed bottom-0 left-0 w-[350px] h-[350px] bg-connectu-beige opacity-40 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
      <div className="fixed top-1/2 right-1/4 w-[200px] h-[200px] bg-connectu-cream opacity-20 rounded-full -translate-y-1/2 blur-md"></div>
      <div className="fixed top-1/3 left-1/4 w-[150px] h-[150px] bg-connectu-beige opacity-30 rounded-full blur-md"></div>
      
      {/* New: Purple accent elements */}
      <div className="fixed top-1/4 right-0 w-[100px] h-[300px] bg-connectu-purple opacity-10 rounded-l-full"></div>
      <div className="fixed bottom-1/4 left-0 w-[100px] h-[300px] bg-connectu-purple opacity-10 rounded-r-full"></div>
      <div className="fixed top-0 left-1/2 w-[150px] h-[150px] bg-connectu-purple opacity-5 rounded-full -translate-x-1/2"></div>
      
      <Header />
      <main className="flex-grow container mx-auto px-4 relative z-10">
        <Hero />
        <Benefits />
        <HowItWorks />
        <TeamBanner />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
