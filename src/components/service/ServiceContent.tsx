import { motion } from "framer-motion";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { ServiceData } from "@/data/servicesData";
import { useState } from "react";

/** LSI keyword-rich content blocks dynamically generated per service */
const lsiContentMap: Record<string, { title: string; paragraphs: string[] }> = {
  "technical-seo": {
    title: "Why Technical SEO Is the Foundation of Search Success",
    paragraphs: [
      "Technical search engine optimization ensures your website infrastructure is built for crawlability, indexability, and rendering efficiency. Without a solid technical foundation, even the best content and backlinks won't help your site rank on Google, Bing, or AI-powered search engines like Perplexity and ChatGPT.",
      "Our technical SEO audit covers crawl budget optimization, site architecture analysis, XML sitemap configuration, robots.txt directives, canonical tag implementation, and Core Web Vitals improvements including Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). We also address HTTPS migration, mobile-first indexing, structured data validation, and JavaScript rendering issues.",
      "Whether you're running a large enterprise website or a growing startup, technical SEO services eliminate the invisible barriers preventing search engines from properly discovering, understanding, and ranking your pages in organic search results.",
    ],
  },
  "on-page-seo": {
    title: "Why On-Page SEO Drives Sustainable Organic Traffic",
    paragraphs: [
      "On-page search optimization is the practice of aligning every element on your web pages — from title tags and meta descriptions to heading hierarchy and content structure — with the keywords and search intent your target audience uses on Google, Bing, and AI search platforms.",
      "Effective on-page SEO goes beyond keyword stuffing. It involves semantic SEO, latent semantic indexing (LSI) keywords, entity optimization, content depth analysis, internal linking architecture, and user engagement signals. Our approach ensures your pages satisfy both search engine algorithms and real human readers.",
      "From E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals to content freshness and topical relevance, our on-page optimization covers every ranking factor that determines your visibility in organic search results and featured snippets.",
    ],
  },
  "off-page-seo": {
    title: "Why Off-Page SEO & Link Building Builds Domain Authority",
    paragraphs: [
      "Off-page SEO encompasses all optimization activities performed outside your website to improve search engine rankings. The most critical component is link building — earning high-quality backlinks from authoritative, relevant websites that signal trust to Google's PageRank algorithm.",
      "Our white-hat link acquisition strategies include manual outreach, guest posting on industry publications, digital PR campaigns, broken link building, resource page link development, and HARO (Help a Reporter Out) submissions. Every backlink we build is from a real, editorially relevant website.",
      "Beyond backlinks, off-page SEO includes brand mention optimization, social signals, forum participation, and entity building across the web. These factors collectively strengthen your domain authority and improve your competitive positioning in search results.",
    ],
  },
  "local-seo": {
    title: "Why Local SEO Is Essential for Brick-and-Mortar Businesses",
    paragraphs: [
      "Local search engine optimization helps businesses appear in Google Maps, the local pack, and location-based search results. When customers search 'near me' or include city names in queries, local SEO ensures your business is prominently visible.",
      "Our local SEO strategy covers Google Business Profile optimization, local citation building across 50+ directories, NAP (Name, Address, Phone) consistency audits, review generation and reputation management, local keyword targeting, and geo-targeted content creation for your service areas.",
      "With mobile local searches growing year over year, businesses that invest in local SEO capture high-intent customers actively looking for their services. From multi-location management to hyperlocal content strategies, we help you dominate your geographic market.",
    ],
  },
  "ecommerce-seo": {
    title: "Why E-commerce SEO Drives Organic Revenue Growth",
    paragraphs: [
      "E-commerce search optimization addresses the unique challenges of online stores: massive product catalogs, duplicate content from faceted navigation, thin product descriptions, and complex site architectures that confuse search engine crawlers.",
      "Our e-commerce SEO approach includes product page optimization with buyer-intent keywords, category page content strategy, product schema markup for rich snippets, internal linking optimization for crawl efficiency, and duplicate content resolution through canonical tag management and parameter handling.",
      "Whether you're on Shopify, WooCommerce, Magento, or BigCommerce, we help online retailers reduce dependency on paid advertising by building sustainable organic traffic channels that drive revenue month after month.",
    ],
  },
  "geo-optimization": {
    title: "Why GEO Optimization Is the Future of Digital Visibility",
    paragraphs: [
      "Generative Engine Optimization (GEO) is the emerging discipline of making your brand visible in AI-powered search engines like ChatGPT, Google AI Overviews, Perplexity, Gemini, and Bing Copilot. As AI increasingly mediates how users find information, GEO ensures your business is cited and recommended.",
      "Our GEO strategy focuses on entity optimization, knowledge graph inclusion, structured data implementation, authoritative content creation, and brand mention building across sources that AI models use for training and retrieval-augmented generation (RAG).",
      "Traditional SEO and GEO are complementary — strong search fundamentals support AI visibility. However, GEO requires additional focus on factual accuracy, citation-worthy content, and entity relationships that make your brand a trusted source in AI-generated responses.",
    ],
  },
};

const ServiceContent = ({ service }: { service: ServiceData }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lsi = lsiContentMap[service.slug];

  return (
    <>
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

      {/* LSI Content */}
      {lsi && (
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">{lsi.title}</h2>
            <div className="space-y-4">
              {lsi.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/free-seo-audit">
                <Button className="glow-primary">
                  Get a Free {service.title} Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-padding bg-card/20 border-y border-border">
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
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
      <section className="section-padding bg-card/20 border-y border-border">
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
      <section className="section-padding">
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
    </>
  );
};

export default ServiceContent;
