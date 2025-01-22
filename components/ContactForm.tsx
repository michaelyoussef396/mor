"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-6 py-16" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8 text-violetPurple">
        Contact Us
      </h2>
      <form
        className="grid grid-cols-1 gap-6 bg-midnightPurple p-8 rounded-lg shadow-lg md:grid-cols-2"
        action="#"
        method="POST"
      >
        {/* Name Input */}
        <div className="col-span-1">
          <Label htmlFor="name" className="mb-2 block text-gray-200">
            Full Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full rounded-md p-3 text-sm bg-violetPurple text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-violetPurple focus:outline-none"
            required
          />
        </div>

        {/* Email Input */}
        <div className="col-span-1">
          <Label htmlFor="email" className="mb-2 block text-gray-200">
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded-md p-3 text-sm bg-violetPurple text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-violetPurple focus:outline-none"
            required
          />
        </div>

        {/* Subject Input */}
        <div className="col-span-1 md:col-span-2">
          <Label htmlFor="subject" className="mb-2 block text-gray-200">
            Subject
          </Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            className="w-full rounded-md p-3 text-sm bg-violetPurple text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-violetPurple focus:outline-none"
            required
          />
        </div>

        {/* Message Input */}
        <div className="col-span-1 md:col-span-2">
          <Label htmlFor="message" className="mb-2 block text-gray-200">
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="w-full h-32 rounded-md p-3 text-sm bg-violetPurple text-white placeholder-gray-300 border-none focus:ring-2 focus:ring-violetPurple focus:outline-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-violetPurple hover:bg-midnightPurple text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
