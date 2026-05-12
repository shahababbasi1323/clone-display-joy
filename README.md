# Shahab Abbasi - Static Pre-Rendered Site

This is a Vite + React + shadcn-ui app that ships as **fully pre-rendered static HTML**.
Every route in the sitemap (currently 634 URLs) has a real `index.html` file in `dist/`
with the full page content baked in, so search engines (Google, Bing, DuckDuckGo) and
AI engines (ChatGPT, Perplexity, Claude, Gemini) can read it instantly without running
any JavaScript.

The React bundle is still loaded after the static HTML so client navigation between
pages stays fast (no full reload).

## Build

```bash
npm install
npm run build
```

`npm run build` runs two steps:

1. `vite build` -> produces the SPA shell in `dist/` (one `index.html`, the JS/CSS bundle,
   and a fresh `sitemap.xml` listing every public route).
2. `node prerender.mjs` -> starts `vite preview` on `127.0.0.1:4173`, launches a
   headless Chromium, navigates to every URL in `dist/sitemap.xml`, waits for React
   to finish rendering, and writes the full rendered HTML to `dist/<route>/index.html`.

The pre-render step needs a Chromium binary. If your build server doesn't already
have one, install Chrome for Testing with:

```bash
npx puppeteer browsers install chrome
```

Then re-run `npm run build`. The script auto-discovers Chrome at
`$PUPPETEER_EXECUTABLE_PATH`, `$CHROME_BIN`,
`~/.cache/puppeteer/chrome/*/chrome-linux64/chrome`,
`/usr/bin/google-chrome*`, or `/usr/bin/chromium*` (whichever it finds first).

## Deployment

`dist/` is committed to the repo so Cloudflare Pages / Netlify / GitHub Pages can
serve it without running a build. Recommended Cloudflare Pages settings:

| Setting | Value |
|---|---|
| Build command | *(empty)* |
| Build output directory | `dist` |
| Production branch | `main` |

If you'd rather have the host rebuild on every push, set the build command to
`npm run build`. The host will need `npx puppeteer browsers install chrome` to run
during the build, which adds a few minutes.

## SPA-only routes

A handful of routes (e.g. `/wah/login`, `/wah/dashboard`) are admin-only and are
intentionally NOT pre-rendered. They still work via the SPA fallback in `_redirects`:
unknown URLs are rewritten to `/index.html`, React Router takes over, and the right
component renders.

## IndexNow

The IndexNow Pro bundle is still wired in. After deployment:

- `indexnow.config.json` -> set `site_url` and `sitemaps` to the production domain
- `public/indexnow-key.txt` -> set the real IndexNow key
- `.github/workflows/indexnow.yml` -> runs every push + every hour, pings Bing /
  Yandex / IndexNow participants whenever the sitemap changes

## Files added for pre-rendering

- `prerender.mjs` - the pre-render script. Idempotent; safe to re-run.
- Updated `package.json` build script and added `puppeteer-core` devDependency.
- `dist/llms.txt` - AI-engine discovery hints.
- Pre-rendered HTML for every URL in `dist/sitemap.xml` (634 pages currently).
