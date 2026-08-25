import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-navy text-parchment overflow-hidden grain">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-mid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,163,61,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(29,139,115,0.08),transparent_60%)]" />

      {/* Floating accent orbs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 bg-amber/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-[10%] w-64 h-64 bg-teal/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-28 md:py-40 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
          <span className="font-mono text-xs text-parchment/70 tracking-wider uppercase">
            Experiential Travel, Endlessly
          </span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-[1.1] animate-fade-in-up delay-100">
          India&apos;s Most Trusted
          <br />
          <span className="bg-gradient-to-r from-amber via-amber-light to-amber bg-clip-text text-transparent">
            Experiential Travel
          </span>{" "}
          Experts
        </h1>

        <p className="mt-7 text-parchment/60 max-w-xl mx-auto text-lg md:text-xl leading-relaxed animate-fade-in-up delay-200">
          Discover journeys built around people, culture, and unforgettable experiences
          — personally vetted by our travel experts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in-up delay-300">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-amber hover:bg-amber-dark text-navy font-display font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:scale-105 animate-pulse-glow"
          >
            Plan Your Trip
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-4 text-parchment/70 hover:text-parchment font-medium rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300"
          >
            Our Story
            <span className="text-sm">↓</span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 animate-fade-in-up delay-400">
          {[
            { num: "10+", label: "Destinations" },
            { num: "500+", label: "Trips Planned" },
            { num: "3", label: "Offices Worldwide" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-2xl text-amber">{stat.num}</p>
              <p className="text-xs text-parchment/50 font-mono uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L48 72C96 64 192 48 288 42.7C384 37.3 480 42.7 576 48C672 53.3 768 58.7 864 56C960 53.3 1056 42.7 1152 37.3C1248 32 1344 32 1392 32L1440 32V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="#faf8f5"/>
        </svg>
      </div>
    </section>
  );
}
