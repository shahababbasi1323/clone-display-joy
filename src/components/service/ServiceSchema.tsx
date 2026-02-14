import type { ServiceData } from "@/data/servicesData";

/** Enhanced JSON-LD: Service, FAQPage, BreadcrumbList, HowTo, WebPage */
const ServiceSchema = ({ service }: { service: ServiceData }) => {
  const baseUrl = "https://shahababbasi.com";
  const pageUrl = `${baseUrl}/services/${service.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${service.title} - Shahab Abbasi`,
      description: service.metaDescription,
      provider: {
        "@type": "Person",
        name: "Shahab Abbasi",
        url: baseUrl,
        sameAs: [
          "https://www.linkedin.com/in/shahababbasi/",
          "https://twitter.com/shahababbasi",
        ],
      },
      url: pageUrl,
      areaServed: { "@type": "Place", name: "Worldwide" },
      serviceType: service.title,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} Packages`,
        itemListElement: service.relatedServices.map((rs) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: rs.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            url: `${baseUrl}/services/${rs}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How We Deliver ${service.title} Results`,
      description: `Our step-by-step ${service.title.toLowerCase()} process for measurable SEO improvements.`,
      step: service.process.steps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.desc,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: service.metaTitle,
      description: service.metaDescription,
      url: pageUrl,
      isPartOf: { "@type": "WebSite", name: "Shahab Abbasi SEO", url: baseUrl },
      about: {
        "@type": "Thing",
        name: service.title,
        description: service.heroDescription,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
