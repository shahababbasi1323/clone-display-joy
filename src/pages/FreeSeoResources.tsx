import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, FileText, BarChart3, BookOpen, CheckSquare, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

const resources = [
  { title: "Complete SEO Checklist 2026", desc: "100+ point checklist covering technical, on-page, and off-page SEO essentials.", icon: CheckSquare, category: "Checklist" },
  { title: "Keyword Research Template", desc: "Spreadsheet template for organizing keyword research with search volume and difficulty.", icon: BarChart3, category: "Template" },
  { title: "On-Page SEO Guide", desc: "Step-by-step guide to optimizing your pages for higher search rankings.", icon: BookOpen, category: "Guide" },
  { title: "Technical SEO Audit Template", desc: "Comprehensive audit template with 100+ checkpoints for technical SEO.", icon: FileText, category: "Template" },
  { title: "Link Building Strategy Guide", desc: "Proven link building strategies including outreach templates and prospecting methods.", icon: Lightbulb, category: "Guide" },
  { title: "Content Calendar Template", desc: "12-month content planning template with topic clustering framework.", icon: FileText, category: "Template" },
  { title: "Local SEO Setup Guide", desc: "Complete guide to setting up and optimizing your local SEO presence.", icon: BookOpen, category: "Guide" },
  { title: "E-commerce SEO Playbook", desc: "Specialized SEO strategies for online stores including product and category optimization.", icon: BookOpen, category: "Guide" },
  { title: "Schema Markup Cheat Sheet", desc: "Quick reference guide for implementing common schema markup types.", icon: FileText, category: "Cheat Sheet" },
  { title: "SEO Reporting Template", desc: "Professional reporting template for tracking SEO KPIs and presenting to stakeholders.", icon: BarChart3, category: "Template" },
  { title: "GEO Optimization Guide", desc: "How to optimize your content for AI-powered search engines like ChatGPT and Perplexity.", icon: Lightbulb, category: "Guide" },
  { title: "Competitor Analysis Framework", desc: "Structured approach to analyzing competitor SEO strategies and finding gaps.", icon: BarChart3, category: "Template" },
  { title: "Site Speed Optimization Guide", desc: "Practical guide to improving Core Web Vitals and page load speed.", icon: BookOpen, category: "Guide" },
  { title: "Backlink Audit Checklist", desc: "How to audit your backlink profile and disavow toxic links.", icon: CheckSquare, category: "Checklist" },
  { title: "International SEO Checklist", desc: "Essential checklist for multi-language and multi-region SEO including hreflang.", icon: CheckSquare, category: "Checklist" },
];

const FreeSeoResources = () => {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setUnlocked(true);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free SEO <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              15+ free guides, templates, and checklists to improve your SEO. Enter your email to download.
            </p>
          </motion.div>

          {/* Email Gate */}
          {!unlocked && (
            <div className="max-w-md mx-auto mb-16">
              <form onSubmit={handleUnlock} className="glass rounded-xl p-6 space-y-4">
                <div className="text-center mb-2">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Unlock All Resources</p>
                  <p className="text-sm text-muted-foreground">Enter your email to get free access to all downloads.</p>
                </div>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full glow-primary">
                  Get Free Access <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">No spam. Unsubscribe anytime.</p>
              </form>
            </div>
          )}

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{resource.category}</span>
                    <h3 className="font-semibold mt-1 mb-1">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{resource.desc}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={!unlocked}
                      className="text-xs"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      {unlocked ? "Download PDF" : "Enter email to unlock"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
              { "@type": "ListItem", position: 2, name: "Free SEO Resources", item: "https://shahababbasi.com/free-seo-resources" },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default FreeSeoResources;
