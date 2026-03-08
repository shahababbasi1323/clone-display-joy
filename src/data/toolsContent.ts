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

/** Get content for a specific tool based on its category */
export function getToolContent(category: string): ToolCategoryContent | null {
  return toolCategoryContent[category] || null;
}

/** Get all category names */
export function getAllToolCategories(): string[] {
  return Object.keys(toolCategoryContent);
}
