// src/components/Gallery.js
import React from "react";
import "./Gallery.css";

const images = [
  "/src/assets/gallery/nails1.jpg",
  "/src/assets/gallery/2.jpg",
  "/src/assets/gallery/3.jpg",
  "/src/assets/gallery/4.jpg",
  "/src/assets/gallery/5.jpg",
  "/src/assets/gallery/6.jpg",
];

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Work</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Nail design ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
