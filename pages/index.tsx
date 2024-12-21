import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
    </main>
  );
}
