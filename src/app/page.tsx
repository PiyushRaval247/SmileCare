import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services limit={3} />
      <AboutDoctor />
      <Gallery />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
