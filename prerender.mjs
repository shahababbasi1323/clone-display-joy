// Prerender every URL in dist/sitemap.xml to static HTML.
// Approach: start vite preview, then use puppeteer-core to navigate to each URL,
// wait for #root content + meta tags to settle, then save the full HTML.
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { spawn } from 'child_process';
import { setTimeout as sleep } from 'timers/promises';
import puppeteer from 'puppeteer-core';

const PREVIEW_PORT = 4173;
const PREVIEW_HOST = `http://127.0.0.1:${PREVIEW_PORT}`;
const SITEMAP = 'dist/sitemap.xml';
const BRAND_HOST = 'shahababbasi.com';
// Chrome path: prefer env var, else look up puppeteer-installed chrome, else system chrome.
import { execSync } from 'child_process';
function findChrome() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  // Try puppeteer cache (installed via `npx puppeteer browsers install chrome`)
  const candidates = [
    process.env.CHROME_BIN,
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  try {
    const home = process.env.HOME || '/home/ubuntu';
    const cache = `${home}/.cache/puppeteer/chrome`;
    if (existsSync(cache)) {
      const dirs = execSync(`ls ${cache}`).toString().trim().split('\n').filter(Boolean);
      for (const d of dirs) {
        const p = `${cache}/${d}/chrome-linux64/chrome`;
        if (existsSync(p)) candidates.unshift(p);
      }
    }
  } catch (e) { /* ignore */ }
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  console.error('No Chrome binary found. Install with: npx puppeteer browsers install chrome');
  process.exit(1);
}
const CHROME = findChrome();

function urlsFromSitemap() {
  const xml = readFileSync(SITEMAP, 'utf8');
  const re = /<loc>([^<]+)<\/loc>/g;
  const out = [];
  let m;
  while ((m = re.exec(xml)) !== null) {
    out.push(m[1]);
  }
  return out;
}

function routeFromUrl(u) {
  const url = new URL(u);
  let p = url.pathname;
  if (p === '' || p === '/') return '/';
  if (p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

function diskPathForRoute(route) {
  // Clean URLs: /foo -> dist/foo/index.html, except /
  if (route === '/') return 'dist/index.html';
  return `dist${route}/index.html`;
}

async function waitForReady(page) {
  await page.waitForFunction(() => {
    const root = document.getElementById('root');
    if (!root) return false;
    if (root.children.length === 0) return false;
    // Wait until the page sets a real title (not the default placeholder)
    const t = document.title || '';
    if (t.length < 5) return false;
    return true;
  }, { timeout: 30000 });
  // Settle React Helmet meta updates
  await new Promise(r => setTimeout(r, 250));
}

async function snapshot(page, url) {
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  try { await waitForReady(page); } catch (e) {
    // Continue anyway and save what we have
  }
  const html = await page.content();
  return html;
}

async function startPreview() {
  const proc = spawn('npx', ['vite', 'preview', '--port', String(PREVIEW_PORT), '--host', '127.0.0.1'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    cwd: process.cwd(),
  });
  // Wait for "Local:"
  await new Promise((resolve) => {
    let buf = '';
    proc.stdout.on('data', (d) => {
      buf += d.toString();
      if (buf.includes('Local:') || buf.includes('localhost')) resolve();
    });
    setTimeout(resolve, 5000);
  });
  await sleep(700);
  return proc;
}

async function main() {
  const allUrls = urlsFromSitemap();
  console.log(`Found ${allUrls.length} URLs in sitemap`);

  const preview = await startPreview();
  console.log('vite preview running on', PREVIEW_HOST);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  // Make any absolute brand URLs in HTML resolve relative for assets if needed.
  page.on('pageerror', (e) => { /* ignore JS errors */ });

  let done = 0;
  let failed = 0;
  for (const absUrl of allUrls) {
    const route = routeFromUrl(absUrl);
    const localUrl = PREVIEW_HOST + (route === '/' ? '/' : route);
    try {
      const html = await snapshot(page, localUrl);
      const outFile = diskPathForRoute(route);
      mkdirSync(dirname(outFile), { recursive: true });
      writeFileSync(outFile, html);
      done++;
      if (done % 20 === 0) console.log(`  prerendered ${done}/${allUrls.length}`);
    } catch (e) {
      failed++;
      console.error(`  FAILED ${route}: ${e.message}`);
    }
  }
  console.log(`\nDone. ${done} prerendered, ${failed} failed.`);
  await browser.close();
  preview.kill('SIGINT');
}

main().catch((e) => { console.error(e); process.exit(1); });
