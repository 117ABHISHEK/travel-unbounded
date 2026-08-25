import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-navy text-parchment border-b border-navy-light">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/" className="font-display font-bold text-xl tracking-tight flex items-center gap-1">
          Travel <span className="text-amber">∞</span> Unbounded
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-amber transition-colors">Home</Link>
          <Link href="/about" className="hover:text-amber transition-colors">About</Link>
          <Link href="/contact" className="hover:text-amber transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}