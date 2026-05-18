// Build clean SPA shells for admin routes that are not pre-rendered.
//
// Background: Cloudflare Pages serves a top-level `404.html` for any URL that
// does not have a matching file on disk. The `_redirects` SPA-rewrite rule
// (`/* /index.html 200`) does NOT override the 404.html fallback in practice.
// That means routes like `/wah/login` - which are admin-only and not pre-
// rendered (we don't want them indexed) - get served the 404 page instead of
// the React SPA shell.
//
// Fix: write a clean SPA shell at every admin route path under `dist/wah/...`.
// Cloudflare then finds a real file at that path and serves it; the React
// bundle hydrates and React Router renders the correct admin page.
//
// The shells reuse the bundle/script references from the freshly-built
// dist/index.html, so they always point at the latest hashed asset names.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';
import { JSDOM } from 'jsdom';

// Keep in sync with the <Route> entries under "/wah" in src/App.tsx.
const ADMIN_ROUTES = [
  '/wah',
  '/wah/login',
  '/wah/blog',
  '/wah/case-studies',
  '/wah/testimonials',
  '/wah/leads',
  '/wah/settings',
];

function buildShell(sourceHtml) {
  const dom = new JSDOM(sourceHtml);
  const { document } = dom.window;

  // Empty the SPA mount point so React hydrates a clean tree client-side.
  const root = document.getElementById('root');
  if (root) {
    while (root.firstChild) root.removeChild(root.firstChild);
  }

  // Admin-specific SEO: never index, generic title/description.
  const title = document.querySelector('title');
  if (title) title.textContent = 'Admin - Shahab Abbasi';

  const setMeta = (selector, content) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      // Pull name/property from the selector predicate.
      const m = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (m) el.setAttribute(m[1], m[2]);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('meta[name="description"]', 'Admin area - login required.');
  setMeta('meta[name="robots"]', 'noindex, nofollow');
  setMeta('meta[property="og:title"]', 'Admin - Shahab Abbasi');
  setMeta('meta[property="og:description"]', 'Admin area - login required.');
  setMeta('meta[name="twitter:title"]', 'Admin - Shahab Abbasi');
  setMeta('meta[name="twitter:description"]', 'Admin area - login required.');

  // Drop canonical and any prerendered JSON-LD - they belong to the page that
  // was pre-rendered into this template, not to the admin route.
  document.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
  document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

  return '<!DOCTYPE html>\n' + dom.window.document.documentElement.outerHTML + '\n';
}

function main() {
  const src = 'dist/index.html';
  if (!existsSync(src)) {
    console.error(`[admin-shells] missing ${src}; run \`vite build\` first`);
    process.exit(1);
  }
  const shell = buildShell(readFileSync(src, 'utf8'));
  let written = 0;
  for (const route of ADMIN_ROUTES) {
    const out = `dist${route}/index.html`;
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, shell);
    written++;
  }
  console.log(`[admin-shells] wrote ${written} admin SPA shells under dist/wah/`);
}

main();
