import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { ppcServicesData } from "@/data/ppcServicesData";
import { getPpcServiceImage, ppcHero } from "@/components/ppc/ppcImages";

const PpcServices = () => {
  useSeoMeta({
    title: "PPC Advertising Services - Google Ads, Social Ads & Remarketing",
    description:
      "Expert PPC advertising services including Google Ads management, social media ads, remarketing, local search ads, and PPC strategy consulting for maximum ROI.",
    canonical: "https://shahababbasi.com/ppc",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${ppcHero})` }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PPC & Paid <span className="text-gradient">Advertising Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Drive immediate, measurable results with expertly managed pay-per-click campaigns
              across Google, social media, and display networks.
            </p>
            <Link to="/contact">
              <Button size="lg" className="glow-primary">
                Get a Free PPC Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ppcServicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/ppc/${service.slug}`}
                    className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all group block h-full"
                  >
                    <img
                      src={getPpcServiceImage(service.slug)}
                      alt={service.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.heroDescription.slice(0, 120)}...
                      </p>
                      <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* SEO Cross-link */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-3">
              Looking for organic growth? Explore our{" "}
              <Link to="/services" className="text-primary hover:underline font-medium">
                SEO Services
              </Link>{" "}
              for long-term search visibility.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Scale Your <span className="text-gradient">Ad Performance</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                Get a free PPC audit and discover how much revenue you're leaving on the table.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-primary">
                  Get Free PPC Audit <ArrowRight className="ml-2 h-5 w-5" />
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
            ...ppcServicesData.map((s) => ({
              "@context": "https://schema.org",
              "@type": "Service",
              name: s.title,
              description: s.metaDescription,
              provider: { "@type": "Person", name: "Shahab Abbasi", url: "https://shahababbasi.com" },
              url: `https://shahababbasi.com/ppc/${s.slug}`,
            })),
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "PPC Services", item: "https://shahababbasi.com/ppc" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default PpcServices;
