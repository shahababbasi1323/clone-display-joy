import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatCard, CopyButton, ScoreDisplay } from "@/components/tools/ToolUiPrimitives";

export const CharacterCounter = () => {
  const [text, setText] = useState("");
  const limits = [
    { name: "Twitter/X Post", max: 280 },
    { name: "Instagram Caption", max: 2200 },
    { name: "LinkedIn Post", max: 3000 },
    { name: "Facebook Post", max: 63206 },
    { name: "YouTube Title", max: 100 },
    { name: "Pinterest Pin", max: 500 },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste your text..." rows={12} className="resize-none" />
      </div>
      <div className="space-y-3">
        <StatCard label="Characters" value={text.length} />
        <StatCard label="Without Spaces" value={text.replace(/\s/g, "").length} />
        <StatCard label="Words" value={text.trim() ? text.trim().split(/\s+/).length : 0} />
        <StatCard label="Uppercase" value={(text.match(/[A-Z]/g) || []).length} />
        <StatCard label="Lowercase" value={(text.match(/[a-z]/g) || []).length} />
        <StatCard label="Digits" value={(text.match(/[0-9]/g) || []).length} />
        <p className="text-sm font-medium mt-4">Platform Limits</p>
        {limits.map(l => (
          <div key={l.name} className="glass rounded-xl p-3 flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{l.name}</span>
            <span className={`text-sm font-medium ${text.length > l.max ? "text-destructive" : "text-accent"}`}>{text.length}/{l.max}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const KeywordDensityChecker = () => {
  const [text, setText] = useState("");
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
  const total = words.length;
  const freq: Record<string, number> = {};
  words.forEach(w => { if (w.length > 2) freq[w] = (freq[w] || 0) + 1; });
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 20);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your content here to analyze keyword density..." rows={16} className="resize-none" />
      <div>
        <p className="text-sm font-medium mb-3">Top Keywords ({total} total words)</p>
        <div className="space-y-2 max-h-[500px] overflow-auto">
          {sorted.length === 0 && <p className="text-sm text-muted-foreground">Enter text to see keyword analysis</p>}
          {sorted.map(([word, count]) => (
            <div key={word} className="glass rounded-lg p-3 flex justify-between items-center">
              <span className="font-medium text-sm">{word}</span>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{count}x</span>
                <span className="font-medium text-foreground">{((count / total) * 100).toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const countSyllables = (word: string) => {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
};

export const ReadabilityChecker = () => {
  const [text, setText] = useState("");
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.trim().split(/\s+/).filter(Boolean);
  const totalSyllables = words.reduce((a, w) => a + countSyllables(w), 0);
  const wc = words.length;
  const sc = sentences.length;
  const flesch = wc > 0 && sc > 0 ? Math.round(206.835 - 1.015 * (wc / sc) - 84.6 * (totalSyllables / wc)) : 0;
  const grade = wc > 0 && sc > 0 ? Math.round(0.39 * (wc / sc) + 11.8 * (totalSyllables / wc) - 15.59) : 0;
  const level = flesch >= 90 ? "Very Easy" : flesch >= 80 ? "Easy" : flesch >= 70 ? "Fairly Easy" : flesch >= 60 ? "Standard" : flesch >= 50 ? "Fairly Difficult" : flesch >= 30 ? "Difficult" : "Very Difficult";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your content here for readability analysis..." rows={16} className="resize-none" />
      </div>
      <div className="space-y-3">
        <ScoreDisplay score={Math.max(0, Math.min(100, flesch))} label="Flesch Reading Ease" />
        <StatCard label="Grade Level" value={wc > 0 ? `Grade ${Math.max(1, grade)}` : "—"} />
        <StatCard label="Reading Level" value={wc > 0 ? level : "—"} />
        <StatCard label="Avg Sentence Length" value={sc > 0 ? `${Math.round(wc / sc)} words` : "—"} />
        <StatCard label="Avg Syllables/Word" value={wc > 0 ? (totalSyllables / wc).toFixed(1) : "—"} />
        <StatCard label="Total Words" value={wc} />
        <StatCard label="Total Sentences" value={sc} />
      </div>
    </div>
  );
};

export const DuplicateSentenceFinder = () => {
  const [text, setText] = useState("");
  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
  const seen: Record<string, number> = {};
  sentences.forEach(s => { const k = s.toLowerCase(); seen[k] = (seen[k] || 0) + 1; });
  const dupes = Object.entries(seen).filter(([, c]) => c > 1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your content to find duplicate sentences..." rows={16} className="resize-none" />
      <div>
        <p className="text-sm font-medium mb-3">Duplicates Found: {dupes.length}</p>
        <div className="space-y-2 max-h-[500px] overflow-auto">
          {dupes.length === 0 && <p className="text-sm text-muted-foreground">{text ? "No duplicates found!" : "Enter text to scan"}</p>}
          {dupes.map(([sentence, count], i) => (
            <div key={i} className="glass rounded-lg p-3">
              <p className="text-sm">{sentence}</p>
              <p className="text-xs text-destructive mt-1">Repeated {count} times</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LOREM = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt".split(" ");

export const LoremIpsumGenerator = () => {
  const [count, setCount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const generate = () => {
    if (type === "words") return Array.from({ length: count }, (_, i) => LOREM[i % LOREM.length]).join(" ");
    if (type === "sentences") return Array.from({ length: count }, () => {
      const len = 8 + Math.floor(Math.random() * 10);
      return Array.from({ length: len }, (_, i) => LOREM[(i + Math.floor(Math.random() * 20)) % LOREM.length]).join(" ") + ".";
    }).join(" ");
    return Array.from({ length: count }, () => {
      const sCount = 3 + Math.floor(Math.random() * 4);
      return Array.from({ length: sCount }, () => {
        const len = 8 + Math.floor(Math.random() * 10);
        return Array.from({ length: len }, (_, i) => LOREM[(i + Math.floor(Math.random() * 30)) % LOREM.length]).join(" ") + ".";
      }).join(" ");
    }).join("\n\n");
  };
  const output = generate();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="text-sm font-medium mb-1.5 block">Count</label>
          <Input type="number" value={count} onChange={e => setCount(Math.max(1, Math.min(50, Number(e.target.value))))} className="w-24" />
        </div>
        <div className="flex gap-2">
          {(["paragraphs", "sentences", "words"] as const).map(t => (
            <Button key={t} variant={type === t ? "default" : "outline"} size="sm" onClick={() => setType(t)} className="capitalize">{t}</Button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Generated Text</span>
          <CopyButton text={output} />
        </div>
        <div className="glass rounded-xl p-4 max-h-[400px] overflow-auto text-sm text-muted-foreground whitespace-pre-wrap">{output}</div>
      </div>
    </div>
  );
};

export const TextCaseConverter = () => {
  const [text, setText] = useState("");
  const conversions = [
    { name: "UPPERCASE", fn: (t: string) => t.toUpperCase() },
    { name: "lowercase", fn: (t: string) => t.toLowerCase() },
    { name: "Title Case", fn: (t: string) => t.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()) },
    { name: "Sentence case", fn: (t: string) => t.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()) },
    { name: "tOGGLE cASE", fn: (t: string) => t.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("") },
    { name: "camelCase", fn: (t: string) => t.toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase()) },
    { name: "snake_case", fn: (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") },
    { name: "kebab-case", fn: (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") },
  ];
  return (
    <div className="space-y-6">
      <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste text to convert..." rows={6} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {conversions.map(c => (
          <div key={c.name} className="glass rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{c.name}</span>
              <CopyButton text={text ? c.fn(text) : ""} />
            </div>
            <p className="text-sm text-muted-foreground break-all line-clamp-3">{text ? c.fn(text) : "—"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ArticleRewriterHelper = () => {
  const [text, setText] = useState("");
  const words = text.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/).filter(w => w.length > 3);
  const freq: Record<string, number> = {};
  words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
  const overused = Object.entries(freq).filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1]).slice(0, 15);
  const avgSentenceLen = text ? Math.round(words.length / Math.max(1, text.split(/[.!?]+/).filter(Boolean).length)) : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your article here for analysis..." rows={16} className="resize-none" />
      <div className="space-y-4">
        <StatCard label="Total Words" value={words.length} />
        <StatCard label="Avg Sentence Length" value={`${avgSentenceLen} words`} />
        {avgSentenceLen > 20 && <p className="text-xs text-destructive px-2">Consider shortening sentences. Aim for 15-20 words.</p>}
        <p className="text-sm font-medium mt-2">Overused Words (3+ times)</p>
        <div className="space-y-2 max-h-[300px] overflow-auto">
          {overused.length === 0 && <p className="text-sm text-muted-foreground">No overused words detected</p>}
          {overused.map(([word, count]) => (
            <div key={word} className="glass rounded-lg p-3 flex justify-between">
              <span className="text-sm font-medium">{word}</span>
              <span className="text-sm text-destructive">{count}x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HeadlineAnalyzer = () => {
  const [headline, setHeadline] = useState("");
  const powerWords = ["amazing","ultimate","proven","exclusive","secret","powerful","incredible","guaranteed","essential","breakthrough","revolutionary","stunning","remarkable","extraordinary","unbelievable","free","new","easy","best","top"];
  const emotionalWords = ["love","fear","surprise","anger","joy","trust","anticipation","disgust","happy","sad","excited","worried","confident","anxious","proud"];
  const words = headline.toLowerCase().split(/\s+/).filter(Boolean);
  const hasPower = words.filter(w => powerWords.includes(w)).length;
  const hasEmotion = words.filter(w => emotionalWords.includes(w)).length;
  const hasNumber = /\d/.test(headline);
  const isQuestion = /\?$/.test(headline.trim());
  const lenScore = headline.length >= 50 && headline.length <= 60 ? 20 : headline.length >= 40 && headline.length <= 70 ? 15 : 5;
  const wordScore = words.length >= 6 && words.length <= 12 ? 20 : 10;
  const score = Math.min(100, lenScore + wordScore + (hasPower ? 20 : 0) + (hasEmotion ? 15 : 0) + (hasNumber ? 15 : 0) + (isQuestion ? 10 : 0));

  return (
    <div className="space-y-6 max-w-2xl">
      <Input value={headline} onChange={e => setHeadline(e.target.value)} placeholder="Enter your headline to analyze..." className="text-lg" />
      {headline && (
        <div className="space-y-4">
          <ScoreDisplay score={score} label="Headline Score" />
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Word Count" value={words.length} />
            <StatCard label="Character Count" value={headline.length} />
          </div>
          <div className="space-y-2">
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Power Words</span><span className={`text-sm font-medium ${hasPower ? "text-accent" : "text-destructive"}`}>{hasPower ? `${hasPower} found ✓` : "None ✗"}</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Emotional Words</span><span className={`text-sm font-medium ${hasEmotion ? "text-accent" : "text-destructive"}`}>{hasEmotion ? `${hasEmotion} found ✓` : "None ✗"}</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Contains Number</span><span className={`text-sm font-medium ${hasNumber ? "text-accent" : "text-destructive"}`}>{hasNumber ? "Yes ✓" : "No ✗"}</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Question Format</span><span className={`text-sm font-medium ${isQuestion ? "text-accent" : "text-muted-foreground"}`}>{isQuestion ? "Yes ✓" : "No"}</span></div>
          </div>
        </div>
      )}
    </div>
  );
};

export const GrammarChecker = () => {
  const [text, setText] = useState("");
  const issues: { type: string; match: string; suggestion: string }[] = [];
  if (text) {
    if (/  +/.test(text)) issues.push({ type: "Spacing", match: "Double spaces", suggestion: "Use single spaces between words" });
    const passiveMatches = text.match(/\b(was|were|been|being|is|are|am)\s+\w+ed\b/gi) || [];
    passiveMatches.forEach(m => issues.push({ type: "Passive Voice", match: m, suggestion: "Consider using active voice" }));
    if (/\bi\b/.test(text)) issues.push({ type: "Capitalization", match: '"i" should be "I"', suggestion: 'Capitalize the pronoun "I"' });
    const repeatedWords = text.match(/\b(\w+)\s+\1\b/gi) || [];
    repeatedWords.forEach(m => issues.push({ type: "Repeated Word", match: m, suggestion: "Remove the duplicate word" }));
    if (/[,;]\s*[,;]/.test(text)) issues.push({ type: "Punctuation", match: "Double punctuation", suggestion: "Remove extra punctuation" });
    const longSentences = text.split(/[.!?]+/).filter(s => s.trim().split(/\s+/).length > 25);
    longSentences.forEach(() => issues.push({ type: "Readability", match: "Long sentence (25+ words)", suggestion: "Break into shorter sentences" }));
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your text to check for common grammar issues..." rows={16} className="resize-none" />
      <div>
        <p className="text-sm font-medium mb-3">Issues Found: {issues.length}</p>
        <div className="space-y-2 max-h-[500px] overflow-auto">
          {issues.length === 0 && <p className="text-sm text-muted-foreground">{text ? "No issues found! ✓" : "Enter text to check"}</p>}
          {issues.map((issue, i) => (
            <div key={i} className="glass rounded-lg p-3">
              <div className="flex justify-between"><span className="text-xs font-medium text-destructive">{issue.type}</span></div>
              <p className="text-sm mt-1">{issue.match}</p>
              <p className="text-xs text-muted-foreground mt-1">{issue.suggestion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
