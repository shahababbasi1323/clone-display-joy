import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Target, TrendingUp, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

const timeline = [
  { year: "2019", title: "Started SEO Journey", desc: "Began learning search engine optimization and digital marketing fundamentals." },
  { year: "2020", title: "First Agency Clients", desc: "Started working with local businesses in Islamabad, delivering measurable SEO results." },
  { year: "2021", title: "International Expansion", desc: "Expanded services to UAE, UK and North American markets." },
  { year: "2022", title: "GEO Pioneer", desc: "Started specializing in Generative Engine Optimization for AI search platforms." },
  { year: "2023", title: "50+ Clients Milestone", desc: "Reached 50+ satisfied clients across 5+ countries with proven track records." },
  { year: "2024", title: "Industry Recognition", desc: "Recognized as a leading SEO strategist in the Pakistan & Middle East region." },
];

const skills = [
  "Technical SEO", "On-Page SEO", "Off-Page SEO", "Local SEO",
  "E-commerce SEO", "GEO Optimization", "Link Building", "Keyword Research",
  "Content Strategy", "Schema Markup", "Core Web Vitals", "Google Analytics",
  "Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog",
];

const About = () => {
  useSeoMeta({
    title: "About Shahab Abbasi - SEO Strategist & GEO Expert",
    description: "Learn about Shahab Abbasi, an SEO strategist with 5+ years of experience helping businesses worldwide rank higher and grow organic traffic.",
    canonical: "https://shahababbasi.com/about",
  });

  return (
    <Layout>
       <section className="section-padding">
        <div className="container mx-auto">
          <PageBreadcrumbs items={[{ label: "About" }]} className="mb-8" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Shahab Abbasi</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SEO Strategist & GEO Expert based in Islamabad, Pakistan. With 5+ years of experience, I help businesses worldwide rank higher, drive organic traffic, and grow revenue through data-driven search optimization.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Target, title: "Mission", desc: "To make world-class SEO accessible to businesses of all sizes, delivering transparent, results-driven strategies." },
              { icon: Globe, title: "Vision", desc: "To be the most trusted SEO partner for businesses expanding their digital presence globally." },
              { icon: TrendingUp, title: "Approach", desc: "Data-first methodology combining technical excellence with creative content strategy and ethical link building." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="text-gradient">Journey</span>
            </h2>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-xs font-semibold text-accent">{item.year}</span>
                    <h3 className="font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Shahab Abbasi",
              url: "https://shahababbasi.com/about",
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shahab Abbasi",
              jobTitle: "SEO Strategist & GEO Expert",
              url: "https://shahababbasi.com",
              telephone: "+923041316771",
              address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
              knowsAbout: skills,
              sameAs: [
                "https://www.linkedin.com/in/shahab-abbasi-seo-specialist/",
                "https://www.facebook.com/shahababbasi302/",
                "https://www.instagram.com/shahababbasi302",
                "https://x.com/ShahabAbbasi302",
                "https://www.reddit.com/user/shahab-abbasi/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://shahababbasi.com/about" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default About;
