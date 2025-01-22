"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-midnightPurple text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left md:justify-items-center">
        {/* About Section */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4 text-violetPurple">About MOR</h4>
          <p className="text-sm text-gray-300">
            MOR is dedicated to curating unforgettable live music experiences by
            connecting international artists with Australian audiences.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4 text-violetPurple">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#upcoming-events" className="hover:text-white transition">
                Upcoming Events
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
          <h4 className="text-xl font-bold mb-4 text-violetPurple">Get In Touch</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span>📍 Melbourne, Australia</span>
            </li>
            <li>
              <a href="mailto:info@mor.com" className="hover:text-white transition">
                📧 info@mor.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-white transition">
                📞 +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MOR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
