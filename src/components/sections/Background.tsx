import React from 'react';
import { ShoppingBag, Tag, Star, Percent, ShoppingCart, Gift, Heart, Sparkles } from 'lucide-react';

/**
 * Background Component
 * 
 * Implements a multi-layered background system:
 * 1. Base solid background with gradient.
 * 2. Subtle repeating cube texture pattern.
 * 3. Pulsing color gradient "blobs" (Valentine's pink/red theme).
 * 4. Floating animated shopping icons + Valentine's hearts.
 * 5. Rising/drifting mini hearts particle effect.
 * 6. Sparkle accents.
 * 
 * Theme: Light (Adidas Black/White rebranding) with Valentine's decoration
 */
const Background: React.FC = () => {
  // Generate rising hearts with random positions
  const risingHearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 8)}%`,
    delay: `${i * 1.2}s`,
    duration: `${12 + (i % 4) * 2}s`,
    // Smaller on mobile
    size: i % 3 === 0 ? 'w-2 h-2 md:w-4 md:h-4' : i % 3 === 1 ? 'w-1.5 h-1.5 md:w-3 md:h-3' : 'w-1 h-1 md:w-2 md:h-2',
    color: i % 2 === 0 ? 'text-pink-400/20' : 'text-red-400/15',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 select-none overflow-hidden">
      {/* 1. Base Background Layer - enhanced gradient for Valentine's */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/40 via-50% to-rose-50/30" />

      {/* 2. Cube Texture Pattern Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-repeat"
        style={{ 
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31a39e82-3d17-4fe1-84b7-749f820d2d74-mars-reviewerquick-com/assets/images/cubes-4.png')`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 3. Pulsing Color Gradients - Enhanced Valentine's Pink/Red Theme */}
      <div className="absolute inset-0">
        {/* Top Right Pink Blob */}
        <div 
          className="absolute top-[10%] right-[0%] w-24 h-24 md:w-80 md:h-80 bg-gradient-to-br from-pink-300/25 to-rose-400/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse-slow" 
          style={{ animationDuration: '4s' }}
        />
        {/* Bottom Left Red Blob */}
        <div 
          className="absolute bottom-[15%] left-[-5%] w-28 h-28 md:w-96 md:h-96 bg-gradient-to-tr from-red-300/20 to-pink-400/15 rounded-full blur-[70px] md:blur-[120px] animate-pulse-slow"
          style={{ animationDuration: '6s' }}
        />
        {/* Center Pink Blob */}
        <div 
          className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-[500px] md:h-[500px] bg-gradient-to-r from-pink-200/15 via-rose-200/10 to-pink-300/15 rounded-full blur-[80px] md:blur-[150px] animate-pulse-slow"
          style={{ animationDuration: '5s' }}
        />
        {/* Top Left Rose Accent */}
        <div 
          className="absolute top-[5%] left-[10%] w-16 h-16 md:w-48 md:h-48 bg-rose-300/15 rounded-full blur-[40px] md:blur-[80px] animate-pulse-slow"
          style={{ animationDuration: '7s' }}
        />
        {/* Bottom Right Pink Accent */}
        <div 
          className="absolute bottom-[5%] right-[10%] w-20 h-20 md:w-56 md:h-56 bg-pink-400/15 rounded-full blur-[50px] md:blur-[90px] animate-pulse-slow"
          style={{ animationDuration: '5.5s' }}
        />
      </div>

      {/* 4. Floating Animated Icons Layer */}
      <div className="absolute inset-0 opacity-[0.06]">
        {/* Shopping Bag - Top Left */}
        <ShoppingBag 
          className="absolute top-[15%] left-[10%] w-5 h-5 md:w-16 md:h-16 text-black animate-float-rotate" 
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />

        {/* Tag - Middle Right */}
        <Tag 
          className="absolute top-[40%] right-[15%] w-4 h-4 md:w-12 md:h-12 text-black rotate-12 animate-float" 
          style={{ animationDelay: '1s', animationDuration: '7s' }}
        />

        {/* Star - Bottom Left Area */}
        <Star 
          className="absolute bottom-[20%] left-[20%] w-3 h-3 md:w-10 md:h-10 text-black fill-black animate-sparkle" 
          style={{ animationDuration: '3s' }}
        />

        {/* Percent - Lower Right Area */}
        <div className="absolute top-[60%] right-[25%] animate-float-rotate" style={{ animationDelay: '2s', animationDuration: '9s' }}>
            <Percent className="w-4 h-4 md:w-14 md:h-14 text-black" />
        </div>

        {/* Shopping Cart - Bottom Left */}
        <ShoppingCart 
          className="absolute bottom-[15%] left-[15%] w-4 h-4 md:w-12 md:h-12 text-black animate-float" 
          style={{ animationDelay: '1.5s', animationDuration: '5s' }}
        />

        {/* Gift - Top Middle/Right Blur Layer */}
        <Gift 
          className="absolute top-[10%] right-[35%] w-8 h-8 md:w-24 md:h-24 text-black blur-[2px] opacity-30 rotate-[-15deg] animate-float-rotate" 
          style={{ animationDelay: '0.5s', animationDuration: '10s' }}
        />

        {/* Big Shopping Bag - Bottom Right Blur Layer */}
        <ShoppingBag 
          className="absolute bottom-[8%] right-[8%] w-10 h-10 md:w-32 md:h-32 text-black blur-[3px] opacity-15 animate-float" 
          style={{ animationDelay: '3s', animationDuration: '11s' }}
        />
      </div>

      {/* 5. Valentine's Hearts Decoration Layer - Enhanced */}
      <div className="absolute inset-0">
        {/* Large Heartbeat Heart - Top Left */}
        <Heart 
          className="absolute top-[8%] left-[5%] w-6 h-6 md:w-24 md:h-24 text-pink-400/35 fill-pink-400/25 animate-heartbeat" 
          style={{ animationDelay: '0s' }}
        />
        
        {/* Medium Heart - Top Right */}
        <Heart 
          className="absolute top-[12%] right-[8%] w-5 h-5 md:w-16 md:h-16 text-red-400/30 fill-red-400/20 rotate-12 animate-float-rotate" 
          style={{ animationDelay: '1.5s', animationDuration: '7s' }}
        />
        
        {/* Small Heart - Middle Left */}
        <Heart 
          className="absolute top-[35%] left-[3%] w-4 h-4 md:w-12 md:h-12 text-pink-500/25 fill-pink-500/15 -rotate-12 animate-float" 
          style={{ animationDelay: '0.5s', animationDuration: '8s' }}
        />
        
        {/* Medium Heart - Middle Right with Heartbeat */}
        <Heart 
          className="absolute top-[45%] right-[3%] w-5 h-5 md:w-20 md:h-20 text-red-300/30 fill-red-300/20 rotate-6 animate-heartbeat" 
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Small Heart - Lower Left */}
        <Heart 
          className="absolute bottom-[35%] left-[8%] w-3 h-3 md:w-10 md:h-10 text-pink-400/35 fill-pink-400/25 rotate-[-20deg] animate-float-rotate" 
          style={{ animationDelay: '1s', animationDuration: '6s' }}
        />
        
        {/* Large Heart - Bottom Right */}
        <Heart 
          className="absolute bottom-[20%] right-[5%] w-7 h-7 md:w-28 md:h-28 text-pink-300/25 fill-pink-300/15 blur-[1px] -rotate-6 animate-float" 
          style={{ animationDelay: '2.5s', animationDuration: '9s' }}
        />
        
        {/* Pulsing Hearts scattered */}
        <Heart 
          className="absolute top-[22%] left-[25%] w-2.5 h-2.5 md:w-8 md:h-8 text-red-400/25 fill-red-400/15 rotate-45 animate-heartbeat" 
          style={{ animationDelay: '0.3s' }}
        />
        <Heart 
          className="absolute top-[55%] right-[20%] w-2 h-2 md:w-6 md:h-6 text-pink-500/30 fill-pink-500/20 -rotate-30 animate-sparkle" 
          style={{ animationDuration: '2.5s' }}
        />
        <Heart 
          className="absolute bottom-[12%] left-[30%] w-2.5 h-2.5 md:w-8 md:h-8 text-red-300/25 fill-red-300/15 rotate-15 animate-float-rotate" 
          style={{ animationDelay: '3s', animationDuration: '7s' }}
        />
        <Heart 
          className="absolute top-[70%] left-[45%] w-2 h-2 md:w-6 md:h-6 text-pink-400/30 fill-pink-400/20 animate-heartbeat" 
          style={{ animationDelay: '0.8s' }}
        />
        
        {/* Blurred background hearts for depth */}
        <Heart 
          className="absolute top-[5%] left-[40%] w-10 h-10 md:w-40 md:h-40 text-pink-200/15 fill-pink-200/8 blur-[3px] md:blur-[5px] rotate-12 animate-float" 
          style={{ animationDelay: '1s', animationDuration: '12s' }}
        />
        <Heart 
          className="absolute bottom-[5%] right-[30%] w-8 h-8 md:w-36 md:h-36 text-red-200/15 fill-red-200/8 blur-[2px] md:blur-[4px] -rotate-15 animate-float-rotate" 
          style={{ animationDelay: '0s', animationDuration: '14s' }}
        />
        <Heart 
          className="absolute top-[60%] left-[5%] w-6 h-6 md:w-24 md:h-24 text-rose-200/12 fill-rose-200/6 blur-[2px] md:blur-[3px] rotate-30 animate-float" 
          style={{ animationDelay: '2s', animationDuration: '10s' }}
        />
      </div>

      {/* 6. Rising Hearts Particle Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {risingHearts.map((heart) => (
          <Heart
            key={heart.id}
            className={`absolute bottom-[-20px] ${heart.size} ${heart.color} fill-current animate-drift`}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          />
        ))}
      </div>

        {/* 7. Sparkle Accents */}
      <div className="absolute inset-0">
        <Sparkles 
          className="absolute top-[18%] right-[25%] w-2 h-2 md:w-6 md:h-6 text-pink-400/40 animate-sparkle" 
          style={{ animationDelay: '0s' }}
        />
        <Sparkles 
          className="absolute top-[30%] left-[15%] w-1.5 h-1.5 md:w-5 md:h-5 text-rose-400/35 animate-sparkle" 
          style={{ animationDelay: '0.7s' }}
        />
        <Sparkles 
          className="absolute bottom-[30%] right-[18%] w-2 h-2 md:w-6 md:h-6 text-red-300/35 animate-sparkle" 
          style={{ animationDelay: '1.4s' }}
        />
        <Sparkles 
          className="absolute top-[65%] left-[25%] w-1.5 h-1.5 md:w-4 md:h-4 text-pink-300/40 animate-sparkle" 
          style={{ animationDelay: '0.5s' }}
        />
        <Sparkles 
          className="absolute bottom-[18%] left-[45%] w-2 h-2 md:w-5 md:h-5 text-rose-300/35 animate-sparkle" 
          style={{ animationDelay: '1s' }}
        />
        <Star 
          className="absolute top-[40%] left-[8%] w-1.5 h-1.5 md:w-4 md:h-4 text-pink-400/30 fill-pink-400/20 animate-sparkle" 
          style={{ animationDelay: '0.3s' }}
        />
        <Star 
          className="absolute bottom-[45%] right-[12%] w-1.5 h-1.5 md:w-5 md:h-5 text-red-400/25 fill-red-400/15 animate-sparkle" 
          style={{ animationDelay: '1.2s' }}
        />
        {/* Additional small stars */}
        <Star 
          className="absolute top-[15%] left-[35%] w-1 h-1 md:w-3 md:h-3 text-pink-300/30 fill-pink-300/15 animate-sparkle" 
          style={{ animationDelay: '0.8s' }}
        />
        <Star 
          className="absolute top-[50%] right-[40%] w-1 h-1 md:w-2.5 md:h-2.5 text-rose-300/25 fill-rose-300/10 animate-sparkle" 
          style={{ animationDelay: '1.5s' }}
        />
        <Star 
          className="absolute bottom-[10%] right-[20%] w-1.5 h-1.5 md:w-4 md:h-4 text-pink-400/20 fill-pink-400/10 animate-sparkle" 
          style={{ animationDelay: '2.1s' }}
        />
        <Star 
          className="absolute top-[80%] left-[15%] w-1 h-1 md:w-3 md:h-3 text-red-300/25 fill-red-300/15 animate-sparkle" 
          style={{ animationDelay: '0.4s' }}
        />
        <Star 
          className="absolute top-[25%] right-[5%] w-1.5 h-1.5 md:w-4 md:h-4 text-pink-500/20 fill-pink-500/10 animate-sparkle" 
          style={{ animationDelay: '1.7s' }}
        />
      </div>

      {/* 8. Vignette/Inner Shadow Depth Effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(255,255,255,0.7)]" />
    </div>
  );
};

export default Background;