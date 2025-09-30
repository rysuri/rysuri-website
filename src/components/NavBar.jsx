import { Link } from "react-router-dom";
import "../css/components/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        <div className="navbar-brand">
          <Link to="/">
            Suriyathep
          </Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            About
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portolio
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
