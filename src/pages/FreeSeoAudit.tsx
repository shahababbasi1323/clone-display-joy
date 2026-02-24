import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, FileText, BarChart3, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: FileText, title: "Technical Health Check", desc: "100+ point audit covering crawlability, indexation, and Core Web Vitals" },
  { icon: BarChart3, title: "Keyword Opportunities", desc: "Discover untapped keywords your competitors are ranking for" },
  { icon: Users, title: "Competitor Analysis", desc: "See how you stack up against top competitors in your niche" },
  { icon: Shield, title: "Actionable Recommendations", desc: "Clear, prioritized steps to improve your rankings immediately" },
];

const FreeSeoAudit = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", website: "", message: "" });
  const { toast } = useToast();

  useSeoMeta({
    title: "Free SEO Audit - Get Your Website Analyzed in 24 Hours",
    description: "Request a free comprehensive SEO audit covering technical health, keyword opportunities, and competitor analysis. Delivered within 24 hours.",
    canonical: "https://shahababbasi.com/free-seo-audit",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      company: form.website,
      message: form.message || `Website: ${form.website}`,
      source: "free_seo_audit",
    });
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
      supabase.functions.invoke("notify-lead", {
        body: { name: form.name, email: form.email, phone: form.phone, website: form.website, message: form.message, source: "free_seo_audit" },
      }).catch(console.error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <PageBreadcrumbs items={[{ label: "Free SEO Audit" }]} className="mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left - Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Free <span className="text-gradient">SEO Audit</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get a comprehensive 15-20 page analysis of your website's SEO health — delivered within 24 hours. No strings attached.
              </p>
              <div className="space-y-5 mb-8">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0 h-fit">
                      <b.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{b.title}</p>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <p className="text-sm"><span className="font-semibold text-accent">Average delivery:</span> <span className="text-muted-foreground">Within 24 hours of submission</span></p>
              </div>

              {/* Trust / Internal Links */}
              <div className="mt-8 space-y-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explore Our Services</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Technical SEO", href: "/services/technical-seo" },
                    { label: "On-Page SEO", href: "/services/on-page-seo" },
                    { label: "Local SEO", href: "/services/local-seo" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "Testimonials", href: "/testimonials" },
                  ].map((l) => (
                    <Link key={l.href} to={l.href} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              {submitted ? (
                <div className="glass rounded-2xl p-10 text-center glow-primary">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold mb-2">Audit Requested!</h2>
                  <p className="text-muted-foreground mb-6">I'll analyze your website and send you a detailed report within 24 hours.</p>
                  <Link to="/blog">
                    <Button variant="outline">Read SEO Tips While You Wait <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                  <div className="text-center mb-2">
                    <h2 className="text-xl font-bold">Book Your Free Audit</h2>
                    <p className="text-sm text-muted-foreground">Fill in the details below and I'll get started right away.</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Website URL *</label>
                    <Input placeholder="https://yourwebsite.com" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name *</label>
                      <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone (optional)</label>
                    <Input placeholder="+1 234 567 890" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">What are your SEO goals? (optional)</label>
                    <Textarea placeholder="E.g. rank for specific keywords, increase local traffic..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} />
                  </div>
                  <Button type="submit" size="lg" className="w-full glow-primary" disabled={loading}>
                    {loading ? "Submitting..." : "Get My Free Audit"} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">No spam. Your data is safe and never shared.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Free SEO Audit",
              description: "Comprehensive SEO audit covering technical health, keyword opportunities, and competitor analysis.",
              provider: { "@type": "Person", name: "Shahab Abbasi", url: "https://shahababbasi.com" },
              url: "https://shahababbasi.com/free-seo-audit",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Free SEO Audit", item: "https://shahababbasi.com/free-seo-audit" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default FreeSeoAudit;
