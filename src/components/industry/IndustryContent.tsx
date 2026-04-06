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
            The Complete Digital Marketing Guide for <span className="text-gradient">{s}</span>
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Growing a successful {sl} business online requires more than just SEO. It takes a complete digital strategy - from professional web design and custom web development to expert content writing, PPC advertising, and social media management. Your {sl} business must appear prominently across Google, Bing, AI-powered search engines like ChatGPT and Perplexity, social media platforms, and paid search for queries like <strong>{kws}</strong>, and dozens of related long-tail keywords.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Web Design & Development for {s}</h3>
            <p>
              A high-converting website starts with professional web design tailored to the {sl} industry. Our web development team builds fast, mobile-first websites using modern frameworks that are optimized for both user experience and search engine rankings. Whether you need a WordPress site, Shopify store, or custom web application, we create {sl} websites that look stunning and convert visitors into customers.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">On-Page SEO & Content Writing for {s}</h3>
            <p>
              Effective <Link to="/services/on-page-seo" className="text-primary hover:underline">on-page SEO</Link> for {sl} starts with keyword-optimized title tags, compelling meta descriptions, and properly structured heading hierarchies. Our professional content writing team crafts engaging, SEO-optimized copy for every page - from service descriptions to blog articles and landing pages. This includes optimizing image alt text, internal anchor text diversity, URL slugs, and content readability scores.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Technical SEO Foundations</h3>
            <p>
              Your {sl} website's <Link to="/services/technical-seo" className="text-primary hover:underline">technical SEO</Link> must be flawless. Core Web Vitals (LCP, INP, CLS) directly impact both rankings and user experience. Our web development expertise ensures mobile responsiveness, SSL certification, XML sitemap configuration, robots.txt optimization, canonical tag implementation, and structured data markup are all handled for {sl} websites competing in search.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">PPC Advertising & Paid Search</h3>
            <p>
              While SEO builds long-term organic growth, PPC advertising delivers immediate results for {sl} businesses. We manage Google Ads, Bing Ads, and social media advertising campaigns that target high-intent keywords specific to the {sl} industry. Our PPC management includes landing page optimization, A/B testing, conversion tracking, and ongoing bid management to maximize your return on ad spend.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Social Media Management for {s}</h3>
            <p>
              Building brand awareness for your {sl} business requires strategic social media management. We create and manage content across LinkedIn, Instagram, Facebook, X, and industry-specific platforms - driving engagement, building community, and generating leads. Our social media strategies are integrated with your SEO and content writing efforts for maximum impact.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">Local SEO & Content Strategy</h3>
            <p>
              For {sl} businesses serving local markets, <Link to="/services/local-seo" className="text-primary hover:underline">local SEO</Link> combined with localized content writing is critical. This includes <Link to="/services/google-business-profile" className="text-primary hover:underline">Google Business Profile optimization</Link>, consistent NAP citations across 50+ directories, local PPC campaigns, and targeted social media content for each service area.
            </p>

            <h3 className="text-xl font-bold !text-foreground pt-2">AI Search & GEO Optimization</h3>
            <p>
              With the rise of AI-powered search engines, <Link to="/services/geo-optimization" className="text-primary hover:underline">Generative Engine Optimization (GEO)</Link> and <Link to="/services/aeo-optimization" className="text-primary hover:underline">Answer Engine Optimization (AEO)</Link> are becoming essential for {sl} businesses. Our expert content writing, combined with structured data and <Link to="/services/schema-markup" className="text-primary hover:underline">schema markup</Link>, ensures your {sl} brand is cited by ChatGPT, Google AI Overviews, and Perplexity as search evolves.
            </p>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 glass rounded-xl p-6 not-prose border-accent/20">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <h4 className="font-bold text-foreground mb-1">Want to grow your {s} business online?</h4>
                <p className="text-sm text-muted-foreground">Get a free audit covering SEO, web design, PPC, and digital strategy with actionable recommendations.</p>
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
