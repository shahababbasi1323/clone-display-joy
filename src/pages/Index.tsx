import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search, Globe, Zap, Link2, ShoppingCart, Bot,
  ArrowRight, ChevronDown, Star, Users, TrendingUp, Award,
  Wrench, Building2, Stethoscope, Scale, ShoppingBag, GraduationCap,
  Utensils, Home as HomeIcon, Briefcase, FileText, Calendar, BookOpen,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import heroBg from "@/assets/hero-bg.jpg";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { locationsData } from "@/data/locationsData";

const stats = [
  { value: 50, suffix: "+", label: "Businesses Scaled", icon: Users },
  { value: 5, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 200, suffix: "+", label: "Keywords on Page 1", icon: TrendingUp },
  { value: 500, suffix: "%", label: "Avg Revenue Growth", icon: Award },
];

const services = [
  { icon: Search, title: "Technical SEO", desc: "Comprehensive site audits, Core Web Vitals fixes & crawlability optimization to build a strong search foundation." },
  { icon: Globe, title: "Local & International SEO", desc: "Rank in Google Maps, local packs & global markets to attract customers wherever they are." },
  { icon: Zap, title: "On-Page & Content SEO", desc: "Keyword-optimized content, meta tags & internal linking that turns your website into a lead magnet." },
  { icon: Link2, title: "Link Building & Digital PR", desc: "Earn high-authority backlinks through outreach, guest posting & PR to boost domain authority." },
  { icon: ShoppingCart, title: "E-commerce SEO", desc: "Product page optimization, schema markup & conversion-focused strategies for Shopify, WooCommerce & more." },
  { icon: Bot, title: "GEO & AI Search Optimization", desc: "Get cited by ChatGPT, Perplexity, Google AI Overviews & other AI-powered search engines." },
];

const caseStudies = [
  {
    title: "E-commerce Store: 400% Revenue Growth",
    industry: "E-commerce",
    result: "+400% organic traffic in 6 months",
    desc: "Transformed a struggling online store from invisible to dominant — ranking on page 1 for 50+ competitive buyer-intent keywords through a full-funnel SEO strategy.",
    metrics: { traffic: "+400%", keywords: "50+", revenue: "+280%" },
  },
  {
    title: "Law Firm: 300% More Qualified Leads",
    industry: "Legal",
    result: "+300% local leads in 4 months",
    desc: "Dominated local search results through Google Business Profile optimization, strategic citation building, and conversion-focused landing pages.",
    metrics: { traffic: "+250%", keywords: "30+", revenue: "+300%" },
  },
  {
    title: "SaaS Startup: First Page Authority",
    industry: "Technology",
    result: "Page 1 for 25 target keywords",
    desc: "Built topical authority for a B2B SaaS company through pillar content strategy, technical SEO overhaul, and AI search optimization.",
    metrics: { traffic: "+350%", keywords: "25+", revenue: "+200%" },
  },
];

const testimonials = [
  { name: "Ahmed R.", company: "Tech Startup", text: "Shahab helped us increase organic traffic by 400% in 6 months. Our online revenue has never been higher.", rating: 5 },
  { name: "Sarah M.", company: "E-commerce Brand", text: "Our store went from invisible to page 1 for our main keywords. The ROI on SEO has been incredible.", rating: 5 },
  { name: "Marcus T.", company: "Law Firm", text: "Best marketing investment we've made. Qualified leads increased by 300% within the first quarter.", rating: 5 },
  { name: "Fatima K.", company: "Healthcare Clinic", text: "Our patient inquiries tripled. Professional, data-driven approach to growing our online presence.", rating: 5 },
  { name: "James O.", company: "SaaS Company", text: "The AI search optimization strategy put us ahead of every competitor. Absolute game changer for our business.", rating: 5 },
];

// Group locations by country for display
const locationsByCountry = locationsData.reduce<Record<string, typeof locationsData>>((acc, loc) => {
  const key = loc.country;
  if (!acc[key]) acc[key] = [];
  acc[key].push(loc);
  return acc;
}, {});

const blogPosts = [
  {
    title: "How to Grow Your Business Online with SEO in 2026",
    excerpt: "The definitive guide to using search engine optimization as your #1 channel for sustainable, long-term business growth.",
    date: "Feb 10, 2026",
    category: "Business Growth",
  },
  {
    title: "10 Digital Marketing Mistakes Killing Your Online Visibility",
    excerpt: "Discover the most common SEO and marketing errors that prevent businesses from ranking — and how to fix them fast.",
    date: "Feb 5, 2026",
    category: "Digital Marketing",
  },
  {
    title: "AI Search Is Here: How to Get Found by ChatGPT & Google AI",
    excerpt: "A practical guide to Generative Engine Optimization (GEO) — the new frontier of online visibility and lead generation.",
    date: "Jan 28, 2026",
    category: "AI & SEO",
  },
];

const faqs = [
  { q: "How can SEO help me grow my business online?", a: "SEO drives qualified organic traffic to your website — people actively searching for your products or services. It's the highest-ROI digital marketing channel, delivering compounding growth without ongoing ad spend." },
  { q: "What digital marketing services do you offer?", a: "I offer comprehensive SEO services including technical audits, on-page optimization, content strategy, link building, local SEO, e-commerce SEO, and AI search optimization (GEO) — everything you need to dominate search and grow online." },
  { q: "How long does it take to see results from SEO?", a: "Typically 3-6 months for significant results, though some improvements like technical fixes can show impact within weeks. SEO is a long-term investment that delivers compounding returns." },
  { q: "Do you work with businesses worldwide?", a: "Yes! I work with businesses across 5+ countries including Pakistan, UAE, UK, USA, Canada, and Europe. All services are delivered remotely with regular reporting and communication." },
  { q: "What's the difference between SEO and paid advertising?", a: "Paid ads stop generating traffic the moment you stop paying. SEO builds lasting organic visibility — once you rank, you continue getting free traffic 24/7. Most businesses see 5-10x better ROI from SEO compared to PPC." },
  { q: "What's included in the free SEO audit?", a: "A comprehensive analysis of your website's technical health, on-page SEO, backlink profile, competitor landscape, and keyword opportunities — with a prioritized action plan to start growing your online presence." },
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
    title: "Shahab Abbasi - SEO Expert | Grow Your Business Online | Digital Marketing",
    description: "Grow your business online with data-driven SEO & digital marketing strategies. Shahab Abbasi helps businesses rank #1 on Google, drive organic traffic, and generate more leads & revenue.",
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
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
              SEO Expert & Digital Growth Strategist
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Grow Your Business <span className="text-gradient">Online</span> &{" "}
              <span className="text-accent">Dominate Search</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Stop losing customers to competitors. I help businesses generate more organic traffic, leads, and revenue through proven SEO & digital marketing strategies — no ad spend required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary text-base px-8">
                  Get Your Free Growth Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Explore Services
                </Button>
              </Link>
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

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Marketing Services That <span className="text-gradient">Grow Revenue</span>
            </h2>
            <p className="text-muted-foreground">Everything your business needs to get found online, attract qualified leads, and convert visitors into customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container mx-auto text-center">
          <Wrench className="h-10 w-10 mx-auto text-accent mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Marketing & SEO Tools</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Analyze your online presence, find growth opportunities, and start improving your search rankings — completely free.
          </p>
          <Link to="/tools">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Explore Free Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results, <span className="text-gradient">Real Growth</span>
            </h2>
            <p className="text-muted-foreground">See how businesses like yours used SEO to generate more traffic, leads, and revenue.</p>
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
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Clients <span className="text-gradient">Say</span>
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
                View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All SEO & Digital Marketing <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground">From technical audits to AI search optimization — explore every service designed to grow your online presence.</p>
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
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We <span className="text-gradient">Specialize In</span>
            </h2>
            <p className="text-muted-foreground">Tailored SEO strategies for every industry — because each niche has unique search behavior and competition.</p>
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
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEO Services <span className="text-gradient">Worldwide</span>
            </h2>
            <p className="text-muted-foreground">Serving businesses across the globe with localized SEO strategies tailored to each market.</p>
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
                      to={loc.langPrefix ? `/${loc.langPrefix}/${loc.slug}` : `/${loc.slug}`}
                      className="glass rounded-lg px-3 py-2 text-xs font-medium hover:border-primary/30 hover:text-primary transition-all"
                    >
                      {loc.localCity || loc.city}
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
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-muted-foreground">Actionable SEO and digital marketing insights to help you grow your business online.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all group"
              >
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
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
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
      <section className="section-padding bg-card/20 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Grow Your Business Online</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get a free, comprehensive audit of your website's SEO and online marketing performance — with a clear action plan to start generating more traffic, leads, and revenue.
            </p>
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary text-base px-8">
                Get Your Free Growth Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
              "@type": "Person",
              name: "Shahab Abbasi",
              jobTitle: "SEO Strategist & GEO Expert",
              url: "https://shahababbasi.com",
              telephone: "+923041316771",
              address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
              sameAs: ["https://linkedin.com/in/shahab-abbasi-seo-specialist"],
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shahab Abbasi SEO",
              url: "https://shahababbasi.com",
              logo: "https://shahababbasi.com/logo.png",
              contactPoint: { "@type": "ContactPoint", telephone: "+923041316771", contactType: "customer service" },
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shahab Abbasi SEO Services",
              url: "https://shahababbasi.com",
              telephone: "+923041316771",
              address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressRegion: "ICT", addressCountry: "PK" },
              priceRange: "$500 - $2000",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Shahab Abbasi",
              url: "https://shahababbasi.com",
              potentialAction: { "@type": "SearchAction", target: "https://shahababbasi.com/search?q={search_term_string}", "query-input": "required name=search_term_string" },
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
