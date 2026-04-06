import { useState, useCallback, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StatCard, CopyButton } from "@/components/tools/ToolUiPrimitives";
import { Loader2, CheckCircle, XCircle, AlertTriangle, Globe, FileDown, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type UrlResult = {
  url: string;
  status: string;
  statusCode: number | null;
  issue: string;
  severity: "ok" | "warning" | "error";
  redirectUrl?: string;
  checked: boolean;
};

export const BulkUrlIssueChecker = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<UrlResult[]>([]);
  const [checking, setChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const checkUrls = useCallback(async () => {
    const raw = input.split("\n").map(u => u.trim()).filter(Boolean);
    if (!raw.length) return;

    setChecking(true);
    setProgress(0);
    setError("");
    setResults(raw.map(u => ({ url: /^https?:\/\//.test(u) ? u : `https://${u}`, status: "Checking...", statusCode: null, issue: "", severity: "ok" as const, checked: false })));

    // Process in batches of 50 via edge function
    const allUrls = raw.map(u => (/^https?:\/\//.test(u) ? u : `https://${u}`));
    const allResults: UrlResult[] = [];

    for (let i = 0; i < allUrls.length; i += 50) {
      const batch = allUrls.slice(i, i + 50);
      try {
        const { data, error: fnError } = await supabase.functions.invoke("check-urls", {
          body: { urls: batch },
        });

        if (fnError) {
          setError(`Error checking URLs: ${fnError.message}`);
          break;
        }

        if (data?.success && data.results) {
          const batchResults = data.results.map((r: any) => ({ ...r, checked: true }));
          allResults.push(...batchResults);
          setResults(prev => {
            const updated = [...prev];
            for (let j = 0; j < batchResults.length; j++) {
              updated[i + j] = batchResults[j];
            }
            return updated;
          });
          setProgress(i + batchResults.length);
        } else {
          setError(data?.error || "Unknown error");
          break;
        }
      } catch (err: any) {
        setError(`Failed to check URLs: ${err.message}`);
        break;
      }
    }

    setProgress(allUrls.length);
    setChecking(false);
  }, [input]);

  const urls = input.split("\n").filter(u => u.trim());
  const checkedCount = results.filter(r => r.checked).length;
  const errorCount = results.filter(r => r.checked && r.severity === "error").length;
  const warningCount = results.filter(r => r.checked && r.severity === "warning").length;
  const okCount = results.filter(r => r.checked && r.severity === "ok").length;

  const exportCsv = () => {
    const header = "URL,Status Code,Status,Issue,Severity,Redirect URL";
    const rows = results.filter(r => r.checked).map(r =>
      `"${r.url}","${r.statusCode || "N/A"}","${r.status}","${r.issue}","${r.severity}","${r.redirectUrl || ""}"`
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "url-issues-report.csv";
    a.click();
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Enter URLs (one per line)</label>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={"https://example.com\nhttps://example.com/old-page\nhttps://broken-site.xyz/404\nexample.com/missing-page"}
          rows={8}
        />
        <p className="text-xs text-muted-foreground mt-1">{urls.length} URL{urls.length !== 1 ? "s" : ""} entered (max 50 per batch)</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Button onClick={checkUrls} disabled={checking || !urls.length}>
          {checking ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Checking...</> : `Check ${urls.length} URL${urls.length !== 1 ? "s" : ""}`}
        </Button>
        {checkedCount > 0 && !checking && (
          <Button variant="outline" onClick={exportCsv}>
            <FileDown className="h-4 w-4 mr-2" /> Export CSV
          </Button>
        )}
      </div>

      {error && (
        <div className="glass rounded-xl p-4 border-l-4 border-destructive">
          <div className="flex items-start gap-2">
            <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      {checkedCount > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Checked" value={`${checkedCount}/${results.length}`} />
            <StatCard label="OK" value={okCount} />
            <StatCard label="Warnings" value={warningCount} />
            <StatCard label="Errors" value={errorCount} />
          </div>

          {checking && (
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary transition-all" style={{ width: `${(progress / results.length) * 100}%` }} />
            </div>
          )}

          {(errorCount > 0 || warningCount > 0) && !checking && (
            <div className={`glass rounded-xl p-4 border-l-4 ${errorCount > 0 ? "border-destructive" : "border-yellow-500"}`}>
              <div className="flex items-start gap-2">
                <AlertTriangle className={`h-5 w-5 shrink-0 mt-0.5 ${errorCount > 0 ? "text-destructive" : "text-yellow-500"}`} />
                <div>
                  <p className="font-medium text-sm">
                    {errorCount > 0 ? `${errorCount} URL${errorCount !== 1 ? "s" : ""} with errors` : ""}
                    {errorCount > 0 && warningCount > 0 ? " and " : ""}
                    {warningCount > 0 ? `${warningCount} URL${warningCount !== 1 ? "s" : ""} with warnings (redirects/timeouts)` : ""}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Errors include 404 Not Found, soft 404s, DNS failures, and server errors. Warnings include redirects and timeouts.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2">
            {results.map((r, i) => (
              <div key={i} className="glass rounded-xl p-3 flex items-center gap-3">
                <div className="shrink-0">
                  {!r.checked ? (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  ) : r.severity === "ok" ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : r.severity === "warning" ? (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs truncate block hover:text-primary transition-colors">
                      {r.url}
                    </a>
                    {r.statusCode && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        r.statusCode >= 200 && r.statusCode < 300 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        r.statusCode >= 300 && r.statusCode < 400 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>{r.statusCode}</span>
                    )}
                  </div>
                  {r.checked && (
                    <p className={`text-xs mt-0.5 ${
                      r.severity === "ok" ? "text-green-600 dark:text-green-400" :
                      r.severity === "warning" ? "text-yellow-600 dark:text-yellow-400" :
                      "text-destructive"
                    }`}>
                      {r.status} - {r.issue}
                    </p>
                  )}
                  {r.redirectUrl && (
                    <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
                      <ArrowRight className="h-3 w-3" /> {r.redirectUrl}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
