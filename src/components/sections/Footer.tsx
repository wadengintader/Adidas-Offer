import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full max-w-[512px] mx-auto px-3 sm:px-4 pt-0 pb-6 sm:pb-12 mt-4 sm:mt-6 text-center">
      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-1.5 mb-1.5 sm:mb-2">
        <a 
          href="https://www.facebook.com/adidas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#000000] hover:bg-[#222222] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
        >
          <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
        </a>
        <a 
          href="https://www.instagram.com/adidas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#000000] hover:bg-[#222222] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
        >
          <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </a>
        <a 
          href="https://www.linkedin.com/company/adidas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#000000] hover:bg-[#222222] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
        >
          <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-[#1A1A1A]/60 text-[9px] sm:text-[11px] font-bold tracking-tight mb-1.5 sm:mb-2">
        © {currentYear} Adidas Shopper Rewards. All rights reserved.
      </p>

      {/* Legal Disclaimer */}
      <div className="px-1 sm:px-2">
        <p className="text-[#1A1A1A]/40 text-[8px] sm:text-[9.5px] leading-relaxed max-w-[400px] mx-auto">
          This independent reward program is not sponsored, endorsed, or administered by 
          Adidas or its parent companies. All brand names and logos are trademarks of 
          their respective owners.
        </p>
      </div>

      {/* Bottom Spacer/Shadow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#000000]/5 to-transparent"></div>
    </footer>
  );
};

export default Footer;