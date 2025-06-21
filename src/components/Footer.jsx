import React from "react";
import { FaYelp, FaInstagram } from "react-icons/fa";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Booking", "#booking"],
  ["About Us", "#about"],
  ["Coupons", "#coupons"],
  ["Contact", "/contact.html"],
];

export default function Footer() {
  const fadeRef = useFadeInOnScroll();
  return (
    <footer
      ref={fadeRef}
      className="bg-primary text-white text-center py-6 mt-10 opacity-0 translate-y-4"
    >
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