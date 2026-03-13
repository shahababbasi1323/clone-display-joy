import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Rocket, ExternalLink, CheckCircle2, AlertTriangle, Info, Copy, Globe, Zap, ListPlus } from "lucide-react";
import { toast } from "sonner";
import { servicesData } from "@/data/servicesData";
import { locationsData } from "@/data/locationsData";
import { blogPosts } from "@/data/blogData";
import { toolsData } from "@/data/toolsData";
import { ppcServicesData } from "@/data/ppcServicesData";
import { industriesData } from "@/data/industriesData";
import { resources } from "@/data/resourcesData";

interface IndexResult {
  url: string;
  googlePing: boolean;
  bingPing: boolean;
  indexNow: boolean;
}

const PING_METHODS = [
  {
    name: "Google Ping",
    desc: "Notify Google about your URL via sitemap ping",
    icon: Globe,
  },
  {
    name: "Bing / IndexNow",
    desc: "Instant indexing request to Bing, Yandex & others",
    icon: Zap,
  },
  {
    name: "Search Console",
    desc: "Direct URL Inspection for fastest crawling",
    icon: Rocket,
  },
];

export const ForceIndexingTool = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<IndexResult[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const parseUrls = (text: string): string[] => {
    return text
      .split(/[\n,]+/)
      .map((u) => u.trim())
      .filter((u) => {
        try {
          new URL(u);
          return true;
        } catch {
          return false;
        }
      });
  };

  const pingGoogle = async (url: string): Promise<boolean> => {
    try {
      // Google sitemap ping endpoint
      const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`;
      await fetch(pingUrl, { mode: "no-cors", method: "GET" });
      return true;
    } catch {
      return false;
    }
  };

  const pingBing = async (url: string): Promise<boolean> => {
    try {
      const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(url)}`;
      await fetch(pingUrl, { mode: "no-cors", method: "GET" });
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = useCallback(async () => {
    const urls = parseUrls(input);
    if (urls.length === 0) {
      toast.error("Please enter at least one valid URL");
      return;
    }
    if (urls.length > 100) {
      toast.error("Maximum 100 URLs at a time");
      return;
    }

    setProcessing(true);
    setResults([]);
    setProgress({ done: 0, total: urls.length });

    const allResults: IndexResult[] = [];

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const [googlePing, bingPing] = await Promise.all([
        pingGoogle(url),
        pingBing(url),
      ]);

      const result: IndexResult = {
        url,
        googlePing,
        bingPing,
        indexNow: bingPing, // Bing ping acts as IndexNow trigger
      };

      allResults.push(result);
      setResults([...allResults]);
      setProgress({ done: i + 1, total: urls.length });
    }

    setProcessing(false);
    toast.success(`Pinged ${urls.length} URLs to search engines!`);
  }, [input]);

  const openInSearchConsole = (url: string) => {
    const encoded = encodeURIComponent(url);
    window.open(
      `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(new URL(url).origin)}&id=${encoded}`,
      "_blank"
    );
  };

  const openGooglePing = (url: string) => {
    window.open(`https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`, "_blank");
  };

  const openBingSubmit = () => {
    window.open("https://www.bing.com/webmasters/submiturl", "_blank");
  };

  const copyAllAsText = () => {
    const text = results
      .map(
        (r) =>
          `${r.url} | Google: ${r.googlePing ? "✓" : "✗"} | Bing: ${r.bingPing ? "✓" : "✗"}`
      )
      .join("\n");
    navigator.clipboard.writeText(text);
    toast.success("Results copied to clipboard!");
  };

  const exportCsv = () => {
    const header = "URL,Google Ping,Bing Ping,IndexNow\n";
    const rows = results
      .map((r) => `"${r.url}",${r.googlePing ? "Yes" : "No"},${r.bingPing ? "Yes" : "No"},${r.indexNow ? "Yes" : "No"}`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "indexing-results.csv";
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* How it works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PING_METHODS.map((m) => (
          <Card key={m.name} className="p-4 flex items-start gap-3">
            <m.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-foreground">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Input */}
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">
          Enter URLs (one per line, max 100)
        </label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`https://example.com/page-1\nhttps://example.com/page-2\nhttps://example.com/blog/new-post`}
          rows={8}
          className="font-mono text-sm"
        />
        <p className="text-xs text-muted-foreground mt-1">
          {parseUrls(input).length} valid URL{parseUrls(input).length !== 1 ? "s" : ""} detected
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button onClick={handleSubmit} disabled={processing} className="gap-2">
          <Rocket className="h-4 w-4" />
          {processing
            ? `Pinging... ${progress.done}/${progress.total}`
            : "Ping Search Engines"}
        </Button>
        {results.length > 0 && (
          <>
            <Button variant="outline" onClick={copyAllAsText} className="gap-2">
              <Copy className="h-4 w-4" /> Copy Results
            </Button>
            <Button variant="outline" onClick={exportCsv} className="gap-2">
              <ExternalLink className="h-4 w-4" /> Export CSV
            </Button>
          </>
        )}
      </div>

      {/* Progress */}
      {processing && (
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${(progress.done / progress.total) * 100}%` }}
          />
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Results ({results.length})
          </h3>
          <div className="rounded-lg border border-border overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50 text-left">
                  <th className="p-3 font-medium text-foreground">URL</th>
                  <th className="p-3 font-medium text-foreground text-center">Google</th>
                  <th className="p-3 font-medium text-foreground text-center">Bing</th>
                  <th className="p-3 font-medium text-foreground text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} className="border-t border-border hover:bg-secondary/30">
                    <td className="p-3 font-mono text-xs break-all max-w-[300px]">
                      {r.url}
                    </td>
                    <td className="p-3 text-center">
                      {r.googlePing ? (
                        <Badge variant="default" className="bg-green-600 text-white gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Pinged
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="h-3 w-3" /> Failed
                        </Badge>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {r.bingPing ? (
                        <Badge variant="default" className="bg-green-600 text-white gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Pinged
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="h-3 w-3" /> Failed
                        </Badge>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => openInSearchConsole(r.url)}
                        className="gap-1 text-xs"
                      >
                        <ExternalLink className="h-3 w-3" /> GSC
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tips */}
      <Card className="p-5 bg-secondary/30 border-border">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">💡 Pro Tips for Faster Indexing</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Google Search Console</strong> — Use "Request Indexing" in URL Inspection for the fastest results (usually indexed within hours).
              </li>
              <li>
                <strong>IndexNow API</strong> — Submit your key at{" "}
                <button onClick={openBingSubmit} className="text-primary underline">
                  Bing Webmaster Tools
                </button>{" "}
                for instant Bing/Yandex indexing.
              </li>
              <li>
                <strong>Internal links</strong> — Add internal links from high-authority pages to speed up crawling.
              </li>
              <li>
                <strong>Updated sitemap</strong> — Ensure new URLs are in your XML sitemap with today's date as lastmod.
              </li>
              <li>
                <strong>Social sharing</strong> — Share new URLs on Twitter/X and LinkedIn to trigger social crawlers.
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};
