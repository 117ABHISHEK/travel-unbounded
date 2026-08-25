import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-navy text-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-36 text-center relative z-10">
        <p className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
          Experiential Travel, Endlessly
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight">
          India&apos;s Most Trusted<br />Experiential Travel Experts
        </h1>
        <p className="mt-6 text-parchment/80 max-w-xl mx-auto text-lg">
          Discover journeys built around people, culture and unforgettable experiences.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 mt-10 px-8 py-4 bg-amber hover:bg-amber-dark text-navy font-display font-semibold rounded-full transition-colors"
        >
          Plan Your Trip
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
      {/* faint infinity motif, ambient background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
        <span className="text-[40rem] font-display">∞</span>
      </div>
    </section>
  );
}