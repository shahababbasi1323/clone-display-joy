import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Home, ArrowRight, BookOpen, Wrench, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const NotFound = () => {
  const location = useLocation();

  useSeoMeta({
    title: "404 - Page Not Found | Shahab Abbasi",
    description: "The page you're looking for doesn't exist. Browse our SEO services, free tools, or blog for helpful resources.",
    canonical: "https://shahababbasi.com/404",
  });

  const suggestions = [
    { label: "Homepage", href: "/", icon: Home, desc: "Back to the main page" },
    { label: "SEO Services", href: "/services", icon: Search, desc: "Explore our service offerings" },
    { label: "Free SEO Tools", href: "/tools", icon: Wrench, desc: "70+ free SEO tools" },
    { label: "Blog", href: "/blog", icon: BookOpen, desc: "SEO tips & guides" },
    { label: "Locations", href: "/locations", icon: MapPin, desc: "SEO services by city" },
    { label: "Free SEO Audit", href: "/free-seo-audit", icon: ArrowRight, desc: "Get a free website audit" },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Page Not Found</h1>
            <p className="text-muted-foreground mb-2">
              The page <code className="text-sm bg-secondary px-2 py-1 rounded">{location.pathname}</code> doesn't exist.
            </p>
            <p className="text-muted-foreground mb-10">Here are some helpful links to get you back on track:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {suggestions.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={s.href}
                  className="glass rounded-xl p-5 flex flex-col items-center gap-2 hover:border-primary/30 transition-all group block"
                >
                  <s.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">{s.label}</span>
                  <span className="text-xs text-muted-foreground">{s.desc}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 glow-primary">
            <h2 className="text-xl font-bold mb-2">Need Help With SEO?</h2>
            <p className="text-muted-foreground mb-4 text-sm">Book a free consultation and get a comprehensive SEO audit of your website.</p>
            <Link to="/free-seo-audit">
              <Button className="glow-primary">Get Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
