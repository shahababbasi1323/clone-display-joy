#!/usr/bin/env node
/**
 * Rewrite meta descriptions to be unique per page, derived from the page's
 * actual body content. Replaces the earlier approach (truncate-then-pad-with-
 * boilerplate-tail) which left every page ending in the same brand line.
 *
 * Strategy per page:
 *   1. Strip known boilerplate sentences from current description.
 *   2. If stripped desc is still 125-170 chars AND looks unique (not a fragment
 *      of a longer-truncated string), keep it.
 *   3. Otherwise, extract the best paragraph from the page body (filter nav
 *      noise, prefer paragraphs near the optimal 150-char length, exclude
 *      paragraphs that are themselves boilerplate).
 *   4. Truncate at sentence/word boundary to 130-165 chars.
 *   5. Mirror to og:description and twitter:description.
 *
 * Run idempotently: re-running on already-clean dist/ produces no changes.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

// Parse src/data/toolsData.ts at startup to get the authoritative per-tool
// description (these are unique, hand-written one-liners that the previous
// optimizer padded with brand boilerplate).
function loadToolMetaDescriptions() {
  const out = {};
  try {
    if (!existsSync("src/data/toolsData.ts")) return out;
    const src = readFileSync("src/data/toolsData.ts", "utf8");
    const re = /t\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\)/g;
    let m;
    while ((m = re.exec(src)) !== null) {
      out[m[1]] = { name: m[2], metaTitle: m[3], metaDescription: m[4], category: m[5] };
    }
  } catch (e) {
    console.warn("Could not load src/data/toolsData.ts:", e.message);
  }
  return out;
}
const TOOL_META = loadToolMetaDescriptions();

const DIST = "dist";
const DESC_MIN = 110;
const DESC_GOOD = 90;   // a stripped original ≥ this and ≤ DESC_MAX is preferred over body regen
const DESC_MAX = 170;
const DESC_TARGET = 150;

// Hand-written descriptions for high-traffic foundation pages. These override
// any auto-extracted description. Keep each at 130-165 chars.
const HARDCODED_DESCRIPTIONS = {
  "/": "Shahab Abbasi ranks brands on Google and AI search. SEO, technical audits, link building, paid ads. ROI in 90 days or we work free.",
  "/index.html": "Shahab Abbasi ranks brands on Google and AI search. SEO, technical audits, link building, paid ads. ROI in 90 days or we work free.",
  "/about/index.html": "Meet Shahab Abbasi - SEO strategist behind 50+ brand turnarounds across 30+ countries. Senior team of search, content, and paid-media operators.",
  "/contact/index.html": "Tell us about your growth goals. Shahab Abbasi replies within one business day. Free strategy call, no signup, ROI in 90 days or we work free.",
  "/services/index.html": "Full-stack search marketing services: technical SEO, on-page, link building, content, local, ecommerce, enterprise, and AI search optimization.",
  "/pricing/index.html": "Transparent SEO and PPC retainer pricing. Three tiers plus custom plans. Senior strategist on every account. ROI in 90 days or we work free.",
  "/tools/index.html": "85+ free SEO and PPC tools that run in your browser. No signup, no email, no daily limits. Keyword research, audits, schema, CWV, and more.",
  "/blog/index.html": "Practical SEO, AEO, and growth essays from Shahab Abbasi. Frameworks, templates, and decisions you can apply this quarter, no fluff.",
  "/case-studies/index.html": "Real client outcomes from Shahab Abbasi: organic growth percentages, revenue lift, and the exact playbooks that produced each result.",
  "/free-seo-resources/index.html": "Free SEO playbooks, checklists, and templates from Shahab Abbasi. Audit guides, keyword frameworks, and link outreach scripts you can use today.",
  "/industries/index.html": "Search marketing tailored to 100+ industries. Sector-specific playbooks, regulations awareness, and channel mix tuned to each industry's CAC.",
  "/locations/index.html": "Local search marketing across 150+ cities and 30+ countries. Geo-targeted keyword strategy, Google Business Profile, and citation management.",
};

// Sentences that the previous optimizer appended as padding. These get stripped
// from every page's description before we decide whether to regenerate.
const BOILERPLATE_TAILS = [
  "Get a free SEO audit and grow your traffic with proven strategies from Shahab Abbasi.",
  "Get a free SEO audit and grow your organic traffic with proven strategies from Shahab Abbasi.",
  "Contact us for tailored SEO services that drive measurable growth and revenue.",
  "Trusted by businesses worldwide for SEO, PPC, content, and conversion optimization.",
  "Rank higher on Google and outrank competitors with data-driven SEO.",
  "Boost search visibility and improve Core Web Vitals fast.",
  "Backed by proven case studies and transparent reporting.",
  "Free consultation - reach out today.",
  "Contact Shahab Abbasi for a custom plan.",
];

// Markers in the candidate-paragraph search that indicate the paragraph itself
// is one of our boilerplate sentences; never use them as a description source.
const BOILERPLATE_MARKERS = [
  "free SEO audit and grow",
  "tailored SEO services that drive",
  "Rank higher on Google and outrank competitors",
  "Boost search visibility and improve Core Web Vitals",
  "Backed by proven case studies and transparent reporting",
  "Trusted by businesses worldwide for SEO, PPC",
  "Free consultation - reach out today",
];

// Templated phrasings that recur across many tool pages. Even though each tool
// substitutes its own name into the template, the rest of the sentence is
// identical, so the result reads as boilerplate. Block these as description
// sources and treat any existing description containing them as bad.
const TEMPLATED_PHRASES = [
  "uses industry-standard algorithms and best practices",
  "deliver reliable results for SEO professionals and marketers",
  "free online tool that helps you",
  "Professional keyword research services to find high-intent",
  "Expert on-page SEO services including content optimization",
  "Specialized SEO services for healthcare providers",
  "Specialized SEO for e-commerce platforms",
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function decodeEntities(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function escapeHtmlAttr(s) {
  const decoded = decodeEntities(String(s));
  return decoded.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getMeta(html, selector) {
  // Match wrapping quote for content carefully so apostrophes inside double-
  // quoted content don't terminate the match early.
  const [k, v] = selector.split("=");
  const re1 = new RegExp(
    `<meta[^>]+${k}=["']${v}["'][^>]*content=("([^"]*)"|'([^']*)')`,
    "i"
  );
  const re2 = new RegExp(
    `<meta[^>]+content=("([^"]*)"|'([^']*)')[^>]*${k}=["']${v}["']`,
    "i"
  );
  const m1 = html.match(re1);
  const m2 = html.match(re2);
  const grab = (m) => (m ? (m[2] !== undefined ? m[2] : m[3]) : null);
  const raw = grab(m1) ?? grab(m2);
  return raw === null ? null : decodeEntities(raw);
}

function replaceMetaContent(html, selector, newContent) {
  // Replace the FIRST meta tag matching `selector` (e.g. "name=description").
  // Important: content attributes may legally contain an apostrophe inside
  // double quotes (and vice versa). The character class for the content body
  // must match only the wrapping quote character - otherwise an apostrophe
  // like "Shahab Abbasi's" terminates the match early and the rest of the
  // content gets duplicated/orphaned on repeated runs.
  const [k, v] = selector.split("=");
  const encoded = escapeHtmlAttr(newContent);
  // Order: name|property comes first, then content
  const re1 = new RegExp(
    `(<meta[^>]+${k}=["']${v}["'][^>]*content=)("([^"]*)"|'([^']*)')`,
    "i"
  );
  // Order: content comes first, then name|property
  const re2 = new RegExp(
    `(<meta[^>]+content=)("([^"]*)"|'([^']*)')([^>]*${k}=["']${v}["'])`,
    "i"
  );
  if (re1.test(html)) return html.replace(re1, `$1"${encoded}"`);
  if (re2.test(html)) return html.replace(re2, `$1"${encoded}"$5`);
  return html;
}

function stripBoilerplate(desc) {
  if (!desc) return desc;
  let r = desc;
  for (const tail of BOILERPLATE_TAILS) {
    while (r.includes(tail)) {
      r = r.replace(tail, " ").replace(/\s+/g, " ").trim();
    }
  }
  // Clean up dangling punctuation/connectors left from removal.
  r = r.replace(/\s+([.,;:])/g, "$1").replace(/\s+/g, " ").trim();
  // Strip trailing connectors like "and", "or", "with", "for"
  r = r.replace(/[,;\s]+(and|or|with|for|to|of|in|on|at|by|from)\s*\.?$/i, "").trim();
  if (r && !/[.!?]$/.test(r)) r += ".";
  return r;
}

function isMidStringBoilerplate(desc) {
  // Detects when boilerplate was injected in the middle of a non-English desc.
  // (Earlier optimizer concatenated an English tail to a translated description.)
  return BOILERPLATE_MARKERS.some((m) => desc.includes(m));
}

function isTemplated(s) {
  // Returns true if the string contains any templated boilerplate phrasing.
  if (!s) return false;
  return TEMPLATED_PHRASES.some((m) => s.includes(m));
}

function extractCleanHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<form[\s\S]*?<\/form>/gi, " ");
}

// Detect which "script" (Latin / CJK / Arabic / Cyrillic / Devanagari, etc.)
// dominates a string. Used to keep regenerated descriptions in the same
// language as the original page copy.
function detectScript(s) {
  if (!s) return "latin";
  const sample = s.slice(0, 400);
  const sampleLen = sample.length || 1;
  const counts = {
    cjk: (sample.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/g) || []).length,
    arabic: (sample.match(/[\u0600-\u06ff\u0750-\u077f]/g) || []).length,
    cyrillic: (sample.match(/[\u0400-\u04ff]/g) || []).length,
    devanagari: (sample.match(/[\u0900-\u097f]/g) || []).length,
    hebrew: (sample.match(/[\u0590-\u05ff]/g) || []).length,
    thai: (sample.match(/[\u0e00-\u0e7f]/g) || []).length,
    latinExtended: (sample.match(/[\u00c0-\u024f]/g) || []).length, // Czech, Polish, Turkish, Spanish, etc.
  };
  let max = 0;
  let best = "latin";
  for (const [k, v] of Object.entries(counts)) {
    if (v > max) { max = v; best = k; }
  }
  // Require >= 15% density of script-specific chars to call a string that script.
  // Otherwise treat it as latin (English with a few accented chars or scattered CJK).
  const density = max / sampleLen;
  if (best === "latinExtended") {
    if (max < 2 || density < 0.03) return "latin";
  } else if (density < 0.15) {
    return "latin";
  }
  return best;
}

// Populated by precomputeTemplatedParagraphs() during main(). Any paragraph
// appearing on more than this many pages is considered a templated boilerplate
// and excluded as a description source.
const TEMPLATED_THRESHOLD = 8;
let TEMPLATED_PARAGRAPHS = new Set();

function bestParagraph(html, preferredScript = "latin") {
  const clean = extractCleanHtml(html);
  const raw = [...clean.matchAll(/<p\b[^>]*>([\s\S]+?)<\/p>/gi)].map((m) =>
    decodeEntities(m[1].replace(/<[^>]+>/g, ""))
      .replace(/\s+/g, " ")
      .trim()
  );
  // For non-Latin scripts (CJK, Thai) words aren't space-separated, so use a
  // smaller min length and skip the word-count filter.
  const isWordless = ["cjk", "thai"].includes(preferredScript);
  const minLen = isWordless ? 40 : 80;
  let candidates = raw.filter((p) => {
    if (!p) return false;
    if (p.length < minLen) return false;
    if (p.length > 500) return false;
    if (!isWordless && p.split(/\s+/).length < 8) return false;
    if (/^(Home|Industries|Locations|Services|Tools|Contact|About|Blog|Pricing|Resources|Book a Call)/i.test(p)) return false;
    if (BOILERPLATE_MARKERS.some((m) => p.includes(m))) return false;
    if (TEMPLATED_PARAGRAPHS.has(p)) return false;
    if (isTemplated(p)) return false;
    return true;
  });

  // If the page is non-Latin, filter to paragraphs in the same script.
  if (preferredScript !== "latin") {
    const scriptMatched = candidates.filter((p) => detectScript(p) === preferredScript);
    if (scriptMatched.length > 0) candidates = scriptMatched;
  }

  if (candidates.length === 0) return null;
  // Score: prefer paragraphs near target length AND that appear earlier in
  // the page (lower index = closer to hero/intro). Wordless scripts target
  // ~70 chars; alphabetic scripts target DESC_TARGET (~150).
  const target = isWordless ? 70 : DESC_TARGET;
  const indexed = candidates.map((p, i) => ({ p, idx: i }));
  indexed.sort((a, b) => {
    const sa = Math.abs(a.p.length - target) + a.idx * 4;
    const sb = Math.abs(b.p.length - target) + b.idx * 4;
    return sa - sb;
  });
  return indexed[0].p;
}

function truncateAtSentence(s, max) {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  // Prefer period boundary
  const lastPeriod = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  if (lastPeriod > max * 0.55) return cut.slice(0, lastPeriod + 1).trim();
  // Fall back to word boundary
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > max * 0.55) {
    let r = cut.slice(0, lastSpace).trim().replace(/[\s,;:.\-]+$/, "");
    if (!/[.!?]$/.test(r)) r += ".";
    return r;
  }
  let r = cut.trim();
  if (!/[.!?]$/.test(r)) r += ".";
  return r;
}

function slugFromFile(file) {
  // dist/tools/keyword-suggestion-tool/index.html -> "keyword-suggestion-tool"
  const m = file.match(/dist\/(?:.*\/)?([^\/]+)\/index\.html$/);
  return m ? m[1] : "";
}

function titleizeSlug(slug) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildToolDescription(strippedDesc, file, html) {
  // Combine the authoritative per-tool sentence (from toolsData.ts) with a
  // unique short closer so the description is unique, in 130-165 char range,
  // and doesn't pull from the templated tool-page body.
  const slug = slugFromFile(file);
  const meta = TOOL_META[slug];
  // Prefer the source-of-truth description; fall back to stripped desc if
  // the tool isn't listed in toolsData.ts (e.g. bulk-* helpers added later).
  let base = (meta && meta.metaDescription) || strippedDesc || "";
  // If the stripped (or source) base itself looks templated, keep using it
  // anyway because the source is what defines uniqueness for that tool -
  // we'll lean on the closer to add variety.
  base = base.replace(/\s+/g, " ").trim().replace(/\.$/, "");
  if (!base) return null;

  const toolName = (meta && meta.name) || titleizeSlug(slug);
  // Set of candidate closers across a range of lengths so we can pick the
  // longest one that fits the remaining budget. Listed shortest -> longest.
  const allClosers = [
    `Free SEO tool, no signup, no limits.`,
    `Free, instant, runs in your browser.`,
    `Free browser tool. No signup, no daily limits.`,
    `Free, unlimited, no signup, no email required.`,
    `Free tool. 100% browser-side, no data leaves your device.`,
    `Free online SEO tool for marketers and indie operators.`,
    `Free ${toolName}. Runs in your browser, no signup needed.`,
    `Free online ${toolName}. No signup, no daily limits.`,
    `Free ${toolName} that runs in your browser - no signup, no daily limits.`,
    `Browser-based ${toolName} for SEO professionals - instant results, no email required.`,
  ];
  let hash = 0;
  for (const c of slug) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
  // Greedy: pick the longest closer that still fits within DESC_MAX after concat.
  const remaining = DESC_MAX - base.length - 2;
  let closer = null;
  // Sort by length desc, then by hash to vary the choice across same-length options.
  const sorted = [...allClosers]
    .map((c, i) => ({ c, i, len: c.length }))
    .sort((a, b) => b.len - a.len || ((a.i + hash) % allClosers.length) - ((b.i + hash) % allClosers.length));
  for (const { c } of sorted) {
    if (c.length <= remaining) { closer = c; break; }
  }
  // If nothing fit cleanly (huge base), use the shortest available.
  if (!closer && remaining >= 30) closer = allClosers[0];
  let composed = closer ? `${base}. ${closer}` : `${base}.`;
  if (composed.length > DESC_MAX) composed = truncateAtSentence(composed, DESC_MAX);
  if (composed.length < DESC_GOOD) {
    // If the base alone is too short to combine cleanly, just return the base
    // (it'll still be > 60 chars and unique per tool).
    return base.endsWith(".") ? base : base + ".";
  }
  return composed;
}

function buildDescriptionFromPage(html, fallbackTitle, preferredScript, file, strippedDesc) {
  // For tool pages, the body content is templated across many tools so we
  // can't reliably extract a unique paragraph. Compose from the original
  // (stripped) one-liner + a slug-specific closer.
  if (/^dist\/tools\//.test(file) && strippedDesc) {
    const tool = buildToolDescription(strippedDesc, file, html);
    if (tool) return tool;
  }

  const para = bestParagraph(html, preferredScript);
  if (para) {
    if (para.length <= DESC_MAX) return para;
    return truncateAtSentence(para, DESC_MAX);
  }
  // Last resort: use title-derived sentence (kept terse, no brand tail).
  if (fallbackTitle) {
    const t = decodeEntities(fallbackTitle).replace(/\s*[\|\-–—]\s*Shahab Abbasi.*$/i, "").trim();
    return `${t}.`;
  }
  return null;
}

function looksLikeFragment(s) {
  if (!s) return true;
  // Very short or single-clause
  if (s.length < 25) return true;
  // Pure numeric/punct prefix (e.g. "250.")
  if (/^[\d\s,.]{1,12}$/.test(s.split(".")[0] || "")) return true;
  // Single-word "sentence" (e.g. "The page you.")
  const firstSentence = (s.split(/[.!?]/)[0] || "").trim();
  if (firstSentence.split(/\s+/).length < 4) return true;
  return false;
}

function pathToUrl(file) {
  // Convert "dist/foo/bar/index.html" to "/foo/bar/index.html"
  const rel = file.replace(/^dist/, "");
  if (rel === "/index.html") return "/index.html";
  return rel;
}

// Pages that were prerendered as the SPA 404 fallback (because the route
// doesn't exist in React Router) get a generic indexable description so we
// don't have empty/garbage metadata.
const FALLBACK_404_DESC = "Browse Shahab Abbasi's full search marketing directory - SEO and growth playbooks across 150+ cities, 100+ industries, and 80+ free tools.";

function processFile(file) {
  const html = readFileSync(file, "utf8");
  const origDesc = getMeta(html, "name=description") || "";
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "";

  // Hardcoded override for high-traffic foundation pages.
  const urlKey = pathToUrl(file);
  if (HARDCODED_DESCRIPTIONS[urlKey]) {
    const newDesc = HARDCODED_DESCRIPTIONS[urlKey];
    if (newDesc === origDesc) return { file, changed: false };
    let out = html;
    out = replaceMetaContent(out, "name=description", newDesc);
    out = replaceMetaContent(out, "property=og:description", newDesc);
    out = replaceMetaContent(out, "name=twitter:description", newDesc);
    if (out !== html) {
      writeFileSync(file, out);
      return { file, changed: true, oldDesc: origDesc, newDesc };
    }
    return { file, changed: false };
  }
  // Detect what script the page copy is in. Prefer using body content over
  // the stripped desc since the desc may have been mangled by old optimizer.
  const titleScript = detectScript(decodeEntities(title));
  const bodyText = extractCleanHtml(html).replace(/<[^>]+>/g, " ").slice(0, 800);
  const bodyScript = detectScript(bodyText);
  const preferredScript = bodyScript !== "latin" ? bodyScript : titleScript;

  // Detect SPA 404 fallback content: title or body says "Page Not Found" /
  // "404". These pages have ~3 short paragraphs of error copy.
  const decodedTitle = decodeEntities(title);
  const is404Fallback =
    /\b404\b/.test(decodedTitle) ||
    /Page\s+Not\s+Found/i.test(decodedTitle) ||
    /Page\s+Not\s+Found/i.test(bodyText.slice(0, 200));

  if (is404Fallback) {
    if (origDesc === FALLBACK_404_DESC) return { file, changed: false };
    let out = html;
    out = replaceMetaContent(out, "name=description", FALLBACK_404_DESC);
    out = replaceMetaContent(out, "property=og:description", FALLBACK_404_DESC);
    out = replaceMetaContent(out, "name=twitter:description", FALLBACK_404_DESC);
    if (out !== html) {
      writeFileSync(file, out);
      return { file, changed: true, oldDesc: origDesc, newDesc: FALLBACK_404_DESC };
    }
    return { file, changed: false };
  }

  // For tool pages with an entry in toolsData.ts, always use the source-of-
  // truth metaDescription (composed with a slug-specific closer). This avoids
  // the trap of treating a shared body paragraph as "good enough" when the
  // source actually defines a unique sentence for the tool.
  const slug = slugFromFile(file);
  if (/^dist\/tools\//.test(file) && TOOL_META[slug]) {
    const tool = buildToolDescription(stripBoilerplate(origDesc), file, html);
    if (tool && tool.length >= 60) {
      let newDesc = tool;
      if (newDesc.length > DESC_MAX) newDesc = truncateAtSentence(newDesc, DESC_MAX);
      if (newDesc === origDesc) return { file, changed: false };
      let out = html;
      out = replaceMetaContent(out, "name=description", newDesc);
      out = replaceMetaContent(out, "property=og:description", newDesc);
      out = replaceMetaContent(out, "name=twitter:description", newDesc);
      if (out !== html) {
        writeFileSync(file, out);
        return { file, changed: true, oldDesc: origDesc, newDesc };
      }
      return { file, changed: false };
    }
  }

  let newDesc = stripBoilerplate(origDesc);
  const stripped = newDesc;

  // For wordless scripts (CJK, Thai) a short native-language description is
  // a full informative sentence; lower the "good" threshold.
  const goodMin = ["cjk", "thai"].includes(preferredScript) ? 40 : DESC_GOOD;

  // Decision logic:
  //   - If stripped is good (>= goodMin chars, <= DESC_MAX, not a fragment,
  //     no boilerplate marker remains, script matches page): keep stripped.
  //   - Else regenerate from body.
  const strippedScript = detectScript(stripped);
  const strippedOk =
    stripped &&
    stripped.length >= goodMin &&
    stripped.length <= DESC_MAX &&
    !looksLikeFragment(stripped) &&
    !isMidStringBoilerplate(stripped) &&
    !TEMPLATED_PARAGRAPHS.has(stripped) &&
    !isTemplated(stripped) &&
    (preferredScript === "latin" || strippedScript === preferredScript);

  if (!strippedOk) {
    const fromBody = buildDescriptionFromPage(html, title, preferredScript, file, stripped);
    if (fromBody && fromBody.length >= 40) {
      newDesc = fromBody;
    } else if (stripped && stripped.length >= 25) {
      newDesc = stripped;
    }
  }

  if (!newDesc) return { file, changed: false };
  if (newDesc.length > DESC_MAX) newDesc = truncateAtSentence(newDesc, DESC_MAX);

  // Detect localized non-English pages by their file path (dist/{lang}/...).
  // We avoid appending an English closer to those pages because it produces
  // mixed-language descriptions that read poorly to native users.
  const isLocalizedNonEnglish = /^dist\/[a-z]{2}\//.test(file);

  // For Latin-script English pages, if the description is unique but too
  // short for optimal SERP display (< 120 chars), append a short, neutral
  // closer that doesn't read as boilerplate.
  if (
    preferredScript === "latin" &&
    !isLocalizedNonEnglish &&
    newDesc.length > 0 &&
    newDesc.length < 120 &&
    DESC_MAX - newDesc.length > 35
  ) {
    const base = newDesc.replace(/\.$/, "").trim();
    const closers = [
      "Free SEO playbook, no signup or paywall.",
      "Free resource, no signup required.",
      "Free SEO guide. No email gate, no paywall.",
      "Free, no signup, no paywall - just the content.",
      "Free deep-dive for SEO and marketing teams.",
    ];
    let hash = 0;
    for (const c of file) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
    const remaining = DESC_MAX - base.length - 2;
    let closer = null;
    const sorted = [...closers].sort((a, b) => b.length - a.length);
    for (const c of sorted) {
      if (c.length <= remaining) { closer = closers[(hash + sorted.indexOf(c)) % closers.length]; break; }
    }
    if (closer && (base + ". " + closer).length <= DESC_MAX) {
      newDesc = `${base}. ${closer}`;
    }
  }

  if (newDesc === origDesc) return { file, changed: false };

  let out = html;
  out = replaceMetaContent(out, "name=description", newDesc);
  out = replaceMetaContent(out, "property=og:description", newDesc);
  out = replaceMetaContent(out, "name=twitter:description", newDesc);

  if (out !== html) {
    writeFileSync(file, out);
    return { file, changed: true, oldDesc: origDesc, newDesc };
  }
  return { file, changed: false };
}

function precomputeTemplatedParagraphs(files) {
  // Count how many pages each paragraph appears on. Paragraphs above the
  // templated threshold are blocked as description sources.
  const counts = new Map();
  for (const f of files) {
    if (!/index\.html$|\/404\.html$/.test(f) && f !== `${DIST}/index.html`) continue;
    let html;
    try { html = readFileSync(f, "utf8"); } catch { continue; }
    const clean = extractCleanHtml(html);
    const seenOnThisPage = new Set();
    for (const m of clean.matchAll(/<p\b[^>]*>([\s\S]+?)<\/p>/gi)) {
      const p = decodeEntities(m[1].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
      if (p.length < 60 || p.length > 500) continue;
      if (seenOnThisPage.has(p)) continue;
      seenOnThisPage.add(p);
      counts.set(p, (counts.get(p) || 0) + 1);
    }
  }
  const templated = new Set();
  for (const [p, n] of counts) if (n > TEMPLATED_THRESHOLD) templated.add(p);
  return templated;
}

function main() {
  const files = walk(DIST);
  console.log(`Scanning ${files.length} files for templated paragraphs...`);
  TEMPLATED_PARAGRAPHS = precomputeTemplatedParagraphs(files);
  console.log(`Blocked ${TEMPLATED_PARAGRAPHS.size} templated paragraphs from description sources.`);

  let changed = 0;
  const samples = [];
  for (const f of files) {
    if (!/index\.html$|\/404\.html$/.test(f) && f !== `${DIST}/index.html`) continue;
    const r = processFile(f);
    if (r.changed) {
      changed++;
      if (samples.length < 5) samples.push(r);
    }
  }
  console.log(`Rewrote descriptions on ${changed} pages.`);
  for (const s of samples) {
    console.log(`\n${s.file}`);
    console.log(`  old: ${s.oldDesc.slice(0, 160)}`);
    console.log(`  new: ${s.newDesc.slice(0, 160)}`);
  }
}

main();
