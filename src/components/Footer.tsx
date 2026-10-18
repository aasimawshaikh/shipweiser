import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";

export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main">
    <div className="footer-brand-column"><Link to="/" className="brand footer-brand"><span className="brand-mark">S</span><span className="brand-name">{siteContent.brand}</span><span className="brand-period">.</span></Link><p className="footer-note">{siteContent.tagline}. Sourcing agricultural products, textiles and healthcare supplies from India for domestic and international buyers.</p></div>
    <div className="footer-links"><span className="footer-heading">Explore</span>{siteContent.navigation.map(item=><Link key={item.href} to={item.href}>{item.label}</Link>)}</div>
    <div className="footer-contact"><span className="footer-heading">Contact teams</span><p>Domestic / E-Commerce</p><a className="footer-contact-link" href={`mailto:${siteContent.emails.ecommerce}`}>{siteContent.emails.ecommerce}</a><p>Export / Import</p><a className="footer-contact-link" href={`mailto:${siteContent.emails.export}`}>{siteContent.emails.export}</a><p><a href="tel:+917020967599">{siteContent.phone}</a></p><Link to="/contact" className="footer-contact-link">All contact details <ArrowUpRight size={16}/></Link></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} {siteContent.brand}. All rights reserved.</span><span>{siteContent.tagline}</span></div></div></footer>;
}
