import { Link } from "react-router-dom";
import { ArrowRight, Wrench, BookOpen, Building2, MapPin } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";
import { servicesData } from "@/data/servicesData";
import {
  getServiceRelatedBlogs,
  getServiceRelatedIndustries,
  getServiceRelatedLocations,
} from "@/data/internalLinks";

const ServiceInterlinking = ({ service }: { service: ServiceData }) => {
  const relatedServices = service.relatedServices
    .map((rs) => servicesData.find((s) => s.slug === rs))
    .filter(Boolean);

  const relBlogs = getServiceRelatedBlogs(service.slug);
  const relIndustries = getServiceRelatedIndustries(service.slug);
  const relLocs = getServiceRelatedLocations(service.slug);

  return (
    <>
      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map((rs) => {
                if (!rs) return null;
                const RSIcon = rs.icon;
                return (
                  <Link
                    key={rs.slug}
                    to={`/services/${rs.slug}`}
                    className="glass rounded-xl p-5 hover:border-primary/30 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                      <RSIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{rs.title}</h3>
                    <span className="text-xs text-primary flex items-center gap-1">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Tools */}
      {service.relatedTools.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Free SEO Tools</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {service.relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  to={tool.href}
                  className="glass rounded-lg px-4 py-3 hover:border-accent/30 transition-all text-sm font-medium flex items-center gap-2 group"
                >
                  {tool.label}
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Blog Posts */}
      {relBlogs.length > 0 && (
        <section className="section-padding bg-card/30 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Recommended Reading</h2>
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
          </div>
        </section>
      )}

      {/* Related Industries */}
      {relIndustries.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Industries We Serve</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relIndustries.map(ind => {
                if (!ind) return null;
                const IndIcon = ind.icon;
                return (
                  <Link key={ind.slug} to={`/industries/${ind.slug}`} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IndIcon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm">{ind.shortTitle} SEO</h3>
                    </div>
                    <span className="text-xs text-primary flex items-center gap-1">Learn more <ArrowRight className="h-3 w-3" /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Locations */}
      {relLocs.length > 0 && (
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">{service.title} by Location</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relLocs.map(loc => loc && (
                <Link key={loc.slug} to={`/${loc.slug}`} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-sm">{loc.city}, {loc.country}</h3>
                  </div>
                  <span className="text-xs text-primary flex items-center gap-1">View services <ArrowRight className="h-3 w-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceInterlinking;
