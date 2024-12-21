"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "@/components/Navbar"; // Ensure Navbar component is in the correct path
import ContactForm from "@/components/ContactForm"; // Ensure ContactForm component is in the correct path
import Footer from "@/components/Footer"; // Ensure Footer component is in the correct path
import Image from "next/image";

const ArtistBookingPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-96 lg:h-[400px] mt-[64px]">
        <Image
          src="/artist-booking.jpeg"
          alt="Artist Booking"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="px-6 py-12">
        <div className="max-w-2xl mx-auto antialiased pt-4">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {/* Badge */}
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              {/* Title */}
              <p className={twMerge("text-xl font-semibold mb-4")}>
                {item.title}
              </p>

              {/* Content */}
              <div className="text-sm prose prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))}

          {/* Additional Content */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Mavi Events for Artist Booking?
            </h2>
            <p className="mb-6">
              Mavi Events has built a reputation for excellence in artist
              booking and management. Our team has a deep understanding of the
              unique challenges and opportunities within the live events
              industry, enabling us to deliver outstanding results.
            </p>
            <p className="mb-6">
              With a tailored approach for every event, we ensure seamless
              coordination between artists, venues, and clients. Whether it's
              negotiating contracts, planning logistics, or managing on-site
              operations, we handle it all with precision and professionalism.
            </p>
            <p>
              Partner with Mavi Events to elevate your event experience. Let's
              create unforgettable memories together!
            </p>
          </div>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
};

const dummyContent = [
  {
    title: "Comprehensive Artist Booking & Management",
    description: (
      <>
        <p>
          Mavi Events specializes in seamless artist booking and management,
          handling every aspect from contract negotiation to logistical
          planning. Our expertise ensures a stress-free experience for both
          artists and event organizers.
        </p>
        <p>
          With a vast network of global connections, we bring renowned
          performers and emerging talent to your events, creating unforgettable
          experiences for audiences.
        </p>
      </>
    ),
    badge: "Service Highlights",
  },
  {
    title: "Our Approach",
    description: (
      <>
        <p>
          At Mavi Events, we prioritize clear communication and collaboration
          with artists and clients to deliver outstanding events. Our tailored
          strategies ensure that every detail aligns with your vision.
        </p>
        <p>
          From small intimate gatherings to large-scale festivals, our team is
          dedicated to delivering excellence in every project.
        </p>
      </>
    ),
    badge: "Our Strategy",
  },
  {
    title: "Key Benefits of Partnering with Us",
    description: (
      <>
        <ul className="list-disc ml-6">
          <li>Access to a global network of artists and performers.</li>
          <li>Seamless coordination and logistics management.</li>
          <li>Tailored event solutions to match your specific needs.</li>
          <li>Comprehensive support from planning to execution.</li>
        </ul>
        <p className="mt-4">
          Mavi Events is committed to delivering exceptional service and
          ensuring the success of your events.
        </p>
      </>
    ),
    badge: "Why Us",
  },
];

export default ArtistBookingPage;
