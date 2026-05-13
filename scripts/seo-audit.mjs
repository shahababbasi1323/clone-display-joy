// SEO Audit + Auto-fix script for pre-rendered dist/
//
// Run after `node prerender.mjs`. Walks every index.html in dist/, scores it
// against ~20 SEO rules, writes a CSV report, and (when --fix is passed)
// injects missing metadata in-place.
//
// Usage:
//   node scripts/seo-audit.mjs            # audit only, writes seo-audit-report.csv
//   node scripts/seo-audit.mjs --fix      # audit + apply fixes in place
//
// What it audits / fixes:
//   - <title> length (30-65)
//   - <meta name="description"> length (120-170)
//   - <meta name="keywords"> presence + LSI extraction
//   - <link rel="canonical"> absolute URL matching path
//   - Open Graph: og:title, og:description, og:type, og:url, og:image, og:locale, og:site_name
//   - Twitter Cards: twitter:card, twitter:title, twitter:description, twitter:image
//   - <meta name="robots"> with AI-friendly directives
//   - WebPage JSON-LD scaffold (+ BreadcrumbList for non-home pages)
//   - hreflang cluster for multilingual pages
//   - H1 count (== 1)
//   - body word count (>= 300 -> ok, 100-300 -> warn, <100 -> thin)
//   - image alt coverage
//   - internal link count (>= 5)
//
// 404 / orphan detection:
//   - Every <loc> in dist/sitemap.xml must resolve to a real file
//   - Every dist/**/index.html should be in the sitemap (warn on orphans)
//
// All fixes are idempotent (re-runnable).

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";

const DIST = "dist";
const ORIGIN = "https://shahababbasi.com";
const SITE_NAME = "Shahab Abbasi";
const DEFAULT_OG_IMAGE = `${ORIGIN}/og-default.png`;
const DEFAULT_LOCALE = "en_US";

const FIX = process.argv.includes("--fix");
const QUIET = process.argv.includes("--quiet");

// ----- helpers -----
function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, files);
    else if (name === "index.html") files.push(p);
  }
  return files;
}

function pathToUrl(p) {
  // dist/foo/bar/index.html -> /foo/bar
  const rel = relative(DIST, p).replace(/\\/g, "/").replace(/\/?index\.html$/, "");
  return "/" + rel;
}

function urlToCanonical(urlPath) {
  if (urlPath === "/" || urlPath === "") return `${ORIGIN}/`;
  return `${ORIGIN}${urlPath}`;
}

function getTag(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

function attr(html, name) {
  const re = new RegExp(`<meta[^>]+name=["']${name}["'][^>]*content=["']([^"']*)["']`, "i");
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*name=["']${name}["']`, "i");
  return getTag(html, re) ?? getTag(html, re2);
}

function prop(html, propertyName) {
  const re = new RegExp(`<meta[^>]+property=["']${propertyName}["'][^>]*content=["']([^"']*)["']`, "i");
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*property=["']${propertyName}["']`, "i");
  return getTag(html, re) ?? getTag(html, re2);
}

function linkAttr(html, rel) {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]*href=["']([^"']*)["']`, "i");
  return getTag(html, re);
}

function decodeEntities(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function escapeHtmlAttr(s) {
  // Decode first to avoid double-encoding on repeated runs.
  const decoded = decodeEntities(String(s));
  return decoded.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOPWORDS = new Set(
  ("a about above after again against all am an and any are aren as at be because been before being below between both but by could did do does doing don down during each few for from further had has have having he her here hers him his how i if in into is it its itself just me more most my myself nor not now of off on once only or other our ours out over own same she should so some such than that the their theirs them themselves then there these they this those through to too under until up very was we were what when where which while who whom why will with you your yours yourself yourselves").split(
    " "
  )
);

function extractKeywords(text, slug, count = 10) {
  const slugWords = slug.split(/[/-]+/).filter((w) => w.length > 2 && !STOPWORDS.has(w));
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 3 && !STOPWORDS.has(t));
  const freq = {};
  for (const t of tokens) freq[t] = (freq[t] || 0) + 1;
  // bigrams
  for (let i = 0; i < tokens.length - 1; i++) {
    const bg = `${tokens[i]} ${tokens[i + 1]}`;
    if (tokens[i].length > 3 && tokens[i + 1].length > 3) {
      freq[bg] = (freq[bg] || 0) + 2; // weight bigrams higher
    }
  }
  const sorted = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([k]) => k);
  // prepend slug-derived keywords, dedupe, cap
  const seen = new Set();
  const out = [];
  for (const w of [...slugWords, ...sorted]) {
    if (!seen.has(w)) {
      seen.add(w);
      out.push(w);
      if (out.length >= count) break;
    }
  }
  return out;
}

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function detectLanguage(urlPath) {
  // /ar/... -> ar, /ja/... -> ja, etc. Otherwise en.
  const m = urlPath.match(/^\/([a-z]{2})\//);
  return m ? m[1] : "en";
}

function detectPageType(urlPath) {
  if (urlPath === "/" || urlPath === "") return "home";
  if (urlPath.startsWith("/blog/")) return urlPath === "/blog" ? "blog-hub" : "blog-post";
  if (urlPath.startsWith("/services/")) return urlPath === "/services" ? "service-hub" : "service";
  if (urlPath.startsWith("/industries/")) return urlPath === "/industries" ? "industry-hub" : "industry";
  if (urlPath.startsWith("/free-seo-resources/")) return "resource";
  if (urlPath.match(/^\/seo-services-/)) return "city";
  if (urlPath === "/locations" || urlPath === "/services" || urlPath === "/industries" || urlPath === "/blog") return "hub";
  return "page";
}

function insertInHead(html, snippet) {
  if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}\n  </head>`);
  // Fallback: append snippet
  return html + snippet;
}

function replaceTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  return null;
}

function ensureMeta(html, attrName, attrValue, content) {
  // Idempotent meta upsert.
  const re = new RegExp(`<meta[^>]+${attrName}=["']${attrValue}["'][^>]*>`, "i");
  const tag = `<meta ${attrName}="${attrValue}" content="${escapeHtmlAttr(content)}">`;
  if (re.test(html)) {
    return html.replace(re, tag);
  }
  return insertInHead(html, `    ${tag}`);
}

function ensureLink(html, rel, href, extraAttrs = "") {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]*>`, "i");
  const tag = `<link rel="${rel}" href="${escapeHtmlAttr(href)}"${extraAttrs}>`;
  if (re.test(html)) {
    return html.replace(re, tag);
  }
  return insertInHead(html, `    ${tag}`);
}

function hasJsonLdType(html, type) {
  const blocks = [...html.matchAll(/<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const b of blocks) {
    try {
      const data = JSON.parse(b[1]);
      const types = Array.isArray(data) ? data.map((d) => d["@type"]) : [data["@type"]];
      if (types.flat().includes(type)) return true;
    } catch (e) {
      // ignore
    }
  }
  return false;
}

function injectJsonLd(html, payload) {
  const snippet = `    <script type="application/ld+json">${JSON.stringify(payload)}</script>`;
  return insertInHead(html, snippet);
}

// ----- Per-page audit + fix -----
function auditAndFix(file) {
  const urlPath = pathToUrl(file);
  let html = readFileSync(file, "utf8");
  const original = html;
  const issues = [];
  const fixesApplied = [];

  const language = detectLanguage(urlPath);
  const pageType = detectPageType(urlPath);
  const canonical = urlToCanonical(urlPath);

  // ----- TITLE -----
  let title = getTag(html, /<title>([\s\S]*?)<\/title>/i);
  if (title) title = title.replace(/&amp;/g, "&").trim();
  if (!title) {
    issues.push("missing-title");
  } else if (title.length < 30) {
    issues.push(`title-too-short(${title.length})`);
  } else if (title.length > 65) {
    issues.push(`title-too-long(${title.length})`);
  }

  // ----- DESCRIPTION -----
  let description = attr(html, "description");
  if (description) description = description.replace(/&amp;/g, "&").trim();
  if (!description) {
    issues.push("missing-description");
  } else if (description.length < 120) {
    issues.push(`description-too-short(${description.length})`);
  } else if (description.length > 175) {
    issues.push(`description-too-long(${description.length})`);
  }

  // ----- BODY TEXT for keyword extraction -----
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : html;
  const bodyText = stripTags(bodyHtml);
  const wordCount = countWords(bodyText);

  if (wordCount < 100) issues.push(`thin-content(${wordCount}w)`);
  else if (wordCount < 300) issues.push(`low-content(${wordCount}w)`);

  // ----- KEYWORDS -----
  let keywords = attr(html, "keywords");
  if (!keywords) {
    const slug = urlPath.replace(/^\//, "").replace(/\//g, "-") || "home";
    const kws = extractKeywords(bodyText + " " + (title || ""), slug, 12);
    keywords = kws.join(", ");
    if (FIX && keywords) {
      html = ensureMeta(html, "name", "keywords", keywords);
      fixesApplied.push("keywords");
    } else {
      issues.push("missing-keywords");
    }
  }

  // ----- CANONICAL -----
  const currentCanonical = linkAttr(html, "canonical");
  if (!currentCanonical) {
    issues.push("missing-canonical");
    if (FIX) {
      html = ensureLink(html, "canonical", canonical);
      fixesApplied.push("canonical");
    }
  } else if (currentCanonical !== canonical) {
    // canonical may legitimately point to a different page (e.g. duplicate)
    // We only fix if the canonical doesn't include the path at all
    if (!currentCanonical.endsWith(urlPath) && !currentCanonical.endsWith(urlPath + "/")) {
      issues.push(`canonical-mismatch(was=${currentCanonical})`);
      if (FIX) {
        html = ensureLink(html, "canonical", canonical);
        fixesApplied.push("canonical-fix");
      }
    }
  }

  // ----- OPEN GRAPH -----
  const ogChecks = [
    ["og:title", title || SITE_NAME],
    ["og:description", description || ""],
    ["og:type", pageType === "blog-post" ? "article" : "website"],
    ["og:url", canonical],
    ["og:image", DEFAULT_OG_IMAGE],
    ["og:site_name", SITE_NAME],
    ["og:locale", language === "en" ? "en_US" : `${language}_${language.toUpperCase()}`],
  ];
  for (const [p, val] of ogChecks) {
    if (!prop(html, p) && val) {
      issues.push(`missing-${p}`);
      if (FIX) {
        const tag = `<meta property="${p}" content="${escapeHtmlAttr(val)}">`;
        html = insertInHead(html, `    ${tag}`);
        fixesApplied.push(p);
      }
    }
  }

  // ----- TWITTER CARDS -----
  const twChecks = [
    ["twitter:card", "summary_large_image"],
    ["twitter:title", title || SITE_NAME],
    ["twitter:description", description || ""],
    ["twitter:image", DEFAULT_OG_IMAGE],
    ["twitter:site", "@shahababbasi"],
  ];
  for (const [name, val] of twChecks) {
    if (!attr(html, name) && val) {
      issues.push(`missing-${name}`);
      if (FIX) {
        html = ensureMeta(html, "name", name, val);
        fixesApplied.push(name);
      }
    }
  }

  // ----- ROBOTS META -----
  if (!attr(html, "robots")) {
    issues.push("missing-robots-meta");
    if (FIX) {
      html = ensureMeta(
        html,
        "name",
        "robots",
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      );
      fixesApplied.push("robots");
    }
  }

  // ----- AI / LLM friendly meta -----
  if (!attr(html, "google")) {
    if (FIX) {
      html = ensureMeta(html, "name", "google", "notranslate");
      fixesApplied.push("google-meta");
    }
  }

  // ----- H1 -----
  const h1Matches = bodyHtml.match(/<h1[\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    issues.push("missing-h1");
  } else if (h1Matches.length > 1) {
    issues.push(`multiple-h1(${h1Matches.length})`);
  }

  // ----- IMAGES -----
  const imgs = bodyHtml.match(/<img[^>]+>/gi) || [];
  const imgsWithoutAlt = imgs.filter((i) => !/alt=["'][^"']*["']/i.test(i)).length;
  if (imgsWithoutAlt > 0) issues.push(`images-no-alt(${imgsWithoutAlt}/${imgs.length})`);

  // ----- INTERNAL LINKS -----
  const links = bodyHtml.match(/<a[^>]+href=["'][^"']+["'][^>]*>/gi) || [];
  const internal = links.filter((a) => {
    const m = a.match(/href=["']([^"']+)["']/);
    if (!m) return false;
    const h = m[1];
    return h.startsWith("/") || h.startsWith(ORIGIN);
  });
  if (internal.length < 5) issues.push(`few-internal-links(${internal.length})`);

  // ----- JSON-LD: WebPage scaffold -----
  if (!hasJsonLdType(html, "WebPage")) {
    if (FIX) {
      html = injectJsonLd(html, {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: canonical,
        name: title || SITE_NAME,
        description: description || "",
        inLanguage: language,
        isPartOf: { "@type": "WebSite", url: ORIGIN, name: SITE_NAME },
        primaryImageOfPage: DEFAULT_OG_IMAGE,
        dateModified: new Date().toISOString().slice(0, 10),
      });
      fixesApplied.push("WebPage-ld");
    }
  }

  // ----- JSON-LD: BreadcrumbList -----
  if (urlPath !== "/" && !hasJsonLdType(html, "BreadcrumbList")) {
    if (FIX) {
      const parts = urlPath.split("/").filter(Boolean);
      const items = [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
      ];
      let acc = "";
      parts.forEach((p, i) => {
        acc += `/${p}`;
        items.push({
          "@type": "ListItem",
          position: i + 2,
          name: p
            .split("-")
            .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : w))
            .join(" "),
          item: `${ORIGIN}${acc}`,
        });
      });
      html = injectJsonLd(html, {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items,
      });
      fixesApplied.push("Breadcrumb-ld");
    }
  }

  // ----- Service schema for service pages -----
  if (pageType === "service" && !hasJsonLdType(html, "Service")) {
    if (FIX) {
      html = injectJsonLd(html, {
        "@context": "https://schema.org",
        "@type": "Service",
        name: title || "",
        description: description || "",
        url: canonical,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: ORIGIN,
          telephone: "+923041316771",
          email: "shahababbasi987@gmail.com",
        },
        areaServed: { "@type": "Country", name: "Worldwide" },
      });
      fixesApplied.push("Service-ld");
    }
  }

  // ----- LocalBusiness schema for city pages -----
  if (pageType === "city" && !hasJsonLdType(html, "LocalBusiness")) {
    if (FIX) {
      const cityName = urlPath
        .replace(/^\/(seo-services-|[a-z]{2}\/seo-services-)/, "")
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");
      html = injectJsonLd(html, {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${SITE_NAME} - SEO ${cityName}`,
        url: canonical,
        telephone: "+923041316771",
        email: "shahababbasi987@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Blue Area",
          addressLocality: "Islamabad",
          addressRegion: "Islamabad Capital Territory",
          postalCode: "44000",
          addressCountry: "PK",
        },
        areaServed: { "@type": "City", name: cityName },
        priceRange: "$$",
      });
      fixesApplied.push("LocalBusiness-ld");
    }
  }

  // ----- Article schema for blog posts -----
  if (pageType === "blog-post" && !hasJsonLdType(html, "Article")) {
    if (FIX) {
      html = injectJsonLd(html, {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title || "",
        description: description || "",
        url: canonical,
        author: { "@type": "Person", name: "Shahab Abbasi", url: `${ORIGIN}/about` },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: { "@type": "ImageObject", url: `${ORIGIN}/favicon.png` },
        },
        datePublished: "2026-01-01",
        dateModified: new Date().toISOString().slice(0, 10),
        image: DEFAULT_OG_IMAGE,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        wordCount,
        inLanguage: language,
      });
      fixesApplied.push("Article-ld");
    }
  }

  // ----- Speakable for AI voice/answer engines -----
  if (!hasJsonLdType(html, "SpeakableSpecification") && wordCount >= 200) {
    if (FIX) {
      html = injectJsonLd(html, {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: canonical,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "p"],
        },
      });
      fixesApplied.push("Speakable-ld");
    }
  }

  if (FIX && html !== original) {
    writeFileSync(file, html);
  }

  return {
    file: relative(DIST, file),
    url: urlPath,
    pageType,
    language,
    title: title || "",
    titleLen: title ? title.length : 0,
    descLen: description ? description.length : 0,
    wordCount,
    h1: h1Matches.length,
    internalLinks: internal.length,
    images: imgs.length,
    imagesNoAlt: imgsWithoutAlt,
    issues,
    fixesApplied,
  };
}

// ----- 404 / orphan detection -----
function detect404sAndOrphans(allFiles) {
  const sitemapPath = join(DIST, "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    return { missingFiles: [], orphans: [], sitemapUrls: [] };
  }
  const xml = readFileSync(sitemapPath, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const sitemapPaths = new Set(
    locs.map((l) => {
      try {
        return new URL(l).pathname.replace(/\/$/, "") || "/";
      } catch {
        return l;
      }
    })
  );

  const rendered = new Set(allFiles.map((f) => pathToUrl(f).replace(/\/$/, "") || "/"));

  const missingFiles = [];
  for (const p of sitemapPaths) {
    if (!rendered.has(p)) missingFiles.push(p);
  }
  const orphans = [];
  for (const p of rendered) {
    // Pages in dist/ but NOT in sitemap. Some are intentional (404, admin) - skip those.
    if (p === "/404" || p.startsWith("/wah/")) continue;
    if (!sitemapPaths.has(p)) orphans.push(p);
  }
  return { missingFiles, orphans, sitemapUrls: [...sitemapPaths] };
}

// ----- main -----
function main() {
  const files = walk(DIST);
  if (!QUIET) console.log(`Auditing ${files.length} HTML files in ${DIST}/...`);

  const results = files.map(auditAndFix);

  // sitemap consistency
  const { missingFiles, orphans, sitemapUrls } = detect404sAndOrphans(files);

  // Summary counts
  const issueCounts = {};
  let totalIssues = 0;
  let totalFixes = 0;
  for (const r of results) {
    for (const i of r.issues) {
      const k = i.split("(")[0];
      issueCounts[k] = (issueCounts[k] || 0) + 1;
      totalIssues++;
    }
    totalFixes += r.fixesApplied.length;
  }

  // CSV report
  const rows = [
    ["file", "url", "type", "lang", "titleLen", "descLen", "words", "h1", "links", "imgs", "imgsNoAlt", "issues", "fixed"],
    ...results.map((r) => [
      r.file,
      r.url,
      r.pageType,
      r.language,
      r.titleLen,
      r.descLen,
      r.wordCount,
      r.h1,
      r.internalLinks,
      r.images,
      r.imagesNoAlt,
      r.issues.join("|"),
      r.fixesApplied.join("|"),
    ]),
  ];
  const csv = rows
    .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  writeFileSync("seo-audit-report.csv", csv);

  // Console summary
  console.log(`\n=== SEO Audit Summary ===`);
  console.log(`Total pages:       ${results.length}`);
  console.log(`Total issues:      ${totalIssues}`);
  console.log(`Total fixes applied: ${totalFixes} ${FIX ? "" : "(dry run - pass --fix to apply)"}`);
  console.log(`\nIssue breakdown:`);
  for (const [k, v] of Object.entries(issueCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${v.toString().padStart(5)}  ${k}`);
  }

  console.log(`\nSitemap consistency:`);
  console.log(`  Sitemap URLs:       ${sitemapUrls.length}`);
  console.log(`  Missing files (404): ${missingFiles.length}`);
  if (missingFiles.length > 0 && missingFiles.length <= 30) {
    for (const m of missingFiles) console.log(`    ${m}`);
  } else if (missingFiles.length > 30) {
    for (const m of missingFiles.slice(0, 30)) console.log(`    ${m}`);
    console.log(`    ... and ${missingFiles.length - 30} more (see seo-audit-report.csv)`);
  }
  console.log(`  Orphan pages (in dist/ but not in sitemap): ${orphans.length}`);
  if (orphans.length > 0 && orphans.length <= 30) {
    for (const o of orphans) console.log(`    ${o}`);
  }

  // Persist missing/orphans for the build pipeline
  writeFileSync("seo-audit-orphans.json", JSON.stringify({ missingFiles, orphans }, null, 2));

  console.log(`\nReports written: seo-audit-report.csv, seo-audit-orphans.json`);
}

main();
