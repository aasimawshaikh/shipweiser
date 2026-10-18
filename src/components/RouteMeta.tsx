import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteContent } from "../data/siteContent";

const defaultDescription =
  "Shipweiser connects domestic buyers and international importers with Indian agricultural products, textiles and healthcare supplies.";

function pageMeta(pathname: string) {
  if (pathname === "/") {
    return {
      title: "Shipweiser | Connecting Quality from India to the World",
      description: defaultDescription,
    };
  }
  if (pathname === "/about") {
    return {
      title: "About Shipweiser | Indian Sourcing & Trade",
      description:
        "Learn about Shipweiser's mission to connect buyers with Indian agricultural products, textiles and healthcare supplies.",
    };
  }
  if (pathname === "/contact") {
    return {
      title: "Contact Shipweiser | Domestic & Export Enquiries",
      description:
        "Contact Shipweiser for product information, bulk orders, sourcing requests and international export-import enquiries.",
    };
  }
  if (pathname === "/products") {
    return {
      title: "Product Catalogue | Shipweiser",
      description:
        "Explore Shipweiser's Indian makhana, textile and medical-disposable sourcing categories. Enquire about availability and bulk requirements.",
    };
  }
  const productSlug = pathname.match(/^\/products\/([^/]+)\/?$/)?.[1];
  if (productSlug) {
    const product = siteContent.products.find((item) => item.slug === productSlug);
    if (product) {
      return {
        title: `${product.name} | Shipweiser Product Catalogue`,
        description: product.shortDescription,
      };
    }
  }
  return {
    title: "Page Not Found | Shipweiser",
    description: "The requested page could not be found on Shipweiser.",
  };
}

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta(pathname);
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", `https://www.shipweiser.com${pathname}`, "property");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.shipweiser.com${pathname}`;
  }, [pathname]);

  return null;
}
