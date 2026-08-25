"use client";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeMap = {
  sm: { wrapper: "w-5 h-5", text: "text-[9px]", ring: "border-2", showGlyph: false },
  md: { wrapper: "w-8 h-8", text: "text-sm", ring: "border-2", showGlyph: true },
  lg: { wrapper: "w-12 h-12", text: "text-xl", ring: "border-[3px]", showGlyph: true },
};

export default function LoadingSpinner({ size = "md", label }: LoadingSpinnerProps) {
  const s = sizeMap[size];

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`${s.wrapper} relative inline-flex items-center justify-center`}>
        {/* Outer spinning ring — subtle track + bright arc so the spin reads clearly */}
        <span className={`absolute inset-0 rounded-full ${s.ring} border-amber/25 border-t-amber border-r-teal animate-spin`} />
        {/* Center ∞ logo (md/lg only — hidden at sm so the spin stays crisp) */}
        {s.showGlyph && (
          <span className={`${s.text} font-bold bg-gradient-to-r from-gold via-orange to-teal bg-clip-text text-transparent`}>
            ∞
          </span>
        )}
      </span>
      {label && <span className="text-sm font-medium">{label}</span>}
    </span>
  );
}
