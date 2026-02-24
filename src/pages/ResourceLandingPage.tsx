import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Check, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { resources } from "@/data/resourcesData";

const ResourceLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = resources.find(r => r.slug === slug);
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  if (!resource) return <Navigate to="/free-seo-resources" replace />;

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
      body: { name: "Resource Download", email, message: `Downloaded: ${resource.title}`, source: `resource_${resource.emailTag}` },
    });
    setUnlocked(true);
    setIsSubmitting(false);
    toast({ title: `📥 ${resource.title} unlocked!` });
    window.open(resource.downloadUrl, "_blank");
  };

  const Icon = resource.icon;

  // Suggest 3 related resources
  const related = resources.filter(r => r.id !== resource.id && r.category === resource.category).slice(0, 2);
  const otherRelated = resources.filter(r => r.id !== resource.id && r.category !== resource.category).slice(0, 3 - related.length);
  const suggestions = [...related, ...otherRelated];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,6%)] via-[hsl(220,35%,10%)] to-[hsl(220,40%,6%)]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto relative z-10 max-w-4xl">
          <Link to="/free-seo-resources" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to All Resources
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/20 text-primary">
                  {resource.category}
                </span>
                {resource.isNew && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">⭐ NEW</span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{resource.title}</h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{resource.description}</p>

              {/* Stats Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm font-semibold text-muted-foreground mb-6">
                <Sparkles className="h-4 w-4 text-accent" /> {resource.statsBadge}
              </div>
            </div>

            {/* Right: Email Capture Card */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="glass rounded-2xl p-8 border-primary/20">
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
                        <Download className="h-4 w-4 mr-2" />
                        {isSubmitting ? "Unlocking..." : "Download Free PDF"}
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
                    <p className="text-sm text-muted-foreground">Your download should have started. If not, click below.</p>
                    <Button onClick={() => window.open(resource.downloadUrl, "_blank")} className="w-full glow-accent bg-accent text-accent-foreground hover:bg-accent/90">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            What's <span className="text-gradient">Inside</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resource.whatsInside.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 glass rounded-xl"
              >
                <div className="p-1 rounded-full bg-accent/10 shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {suggestions.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">
              You Might Also <span className="text-gradient">Like</span>
            </h2>
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

      {/* CTA */}
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
