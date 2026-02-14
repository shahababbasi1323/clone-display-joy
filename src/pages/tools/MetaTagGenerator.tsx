import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/tools/ToolUiPrimitives";

const MetaTagGenerator = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [url, setUrl] = useState("");

  const output = `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}" />
<meta name="description" content="${description}" />
${keywords ? `<meta name="keywords" content="${keywords}" />\n` : ""}
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${url}" />
<meta property="twitter:title" content="${title}" />
<meta property="twitter:description" content="${description}" />`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1.5 block">Page Title <span className="text-muted-foreground">({title.length}/60)</span></label>
          <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="My Awesome Page" maxLength={60} />
          <div className="h-1 mt-1 rounded-full bg-secondary overflow-hidden">
            <div className={`h-full transition-all ${title.length > 60 ? "bg-destructive" : title.length > 50 ? "bg-accent" : "bg-primary"}`} style={{ width: `${Math.min((title.length / 60) * 100, 100)}%` }} />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Meta Description <span className="text-muted-foreground">({description.length}/160)</span></label>
          <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="A brief description..." maxLength={160} rows={3} />
          <div className="h-1 mt-1 rounded-full bg-secondary overflow-hidden">
            <div className={`h-full transition-all ${description.length > 160 ? "bg-destructive" : description.length > 140 ? "bg-accent" : "bg-primary"}`} style={{ width: `${Math.min((description.length / 160) * 100, 100)}%` }} />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Keywords (comma-separated)</label>
          <Input value={keywords} onChange={e => setKeywords(e.target.value)} placeholder="seo, marketing, optimization" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Page URL</label>
          <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/page" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium">Generated Tags</label>
          <CopyButton text={output} />
        </div>
        <pre className="glass rounded-xl p-4 text-xs leading-relaxed overflow-auto max-h-[400px] whitespace-pre-wrap">{output}</pre>
        {(title || description) && (
          <div className="mt-6">
            <p className="text-sm font-medium mb-3">Google Preview</p>
            <div className="bg-background rounded-xl p-4 border border-border">
              <p className="text-primary text-lg leading-snug truncate">{title || "Page Title"}</p>
              <p className="text-accent text-xs mt-1 truncate">{url || "https://example.com"}</p>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{description || "Page description..."}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetaTagGenerator;
