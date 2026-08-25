import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          India&apos;s Most Trusted<br />Experiential Travel Experts
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Discover journeys built around people, culture and unforgettable experiences.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium"
        >
          Plan Your Trip
        </Link>
      </div>
    </section>
  );
}