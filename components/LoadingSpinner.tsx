"use client";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeMap = {
  sm: { wrapper: "w-5 h-5", text: "text-sm", ring: "border-[1.5px]", glow: "inset-1" },
  md: { wrapper: "w-8 h-8", text: "text-xl", ring: "border-2", glow: "inset-1.5" },
  lg: { wrapper: "w-12 h-12", text: "text-2xl", ring: "border-[3px]", glow: "inset-2" },
};

export default function LoadingSpinner({ size = "md", label }: LoadingSpinnerProps) {
  const s = sizeMap[size];

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`${s.wrapper} relative inline-flex items-center justify-center`}>
        {/* Outer spinning ring */}
        <span className={`absolute inset-0 rounded-full ${s.ring} border-transparent border-t-amber border-r-teal animate-spin`} />
        {/* Pulsing glow */}
        <span className={`absolute ${s.glow} rounded-full bg-gradient-to-br from-gold/20 via-orange/15 to-teal/20 animate-pulse`} />
        {/* Center ∞ logo */}
        <span className={`${s.text} font-bold bg-gradient-to-r from-gold via-orange to-teal bg-clip-text text-transparent`}>
          ∞
        </span>
      </span>
      {label && <span className="text-sm font-medium">{label}</span>}
    </span>
  );
}
