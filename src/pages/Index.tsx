import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search, Globe, Zap, Link2, ShoppingCart, Bot,
  ArrowRight, ChevronDown, Star, Users, TrendingUp, Award,
  Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 50, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 5, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 200, suffix: "+", label: "Keywords Ranked", icon: TrendingUp },
  { value: 500, suffix: "%", label: "Avg Traffic Growth", icon: Award },
];

const services = [
  { icon: Search, title: "Technical SEO", desc: "Site audits, speed optimization, Core Web Vitals & crawlability fixes." },
  { icon: Globe, title: "Local SEO", desc: "Google Business Profile, maps optimization & local ranking strategies." },
  { icon: Zap, title: "On-Page SEO", desc: "Content optimization, meta tags, internal linking & keyword targeting." },
  { icon: Link2, title: "Link Building", desc: "White-hat manual outreach, guest posts & digital PR for authority." },
  { icon: ShoppingCart, title: "E-commerce SEO", desc: "Product page optimization for Shopify, WooCommerce & more." },
  { icon: Bot, title: "GEO Optimization", desc: "Get visible in ChatGPT, Perplexity, Gemini & AI search engines." },
];

const testimonials = [
  { name: "Ahmed R.", company: "Tech Startup, Dubai", text: "Shahab helped us increase organic traffic by 400% in 6 months. His GEO expertise is unmatched.", rating: 5 },
  { name: "Sarah M.", company: "E-commerce, London", text: "Our Shopify store went from page 5 to page 1 for our main keywords. Incredible ROI.", rating: 5 },
  { name: "Marcus T.", company: "Law Firm, Toronto", text: "Best SEO investment we've made. Local leads increased by 300% within the first quarter.", rating: 5 },
];

const faqs = [
  { q: "What is SEO and why does my business need it?", a: "SEO (Search Engine Optimization) improves your website's visibility on Google and other search engines. It drives organic traffic, builds credibility, and generates leads without ongoing ad spend." },
  { q: "What is GEO (Generative Engine Optimization)?", a: "GEO optimizes your content to appear in AI-powered search engines like ChatGPT, Perplexity, and Google's AI Overviews — the future of search." },
  { q: "How long does it take to see SEO results?", a: "Typically 3-6 months for significant results, though some improvements like technical fixes can show impact within weeks." },
  { q: "Do you work with international clients?", a: "Yes! I work with clients across 5+ countries including Pakistan, UAE, UK, USA, Canada, and Europe." },
  { q: "What's included in the free SEO audit?", a: "A comprehensive analysis of your website's technical health, on-page SEO, backlink profile, and keyword opportunities with actionable recommendations." },
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
              SEO & GEO Expert — Islamabad, Pakistan
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Rank <span className="text-gradient">#1</span> on Google &{" "}
              <span className="text-accent">AI Search Engines</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Data-driven SEO strategies that deliver measurable results. From technical audits to GEO optimization — I help businesses dominate search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary text-base px-8">
                  Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-base px-8">
                  View Services
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
              SEO Services That <span className="text-gradient">Drive Results</span>
            </h2>
            <p className="text-muted-foreground">Comprehensive SEO solutions tailored to your business goals and market.</p>
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

      {/* Tools CTA */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container mx-auto text-center">
          <Wrench className="h-10 w-10 mx-auto text-accent mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free SEO Tools</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Use our free tools to analyze, optimize and improve your website's SEO performance.
          </p>
          <Link to="/tools">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Explore Free Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 space-y-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/20 border-t border-border">
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Dominate Search</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get a comprehensive SEO audit of your website — completely free. Let's find the opportunities you're missing.
            </p>
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary text-base px-8">
                Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shahab Abbasi",
            jobTitle: "SEO Strategist & GEO Expert",
            url: "https://shahababbasi.com",
            telephone: "+923041316771",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Islamabad",
              addressCountry: "PK",
            },
            sameAs: ["https://linkedin.com/in/shahab-abbasi-seo-specialist"],
          }),
        }}
      />
    </Layout>
  );
};

export default Index;
