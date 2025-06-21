import React from "react";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function Services() {
  const fadeRef = useFadeInOnScroll();
  const services = [
    "Classic Manicure",
    "Deluxe Manicure",
    "Gel Manicure",
    "Dip Powder",
    "Acrylic Full Set",
    "Acrylic Fill",
    "Classic Pedicure",
    "Deluxe Pedicure",
  ];

  return (
    <section
      id="services"
      ref={fadeRef}
      className="p-8 bg-accent opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-6 text-center text-primary">
        Our Services
      </h3>
      <ul className="max-w-2xl mx-auto space-y-4">
        {services.map((service) => (
          <li key={service} className="bg-white rounded shadow p-4">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}