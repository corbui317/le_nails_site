import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md border-b-2 border-black">
      <h1 className="text-3xl font-extrabold text-teal-600">Soleil Nail Lounge</h1>
      <nav>
        <ul className="flex space-x-4 text-lg">
          <li><a href="#home" className="hover:text-teal-500">Home</a></li>
          <li><a href="#services" className="hover:text-teal-500">Services</a></li>
          <li><a href="#booking" className="hover:text-teal-500">Booking</a></li>
          <li><a href="#about" className="hover:text-teal-500">About Us</a></li>
          <li><a href="#coupons" className="hover:text-teal-500">Coupons</a></li>
        </ul>
      </nav>
    </header>
  );
}