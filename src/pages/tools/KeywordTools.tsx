import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton, StatCard } from "@/components/tools/ToolUiPrimitives";

export const KeywordSuggestionTool = () => {
  const [seed, setSeed] = useState("");
  const prefixes = ["how to","what is","best","top","why","where to find","when to use","guide to","tips for","ways to"];
  const suffixes = ["for beginners","near me","online","free","services","tools","examples","vs","review","pricing","cost","agency","company","consultant","software","tips","strategies","checklist"];
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const suggestions = seed ? [
    ...prefixes.map(p => `${p} ${seed}`),
    ...suffixes.map(s => `${seed} ${s}`),
    ...alpha.map(a => `${seed} ${a}`),
  ] : [];

  return (
    <div className="space-y-6">
      <Input value={seed} onChange={e => setSeed(e.target.value)} placeholder="Enter a seed keyword (e.g. seo services)" className="text-lg" />
      {suggestions.length > 0 && (
        <div>
          <div className="flex justify-between mb-3">
            <p className="text-sm font-medium">{suggestions.length} keyword ideas</p>
            <CopyButton text={suggestions.join("\n")} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[500px] overflow-auto">
            {suggestions.map((s, i) => (
              <div key={i} className="glass rounded-lg p-2 text-sm">{s}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const LsiKeywordGenerator = () => {
  const [topic, setTopic] = useState("");
  const patterns = ["benefits of","types of","examples of","alternatives to","vs","how does","importance of","features of","advantages of","disadvantages of","definition of","meaning of","best practices for","common mistakes in","tools for","strategies for","trends in","statistics about","case studies on","resources for"];
  const related = topic ? patterns.map(p => p.includes("of") || p.includes("in") || p.includes("on") || p.includes("about") || p.includes("for") ? `${p} ${topic}` : `${topic} ${p}`) : [];

  return (
    <div className="space-y-6">
      <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter your main topic (e.g. content marketing)" className="text-lg" />
      {related.length > 0 && (
        <div>
          <div className="flex justify-between mb-3"><p className="text-sm font-medium">{related.length} semantic keywords</p><CopyButton text={related.join("\n")} /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[400px] overflow-auto">
            {related.map((r, i) => <div key={i} className="glass rounded-lg p-2 text-sm">{r}</div>)}
          </div>
        </div>
      )}
    </div>
  );
};

export const QuestionGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const starters = ["what is","what are","how to","how does","how can","why is","why do","where to","where can","when to","when should","who can","who should","which is","which are","can you","can I","does","is","should I","will","do"];
  const questions = keyword ? starters.map(s => `${s} ${keyword}?`) : [];

  return (
    <div className="space-y-6">
      <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Enter a keyword (e.g. link building)" className="text-lg" />
      {questions.length > 0 && (
        <div>
          <div className="flex justify-between mb-3"><p className="text-sm font-medium">{questions.length} questions</p><CopyButton text={questions.join("\n")} /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[400px] overflow-auto">
            {questions.map((q, i) => <div key={i} className="glass rounded-lg p-2 text-sm">{q}</div>)}
          </div>
        </div>
      )}
    </div>
  );
};

export const KeywordGapPlanner = () => {
  const [yours, setYours] = useState("");
  const [competitor, setCompetitor] = useState("");
  const yourKw = yours.split("\n").map(k => k.trim().toLowerCase()).filter(Boolean);
  const compKw = competitor.split("\n").map(k => k.trim().toLowerCase()).filter(Boolean);
  const gaps = compKw.filter(k => !yourKw.includes(k));
  const shared = yourKw.filter(k => compKw.includes(k));
  const unique = yourKw.filter(k => !compKw.includes(k));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><label className="text-sm font-medium mb-1.5 block">Your Keywords (one per line)</label><Textarea value={yours} onChange={e => setYours(e.target.value)} rows={10} placeholder="seo services&#10;link building&#10;keyword research" /></div>
        <div><label className="text-sm font-medium mb-1.5 block">Competitor Keywords (one per line)</label><Textarea value={competitor} onChange={e => setCompetitor(e.target.value)} rows={10} placeholder="seo agency&#10;content marketing&#10;keyword research" /></div>
      </div>
      {(gaps.length > 0 || shared.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><p className="text-sm font-medium mb-2 text-destructive">Gaps ({gaps.length})</p><div className="space-y-1 max-h-[200px] overflow-auto">{gaps.map((k,i) => <div key={i} className="glass rounded-lg p-2 text-xs">{k}</div>)}</div></div>
          <div><p className="text-sm font-medium mb-2 text-accent">Shared ({shared.length})</p><div className="space-y-1 max-h-[200px] overflow-auto">{shared.map((k,i) => <div key={i} className="glass rounded-lg p-2 text-xs">{k}</div>)}</div></div>
          <div><p className="text-sm font-medium mb-2">Your Unique ({unique.length})</p><div className="space-y-1 max-h-[200px] overflow-auto">{unique.map((k,i) => <div key={i} className="glass rounded-lg p-2 text-xs">{k}</div>)}</div></div>
        </div>
      )}
    </div>
  );
};

export const SearchIntentClassifier = () => {
  const [input, setInput] = useState("");
  const classify = (kw: string): { intent: string; color: string } => {
    const k = kw.toLowerCase();
    if (/buy|price|cost|cheap|deal|discount|coupon|order|purchase|shop|hire/.test(k)) return { intent: "Transactional 💰", color: "text-green-500" };
    if (/best|top|review|compare|vs|alternative|recommendation/.test(k)) return { intent: "Commercial 🔍", color: "text-yellow-500" };
    if (/login|sign in|website|official|contact|address|phone/.test(k)) return { intent: "Navigational 🧭", color: "text-blue-500" };
    return { intent: "Informational ℹ️", color: "text-purple-500" };
  };
  const keywords = input.split("\n").filter(k => k.trim());

  return (
    <div className="space-y-6">
      <Textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter keywords, one per line..." rows={8} />
      {keywords.length > 0 && (
        <div className="space-y-2">
          {keywords.map((kw, i) => {
            const { intent, color } = classify(kw.trim());
            return (
              <div key={i} className="glass rounded-lg p-3 flex justify-between items-center">
                <span className="text-sm">{kw.trim()}</span>
                <span className={`text-sm font-medium ${color}`}>{intent}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const KeywordGrouper = () => {
  const [input, setInput] = useState("");
  const keywords = input.split("\n").map(k => k.trim().toLowerCase()).filter(Boolean);
  const groups: Record<string, string[]> = {};
  keywords.forEach(kw => {
    const words = kw.split(/\s+/);
    const key = words.length > 1 ? words[0] : "ungrouped";
    if (!groups[key]) groups[key] = [];
    groups[key].push(kw);
  });
  const sorted = Object.entries(groups).sort((a, b) => b[1].length - a[1].length);

  return (
    <div className="space-y-6">
      <Textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Paste keywords, one per line..." rows={10} />
      {sorted.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm font-medium">{sorted.length} groups from {keywords.length} keywords</p>
          {sorted.map(([group, kws]) => (
            <div key={group} className="glass rounded-xl p-4">
              <p className="text-sm font-medium mb-2 capitalize">{group} ({kws.length})</p>
              <div className="flex flex-wrap gap-2">{kws.map((kw, i) => <span key={i} className="text-xs bg-muted rounded-full px-3 py-1">{kw}</span>)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const BulkKeywordChecker = () => {
  const [domain, setDomain] = useState("");
  const [keywords, setKeywords] = useState("");
  const kwList = keywords.split("\n").map(k => k.trim()).filter(Boolean);

  return (
    <div className="space-y-6">
      <div><label className="text-sm font-medium mb-1.5 block">Your Domain</label><Input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" /></div>
      <div><label className="text-sm font-medium mb-1.5 block">Keywords (one per line)</label><Textarea value={keywords} onChange={e => setKeywords(e.target.value)} placeholder={"seo services dubai\ndigital marketing agency\nlink building services"} rows={8} /></div>
      {domain && kwList.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">{kwList.length} keywords to check</p>
          <div className="space-y-2 max-h-[500px] overflow-auto">
            {kwList.map((kw, i) => (
              <div key={i} className="glass rounded-lg p-3 flex flex-wrap justify-between items-center gap-2">
                <span className="text-sm flex-1">{kw}</span>
                <div className="flex gap-2">
                  <a href={`https://www.google.com/search?q=${encodeURIComponent(kw)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">Search →</a>
                  <a href={`https://www.google.com/search?q=site:${encodeURIComponent(domain)}+${encodeURIComponent(kw)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">site: Check →</a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">💡 Open each link to manually check your position. For automated tracking, use Google Search Console or rank tracking tools.</p>
        </div>
      )}
    </div>
  );
};
