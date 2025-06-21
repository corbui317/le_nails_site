import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-center py-6 mt-10 shadow-inner border-t-2 border-black">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Soleil Nail Lounge. All rights reserved.</p>
    </footer>
  );
}