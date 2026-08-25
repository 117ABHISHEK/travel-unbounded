export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  price: number;
  category: "india" | "international";
}

export const destinations: Destination[] = [
  // ---------- INDIA ----------
  {
    id: 1,
    name: "Kerala",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    description:
      "Drift through the palm-fringed backwaters of Alleppey on a traditional houseboat, and wake up to misty tea gardens in Munnar.",
    price: 25000,
    category: "india",
  },

  {
    id: 2,
    name: "Himachal Pradesh",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chase snow-capped peaks and pine-scented valleys across Manali and Shimla, with cozy mountain stays and riverside cafes.",
    price: 22000,
    category: "india",
  },

  {
    id: 3,
    name: "Ladakh",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ride high-altitude passes past turquoise lakes and ancient monasteries in one of the most surreal landscapes on Earth.",
    price: 35000,
    category: "india",
  },

  {
    id: 4,
    name: "Andaman",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
    description:
      "Dive into coral reefs and unwind on powder-white beaches across the Andaman Islands' turquoise coastline.",
    price: 30000,
    category: "india",
  },

  {
    id: 5,
    name: "Goa",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    description:
      "From lazy beach shacks to Portuguese-era old towns, Goa blends sun, seafood, and laid-back nightlife.",
    price: 18000,
    category: "india",
  },

  // ---------- INTERNATIONAL ----------
  {
    id: 6,
    name: "Kenya",
    country: "Kenya",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spot the Big Five at dawn on a Masai Mara safari, guided by local trackers who know the plains by heart.",
    price: 145000,
    category: "international",
  },

  {
    id: 7,
    name: "Vietnam",
    country: "Vietnam",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    description:
      "Cruise the limestone karsts of Ha Long Bay at sunset and wander the lantern-lit streets of Hoi An.",
    price: 85000,
    category: "international",
  },

  {
    id: 8,
    name: "Tanzania",
    country: "Tanzania",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    description:
      "Witness the Great Migration across the endless Serengeti plains, then unwind on Zanzibar's white-sand coast.",
    price: 155000,
    category: "international",
  },

  {
    id: 9,
    name: "Iceland",
    country: "Iceland",
    image:
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=1200&q=80",
    description:
      "Chase thundering waterfalls, black-sand beaches, and the Northern Lights across Iceland's dramatic Ring Road.",
    price: 175000,
    category: "international",
  },

  {
    id: 10,
    name: "Sri Lanka",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ride the hill-country train through emerald tea plantations and spot leopards in Yala National Park.",
    price: 60000,
    category: "international",
  },
];

export const indiaDestinations = destinations.filter(
  (d) => d.category === "india"
);

export const internationalDestinations = destinations.filter(
  (d) => d.category === "international"
);