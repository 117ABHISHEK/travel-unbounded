import DestinationCard from "./DestinationCard";
import type { Destination } from "@/data/destinations";

interface DestinationSectionProps {
  title: string;
  destinations: Destination[];
}

export default function DestinationSection({ title, destinations }: DestinationSectionProps) {
  return (
    <section className="py-16 md:py-20 px-5 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-teal text-xs tracking-widest uppercase mb-2">Explore</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy">
            {title}
          </h2>
        </div>
        <div className="hidden md:block h-px bg-gradient-to-r from-ink/10 to-transparent flex-1 ml-8 mb-3" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {destinations.map((d) => (
          <DestinationCard key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
}
