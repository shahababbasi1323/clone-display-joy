import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    mega: true,
    megaGroups: [
      {
        title: "SEO Services",
        items: [
          { label: "Technical SEO", href: "/services/technical-seo" },
          { label: "On-Page SEO", href: "/services/on-page-seo" },
          { label: "Link Building", href: "/services/link-building" },
          { label: "Local SEO", href: "/services/local-seo" },
          { label: "E-commerce SEO", href: "/services/ecommerce-seo" },
          { label: "GEO Optimization", href: "/services/geo-optimization" },
          { label: "Content Strategy", href: "/services/content-strategy" },
          { label: "SEO Consulting", href: "/services/seo-consulting" },
          { label: "All SEO Services →", href: "/services" },
        ],
      },
      {
        title: "PPC Services",
        items: [
          { label: "Google Ads Management", href: "/ppc/google-ads-management" },
          { label: "Social Media Ads", href: "/ppc/social-media-ads" },
          { label: "Remarketing & Retargeting", href: "/ppc/remarketing-retargeting" },
          { label: "Local Search Ads", href: "/ppc/local-search-ads" },
          { label: "PPC Audit & Strategy", href: "/ppc/ppc-audit-strategy" },
          { label: "All PPC Services →", href: "/ppc" },
        ],
      },
    ],
  } as any,
  {
    label: "Industries",
    href: "/industries",
    mega: true,
    megaGroups: [
      {
        title: "Healthcare & Medical",
        items: [
          { label: "Healthcare SEO", href: "/industries/healthcare-seo" },
          { label: "Dental SEO", href: "/industries/dental-seo" },
          { label: "Hospital SEO", href: "/industries/hospital-seo" },
          { label: "Chiropractic SEO", href: "/industries/chiropractic-seo" },
          { label: "Dermatology SEO", href: "/industries/dermatology-seo" },
          { label: "Mental Health SEO", href: "/industries/mental-health-seo" },
          { label: "Med Spa SEO", href: "/industries/med-spa-seo" },
          { label: "Physical Therapy SEO", href: "/industries/physical-therapy-seo" },
          { label: "Veterinary SEO", href: "/industries/veterinary-seo" },
          { label: "+ 7 more →", href: "/industries" },
        ],
      },
      {
        title: "Legal & Professional",
        items: [
          { label: "Law Firm SEO", href: "/industries/law-firm-seo" },
          { label: "Accounting SEO", href: "/industries/accounting-seo" },
          { label: "Insurance SEO", href: "/industries/insurance-seo" },
          { label: "Financial Advisor SEO", href: "/industries/financial-advisor-seo" },
          { label: "Consulting SEO", href: "/industries/consulting-seo" },
          { label: "Immigration Lawyer SEO", href: "/industries/immigration-seo" },
          { label: "+ 3 more →", href: "/industries" },
        ],
      },
      {
        title: "Home Services & Trades",
        items: [
          { label: "Plumbing SEO", href: "/industries/plumbing-seo" },
          { label: "HVAC SEO", href: "/industries/hvac-seo" },
          { label: "Electrician SEO", href: "/industries/electrician-seo" },
          { label: "Roofing SEO", href: "/industries/roofing-seo" },
          { label: "Landscaping SEO", href: "/industries/landscaping-seo" },
          { label: "Cleaning SEO", href: "/industries/cleaning-seo" },
          { label: "+ 9 more →", href: "/industries" },
        ],
      },
      {
        title: "More Industries",
        items: [
          { label: "Car Dealership SEO", href: "/industries/automotive-seo" },
          { label: "Fintech SEO", href: "/industries/fintech-seo" },
          { label: "Online Course SEO", href: "/industries/online-course-seo" },
          { label: "Dog Grooming SEO", href: "/industries/dog-grooming-seo" },
          { label: "Pet Store SEO", href: "/industries/pet-store-seo" },
          { label: "All Industries →", href: "/industries" },
        ],
      },
      {
        title: "By Language",
        items: [
          { label: "🇬🇧 English", href: "/industries" },
          { label: "🇸🇦 العربية", href: "/ar/industries" },
          { label: "🇫🇷 Français", href: "/fr/industries" },
          { label: "🇩🇪 Deutsch", href: "/de/industries" },
          { label: "🇪🇸 Español", href: "/es/industries" },
          { label: "🇳🇱 Nederlands", href: "/nl/industries" },
        ],
      },
    ],
  } as any,
  {
    label: "Locations",
    href: "/locations",
    mega: true,
    megaGroups: [
      {
        title: "North America",
        items: [
          { label: "🇺🇸 USA", href: "/locations/usa" },
          { label: "🇨🇦 Canada", href: "/locations/canada" },
          { label: "🇲🇽 Mexico", href: "/locations/mexico" },
        ],
      },
      {
        title: "Europe",
        items: [
          { label: "🇬🇧 United Kingdom", href: "/locations/uk" },
          { label: "🇩🇪 Germany", href: "/locations/germany" },
          { label: "🇫🇷 France", href: "/locations/france" },
          { label: "🇮🇹 Italy", href: "/locations/italy" },
          { label: "🇪🇸 Spain", href: "/locations/spain" },
          { label: "🇳🇱 Netherlands", href: "/locations/netherlands" },
          { label: "🇵🇹 Portugal", href: "/locations/portugal" },
          { label: "🇮🇪 Ireland", href: "/locations/ireland" },
          { label: "🇦🇹 Austria", href: "/locations/austria" },
          { label: "🇨🇭 Switzerland", href: "/locations/switzerland" },
          { label: "🇧🇪 Belgium", href: "/locations/belgium" },
          { label: "🇵🇱 Poland", href: "/locations/poland" },
          { label: "🇨🇿 Czech Republic", href: "/locations/czech-republic" },
          { label: "🇭🇺 Hungary", href: "/locations/hungary" },
          { label: "🇷🇴 Romania", href: "/locations/romania" },
          { label: "🇬🇷 Greece", href: "/locations/greece" },
          { label: "🇹🇷 Turkey", href: "/locations/turkey" },
        ],
      },
      {
        title: "Scandinavia",
        items: [
          { label: "🇩🇰 Denmark", href: "/locations/denmark" },
          { label: "🇸🇪 Sweden", href: "/locations/sweden" },
          { label: "🇳🇴 Norway", href: "/locations/norway" },
          { label: "🇫🇮 Finland", href: "/locations/finland" },
        ],
      },
      {
        title: "Middle East",
        items: [
          { label: "🇦🇪 UAE", href: "/locations/uae" },
          { label: "🇸🇦 Saudi Arabia", href: "/locations/saudi-arabia" },
          { label: "🇶🇦 Qatar", href: "/locations/qatar" },
          { label: "🇰🇼 Kuwait", href: "/locations/kuwait" },
          { label: "🇧🇭 Bahrain", href: "/locations/bahrain" },
          { label: "🇴🇲 Oman", href: "/locations/oman" },
          { label: "🇯🇴 Jordan", href: "/locations/jordan" },
          { label: "🇪🇬 Egypt", href: "/locations/egypt" },
          { label: "🇮🇱 Israel", href: "/locations/israel" },
        ],
      },
      {
        title: "Asia Pacific",
        items: [
          { label: "🇦🇺 Australia", href: "/locations/australia" },
          { label: "🇳🇿 New Zealand", href: "/locations/new-zealand" },
          { label: "🇮🇳 India", href: "/locations/india" },
          { label: "🇵🇰 Pakistan", href: "/locations/pakistan" },
          { label: "🇧🇩 Bangladesh", href: "/locations/bangladesh" },
          { label: "🇱🇰 Sri Lanka", href: "/locations/sri-lanka" },
          { label: "🇳🇵 Nepal", href: "/locations/nepal" },
          { label: "🇯🇵 Japan", href: "/locations/japan" },
          { label: "🇰🇷 South Korea", href: "/locations/south-korea" },
          { label: "🇸🇬 Singapore", href: "/locations/singapore" },
          { label: "🇲🇾 Malaysia", href: "/locations/malaysia" },
          { label: "🇹🇭 Thailand", href: "/locations/thailand" },
          { label: "🇵🇭 Philippines", href: "/locations/philippines" },
        ],
      },
      {
        title: "South America",
        items: [
          { label: "🇧🇷 Brazil", href: "/locations/brazil" },
          { label: "🇨🇴 Colombia", href: "/locations/colombia" },
          { label: "🇦🇷 Argentina", href: "/locations/argentina" },
          { label: "🇨🇱 Chile", href: "/locations/chile" },
          { label: "🇵🇪 Peru", href: "/locations/peru" },
        ],
      },
      {
        title: "Africa",
        items: [
          { label: "🇿🇦 South Africa", href: "/locations/south-africa" },
          { label: "🇳🇬 Nigeria", href: "/locations/nigeria" },
          { label: "🇰🇪 Kenya", href: "/locations/kenya" },
        ],
      },
      {
        title: "By Language",
        items: [
          { label: "🇸🇦 العربية", href: "/ar/locations" },
          { label: "🇫🇷 Français", href: "/fr/locations" },
          { label: "🇩🇪 Deutsch", href: "/de/locations" },
          { label: "🇪🇸 Español", href: "/es/locations" },
          { label: "🇳🇱 Nederlands", href: "/nl/locations" },
          { label: "🇮🇹 Italiano", href: "/it/locations" },
          { label: "🇵🇹 Português", href: "/pt/locations" },
          { label: "🇹🇷 Türkçe", href: "/tr/locations" },
          { label: "🇯🇵 日本語", href: "/ja/locations" },
          { label: "🇰🇷 한국어", href: "/ko/locations" },
        ],
      },
    ],
  } as any,
  { label: "Pricing", href: "/pricing" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
      { label: "Free SEO Audit", href: "/free-seo-audit" },
      { label: "Free Resources", href: "/free-seo-resources" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileSubmenu(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
          <span className="text-gradient">Shahab</span>
          <span className="text-foreground"> Abbasi</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.mega ? (
              // Mega menu for Locations
              <div key={link.label} className="relative static">
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === link.label && (
                  <div className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 mt-1 rounded-xl p-6 shadow-2xl z-50 bg-card border border-border w-[95vw] max-w-5xl max-h-[75vh] overflow-y-auto">
                    {/* Top link */}
                    <div className="mb-4 pb-3 border-b border-border">
                      <Link to={link.href} className="text-sm font-semibold text-primary hover:underline">
                        {link.label === "Locations" ? "🌍 View All Locations →" : "🚀 View All Services →"}
                      </Link>
                    </div>
                    <div className={`grid gap-6 ${(link as any).megaGroups.length <= 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
                      {(link as any).megaGroups.map((group: any) => (
                        <div key={group.title}>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-2">
                            {group.title}
                          </h4>
                          <ul className="space-y-1">
                            {group.items.map((item: any) => (
                              <li key={item.href}>
                                <Link
                                  to={item.href}
                                  className="block text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded px-2 py-1 transition-colors"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 rounded-lg py-2 min-w-[200px] shadow-xl z-50 bg-card border border-border backdrop-blur-none max-h-[70vh] overflow-y-auto">
                    {link.children.map((child, idx) =>
                      'group' in child && child.group ? (
                        <div key={idx} className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 border-t border-border first:border-t-0 first:pt-2">
                          {child.label}
                        </div>
                      ) : (
                        <Link
                          key={child.href}
                          to={child.href!}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Link to="/free-seo-audit">
            <Button variant="default" size="sm" className="glow-primary">
              Book a Call
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === link.label ? null : link.label)}
                    className="w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileSubmenu === link.label && (
                    <div className="ml-2 border-l border-border max-h-[50vh] overflow-y-auto">
                      <Link to="/locations" className="px-6 py-3 rounded-lg text-sm font-semibold text-primary hover:bg-secondary block">
                        🌍 All Locations
                      </Link>
                      {(link as any).megaGroups.map((group: any) => (
                        <div key={group.title}>
                          <div className="px-6 pt-3 pb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                            {group.title}
                          </div>
                          {group.items.map((item: any) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="px-6 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary block"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === link.label ? null : link.label)}
                    className="w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileSubmenu === link.label && (
                    <div className="ml-2 border-l border-border">
                      {link.children.filter(c => !('group' in c && c.group)).map((child) => (
                        <Link
                          key={child.href}
                          to={child.href!}
                          className="px-6 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary block"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-accent bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-2 mt-2 px-4">
              <ThemeToggle />
              <Link to="/free-seo-audit" className="flex-1">
                <Button variant="default" className="w-full glow-primary">
                  Book a Call
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
