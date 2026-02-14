import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, BookOpen, MapPin } from "lucide-react";
import { getIndustryRelatedTools, getIndustryRelatedBlogs, getIndustryRelatedLocations } from "@/data/internalLinks";
import type { IndustryData } from "@/data/industriesData";

const IndustryInterlinking = ({ industry }: { industry: IndustryData }) => {
  const relTools = getIndustryRelatedTools(industry.slug);
  const relBlogs = getIndustryRelatedBlogs(industry.slug);
  const relLocs = getIndustryRelatedLocations(industry.slug);

  return (
    <>
      {/* Related Tools */}
      {relTools.length > 0 && (
        <section className="section-padding bg-card/30 border-t border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Free SEO Tools for {industry.shortTitle}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Use our free SEO tools to analyze and improve your {industry.shortTitle.toLowerCase()} website's search performance.
            </p>
            <div className="flex flex-wrap gap-3">
              {relTools.map(tool => tool && (
                <Link key={tool.slug} to={`/tools/${tool.slug}`} className="glass rounded-lg px-4 py-3 hover:border-accent/30 transition-all text-sm font-medium flex items-center gap-2 group">
                  {tool.name} <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/tools" className="text-sm text-primary hover:underline flex items-center gap-1">
                Browse all 70+ free SEO tools <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related Blog Posts */}
      {relBlogs.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Recommended Reading for {industry.shortTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relBlogs.map(blog => blog && (
                <Link key={blog.slug} to={`/blog/${blog.slug}`} className="glass rounded-xl p-5 hover:border-accent/30 transition-all group">
                  <span className="text-xs text-accent font-medium">{blog.category}</span>
                  <h3 className="font-semibold text-sm mt-1 line-clamp-2">{blog.title}</h3>
                  <span className="text-xs text-muted-foreground mt-1">{blog.readTime}</span>
                  <span className="text-xs text-accent mt-2 flex items-center gap-1">Read article <ArrowRight className="h-3 w-3" /></span>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
                View all SEO guides & articles <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related Locations */}
      {relLocs.length > 0 && (
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">{industry.shortTitle} SEO by Location</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              We provide specialized {industry.shortTitle.toLowerCase()} SEO services across major cities worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relLocs.map(loc => loc && (
                <Link key={loc.slug} to={`/${loc.slug}`} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-sm">{loc.city}, {loc.country}</h3>
                  </div>
                  <span className="text-xs text-primary flex items-center gap-1">View {industry.shortTitle.toLowerCase()} SEO services <ArrowRight className="h-3 w-3" /></span>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/locations" className="text-sm text-primary hover:underline flex items-center gap-1">
                See all service locations <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default IndustryInterlinking;
