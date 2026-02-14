/**
 * Centralized internal linking map for SEO cross-linking between all page types.
 * Creates a massive interconnected web signaling topical authority to Google.
 */

import { toolsData, type ToolData } from "./toolsData";
import { servicesData } from "./servicesData";
import { industriesData } from "./industriesData";
import { blogPosts } from "./blogData";
import { locationsData } from "./locationsData";

// ── Tool → Service/Blog mappings ────────────────────────────────────
const toolToServices: Record<string, string[]> = {
  // Content tools → content-strategy, on-page-seo
  "word-counter": ["content-strategy", "on-page-seo"],
  "character-counter": ["content-strategy", "on-page-seo"],
  "keyword-density-checker": ["keyword-research", "on-page-seo"],
  "readability-checker": ["content-strategy", "on-page-seo"],
  "plagiarism-sentence-checker": ["content-strategy"],
  "lorem-ipsum-generator": ["content-strategy"],
  "text-case-converter": ["content-strategy"],
  "article-rewriter-helper": ["content-strategy", "on-page-seo"],
  "headline-analyzer": ["content-strategy", "on-page-seo"],
  "grammar-checker": ["content-strategy"],
  // Meta tools → on-page-seo, technical-seo
  "meta-tag-generator": ["on-page-seo", "technical-seo"],
  "google-serp-preview": ["on-page-seo", "seo-audit"],
  "bulk-title-checker": ["on-page-seo", "seo-audit"],
  "meta-description-checker": ["on-page-seo"],
  "heading-analyzer": ["on-page-seo", "technical-seo"],
  "image-alt-text-generator": ["on-page-seo"],
  "canonical-tag-generator": ["technical-seo"],
  "open-graph-preview": ["on-page-seo"],
  "google-index-checker": ["technical-seo", "seo-audit"],
  // Technical tools → technical-seo
  "robots-txt-generator": ["technical-seo"],
  "sitemap-generator": ["technical-seo"],
  "htaccess-redirect-generator": ["technical-seo"],
  "schema-generator": ["schema-markup", "technical-seo"],
  "json-ld-validator": ["schema-markup", "technical-seo"],
  "hreflang-tag-generator": ["international-seo", "technical-seo"],
  "slug-generator": ["technical-seo", "on-page-seo"],
  "url-encoder-decoder": ["technical-seo"],
  "http-status-checker": ["technical-seo"],
  "page-size-checker": ["website-speed-optimization", "technical-seo"],
  "core-web-vitals-guide": ["website-speed-optimization", "technical-seo"],
  // Keyword tools → keyword-research
  "keyword-suggestion-tool": ["keyword-research", "content-strategy"],
  "lsi-keyword-generator": ["keyword-research", "content-strategy"],
  "question-generator": ["keyword-research", "aeo-optimization"],
  "competitor-keyword-gap-planner": ["keyword-research", "seo-audit"],
  "search-intent-classifier": ["keyword-research", "content-strategy"],
  "keyword-grouper": ["keyword-research", "content-strategy"],
  // Social tools → content-strategy
  "linkedin-post-formatter": ["content-strategy"],
  "linkedin-headline-generator": ["content-strategy"],
  "linkedin-summary-generator": ["content-strategy"],
  "twitter-thread-formatter": ["content-strategy"],
  "social-media-image-size-guide": ["content-strategy"],
  "hashtag-generator": ["content-strategy"],
  "instagram-bio-generator": ["content-strategy"],
  "social-post-scheduler-planner": ["content-strategy"],
  // Local SEO tools → local-seo
  "google-business-profile-audit": ["local-seo", "google-business-profile"],
  "local-citation-finder": ["local-seo"],
  "nap-consistency-checker": ["local-seo", "google-business-profile"],
  "review-response-generator": ["local-seo", "google-business-profile"],
  "local-keyword-generator": ["local-seo", "keyword-research"],
  // AI/GEO tools → geo-optimization
  "ai-search-prompt-tester": ["geo-optimization", "aeo-optimization"],
  "ai-content-optimizer": ["geo-optimization", "content-strategy"],
  "brand-mention-tracker-guide": ["geo-optimization", "off-page-seo"],
  // Backlink tools → off-page-seo, link-building
  "anchor-text-analyzer": ["off-page-seo", "link-building"],
  "guest-post-pitch-generator": ["link-building", "off-page-seo"],
  "broken-link-outreach-template": ["link-building"],
  "backlink-quality-checklist": ["off-page-seo", "link-building"],
  "disavow-file-generator": ["off-page-seo", "technical-seo"],
  // Ecommerce tools → ecommerce-seo
  "product-description-optimizer": ["ecommerce-seo", "shopify-seo"],
  "ecommerce-schema-generator": ["ecommerce-seo", "schema-markup"],
  "category-page-optimizer": ["ecommerce-seo"],
  // Reporting tools
  "seo-roi-calculator": ["seo-consulting", "seo-audit"],
  "cpc-savings-calculator": ["seo-consulting"],
  "domain-age-checker": ["seo-audit"],
  "website-cost-estimator": ["seo-consulting"],
  // Conversion tools
  "cta-generator": ["on-page-seo", "content-strategy"],
  "ab-test-duration-calculator": ["seo-consulting"],
  "color-contrast-checker": ["website-speed-optimization", "technical-seo"],
  "page-speed-checklist": ["website-speed-optimization", "technical-seo"],
  // Email tools
  "email-subject-line-tester": ["content-strategy"],
  "cold-email-generator": ["link-building", "off-page-seo"],
};

const toolToBlogs: Record<string, string[]> = {
  "word-counter": ["content-marketing-seo"],
  "keyword-density-checker": ["keyword-research-guide", "on-page-seo-optimization"],
  "readability-checker": ["content-marketing-seo", "on-page-seo-optimization"],
  "headline-analyzer": ["content-marketing-seo"],
  "meta-tag-generator": ["on-page-seo-optimization", "technical-seo-audit-checklist"],
  "google-serp-preview": ["on-page-seo-optimization"],
  "heading-analyzer": ["on-page-seo-optimization"],
  "canonical-tag-generator": ["technical-seo-audit-checklist"],
  "robots-txt-generator": ["technical-seo-audit-checklist"],
  "schema-generator": ["technical-seo-audit-checklist"],
  "core-web-vitals-guide": ["technical-seo-audit-checklist"],
  "keyword-suggestion-tool": ["keyword-research-guide", "seo-strategy-guide-2025"],
  "lsi-keyword-generator": ["keyword-research-guide"],
  "question-generator": ["keyword-research-guide"],
  "google-business-profile-audit": ["local-seo-guide"],
  "local-citation-finder": ["local-seo-guide"],
  "nap-consistency-checker": ["local-seo-guide"],
  "local-keyword-generator": ["local-seo-guide"],
  "ai-search-prompt-tester": ["ai-seo-future"],
  "ai-content-optimizer": ["ai-seo-future"],
  "anchor-text-analyzer": ["link-building-strategies"],
  "guest-post-pitch-generator": ["link-building-strategies"],
  "broken-link-outreach-template": ["link-building-strategies"],
  "product-description-optimizer": ["ecommerce-seo-guide"],
  "ecommerce-schema-generator": ["ecommerce-seo-guide"],
  "category-page-optimizer": ["ecommerce-seo-guide"],
  "page-speed-checklist": ["technical-seo-audit-checklist"],
};

// ── Service → Blog/Industry/Location mappings ───────────────────────
const serviceToBlogs: Record<string, string[]> = {
  "technical-seo": ["technical-seo-audit-checklist", "seo-strategy-guide-2025", "google-algorithm-updates"],
  "on-page-seo": ["on-page-seo-optimization", "seo-strategy-guide-2025", "content-marketing-seo"],
  "off-page-seo": ["link-building-strategies", "seo-strategy-guide-2025"],
  "local-seo": ["local-seo-guide", "seo-strategy-guide-2025"],
  "ecommerce-seo": ["ecommerce-seo-guide", "seo-strategy-guide-2025"],
  "geo-optimization": ["ai-seo-future", "seo-strategy-guide-2025"],
  "aeo-optimization": ["ai-seo-future", "seo-strategy-guide-2025"],
  "content-strategy": ["content-marketing-seo", "keyword-research-guide", "seo-strategy-guide-2025"],
  "shopify-seo": ["ecommerce-seo-guide", "technical-seo-audit-checklist"],
  "wordpress-seo": ["technical-seo-audit-checklist", "on-page-seo-optimization"],
  "international-seo": ["seo-strategy-guide-2025", "technical-seo-audit-checklist"],
  "seo-audit": ["technical-seo-audit-checklist", "seo-strategy-guide-2025"],
  "keyword-research": ["keyword-research-guide", "seo-strategy-guide-2025", "content-marketing-seo"],
  "google-business-profile": ["local-seo-guide", "seo-strategy-guide-2025"],
  "link-building": ["link-building-strategies", "seo-strategy-guide-2025"],
  "seo-consulting": ["seo-strategy-guide-2025", "google-algorithm-updates"],
  "website-speed-optimization": ["technical-seo-audit-checklist", "seo-strategy-guide-2025"],
  "schema-markup": ["technical-seo-audit-checklist", "on-page-seo-optimization"],
  "seo-training": ["seo-strategy-guide-2025", "keyword-research-guide"],
};

const serviceToIndustries: Record<string, string[]> = {
  "technical-seo": ["saas-seo", "ecommerce-retail-seo"],
  "on-page-seo": ["healthcare-seo", "legal-seo"],
  "local-seo": ["dental-seo", "restaurant-seo", "real-estate-seo"],
  "ecommerce-seo": ["ecommerce-retail-seo", "fashion-seo"],
  "content-strategy": ["healthcare-seo", "saas-seo"],
  "link-building": ["legal-seo", "saas-seo"],
  "google-business-profile": ["dental-seo", "restaurant-seo"],
  "shopify-seo": ["ecommerce-retail-seo", "fashion-seo"],
};

const serviceToLocations: Record<string, string[]> = {
  "technical-seo": ["dubai", "london", "new-york"],
  "local-seo": ["islamabad", "dubai", "lahore"],
  "ecommerce-seo": ["dubai", "london", "new-york"],
  "on-page-seo": ["islamabad", "karachi", "dubai"],
  "content-strategy": ["dubai", "london", "islamabad"],
  "link-building": ["new-york", "london", "dubai"],
  "geo-optimization": ["dubai", "new-york", "london"],
};

// ── Industry → Tool/Blog/Location mappings ──────────────────────────
const industryToTools: Record<string, string[]> = {
  "healthcare-seo": ["meta-tag-generator", "google-business-profile-audit", "schema-generator"],
  "dental-seo": ["google-business-profile-audit", "review-response-generator", "local-keyword-generator"],
  "hospital-seo": ["schema-generator", "meta-tag-generator", "google-business-profile-audit"],
  "pharmacy-seo": ["local-citation-finder", "google-business-profile-audit"],
  "mental-health-seo": ["keyword-suggestion-tool", "google-business-profile-audit"],
  "legal-seo": ["meta-tag-generator", "google-business-profile-audit", "keyword-suggestion-tool"],
  "law-firm-seo": ["local-keyword-generator", "review-response-generator", "meta-tag-generator"],
  "real-estate-seo": ["local-keyword-generator", "google-business-profile-audit", "schema-generator"],
  "property-management-seo": ["local-citation-finder", "nap-consistency-checker"],
  "construction-seo": ["local-keyword-generator", "google-business-profile-audit"],
  "restaurant-seo": ["google-business-profile-audit", "review-response-generator", "local-citation-finder"],
  "cafe-seo": ["google-business-profile-audit", "review-response-generator"],
  "catering-seo": ["local-keyword-generator", "google-business-profile-audit"],
  "saas-seo": ["keyword-suggestion-tool", "meta-tag-generator", "schema-generator"],
  "startup-seo": ["keyword-suggestion-tool", "seo-roi-calculator"],
  "it-company-seo": ["meta-tag-generator", "core-web-vitals-guide"],
  "ecommerce-retail-seo": ["product-description-optimizer", "ecommerce-schema-generator", "category-page-optimizer"],
  "fashion-seo": ["product-description-optimizer", "ecommerce-schema-generator"],
  "auto-dealer-seo": ["google-business-profile-audit", "local-keyword-generator"],
  "beauty-salon-seo": ["google-business-profile-audit", "review-response-generator"],
  "photography-seo": ["image-alt-text-generator", "meta-tag-generator"],
  "travel-seo": ["schema-generator", "keyword-suggestion-tool"],
  "education-seo": ["schema-generator", "meta-tag-generator"],
  "fitness-seo": ["google-business-profile-audit", "local-keyword-generator"],
  "accounting-seo": ["google-business-profile-audit", "local-keyword-generator"],
  "insurance-seo": ["keyword-suggestion-tool", "meta-tag-generator"],
  "wedding-seo": ["google-business-profile-audit", "image-alt-text-generator"],
  "moving-company-seo": ["local-keyword-generator", "google-business-profile-audit"],
  "cleaning-service-seo": ["local-keyword-generator", "google-business-profile-audit"],
  "hvac-seo": ["local-keyword-generator", "google-business-profile-audit"],
  "plumber-seo": ["google-business-profile-audit", "local-citation-finder"],
  "electrician-seo": ["google-business-profile-audit", "local-keyword-generator"],
  "roofing-seo": ["google-business-profile-audit", "local-keyword-generator"],
};

const industryToBlogs: Record<string, string[]> = {
  "healthcare-seo": ["seo-strategy-guide-2025", "local-seo-guide", "content-marketing-seo"],
  "dental-seo": ["local-seo-guide", "seo-strategy-guide-2025"],
  "hospital-seo": ["local-seo-guide", "technical-seo-audit-checklist"],
  "legal-seo": ["local-seo-guide", "content-marketing-seo"],
  "law-firm-seo": ["local-seo-guide", "seo-strategy-guide-2025"],
  "real-estate-seo": ["local-seo-guide", "seo-strategy-guide-2025"],
  "restaurant-seo": ["local-seo-guide", "seo-strategy-guide-2025"],
  "saas-seo": ["seo-strategy-guide-2025", "content-marketing-seo", "keyword-research-guide"],
  "ecommerce-retail-seo": ["ecommerce-seo-guide", "seo-strategy-guide-2025"],
  "fashion-seo": ["ecommerce-seo-guide", "content-marketing-seo"],
  "auto-dealer-seo": ["local-seo-guide", "seo-strategy-guide-2025"],
  "beauty-salon-seo": ["local-seo-guide", "seo-strategy-guide-2025"],
  "travel-seo": ["content-marketing-seo", "seo-strategy-guide-2025"],
  "education-seo": ["content-marketing-seo", "seo-strategy-guide-2025"],
};

// ── Blog → Service/Tool mappings ────────────────────────────────────
const blogToServices: Record<string, string[]> = {
  "seo-strategy-guide-2025": ["seo-audit", "keyword-research", "on-page-seo"],
  "technical-seo-audit-checklist": ["technical-seo", "website-speed-optimization", "schema-markup"],
  "local-seo-guide": ["local-seo", "google-business-profile", "on-page-seo"],
  "ecommerce-seo-guide": ["ecommerce-seo", "shopify-seo", "schema-markup"],
  "link-building-strategies": ["link-building", "off-page-seo", "content-strategy"],
  "content-marketing-seo": ["content-strategy", "on-page-seo", "keyword-research"],
  "google-algorithm-updates": ["seo-consulting", "technical-seo", "content-strategy"],
  "keyword-research-guide": ["keyword-research", "content-strategy", "seo-audit"],
  "on-page-seo-optimization": ["on-page-seo", "technical-seo", "content-strategy"],
  "ai-seo-future": ["geo-optimization", "aeo-optimization", "content-strategy"],
};

const blogToTools: Record<string, string[]> = {
  "seo-strategy-guide-2025": ["keyword-suggestion-tool", "meta-tag-generator"],
  "technical-seo-audit-checklist": ["robots-txt-generator", "schema-generator", "core-web-vitals-guide"],
  "local-seo-guide": ["google-business-profile-audit", "local-citation-finder"],
  "ecommerce-seo-guide": ["product-description-optimizer", "ecommerce-schema-generator"],
  "link-building-strategies": ["anchor-text-analyzer", "guest-post-pitch-generator"],
  "content-marketing-seo": ["word-counter", "readability-checker"],
  "google-algorithm-updates": ["google-serp-preview"],
  "keyword-research-guide": ["keyword-suggestion-tool", "lsi-keyword-generator"],
  "on-page-seo-optimization": ["meta-tag-generator", "heading-analyzer"],
  "ai-seo-future": ["ai-search-prompt-tester", "ai-content-optimizer"],
};

// ── Public API ──────────────────────────────────────────────────────

/** Get related services for a tool (1-2) */
export function getToolRelatedServices(toolSlug: string) {
  const slugs = toolToServices[toolSlug] || [];
  return slugs
    .slice(0, 2)
    .map(s => servicesData.find(svc => svc.slug === s))
    .filter(Boolean);
}

/** Get related blog posts for a tool (1-2) */
export function getToolRelatedBlogs(toolSlug: string) {
  const slugs = toolToBlogs[toolSlug] || [];
  return slugs
    .slice(0, 2)
    .map(s => blogPosts.find(b => b.slug === s))
    .filter(Boolean);
}

/** Get related blog posts for a service (2-3) */
export function getServiceRelatedBlogs(serviceSlug: string) {
  const slugs = serviceToBlogs[serviceSlug] || [];
  return slugs
    .slice(0, 3)
    .map(s => blogPosts.find(b => b.slug === s))
    .filter(Boolean);
}

/** Get related industries for a service (2-3) */
export function getServiceRelatedIndustries(serviceSlug: string) {
  const slugs = serviceToIndustries[serviceSlug] || [];
  return slugs
    .slice(0, 3)
    .map(s => industriesData.find(ind => ind.slug === s))
    .filter(Boolean);
}

/** Get related location pages for a service (2-3) */
export function getServiceRelatedLocations(serviceSlug: string) {
  const slugs = serviceToLocations[serviceSlug] || [];
  return slugs
    .slice(0, 3)
    .map(city => locationsData.find(l => l.slug === `seo-services-${city}` && l.lang === "en"))
    .filter(Boolean);
}

/** Get related tools for an industry (2-3) */
export function getIndustryRelatedTools(industrySlug: string) {
  const slugs = industryToTools[industrySlug] || [];
  return slugs
    .slice(0, 3)
    .map(s => toolsData.find(t => t.slug === s))
    .filter(Boolean);
}

/** Get related blog posts for an industry (2-3) */
export function getIndustryRelatedBlogs(industrySlug: string) {
  const slugs = industryToBlogs[industrySlug] || [];
  return slugs
    .slice(0, 3)
    .map(s => blogPosts.find(b => b.slug === s))
    .filter(Boolean);
}

/** Get related location pages for an industry (2-3) — uses relatedLocations from data */
export function getIndustryRelatedLocations(industrySlug: string) {
  const industry = industriesData.find(i => i.slug === industrySlug);
  if (!industry) return [];
  return industry.relatedLocations
    .slice(0, 3)
    .map(city => locationsData.find(l => l.slug === `seo-services-${city}` && l.lang === "en"))
    .filter(Boolean);
}

/** Get related services for a blog post (2-3) */
export function getBlogRelatedServices(blogSlug: string) {
  const slugs = blogToServices[blogSlug] || [];
  return slugs
    .slice(0, 3)
    .map(s => servicesData.find(svc => svc.slug === s))
    .filter(Boolean);
}

/** Get related tools for a blog post (1-2) */
export function getBlogRelatedTools(blogSlug: string) {
  const slugs = blogToTools[blogSlug] || [];
  return slugs
    .slice(0, 2)
    .map(s => toolsData.find(t => t.slug === s))
    .filter(Boolean);
}

/** Get related industries for a location page (2-3) */
export function getLocationRelatedIndustries(countryCode: string) {
  // Map country codes to relevant industries
  const countryIndustries: Record<string, string[]> = {
    // Middle East & North Africa
    PK: ["healthcare-seo", "ecommerce-retail-seo", "education-seo"],
    AE: ["real-estate-seo", "ecommerce-retail-seo", "travel-seo"],
    SA: ["healthcare-seo", "real-estate-seo", "construction-seo"],
    QA: ["real-estate-seo", "construction-seo", "travel-seo"],
    BH: ["real-estate-seo", "healthcare-seo", "restaurant-seo"],
    KW: ["real-estate-seo", "healthcare-seo", "ecommerce-retail-seo"],
    OM: ["travel-seo", "real-estate-seo", "healthcare-seo"],
    JO: ["healthcare-seo", "education-seo", "travel-seo"],
    LB: ["restaurant-seo", "education-seo", "travel-seo"],
    EG: ["healthcare-seo", "real-estate-seo", "education-seo"],
    MA: ["travel-seo", "real-estate-seo", "restaurant-seo"],
    TN: ["travel-seo", "healthcare-seo", "education-seo"],
    IL: ["saas-seo", "startup-seo", "healthcare-seo"],
    // Europe — Western
    GB: ["legal-seo", "saas-seo", "ecommerce-retail-seo"],
    IE: ["saas-seo", "healthcare-seo", "ecommerce-retail-seo"],
    FR: ["fashion-seo", "travel-seo", "restaurant-seo"],
    DE: ["saas-seo", "auto-dealer-seo", "ecommerce-retail-seo"],
    AT: ["travel-seo", "healthcare-seo", "ecommerce-retail-seo"],
    CH: ["saas-seo", "healthcare-seo", "real-estate-seo"],
    NL: ["saas-seo", "ecommerce-retail-seo", "travel-seo"],
    BE: ["ecommerce-retail-seo", "healthcare-seo", "legal-seo"],
    // Europe — Southern
    IT: ["fashion-seo", "travel-seo", "restaurant-seo"],
    ES: ["travel-seo", "real-estate-seo", "restaurant-seo"],
    PT: ["travel-seo", "real-estate-seo", "ecommerce-retail-seo"],
    GR: ["travel-seo", "restaurant-seo", "real-estate-seo"],
    // Europe — Northern
    DK: ["saas-seo", "ecommerce-retail-seo", "healthcare-seo"],
    SE: ["saas-seo", "ecommerce-retail-seo", "healthcare-seo"],
    NO: ["saas-seo", "real-estate-seo", "healthcare-seo"],
    FI: ["saas-seo", "education-seo", "healthcare-seo"],
    // Europe — Eastern & Central
    PL: ["ecommerce-retail-seo", "saas-seo", "healthcare-seo"],
    CZ: ["saas-seo", "ecommerce-retail-seo", "travel-seo"],
    HU: ["travel-seo", "ecommerce-retail-seo", "healthcare-seo"],
    RO: ["saas-seo", "ecommerce-retail-seo", "real-estate-seo"],
    // Turkey
    TR: ["travel-seo", "real-estate-seo", "healthcare-seo"],
    // Americas
    US: ["saas-seo", "healthcare-seo", "ecommerce-retail-seo"],
    CA: ["real-estate-seo", "legal-seo", "healthcare-seo"],
    MX: ["ecommerce-retail-seo", "travel-seo", "real-estate-seo"],
    CO: ["ecommerce-retail-seo", "travel-seo", "healthcare-seo"],
    AR: ["ecommerce-retail-seo", "real-estate-seo", "restaurant-seo"],
    CL: ["ecommerce-retail-seo", "real-estate-seo", "healthcare-seo"],
    PE: ["travel-seo", "ecommerce-retail-seo", "restaurant-seo"],
    BR: ["ecommerce-retail-seo", "saas-seo", "real-estate-seo"],
    // Asia-Pacific
    JP: ["saas-seo", "ecommerce-retail-seo", "auto-dealer-seo"],
    KR: ["saas-seo", "ecommerce-retail-seo", "beauty-salon-seo"],
    SG: ["saas-seo", "ecommerce-retail-seo", "real-estate-seo"],
    MY: ["ecommerce-retail-seo", "travel-seo", "real-estate-seo"],
    TH: ["travel-seo", "restaurant-seo", "real-estate-seo"],
    PH: ["ecommerce-retail-seo", "education-seo", "real-estate-seo"],
    // Oceania
    AU: ["real-estate-seo", "healthcare-seo", "education-seo"],
    NZ: ["real-estate-seo", "healthcare-seo", "travel-seo"],
    // Africa
    ZA: ["ecommerce-retail-seo", "real-estate-seo", "healthcare-seo"],
    NG: ["ecommerce-retail-seo", "education-seo", "real-estate-seo"],
    KE: ["ecommerce-retail-seo", "travel-seo", "healthcare-seo"],
  };
  const slugs = countryIndustries[countryCode] || ["healthcare-seo", "ecommerce-retail-seo"];
  return slugs
    .slice(0, 3)
    .map(s => industriesData.find(ind => ind.slug === s))
    .filter(Boolean);
}

/** Get related blog posts for a location page (2-3) */
export function getLocationRelatedBlogs() {
  return ["local-seo-guide", "seo-strategy-guide-2025", "on-page-seo-optimization"]
    .map(s => blogPosts.find(b => b.slug === s))
    .filter(Boolean);
}

/** Get related tools for a location page (2-3) */
export function getLocationRelatedTools() {
  return ["google-business-profile-audit", "local-keyword-generator", "meta-tag-generator"]
    .map(s => toolsData.find(t => t.slug === s))
    .filter(Boolean);
}

/** Get all services for location sidebar */
export function getAllServicesForSidebar() {
  return servicesData.map(s => ({ slug: s.slug, title: s.title, icon: s.icon }));
}
