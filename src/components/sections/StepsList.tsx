import React from 'react';
import { ShoppingBag, UserPlus, ClipboardList, Gift, LockOpen } from 'lucide-react';

const StepsList = () => {
  const steps = [
    {
      icon: <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
      text: 'Click the "Start Review" button above',
    },
    {
      icon: <UserPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
      text: 'Enter your email and basic shopper details',
    },
    {
      icon: <ClipboardList className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
      text: 'Answer our quick shopper experience survey',
    },
    {
      icon: <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
      text: 'Complete 3–5 featured partner offers',
    },
    {
      icon: <LockOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />,
      text: 'Unlock your ADIDAS gift card',
    },
  ];

  return (
    <section className="relative w-full max-w-md mx-auto px-3 sm:px-5 mb-2 sm:mb-4 mt-1 sm:mt-3">
      {/* Glassmorphic Container */}
      <div className="relative rounded-[1.25rem] sm:rounded-[2rem] p-2 sm:p-4 bg-white/5 backdrop-blur-md border-2 border-black/15 shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden group/box transition-all duration-500 hover:border-black/30 hover:scale-[1.01]">
        
        {/* Shine/Reflect effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -left-full group-hover/box:animate-shine pointer-events-none"></div>
        
        {/* Decorative subtle blurs to match High-Level Design */}
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-black/8 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-0 sm:space-y-1">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-center gap-1.5 sm:gap-2.5 group/item animate-fadeInLeft duration-500 fill-mode-both cursor-pointer hover:bg-black/5 rounded-lg transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Container with Adidas black/white theme */}
              <div className="relative flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/40 border border-black/10 text-black group-hover/item:scale-110 group-hover/item:bg-white/80 transition-all duration-300 shadow-sm">
                {step.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 border-b border-black/5 pb-0 last:border-0">
                <p className="text-[#1A1A1A] text-[12px] sm:text-[15px] font-semibold tracking-tight leading-tight py-1 sm:py-1.5 font-body">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background radial glow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/5 blur-2xl -z-10 rounded-full opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default StepsList;