import type { LocationData } from "@/data/locationsData";
import type { LocationContent } from "@/data/locationContent";

interface Props {
  loc: LocationData;
  content: LocationContent;
  displayCity: string;
}

const LocationSchema = ({ loc, content, displayCity }: Props) => {
  const baseUrl = "https://shahababbasi.com";
  const pageUrl = `${baseUrl}${loc.langPrefix ? `/${loc.langPrefix}` : ""}/${loc.slug}`;
  const displayCountry = loc.localCountry || loc.country;

  // Digital marketing services in the page's language
  const serviceNames: Record<string, string[]> = {
    en: ["Search Engine Optimization (SEO)", "PPC Advertising", "Web Design", "Web Development", "Content Writing", "Social Media Management", "Local SEO", "Technical SEO", "Link Building", "GEO Optimization"],
    ar: ["تحسين محركات البحث (SEO)", "إعلانات الدفع بالنقرة (PPC)", "تصميم المواقع", "تطوير المواقع", "كتابة المحتوى", "إدارة وسائل التواصل الاجتماعي", "السيو المحلي", "السيو التقني", "بناء الروابط", "تحسين GEO"],
    fr: ["Référencement SEO", "Publicité PPC", "Web Design", "Développement Web", "Rédaction de Contenu", "Gestion des Réseaux Sociaux", "SEO Local", "SEO Technique", "Netlinking", "Optimisation GEO"],
    de: ["Suchmaschinenoptimierung (SEO)", "PPC-Werbung", "Webdesign", "Webentwicklung", "Content-Erstellung", "Social-Media-Management", "Lokales SEO", "Technisches SEO", "Linkaufbau", "GEO-Optimierung"],
    es: ["Posicionamiento SEO", "Publicidad PPC", "Diseño Web", "Desarrollo Web", "Redacción de Contenidos", "Gestión de Redes Sociales", "SEO Local", "SEO Técnico", "Link Building", "Optimización GEO"],
    nl: ["Zoekmachineoptimalisatie (SEO)", "PPC-Advertenties", "Webdesign", "Webontwikkeling", "Contentcreatie", "Social Media Management", "Lokale SEO", "Technische SEO", "Linkbuilding", "GEO-Optimalisatie"],
    it: ["Ottimizzazione SEO", "Pubblicità PPC", "Web Design", "Sviluppo Web", "Scrittura Contenuti", "Gestione Social Media", "SEO Locale", "SEO Tecnico", "Link Building", "Ottimizzazione GEO"],
    pt: ["Otimização SEO", "Publicidade PPC", "Web Design", "Desenvolvimento Web", "Redação de Conteúdo", "Gestão de Redes Sociais", "SEO Local", "SEO Técnico", "Link Building", "Otimização GEO"],
    tr: ["Arama Motoru Optimizasyonu (SEO)", "PPC Reklamcılığı", "Web Tasarım", "Web Geliştirme", "İçerik Yazarlığı", "Sosyal Medya Yönetimi", "Yerel SEO", "Teknik SEO", "Link İnşası", "GEO Optimizasyonu"],
    ja: ["検索エンジン最適化 (SEO)", "PPC広告", "Webデザイン", "Web開発", "コンテンツ制作", "SNS管理", "ローカルSEO", "テクニカルSEO", "リンクビルディング", "GEO最適化"],
    ko: ["검색 엔진 최적화 (SEO)", "PPC 광고", "웹 디자인", "웹 개발", "콘텐츠 작성", "소셜 미디어 관리", "로컬 SEO", "기술 SEO", "링크 빌딩", "GEO 최적화"],
    he: ["קידום אתרים (SEO)", "פרסום PPC", "עיצוב אתרים", "פיתוח אתרים", "כתיבת תוכן", "ניהול מדיה חברתית", "SEO מקומי", "SEO טכני", "בניית קישורים", "אופטימיזציית GEO"],
  };

  const services = serviceNames[loc.lang] || serviceNames.en;
  const businessName = `Shahab Abbasi - Digital Marketing Agency ${displayCity}`;

  const schema = [
    // Organization / Local Business
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: businessName,
      description: loc.metaDescription,
      url: pageUrl,
      areaServed: {
        "@type": "City",
        name: loc.city,
        containedInPlace: { "@type": "Country", name: loc.country },
      },
      provider: {
        "@type": "Person",
        name: "Shahab Abbasi",
        url: baseUrl,
        jobTitle: "Digital Marketing Expert",
        sameAs: [
          "https://www.linkedin.com/in/shahababbasi/",
          "https://twitter.com/shahababbasi",
        ],
      },
      priceRange: "$$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Digital Marketing Services in ${displayCity}`,
        itemListElement: services.map((svc, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: svc,
            provider: { "@type": "Person", name: "Shahab Abbasi" },
            areaServed: { "@type": "City", name: loc.city },
          },
        })),
      },
    },
    // FAQ
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    // Breadcrumbs
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: loc.langPrefix ? `${baseUrl}/${loc.langPrefix}/locations` : `${baseUrl}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `Digital Marketing in ${displayCity}`,
          item: pageUrl,
        },
      ],
    },
    // WebPage with language
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: loc.metaTitle,
      description: loc.metaDescription,
      url: pageUrl,
      inLanguage: loc.lang,
      isPartOf: { "@type": "WebSite", name: "Shahab Abbasi Digital Marketing", url: baseUrl },
      about: {
        "@type": "Thing",
        name: `Digital Marketing Services in ${displayCity}`,
        description: `Professional SEO, PPC, web design, web development, content writing, and social media management services in ${displayCity}, ${displayCountry}.`,
      },
    },
    // HowTo process
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How We Deliver Digital Marketing Results in ${displayCity}`,
      description: `Our step-by-step digital marketing process for businesses in ${displayCity}, ${displayCountry}.`,
      step: content.processSteps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.desc,
      })),
    },
  ];

  // Add hreflang link elements
  const hreflangLinks = loc.hreflangAlternates.length > 0 ? (
    <>
      {loc.hreflangAlternates.map((alt) => (
        <link key={alt.lang + alt.href} rel="alternate" hrefLang={alt.lang} href={`${baseUrl}${alt.href}`} />
      ))}
      <link rel="alternate" hrefLang={loc.lang} href={pageUrl} />
    </>
  ) : null;

  return (
    <>
      {hreflangLinks}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
};

export default LocationSchema;
