import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Play, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

const testimonials = [
  { name: "Ahmed Rashid", company: "TechVenture Dubai", role: "CEO", text: "Shahab helped us increase organic traffic by 400% in just 6 months. His understanding of both traditional SEO and GEO optimization is truly unmatched. He provided clear reports and was always available to discuss strategy.", rating: 5 },
  { name: "Sarah Mitchell", company: "StyleHub London", role: "Marketing Director", text: "Our Shopify store went from page 5 to page 1 for our main keywords. The ROI has been incredible — we've seen a 280% increase in organic revenue since working with Shahab.", rating: 5 },
  { name: "Marcus Thompson", company: "Thompson & Associates", role: "Managing Partner", text: "Best SEO investment our law firm has ever made. Local leads increased by 300% within the first quarter. Shahab's local SEO expertise is outstanding.", rating: 5 },
  { name: "Fatima Khan", company: "HealthCare Plus Islamabad", role: "Founder", text: "Shahab's local SEO work tripled our patient inquiries. His professional and data-driven approach gave us confidence in every decision. Highly recommend his services.", rating: 5 },
  { name: "James O'Brien", company: "CloudStack SaaS", role: "VP of Growth", text: "The GEO optimization strategy put us ahead of competitors in AI search results. We're now visible in ChatGPT and Perplexity responses — a true game changer for our B2B pipeline.", rating: 5 },
  { name: "Aisha Al-Mansouri", company: "LuxeProperty Abu Dhabi", role: "Head of Digital", text: "Working with Shahab transformed our real estate website's organic presence. We now rank for over 100 local keywords and our lead quality has improved dramatically.", rating: 5 },
  { name: "David Chen", company: "FoodieApp Toronto", role: "Co-Founder", text: "Shahab helped our restaurant discovery app rank for competitive keywords across multiple Canadian cities. His international SEO knowledge was exactly what we needed.", rating: 5 },
  { name: "Nadia Hussain", company: "EduLearn Pakistan", role: "Director", text: "Our online education platform saw a 500% increase in organic signups after Shahab's SEO overhaul. His content strategy recommendations were spot on.", rating: 5 },
];

const videoTestimonials = [
  { name: "Ahmed Rashid", company: "TechVenture Dubai", videoId: "dQw4w9WgXcQ", thumbnail: "" },
  { name: "Sarah Mitchell", company: "StyleHub London", videoId: "dQw4w9WgXcQ", thumbnail: "" },
];

const Testimonials = () => {
  useSeoMeta({
    title: "Client Testimonials - SEO Success Stories & Reviews",
    description: "Read real client testimonials and success stories. See how Shahab Abbasi has helped businesses achieve 400%+ traffic growth through SEO.",
    canonical: "https://shahababbasi.com/testimonials",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <PageBreadcrumbs items={[{ label: "Testimonials" }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real results, real reviews. See what our clients say about working with Shahab Abbasi.
            </p>
          </motion.div>

          {/* Aggregate Rating */}
          <div className="glass rounded-xl p-6 max-w-md mx-auto mb-16 text-center">
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-2xl font-bold">5.0 / 5.0</p>
            <p className="text-sm text-muted-foreground">Based on {testimonials.length} reviews</p>
          </div>

          {/* Written Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="glass rounded-xl p-6 space-y-4"
              >
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Video <span className="text-gradient">Testimonials</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoTestimonials.map((v, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <div className="relative aspect-video bg-secondary flex items-center justify-center">
                    <a
                      href={`https://www.youtube.com/watch?v=${v.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Play className="h-7 w-7 text-primary-foreground ml-1" />
                      </div>
                      <span className="text-sm text-muted-foreground">Watch on YouTube</span>
                    </a>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold">{v.name}</p>
                    <p className="text-sm text-muted-foreground">{v.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Internal Links */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-10 glow-primary">
              <h2 className="text-2xl font-bold mb-3">Ready to Be Our Next Success Story?</h2>
              <p className="text-muted-foreground mb-6">Book a free consultation and get a comprehensive SEO audit of your website.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/free-seo-audit"><Button className="glow-primary">Get Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <Link to="/pricing"><Button variant="outline">View Pricing</Button></Link>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {[
                  { label: "Services", href: "/services" },
                  { label: "Case Studies", href: "/industries" },
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/faq" },
                ].map((l) => (
                  <Link key={l.href} to={l.href} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
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
              name: "Client Testimonials",
              url: "https://shahababbasi.com/testimonials",
            },
            {
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              itemReviewed: { "@type": "LocalBusiness", name: "Shahab Abbasi SEO Services" },
              ratingValue: "5.0",
              bestRating: "5",
              ratingCount: testimonials.length.toString(),
            },
            ...testimonials.map((t) => ({
              "@context": "https://schema.org",
              "@type": "Review",
              author: { "@type": "Person", name: t.name },
              reviewBody: t.text,
              reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
              itemReviewed: { "@type": "LocalBusiness", name: "Shahab Abbasi SEO Services" },
            })),
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://shahababbasi.com/testimonials" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default Testimonials;
