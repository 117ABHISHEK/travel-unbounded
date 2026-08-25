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
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-navy/10 hover:-translate-y-2 transition-all duration-500 border border-ink/5">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        {/* Country badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-navy text-xs font-mono font-medium rounded-full">
            {country}
          </span>
        </div>
        {/* Price overlay */}
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1.5 bg-navy/80 backdrop-blur-sm text-amber text-sm font-display font-semibold rounded-full">
            ₹{price.toLocaleString("en-IN")}+
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-navy group-hover:text-teal transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-slate mt-1.5 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 pt-4 border-t border-ink/5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors group/btn"
          >
            Explore
            <span className="transition-transform group-hover/btn:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
