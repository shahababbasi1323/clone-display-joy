import technicalSeo from "@/assets/services/technical-seo.jpg";
import onPageSeo from "@/assets/services/on-page-seo.jpg";
import linkBuilding from "@/assets/services/link-building.jpg";
import localSeo from "@/assets/services/local-seo.jpg";
import ecommerceSeo from "@/assets/services/ecommerce-seo.jpg";
import geoOptimization from "@/assets/services/geo-optimization.jpg";
import contentStrategy from "@/assets/services/content-strategy.jpg";
import keywordResearch from "@/assets/services/keyword-research.jpg";
import speedOptimization from "@/assets/services/speed-optimization.jpg";
import seoConsulting from "@/assets/services/seo-consulting.jpg";
import schemaMarkup from "@/assets/services/schema-markup.jpg";
import internationalSeo from "@/assets/services/international-seo.jpg";

const serviceImageMap: Record<string, string> = {
  "technical-seo": technicalSeo,
  "on-page-seo": onPageSeo,
  "off-page-seo": linkBuilding,
  "local-seo": localSeo,
  "ecommerce-seo": ecommerceSeo,
  "geo-optimization": geoOptimization,
  "aeo-optimization": geoOptimization,
  "content-strategy": contentStrategy,
  "shopify-seo": ecommerceSeo,
  "wordpress-seo": onPageSeo,
  "international-seo": internationalSeo,
  "seo-audit": technicalSeo,
  "keyword-research": keywordResearch,
  "google-business-profile": localSeo,
  "link-building": linkBuilding,
  "seo-consulting": seoConsulting,
  "website-speed-optimization": speedOptimization,
  "schema-markup": schemaMarkup,
  "seo-training": seoConsulting,
};

export function getServiceImage(slug: string): string {
  return serviceImageMap[slug] || technicalSeo;
}
