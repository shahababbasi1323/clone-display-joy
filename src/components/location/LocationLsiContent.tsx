import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { LocationContent } from "@/data/locationContent";

const LocationLsiContent = ({ content }: { content: LocationContent }) => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">{content.lsiTitle}</h2>
      </div>
      <div className="space-y-5">
        {content.lsiParagraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-muted-foreground leading-relaxed text-sm md:text-base"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

export default LocationLsiContent;
