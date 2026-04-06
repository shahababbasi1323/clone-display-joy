import { Bot, Search, Globe, ClipboardCheck, Zap, MapPin, Link2, PenTool, Wrench, ShoppingBag, LinkIcon, FileText, Target, BarChart3, Linkedin, GraduationCap, Layers } from "lucide-react";

export type ResourceCategory = "All" | "AI Prompts" | "Checklists" | "Strategy Guides" | "Templates" | "Career";

export interface Resource {
  id: number;
  slug: string;
  title: string;
  category: ResourceCategory;
  isNew?: boolean;
  description: string;
  highlights: string[];
  statsBadge: string;
  emailTag: string;
  downloadUrl: string;
  icon: typeof Bot;
  whatsInside: string[];
}

export const resources: Resource[] = [
  {
    id: 1, slug: "seo-prompt-pack", title: "SEO Prompt Pack (20 ChatGPT Prompts)", category: "AI Prompts",
    description: "20 copy-paste ChatGPT prompts that automate keyword research, content writing, technical audits, and competitor analysis. Save 15+ hours per week.",
    highlights: ["Keyword research prompts", "Content brief generator", "Technical audit prompts"],
    statsBadge: "20 Prompts | 15hrs Saved | 500+ Downloads", emailTag: "prompt-pack",
    downloadUrl: "https://drive.google.com/file/d/10V3Qk1kB1sLNYHlLQRvBJoy3HB5s4yM3/view",
    icon: Bot,
    whatsInside: ["Keyword research prompts", "Content brief generator prompts", "Technical SEO audit prompts", "Competitor analysis prompts", "Meta title/description writer prompts"],
  },
  {
    id: 2, slug: "google-operators", title: "Google Search Operators Cheat Sheet", category: "AI Prompts",
    description: "30+ Google search operators to spy on competitors, find link building opportunities, discover indexing issues, and uncover hidden content gaps.",
    highlights: ["30+ operators", "Spy on competitors", "Find link gaps"],
    statsBadge: "30+ Operators | Spy Competitors | Find Gaps", emailTag: "operators",
    downloadUrl: "https://drive.google.com/file/d/12NniaUGo9NCfW8SmRWY9-ry89x38KjFA/view",
    icon: Search,
    whatsInside: ["Site: operator for indexing checks", "Intitle/inurl for competitor research", "Link building operators", "Content gap finding operators", "Advanced combination formulas"],
  },
  {
    id: 3, slug: "geo-aeo-guide", title: "GEO & AEO Optimization Guide", category: "AI Prompts",
    description: "Complete guide to getting your business recommended by ChatGPT, Perplexity, Gemini & Claude. The future of search is AI - get visible now.",
    highlights: ["AI search ready", "10-step process", "Future-proof"],
    statsBadge: "AI Search Ready | 10-Step Process | Future-Proof", emailTag: "geo-guide",
    downloadUrl: "https://drive.google.com/file/d/13xL7x3yYw1r4xdKiVpNYxlV5JbNE7HHF/view",
    icon: Globe,
    whatsInside: ["What is GEO vs AEO vs traditional SEO", "How AI search engines pick brands", "10-step optimization process", "Content structure for AI visibility", "Tracking your AI search presence"],
  },
  {
    id: 4, slug: "technical-seo-checklist", title: "Technical SEO Checklist (100+ Points)", category: "Checklists",
    description: "100+ point technical SEO checklist covering crawlability, indexing, site speed, Core Web Vitals, mobile, structured data, and security.",
    highlights: ["100+ checks", "Pro-level", "Client-ready"],
    statsBadge: "100+ Checks | Pro-Level | Client-Ready", emailTag: "tech-checklist",
    downloadUrl: "https://drive.google.com/file/d/1ebq3oASfxN4upphJ-vwcX0_iEfr4Uy71/view",
    icon: ClipboardCheck,
    whatsInside: ["Crawling & indexing checks", "Site speed & Core Web Vitals", "Mobile-friendliness", "Structured data / schema", "Security (HTTPS, headers)", "URL structure & redirects"],
  },
  {
    id: 5, slug: "page-speed-checklist", title: "Page Speed Optimization Checklist", category: "Checklists",
    description: "Step-by-step checklist to fix slow websites. Covers image optimization, caching, CSS/JS minification, lazy loading, and Core Web Vitals.",
    highlights: ["Score 90+", "Step-by-step", "CWV ready"],
    statsBadge: "Speed Score 90+ | Step-by-Step | CWV Ready", emailTag: "speed-checklist",
    downloadUrl: "https://drive.google.com/file/d/1NQV21p2ZAPmm9Q8GnjQdr7S10h5u897Z/view",
    icon: Zap,
    whatsInside: ["Image optimization (WebP, compression, lazy load)", "CSS/JS minification & deferral", "Browser caching setup", "Server response time fixes", "Core Web Vitals fixes", "WordPress-specific speed tips"],
  },
  {
    id: 6, slug: "gmb-audit-checklist", title: "Google Business Profile Audit Checklist", category: "Checklists",
    description: "Complete Google Business Profile optimization checklist. 40+ items covering NAP, categories, photos, reviews, posts, Q&A, and local ranking signals.",
    highlights: ["40+ items", "Local SEO", "Map Pack ready"],
    statsBadge: "40+ Items | Local SEO | Map Pack Ready", emailTag: "gmb-checklist",
    downloadUrl: "https://drive.google.com/file/d/1NQV21p2ZAPmm9Q8GnjQdr7S10h5u897Z/view",
    icon: MapPin,
    whatsInside: ["Profile completeness audit", "Category optimization", "Photo & video strategy", "Review generation tactics", "Google Posts strategy", "Local citation consistency"],
  },
  {
    id: 7, slug: "link-building-toolkit", title: "Link Building Toolkit", category: "Strategy Guides",
    description: "15 white-hat link building strategies with exact outreach templates, email scripts, and a list of 50+ free directories. Build authority without spending a dollar.",
    highlights: ["15 strategies", "50+ directories", "Email templates"],
    statsBadge: "15 Strategies | 50+ Directories | Email Templates", emailTag: "link-toolkit",
    downloadUrl: "https://drive.google.com/file/d/16VjZrsPOfl7KEMTfM4IL7MqG3t4Mrbld/view",
    icon: Link2,
    whatsInside: ["Guest posting strategy + pitch templates", "Broken link building method", "HARO/Connectively responses", "Resource page link building", "Digital PR techniques", "50+ free directory submissions", "Outreach email templates"],
  },
  {
    id: 8, slug: "content-writing-prompts", title: "Content Writing Prompts for SEO", category: "Strategy Guides",
    description: "25 AI prompts specifically for writing SEO-optimized blog posts, product descriptions, landing pages, and meta content that ranks AND converts.",
    highlights: ["25 prompts", "Blog + product", "Rank & convert"],
    statsBadge: "25 Prompts | Blog + Product | Rank & Convert", emailTag: "content-prompts",
    downloadUrl: "https://drive.google.com/file/d/1tOLQm1MNJzWn4wqS1uQmdVnvuHCrMil2/view",
    icon: PenTool,
    whatsInside: ["Blog post outline generator", "SEO-optimized intro writer", "Product description prompts", "FAQ section generator", "Meta title/description writer", "Content gap filler prompts", "Headline analyzer prompts"],
  },
  {
    id: 9, slug: "free-seo-tools", title: "$0 SEO Tool Stack", category: "Strategy Guides",
    description: "Complete SEO toolkit using ONLY free tools. Covers keyword research, technical audits, rank tracking, backlink analysis, content optimization - all at $0/month.",
    highlights: ["30+ tools", "$0/month", "Full stack"],
    statsBadge: "30+ Tools | $0/Month | Full Stack", emailTag: "tool-stack",
    downloadUrl: "https://drive.google.com/file/d/1EFLQo0kK0ClfkcOk0KliUaJ6UsEviEfC/view",
    icon: Wrench,
    whatsInside: ["Free keyword research tools", "Free technical audit tools", "Free rank tracking solutions", "Free backlink analyzers", "Free content optimization tools", "Free reporting dashboards", "Tool comparison tables"],
  },
  {
    id: 10, slug: "shopify-seo-guide", title: "Shopify SEO Complete Guide", category: "Strategy Guides",
    description: "Fix every Shopify SEO issue - duplicate content, URL structure, page speed, product schema, collection pages, and Shopify-specific technical problems.",
    highlights: ["Shopify specific", "Fix all issues", "Product SEO"],
    statsBadge: "Shopify Specific | Fix All Issues | Product SEO", emailTag: "shopify-guide",
    downloadUrl: "https://drive.google.com/file/d/1S1rlE6og8wbREA64Q2Ed02Ebc3yhgD_G/view",
    icon: ShoppingBag,
    whatsInside: ["Shopify URL structure fixes", "Duplicate content solutions", "Product page optimization", "Collection page SEO", "Shopify speed optimization", "App recommendations", "Schema markup for products"],
  },
  {
    id: 11, slug: "internal-linking-guide", title: "Internal Linking Strategy Guide", category: "Strategy Guides", isNew: true,
    description: "21-page guide with 10 AI prompts to find every internal linking opportunity, 30-point checklist, anchor text strategy, and a real case study showing 23% traffic increase.",
    highlights: ["10 AI prompts", "30-point checklist", "21 pages"],
    statsBadge: "10 AI Prompts | 30-Point Checklist | 21 Pages", emailTag: "interlink-guide",
    downloadUrl: "https://drive.google.com/file/d/168Sw_s1wJ4X5n4i1a54Y8ZNUfH5yWVOu/view",
    icon: LinkIcon,
    whatsInside: ["10 copy-paste AI prompts for linking audit", "7-step internal linking audit process", "5 types of internal links explained", "Anchor text do's and don'ts", "30-point monthly checklist", "Case study: 85 links → 23% traffic increase"],
  },
  {
    id: 12, slug: "seo-proposal-template", title: "SEO Proposal Template", category: "Templates",
    description: "Professional fill-in-the-blank SEO proposal template. Includes executive summary, audit findings, strategy, pricing packages, timeline, and expected results.",
    highlights: ["Client-ready", "3 pricing tiers", "Win proposals"],
    statsBadge: "Client-Ready | 3 Pricing Tiers | Win Proposals", emailTag: "proposal-template",
    downloadUrl: "https://drive.google.com/file/d/1cSipzJgWUuo_yDTuBKV_iJtN0bN_aRu3/view",
    icon: FileText,
    whatsInside: ["Cover page template", "Executive summary section", "Current situation analysis", "3-tier pricing packages", "Expected results with timeline", "Why choose me section", "Next steps process"],
  },
  {
    id: 13, slug: "competitor-analysis-template", title: "Competitor Analysis Template", category: "Templates",
    description: "Systematic framework to spy on any competitor. Includes AI prompts to find their keywords, backlinks, content gaps, and technical advantages.",
    highlights: ["Spy framework", "AI prompts", "Action plan"],
    statsBadge: "Spy Framework | AI Prompts | Action Plan", emailTag: "competitor-template",
    downloadUrl: "https://drive.google.com/file/d/1UjEp98QPL01aOVw7ta4sY5DBspb2Bc8y/view",
    icon: Target,
    whatsInside: ["ChatGPT prompt to identify top 5 competitors", "Technical comparison table (11 metrics)", "Content gap analysis prompt", "Backlink gap analysis prompt", "Keyword steal strategy", "3-month action plan"],
  },
  {
    id: 14, slug: "monthly-report-template", title: "Monthly SEO Report Template", category: "Templates",
    description: "Professional monthly SEO report template for client reporting. Traffic overview, keyword rankings, work completed, next month plan, and ROI summary.",
    highlights: ["Pro agency look", "6 sections", "ROI focused"],
    statsBadge: "Pro Agency Look | 6 Sections | ROI Focused", emailTag: "report-template",
    downloadUrl: "https://drive.google.com/file/d/1whsxJmSk-fNNAGFA_tj7FR6P4VksQrld/view",
    icon: BarChart3,
    whatsInside: ["Executive summary section", "Traffic overview (10 key metrics)", "Keyword ranking movements table", "Work completed breakdown", "Next month priorities & calendar", "ROI summary with cost per lead"],
  },
  {
    id: 15, slug: "linkedin-templates", title: "LinkedIn Post Templates for SEO Experts", category: "Career",
    description: "30 fill-in-the-blank LinkedIn post templates for SEO professionals. Hooks, frameworks, carousels, and engagement formulas that get reach and build your brand.",
    highlights: ["30 templates", "Proven hooks", "Build your brand"],
    statsBadge: "30 Templates | Proven Hooks | Build Your Brand", emailTag: "linkedin-templates",
    downloadUrl: "https://drive.google.com/file/d/13Uq4d1wtckPoy4V1snb6fWs5GRxIEZDX/view",
    icon: Linkedin,
    whatsInside: ["10 proven hook formulas", "Story framework templates", "Listicle templates", "Case study post templates", "Carousel content frameworks", "Hashtag strategy", "Best posting times"],
  },
  {
    id: 16, slug: "seo-career-roadmap", title: "SEO Career Roadmap", category: "Career",
    description: "Complete roadmap from SEO beginner to expert. Month-by-month learning plan, skills to master, certifications to get, salary expectations, and how to land your first SEO job.",
    highlights: ["12-month plan", "Beginner to expert", "Career guide"],
    statsBadge: "12-Month Plan | Beginner to Expert | Career Guide", emailTag: "career-roadmap",
    downloadUrl: "https://drive.google.com/file/d/1izJUa7YjIjJwNsW6eyYF6Ox3wCjwsee_/view",
    icon: GraduationCap,
    whatsInside: ["Month 1-3: Foundation skills", "Month 4-6: Intermediate skills", "Month 7-9: Advanced techniques", "Month 10-12: Specialization", "Certification recommendations", "Portfolio building guide", "Salary benchmarks by level"],
  },
  {
    id: 17, slug: "keyword-clustering-guide", title: "Keyword Clustering Guide", category: "AI Prompts", isNew: true,
    description: "One AI prompt to cluster any keyword list by search intent, semantic relevance & funnel stage. Includes a reference table for 5 keyword categories and a complete clustering framework.",
    highlights: ["1 AI prompt", "3 clustering criteria", "5 keyword categories"],
    statsBadge: "1 Prompt | 3 Criteria | 5 Categories", emailTag: "keyword-clustering",
    downloadUrl: "https://drive.google.com/file/d/1M-bRP3zCC5nHTttLeSDz9mEDzH8Gi4fx/view",
    icon: Layers,
    whatsInside: ["Full AI prompt for keyword clustering", "3 clustering criteria breakdown", "Search intent classification", "Semantic relevance grouping", "Funnel stage mapping", "Reference table for 5 keyword categories", "One-prompt content strategy approach"],
  },
];

export const categories: ResourceCategory[] = ["All", "AI Prompts", "Checklists", "Strategy Guides", "Templates", "Career"];

export const faqs = [
  { q: "Are these really free?", a: "Yes, 100% free. I just ask for your email so I can send the PDF and notify you when I create new resources." },
  { q: "What format are the resources in?", a: "All resources are professional PDF files that you can view on any device, print, or save for reference." },
  { q: "Can I share these with my team?", a: "Absolutely! Share the download page link (shahababbasi.com/free-seo-resources) with anyone. The more people benefit, the better." },
  { q: "Will you spam my email?", a: "Never. You'll receive the PDF + occasional SEO tips (1-2 per week max). You can unsubscribe with one click anytime." },
  { q: "Do you have resources in other languages?", a: "Currently all resources are in English. Arabic and other language versions are coming soon." },
  { q: "How often do you add new resources?", a: "I add 1-2 new resources every month. Subscribe to get notified when new ones drop." },
];
