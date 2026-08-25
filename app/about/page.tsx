export const metadata = {
  title: "About Travel Unbounded",
  description: "Learn about Travel Unbounded's story, our offices in Bengaluru, Kochi and Nairobi, and why travelers trust us with their journeys.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          India&apos;s Most Trusted Experiential Travel Experts
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Travel Unbounded was born from a simple belief — that the best journeys
          aren&apos;t sold from a catalogue. They&apos;re built around the people taking them.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Headquartered in Bengaluru with offices in Kochi and Nairobi, we design trips
          that blend comfort, culture, and raw nature. Every destination, resort, and
          activity we recommend has been personally experienced by our team.
        </p>
        <p className="text-gray-700 leading-relaxed mb-12">
          From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay
          at sunset — we go where real stories are written, and we bring you along.
        </p>

        <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-1">Bengaluru — Headquarters</h3>
            <p className="text-sm text-gray-600">
              541, 7th Main Rd, HAL 2nd Stage<br />
              Indiranagar, Bengaluru – 560008<br />
              India
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-1">Kochi — Kerala Office</h3>
            <p className="text-sm text-gray-600">
              LR Towers, S Janatha Road<br />
              Palavivatton, Kochi – 682025<br />
              India
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-1">Nairobi — Kenya Office</h3>
            <p className="text-sm text-gray-600">
              Westpark Towers, Muthithi Road<br />
              Nairobi, P.O. Box 6950<br />
              Postal Code 00100, Kenya
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li className="p-4 bg-gray-50 rounded-lg">✓ Personally-vetted experiences — our team has been everywhere we recommend</li>
          <li className="p-4 bg-gray-50 rounded-lg">✓ Local guides with real, on-ground expertise</li>
          <li className="p-4 bg-gray-50 rounded-lg">✓ Fully custom itineraries, never off-the-shelf</li>
          <li className="p-4 bg-gray-50 rounded-lg">✓ 24x7 support before, during, and after your trip</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}