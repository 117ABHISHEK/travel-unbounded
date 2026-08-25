"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center gap-6 animate-fade-out">
      {/* Spinning ring around logo */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-amber border-r-teal animate-spin" />
        {/* Inner pulsing ring */}
        <div className="absolute inset-2 rounded-full border-[2px] border-transparent border-b-gold border-l-orange animate-spin-slow" />
        {/* Background glow */}
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-gold/10 via-orange/10 to-teal/10 animate-pulse" />
        {/* Center logo */}
        <span className="text-4xl font-bold bg-gradient-to-r from-gold via-orange to-teal bg-clip-text text-transparent animate-pulse-glow">
          ∞
        </span>
      </div>

      {/* Brand name */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[11px] font-bold tracking-[0.3em] text-parchment/40 uppercase">
          Travel
        </span>
        <span className="text-lg font-display font-bold tracking-tight text-parchment/80">
          Unbounded
        </span>
      </div>

      {/* Loading dots */}
      <div className="flex gap-1.5 mt-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-orange animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}
