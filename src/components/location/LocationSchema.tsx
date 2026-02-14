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

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Shahab Abbasi - SEO Expert ${displayCity}`,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `SEO Services in ${loc.city}`,
      description: loc.metaDescription,
      provider: {
        "@type": "Person",
        name: "Shahab Abbasi",
        url: baseUrl,
      },
      areaServed: { "@type": "City", name: loc.city },
      url: pageUrl,
      serviceType: "Search Engine Optimization",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `SEO Services in ${loc.city}`,
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO", url: `${baseUrl}/services/technical-seo` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO", url: `${baseUrl}/services/local-seo` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Page SEO", url: `${baseUrl}/services/on-page-seo` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Link Building", url: `${baseUrl}/services/link-building` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Strategy", url: `${baseUrl}/services/content-strategy` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "GEO Optimization", url: `${baseUrl}/services/geo-optimization` } },
        ],
      },
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
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${baseUrl}/locations` },
        {
          "@type": "ListItem",
          position: 3,
          name: `SEO Services in ${loc.city}`,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: loc.metaTitle,
      description: loc.metaDescription,
      url: pageUrl,
      inLanguage: loc.lang,
      isPartOf: { "@type": "WebSite", name: "Shahab Abbasi SEO", url: baseUrl },
      about: {
        "@type": "Thing",
        name: `SEO Services in ${loc.city}`,
        description: loc.metaDescription,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How We Deliver SEO Results in ${loc.city}`,
      description: `Our step-by-step SEO process for businesses in ${loc.city}, ${loc.country}.`,
      step: content.processSteps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.desc,
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocationSchema;
