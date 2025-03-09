
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/621caa2c-83d9-430d-a721-3e84d7498486.png" 
          alt="ConnectU Health Logo" 
          className="h-16 md:h-20" // Increased logo size
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
