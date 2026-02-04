"use client";

import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const BrandHero = () => {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/31a39e82-3d17-4fe1-84b7-749f820d2d74/Adidas-Logo-removebg-preview-1770218541149.png?width=8000&height=8000&resize=contain";
  const heroImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/31a39e82-3d17-4fe1-84b7-749f820d2d74/new-add-1770218150759.jpg?width=8000&height=8000&resize=contain";

    return (
      <div className="w-full max-w-[512px] px-3 sm:px-4 flex flex-col items-center pt-3 pb-0 mx-auto">
          {/* Adidas Logo */}
          <div className="w-full flex justify-center pt-2 pb-3 sm:pb-4 cursor-pointer">
            <img 
              src={logoUrl} 
              alt="Adidas Logo" 
              className="h-8 sm:h-14 w-auto object-contain transition-all duration-700 hover:scale-105"
            />
          </div>
          {/* Brand Hero Image with Floating and Shine Animation */}
          <div className="relative mb-4 sm:mb-7 group cursor-pointer w-full">
          <div className="relative inline-block animate-float will-change-transform w-full">
            <div className="relative z-10 w-full max-w-[260px] sm:max-w-[360px] mx-auto transition-transform duration-500 group-hover:scale-105">
            <div className="w-full rounded-[1.25rem] sm:rounded-[1.5rem] shadow-2xl overflow-hidden border border-white/10 relative">
              <img 
                src={heroImageUrl} 
                alt="Adidas Brand" 
                className="w-full h-auto object-cover"
              />
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
              </div>
            </div>
          </div>
          {/* Soft Glow Shadow underneath card */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/20 blur-2xl -z-10 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="flex flex-col items-center gap-0.5 px-2 mb-3 sm:mb-6">
          <div className="relative">
            <h1 className="text-[20px] sm:text-[21px] md:text-[27px] font-extrabold leading-tight tracking-tight flex items-center justify-center gap-x-1.5 sm:gap-x-2 flex-wrap font-display uppercase italic">
              <span className="text-[#1a1a1a]">Unlock</span>
              <span className="text-black">Adidas Rewards</span>
              <div className="flex items-center -ml-0.5 sm:-ml-1">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-transparent" />
              </div>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full text-center mt-1.5 sm:mt-2">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black shrink-0 animate-pulse" />
            <p className="text-[13px] sm:text-sm md:text-[15px] text-zinc-600 font-medium leading-relaxed">
              Here&apos;s how to claim your <span className="text-black font-extrabold">$750 Valentine's Gift Card</span>
            </p>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black shrink-0 animate-pulse" />
          </div>
      </div>
    </div>
  );
};

export default BrandHero;