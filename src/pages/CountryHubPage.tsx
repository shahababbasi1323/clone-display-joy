import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe, Search, PenTool, Monitor, Share2, BarChart3, Megaphone, List, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Layout from "@/components/Layout";
import { locationsData } from "@/data/locationsData";
import { getCountryHubBySlug, countryHubData } from "@/data/countryHubData";
import { getCountryHeroImage } from "@/components/country/countryImages";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import NotFound from "./NotFound";

const services = [
  { icon: Search, label: "SEO & GEO Optimization", desc: "Dominate organic search and AI-powered answer engines" },
  { icon: Megaphone, label: "PPC & Paid Advertising", desc: "Google Ads, social media ads & performance-driven campaigns" },
  { icon: Monitor, label: "Web Design & Development", desc: "Conversion-focused websites built for speed and mobile UX" },
  { icon: PenTool, label: "Content Writing & Strategy", desc: "Blog posts, landing pages & SEO-optimized copywriting" },
  { icon: Share2, label: "Social Media Management", desc: "Growth strategies across Instagram, LinkedIn & TikTok" },
  { icon: BarChart3, label: "Analytics & Reporting", desc: "Data-driven insights to measure ROI and scale growth" },
];

const tocItems = [
  { id: "services", label: "Our Services" },
  { id: "cities", label: "Cities We Serve" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "other-countries", label: "Other Countries" },
  { id: "cta", label: "Get Started" },
];

const CountryHubPage = () => {
  const { country: countrySlug } = useParams<{ country: string }>();
  const hub = countrySlug ? getCountryHubBySlug(countrySlug) : undefined;

  useSeoMeta({
    title: hub?.metaTitle ?? "Country Hub",
    description: hub?.metaDescription ?? "",
    canonical: hub ? `https://shahababbasi.com/locations/${hub.slug}` : undefined,
  });

  if (!hub) return <NotFound />;

  const cities = locationsData.filter(l => l.countryCode === hub.countryCode);
  const englishCities = cities.filter(c => c.lang === "en");
  const nonEnglishCities = cities.filter(c => c.lang !== "en");
  const otherCountries = countryHubData.filter(c => c.slug !== hub.slug);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="container mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Locations", href: "/locations" },
              { label: hub.name },
            ]}
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="text-5xl mb-4 block">{hub.emoji}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              {hub.heroHeading.split(hub.name).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-gradient">{hub.name}</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {hub.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* TOC */}
      <nav aria-label="Table of contents" className="section-padding !py-6 border-b border-border bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <List className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">On This Page</span>
          </div>
          <ol className="flex flex-wrap gap-x-6 gap-y-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  <span className="text-primary/60 mr-1">{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Services */}
      <section id="services" className="section-padding scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Digital Marketing Services in <span className="text-gradient">{hub.name}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

      {/* Why Content (long-form SEO) */}
      <section className="section-padding bg-card/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">
            Why {hub.name} Businesses Need Professional Digital Marketing
          </h2>
          <div className="space-y-5">
            {hub.whyContent.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-muted-foreground leading-relaxed text-sm md:text-base"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" className="section-padding scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <MapPin className="h-6 w-6 text-primary inline-block mr-2 -mt-1" />
            Cities We Serve in <span className="text-gradient">{hub.name}</span>
          </h2>

          {englishCities.length > 0 && (
            <div className="mb-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-5xl mx-auto">
                {englishCities.map((loc, i) => (
                  <motion.div
                    key={loc.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 10) * 0.03 }}
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
          )}

          {nonEnglishCities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                Local Language Pages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-5xl mx-auto">
                {nonEnglishCities.map((loc) => {
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
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="section-padding scroll-mt-20">
        <div className="container mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Businesses in {hub.name} Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Full-Stack Digital Expertise</h4>
                <p>From SEO and PPC to custom web development, content writing, and social media — we offer every digital marketing service under one roof.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Local Market Intelligence</h4>
                <p>We study your local competitors, audience behavior, and search trends to build hyper-targeted strategies that outperform generic agencies.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data-Driven Results</h4>
                <p>Every campaign is backed by analytics — organic traffic, conversion rates, engagement, and performance — we track, report, and optimize for measurable ROI.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Proven Track Record</h4>
                <p>With clients across {cities.length} cities in {hub.name}, our strategies are tested and proven to deliver sustainable growth in this market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section id="other-countries" className="section-padding bg-card/20 border-y border-border scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <Globe className="h-6 w-6 text-primary inline-block mr-2 -mt-1" />
            We Also Serve These Countries
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {otherCountries.map((c) => (
              <Link
                key={c.slug}
                to={`/locations/${c.slug}`}
                className="glass rounded-lg p-3 hover:border-primary/30 transition-all group block text-center"
              >
                <span className="text-2xl block mb-1">{c.emoji}</span>
                <span className="font-medium text-sm">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section-padding scroll-mt-20">
        <div className="container mx-auto text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your {hub.name} Business?</h2>
            <p className="text-muted-foreground mb-6">
              Get a free digital marketing audit — covering SEO, PPC, web design, content, and social media — customized for your city and industry in {hub.name}.
            </p>
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary">
                Get Free Growth Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
              { "@type": "ListItem", position: 2, name: "Locations", item: "https://shahababbasi.com/locations" },
              { "@type": "ListItem", position: 3, name: hub.name, item: `https://shahababbasi.com/locations/${hub.slug}` },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default CountryHubPage;
