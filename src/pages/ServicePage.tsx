import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Wrench, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getServiceBySlug, servicesData } from "@/data/servicesData";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = service.relatedServices
    .map((rs) => servicesData.find((s) => s.slug === rs))
    .filter(Boolean);

  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="container mx-auto max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="p-3 rounded-lg bg-primary/10 w-fit mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.heroTitle} <span className="text-gradient">{service.heroHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">{service.whatIs.title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{service.whatIs.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatIs.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10">{service.process.title}</h2>
          <div className="space-y-6">
            {service.process.steps.map((step, i) => (
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
                  {i < service.process.steps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-3" />
                  )}
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

      {/* Tools & Deliverables */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tools */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Tools We Use</h2>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <ul className="space-y-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Pricing</h2>
            <p className="text-xl text-gradient font-bold mb-2">{service.pricing.range}</p>
            <p className="text-sm text-muted-foreground mb-6">{service.pricing.note}</p>
            <Link to="/pricing">
              <Button variant="outline">
                View All Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            {service.faqs.map((faq, i) => (
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
        <section className="section-padding bg-card/30 border-t border-border">
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free SEO audit and discover how {service.title.toLowerCase()} can transform your online presence.
            </p>
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary">
                Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
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
              name: service.title,
              description: service.metaDescription,
              provider: {
                "@type": "Person",
                name: "Shahab Abbasi",
                url: "https://shahababbasi.com",
              },
              url: `https://shahababbasi.com/services/${service.slug}`,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map((f) => ({
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
                { "@type": "ListItem", position: 2, name: "Services", item: "https://shahababbasi.com/services" },
                { "@type": "ListItem", position: 3, name: service.title, item: `https://shahababbasi.com/services/${service.slug}` },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default ServicePage;
