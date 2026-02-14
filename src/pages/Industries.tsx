import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { industriesData, INDUSTRY_CATEGORIES } from "@/data/industriesData";

const Industries = () => {
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
              SEO for <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Specialized SEO strategies tailored to the unique challenges and opportunities of your industry. 100+ industries served worldwide.
            </p>
          </motion.div>

          {INDUSTRY_CATEGORIES.map((category) => {
            const categoryIndustries = industriesData.filter(i => i.category === category);
            if (categoryIndustries.length === 0) return null;
            return (
              <div key={category} className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  {(() => { const Icon = categoryIndustries[0].icon; return <Icon className="h-6 w-6 text-primary" />; })()}
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryIndustries.map((industry, i) => {
                    const Icon = industry.icon;
                    return (
                      <motion.div
                        key={industry.slug}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 8) * 0.03 }}
                      >
                        <Link
                          to={`/industries/${industry.slug}`}
                          className="glass rounded-xl p-5 hover:border-primary/30 transition-all group block h-full"
                        >
                          <h3 className="font-semibold text-sm mb-1">{industry.shortTitle}</h3>
                          <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="h-3 w-3" />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="mt-10 text-center">
            <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
              <p className="text-muted-foreground mb-6">We work with businesses across every industry. Contact us for a custom SEO strategy tailored to your specific market.</p>
              <Link to="/contact">
                <Button size="lg" className="glow-primary">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://shahababbasi.com/industries" },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default Industries;
