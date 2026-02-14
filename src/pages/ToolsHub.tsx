import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, Code, FileText, Eye, Type, Hash, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const tools = [
  { icon: Code, title: "Meta Tag Generator", slug: "meta-tag-generator", desc: "Generate SEO-optimized meta tags, Open Graph tags & Twitter cards." },
  { icon: Type, title: "Word Counter", slug: "word-counter", desc: "Count words, characters, sentences, paragraphs & estimate reading time." },
  { icon: Eye, title: "Google SERP Preview", slug: "google-serp-preview", desc: "Preview how your page will look in Google search results." },
];

const ToolsHub = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-4">
              <Wrench className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free <span className="text-gradient">SEO Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Powerful tools to help you optimize your website's search performance — completely free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/tools/${tool.slug}`}
                  className="glass rounded-xl p-6 hover:border-accent/30 transition-all group block h-full"
                >
                  <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <tool.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{tool.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.desc}</p>
                  <span className="text-sm text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Use Tool <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolsHub;
