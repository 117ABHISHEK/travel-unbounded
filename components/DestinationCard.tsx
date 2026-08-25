interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  description: string;
  price: number;
}

export default function DestinationCard({ name, country, image, description, price }: DestinationCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}, {country}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-medium">Starting from ₹{price.toLocaleString("en-IN")}</span>
          <button className="text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}