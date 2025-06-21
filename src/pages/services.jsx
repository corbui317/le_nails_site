import React from "react";
import "../assets/styles.css";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import bg from "../assets/gallery/nails-bg.jpg";

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover text-gray-800 font-body"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/80">
        <Header />
        <hr className="border-t-2 border-yellow-400 w-1/2 mx-auto" />
        <Services />
        <Footer />
      </div>
    </div>
  );
}