import React from "react";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    "I felt so pampered and relaxed! My nails look stunning.",
    "Absolutely loved the ambiance and the care I received.",
    "The best nail salon experience I’ve ever had – 10/10!",
  ];

  return (
    <section className="p-8 bg-white border-t-2 border-black">
      <h3 className="text-2xl font-bold mb-4 text-teal-700">Testimonials</h3>
      <div className="space-y-6">
        {reviews.map((testimonial, index) => (
          <div key={index} className="bg-white shadow rounded p-4 border border-black">
            <p className="italic font-cursive text-lg">"{testimonial}"</p>
            <div className="flex mt-2 text-yellow-400">
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