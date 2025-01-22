"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Adjust the path if needed
import ContactForm from "@/components/ContactForm"; // Adjust the path if needed
import Footer from "@/components/Footer"; // Adjust the path if needed

const CustomEventSolutionsPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Full-width image */}
      <div className="relative">
        <img
          src="/events2.jpg"
          alt="Custom Event Solutions"
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
            <h2 className="text-xl font-bold mb-4">Tailored Solutions for Every Event</h2>
            <p className="text-sm mb-4">
              No two events are the same, and at MOR, we believe in delivering tailored solutions to meet
              your unique requirements. From large-scale festivals to intimate club shows, we bring your vision to life.
            </p>
            <p className="text-sm mt-4">
              Our approach is highly collaborative, ensuring that every detail reflects your expectations. Trust us to
              design and execute events that leave a lasting impression on your audience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-12 ">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const dummyContent = [
  {
    title: "Custom Event Solutions Tailored to Your Needs",
    description: (
      <>
        <p>
          At MOR, we specialize in crafting unique and personalized event experiences. No matter the scale
          or type of event, we work closely with our clients to ensure every detail aligns with their vision.
        </p>
        <p>
          From conceptualization to execution, our dedicated team ensures a seamless and memorable experience for
          your audience.
        </p>
      </>
    ),
    badge: "What We Do",
  },
  {
    title: "Our Approach to Custom Events",
    description: (
      <>
        <p>
          Collaboration is at the heart of our process. We listen to your needs, understand your goals, and
          develop innovative solutions that deliver exceptional results.
        </p>
        <p>
          Our expertise spans across various types of events, ensuring that we have the right tools and experience
          to bring your ideas to life.
        </p>
      </>
    ),
    badge: "Our Strategy",
  },
];

export default CustomEventSolutionsPage;
