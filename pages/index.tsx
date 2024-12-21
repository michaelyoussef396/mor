import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </main>
  );
}
