import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const FreeSeoAudit = () => {
  const [submitted, setSubmitted] = useState(false);

  useSeoMeta({
    title: "Free SEO Audit - Get Your Website Analyzed in 24 Hours",
    description: "Request a free comprehensive SEO audit covering technical health, keyword opportunities, and competitor analysis. Delivered within 24 hours.",
    canonical: "https://shahababbasi.com/free-seo-audit",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free <span className="text-gradient">SEO Audit</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get a comprehensive analysis of your website's SEO health — delivered within 24 hours.
            </p>
          </motion.div>

          {submitted ? (
            <div className="glass rounded-xl p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2">Audit Requested!</h2>
              <p className="text-muted-foreground">I'll analyze your website and send you a detailed report within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="glass rounded-xl p-8 space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Website URL *</label>
                <Input placeholder="https://yourwebsite.com" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name *</label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email *</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone</label>
                <Input placeholder="+1 234 567 890" />
              </div>
              <Button type="submit" size="lg" className="w-full glow-primary">
                Get My Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">No spam. Your data is safe and never shared.</p>
            </form>
          )}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Technical Health Check", "Keyword Opportunities", "Competitor Analysis"].map((item) => (
              <div key={item} className="glass rounded-lg p-4 text-center text-sm font-medium">
                ✅ {item}
              </div>
            ))}
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
