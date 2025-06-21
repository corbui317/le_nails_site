import React from "react";
import { FaYelp, FaInstagram } from "react-icons/fa";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Booking", "#booking"],
  ["About Us", "#about"],
  ["Coupons", "#coupons"],
  ["Contact", "/contact.html"],
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-6 mt-10">
            <nav className="mb-4">
        <ul className="flex justify-center space-x-4">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.yelp.com/biz/le-nails-novi" target="_blank" rel="noopener noreferrer">
          <FaYelp size={30} className="hover:text-red-200" />
        </a>
        <a href="https://www.instagram.com/soleilnailsalon/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="hover:text-gray-200" />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Soleil Nail Lounge. All rights reserved.</p>
    </footer>
  );
}