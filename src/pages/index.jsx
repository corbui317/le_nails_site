import React from "react";
import "../assets/styles.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BackgroundImage from "../components/BackgroundImage";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      <BackgroundImage />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}