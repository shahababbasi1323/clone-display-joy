import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, FileText, Code, Eye, Search, Share2, MapPin, Bot, LinkIcon, ShoppingCart, BarChart3, MousePointerClick, Mail, ArrowRight, Megaphone, Globe, Star, TrendingUp, X } from "lucide-react";
import Layout from "@/components/Layout";
import { toolCategories, toolsData, toolsDataMap } from "@/data/toolsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  "Domain & URL Tools": Globe,
};

const totalTools = toolCategories.reduce((sum, cat) => sum + cat.slugs.length, 0);

// Popular / most-used tools shown at top
const popularSlugs = [
  "word-counter",
  "meta-tag-generator",
  "google-serp-preview",
  "keyword-density-checker",
  "schema-generator",
  "robots-txt-generator",
  "readability-checker",
  "slug-generator",
  "headline-analyzer",
  "google-ads-budget-calculator",
  "broken-link-checker",
  "bulk-url-issue-checker",
];

const ToolsHub = () => {
  useSeoMeta({
    title: "75+ Free SEO Tools - Keyword Research, Technical SEO & More | Shahab Abbasi",
    description: "Access 75+ free SEO tools for keyword research, content optimization, technical audits, backlink analysis, local SEO, SERP previews, and PPC calculators. No signup required.",
    canonical: "https://shahababbasi.com/tools",
  });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const searchLower = search.toLowerCase().trim();

  const searchResults = useMemo(() => {
    if (!searchLower) return null;
    return toolsData.filter(
      t =>
        t.name.toLowerCase().includes(searchLower) ||
        t.metaDescription.toLowerCase().includes(searchLower) ||
        t.category.toLowerCase().includes(searchLower) ||
        t.slug.replace(/-/g, " ").includes(searchLower)
    );
  }, [searchLower]);

  const filteredCategories = activeCategory
    ? toolCategories.filter(cat => cat.name === activeCategory)
    : toolCategories;

  const popularTools = popularSlugs.map(s => toolsDataMap[s]).filter(Boolean);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <PageBreadcrumbs items={[{ label: "Tools" }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-4"><Wrench className="h-8 w-8 text-accent" /></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free <span className="text-gradient">SEO Tools</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{totalTools}+ powerful tools to help you optimize your website's search performance and ad campaigns - completely free.</p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search tools… (e.g. meta tag, keyword, broken link)"
              className="pl-10 pr-10 h-12 rounded-full text-sm"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Search Results */}
          {searchResults ? (
            <div className="mb-12">
              <p className="text-sm text-muted-foreground mb-4">
                {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "<span className="font-medium text-foreground">{search}</span>"
              </p>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {searchResults.map(tool => (
                    <Link key={tool.slug} to={`/tools/${tool.slug}`} className="glass rounded-xl p-4 hover:border-accent/30 transition-all group">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{tool.category}</span>
                      <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{tool.metaDescription}</p>
                      <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Use Tool <ArrowRight className="h-3 w-3" /></span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">No tools found. Try a different search term.</p>
              )}
            </div>
          ) : (
            <>
              {/* Popular Tools */}
              {!activeCategory && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10"><TrendingUp className="h-5 w-5 text-accent" /></div>
                    <h2 className="text-xl font-bold">Popular Tools</h2>
                    <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">Most Used</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {popularTools.map(tool => (
                      <Link key={tool.slug} to={`/tools/${tool.slug}`} className="glass rounded-xl p-4 hover:border-accent/30 transition-all group border-accent/10">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Star className="h-3 w-3 text-accent fill-accent" />
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{tool.category}</span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{tool.metaDescription}</p>
                        <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Use Tool <ArrowRight className="h-3 w-3" /></span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

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
            </>
          )}
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Free SEO Tools",
              description: "50+ free SEO tools for keyword research, technical audits, content optimization, link building, and more.",
              url: "https://shahababbasi.com/tools",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: toolCategories.flatMap((cat, ci) =>
                  cat.slugs.map((slug, si) => {
                    const tool = toolsDataMap[slug];
                    return tool ? {
                      "@type": "ListItem",
                      position: ci * 10 + si + 1,
                      name: tool.name,
                      url: `https://shahababbasi.com/tools/${slug}`,
                    } : null;
                  }).filter(Boolean)
                ),
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Free SEO Tools", item: "https://shahababbasi.com/tools" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default ToolsHub;
