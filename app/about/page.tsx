export const metadata = {
  title: "About Travel Unbounded",
  description: "Learn about Travel Unbounded’s story, our offices in Bengaluru, Kochi and Nairobi, and why travelers trust us with their journeys.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Check } from "lucide-react";

const offices = [
  {
    city: "Bengaluru",
    role: "Headquarters",
    lines: ["541, 7th Main Rd, HAL 2nd Stage", "Indiranagar, Bengaluru – 560008", "India"],
    icon: MapPin,
  },
  {
    city: "Kochi",
    role: "Kerala Office",
    lines: ["LR Towers, S Janatha Road", "Palavivatton, Kochi – 682025", "India"],
    icon: MapPin,
  },
  {
    city: "Nairobi",
    role: "Kenya Office",
    lines: ["Westpark Towers, Muthithi Road", "Nairobi, P.O. Box 6950", "Postal Code 00100, Kenya"],
    icon: MapPin,
  },
];

const whyChooseUs = [
  "Personally-vetted experiences — our team has been everywhere we recommend",
  "Local guides with real, on-ground expertise",
  "Fully custom itineraries, never off-the-shelf",
  "24x7 support before, during, and after your trip",
];

export default function About() {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 border border-teal/20 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-teal rounded-full" />
            <span className="font-mono text-xs text-teal tracking-wider uppercase">Our Story</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight text-navy mb-6">
            India’s Most Trusted Experiential Travel Experts
          </h1>
          <p className="text-slate leading-relaxed mb-4 text-lg">
            Travel Unbounded was born from a simple belief — that the best journeys
            aren’t sold from a catalogue. They’re built around the people taking them.
          </p>
          <p className="text-slate leading-relaxed mb-4 text-lg">
            Headquartered in Bengaluru with offices in Kochi and Nairobi, we design trips
            that blend comfort, culture, and raw nature. Every destination, resort, and
            activity we recommend has been personally experienced by our team.
          </p>
          <p className="text-slate leading-relaxed text-lg">
            From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay
            at sunset — we go where real stories are written, and we bring you along.
          </p>
        </div>

        {/* Locations */}
        <div className="mb-20">
          <p className="font-mono text-teal text-xs tracking-widest uppercase mb-2">Where We Are</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-8">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offices.map((office) => (
              <div
                key={office.city}
                className="p-6 bg-white border border-ink/5 rounded-2xl hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <office.icon size={20} className="text-amber-dark" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-navy">{office.city}</h3>
                    <p className="text-xs text-slate font-mono">{office.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate/80 leading-relaxed">
                  {office.lines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < office.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <p className="font-mono text-teal text-xs tracking-widest uppercase mb-2">Why Us</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 p-5 bg-white border border-ink/5 rounded-xl"
              >
                <span className="w-6 h-6 bg-amber/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-amber-dark" />
                </span>
                <p className="text-sm text-slate leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}