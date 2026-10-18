import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const pageInformation: Record<
  string,
  { title: string; description: string }
> = {
  "/about": {
    title: "About Shipweiser",
    description:
      "The verified company introduction and background will be migrated here.",
  },
  "/services": {
    title: "Our services",
    description:
      "The actual service offerings will be added after the WordPress content audit.",
  },
  "/insights": {
    title: "Insights",
    description:
      "Verified blog posts and articles will be migrated here, preserving their original URLs where possible.",
  },
  "/contact": {
    title: "Let's connect",
    description:
      "Verified contact information and the original contact form will be added after the source website is reviewed.",
  },
};

export default function PlaceholderPage() {
  const location = useLocation();
  const page = pageInformation[location.pathname];

  if (!page) {
    return (
      <main className="placeholder-page">
        <div className="container placeholder-content">
          <span className="section-kicker">404 / NOT FOUND</span>
          <h1>We couldn't find that page.</h1>
          <p>The requested page does not exist in this draft.</p>
          <Link to="/" className="button-primary">
            Back to home <ArrowLeft size={18} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="placeholder-page">
      <div className="container placeholder-content">
        <span className="section-kicker">PAGE CONTENT PENDING VERIFICATION</span>
        <h1>{page.title}</h1>
        <p>{page.description}</p>

        <div className="placeholder-notice">
          This is a development placeholder, not a reproduction of the
          original WordPress page.
        </div>

        <Link to="/" className="button-primary">
          Return home <ArrowUpRight size={18} />
        </Link>
      </div>
    </main>
  );
}