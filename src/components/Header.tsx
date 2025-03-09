
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/df317a40-9d07-49af-9d4c-07e99e28b320.png" 
          alt="ConnectU Health Logo" 
          className="h-20 md:h-24" // Increased logo size even more
        />
      </div>
      <div>
        <Link to="join-form" smooth={true} duration={500}>
          <Button 
            variant="outline" 
            className="bg-white text-connectu-purple border-connectu-purple hover:bg-connectu-purple hover:text-white transition-all"
          >
            Join Our Platform
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
