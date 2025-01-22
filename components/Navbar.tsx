"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About Us", url: "#about-us" },
    { id: 3, title: "Upcoming Events", url: "/upcoming-events" },
    { id: 4, title: "Why Choose Us", url: "#why-choose-us" },
    { id: 5, title: "Contact", url: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="flex items-center justify-between px-5 lg:px-10 py-4 max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold">
          Mavi Events
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-8"
          aria-label="Main Navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="font-medium text-sm uppercase hover:text-violetPurple transition duration-200"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden hover:text-violetPurple focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-midnightPurple/95 z-40 flex flex-col items-center justify-center space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="text-white font-medium text-xl uppercase hover:text-violetPurple transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
