export interface LocationData {
  slug: string;
  city: string;
  localCity?: string;
  country: string;
  localCountry?: string;
  countryCode: string;
  lang: string;
  langPrefix: string;
  metaTitle: string;
  metaDescription: string;
  nearbyCities: string[];
  hreflangAlternates: { lang: string; href: string }[];
  region?: string;
  isRTL?: boolean;
}

// Factory helpers
// Unique meta description generator using city-specific variation
const hashStr = (s: string) => { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); };

const enDescTemplates = [
  (c: string, co: string) => `Top-rated SEO agency in ${c}, ${co}. We deliver higher rankings, more organic traffic, and measurable ROI through technical SEO, content strategy, and authority link building. Claim your free audit.`,
  (c: string, co: string) => `Grow your ${c} business with expert SEO services. Our proven strategies combine on-page optimization, local SEO, and data-driven content marketing to dominate search results in ${co}. Free consultation.`,
  (c: string, co: string) => `Looking for SEO experts in ${c}? We help ${co} businesses rank higher on Google with comprehensive audits, keyword research, link building, and AI-ready content optimization. Get started free.`,
  (c: string, co: string) => `Results-driven SEO services for businesses in ${c}, ${co}. From Core Web Vitals optimization to GEO and AEO strategies, we build long-term organic growth. Request your free SEO analysis.`,
  (c: string, co: string) => `Boost your online visibility in ${c} with a dedicated SEO partner. We specialize in technical audits, local map pack rankings, and conversion-focused content for ${co} markets. Free site audit.`,
  (c: string, co: string) => `${c} SEO services that drive real business growth. Our ${co}-focused team handles everything from site architecture to link acquisition and AI search optimization. Schedule a free strategy call.`,
  (c: string, co: string) => `Rank #1 in ${c} with our tailored SEO solutions. We combine deep technical expertise, strategic content writing, and white-hat backlinks to outperform competitors in ${co}. Free audit available.`,
  (c: string, co: string) => `Award-winning SEO company serving ${c} and ${co}. Specializing in technical SEO, local search dominance, e-commerce optimization, and generative engine visibility. Get your free growth plan.`,
];

const enTitleTemplates = [
  (c: string, co: string) => `SEO Services in ${c} | Expert SEO Agency ${co}`,
  (c: string, co: string) => `${c} SEO Agency | Proven Search Engine Optimization ${co}`,
  (c: string, co: string) => `SEO Expert in ${c} | Top-Rated SEO Services ${co}`,
  (c: string, co: string) => `Best SEO Company in ${c} | SEO Specialists ${co}`,
];

const en = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "en", langPrefix: "",
  metaTitle: enTitleTemplates[hashStr(slugCity) % enTitleTemplates.length](city, country),
  metaDescription: enDescTemplates[hashStr(slugCity) % enDescTemplates.length](city, country),
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const ar = (
  city: string, localCity: string, slugCity: string, country: string, localCountry: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, localCity, country, localCountry, countryCode: cc, lang: "ar", langPrefix: "ar",
  metaTitle: `خدمات سيو في ${localCity} - خبير تحسين محركات البحث ${localCountry}`,
  metaDescription: `خدمات تحسين محركات البحث الاحترافية في ${localCity}، ${localCountry}. تحسين تقني، بناء روابط، واستراتيجية محتوى. احصل على تدقيق سيو مجاني لأعمالك.`,
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region, isRTL: true,
});

const fr = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "fr", langPrefix: "fr",
  metaTitle: `Services SEO à ${city} - Expert Référencement ${country}`,
  metaDescription: `Services de référencement professionnel à ${city}, ${country}. SEO technique, création de liens, stratégie de contenu. Audit SEO gratuit pour votre entreprise.`,
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const de = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "de", langPrefix: "de",
  metaTitle: `SEO Agentur ${city} - Suchmaschinenoptimierung ${country}`,
  metaDescription: `Professionelle SEO-Dienstleistungen in ${city}, ${country}. Technisches SEO, Linkaufbau, Content-Strategie. Kostenloses SEO-Audit für Ihr Unternehmen.`,
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const nl = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "nl", langPrefix: "nl",
  metaTitle: `SEO Diensten ${city} - SEO Expert ${country}`,
  metaDescription: `Professionele SEO-diensten in ${city}, ${country}. Technische SEO, linkbuilding, contentstrategie. Gratis SEO-audit voor uw bedrijf.`,
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const it = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "it", langPrefix: "it",
  metaTitle: `Servizi SEO a ${city} - Esperto SEO ${country}`,
  metaDescription: `Servizi SEO professionali a ${city}, ${country}. SEO tecnico, link building, strategia dei contenuti. Audit SEO gratuito per la tua azienda.`,
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const es = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "es", langPrefix: "es",
  metaTitle: `Servicios SEO en ${city} - Experto Posicionamiento ${country}`,
  metaDescription: `Servicios profesionales de SEO en ${city}, ${country}. SEO técnico, link building, estrategia de contenidos. Auditoría SEO gratuita para tu negocio.`,
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const pt = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "pt", langPrefix: "pt",
  metaTitle: `Serviços SEO em ${city} - Especialista SEO ${country}`,
  metaDescription: `Serviços profissionais de SEO em ${city}, ${country}. SEO técnico, link building, estratégia de conteúdo. Auditoria SEO gratuita para o seu negócio.`,
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const langFactory = (
  langCode: string, prefix: string,
  titleFn: (city: string, country: string) => string,
  descFn: (city: string, country: string) => string,
) => (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: langCode, langPrefix: prefix,
  metaTitle: titleFn(city, country),
  metaDescription: descFn(city, country),
  nearbyCities: nearby.map(n => `seo-services-${n}`),
  hreflangAlternates: alt, region,
});

const da = langFactory("da", "da",
  (c, co) => `SEO Tjenester i ${c} - SEO Ekspert ${co}`,
  (c, co) => `Professionelle SEO-tjenester i ${c}, ${co}. Teknisk SEO, linkbuilding, indholdsstrategi. Gratis SEO-audit til din virksomhed.`
);
const sv = langFactory("sv", "sv",
  (c, co) => `SEO Tjänster i ${c} - SEO Expert ${co}`,
  (c, co) => `Professionella SEO-tjänster i ${c}, ${co}. Teknisk SEO, länkbyggande, innehållsstrategi. Gratis SEO-granskning för ditt företag.`
);
const no_ = langFactory("no", "no",
  (c, co) => `SEO Tjenester i ${c} - SEO Ekspert ${co}`,
  (c, co) => `Profesjonelle SEO-tjenester i ${c}, ${co}. Teknisk SEO, lenkebygging, innholdsstrategi. Gratis SEO-revisjon for din bedrift.`
);
const fi = langFactory("fi", "fi",
  (c, co) => `SEO Palvelut ${c} - SEO Asiantuntija ${co}`,
  (c, co) => `Ammattimaiset SEO-palvelut ${c}, ${co}. Tekninen SEO, linkkien rakentaminen, sisältöstrategia. Ilmainen SEO-auditointi yrityksellesi.`
);
const pl = langFactory("pl", "pl",
  (c, co) => `Usługi SEO ${c} - Ekspert Pozycjonowania ${co}`,
  (c, co) => `Profesjonalne usługi SEO w ${c}, ${co}. Techniczne SEO, link building, strategia treści. Darmowy audyt SEO dla Twojej firmy.`
);
const cs = langFactory("cs", "cs",
  (c, co) => `SEO Služby ${c} - SEO Expert ${co}`,
  (c, co) => `Profesionální SEO služby v ${c}, ${co}. Technické SEO, linkbuilding, obsahová strategie. Bezplatný SEO audit pro vaši firmu.`
);
const hu = langFactory("hu", "hu",
  (c, co) => `SEO Szolgáltatások ${c} - Keresőoptimalizálás ${co}`,
  (c, co) => `Professzionális SEO szolgáltatások ${c}, ${co}. Technikai SEO, linképítés, tartalomstratégia. Ingyenes SEO audit vállalkozásának.`
);
const ro = langFactory("ro", "ro",
  (c, co) => `Servicii SEO ${c} - Expert Optimizare ${co}`,
  (c, co) => `Servicii profesionale SEO în ${c}, ${co}. SEO tehnic, link building, strategie de conținut. Audit SEO gratuit pentru afacerea ta.`
);
const el = langFactory("el", "el",
  (c, co) => `Υπηρεσίες SEO ${c} - Ειδικός SEO ${co}`,
  (c, co) => `Επαγγελματικές υπηρεσίες SEO στην ${c}, ${co}. Τεχνικό SEO, link building, στρατηγική περιεχομένου. Δωρεάν SEO audit.`
);
const tr = langFactory("tr", "tr",
  (c, co) => `${c} SEO Hizmetleri - SEO Uzmanı ${co}`,
  (c, co) => `${c}, ${co} profesyonel SEO hizmetleri. Teknik SEO, link inşası, içerik stratejisi. İşletmeniz için ücretsiz SEO denetimi.`
);
const ja = langFactory("ja", "ja",
  (c) => `${c}のSEOサービス - SEO専門家`,
  (c, co) => `${c}、${co}のプロフェッショナルSEOサービス。テクニカルSEO、リンク構築、コンテンツ戦略。無料SEO監査。`
);
const ko = langFactory("ko", "ko",
  (c) => `${c} SEO 서비스 - SEO 전문가`,
  (c, co) => `${c}, ${co}의 전문 SEO 서비스. 기술 SEO, 링크 빌딩, 콘텐츠 전략. 무료 SEO 감사.`
);
const he = langFactory("he", "he",
  (c) => `שירותי קידום אתרים ב${c} - מומחה SEO`,
  (c, co) => `שירותי SEO מקצועיים ב${c}, ${co}. SEO טכני, בניית קישורים, אסטרטגיית תוכן. ביקורת SEO חינם לעסק שלך.`
);

// Helper for hreflang
const h = (lang: string, prefix: string, slug: string) => ({
  lang,
  href: prefix ? `/${prefix}/${slug}` : `/${slug}`,
});

export const locationsData: LocationData[] = [
  // ============================================================
  // PAKISTAN (English — 8 Cities)
  // ============================================================
  en("Islamabad", "islamabad", "Pakistan", "PK", ["rawalpindi", "lahore", "peshawar"]),
  en("Rawalpindi", "rawalpindi", "Pakistan", "PK", ["islamabad", "lahore", "faisalabad"]),
  en("Lahore", "lahore", "Pakistan", "PK", ["islamabad", "rawalpindi", "faisalabad"]),
  en("Karachi", "karachi", "Pakistan", "PK", ["lahore", "islamabad", "multan"]),
  en("Peshawar", "peshawar", "Pakistan", "PK", ["islamabad", "rawalpindi", "lahore"]),
  en("Faisalabad", "faisalabad", "Pakistan", "PK", ["lahore", "rawalpindi", "multan"]),
  en("Multan", "multan", "Pakistan", "PK", ["lahore", "faisalabad", "karachi"]),
  en("Sialkot", "sialkot", "Pakistan", "PK", ["lahore", "faisalabad", "islamabad"]),

  // ============================================================
  // UAE (English — 7 Cities)
  // ============================================================
  en("Dubai", "dubai", "UAE", "AE", ["abu-dhabi", "sharjah", "ajman"]),
  en("Abu Dhabi", "abu-dhabi", "UAE", "AE", ["dubai", "al-ain", "sharjah"]),
  en("Sharjah", "sharjah", "UAE", "AE", ["dubai", "ajman", "abu-dhabi"]),
  en("Ajman", "ajman", "UAE", "AE", ["sharjah", "dubai", "ras-al-khaimah"]),
  en("Ras Al Khaimah", "ras-al-khaimah", "UAE", "AE", ["ajman", "fujairah", "sharjah"]),
  en("Fujairah", "fujairah", "UAE", "AE", ["ras-al-khaimah", "sharjah", "dubai"]),
  en("Al Ain", "al-ain", "UAE", "AE", ["abu-dhabi", "dubai", "sharjah"]),

  // ============================================================
  // SAUDI ARABIA (Arabic — 8 Cities)
  // ============================================================
  ar("Riyadh", "الرياض", "riyadh", "Saudi Arabia", "السعودية", "SA", ["jeddah", "dammam", "makkah"]),
  ar("Jeddah", "جدة", "jeddah", "Saudi Arabia", "السعودية", "SA", ["riyadh", "makkah", "madinah"]),
  ar("Dammam", "الدمام", "dammam", "Saudi Arabia", "السعودية", "SA", ["khobar", "riyadh", "jeddah"]),
  ar("Makkah", "مكة المكرمة", "makkah", "Saudi Arabia", "السعودية", "SA", ["jeddah", "madinah", "riyadh"]),
  ar("Madinah", "المدينة المنورة", "madinah", "Saudi Arabia", "السعودية", "SA", ["makkah", "jeddah", "tabuk"]),
  ar("Khobar", "الخبر", "khobar", "Saudi Arabia", "السعودية", "SA", ["dammam", "riyadh", "jeddah"], [], "المنطقة الشرقية"),
  ar("Tabuk", "تبوك", "tabuk", "Saudi Arabia", "السعودية", "SA", ["madinah", "riyadh", "jeddah"], [], "شمال السعودية"),
  ar("Abha", "أبها", "abha", "Saudi Arabia", "السعودية", "SA", ["riyadh", "jeddah", "makkah"], [], "المنطقة الجنوبية"),

  // ============================================================
  // QATAR (Arabic — 2 Cities)
  // ============================================================
  ar("Doha", "الدوحة", "doha", "Qatar", "قطر", "QA", ["lusail"]),
  ar("Lusail", "لوسيل", "lusail", "Qatar", "قطر", "QA", ["doha"]),

  // ============================================================
  // BAHRAIN (Arabic — 1 City)
  // ============================================================
  ar("Manama", "المنامة", "manama", "Bahrain", "البحرين", "BH", ["riffa"]),

  // ============================================================
  // KUWAIT (Arabic — 1 City)
  // ============================================================
  ar("Kuwait City", "الكويت", "kuwait-city", "Kuwait", "الكويت", "KW", ["hawalli", "salmiya"]),

  // ============================================================
  // OMAN (Arabic — 1 City)
  // ============================================================
  ar("Muscat", "مسقط", "muscat", "Oman", "عُمان", "OM", ["salalah", "sohar"]),

  // ============================================================
  // JORDAN (Arabic — 1 City)
  // ============================================================
  ar("Amman", "عمّان", "amman", "Jordan", "الأردن", "JO", ["irbid"]),

  // ============================================================
  // LEBANON (Arabic — 1 City)
  // ============================================================
  ar("Beirut", "بيروت", "beirut", "Lebanon", "لبنان", "LB", ["tripoli-lebanon"]),

  // ============================================================
  // EGYPT (Arabic — 2 Cities)
  // ============================================================
  ar("Cairo", "القاهرة", "cairo", "Egypt", "مصر", "EG", ["alexandria", "giza"]),
  ar("Alexandria", "الإسكندرية", "alexandria", "Egypt", "مصر", "EG", ["cairo", "giza"]),

  // ============================================================
  // MOROCCO (French + Arabic — 1 City each)
  // ============================================================
  fr("Casablanca", "casablanca", "Maroc", "MA", ["marrakech", "rabat"], [h("ar", "ar", "seo-services-casablanca")]),
  ar("Casablanca", "الدار البيضاء", "casablanca", "Morocco", "المغرب", "MA", ["marrakech", "rabat"], [h("fr", "fr", "seo-services-casablanca")]),

  // ============================================================
  // TUNISIA (French — 1 City)
  // ============================================================
  fr("Tunis", "tunis", "Tunisie", "TN", []),

  // ============================================================
  // UNITED KINGDOM (English — 12 Cities)
  // ============================================================
  en("London", "london", "United Kingdom", "GB", ["manchester", "birmingham", "bristol"]),
  en("Manchester", "manchester", "United Kingdom", "GB", ["london", "liverpool", "leeds"]),
  en("Birmingham", "birmingham", "United Kingdom", "GB", ["london", "manchester", "nottingham"]),
  en("Leeds", "leeds", "United Kingdom", "GB", ["manchester", "sheffield", "newcastle"]),
  en("Liverpool", "liverpool", "United Kingdom", "GB", ["manchester", "leeds", "birmingham"]),
  en("Bristol", "bristol", "United Kingdom", "GB", ["london", "cardiff", "birmingham"]),
  en("Edinburgh", "edinburgh", "United Kingdom", "GB", ["glasgow", "newcastle", "manchester"]),
  en("Glasgow", "glasgow", "United Kingdom", "GB", ["edinburgh", "newcastle", "manchester"]),
  en("Cardiff", "cardiff", "United Kingdom", "GB", ["bristol", "london", "birmingham"]),
  en("Newcastle", "newcastle", "United Kingdom", "GB", ["edinburgh", "leeds", "manchester"]),
  en("Sheffield", "sheffield", "United Kingdom", "GB", ["leeds", "nottingham", "manchester"]),
  en("Nottingham", "nottingham", "United Kingdom", "GB", ["birmingham", "sheffield", "leeds"]),

  // ============================================================
  // UNITED STATES (English — 20 Cities)
  // ============================================================
  en("New York", "new-york", "United States", "US", ["boston", "charlotte", "detroit"]),
  en("Los Angeles", "los-angeles", "United States", "US", ["san-diego", "san-francisco", "las-vegas"]),
  en("Chicago", "chicago", "United States", "US", ["detroit", "minneapolis", "dallas"]),
  en("Houston", "houston", "United States", "US", ["dallas", "san-antonio", "austin"]),
  en("Phoenix", "phoenix", "United States", "US", ["las-vegas", "los-angeles", "denver"]),
  en("San Antonio", "san-antonio", "United States", "US", ["houston", "austin", "dallas"]),
  en("San Diego", "san-diego", "United States", "US", ["los-angeles", "las-vegas", "phoenix"]),
  en("Dallas", "dallas", "United States", "US", ["houston", "austin", "san-antonio"]),
  en("Austin", "austin", "United States", "US", ["houston", "dallas", "san-antonio"]),
  en("Miami", "miami", "United States", "US", ["atlanta", "charlotte", "houston"]),
  en("Atlanta", "atlanta", "United States", "US", ["miami", "charlotte", "houston"]),
  en("Denver", "denver", "United States", "US", ["phoenix", "las-vegas", "minneapolis"]),
  en("Seattle", "seattle", "United States", "US", ["portland", "san-francisco", "los-angeles"]),
  en("San Francisco", "san-francisco", "United States", "US", ["los-angeles", "seattle", "portland"]),
  en("Boston", "boston", "United States", "US", ["new-york", "charlotte", "detroit"]),
  en("Las Vegas", "las-vegas", "United States", "US", ["phoenix", "los-angeles", "san-diego"]),
  en("Portland", "portland", "United States", "US", ["seattle", "san-francisco", "los-angeles"]),
  en("Charlotte", "charlotte", "United States", "US", ["atlanta", "miami", "new-york"]),
  en("Detroit", "detroit", "United States", "US", ["chicago", "minneapolis", "boston"]),
  en("Minneapolis", "minneapolis", "United States", "US", ["chicago", "detroit", "denver"]),

  // ============================================================
  // CANADA (English + French — 8 Cities)
  // ============================================================
  en("Toronto", "toronto", "Canada", "CA", ["ottawa", "montreal", "vancouver"]),
  en("Vancouver", "vancouver", "Canada", "CA", ["toronto", "calgary", "edmonton"]),
  en("Montreal", "montreal", "Canada", "CA", ["toronto", "ottawa", "quebec-city"], [h("fr", "fr", "seo-services-montreal")]),
  en("Calgary", "calgary", "Canada", "CA", ["vancouver", "edmonton", "winnipeg"]),
  en("Ottawa", "ottawa", "Canada", "CA", ["toronto", "montreal", "halifax"]),
  en("Edmonton", "edmonton", "Canada", "CA", ["calgary", "vancouver", "winnipeg"]),
  en("Winnipeg", "winnipeg", "Canada", "CA", ["calgary", "edmonton", "toronto"]),
  en("Halifax", "halifax", "Canada", "CA", ["ottawa", "toronto", "montreal"]),
  fr("Montréal", "montreal", "Canada", "CA", ["ottawa", "quebec-city"], [h("en", "", "seo-services-montreal")]),
  fr("Québec", "quebec-city", "Canada", "CA", ["montreal", "ottawa"]),

  // ============================================================
  // GERMANY (German — 10 Cities)
  // ============================================================
  de("Berlin", "berlin", "Deutschland", "DE", ["hamburg", "leipzig", "dortmund"]),
  de("München", "munich", "Deutschland", "DE", ["stuttgart", "frankfurt", "cologne"]),
  de("Hamburg", "hamburg", "Deutschland", "DE", ["berlin", "hanover", "dortmund"]),
  de("Frankfurt", "frankfurt", "Deutschland", "DE", ["cologne", "dusseldorf", "stuttgart"]),
  de("Köln", "cologne", "Deutschland", "DE", ["dusseldorf", "dortmund", "frankfurt"]),
  de("Düsseldorf", "dusseldorf", "Deutschland", "DE", ["cologne", "dortmund", "frankfurt"]),
  de("Stuttgart", "stuttgart", "Deutschland", "DE", ["munich", "frankfurt", "cologne"]),
  de("Dortmund", "dortmund", "Deutschland", "DE", ["cologne", "dusseldorf", "hamburg"]),
  de("Leipzig", "leipzig", "Deutschland", "DE", ["berlin", "dortmund", "hamburg"]),
  de("Hannover", "hanover", "Deutschland", "DE", ["hamburg", "berlin", "dortmund"]),

  // ============================================================
  // AUSTRIA (German — 3 Cities)
  // ============================================================
  de("Wien", "vienna", "Österreich", "AT", ["graz", "salzburg"]),
  de("Graz", "graz", "Österreich", "AT", ["vienna", "salzburg"]),
  de("Salzburg", "salzburg", "Österreich", "AT", ["vienna", "graz"]),

  // ============================================================
  // SWITZERLAND (German + French — 4 Cities)
  // ============================================================
  de("Zürich", "zurich", "Schweiz", "CH", ["bern", "geneva", "lausanne"]),
  de("Bern", "bern", "Schweiz", "CH", ["zurich", "geneva", "lausanne"]),
  fr("Genève", "geneva", "Suisse", "CH", ["lausanne", "zurich", "bern"]),
  fr("Lausanne", "lausanne", "Suisse", "CH", ["geneva", "zurich", "bern"]),

  // ============================================================
  // FRANCE (French — 10 Cities)
  // ============================================================
  fr("Paris", "paris", "France", "FR", ["lyon", "lille", "strasbourg"]),
  fr("Lyon", "lyon", "France", "FR", ["paris", "marseille", "toulouse"]),
  fr("Marseille", "marseille", "France", "FR", ["lyon", "nice", "toulouse"]),
  fr("Toulouse", "toulouse", "France", "FR", ["bordeaux", "montpellier", "lyon"]),
  fr("Nice", "nice", "France", "FR", ["marseille", "montpellier", "lyon"]),
  fr("Nantes", "nantes", "France", "FR", ["bordeaux", "paris", "lille"]),
  fr("Strasbourg", "strasbourg", "France", "FR", ["paris", "lyon", "lille"]),
  fr("Bordeaux", "bordeaux", "France", "FR", ["toulouse", "nantes", "paris"]),
  fr("Lille", "lille", "France", "FR", ["paris", "strasbourg", "nantes"]),
  fr("Montpellier", "montpellier", "France", "FR", ["toulouse", "nice", "marseille"]),

  // ============================================================
  // BELGIUM (French + Dutch — 3 Cities)
  // ============================================================
  fr("Bruxelles", "brussels", "Belgique", "BE", ["antwerp"], [h("nl", "nl", "seo-services-brussels")]),
  nl("Brussel", "brussels", "België", "BE", ["antwerp"], [h("fr", "fr", "seo-services-brussels")]),
  nl("Antwerpen", "antwerp", "België", "BE", ["brussels"]),

  // ============================================================
  // ITALY (Italian — 8 Cities)
  // ============================================================
  it("Milano", "milan", "Italia", "IT", ["turin", "genoa", "bologna"]),
  it("Roma", "rome", "Italia", "IT", ["naples", "florence", "bologna"]),
  it("Torino", "turin", "Italia", "IT", ["milan", "genoa", "bologna"]),
  it("Napoli", "naples", "Italia", "IT", ["rome", "palermo", "florence"]),
  it("Firenze", "florence", "Italia", "IT", ["rome", "bologna", "milan"]),
  it("Bologna", "bologna", "Italia", "IT", ["florence", "milan", "rome"]),
  it("Palermo", "palermo", "Italia", "IT", ["naples", "rome", "florence"]),
  it("Genova", "genoa", "Italia", "IT", ["milan", "turin", "florence"]),

  // ============================================================
  // SPAIN (Spanish — 8 Cities)
  // ============================================================
  es("Madrid", "madrid", "España", "ES", ["barcelona", "valencia", "seville"]),
  es("Barcelona", "barcelona", "España", "ES", ["madrid", "valencia", "zaragoza"]),
  es("Valencia", "valencia", "España", "ES", ["madrid", "barcelona", "alicante"]),
  es("Sevilla", "seville", "España", "ES", ["madrid", "malaga", "valencia"]),
  es("Bilbao", "bilbao", "España", "ES", ["madrid", "barcelona", "zaragoza"]),
  es("Málaga", "malaga", "España", "ES", ["seville", "madrid", "valencia"]),
  es("Zaragoza", "zaragoza", "España", "ES", ["madrid", "barcelona", "bilbao"]),
  es("Alicante", "alicante", "España", "ES", ["valencia", "madrid", "barcelona"]),

  // ============================================================
  // PORTUGAL (Portuguese — 3 Cities)
  // ============================================================
  pt("Lisboa", "lisbon", "Portugal", "PT", ["porto", "braga"]),
  pt("Porto", "porto", "Portugal", "PT", ["lisbon", "braga"]),
  pt("Braga", "braga", "Portugal", "PT", ["porto", "lisbon"]),

  // ============================================================
  // BRAZIL (Portuguese — 6 Cities)
  // ============================================================
  pt("São Paulo", "sao-paulo", "Brasil", "BR", ["rio-de-janeiro", "belo-horizonte", "curitiba"]),
  pt("Rio de Janeiro", "rio-de-janeiro", "Brasil", "BR", ["sao-paulo", "belo-horizonte", "brasilia"]),
  pt("Belo Horizonte", "belo-horizonte", "Brasil", "BR", ["sao-paulo", "rio-de-janeiro", "brasilia"]),
  pt("Brasília", "brasilia", "Brasil", "BR", ["sao-paulo", "belo-horizonte", "fortaleza"]),
  pt("Curitiba", "curitiba", "Brasil", "BR", ["sao-paulo", "rio-de-janeiro", "belo-horizonte"]),
  pt("Fortaleza", "fortaleza", "Brasil", "BR", ["brasilia", "sao-paulo", "rio-de-janeiro"]),

  // ============================================================
  // NETHERLANDS (Dutch — 6 Cities)
  // ============================================================
  nl("Amsterdam", "amsterdam", "Nederland", "NL", ["rotterdam", "the-hague", "utrecht"]),
  nl("Rotterdam", "rotterdam", "Nederland", "NL", ["amsterdam", "the-hague", "utrecht"]),
  nl("Den Haag", "the-hague", "Nederland", "NL", ["amsterdam", "rotterdam", "utrecht"]),
  nl("Utrecht", "utrecht", "Nederland", "NL", ["amsterdam", "rotterdam", "eindhoven"]),
  nl("Eindhoven", "eindhoven", "Nederland", "NL", ["utrecht", "amsterdam", "groningen"]),
  nl("Groningen", "groningen", "Nederland", "NL", ["amsterdam", "utrecht", "eindhoven"]),

  // ============================================================
  // DENMARK (Danish — 4 Cities)
  // ============================================================
  da("København", "copenhagen", "Danmark", "DK",
    ["aarhus", "odense", "aalborg"],
    [
      h("en", "", "seo-services-copenhagen"),
      h("sv", "sv", "seo-services-stockholm"),
      h("no", "no", "seo-services-oslo"),
    ]
  ),
  da("Aarhus", "aarhus", "Danmark", "DK",
    ["copenhagen", "odense", "aalborg"],
    [h("da", "da", "seo-services-copenhagen")]
  ),
  da("Odense", "odense", "Danmark", "DK",
    ["copenhagen", "aarhus", "aalborg"],
    [h("da", "da", "seo-services-copenhagen")]
  ),
  da("Aalborg", "aalborg", "Danmark", "DK",
    ["copenhagen", "aarhus", "odense"],
    [h("da", "da", "seo-services-copenhagen")]
  ),

  // ============================================================
  // SWEDEN (Swedish — 4 Cities)
  // ============================================================
  sv("Stockholm", "stockholm", "Sverige", "SE",
    ["gothenburg", "malmo", "uppsala"],
    [
      h("da", "da", "seo-services-copenhagen"),
      h("no", "no", "seo-services-oslo"),
      h("fi", "fi", "seo-services-helsinki"),
    ]
  ),
  sv("Göteborg", "gothenburg", "Sverige", "SE",
    ["stockholm", "malmo", "uppsala"],
    [h("sv", "sv", "seo-services-stockholm")]
  ),
  sv("Malmö", "malmo", "Sverige", "SE",
    ["stockholm", "gothenburg", "copenhagen"],
    [h("da", "da", "seo-services-copenhagen")]
  ),
  sv("Uppsala", "uppsala", "Sverige", "SE",
    ["stockholm", "gothenburg", "malmo"],
    [h("sv", "sv", "seo-services-stockholm")]
  ),

  // ============================================================
  // NORWAY (Norwegian — 3 Cities)
  // ============================================================
  no_("Oslo", "oslo", "Norge", "NO",
    ["bergen", "trondheim"],
    [
      h("da", "da", "seo-services-copenhagen"),
      h("sv", "sv", "seo-services-stockholm"),
      h("fi", "fi", "seo-services-helsinki"),
    ]
  ),
  no_("Bergen", "bergen", "Norge", "NO",
    ["oslo", "trondheim"],
    [h("no", "no", "seo-services-oslo")]
  ),
  no_("Trondheim", "trondheim", "Norge", "NO",
    ["oslo", "bergen"],
    [h("no", "no", "seo-services-oslo")]
  ),

  // ============================================================
  // FINLAND (Finnish — 3 Cities)
  // ============================================================
  fi("Helsinki", "helsinki", "Suomi", "FI",
    ["tampere", "turku"],
    [
      h("sv", "sv", "seo-services-stockholm"),
      h("no", "no", "seo-services-oslo"),
      h("da", "da", "seo-services-copenhagen"),
    ]
  ),
  fi("Tampere", "tampere", "Suomi", "FI",
    ["helsinki", "turku"],
    [h("fi", "fi", "seo-services-helsinki")]
  ),
  fi("Turku", "turku", "Suomi", "FI",
    ["helsinki", "tampere"],
    [h("fi", "fi", "seo-services-helsinki")]
  ),

  // ============================================================
  // POLAND (Polish — 5 Cities)
  // ============================================================
  pl("Warszawa", "warsaw", "Polska", "PL", ["krakow", "wroclaw", "poznan"]),
  pl("Kraków", "krakow", "Polska", "PL", ["warsaw", "wroclaw", "poznan"]),
  pl("Wrocław", "wroclaw", "Polska", "PL", ["warsaw", "krakow", "poznan"]),
  pl("Poznań", "poznan", "Polska", "PL", ["warsaw", "wroclaw", "gdansk"]),
  pl("Gdańsk", "gdansk", "Polska", "PL", ["warsaw", "poznan", "wroclaw"]),

  // ============================================================
  // CZECH REPUBLIC (Czech — 2 Cities)
  // ============================================================
  cs("Praha", "prague", "Česko", "CZ", ["brno"]),
  cs("Brno", "brno", "Česko", "CZ", ["prague"]),

  // ============================================================
  // HUNGARY (Hungarian — 2 Cities)
  // ============================================================
  hu("Budapest", "budapest", "Magyarország", "HU", ["debrecen"]),
  hu("Debrecen", "debrecen", "Magyarország", "HU", ["budapest"]),

  // ============================================================
  // ROMANIA (Romanian — 3 Cities)
  // ============================================================
  ro("București", "bucharest", "România", "RO", ["cluj", "timisoara"]),
  ro("Cluj-Napoca", "cluj", "România", "RO", ["bucharest", "timisoara"]),
  ro("Timișoara", "timisoara", "România", "RO", ["bucharest", "cluj"]),

  // ============================================================
  // GREECE (Greek — 2 Cities)
  // ============================================================
  el("Αθήνα", "athens", "Ελλάδα", "GR", ["thessaloniki"]),
  el("Θεσσαλονίκη", "thessaloniki", "Ελλάδα", "GR", ["athens"]),

  // ============================================================
  // TURKEY (Turkish — 6 Cities)
  // ============================================================
  tr("İstanbul", "istanbul", "Türkiye", "TR", ["ankara", "izmir", "bursa"]),
  tr("Ankara", "ankara", "Türkiye", "TR", ["istanbul", "izmir", "bursa"]),
  tr("İzmir", "izmir", "Türkiye", "TR", ["istanbul", "ankara", "antalya"]),
  tr("Antalya", "antalya", "Türkiye", "TR", ["izmir", "istanbul", "adana"]),
  tr("Bursa", "bursa", "Türkiye", "TR", ["istanbul", "ankara", "izmir"]),
  tr("Adana", "adana", "Türkiye", "TR", ["antalya", "istanbul", "ankara"]),

  // ============================================================
  // AUSTRALIA (English — 6 Cities)
  // ============================================================
  en("Sydney", "sydney", "Australia", "AU", ["melbourne", "brisbane", "gold-coast"]),
  en("Melbourne", "melbourne", "Australia", "AU", ["sydney", "brisbane", "adelaide"]),
  en("Brisbane", "brisbane", "Australia", "AU", ["sydney", "gold-coast", "melbourne"]),
  en("Perth", "perth", "Australia", "AU", ["sydney", "melbourne", "adelaide"]),
  en("Adelaide", "adelaide", "Australia", "AU", ["melbourne", "sydney", "perth"]),
  en("Gold Coast", "gold-coast", "Australia", "AU", ["brisbane", "sydney", "melbourne"]),

  // ============================================================
  // NEW ZEALAND (English — 3 Cities)
  // ============================================================
  en("Auckland", "auckland", "New Zealand", "NZ", ["wellington", "christchurch"]),
  en("Wellington", "wellington", "New Zealand", "NZ", ["auckland", "christchurch"]),
  en("Christchurch", "christchurch", "New Zealand", "NZ", ["auckland", "wellington"]),

  // ============================================================
  // SINGAPORE (English)
  // ============================================================
  en("Singapore", "singapore", "Singapore", "SG", ["kuala-lumpur", "bangkok"]),

  // ============================================================
  // MALAYSIA (English — 3 Cities)
  // ============================================================
  en("Kuala Lumpur", "kuala-lumpur", "Malaysia", "MY", ["penang", "johor-bahru", "singapore"]),
  en("Penang", "penang", "Malaysia", "MY", ["kuala-lumpur", "johor-bahru"]),
  en("Johor Bahru", "johor-bahru", "Malaysia", "MY", ["kuala-lumpur", "singapore", "penang"]),

  // ============================================================
  // THAILAND (English — 2 Cities)
  // ============================================================
  en("Bangkok", "bangkok", "Thailand", "TH", ["chiang-mai", "singapore"]),
  en("Chiang Mai", "chiang-mai", "Thailand", "TH", ["bangkok"]),

  // ============================================================
  // PHILIPPINES (English — 2 Cities)
  // ============================================================
  en("Manila", "manila", "Philippines", "PH", ["cebu"]),
  en("Cebu", "cebu", "Philippines", "PH", ["manila"]),

  // ============================================================
  // JAPAN (Japanese — 2 Cities)
  // ============================================================
  ja("東京", "tokyo", "日本", "JP", ["osaka"]),
  ja("大阪", "osaka", "日本", "JP", ["tokyo"]),

  // ============================================================
  // SOUTH KOREA (Korean — 2 Cities)
  // ============================================================
  ko("서울", "seoul", "한국", "KR", ["busan"]),
  ko("부산", "busan", "한국", "KR", ["seoul"]),

  // ============================================================
  // SOUTH AFRICA (English — 3 Cities)
  // ============================================================
  en("Johannesburg", "johannesburg", "South Africa", "ZA", ["cape-town", "durban"]),
  en("Cape Town", "cape-town", "South Africa", "ZA", ["johannesburg", "durban"]),
  en("Durban", "durban", "South Africa", "ZA", ["johannesburg", "cape-town"]),

  // ============================================================
  // NIGERIA (English — 2 Cities)
  // ============================================================
  en("Lagos", "lagos", "Nigeria", "NG", ["abuja"]),
  en("Abuja", "abuja", "Nigeria", "NG", ["lagos"]),

  // ============================================================
  // KENYA (English — 1 City)
  // ============================================================
  en("Nairobi", "nairobi", "Kenya", "KE", ["lagos"]),

  // ============================================================
  // MEXICO (Spanish — 3 Cities)
  // ============================================================
  es("Ciudad de México", "mexico-city", "México", "MX", ["guadalajara", "monterrey"]),
  es("Guadalajara", "guadalajara", "México", "MX", ["mexico-city", "monterrey"]),
  es("Monterrey", "monterrey", "México", "MX", ["mexico-city", "guadalajara"]),

  // ============================================================
  // COLOMBIA (Spanish — 2 Cities)
  // ============================================================
  es("Bogotá", "bogota", "Colombia", "CO", ["medellin"]),
  es("Medellín", "medellin", "Colombia", "CO", ["bogota"]),

  // ============================================================
  // ARGENTINA (Spanish — 2 Cities)
  // ============================================================
  es("Buenos Aires", "buenos-aires", "Argentina", "AR", ["cordoba-argentina"]),
  es("Córdoba", "cordoba-argentina", "Argentina", "AR", ["buenos-aires"]),

  // ============================================================
  // CHILE (Spanish — 1 City)
  // ============================================================
  es("Santiago", "santiago", "Chile", "CL", ["buenos-aires", "lima"]),

  // ============================================================
  // PERU (Spanish — 1 City)
  // ============================================================
  es("Lima", "lima", "Perú", "PE", ["santiago", "bogota"]),

  // ============================================================
  // ISRAEL (English + Hebrew — 2 Cities)
  // ============================================================
  en("Tel Aviv", "tel-aviv", "Israel", "IL", [], [h("he", "he", "seo-services-tel-aviv")]),
  { ...he("תל אביב", "tel-aviv", "ישראל", "IL", [], [h("en", "", "seo-services-tel-aviv")]), isRTL: true },

  // ============================================================
  // IRELAND (English — 2 Cities)
  // ============================================================
  en("Dublin", "dublin", "Ireland", "IE", ["cork", "london"]),
  en("Cork", "cork", "Ireland", "IE", ["dublin"]),
];

// Lookup helpers
export function getLocationBySlugAndLang(slug: string, langPrefix: string): LocationData | undefined {
  return locationsData.find(l => l.slug === slug && l.langPrefix === langPrefix);
}

export function getLocationsByCountry(countryCode: string): LocationData[] {
  return locationsData.filter(l => l.countryCode === countryCode);
}

export const LANG_PREFIXES = ["ar", "fr", "de", "nl", "it", "es", "pt", "da", "sv", "no", "fi", "pl", "cs", "hu", "ro", "el", "tr", "ja", "ko", "he"];
