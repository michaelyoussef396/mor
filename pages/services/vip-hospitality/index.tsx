"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Adjust the path if needed
import ContactForm from "@/components/ContactForm"; // Adjust the path if needed
import Footer from "@/components/Footer"; // Adjust the path if needed

const VIPHospitalityPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Full-width image */}
      <div className="relative">
        <img
          src="/vip.jpg"
          alt="VIP & Hospitality Services"
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
            <h2 className="text-xl font-bold mb-4">Our VIP Services</h2>
            <p className="text-sm mb-4">
              We understand that VIP experiences elevate events to another level.
              Our VIP services include:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                <strong>Backstage Access:</strong> Exclusive access to backstage areas.
              </li>
              <li>
                <strong>Meet-and-Greet Opportunities:</strong> Personal interactions with the artists.
              </li>
              <li>
                <strong>Premium Hospitality Services:</strong> Enjoy high-end accommodations, catering, and amenities.
              </li>
            </ul>
            <p className="text-sm mt-4">
              Elevate your event experience with our premium VIP services, creating unforgettable memories for your guests.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-12">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const dummyContent = [
  {
    title: "Exceptional VIP & Hospitality Services",
    description: (
      <>
        <p>
          At Mavi Events, we specialize in creating exclusive VIP experiences that elevate events to another level.
          Our tailored VIP packages are designed to provide premium services that enhance the overall event experience.
        </p>
        <p>
          Whether it &apos; s a high-profile performance or a private gathering, we ensure every VIP guest feels valued and pampered.
        </p>
      </>
    ),
    badge: "What We Do",
  },
  {
    title: "Why Choose Our VIP Services",
    description: (
      <>
        <p>
          We understand the importance of creating memorable experiences for your most valued guests.
          Our team delivers personalized services, ensuring that every detail is handled with precision and care.
        </p>
        <p>
          From exclusive backstage access to premium hospitality, our VIP services are second to none.
        </p>
      </>
    ),
    badge: "Our Approach",
  },
];

export default VIPHospitalityPage;
