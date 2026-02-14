import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { blogPosts } from "@/data/blogData";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

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
};

const Blog = () => {
  useSeoMeta({
    title: "SEO Blog – Expert Tips, Guides & Strategies | Shahab Abbasi",
    description: "Read expert SEO blog posts covering keyword research, link building, technical SEO, local SEO, e-commerce optimization, and AI-powered search strategies.",
    canonical: "https://shahababbasi.com/blog",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Shahab Abbasi SEO Blog",
    description: "Expert SEO tips, strategies, and guides by Shahab Abbasi",
    url: "https://shahababbasi.com/blog",
    author: { "@type": "Person", name: "Shahab Abbasi" },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
      url: `https://shahababbasi.com/blog/${post.slug}`,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://shahababbasi.com/blog" },
    ],
  };

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Blog</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            SEO <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Expert insights, actionable strategies, and in-depth guides to help you dominate search engine rankings and drive organic growth.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 -mt-4 mb-16">
        <Link to={`/blog/${featured.slug}`} className="group block">
          <div className="grid md:grid-cols-2 gap-6 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img src={imageMap[featured.image]} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{featured.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* All Posts Grid */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8">All Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-video overflow-hidden">
                <img src={imageMap[post.image]} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help With Your SEO Strategy?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Get a free SEO audit and personalized recommendations from an experienced SEO strategist.</p>
          <Link to="/free-seo-audit" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
