import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StatCard, CopyButton } from "@/components/tools/ToolUiPrimitives";

export const BulkTitleChecker = () => {
  const [input, setInput] = useState("");
  const titles = input.split("\n").filter(t => t.trim());
  return (
    <div className="space-y-6">
      <Textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter one title per line..." rows={8} />
      {titles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">{titles.length} titles checked</p>
          {titles.map((title, i) => {
            const len = title.trim().length;
            const px = Math.round(len * 6.5);
            const ok = len <= 60;
            return (
              <div key={i} className={`glass rounded-lg p-3 border-l-4 ${ok ? "border-l-accent" : "border-l-destructive"}`}>
                <p className="text-sm font-medium truncate">{title.trim()}</p>
                <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                  <span className={!ok ? "text-destructive" : ""}>{len}/60 chars</span>
                  <span>~{px}px width</span>
                  <span className={ok ? "text-accent" : "text-destructive"}>{ok ? "✓ Pass" : "✗ Too long"}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const MetaDescriptionChecker = () => {
  const [desc, setDesc] = useState("");
  const [keyword, setKeyword] = useState("");
  const len = desc.length;
  const hasKeyword = keyword && desc.toLowerCase().includes(keyword.toLowerCase());
  const ctaWords = ["learn","discover","get","find","start","try","click","sign","join","download","call","contact","book","schedule","buy","shop","order"];
  const hasCta = ctaWords.some(w => desc.toLowerCase().includes(w));
  const ok = len >= 120 && len <= 160;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <label className="text-sm font-medium mb-1.5 flex justify-between">
          <span>Meta Description</span>
          <span className={len > 160 ? "text-destructive" : len > 140 ? "text-accent" : "text-muted-foreground"}>{len}/160</span>
        </label>
        <Textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Enter your meta description..." rows={3} />
      </div>
      <div>
        <label className="text-sm font-medium mb-1.5 block">Target Keyword (optional)</label>
        <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="e.g. seo services" />
      </div>
      {desc && (
        <div className="space-y-2">
          <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Length</span><span className={`text-sm font-medium ${ok ? "text-accent" : "text-destructive"}`}>{ok ? "Good ✓" : len < 120 ? "Too short ✗" : "Too long ✗"}</span></div>
          {keyword && <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Keyword Present</span><span className={`text-sm font-medium ${hasKeyword ? "text-accent" : "text-destructive"}`}>{hasKeyword ? "Yes ✓" : "No ✗"}</span></div>}
          <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">CTA Included</span><span className={`text-sm font-medium ${hasCta ? "text-accent" : "text-destructive"}`}>{hasCta ? "Yes ✓" : "No ✗"}</span></div>
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Google Preview (truncated at 160)</p>
            <div className="rounded-xl border border-border bg-background p-4">
              <p className="text-primary text-lg">Page Title Example</p>
              <p className="text-accent text-xs mt-1">https://example.com</p>
              <p className="text-muted-foreground text-sm mt-1">{desc.slice(0, 160)}{desc.length > 160 ? "..." : ""}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const HeadingAnalyzer = () => {
  const [html, setHtml] = useState("");
  const headings = [...html.matchAll(/<h([1-6])[^>]*>(.*?)<\/h\1>/gi)].map(m => ({ level: Number(m[1]), text: m[2].replace(/<[^>]*>/g, "") }));
  const h1Count = headings.filter(h => h.level === 1).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Paste HTML</label>
        <Textarea value={html} onChange={e => setHtml(e.target.value)} placeholder='<h1>Main Title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>' rows={16} className="resize-none font-mono text-xs" />
      </div>
      <div>
        <div className="flex gap-4 mb-4">
          <StatCard label="Total Headings" value={headings.length} />
          <StatCard label="H1 Tags" value={h1Count} />
        </div>
        {h1Count > 1 && <p className="text-xs text-destructive mb-3">⚠ Multiple H1 tags detected. Use only one H1 per page.</p>}
        {h1Count === 0 && html && <p className="text-xs text-destructive mb-3">⚠ No H1 tag found. Every page should have one H1.</p>}
        <div className="space-y-1">
          {headings.map((h, i) => (
            <div key={i} className="glass rounded-lg p-2 flex items-center gap-2" style={{ marginLeft: `${(h.level - 1) * 16}px` }}>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${h.level === 1 ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>H{h.level}</span>
              <span className="text-sm truncate">{h.text}</span>
            </div>
          ))}
          {headings.length === 0 && <p className="text-sm text-muted-foreground">Paste HTML to analyze headings</p>}
        </div>
      </div>
    </div>
  );
};

export const ImageAltTextGenerator = () => {
  const [context, setContext] = useState("");
  const [imageType, setImageType] = useState("photo");
  const suggestions = context ? [
    `${imageType === "photo" ? "Photo" : imageType === "illustration" ? "Illustration" : "Screenshot"} of ${context}`,
    `${context} - ${imageType === "photo" ? "professional photography" : imageType === "illustration" ? "digital illustration" : "screen capture"}`,
    `${context.split(" ").slice(0, 5).join(" ")} image for web`,
    `Detailed view of ${context.toLowerCase()}`,
    `${context} | High quality ${imageType}`,
  ] : [];

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Describe the image content</label>
        <Textarea value={context} onChange={e => setContext(e.target.value)} placeholder="e.g. team meeting in modern office with 5 people around a table" rows={3} />
      </div>
      <div className="flex gap-2">
        {["photo", "illustration", "screenshot"].map(t => (
          <Button key={t} variant={imageType === t ? "default" : "outline"} size="sm" onClick={() => setImageType(t)} className="capitalize">{t}</Button>
        ))}
      </div>
      {suggestions.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Suggested Alt Texts</p>
          {suggestions.map((s, i) => (
            <div key={i} className="glass rounded-lg p-3 flex justify-between items-center">
              <code className="text-sm">{s}</code>
              <CopyButton text={s} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const CanonicalTagGenerator = () => {
  const [url, setUrl] = useState("");
  const output = url ? `<link rel="canonical" href="${url}" />` : "";
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Canonical URL</label>
        <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/preferred-page" />
      </div>
      {url && (
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Generated Tag</span>
            <CopyButton text={output} />
          </div>
          <pre className="glass rounded-xl p-4 text-xs whitespace-pre-wrap">{output}</pre>
          <p className="text-xs text-muted-foreground mt-3">Place this tag in the {'<head>'} section of every duplicate page pointing to the canonical URL.</p>
        </div>
      )}
    </div>
  );
};

export const OpenGraphPreview = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div><label className="text-sm font-medium mb-1.5 block">OG Title</label><Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Page Title" /></div>
        <div><label className="text-sm font-medium mb-1.5 block">OG Description</label><Textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Page description..." rows={2} /></div>
        <div><label className="text-sm font-medium mb-1.5 block">OG URL</label><Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com" /></div>
        <div><label className="text-sm font-medium mb-1.5 block">OG Image URL</label><Input value={image} onChange={e => setImage(e.target.value)} placeholder="https://example.com/image.jpg" /></div>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-3">Facebook Preview</p>
          <div className="rounded-xl border border-border overflow-hidden max-w-md">
            <div className="bg-muted h-40 flex items-center justify-center text-muted-foreground text-sm">{image ? <img src={image} alt="OG" className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = "none")} /> : "Image Preview"}</div>
            <div className="p-3 bg-background">
              <p className="text-xs text-muted-foreground uppercase">{url ? new URL(url.startsWith("http") ? url : `https://${url}`).hostname : "example.com"}</p>
              <p className="font-semibold text-sm mt-1">{title || "Page Title"}</p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{desc || "Description"}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-3">Twitter/X Preview</p>
          <div className="rounded-xl border border-border overflow-hidden max-w-md">
            <div className="bg-muted h-32 flex items-center justify-center text-muted-foreground text-sm">{image ? <img src={image} alt="Card" className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = "none")} /> : "Image Preview"}</div>
            <div className="p-3 bg-background">
              <p className="font-semibold text-sm">{title || "Page Title"}</p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{desc || "Description"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GoogleIndexChecker = () => {
  const [domain, setDomain] = useState("");
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Your Domain</label>
        <Input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" />
      </div>
      {domain && (
        <div className="space-y-4">
          <p className="text-sm font-medium">How to Check Index Status</p>
          <div className="space-y-3">
            <div className="glass rounded-xl p-4">
              <p className="text-sm font-medium mb-2">1. Check all indexed pages</p>
              <div className="flex items-center gap-2">
                <code className="text-xs bg-muted rounded px-2 py-1 flex-1">site:{domain}</code>
                <CopyButton text={`site:${domain}`} />
              </div>
              <a href={`https://www.google.com/search?q=site:${encodeURIComponent(domain)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent mt-2 inline-block hover:underline">Search on Google →</a>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-sm font-medium mb-2">2. Check specific page</p>
              <div className="flex items-center gap-2">
                <code className="text-xs bg-muted rounded px-2 py-1 flex-1">site:{domain}/your-page</code>
                <CopyButton text={`site:${domain}/your-page`} />
              </div>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-sm font-medium mb-2">3. Check cache version</p>
              <div className="flex items-center gap-2">
                <code className="text-xs bg-muted rounded px-2 py-1 flex-1">cache:{domain}</code>
                <CopyButton text={`cache:${domain}`} />
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">💡 For detailed index data, use Google Search Console (free).</p>
        </div>
      )}
    </div>
  );
};

export const SerpChecker = () => {
  const [domain, setDomain] = useState("");
  const [keywords, setKeywords] = useState("");
  const kwList = keywords.split("\n").map(k => k.trim()).filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="text-sm font-medium mb-1.5 block">Your Domain</label><Input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" /></div>
      </div>
      <div><label className="text-sm font-medium mb-1.5 block">Target Keywords (one per line)</label><Textarea value={keywords} onChange={e => setKeywords(e.target.value)} placeholder={"seo services\ndigital marketing\nlink building"} rows={6} /></div>
      {domain && kwList.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium">Check Rankings on Google</p>
          {kwList.map((kw, i) => {
            const query = `site:${domain} ${kw}`;
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(kw)}`;
            const siteSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            return (
              <div key={i} className="glass rounded-xl p-4">
                <p className="text-sm font-medium mb-2">{kw}</p>
                <div className="flex flex-wrap gap-2">
                  <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">Search Google →</a>
                  <a href={siteSearchUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">site: Check →</a>
                  <CopyButton text={query} />
                </div>
              </div>
            );
          })}
          <p className="text-xs text-muted-foreground">💡 For accurate rank tracking, use Google Search Console or tools like Ahrefs/SEMrush.</p>
        </div>
      )}
    </div>
  );
};
