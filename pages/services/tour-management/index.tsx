"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Adjust the path if needed
import ContactForm from "@/components/ContactForm"; // Adjust the path if needed
import Footer from "@/components/Footer"; // Adjust the path if needed

const TourManagementPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Full-width image */}
      <div className="relative">
        <img
          src="/Tour-Management.jpg"
          alt="Tour Management"
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
            <h2 className="text-xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-sm mb-4">
              For international artists on tour, we offer complete tour management services in Australia. 
              This includes:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                <strong>Scheduling:</strong> Creating a seamless and efficient tour schedule.
              </li>
              <li>
                <strong>Venue Coordination:</strong> Ensuring optimal venues are booked and prepared for each performance.
              </li>
              <li>
                <strong>Transportation:</strong> Managing all transportation needs, including flights, buses, and transfers.
              </li>
              <li>
                <strong>Hospitality:</strong> Organizing accommodations, catering, and other comforts for the artists and their teams.
              </li>
            </ul>
            <p className="text-sm mt-4">
              Our goal is to ensure artists and their teams have a stress-free experience while focusing on what matters most—their performance.
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
    title: "Seamless Tour Management",
    description: (
      <>
        <p>
          At Mavi Events, we specialize in comprehensive tour management for international artists performing in Australia.
          Our team ensures that every aspect of the tour is handled with precision and care, allowing artists to focus entirely on their performances.
        </p>
        <p>
          From managing complex schedules to coordinating venues, we ensure a flawless experience for both the artists and their teams.
        </p>
      </>
    ),
    badge: "What We Do",
  },
  {
    title: "Why Choose Our Tour Management Services",
    description: (
      <>
        <p>
          With years of experience in event and tour management, our team brings unparalleled expertise to every tour.
          We understand the unique challenges of international touring and provide tailored solutions to meet the needs of artists and their teams.
        </p>
        <p>
          Our commitment to excellence ensures a stress-free and enjoyable tour experience, allowing performers to shine on stage.
        </p>
      </>
    ),
    badge: "Our Strategy",
  },
];

export default TourManagementPage;
