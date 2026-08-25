import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Plan Your Trip</h1>
        <p className="text-gray-600 mb-8">
          Tell us where you want to go, and our travel expert will get back to you within 24 hours.
        </p>
        <BookingForm />
      </section>
      <Footer />
    </>
  );
}