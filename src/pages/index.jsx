import React from "react";
import "../assets/styles.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import bg from "../assets/gallery/nails-bg.jpg";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover text-gray-800 font-body"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/80">
        <Header />
        <Hero />
        <Gallery />
        <Contact />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}