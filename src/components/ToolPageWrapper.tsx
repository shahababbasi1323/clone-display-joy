import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, BookOpen, Wrench, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { type ToolData, toolsDataMap } from "@/data/toolsData";
import { getToolRelatedServices, getToolRelatedBlogs, getToolRelatedPpcServices } from "@/data/internalLinks";

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

const howToSteps = (name: string) => [
  `Enter your content or data into the input field above.`,
  `The ${name} will process your input automatically.`,
  `Review the results, scores, or generated output.`,
  `Click "Copy" to copy the results to your clipboard.`,
];

const ToolPageWrapper = ({ tool, children }: Props) => {
  const faqs = generateFaqs(tool);
  const related = getRelatedTools(tool);
  const steps = howToSteps(tool.name);

  useEffect(() => {
    document.title = tool.metaTitle;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", tool.metaDescription);

    const schemas = [
      { "@context": "https://schema.org", "@type": "WebApplication", name: tool.name, description: tool.metaDescription, url: window.location.href, applicationCategory: "SEO Tool", operatingSystem: "All", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.metaDescription, applicationCategory: "BusinessApplication", operatingSystem: "All", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
        { "@type": "ListItem", position: 2, name: "SEO Tools", item: `${window.location.origin}/tools` },
        { "@type": "ListItem", position: 3, name: tool.name, item: window.location.href },
      ]},
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    script.id = "tool-schema";
    document.head.appendChild(script);
    return () => { document.getElementById("tool-schema")?.remove(); };
  }, [tool]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm text-accent font-medium mb-2">{tool.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{tool.name.split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{tool.name.split(" ").pop()}</span></h1>
            <p className="text-muted-foreground mb-8">{tool.metaDescription}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {children}
          </motion.div>

          {/* How to Use */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold mb-6">How to Use This Tool</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="glass rounded-xl p-4 flex gap-4">
                  <span className="text-accent font-bold text-lg">{i + 1}</span>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why This Tool */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Why Use Our {tool.name}?</h2>
            <div className="glass rounded-xl p-6 space-y-3">
              <p className="text-muted-foreground">Our {tool.name} is built for SEO professionals, content creators, and digital marketers who need fast, reliable results without signing up or paying for expensive tools.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ 100% free — no signup, no limits</li>
                <li>✅ Privacy-first — all processing happens in your browser</li>
                <li>✅ Instant results — no waiting for server responses</li>
                <li>✅ Mobile-friendly — works on any device</li>
                <li>✅ Copy-to-clipboard — easily use results anywhere</li>
              </ul>
            </div>
          </motion.div>

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
