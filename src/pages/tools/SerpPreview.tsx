import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SerpPreview = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const titleLen = title.length;
  const descLen = description.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1.5 flex justify-between">
            <span>Title Tag</span>
            <span className={`${titleLen > 60 ? "text-destructive" : titleLen > 50 ? "text-accent" : "text-muted-foreground"}`}>{titleLen}/60</span>
          </label>
          <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Your Page Title" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 flex justify-between">
            <span>Meta Description</span>
            <span className={`${descLen > 160 ? "text-destructive" : descLen > 140 ? "text-accent" : "text-muted-foreground"}`}>{descLen}/160</span>
          </label>
          <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Your meta description..." rows={3} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">URL</label>
          <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/page" />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-3">Desktop Preview</p>
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="text-primary text-xl leading-snug hover:underline cursor-pointer truncate">{title || "Page Title Will Appear Here"}</p>
            <p className="text-accent text-sm mt-1 truncate">{url || "https://example.com"} ›</p>
            <p className="text-muted-foreground text-sm mt-2 line-clamp-2 leading-relaxed">{description || "Your meta description will appear here."}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-3">Mobile Preview</p>
          <div className="rounded-xl border border-border bg-background p-4 max-w-[360px]">
            <p className="text-primary text-base leading-snug truncate">{title || "Page Title Will Appear Here"}</p>
            <p className="text-accent text-xs mt-1 truncate">{url || "https://example.com"}</p>
            <p className="text-muted-foreground text-xs mt-1.5 line-clamp-3 leading-relaxed">{description || "Your meta description will appear here."}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${titleLen === 0 ? "bg-muted-foreground" : titleLen <= 60 ? "bg-accent" : "bg-destructive"}`} />
            <span className="text-muted-foreground">Title: {titleLen === 0 ? "Empty" : titleLen <= 60 ? "Good length" : "Too long"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${descLen === 0 ? "bg-muted-foreground" : descLen <= 160 ? "bg-accent" : "bg-destructive"}`} />
            <span className="text-muted-foreground">Description: {descLen === 0 ? "Empty" : descLen <= 160 ? "Good length" : "Too long"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerpPreview;
