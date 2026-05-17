import { useEffect, useLayoutEffect } from "react";

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

// Use useLayoutEffect on the client and useEffect on the server (where document
// does not exist) to keep this hook SSR / prerender safe. The reason we want a
// layout effect on the client is that the browser tab title (and tab favicon
// reload) is read straight from `document.title` when React commits the new
// route. A plain useEffect fires AFTER paint, which on slow / contentious
// renders meant the tab stayed on the previous route's title until the next
// tick. Switching to a layout effect makes the title swap synchronously before
// the browser repaints - so navigating from / -> /tools/google-serp-preview
// updates the tab title on the same frame as the page swap.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function applyMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function applyCanonical(canonical: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = canonical;
}

function applyHreflang(hreflang: HreflangAlternate[] | undefined, canonical: string | undefined) {
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
  if (!hreflang || hreflang.length === 0) return;
  hreflang.forEach(({ lang, href }) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.setAttribute("hreflang", lang);
    link.href = href.startsWith("http") ? href : `https://shahababbasi.com${href}`;
    document.head.appendChild(link);
  });
  const xDefault = document.createElement("link");
  xDefault.rel = "alternate";
  xDefault.setAttribute("hreflang", "x-default");
  xDefault.href = canonical?.startsWith("http")
    ? canonical
    : `https://shahababbasi.com${canonical ?? ""}`;
  document.head.appendChild(xDefault);
}

export function useSeoMeta({ title, description, canonical, hreflang }: SeoMetaOptions) {
  useIsomorphicLayoutEffect(() => {
    // Update title and primary meta tags synchronously before paint so the
    // browser tab and screen-readers see the new route's metadata on the
    // same frame as the route swap.
    if (document.title !== title) {
      document.title = title;
    }

    applyMeta("description", description);
    applyMeta("og:title", title, "property");
    applyMeta("og:description", description, "property");
    applyMeta("og:type", "website", "property");
    if (canonical) {
      applyMeta("og:url", canonical, "property");
      applyCanonical(canonical);
    }
    applyMeta("twitter:title", title, "name");
    applyMeta("twitter:description", description, "name");
    applyMeta("twitter:card", "summary_large_image", "name");

    applyHreflang(hreflang, canonical);

    return () => {
      // Only hreflang links are route-scoped; meta description / og / twitter
      // are overwritten on the next page's effect (or kept as-is if the next
      // page lacks the hook, which is preferable to leaving stale tags).
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    };
  }, [title, description, canonical, hreflang]);
}
