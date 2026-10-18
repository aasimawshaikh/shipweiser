import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">S</span>
              <span className="brand-name">{siteContent.brand}</span>
              <span className="brand-period">.</span>
            </Link>

            <p className="footer-note">
              Draft footer copy. Replace with verified company information.
            </p>
          </div>

          <div className="footer-links">
            <span className="footer-heading">Explore</span>
            {siteContent.navigation.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-contact">
            <span className="footer-heading">Get in touch</span>
            <Link to="/contact" className="footer-contact-link">
              Contact Shipweiser <ArrowUpRight size={16} />
            </Link>
            <p>Verified contact details to be added.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteContent.brand}
          </span>
          <span>Website redesign in progress</span>
        </div>
      </div>
    </footer>
  );
}