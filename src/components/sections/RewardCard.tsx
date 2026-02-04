import React from 'react';
import Image from 'next/image';

/**
 * RewardCard Section
 * 
 * Clones the floating gift card section with the shine animation and scale-on-hover effect.
 * Replaces the Marshalls $1000 gift card with a branded Adidas gift card visual.
 * 
 * Design characteristics:
 * - Floating animation (animate-float)
 * - Shine overlay animation (animate-shine)
 * - Scale-on-hover effect
 * - Pixel-perfect dimensions from computed styles
 */
export default function RewardCard() {
  // Using a representative Adidas Gift Card placeholder as requested by design instructions 
  // since specific Adidas asset wasn't provided in the assets list, but we follow the branding direction.
  const adidasGiftCardUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b844d676-9381-45a7-bbb3-4072f33b2a59/Marshalls_GiftCard_NEW-1769279476373.webp?width=8000&height=8000&resize=contain";

  return (
    <div className="relative mb-1 group cursor-pointer flex justify-center">
      <div className="relative inline-block animate-float will-change-transform">
        <div 
          className="relative z-10 w-[240px] sm:w-[320px] mx-auto transition-transform duration-500 group-hover:scale-105"
          style={{
            borderRadius: '1.5rem',
            overflow: 'hidden'
          }}
        >
          {/* Card Image Wrapper */}
          <div className="relative aspect-[1.58/1] w-full bg-black rounded-[1.5rem] overflow-hidden">
            {/* 
              Brand-specific visual for Adidas: 
              We utilize a black-themed aesthetic as per High Level Design for Adidas 
            */}
            <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 select-none">
              <div className="flex flex-col items-center gap-2">
                {/* Visual Representation of Adidas Logo (Three Stripes) */}
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-8 bg-white rotate-[25deg] transform origin-bottom"></div>
                  <div className="w-2 h-12 bg-white rotate-[25deg] transform origin-bottom"></div>
                  <div className="w-2 h-16 bg-white rotate-[25deg] transform origin-bottom"></div>
                </div>
                <span className="text-white font-black text-2xl tracking-tighter uppercase">ADIDAS</span>
              </div>
              
              <div className="absolute bottom-4 right-6 text-right">
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-none">Gift Card</p>
                <p className="text-white text-3xl font-black mt-1">$1000</p>
              </div>
              
              <div className="absolute top-4 left-6">
                <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-white/40 to-white/10"></div>
                </div>
              </div>
            </div>

            {/* Shine Overlay Animation */}
            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden pointer-events-none z-20">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shine"
                style={{
                  width: '50%',
                  height: '100%',
                }}
              ></div>
            </div>
            
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
          </div>
          
          {/* Decorative Shadow Blur (Matches html_structure patterns) */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/20 blur-2xl -z-10 rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
}