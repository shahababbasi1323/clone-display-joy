import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { locationsData } from "@/data/locationsData";
import { toolsData, toolCategories } from "@/data/toolsData";
import { blogPosts } from "@/data/blogData";
import { ppcServicesData } from "@/data/ppcServicesData";
import { resources } from "@/data/resourcesData";
import { countryHubData } from "@/data/countryHubData";
import { MapPin, Wrench, BookOpen, Building2, Megaphone, FileText, Download, Globe, Info } from "lucide-react";

const SitemapSection = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <section className="mb-10">
    <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
      <Icon className="h-5 w-5 text-primary" />
      {title}
    </h2>
    {children}
  </section>
);

const SitemapLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-2 hover:underline"
    >
      {label}
    </Link>
  </li>
);

const Sitemap = () => {
  useSeoMeta({
    title: "Sitemap - All Pages | Shahab Abbasi SEO Expert",
    description:
      "Complete HTML sitemap of shahababbasi.com. Browse all SEO services, PPC services, industry pages, location pages, free tools, blog posts, and resources.",
    canonical: "https://shahababbasi.com/sitemap",
  });

  // Group locations by country
  const locationsByCountry: Record<string, typeof locationsData> = {};
  locationsData.forEach((loc) => {
    const key = `${loc.country} (${loc.lang.toUpperCase()})`;
    if (!locationsByCountry[key]) locationsByCountry[key] = [];
    locationsByCountry[key].push(loc);
  });

  // Group industries by category
  const industryByCategory: Record<string, typeof industriesData> = {};
  industriesData.forEach((ind) => {
    if (!industryByCategory[ind.category]) industryByCategory[ind.category] = [];
    industryByCategory[ind.category].push(ind);
  });

  return (
    <Layout>
      <div className="container mx-auto section-padding min-h-screen">
        {/* Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">HTML Sitemap</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse every page on shahababbasi.com - SEO services, PPC services, 75+ free tools, 200+ location pages, industry-specific SEO, blog articles, and downloadable resources.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Pages */}
          <SitemapSection title="Main Pages" icon={Info}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              <SitemapLink to="/" label="Home" />
              <SitemapLink to="/about" label="About" />
              <SitemapLink to="/services" label="SEO Services" />
              <SitemapLink to="/ppc" label="PPC Services" />
              <SitemapLink to="/industries" label="Industries" />
              <SitemapLink to="/locations" label="Locations" />
              <SitemapLink to="/tools" label="Free SEO Tools" />
              <SitemapLink to="/blog" label="Blog" />
              <SitemapLink to="/pricing" label="Pricing" />
              <SitemapLink to="/contact" label="Contact" />
              <SitemapLink to="/free-seo-audit" label="Free SEO Audit" />
              <SitemapLink to="/free-seo-resources" label="Free Resources" />
              <SitemapLink to="/testimonials" label="Testimonials" />
              <SitemapLink to="/faq" label="FAQ" />
              <SitemapLink to="/privacy-policy" label="Privacy Policy" />
              <SitemapLink to="/terms-of-service" label="Terms of Service" />
            </ul>
          </SitemapSection>

          {/* SEO Services */}
          <SitemapSection title={`SEO Services (${servicesData.length})`} icon={Wrench}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {servicesData.map((s) => (
                <SitemapLink key={s.slug} to={`/services/${s.slug}`} label={s.title} />
              ))}
            </ul>
          </SitemapSection>

          {/* PPC Services */}
          <SitemapSection title={`PPC Services (${ppcServicesData.length})`} icon={Megaphone}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {ppcServicesData.map((s) => (
                <SitemapLink key={s.slug} to={`/ppc/${s.slug}`} label={s.title} />
              ))}
            </ul>
          </SitemapSection>

          {/* Industries */}
          <SitemapSection title={`Industry SEO (${industriesData.length})`} icon={Building2}>
            {Object.entries(industryByCategory).map(([cat, items]) => (
              <div key={cat} className="mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">{cat}</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {items.map((ind) => (
                    <SitemapLink key={ind.slug} to={`/industries/${ind.slug}`} label={ind.shortTitle} />
                  ))}
                </ul>
              </div>
            ))}
            {/* Multilingual industry hubs */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-foreground mb-2">Multilingual Industry Hubs</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {["ar", "fr", "de", "es", "nl"].map((lang) => (
                  <SitemapLink key={lang} to={`/${lang}/industries`} label={`Industries (${lang.toUpperCase()})`} />
                ))}
              </ul>
            </div>
          </SitemapSection>

          {/* Country Hubs */}
          <SitemapSection title={`Country Hub Pages (${countryHubData.length})`} icon={Globe}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {countryHubData.map((hub) => (
                <SitemapLink key={hub.slug} to={`/locations/${hub.slug}`} label={`${hub.name} SEO`} />
              ))}
            </ul>
          </SitemapSection>

          {/* Locations */}
          <SitemapSection title={`Location Pages (${locationsData.length})`} icon={MapPin}>
            {Object.entries(locationsByCountry).map(([country, locs]) => (
              <div key={country} className="mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {country} - {locs.length} {locs.length === 1 ? "city" : "cities"}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {locs.map((loc) => (
                    <SitemapLink
                      key={`${loc.langPrefix}-${loc.slug}`}
                      to={loc.langPrefix ? `/${loc.langPrefix}/${loc.slug}` : `/${loc.slug}`}
                      label={loc.localCity || loc.city}
                    />
                  ))}
                </ul>
              </div>
            ))}
            {/* Multilingual location hubs */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-foreground mb-2">Multilingual Location Hubs</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {["ar", "fr", "de", "es", "nl"].map((lang) => (
                  <SitemapLink key={lang} to={`/${lang}/locations`} label={`Locations (${lang.toUpperCase()})`} />
                ))}
              </ul>
            </div>
          </SitemapSection>

          {/* Tools */}
          <SitemapSection title={`Free SEO Tools (${toolsData.length})`} icon={Wrench}>
            {toolCategories.map((cat) => (
              <div key={cat.name} className="mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">{cat.name}</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {cat.slugs.map((slug) => {
                    const tool = toolsData.find((t) => t.slug === slug);
                    return tool ? (
                      <SitemapLink key={slug} to={`/tools/${slug}`} label={tool.name} />
                    ) : null;
                  })}
                </ul>
              </div>
            ))}
          </SitemapSection>

          {/* Blog */}
          <SitemapSection title={`Blog Posts (${blogPosts.length})`} icon={BookOpen}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {blogPosts.map((post) => (
                <SitemapLink key={post.slug} to={`/blog/${post.slug}`} label={post.title} />
              ))}
            </ul>
          </SitemapSection>

          {/* Resources */}
          <SitemapSection title={`Free Resources (${resources.length})`} icon={Download}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {resources.map((r) => (
                <SitemapLink key={r.slug} to={`/free-seo-resources/${r.slug}`} label={r.title} />
              ))}
            </ul>
          </SitemapSection>

          {/* Total count */}
          <div className="mt-8 p-6 rounded-xl bg-secondary/50 text-center">
            <p className="text-muted-foreground text-sm">
              Total pages indexed:{" "}
              <span className="font-bold text-foreground">
                {16 + servicesData.length + ppcServicesData.length + industriesData.length + countryHubData.length + locationsData.length + toolsData.length + blogPosts.length + resources.length + 10}+
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "HTML Sitemap",
            description: "Complete HTML sitemap of shahababbasi.com with all pages organized by category.",
            url: "https://shahababbasi.com/sitemap",
            isPartOf: {
              "@type": "WebSite",
              name: "Shahab Abbasi",
              url: "https://shahababbasi.com",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default Sitemap;
