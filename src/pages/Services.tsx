import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search, Globe, Zap, Link2, ShoppingCart, Bot,
  FileSearch, BarChart3, Code, BookOpen, Gauge, ArrowRight,
  Layers, MapPin, Shield, Megaphone, GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  { icon: Search, title: "Technical SEO", slug: "technical-seo", desc: "Comprehensive site audits, speed optimization, Core Web Vitals fixes, crawlability & indexation improvements." },
  { icon: Zap, title: "On-Page SEO", slug: "on-page-seo", desc: "Content optimization, meta tags, heading structure, internal linking & keyword targeting." },
  { icon: Link2, title: "Off-Page SEO & Link Building", slug: "off-page-seo", desc: "White-hat manual outreach, guest posts, digital PR, and authority building." },
  { icon: MapPin, title: "Local SEO", slug: "local-seo", desc: "Google Business Profile optimization, local citations, map rankings & review management." },
  { icon: ShoppingCart, title: "E-commerce SEO", slug: "ecommerce-seo", desc: "Product page optimization for Shopify, WooCommerce, and custom e-commerce platforms." },
  { icon: Bot, title: "GEO Optimization", slug: "geo-optimization", desc: "Get visible in ChatGPT, Perplexity, Gemini & next-gen AI search engines." },
  { icon: Globe, title: "International SEO", slug: "international-seo", desc: "Hreflang implementation, multi-language strategy & global market targeting." },
  { icon: FileSearch, title: "SEO Audit", slug: "seo-audit", desc: "100+ checkpoint technical & content audit with actionable recommendations." },
  { icon: BarChart3, title: "Keyword Research", slug: "keyword-research", desc: "High-intent, low-competition keyword discovery for maximum ROI." },
  { icon: Code, title: "Schema Markup", slug: "schema-markup", desc: "Structured data implementation for rich results & enhanced SERP visibility." },
  { icon: BookOpen, title: "Content Strategy", slug: "content-strategy", desc: "Topic clustering, content calendars & topical authority building." },
  { icon: Gauge, title: "Website Speed Optimization", slug: "website-speed-optimization", desc: "Core Web Vitals, PageSpeed optimization & performance engineering." },
  { icon: Shield, title: "WordPress SEO", slug: "wordpress-seo", desc: "WordPress-specific SEO including Yoast, technical fixes & speed optimization." },
  { icon: Layers, title: "Shopify SEO", slug: "shopify-seo", desc: "Fix duplicate content, optimize collections & product pages on Shopify." },
  { icon: Megaphone, title: "SEO Consulting", slug: "seo-consulting", desc: "Expert strategy sessions, team training & ongoing SEO advisory." },
  { icon: GraduationCap, title: "SEO Training", slug: "seo-training", desc: "Learn SEO from an expert — online workshops & in-person training." },
];

const Services = () => {
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
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </motion.div>
            ))}
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
            ...services.map((s) => ({
              "@context": "https://schema.org",
              "@type": "Service",
              name: s.title,
              description: s.desc,
              provider: { "@type": "Person", name: "Shahab Abbasi", url: "https://shahababbasi.com" },
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
