import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Soleil Nail Lounge. All rights reserved.</p>
    </footer>
  );
}