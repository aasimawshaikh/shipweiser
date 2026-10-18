import { ArrowRight, ArrowUpRight, Globe2, ShoppingBag, ShieldCheck, Truck, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

export default function HomePage() {
  return <>
    <main>
      <section className="split-home" aria-label="Choose a Shipweiser business">
        <article className="business-panel business-panel-ecom">
          <div className="panel-topline"><ShoppingBag /> Domestic business · E-commerce</div>
          <div className="panel-main">
            <span className="section-kicker">DISCOVER SHIPWEISER</span>
            <h1>Everyday products. <span className="text-accent">Thoughtfully sourced.</span></h1>
            <p>Explore our product catalogue and connect with our team for product information, availability and orders across India.</p>
            <div className="panel-actions"><Link to="/products" className="button-primary">Explore catalogue <ArrowUpRight size={18}/></Link><a className="button-secondary" href={`https://wa.me/917020967599?text=${encodeURIComponent("Hello Shipweiser, I am enquiring about your product catalogue.")}`} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowRight size={16}/></a></div>
          </div>
          <div className="panel-meta"><span>DOMESTIC ENQUIRIES</span><a className="panel-email" href={`mailto:${siteContent.emails.ecommerce}`}>{siteContent.emails.ecommerce}</a></div>
          <div className="panel-visual"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80" alt="" /></div>
        </article>
        <span className="split-label" aria-hidden="true">OR</span>
        <article className="business-panel business-panel-export">
          <div className="panel-topline"><Globe2 /> International business · Export & Import</div>
          <div className="panel-main">
            <span className="section-kicker">INDIA TO THE WORLD</span>
            <h1>Connecting quality <span style={{color:"#9bd4cb"}}>from India to the world.</span></h1>
            <p>We connect international buyers with Indian agricultural products, textiles and medical disposables through reliable sourcing and coordinated trade.</p>
            <div className="panel-actions"><Link to="/products" className="button-primary">Explore export products <ArrowUpRight size={18}/></Link><Link to="/contact" className="button-secondary">Request a catalogue <ArrowRight size={16}/></Link></div>
          </div>
          <div className="panel-meta"><span>EXPORT / IMPORT ENQUIRIES</span><a className="panel-email" href={`mailto:${siteContent.emails.export}`}>{siteContent.emails.export}</a></div>
          <div className="panel-visual"><img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=80" alt="" /></div>
        </article>
      </section>
      <section className="section-wrap"><div className="container">
        <div className="section-title"><span className="section-kicker">OUR PRODUCT CATEGORIES</span><h2>Indian sourcing. <span className="text-muted">Global possibilities.</span></h2><p>Shipweiser brings together agricultural, textile and healthcare supply categories for domestic buyers and international trade enquiries.</p></div>
        <div className="product-grid">{siteContent.products.map((product) => <article className="product-card" key={product.slug}><img className="product-card-image" src={product.image} alt={product.name} loading="lazy"/><div className="product-card-body"><span className="section-kicker">{product.category}</span><h3>{product.name}</h3><p>{product.shortDescription}</p><Link className="text-link" to={`/products/${product.slug}`}>View product details <ArrowRight size={16}/></Link></div></article>)}</div>
      </div></section>
      <section className="section-wrap" style={{background:"#f5f8fa"}}><div className="container">
        <div className="section-title"><span className="section-kicker">WHY SHIPWEISER</span><h2>Trust built into every connection.</h2><p>We focus on clear communication, sourcing relationships and dependable coordination from enquiry to delivery.</p></div>
        <div className="benefit-strip">
          <div className="benefit-item"><ShieldCheck size={24}/><strong>Quality focus</strong><span>Product specifications and applicable compliance are confirmed per order.</span></div>
          <div className="benefit-item"><PackageCheck size={24}/><strong>Indian sourcing</strong><span>Connections to product origins and sourcing markets across India.</span></div>
          <div className="benefit-item"><Globe2 size={24}/><strong>Global connections</strong><span>Support for international buyer enquiries and trade coordination.</span></div>
          <div className="benefit-item"><Truck size={24}/><strong>Reliable coordination</strong><span>Clear communication around logistics, timelines and requirements.</span></div>
        </div>
      </div></section>
      <section className="closing-section"><div className="container closing-inner"><div><span className="section-kicker">LET'S WORK TOGETHER</span><h2>Have a product or bulk order enquiry?</h2><p>Contact the right Shipweiser team for domestic product enquiries or international sourcing and export requirements.</p></div><Link to="/contact" className="button-primary">Contact Shipweiser <ArrowUpRight size={18}/></Link></div></section>
    </main>
  </>;
}
