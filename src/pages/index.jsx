import React from "react";
import "../assets/styles.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
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
        <hr className="border-t-2 border-yellow-400 w-1/2 mx-auto" />
        <Gallery />
        <hr className="border-t-2 border-yellow-400 w-1/2 mx-auto" />
        <Booking />
        <hr className="border-t-2 border-yellow-400 w-1/2 mx-auto" />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}