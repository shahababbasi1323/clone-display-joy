import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const WordCounter = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter((p) => p.trim()).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const speakingTime = Math.max(1, Math.ceil(words / 130));

  const stats = [
    { label: "Words", value: words },
    { label: "Characters", value: chars },
    { label: "Characters (no spaces)", value: charsNoSpaces },
    { label: "Sentences", value: sentences },
    { label: "Paragraphs", value: paragraphs },
    { label: "Reading Time", value: `${readingTime} min` },
    { label: "Speaking Time", value: `${speakingTime} min` },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Word <span className="text-gradient">Counter</span>
          </h1>
          <p className="text-muted-foreground mb-8">Count words, characters, sentences and estimate reading time.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here..."
                rows={16}
                className="resize-none"
              />
            </div>
            <div className="space-y-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <span className="font-semibold text-lg">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WordCounter;
