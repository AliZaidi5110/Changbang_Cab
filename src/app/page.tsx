import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tariffs from "@/components/Tariffs";
import HowItWorks from "@/components/HowItWorks";
import Drivers from "@/components/Drivers";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Tariffs />
        <HowItWorks />
        <Drivers />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <FloatingCall />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
