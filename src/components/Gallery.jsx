import React, { useState } from "react";
import "./Gallery.css";
import img1 from "../assets/gallery/nails1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  const [active, setActive] = useState(null);
  const allImages = [...images, ...images];

  return (
    <section className="gallery">
      <div className="gallery-track">
        {allImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Nail design ${index % images.length}`}
            className={active === index ? "enlarged" : ""}
            onClick={() =>
              setActive(active === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}