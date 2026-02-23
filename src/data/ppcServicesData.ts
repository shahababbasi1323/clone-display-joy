import {
  Megaphone, Share2, RefreshCw, ClipboardCheck, MapPinned,
  type LucideIcon,
} from "lucide-react";

export interface PpcFaq {
  q: string;
  a: string;
}

export interface PpcServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  whatIs: {
    title: string;
    description: string;
    points: string[];
  };
  process: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  tools: string[];
  deliverables: string[];
  pricing: { range: string; note: string };
  faqs: PpcFaq[];
  relatedServices: string[];
  relatedSeoServices: string[];
  relatedTools: { label: string; href: string }[];
}

export const ppcServicesData: PpcServiceData[] = [
  /* ──────────────── Google Ads Management ──────────────── */
  {
    slug: "google-ads-management",
    title: "Google Ads Management",
    metaTitle: "Google Ads Management Services | Search, Display & Shopping Campaigns",
    metaDescription:
      "Expert Google Ads management covering Search, Display, Shopping & YouTube campaigns. Data-driven PPC strategies that maximize ROI and reduce wasted ad spend.",
    icon: Megaphone,
    heroTitle: "Google Ads",
    heroHighlight: "Management",
    heroDescription:
      "Maximize your return on ad spend with expertly managed Google Ads campaigns. From Search to Shopping to YouTube, we build and optimize campaigns that convert.",
    whatIs: {
      title: "What is Google Ads Management?",
      description:
        "Google Ads management involves creating, optimizing, and scaling paid search campaigns across Google's advertising network — including Search, Display, Shopping, and YouTube — to drive qualified traffic and measurable conversions.",
      points: [
        "Search campaign setup targeting high-intent buyer keywords",
        "Display network campaigns for brand awareness and reach",
        "Google Shopping campaigns for e-commerce product visibility",
        "YouTube video ad campaigns for engagement and conversions",
        "Audience segmentation and bid strategy optimization",
        "Conversion tracking and attribution modeling",
      ],
    },
    process: {
      title: "Our Google Ads Process",
      steps: [
        { title: "Account Audit", desc: "Deep-dive into your existing account structure, Quality Scores, and wasted spend to find quick wins." },
        { title: "Strategy & Structure", desc: "Build a campaign architecture aligned to your sales funnel with tightly themed ad groups." },
        { title: "Ad Copy & Creative", desc: "Write high-converting ad copy with responsive search ads, sitelinks, and callout extensions." },
        { title: "Bid & Budget Optimization", desc: "Implement smart bidding strategies and budget allocation based on performance data." },
        { title: "Reporting & Scaling", desc: "Weekly performance reports with actionable insights. Scale winning campaigns and cut losers." },
      ],
    },
    tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Google Keyword Planner", "Optmyzr", "SpyFu"],
    deliverables: [
      "Full account audit report",
      "Campaign structure & keyword map",
      "Ad copy and extension creation",
      "Conversion tracking setup",
      "Weekly performance reports",
      "Monthly strategy review calls",
      "Landing page recommendations",
    ],
    pricing: { range: "Starting at $1,000/month + ad spend", note: "Management fee based on ad spend tier. Minimum $2,000/month ad budget recommended." },
    faqs: [
      { q: "How much should I spend on Google Ads?", a: "We recommend a minimum of $2,000/month in ad spend for meaningful results. The ideal budget depends on your industry, competition, and goals — we'll recommend the right level during our strategy call." },
      { q: "How quickly will I see results from Google Ads?", a: "Unlike SEO, PPC delivers traffic immediately. However, optimization takes 2-4 weeks to gather enough data. Most clients see strong ROI improvements within the first 60 days." },
      { q: "Do you manage Shopping campaigns?", a: "Yes! We manage Google Shopping campaigns including feed optimization, product group segmentation, and Performance Max campaigns for e-commerce clients." },
      { q: "What's your management fee structure?", a: "Our fee is a flat monthly rate based on your ad spend tier — not a percentage. This aligns our incentives with your ROI rather than encouraging higher spend." },
      { q: "Can you take over an existing Google Ads account?", a: "Absolutely. We audit your current account, identify inefficiencies, and restructure campaigns for better performance. You always retain ownership of your account." },
    ],
    relatedServices: ["social-media-ads", "remarketing-retargeting", "ppc-audit-strategy"],
    relatedSeoServices: ["keyword-research", "ecommerce-seo", "on-page-seo"],
    relatedTools: [
      { label: "CPC Savings Calculator", href: "/tools/cpc-savings-calculator" },
      { label: "SEO ROI Calculator", href: "/tools/seo-roi-calculator" },
    ],
  },

  /* ──────────────── Social Media Ads ──────────────── */
  {
    slug: "social-media-ads",
    title: "Social Media Advertising",
    metaTitle: "Social Media Advertising | Facebook, Instagram, LinkedIn & TikTok Ads",
    metaDescription:
      "Drive leads and sales with targeted social media advertising across Facebook, Instagram, LinkedIn, and TikTok. Creative ad campaigns that engage and convert.",
    icon: Share2,
    heroTitle: "Social Media",
    heroHighlight: "Advertising",
    heroDescription:
      "Reach your ideal audience where they spend their time. We create and manage high-performing ad campaigns across Facebook, Instagram, LinkedIn, and TikTok.",
    whatIs: {
      title: "What is Social Media Advertising?",
      description:
        "Social media advertising uses paid placements on platforms like Facebook, Instagram, LinkedIn, and TikTok to reach precisely targeted audiences based on demographics, interests, behaviors, and intent signals.",
      points: [
        "Facebook & Instagram Ads for B2C lead generation and e-commerce",
        "LinkedIn Ads for B2B lead generation and thought leadership",
        "TikTok Ads for brand awareness and younger demographics",
        "Custom audience creation and lookalike targeting",
        "Creative ad design and video production",
        "A/B testing and conversion rate optimization",
      ],
    },
    process: {
      title: "Our Social Ads Process",
      steps: [
        { title: "Audience Research", desc: "Define buyer personas and build custom audiences using first-party data and platform insights." },
        { title: "Creative Strategy", desc: "Design scroll-stopping ad creatives — images, videos, carousels — tailored to each platform." },
        { title: "Campaign Launch", desc: "Set up campaigns with proper pixel tracking, conversion events, and budget allocation." },
        { title: "Testing & Optimization", desc: "Run A/B tests on creatives, copy, and audiences. Optimize for the lowest cost per acquisition." },
        { title: "Scale & Report", desc: "Scale winning ad sets, expand to new audiences, and deliver transparent performance reports." },
      ],
    },
    tools: ["Meta Business Suite", "LinkedIn Campaign Manager", "TikTok Ads Manager", "Canva Pro", "Google Analytics 4", "Hootsuite Ads"],
    deliverables: [
      "Audience research & persona mapping",
      "Ad creative design (images + video)",
      "Pixel & conversion tracking setup",
      "Campaign management & optimization",
      "A/B testing plan and execution",
      "Bi-weekly performance reports",
      "Monthly strategy calls",
    ],
    pricing: { range: "Starting at $800/month + ad spend", note: "Creative production included. Minimum $1,500/month ad budget recommended." },
    faqs: [
      { q: "Which social platform is best for my business?", a: "It depends on your audience. B2C businesses often thrive on Facebook/Instagram, B2B on LinkedIn, and brands targeting younger demographics on TikTok. We'll recommend the right mix during our strategy call." },
      { q: "Do you create the ad creatives?", a: "Yes! Our service includes ad creative design — images, carousels, and short-form video content optimized for each platform's best practices." },
      { q: "How do you measure social ad success?", a: "We track cost per lead/acquisition, ROAS (Return on Ad Spend), click-through rates, and conversion rates. Every metric ties back to your business goals." },
      { q: "Can social ads work for B2B companies?", a: "Absolutely. LinkedIn Ads are incredibly effective for B2B targeting by job title, company size, and industry. We also use Facebook for B2B retargeting and awareness campaigns." },
    ],
    relatedServices: ["google-ads-management", "remarketing-retargeting", "local-search-ads"],
    relatedSeoServices: ["content-strategy", "geo-optimization"],
    relatedTools: [
      { label: "Hashtag Generator", href: "/tools/hashtag-generator" },
      { label: "Social Media Image Size Guide", href: "/tools/social-media-image-size-guide" },
    ],
  },

  /* ──────────────── Remarketing / Retargeting ──────────────── */
  {
    slug: "remarketing-retargeting",
    title: "Remarketing & Retargeting",
    metaTitle: "Remarketing & Retargeting Services | Re-engage & Convert Lost Visitors",
    metaDescription:
      "Bring back lost visitors with strategic remarketing campaigns across Google, Facebook, and LinkedIn. Increase conversions by staying top-of-mind with warm audiences.",
    icon: RefreshCw,
    heroTitle: "Remarketing &",
    heroHighlight: "Retargeting",
    heroDescription:
      "97% of first-time visitors leave without converting. Our remarketing campaigns bring them back with personalized ads that drive action.",
    whatIs: {
      title: "What is Remarketing & Retargeting?",
      description:
        "Remarketing shows targeted ads to people who have already visited your website or engaged with your content. By staying visible to warm audiences, you dramatically increase conversion rates at a lower cost per acquisition.",
      points: [
        "Website visitor retargeting across Google Display Network",
        "Social media remarketing on Facebook, Instagram, and LinkedIn",
        "Dynamic product remarketing for e-commerce stores",
        "Email list remarketing and customer match campaigns",
        "Sequential messaging to guide prospects through the funnel",
        "Cross-device targeting for consistent brand presence",
      ],
    },
    process: {
      title: "Our Remarketing Process",
      steps: [
        { title: "Audience Segmentation", desc: "Segment visitors by behavior — page views, cart abandonment, time on site — for personalized messaging." },
        { title: "Pixel & Tag Setup", desc: "Implement tracking pixels across Google, Meta, and LinkedIn for precise audience building." },
        { title: "Creative Development", desc: "Design dynamic and static ad creatives tailored to each audience segment and funnel stage." },
        { title: "Campaign Deployment", desc: "Launch remarketing campaigns with frequency caps and exclusion lists to avoid ad fatigue." },
        { title: "Optimize & Convert", desc: "Continuously optimize bids, creatives, and audiences based on conversion data." },
      ],
    },
    tools: ["Google Ads Remarketing", "Meta Pixel", "LinkedIn Insight Tag", "Google Tag Manager", "Google Analytics 4", "AdRoll"],
    deliverables: [
      "Audience segmentation strategy",
      "Pixel & tracking implementation",
      "Dynamic remarketing ad setup",
      "Creative design for all ad sizes",
      "Frequency management & exclusion lists",
      "Monthly performance reports",
      "Conversion path analysis",
    ],
    pricing: { range: "Starting at $600/month + ad spend", note: "Often combined with Google Ads or Social Ads management for best results." },
    faqs: [
      { q: "What's the difference between remarketing and retargeting?", a: "They're often used interchangeably. Technically, retargeting refers to display ads shown to past visitors, while remarketing originally meant re-engaging via email. Today, both terms describe the same strategy." },
      { q: "Won't remarketing annoy my visitors?", a: "Not with proper management. We use frequency caps (limiting how often someone sees your ad), burn pixels (stopping ads after conversion), and rotating creatives to keep the experience positive." },
      { q: "How does dynamic remarketing work for e-commerce?", a: "Dynamic remarketing automatically shows visitors the exact products they viewed on your site. Product images, prices, and descriptions are pulled from your feed in real-time." },
      { q: "Can you retarget people who watched my YouTube videos?", a: "Yes! We can build audiences from YouTube channel subscribers, video viewers, and specific video watchers, then serve them targeted ads across Google's network." },
    ],
    relatedServices: ["google-ads-management", "social-media-ads", "ppc-audit-strategy"],
    relatedSeoServices: ["ecommerce-seo", "on-page-seo"],
    relatedTools: [
      { label: "CTA Generator", href: "/tools/cta-generator" },
      { label: "A/B Test Duration Calculator", href: "/tools/ab-test-duration-calculator" },
    ],
  },

  /* ──────────────── PPC Audit & Strategy ──────────────── */
  {
    slug: "ppc-audit-strategy",
    title: "PPC Audit & Strategy",
    metaTitle: "PPC Audit & Strategy Services | Account Analysis & Campaign Optimization",
    metaDescription:
      "Get a comprehensive PPC audit with actionable recommendations. Competitor analysis, wasted spend identification, and a custom strategy to improve your ROAS.",
    icon: ClipboardCheck,
    heroTitle: "PPC Audit &",
    heroHighlight: "Strategy",
    heroDescription:
      "Uncover hidden opportunities and wasted spend in your PPC accounts. Our thorough audit delivers a clear roadmap to better performance and higher ROAS.",
    whatIs: {
      title: "What is a PPC Audit?",
      description:
        "A PPC audit is a comprehensive review of your paid advertising accounts — including campaign structure, keyword targeting, ad copy, bidding strategy, and conversion tracking — to identify inefficiencies and opportunities for improvement.",
      points: [
        "Account structure and campaign architecture review",
        "Quality Score analysis and improvement recommendations",
        "Wasted spend identification through search term analysis",
        "Competitor ad strategy and positioning analysis",
        "Conversion tracking and attribution verification",
        "Custom PPC strategy with 90-day action plan",
      ],
    },
    process: {
      title: "Our PPC Audit Process",
      steps: [
        { title: "Data Collection", desc: "Export and analyze 3-12 months of account data including keywords, ads, audiences, and conversions." },
        { title: "Competitive Analysis", desc: "Research competitor ad strategies, messaging, landing pages, and estimated budgets." },
        { title: "Performance Deep Dive", desc: "Identify top performers and wasted spend across campaigns, ad groups, and keywords." },
        { title: "Audit Report", desc: "Deliver a detailed audit report with findings, benchmarks, and prioritized recommendations." },
        { title: "Strategy Roadmap", desc: "Create a custom 90-day PPC optimization roadmap with projected impact and KPIs." },
      ],
    },
    tools: ["Google Ads", "Microsoft Advertising", "SEMrush", "SpyFu", "Google Analytics 4", "Optmyzr", "Google Looker Studio"],
    deliverables: [
      "50+ point PPC audit report",
      "Wasted spend analysis",
      "Competitor ad intelligence report",
      "Quality Score improvement plan",
      "Conversion tracking verification",
      "90-day PPC strategy roadmap",
      "Budget allocation recommendations",
    ],
    pricing: { range: "One-time audit from $500", note: "Ongoing strategy consulting available from $750/month." },
    faqs: [
      { q: "How long does a PPC audit take?", a: "A comprehensive audit typically takes 5-7 business days. We analyze every aspect of your account including historical data, competitor landscape, and conversion tracking accuracy." },
      { q: "Do I need to give you access to my ad accounts?", a: "Yes, we'll need read-only access to your Google Ads and/or Meta Ads accounts. Your data is kept strictly confidential and we can sign an NDA if required." },
      { q: "What if I'm not currently running PPC campaigns?", a: "We also offer market opportunity assessments for businesses considering PPC. We'll analyze your competitors, estimate costs, and build a launch strategy from scratch." },
      { q: "Can you audit Microsoft (Bing) Ads too?", a: "Yes, we audit Google Ads, Microsoft Advertising (Bing), Meta Ads, and LinkedIn Ads. Multi-platform audits give you the complete picture of your paid media performance." },
    ],
    relatedServices: ["google-ads-management", "remarketing-retargeting", "local-search-ads"],
    relatedSeoServices: ["seo-audit", "seo-consulting", "keyword-research"],
    relatedTools: [
      { label: "SEO ROI Calculator", href: "/tools/seo-roi-calculator" },
      { label: "CPC Savings Calculator", href: "/tools/cpc-savings-calculator" },
    ],
  },

  /* ──────────────── Local Search Ads ──────────────── */
  {
    slug: "local-search-ads",
    title: "Local Search Ads",
    metaTitle: "Local Search Ads | Google Local Services, Maps Ads & Location Targeting",
    metaDescription:
      "Dominate local search results with targeted PPC campaigns. Google Local Services Ads, Maps advertising, and geo-targeted campaigns for local businesses.",
    icon: MapPinned,
    heroTitle: "Local Search",
    heroHighlight: "Ads",
    heroDescription:
      "Put your business at the top of local search results. From Google Local Services Ads to geo-targeted campaigns, we drive local customers straight to your door.",
    whatIs: {
      title: "What are Local Search Ads?",
      description:
        "Local search ads are geo-targeted PPC campaigns designed to capture customers searching for products and services in a specific area. They include Google Local Services Ads, Maps ads, and location-targeted search campaigns.",
      points: [
        "Google Local Services Ads (LSA) for service businesses",
        "Google Maps advertising for local visibility",
        "Geo-targeted search campaigns with radius targeting",
        "Location extension and call-only ad formats",
        "Local inventory ads for retail businesses",
        "Neighborhood and zip code level targeting",
      ],
    },
    process: {
      title: "Our Local Ads Process",
      steps: [
        { title: "Local Market Analysis", desc: "Research local competition, search volume, and cost-per-click data for your service area." },
        { title: "Campaign Setup", desc: "Build geo-targeted campaigns with location extensions, call tracking, and local ad formats." },
        { title: "LSA Enrollment", desc: "Set up and optimize Google Local Services Ads including background check and Google Guarantee badge." },
        { title: "Bid Optimization", desc: "Optimize bids by location, time of day, and device to capture the highest-intent local searches." },
        { title: "Lead Tracking", desc: "Track calls, form submissions, and store visits to measure true local campaign ROI." },
      ],
    },
    tools: ["Google Ads", "Google Local Services", "Google Business Profile", "CallRail", "Google Analytics 4", "BrightLocal"],
    deliverables: [
      "Local market & competitor analysis",
      "Geo-targeted campaign setup",
      "Google Local Services Ads management",
      "Call tracking implementation",
      "Location extension setup",
      "Monthly local performance reports",
      "Review generation integration",
    ],
    pricing: { range: "Starting at $600/month + ad spend", note: "Ideal for service businesses, retailers, and multi-location brands." },
    faqs: [
      { q: "What are Google Local Services Ads?", a: "LSAs appear at the very top of Google search results with a 'Google Guaranteed' or 'Google Screened' badge. You only pay per lead (not per click), making them highly cost-effective for service businesses." },
      { q: "How small of an area can you target?", a: "We can target down to specific zip codes, neighborhoods, or a custom radius around your business location. This ensures your budget is spent only on potential customers in your service area." },
      { q: "Can local PPC work alongside local SEO?", a: "Absolutely — they're complementary. PPC delivers immediate visibility while SEO builds long-term organic presence. Together, they dominate both paid and organic local search results." },
      { q: "Do you integrate with Google Business Profile?", a: "Yes! We connect your Google Ads with your Google Business Profile for location extensions, Maps ads, and unified local presence across Google's ecosystem." },
    ],
    relatedServices: ["google-ads-management", "social-media-ads", "ppc-audit-strategy"],
    relatedSeoServices: ["local-seo", "google-business-profile"],
    relatedTools: [
      { label: "Google Business Profile Audit", href: "/tools/google-business-profile-audit" },
      { label: "Local Keyword Generator", href: "/tools/local-keyword-generator" },
    ],
  },
];

export function getPpcServiceBySlug(slug: string): PpcServiceData | undefined {
  return ppcServicesData.find((s) => s.slug === slug);
}
