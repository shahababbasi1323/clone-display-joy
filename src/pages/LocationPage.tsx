import { useParams, useLocation, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, BarChart3, ChevronDown, Globe, Wrench, BookOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getLocationBySlugAndLang, locationsData, LANG_PREFIXES } from "@/data/locationsData";
import { getLocationContent } from "@/data/locationContent";
import { getLocationRelatedBlogs, getLocationRelatedTools } from "@/data/internalLinks";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import LocationLsiContent from "@/components/location/LocationLsiContent";
import LocationLandmarks from "@/components/location/LocationLandmarks";
import LocationWhyChoose from "@/components/location/LocationWhyChoose";
import LocationAeo from "@/components/location/LocationAeo";
import LocationServicesInterlink from "@/components/location/LocationServicesInterlink";
import LocationIndustriesInterlink from "@/components/location/LocationIndustriesInterlink";
import LocationSchema from "@/components/location/LocationSchema";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pathParts = location.pathname.split("/").filter(Boolean);
  let langPrefix = "";
  if (pathParts.length >= 2 && LANG_PREFIXES.includes(pathParts[0])) {
    langPrefix = pathParts[0];
  }

  const loc = slug ? getLocationBySlugAndLang(slug, langPrefix) : undefined;
  if (!loc) return <NotFound />;

  const displayCity = loc.localCity || loc.city;
  const displayCountry = loc.localCountry || loc.country;
  const content = getLocationContent(loc.lang, displayCity, displayCountry);
  const citySlug = loc.slug.replace("seo-services-", "");

  const nearbyCities = loc.nearbyCities
    .map(ns => locationsData.find(l => l.slug === ns && l.langPrefix === loc.langPrefix))
    .filter(Boolean);

  // Same-language cities (excluding nearby and self)
  const selfSlug = loc.slug;
  const nearbySet = new Set([selfSlug, ...loc.nearbyCities]);
  const sameLangCities = locationsData
    .filter(l => l.langPrefix === loc.langPrefix && !nearbySet.has(l.slug))
    .slice(0, 12);

  const isRTL = loc.isRTL;

  // Unique meta per page
  const h1Map: Record<string, string> = {
    en: "Professional SEO Services in",
    ar: "خدمات تحسين محركات البحث الاحترافية في",
    fr: "Services SEO Professionnels à",
    de: "Professionelle SEO-Dienste in",
    nl: "Professionele SEO-diensten in",
    es: "Servicios SEO Profesionales en",
    it: "Servizi SEO Professionali a",
    pt: "Serviços SEO Profissionais em",
    tr: "Profesyonel SEO Hizmetleri",
    ja: "プロフェッショナルSEOサービス",
    ko: "전문 SEO 서비스",
    he: "שירותי קידום אתרים מקצועיים ב",
    da: "Professionelle SEO-tjenester i",
    sv: "Professionella SEO-tjänster i",
    no: "Profesjonelle SEO-tjenester i",
    fi: "Ammattimaiset SEO-palvelut",
    pl: "Profesjonalne Usługi SEO w",
    cs: "Profesionální SEO Služby v",
    hu: "Professzionális SEO Szolgáltatások",
    ro: "Servicii SEO Profesionale în",
    el: "Επαγγελματικές Υπηρεσίες SEO στην",
    th: "บริการ SEO มืออาชีพใน",
  };
  const h1Prefix = h1Map[loc.lang] || h1Map.en;

  // Unique SEO meta for this page
  // Build full hreflang list: self + all alternates
  const selfLang = loc.lang === "en" ? "en" : loc.lang;
  const selfHref = `https://shahababbasi.com${loc.langPrefix ? `/${loc.langPrefix}` : ""}/${loc.slug}`;
  const hreflangList = [
    { lang: selfLang, href: selfHref },
    ...loc.hreflangAlternates.map(alt => ({
      lang: alt.lang,
      href: alt.href.startsWith("http") ? alt.href : `https://shahababbasi.com${alt.href}`,
    })),
  ];

  useSeoMeta({
    title: loc.metaTitle,
    description: loc.metaDescription,
    canonical: selfHref,
    hreflang: hreflangList,
  });

  // Localized labels
  const moreCitiesLabel: Record<string, string> = {
    en: "More Cities We Serve",
    ar: "المزيد من المدن التي نخدمها",
    fr: "Autres Villes que Nous Desservons",
    de: "Weitere Städte, die Wir Bedienen",
    es: "Más Ciudades que Servimos",
    nl: "Meer Steden die We Bedienen",
    it: "Altre Città che Serviamo",
    pt: "Mais Cidades que Atendemos",
    tr: "Hizmet Verdiğimiz Diğer Şehirler",
    ja: "サービス対象の他の都市",
    ko: "서비스하는 다른 도시",
    he: "ערים נוספות שאנו משרתים",
  };

  const viewPricingLabel: Record<string, string> = {
    en: "View Pricing", ar: "عرض الأسعار", fr: "Voir les Tarifs", de: "Preise Ansehen",
    es: "Ver Precios", nl: "Prijzen Bekijken", it: "Vedi Prezzi", pt: "Ver Preços",
    tr: "Fiyatları Gör", ja: "料金を見る", ko: "가격 보기", he: "צפה במחירים",
  };

  return (
    <Layout>
      <div dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero */}
        <section className="section-padding pb-12">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <Link to={loc.langPrefix ? `/${loc.langPrefix}/locations` : "/locations"} className="hover:text-foreground transition-colors">
                  {loc.lang === "ar" ? "المواقع" : loc.lang === "fr" ? "Emplacements" : loc.lang === "de" ? "Standorte" : loc.lang === "es" ? "Ubicaciones" : "Locations"}
                </Link>
                <span>/</span>
                <span className="text-foreground">{displayCity}</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-primary">{displayCountry}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {h1Prefix} <span className="text-gradient">{displayCity}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                {content.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/free-seo-audit">
                  <Button size="lg" className="glow-primary">
                    {content.ctaButton} <ArrowRight className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} h-5 w-5`} />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg">
                    {viewPricingLabel[loc.lang] || viewPricingLabel.en}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <LocationLsiContent content={content} />

        {/* Challenges */}
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-10">{content.challengesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.challenges.map((challenge, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LocationWhyChoose content={content} />

        {/* Process */}
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-10">{content.processTitle}</h2>
            <div className="space-y-6">
              {content.processSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: isRTL ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary shrink-0">{i + 1}</div>
                    {i < content.processSteps.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LocationAeo content={content} />
        <LocationLandmarks content={content} citySlug={citySlug} />
        <LocationServicesInterlink content={content} lang={loc.lang} />
        <LocationIndustriesInterlink content={content} countryCode={loc.countryCode} lang={loc.lang} />

        {/* Related Blogs */}
        {(() => {
          const relBlogs = getLocationRelatedBlogs();
          return relBlogs.length > 0 ? (
            <section className="section-padding">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl font-bold">
                    {loc.lang === "ar" ? "مقالات مفيدة" : loc.lang === "fr" ? "Articles Utiles" : loc.lang === "de" ? "Nützliche Artikel" : loc.lang === "es" ? "Artículos Útiles" : "Helpful SEO Resources"}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relBlogs.map(blog => blog && (
                    <Link key={blog.slug} to={`/blog/${blog.slug}`} className="glass rounded-xl p-5 hover:border-accent/30 transition-all group">
                      <span className="text-xs text-accent font-medium">{blog.category}</span>
                      <h3 className="font-semibold text-sm mt-1 line-clamp-2">{blog.title}</h3>
                      <span className="text-xs text-accent mt-2 flex items-center gap-1">Read article <ArrowRight className="h-3 w-3" /></span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null;
        })()}

        {/* Related Tools */}
        {(() => {
          const relTools = getLocationRelatedTools();
          return relTools.length > 0 ? (
            <section className="section-padding bg-card/20 border-y border-border">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl font-bold">
                    {loc.lang === "ar" ? "أدوات سيو مجانية" : loc.lang === "fr" ? "Outils SEO Gratuits" : loc.lang === "de" ? "Kostenlose SEO-Tools" : loc.lang === "es" ? "Herramientas SEO Gratuitas" : "Free SEO Tools"}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {relTools.map(tool => tool && (
                    <Link key={tool.slug} to={`/tools/${tool.slug}`} className="glass rounded-lg px-4 py-3 hover:border-accent/30 transition-all text-sm font-medium flex items-center gap-2 group">
                      {tool.name} <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null;
        })()}

        {/* Results */}
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-10">
              <BarChart3 className="h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold">{content.resultsTitle}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {content.results.map((result, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{result.stat}</div>
                  <div className="text-sm text-muted-foreground">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-10">{content.faqTitle}</h2>
            <div className="space-y-3">
              {content.faqs.map((faq, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
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

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="section-padding">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">{content.nearbyCitiesTitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nearbyCities.map((nc) => {
                  if (!nc) return null;
                  const ncCity = nc.localCity || nc.city;
                  const href = nc.langPrefix ? `/${nc.langPrefix}/${nc.slug}` : `/${nc.slug}`;
                  return (
                    <Link key={nc.slug + nc.langPrefix} to={href} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold text-sm">{ncCity}</h3>
                      </div>
                      <span className="text-xs text-primary flex items-center gap-1">
                        {loc.lang === "ar" ? "اعرف المزيد" : loc.lang === "fr" ? "En savoir plus" : loc.lang === "de" ? "Mehr erfahren" : loc.lang === "es" ? "Saber más" : "Learn more"}{" "}
                        <ArrowRight className={`h-3 w-3 ${isRTL ? "rotate-180" : ""}`} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Same-Language Cities */}
        {sameLangCities.length > 0 && (
          <section className="section-padding bg-card/20 border-y border-border">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold">{moreCitiesLabel[loc.lang] || moreCitiesLabel.en}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {sameLangCities.map((sc) => {
                  const scCity = sc.localCity || sc.city;
                  const scCountry = sc.localCountry || sc.country;
                  const href = sc.langPrefix ? `/${sc.langPrefix}/${sc.slug}` : `/${sc.slug}`;
                  return (
                    <Link key={sc.slug + sc.langPrefix} to={href} className="glass rounded-lg p-4 hover:border-accent/30 transition-all group">
                      <h4 className="font-semibold text-sm">{scCity}</h4>
                      <span className="text-xs text-muted-foreground">{scCountry}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Hreflang Alternates */}
        {loc.hreflangAlternates.length > 0 && (
          <section className="section-padding bg-card/30 border-t border-border">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-bold">
                  {loc.lang === "ar" ? "هذه الصفحة متوفرة أيضًا بلغات أخرى" : loc.lang === "fr" ? "Cette page est aussi disponible en" : loc.lang === "de" ? "Diese Seite ist auch verfügbar in" : loc.lang === "es" ? "Esta página también está disponible en" : "This page is also available in"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {loc.hreflangAlternates.map((alt) => (
                  <Link key={alt.lang + alt.href} to={alt.href} className="glass rounded-lg px-4 py-2 hover:border-accent/30 transition-all text-sm font-medium">
                    {alt.lang === "en" ? "English" : alt.lang === "ar" ? "العربية" : alt.lang === "fr" ? "Français" : alt.lang === "de" ? "Deutsch" : alt.lang === "nl" ? "Nederlands" : alt.lang === "he" ? "עברית" : alt.lang === "es" ? "Español" : alt.lang.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
              <h2 className="text-3xl font-bold mb-4">{content.ctaTitle}</h2>
              <p className="text-muted-foreground mb-6">{content.ctaDesc}</p>
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary">
                  {content.ctaButton} <ArrowRight className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} h-5 w-5`} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <LocationSchema loc={loc} content={content} displayCity={displayCity} />
      </div>
    </Layout>
  );
};

export default LocationPage;
