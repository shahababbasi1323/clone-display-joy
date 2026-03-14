import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, BookOpen, Wrench, Megaphone, CheckCircle, Users, Target, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { type ToolData, toolsDataMap } from "@/data/toolsData";
import { getToolRelatedServices, getToolRelatedBlogs, getToolRelatedPpcServices } from "@/data/internalLinks";
import { getToolContent } from "@/data/toolsContent";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { useSeoMeta } from "@/hooks/useSeoMeta";

interface Props {
  tool: ToolData;
  children: React.ReactNode;
}

const generateFaqs = (tool: ToolData) => [
  { q: `What is the ${tool.name}?`, a: `The ${tool.name} is a free online tool that helps you ${tool.metaDescription.toLowerCase().replace(/\.$/, "")}. No signup or download required.` },
  { q: `Is the ${tool.name} free?`, a: `Yes, completely free with unlimited usage. No account needed.` },
  { q: `How accurate is this tool?`, a: `Our ${tool.name} uses industry-standard algorithms and best practices to deliver reliable results for SEO professionals and marketers.` },
  { q: `Can I use this tool on mobile?`, a: `Yes, the ${tool.name} is fully responsive and works on all devices including smartphones, tablets, and desktops.` },
  { q: `Do you store my data?`, a: `No. All processing happens in your browser. We never store, transmit, or share any content you input into our tools.` },
];

const getRelatedTools = (tool: ToolData): ToolData[] => {
  const allTools = Object.values(toolsDataMap);
  const sameCategory = allTools.filter(t => t.category === tool.category && t.slug !== tool.slug);
  const others = allTools.filter(t => t.category !== tool.category);
  return [...sameCategory.slice(0, 3), ...others.slice(0, Math.max(0, 4 - sameCategory.length))].slice(0, 4);
};

const benefitIcons = [CheckCircle, Zap, Target, Lightbulb];

const ToolPageWrapper = ({ tool, children }: Props) => {
  const faqs = generateFaqs(tool);
  const related = getRelatedTools(tool);
  const toolContent = getToolContent(tool.category, tool.slug);

  useSeoMeta({
    title: tool.metaTitle,
    description: tool.metaDescription,
    canonical: `https://shahababbasi.com/tools/${tool.slug}`,
  });

  useEffect(() => {
    const howToSteps = toolContent?.howToSteps || [
      "Enter your content or data into the input field above.",
      `The ${tool.name} will process your input automatically.`,
      "Review the results, scores, or generated output.",
      "Click 'Copy' to copy the results to your clipboard.",
    ];

    const schemas = [
      { 
        "@context": "https://schema.org", 
        "@type": "WebApplication", 
        name: tool.name, 
        description: tool.metaDescription, 
        url: window.location.href, 
        applicationCategory: "SEO Tool", 
        operatingSystem: "All", 
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        creator: { "@type": "Organization", name: "Shahab Abbasi SEO" }
      },
      { 
        "@context": "https://schema.org", 
        "@type": "SoftwareApplication", 
        name: tool.name, 
        description: tool.metaDescription, 
        applicationCategory: "BusinessApplication", 
        operatingSystem: "All", 
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } 
      },
      { 
        "@context": "https://schema.org", 
        "@type": "HowTo", 
        name: `How to Use ${tool.name}`,
        description: `Step-by-step guide to using the ${tool.name} for SEO optimization.`,
        step: howToSteps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: `Step ${i + 1}`,
          text: step
        }))
      },
      { 
        "@context": "https://schema.org", 
        "@type": "FAQPage", 
        mainEntity: faqs.map(f => ({ 
          "@type": "Question", 
          name: f.q, 
          acceptedAnswer: { "@type": "Answer", text: f.a } 
        })) 
      },
      { 
        "@context": "https://schema.org", 
        "@type": "BreadcrumbList", 
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
          { "@type": "ListItem", position: 2, name: "SEO Tools", item: `${window.location.origin}/tools` },
          { "@type": "ListItem", position: 3, name: tool.name, item: window.location.href },
        ]
      },
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    script.id = "tool-schema";
    document.head.appendChild(script);
    return () => { document.getElementById("tool-schema")?.remove(); };
  }, [tool, toolContent, faqs]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <PageBreadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: tool.name }]} className="mb-6" />
            <p className="text-sm text-accent font-medium mb-2">{tool.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{tool.name.split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{tool.name.split(" ").pop()}</span></h1>
            <p className="text-muted-foreground mb-8">{tool.metaDescription}</p>
          </motion.div>

          {/* Tool Component */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {children}
          </motion.div>

          {/* What is This Tool - With Image */}
          {toolContent && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
              <h2 className="text-2xl font-bold mb-6">What is the {tool.name}?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">{toolContent.shortDescription}</p>
                  <p className="text-muted-foreground">{toolContent.longDescription}</p>
                </div>
                <div className="glass rounded-xl overflow-hidden">
                  <img 
                    src={toolContent.image} 
                    alt={`${tool.name} - ${tool.category} Tool`}
                    className="w-full h-full object-cover min-h-[200px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Benefits Section */}
          {toolContent && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {toolContent.benefits.map((benefit, i) => {
                  const Icon = benefitIcons[i % benefitIcons.length];
                  return (
                    <div key={i} className="glass rounded-xl p-5 flex gap-4">
                      <div className="p-2 rounded-lg bg-accent/10 h-fit">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* How to Use */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold mb-6">How to Use This Tool</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(toolContent?.howToSteps || [
                "Enter your content or data into the input field above.",
                `The ${tool.name} will process your input automatically.`,
                "Review the results, scores, or generated output.",
                "Click 'Copy' to copy the results to your clipboard.",
                "Use the insights to optimize your SEO strategy."
              ]).slice(0, 5).map((step, i) => (
                <div key={i} className="glass rounded-xl p-4 flex gap-4">
                  <span className="text-accent font-bold text-lg">{i + 1}</span>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases & Pro Tips */}
          {toolContent && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Use Cases */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Common Use Cases</h2>
                  <div className="glass rounded-xl p-6">
                    <ul className="space-y-3">
                      {toolContent.useCases.map((useCase, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pro Tips */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
                  <div className="glass rounded-xl p-6">
                    <ul className="space-y-3">
                      {toolContent.proTips.map((tip, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Audience */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      Who Uses This Tool
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {toolContent.targetAudience.map((audience, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}


          {/* Related Tools */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(r => (
                <Link key={r.slug} to={`/tools/${r.slug}`} className="glass rounded-xl p-4 hover:border-accent/30 transition-all group">
                  <h3 className="font-semibold text-sm mb-1">{r.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{r.metaDescription}</p>
                  <span className="text-xs text-accent mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">Try it <ArrowRight className="h-3 w-3" /></span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="glass rounded-xl group">
                  <summary className="p-4 cursor-pointer font-medium text-sm flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent group-open:rotate-45 transition-transform text-lg">+</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </motion.div>

          {/* Related Services */}
          {(() => {
            const relServices = getToolRelatedServices(tool.slug);
            return relServices.length > 0 ? (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl font-bold">Related SEO Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relServices.map(svc => {
                    if (!svc) return null;
                    const SvcIcon = svc.icon;
                    return (
                      <Link key={svc.slug} to={`/services/${svc.slug}`} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <SvcIcon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-sm">{svc.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{svc.metaDescription}</p>
                        <span className="text-xs text-primary mt-2 flex items-center gap-1">Learn more <ArrowRight className="h-3 w-3" /></span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ) : null;
          })()}

          {/* Related PPC Services */}
          {(() => {
            const relPpc = getToolRelatedPpcServices(tool.slug);
            return relPpc.length > 0 ? (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
                <div className="flex items-center gap-3 mb-6">
                  <Megaphone className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Related PPC Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relPpc.map(ppc => {
                    if (!ppc) return null;
                    const PpcIcon = ppc.icon;
                    return (
                      <Link key={ppc.slug} to={`/ppc/${ppc.slug}`} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <PpcIcon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-sm">{ppc.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{ppc.metaDescription}</p>
                        <span className="text-xs text-primary mt-2 flex items-center gap-1">Learn more <ArrowRight className="h-3 w-3" /></span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ) : null;
          })()}

          {/* Related Blog Posts */}
          {(() => {
            const relBlogs = getToolRelatedBlogs(tool.slug);
            return relBlogs.length > 0 ? (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl font-bold">Related Articles</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relBlogs.map(blog => {
                    if (!blog) return null;
                    return (
                      <Link key={blog.slug} to={`/blog/${blog.slug}`} className="glass rounded-xl p-5 hover:border-accent/30 transition-all group">
                        <span className="text-xs text-accent font-medium">{blog.category}</span>
                        <h3 className="font-semibold text-sm mt-1 line-clamp-2">{blog.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{blog.excerpt}</p>
                        <span className="text-xs text-accent mt-2 flex items-center gap-1">Read article <ArrowRight className="h-3 w-3" /></span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ) : null;
          })()}

          {/* CTA */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 glass rounded-2xl p-8 text-center">
            <MessageSquare className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Need Professional SEO Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Our tools are great for quick checks, but a comprehensive SEO strategy requires expert guidance.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">Book Free Consultation</Button>
              </Link>
              <Link to="/free-seo-audit">
                <Button variant="outline" size="lg">Get Free SEO Audit</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolPageWrapper;
