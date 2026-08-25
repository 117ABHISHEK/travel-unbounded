import DestinationCard from "./DestinationCard";

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

interface DestinationSectionProps {
  title: string;
  destinations: Destination[];
}

export default function DestinationSection({ title, destinations }: DestinationSectionProps) {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {destinations.map((d) => (
          <DestinationCard key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
}