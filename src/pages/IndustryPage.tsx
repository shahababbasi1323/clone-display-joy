import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Check, BarChart3, Wrench, ArrowLeft, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getIndustryBySlug, industriesData, INDUSTRY_CATEGORIES } from "@/data/industriesData";
import { servicesData } from "@/data/servicesData";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!industry) return <Navigate to="/industries" replace />;

  const relatedServices = industry.relatedServices
    .map(rs => servicesData.find(s => s.slug === rs))
    .filter(Boolean);

  const Icon = industry.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="container mx-auto max-w-4xl">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All Industries
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">{industry.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {industry.heroTitle} <span className="text-gradient">{industry.heroHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              {industry.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary">
                  Get Free {industry.shortTitle} SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10">Industry Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10">Our {industry.shortTitle} SEO Approach</h2>
          <div className="space-y-6">
            {industry.approach.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {i + 1}
                  </div>
                  {i < industry.approach.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords We Target */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">Keywords We Target</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {industry.keywords.map(kw => (
              <span key={kw} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-10">
            <BarChart3 className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold">Results We Deliver</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industry.caseStudy.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-3">
            {industry.faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Related SEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map(rs => {
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Grow Your <span className="text-gradient">{industry.shortTitle}</span> Business?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free SEO audit tailored to the {industry.shortTitle.toLowerCase()} industry and discover opportunities to outrank your competitors.
            </p>
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary">
                Get Free {industry.shortTitle} SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: industry.title,
              description: industry.metaDescription,
              provider: { "@type": "Person", name: "Shahab Abbasi", url: "https://shahababbasi.com" },
              url: `https://shahababbasi.com/industries/${industry.slug}`,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: industry.faqs.map(f => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Industries", item: "https://shahababbasi.com/industries" },
                { "@type": "ListItem", position: 3, name: industry.title, item: `https://shahababbasi.com/industries/${industry.slug}` },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default IndustryPage;
