import React from "react";
import { FaYelp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-accent border-t">
      <h3 className="text-3xl font-script mb-6 text-center text-primary">Contact Information</h3>
      <div className="max-w-xl mx-auto space-y-2 text-center">
        <p>27500 Novi Rd, Novi, MI 48377 (Located in Twelve Oaks Mall)</p>
        <p>(512) 555-1234</p>
        <p>Hours: 9 AM - 9 PM</p>
        <p>Holiday Hours: 9 AM - 10 PM</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.yelp.com/biz/le-nails-novi" target="_blank" rel="noopener noreferrer">
            <FaYelp size={30} className="text-red-500 hover:text-red-700" />
          </a>
          <a href="https://www.instagram.com/soleilnailsalon/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-teal-500 hover:text-teal-700" />
          </a>
        </div>
        <iframe
          title="location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450923!2d-122.41941568468194!3d37.77492977975847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cc313ea7%3A0xdeadbeefcafef00d!2sNail%20Salon!5e0!3m2!1sen!2sus!4v1617744298176!5m2!1sen!2sus"
          className="w-full h-60 mt-6 border"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}