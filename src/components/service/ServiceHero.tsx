import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { ServiceData } from "@/data/servicesData";
import { getServiceImage } from "./serviceImages";

const ServiceHero = ({ service }: { service: ServiceData }) => {
  const Icon = service.icon;
  const heroImg = getServiceImage(service.slug);

  return (
    <section className="section-padding pb-12">
      <div className="container mx-auto max-w-5xl">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> All Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="p-3 rounded-lg bg-primary/10 w-fit mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.heroTitle} <span className="text-gradient">{service.heroHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
              {service.heroDescription}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <span className="text-sm text-muted-foreground">Rated 4.9/5 by clients</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-seo-audit">
                <Button size="lg" className="glow-primary">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={heroImg}
                  alt={`${service.title} - Professional SEO services by Shahab Abbasi`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </AspectRatio>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
