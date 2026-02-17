import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe, Search, PenTool, Monitor, Share2, BarChart3, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { locationsData } from "@/data/locationsData";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const getEnglishLocationsByCountry = () => {
  const englishLocations = locationsData.filter(l => l.lang === "en");
  const grouped: Record<string, typeof englishLocations> = {};
  englishLocations.forEach(loc => {
    if (!grouped[loc.country]) grouped[loc.country] = [];
    grouped[loc.country].push(loc);
  });
  return grouped;
};

const getNonEnglishLocationsByLang = () => {
  const nonEnglish = locationsData.filter(l => l.lang !== "en");
  const grouped: Record<string, typeof nonEnglish> = {};
  nonEnglish.forEach(loc => {
    const langLabel = {
      ar: "العربية (Arabic)", fr: "Français (French)", de: "Deutsch (German)",
      nl: "Nederlands (Dutch)", it: "Italiano (Italian)", es: "Español (Spanish)",
      pt: "Português (Portuguese)", da: "Dansk (Danish)", sv: "Svenska (Swedish)",
      no: "Norsk (Norwegian)", fi: "Suomi (Finnish)", pl: "Polski (Polish)",
      cs: "Čeština (Czech)", hu: "Magyar (Hungarian)", ro: "Română (Romanian)",
      el: "Ελληνικά (Greek)", tr: "Türkçe (Turkish)", ja: "日本語 (Japanese)",
      ko: "한국어 (Korean)", he: "עברית (Hebrew)",
    }[loc.lang] || loc.lang;
    if (!grouped[langLabel]) grouped[langLabel] = [];
    grouped[langLabel].push(loc);
  });
  return grouped;
};

const services = [
  { icon: Search, label: "SEO & GEO Optimization", desc: "Dominate organic search results and AI-powered answer engines" },
  { icon: Megaphone, label: "PPC & Paid Advertising", desc: "Google Ads, social media ads & performance-driven campaigns" },
  { icon: Monitor, label: "Web Design & Development", desc: "Conversion-focused websites built for speed and mobile-first UX" },
  { icon: PenTool, label: "Content Writing & Strategy", desc: "Blog posts, landing pages, and SEO-optimized copywriting" },
  { icon: Share2, label: "Social Media Management", desc: "Growth strategies across Instagram, LinkedIn, Facebook & TikTok" },
  { icon: BarChart3, label: "Analytics & Reporting", desc: "Data-driven insights to measure ROI and scale growth" },
];

const Locations = () => {
  useSeoMeta({
    title: "Digital Marketing Agency Worldwide | SEO, PPC, Web Design | 250+ Cities",
    description: "Full-service digital marketing agency serving 250+ cities across 40+ countries. SEO, PPC, web design, web development, content writing & social media management. Get a free growth audit today.",
    canonical: "https://shahababbasi.com/locations",
  });

  const byCountry = getEnglishLocationsByCountry();
  const byLang = getNonEnglishLocationsByLang();
  const totalCities = locationsData.length;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Your <span className="text-gradient">Digital Marketing Agency</span> — Worldwide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help businesses in {totalCities}+ cities across 40+ countries grow with expert SEO, PPC management, web design &amp; development, content writing, and social media marketing. Whether you need a complete digital strategy or a specialized service, our team delivers measurable results tailored to your local market.
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-xl p-5 text-center"
              >
                <svc.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm mb-1">{svc.label}</h3>
                <p className="text-xs text-muted-foreground">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations listing */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Find Digital Marketing Services <span className="text-gradient">Near You</span>
          </h2>

          {Object.entries(byCountry)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([country, cities]) => (
              <div key={country} className="mb-12">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {country}
                  <span className="text-sm font-normal text-muted-foreground">({cities.length} {cities.length === 1 ? "city" : "cities"})</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {cities.map((loc, i) => (
                    <motion.div
                      key={loc.slug}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i % 10) * 0.02 }}
                    >
                      <Link
                        to={`/${loc.slug}`}
                        className="glass rounded-xl p-4 hover:border-primary/30 transition-all group block"
                      >
                        <h4 className="font-semibold text-sm">{loc.city}</h4>
                        <span className="text-xs text-muted-foreground block mb-1">SEO · PPC · Web Design</span>
                        <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                          View services <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

          {/* Non-English */}
          <div className="mt-16 mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Globe className="h-6 w-6 text-accent" />
              Multilingual Digital Marketing Pages
            </h2>
            {Object.entries(byLang)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([langLabel, cities]) => (
                <div key={langLabel} className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">{langLabel}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {cities.map((loc) => {
                      const href = `/${loc.langPrefix}/${loc.slug}`;
                      const displayName = loc.localCity || loc.city;
                      return (
                        <Link
                          key={loc.slug + loc.langPrefix}
                          to={href}
                          className="glass rounded-lg p-3 hover:border-accent/30 transition-all group block"
                        >
                          <span className="font-medium text-sm">{displayName}</span>
                          <span className="text-xs text-muted-foreground block">{loc.localCountry || loc.country}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>

          {/* Why choose us */}
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Businesses Choose Us as Their Digital Marketing Partner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Full-Stack Digital Expertise</h4>
                <p>From SEO and PPC to custom web development, responsive web design, content writing, and social media management — we offer every digital marketing service under one roof so your brand stays consistent across all channels.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Local Market Intelligence</h4>
                <p>We don't just run ads — we study your local competitors, audience behavior, and search trends to build hyper-targeted strategies that outperform generic agencies in your city.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data-Driven Results</h4>
                <p>Every campaign is backed by analytics. Whether it's organic traffic growth, PPC conversion rates, social media engagement, or website performance — we track, report, and optimize for measurable ROI.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Global Reach, Local Focus</h4>
                <p>Serving {totalCities}+ cities worldwide with strategies that respect cultural nuances, local search behavior, and regional business landscapes for maximum impact in your market.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-muted-foreground mb-6">
                Get a free digital marketing audit — covering SEO, PPC, web design, content, and social media — customized for your city and industry.
              </p>
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary">
                  Get Free Growth Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
              { "@type": "ListItem", position: 2, name: "Locations", item: "https://shahababbasi.com/locations" },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default Locations;
