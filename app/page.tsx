export const metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description: "Discover curated trips across India and beyond — Kerala backwaters to Kenyan safaris, personally vetted by our travel experts.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import {
  indiaDestinations,
  internationalDestinations,
} from "@/data/destinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DestinationSection
        title="India Destinations"
        destinations={indiaDestinations}
      />
      <DestinationSection
        title="International Destinations"
        destinations={internationalDestinations}
      />
      <Footer />
    </>
  );
}
