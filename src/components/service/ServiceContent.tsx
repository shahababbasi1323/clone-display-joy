import { motion } from "framer-motion";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { ServiceData } from "@/data/servicesData";
import { useState } from "react";

/** LSI keyword-rich content blocks dynamically generated per service */
const lsiContentMap: Record<string, { title: string; paragraphs: string[] }> = {
  "technical-seo": {
    title: "Why Technical SEO Is the Foundation of Search Success",
    paragraphs: [
      "Technical search engine optimization ensures your website infrastructure is built for crawlability, indexability, and rendering efficiency. Without a solid technical foundation, even the best content and backlinks won't help your site rank on Google, Bing, or AI-powered search engines like Perplexity and ChatGPT.",
      "Our technical SEO audit covers crawl budget optimization, site architecture analysis, XML sitemap configuration, robots.txt directives, canonical tag implementation, and Core Web Vitals improvements including Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). We also address HTTPS migration, mobile-first indexing, structured data validation, and JavaScript rendering issues.",
      "Whether you're running a large enterprise website or a growing startup, technical SEO services eliminate the invisible barriers preventing search engines from properly discovering, understanding, and ranking your pages in organic search results.",
    ],
  },
  "on-page-seo": {
    title: "Why On-Page SEO Drives Sustainable Organic Traffic",
    paragraphs: [
      "On-page search optimization is the practice of aligning every element on your web pages — from title tags and meta descriptions to heading hierarchy and content structure — with the keywords and search intent your target audience uses on Google, Bing, and AI search platforms.",
      "Effective on-page SEO goes beyond keyword stuffing. It involves semantic SEO, latent semantic indexing (LSI) keywords, entity optimization, content depth analysis, internal linking architecture, and user engagement signals. Our approach ensures your pages satisfy both search engine algorithms and real human readers.",
      "From E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals to content freshness and topical relevance, our on-page optimization covers every ranking factor that determines your visibility in organic search results and featured snippets.",
    ],
  },
  "off-page-seo": {
    title: "Why Off-Page SEO & Link Building Builds Domain Authority",
    paragraphs: [
      "Off-page SEO encompasses all optimization activities performed outside your website to improve search engine rankings. The most critical component is link building — earning high-quality backlinks from authoritative, relevant websites that signal trust to Google's PageRank algorithm.",
      "Our white-hat link acquisition strategies include manual outreach, guest posting on industry publications, digital PR campaigns, broken link building, resource page link development, and HARO (Help a Reporter Out) submissions. Every backlink we build is from a real, editorially relevant website.",
      "Beyond backlinks, off-page SEO includes brand mention optimization, social signals, forum participation, and entity building across the web. These factors collectively strengthen your domain authority and improve your competitive positioning in search results.",
    ],
  },
  "local-seo": {
    title: "Why Local SEO Is Essential for Brick-and-Mortar Businesses",
    paragraphs: [
      "Local search engine optimization helps businesses appear in Google Maps, the local pack, and location-based search results. When customers search 'near me' or include city names in queries, local SEO ensures your business is prominently visible.",
      "Our local SEO strategy covers Google Business Profile optimization, local citation building across 50+ directories, NAP (Name, Address, Phone) consistency audits, review generation and reputation management, local keyword targeting, and geo-targeted content creation for your service areas.",
      "With mobile local searches growing year over year, businesses that invest in local SEO capture high-intent customers actively looking for their services. From multi-location management to hyperlocal content strategies, we help you dominate your geographic market.",
    ],
  },
  "ecommerce-seo": {
    title: "Why E-commerce SEO Drives Organic Revenue Growth",
    paragraphs: [
      "E-commerce search optimization addresses the unique challenges of online stores: massive product catalogs, duplicate content from faceted navigation, thin product descriptions, and complex site architectures that confuse search engine crawlers.",
      "Our e-commerce SEO approach includes product page optimization with buyer-intent keywords, category page content strategy, product schema markup for rich snippets, internal linking optimization for crawl efficiency, and duplicate content resolution through canonical tag management and parameter handling.",
      "Whether you're on Shopify, WooCommerce, Magento, or BigCommerce, we help online retailers reduce dependency on paid advertising by building sustainable organic traffic channels that drive revenue month after month.",
    ],
  },
  "geo-optimization": {
    title: "Why GEO Optimization Is the Future of Digital Visibility",
    paragraphs: [
      "Generative Engine Optimization (GEO) is the emerging discipline of making your brand visible in AI-powered search engines like ChatGPT, Google AI Overviews, Perplexity, Gemini, and Bing Copilot. As AI increasingly mediates how users find information, GEO ensures your business is cited and recommended.",
      "Our GEO strategy focuses on entity optimization, knowledge graph inclusion, structured data implementation, authoritative content creation, and brand mention building across sources that AI models use for training and retrieval-augmented generation (RAG).",
      "Traditional SEO and GEO are complementary — strong search fundamentals support AI visibility. However, GEO requires additional focus on factual accuracy, citation-worthy content, and entity relationships that make your brand a trusted source in AI-generated responses.",
    ],
  },
  "aeo-optimization": {
    title: "Why Answer Engine Optimization Captures Zero-Click Searches",
    paragraphs: [
      "Answer Engine Optimization (AEO) is the strategy of structuring your content to appear as the direct answer in featured snippets, People Also Ask boxes, voice search results, and AI-generated answer panels. With zero-click searches exceeding 60% of all Google queries, AEO ensures your brand captures visibility even when users don't click through.",
      "Our AEO methodology includes question-based content structuring, FAQ schema implementation, concise answer formatting, conversational keyword targeting for voice search, and People Also Ask (PAA) mining. We identify the exact queries your audience asks and position your content as the definitive answer.",
      "AEO and GEO work hand-in-hand — content optimized for featured snippets and direct answers is also the content AI engines prefer to cite. By mastering both, your brand becomes the go-to authority across traditional search, voice assistants, and generative AI platforms.",
    ],
  },
  "content-strategy": {
    title: "Why a Data-Driven Content Strategy Builds Topical Authority",
    paragraphs: [
      "SEO content strategy goes beyond publishing blog posts — it's about building topical authority through strategic topic clustering, pillar page architecture, and content gap analysis. Search engines reward websites that demonstrate comprehensive expertise on a subject through interconnected, high-quality content.",
      "Our content strategy process includes competitor content audits, keyword opportunity mapping, editorial calendar development, content brief creation with target keywords and LSI terms, and ongoing performance optimization. Every piece of content is designed to serve a specific purpose in your SEO funnel — from awareness to conversion.",
      "Content freshness, E-E-A-T signals, semantic depth, and internal linking between related articles all contribute to how Google evaluates your topical authority. We help you build a content ecosystem where each piece strengthens every other, creating compounding organic traffic growth over time.",
    ],
  },
  "shopify-seo": {
    title: "Why Shopify Stores Need Specialized SEO Expertise",
    paragraphs: [
      "Shopify is a powerful e-commerce platform, but it comes with unique SEO limitations that require specialized knowledge to overcome. Duplicate content from collection pages, tag pages, and pagination; rigid URL structures; render-blocking Liquid templates; and app-induced page bloat are all common issues that hurt Shopify store rankings.",
      "Our Shopify SEO services address platform-specific challenges including canonical tag management for /collections/ and /products/ URLs, theme.liquid optimization for faster rendering, app stack auditing to eliminate unnecessary JavaScript, product schema markup using JSON-LD, and Shopify blog optimization for content marketing.",
      "Whether you're a new Shopify store or an established brand doing millions in revenue, our Shopify-specific technical expertise helps you outrank competitors on Google Shopping results, organic product searches, and category-level keywords that drive high-intent buyer traffic.",
    ],
  },
  "wordpress-seo": {
    title: "Why WordPress SEO Requires Expert Configuration",
    paragraphs: [
      "WordPress powers over 40% of all websites, making it the most popular CMS in the world. While WordPress is inherently SEO-friendly, improper configuration of themes, plugins, caching, and security settings can severely limit your search engine visibility and page performance.",
      "Our WordPress SEO services include Yoast SEO or Rank Math configuration, permalink structure optimization, database cleanup, plugin conflict resolution, wp-cron optimization, image optimization with WebP conversion, caching layer setup (WP Rocket, LiteSpeed, Cloudflare), and security hardening against SEO spam attacks that can get your site deindexed.",
      "From small business websites to large WordPress multisite installations, we optimize every layer of your WordPress stack — hosting environment, PHP version, theme code, plugin ecosystem, and content delivery — to achieve top Core Web Vitals scores and maximum search engine crawl efficiency.",
    ],
  },
  "international-seo": {
    title: "Why International SEO Opens Global Market Opportunities",
    paragraphs: [
      "International SEO is the practice of optimizing your website so search engines serve the right content to users based on their language and geographic location. Proper hreflang implementation, localized content creation, and market-specific keyword research are essential for businesses targeting multiple countries or languages.",
      "Our international SEO services cover hreflang tag architecture (self-referencing, bidirectional, x-default), URL structure strategy (ccTLDs vs. subdirectories vs. subdomains), geo-targeting in Google Search Console, localized link building in target markets, and culturally adapted content that resonates with local search behavior and intent.",
      "Common international SEO pitfalls include duplicate content across language versions, incorrect hreflang implementation causing indexing conflicts, machine-translated content that fails to rank, and neglecting local search engines like Yandex, Baidu, or Naver. We ensure your global expansion is built on a technically sound, linguistically accurate foundation.",
    ],
  },
  "seo-audit": {
    title: "Why a Professional SEO Audit Is Your First Step to Growth",
    paragraphs: [
      "An SEO audit is a comprehensive health check of your website's search engine optimization across technical infrastructure, on-page content, backlink profile, and competitive landscape. Unlike free online tools that only surface basic issues, our 100+ checkpoint audit provides expert analysis with prioritized, actionable recommendations.",
      "Our audit methodology examines crawlability and indexation (robots.txt, XML sitemaps, canonical tags), site speed and Core Web Vitals, mobile usability, content quality and keyword targeting, internal linking structure, backlink profile health (toxic link identification), structured data validation, and competitor benchmarking.",
      "Every audit concludes with a prioritized 90-day implementation roadmap that categorizes issues by impact and difficulty. We identify quick wins that deliver immediate ranking improvements alongside strategic initiatives for long-term organic growth and domain authority building.",
    ],
  },
  "keyword-research": {
    title: "Why Strategic Keyword Research Is the Foundation of Every SEO Campaign",
    paragraphs: [
      "Keyword research is the process of discovering, analyzing, and prioritizing the search terms your target audience uses to find products, services, and information. Without data-driven keyword research, SEO efforts are directionless — you risk targeting keywords that are too competitive, too low-volume, or misaligned with buyer intent.",
      "Our keyword research methodology includes seed keyword expansion using multiple data sources (Ahrefs, SEMrush, Google Keyword Planner, AnswerThePublic), search intent classification (informational, navigational, commercial, transactional), keyword difficulty analysis, competitor keyword gap identification, and long-tail keyword mining for quick-win opportunities.",
      "The output is a comprehensive keyword strategy document with 200-1000+ prioritized keywords mapped to existing and planned pages. We classify every keyword by intent, volume, difficulty, and business value — ensuring your content calendar, on-page optimization, and link building efforts are all aligned toward the highest-ROI opportunities.",
    ],
  },
  "google-business-profile": {
    title: "Why Google Business Profile Optimization Drives Local Leads",
    paragraphs: [
      "Google Business Profile (formerly Google My Business) is the single most impactful element of local SEO. A fully optimized GBP listing can dramatically increase your visibility in Google Maps, the local 3-pack, and location-based search results — driving phone calls, direction requests, and website visits from high-intent local customers.",
      "Our GBP optimization covers every ranking factor: primary and secondary category selection, business description with local keywords, service and product listings, photo and video optimization (geotagged images, virtual tours), Google Posts for freshness signals, Q&A management, review generation strategies, and attribute optimization.",
      "Beyond initial setup, ongoing GBP management is critical. Regular posting, review responses, photo updates, and performance monitoring all signal to Google that your business is active and engaged. We provide continuous GBP management that keeps your listing competitive in an increasingly crowded local search landscape.",
    ],
  },
  "link-building": {
    title: "Why Quality Link Building Remains Google's Top Ranking Factor",
    paragraphs: [
      "Backlinks remain one of Google's three most important ranking signals alongside content and RankBrain. Link building is the process of earning hyperlinks from external websites to yours — each quality backlink acts as a vote of confidence that tells search engines your content is valuable, credible, and authoritative.",
      "Our link building approach is 100% white-hat and manual. We use editorial outreach to niche-relevant websites (DR 30-80+), guest post creation and placement on industry publications, digital PR for media coverage and brand mentions, broken link building, resource page acquisitions, and HARO journalist query responses. Every link is earned through genuine relationships and quality content.",
      "Link velocity, anchor text diversity, referring domain variety, and topical relevance all factor into how Google evaluates your backlink profile. We build a natural, diversified link portfolio that avoids algorithmic penalties while steadily increasing your domain authority and keyword rankings across competitive SERPs.",
    ],
  },
  "seo-consulting": {
    title: "Why Expert SEO Consulting Accelerates In-House Team Performance",
    paragraphs: [
      "SEO consulting provides your business with expert strategic guidance without the full cost of outsourced execution. Whether you have an in-house marketing team that needs direction, a development team implementing technical changes, or leadership that needs an SEO roadmap, consulting bridges the gap between knowledge and action.",
      "Our consulting engagements include comprehensive SEO strategy development, team training and mentoring, vendor evaluation, algorithm update impact assessments, competitive landscape analysis, and ongoing advisory support. We provide the expertise — your team handles the implementation with our guidance.",
      "For organizations building internal SEO capabilities, consulting accelerates the learning curve dramatically. Instead of months of trial-and-error, your team gains proven frameworks, documented processes, and expert oversight that ensures every SEO initiative is aligned with best practices and business objectives.",
    ],
  },
  "website-speed-optimization": {
    title: "Why Website Speed Directly Impacts Rankings and Revenue",
    paragraphs: [
      "Page speed is a confirmed Google ranking factor, and Core Web Vitals (LCP, INP, CLS) directly influence your position in search results. Beyond SEO, every 100ms delay in page load time reduces conversion rates by up to 7%. Fast websites rank higher, convert better, and deliver superior user experiences across all devices.",
      "Our speed optimization services cover image compression and next-gen format conversion (WebP, AVIF), CSS and JavaScript minification and bundling, critical rendering path optimization, lazy loading implementation, browser caching configuration, CDN setup (Cloudflare, AWS CloudFront), server response time improvements (TTFB), and render-blocking resource elimination.",
      "We typically achieve 40-80% improvement in page load times without affecting your site's visual design. From WordPress and Shopify to custom-built applications, our performance engineering expertise ensures your website meets Google's Core Web Vitals thresholds and delivers lightning-fast experiences that keep visitors engaged.",
    ],
  },
  "schema-markup": {
    title: "Why Schema Markup Unlocks Rich Results and Enhanced SERP Visibility",
    paragraphs: [
      "Schema markup (structured data) is JSON-LD code that helps search engines understand the context and meaning of your content. When properly implemented, schema can trigger rich results in Google — star ratings, FAQ dropdowns, product prices, event details, how-to steps, and more — dramatically increasing your click-through rate from search results.",
      "Our schema implementation covers all major types: LocalBusiness for local SEO, Product and Offer for e-commerce, FAQ and HowTo for informational content, Article and BlogPosting for publishers, Event for time-sensitive content, Person and Organization for brand entities, BreadcrumbList for navigation, and VideoObject for multimedia content.",
      "Schema markup also plays a critical role in AI search optimization. Structured data helps AI engines like ChatGPT, Perplexity, and Google AI Overviews understand your content's relationships, facts, and context — making your pages more likely to be cited in AI-generated responses and knowledge panels.",
    ],
  },
  "seo-training": {
    title: "Why SEO Training Empowers Your Team for Long-Term Success",
    paragraphs: [
      "SEO training equips your marketing team, content writers, developers, and leadership with the knowledge and skills to execute search optimization effectively. Rather than relying entirely on external agencies, trained teams can handle day-to-day SEO tasks, make informed decisions, and recognize opportunities and threats in real time.",
      "Our training programs cover keyword research methodology, on-page optimization techniques, technical SEO fundamentals, content strategy frameworks, link building best practices, Google Search Console and Analytics interpretation, and AI search optimization. Each session is customized to your team's skill level, industry, and specific challenges.",
      "Post-training, your team receives comprehensive documentation, checklists, process templates, and 30 days of email support. We also offer ongoing mentoring through our SEO consulting retainer for teams that want continued expert guidance as they build internal SEO capabilities and scale their organic growth programs.",
    ],
  },
};

const ServiceContent = ({ service }: { service: ServiceData }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lsi = lsiContentMap[service.slug];

  return (
    <>
      {/* What Is */}
      <section id="what-is" className="section-padding bg-card/20 border-y border-border scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">{service.whatIs.title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{service.whatIs.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatIs.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LSI Content */}
      {lsi && (
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">{lsi.title}</h2>
            <div className="space-y-4">
              {lsi.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/free-seo-audit">
                <Button className="glow-primary">
                  Get a Free {service.title} Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10">{service.process.title}</h2>
          <div className="space-y-6">
            {service.process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {i + 1}
                  </div>
                  {i < service.process.steps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-3" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Deliverables */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Tools We Use</h2>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <ul className="space-y-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Pricing</h2>
            <p className="text-xl text-gradient font-bold mb-2">{service.pricing.range}</p>
            <p className="text-sm text-muted-foreground mb-6">{service.pricing.note}</p>
            <Link to="/pricing">
              <Button variant="outline">
                View All Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceContent;
