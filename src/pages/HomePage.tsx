import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { siteContent } from "../data/siteContent";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <>
      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                {home.eyebrow}
              </div>

              <h1>
                {home.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-accent">
                  {home.title.split(" ").slice(-2).join(" ")}
                </span>
              </h1>

              <p className="hero-description">{home.description}</p>

              <div className="hero-actions">
                <Link to={home.primaryAction.href} className="button-primary">
                  {home.primaryAction.label}
                  <ArrowUpRight size={18} />
                </Link>

                <Link to={home.secondaryAction.href} className="button-secondary">
                  {home.secondaryAction.label}
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="hero-footnote">
                <CheckCircle2 size={16} />
                <span>Brand and content pending source verification</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Decorative design preview">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="visual-card visual-card-back">
                <div className="visual-card-top">
                  <span className="mini-dot" />
                  <span className="mini-dot" />
                  <span className="mini-dot" />
                </div>
                <div className="skeleton skeleton-long" />
                <div className="skeleton skeleton-medium" />
                <div className="skeleton skeleton-short" />
                <div className="visual-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="visual-card visual-card-front">
                <div className="visual-icon">
                  <Layers3 size={25} />
                </div>
                <span className="visual-label">DESIGN PREVIEW</span>
                <h2>A new digital experience.</h2>
                <p>
                  A visual placeholder until the original site is audited.
                </p>
                <div className="visual-card-footer">
                  <span>SHIPWEISER</span>
                  <MoveUpRight size={18} />
                </div>
              </div>

              <div className="floating-badge">
                <Sparkles size={17} />
                <span>Built for the next chapter</span>
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>THE REDESIGN STARTS HERE</span>
            <ArrowDown size={17} />
          </div>
        </section>

        <section className="intro-section section-padding" id="overview">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">01 / THE FOUNDATION</span>
              <h2>
                A stronger digital presence.
                <br />
                <span className="text-muted">Built around your brand.</span>
              </h2>
              <p>
                This section is a design placeholder. Its final message and
                supporting content will come from the existing WordPress site.
              </p>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">
                  <Layers3 size={23} />
                </div>
                <span className="feature-number">01</span>
                <h3>Clear structure</h3>
                <p>
                  Organize verified pages and information into a consistent,
                  easy-to-navigate website.
                </p>
                <span className="feature-link">
                  Page architecture <ArrowUpRight size={16} />
                </span>
              </article>

              <article className="feature-card feature-card-highlight">
                <div className="feature-icon">
                  <Sparkles size={23} />
                </div>
                <span className="feature-number">02</span>
                <h3>Modern experience</h3>
                <p>
                  Create a responsive layout with thoughtful typography,
                  spacing and accessible interactions.
                </p>
                <span className="feature-link">
                  Visual system <ArrowUpRight size={16} />
                </span>
              </article>

              <article className="feature-card">
                <div className="feature-icon">
                  <CheckCircle2 size={23} />
                </div>
                <span className="feature-number">03</span>
                <h3>SEO preservation</h3>
                <p>
                  Carry forward verified URLs, metadata, internal links and
                  existing content during migration.
                </p>
                <span className="feature-link">
                  Migration plan <ArrowUpRight size={16} />
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner">
            <div>
              <span className="section-kicker">02 / NEXT STEPS</span>
              <h2>
                Let's build the
                <br />
                real Shipweiser experience.
              </h2>
              <p>
                Next, we will replace draft content with verified website
                material and implement the original site's required pages.
              </p>
            </div>

            <Link to="/contact" className="button-primary">
              Contact page preview <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}