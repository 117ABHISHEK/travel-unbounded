export default function Footer() {
  return (
    <footer className="relative bg-navy text-parchment/70 overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-amber flex items-center justify-center text-navy font-display font-bold text-sm">
                ∞
              </span>
              <span className="font-display font-bold text-xl text-parchment">
                Travel <span className="text-amber">Unbounded</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-parchment/50 max-w-xs">
              India’s Most Trusted Experiential Travel Experts. Every destination,
              resort, and activity we recommend has been personally experienced by our team.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-parchment text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Plan a Trip" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-parchment/50 hover:text-amber transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="md:col-span-4">
            <h3 className="font-display font-semibold text-parchment text-sm uppercase tracking-wider mb-4">Our Offices</h3>
            <ul className="space-y-3">
              {["Bengaluru", "Kochi", "Nairobi"].map((city) => (
                <li key={city} className="flex items-center gap-2 text-sm text-parchment/50">
                  <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-parchment/40 font-mono">
            © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
          </p>
          <p className="text-xs text-parchment/30">
            Designed with care for unforgettable journeys
          </p>
        </div>
      </div>
    </footer>
  );
}