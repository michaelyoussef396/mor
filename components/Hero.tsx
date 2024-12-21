"use client";
import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const Hero = () => {
  return (
    <HeroHighlight containerClassName="bg-black text-white">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Experience the Magic of{" "}
          <Highlight className="bg-gradient-to-r from-teal-300 to-cyan-400 text-black dark:from-teal-400 dark:to-cyan-500">
            Live Events
          </Highlight>
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-light">
          Connecting world-class artists with Australian audiences for
          unforgettable performances.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#upcoming-events"
            className="px-8 py-3 text-lg font-semibold bg-teal-500 hover:bg-teal-600 text-black rounded-md shadow-lg transition"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            className="px-8 py-3 text-lg font-semibold bg-white text-black hover:bg-gray-200 rounded-md shadow-lg transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
