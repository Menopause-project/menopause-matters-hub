
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-connectu-purple text-white py-8 px-6 md:px-10 relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white opacity-5 rounded-full blur-lg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/df317a40-9d07-49af-9d4c-07e99e28b320.png" 
              alt="ConnectU Health Logo" 
              className="h-16 md:h-20 brightness-0 invert drop-shadow-lg" // Made logo bigger and added drop shadow
            />
            <p className="mt-2 text-sm">Taking Control of Menopause</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">Email: info@connectu.health</p>
            <p className="text-sm">© 2025 ConnectU Health. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
