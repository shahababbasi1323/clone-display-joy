import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const plans = [
  {
    name: "Starter",
    price: 500,
    desc: "Perfect for small businesses getting started with SEO.",
    popular: false,
    features: [
      { text: "Technical SEO Audit", included: true },
      { text: "On-Page Optimization (10 pages)", included: true },
      { text: "Keyword Research (50 keywords)", included: true },
      { text: "Monthly Reporting", included: true },
      { text: "Google Business Profile Setup", included: true },
      { text: "Content Strategy", included: false },
      { text: "Link Building", included: false },
      { text: "GEO Optimization", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
  },
  {
    name: "Growth",
    price: 1000,
    desc: "For businesses ready to scale their organic presence.",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "On-Page Optimization (25 pages)", included: true },
      { text: "Keyword Research (150 keywords)", included: true },
      { text: "Content Strategy & Calendar", included: true },
      { text: "Link Building (10 links/mo)", included: true },
      { text: "Competitor Analysis", included: true },
      { text: "Schema Markup Implementation", included: true },
      { text: "GEO Optimization", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: 2000,
    desc: "Full-service SEO for maximum growth and market dominance.",
    popular: false,
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Unlimited Page Optimization", included: true },
      { text: "Keyword Research (500+ keywords)", included: true },
      { text: "Link Building (25 links/mo)", included: true },
      { text: "GEO Optimization", included: true },
      { text: "International SEO & Hreflang", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Weekly Strategy Calls", included: true },
      { text: "Priority Support", included: true },
    ],
  },
];

const Pricing = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  useSeoMeta({
    title: "SEO Pricing & Packages - Affordable Plans from $500/mo",
    description: "Transparent SEO pricing starting at $500/month. Compare Starter, Growth, and Enterprise packages. No hidden fees. Custom quotes available.",
    canonical: "https://shahababbasi.com/pricing",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SEO <span className="text-gradient">Pricing & Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparent pricing. No hidden fees. Affordable SEO services starting at $500/month.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-xl p-6 relative ${plan.popular ? "border-primary glow-primary" : ""}`}
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
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
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
                <Link to="/contact">
                  <Button className={`w-full ${plan.popular ? "glow-primary" : ""}`} variant={plan.popular ? "default" : "outline"}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
            <div className="glass rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                    <th className="p-4 text-center font-semibold">Starter</th>
                    <th className="p-4 text-center font-semibold text-primary">Growth</th>
                    <th className="p-4 text-center font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Technical SEO Audit", "✓", "✓", "✓"],
                    ["On-Page Optimization", "10 pages", "25 pages", "Unlimited"],
                    ["Keyword Research", "50", "150", "500+"],
                    ["Monthly Reporting", "✓", "✓", "✓"],
                    ["Google Business Profile", "Setup", "Optimization", "Full Management"],
                    ["Content Strategy", "—", "✓", "✓"],
                    ["Link Building", "—", "10/mo", "25/mo"],
                    ["Schema Markup", "—", "✓", "✓"],
                    ["GEO Optimization", "—", "—", "✓"],
                    ["International SEO", "—", "—", "✓"],
                    ["Dedicated Manager", "—", "—", "✓"],
                    ["Strategy Calls", "Monthly", "Bi-weekly", "Weekly"],
                    ["Support", "Email", "Email + Chat", "Priority"],
                  ].map(([feature, s, g, e], i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4 font-medium">{feature}</td>
                      <td className="p-4 text-center text-muted-foreground">{s}</td>
                      <td className="p-4 text-center">{g}</td>
                      <td className="p-4 text-center text-muted-foreground">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Custom Quote */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass rounded-2xl p-10 glow-primary">
              <h2 className="text-2xl font-bold mb-3">Need a Custom Package?</h2>
              <p className="text-muted-foreground mb-6">Every business is unique. Let's create a tailored SEO strategy that fits your budget and goals.</p>
              {!showQuoteForm ? (
                <Button size="lg" onClick={() => setShowQuoteForm(true)} className="glow-primary">
                  Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : quoteSubmitted ? (
                <div className="text-center py-4">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="font-semibold">Quote request received! I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }} className="space-y-4 text-left mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your name" required />
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                  <Input placeholder="Website URL" />
                  <Textarea placeholder="Describe your SEO needs and budget..." rows={3} required />
                  <Button type="submit" className="w-full glow-primary">Submit Request</Button>
                </form>
              )}
            </div>

            {/* Internal Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { label: "Free SEO Audit", href: "/free-seo-audit" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Services", href: "/services" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
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
              name: "SEO Pricing & Packages",
              url: "https://shahababbasi.com/pricing",
            },
            ...plans.map((p) => ({
              "@context": "https://schema.org",
              "@type": "Offer",
              name: `${p.name} SEO Package`,
              price: p.price,
              priceCurrency: "USD",
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
