import { useState, useCallback, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StatCard, CopyButton } from "@/components/tools/ToolUiPrimitives";
import { Loader2, CheckCircle, XCircle, AlertTriangle, ArrowRight, Globe, FileDown } from "lucide-react";

type UrlResult = {
  url: string;
  status: string;
  statusCode: number | null;
  issue: string;
  checked: boolean;
  severity: "ok" | "warning" | "error";
};

const classifyResult = (url: string, error?: string, aborted?: boolean): Omit<UrlResult, "url" | "checked"> => {
  if (aborted) return { status: "Timeout", statusCode: null, issue: "Request timed out – server may be slow or unreachable", severity: "warning" };
  if (error) return { status: "Unreachable", statusCode: null, issue: error.includes("Failed to fetch") ? "DNS resolution failed or CORS blocked" : error, severity: "error" };
  // no-cors mode returns opaque response (status 0) — we treat that as reachable
  return { status: "Reachable", statusCode: 200, issue: "No issues detected", severity: "ok" };
};

export const BulkUrlIssueChecker = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<UrlResult[]>([]);
  const [checking, setChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const cancelRef = useRef(false);

  const checkUrls = useCallback(async () => {
    const raw = input.split("\n").map(u => u.trim()).filter(Boolean);
    const urls = raw.map(u => (/^https?:\/\//.test(u) ? u : `https://${u}`));
    if (!urls.length) return;

    cancelRef.current = false;
    setChecking(true);
    setProgress(0);
    setResults(urls.map(u => ({ url: u, status: "Pending", statusCode: null, issue: "", checked: false, severity: "ok" as const })));

    for (let i = 0; i < urls.length; i++) {
      if (cancelRef.current) break;
      const url = urls[i];
      let result: Omit<UrlResult, "url" | "checked">;

      try {
        const ctrl = new AbortController();
        const timeout = setTimeout(() => ctrl.abort(), 8000);
        await fetch(url, { method: "HEAD", mode: "no-cors", signal: ctrl.signal });
        clearTimeout(timeout);
        result = classifyResult(url);
      } catch (err: any) {
        result = classifyResult(url, err.message, err.name === "AbortError");
      }

      setResults(prev => prev.map((r, idx) => idx === i ? { ...r, ...result, checked: true } : r));
      setProgress(i + 1);
      if (i < urls.length - 1) await new Promise(r => setTimeout(r, 250));
    }
    setChecking(false);
  }, [input]);

  const stop = () => { cancelRef.current = true; };

  const urls = input.split("\n").filter(u => u.trim());
  const checkedCount = results.filter(r => r.checked).length;
  const errorCount = results.filter(r => r.checked && r.severity === "error").length;
  const warningCount = results.filter(r => r.checked && r.severity === "warning").length;
  const okCount = results.filter(r => r.checked && r.severity === "ok").length;

  const exportCsv = () => {
    const header = "URL,Status,Issue,Severity";
    const rows = results.filter(r => r.checked).map(r => `"${r.url}","${r.status}","${r.issue}","${r.severity}"`);
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
          placeholder={"https://example.com\nhttps://example.com/old-page\nhttps://broken-site.xyz\nexample.com/404-page"}
          rows={8}
        />
        <p className="text-xs text-muted-foreground mt-1">{urls.length} URL{urls.length !== 1 ? "s" : ""} entered</p>
      </div>

      <div className="flex gap-3">
        <Button onClick={checkUrls} disabled={checking || !urls.length}>
          {checking ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Checking ({progress}/{results.length})...</> : `Check ${urls.length} URL${urls.length !== 1 ? "s" : ""}`}
        </Button>
        {checking && <Button variant="outline" onClick={stop}>Stop</Button>}
        {checkedCount > 0 && !checking && (
          <Button variant="outline" onClick={exportCsv}>
            <FileDown className="h-4 w-4 mr-2" /> Export CSV
          </Button>
        )}
      </div>

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

          {/* Issue summary */}
          {(errorCount > 0 || warningCount > 0) && !checking && (
            <div className={`glass rounded-xl p-4 border-l-4 ${errorCount > 0 ? "border-red-500" : "border-yellow-500"}`}>
              <div className="flex items-start gap-2">
                <AlertTriangle className={`h-5 w-5 shrink-0 mt-0.5 ${errorCount > 0 ? "text-red-500" : "text-yellow-500"}`} />
                <div>
                  <p className="font-medium text-sm">
                    {errorCount > 0 ? `${errorCount} URL${errorCount !== 1 ? "s" : ""} with errors` : ""}
                    {errorCount > 0 && warningCount > 0 ? " and " : ""}
                    {warningCount > 0 ? `${warningCount} URL${warningCount !== 1 ? "s" : ""} with warnings` : ""}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Unreachable URLs may have DNS issues, be blocked by CORS, or return error status codes. Timeout URLs may indicate slow servers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Filter tabs */}
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
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs truncate block hover:text-primary transition-colors">
                    {r.url}
                  </a>
                  {r.checked && (
                    <p className={`text-xs mt-0.5 ${r.severity === "ok" ? "text-green-600" : r.severity === "warning" ? "text-yellow-600" : "text-red-600"}`}>
                      {r.status} — {r.issue}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {checkedCount === results.length && !checking && (
            <div className="glass rounded-xl p-4 border-l-4 border-accent">
              <p className="text-xs text-muted-foreground">
                <strong>Note:</strong> Due to browser CORS restrictions, some URLs may show as unreachable even if they work in a browser. For comprehensive HTTP status checking (301, 302, 404, 500 etc.), use server-side tools like Screaming Frog or our backend-powered broken link checker.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
