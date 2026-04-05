const STORAGE_BASE = "https://cmdgzxheyhmtnkamzcun.supabase.co/storage/v1/object/public/seo-resources";

export interface ContentSection {
  heading: string;
  items?: { label: string; detail?: string; priority?: string }[];
  text?: string;
  proTip?: string;
}

export interface ResourceWebContent {
  slug: string;
  sections: ContentSection[];
}

export const resourceWebContent: ResourceWebContent[] = [
  {
    slug: "seo-prompt-pack",
    sections: [
      { heading: "On-Page SEO Prompts", items: [
        { label: "Bulk Meta Descriptions", detail: "Generate 50-100 unique meta descriptions in minutes. Max 155 chars, with CTA and power words." },
        { label: "Title Tag Optimizer", detail: "Check under 60 chars, keyword near beginning, emotional triggers. Get 3 variations per page." },
        { label: "Internal Linking Planner", detail: "Find missing internal links, suggest anchor text, and prioritize by impact." },
      ], proTip: "CTR improvements of 50-100% are common after title optimization." },
      { heading: "Keyword Research Prompts", items: [
        { label: "Keyword Clustering", detail: "Group keywords by search intent, semantic relevance, and funnel stage. Replaces expensive clustering tools." },
        { label: "Content Brief Generator", detail: "Full SEO brief with title, meta, outline, word count, PAA questions, and unique angle." },
        { label: "Blog Post Writer", detail: "SEO-optimized article with H2/H3 hierarchy, FAQ section, internal links, and clear CTA." },
      ], proTip: "Use the Content Brief prompt before writing ANY blog post. Saves 30-45 minutes per article." },
      { heading: "Technical SEO Prompts", items: [
        { label: "Content Quality Scorer", detail: "Audit content across 10 dimensions. Score out of 10 with fixes for anything below 7." },
        { label: "Schema Markup Generator", detail: "Generate JSON-LD for LocalBusiness, FAQ, Product, HowTo with geo coordinates." },
        { label: "Full Website Audit", detail: "Comprehensive technical, on-page, and off-page audit replacing $500+ professional audits." },
        { label: "Page Speed Analyzer", detail: "Translate PageSpeed Insights into actionable steps with time estimates and tools." },
        { label: "Cannibalization Finder", detail: "Identify pages competing for the same keywords and recommend merge/redirect/re-optimize." },
        { label: "Redirect Map Builder", detail: "Generate 301 redirect maps with .htaccess rules, regex patterns, and chain detection." },
      ], proTip: "Posts scoring 8+ rank 3x faster. Audit every post before publishing." },
      { heading: "Backlink Prompts", items: [
        { label: "Backlink Profile Auditor", detail: "Flag toxic links, analyze anchor diversity, and generate disavow suggestions." },
        { label: "Outreach Email Writer", detail: "5 personalized variations under 100 words. Response rate went from 3% to 18%." },
        { label: "HARO Pitch Writer", detail: "Craft expert pitches for journalist queries. Landed backlinks from DA 80+ sites." },
      ], proTip: "Found 47 toxic backlinks for one client. Rankings recovered in 3 weeks." },
      { heading: "E-commerce & Local Prompts", items: [
        { label: "Product Page Optimizer", detail: "Title, meta, description, FAQ, product schema, alt text — complete product SEO." },
        { label: "Local Citation Builder", detail: "Top 50 directories for your industry + location with NAP format and tracking template." },
      ] },
      { heading: "Advanced Strategy Prompts", items: [
        { label: "Content Calendar Generator", detail: "3-month calendar with pillar pieces, supporting posts, and FAQ/snippet targets." },
        { label: "Topical Authority Map", detail: "Map 30+ subtopics with internal linking, content gaps, and 3-phase rollout." },
        { label: "AI Content Humanizer", detail: "Transform AI content into expert-level writing with data, case studies, and unique insights." },
      ], proTip: "Helped grow a business from $216K to $1.58M with topical authority." },
    ],
  },
  {
    slug: "google-operators",
    sections: [
      { heading: "Backlink & Guest Post Operators", items: [
        { label: '[niche] intitle:"write for us"', detail: "Find sites actively seeking guest contributors" },
        { label: '[niche] inurl:"guest-post-guidelines"', detail: "Find detailed submission requirements" },
        { label: '[niche] "become a contributor"', detail: "Find contributor opportunity pages" },
        { label: "[keyword] site:.edu", detail: "High-authority educational link opportunities" },
        { label: '[niche] inurl:resources intitle:"resources"', detail: "Find curated resource pages for link placement" },
        { label: '[niche] "submit an article" site:.com', detail: "Find high-DA sites accepting articles" },
        { label: "[niche] intitle:infographic OR inurl:infographic", detail: "Find sites that feature infographics" },
      ] },
      { heading: "Competitor Research Operators", items: [
        { label: "site:competitor.com", detail: "See every page Google has indexed" },
        { label: "site:competitor.com intitle:[keyword]", detail: "Find their most targeted pages" },
        { label: "site:competitor.com inurl:blog", detail: "See all their blog posts" },
        { label: "site:competitor.com filetype:pdf", detail: "Find their lead magnets and resources" },
        { label: '"[competitor]" -site:competitor.com intitle:"guest post"', detail: "See where they guest post" },
        { label: '"[competitor name]" -site:competitor.com', detail: "Find all brand mentions across the web" },
        { label: "site:competitor.com inurl:2023", detail: "Find outdated/broken content (404 opportunities)" },
      ] },
      { heading: "Content Research Operators", items: [
        { label: "[keyword] intitle:statistics OR intitle:data", detail: "Find data sources for your content" },
        { label: '[keyword] "2026" site:medium.com', detail: "Find latest articles on any topic" },
        { label: '[niche] "expert roundup" OR "experts share"', detail: "Find roundup posts to contribute to" },
        { label: '[keyword] intitle:"case study"', detail: "Find real examples and data" },
        { label: "[keyword] site:reddit.com OR site:quora.com", detail: "Find real questions people ask" },
      ] },
      { heading: "Link Reclamation Operators", items: [
        { label: '"[your brand]" -site:yourdomain.com', detail: "Find unlinked brand mentions" },
        { label: '[niche] intitle:"resources" inurl:links', detail: "Find pages likely to have broken links" },
        { label: '"[your brand]" "image credit" OR "photo credit"', detail: "Find image uses to request links" },
      ] },
      { heading: "Advanced Combinations", items: [
        { label: "site:competitor.com intitle:[keyword] inurl:blog", detail: "Deep competitor content analysis" },
        { label: "[niche] filetype:pdf site:.edu OR site:.gov", detail: "High-authority document links" },
        { label: '[niche] "powered by vBulletin" OR "powered by phpBB"', detail: "Find niche forums for engagement" },
        { label: '[niche] "sponsored post" OR "paid collaboration"', detail: "Find paid placement options" },
      ] },
    ],
  },
  {
    slug: "geo-aeo-guide",
    sections: [
      { heading: "Understanding GEO, AEO & LLMO", text: "Search has changed forever. In 2026, millions of people use AI tools like ChatGPT, Perplexity, and Gemini instead of traditional Google search.", items: [
        { label: "SEO — Search Engine Optimization", detail: "Ranking your website on Google search results (blue links)" },
        { label: "GEO — Generative Engine Optimization", detail: "Getting your brand cited in AI-generated answers" },
        { label: "AEO — Answer Engine Optimization", detail: "Optimizing for direct answers (Featured Snippets, Voice Search)" },
        { label: "LLMO — Large Language Model Optimization", detail: "Making content readable by AI models like GPT, Claude, Gemini" },
      ] },
      { heading: "Why This Matters — The Numbers", items: [
        { label: "70% of Google searches now end without a click", detail: "Zero-click searches are the new normal" },
        { label: "AI search traffic converts 4-6x better", detail: "Higher quality leads from AI recommendations" },
        { label: "58% of consumers use AI for product recommendations" },
        { label: "85% of AI brand mentions come from third-party sources" },
        { label: "ChatGPT has 300M+ weekly active users" },
      ] },
      { heading: "10-Step GEO Optimization Framework", items: [
        { label: "Step 1: Audit Your AI Visibility", detail: "Search for your business in ChatGPT, Perplexity, and Gemini." },
        { label: "Step 2: Build a Strong SEO Foundation", detail: "GEO works ON TOP of SEO, not instead of it." },
        { label: "Step 3: Implement Schema Markup", detail: "LocalBusiness, FAQ, Product, and Review schema." },
        { label: "Step 4: Create Citation-Worthy Content", detail: "Clear, factual, authoritative. Use specific numbers and data." },
        { label: "Step 5: Optimize Content Structure for AI", detail: "Q&A format, clear H2/H3 headings, FAQ sections." },
        { label: "Step 6: Build Third-Party Mentions", detail: "85% of AI citations come from third-party sources." },
        { label: "Step 7: Optimize for Reddit", detail: "Reddit posts are heavily cited by AI search engines." },
        { label: "Step 8: Build Your Review Ecosystem", detail: "Google, Yelp, G2, Trustpilot — AI uses reviews to recommend." },
        { label: "Step 9: Publish 'Best Of' and Comparison Content", detail: "AI systems love pulling from comparison posts." },
        { label: "Step 10: Monitor and Track AI Visibility", detail: "Regularly check your brand in AI answers and adjust strategy." },
      ], proTip: "Businesses showing up in AI answers are getting the highest quality leads." },
    ],
  },
  {
    slug: "technical-seo-checklist",
    sections: [
      { heading: "1. Crawlability & Indexation", items: [
        { label: "XML sitemap exists and submitted to Search Console", priority: "Critical" },
        { label: "XML sitemap auto-updates with new pages", priority: "High" },
        { label: "Robots.txt not blocking important pages", priority: "Critical" },
        { label: "No accidental noindex on important pages", priority: "Critical" },
        { label: "All important pages are indexed", priority: "High" },
        { label: "No orphan pages (pages with no internal links)", priority: "Medium" },
        { label: "Canonical tags correctly set on all pages", priority: "High" },
        { label: "No duplicate content issues", priority: "High" },
      ] },
      { heading: "2. Site Speed & Core Web Vitals", items: [
        { label: "LCP under 2.5 seconds", priority: "Critical" },
        { label: "FID under 100 milliseconds", priority: "Critical" },
        { label: "CLS under 0.1", priority: "Critical" },
        { label: "Images compressed in WebP/AVIF format", priority: "High" },
        { label: "Lazy loading for below-the-fold images", priority: "High" },
        { label: "CSS and JavaScript minified", priority: "Medium" },
        { label: "CDN implemented", priority: "Medium" },
        { label: "Server response time under 200ms", priority: "High" },
      ] },
      { heading: "3. Mobile Optimization", items: [
        { label: "Passes Google Mobile-Friendly Test", priority: "Critical" },
        { label: "Responsive design (not separate mobile site)", priority: "High" },
        { label: "Touch targets properly sized (min 48x48px)", priority: "Medium" },
        { label: "Text readable without zooming", priority: "High" },
        { label: "No horizontal scrolling on mobile", priority: "High" },
        { label: "Mobile page speed under 3 seconds", priority: "Critical" },
      ] },
      { heading: "4. On-Page SEO Elements", items: [
        { label: "Unique title tag per page (under 60 chars)", priority: "Critical" },
        { label: "Unique meta description (under 155 chars)", priority: "Critical" },
        { label: "Only ONE H1 tag per page", priority: "High" },
        { label: "Logical heading hierarchy (H1 > H2 > H3)", priority: "High" },
        { label: "Primary keyword in H1, first paragraph, URL", priority: "High" },
        { label: "Images have descriptive alt text", priority: "Medium" },
        { label: "Clean, short URLs with keywords", priority: "High" },
        { label: "Internal links use descriptive anchor text", priority: "Medium" },
      ] },
      { heading: "5. Security & Technical", items: [
        { label: "HTTPS enabled with valid SSL certificate", priority: "Critical" },
        { label: "HTTP to HTTPS redirect working", priority: "Critical" },
        { label: "No mixed content warnings", priority: "High" },
        { label: "404 error pages handled properly", priority: "Medium" },
        { label: "301 redirects for moved/deleted pages", priority: "High" },
        { label: "Hreflang tags for multi-language sites", priority: "Medium" },
      ] },
    ],
  },
  {
    slug: "page-speed-checklist",
    sections: [
      { heading: "Image Optimization", items: [
        { label: "Convert images to WebP/AVIF format", priority: "Critical" },
        { label: "Compress images (TinyPNG, ShortPixel)", priority: "High" },
        { label: "Implement lazy loading for below-fold images", priority: "High" },
        { label: "Specify image dimensions (width/height)", priority: "Medium" },
        { label: "Use responsive images (srcset)", priority: "Medium" },
      ] },
      { heading: "CSS & JavaScript", items: [
        { label: "Minify CSS and JavaScript files", priority: "High" },
        { label: "Defer non-critical JavaScript", priority: "Critical" },
        { label: "Remove unused CSS", priority: "Medium" },
        { label: "Inline critical CSS above the fold", priority: "High" },
        { label: "Bundle and tree-shake dependencies", priority: "Medium" },
      ] },
      { heading: "Server & Caching", items: [
        { label: "Enable browser caching (cache headers)", priority: "High" },
        { label: "Implement CDN (CloudFlare or similar)", priority: "Medium" },
        { label: "Reduce server response time (TTFB < 200ms)", priority: "High" },
        { label: "Enable GZIP/Brotli compression", priority: "High" },
        { label: "Use HTTP/2 or HTTP/3", priority: "Medium" },
      ] },
      { heading: "Core Web Vitals Targets", items: [
        { label: "LCP (Largest Contentful Paint) < 2.5s", priority: "Critical" },
        { label: "FID (First Input Delay) < 100ms", priority: "Critical" },
        { label: "CLS (Cumulative Layout Shift) < 0.1", priority: "Critical" },
        { label: "INP (Interaction to Next Paint) < 200ms", priority: "High" },
      ], proTip: "Took client from 34 to 91 speed score. Bounce rate dropped 40%." },
    ],
  },
  {
    slug: "gmb-audit-checklist",
    sections: [
      { heading: "Profile Completeness", items: [
        { label: "Business name matches real-world name exactly", priority: "Critical" },
        { label: "Primary category is the most relevant", priority: "Critical" },
        { label: "All secondary categories added", priority: "High" },
        { label: "Business description uses keywords naturally (750 chars)", priority: "High" },
        { label: "Phone number matches website", priority: "Critical" },
        { label: "Address is consistent with all citations (NAP)", priority: "Critical" },
        { label: "Business hours are accurate", priority: "High" },
        { label: "Website URL is correct", priority: "Critical" },
      ] },
      { heading: "Photos & Media", items: [
        { label: "Logo uploaded and clear", priority: "High" },
        { label: "Cover photo is professional", priority: "High" },
        { label: "10+ high-quality photos of business", priority: "Medium" },
        { label: "Interior and exterior photos included", priority: "Medium" },
        { label: "Team/staff photos added", priority: "Medium" },
        { label: "Photos geotagged to business location", priority: "Medium" },
      ] },
      { heading: "Reviews & Reputation", items: [
        { label: "Review generation strategy in place", priority: "High" },
        { label: "All reviews responded to within 24 hours", priority: "High" },
        { label: "Negative reviews addressed professionally", priority: "Critical" },
        { label: "Review keywords analyzed for content ideas", priority: "Medium" },
      ] },
      { heading: "Posts & Updates", items: [
        { label: "Weekly Google Posts published", priority: "Medium" },
        { label: "Posts include CTAs and links", priority: "Medium" },
        { label: "Q&A section populated with FAQs", priority: "High" },
        { label: "Products/services listed with descriptions", priority: "High" },
      ], proTip: "Citations are top 3 ranking factor for Google Maps." },
    ],
  },
  {
    slug: "link-building-toolkit",
    sections: [
      { heading: "Guest Post Outreach", items: [
        { label: "Find 'Write for Us' pages using search operators", detail: "[niche] intitle:\"write for us\"" },
        { label: "Personalized pitch template (under 100 words)", detail: "Response rate went from 3% to 18% with personalized emails" },
        { label: "Follow-up sequence (Day 3, Day 7)", detail: "Most responses come from the follow-up, not the initial email" },
      ] },
      { heading: "Broken Link Building", items: [
        { label: "Find broken links on authority sites", detail: "Use Ahrefs or Check My Links Chrome extension" },
        { label: "Create better replacement content", detail: "Your content must be equal or better than the original" },
        { label: "Email webmaster with the fix", detail: "Mention the specific broken link + your replacement" },
      ] },
      { heading: "HARO / Digital PR", items: [
        { label: "Sign up for HARO/Connectively", detail: "Get daily journalist queries in your inbox" },
        { label: "Respond within 2 hours of query", detail: "Speed matters — first responses get picked" },
        { label: "Include credentials and unique data", detail: "Landed backlinks from DA 80+ sites using this approach" },
      ] },
      { heading: "Resource Page Link Building", items: [
        { label: "Find resource pages in your niche" },
        { label: "Create a linkable asset (guide, tool, template)" },
        { label: "Pitch for inclusion with value proposition" },
      ] },
      { heading: "50+ Free Directories", text: "The PDF includes a curated list of 50+ free directories organized by tier (1/2/3) with DA scores, submission URLs, and expected listing times.", proTip: "Build authority without spending a dollar — start with Tier 1 directories first." },
    ],
  },
  {
    slug: "content-writing-prompts",
    sections: [
      { heading: "Blog Content Prompts", items: [
        { label: "Blog Post Outline Generator", detail: "Create comprehensive outlines with H2/H3 structure" },
        { label: "SEO-Optimized Intro Writer", detail: "Hook readers + include primary keyword in first paragraph" },
        { label: "Conclusion & CTA Writer", detail: "Summarize key points and drive action" },
      ] },
      { heading: "Product & Landing Page Prompts", items: [
        { label: "Product Description Writer", detail: "Benefit-focused copy with keyword integration" },
        { label: "Landing Page Copy Generator", detail: "Headline, subheadline, benefits, social proof, CTA" },
        { label: "Category Page Content", detail: "SEO-optimized introductions for collection pages" },
      ] },
      { heading: "SEO Meta Content Prompts", items: [
        { label: "Meta Title Generator", detail: "Under 60 chars with keyword and emotional triggers" },
        { label: "Meta Description Writer", detail: "Under 155 chars with CTA and power words" },
        { label: "FAQ Section Generator", detail: "Generate relevant questions from PAA (People Also Ask)" },
      ] },
      { heading: "Content Optimization Prompts", items: [
        { label: "Content Gap Filler", detail: "Find missing topics your competitors cover" },
        { label: "Headline Analyzer", detail: "Score headlines for CTR potential" },
        { label: "Alt Text Generator", detail: "Descriptive, keyword-rich alt text for images" },
      ], proTip: "AI content that competes with human writers when you give detailed prompts." },
    ],
  },
  {
    slug: "free-seo-tools",
    sections: [
      { heading: "Keyword Research (Free)", items: [
        { label: "Google Keyword Planner", detail: "Official Google tool for search volume and competition" },
        { label: "Ubersuggest (Free Tier)", detail: "3 free searches/day with keyword ideas" },
        { label: "AnswerThePublic", detail: "Visual keyword research and question mapping" },
        { label: "Google Trends", detail: "Search trend data and seasonal patterns" },
        { label: "AlsoAsked.com", detail: "People Also Ask questions mapped visually" },
      ] },
      { heading: "Technical SEO (Free)", items: [
        { label: "Google Search Console", detail: "The most important free SEO tool. Performance, indexing, errors." },
        { label: "PageSpeed Insights", detail: "Core Web Vitals and performance scores" },
        { label: "Screaming Frog (500 URLs free)", detail: "Technical crawl — find broken links, duplicates, missing tags" },
        { label: "Schema Markup Validator", detail: "Test your structured data implementation" },
      ] },
      { heading: "Backlink Analysis (Free)", items: [
        { label: "Ahrefs Webmaster Tools", detail: "Free backlink data for your own site" },
        { label: "Google Search Console Links Report", detail: "See who links to you — straight from Google" },
        { label: "Moz Link Explorer (10 queries/month)", detail: "Domain Authority and backlink overview" },
      ] },
      { heading: "Content & Rank Tracking (Free)", items: [
        { label: "Google Analytics 4", detail: "Traffic, behavior, conversions — completely free" },
        { label: "Grammarly (Free Tier)", detail: "Writing quality and readability checks" },
        { label: "Hemingway Editor", detail: "Readability scoring — aim for Grade 6-8" },
        { label: "Google Search Console Performance", detail: "Track keyword positions and CTR" },
      ], proTip: "Complete SEO toolkit using ONLY free tools — $0/month." },
    ],
  },
  {
    slug: "shopify-seo-guide",
    sections: [
      { heading: "Shopify URL Structure Fixes", items: [
        { label: "Remove /collections/ from product URLs where possible" },
        { label: "Use clean, keyword-rich handles for all pages" },
        { label: "Set canonical tags to avoid duplicate product URLs" },
        { label: "Implement proper URL redirects for changed products" },
      ] },
      { heading: "Duplicate Content Solutions", items: [
        { label: "Fix collection + product URL duplicates", detail: "Shopify creates /collections/[x]/products/[y] duplicates" },
        { label: "Canonical tags on all product pages", priority: "Critical" },
        { label: "Use unique descriptions for every product", priority: "High" },
        { label: "Handle tag and vendor pages (noindex or unique content)" },
      ] },
      { heading: "Product Page Optimization", items: [
        { label: "Unique title tags with keyword + brand" },
        { label: "300+ word product descriptions" },
        { label: "Product schema markup (JSON-LD)" },
        { label: "Optimized image alt text for every product image" },
        { label: "FAQ section on high-value products" },
      ] },
      { heading: "Shopify Speed Optimization", items: [
        { label: "Minimize installed apps (each adds JS overhead)" },
        { label: "Use WebP images and compress all product photos" },
        { label: "Lazy load images below the fold" },
        { label: "Remove unused theme features and scripts" },
      ], proTip: "Optimized 40 product pages for UAE client. 15+ keywords page 1 in 3 months." },
    ],
  },
  {
    slug: "internal-linking-guide",
    sections: [
      { heading: "Why Internal Linking Matters", text: "Internal links distribute page authority, help Google discover content, and guide users through your site. A real case study showed 85 new internal links led to a 23% traffic increase in 6 weeks." },
      { heading: "5 Types of Internal Links", items: [
        { label: "Contextual links", detail: "Links within body content to related pages" },
        { label: "Navigational links", detail: "Menu, sidebar, footer navigation" },
        { label: "Breadcrumb links", detail: "Hierarchical path showing page location" },
        { label: "Related post links", detail: "Suggested content at end of articles" },
        { label: "Hub/pillar links", detail: "Central pages linking to cluster content" },
      ] },
      { heading: "10 AI Prompts for Linking Audit", items: [
        { label: "Find orphan pages with no internal links" },
        { label: "Identify high-authority pages that should distribute links" },
        { label: "Generate semantic anchor text suggestions" },
        { label: "Map topic clusters and link gaps" },
        { label: "Audit existing anchor text distribution" },
      ] },
      { heading: "30-Point Monthly Checklist", items: [
        { label: "No orphan pages exist", priority: "Critical" },
        { label: "Top 10 pages link to each other", priority: "High" },
        { label: "New content links to 3-5 existing pages", priority: "High" },
        { label: "Anchor text is descriptive (not 'click here')", priority: "High" },
        { label: "Pillar pages link to all cluster content", priority: "Critical" },
        { label: "Broken internal links are fixed", priority: "Critical" },
      ], proTip: "85 internal links → 23% traffic increase in 6 weeks." },
    ],
  },
  {
    slug: "seo-proposal-template",
    sections: [
      { heading: "Cover Page", text: "Professional cover with your logo, client name, date, and proposal title. First impressions matter — make it clean and branded." },
      { heading: "Executive Summary", items: [
        { label: "Current situation overview (1 paragraph)" },
        { label: "Key problems identified" },
        { label: "Proposed solution summary" },
        { label: "Expected outcomes" },
      ] },
      { heading: "3-Tier Pricing Packages", items: [
        { label: "Starter Package", detail: "Basic SEO essentials — technical audit, on-page, reporting" },
        { label: "Growth Package", detail: "Full SEO + content strategy + link building" },
        { label: "Enterprise Package", detail: "Complete digital presence — SEO, PPC, content, dedicated team" },
      ] },
      { heading: "Timeline & Deliverables", items: [
        { label: "Month 1: Audit & Foundation" },
        { label: "Month 2-3: Content & On-Page Optimization" },
        { label: "Month 4-6: Link Building & Authority Growth" },
        { label: "Month 7-12: Scale & Dominate" },
      ], proTip: "Clients who see a clear timeline are 3x more likely to sign." },
    ],
  },
  {
    slug: "competitor-analysis-template",
    sections: [
      { heading: "Identify Top 5 Competitors", text: "Use the included ChatGPT prompt to identify your real SEO competitors (they may differ from your business competitors)." },
      { heading: "Technical Comparison (11 Metrics)", items: [
        { label: "Domain Authority / Domain Rating" },
        { label: "Total indexed pages" },
        { label: "Page speed scores" },
        { label: "Mobile-friendliness" },
        { label: "Schema markup implementation" },
        { label: "Core Web Vitals scores" },
      ] },
      { heading: "Content Gap Analysis", items: [
        { label: "Keywords competitors rank for that you don't" },
        { label: "Content types they produce (guides, tools, videos)" },
        { label: "Content frequency and publishing schedule" },
      ] },
      { heading: "Backlink Gap Analysis", items: [
        { label: "Domains linking to competitors but not you" },
        { label: "Their strongest backlinks by DA" },
        { label: "Link building strategies they're using" },
      ] },
      { heading: "3-Month Action Plan", text: "Fill-in-the-blank action plan to close the gaps identified in the analysis. Prioritized by impact and effort.", proTip: "Spy on competitors systematically — then do it better." },
    ],
  },
  {
    slug: "monthly-report-template",
    sections: [
      { heading: "Executive Summary", text: "One-page overview: what was accomplished, key wins, and areas of focus for next month." },
      { heading: "Traffic Overview (10 Metrics)", items: [
        { label: "Total organic sessions (vs. last month)" },
        { label: "Organic traffic growth %" },
        { label: "Top landing pages by organic traffic" },
        { label: "Bounce rate and avg. session duration" },
        { label: "Goal completions / conversions" },
      ] },
      { heading: "Keyword Rankings", items: [
        { label: "Keywords in top 3 / top 10 / top 20" },
        { label: "Biggest ranking improvements" },
        { label: "New keywords ranking" },
        { label: "Keywords to focus on next month" },
      ] },
      { heading: "Work Completed", items: [
        { label: "Technical fixes implemented" },
        { label: "Content published or optimized" },
        { label: "Backlinks acquired (with DA/DR)" },
        { label: "On-page optimizations made" },
      ] },
      { heading: "ROI Summary", items: [
        { label: "Cost per lead from organic" },
        { label: "Revenue attributed to SEO" },
        { label: "ROI calculation" },
      ], proTip: "Looking like a pro agency starts with professional reporting." },
    ],
  },
  {
    slug: "linkedin-templates",
    sections: [
      { heading: "10 Proven Hook Formulas", items: [
        { label: '"Stop doing X. Here\'s why..."', detail: "Calls out a pain point, creates curiosity gap" },
        { label: '"I did X for Y months. Here\'s what I learned..."', detail: "Personal experience + time investment = credibility" },
        { label: '"Hot take: [bold opinion about industry]"', detail: "Controversial opinions get engagement" },
        { label: '"Most [role] waste time on X. Do this instead..."', detail: "Positions you as contrarian expert" },
        { label: '"I went from [bad state] to [good state]. Here\'s how..."', detail: "Transformation stories are irresistible" },
      ] },
      { heading: "Story Framework Templates", items: [
        { label: "Before → After → Bridge", detail: "Show the problem, the result, and how you got there" },
        { label: "Problem → Agitation → Solution", detail: "Classic copywriting framework adapted for LinkedIn" },
        { label: "Lesson from failure", detail: "Vulnerability builds trust and engagement" },
      ] },
      { heading: "Carousel Content Frameworks", items: [
        { label: "Listicle carousel (5-7 tips)" },
        { label: "Step-by-step process" },
        { label: "Myth vs. Reality" },
        { label: "Before/After case study" },
      ] },
      { heading: "Engagement Tactics", items: [
        { label: "Best posting times: Tue-Thu, 8-10 AM" },
        { label: "Reply to every comment within 1 hour" },
        { label: "Use 3-5 relevant hashtags" },
        { label: "End with a question to drive comments" },
      ], proTip: "One post got 50+ leads in 48 hours using the Viral Post Formula." },
    ],
  },
  {
    slug: "seo-career-roadmap",
    sections: [
      { heading: "Month 1-3: Foundation Skills", items: [
        { label: "Learn how search engines work (crawl, index, rank)" },
        { label: "Master Google Search Console and Analytics" },
        { label: "Understand keyword research fundamentals" },
        { label: "Learn HTML basics for SEO (title, meta, headings)" },
        { label: "Study on-page SEO best practices" },
      ] },
      { heading: "Month 4-6: Intermediate Skills", items: [
        { label: "Technical SEO (site speed, crawlability, schema)" },
        { label: "Content strategy and topic clustering" },
        { label: "Link building fundamentals" },
        { label: "Local SEO and Google Business Profile" },
        { label: "Start building a portfolio (free audits for small businesses)" },
      ] },
      { heading: "Month 7-9: Advanced Techniques", items: [
        { label: "International SEO and hreflang" },
        { label: "E-commerce SEO" },
        { label: "Advanced link building and digital PR" },
        { label: "GEO / AEO — AI search optimization" },
        { label: "Learn PPC basics (Google Ads, Facebook Ads)" },
      ] },
      { heading: "Month 10-12: Specialization & Career", items: [
        { label: "Choose a specialization (technical, content, local, e-commerce)" },
        { label: "Get certified (Google, HubSpot, SEMrush)" },
        { label: "Build personal brand on LinkedIn" },
        { label: "Apply for jobs or land freelance clients" },
      ] },
      { heading: "Salary Benchmarks", items: [
        { label: "Junior SEO (0-1 year): $30K-$45K" },
        { label: "Mid-Level SEO (1-3 years): $45K-$70K" },
        { label: "Senior SEO (3-5 years): $70K-$100K" },
        { label: "SEO Manager/Director (5+ years): $100K-$150K+" },
        { label: "Freelance/Agency Owner: Unlimited " },
      ], proTip: "The SEO industry is growing 15% year-over-year. Best time to start is now." },
    ],
  },
  {
    slug: "keyword-clustering-guide",
    sections: [
      { heading: "The AI Prompt", text: "A single, comprehensive ChatGPT prompt that clusters any keyword list into actionable groups based on three criteria: search intent, semantic relevance, and funnel stage.", proTip: "Paste your full keyword list directly into the prompt — it handles hundreds of keywords at once." },
      { heading: "3 Clustering Criteria", items: [
        { label: "Search Intent", detail: "Classify keywords as informational, navigational, commercial, or transactional to match content type." },
        { label: "Semantic Relevance", detail: "Group topically related keywords together to build content clusters and topical authority." },
        { label: "Funnel Stage", detail: "Map keywords to awareness, consideration, or decision stage for strategic content planning." },
      ], proTip: "Combining all three criteria in one prompt replaces expensive clustering tools like KeywordInsights or ClusterAi." },
      { heading: "Cluster Output Format", items: [
        { label: "Cluster name & primary keyword" },
        { label: "Supporting keywords list" },
        { label: "Recommended content type (blog, landing page, guide)" },
        { label: "Search intent classification" },
        { label: "Funnel stage assignment" },
      ] },
      { heading: "5 Keyword Categories Reference Table", items: [
        { label: "Informational Keywords", detail: "How-to, what-is, guide — top-of-funnel awareness content." },
        { label: "Navigational Keywords", detail: "Brand + product searches — ensure your pages rank for your own brand." },
        { label: "Commercial Keywords", detail: "Best, top, review, comparison — middle-of-funnel consideration content." },
        { label: "Transactional Keywords", detail: "Buy, price, discount, near me — bottom-of-funnel conversion content." },
        { label: "Local Keywords", detail: "City + service, near me — geo-targeted content for local SEO." },
      ], proTip: "Map each cluster to one of these 5 categories for a complete content strategy in one prompt." },
    ],
  },
];

// Storage download URLs
export const storageDownloadUrls: Record<string, string> = {
  "seo-prompt-pack": `${STORAGE_BASE}/seo-prompt-pack.pdf`,
  "google-operators": `${STORAGE_BASE}/google-operators-cheatsheet.pdf`,
  "geo-aeo-guide": `${STORAGE_BASE}/geo-aeo-guide.pdf`,
  "technical-seo-checklist": `${STORAGE_BASE}/technical-seo-checklist.pdf`,
  "page-speed-checklist": `${STORAGE_BASE}/page-speed-checklist.pdf`,
  "gmb-audit-checklist": `${STORAGE_BASE}/gmb-audit-checklist.pdf`,
  "link-building-toolkit": `${STORAGE_BASE}/link-building-toolkit.pdf`,
  "content-writing-prompts": `${STORAGE_BASE}/content-writing-prompts.pdf`,
  "free-seo-tools": `${STORAGE_BASE}/free-seo-tools.pdf`,
  "shopify-seo-guide": `${STORAGE_BASE}/shopify-seo-guide.pdf`,
  "internal-linking-guide": `${STORAGE_BASE}/internal-linking-guide.pdf`,
  "seo-proposal-template": `${STORAGE_BASE}/seo-proposal-template.pdf`,
  "competitor-analysis-template": `${STORAGE_BASE}/competitor-analysis-template.pdf`,
  "monthly-report-template": `${STORAGE_BASE}/monthly-seo-report-template.pdf`,
  "linkedin-templates": `${STORAGE_BASE}/linkedin-post-templates.pdf`,
  "seo-career-roadmap": `${STORAGE_BASE}/seo-career-roadmap.pdf`,
  "keyword-clustering-guide": `${STORAGE_BASE}/keyword-clustering-guide.pdf`,
};
