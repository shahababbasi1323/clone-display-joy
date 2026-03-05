import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Users, FileDown, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { resources, categories, faqs, type ResourceCategory } from "@/data/resourcesData";

const FreeSeoResources = () => {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");

  useSeoMeta({
    title: "Free SEO Resources | 17 Tools, Templates & Guides | Shahab Abbasi",
    description: "Download 17 free SEO resources — AI prompts, checklists, templates & strategy guides. Used by 500+ SEO professionals worldwide. No fluff, just results.",
    canonical: "https://shahababbasi.com/free-seo-resources",
  });

  const filtered = activeCategory === "All" ? resources : resources.filter(r => r.category === activeCategory);

  const categoryColors: Record<ResourceCategory, string> = {
    "All": "bg-primary",
    "AI Prompts": "bg-purple-600",
    "Checklists": "bg-emerald-600",
    "Strategy Guides": "bg-blue-600",
    "Templates": "bg-amber-600",
    "Career": "bg-pink-600",
  };

  const categoryCount: Record<ResourceCategory, number> = {
    "All": 17,
    "AI Prompts": 4,
    "Checklists": 3,
    "Strategy Guides": 5,
    "Templates": 3,
    "Career": 2,
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto relative z-10">
          <PageBreadcrumbs items={[{ label: "Free Resources" }]} className="mb-6" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> 500+ SEO Professionals Trust These Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Free SEO <span className="text-gradient">Resources</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
              Download 17 Professional Templates, Guides & AI Prompt Packs
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Everything I use with my paying clients — yours free. No fluff. Just results.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { icon: FileDown, label: "17 Resources", color: "text-primary" },
                { icon: Sparkles, label: "200+ AI Prompts", color: "text-purple-400" },
                { icon: Users, label: "500+ Downloads", color: "text-accent" },
                { icon: DollarSign, label: "$0 Cost", color: "text-amber-400" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="font-bold text-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat} ({categoryCount[cat]})
              </button>
            ))}
            {resources.some(r => r.isNew) && (
              <button
                onClick={() => setActiveCategory("Strategy Guides")}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-all"
              >
                ⭐ New
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all group flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  {/* Top row: category + new badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white ${categoryColors[resource.category]}`}>
                      {resource.category}
                    </span>
                    {resource.isNew && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                        ⭐ NEW
                      </span>
                    )}
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{resource.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{resource.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.highlights.map((h, j) => (
                      <span key={j} className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                        <Check className="h-3 w-3" /> {h}
                      </span>
                    ))}
                  </div>

                  {/* Stats Badge */}
                  <div className="text-xs text-muted-foreground font-semibold mb-4 px-3 py-2 rounded-lg bg-muted/50">
                    {resource.statsBadge}
                  </div>

                  {/* View Resource */}
                  <div className="mt-auto">
                    <Link to={`/free-seo-resources/${resource.slug}`} className="block">
                      <Button variant="default" className="w-full">
                        View Resource <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-xl px-6 border-border/50">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal Links */}
      <section className="pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Want More <span className="text-gradient">SEO Help</span>?</h2>
          <p className="text-muted-foreground mb-6">Explore our services or get a free personalized audit of your website.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/free-seo-audit"><Button className="glow-primary">Get Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link to="/services"><Button variant="outline">View Services</Button></Link>
            <Link to="/blog"><Button variant="outline">Read Blog</Button></Link>
            <Link to="/tools"><Button variant="outline">Free SEO Tools</Button></Link>
          </div>
        </div>
      </section>

      {/* Schema: CollectionPage + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Free SEO Resources",
              description: "Download 17 free SEO resources — AI prompts, checklists, templates & strategy guides.",
              url: "https://shahababbasi.com/free-seo-resources",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 17,
                itemListElement: resources.map((r, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: r.title,
                  description: r.description,
                  url: `https://shahababbasi.com/free-seo-resources/${r.slug}`,
                })),
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(f => ({
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
                { "@type": "ListItem", position: 2, name: "Free SEO Resources", item: "https://shahababbasi.com/free-seo-resources" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default FreeSeoResources;
