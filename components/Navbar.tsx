"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const services = [
    { id: 1, title: "Artist Booking & Management", url: "/services/artist-booking" },
    { id: 2, title: "Event Planning & Production", url: "/services/event-planning" },
    { id: 3, title: "Promotion & Marketing", url: "/services/promotion-marketing" },
    { id: 4, title: "Tour Management", url: "/services/tour-management" },
    { id: 5, title: "VIP & Hospitality Services", url: "/services/vip-hospitality" },
    { id: 6, title: "Custom Event Solutions", url: "/services/custom-events" },
  ];

  const navigation = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About Us", url: "#about-us" },
    { id: 3, title: "Why Choose Us", url: "#why-choose-us" },
    { id: 4, title: "Contact", url: "#contact" },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setServicesOpen(false), 200);
    setDropdownTimeout(timeout);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 text-white shadow-lg">
      <div className="flex items-center justify-between px-5 lg:px-10 py-4 max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold">
          Mavi Events
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navigation.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Insert "Our Services" after "About Us" */}
              {index === 1 && (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="font-medium text-sm uppercase hover:text-teal-400 transition duration-200">
                    Services
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-64 p-4 z-50">
                      <div className="flex flex-col space-y-4 text-sm">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={service.url}
                            className="hover:text-teal-500 transition duration-200"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              <Link
                href={item.url}
                className="font-medium text-sm uppercase hover:text-teal-400 transition duration-200"
              >
                {item.title}
              </Link>
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden hover:text-teal-400 focus:outline-none"
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
        <div className="fixed top-0 left-0 w-full h-screen bg-black/95 z-40 flex flex-col items-center justify-center space-y-6">
          {navigation.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Insert "Our Services" after "About Us" */}
              {index === 1 && (
                <div className="flex flex-col items-center">
                  <button
                    className="text-white font-medium text-xl uppercase hover:text-teal-400 transition duration-200"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Our Services
                  </button>
                  {servicesOpen && (
                    <ul className="mt-4 space-y-2 text-center">
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={service.url}
                            className="block px-4 py-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <Link
                href={item.url}
                className="text-white font-medium text-xl uppercase hover:text-teal-400 transition duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
