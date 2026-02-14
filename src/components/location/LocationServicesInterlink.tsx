import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import type { LocationContent } from "@/data/locationContent";

const LocationServicesInterlink = ({ content }: { content: LocationContent }) => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Wrench className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">{content.servicesInterlinkTitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.slice(0, 12).map((svc, i) => {
          const SvcIcon = svc.icon;
          return (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={`/services/${svc.slug}`}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-all group block h-full"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <SvcIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{svc.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{svc.heroDescription}</p>
                  <span className="text-xs text-primary flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LocationServicesInterlink;
