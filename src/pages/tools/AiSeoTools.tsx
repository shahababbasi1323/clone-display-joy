import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton, ChecklistItem, ScoreDisplay } from "@/components/tools/ToolUiPrimitives";

export const AiSearchPromptGenerator = () => {
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const prompts = business ? [
    { engine: "ChatGPT", prompt: `What are the best ${business} companies${location ? ` in ${location}` : ""}?` },
    { engine: "ChatGPT", prompt: `Can you recommend a ${business} provider${location ? ` in ${location}` : ""}?` },
    { engine: "Perplexity", prompt: `Top rated ${business} services${location ? ` in ${location}` : ""} with reviews` },
    { engine: "Perplexity", prompt: `Compare ${business} providers${location ? ` in ${location}` : ""} - which is best?` },
    { engine: "Gemini", prompt: `I need help finding a good ${business}${location ? ` in ${location}` : ""}. What should I look for?` },
    { engine: "Gemini", prompt: `What makes a great ${business} company? Any recommendations${location ? ` in ${location}` : ""}?` },
    { engine: "Claude", prompt: `Help me evaluate ${business} services${location ? ` available in ${location}` : ""}. What criteria matter most?` },
  ] : [];

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="text-sm font-medium mb-1 block">Business/Service Type</label><Input value={business} onChange={e => setBusiness(e.target.value)} placeholder="e.g. SEO agency, plumber, dentist" /></div>
        <div><label className="text-sm font-medium mb-1 block">Location (optional)</label><Input value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Dubai, London" /></div>
      </div>
      {prompts.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium">Test these prompts in each AI engine:</p>
          {prompts.map((p, i) => (
            <div key={i} className="glass rounded-xl p-4 flex justify-between items-start gap-4">
              <div><span className="text-xs font-medium text-accent">{p.engine}</span><p className="text-sm mt-1">{p.prompt}</p></div>
              <CopyButton text={p.prompt} />
            </div>
          ))}
          <div className="glass rounded-xl p-4">
            <p className="text-sm font-medium mb-2">How to analyze results:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Is your brand mentioned in the response?</li>
              <li>• What position are you mentioned (1st, 2nd, etc.)?</li>
              <li>• What information does the AI provide about you?</li>
              <li>• Are competitors mentioned before you?</li>
              <li>• Does the AI link to your website?</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export const AiContentOptimizer = () => {
  const [content, setContent] = useState("");
  const checks = content ? [
    { name: "Clear headings (H2/H3)", pass: /<h[23]/i.test(content) || /^#{2,3}\s/m.test(content), tip: "Use clear, descriptive headings that match search queries" },
    { name: "Direct answers", pass: content.split(/[.!?]/).some(s => s.trim().length > 20 && s.trim().length < 100), tip: "Include concise, direct answers to common questions" },
    { name: "Lists/steps present", pass: /<[ou]l/i.test(content) || /^\s*[-*•]\s/m.test(content) || /^\s*\d+\.\s/m.test(content), tip: "Use numbered lists and bullet points for easy AI extraction" },
    { name: "Entity mentions", pass: /[A-Z][a-z]+\s[A-Z]/.test(content), tip: "Mention specific brands, people, places, and organizations" },
    { name: "Statistics/data", pass: /\d+%|\$[\d,]+|\d+\s*(million|billion|thousand)/i.test(content), tip: "Include specific numbers, statistics, and data points" },
    { name: "Sufficient length", pass: content.split(/\s+/).length > 300, tip: "Aim for 500+ words of comprehensive, authoritative content" },
    { name: "FAQ format", pass: /\?/.test(content) && content.split("?").length > 3, tip: "Include question-answer pairs that AI engines can extract" },
  ] : [];
  const score = checks.length > 0 ? Math.round((checks.filter(c => c.pass).length / checks.length) * 100) : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div><label className="text-sm font-medium mb-1.5 block">Paste your content (HTML or plain text)</label>
        <Textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Paste your content here..." rows={16} className="resize-none" /></div>
      <div className="space-y-4">
        {content && <ScoreDisplay score={score} label="AI Optimization Score" />}
        {checks.map((c, i) => (
          <div key={i} className={`glass rounded-lg p-3 border-l-4 ${c.pass ? "border-l-accent" : "border-l-destructive"}`}>
            <div className="flex justify-between"><span className="text-sm font-medium">{c.name}</span><span className={c.pass ? "text-accent text-sm" : "text-destructive text-sm"}>{c.pass ? "✓" : "✗"}</span></div>
            {!c.pass && <p className="text-xs text-muted-foreground mt-1">{c.tip}</p>}
          </div>
        ))}
        {!content && <p className="text-sm text-muted-foreground">Paste content to analyze AI search optimization</p>}
      </div>
    </div>
  );
};

const GUIDE_STEPS = [
  { title: "Set up monitoring", desc: "Create a list of prompts about your industry, services, and brand name to test regularly in ChatGPT, Perplexity, Gemini, and Claude." },
  { title: "Document baseline", desc: "Run each prompt and record: Are you mentioned? What position? What context? Save screenshots for comparison." },
  { title: "Optimize your content", desc: "Ensure your website has clear, factual, structured content. Use schema markup. Build authoritative backlinks from trusted sources." },
  { title: "Build brand signals", desc: "Get mentioned on Wikipedia, industry publications, review sites, and news outlets. AI models learn from these authoritative sources." },
  { title: "Create Q&A content", desc: "Write FAQ pages and blog posts that directly answer questions AI users might ask. Use the exact question format." },
  { title: "Monitor monthly", desc: "Re-run your test prompts monthly to track changes. AI models update their knowledge periodically." },
  { title: "Engage communities", desc: "Be active on Reddit, Quora, forums, and social media. AI models often cite these community sources." },
  { title: "Track competitors", desc: "Monitor which competitors appear in AI responses and analyze what makes them visible." },
];

export const BrandMentionGuide = () => {
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    const next = new Set(completed);
    next.has(i) ? next.delete(i) : next.add(i);
    setCompleted(next);
  };
  return (
    <div className="space-y-6">
      <div className="glass rounded-xl p-4 flex justify-between items-center">
        <span className="text-sm font-medium">Progress</span>
        <span className="font-bold text-accent">{completed.size}/{GUIDE_STEPS.length} steps</span>
      </div>
      <div className="space-y-3">
        {GUIDE_STEPS.map((step, i) => (
          <div key={i} className="glass rounded-xl p-4 flex gap-4">
            <input type="checkbox" checked={completed.has(i)} onChange={() => toggle(i)} className="mt-1 rounded" />
            <div>
              <p className={`text-sm font-medium ${completed.has(i) ? "line-through text-muted-foreground" : ""}`}>{i + 1}. {step.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
