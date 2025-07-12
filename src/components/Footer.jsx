// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "#fff", padding: "1rem", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} EasySarkari. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
