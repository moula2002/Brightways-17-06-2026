import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ bannerImage, bannerHeading }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Detect system Reduce Motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    
    const handleMotionChange = (e) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);
    
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  const toggleMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <>
      <div className="header-0">
        {/* SKIP LINK */}
        <a href="#main-content" className="skip-link" style={{
          position: "absolute",
          top: "-40px",
          left: "10px",
          background: "#000",
          color: "#fff",
          padding: "8px",
          zIndex: "1000",
          textDecoration: "none"
        }} onFocus={(e) => {
          e.target.style.top = "10px";
        }} onBlur={(e) => {
          e.target.style.top = "-40px";
        }}>
          Skip to main content
        </a>

        {/* CONDITIONAL BANNER IMAGE - only show if bannerImage is provided */}
        {bannerImage && (
          <div 
            className="page-banner" 
            style={{ 
              width: "100%", 
              overflow: "hidden", 
              position: "relative",
              backgroundColor: "#1a3e60" // Changed to dark to fix contrast checker
            }}
          >
            <div style={{
              position: "relative",
              width: "100%",
              height: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img
                src={bannerImage}
                alt=""
                aria-hidden="true"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  display: "block" 
                }}
              />
              {/* Dark overlay for text readability */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }} />
            </div>
            {bannerHeading && (
              <h2 style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#ffffff",
                fontSize: "36px",
                fontWeight: "700",
                textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                margin: "0",
                textAlign: "center",
                maxWidth: "90%",
                letterSpacing: "0.5px"
              }}>
                {bannerHeading}
              </h2>
            )}
          </div>
        )}

        {/* HEADER LANDMARK */}
        <header className="navigation" role="banner" aria-label="Main header">
          {/* Logo */}
          <Link to="/" className="brand-name" aria-label="Brightways Financial - Home">
            <img
              src="/logo2.jpg"
              className="roy"
              alt="Brightways Financial Services logo"
              style={{ width: "160px" }}
            />
          </Link>

          {/* Hamburger for Mobile */}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-expanded={isNavExpanded}
            aria-label={isNavExpanded ? "Close menu" : "Open menu"}
            style={{ background: "#357997", color: "white", border: "none", fontSize: "24px", padding: "5px 10px", cursor: "pointer" }}
          >
            {isNavExpanded ? "✕" : "☰"}
          </button>

          {/* NAVIGATION LANDMARK */}
          <nav
            className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
            aria-label="Main navigation"
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    bsPrefix="custom-dropdown-toggle"
                    id="dropdown-basic"
                    aria-label="Services menu"
                    style={{ fontWeight: "bold" }}
                  >
                    Service ▼
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/service" aria-label="View all services">
                      All Services
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Link to="/investor">Investor Charter</Link>
              </li>

              <li>
                <Link to="/complaint-table">Complaint Table</Link>
              </li>

              <li>
                <Link to="/about-us">About us</Link>
              </li>

              <li>
                <Link to="/disclosure-disclaimer">Disclosure & Disclaimer</Link>
              </li>

              <li>
                <Link to="/contact">Contact us</Link>
              </li>

              <li>
                <Link to="/accessibility-statement" aria-label="Accessibility statement">
                  Accessibility
                </Link>
              </li>

              {/* Payment Button */}
              <li>
                <Link to="/payment" className="btn-payment" aria-label="Make a payment">
                  Payment
                </Link>
              </li>

              {/* KYC Button */}
              <li>
                <Link to="/kyc" className="btn-kyc" aria-label="Complete KYC form">
                  KYC
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;