const SITE_URL = "https://shahababbasi.com";

const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Shahab Abbasi SEO",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    description:
      "Full-service SEO & digital marketing agency helping businesses worldwide grow organic traffic, generate leads, and increase revenue.",
    telephone: "+923041316771",
    email: "contact@shahababbasi.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blue Area",
      addressLocality: "Islamabad",
      addressRegion: "ICT",
      postalCode: "44000",
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+923041316771",
        contactType: "customer service",
        availableLanguage: ["English", "Arabic", "Urdu"],
        areaServed: ["PK", "AE", "SA", "GB", "US", "CA", "DE", "FR", "NL", "SE", "DK", "NO"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/shahab-abbasi-seo-specialist/",
      "https://www.facebook.com/shahababbasi302/",
      "https://www.instagram.com/shahababbasi302",
      "https://x.com/ShahabAbbasi302",
      "https://www.reddit.com/user/shahab-abbasi/",
    ],
    foundingDate: "2020",
    founder: { "@type": "Person", "@id": `${SITE_URL}/#person` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
    ],
    serviceType: [
      "SEO Services",
      "PPC Management",
      "Content Marketing",
      "Link Building",
      "Technical SEO",
      "Local SEO",
      "E-commerce SEO",
      "AI Search Optimization",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Shahab Abbasi",
    givenName: "Shahab",
    familyName: "Abbasi",
    jobTitle: "SEO Strategist & Digital Marketing Expert",
    description:
      "Expert SEO consultant and digital growth strategist helping businesses rank #1 on Google, drive organic traffic, and scale revenue through proven search engine optimization and digital marketing strategies.",
    url: SITE_URL,
    telephone: "+923041316771",
    image: `${SITE_URL}/android-chrome-512x512.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "ICT",
      addressCountry: "PK",
    },
    alumniOf: { "@type": "EducationalOrganization", name: "COMSATS University" },
    worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    knowsAbout: [
      "Search Engine Optimization",
      "Digital Marketing",
      "PPC Advertising",
      "Content Marketing",
      "Link Building",
      "Technical SEO",
      "Local SEO",
      "International SEO",
      "E-commerce SEO",
      "AI Search Optimization",
      "Google Ads",
      "Social Media Marketing",
    ],
    sameAs: [
      "https://www.linkedin.com/in/shahab-abbasi-seo-specialist/",
      "https://www.facebook.com/shahababbasi302/",
      "https://www.instagram.com/shahababbasi302",
      "https://x.com/ShahabAbbasi302",
      "https://www.reddit.com/user/shahab-abbasi/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Shahab Abbasi — SEO Expert & Digital Marketing",
    url: SITE_URL,
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
];

const GlobalSchemas = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemas) }}
  />
);

export default GlobalSchemas;
