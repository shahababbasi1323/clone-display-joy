import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search, Globe, Zap, Link2, ShoppingCart, Bot,
  ArrowRight, ChevronDown, Star, Users, TrendingUp, Award,
  Wrench, Building2, Stethoscope, Scale, ShoppingBag, GraduationCap,
  Utensils, Home as HomeIcon, Briefcase, FileText, Calendar, BookOpen,
  MapPin, Megaphone, Share2, RefreshCw, CheckCircle2, Target, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import heroBg from "@/assets/hero-bg.jpg";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { locationsData } from "@/data/locationsData";

const stats = [
  { value: 50, suffix: "+", label: "Businesses Scaled Globally", icon: Users },
  { value: 5, suffix: "+", label: "Countries & Markets Served", icon: Globe },
  { value: 200, suffix: "+", label: "Keywords Ranked on Page 1", icon: TrendingUp },
  { value: 500, suffix: "%", label: "Avg Client Revenue Growth", icon: Award },
];

const services = [
  { icon: Search, title: "Technical SEO Audit & Optimization", slug: "technical-seo", desc: "Comprehensive website audits, Core Web Vitals improvements, crawlability fixes & site architecture optimization to build a bulletproof search foundation." },
  { icon: Globe, title: "Local SEO & International SEO", slug: "local-seo", desc: "Dominate Google Maps, local search packs & international markets with geo-targeted keyword strategies that attract high-intent local customers." },
  { icon: Zap, title: "On-Page SEO & Content Marketing", slug: "on-page-seo", desc: "Keyword-optimized landing pages, blog content strategy, meta tag optimization & strategic internal linking that transforms your website into a 24/7 lead generation engine." },
  { icon: Link2, title: "Link Building & Digital PR", slug: "link-building", desc: "Earn high-authority backlinks through white-hat outreach, guest posting campaigns & digital PR to skyrocket your domain authority and search rankings." },
  { icon: ShoppingCart, title: "E-commerce SEO", slug: "ecommerce-seo", desc: "Product page optimization, rich snippet markup, category structure improvements & conversion rate optimization for Shopify, WooCommerce & custom stores." },
  { icon: Bot, title: "GEO & AI Search Optimization", slug: "geo-optimization", desc: "Get your brand cited by ChatGPT, Perplexity, Google AI Overviews & next-gen answer engines — the future of search visibility is here." },
];

const ppcServices = [
  { icon: Megaphone, title: "Google Ads Management", desc: "Search, Display, Shopping & YouTube ad campaigns expertly managed to maximize your return on ad spend (ROAS) and lower cost-per-acquisition.", href: "/ppc/google-ads-management" },
  { icon: Share2, title: "Social Media Advertising", desc: "High-converting ad campaigns across Facebook, Instagram, LinkedIn & TikTok that drive brand awareness, engagement & measurable sales.", href: "/ppc/social-media-ads" },
  { icon: RefreshCw, title: "Remarketing & Retargeting", desc: "Re-engage lost visitors with personalized display & social ads that convert abandoned sessions into paying customers at 3x lower cost.", href: "/ppc/remarketing-retargeting" },
];

const processSteps = [
  { icon: Search, title: "1. Free Website Audit", desc: "We analyze your current search rankings, technical health, backlink profile, and competitor landscape — completely free, no strings attached." },
  { icon: Target, title: "2. Custom Growth Strategy", desc: "You receive a data-driven SEO roadmap with prioritized action items, target keywords, and projected ROI tailored to your industry and market." },
  { icon: Zap, title: "3. Expert Implementation", desc: "Our team executes on-page optimization, content creation, link building, and technical fixes — so you can focus on running your business." },
  { icon: BarChart3, title: "4. Transparent Reporting", desc: "Monthly performance reports with keyword rankings, organic traffic growth, lead attribution, and revenue impact — no vanity metrics, just results." },
];

const caseStudies = [
  {
    title: "E-commerce Store: 400% Revenue Growth in 6 Months",
    industry: "E-commerce",
    result: "+400% organic traffic",
    desc: "Transformed a struggling online store from invisible to dominant — ranking on page 1 for 50+ high-value buyer-intent keywords through a full-funnel SEO & content marketing strategy.",
    metrics: { traffic: "+400%", keywords: "50+", revenue: "+280%" },
  },
  {
    title: "Law Firm: 300% More Qualified Client Leads",
    industry: "Legal",
    result: "+300% local leads",
    desc: "Dominated local search results and Google Maps through Google Business Profile optimization, strategic citation building, and conversion-focused landing page design.",
    metrics: { traffic: "+250%", keywords: "30+", revenue: "+300%" },
  },
  {
    title: "SaaS Startup: Page 1 Authority in Competitive Niche",
    industry: "Technology",
    result: "Page 1 for 25 keywords",
    desc: "Built topical authority for a B2B SaaS company through pillar content strategy, technical SEO overhaul, AI search optimization & strategic link acquisition.",
    metrics: { traffic: "+350%", keywords: "25+", revenue: "+200%" },
  },
];

const testimonials = [
  { name: "Ahmed R.", company: "Tech Startup, UAE", text: "Shahab helped us increase organic traffic by 400% in just 6 months. Our online revenue has never been higher. The ROI from SEO absolutely dwarfs what we spent on paid ads.", rating: 5 },
  { name: "Sarah M.", company: "E-commerce Brand, UK", text: "Our Shopify store went from invisible to page 1 for our main keywords. The e-commerce SEO strategy was a total game-changer for our business growth.", rating: 5 },
  { name: "Marcus T.", company: "Law Firm, USA", text: "Best digital marketing investment we've ever made. Qualified leads from organic search increased by 300% within the first quarter. Absolutely recommend.", rating: 5 },
  { name: "Fatima K.", company: "Healthcare Clinic, Saudi Arabia", text: "Patient inquiries tripled after we started working with Shahab. Professional, data-driven approach to growing our online presence and local search visibility.", rating: 5 },
  { name: "James O.", company: "SaaS Company, Canada", text: "The AI search optimization and GEO strategy put us ahead of every competitor. We're now getting cited by ChatGPT and Perplexity — absolute game changer.", rating: 5 },
];

// Group English locations by country for homepage display
const englishLocations = locationsData.filter(l => l.lang === "en");
const locationsByCountry = englishLocations.reduce<Record<string, typeof locationsData>>((acc, loc) => {
  const key = loc.country;
  if (!acc[key]) acc[key] = [];
  acc[key].push(loc);
  return acc;
}, {});

const blogPosts = [
  {
    title: "How to Rank #1 on Google in 2026: The Complete SEO Guide",
    slug: "seo-strategy-2026",
    excerpt: "The definitive guide to search engine optimization — covering keyword research, on-page SEO, technical audits, link building, and AI search optimization for sustainable business growth.",
    date: "Feb 10, 2026",
    category: "SEO Strategy",
  },
  {
    title: "10 Digital Marketing Mistakes Killing Your Online Visibility",
    slug: "on-page-seo-guide",
    excerpt: "Discover the most common SEO and content marketing errors that prevent businesses from ranking — and the proven fixes to boost your organic search performance fast.",
    date: "Feb 5, 2026",
    category: "Digital Marketing",
  },
  {
    title: "AI Search Is Here: How to Get Found by ChatGPT & Google AI Overviews",
    slug: "ai-seo-future",
    excerpt: "A practical guide to Generative Engine Optimization (GEO) — the new frontier of online visibility, brand authority, and high-intent lead generation in the age of AI.",
    date: "Jan 28, 2026",
    category: "AI & SEO",
  },
];

const faqs = [
  { q: "How can SEO help me grow my business online?", a: "Search engine optimization drives qualified organic traffic to your website — people actively searching for your products or services. It's the highest-ROI digital marketing channel, delivering compounding growth without ongoing ad spend. Businesses that invest in SEO consistently see 5-10x better returns compared to paid advertising alone." },
  { q: "What digital marketing services do you offer?", a: "We offer a full suite of digital marketing services including technical SEO audits, on-page optimization, content marketing & copywriting, link building & digital PR, local SEO, international SEO, e-commerce SEO, PPC management (Google Ads, social media ads), and AI search optimization (GEO). Explore our complete services to find the right fit." },
  { q: "How long does it take to see results from SEO?", a: "Most businesses see meaningful ranking improvements within 3-6 months, though some technical fixes and quick wins can show impact within weeks. SEO is a long-term investment that delivers compounding returns — the longer you invest, the greater your competitive advantage in organic search." },
  { q: "Do you work with businesses worldwide?", a: "Yes! We serve businesses across 40+ countries including Pakistan, UAE, Saudi Arabia, UK, USA, Canada, Germany, France, and more. All services are delivered remotely with weekly reporting, transparent communication, and dedicated account management. Check our locations page for your city." },
  { q: "What's the difference between SEO and PPC advertising?", a: "PPC (pay-per-click) stops generating traffic the moment you stop paying. SEO builds lasting organic visibility — once you rank on page 1, you continue getting free, high-intent traffic 24/7. Most successful businesses use both: PPC for immediate results and SEO for sustainable, long-term growth." },
  { q: "What's included in the free SEO audit?", a: "Our comprehensive free audit covers your website's technical health (speed, mobile-friendliness, crawlability), on-page SEO score, backlink profile analysis, competitor benchmarking, keyword gap analysis, and content opportunities — delivered with a prioritized action plan to start growing your organic search visibility immediately." },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useSeoMeta({
    title: "Shahab Abbasi — #1 SEO Expert & Digital Marketing Strategist | Grow Online Fast",
    description: "Grow your business online with proven SEO, PPC & digital marketing strategies. Rank #1 on Google, drive organic traffic, generate more leads & 5x your revenue. Free SEO audit — 50+ businesses scaled worldwide.",
    canonical: "https://shahababbasi.com/",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Digital marketing and SEO services worldwide" className="w-full h-full object-cover opacity-20 dark:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background dark:from-background/60 dark:via-background/80 dark:to-background" />
        </div>
        <div className="container mx-auto relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
              🚀 Trusted by 50+ Businesses Worldwide — SEO & Digital Growth Expert
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Rank #1 on Google, <span className="text-gradient">5x Your Revenue</span> &{" "}
              <span className="text-accent">Dominate Your Market</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Stop losing customers to competitors who rank higher. I deliver <strong>proven SEO strategies</strong>, high-converting <Link to="/ppc" className="text-primary hover:underline">PPC campaigns</Link>, and data-driven <Link to="/services" className="text-primary hover:underline">digital marketing</Link> that generates consistent organic traffic, qualified leads, and measurable revenue growth — without wasting budget on ads that don't convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary text-base px-8">
                  Get My Free Growth Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Explore All Services
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> No Long-Term Contracts</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> 100% Transparent Reporting</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Results in 90 Days</span>
            </div>
          </motion.div>
        </div>
        <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown className="h-6 w-6" />
        </a>
      </section>

      {/* Stats */}
      <section id="stats" className="section-padding border-y border-border bg-card/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEO & Digital Marketing Services That <span className="text-gradient">Drive Revenue</span>
            </h2>
            <p className="text-muted-foreground">
              From <Link to="/services/technical-seo" className="text-primary hover:underline">technical SEO audits</Link> to{" "}
              <Link to="/services/geo-optimization" className="text-primary hover:underline">AI search optimization</Link> — everything your business needs to get found online, attract qualified leads, and convert visitors into paying customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all group block h-full"
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  <span className="text-xs text-primary flex items-center gap-1 mt-3 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All SEO Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* PPC Services */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                PPC & Paid <span className="text-gradient">Advertising</span> That Converts
              </h2>
              <p className="text-muted-foreground">
                Need immediate results while your SEO compounds? Our <Link to="/ppc" className="text-primary hover:underline">pay-per-click management services</Link> drive instant, measurable traffic and conversions across Google, Facebook, Instagram & LinkedIn.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ppcServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className="glass rounded-xl p-6 hover:border-primary/30 transition-all group block h-full"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                    <span className="text-xs text-primary flex items-center gap-1 mt-3 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/ppc">
                <Button variant="outline" size="lg">
                  All PPC Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="text-gradient">Grow Your Business</span> Online
            </h2>
            <p className="text-muted-foreground">
              A proven, transparent 4-step process that's helped 50+ businesses across 5+ countries achieve page 1 rankings and sustainable revenue growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass rounded-xl p-6 text-center relative"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary">
                Book Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <Wrench className="h-10 w-10 mx-auto text-accent mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">75+ Free SEO & Marketing Tools</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-4">
            Analyze your website's performance, audit your on-page SEO, research keywords, generate meta tags, calculate PPC budgets, and uncover growth opportunities — completely free.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground mb-8">
            <Link to="/tools/word-counter" className="glass rounded-lg px-3 py-1.5 hover:text-primary transition-colors">Word Counter</Link>
            <Link to="/tools/meta-tag-generator" className="glass rounded-lg px-3 py-1.5 hover:text-primary transition-colors">Meta Tag Generator</Link>
            <Link to="/tools/serp-preview" className="glass rounded-lg px-3 py-1.5 hover:text-primary transition-colors">SERP Preview</Link>
            <Link to="/tools/google-ads-budget-calculator" className="glass rounded-lg px-3 py-1.5 hover:text-primary transition-colors">Google Ads Budget Calculator</Link>
            <Link to="/tools/roas-calculator" className="glass rounded-lg px-3 py-1.5 hover:text-primary transition-colors">ROAS Calculator</Link>
          </div>
          <Link to="/tools">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Explore All Free Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results: <span className="text-gradient">Real Business Growth</span>
            </h2>
            <p className="text-muted-foreground">See how businesses like yours used our SEO & digital marketing services to generate more organic traffic, qualified leads, and measurable revenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl overflow-hidden group hover:border-primary/30 transition-all"
              >
                <div className="p-1.5">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.industry}</span>
                    <p className="text-lg font-bold mt-2">{cs.result}</p>
                  </div>
                </div>
                <div className="p-6 pt-2">
                  <h3 className="font-semibold mb-2">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cs.desc}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(cs.metrics).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <p className="text-sm font-bold text-primary">{val}</p>
                        <p className="text-xs text-muted-foreground capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our Clients <span className="text-gradient">Say About Us</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                "{testimonials[activeTestimonial].text}"
              </p>
              <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].company}</p>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeTestimonial ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline" size="sm">
                Read All Client Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete SEO & Digital Marketing <span className="text-gradient">Service Catalog</span>
            </h2>
            <p className="text-muted-foreground">From technical audits and keyword research to content marketing, link building & AI search optimization — explore every service designed to grow your online presence and revenue.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {servicesData.slice(0, 10).map((svc) => {
              const SvcIcon = svc.icon;
              return (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-all group"
                >
                  <SvcIcon className="h-6 w-6 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-medium leading-tight">{svc.title}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="sm">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Industries */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific SEO <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground">
              We build tailored search engine optimization strategies for every industry — because each niche has unique search behavior, buyer intent, and competitive dynamics. Explore your <Link to="/industries" className="text-primary hover:underline">industry SEO solutions</Link>.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {industriesData.slice(0, 15).map((ind) => {
              const IndIcon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-all group"
                >
                  <IndIcon className="h-6 w-6 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-medium leading-tight">{ind.shortTitle}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/industries">
              <Button variant="outline" size="sm">View All Industries <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Locations */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Marketing Services <span className="text-gradient">Worldwide</span>
            </h2>
            <p className="text-muted-foreground">
              Serving businesses across 40+ countries with localized SEO, PPC management, web design & content marketing strategies tailored to each market's search behavior and competition.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(locationsByCountry).slice(0, 6).map(([country, locs]) => (
              <div key={country}>
                <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {country}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {locs.slice(0, 8).map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/${loc.slug}`}
                      className="glass rounded-lg px-3 py-2 text-xs font-medium hover:border-primary/30 hover:text-primary transition-all"
                    >
                      {loc.city}
                    </Link>
                  ))}
                  {locs.length > 8 && (
                    <span className="glass rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground">+{locs.length - 8} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {Object.keys(locationsByCountry).length > 6 && (
            <p className="text-sm text-muted-foreground mt-4 text-center">
              +{Object.keys(locationsByCountry).length - 6} more countries
            </p>
          )}
          <div className="text-center mt-10">
            <Link to="/locations">
              <Button variant="outline" size="sm">View All Locations <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest SEO & Marketing <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-muted-foreground">Actionable search engine optimization tips, digital marketing strategies, and industry insights to help you grow your business online faster. Visit our <Link to="/blog" className="text-primary hover:underline">blog</Link> for more.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all group block">
                  <div className="p-1.5">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg p-6 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-primary/50" />
                    </div>
                  </div>
                  <div className="p-6 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <span className="text-xs text-primary flex items-center gap-1 mt-3 group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button variant="outline" size="sm">
                Read All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
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
          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" size="sm">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Rank #1 & Scale Your Business</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get a free, comprehensive audit of your website's SEO health, keyword opportunities, competitor landscape & online marketing performance — with a clear, prioritized action plan to start generating more organic traffic, qualified leads & revenue within 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary text-base px-8">
                  Request Your Free Business Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="text-base px-8">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Shahab Abbasi SEO Services",
              url: "https://shahababbasi.com",
              telephone: "+923041316771",
              address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressRegion: "ICT", addressCountry: "PK" },
              priceRange: "$500 - $5000",
              openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "50", bestRating: "5" },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" }],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default Index;
