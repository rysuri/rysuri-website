import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/components/Navbar.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { User, Send, LibraryBig, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
    console.log("Hello");
    window.scrollTo({ top: 0 });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <Link to="/" onClick={handleNavClick}>
            SURIYATHEP
          </Link>
        </div>

        {/* Hamburger button - visible on mobile only */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={handleNavClick}>
            <User className="info-icon-nav" />
            About
          </Link>
          <Link to="/portfolio" className="nav-link" onClick={handleNavClick}>
            <LibraryBig className="info-icon-nav" />
            Portfolio
          </Link>
          <Link to="/contact" className="nav-link" onClick={handleNavClick}>
            <Send className="info-icon-nav" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
