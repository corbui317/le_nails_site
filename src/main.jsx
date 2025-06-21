import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/index.jsx";
import ContactPage from "./pages/contact.jsx";
import "./assets/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const path = window.location.pathname;

root.render(
  <React.StrictMode>
    {path === "/contact.html" ? <ContactPage /> : <LandingPage />}
  </React.StrictMode>
);