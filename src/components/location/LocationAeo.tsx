import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import type { LocationContent } from "@/data/locationContent";

const LocationAeo = ({ content }: { content: LocationContent }) => (
  <section className="section-padding bg-card/20 border-y border-border">
    <div className="container mx-auto max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Bot className="h-6 w-6 text-accent" />
        <h2 className="text-3xl font-bold">{content.aeoTitle}</h2>
      </div>
      <div className="space-y-5">
        {content.aeoParagraphs.map((p, i) => (
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

export default LocationAeo;
