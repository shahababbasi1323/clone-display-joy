import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronDown, BarChart3, Target, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { getI18nIndustryBySlug, industryI18nUI, type SupportedIndustryLang } from "@/data/industriesI18n";
import { getIndustryCategoryImage } from "@/components/industry/industryImages";
import { getI18nIndustryHreflang } from "@/utils/industryHreflang";

const VALID_LANGS: SupportedIndustryLang[] = ["ar", "fr", "de", "es", "nl"];

const IndustryPageLang = () => {
  const { lang, slug } = useParams<{ lang: string; slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!lang || !VALID_LANGS.includes(lang as SupportedIndustryLang)) return <NotFound />;
  const l = lang as SupportedIndustryLang;
  const ui = industryI18nUI[l];
  const industry = slug ? getI18nIndustryBySlug(l, slug) : undefined;
  if (!industry) return <NotFound />;

  const Icon = industry.icon;
  const heroImage = getIndustryCategoryImage(industry.category);

  const hreflang = getI18nIndustryHreflang(l, industry.slug);

  useSeoMeta({
    title: industry.metaTitle,
    description: industry.metaDescription,
    canonical: `https://shahababbasi.com/${l}/industries/${industry.slug}`,
    hreflang,
  });

  return (
    <Layout>
      <div dir={ui.dir}>
        {/* Hero */}
        <section className="section-padding pb-12">
          <div className="container mx-auto max-w-5xl">
            <Link to={`/${l}/industries`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" /> {ui.breadcrumbIndustries}
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10"><Icon className="h-8 w-8 text-primary" /></div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {industry.heroTitle} <span className="text-gradient">{industry.heroHighlight}</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">{industry.heroDescription}</p>
                <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-accent" /> 4.9/5</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-accent" /> 150+</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/free-seo-audit">
                    <Button size="lg" className="glow-primary">{ui.freeAudit(industry.shortTitle)} <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">{ui.talkExpert}</Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  <AspectRatio ratio={16 / 9}>
                    <img src={heroImage} alt={industry.shortTitle} className="w-full h-full object-cover" loading="eager" />
                  </AspectRatio>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-10">{ui.challengesTitle(industry.shortTitle)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-10">{ui.approachTitle(industry.shortTitle)}</h2>
            <div className="space-y-6">
              {industry.approach.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: ui.dir === "rtl" ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
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

        {/* Keywords */}
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">{ui.keywordsTitle(industry.shortTitle)}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {industry.keywords.map(kw => (
                <span key={kw} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border">{kw}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <BarChart3 className="h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold">{ui.resultsTitle(industry.shortTitle)}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industry.caseStudy.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{r.metric}</div>
                  <div className="text-sm text-muted-foreground">{r.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-10">{ui.faqTitle(industry.shortTitle)}</h2>
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

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
              <h2 className="text-3xl font-bold mb-4">{ui.readyCta(industry.shortTitle)}</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <Link to="/free-seo-audit">
                  <Button size="lg" className="glow-primary">{ui.freeAudit(industry.shortTitle)} <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">{ui.talkExpert}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: industry.title,
          description: industry.metaDescription,
          provider: { "@type": "Organization", name: "Shahab Abbasi SEO", url: "https://shahababbasi.com" },
          areaServed: { "@type": "Place", name: "Worldwide" },
        }) }} />
      </div>
    </Layout>
  );
};

export default IndustryPageLang;
