import React from "react";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function Booking() {
    const fadeRef = useFadeInOnScroll();
  return (
    <section
      id="booking"
      ref={fadeRef}
      className="p-8 bg-accent opacity-0 translate-y-4"
    >
      <h3 className="text-2xl font-bold mb-4 text-primary text-center">
        Book Your Appointment
      </h3>
      <div className="text-center">
        <a
          href="/contact.html"
          className="inline-block px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary/80"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}