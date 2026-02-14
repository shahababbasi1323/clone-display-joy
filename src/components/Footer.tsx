import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-gradient">Shahab</span> Abbasi
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              SEO Strategist & GEO Expert helping businesses rank #1 on Google and AI search engines worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/shahab-abbasi-seo-specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/923041316771"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {["Technical SEO", "On-Page SEO", "Local SEO", "E-commerce SEO", "GEO Optimization", "Link Building"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1 group">
                    {s}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Book a Call", href: "/free-seo-audit" },
                { label: "Pricing", href: "/pricing" },
                { label: "Free Tools", href: "/tools" },
                { label: "Resources", href: "/free-seo-resources" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                Islamabad, Pakistan
              </li>
              <li>
                <a href="tel:+923041316771" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  +92 304 1316771
                </a>
              </li>
              <li>
                <a href="mailto:contact@shahababbasi.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  contact@shahababbasi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shahab Abbasi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
