import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { LocationContent } from "@/data/locationContent";
import { cityLandmarks } from "@/data/locationContent";

interface Props {
  content: LocationContent;
  citySlug: string;
}

const LocationLandmarks = ({ content, citySlug }: Props) => {
  const landmarks = cityLandmarks[citySlug] || content.landmarks;
  if (!landmarks || landmarks.length === 0) return null;

  return (
    <section className="section-padding bg-card/20 border-y border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <MapPin className="h-6 w-6 text-accent" />
          <h2 className="text-3xl font-bold">{content.landmarksTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {landmarks.map((lm, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <h3 className="font-semibold text-sm">{lm.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{lm.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationLandmarks;
