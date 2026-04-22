# Lovable IndexNow Pro Bundle

This is the upgraded version for Lovable, React, Vercel, Netlify, and other custom/static sites.

## What is upgraded
- Runs on every push to `main`
- Also runs every hour
- Supports multiple sitemaps
- Supports `sitemap.xml` and `sitemap_index.xml`
- Sends only URLs outside the cooldown window
- Uses batch sending
- Retries automatically after 429
- Stores sent history in `.indexnow-state.json`

## Files included
- `indexnow.config.json`
- `public/indexnow-key.txt`
- `scripts/indexnow.py`
- `.github/workflows/indexnow.yml`
- `README.md`

## What you must edit
### 1) Update `indexnow.config.json`
Change:
- `site_url`
- `sitemaps`

Example:
```json
{
  "site_url": "https://sidingcontractorsusa.com",
  "sitemaps": [
    "https://sidingcontractorsusa.com/sitemap.xml"
  ]
}
```

### 2) Update `public/indexnow-key.txt`
Paste your real IndexNow key inside the file.

## Repo structure
```text
your-project/
  public/
    indexnow-key.txt
  scripts/
    indexnow.py
  .github/
    workflows/
      indexnow.yml
  indexnow.config.json
```

## How to check it works
1. Open:
   `https://yourdomain.com/indexnow-key.txt`

2. Open your sitemap URL in browser.

3. Go to GitHub → Actions → `Lovable IndexNow Pro`

4. Check for:
- `Found URLs total: ...`
- `URLs selected for this run: ...`
- `Batch size ... => status 200`

## Recommended settings
In `indexnow.config.json`:
- `batch_size`: 10 to 20
- `cooldown_hours`: 24
- `max_urls_per_run`: 100

## Important
This helps IndexNow-participating search engines.
It does not directly force Google to index normal pages.
