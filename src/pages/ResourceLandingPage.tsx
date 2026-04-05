import { useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Check, ArrowLeft, Sparkles, AlertTriangle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { resources } from "@/data/resourcesData";
import { resourceWebContent, storageDownloadUrls } from "@/data/resourceContentData";

const ResourceLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const resource = resources.find(r => r.slug === slug);
  const webContent = resourceWebContent.find(r => r.slug === slug);
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  if (!resource) return <Navigate to="/free-seo-resources" replace />;

  const downloadUrl = storageDownloadUrls[resource.slug] || resource.downloadUrl;

  useSeoMeta({
    title: `${resource.title} — Free Download | Shahab Abbasi`,
    description: resource.description,
    canonical: `https://shahababbasi.com/free-seo-resources/${resource.slug}`,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await supabase.from("leads").insert({
      name: "Resource Download",
      email,
      source: `resource_${resource.emailTag}`,
      message: `Downloaded: ${resource.title}`,
    });
    supabase.functions.invoke("notify-lead", {
      body: {
        name: "Resource Download",
        email,
        message: `Downloaded: ${resource.title}`,
        source: `resource_${resource.emailTag}`,
        downloadUrl,
        resourceTitle: resource.title,
      },
    });
    setUnlocked(true);
    setIsSubmitting(false);
    toast({ title: `${resource.title} unlocked!` });
    navigate(`/free-seo-resources/thank-you?title=${encodeURIComponent(resource.title)}&url=${encodeURIComponent(downloadUrl)}`);
  };

  const Icon = resource.icon;

  const related = resources.filter(r => r.id !== resource.id && r.category === resource.category).slice(0, 2);
  const otherRelated = resources.filter(r => r.id !== resource.id && r.category !== resource.category).slice(0, 3 - related.length);
  const suggestions = [...related, ...otherRelated];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto relative z-10 max-w-4xl">
          <PageBreadcrumbs items={[{ label: "Free Resources", href: "/free-seo-resources" }, { label: resource.title }]} className="mb-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/20 text-primary">{resource.category}</span>
                {resource.isNew && <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">⭐ NEW</span>}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10"><Icon className="h-8 w-8 text-primary" /></div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{resource.title}</h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{resource.description}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm font-semibold text-muted-foreground mb-6">
                <Sparkles className="h-4 w-4 text-accent" /> {resource.statsBadge}
              </div>
            </div>

            {/* Email Capture Card */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="glass rounded-2xl p-8 border-primary/20 lg:sticky lg:top-28">
                {!unlocked ? (
                  <>
                    <div className="text-center mb-6">
                      <Mail className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h2 className="text-xl font-bold mb-1">Download Free PDF</h2>
                      <p className="text-sm text-muted-foreground">Enter your email to get instant access.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-12" />
                      <Button type="submit" disabled={isSubmitting} className="w-full h-12 glow-primary">
                        <Download className="h-4 w-4 mr-2" />{isSubmitting ? "Unlocking..." : "Download Free PDF"}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">No spam. Unsubscribe anytime.</p>
                    </form>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto">
                      <Check className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-xl font-bold">PDF Unlocked!</h2>
                    <p className="text-sm text-muted-foreground">Your download should have started.</p>
                    <Button onClick={() => window.open(downloadUrl, "_blank")} className="w-full glow-accent bg-accent text-accent-foreground hover:bg-accent/90">
                      <Download className="h-4 w-4 mr-2" /> Download Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What's <span className="text-gradient">Inside</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {resource.whatsInside.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-4 glass rounded-xl">
                <div className="p-1 rounded-full bg-accent/10 shrink-0 mt-0.5"><Check className="h-4 w-4 text-accent" /></div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Web Content */}
      {webContent && (
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Full <span className="text-gradient">Content Preview</span>
            </h2>
            <div className="space-y-10">
              {webContent.sections.map((section, si) => (
                <motion.div
                  key={si}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                      {si + 1}
                    </span>
                    {section.heading}
                  </h3>

                  {section.text && (
                    <p className="text-muted-foreground leading-relaxed mb-4">{section.text}</p>
                  )}

                  {section.items && (
                    <div className="space-y-3">
                      {section.items.map((item, ii) => (
                        <div key={ii} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
                          <div className="shrink-0 mt-0.5">
                            {item.priority === "Critical" ? (
                              <AlertTriangle className="h-4 w-4 text-destructive" />
                            ) : (
                              <Check className="h-4 w-4 text-accent" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-sm">{item.label}</span>
                              {item.priority && (
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                  item.priority === "Critical" ? "bg-destructive/10 text-destructive" :
                                  item.priority === "High" ? "bg-amber-500/10 text-amber-400" :
                                  "bg-muted text-muted-foreground"
                                }`}>
                                  {item.priority}
                                </span>
                              )}
                            </div>
                            {item.detail && (
                              <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.proTip && (
                    <div className="mt-4 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">Pro Tip</span>
                        <p className="text-sm text-muted-foreground mt-1">{section.proTip}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mid-content CTA */}
            <div className="mt-12 glass rounded-2xl p-8 text-center border-primary/20">
              <h3 className="text-xl font-bold mb-2">Want the Full PDF Version?</h3>
              <p className="text-muted-foreground mb-4">Download the complete {resource.title} with all details, formatted for print and offline use.</p>
              {!unlocked ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
                  <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 h-12" />
                  <Button type="submit" disabled={isSubmitting} className="glow-primary h-12 shrink-0">
                    <Download className="h-4 w-4 mr-2" /> Download PDF
                  </Button>
                </form>
              ) : (
                <Button onClick={() => window.open(downloadUrl, "_blank")} className="glow-accent bg-accent text-accent-foreground hover:bg-accent/90">
                  <Download className="h-4 w-4 mr-2" /> Download PDF Again
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Resources */}
      {suggestions.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">You Might Also <span className="text-gradient">Like</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestions.map(r => (
                <Link key={r.id} to={`/free-seo-resources/${r.slug}`} className="glass rounded-xl p-6 hover:border-primary/30 transition-all group">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{r.category}</span>
                  <h3 className="font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{r.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold mt-3">
                    View Resource <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="pb-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Want All 16 Resources?</h2>
          <p className="text-muted-foreground mb-6">Get the complete SEO Resource Library — templates, guides, checklists & AI prompts.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/free-seo-resources"><Button className="glow-primary">Browse All 16 Resources <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link to="/free-seo-audit"><Button variant="outline">Get Free SEO Audit</Button></Link>
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
              "@type": "DigitalDocument",
              name: resource.title,
              description: resource.description,
              url: `https://shahababbasi.com/free-seo-resources/${resource.slug}`,
              author: { "@type": "Person", name: "Shahab Abbasi" },
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Free SEO Resources", item: "https://shahababbasi.com/free-seo-resources" },
                { "@type": "ListItem", position: 3, name: resource.title, item: `https://shahababbasi.com/free-seo-resources/${resource.slug}` },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default ResourceLandingPage;
