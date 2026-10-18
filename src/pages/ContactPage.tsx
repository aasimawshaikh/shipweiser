import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteContent } from "../data/siteContent";

export default function ContactPage() {
  const [type,setType] = useState("export");
  const [name,setName] = useState("");
  const [company,setCompany] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const targetEmail = type === "ecommerce" ? siteContent.emails.ecommerce : siteContent.emails.export;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Shipweiser enquiry — ${type === "ecommerce" ? "E-Commerce" : "Export & Import"}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company || "Not provided"}\nReply email: ${email}\n\nEnquiry:\n${message}`);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  }
  return <main>
    <section className="page-hero"><div className="container"><span className="section-kicker">CONTACT SHIPWEISER</span><h1>Let's start a conversation.</h1><p>Choose the team that best fits your enquiry. We will help you connect with the right person for domestic product enquiries or international trade.</p></div></section>
    <section className="section-wrap"><div className="container">
      <div className="contact-grid">
        <article className="contact-card"><Mail size={25}/><h2>E-Commerce & Domestic Business</h2><p>For product catalogue, availability, domestic orders and general product enquiries.</p><a href={`mailto:${siteContent.emails.ecommerce}`}>{siteContent.emails.ecommerce}</a><p><a href={`https://wa.me/917020967599?text=${encodeURIComponent("Hello Shipweiser, I have a domestic product enquiry.")}`} target="_blank" rel="noreferrer">Message us on WhatsApp →</a></p></article>
        <article className="contact-card"><Mail size={25}/><h2>Export & Import</h2><p>For international bulk orders, sourcing, product specifications and export-import enquiries.</p><a href={`mailto:${siteContent.emails.export}`}>{siteContent.emails.export}</a></article>
      </div>
      <div className="content-grid" style={{marginTop:48}}>
        <div className="content-copy"><span className="section-kicker">CONTACT DETAILS</span><h2>We're based in India.</h2><p><Phone size={17} style={{display:"inline",verticalAlign:"middle",marginRight:8}}/><a href="tel:+917020967599">{siteContent.phone}</a></p><p><MapPin size={17} style={{display:"inline",verticalAlign:"middle",marginRight:8}}/>{siteContent.locations}</p><p>General email: <a href={`mailto:${siteContent.emails.general}`}>{siteContent.emails.general}</a></p><p className="notice-small">This form opens your default email application to send the enquiry. No information is stored by this website.</p></div>
        <div><span className="section-kicker">SEND AN ENQUIRY</span><form className="contact-form" onSubmit={submit}>
          <label>Enquiry type<select value={type} onChange={e=>setType(e.target.value)}><option value="export">Export & Import</option><option value="ecommerce">E-Commerce / Domestic</option></select></label>
          <label>Your name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full name"/></label>
          <label>Company (optional)<input value={company} onChange={e=>setCompany(e.target.value)} placeholder="Company name"/></label>
          <label>Your email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label>
          <label>How can we help?<textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us about the products, quantity or enquiry"/></label>
          <button type="submit" className="button-primary">Prepare email to {type === "ecommerce" ? "E-Commerce" : "Export team"} <Send size={17}/></button>
        </form></div>
      </div>
    </div></section>
  </main>;
}
