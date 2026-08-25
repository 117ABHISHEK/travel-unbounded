import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import { indiaDestinations, internationalDestinations } from "@/data/destinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DestinationSection title="India Destinations" destinations={indiaDestinations} />
      <DestinationSection title="International Destinations" destinations={internationalDestinations} />
      <Footer />
    </>
  );
}