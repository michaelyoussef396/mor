"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left md:justify-items-center">
        {/* About Section */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4">About Mavi Events</h4>
          <p className="text-sm text-gray-400">
            Mavi Events is dedicated to curating unforgettable live music
            experiences by connecting international artists with Australian
            audiences.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#services" className="hover:text-white transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-white transition">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <span>📍 Sydney, Australia</span>
            </li>
            <li>
              <a href="mailto:info@mavievents.com" className="hover:text-white">
                📧 info@mavievents.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-white">
                📞 +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Mavi Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
