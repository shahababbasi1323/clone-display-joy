import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tools", href: "/tools" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
      { label: "Free Resources", href: "/free-seo-resources" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
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
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 glass rounded-lg py-2 min-w-[180px] shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
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

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+923041316771" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            +92 304 1316771
          </a>
          <Link to="/free-seo-audit">
            <Button variant="default" size="sm" className="glow-primary">
              Free SEO Audit
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
              link.children ? (
                <div key={link.label}>
                  <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="px-6 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary block"
                    >
                      {child.label}
                    </Link>
                  ))}
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
            <Link to="/free-seo-audit" className="mt-2 px-4">
              <Button variant="default" className="w-full glow-primary">
                Free SEO Audit
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
