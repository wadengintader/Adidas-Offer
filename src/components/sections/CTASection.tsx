"use client";

import React from "react";
import { Star } from "lucide-react";

/**
 * CTASection Component
 * Clones the "START REVIEW" call-to-action button with high-gloss shine animation, 
 * pulsing star icons, and subtext. Rebranded to Adidas black per instructions.
 */
const CTASection: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-3 sm:px-4 flex flex-col items-center mt-3 sm:mt-6 mb-0">
      {/* 
        Primary CTA Button 
        Styles based on computed_styles and high_level_design requirements:
        - Rebranded to Adidas Black (#000000)
        - Pill-shaped (rounded-full)
        - High-gloss shine animation (btn-shine class or direct implementation)
        - Responsive sizing
      */}
        <a
          href="https://gloffers.org/aff_c?offer_id=2147&aff_id=44723&source=Adi"
          className="group relative w-full max-w-[200px] sm:max-w-full h-[40px] sm:h-[54px] bg-[#000000] hover:bg-[#222222] text-white rounded-full flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline"
        >
        {/* Glossy Shine Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -left-full group-hover:animate-shine pointer-events-none"></div>
        
        {/* Layout container for icons and text */}
        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
          {/* Pulsing Star Icon (Left) */}
          <Star 
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#f1c40f] text-[#f1c40f] animate-pulse-slow shrink-0" 
          />
          
            {/* Button Text */}
            <span className="text-[12px] sm:text-[14px] font-bold sm:font-black uppercase tracking-[0.08em] flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              START REVIEW
            </span>
          
          {/* Pulsing Star Icon (Right) */}
          <Star 
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#f1c40f] text-[#f1c40f] animate-pulse-slow shrink-0" 
          />
        </div>
      </a>

      {/* 
        Disclaimer Subtext 
        Style based on computed_styles:
        - font-size: 10px / 11px
        - color: muted text (charcoal with opacity)
        - italic weight 
      */}
      <p className="mt-2 sm:mt-3 text-[#1A1A1A]/60 text-[9px] sm:text-[11px] font-bold tracking-tight text-center italic">
        (Instant approval - No purchase required)
      </p>

      {/* 
        Decorative background glow behind the button for depth 
        Matching the Adidas theme (Black/White with subtle shadows)
      */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-2xl -z-10 rounded-full opacity-50 pointer-events-none"></div>
      </div>
    );
  };

export default CTASection;