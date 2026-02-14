import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { getLocationRelatedIndustries } from "@/data/internalLinks";
import type { LocationContent } from "@/data/locationContent";

interface Props {
  content: LocationContent;
  countryCode: string;
}

const LocationIndustriesInterlink = ({ content, countryCode }: Props) => {
  const relIndustries = getLocationRelatedIndustries(countryCode);
  if (relIndustries.length === 0) return null;

  return (
    <section className="section-padding bg-card/20 border-y border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">{content.industriesInterlinkTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relIndustries.map((ind) => {
            if (!ind) return null;
            const IndIcon = ind.icon;
            return (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="glass rounded-xl p-5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IndIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{ind.shortTitle} SEO</h3>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{ind.metaDescription}</p>
                <span className="text-xs text-primary flex items-center gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationIndustriesInterlink;
