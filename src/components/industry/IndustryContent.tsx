import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { IndustryData } from "@/data/industriesData";

/** Rich SEO content body with LSI keywords, anchor text variations, and semantic markup */
const IndustryContent = ({ industry }: { industry: IndustryData }) => {
  const s = industry.shortTitle;
  const sl = s.toLowerCase();
  const kws = industry.keywords.slice(0, 5).join(", ");

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-sm max-w-none"
        >
          <h2 className="text-3xl font-bold mb-6 !text-foreground">
            The Complete Guide to <span className="text-gradient">{s}</span> SEO
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Search engine optimization for the {sl} industry requires a deep understanding of how potential customers search for {sl} services online. Whether they're using Google, Bing, or AI-powered search engines like ChatGPT and Perplexity, your {sl} business must appear prominently for queries like <strong>{kws}</strong>, and dozens of related long-tail keywords.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">On-Page SEO for {s}</h3>
            <p>
              Effective <Link to="/services/on-page-seo" className="text-primary hover:underline">on-page SEO</Link> for {sl} starts with keyword-optimized title tags, compelling meta descriptions, and properly structured heading hierarchies (H1-H6). Every page on your {sl} website should target a primary keyword cluster while naturally incorporating semantically related terms (LSI keywords) throughout the content. This includes optimizing image alt text, internal anchor text diversity, URL slugs, and content readability scores.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Technical SEO Foundations</h3>
            <p>
              Your {sl} website's <Link to="/services/technical-seo" className="text-primary hover:underline">technical SEO</Link> must be flawless. Core Web Vitals (LCP, INP, CLS) directly impact both rankings and user experience. Mobile responsiveness, SSL certification, XML sitemap configuration, robots.txt optimization, canonical tag implementation, and structured data markup are non-negotiable for {sl} websites competing in search.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Local SEO Strategy</h3>
            <p>
              For {sl} businesses serving local markets, <Link to="/services/local-seo" className="text-primary hover:underline">local SEO</Link> is critical. This includes <Link to="/services/google-business-profile" className="text-primary hover:underline">Google Business Profile optimization</Link>, consistent NAP (Name, Address, Phone) citations across 50+ directories, local keyword targeting, review generation and management, and localized content creation for each service area.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Content Marketing & Authority Building</h3>
            <p>
              A robust <Link to="/services/content-strategy" className="text-primary hover:underline">content strategy</Link> establishes your {sl} business as a topical authority. This means creating comprehensive blog content, industry guides, case studies, and FAQ resources that answer every question your target audience searches for. Combined with strategic <Link to="/services/link-building" className="text-primary hover:underline">link building</Link> and <Link to="/services/off-page-seo" className="text-primary hover:underline">off-page SEO</Link>, this builds the domain authority needed to outrank competitors.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">AI Search & GEO Optimization</h3>
            <p>
              With the rise of AI-powered search engines, <Link to="/services/geo-optimization" className="text-primary hover:underline">Generative Engine Optimization (GEO)</Link> and <Link to="/services/aeo-optimization" className="text-primary hover:underline">Answer Engine Optimization (AEO)</Link> are becoming essential for {sl} businesses. Optimizing your content to be cited by ChatGPT, Google AI Overviews, Perplexity, and other AI search platforms ensures your {sl} brand maintains visibility as search evolves.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Schema Markup & Rich Results</h3>
            <p>
              Implementing <Link to="/services/schema-markup" className="text-primary hover:underline">structured data markup</Link> for your {sl} website enables rich results in search — including FAQ snippets, review stars, service listings, and breadcrumbs. This increases click-through rates by up to 30% and helps search engines better understand your content's context and relevance.
            </p>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 glass rounded-xl p-6 not-prose border-accent/20">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <h4 className="font-bold text-foreground mb-1">Want to see how your {s} website performs?</h4>
                <p className="text-sm text-muted-foreground">Get a free, comprehensive SEO audit with actionable recommendations.</p>
              </div>
              <Link to="/free-seo-audit">
                <button className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap">
                  Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default IndustryContent;
