import { useMemo, useState, type FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, CheckCircle2, ClipboardList, Minus, Plus, Search, Send, Trash2 } from "lucide-react";
import { siteContent } from "../data/siteContent";

type QuoteItem = { slug: string; quantity: number };

export default function ProductPage() {
  const { slug } = useParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [company, setCompany] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [buyerMessage, setBuyerMessage] = useState("");
  const [sentToEmail, setSentToEmail] = useState(false);

  const product = siteContent.products.find(item => item.slug === slug);
  const categories = ["All categories", ...Array.from(new Set(siteContent.products.map(item => item.category)))];
  const filteredProducts = useMemo(() => siteContent.products.filter(item => {
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || [item.name, item.shortDescription, item.category, item.origin, ...item.highlights].join(" ").toLowerCase().includes(term);
    return matchesSearch && (category === "All categories" || item.category === category);
  }), [search, category]);
  const selectedProducts = quoteItems.map(selected => ({
    ...selected,
    product: siteContent.products.find(item => item.slug === selected.slug)!,
  })).filter(item => item.product);
  const itemCount = quoteItems.length;
  const totalUnits = quoteItems.reduce((sum, item) => sum + item.quantity, 0);

  function addProduct(slugToAdd: string) {
    setQuoteItems(current => current.some(item => item.slug === slugToAdd)
      ? current.map(item => item.slug === slugToAdd ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { slug: slugToAdd, quantity: 1 }]);
    setSentToEmail(false);
  }
  function updateQuantity(slugToUpdate: string, quantity: number) {
    if (quantity < 1) {
      setQuoteItems(current => current.filter(item => item.slug !== slugToUpdate));
      return;
    }
    setQuoteItems(current => current.map(item => item.slug === slugToUpdate ? { ...item, quantity } : item));
    setSentToEmail(false);
  }
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = selectedProducts.map(({ product: item, quantity }) => `• ${item.name} — Quantity: ${quantity} (unit / packaging to be confirmed)`);
    const subject = encodeURIComponent("Shipweiser quotation request — " + selectedProducts.map(item => item.product.name).join(", "));
    const body = encodeURIComponent(
      `Hello Shipweiser team,

I would like to request a quotation for the following products:

${lines.join("\n")}

Buyer name: ${buyerName}
Company: ${company || "Not provided"}
Reply email: ${buyerEmail}
Destination / delivery country: ${destination}

Additional requirements:
${buyerMessage || "Please contact me to discuss specifications and packaging."}

Please confirm availability, specifications, applicable packaging options and quotation details.

Thank you.`
    );
    window.location.href = `mailto:${siteContent.emails.export}?subject=${subject}&body=${body}`;
    setSentToEmail(true);
  }

  if (slug && !product) return <main className="placeholder-page"><div className="container placeholder-content"><span className="section-kicker">PRODUCT NOT FOUND</span><h1>This product page isn't available.</h1><Link to="/products" className="button-primary">Browse products</Link></div></main>;

  if (product) return <main><section className="section-wrap"><div className="container"><Link className="text-link" to="/products"><ArrowLeft size={16}/> All products</Link><div className="product-detail" style={{marginTop:28}}><img className="product-detail-image" src={product.image} alt={product.name}/><div><span className="section-kicker">{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><div className="pill-list"><span>{product.origin}</span><span>Bulk enquiries welcome</span><span>Domestic & export</span></div><h3>Product highlights</h3><ul>{product.highlights.map(item=><li key={item}><CheckCircle2 size={16} style={{display:"inline",verticalAlign:"middle",marginRight:8,color:"var(--color-accent)"}}/>{item}</li>)}</ul><p>Share your required quantity, packaging, destination and specification to receive a tailored response.</p><div className="panel-actions"><Link className="button-primary" to="/products#catalogue">Build a quotation <ArrowUpRight size={17}/></Link><a className="button-secondary" href={`https://wa.me/917020967599?text=${encodeURIComponent("Hello Shipweiser, I would like to enquire about "+product.name+".")}`} target="_blank" rel="noreferrer">WhatsApp enquiry</a></div><p className="notice-small">Specifications, availability and certifications are confirmed for each product and order. Certification claims are not made unless supported by applicable documentation.</p></div></div></div></section></main>;

  return <main className="catalogue-page">
    <section className="page-hero catalogue-hero"><div className="container"><span className="section-kicker">SHIPWEISER PRODUCT CATALOGUE</span><h1>Find products.<br/><span className="catalogue-title-accent">Build your enquiry.</span></h1><p>Explore our current product categories and add the items you are interested in to one quotation request. Our team can then discuss specifications, packaging and availability with you.</p><div className="catalogue-hero-meta"><span><CheckCircle2 size={16}/> Domestic & international enquiries</span><span><CheckCircle2 size={16}/> No checkout or payment required</span></div></div></section>
    <section className="section-wrap" id="catalogue"><div className="container">
      <div className="catalogue-toolbar">
        <div className="catalogue-results"><span className="section-kicker">PRODUCT DIRECTORY</span><h2>Explore categories</h2><p>{filteredProducts.length} {filteredProducts.length === 1 ? "category" : "categories"} to explore</p></div>
        <div className="catalogue-filters"><label className="catalogue-search"><Search size={18}/><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search products, uses or origin…" aria-label="Search products"/></label><label className="catalogue-category"><span className="sr-only">Filter by category</span><select value={category} onChange={event => setCategory(event.target.value)}>{categories.map(item=><option key={item}>{item}</option>)}</select></label></div>
      </div>
      {filteredProducts.length ? <div className="product-grid catalogue-grid">{filteredProducts.map((item,index) => {
        const selected = quoteItems.find(entry => entry.slug === item.slug);
        return <article className="product-card premium-product-card catalogue-card" key={item.slug}>
          <Link className="product-card-image-link" to={`/products/${item.slug}`} aria-label={`View ${item.name} details`}><img className="product-card-image" src={item.image} alt={item.name} loading="lazy"/><span className="product-image-index">{String(index+1).padStart(2,"0")}</span><span className="product-image-arrow"><ArrowUpRight size={18}/></span></Link>
          <div className="product-card-body"><span className="section-kicker">{item.category}</span><h3>{item.name}</h3><p>{item.shortDescription}</p><div className="catalogue-origin">{item.origin}</div><div className="catalogue-card-actions"><Link className="text-link" to={`/products/${item.slug}`}>View details <ArrowUpRight size={15}/></Link><button className={selected ? "quote-add-button quote-add-button-selected" : "quote-add-button"} type="button" onClick={() => addProduct(item.slug)}>{selected ? <Check size={16}/> : <Plus size={16}/>} {selected ? `Added · Qty ${selected.quantity}` : "Add to quote"}</button></div></div>
        </article>;
      })}</div> : <div className="catalogue-empty"><Search size={26}/><h3>No matching products</h3><p>Try a different search term or choose another category.</p><button className="button-secondary" type="button" onClick={() => {setSearch("");setCategory("All categories");}}>Clear filters</button></div>}
      <div className="catalogue-footnote"><CheckCircle2 size={17}/> Product details and availability are confirmed for each enquiry. Images are illustrative; final specifications and packaging should be agreed before ordering.</div>
    </div></section>
    <section className="quote-builder-section" id="quote-builder"><div className="container quote-builder-layout">
      <div className="quote-builder-intro"><span className="section-kicker">YOUR ENQUIRY LIST</span><h2>One request.<br/><span>Multiple products.</span></h2><p>Add the product categories you are interested in, set an estimated quantity for each, and prepare one consolidated quotation email for our team.</p><div className="quote-builder-points"><span><CheckCircle2 size={17}/> Specify quantity and destination</span><span><CheckCircle2 size={17}/> Discuss packaging and requirements</span><span><CheckCircle2 size={17}/> No online payment or commitment</span></div><a className="quote-contact-link" href={`mailto:${siteContent.emails.export}`}>Prefer email? Contact our trade team <ArrowUpRight size={16}/></a></div>
      <div className="quote-builder-card">
        <div className="quote-builder-card-header"><div className="quote-builder-icon"><ClipboardList size={21}/></div><div><h3>Quotation request</h3><p>{itemCount ? `${itemCount} product ${itemCount === 1 ? "category" : "categories"} selected` : "Start by adding products above"}</p></div><span className="quote-count">{itemCount}</span></div>
        {selectedProducts.length ? <div className="quote-selected-list">{selectedProducts.map(({product:item,quantity})=><div className="quote-selected-item" key={item.slug}><div className="quote-selected-name"><strong>{item.name}</strong><small>{item.category}</small></div><div className="quote-quantity-control"><button type="button" onClick={()=>updateQuantity(item.slug,quantity-1)} aria-label={`Decrease ${item.name} quantity`}><Minus size={14}/></button><input type="number" min="1" max="999999" value={quantity} onChange={event=>updateQuantity(item.slug,Math.max(1,Number(event.target.value)||1))} aria-label={`${item.name} quantity`}/><button type="button" onClick={()=>updateQuantity(item.slug,quantity+1)} aria-label={`Increase ${item.name} quantity`}><Plus size={14}/></button><button className="quote-remove" type="button" onClick={()=>updateQuantity(item.slug,0)} aria-label={`Remove ${item.name}`}><Trash2 size={15}/></button></div></div>)}</div> : <div className="quote-empty-state"><div className="quote-empty-icon"><ClipboardList size={24}/></div><strong>Your enquiry list is empty</strong><p>Choose “Add to quote” on any product above. You can include more than one category.</p><button className="button-secondary" type="button" onClick={()=>document.getElementById("catalogue")?.scrollIntoView({behavior:"smooth"})}>Browse products <ArrowUpRight size={15}/></button></div>}
        {selectedProducts.length > 0 && <><div className="quote-summary"><span>Estimated total units</span><strong>{totalUnits.toLocaleString("en-IN")}</strong></div><form className="quote-form" onSubmit={submitQuote}><div className="quote-form-heading"><h4>Buyer details</h4><span>Required to prepare your enquiry</span></div><label>Full name<input required autoComplete="name" value={buyerName} onChange={event=>setBuyerName(event.target.value)} placeholder="Your name"/></label><label>Business / organisation <span className="optional-label">Optional</span><input autoComplete="organization" value={company} onChange={event=>setCompany(event.target.value)} placeholder="Company or organisation"/></label><label>Business email<input required type="email" autoComplete="email" value={buyerEmail} onChange={event=>setBuyerEmail(event.target.value)} placeholder="you@company.com"/></label><label>Destination country / city<input required value={destination} onChange={event=>setDestination(event.target.value)} placeholder="Where should the order be delivered?"/></label><label>Specifications or other requirements <span className="optional-label">Optional</span><textarea value={buyerMessage} onChange={event=>setBuyerMessage(event.target.value)} placeholder="Product grade, packaging, intended use, target timeline…" rows={3}/></label><button className="button-primary quote-submit" type="submit">Prepare quotation email <Send size={17}/></button>{sentToEmail && <p className="quote-email-notice" role="status">Your email application should open with the enquiry details. Review and send the email to complete your request.</p>}<p className="quote-form-disclaimer">This frontend prepares an email in your default email application. It does not submit or store your details on Shipweiser's servers.</p></form></>}
      </div>
    </div></section>
  </main>;
}
