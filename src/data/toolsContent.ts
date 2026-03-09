/**
 * Rich SEO content for all tool categories.
 * Includes descriptions, benefits, use cases, pro tips, and HowTo schema steps.
 */

export interface ToolCategoryContent {
  category: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  useCases: string[];
  proTips: string[];
  targetAudience: string[];
  howToSteps: string[];
}

export const toolCategoryContent: Record<string, ToolCategoryContent> = {
  "Content & Writing": {
    category: "Content & Writing",
    image: "/src/assets/services/content-strategy.jpg",
    shortDescription: "Optimize your content for readability, engagement, and SEO performance.",
    longDescription: "Our Content & Writing tools help you craft compelling, SEO-optimized content that ranks higher and converts better. From word counts to readability scores, these tools ensure your content meets both search engine requirements and user expectations.",
    benefits: [
      { title: "Improve Readability", description: "Ensure your content is accessible to your target audience with grade-level analysis." },
      { title: "Optimize Length", description: "Hit ideal word counts for blog posts, meta descriptions, and social media." },
      { title: "Enhance Engagement", description: "Create compelling headlines and hooks that drive clicks and shares." },
      { title: "Boost SEO Scores", description: "Achieve optimal keyword density without over-optimization penalties." }
    ],
    useCases: [
      "Blog writers checking article length and readability before publishing",
      "SEO specialists analyzing keyword density for on-page optimization",
      "Content managers auditing existing content for improvement opportunities",
      "Copywriters crafting compelling headlines with emotional impact",
      "Social media managers fitting content within platform character limits"
    ],
    proTips: [
      "Aim for Flesch Reading Ease scores of 60-70 for general audiences",
      "Keep keyword density between 1-2% to avoid over-optimization",
      "Headlines with 6-8 words tend to get the most clicks"
    ],
    targetAudience: ["Content Writers", "SEO Specialists", "Bloggers", "Copywriters", "Marketing Teams"],
    howToSteps: [
      "Paste or type your content into the input field",
      "The tool automatically analyzes your text in real-time",
      "Review metrics like word count, readability score, and keyword density",
      "Make adjustments based on the recommendations provided",
      "Copy the optimized content to your clipboard"
    ]
  },
  "Meta & On-Page SEO": {
    category: "Meta & On-Page SEO",
    image: "/src/assets/services/on-page-seo.jpg",
    shortDescription: "Craft perfect meta tags, titles, and on-page elements for higher rankings.",
    longDescription: "Meta & On-Page SEO tools help you optimize the critical elements that search engines use to understand and rank your pages. From title tags to meta descriptions, these tools ensure your on-page SEO is flawless.",
    benefits: [
      { title: "Higher Click-Through Rates", description: "Compelling meta descriptions that drive more clicks from search results." },
      { title: "Better Rankings", description: "Properly optimized titles and headings signal relevance to search engines." },
      { title: "Rich Snippets", description: "Open Graph tags ensure your content looks great when shared socially." },
      { title: "Index Coverage", description: "Verify your pages are properly indexed by Google." }
    ],
    useCases: [
      "SEO managers auditing title tags across hundreds of pages",
      "Content teams previewing how pages appear in Google search results",
      "Developers generating meta tags and canonical URLs",
      "Social media managers optimizing Open Graph tags for shares",
      "Webmasters checking Google indexation status"
    ],
    proTips: [
      "Keep titles under 60 characters and descriptions under 155 characters",
      "Include your primary keyword near the beginning of title tags",
      "Add a compelling CTA to meta descriptions to improve CTR"
    ],
    targetAudience: ["SEO Managers", "Web Developers", "Content Teams", "Digital Marketers"],
    howToSteps: [
      "Enter your page URL, title, or content in the tool",
      "Review the generated meta tags or analysis",
      "Check character counts and pixel widths for truncation",
      "Copy the optimized HTML code to implement",
      "Test the preview to verify appearance"
    ]
  },
  "Technical SEO": {
    category: "Technical SEO",
    image: "/src/assets/services/technical-seo.jpg",
    shortDescription: "Generate robots.txt, sitemaps, schema markup, and fix technical issues.",
    longDescription: "Technical SEO tools handle the backend optimizations that help search engines crawl, index, and understand your website. From generating sitemaps to validating structured data, these tools ensure your technical foundation is solid.",
    benefits: [
      { title: "Better Crawlability", description: "Properly configured robots.txt and sitemaps guide search engine bots." },
      { title: "Rich Results", description: "Valid schema markup enables rich snippets in search results." },
      { title: "Faster Indexing", description: "XML sitemaps help search engines discover new content quickly." },
      { title: "International SEO", description: "Hreflang tags ensure correct language versions appear globally." }
    ],
    useCases: [
      "Developers creating robots.txt files for new websites",
      "SEO teams generating XML sitemaps for large e-commerce sites",
      "Agencies implementing schema markup for local businesses",
      "Webmasters setting up 301 redirects during site migrations",
      "Technical SEOs validating JSON-LD structured data"
    ],
    proTips: [
      "Always test robots.txt changes in Google Search Console before deploying",
      "Include lastmod dates in sitemaps for faster crawl prioritization",
      "Validate schema markup with Google's Rich Results Test"
    ],
    targetAudience: ["Technical SEOs", "Web Developers", "Webmasters", "DevOps Teams"],
    howToSteps: [
      "Select the type of technical element you need to generate",
      "Fill in the required fields like URLs, rules, or schema type",
      "Review the generated code for accuracy",
      "Copy the output and implement on your website",
      "Test using validation tools to ensure correctness"
    ]
  },
  "Keyword & Research": {
    category: "Keyword & Research",
    image: "/src/assets/services/keyword-research.jpg",
    shortDescription: "Discover profitable keywords, search intent, and content opportunities.",
    longDescription: "Keyword & Research tools help you uncover the search terms your audience uses, understand their intent, and plan content strategies that drive organic traffic. From seed keyword expansion to intent classification, these tools power your SEO strategy.",
    benefits: [
      { title: "Discover Opportunities", description: "Find long-tail keywords with high potential and low competition." },
      { title: "Understand Intent", description: "Classify keywords by informational, commercial, or transactional intent." },
      { title: "Content Planning", description: "Group related keywords for comprehensive topic clusters." },
      { title: "Competitive Edge", description: "Identify keyword gaps your competitors are missing." }
    ],
    useCases: [
      "SEO strategists building keyword lists for new campaigns",
      "Content teams planning blog editorial calendars",
      "PPC managers finding negative keywords to exclude",
      "Product teams discovering what customers search for",
      "Agencies conducting keyword research for client audits"
    ],
    proTips: [
      "Focus on question-based keywords for featured snippet opportunities",
      "Group keywords by intent before creating content",
      "Use LSI keywords to strengthen topical relevance"
    ],
    targetAudience: ["SEO Strategists", "Content Planners", "PPC Managers", "Marketing Teams"],
    howToSteps: [
      "Enter a seed keyword or topic in the input field",
      "The tool generates related keywords and variations",
      "Review metrics like search intent and keyword groupings",
      "Export or copy the keyword list for your campaigns",
      "Use the insights to plan your content strategy"
    ]
  },
  "Social Media & LinkedIn": {
    category: "Social Media & LinkedIn",
    image: "/src/assets/services/content-strategy.jpg",
    shortDescription: "Format posts, generate hashtags, and optimize your social media presence.",
    longDescription: "Social Media & LinkedIn tools help you create engaging content that stands out in crowded feeds. From formatting posts with Unicode text to generating trending hashtags, these tools maximize your social media impact.",
    benefits: [
      { title: "Stand Out", description: "Bold and italic formatting makes your posts more eye-catching." },
      { title: "Grow Reach", description: "Strategic hashtags help you reach new audiences organically." },
      { title: "Save Time", description: "Content calendars and schedulers streamline your workflow." },
      { title: "Professional Brand", description: "Compelling headlines and bios establish thought leadership." }
    ],
    useCases: [
      "LinkedIn creators formatting posts with bold text and emojis",
      "Social media managers planning content calendars",
      "Influencers optimizing Instagram bios for maximum impact",
      "Marketers generating hashtags for campaign posts",
      "Personal brand builders crafting LinkedIn headlines"
    ],
    proTips: [
      "Use 3-5 hashtags on LinkedIn, 20-30 on Instagram for optimal reach",
      "Start LinkedIn posts with a hook that creates curiosity",
      "Keep Twitter/X threads to 5-7 tweets for best engagement"
    ],
    targetAudience: ["Social Media Managers", "LinkedIn Creators", "Influencers", "Brand Marketers"],
    howToSteps: [
      "Enter your content or select the platform you're optimizing for",
      "Use formatting options or generation features",
      "Preview how your content will appear",
      "Copy the formatted output to your clipboard",
      "Paste directly into your social media platform"
    ]
  },
  "Local SEO": {
    category: "Local SEO",
    image: "/src/assets/services/local-seo.jpg",
    shortDescription: "Optimize Google Business Profile, citations, and local search presence.",
    longDescription: "Local SEO tools help brick-and-mortar businesses dominate local search results. From auditing your Google Business Profile to finding citation opportunities, these tools drive foot traffic and local leads.",
    benefits: [
      { title: "Map Pack Rankings", description: "Optimize your GBP to appear in Google's local 3-pack." },
      { title: "Consistent NAP", description: "Ensure name, address, phone consistency across directories." },
      { title: "Review Management", description: "Generate professional responses to build reputation." },
      { title: "Local Visibility", description: "Find citation sources to boost local authority." }
    ],
    useCases: [
      "Local businesses auditing their Google Business Profile",
      "Agencies managing citations for multiple client locations",
      "Reputation managers responding to customer reviews",
      "Franchises checking NAP consistency across locations",
      "Service businesses generating location-specific keywords"
    ],
    proTips: [
      "Respond to all reviews within 24 hours to show engagement",
      "Use local keywords in your GBP business description",
      "Add photos weekly to keep your GBP listing active"
    ],
    targetAudience: ["Local Business Owners", "Local SEO Agencies", "Franchise Managers", "Reputation Managers"],
    howToSteps: [
      "Enter your business information or GBP details",
      "The tool analyzes your local SEO elements",
      "Review the checklist or generated content",
      "Implement the recommendations on your GBP",
      "Monitor improvements in local rankings"
    ]
  },
  "GEO & AI Search": {
    category: "GEO & AI Search",
    image: "/src/assets/services/geo-optimization.jpg",
    shortDescription: "Optimize for AI search engines like ChatGPT, Perplexity, and Google SGE.",
    longDescription: "GEO & AI Search tools help you prepare for the future of search. As AI assistants become primary information sources, these tools ensure your brand appears in AI-generated answers and recommendations.",
    benefits: [
      { title: "AI Visibility", description: "Test how AI search engines reference your brand." },
      { title: "Future-Proof", description: "Optimize content structure for AI understanding." },
      { title: "Brand Mentions", description: "Track when AI models mention your brand." },
      { title: "Content Structure", description: "Format content for AI-friendly extraction." }
    ],
    useCases: [
      "Brand managers testing visibility in ChatGPT and Perplexity",
      "Content strategists optimizing for AI search extraction",
      "SEO teams preparing for Google's AI Overviews",
      "Marketing leaders tracking brand mentions in AI responses",
      "Agencies auditing client AI search presence"
    ],
    proTips: [
      "Structure content with clear headings and bullet points for AI extraction",
      "Build brand authority through consistent quality content",
      "Monitor competitor mentions in AI search results"
    ],
    targetAudience: ["Brand Managers", "SEO Strategists", "Content Teams", "Forward-Thinking Marketers"],
    howToSteps: [
      "Enter your brand name or content for analysis",
      "Generate test prompts to check AI visibility",
      "Review AI search optimization recommendations",
      "Implement structural improvements to your content",
      "Regularly test to track improvements"
    ]
  },
  "Backlink & Off-Page": {
    category: "Backlink & Off-Page",
    image: "/src/assets/services/link-building.jpg",
    shortDescription: "Analyze backlinks, generate outreach emails, and build authority.",
    longDescription: "Backlink & Off-Page tools help you build domain authority through strategic link building. From analyzing anchor text distribution to generating outreach templates, these tools power your off-page SEO efforts.",
    benefits: [
      { title: "Link Quality", description: "Analyze anchor text diversity and identify toxic links." },
      { title: "Outreach Success", description: "Professional templates increase response rates." },
      { title: "Link Opportunities", description: "Find broken link and guest post opportunities." },
      { title: "Disavow Cleanup", description: "Generate disavow files to remove toxic backlinks." }
    ],
    useCases: [
      "Link builders crafting personalized outreach emails",
      "SEO managers auditing backlink profiles for clients",
      "Agencies finding broken link building opportunities",
      "Webmasters creating disavow files for penalty recovery",
      "Content marketers pitching guest post ideas"
    ],
    proTips: [
      "Aim for 40-60% branded anchor text for a natural link profile",
      "Personalize outreach emails with specific page references",
      "Focus on relevance over domain authority for link building"
    ],
    targetAudience: ["Link Builders", "SEO Managers", "Outreach Specialists", "Digital PR Teams"],
    howToSteps: [
      "Enter your anchor texts, domains, or outreach details",
      "The tool analyzes or generates the requested output",
      "Review the analysis or email templates",
      "Export or copy the results for your campaign",
      "Track outreach success and link acquisition"
    ]
  },
  "Ecommerce SEO": {
    category: "Ecommerce SEO",
    image: "/src/assets/services/ecommerce-seo.jpg",
    shortDescription: "Optimize product pages, generate schema, and boost e-commerce conversions.",
    longDescription: "Ecommerce SEO tools help online stores rank higher and convert better. From optimizing product descriptions to generating rich product schema, these tools drive organic traffic and sales.",
    benefits: [
      { title: "Rich Snippets", description: "Product schema displays prices, ratings, and availability in search." },
      { title: "Better Conversions", description: "Optimized product descriptions drive purchase decisions." },
      { title: "Category Rankings", description: "Structured category pages capture broader search intent." },
      { title: "Competitive Edge", description: "Stand out in search results with enhanced listings." }
    ],
    useCases: [
      "E-commerce managers optimizing product page copy",
      "Developers implementing product schema markup",
      "Category managers improving collection page SEO",
      "Shopify store owners enhancing product visibility",
      "Agencies auditing client e-commerce sites"
    ],
    proTips: [
      "Include product benefits, not just features, in descriptions",
      "Add FAQ schema to product pages for more SERP real estate",
      "Use unique descriptions for each product variation"
    ],
    targetAudience: ["E-commerce Managers", "Shopify Developers", "Product Teams", "Online Retailers"],
    howToSteps: [
      "Enter your product details or page content",
      "The tool analyzes or generates optimized output",
      "Review recommendations for improvement",
      "Copy generated schema or optimized content",
      "Implement on your e-commerce platform"
    ]
  },
  "Reporting & Calculation": {
    category: "Reporting & Calculation",
    image: "/src/assets/services/seo-consulting.jpg",
    shortDescription: "Calculate SEO ROI, CPC savings, and make data-driven decisions.",
    longDescription: "Reporting & Calculation tools help you quantify SEO impact and make business cases for investment. From calculating ROI to estimating CPC savings, these tools translate SEO efforts into dollars.",
    benefits: [
      { title: "Prove ROI", description: "Calculate the financial return of your SEO investment." },
      { title: "Budget Planning", description: "Estimate costs and project realistic returns." },
      { title: "Stakeholder Buy-In", description: "Present compelling data to executives." },
      { title: "Competitive Intel", description: "Analyze competitor domain metrics." }
    ],
    useCases: [
      "SEO managers presenting ROI reports to executives",
      "Agencies justifying SEO retainers to clients",
      "Marketing directors planning annual budgets",
      "Consultants estimating project scope and value",
      "Teams comparing SEO vs PPC cost efficiency"
    ],
    proTips: [
      "Use conservative estimates for more credible projections",
      "Factor in lifetime customer value for accurate ROI",
      "Compare SEO costs to equivalent PPC spend"
    ],
    targetAudience: ["SEO Managers", "Marketing Directors", "Agency Owners", "Consultants"],
    howToSteps: [
      "Enter your traffic, conversion, and cost metrics",
      "The tool calculates ROI, savings, or estimates",
      "Review the detailed breakdown of calculations",
      "Export or screenshot results for presentations",
      "Use insights for budget planning and reporting"
    ]
  },
  "Conversion & UX": {
    category: "Conversion & UX",
    image: "/src/assets/services/speed-optimization.jpg",
    shortDescription: "Optimize CTAs, test accessibility, and improve user experience.",
    longDescription: "Conversion & UX tools help you turn visitors into customers. From generating compelling CTAs to checking accessibility compliance, these tools maximize the value of your organic traffic.",
    benefits: [
      { title: "Higher Conversions", description: "Compelling CTAs drive more clicks and signups." },
      { title: "Better Accessibility", description: "Color contrast checks ensure WCAG compliance." },
      { title: "Faster Pages", description: "Speed optimizations reduce bounce rates." },
      { title: "Smarter Testing", description: "Calculate A/B test duration for valid results." }
    ],
    useCases: [
      "Marketers testing CTA variations for landing pages",
      "Designers checking color accessibility compliance",
      "Developers optimizing page speed performance",
      "Growth teams planning A/B test experiments",
      "UX researchers improving user experience"
    ],
    proTips: [
      "Action-oriented CTAs outperform generic 'Click Here' text",
      "Aim for WCAG AA compliance (4.5:1 contrast ratio)",
      "Run A/B tests for at least 2 weeks for statistical validity"
    ],
    targetAudience: ["Conversion Specialists", "UX Designers", "Growth Marketers", "Web Developers"],
    howToSteps: [
      "Enter your content, colors, or test parameters",
      "The tool generates or analyzes the input",
      "Review recommendations and generated options",
      "Implement the optimizations on your site",
      "Track conversion improvements"
    ]
  },
  "Email & Outreach": {
    category: "Email & Outreach",
    image: "/src/assets/services/content-strategy.jpg",
    shortDescription: "Craft compelling subject lines and cold outreach emails that get responses.",
    longDescription: "Email & Outreach tools help you break through crowded inboxes. From testing subject line effectiveness to generating personalized cold emails, these tools improve your outreach success rates.",
    benefits: [
      { title: "Higher Open Rates", description: "Optimized subject lines increase email opens." },
      { title: "Better Responses", description: "Personalized templates drive more replies." },
      { title: "Avoid Spam", description: "Identify trigger words that hurt deliverability." },
      { title: "Scale Outreach", description: "Templates accelerate link building campaigns." }
    ],
    useCases: [
      "Link builders sending outreach at scale",
      "Sales teams crafting cold email campaigns",
      "PR professionals pitching to journalists",
      "Marketers testing email subject lines",
      "Agencies managing client outreach"
    ],
    proTips: [
      "Keep subject lines under 50 characters for mobile",
      "Personalize the first line with specific research",
      "Send follow-ups 3-5 days after initial outreach"
    ],
    targetAudience: ["Link Builders", "Sales Teams", "PR Professionals", "Outreach Specialists"],
    howToSteps: [
      "Enter your target details or subject line",
      "The tool scores or generates optimized content",
      "Review spam triggers and improvement suggestions",
      "Copy the optimized email or subject line",
      "Track open and response rates"
    ]
  },
  "PPC & Paid Ads": {
    category: "PPC & Paid Ads",
    image: "/src/assets/services/google-ads.jpg",
    shortDescription: "Plan budgets, calculate ROAS, and optimize your paid advertising campaigns.",
    longDescription: "PPC & Paid Ads tools help you maximize return on ad spend. From budget calculators to Quality Score estimators, these tools ensure your paid campaigns deliver profitable results.",
    benefits: [
      { title: "Budget Optimization", description: "Plan campaigns with realistic cost projections." },
      { title: "Higher ROAS", description: "Calculate and improve return on ad spend." },
      { title: "Better Ad Copy", description: "Generate headlines that fit Google Ads limits." },
      { title: "Quality Score", description: "Estimate and improve your Quality Score factors." }
    ],
    useCases: [
      "PPC managers planning monthly ad budgets",
      "E-commerce teams calculating ROAS targets",
      "Copywriters generating RSA headline variations",
      "Agencies auditing client PPC accounts",
      "Marketing directors evaluating paid ad ROI"
    ],
    proTips: [
      "Aim for Quality Score of 7+ to reduce CPC",
      "Test at least 15 headlines per RSA ad group",
      "Set ROAS targets based on profit margins, not revenue"
    ],
    targetAudience: ["PPC Managers", "Google Ads Specialists", "E-commerce Teams", "Performance Marketers"],
    howToSteps: [
      "Enter your campaign metrics or ad details",
      "The tool calculates budgets, ROAS, or generates copy",
      "Review the results and recommendations",
      "Export data or copy generated ad copy",
      "Implement changes in your ad platform"
    ]
  },
  "Domain & URL Tools": {
    category: "Domain & URL Tools",
    image: "/src/assets/services/technical-seo.jpg",
    shortDescription: "Check domain authority, find expired domains, and analyze redirects.",
    longDescription: "Domain & URL tools help you evaluate domains for acquisition, audit redirect chains, and identify technical issues. From domain age checks to broken link scanning, these tools support domain due diligence and technical audits.",
    benefits: [
      { title: "Domain Acquisition", description: "Find valuable expired domains for link building." },
      { title: "Technical Audits", description: "Identify redirect chains hurting page speed." },
      { title: "Link Maintenance", description: "Find and fix broken outbound links." },
      { title: "Authority Estimates", description: "Evaluate domain quality before partnerships." }
    ],
    useCases: [
      "SEOs finding expired domains with existing authority",
      "Webmasters auditing sites for broken outbound links",
      "Developers tracing redirect chains during migrations",
      "Link builders evaluating domain quality for outreach",
      "Agencies conducting technical site audits"
    ],
    proTips: [
      "Check domain history before purchasing expired domains",
      "Fix redirect chains over 3 hops for better crawl efficiency",
      "Regularly scan for broken outbound links monthly"
    ],
    targetAudience: ["Domain Investors", "Technical SEOs", "Web Developers", "Link Builders"],
    howToSteps: [
      "Enter the domain(s) or URL(s) to analyze",
      "The tool checks status, redirects, or broken links",
      "Review the detailed results and issues found",
      "Export the report for further action",
      "Fix identified issues or proceed with acquisition"
    ]
  }
};

/** Tool-specific content overrides keyed by slug. Merges on top of category content. */
export const toolSpecificContent: Record<string, Partial<ToolCategoryContent>> = {
  "word-counter": {
    shortDescription: "Count words, characters, sentences, paragraphs, and estimate reading & speaking time instantly — no signup required.",
    longDescription: "The Word Counter is a must-have tool for writers, bloggers, students, and SEO professionals. Whether you're writing a 1,500-word blog post, checking an essay's word limit, or estimating how long a speech will take, this tool gives you real-time metrics the moment you type or paste. Unlike basic counters, it also tracks paragraphs, sentences, and calculates both reading time (at 200 WPM) and speaking time (at 130 WPM) — perfect for presentation prep and podcast scripts.",
    benefits: [
      { title: "Real-Time Counting", description: "See word, character, and sentence counts update instantly as you type — zero lag." },
      { title: "Reading & Speaking Time", description: "Estimate how long content takes to read or speak aloud for better planning." },
      { title: "Paragraph Tracking", description: "Monitor paragraph count to keep your content structure scannable." },
      { title: "No Character Limits", description: "Paste entire articles, books, or documents — no input size restrictions." }
    ],
    useCases: [
      "Bloggers hitting target word counts (1,000–2,500 words) for SEO-optimized articles",
      "Students checking essay length against assignment requirements",
      "Speakers and presenters estimating talk duration from scripts",
      "Copywriters ensuring ad copy fits within strict character limits",
      "Translators comparing source and target text lengths",
      "Journalists meeting editorial word count guidelines"
    ],
    proTips: [
      "For SEO blog posts, aim for 1,500–2,500 words to compete for competitive keywords",
      "Reading time under 7 minutes (≈1,400 words) gets the highest engagement on most platforms",
      "Break content into paragraphs of 2-3 sentences for better mobile readability",
      "Use the speaking time estimate to plan webinar scripts — aim for 15-20 min segments"
    ],
    targetAudience: ["Bloggers", "Students", "Copywriters", "Speakers", "SEO Writers", "Journalists"],
    howToSteps: [
      "Paste your text or start typing directly in the text area",
      "View real-time word, character, and sentence counts on the right panel",
      "Check characters without spaces for platform-specific limits",
      "Use reading time to plan article length for audience engagement",
      "Use speaking time to estimate presentation or podcast duration"
    ]
  },
  "meta-tag-generator": {
    shortDescription: "Generate SEO-optimized HTML meta tags, Open Graph tags, and Twitter Cards with a live Google SERP preview.",
    longDescription: "The Meta Tag Generator creates production-ready HTML code for your page's most important SEO elements. Enter your title, description, keywords, and URL to instantly generate primary meta tags, Open Graph tags for Facebook and LinkedIn, and Twitter Card markup. The built-in Google preview shows exactly how your page will appear in search results, helping you craft click-worthy titles and descriptions that maximize CTR. Every character count is tracked with color-coded progress bars so you never exceed recommended limits.",
    benefits: [
      { title: "One-Click Code Generation", description: "Get complete meta tag HTML ready to paste into your <head> section." },
      { title: "Live SERP Preview", description: "See exactly how your title and description appear in Google results before publishing." },
      { title: "Social Media Ready", description: "Automatically generates Open Graph and Twitter Card tags for perfect social shares." },
      { title: "Character Limit Tracking", description: "Color-coded progress bars warn you before titles or descriptions get truncated." }
    ],
    useCases: [
      "Web developers adding meta tags to new pages or site launches",
      "SEO specialists optimizing title tags and descriptions for higher CTR",
      "Content managers updating meta data across hundreds of blog posts",
      "Marketing teams ensuring consistent branding in social media shares",
      "Freelancers generating deliverables for client SEO audits",
      "Shopify and WordPress users who prefer copy-paste over plugin settings"
    ],
    proTips: [
      "Front-load your primary keyword in the title for better rankings and visibility",
      "Include a clear value proposition or CTA in your meta description to boost CTR",
      "Keep titles at 50-60 characters and descriptions at 140-155 characters to avoid truncation",
      "Always fill in the URL field to generate accurate canonical and OG URL tags"
    ],
    targetAudience: ["Web Developers", "SEO Specialists", "Content Managers", "Freelancers", "Marketing Teams"],
    howToSteps: [
      "Enter your page title (aim for under 60 characters)",
      "Write a compelling meta description (under 160 characters)",
      "Add comma-separated keywords relevant to the page",
      "Enter the full page URL for Open Graph and canonical tags",
      "Preview the Google search result appearance and copy the generated HTML"
    ]
  },
  "keyword-density-checker": {
    shortDescription: "Analyze keyword frequency and density percentage to optimize content without over-stuffing.",
    longDescription: "The Keyword Density Checker scans your content and ranks every word by frequency, showing exact counts and percentage density. It filters out short words (under 3 characters) to focus on meaningful keywords. Use it to ensure your target keyword appears at the right density (1-2%) and to spot unintentional keyword stuffing that could trigger search engine penalties.",
    benefits: [
      { title: "Avoid Penalties", description: "Catch keyword stuffing before it triggers algorithmic penalties." },
      { title: "Optimize Naturally", description: "Achieve ideal 1-2% density for primary keywords." },
      { title: "Discover Themes", description: "See which topics your content naturally emphasizes." },
      { title: "Competitive Analysis", description: "Paste competitor content to reverse-engineer their keyword strategy." }
    ],
    useCases: [
      "SEO writers checking target keyword density before publishing",
      "Content auditors reviewing existing pages for optimization opportunities",
      "Competitors analysis — paste rival content to find their keyword focus",
      "Editors ensuring editorial guidelines for keyword usage are met",
      "E-commerce teams optimizing product descriptions for search"
    ],
    proTips: [
      "Primary keyword density of 1-2% is ideal; above 3% risks over-optimization",
      "Check density for LSI/related keywords too — not just your primary term",
      "Run the checker on top-ranking competitor pages to benchmark density",
      "Density alone doesn't guarantee rankings — focus on search intent and quality"
    ],
    targetAudience: ["SEO Writers", "Content Auditors", "E-commerce Teams", "Content Strategists"],
    howToSteps: [
      "Paste your article or blog post content into the text area",
      "Review the top 20 most frequent words with counts and percentages",
      "Check if your target keyword appears at 1-2% density",
      "Identify overused filler words that dilute topic relevance",
      "Adjust content and re-check until density is optimized"
    ]
  },
  "readability-checker": {
    shortDescription: "Check Flesch-Kincaid reading ease score, grade level, and sentence complexity for any text.",
    longDescription: "The Readability Checker uses the Flesch-Kincaid formula to score your content's reading difficulty on a 0-100 scale. It also calculates grade level, average sentence length, and syllables per word. Content scoring 60-70 is ideal for general web audiences. Use it to simplify complex writing, improve user engagement, and reduce bounce rates — all factors that indirectly boost SEO rankings.",
    benefits: [
      { title: "Audience Matching", description: "Ensure your writing matches your target audience's reading level." },
      { title: "Lower Bounce Rates", description: "Easier-to-read content keeps visitors on page longer." },
      { title: "Better Engagement", description: "Simplified content gets more shares and backlinks." },
      { title: "SEO Advantage", description: "Google favors content that satisfies user intent quickly." }
    ],
    targetAudience: ["Content Writers", "UX Writers", "Educators", "Healthcare Communicators", "Legal Writers"],
    howToSteps: [
      "Paste your content into the text area",
      "Review the Flesch Reading Ease score (aim for 60-70 for web content)",
      "Check grade level — most web content should target Grade 7-9",
      "Look at average sentence length — keep under 20 words per sentence",
      "Simplify complex sections and re-check the score"
    ]
  },
  "headline-analyzer": {
    shortDescription: "Score your headlines for emotional impact, power words, length, and click-through potential.",
    longDescription: "The Headline Analyzer evaluates your headlines on a 100-point scale across multiple factors: character and word count, presence of power words and emotional triggers, number usage, and question format. Great headlines are the single biggest factor in whether someone clicks your search result, opens your email, or reads your blog post. This tool helps you craft headlines that drive maximum engagement.",
    benefits: [
      { title: "Higher CTR", description: "Headlines with power words and numbers get up to 73% more clicks." },
      { title: "Emotional Connection", description: "Detect emotional triggers that create urgency and curiosity." },
      { title: "Optimal Length", description: "Hit the 50-60 character sweet spot for search and social." },
      { title: "Data-Driven Writing", description: "Replace guesswork with a scoring system backed by engagement research." }
    ],
    targetAudience: ["Content Marketers", "Bloggers", "Email Marketers", "Social Media Managers", "Copywriters"],
    howToSteps: [
      "Type or paste your headline into the input field",
      "Review the overall score out of 100",
      "Check which power words and emotional words are detected",
      "Try adding a number or question format to boost the score",
      "Compare multiple headline variations to pick the strongest one"
    ]
  },
  "schema-generator": {
    shortDescription: "Generate valid JSON-LD structured data for LocalBusiness, Article, Product, FAQ, and more schema types.",
    longDescription: "The Schema Markup Generator creates production-ready JSON-LD code that you can paste directly into your page's HTML. Structured data helps search engines understand your content and enables rich results like star ratings, FAQ dropdowns, recipe cards, and event listings in Google. Choose from multiple schema types, fill in the fields, and get validated markup instantly — no coding knowledge required.",
    benefits: [
      { title: "Rich Search Results", description: "Enable star ratings, FAQ dropdowns, prices, and more in Google SERPs." },
      { title: "No Coding Required", description: "Fill in a form and get valid JSON-LD code ready to paste." },
      { title: "Multiple Schema Types", description: "Support for LocalBusiness, Article, Product, FAQ, Event, and more." },
      { title: "Validation Built In", description: "Generated markup follows Google's structured data guidelines." }
    ],
    targetAudience: ["Web Developers", "SEO Specialists", "Local Business Owners", "E-commerce Managers", "Content Publishers"],
    howToSteps: [
      "Select the schema type that matches your page content",
      "Fill in the required fields (name, description, URL, etc.)",
      "Review the generated JSON-LD code in the output panel",
      "Copy the code and paste it into your page's <head> or <body>",
      "Validate with Google's Rich Results Test to confirm eligibility"
    ]
  },
  "robots-txt-generator": {
    shortDescription: "Build a properly formatted robots.txt file with allow/disallow rules, sitemap references, and custom user agents.",
    longDescription: "The Robots.txt Generator helps you create the critical file that controls how search engine bots crawl your website. Misconfigured robots.txt files can accidentally block important pages from indexing or waste crawl budget on low-value URLs. This tool lets you add multiple user agents, set allow/disallow rules, and include sitemap references — all with proper formatting that follows the robots exclusion standard.",
    benefits: [
      { title: "Crawl Budget Control", description: "Direct bots to your most important pages and block low-value areas." },
      { title: "Prevent Accidental Blocking", description: "Visual interface prevents syntax errors that block indexing." },
      { title: "Multi-Bot Support", description: "Set different rules for Googlebot, Bingbot, and other crawlers." },
      { title: "Sitemap Integration", description: "Include sitemap URLs to speed up content discovery." }
    ],
    targetAudience: ["Web Developers", "Technical SEOs", "Webmasters", "DevOps Engineers"],
    howToSteps: [
      "Add user agent rules (use * for all bots or specify Googlebot, Bingbot, etc.)",
      "Set Allow and Disallow paths for each user agent",
      "Add your XML sitemap URL for automatic discovery",
      "Review the generated robots.txt file for accuracy",
      "Copy and upload to your website's root directory"
    ]
  },
  "linkedin-post-formatter": {
    shortDescription: "Format LinkedIn posts with bold, italic, and Unicode styling plus emojis and hashtags for maximum engagement.",
    longDescription: "The LinkedIn Post Formatter transforms plain text into eye-catching posts using Unicode bold and italic characters that work natively on LinkedIn. Since LinkedIn doesn't support markdown or rich text formatting, Unicode text styling is the only way to make your posts stand out in the feed. Add strategic emoji placement, structure with line breaks, and append relevant hashtags to maximize impressions and engagement.",
    benefits: [
      { title: "Stand Out in Feed", description: "Bold and italic text catches attention in a sea of plain posts." },
      { title: "Higher Engagement", description: "Formatted posts get 2-3x more impressions than plain text." },
      { title: "Professional Look", description: "Structured formatting signals thought leadership." },
      { title: "One-Click Copy", description: "Copy formatted text and paste directly into LinkedIn." }
    ],
    targetAudience: ["LinkedIn Creators", "Personal Brand Builders", "B2B Marketers", "Thought Leaders", "Recruiters"],
    howToSteps: [
      "Type or paste your LinkedIn post text",
      "Select text and apply bold or italic formatting",
      "Add emojis and bullet points for visual structure",
      "Append 3-5 relevant hashtags at the end",
      "Copy the formatted post and paste into LinkedIn"
    ]
  },
  "google-serp-preview": {
    shortDescription: "Preview exactly how your page title, URL, and description will appear in Google search results on desktop and mobile.",
    longDescription: "The Google SERP Preview simulator shows a pixel-perfect preview of your search listing before you publish. See exactly where your title truncates, how your URL breadcrumbs display, and whether your description fits within Google's character limits. Compare desktop and mobile views side by side to ensure your listing looks compelling on every device. This tool is essential for maximizing click-through rates from organic search.",
    benefits: [
      { title: "Prevent Truncation", description: "See exactly where Google cuts off your title and description." },
      { title: "Maximize CTR", description: "Craft listings that stand out and drive more clicks." },
      { title: "Mobile Preview", description: "Check how listings appear on mobile devices." },
      { title: "Pre-Publish Confidence", description: "Eliminate guesswork before updating meta tags." }
    ],
    targetAudience: ["SEO Managers", "Content Teams", "Web Developers", "Digital Marketers", "Agency Teams"],
    howToSteps: [
      "Enter your page title as it appears in the <title> tag",
      "Add the page URL to see breadcrumb formatting",
      "Write or paste your meta description",
      "Toggle between desktop and mobile preview modes",
      "Adjust title and description until they display perfectly"
    ]
  },
  "seo-roi-calculator": {
    shortDescription: "Calculate the financial return of your SEO investment with traffic, conversion, and revenue projections.",
    longDescription: "The SEO ROI Calculator helps you build a data-driven business case for SEO investment. Input your monthly organic traffic, conversion rate, average order value, and SEO costs to see projected revenue, ROI percentage, and break-even timeline. Use it to justify budgets to stakeholders, compare SEO vs PPC cost efficiency, and set realistic growth expectations for your organic search strategy.",
    benefits: [
      { title: "Justify Budgets", description: "Present clear ROI data to executives and stakeholders." },
      { title: "Set Expectations", description: "Project realistic revenue timelines for SEO campaigns." },
      { title: "Compare Channels", description: "Show SEO cost efficiency vs paid advertising." },
      { title: "Track Progress", description: "Benchmark actual results against initial projections." }
    ],
    targetAudience: ["SEO Managers", "Marketing Directors", "Agency Owners", "CMOs", "Consultants"],
    howToSteps: [
      "Enter your current or projected monthly organic traffic",
      "Input your website's conversion rate and average order value",
      "Add monthly SEO investment costs (tools, content, agency fees)",
      "Review projected revenue, ROI percentage, and payback period",
      "Use the results in proposals, reports, and budget presentations"
    ]
  },
  "email-subject-line-tester": {
    shortDescription: "Score email subject lines for length, power words, personalization, and spam trigger detection.",
    longDescription: "The Email Subject Line Tester scores your subject lines on a 100-point scale analyzing length optimization, power word presence, emoji usage, spam trigger words, and personalization elements. With average email open rates around 20%, a compelling subject line is the single biggest lever for improving email performance. Test multiple variations to find the highest-scoring option before sending.",
    benefits: [
      { title: "Higher Open Rates", description: "Optimized subject lines can improve opens by 30-50%." },
      { title: "Spam Detection", description: "Catch trigger words that send emails to spam folders." },
      { title: "A/B Testing", description: "Compare multiple variations to pick the winner." },
      { title: "Mobile Optimization", description: "Ensure subject lines display fully on mobile screens." }
    ],
    targetAudience: ["Email Marketers", "Newsletter Creators", "Sales Teams", "Marketing Automation Specialists"],
    howToSteps: [
      "Type your email subject line into the input field",
      "Review the overall score and individual factor analysis",
      "Check for spam trigger words and fix any detected",
      "Try variations with numbers, power words, or questions",
      "Pick the highest-scoring subject line for your campaign"
    ]
  },
  "color-contrast-checker": {
    shortDescription: "Check foreground and background color combinations against WCAG 2.1 accessibility standards.",
    longDescription: "The Color Contrast Checker calculates the contrast ratio between any two colors and evaluates compliance with WCAG 2.1 AA and AAA accessibility standards. Accessible design isn't optional — it's required by law in many jurisdictions and improves usability for all visitors. Poor contrast is one of the most common accessibility failures, affecting readability for the 300 million people worldwide with color vision deficiency.",
    benefits: [
      { title: "Legal Compliance", description: "Meet ADA, EAA, and WCAG requirements for digital accessibility." },
      { title: "Better Readability", description: "High contrast improves reading speed and comprehension for everyone." },
      { title: "Inclusive Design", description: "Serve users with low vision and color blindness effectively." },
      { title: "SEO Signal", description: "Google considers page experience, and accessibility is part of UX quality." }
    ],
    targetAudience: ["UI Designers", "Frontend Developers", "Accessibility Specialists", "Brand Teams", "UX Researchers"],
    howToSteps: [
      "Enter or pick your foreground (text) color",
      "Enter or pick your background color",
      "Review the contrast ratio and WCAG compliance levels",
      "Adjust colors until you achieve at least AA compliance (4.5:1)",
      "Test with your actual font sizes — large text has relaxed requirements (3:1)"
    ]
  }
};

/** Get content for a specific tool, merging tool-specific overrides on top of category content */
export function getToolContent(category: string, slug?: string): ToolCategoryContent | null {
  const base = toolCategoryContent[category] || null;
  if (!base || !slug) return base;
  const override = toolSpecificContent[slug];
  if (!override) return base;
  return { ...base, ...override, benefits: override.benefits || base.benefits };
}

/** Get all category names */
export function getAllToolCategories(): string[] {
  return Object.keys(toolCategoryContent);
}
