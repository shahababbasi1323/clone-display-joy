import { useEffect } from "react";

interface HreflangAlternate {
  lang: string;
  href: string;
}

interface SeoMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  hreflang?: HreflangAlternate[];
}

export function useSeoMeta({ title, description, canonical, hreflang }: SeoMetaOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:title", title, "name");
    setMeta("twitter:description", description, "name");
    setMeta("twitter:card", "summary_large_image", "name");

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Inject hreflang alternate links
    // Remove any previously injected hreflang links to avoid stale entries
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    if (hreflang && hreflang.length > 0) {
      hreflang.forEach(({ lang, href }) => {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.setAttribute("hreflang", lang);
        link.href = href.startsWith("http") ? href : `https://shahababbasi.com${href}`;
        document.head.appendChild(link);
      });

      // Always add x-default pointing to the canonical (or first alternate)
      const xDefault = document.createElement("link");
      xDefault.rel = "alternate";
      xDefault.setAttribute("hreflang", "x-default");
      xDefault.href = canonical?.startsWith("http")
        ? canonical
        : `https://shahababbasi.com${canonical ?? ""}`;
      document.head.appendChild(xDefault);
    }

    // Cleanup: remove hreflang links when component unmounts / page changes
    return () => {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    };
  }, [title, description, canonical, hreflang]);
}

