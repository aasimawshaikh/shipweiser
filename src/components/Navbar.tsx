import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link
          to="/"
          className="brand"
          aria-label="Shipweiser home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">S</span>
          <span className="brand-name">{siteContent.brand}</span>
          <span className="brand-period">.</span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label="Main navigation"
        >
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}