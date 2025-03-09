
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/621caa2c-83d9-430d-a721-3e84d7498486.png" 
          alt="ConnectU Health Logo" 
          className="h-12 md:h-16"
        />
      </div>
      <div>
        <Button 
          variant="outline" 
          className="bg-white text-connectu-blue border-connectu-blue hover:bg-connectu-blue hover:text-white transition-all"
        >
          Join Our Platform
        </Button>
      </div>
    </header>
  );
};

export default Header;
