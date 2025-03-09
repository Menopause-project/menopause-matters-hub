
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-connectu-purple text-white py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/446f6360-ab16-4d54-9fd7-5afc1aabc306.png" 
              alt="ConnectU Health Logo" 
              className="h-10"
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
