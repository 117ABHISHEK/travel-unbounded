export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
        <div>
          <p className="text-white font-semibold text-lg mb-1">Travel Unbounded</p>
          <p>India&apos;s Most Trusted Experiential Travel Experts</p>
        </div>
        <div className="flex flex-col gap-1">
          <span>Bengaluru · Kochi · Nairobi</span>
          <span>&copy; {new Date().getFullYear()} Travel Unbounded. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}