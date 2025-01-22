"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Adjust the path if needed
import ContactForm from "@/components/ContactForm"; // Adjust the path if needed
import Footer from "@/components/Footer"; // Adjust the path if needed

const PromotionMarketingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Full-width image */}
      <div className="relative">
        <img
          src="/Promotion-Marketing.jpg"
          alt="Promotion & Marketing"
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
            <h2 className="text-xl font-bold mb-4">Our Marketing Services</h2>
            <p className="text-sm mb-4">
              Our marketing team will ensure your event reaches the right audience through:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                <strong>Targeted advertising:</strong> Utilizing digital marketing, social media campaigns, and influencer collaborations.
              </li>
              <li>
                <strong>Event partnerships:</strong> Collaborating with local media, venues, and influencers to amplify event awareness.
              </li>
              <li>
                <strong>Ticketing:</strong> Managing online ticketing platforms to make the purchasing process seamless for attendees.
              </li>
            </ul>
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
    title: "Comprehensive Promotion & Marketing Services",
    description: (
      <>
        <p>
          At MOR, our marketing team works diligently to ensure your
          events are promoted effectively and reach the right audience. We
          leverage the latest marketing tools and strategies to maximize
          visibility and engagement.
        </p>
        <p>
          From digital advertising to influencer collaborations, we create
          buzzworthy campaigns that drive ticket sales and generate excitement
          around your events.
        </p>
      </>
    ),
    badge: "What We Do",
  },
  {
    title: "Why Our Marketing Works",
    description: (
      <>
        <p>
          With years of experience and a deep understanding of audience behavior, our marketing
          strategies are designed to create meaningful connections between your
          event and attendees. We work closely with local partners and media to
          amplify awareness and maximize turnout.
        </p>
        <p>
          Whether you &apos; re hosting a concert, festival, or private event, our
          team ensures that your event gets the attention it deserves.
        </p>
      </>
    ),
    badge: "Our Strategy",
  },
];

export default PromotionMarketingPage;
