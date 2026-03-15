import { List } from "lucide-react";
import type { IndustryData } from "@/data/industriesData";

interface TocItem {
  id: string;
  label: string;
}

const IndustryTableOfContents = ({ industry }: { industry: IndustryData }) => {
  const items: TocItem[] = [
    { id: "why-seo-matters", label: "Why SEO Matters" },
    { id: "industry-challenges", label: "Industry Challenges" },
    { id: "our-approach", label: "Our SEO Approach" },
    { id: "services", label: "Our Services" },
    { id: "digital-marketing-guide", label: "Digital Marketing Guide" },
    { id: "keywords", label: "Keywords We Target" },
    { id: "results", label: "Results We Deliver" },
    { id: "faq", label: "FAQ" },
  ];

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

export default IndustryTableOfContents;
