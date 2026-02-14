import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton, ChecklistItem, StatCard } from "@/components/tools/ToolUiPrimitives";

export const AnchorTextAnalyzer = () => {
  const [input, setInput] = useState("");
  const anchors = input.split("\n").map(a => a.trim()).filter(Boolean);
  const categorize = (text: string): string => {
    const t = text.toLowerCase();
    if (/^https?:\/\//.test(t) || /^www\./.test(t)) return "URL";
    if (/click here|read more|learn more|here|this|visit/.test(t)) return "Generic";
    if (t.length < 3) return "Generic";
    return "Keyword";
  };
  const categories: Record<string, string[]> = {};
  anchors.forEach(a => { const cat = categorize(a); if (!categories[cat]) categories[cat] = []; categories[cat].push(a); });
  const total = anchors.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div><label className="text-sm font-medium mb-1.5 block">Anchor Texts (one per line)</label>
        <Textarea value={input} onChange={e => setInput(e.target.value)} placeholder="best seo services&#10;click here&#10;https://example.com&#10;seo agency dubai" rows={14} /></div>
      <div className="space-y-4">
        {total > 0 && (
          <>
            <StatCard label="Total Anchors" value={total} />
            {Object.entries(categories).map(([cat, items]) => (
              <div key={cat} className="glass rounded-xl p-4">
                <div className="flex justify-between mb-2"><span className="text-sm font-medium">{cat}</span><span className="text-sm text-accent">{((items.length / total) * 100).toFixed(1)}%</span></div>
                <div className="flex flex-wrap gap-1">{items.slice(0, 10).map((a, i) => <span key={i} className="text-xs bg-muted rounded-full px-2 py-0.5">{a}</span>)}</div>
              </div>
            ))}
            <div className="glass rounded-xl p-4">
              <p className="text-sm font-medium mb-2">Health Assessment</p>
              <p className="text-xs text-muted-foreground">
                {(categories["Keyword"]?.length || 0) / total > 0.5 ? "⚠ Too many exact-match keyword anchors. Diversify with branded and generic anchors." :
                  (categories["Generic"]?.length || 0) / total > 0.5 ? "⚠ Too many generic anchors. Include more keyword-rich and branded anchors." :
                    "✓ Anchor text distribution looks healthy."}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const GuestPostPitchGenerator = () => {
  const [topic, setTopic] = useState("");
  const [site, setSite] = useState("");
  const [name, setName] = useState("");
  const emails = topic && site ? [
    `Subject: Guest Post Idea for ${site}\n\nHi there,\n\nI've been a reader of ${site} for a while and love the content you publish about ${topic}.\n\nI'd love to contribute a well-researched article that would be valuable to your audience. Here are a few topic ideas:\n\n1. "The Ultimate Guide to ${topic} in 2026"\n2. "X Mistakes Most People Make with ${topic}"\n3. "How to ${topic}: A Step-by-Step Guide"\n\nI'll make sure the content is original, well-formatted, and includes actionable insights.\n\nWould any of these interest you?\n\nBest,\n${name || "[Your Name]"}`,
    `Subject: Collaboration Opportunity - ${topic} Article\n\nHello,\n\nI noticed ${site} covers ${topic} extensively, and I'd like to propose a guest article that would complement your existing content.\n\nI specialize in ${topic} and have been published on [relevant sites]. I can provide a unique perspective backed by data and real-world experience.\n\nWould you be open to discussing a potential collaboration?\n\nThanks for your time,\n${name || "[Your Name]"}`,
  ] : [];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Your topic/expertise" />
        <Input value={site} onChange={e => setSite(e.target.value)} placeholder="Target website name" />
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
      </div>
      {emails.map((email, i) => (
        <div key={i} className="glass rounded-xl p-4">
          <div className="flex justify-between mb-2"><span className="text-sm font-medium">Template {i + 1}</span><CopyButton text={email} /></div>
          <pre className="text-xs whitespace-pre-wrap text-muted-foreground">{email}</pre>
        </div>
      ))}
    </div>
  );
};

export const BrokenLinkEmailGenerator = () => {
  const [brokenUrl, setBrokenUrl] = useState("");
  const [replacementUrl, setReplacementUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const email = brokenUrl && replacementUrl ? `Subject: Broken Link on ${siteName || "Your Website"}\n\nHi there,\n\nI was browsing ${siteName || "your website"} and noticed a broken link on one of your pages.\n\nThe broken link points to:\n${brokenUrl}\n\nI actually have a similar resource that could serve as a replacement:\n${replacementUrl}\n\nIt covers the same topic and is regularly updated. Would you consider linking to it instead?\n\nEither way, I wanted to let you know about the broken link so you can fix it.\n\nBest regards,\n[Your Name]` : "";

  return (
    <div className="space-y-6 max-w-2xl">
      <Input value={siteName} onChange={e => setSiteName(e.target.value)} placeholder="Target website name" />
      <Input value={brokenUrl} onChange={e => setBrokenUrl(e.target.value)} placeholder="Broken link URL" />
      <Input value={replacementUrl} onChange={e => setReplacementUrl(e.target.value)} placeholder="Your replacement URL" />
      {email && (
        <div className="glass rounded-xl p-4">
          <div className="flex justify-end mb-2"><CopyButton text={email} /></div>
          <pre className="text-xs whitespace-pre-wrap text-muted-foreground">{email}</pre>
        </div>
      )}
    </div>
  );
};

const BL_ITEMS = [
  "Domain Authority (DA) is 30+","Page is relevant to your niche","Site has real organic traffic","No spammy outbound links","Content is high-quality and original","Site is regularly updated","Link is contextual (within content)","Link is dofollow","Site has clean link profile","No link farm patterns","HTTPS is enabled","Site appears in Google index","Low spam score (Moz < 5%)","Relevant anchor text is used","Page has other quality outbound links",
];

export const BacklinkQualityChecklist = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => { const n = new Set(checked); n.has(i) ? n.delete(i) : n.add(i); setChecked(n); };
  const score = Math.round((checked.size / BL_ITEMS.length) * 100);
  const rating = score >= 80 ? "Excellent backlink" : score >= 60 ? "Good backlink" : score >= 40 ? "Proceed with caution" : "Likely not worth it";

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <StatCard label="Quality Score" value={`${score}%`} />
        <StatCard label="Verdict" value={rating} />
      </div>
      <div className="space-y-2">{BL_ITEMS.map((item, i) => <ChecklistItem key={i} label={item} checked={checked.has(i)} onChange={() => toggle(i)} />)}</div>
    </div>
  );
};

export const DisavowFileGenerator = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"url" | "domain">("domain");
  const lines = input.split("\n").filter(l => l.trim());
  const output = `# Disavow file generated by SEO Tools\n# Date: ${new Date().toISOString().split("T")[0]}\n\n${lines.map(l => mode === "domain" ? `domain:${l.trim().replace(/^(https?:\/\/)?(www\.)?/, "")}` : l.trim()).join("\n")}`;

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex gap-2">
        <Button variant={mode === "domain" ? "default" : "outline"} size="sm" onClick={() => setMode("domain")}>By Domain</Button>
        <Button variant={mode === "url" ? "default" : "outline"} size="sm" onClick={() => setMode("url")}>By URL</Button>
      </div>
      <Textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === "domain" ? "Enter domains, one per line:\nspamsite.com\nbadlinks.org" : "Enter full URLs, one per line:\nhttps://spam.com/page1\nhttps://bad.org/link"} rows={8} />
      {lines.length > 0 && (
        <div>
          <div className="flex justify-between mb-2"><span className="text-sm font-medium">disavow.txt ({lines.length} entries)</span><CopyButton text={output} /></div>
          <pre className="glass rounded-xl p-4 text-xs whitespace-pre-wrap">{output}</pre>
          <p className="text-xs text-muted-foreground mt-2">Upload this file in Google Search Console → Disavow Links tool.</p>
        </div>
      )}
    </div>
  );
};
