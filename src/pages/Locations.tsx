import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { locationsData } from "@/data/locationsData";
import { useSeoMeta } from "@/hooks/useSeoMeta";

// Group English-only locations by country for the hub
const getEnglishLocationsByCountry = () => {
  const englishLocations = locationsData.filter(l => l.lang === "en");
  const grouped: Record<string, typeof englishLocations> = {};
  englishLocations.forEach(loc => {
    if (!grouped[loc.country]) grouped[loc.country] = [];
    grouped[loc.country].push(loc);
  });
  return grouped;
};

// Group non-English locations by language
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

const Locations = () => {
  useSeoMeta({
    title: "SEO Services Worldwide | 250+ City Pages | Shahab Abbasi",
    description: "Find local SEO services in 250+ cities across 40+ countries. Expert SEO strategies tailored for your city and market.",
    canonical: "https://shahababbasi.com/locations",
  });

  const byCountry = getEnglishLocationsByCountry();
  const byLang = getNonEnglishLocationsByLang();
  const totalCities = locationsData.length;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SEO Services <span className="text-gradient">Worldwide</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {totalCities}+ location pages across 40+ countries and 20 languages. Find expert SEO services near you.
            </p>
          </motion.div>

          {/* English locations by country */}
          {Object.entries(byCountry)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([country, cities]) => (
              <div key={country} className="mb-12">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {country}
                  <span className="text-sm font-normal text-muted-foreground">({cities.length} {cities.length === 1 ? "city" : "cities"})</span>
                </h2>
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
                        <h3 className="font-semibold text-sm">{loc.city}</h3>
                        <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all mt-1">
                          Learn more <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

          {/* Non-English locations */}
          <div className="mt-16 mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Globe className="h-6 w-6 text-accent" />
              Multilingual Pages
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

          {/* CTA */}
          <div className="mt-10 text-center">
            <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Don't See Your City?</h2>
              <p className="text-muted-foreground mb-6">
                We serve businesses globally. Contact us for a custom SEO strategy tailored to your local market.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-primary">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
