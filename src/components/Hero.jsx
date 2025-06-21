import React from "react";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nails-bg.jpg')" }}
    >
      <div className="bg-white/70 p-10 rounded shadow-lg">
        <h2 className="text-5xl font-script text-primary drop-shadow">Welcome to Soleil Nail Lounge</h2>
        <p className="mt-4 text-lg text-gray-700">Where beauty meets relaxation</p>
        <a
          href="#booking"
          className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary/80"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}