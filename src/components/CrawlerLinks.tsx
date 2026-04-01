/**
 * CrawlerLinks — visually hidden internal links for search engine crawlers.
 * Renders every indexable page as an <a> tag so bots can discover and crawl
 * the full site graph from any page. Hidden from users via sr-only + aria-hidden.
 */
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { locationsData } from "@/data/locationsData";
import { toolsData } from "@/data/toolsData";
import { blogPosts } from "@/data/blogData";
import { ppcServicesData } from "@/data/ppcServicesData";
import { resources } from "@/data/resourcesData";
import { countryHubData } from "@/data/countryHubData";
import { industriesI18nData } from "@/data/industriesI18n";

const STATIC_PAGES = [
  "/", "/about", "/services", "/industries", "/locations", "/ppc",
  "/pricing", "/tools", "/blog", "/contact", "/free-seo-audit",
  "/free-seo-resources", "/testimonials", "/faq", "/sitemap",
  "/privacy-policy", "/terms-of-service",
];

const I18N_LANGS = ["ar", "fr", "de", "es", "nl"] as const;

const CrawlerLinks = () => {
  return (
    <nav
      aria-hidden="true"
      tabIndex={-1}
      className="sr-only"
      style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}
    >
      {/* Static pages */}
      {STATIC_PAGES.map((p) => (
        <Link key={p} to={p}>{p}</Link>
      ))}

      {/* SEO Services */}
      {servicesData.map((s) => (
        <Link key={`svc-${s.slug}`} to={`/services/${s.slug}`}>{s.title}</Link>
      ))}

      {/* PPC Services */}
      {ppcServicesData.map((s) => (
        <Link key={`ppc-${s.slug}`} to={`/ppc/${s.slug}`}>{s.title}</Link>
      ))}

      {/* Industries (English) */}
      {industriesData.map((i) => (
        <Link key={`ind-${i.slug}`} to={`/industries/${i.slug}`}>{i.shortTitle}</Link>
      ))}

      {/* Industries (i18n) */}
      {I18N_LANGS.map((lang) => (
        <span key={`ind-lang-${lang}`}>
          <Link to={`/${lang}/industries`}>{lang} industries</Link>
          {industriesI18nData[lang]?.map((i) => (
            <Link key={`${lang}-${i.slug}`} to={`/${lang}/industries/${i.slug}`}>{i.shortTitle}</Link>
          ))}
        </span>
      ))}

      {/* Country Hubs */}
      {countryHubData.map((h) => (
        <Link key={`hub-${h.slug}`} to={`/locations/${h.slug}`}>{h.name}</Link>
      ))}

      {/* Location Pages */}
      {locationsData.map((loc) => (
        <Link
          key={`loc-${loc.langPrefix}-${loc.slug}`}
          to={loc.langPrefix ? `/${loc.langPrefix}/${loc.slug}` : `/${loc.slug}`}
        >
          {loc.localCity || loc.city}
        </Link>
      ))}

      {/* i18n Location Hubs */}
      {I18N_LANGS.map((lang) => (
        <Link key={`lochub-${lang}`} to={`/${lang}/locations`}>{lang} locations</Link>
      ))}

      {/* Tools */}
      {toolsData.map((t) => (
        <Link key={`tool-${t.slug}`} to={`/tools/${t.slug}`}>{t.name}</Link>
      ))}

      {/* Blog Posts */}
      {blogPosts.map((p) => (
        <Link key={`blog-${p.slug}`} to={`/blog/${p.slug}`}>{p.title}</Link>
      ))}

      {/* Resources */}
      {resources.map((r) => (
        <Link key={`res-${r.slug}`} to={`/free-seo-resources/${r.slug}`}>{r.title}</Link>
      ))}
    </nav>
  );
};

export default CrawlerLinks;
