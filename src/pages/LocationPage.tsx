import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, BarChart3, Building2, ChevronDown, Globe, Wrench, BookOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getLocationBySlugAndLang, locationsData, LANG_PREFIXES } from "@/data/locationsData";
import { getLocationContent } from "@/data/locationContent";
import { servicesData } from "@/data/servicesData";
import { getLocationRelatedIndustries, getLocationRelatedBlogs, getLocationRelatedTools } from "@/data/internalLinks";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Determine language prefix from URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  let langPrefix = "";
  if (pathParts.length >= 2 && LANG_PREFIXES.includes(pathParts[0])) {
    langPrefix = pathParts[0];
  }

  const loc = slug ? getLocationBySlugAndLang(slug, langPrefix) : undefined;
  if (!loc) return <Navigate to="/" replace />;

  const displayCity = loc.localCity || loc.city;
  const displayCountry = loc.localCountry || loc.country;
  const content = getLocationContent(loc.lang, displayCity, displayCountry);

  // Get nearby city data
  const nearbyCities = loc.nearbyCities
    .map(ns => locationsData.find(l => l.slug === ns && l.langPrefix === loc.langPrefix))
    .filter(Boolean);

  const isRTL = loc.isRTL;

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
                <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
                <span>/</span>
                <span className="text-foreground">{displayCity}</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-primary">{displayCountry}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {loc.lang === "en"
                  ? <>Professional SEO Services in <span className="text-gradient">{displayCity}</span></>
                  : loc.lang === "ar"
                    ? <>خدمات تحسين محركات البحث الاحترافية في <span className="text-gradient">{displayCity}</span></>
                    : loc.lang === "fr"
                      ? <>Services SEO Professionnels à <span className="text-gradient">{displayCity}</span></>
                      : loc.lang === "de"
                        ? <>Professionelle SEO-Dienste in <span className="text-gradient">{displayCity}</span></>
                        : <>SEO Services in <span className="text-gradient">{displayCity}</span></>
                }
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
                    {loc.lang === "ar" ? "عرض الأسعار" : loc.lang === "fr" ? "Voir les Tarifs" : loc.lang === "de" ? "Preise Ansehen" : "View Pricing"}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-10">{content.challengesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-10">{content.processTitle}</h2>
            <div className="space-y-6">
              {content.processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                      {i + 1}
                    </div>
                    {i < content.processSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-3" />
                    )}
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

        {/* All Services Sidebar */}
        <section className="section-padding bg-card/20 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              {loc.lang === "ar" ? "خدمات السيو المتاحة" : loc.lang === "fr" ? "Nos Services SEO" : loc.lang === "de" ? "Unsere SEO-Dienste" : `Our SEO Services in ${displayCity}`}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {servicesData.slice(0, 12).map((svc) => {
                const SvcIcon = svc.icon;
                return (
                  <Link key={svc.slug} to={`/services/${svc.slug}`} className="glass rounded-lg p-4 flex items-center gap-3 hover:border-primary/30 transition-all group">
                    <SvcIcon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">{svc.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related Industries */}
        {(() => {
          const relIndustries = getLocationRelatedIndustries(loc.countryCode);
          return relIndustries.length > 0 ? (
            <section className="section-padding">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">{content.industriesTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relIndustries.map(ind => {
                    if (!ind) return null;
                    const IndIcon = ind.icon;
                    return (
                      <Link key={ind.slug} to={`/industries/${ind.slug}`} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <IndIcon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-sm">{ind.shortTitle} SEO</h3>
                        </div>
                        <span className="text-xs text-primary flex items-center gap-1">Learn more <ArrowRight className="h-3 w-3" /></span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null;
        })()}

        {/* Related Blog Posts */}
        {(() => {
          const relBlogs = getLocationRelatedBlogs();
          return relBlogs.length > 0 ? (
            <section className="section-padding bg-card/20 border-y border-border">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl font-bold">
                    {loc.lang === "ar" ? "مقالات مفيدة" : loc.lang === "fr" ? "Articles Utiles" : loc.lang === "de" ? "Nützliche Artikel" : "Helpful SEO Resources"}
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
            <section className="section-padding">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl font-bold">
                    {loc.lang === "ar" ? "أدوات سيو مجانية" : loc.lang === "fr" ? "Outils SEO Gratuits" : loc.lang === "de" ? "Kostenlose SEO-Tools" : "Free SEO Tools"}
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6 text-center"
                >
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
                    <Link
                      key={nc.slug + nc.langPrefix}
                      to={href}
                      className="glass rounded-xl p-5 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold text-sm">{ncCity}</h3>
                      </div>
                      <span className="text-xs text-primary flex items-center gap-1">
                        {loc.lang === "ar" ? "اعرف المزيد" : loc.lang === "fr" ? "En savoir plus" : loc.lang === "de" ? "Mehr erfahren" : "Learn more"}{" "}
                        <ArrowRight className={`h-3 w-3 ${isRTL ? "rotate-180" : ""}`} />
                      </span>
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
                  {loc.lang === "ar" ? "هذه الصفحة متوفرة أيضًا بلغات أخرى" : loc.lang === "fr" ? "Cette page est aussi disponible en" : loc.lang === "de" ? "Diese Seite ist auch verfügbar in" : "This page is also available in"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {loc.hreflangAlternates.map((alt) => (
                  <Link
                    key={alt.lang + alt.href}
                    to={alt.href}
                    className="glass rounded-lg px-4 py-2 hover:border-accent/30 transition-all text-sm font-medium"
                  >
                    {alt.lang === "en" ? "English" : alt.lang === "ar" ? "العربية" : alt.lang === "fr" ? "Français" : alt.lang === "de" ? "Deutsch" : alt.lang === "nl" ? "Nederlands" : alt.lang === "he" ? "עברית" : alt.lang.toUpperCase()}
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

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Shahab Abbasi - SEO Expert",
                description: loc.metaDescription,
                url: `https://shahababbasi.com${loc.langPrefix ? `/${loc.langPrefix}` : ""}/${loc.slug}`,
                areaServed: {
                  "@type": "City",
                  name: loc.city,
                  containedInPlace: { "@type": "Country", name: loc.country },
                },
                provider: {
                  "@type": "Person",
                  name: "Shahab Abbasi",
                  url: "https://shahababbasi.com",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: `SEO Services in ${loc.city}`,
                description: loc.metaDescription,
                provider: {
                  "@type": "Person",
                  name: "Shahab Abbasi",
                  url: "https://shahababbasi.com",
                },
                areaServed: { "@type": "City", name: loc.city },
                url: `https://shahababbasi.com${loc.langPrefix ? `/${loc.langPrefix}` : ""}/${loc.slug}`,
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: content.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://shahababbasi.com/services" },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: `SEO Services in ${loc.city}`,
                    item: `https://shahababbasi.com${loc.langPrefix ? `/${loc.langPrefix}` : ""}/${loc.slug}`,
                  },
                ],
              },
            ]),
          }}
        />
      </div>
    </Layout>
  );
};

export default LocationPage;
