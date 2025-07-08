import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-8 bg-white/90 backdrop-blur shadow-md border-b">
      <h1 className="text-3xl font-script text-primary">Soleil Nail Lounge</h1>
      <nav>
        <ul className="flex space-x-6 text-lg">
          {/* Custom nav logic for special links */}
          <li>
            <a
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/services.html"
              className="hover:text-primary transition-colors duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="tel:+15125551234"
              className="hover:text-primary transition-colors duration-200"
            >
              Booking
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-primary transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#coupons"
              className="hover:text-primary transition-colors duration-200"
            >
              Coupons
            </a>
          </li>
          <li>
            <a
              href="tel:+15125551234"
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
