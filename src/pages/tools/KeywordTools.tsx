import { useState, useRef, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [domain, setDomain] = useState("");
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [langCode, setLangCode] = useState("");
  const [delay, setDelay] = useState(3);
  const [results, setResults] = useState<{ keyword: string; searchUrl: string; siteUrl: string }[]>([]);
  const [isOpening, setIsOpening] = useState(false);
  const [openProgress, setOpenProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const cancelRef = useRef(false);
  const kwList = keywords.split("\n").map(k => k.trim()).filter(Boolean);

  const generateLinks = () => {
    if (kwList.length === 0) return;
    const links = kwList.map(kw => {
      const parts = [kw];
      if (location) parts.push(location);
      const query = parts.join(" ");
      let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      if (langCode) searchUrl += `&hl=${encodeURIComponent(langCode)}`;
      const siteQuery = domain ? `site:${domain} ${query}` : query;
      let siteUrl = `https://www.google.com/search?q=${encodeURIComponent(siteQuery)}`;
      if (langCode) siteUrl += `&hl=${encodeURIComponent(langCode)}`;
      return { keyword: kw, searchUrl, siteUrl };
    });
    setResults(links);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Panel - Enter Keywords */}
      <div className="glass rounded-xl p-6 space-y-5">
        <h3 className="text-lg font-bold">Enter Keywords</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Business Name</label>
            <Input value={businessName} onChange={e => setBusinessName(e.target.value)} placeholder="Your Brand Name" />
            <p className="text-xs text-muted-foreground mt-1">Auto-highlight in search results</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Website URL</label>
            <Input value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)} placeholder="yourbrand.com" />
            <p className="text-xs text-muted-foreground mt-1">For tracking reference</p>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Domain to Check (optional)</label>
          <Input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" />
          <p className="text-xs text-muted-foreground mt-1">Add site: filter to search</p>
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Keywords (one per line)</label>
          <Textarea value={keywords} onChange={e => setKeywords(e.target.value)} placeholder={"keyword 1\nkeyword 2\nkeyword 3\n..."} rows={8} />
          <p className="text-xs text-muted-foreground mt-1">{kwList.length} keywords entered</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Location / City (optional)</label>
            <Input value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. dallas, london" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Language Code (optional)</label>
            <Input value={langCode} onChange={e => setLangCode(e.target.value)} placeholder="e.g. en, es, de" />
          </div>
        </div>
        <Button onClick={generateLinks} className="w-full" size="lg" disabled={kwList.length === 0}>
          Generate Links
        </Button>
      </div>

      {/* Right Panel - Search Links */}
      <div className="glass rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Search Links</h3>
          {results.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <select
                value={delay}
                onChange={e => setDelay(Number(e.target.value))}
                className="glass rounded-lg px-2 py-1.5 text-xs"
              >
                <option value={2}>2s delay</option>
                <option value={3}>3s delay</option>
                <option value={5}>5s delay</option>
                <option value={10}>10s delay</option>
              </select>
              <Button size="sm" variant="outline" onClick={() => {
                results.forEach((r, i) => setTimeout(() => window.open(r.searchUrl, "_blank"), i * delay * 1000));
              }}>
                Open All
              </Button>
              <Button size="sm" variant="outline" onClick={() => {
                navigator.clipboard.writeText(results.map(r => r.searchUrl).join("\n"));
              }}>
                Copy All Links
              </Button>
            </div>
          )}
        </div>
        {results.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
            <Search className="h-12 w-12 mb-3 opacity-50" />
            <p className="text-sm">Enter keywords and click "Generate Links" to start</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-[600px] overflow-auto">
            {results.map((r, i) => (
              <div key={i} className="glass rounded-lg p-3 space-y-1">
                <p className="text-sm font-medium">{r.keyword}{location ? ` — ${location}` : ""}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={r.searchUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">Google Search →</a>
                  {domain && <a href={r.siteUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">site: Check →</a>}
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground mt-3">💡 Your browser may block multiple popups — allow popups for this site. Use incognito for unbiased results.</p>
          </div>
        )}
      </div>
    </div>
  );
};
