export const metadata = {
  title: "Plan Your Trip | Travel Unbounded",
  description: "Send us your travel enquiry and our experts will get back to you within 24 hours.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber/10 border border-amber/20 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-amber rounded-full" />
              <span className="font-mono text-xs text-amber-dark tracking-wider uppercase">Get in Touch</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Plan Your Trip
            </h1>
            <p className="text-slate leading-relaxed mb-8">
              Tell us where you want to go, and our travel expert will get back to you
              within 24 hours with a personalized itinerary.
            </p>

            <div className="space-y-5">
              {[
                { icon: "✉", title: "Email Us", desc: "hello@travelunbounded.com" },
                { icon: "☎", title: "Call Us", desc: "+91 80 4567 8900" },
                { icon: "📍", title: "Visit Us", desc: "Bengaluru • Kochi • Nairobi" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-10 h-10 bg-navy/5 rounded-xl flex items-center justify-center text-navy flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy">{item.title}</p>
                    <p className="text-sm text-slate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-ink/5 rounded-2xl p-6 md:p-8 shadow-sm">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}