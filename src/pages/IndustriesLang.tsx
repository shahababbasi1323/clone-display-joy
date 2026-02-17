import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import NotFound from "./NotFound";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import {
  industriesI18nData, industryI18nUI, categoryI18n,
  INDUSTRY_CATEGORIES_I18N, type SupportedIndustryLang,
} from "@/data/industriesI18n";
import { getIndustryCategoryImage } from "@/components/industry/industryImages";

const VALID_LANGS: SupportedIndustryLang[] = ["ar", "fr", "de", "es", "nl"];

const IndustriesLang = () => {
  const { lang } = useParams<{ lang: string }>();
  if (!lang || !VALID_LANGS.includes(lang as SupportedIndustryLang)) return <NotFound />;

  const l = lang as SupportedIndustryLang;
  const ui = industryI18nUI[l];
  const industries = industriesI18nData[l];
  const categories = INDUSTRY_CATEGORIES_I18N[l];
  const catNames = categoryI18n[l];

  useSeoMeta({
    title: `${ui.hubTitle} ${ui.hubHighlight} | Shahab Abbasi SEO`,
    description: ui.hubDescription,
    canonical: `https://shahababbasi.com/${l}/industries`,
  });

  return (
    <Layout>
      <div dir={ui.dir}>
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {ui.hubTitle} <span className="text-gradient">{ui.hubHighlight}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{ui.hubDescription}</p>
            </motion.div>

            {categories.map((category) => {
              const catIndustries = industries.filter(i => i.category === category);
              if (catIndustries.length === 0) return null;
              const bannerImg = getIndustryCategoryImage(category);
              const catName = catNames[category] || category;
              return (
                <div key={category} className="mb-16">
                  <div className="relative rounded-2xl overflow-hidden mb-6 h-36 md:h-44">
                    <img src={bannerImg} alt={catName} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
                    <div className="absolute inset-0 flex items-center px-6 md:px-10">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">{catName}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{ui.servicesCount(catIndustries.length)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {catIndustries.map((industry, i) => (
                      <motion.div key={industry.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 8) * 0.03 }}>
                        <Link to={`/${l}/industries/${industry.slug}`} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group block h-full">
                          <h3 className="font-semibold text-sm mb-1">{industry.shortTitle}</h3>
                          <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                            {ui.learnMore} <ArrowRight className="h-3 w-3" />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="mt-10 text-center">
              <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">{ui.dontSeeTitle}</h2>
                <p className="text-muted-foreground mb-6">{ui.dontSeeDesc}</p>
                <Link to="/contact">
                  <Button size="lg" className="glow-primary">
                    {ui.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndustriesLang;
