"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-navy/20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold leading-none">
            <span className="bg-gradient-to-r from-gold via-orange to-teal bg-clip-text text-transparent">∞</span>
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold tracking-[0.2em] text-parchment/60 uppercase">Travel</span>
            <span className="text-sm font-bold tracking-tight text-parchment">Unbounded</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-parchment/70 hover:text-amber rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2.5 bg-amber hover:bg-amber-dark text-navy text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber/25"
          >
            Plan a Trip
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-parchment rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-parchment rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-parchment rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-64" : "max-h-0"}`}>
        <div className="px-5 pb-4 flex flex-col gap-1 border-t border-white/10">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-parchment/70 hover:text-amber rounded-lg hover:bg-white/5 transition-all"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-5 py-3 bg-amber text-navy text-sm font-semibold rounded-full text-center transition-all"
          >
            Plan a Trip
          </Link>
        </div>
      </div>
    </header>
  );
}
