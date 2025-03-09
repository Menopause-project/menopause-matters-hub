
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
    <div className="bg-connectu-offwhite min-h-screen flex flex-col relative overflow-hidden">
      {/* Background graphic elements for the entire page */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-connectu-purple opacity-5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-connectu-blue opacity-5 rounded-full translate-y-1/4 -translate-x-1/4 blur-2xl"></div>
      <div className="fixed top-1/2 right-1/4 w-[300px] h-[300px] bg-connectu-cream opacity-10 rounded-full -translate-y-1/2 blur-xl"></div>
      <div className="fixed top-1/3 left-1/4 w-[200px] h-[200px] bg-connectu-lightblue opacity-5 rounded-full blur-2xl"></div>
      <div className="fixed bottom-1/4 right-1/3 w-[250px] h-[250px] bg-white opacity-5 rounded-full blur-3xl"></div>
      
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
