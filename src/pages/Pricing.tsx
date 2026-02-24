import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, X, Zap, Shield, Headphones, Star, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const plans = [
  {
    name: "Starter",
    price: 500,
    desc: "Ideal for small businesses & startups launching their first SEO campaign.",
    popular: false,
    cta: "Start Growing Today",
    features: [
      { text: "Technical SEO Audit & Fixes", included: true },
      { text: "On-Page Optimization (10 pages)", included: true },
      { text: "Keyword Research (50 keywords)", included: true },
      { text: "Google Business Profile Setup", included: true },
      { text: "Monthly Performance Report", included: true },
      { text: "Basic Competitor Analysis", included: true },
      { text: "Content Strategy & Copywriting", included: false },
      { text: "Link Building & Digital PR", included: false },
      { text: "GEO & AI Search Optimization", included: false },
      { text: "PPC Campaign Management", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
  },
  {
    name: "Growth",
    price: 1000,
    desc: "For businesses ready to scale organic traffic, leads & revenue fast.",
    popular: true,
    cta: "Scale My Business",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "On-Page Optimization (25 pages)", included: true },
      { text: "Keyword Research (150 keywords)", included: true },
      { text: "Content Strategy & Blog Calendar", included: true },
      { text: "Link Building (10 backlinks/mo)", included: true },
      { text: "Advanced Competitor Analysis", included: true },
      { text: "Schema Markup Implementation", included: true },
      { text: "Bi-Weekly Strategy Calls", included: true },
      { text: "GEO & AI Search Optimization", included: false },
      { text: "PPC Campaign Management", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: 2000,
    desc: "Full-service digital marketing for maximum market dominance & ROI.",
    popular: false,
    cta: "Dominate My Market",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Unlimited Page Optimization", included: true },
      { text: "Keyword Research (500+ keywords)", included: true },
      { text: "Link Building (25 backlinks/mo)", included: true },
      { text: "GEO & AI Search Optimization", included: true },
      { text: "International SEO & Hreflang", included: true },
      { text: "E-commerce SEO (if applicable)", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Weekly Strategy Calls", included: true },
      { text: "Priority Support (24hr response)", included: true },
      { text: "PPC Campaign Management", included: false },
    ],
  },
  {
    name: "Custom",
    price: null,
    desc: "Tailored strategy for unique needs — combine SEO, PPC, content & web design.",
    popular: false,
    cta: "Get Custom Proposal",
    features: [
      { text: "Everything in Enterprise", included: true },
      { text: "Custom SEO + PPC Bundle", included: true },
      { text: "Google Ads & Social Media Ads", included: true },
      { text: "Content Writing & Copywriting", included: true },
      { text: "Web Design & Development", included: true },
      { text: "Social Media Management", included: true },
      { text: "Conversion Rate Optimization", included: true },
      { text: "Multi-Language / Multi-Market", included: true },
      { text: "Executive Reporting Dashboard", included: true },
      { text: "Dedicated Team & Slack Channel", included: true },
      { text: "Flexible Contract Terms", included: true },
    ],
  },
];

const addOns = [
  { name: "Google Ads Management", price: "From $300/mo", desc: "Search, Display & Shopping campaigns managed for maximum ROAS." },
  { name: "Social Media Ads", price: "From $250/mo", desc: "Facebook, Instagram, LinkedIn & TikTok ad campaigns." },
  { name: "Content Writing", price: "From $150/article", desc: "SEO-optimized blog posts, landing pages & product descriptions." },
  { name: "Web Design & Development", price: "From $1,500", desc: "Conversion-focused, mobile-first websites built for speed." },
  { name: "Social Media Management", price: "From $400/mo", desc: "Strategy, content creation & community management." },
  { name: "One-Time SEO Audit", price: "$250", desc: "Comprehensive technical, on-page & backlink analysis with action plan." },
];

const guarantees = [
  { icon: Shield, title: "No Long-Term Contracts", desc: "Month-to-month flexibility. Stay because of results, not contracts." },
  { icon: Zap, title: "Results in 90 Days", desc: "See measurable ranking improvements within the first 3 months." },
  { icon: Headphones, title: "100% Transparent Reporting", desc: "Monthly reports with rankings, traffic, leads & revenue attribution." },
  { icon: Star, title: "5-Star Client Satisfaction", desc: "50+ businesses scaled with a perfect track record of measurable growth." },
];

const Pricing = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const website = (formData.get("website") as string)?.trim() || "";
    const budget = (formData.get("budget") as string)?.trim() || "";
    const message = (formData.get("message") as string).trim();

    const fullMessage = [
      message,
      website && `Website: ${website}`,
      budget && `Budget: ${budget}`,
    ].filter(Boolean).join("\n");

    try {
      const { error } = await supabase.from("leads").insert({
        name,
        email,
        message: fullMessage,
        source: "pricing_custom_quote",
      });
      if (error) throw error;

      // Trigger email notification
      await supabase.functions.invoke("notify-lead", {
        body: { name, email, message: fullMessage, source: "pricing_custom_quote" },
      });

      setQuoteSubmitted(true);
      toast.success("Proposal request submitted! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useSeoMeta({
    title: "SEO Pricing & Packages — Affordable Plans from $500/mo | Custom Quotes",
    description: "Transparent SEO & digital marketing pricing starting at $500/month. Compare Starter, Growth, Enterprise & Custom packages. No hidden fees, no long-term contracts. Get a free custom quote today.",
    canonical: "https://shahababbasi.com/pricing",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <PageBreadcrumbs items={[{ label: "Pricing" }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
              Transparent Pricing — No Hidden Fees
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SEO & Digital Marketing <span className="text-gradient">Pricing Plans</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose a plan that fits your business goals and budget. Every package includes a free initial audit, monthly reporting, and zero lock-in contracts. Need something unique? <button onClick={() => document.getElementById("custom-quote")?.scrollIntoView({ behavior: "smooth" })} className="text-primary hover:underline">Get a custom quote →</button>
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-xl p-6 relative flex flex-col ${plan.popular ? "border-primary glow-primary" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6 pt-2">
                  <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price ? (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">/mo</span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-gradient">Let's Talk</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground/50"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                {plan.price ? (
                  <Link to="/contact">
                    <Button className={`w-full ${plan.popular ? "glow-primary" : ""}`} variant={plan.popular ? "default" : "outline"}>
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => document.getElementById("custom-quote")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5 text-center"
              >
                <g.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-sm mb-1">{g.title}</h3>
                <p className="text-xs text-muted-foreground">{g.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-center mb-8">Detailed Feature Comparison</h2>
            <div className="glass rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                    <th className="p-4 text-center font-semibold">Starter</th>
                    <th className="p-4 text-center font-semibold text-primary">Growth</th>
                    <th className="p-4 text-center font-semibold">Enterprise</th>
                    <th className="p-4 text-center font-semibold">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Technical SEO Audit", "✓", "✓", "✓", "✓"],
                    ["On-Page Optimization", "10 pages", "25 pages", "Unlimited", "Unlimited"],
                    ["Keyword Research", "50", "150", "500+", "Custom"],
                    ["Monthly Reporting", "✓", "✓", "✓", "✓"],
                    ["Google Business Profile", "Setup", "Optimization", "Full Mgmt", "Full Mgmt"],
                    ["Content Strategy", "—", "✓", "✓", "✓"],
                    ["Content Writing", "—", "—", "—", "✓"],
                    ["Link Building", "—", "10/mo", "25/mo", "Custom"],
                    ["Schema Markup", "—", "✓", "✓", "✓"],
                    ["GEO / AI Optimization", "—", "—", "✓", "✓"],
                    ["International SEO", "—", "—", "✓", "✓"],
                    ["E-commerce SEO", "—", "—", "✓", "✓"],
                    ["PPC Management", "—", "—", "—", "✓"],
                    ["Social Media Ads", "—", "—", "—", "✓"],
                    ["Web Design & Dev", "—", "—", "—", "✓"],
                    ["Social Media Mgmt", "—", "—", "—", "✓"],
                    ["CRO (Conversion Opt.)", "—", "—", "—", "✓"],
                    ["Dedicated Manager", "—", "—", "✓", "✓"],
                    ["Strategy Calls", "Monthly", "Bi-weekly", "Weekly", "Custom"],
                    ["Support", "Email", "Email + Chat", "Priority", "Dedicated Slack"],
                  ].map(([feature, s, g, e, c], i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4 font-medium">{feature}</td>
                      <td className="p-4 text-center text-muted-foreground">{s}</td>
                      <td className="p-4 text-center">{g}</td>
                      <td className="p-4 text-center text-muted-foreground">{e}</td>
                      <td className="p-4 text-center text-muted-foreground">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add-On Services */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Add-On <span className="text-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground">Enhance any plan with additional digital marketing services. Mix and match to build your perfect growth stack.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm">{addon.name}</h3>
                    <span className="text-xs font-bold text-primary whitespace-nowrap">{addon.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{addon.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Custom Quote */}
          <div id="custom-quote" className="max-w-2xl mx-auto text-center scroll-mt-24">
            <div className="glass rounded-2xl p-10 glow-primary">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Need a Custom Growth Package?</h2>
              <p className="text-muted-foreground mb-6">
                Every business is unique. Tell us about your goals, budget & challenges — we'll craft a tailored SEO & digital marketing strategy with transparent pricing and no surprises.
              </p>
              {!showQuoteForm ? (
                <Button size="lg" onClick={() => setShowQuoteForm(true)} className="glow-primary">
                  Request My Custom Proposal <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : quoteSubmitted ? (
                <div className="text-center py-4">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="font-semibold">Proposal request received! We'll get back to you within 24 hours with a custom plan.</p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4 text-left mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Your name" required />
                    <Input name="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="website" placeholder="Website URL" />
                    <Input name="budget" placeholder="Monthly budget (e.g. $1,500)" />
                  </div>
                  <Textarea name="message" placeholder="What services are you interested in? (SEO, PPC, content, web design, etc.) Tell us about your goals..." rows={4} required />
                  <Button type="submit" className="w-full glow-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Proposal Request"} {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              )}
            </div>

            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { label: "Free SEO Audit", href: "/free-seo-audit" },
                { label: "All SEO Services", href: "/services" },
                { label: "PPC Services", href: "/ppc" },
                { label: "Client Results", href: "/testimonials" },
                { label: "Industries", href: "/industries" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "SEO & Digital Marketing Pricing Plans",
              url: "https://shahababbasi.com/pricing",
              description: "Transparent SEO pricing starting at $500/month. Compare Starter, Growth, Enterprise & Custom packages.",
            },
            ...plans.filter(p => p.price).map((p) => ({
              "@context": "https://schema.org",
              "@type": "Offer",
              name: `${p.name} SEO Package`,
              price: p.price,
              priceCurrency: "USD",
              description: p.desc,
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: p.price,
                priceCurrency: "USD",
                billingDuration: "P1M",
              },
            })),
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Pricing", item: "https://shahababbasi.com/pricing" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default Pricing;
