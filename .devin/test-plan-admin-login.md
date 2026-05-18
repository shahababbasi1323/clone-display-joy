# Test Plan: Admin /wah/login fix (PR #6)

## What changed (user-visible)
User reported "admin or login not working". `/wah/login` was returning Cloudflare's 404 page instead of the React admin login form. PR #6 writes a clean SPA shell to `dist/wah/login/index.html` (and 6 other admin paths) so Cloudflare serves a real file at every admin route, the bundle hydrates, and React Router renders the correct admin component.

## Environment under test
Cloudflare preview deploy of branch `devin/1779083427-fix-admin-spa-routing` (commit `bd025cc8`):
- Preview URL: https://53d46c72.clone-display-joy-dyv.pages.dev

## Adversarial design — why each test would fail if the change were broken

If the fix were broken (e.g. shell file missing, shell content invalid, SEO scripts overwrote shell, Cloudflare redirect rules misconfigured), the user would land on:
- The Cloudflare `404.html` page (titled "Page Not Found - Shahab Abbasi | SEO Expert") with a "404" hero, suggestion cards labelled "Services / Industries / Blog / Contact", and an HTTP 404 status, OR
- The React `NotFound` component (titled "404 - Page Not Found | Shahab Abbasi") with a "404" gradient text and suggestion cards labelled "Homepage / SEO Services / Free SEO Tools / Blog / Locations / Free SEO Audit"

Both broken states are visually unmistakable — the test below distinguishes the fix from either failure mode.

## Test 1 — `/wah/login` renders the AdminLogin form (PRIMARY)
1. Navigate to https://53d46c72.clone-display-joy-dyv.pages.dev/wah/login (or follow the Cloudflare 308 to `/wah/login/`).
2. Wait for hydration.

**Pass criteria (ALL must match):**
- Browser tab title is **`Admin - Shahab Abbasi`** (matches the shell title set in `scripts/build-admin-shells.mjs`).
- Page body contains an `<h1>` with exact text **`Admin Login`**.
- A subtitle **`Sign in to access the admin panel`** is visible directly under the h1.
- A `<form>` with two fields is visible:
  - `<input type="email" placeholder="admin@shahababbasi.com">`
  - `<input type="password" placeholder="••••••••">`
- A blue **`Sign In`** submit button is visible.
- A lock icon is rendered above the title (lucide `Lock` component).
- HTTP status is `200` (after Cloudflare's 308 → /wah/login/ canonicalisation).

**Fail criteria (ANY would trigger failure):**
- The "404" hero text appears (either Cloudflare 404.html or React NotFound).
- Page shows "Services / Industries / Blog / Contact" nav-style suggestion grid.
- Page shows "Homepage / SEO Services / Free SEO Tools / Blog / Locations / Free SEO Audit" suggestion cards.
- HTTP status is `404` for `/wah/login/`.

## Test 2 — Submit form with fake creds → "Login failed" toast (proves Supabase wired)
1. On the same page, type `notreal@example.com` in the Email field.
2. Type `wrongpass123` in the Password field.
3. Click **Sign In**.
4. Observe the toast notification.

**Pass criteria:**
- A toast appears with title **`Login failed`** (red/destructive variant).
- Toast description contains a Supabase auth error message (e.g. `Invalid login credentials`).
- Page stays on `/wah/login/` (no navigation to `/wah` dashboard).
- Network tab (visible via screenshot if devtools open, or inferred from toast) shows a POST to a `*.supabase.co/auth/v1/token?grant_type=password` endpoint.

**Fail criteria:**
- No toast appears at all (form not wired).
- Toast says "Logged in!" with fake creds (auth bypass — major bug).
- No network request fires (form submit handler not bound).

## Files referenced
- `scripts/build-admin-shells.mjs` — generates the shell. ADMIN_ROUTES at top.
- `src/pages/admin/AdminLogin.tsx` — the component under test (h1 "Admin Login" at line 47).
- `src/pages/NotFound.tsx` — the broken-state target to distinguish (h1 "Page Not Found").
- `dist/404.html` — Cloudflare's 404 page that was showing before the fix.

## Out of scope
- Full happy-path login with real admin credentials (would require the user to share or create a Supabase admin account). Test 2 above is sufficient to prove the form is wired end-to-end without needing real creds.
- Testing every admin sub-route (`/wah/blog`, `/wah/leads`, etc.) — they all use the same shell template and rendering path; if `/wah/login` works, the others will too. A quick spot-check on one will be added during execution.
- Regression testing of prerendered SEO routes — covered by separate `npm run seo:audit`, not in scope here.
