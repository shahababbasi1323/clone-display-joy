import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { getBlogBySlug, getRelatedPosts } from "@/data/blogData";
import { getBlogRelatedServices, getBlogRelatedTools } from "@/data/internalLinks";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, List } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState } from "react";

import seoStrategyImg from "@/assets/blog/seo-strategy.jpg";
import technicalSeoImg from "@/assets/blog/technical-seo.jpg";
import localSeoImg from "@/assets/blog/local-seo.jpg";
import ecommerceSeoImg from "@/assets/blog/ecommerce-seo.jpg";
import linkBuildingImg from "@/assets/blog/link-building.jpg";
import contentMarketingImg from "@/assets/blog/content-marketing.jpg";
import googleUpdatesImg from "@/assets/blog/google-updates.jpg";
import keywordResearchImg from "@/assets/blog/keyword-research.jpg";
import onPageSeoImg from "@/assets/blog/on-page-seo.jpg";
import aiSeoImg from "@/assets/blog/ai-seo.jpg";
import scandinavianSeoImg from "@/assets/blog/scandinavian-seo.jpg";

const imageMap: Record<string, string> = {
  "seo-strategy": seoStrategyImg,
  "technical-seo": technicalSeoImg,
  "local-seo": localSeoImg,
  "ecommerce-seo": ecommerceSeoImg,
  "link-building": linkBuildingImg,
  "content-marketing": contentMarketingImg,
  "google-updates": googleUpdatesImg,
  "keyword-research": keywordResearchImg,
  "on-page-seo": onPageSeoImg,
  "ai-seo": aiSeoImg,
  "scandinavian-seo": scandinavianSeoImg,
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || "");
  const [tocOpen, setTocOpen] = useState(false);

  useSeoMeta({
    title: post?.metaTitle || "Blog | Shahab Abbasi",
    description: post?.metaDescription || "",
    canonical: post ? `https://shahababbasi.com/blog/${post.slug}` : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://shahababbasi.com${imageMap[post.image]}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author, url: "https://shahababbasi.com/about" },
    publisher: { "@type": "Person", name: "Shahab Abbasi" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://shahababbasi.com/blog/${post.slug}` },
    keywords: post.tags.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://shahababbasi.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://shahababbasi.com/blog/${post.slug}` },
    ],
  };

  const faqLd = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, i) => {
      if (paragraph.includes("\n")) {
        const lines = paragraph.split("\n").filter(Boolean);
        const hasBullets = lines.some((l) => l.startsWith("- ") || l.startsWith("**"));
        if (hasBullets) {
          return (
            <div key={i} className="space-y-2 my-4">
              {lines.map((line, j) => {
                const cleaned = line.replace(/^- /, "");
                const boldMatch = cleaned.match(/^\*\*(.*?)\*\*:?\s*(.*)/);
                if (boldMatch) {
                  return (
                    <div key={j} className="flex gap-2">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <div><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2] && <span className="text-muted-foreground">: {boldMatch[2]}</span>}</div>
                    </div>
                  );
                }
                return <p key={j} className="text-muted-foreground leading-relaxed">{cleaned}</p>;
              })}
            </div>
          );
        }
      }
      // Inline bold
      const parts = paragraph.split(/\*\*(.*?)\*\*/g);
      if (parts.length > 1) {
        return (
          <p key={i} className="text-muted-foreground leading-relaxed my-4">
            {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part)}
          </p>
        );
      }
      return <p key={i} className="text-muted-foreground leading-relaxed my-4">{paragraph}</p>;
    });
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      <article className="pb-20">
        {/* Hero */}
        <div className="relative">
          <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
            <img src={imageMap[post.image]} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
            <div className="container mx-auto">
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to="/blog">Blog</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2 max-w-4xl">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="min-w-0">
              {/* Table of Contents */}
              <div className="mb-8 rounded-xl border border-border bg-card p-4 md:p-6">
                <button onClick={() => setTocOpen(!tocOpen)} className="flex items-center gap-2 text-lg font-semibold w-full text-left">
                  <List className="h-5 w-5 text-primary" />
                  Table of Contents
                  <ArrowRight className={`h-4 w-4 ml-auto transition-transform ${tocOpen ? "rotate-90" : ""}`} />
                </button>
                {tocOpen && (
                  <nav className="mt-4 space-y-2">
                    {post.sections.map((section, i) => (
                      <a key={section.id} href={`#${section.id}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-4 border-l-2 border-border hover:border-primary">
                        {i + 1}. {section.title}
                      </a>
                    ))}
                    <a href="#faqs" className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-4 border-l-2 border-border hover:border-primary">
                      {post.sections.length + 1}. Frequently Asked Questions
                    </a>
                  </nav>
                )}
              </div>

              {/* Article Sections */}
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                  {renderContent(section.content)}
                </section>
              ))}

              {/* FAQs */}
              {post.faqs.length > 0 && (
                <section id="faqs" className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {post.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              )}

              {/* Author Bio */}
              <div className="rounded-xl border border-border bg-card p-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl shrink-0">SA</div>
                  <div>
                    <h3 className="font-semibold text-lg">Shahab Abbasi</h3>
                    <p className="text-sm text-muted-foreground mt-1">SEO Strategist & GEO Expert with 5+ years of experience helping businesses rank #1 on Google and AI search engines worldwide.</p>
                    <div className="flex gap-3 mt-3">
                      <Link to="/about" className="text-sm text-primary hover:underline">About</Link>
                      <Link to="/contact" className="text-sm text-primary hover:underline">Contact</Link>
                      <Link to="/free-seo-audit" className="text-sm text-primary hover:underline">Book a Call</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-5 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group block">
                      <div className="aspect-video rounded-lg overflow-hidden mb-2">
                        <img src={imageMap[rp.image]} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                      </div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{rp.title}</h4>
                      <span className="text-xs text-muted-foreground">{rp.readTime}</span>
                    </Link>
                  ))}
                </div>

                {/* Related Services */}
                {(() => {
                  const relServices = getBlogRelatedServices(post.slug);
                  return relServices.length > 0 ? (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h3 className="font-semibold text-sm mb-3">Related Services</h3>
                      <div className="space-y-2">
                        {relServices.map((svc: any) => svc && (
                          <Link key={svc.slug} to={`/services/${svc.slug}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ {svc.title}</Link>
                        ))}
                      </div>
                    </div>
                  ) : null;
                })()}

                {/* Related Tools */}
                {(() => {
                  const relTools = getBlogRelatedTools(post.slug);
                  return relTools.length > 0 ? (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h3 className="font-semibold text-sm mb-3">Free SEO Tools</h3>
                      <div className="space-y-2">
                        {relTools.map((tool: any) => tool && (
                          <Link key={tool.slug} to={`/tools/${tool.slug}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ {tool.name}</Link>
                        ))}
                      </div>
                    </div>
                  ) : null;
                })()}

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold text-sm mb-3">Explore More</h3>
                  <div className="space-y-2">
                    <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ Our SEO Services</Link>
                    <Link to="/tools" className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ Free SEO Tools</Link>
                    <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ SEO Pricing Plans</Link>
                    <Link to="/free-seo-audit" className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ Free SEO Audit</Link>
                    <Link to="/testimonials" className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ Client Testimonials</Link>
                    <Link to="/locations" className="block text-sm text-muted-foreground hover:text-primary transition-colors">→ Service Locations</Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold text-sm mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
