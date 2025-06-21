import React from "react";

export default function BackgroundImage() {
  return (
    <section
      className="h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1613082291900-5cebd7ef7dcf?auto=format&fit=crop&w=1920&q=80')",
      }}
    ></section>
  );
}