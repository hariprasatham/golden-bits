import React, { useState } from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Giordano Chiasa</div>

      {/* Center equal sign */}
      <div className={`equal-sign`} onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          data-bbox="44 84 112 32"
          viewBox="0 0 200 200"
          height="45"
          width="45"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
        >
          <g>
            <path d="M156 84v6H44v-6h112z"></path>
            <path d="M156 110v6H44v-6h112z"></path>
          </g>
        </svg>
      </div>

      {/* Desktop navigation */}
      <nav className="nav">
        <a href="#contact">Contact us</a>
      </nav>

      {/* Mobile hamburger icon as SVG */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Inline SVG */}
        <svg
          data-bbox="44 84 112 32"
          viewBox="0 0 200 200"
          height="45"
          width="45"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
        >
          <g>
            <path d="M156 84v6H44v-6h112z"></path>
            <path d="M156 110v6H44v-6h112z"></path>
          </g>
        </svg>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="menu-list">
          <div className="menu-list-close-btn-container">
            <button onClick={() => setMenuOpen(false)}>
              <svg
                data-bbox="20 20 160.001 160"
                viewBox="0 0 200 200"
                height="35"
                width="35"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
              >
                <g>
                  <path d="m110.518 100 67.301-67.302a7.385 7.385 0 0 0 2.181-5.26 7.385 7.385 0 0 0-2.177-5.257c-1.404-1.406-3.272-2.181-5.26-2.181s-3.856.775-5.259 2.179L100 89.482 32.698 22.181C31.294 20.775 29.426 20 27.438 20s-3.856.775-5.258 2.178a7.387 7.387 0 0 0-2.18 5.26c0 1.988.775 3.856 2.179 5.259L89.482 100 22.18 167.303a7.385 7.385 0 0 0-2.18 5.259c0 1.988.774 3.856 2.179 5.259 1.404 1.404 3.272 2.178 5.259 2.178s3.854-.774 5.259-2.178L100 110.519l67.304 67.303c1.404 1.404 3.272 2.178 5.259 2.178s3.854-.774 5.258-2.177a7.385 7.385 0 0 0 2.18-5.26 7.386 7.386 0 0 0-2.179-5.259L110.518 100z"></path>
                </g>
              </svg>
            </button>
          </div>
          <a className="menu-link active" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a className="menu-link " onClick={() => setMenuOpen(false)} href="#about">
            About
          </a>
          <a className="menu-link " onClick={() => setMenuOpen(false)} href="#menu">
            Our Flavours
          </a>
          <a className="menu-link " onClick={() => setMenuOpen(false)} href="#gallery">
            Gallery
          </a>
          <a className="menu-link " onClick={() => setMenuOpen(false)} href="#contact">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
