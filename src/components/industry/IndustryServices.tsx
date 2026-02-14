import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import type { IndustryData } from "@/data/industriesData";

/** Full services section with anchor text variations and deep interlinking */
const IndustryServices = ({ industry }: { industry: IndustryData }) => {
  const s = industry.shortTitle;
  const related = industry.relatedServices
    .map(rs => servicesData.find(sv => sv.slug === rs))
    .filter(Boolean);

  // Also show a broader set of services for comprehensive interlinking
  const allServices = servicesData.slice(0, 12);

  return (
    <section className="section-padding bg-card/20 border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-gradient">{s}</span> SEO Services
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-10">
            We offer a comprehensive suite of {s.toLowerCase()} search engine optimization services designed to improve your organic rankings, drive qualified traffic, and increase conversions. Each service is tailored to the unique needs of the {s.toLowerCase()} industry.
          </p>
        </motion.div>

        {/* Primary related services with rich descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {related.map((rs, i) => {
            if (!rs) return null;
            const RSIcon = rs.icon;
            return (
              <motion.div
                key={rs.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${rs.slug}`}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all group block h-full"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <RSIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{rs.title} for {s}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                    {rs.heroDescription}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {rs.whatIs.points.slice(0, 3).map((p, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                    Explore {rs.title} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* All services grid for comprehensive interlinking */}
        <div>
          <h3 className="text-xl font-bold mb-4">Complete SEO Service Offerings</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {allServices.map(svc => {
              const SIcon = svc.icon;
              return (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="glass rounded-lg px-4 py-3 hover:border-primary/20 transition-all text-sm font-medium flex items-center gap-2 group"
                >
                  <SIcon className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">{svc.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mt-10 glass rounded-xl p-8 text-center border-primary/20">
          <h3 className="text-xl font-bold mb-2">Need a Custom {s} SEO Strategy?</h3>
          <p className="text-sm text-muted-foreground mb-4">Get a tailored SEO plan designed specifically for your {s.toLowerCase()} business goals.</p>
          <Link to="/free-seo-audit">
            <Button className="glow-primary">
              Request Free Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryServices;
