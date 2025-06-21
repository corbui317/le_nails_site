import React from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    "I felt so pampered and relaxed! My nails look stunning.",
    "Absolutely loved the ambiance and the care I received.",
    "The best nail salon experience I've ever had – 10/10!",
  ];

  return (
    <section className="p-8 bg-accent border-t">
      <h3 className="text-3xl font-script mb-8 text-primary text-center">Testimonials</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded p-6">
            <p className="italic font-script text-lg text-gray-800">“{testimonial}”</p>
            <div className="flex mt-2 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}