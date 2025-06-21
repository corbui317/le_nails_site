import React from "react";
import { FaYelp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-white border-y-2 border-black">
      <h3 className="text-2xl font-bold mb-4 text-teal-700">Contact Information</h3>
      <p>27500 Novi Rd, Novi, MI 48377 (Located in Twelve Oaks Mall)</p>
      <p>(512) 555-1234</p>
      <p>Hours: 9 AM - 9 PM</p>
      <p>Holiday Hours: 9 AM - 10 PM</p>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.yelp.com/biz/le-nails-novi" target="_blank" rel="noopener noreferrer">
          <FaYelp size={30} className="text-red-500 hover:text-red-700" />
        </a>
        <a href="https://www.instagram.com/soleilnailsalon/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="text-teal-500 hover:text-teal-700" />
        </a>
      </div>
    </section>
  );
}