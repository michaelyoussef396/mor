"use client";
import React from "react";
import OurValues from "@/components/Our-values";

const AboutUs = () => {
  return (
    <section className="bg-midnightPurple text-white py-16" id="about-us">
      {/* About Us Intro */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-violetPurple">
          About Us
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto text-gray-200">
          MOR is a full-service event management company dedicated to creating
          unforgettable live music experiences across Australia. With expertise
          in artist booking, event production, promotion, and VIP hospitality,
          we specialize in connecting global talent with Australian audiences.
        </p>
      </div>

      {/* What We Offer */}
      <div className="container mx-auto px-6 mt-12">
        <h3 className="text-3xl font-semibold mb-8 text-center text-violetPurple">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-violetPurple p-6 rounded-lg shadow-md border border-violetPurple">
            <h4 className="text-2xl font-semibold mb-4 text-white">
              Artist Booking & Management
            </h4>
            <p className="text-lg leading-relaxed text-gray-200">
              From contract negotiation to logistics, we manage every detail of
              booking top-tier international artists for Australian events,
              ensuring seamless experiences for both artists and organizers.
            </p>
          </div>
          <div className="bg-violetPurple p-6 rounded-lg shadow-md border border-violetPurple">
            <h4 className="text-2xl font-semibold mb-4 text-white">
              Event Planning & Production
            </h4>
            <p className="text-lg leading-relaxed text-gray-200">
              Offering end-to-end event planning, including venue selection,
              sound and lighting, and on-site coordination to execute flawless
              performances for any occasion.
            </p>
          </div>
          <div className="bg-violetPurple p-6 rounded-lg shadow-md border border-violetPurple">
            <h4 className="text-2xl font-semibold mb-4 text-white">
              Promotion & Marketing
            </h4>
            <p className="text-lg leading-relaxed text-gray-200">
              Leveraging digital marketing, social media campaigns, and
              influencer partnerships to maximize your event&apos;s visibility and
              ticket sales.
            </p>
          </div>
          <div className="bg-violetPurple p-6 rounded-lg shadow-md border border-violetPurple">
            <h4 className="text-2xl font-semibold mb-4 text-white">
              VIP & Hospitality Services
            </h4>
            <p className="text-lg leading-relaxed text-gray-200">
              Crafting premium VIP experiences with backstage access,
              meet-and-greet opportunities, and unparalleled hospitality to
              elevate your events.
            </p>
          </div>
        </div>
      </div>

      {/* Why Did We Start? */}
      <div className="container mx-auto px-6 mt-16 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
        <div className="flex-1 max-w-lg mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-violetPurple">
            Why Did We Start?
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            MOR was founded with the belief that Australia&apos;s music scene
            deserves greater access to global talent. By bridging the gap
            between international artists and Australian audiences, we create
            opportunities for cultural exchange and unforgettable performances.
          </p>
        </div>
        <div className="flex-1 max-w-lg mx-auto">
          <img
            src="/events.jpg"
            alt="Why we started"
            className="rounded-lg shadow-lg w-full h-auto border border-violetPurple"
          />
        </div>
      </div>

      {/* Our Vision */}
      <div className="bg-violetPurple py-16 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-white">Our Vision</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-100">
            At MOR, we aim to be Australia&apos;s leading agency for booking and
            producing international live performances. Our mission is to enhance
            the local music scene by delivering world-class events that foster
            cultural exchange and leave lasting impressions.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-6 mt-16">
        <h3 className="text-3xl font-semibold text-center mb-12 text-violetPurple">
          Our Values
        </h3>
        <OurValues />
      </div>
    </section>
  );
};

export default AboutUs;
