import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";
import type { LocationContent } from "@/data/locationContent";

const LocationWhyChoose = ({ content }: { content: LocationContent }) => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">{content.whyChooseTitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.whyChoosePoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationWhyChoose;
