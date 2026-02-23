import googleAds from "@/assets/services/google-ads.jpg";
import socialMediaAds from "@/assets/services/social-media-ads.jpg";
import remarketing from "@/assets/services/remarketing.jpg";
import ppcAudit from "@/assets/services/ppc-audit.jpg";
import localSearchAds from "@/assets/services/local-search-ads.jpg";
import ppcHero from "@/assets/services/ppc-hero.jpg";

const ppcImageMap: Record<string, string> = {
  "google-ads-management": googleAds,
  "social-media-ads": socialMediaAds,
  "remarketing-retargeting": remarketing,
  "ppc-audit-strategy": ppcAudit,
  "local-search-ads": localSearchAds,
};

export function getPpcServiceImage(slug: string): string {
  return ppcImageMap[slug] || ppcHero;
}

export { ppcHero };
