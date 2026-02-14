import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const faqCategories = [
  {
    name: "General SEO",
    faqs: [
      { q: "What is SEO and why does my business need it?", a: "SEO (Search Engine Optimization) is the process of improving your website's visibility in search engine results. It drives organic traffic, builds credibility, and generates leads — all without paying for ads. Every business with a website needs SEO to be found by potential customers." },
      { q: "How long does it take to see SEO results?", a: "Typically 3-6 months for significant results. Quick wins from technical fixes can show improvement within weeks, but sustainable ranking improvements and traffic growth require consistent effort over months." },
      { q: "Is SEO worth the investment for small businesses?", a: "Absolutely. SEO provides one of the highest ROIs of any digital marketing channel. Unlike paid ads, the traffic you earn through SEO continues flowing even after you stop investing. For small businesses, local SEO in particular can be a game-changer." },
      { q: "What's the difference between SEO and SEM?", a: "SEO focuses on organic (unpaid) search results, while SEM (Search Engine Marketing) includes paid advertising like Google Ads. SEO takes longer but provides sustainable results; SEM gives immediate visibility but stops when you stop paying." },
      { q: "Can you guarantee #1 rankings on Google?", a: "No ethical SEO professional can guarantee specific rankings. Google's algorithm considers 200+ factors and changes frequently. What we guarantee is implementing best practices, transparent reporting, and measurable improvements in traffic and rankings." },
      { q: "How often should SEO strategy be updated?", a: "SEO is an ongoing process. We review and adjust strategies monthly based on performance data, algorithm updates, and competitive changes. Major strategy overhauls typically happen quarterly." },
    ],
  },
  {
    name: "GEO & AI Search",
    faqs: [
      { q: "What is GEO (Generative Engine Optimization)?", a: "GEO optimizes your content to appear in AI-powered search engines like ChatGPT, Google's AI Overviews, Perplexity, and Gemini. As more users turn to AI for answers, GEO ensures your business is cited and recommended." },
      { q: "How is GEO different from traditional SEO?", a: "While SEO focuses on ranking in traditional search results, GEO focuses on being cited by AI systems. GEO emphasizes authoritative content, clear data structures, cited sources, and entity optimization to increase AI visibility." },
      { q: "Will AI search replace Google?", a: "AI search is complementary to traditional search, not a replacement. Both will coexist, with AI handling conversational queries and Google handling navigational and transactional searches. Optimizing for both is essential." },
      { q: "How do you optimize for ChatGPT and Perplexity?", a: "We focus on creating authoritative, well-structured content with clear facts, proper schema markup, and strong entity associations. Building topical authority and earning citations from trusted sources improves your chances of being referenced by AI." },
    ],
  },
  {
    name: "Technical SEO",
    faqs: [
      { q: "What is a technical SEO audit?", a: "A comprehensive analysis of your website's technical health including crawlability, indexation, site speed, Core Web Vitals, mobile-friendliness, schema markup, and security. We check 100+ points to identify issues hurting your rankings." },
      { q: "What are Core Web Vitals and why do they matter?", a: "Core Web Vitals are Google's metrics for user experience: LCP (loading speed), INP (interactivity), and CLS (visual stability). They're a confirmed ranking factor, meaning poor scores can hurt your search visibility." },
      { q: "How do you improve website speed?", a: "We optimize images, implement lazy loading, minify code, leverage browser caching, use CDNs, reduce server response time, and optimize critical rendering path. Each site gets a custom speed optimization plan." },
      { q: "What is schema markup and do I need it?", a: "Schema markup is structured data code that helps search engines understand your content better. It can generate rich results (star ratings, FAQs, prices) in search results, significantly improving click-through rates." },
    ],
  },
  {
    name: "Local SEO",
    faqs: [
      { q: "What is Local SEO?", a: "Local SEO optimizes your online presence to attract customers from local searches. It includes Google Business Profile optimization, local citations, review management, and location-specific content to help you rank in 'near me' searches and Google Maps." },
      { q: "How do I rank higher on Google Maps?", a: "Key factors include a complete and optimized Google Business Profile, consistent NAP (Name, Address, Phone) across the web, positive reviews with responses, local backlinks, and location-specific website content." },
      { q: "Do I need a website for Local SEO?", a: "While a Google Business Profile alone can provide some local visibility, a website dramatically improves your local SEO by providing more content for Google to index, building authority, and offering a better user experience for potential customers." },
    ],
  },
  {
    name: "Pricing & Process",
    faqs: [
      { q: "How much do your SEO services cost?", a: "Our packages start at $500/month for the Starter plan, $1,000/month for Growth, and $2,000/month for Enterprise. We also offer custom packages tailored to specific needs and budgets. Visit our pricing page for details." },
      { q: "Do you require long-term contracts?", a: "We recommend a minimum 6-month commitment since SEO takes time to show results. However, we offer month-to-month options after the initial period. Our goal is to earn your continued business through results, not contracts." },
      { q: "What does your SEO process look like?", a: "Our process: 1) Discovery call & audit, 2) Strategy development, 3) Technical fixes, 4) On-page optimization, 5) Content creation, 6) Link building, 7) Monthly reporting & strategy refinement. We keep you informed at every step." },
      { q: "Do you work with international clients?", a: "Yes! We work with clients across 5+ countries including Pakistan, UAE, UK, USA, Canada, and various European countries. All communication is done remotely via video calls, email, and project management tools." },
      { q: "What's included in the free SEO audit?", a: "Our free audit covers technical health, on-page SEO analysis, backlink profile review, keyword opportunity assessment, competitor analysis, and actionable recommendations. It's a comprehensive 15-20 page report delivered within 24 hours." },
      { q: "How do you measure SEO success?", a: "We track key metrics including organic traffic, keyword rankings, conversion rates, click-through rates, domain authority, and most importantly — revenue impact. Monthly reports cover all metrics with clear insights." },
    ],
  },
  {
    name: "E-commerce SEO",
    faqs: [
      { q: "Do you work with Shopify stores?", a: "Yes! We specialize in Shopify SEO including fixing duplicate content issues, optimizing collection and product pages, improving site speed, implementing schema markup, and building authority through content and links." },
      { q: "How is e-commerce SEO different?", a: "E-commerce SEO focuses on product pages, category optimization, faceted navigation, product schema, inventory management for SEO, and conversion optimization. It requires handling thousands of pages efficiently." },
      { q: "Can SEO help reduce my ad spend?", a: "Absolutely. As organic traffic grows, you can reduce reliance on paid ads while maintaining or increasing sales. Many clients reduce ad spend by 30-50% within 6-12 months of starting SEO." },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs.map((f) => ({ ...f, category: cat.name })));

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useSeoMeta({
    title: "SEO FAQ - Answers to Common SEO & GEO Questions",
    description: "Find answers to frequently asked questions about SEO, GEO optimization, technical SEO, local SEO, pricing, and our process.",
    canonical: "https://shahababbasi.com/faq",
  });

  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory
    ? faqCategories.find((c) => c.name === activeCategory)?.faqs.map((f) => ({ ...f, category: activeCategory })) || []
    : allFaqs;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to know about SEO, GEO, and our services.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setActiveCategory(null); }}
                className="pl-10"
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !activeCategory ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All ({allFaqs.length})
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.name ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat.name} ({cat.faqs.length})
                </button>
              ))}
            </div>
          )}

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, i) => {
              const key = `${faq.category}-${i}`;
              return (
                <div key={key} className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === key ? null : key)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="pr-4">
                      {searchQuery && (
                        <span className="text-xs text-primary font-medium">{faq.category} · </span>
                      )}
                      <span className="font-medium text-sm md:text-base">{faq.q}</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openFaq === key ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === key && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-10 text-muted-foreground">
                <p>No questions found matching "{searchQuery}". Try a different search term.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default FAQ;
