import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync } from "fs";

// Sitemap generator plugin
function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    closeBundle: {
      sequential: true,
      async handler() {
        try {
          // Dynamic imports to access project data
          const { servicesData } = await import("./src/data/servicesData");
          const { toolsData } = await import("./src/data/toolsData");
          const { ppcServicesData } = await import("./src/data/ppcServicesData");
          const { blogPosts } = await import("./src/data/blogData");
          const { resources } = await import("./src/data/resourcesData");
          const { industriesData } = await import("./src/data/industriesData");
          const { locationsData } = await import("./src/data/locationsData");

          const BASE = "https://shahababbasi.com";
          const today = new Date().toISOString().split("T")[0];
          const urls: string[] = [];

          const add = (p: string, freq: string, pri: string) => {
            urls.push(`  <url>\n    <loc>${BASE}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`);
          };

          // Static
          add("/", "daily", "1.0");
          add("/about", "monthly", "0.7");
          add("/services", "weekly", "0.9");
          add("/industries", "weekly", "0.9");
          add("/locations", "weekly", "0.9");
          add("/ppc", "weekly", "0.9");
          add("/pricing", "weekly", "0.8");
          add("/tools", "weekly", "0.9");
          add("/blog", "daily", "0.9");
          add("/contact", "monthly", "0.7");
          add("/free-seo-audit", "monthly", "0.8");
          add("/free-seo-resources", "weekly", "0.8");
          add("/testimonials", "monthly", "0.7");
          add("/faq", "monthly", "0.6");
          add("/privacy-policy", "yearly", "0.3");
          add("/terms-of-service", "yearly", "0.3");

          // Dynamic
          for (const s of servicesData) add(`/services/${s.slug}`, "weekly", "0.8");
          for (const p of ppcServicesData) add(`/ppc/${p.slug}`, "weekly", "0.8");
          for (const t of toolsData) add(`/tools/${t.slug}`, "monthly", "0.6");
          for (const b of blogPosts) add(`/blog/${b.slug}`, "monthly", "0.7");
          for (const r of resources) add(`/free-seo-resources/${r.slug}`, "monthly", "0.6");
          for (const ind of industriesData) add(`/industries/${ind.slug}`, "weekly", "0.7");
          for (const loc of locationsData) {
            const pfx = loc.langPrefix ? `/${loc.langPrefix}` : "";
            add(`${pfx}/${loc.slug}`, "weekly", "0.7");
          }

          // Lang hubs
          const langPrefixes = [...new Set(locationsData.filter(l => l.langPrefix).map(l => l.langPrefix))];
          for (const lp of langPrefixes) {
            add(`/${lp}/locations`, "weekly", "0.6");
            add(`/${lp}/industries`, "weekly", "0.6");
          }

          const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
          writeFileSync("dist/sitemap.xml", xml, "utf-8");
          console.log(`✅ Sitemap generated: ${urls.length} URLs`);
        } catch (e) {
          console.warn("⚠️ Sitemap generation skipped:", e);
        }
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), sitemapPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
