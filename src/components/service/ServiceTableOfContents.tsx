import { List } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

const lsiSlugs = [
  "technical-seo", "on-page-seo", "off-page-seo", "local-seo", "ecommerce-seo",
  "geo-optimization", "aeo-optimization", "content-strategy", "shopify-seo",
  "wordpress-seo", "international-seo", "seo-audit", "keyword-research",
  "google-business-profile", "link-building", "seo-consulting",
  "website-speed-optimization", "schema-markup", "seo-training",
];

interface TocItem {
  id: string;
  label: string;
}

const ServiceTableOfContents = ({ service }: { service: ServiceData }) => {
  const items: TocItem[] = [
    { id: "what-is", label: service.whatIs.title },
  ];

  if (lsiSlugs.includes(service.slug)) {
    items.push({ id: "why-it-matters", label: "Why It Matters" });
  }

  items.push(
    { id: "our-process", label: service.process.title },
    { id: "tools-deliverables", label: "Tools & Deliverables" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "Frequently Asked Questions" },
  );

  return (
    <nav
      aria-label="Table of contents"
      className="section-padding !py-6 border-b border-border bg-card/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-2 mb-3">
          <List className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">On This Page</span>
        </div>
        <ol className="flex flex-wrap gap-x-6 gap-y-2">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary/60 mr-1">{i + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default ServiceTableOfContents;
