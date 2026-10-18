import { ArrowRight, ArrowUpRight, Globe2, ShoppingBag, ShieldCheck, Truck, PackageCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

const sourcingSteps = [
  { number: "01", title: "Tell us what you need", description: "Share the product, specifications, quantity and destination market." },
  { number: "02", title: "Align on the details", description: "We coordinate sourcing options, requirements and order-specific documentation." },
  { number: "03", title: "Move forward with clarity", description: "Discuss pricing, packaging and logistics with the relevant Shipweiser team." },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="split-home" aria-label="Choose a Shipweiser business">
        <article className="business-panel business-panel-ecom">
          <img className="panel-background-image" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=85" alt="" fetchPriority="high" />
          <div className="panel-image-wash panel-image-wash-light" />
          <div className="panel-topline"><ShoppingBag aria-hidden="true" /> <span>Domestic business <i /> E-commerce</span></div>
          <div className="panel-main">
            <span className="section-kicker">DISCOVER SHIPWEISER</span>
            <h1>Good products.<br /><span className="text-accent">Better connections.</span></h1>
            <p>Explore thoughtfully sourced products and connect directly with our team for product details, availability and domestic orders.</p>
            <div className="panel-actions">
              <Link to="/products" className="button-primary">Explore catalogue <ArrowUpRight size={18} /></Link>
              <a className="button-secondary" href={`https://wa.me/917020967599?text=${encodeURIComponent("Hello Shipweiser, I am enquiring about your product catalogue.")}`} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="panel-meta"><span>DOMESTIC ENQUIRIES</span><a className="panel-email" href={`mailto:${siteContent.emails.ecommerce}`}>{siteContent.emails.ecommerce}</a></div>
        </article>
        <span className="split-label" aria-hidden="true">OR</span>
        <article className="business-panel business-panel-export">
          <img className="panel-background-image" src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=85" alt="" fetchPriority="high" />
          <div className="panel-image-wash panel-image-wash-dark" />
          <div className="panel-topline"><Globe2 aria-hidden="true" /> <span>International business <i /> Export &amp; Import</span></div>
          <div className="panel-main">
            <span className="section-kicker">INDIA TO THE WORLD</span>
            <h1>Indian quality.<br /><span>Global possibilities.</span></h1>
            <p>Connect with Indian agricultural, textile and healthcare supply categories through responsive sourcing and trade coordination.</p>
            <div className="panel-actions">
              <Link to="/products" className="button-primary">Explore export products <ArrowUpRight size={18} /></Link>
              <Link to="/contact" className="button-secondary">Request a catalogue <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="panel-meta"><span>EXPORT / IMPORT ENQUIRIES</span><a className="panel-email" href={`mailto:${siteContent.emails.export}`}>{siteContent.emails.export}</a></div>
        </article>
      </section>

      <section className="proof-strip" aria-label="Shipweiser sourcing focus">
        <div className="container proof-strip-inner">
          <div className="proof-intro"><span className="section-kicker">ONE CONNECTED PARTNER</span><strong>From product discovery to trade coordination.</strong></div>
          <div className="proof-item"><span className="proof-icon"><PackageCheck size={20} /></span><span><strong>Multi-category sourcing</strong><small>Agriculture, textiles &amp; healthcare</small></span></div>
          <div className="proof-item"><span className="proof-icon"><Globe2 size={20} /></span><span><strong>Domestic &amp; global enquiries</strong><small>One point of contact for your needs</small></span></div>
          <div className="proof-item"><span className="proof-icon"><ShieldCheck size={20} /></span><span><strong>Clear, order-specific details</strong><small>Specifications confirmed per enquiry</small></span></div>
        </div>
      </section>

      <section className="section-wrap home-categories">
        <div className="container">
          <div className="section-title section-title-row">
            <div><span className="section-kicker">OUR PRODUCT CATEGORIES</span><h2>Rooted in India.<br /><span className="text-muted">Ready for new markets.</span></h2></div>
            <p>Explore our sourcing categories and tell us what your business needs. We’ll help route your enquiry to the right team.</p>
          </div>
          <div className="product-grid">{siteContent.products.map((product, index) => (
            <article className="product-card premium-product-card" key={product.slug}>
              <Link to={`/products/${product.slug}`} className="product-card-image-link" aria-label={`View ${product.name}`}>
                <img className="product-card-image" src={product.image} alt={product.name} loading="lazy" decoding="async" />
                <span className="product-image-index">0{index + 1}</span>
                <span className="product-image-arrow"><ArrowUpRight size={19} /></span>
              </Link>
              <div className="product-card-body">
                <span className="section-kicker">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <Link className="text-link" to={`/products/${product.slug}`}>Explore category <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}</div>
          <div className="category-footnote"><Check size={16} /><span>Availability, specifications, packaging and applicable documentation are confirmed for each enquiry.</span></div>
        </div>
      </section>

      <section className="sourcing-section">
        <div className="container sourcing-layout">
          <div className="sourcing-copy">
            <span className="section-kicker">A CLEARER WAY TO SOURCE</span>
            <h2>Good trade starts with a good conversation.</h2>
            <p>Whether you are buying for your business in India or exploring suppliers for an international market, start with your requirements. Our team will help you understand the next steps.</p>
            <Link to="/contact" className="button-primary">Talk to our team <ArrowUpRight size={18} /></Link>
          </div>
          <div className="sourcing-steps">{sourcingSteps.map((step) => <div className="sourcing-step" key={step.number}><span className="sourcing-step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><ArrowRight className="sourcing-step-arrow" size={19} /></div>)}</div>
        </div>
      </section>

      <section className="section-wrap trust-section">
        <div className="container">
          <div className="section-title"><span className="section-kicker">WHY SHIPWEISER</span><h2>Built around clarity, care and coordination.</h2><p>We focus on practical communication and order-specific information—not one-size-fits-all promises.</p></div>
          <div className="benefit-strip">
            <div className="benefit-item"><ShieldCheck size={24} /><strong>Quality focus</strong><span>Product specifications and applicable compliance are confirmed per order.</span></div>
            <div className="benefit-item"><PackageCheck size={24} /><strong>Indian sourcing</strong><span>Connections to product origins and sourcing markets across India.</span></div>
            <div className="benefit-item"><Globe2 size={24} /><strong>Global connections</strong><span>Support for international buyer enquiries and trade coordination.</span></div>
            <div className="benefit-item"><Truck size={24} /><strong>Reliable coordination</strong><span>Clear communication around logistics, timelines and requirements.</span></div>
          </div>
        </div>
      </section>

      <section className="closing-section premium-closing"><div className="container closing-inner"><div><span className="section-kicker">LET'S WORK TOGETHER</span><h2>Have a product or bulk order enquiry?</h2><p>Tell us what you are looking for and where it needs to go. We’ll connect you with the right Shipweiser team.</p></div><Link to="/contact" className="button-primary">Start an enquiry <ArrowUpRight size={18} /></Link></div></section>
    </main>
  );
}
