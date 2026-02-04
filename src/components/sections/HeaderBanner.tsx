"use client";

import React, { useState, useEffect } from "react";
import { Clock, Sparkles } from "lucide-react";

const HeaderBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 4, seconds: 52 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(1, "0");
  const formatSeconds = (val: number) => val.toString().padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 w-full bg-[#000000] border-b border-white/10 py-1 sm:py-1.5 px-3 sm:px-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
      {/* Background Sparkles for visual flair */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <Sparkles
          className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 text-white animate-pulse"
        />
        <Sparkles
          className="absolute right-[10%] top-1/2 -translate-y-1/2 w-4 h-4 text-white animate-pulse"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-2 text-center">
            {/* Animated Clock Icon */}
            <Clock
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white animate-pulse shrink-0"
              strokeWidth={3}
            />
            <p className="text-white text-[12px] sm:text-[14px] font-bold tracking-tight text-center font-sans">
              You have{" "}
              <span className="text-white tabular-nums font-black">
                {formatTime(timeLeft.minutes)}:{formatSeconds(timeLeft.seconds)}
              </span>{" "}
              minutes left to unlock your Adidas reward
            </p>
          </div>
        </div>

        {/* Sub-urgency message */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
          <div className="h-[1px] w-3 sm:w-4 bg-white/20"></div>
          <p className="text-white/60 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] font-bold font-sans">
            Complete the steps before access expires
          </p>
          <div className="h-[1px] w-3 sm:w-4 bg-white/20"></div>
        </div>
      </div>

      {/* Decorative Shine Bar on the bottom edge */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent w-full opacity-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/20 animate-shine"></div>
      </div>
    </div>
  );
};

export default HeaderBanner;