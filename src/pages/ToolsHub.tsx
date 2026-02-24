import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, FileText, Code, Eye, Search, Share2, MapPin, Bot, LinkIcon, ShoppingCart, BarChart3, MousePointerClick, Mail, ArrowRight, Megaphone } from "lucide-react";
import Layout from "@/components/Layout";
import { toolCategories, toolsDataMap } from "@/data/toolsData";
import { Button } from "@/components/ui/button";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const categoryIcons: Record<string, any> = {
  "Content & Writing": FileText,
  "Meta & On-Page SEO": Code,
  "Technical SEO": Wrench,
  "Keyword & Research": Search,
  "Social Media & LinkedIn": Share2,
  "Local SEO": MapPin,
  "GEO & AI Search": Bot,
  "Backlink & Off-Page": LinkIcon,
  "Ecommerce SEO": ShoppingCart,
  "Reporting & Calculation": BarChart3,
  "Conversion & UX": MousePointerClick,
  "Email & Outreach": Mail,
  "PPC & Paid Ads": Megaphone,
};

const totalTools = toolCategories.reduce((sum, cat) => sum + cat.slugs.length, 0);

const ToolsHub = () => {
  useSeoMeta({
    title: "75+ Free SEO Tools — Keyword Research, Technical SEO & More | Shahab Abbasi",
    description: "Access 75+ free SEO tools for keyword research, content optimization, technical audits, backlink analysis, local SEO, SERP previews, and PPC calculators. No signup required.",
    canonical: "https://shahababbasi.com/tools",
  });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? toolCategories.filter(cat => cat.name === activeCategory)
    : toolCategories;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <PageBreadcrumbs items={[{ label: "Tools" }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-4"><Wrench className="h-8 w-8 text-accent" /></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free <span className="text-gradient">SEO Tools</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">75+ powerful tools to help you optimize your website's search performance and ad campaigns — completely free.</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
              className="rounded-full"
            >
              All ({totalTools})
            </Button>
            {toolCategories.map(cat => {
              const Icon = categoryIcons[cat.name] || Wrench;
              return (
                <Button
                  key={cat.name}
                  variant={activeCategory === cat.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat.name)}
                  className="rounded-full gap-1.5"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.name} ({cat.slugs.length})
                </Button>
              );
            })}
          </div>

          <div className="space-y-12">
            {filteredCategories.map((cat, ci) => {
              const Icon = categoryIcons[cat.name] || Wrench;
              return (
                <motion.div key={cat.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.05 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10"><Icon className="h-5 w-5 text-accent" /></div>
                    <h2 className="text-xl font-bold">{cat.name}</h2>
                    <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">{cat.slugs.length} tools</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {cat.slugs.map(slug => {
                      const tool = toolsDataMap[slug];
                      if (!tool) return null;
                      return (
                        <Link key={slug} to={`/tools/${slug}`} className="glass rounded-xl p-4 hover:border-accent/30 transition-all group">
                          <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{tool.metaDescription}</p>
                          <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Use Tool <ArrowRight className="h-3 w-3" /></span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolsHub;
