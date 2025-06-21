import React from "react";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function Contact() {
  const fadeRef = useFadeInOnScroll();
  return (
    <section
      id="contact"
      ref={fadeRef}
      className="p-8 bg-accent opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-6 text-center text-primary">
        Contact Information
      </h3>
      <div className="max-w-xl mx-auto space-y-2 text-center">
        <p>27500 Novi Rd, Novi, MI 48377 (Located in Twelve Oaks Mall)</p>
        <p>(512) 555-1234</p>
        <p>Hours: 9 AM - 9 PM</p>
        <p>Holiday Hours: 9 AM - 10 PM</p>
      </div>
    </section>
  );
}
