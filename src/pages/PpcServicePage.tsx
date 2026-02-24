import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { getPpcServiceBySlug, ppcServicesData } from "@/data/ppcServicesData";
import { servicesData } from "@/data/servicesData";
import { getPpcServiceImage } from "@/components/ppc/ppcImages";
import NotFound from "./NotFound";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PpcServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getPpcServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const baseUrl = "https://shahababbasi.com";
  const pageUrl = `${baseUrl}/ppc/${service.slug}`;
  const image = getPpcServiceImage(service.slug);

  useSeoMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: pageUrl,
  });

  // Related PPC services
  const relatedPpc = service.relatedServices
    .map((s) => ppcServicesData.find((p) => p.slug === s))
    .filter(Boolean);

  // Related SEO services
  const relatedSeo = service.relatedSeoServices
    .map((s) => servicesData.find((svc) => svc.slug === s))
    .filter(Boolean);

  // Schema
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${service.title} - Shahab Abbasi`,
      description: service.metaDescription,
      provider: {
        "@type": "Person",
        name: "Shahab Abbasi",
        url: baseUrl,
        sameAs: ["https://www.linkedin.com/in/shahababbasi/"],
      },
      url: pageUrl,
      areaServed: { "@type": "Place", name: "Worldwide" },
      serviceType: service.title,
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
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "PPC Services", item: `${baseUrl}/ppc` },
        { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How We Deliver ${service.title} Results`,
      description: `Our step-by-step ${service.title.toLowerCase()} process.`,
      step: service.process.steps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.desc,
      })),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <PageBreadcrumbs items={[{ label: "PPC Services", href: "/ppc" }, { label: service.title }]} className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.heroTitle}{" "}
              <span className="text-gradient">{service.heroHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{service.heroDescription}</p>
            <Link to="/contact">
              <Button size="lg" className="glow-primary">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What Is */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">{service.whatIs.title}</h2>
            <p className="text-muted-foreground mb-6">{service.whatIs.description}</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {service.whatIs.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{service.process.title}</h2>
          <div className="space-y-6">
            {service.process.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 flex gap-4"
              >
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Tools */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">What You Get</h2>
            <ul className="space-y-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Tools We Use</h2>
            <div className="flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Pricing</h3>
              <p className="text-primary font-bold">{service.pricing.range}</p>
              <p className="text-xs text-muted-foreground mt-1">{service.pricing.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Interlinking */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          {/* Related PPC services */}
          {relatedPpc.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Related PPC Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPpc.map((s) => {
                  if (!s) return null;
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      to={`/ppc/${s.slug}`}
                      className="glass rounded-lg p-4 hover:border-primary/30 transition-all group"
                    >
                      <Icon className="h-5 w-5 text-primary mb-2" />
                      <h3 className="font-semibold text-sm">{s.title}</h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related SEO services */}
          {relatedSeo.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Complementary SEO Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedSeo.map((s) => {
                  if (!s) return null;
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="glass rounded-lg p-4 hover:border-primary/30 transition-all group"
                    >
                      <Icon className="h-5 w-5 text-primary mb-2" />
                      <h3 className="font-semibold text-sm">{s.title}</h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related Tools */}
          {service.relatedTools.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Free Related Tools</h2>
              <div className="flex flex-wrap gap-3">
                {service.relatedTools.map((tool) => (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tool.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-gradient">Get Started</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free PPC audit and see how {service.title.toLowerCase()} can accelerate your growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="glow-primary">
                Get Free PPC Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Layout>
  );
};

export default PpcServicePage;
