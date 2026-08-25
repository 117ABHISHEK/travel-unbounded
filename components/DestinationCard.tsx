import Link from "next/link";

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  description: string;
  price: number;
}

export default function DestinationCard({ name, country, image, description, price }: DestinationCardProps) {
  return (
    <div className="group bg-parchment rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* perforated divider */}
      <div className="border-t-2 border-dashed border-navy/20 mx-4" />
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-navy">{name}</h3>
        <p className="text-xs text-navy/60 font-mono uppercase tracking-wide">{country}</p>
        <p className="text-sm text-ink/70 mt-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-mono text-sm text-navy font-medium">₹{price.toLocaleString("en-IN")}+</span>
          <Link
            href="/contact"
            className="text-sm px-4 py-2 bg-navy text-parchment rounded-full hover:bg-teal transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}