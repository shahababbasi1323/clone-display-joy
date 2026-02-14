import type { IndustryData } from "@/data/industriesData";

/** Enhanced JSON-LD schema: Service, FAQPage, BreadcrumbList, HowTo, WebPage */
const IndustrySchema = ({ industry }: { industry: IndustryData }) => {
  const baseUrl = "https://shahababbasi.com";
  const pageUrl = `${baseUrl}/industries/${industry.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${industry.shortTitle} SEO Services - Shahab Abbasi`,
      description: industry.metaDescription,
      provider: {
        "@type": "Person",
        name: "Shahab Abbasi",
        url: baseUrl,
        sameAs: [
          "https://www.linkedin.com/in/shahababbasi/",
          "https://twitter.com/shahababbasi"
        ]
      },
      url: pageUrl,
      areaServed: { "@type": "Place", name: "Worldwide" },
      serviceType: `SEO for ${industry.shortTitle}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${industry.shortTitle} SEO Packages`,
        itemListElement: industry.relatedServices.map((rs, i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: rs.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
            url: `${baseUrl}/services/${rs}`
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: industry.faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${baseUrl}/industries` },
        { "@type": "ListItem", position: 3, name: industry.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How We Deliver ${industry.shortTitle} SEO Results`,
      description: `Our step-by-step approach to SEO for ${industry.shortTitle.toLowerCase()} businesses.`,
      step: industry.approach.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.desc,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: industry.metaTitle,
      description: industry.metaDescription,
      url: pageUrl,
      isPartOf: { "@type": "WebSite", name: "Shahab Abbasi SEO", url: baseUrl },
      about: {
        "@type": "Thing",
        name: `SEO for ${industry.shortTitle}`,
        description: industry.heroDescription,
      },
      keywords: industry.keywords.join(", "),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default IndustrySchema;
