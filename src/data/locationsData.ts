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
const en = (
  city: string, slugCity: string, country: string, cc: string,
  nearby: string[], alt: { lang: string; href: string }[] = [], region?: string
): LocationData => ({
  slug: `seo-services-${slugCity}`,
  city, country, countryCode: cc, lang: "en", langPrefix: "",
  metaTitle: `SEO Services in ${city} | Expert SEO Agency ${country}`,
  metaDescription: `Professional SEO services in ${city}, ${country}. Technical SEO, link building, content strategy & GEO optimization. Free SEO audit for your ${city} business.`,
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
  // 🇵🇰 PAKISTAN (English — 8 Cities)
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
  // 🇦🇪 UAE (English — 7 Cities)
  // ============================================================
  en("Dubai", "dubai", "UAE", "AE", ["abu-dhabi", "sharjah", "ajman"]),
  en("Abu Dhabi", "abu-dhabi", "UAE", "AE", ["dubai", "al-ain", "sharjah"]),
  en("Sharjah", "sharjah", "UAE", "AE", ["dubai", "ajman", "abu-dhabi"]),
  en("Ajman", "ajman", "UAE", "AE", ["sharjah", "dubai", "ras-al-khaimah"]),
  en("Ras Al Khaimah", "ras-al-khaimah", "UAE", "AE", ["ajman", "fujairah", "sharjah"]),
  en("Fujairah", "fujairah", "UAE", "AE", ["ras-al-khaimah", "sharjah", "dubai"]),
  en("Al Ain", "al-ain", "UAE", "AE", ["abu-dhabi", "dubai", "sharjah"]),

  // ============================================================
  // 🇸🇦 SAUDI ARABIA (English + Arabic — 8 Cities)
  // ============================================================
  // English
  en("Riyadh", "riyadh", "Saudi Arabia", "SA", ["jeddah", "dammam", "makkah"], [h("ar", "ar", "seo-services-riyadh")]),
  en("Jeddah", "jeddah", "Saudi Arabia", "SA", ["riyadh", "makkah", "madinah"], [h("ar", "ar", "seo-services-jeddah")]),
  en("Dammam", "dammam", "Saudi Arabia", "SA", ["khobar", "riyadh", "jeddah"], [h("ar", "ar", "seo-services-dammam")]),
  en("Makkah", "makkah", "Saudi Arabia", "SA", ["jeddah", "madinah", "riyadh"], [h("ar", "ar", "seo-services-makkah")]),
  en("Madinah", "madinah", "Saudi Arabia", "SA", ["makkah", "jeddah", "tabuk"], [h("ar", "ar", "seo-services-madinah")]),
  en("Khobar", "khobar", "Saudi Arabia", "SA", ["dammam", "riyadh", "jeddah"], [h("ar", "ar", "seo-services-khobar")]),
  en("Tabuk", "tabuk", "Saudi Arabia", "SA", ["madinah", "riyadh", "jeddah"], [h("ar", "ar", "seo-services-tabuk")]),
  en("Abha", "abha", "Saudi Arabia", "SA", ["riyadh", "jeddah", "makkah"], [h("ar", "ar", "seo-services-abha")]),
  // Arabic
  ar("Riyadh", "الرياض", "riyadh", "Saudi Arabia", "السعودية", "SA", ["jeddah", "dammam", "makkah"], [h("en", "", "seo-services-riyadh")]),
  ar("Jeddah", "جدة", "jeddah", "Saudi Arabia", "السعودية", "SA", ["riyadh", "makkah", "madinah"], [h("en", "", "seo-services-jeddah")]),
  ar("Dammam", "الدمام", "dammam", "Saudi Arabia", "السعودية", "SA", ["khobar", "riyadh", "jeddah"], [h("en", "", "seo-services-dammam")]),
  ar("Makkah", "مكة المكرمة", "makkah", "Saudi Arabia", "السعودية", "SA", ["jeddah", "madinah", "riyadh"], [h("en", "", "seo-services-makkah")]),
  ar("Madinah", "المدينة المنورة", "madinah", "Saudi Arabia", "السعودية", "SA", ["makkah", "jeddah", "tabuk"], [h("en", "", "seo-services-madinah")]),
  ar("Khobar", "الخبر", "khobar", "Saudi Arabia", "السعودية", "SA", ["dammam", "riyadh", "jeddah"], [h("en", "", "seo-services-khobar")], "المنطقة الشرقية"),
  ar("Tabuk", "تبوك", "tabuk", "Saudi Arabia", "السعودية", "SA", ["madinah", "riyadh", "jeddah"], [h("en", "", "seo-services-tabuk")], "شمال السعودية"),
  ar("Abha", "أبها", "abha", "Saudi Arabia", "السعودية", "SA", ["riyadh", "jeddah", "makkah"], [h("en", "", "seo-services-abha")], "المنطقة الجنوبية"),

  // ============================================================
  // 🇶🇦 QATAR (English + Arabic — 3 Cities)
  // ============================================================
  en("Doha", "doha", "Qatar", "QA", ["al-wakrah", "lusail"], [h("ar", "ar", "seo-services-doha")]),
  en("Al Wakrah", "al-wakrah", "Qatar", "QA", ["doha", "lusail"]),
  en("Lusail", "lusail", "Qatar", "QA", ["doha", "al-wakrah"], [h("ar", "ar", "seo-services-lusail")]),
  ar("Doha", "الدوحة", "doha", "Qatar", "قطر", "QA", ["lusail"], [h("en", "", "seo-services-doha")]),
  ar("Lusail", "لوسيل", "lusail", "Qatar", "قطر", "QA", ["doha"], [h("en", "", "seo-services-lusail")]),

  // ============================================================
  // 🇧🇭 BAHRAIN (English + Arabic — 2 Cities)
  // ============================================================
  en("Manama", "manama", "Bahrain", "BH", ["riffa"], [h("ar", "ar", "seo-services-manama")]),
  en("Riffa", "riffa", "Bahrain", "BH", ["manama"]),
  ar("Manama", "المنامة", "manama", "Bahrain", "البحرين", "BH", ["riffa"], [h("en", "", "seo-services-manama")]),

  // ============================================================
  // 🇰🇼 KUWAIT (English + Arabic — 3 Cities)
  // ============================================================
  en("Kuwait City", "kuwait-city", "Kuwait", "KW", ["hawalli", "salmiya"], [h("ar", "ar", "seo-services-kuwait-city")]),
  en("Hawalli", "hawalli", "Kuwait", "KW", ["kuwait-city", "salmiya"]),
  en("Salmiya", "salmiya", "Kuwait", "KW", ["kuwait-city", "hawalli"]),
  ar("Kuwait City", "الكويت", "kuwait-city", "Kuwait", "الكويت", "KW", ["hawalli", "salmiya"], [h("en", "", "seo-services-kuwait-city")]),

  // ============================================================
  // 🇴🇲 OMAN (English + Arabic — 3 Cities)
  // ============================================================
  en("Muscat", "muscat", "Oman", "OM", ["salalah", "sohar"], [h("ar", "ar", "seo-services-muscat")]),
  en("Salalah", "salalah", "Oman", "OM", ["muscat", "sohar"]),
  en("Sohar", "sohar", "Oman", "OM", ["muscat", "salalah"]),
  ar("Muscat", "مسقط", "muscat", "Oman", "عُمان", "OM", ["salalah", "sohar"], [h("en", "", "seo-services-muscat")]),

  // ============================================================
  // 🇯🇴 JORDAN (English + Arabic — 2 Cities)
  // ============================================================
  en("Amman", "amman", "Jordan", "JO", ["irbid"], [h("ar", "ar", "seo-services-amman")]),
  en("Irbid", "irbid", "Jordan", "JO", ["amman"]),
  ar("Amman", "عمّان", "amman", "Jordan", "الأردن", "JO", ["irbid"], [h("en", "", "seo-services-amman")]),

  // ============================================================
  // 🇱🇧 LEBANON (English + Arabic — 2 Cities)
  // ============================================================
  en("Beirut", "beirut", "Lebanon", "LB", ["tripoli-lebanon"], [h("ar", "ar", "seo-services-beirut")]),
  en("Tripoli", "tripoli-lebanon", "Lebanon", "LB", ["beirut"]),
  ar("Beirut", "بيروت", "beirut", "Lebanon", "لبنان", "LB", ["tripoli-lebanon"], [h("en", "", "seo-services-beirut")]),

  // ============================================================
  // 🇪🇬 EGYPT (English + Arabic — 3 Cities)
  // ============================================================
  en("Cairo", "cairo", "Egypt", "EG", ["alexandria", "giza"], [h("ar", "ar", "seo-services-cairo")]),
  en("Alexandria", "alexandria", "Egypt", "EG", ["cairo", "giza"], [h("ar", "ar", "seo-services-alexandria")]),
  en("Giza", "giza", "Egypt", "EG", ["cairo", "alexandria"]),
  ar("Cairo", "القاهرة", "cairo", "Egypt", "مصر", "EG", ["alexandria", "giza"], [h("en", "", "seo-services-cairo")]),
  ar("Alexandria", "الإسكندرية", "alexandria", "Egypt", "مصر", "EG", ["cairo", "giza"], [h("en", "", "seo-services-alexandria")]),

  // ============================================================
  // 🇲🇦 MOROCCO (English + French + Arabic — 3 Cities)
  // ============================================================
  en("Casablanca", "casablanca", "Morocco", "MA", ["marrakech", "rabat"], [h("fr", "fr", "seo-services-casablanca"), h("ar", "ar", "seo-services-casablanca")]),
  en("Marrakech", "marrakech", "Morocco", "MA", ["casablanca", "rabat"]),
  en("Rabat", "rabat", "Morocco", "MA", ["casablanca", "marrakech"]),
  fr("Casablanca", "casablanca", "Maroc", "MA", ["marrakech", "rabat"], [h("en", "", "seo-services-casablanca"), h("ar", "ar", "seo-services-casablanca")]),
  ar("Casablanca", "الدار البيضاء", "casablanca", "Morocco", "المغرب", "MA", ["marrakech", "rabat"], [h("en", "", "seo-services-casablanca"), h("fr", "fr", "seo-services-casablanca")]),

  // ============================================================
  // 🇹🇳 TUNISIA (English + French — 2 Cities)
  // ============================================================
  en("Tunis", "tunis", "Tunisia", "TN", [], [h("fr", "fr", "seo-services-tunis")]),
  fr("Tunis", "tunis", "Tunisie", "TN", [], [h("en", "", "seo-services-tunis")]),

  // ============================================================
  // 🇬🇧 UNITED KINGDOM (English — 12 Cities)
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
  // 🇺🇸 UNITED STATES (English — 20 Cities)
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
  // 🇨🇦 CANADA (English + French — 8 Cities)
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
  // 🇩🇪 GERMANY (English + German — 10 Cities)
  // ============================================================
  en("Berlin", "berlin", "Germany", "DE", ["hamburg", "leipzig", "dortmund"], [h("de", "de", "seo-services-berlin")]),
  en("Munich", "munich", "Germany", "DE", ["stuttgart", "frankfurt", "cologne"], [h("de", "de", "seo-services-munich")]),
  en("Hamburg", "hamburg", "Germany", "DE", ["berlin", "hanover", "dortmund"], [h("de", "de", "seo-services-hamburg")]),
  en("Frankfurt", "frankfurt", "Germany", "DE", ["cologne", "dusseldorf", "stuttgart"], [h("de", "de", "seo-services-frankfurt")]),
  en("Cologne", "cologne", "Germany", "DE", ["dusseldorf", "dortmund", "frankfurt"], [h("de", "de", "seo-services-cologne")]),
  en("Düsseldorf", "dusseldorf", "Germany", "DE", ["cologne", "dortmund", "frankfurt"], [h("de", "de", "seo-services-dusseldorf")]),
  en("Stuttgart", "stuttgart", "Germany", "DE", ["munich", "frankfurt", "cologne"], [h("de", "de", "seo-services-stuttgart")]),
  en("Dortmund", "dortmund", "Germany", "DE", ["cologne", "dusseldorf", "hamburg"], [h("de", "de", "seo-services-dortmund")]),
  en("Leipzig", "leipzig", "Germany", "DE", ["berlin", "dortmund", "hamburg"], [h("de", "de", "seo-services-leipzig")]),
  en("Hanover", "hanover", "Germany", "DE", ["hamburg", "berlin", "dortmund"], [h("de", "de", "seo-services-hanover")]),
  // German
  de("Berlin", "berlin", "Deutschland", "DE", ["hamburg", "leipzig", "dortmund"], [h("en", "", "seo-services-berlin")]),
  de("München", "munich", "Deutschland", "DE", ["stuttgart", "frankfurt", "cologne"], [h("en", "", "seo-services-munich")]),
  de("Hamburg", "hamburg", "Deutschland", "DE", ["berlin", "hanover", "dortmund"], [h("en", "", "seo-services-hamburg")]),
  de("Frankfurt", "frankfurt", "Deutschland", "DE", ["cologne", "dusseldorf", "stuttgart"], [h("en", "", "seo-services-frankfurt")]),
  de("Köln", "cologne", "Deutschland", "DE", ["dusseldorf", "dortmund", "frankfurt"], [h("en", "", "seo-services-cologne")]),
  de("Düsseldorf", "dusseldorf", "Deutschland", "DE", ["cologne", "dortmund", "frankfurt"], [h("en", "", "seo-services-dusseldorf")]),
  de("Stuttgart", "stuttgart", "Deutschland", "DE", ["munich", "frankfurt", "cologne"], [h("en", "", "seo-services-stuttgart")]),
  de("Dortmund", "dortmund", "Deutschland", "DE", ["cologne", "dusseldorf", "hamburg"], [h("en", "", "seo-services-dortmund")]),
  de("Leipzig", "leipzig", "Deutschland", "DE", ["berlin", "dortmund", "hamburg"], [h("en", "", "seo-services-leipzig")]),
  de("Hannover", "hanover", "Deutschland", "DE", ["hamburg", "berlin", "dortmund"], [h("en", "", "seo-services-hanover")]),

  // ============================================================
  // 🇦🇹 AUSTRIA (German — 3 Cities)
  // ============================================================
  de("Wien", "vienna", "Österreich", "AT", ["graz", "salzburg"]),
  de("Graz", "graz", "Österreich", "AT", ["vienna", "salzburg"]),
  de("Salzburg", "salzburg", "Österreich", "AT", ["vienna", "graz"]),

  // ============================================================
  // 🇨🇭 SWITZERLAND (German + French — 4 Cities)
  // ============================================================
  de("Zürich", "zurich", "Schweiz", "CH", ["bern", "geneva", "lausanne"]),
  de("Bern", "bern", "Schweiz", "CH", ["zurich", "geneva", "lausanne"]),
  fr("Genève", "geneva", "Suisse", "CH", ["lausanne", "zurich", "bern"]),
  fr("Lausanne", "lausanne", "Suisse", "CH", ["geneva", "zurich", "bern"]),

  // ============================================================
  // 🇫🇷 FRANCE (French — 10 Cities)
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
  // 🇧🇪 BELGIUM (French + Dutch — 3 Cities)
  // ============================================================
  fr("Bruxelles", "brussels", "Belgique", "BE", ["antwerp"], [h("nl", "nl", "seo-services-brussels")]),
  nl("Brussel", "brussels", "België", "BE", ["antwerp"], [h("fr", "fr", "seo-services-brussels")]),
  nl("Antwerpen", "antwerp", "België", "BE", ["brussels"]),

  // ============================================================
  // 🇮🇹 ITALY (Italian — 8 Cities)
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
  // 🇪🇸 SPAIN (Spanish — 8 Cities)
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
  // 🇵🇹 PORTUGAL (Portuguese — 3 Cities)
  // ============================================================
  pt("Lisboa", "lisbon", "Portugal", "PT", ["porto", "braga"]),
  pt("Porto", "porto", "Portugal", "PT", ["lisbon", "braga"]),
  pt("Braga", "braga", "Portugal", "PT", ["porto", "lisbon"]),

  // ============================================================
  // 🇧🇷 BRAZIL (Portuguese — 6 Cities)
  // ============================================================
  pt("São Paulo", "sao-paulo", "Brasil", "BR", ["rio-de-janeiro", "belo-horizonte", "curitiba"]),
  pt("Rio de Janeiro", "rio-de-janeiro", "Brasil", "BR", ["sao-paulo", "belo-horizonte", "brasilia"]),
  pt("Belo Horizonte", "belo-horizonte", "Brasil", "BR", ["sao-paulo", "rio-de-janeiro", "brasilia"]),
  pt("Brasília", "brasilia", "Brasil", "BR", ["sao-paulo", "belo-horizonte", "fortaleza"]),
  pt("Curitiba", "curitiba", "Brasil", "BR", ["sao-paulo", "rio-de-janeiro", "belo-horizonte"]),
  pt("Fortaleza", "fortaleza", "Brasil", "BR", ["brasilia", "sao-paulo", "rio-de-janeiro"]),

  // ============================================================
  // 🇳🇱 NETHERLANDS (Dutch — 6 Cities)
  // ============================================================
  nl("Amsterdam", "amsterdam", "Nederland", "NL", ["rotterdam", "the-hague", "utrecht"]),
  nl("Rotterdam", "rotterdam", "Nederland", "NL", ["amsterdam", "the-hague", "utrecht"]),
  nl("Den Haag", "the-hague", "Nederland", "NL", ["amsterdam", "rotterdam", "utrecht"]),
  nl("Utrecht", "utrecht", "Nederland", "NL", ["amsterdam", "rotterdam", "eindhoven"]),
  nl("Eindhoven", "eindhoven", "Nederland", "NL", ["utrecht", "amsterdam", "groningen"]),
  nl("Groningen", "groningen", "Nederland", "NL", ["amsterdam", "utrecht", "eindhoven"]),

  // ============================================================
  // 🇩🇰 DENMARK (Danish — 4 Cities)
  // ============================================================
  da("København", "copenhagen", "Danmark", "DK", ["aarhus", "odense", "aalborg"]),
  da("Aarhus", "aarhus", "Danmark", "DK", ["copenhagen", "odense", "aalborg"]),
  da("Odense", "odense", "Danmark", "DK", ["copenhagen", "aarhus", "aalborg"]),
  da("Aalborg", "aalborg", "Danmark", "DK", ["copenhagen", "aarhus", "odense"]),

  // ============================================================
  // 🇸🇪 SWEDEN (Swedish — 4 Cities)
  // ============================================================
  sv("Stockholm", "stockholm", "Sverige", "SE", ["gothenburg", "malmo", "uppsala"]),
  sv("Göteborg", "gothenburg", "Sverige", "SE", ["stockholm", "malmo", "uppsala"]),
  sv("Malmö", "malmo", "Sverige", "SE", ["stockholm", "gothenburg", "copenhagen"]),
  sv("Uppsala", "uppsala", "Sverige", "SE", ["stockholm", "gothenburg", "malmo"]),

  // ============================================================
  // 🇳🇴 NORWAY (Norwegian — 3 Cities)
  // ============================================================
  no_("Oslo", "oslo", "Norge", "NO", ["bergen", "trondheim"]),
  no_("Bergen", "bergen", "Norge", "NO", ["oslo", "trondheim"]),
  no_("Trondheim", "trondheim", "Norge", "NO", ["oslo", "bergen"]),

  // ============================================================
  // 🇫🇮 FINLAND (Finnish — 3 Cities)
  // ============================================================
  fi("Helsinki", "helsinki", "Suomi", "FI", ["tampere", "turku"]),
  fi("Tampere", "tampere", "Suomi", "FI", ["helsinki", "turku"]),
  fi("Turku", "turku", "Suomi", "FI", ["helsinki", "tampere"]),

  // ============================================================
  // 🇵🇱 POLAND (Polish — 5 Cities)
  // ============================================================
  pl("Warszawa", "warsaw", "Polska", "PL", ["krakow", "wroclaw", "poznan"]),
  pl("Kraków", "krakow", "Polska", "PL", ["warsaw", "wroclaw", "poznan"]),
  pl("Wrocław", "wroclaw", "Polska", "PL", ["warsaw", "krakow", "poznan"]),
  pl("Poznań", "poznan", "Polska", "PL", ["warsaw", "wroclaw", "gdansk"]),
  pl("Gdańsk", "gdansk", "Polska", "PL", ["warsaw", "poznan", "wroclaw"]),

  // ============================================================
  // 🇨🇿 CZECH REPUBLIC (Czech — 2 Cities)
  // ============================================================
  cs("Praha", "prague", "Česko", "CZ", ["brno"]),
  cs("Brno", "brno", "Česko", "CZ", ["prague"]),

  // ============================================================
  // 🇭🇺 HUNGARY (Hungarian — 2 Cities)
  // ============================================================
  hu("Budapest", "budapest", "Magyarország", "HU", ["debrecen"]),
  hu("Debrecen", "debrecen", "Magyarország", "HU", ["budapest"]),

  // ============================================================
  // 🇷🇴 ROMANIA (Romanian — 3 Cities)
  // ============================================================
  ro("București", "bucharest", "România", "RO", ["cluj", "timisoara"]),
  ro("Cluj-Napoca", "cluj", "România", "RO", ["bucharest", "timisoara"]),
  ro("Timișoara", "timisoara", "România", "RO", ["bucharest", "cluj"]),

  // ============================================================
  // 🇬🇷 GREECE (Greek — 2 Cities)
  // ============================================================
  el("Αθήνα", "athens", "Ελλάδα", "GR", ["thessaloniki"]),
  el("Θεσσαλονίκη", "thessaloniki", "Ελλάδα", "GR", ["athens"]),

  // ============================================================
  // 🇹🇷 TURKEY (Turkish — 6 Cities)
  // ============================================================
  tr("İstanbul", "istanbul", "Türkiye", "TR", ["ankara", "izmir", "bursa"]),
  tr("Ankara", "ankara", "Türkiye", "TR", ["istanbul", "izmir", "bursa"]),
  tr("İzmir", "izmir", "Türkiye", "TR", ["istanbul", "ankara", "antalya"]),
  tr("Antalya", "antalya", "Türkiye", "TR", ["izmir", "istanbul", "adana"]),
  tr("Bursa", "bursa", "Türkiye", "TR", ["istanbul", "ankara", "izmir"]),
  tr("Adana", "adana", "Türkiye", "TR", ["antalya", "istanbul", "ankara"]),

  // ============================================================
  // 🇦🇺 AUSTRALIA (English — 6 Cities)
  // ============================================================
  en("Sydney", "sydney", "Australia", "AU", ["melbourne", "brisbane", "gold-coast"]),
  en("Melbourne", "melbourne", "Australia", "AU", ["sydney", "brisbane", "adelaide"]),
  en("Brisbane", "brisbane", "Australia", "AU", ["sydney", "gold-coast", "melbourne"]),
  en("Perth", "perth", "Australia", "AU", ["sydney", "melbourne", "adelaide"]),
  en("Adelaide", "adelaide", "Australia", "AU", ["melbourne", "sydney", "perth"]),
  en("Gold Coast", "gold-coast", "Australia", "AU", ["brisbane", "sydney", "melbourne"]),

  // ============================================================
  // 🇳🇿 NEW ZEALAND (English — 3 Cities)
  // ============================================================
  en("Auckland", "auckland", "New Zealand", "NZ", ["wellington", "christchurch"]),
  en("Wellington", "wellington", "New Zealand", "NZ", ["auckland", "christchurch"]),
  en("Christchurch", "christchurch", "New Zealand", "NZ", ["auckland", "wellington"]),

  // ============================================================
  // 🇸🇬 SINGAPORE (English)
  // ============================================================
  en("Singapore", "singapore", "Singapore", "SG", ["kuala-lumpur", "bangkok"]),

  // ============================================================
  // 🇲🇾 MALAYSIA (English — 3 Cities)
  // ============================================================
  en("Kuala Lumpur", "kuala-lumpur", "Malaysia", "MY", ["penang", "johor-bahru", "singapore"]),
  en("Penang", "penang", "Malaysia", "MY", ["kuala-lumpur", "johor-bahru"]),
  en("Johor Bahru", "johor-bahru", "Malaysia", "MY", ["kuala-lumpur", "singapore", "penang"]),

  // ============================================================
  // 🇹🇭 THAILAND (English — 2 Cities)
  // ============================================================
  en("Bangkok", "bangkok", "Thailand", "TH", ["chiang-mai", "singapore"]),
  en("Chiang Mai", "chiang-mai", "Thailand", "TH", ["bangkok"]),

  // ============================================================
  // 🇵🇭 PHILIPPINES (English — 2 Cities)
  // ============================================================
  en("Manila", "manila", "Philippines", "PH", ["cebu"]),
  en("Cebu", "cebu", "Philippines", "PH", ["manila"]),

  // ============================================================
  // 🇯🇵 JAPAN (Japanese — 2 Cities)
  // ============================================================
  ja("東京", "tokyo", "日本", "JP", ["osaka"]),
  ja("大阪", "osaka", "日本", "JP", ["tokyo"]),

  // ============================================================
  // 🇰🇷 SOUTH KOREA (Korean — 2 Cities)
  // ============================================================
  ko("서울", "seoul", "한국", "KR", ["busan"]),
  ko("부산", "busan", "한국", "KR", ["seoul"]),

  // ============================================================
  // 🇿🇦 SOUTH AFRICA (English — 3 Cities)
  // ============================================================
  en("Johannesburg", "johannesburg", "South Africa", "ZA", ["cape-town", "durban"]),
  en("Cape Town", "cape-town", "South Africa", "ZA", ["johannesburg", "durban"]),
  en("Durban", "durban", "South Africa", "ZA", ["johannesburg", "cape-town"]),

  // ============================================================
  // 🇳🇬 NIGERIA (English — 2 Cities)
  // ============================================================
  en("Lagos", "lagos", "Nigeria", "NG", ["abuja"]),
  en("Abuja", "abuja", "Nigeria", "NG", ["lagos"]),

  // ============================================================
  // 🇰🇪 KENYA (English — 1 City)
  // ============================================================
  en("Nairobi", "nairobi", "Kenya", "KE", ["lagos"]),

  // ============================================================
  // 🇲🇽 MEXICO (Spanish — 3 Cities)
  // ============================================================
  es("Ciudad de México", "mexico-city", "México", "MX", ["guadalajara", "monterrey"]),
  es("Guadalajara", "guadalajara", "México", "MX", ["mexico-city", "monterrey"]),
  es("Monterrey", "monterrey", "México", "MX", ["mexico-city", "guadalajara"]),

  // ============================================================
  // 🇨🇴 COLOMBIA (Spanish — 2 Cities)
  // ============================================================
  es("Bogotá", "bogota", "Colombia", "CO", ["medellin"]),
  es("Medellín", "medellin", "Colombia", "CO", ["bogota"]),

  // ============================================================
  // 🇦🇷 ARGENTINA (Spanish — 2 Cities)
  // ============================================================
  es("Buenos Aires", "buenos-aires", "Argentina", "AR", ["cordoba-argentina"]),
  es("Córdoba", "cordoba-argentina", "Argentina", "AR", ["buenos-aires"]),

  // ============================================================
  // 🇨🇱 CHILE (Spanish — 1 City)
  // ============================================================
  es("Santiago", "santiago", "Chile", "CL", ["buenos-aires", "lima"]),

  // ============================================================
  // 🇵🇪 PERU (Spanish — 1 City)
  // ============================================================
  es("Lima", "lima", "Perú", "PE", ["santiago", "bogota"]),

  // ============================================================
  // 🇮🇱 ISRAEL (English + Hebrew — 2 Cities)
  // ============================================================
  en("Tel Aviv", "tel-aviv", "Israel", "IL", [], [h("he", "he", "seo-services-tel-aviv")]),
  { ...he("תל אביב", "tel-aviv", "ישראל", "IL", [], [h("en", "", "seo-services-tel-aviv")]), isRTL: true },

  // ============================================================
  // 🇮🇪 IRELAND (English — 2 Cities)
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
