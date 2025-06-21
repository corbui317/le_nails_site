import React from "react";
import { FaStar } from "react-icons/fa";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function Testimonials() {
  const fadeRef = useFadeInOnScroll();
  const reviews = [
    "I felt so pampered and relaxed! My nails look stunning.",
    "Absolutely loved the ambiance and the care I received.",
    "The best nail salon experience I've ever had – 10/10!",
    "My nails have never looked better. I'll definitely be back!",
    "Friendly staff and gorgeous designs every visit.",
    "Exceptional attention to detail. Highly recommended!",
    "Quick service and amazing quality.",
    "The salon is super clean and inviting.",
    "Great prices for top-notch work!",  
  ];
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <section
      ref={fadeRef}
      className="p-8 bg-accent border-t overflow-hidden opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-8 text-primary text-center">Testimonials</h3>
      <div className="flex w-max space-x-6 animate-marquee">
        {scrollingReviews.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 min-w-[250px]">
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