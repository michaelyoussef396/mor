"use client";
import React from "react";
import OurValues from "@/components/Our-values";

const AboutUs = () => {
  return (
    <section className="bg-white text-black py-16">
      {/* About Us Intro */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h2>
        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
          Mavi Events is a premier event management company dedicated to curating unforgettable live music experiences across Australia. Founded by a passionate team of event professionals and music enthusiasts, Mavi Events specializes in connecting international artists with Australian audiences, offering a platform for world-class performances in an exciting and vibrant market.
        </p>
      </div>

      {/* Why Did We Start? */}
      <div className="container mx-auto px-6 mt-12 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
        <div className="flex-1 max-w-lg mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Why Did We Start?</h3>
          <p className="text-lg leading-relaxed">
            The idea behind Mavi Events was born out of a belief: Australia’s music scene deserves more exposure to international talent, and international artists should have more opportunities to perform in front of Australian audiences. We aim to bridge that gap by bringing diverse global talent to major cities like Sydney, Melbourne, Brisbane, and Perth.
          </p>
        </div>
        <div className="flex-1 max-w-lg mx-auto">
          <img
            src="/events.jpg"
            alt="Why we started"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Our Vision */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Our Vision</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            At Mavi Events, our vision is to be the leading agency in Australia for booking and producing international live performances. We aim to elevate the Australian live music scene by bringing world-class talent to our shores, creating lasting memories and fostering cultural exchange.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-6 mt-16">
        <h3 className="text-3xl font-semibold text-center mb-12">Our Values</h3>
        <OurValues />
      </div>
    </section>
  );
};

export default AboutUs;
