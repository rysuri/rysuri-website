import { Link } from "react-router-dom";
import "../css/components/Navbar.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { User, Send, LibraryBig } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <Link to="/">SURIYATHEP</Link>
        </div>

        <div className="navbar-links" id="navbar-links">
          <Link to="/" className="nav-link">
            <User className="info-icon-nav" />
            About
          </Link>
          <Link to="/portfolio" className="nav-link">
            <LibraryBig className="info-icon-nav" />
            Portolio
          </Link>
          <Link to="/contact" className="nav-link">
            <Send className="info-icon-nav" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
