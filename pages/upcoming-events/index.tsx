"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Adjust path if necessary
import Footer from "@/components/Footer"; // Adjust path if necessary

const UpcomingEvents = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-midnightPurple text-white px-6">
        <h1 className="text-4xl font-bold mb-4 text-violetPurple">
          Stay Tuned!
        </h1>
        <p className="text-lg text-gray-200">Exciting events are coming soon.</p>
      </main>
      <Footer />
    </>
  );
};

export default UpcomingEvents;
