import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { StatCard } from "@/components/tools/ToolUiPrimitives";

const WordCounter = () => {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const speakingTime = Math.max(1, Math.ceil(words / 130));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste or type your text here..." rows={16} className="resize-none" />
      </div>
      <div className="space-y-3">
        <StatCard label="Words" value={words} />
        <StatCard label="Characters" value={chars} />
        <StatCard label="Characters (no spaces)" value={charsNoSpaces} />
        <StatCard label="Sentences" value={sentences} />
        <StatCard label="Paragraphs" value={paragraphs} />
        <StatCard label="Reading Time" value={`${readingTime} min`} />
        <StatCard label="Speaking Time" value={`${speakingTime} min`} />
      </div>
    </div>
  );
};

export default WordCounter;
