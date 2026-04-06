import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Shield } from "lucide-react";
import type { IndustryData } from "@/data/industriesData";

/** Dynamically generates "Why SEO matters" content using LSI keywords from the industry data */
const IndustryWhySeo = ({ industry }: { industry: IndustryData }) => {
  const s = industry.shortTitle;
  const sl = s.toLowerCase();

  const benefits = [
    { icon: TrendingUp, title: "Higher Search Rankings", desc: `Rank on page 1 of Google, Bing, and AI-powered search engines for ${sl}-related keywords. Our data-driven ${sl} SEO strategy targets high-intent search queries that convert.` },
    { icon: Users, title: "Qualified Lead Generation", desc: `Attract potential customers actively searching for ${sl} services. Organic search delivers 5.3x more leads than paid advertising with a significantly lower cost per acquisition.` },
    { icon: Globe, title: "Brand Authority & Trust", desc: `Establish your ${sl} brand as a thought leader. E-E-A-T optimized content, authoritative backlinks, and positive reviews build the digital trust signals search engines reward.` },
    { icon: Shield, title: "Sustainable Growth", desc: `Unlike paid ads that stop delivering when you stop paying, SEO for ${sl} compounds over time. Every optimized page becomes a permanent asset driving traffic and revenue.` },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">
            Why <span className="text-gradient">{s}</span> Businesses Need SEO in 2026
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-10">
            The {sl} industry is increasingly competitive online. With 93% of online experiences beginning with a search engine, your {sl} business must rank prominently for relevant keywords to capture market share. Search engine optimization for {sl} isn't optional - it's the foundation of sustainable digital growth, improved online visibility, and measurable return on investment.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryWhySeo;
