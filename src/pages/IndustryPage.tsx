import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getIndustryBySlug } from "@/data/industriesData";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryWhySeo from "@/components/industry/IndustryWhySeo";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryContent from "@/components/industry/IndustryContent";
import IndustryInterlinking from "@/components/industry/IndustryInterlinking";
import IndustrySchema from "@/components/industry/IndustrySchema";
import IndustryTableOfContents from "@/components/industry/IndustryTableOfContents";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSeoMeta({
    title: industry?.metaTitle || "Industry SEO Services | Shahab Abbasi",
    description: industry?.metaDescription || "Industry-specific SEO strategies by Shahab Abbasi.",
    canonical: industry ? `https://shahababbasi.com/industries/${industry.slug}` : undefined,
  });

  if (!industry) return <NotFound />;

  return (
    <Layout>
      {/* Hero with trust signals */}
      <IndustryHero industry={industry} />

      {/* Table of Contents */}
      <IndustryTableOfContents industry={industry} />

      {/* Why SEO Matters — LSI keyword rich */}
      <section id="why-seo-matters" className="scroll-mt-20">
        <IndustryWhySeo industry={industry} />
      </section>

      {/* Challenges */}
      <section id="industry-challenges" className="section-padding bg-card/20 border-y border-border scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10">
            {industry.shortTitle} Industry <span className="text-gradient">Challenges</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="our-approach" className="section-padding scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10">Our {industry.shortTitle} SEO <span className="text-gradient">Approach</span></h2>
          <div className="space-y-6">
            {industry.approach.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary shrink-0">{i + 1}</div>
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

      {/* Full Services Section */}
      <section id="services" className="scroll-mt-20">
        <IndustryServices industry={industry} />
      </section>

      {/* Rich SEO Content — anchor text variations, LSI keywords */}
      <section id="digital-marketing-guide" className="scroll-mt-20">
        <IndustryContent industry={industry} />
      </section>

      {/* Keywords We Target */}
      <section id="keywords" className="section-padding bg-card/20 border-y border-border scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">Keywords We Target for {industry.shortTitle}</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            We perform extensive <Link to="/services/keyword-research" className="text-primary hover:underline">keyword research</Link> to identify the highest-value search terms for your {industry.shortTitle.toLowerCase()} business.
          </p>
          <div className="flex flex-wrap gap-2">
            {industry.keywords.map(kw => (
              <span key={kw} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="section-padding scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-10">
            <BarChart3 className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold">Results We Deliver for {industry.shortTitle}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industry.caseStudy.map((result, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Dominate {industry.shortTitle} Search Results?
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Join 500+ businesses that trust us with their SEO. Get a free audit and discover untapped growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary">
                Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">View SEO Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            {industry.shortTitle} SEO <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
            Common questions about SEO for {industry.shortTitle.toLowerCase()} businesses, answered by our experts.
          </p>
          <div className="space-y-3">
            {industry.faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
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

      {/* Internal Linking: Tools, Blog, Locations */}
      <IndustryInterlinking industry={industry} />

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Grow Your <span className="text-gradient">{industry.shortTitle}</span> Business?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free SEO audit tailored to the {industry.shortTitle.toLowerCase()} industry and discover opportunities to outrank your competitors on Google, Bing, and AI search engines.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary">
                  Get Free {industry.shortTitle} SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Schema */}
      <IndustrySchema industry={industry} />
    </Layout>
  );
};

export default IndustryPage;
