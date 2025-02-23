import React from "react";
import "./css/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>
        &copy; {new Date().getFullYear()} MMMC Construction Services. All rights
        reserved.
      </p>
    </footer>
  );
}
