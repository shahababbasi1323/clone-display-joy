// Phase-2 SEO fix: optimize <title> and <meta description> length.
//
// Run AFTER scripts/seo-audit.mjs --fix has handled structural issues.
//
//   - <title> too long (>65): truncate at word boundary, suffix " | Shahab Abbasi" if removed
//   - <title> too short (<30): append " | Shahab Abbasi - SEO Expert"
//   - <meta description> too short (<120): append a value-add CTA tail
//   - <meta description> too long (>175): truncate at sentence/word boundary
//   - Missing <h1>: insert an h1 derived from <title> as the first body element
//
// Also updates og:title, og:description, twitter:title, twitter:description to
// match the new title/description.
//
// Idempotent.

import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";

const BRAND_TITLE_SUFFIX = " | Shahab Abbasi";
const TITLE_MAX = 60;
const TITLE_MIN = 32;
const DESC_MAX = 170;
const DESC_MIN = 125;

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, files);
    else if (name === "index.html") files.push(p);
  }
  return files;
}

// Words that should not be the last token of a truncated string.
const DANGLING = new Set(
  "a an the of for on in at to with by from and or but as is are was were be been being have has had do does did this that these those our your their its his her my mine yours theirs which who whom whose what when where why how about into through during without within across over under above below up down off out vs versus".split(
    " "
  )
);

function trimDanglingTail(s) {
  let r = s.replace(/[\s,;:.\-]+$/, "");
  while (true) {
    const m = r.match(/(\b\w+)$/);
    if (!m) break;
    if (DANGLING.has(m[1].toLowerCase())) {
      r = r.slice(0, -m[1].length).replace(/[\s,;:.\-]+$/, "");
    } else break;
  }
  if (!/[.!?]$/.test(r)) r += ".";
  return r;
}

function truncateAtWord(s, max) {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return trimDanglingTail(base);
}

function truncateAtSentence(s, max) {
  if (s.length <= max) return s;
  // Try sentence boundary first
  const cut = s.slice(0, max);
  const lastPeriod = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  if (lastPeriod > max * 0.5) return cut.slice(0, lastPeriod + 1);
  return truncateAtWord(s, max);
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
  // Decode first to avoid double-encoding when this script is re-run.
  const decoded = decodeEntities(String(s));
  return decoded.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function replaceMetaContent(html, selector, newContent) {
  // selector looks like "name=description" or "property=og:title".
  // IMPORTANT: match the wrapping quote precisely (only " inside "..." or '
  // inside '...'). Using the broader [^"']* breaks on apostrophes inside
  // double-quoted content like "Shahab Abbasi's", terminating the match
  // early and corrupting the file on the next run.
  const [k, v] = selector.split("=");
  const safe = escapeHtmlAttr(newContent);
  const re1 = new RegExp(
    `(<meta[^>]+${k}=["']${v}["'][^>]*content=)("([^"]*)"|'([^']*)')([^>]*>)`,
    "i"
  );
  const re2 = new RegExp(
    `(<meta[^>]+content=)("([^"]*)"|'([^']*)')([^>]*${k}=["']${v}["'][^>]*>)`,
    "i"
  );
  if (re1.test(html)) return html.replace(re1, (_, a, _b, _c, _d, e) => `${a}"${safe}"${e}`);
  if (re2.test(html)) return html.replace(re2, (_, a, _b, _c, _d, e) => `${a}"${safe}"${e}`);
  return html;
}

function replaceTitle(html, newTitle) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtmlAttr(newTitle).replace(/&amp;/g, "&")}</title>`);
}

function getTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].replace(/&amp;/g, "&").trim() : null;
}

function getMeta(html, selector) {
  // Match wrapping quote precisely so apostrophes inside double-quoted
  // content (e.g., "Shahab Abbasi's") don't terminate the capture early.
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

function insertH1IfMissing(html, title) {
  const hasH1 = /<h1\b/i.test(html);
  if (hasH1) return html;
  // Insert an h1 right after the opening <body> (or main).
  const h1Tag = `\n<h1 class="sr-only" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">${title}</h1>`;
  if (/<body[^>]*>/i.test(html)) return html.replace(/<body([^>]*)>/i, `<body$1>${h1Tag}`);
  return html;
}

function fixFile(file) {
  let html = readFileSync(file, "utf8");
  const original = html;
  const changes = [];

  let title = getTitle(html);
  let desc = getMeta(html, "name=description");

  // ----- TITLE -----
  if (title) {
    if (title.length > TITLE_MAX) {
      const tail = title.endsWith(BRAND_TITLE_SUFFIX) ? BRAND_TITLE_SUFFIX : "";
      const stem = title.endsWith(BRAND_TITLE_SUFFIX) ? title.slice(0, -BRAND_TITLE_SUFFIX.length) : title;
      let optimized = truncateAtWord(stem, TITLE_MAX - tail.length);
      if (tail) optimized += tail;
      else if (!/Shahab Abbasi/i.test(optimized) && optimized.length + BRAND_TITLE_SUFFIX.length <= TITLE_MAX + 5) {
        optimized = truncateAtWord(stem, TITLE_MAX - BRAND_TITLE_SUFFIX.length) + BRAND_TITLE_SUFFIX;
      }
      if (optimized !== title) {
        html = replaceTitle(html, optimized);
        title = optimized;
        changes.push(`title→${optimized.length}`);
      }
    } else if (title.length < TITLE_MIN) {
      const suffix = / SEO Expert| Shahab Abbasi/.test(title) ? BRAND_TITLE_SUFFIX : " | Shahab Abbasi - SEO Expert";
      const optimized = `${title}${suffix}`;
      if (optimized.length >= TITLE_MIN && optimized.length <= TITLE_MAX + 5) {
        html = replaceTitle(html, optimized);
        title = optimized;
        changes.push(`title+brand→${optimized.length}`);
      }
    }
  }

  // ----- DESCRIPTION -----
  if (desc) {
    // First: clean any trailing dangler ("...for", "...with", etc.) from prior truncations.
    const cleaned = trimDanglingTail(desc);
    if (cleaned !== desc && cleaned.length >= 80) {
      desc = cleaned;
      changes.push(`desc-cleaned→${desc.length}`);
    }
    if (desc.length > DESC_MAX) {
      const optimized = truncateAtSentence(desc, DESC_MAX).trim();
      if (optimized && optimized !== desc) {
        desc = optimized;
        changes.push(`desc→${optimized.length}`);
      }
    }
    // NOTE: Description padding with formulaic brand tails was removed.
    // For pages whose description is too short, run scripts/seo-rewrite-
    // descriptions.mjs after this script: it extracts a unique description
    // from each page's body content (script-aware for non-English pages).
    html = replaceMetaContent(html, "name=description", desc);
    html = replaceMetaContent(html, "property=og:description", desc);
    html = replaceMetaContent(html, "name=twitter:description", desc);
  }

  // Sync og:title and twitter:title with title
  if (title) {
    html = replaceMetaContent(html, "property=og:title", title);
    html = replaceMetaContent(html, "name=twitter:title", title);
  }

  // ----- Missing H1 -----
  if (!/<h1\b/i.test(html) && title) {
    html = insertH1IfMissing(html, title);
    changes.push("h1-injected");
  }

  if (html !== original) {
    writeFileSync(file, html);
  }
  return { file: relative(DIST, file), changes };
}

const files = walk(DIST);
console.log(`Optimizing titles/descriptions across ${files.length} pages...`);
let totalChanges = 0;
let titleChanges = 0;
let descChanges = 0;
let h1Changes = 0;
for (const f of files) {
  const r = fixFile(f);
  totalChanges += r.changes.length;
  for (const c of r.changes) {
    if (c.startsWith("title")) titleChanges++;
    else if (c.startsWith("desc")) descChanges++;
    else if (c === "h1-injected") h1Changes++;
  }
}
console.log(`Pages with title fix: ${titleChanges}`);
console.log(`Pages with desc fix:  ${descChanges}`);
console.log(`Pages with h1 fix:    ${h1Changes}`);
console.log(`Total changes:        ${totalChanges}`);
