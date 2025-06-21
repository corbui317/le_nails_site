import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-8 bg-white/90 backdrop-blur shadow-md border-b">
      <h1 className="text-3xl font-script text-primary">Soleil Nail Lounge</h1>
      <nav>
          <ul className="flex space-x-6 text-lg">
            {[
              ['Home', '#home'],
              ['Services', '/services.html'],
              ['Booking', '#booking'],
              ['About Us', '#about'],
              ['Coupons', '#coupons'],
              ['Contact', '/contact.html'],
            ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-primary transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}