"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Adjust the path if needed
import ContactForm from "@/components/ContactForm"; // Adjust the path if needed
import Footer from "@/components/Footer"; // Adjust the path if needed

const EventPlanningPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Full-width image */}
      <div className="relative">
        <img
          src="/Event-Planning-Production.jpg"
          alt="Event Planning & Production"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="max-w-3xl mx-auto antialiased pt-4">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {/* Badge */}
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              {/* Title */}
              <p className="text-xl font-semibold mb-4">{item.title}</p>

              {/* Content */}
              <div className="text-sm prose prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))}

          {/* Additional Section */}
          <div className="my-10">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <p className="text-sm mb-4">
              We offer end-to-end event planning, ensuring every performance is
              executed flawlessly. Our services include:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                <strong>Venue selection:</strong> Choosing the perfect venue
                based on the artist &apos; s style and audience.
              </li>
              <li>
                <strong>Event logistics:</strong> Managing travel,
                accommodation, and technical requirements.
              </li>
              <li>
                <strong>Sound and lighting:</strong> Providing high-quality
                sound, lighting, and AV equipment to ensure a professional
                experience.
              </li>
              <li>
                <strong>Event branding and marketing:</strong> Creating
                effective promotional campaigns to generate buzz and sell
                tickets.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-12 bg-gray-100">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const dummyContent = [
  {
    title: "Seamless Event Planning & Production",
    description: (
      <>
        <p>
          At Mavi Events, we handle every aspect of event planning and
          production, ensuring a smooth and memorable experience. From venue
          selection to on-site coordination, our team of experts delivers
          exceptional service.
        </p>
        <p>
          Whether it’s a corporate gathering, music festival, or private party,
          we provide tailored solutions to bring your vision to life.
        </p>
      </>
    ),
    badge: "What We Do",
  },
  {
    title: "Why Choose Us",
    description: (
      <>
        <p>
          Our team is dedicated to creating flawless events by combining
          innovation, attention to detail, and a passion for excellence. With
          years of experience, we’ve built a reputation for delivering high-end
          events that leave a lasting impression.
        </p>
        <p>
          We work closely with our clients to understand their unique needs and
          craft bespoke events that surpass expectations.
        </p>
      </>
    ),
    badge: "Our Approach",
  },
];

export default EventPlanningPage;
