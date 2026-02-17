import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { getLocationRelatedIndustries } from "@/data/internalLinks";
import { industriesData } from "@/data/industriesData";
import type { LocationContent } from "@/data/locationContent";
import type { SupportedIndustryLang } from "@/data/industriesI18n";

// Localized industry names per language
const industryNames: Record<string, Record<string, string>> = {
  ar: {
    "healthcare-seo": "الرعاية الصحية", "dental-seo": "طب الأسنان", "legal-seo": "القانون والمحاماة",
    "real-estate-seo": "العقارات", "restaurant-seo": "المطاعم والأغذية", "ecommerce-retail-seo": "التجارة الإلكترونية",
    "saas-seo": "البرمجيات والتقنية", "education-seo": "التعليم والتدريب", "construction-seo": "البناء والمقاولات",
    "travel-seo": "السياحة والسفر", "auto-dealer-seo": "السيارات", "beauty-salon-seo": "التجميل والعناية",
    "fashion-seo": "الأزياء والموضة", "fitness-seo": "اللياقة البدنية", "accounting-seo": "المحاسبة والمالية",
    "startup-seo": "الشركات الناشئة", "insurance-seo": "التأمين", "photography-seo": "التصوير الفوتوغرافي",
  },
  fr: {
    "healthcare-seo": "Santé", "dental-seo": "Dentistes", "legal-seo": "Juridique",
    "real-estate-seo": "Immobilier", "restaurant-seo": "Restaurants", "ecommerce-retail-seo": "E-commerce",
    "saas-seo": "SaaS & Tech", "education-seo": "Éducation", "construction-seo": "Construction",
    "travel-seo": "Tourisme & Voyage", "auto-dealer-seo": "Automobile", "beauty-salon-seo": "Beauté",
    "fashion-seo": "Mode", "fitness-seo": "Fitness", "accounting-seo": "Comptabilité",
  },
  de: {
    "healthcare-seo": "Gesundheitswesen", "dental-seo": "Zahnarztpraxen", "legal-seo": "Rechtsanwälte",
    "real-estate-seo": "Immobilien", "restaurant-seo": "Restaurants", "ecommerce-retail-seo": "E-Commerce",
    "saas-seo": "SaaS & Tech", "education-seo": "Bildung", "construction-seo": "Bauwesen",
    "travel-seo": "Tourismus & Reisen", "auto-dealer-seo": "Automobilhändler", "beauty-salon-seo": "Schönheit",
    "fashion-seo": "Mode", "fitness-seo": "Fitness", "accounting-seo": "Buchhaltung",
  },
  es: {
    "healthcare-seo": "Salud", "dental-seo": "Dentistas", "legal-seo": "Legal",
    "real-estate-seo": "Inmobiliario", "restaurant-seo": "Restaurantes", "ecommerce-retail-seo": "E-commerce",
    "saas-seo": "SaaS & Tech", "education-seo": "Educación", "construction-seo": "Construcción",
    "travel-seo": "Turismo y Viajes", "auto-dealer-seo": "Automoción", "beauty-salon-seo": "Belleza",
    "fashion-seo": "Moda", "fitness-seo": "Fitness", "accounting-seo": "Contabilidad",
  },
  nl: {
    "healthcare-seo": "Gezondheidszorg", "dental-seo": "Tandartsen", "legal-seo": "Juridisch",
    "real-estate-seo": "Vastgoed", "restaurant-seo": "Restaurants", "ecommerce-retail-seo": "E-commerce",
    "saas-seo": "SaaS & Tech", "education-seo": "Onderwijs", "travel-seo": "Toerisme & Reizen",
  },
  it: {
    "healthcare-seo": "Sanità", "dental-seo": "Dentisti", "legal-seo": "Legale",
    "real-estate-seo": "Immobiliare", "restaurant-seo": "Ristoranti", "ecommerce-retail-seo": "E-commerce",
    "saas-seo": "SaaS & Tech", "education-seo": "Istruzione", "travel-seo": "Turismo e Viaggi",
    "fashion-seo": "Moda", "fitness-seo": "Fitness",
  },
  pt: {
    "healthcare-seo": "Saúde", "dental-seo": "Dentistas", "legal-seo": "Jurídico",
    "real-estate-seo": "Imobiliário", "restaurant-seo": "Restaurantes", "ecommerce-retail-seo": "E-commerce",
    "saas-seo": "SaaS & Tech", "education-seo": "Educação", "travel-seo": "Turismo e Viagens",
  },
  tr: {
    "healthcare-seo": "Sağlık", "real-estate-seo": "Gayrimenkul", "restaurant-seo": "Restoranlar",
    "ecommerce-retail-seo": "E-ticaret", "travel-seo": "Turizm ve Seyahat", "education-seo": "Eğitim",
  },
  ja: {
    "healthcare-seo": "ヘルスケア", "real-estate-seo": "不動産", "ecommerce-retail-seo": "Eコマース",
    "saas-seo": "SaaS・テック", "auto-dealer-seo": "自動車ディーラー", "education-seo": "教育",
  },
  ko: {
    "healthcare-seo": "헬스케어", "real-estate-seo": "부동산", "ecommerce-retail-seo": "이커머스",
    "saas-seo": "SaaS & 기술", "beauty-salon-seo": "뷰티", "education-seo": "교육",
  },
  he: {
    "healthcare-seo": "בריאות", "real-estate-seo": "נדל\"ן", "ecommerce-retail-seo": "מסחר אלקטרוני",
    "saas-seo": "SaaS וטכנולוגיה", "startup-seo": "סטארטאפים",
  },
  da: {
    "healthcare-seo": "Sundhed", "dental-seo": "Tandlæger", "legal-seo": "Juridisk",
    "real-estate-seo": "Ejendomme", "restaurant-seo": "Restauranter", "ecommerce-retail-seo": "E-handel",
    "saas-seo": "SaaS & Tech", "education-seo": "Uddannelse", "construction-seo": "Byggeri",
    "travel-seo": "Turisme & Rejser", "auto-dealer-seo": "Bilforhandlere", "beauty-salon-seo": "Skønhed",
    "fashion-seo": "Mode", "fitness-seo": "Fitness", "accounting-seo": "Regnskab",
  },
  sv: {
    "healthcare-seo": "Hälsovård", "dental-seo": "Tandläkare", "legal-seo": "Juridik",
    "real-estate-seo": "Fastigheter", "restaurant-seo": "Restauranger", "ecommerce-retail-seo": "E-handel",
    "saas-seo": "SaaS & Tech", "education-seo": "Utbildning", "construction-seo": "Bygg",
    "travel-seo": "Turism & Resor", "auto-dealer-seo": "Bilhandlare", "beauty-salon-seo": "Skönhet",
    "fashion-seo": "Mode", "fitness-seo": "Fitness", "accounting-seo": "Redovisning",
  },
  no: {
    "healthcare-seo": "Helsevesen", "dental-seo": "Tannleger", "legal-seo": "Juridisk",
    "real-estate-seo": "Eiendom", "restaurant-seo": "Restauranter", "ecommerce-retail-seo": "E-handel",
    "saas-seo": "SaaS & Tech", "education-seo": "Utdanning", "construction-seo": "Bygg & Anlegg",
    "travel-seo": "Turisme & Reiser", "auto-dealer-seo": "Bilforhandlere", "beauty-salon-seo": "Skjønnhet",
    "fashion-seo": "Mote", "fitness-seo": "Fitness", "accounting-seo": "Regnskap",
  },
  fi: {
    "healthcare-seo": "Terveydenhuolto", "dental-seo": "Hammaslääkärit", "legal-seo": "Lakipalvelut",
    "real-estate-seo": "Kiinteistöt", "restaurant-seo": "Ravintolat", "ecommerce-retail-seo": "Verkkokauppa",
    "saas-seo": "SaaS & Tech", "education-seo": "Koulutus", "construction-seo": "Rakentaminen",
    "travel-seo": "Matkailu", "auto-dealer-seo": "Autokaupat", "beauty-salon-seo": "Kauneus",
    "fashion-seo": "Muoti", "fitness-seo": "Fitness", "accounting-seo": "Kirjanpito",
  },
};

const learnMoreLabels: Record<string, string> = {
  ar: "اعرف المزيد", fr: "En savoir plus", de: "Mehr erfahren", es: "Saber más",
  nl: "Meer leren", it: "Scopri di più", pt: "Saiba mais", tr: "Daha fazla",
  ja: "詳しく見る", ko: "더 알아보기", he: "למידע נוסף",
  da: "Læs mere", sv: "Läs mer", no: "Les mer", fi: "Lue lisää",
};

const i18nLangs: SupportedIndustryLang[] = ["ar", "fr", "de", "es", "nl"];

interface Props {
  content: LocationContent;
  countryCode: string;
  lang?: string;
}

const LocationIndustriesInterlink = ({ content, countryCode, lang = "en" }: Props) => {
  const relIndustries = getLocationRelatedIndustries(countryCode);
  
  // Also show additional industries relevant to the region
  const additionalSlugs = ["healthcare-seo", "ecommerce-retail-seo", "real-estate-seo", "legal-seo", "restaurant-seo", "education-seo", "saas-seo", "travel-seo", "construction-seo"];
  const existingSlugs = relIndustries.map(i => i?.slug);
  const extras = additionalSlugs
    .filter(s => !existingSlugs.includes(s))
    .slice(0, 6)
    .map(s => industriesData.find(ind => ind.slug === s))
    .filter(Boolean);

  const allIndustries = [...relIndustries.filter(Boolean), ...extras];
  if (allIndustries.length === 0) return null;

  const langNames = industryNames[lang];
  const learnMore = learnMoreLabels[lang] || "Learn more";
  const hasI18nIndustries = i18nLangs.includes(lang as SupportedIndustryLang);

  return (
    <section className="section-padding bg-card/20 border-y border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">{content.industriesInterlinkTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allIndustries.map((ind) => {
            if (!ind) return null;
            const IndIcon = ind.icon;
            const localName = langNames?.[ind.slug] || ind.shortTitle;
            // Link to lang-specific industry page if that language is supported
            const href = hasI18nIndustries
              ? `/${lang}/industries/${ind.slug}`
              : `/industries/${ind.slug}`;

            return (
              <Link
                key={ind.slug}
                to={href}
                className="glass rounded-xl p-5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IndIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{localName} SEO</h3>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {langNames?.[ind.slug] ? `${localName} — ${ind.metaDescription}` : ind.metaDescription}
                </p>
                <span className="text-xs text-primary flex items-center gap-1">
                  {learnMore} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationIndustriesInterlink;
