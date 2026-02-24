import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Check, Sparkles, Users, FileDown, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { resources, categories, faqs, type ResourceCategory } from "@/data/resourcesData";

const FreeSeoResources = () => {
  const [email, setEmail] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");
  const [modalResource, setModalResource] = useState<number | null>(null);
  const [modalEmail, setModalEmail] = useState("");
  const { toast } = useToast();

  useSeoMeta({
    title: "Free SEO Resources | 16 Tools, Templates & Guides | Shahab Abbasi",
    description: "Download 16 free SEO resources — AI prompts, checklists, templates & strategy guides. Used by 500+ SEO professionals worldwide. No fluff, just results.",
    canonical: "https://shahababbasi.com/free-seo-resources",
  });

  const submitEmail = async (emailValue: string, source: string, tag?: string) => {
    const { error } = await supabase.from("leads").insert({
      name: "Resource Download",
      email: emailValue,
      source,
      message: tag ? `Downloaded: ${tag}` : "Unlocked all free SEO resources",
    });
    if (!error) {
      supabase.functions.invoke("notify-lead", {
        body: { name: "Resource Download", email: emailValue, message: tag ? `Downloaded: ${tag}` : "Unlocked all SEO resources", source },
      });
    }
    return error;
  };

  const handleHeroUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmail(heroEmail, "resources_hero_unlock");
    setUnlocked(true);
    toast({ title: "🎉 All 16 resources unlocked!", description: "Click any Download button to get your PDF." });
  };

  const handleDownloadAll = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmail(email, "resources_download_all");
    setUnlocked(true);
    toast({ title: "🎉 Resources unlocked!", description: "Click any Download button to get your PDF." });
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (modalResource === null) return;
    const resource = resources.find(r => r.id === modalResource);
    await submitEmail(modalEmail, `resource_${resource?.emailTag}`, resource?.title);
    setUnlocked(true);
    setModalResource(null);
    toast({ title: `📥 ${resource?.title} unlocked!` });
    if (resource?.downloadUrl) window.open(resource.downloadUrl, "_blank");
  };

  const handleDownloadClick = (resource: typeof resources[0]) => {
    if (unlocked) {
      window.open(resource.downloadUrl, "_blank");
    } else {
      setModalResource(resource.id);
    }
  };

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
    "All": 16,
    "AI Prompts": 3,
    "Checklists": 3,
    "Strategy Guides": 5,
    "Templates": 3,
    "Career": 2,
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,6%)] via-[hsl(220,35%,10%)] to-[hsl(220,40%,6%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> 500+ SEO Professionals Trust These Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Free SEO <span className="text-gradient">Resources</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
              Download 16 Professional Templates, Guides & AI Prompt Packs
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Everything I use with my paying clients — yours free. No fluff. Just results.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
              {[
                { icon: FileDown, label: "16 Resources", color: "text-primary" },
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

            {/* Hero Email Capture */}
            {!unlocked ? (
              <form onSubmit={handleHeroUnlock} className="max-w-lg mx-auto">
                <p className="text-sm text-muted-foreground mb-3">Get ALL 16 resources in one email</p>
                <div className="flex gap-2">
                  <Input type="email" placeholder="your@email.com" value={heroEmail} onChange={e => setHeroEmail(e.target.value)} required className="flex-1 h-12" />
                  <Button type="submit" size="lg" className="glow-primary h-12 px-6 shrink-0">
                    Download All <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">No spam. Unsubscribe anytime.</p>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold">
                <Check className="h-5 w-5" /> All 16 resources unlocked — click any card to download!
              </div>
            )}
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

                  {/* Download Button */}
                  <div className="mt-auto">
                    <Button
                      onClick={() => handleDownloadClick(resource)}
                      className={unlocked ? "w-full glow-accent bg-accent text-accent-foreground hover:bg-accent/90" : "w-full"}
                      variant={unlocked ? "default" : "outline"}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {unlocked ? "Download Free PDF" : "Enter Email to Download"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want ALL 16 Resources <span className="text-gradient">in One Email?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Enter your email and I'll send the complete SEO Resource Library.
            </p>
            {!unlocked ? (
              <form onSubmit={handleDownloadAll} className="max-w-lg mx-auto">
                <div className="flex gap-2">
                  <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 h-12" />
                  <Button type="submit" size="lg" className="glow-accent bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-6 shrink-0">
                    Send Me Everything <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Join 500+ SEO professionals. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold">
                <Check className="h-5 w-5" /> All resources unlocked! Scroll up and download.
              </div>
            )}
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

      {/* Email Modal */}
      {modalResource !== null && !unlocked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setModalResource(null)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <button onClick={() => setModalResource(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">✕</button>
            <div className="text-center mb-6">
              <Mail className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-1">
                Download {resources.find(r => r.id === modalResource)?.title}
              </h3>
              <p className="text-sm text-muted-foreground">Enter your email to get instant access.</p>
            </div>
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <Input type="email" placeholder="your@email.com" value={modalEmail} onChange={e => setModalEmail(e.target.value)} required className="h-12" />
              <Button type="submit" className="w-full h-12 glow-primary">
                <Download className="h-4 w-4 mr-2" /> Download Free PDF
              </Button>
              <p className="text-xs text-center text-muted-foreground">No spam. Unsubscribe anytime.</p>
            </form>
          </motion.div>
        </div>
      )}

      {/* Schema: CollectionPage + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Free SEO Resources",
              description: "Download 16 free SEO resources — AI prompts, checklists, templates & strategy guides.",
              url: "https://shahababbasi.com/free-seo-resources",
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: 16,
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
