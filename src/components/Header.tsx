
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-connectu-cream rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-connectu-purple opacity-20 translate-x-1/3 translate-y-1/3 rounded-full blur-lg"></div>
      
      <div className="flex items-center relative z-10">
        <img 
          src="/lovable-uploads/df317a40-9d07-49af-9d4c-07e99e28b320.png" 
          alt="ConnectU Health Logo" 
          className="h-28 md:h-32 drop-shadow-lg" // Increased logo size and added drop shadow
        />
      </div>
      <div className="relative z-10">
        <Link to="join-form" smooth={true} duration={500}>
          <Button 
            variant="outline" 
            className="bg-white text-connectu-purple border-connectu-purple hover:bg-connectu-purple hover:text-white transition-all font-medium shadow-md"
          >
            Join Our Platform
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
