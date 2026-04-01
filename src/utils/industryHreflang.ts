/**
 * Builds hreflang alternate links for industry pages.
 * Maps between English slugs (e.g. "healthcare-seo") and i18n slugs (e.g. "healthcare-seo-ar").
 */
import { industriesI18nData, type SupportedIndustryLang } from "@/data/industriesI18n";

const I18N_LANGS: SupportedIndustryLang[] = ["ar", "fr", "de", "es", "nl"];
const BASE_URL = "https://shahababbasi.com";

/** Given an English industry slug, return hreflang alternates for all available translations */
export function getIndustryHreflang(enSlug: string) {
  const alternates: { lang: string; href: string }[] = [
    { lang: "en", href: `${BASE_URL}/industries/${enSlug}` },
  ];

  for (const lang of I18N_LANGS) {
    const langData = industriesI18nData[lang];
    if (!langData) continue;
    // i18n slugs follow pattern: {base}-{lang} e.g. "healthcare-seo-ar"
    const match = langData.find(
      (i) => i.slug === `${enSlug}-${lang}` || i.slug === enSlug
    );
    if (match) {
      alternates.push({ lang, href: `${BASE_URL}/${lang}/industries/${match.slug}` });
    }
  }

  return alternates.length > 1 ? alternates : [];
}

/** Given an i18n industry slug and lang, return hreflang alternates */
export function getI18nIndustryHreflang(lang: SupportedIndustryLang, i18nSlug: string) {
  // Derive English base slug by stripping the lang suffix
  const suffix = `-${lang}`;
  const enSlug = i18nSlug.endsWith(suffix)
    ? i18nSlug.slice(0, -suffix.length)
    : i18nSlug;

  const alternates: { lang: string; href: string }[] = [
    { lang: "en", href: `${BASE_URL}/industries/${enSlug}` },
    { lang, href: `${BASE_URL}/${lang}/industries/${i18nSlug}` },
  ];

  // Add other languages
  for (const otherLang of I18N_LANGS) {
    if (otherLang === lang) continue;
    const langData = industriesI18nData[otherLang];
    if (!langData) continue;
    const match = langData.find(
      (i) => i.slug === `${enSlug}-${otherLang}` || i.slug === enSlug
    );
    if (match) {
      alternates.push({ lang: otherLang, href: `${BASE_URL}/${otherLang}/industries/${match.slug}` });
    }
  }

  return alternates;
}
