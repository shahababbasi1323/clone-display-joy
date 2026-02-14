import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IndustryData } from "@/data/industriesData";

const IndustryHero = ({ industry }: { industry: IndustryData }) => {
  const Icon = industry.icon;
  return (
    <section className="section-padding pb-12">
      <div className="container mx-auto max-w-5xl">
        <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> All Industries
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{industry.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {industry.heroTitle} <span className="text-gradient">{industry.heroHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">
            {industry.heroDescription}
          </p>
          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-accent" /> 4.9/5 Client Rating</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-accent" /> 150+ Industries Served</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-accent" /> Free SEO Audit</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary">
                Get Free {industry.shortTitle} SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Talk to an Expert</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero;
