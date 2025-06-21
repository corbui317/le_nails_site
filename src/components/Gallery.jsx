import React from "react";
import "./Gallery.css";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";
import img1 from "../assets/gallery/nails1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

function GalleryImage({ src, alt }) {
  const ref = useFadeInOnScroll();
  return <img ref={ref} src={src} alt={alt} className="opacity-0 translate-y-4" />;
}
export default function Gallery() {
  return (
    <section id="services" className="gallery">
      {images.map((src, index) => (
        <GalleryImage key={index} src={src} alt={`Nail design ${index + 1}`} />
      ))}
    </section>
  );
}