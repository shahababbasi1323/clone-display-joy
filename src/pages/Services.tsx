import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  useSeoMeta({
    title: "Professional SEO Services - Technical, Local & E-commerce SEO",
    description: "Comprehensive SEO services including technical audits, on-page optimization, local SEO, e-commerce SEO, link building, and GEO optimization.",
    canonical: "https://shahababbasi.com/services",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">SEO Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive search optimization solutions to help your business rank higher, drive traffic, and grow revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.05 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="glass rounded-xl p-6 hover:border-primary/30 transition-all group block h-full"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.heroDescription.slice(0, 120)}...</p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Strategy?</h2>
              <p className="text-muted-foreground mb-6">Every business is unique. Let's discuss your specific goals and create a tailored SEO plan.</p>
              <Link to="/contact">
                <Button size="lg" className="glow-primary">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            ...servicesData.map((s) => ({
              "@context": "https://schema.org",
              "@type": "Service",
              name: s.title,
              description: s.metaDescription,
              provider: { "@type": "Person", name: "Shahab Abbasi", url: "https://shahababbasi.com" },
              url: `https://shahababbasi.com/services/${s.slug}`,
            })),
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://shahababbasi.com/services" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default Services;
