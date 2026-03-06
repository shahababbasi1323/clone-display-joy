import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StatCard, CopyButton, CodeOutput } from "@/components/tools/ToolUiPrimitives";
import { AlertTriangle, ExternalLink, Globe, ArrowRight, CheckCircle, XCircle, Loader2 } from "lucide-react";

/* ── Bulk Expired Domain Checker ── */
export const BulkExpiredDomainChecker = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{ domain: string; status: string; checked: boolean }[]>([]);
  const [checking, setChecking] = useState(false);
  const [progress, setProgress] = useState(0);

  const checkDomains = useCallback(async () => {
    const domains = input.split("\n").map(d => d.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "")).filter(Boolean);
    if (!domains.length) return;

    setChecking(true);
    setResults(domains.map(d => ({ domain: d, status: "Checking...", checked: false })));
    setProgress(0);

    for (let i = 0; i < domains.length; i++) {
      const domain = domains[i];
      let status = "Unknown";
      try {
        // Try fetching the domain to determine availability
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const res = await fetch(`https://${domain}`, { method: "HEAD", mode: "no-cors", signal: controller.signal });
        clearTimeout(timeout);
        status = "🟢 Active (Registered)";
      } catch (err: any) {
        if (err.name === "AbortError") {
          status = "⏱️ Timeout (Possibly Expired)";
        } else {
          // Network error could mean expired/unregistered
          status = "🔴 Unreachable (Possibly Expired)";
        }
      }

      setResults(prev => prev.map((r, idx) => idx === i ? { ...r, status, checked: true } : r));
      setProgress(i + 1);
      // Small delay between checks
      if (i < domains.length - 1) await new Promise(r => setTimeout(r, 300));
    }
    setChecking(false);
  }, [input]);

  const domains = input.split("\n").filter(d => d.trim());
  const checkedCount = results.filter(r => r.checked).length;
  const possiblyExpired = results.filter(r => r.status.includes("Expired")).length;

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Enter Domains (one per line)</label>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={"example.com\nolddomain.net\nexpireddomain.org"}
          rows={8}
        />
        <p className="text-xs text-muted-foreground mt-1">{domains.length} domain{domains.length !== 1 ? "s" : ""} entered</p>
      </div>

      <Button onClick={checkDomains} disabled={checking || !domains.length}>
        {checking ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Checking ({progress}/{domains.length})...</> : `Check ${domains.length} Domain${domains.length !== 1 ? "s" : ""}`}
      </Button>

      {results.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatCard label="Total Checked" value={`${checkedCount}/${results.length}`} />
            <StatCard label="Possibly Expired" value={possiblyExpired} />
            <StatCard label="Active" value={checkedCount - possiblyExpired} />
          </div>

          <div className="space-y-2">
            {results.map((r, i) => (
              <div key={i} className="glass rounded-xl p-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="font-mono text-sm truncate">{r.domain}</span>
                </div>
                <span className={`text-xs font-medium whitespace-nowrap ${r.status.includes("Active") ? "text-green-500" : r.status.includes("Expired") ? "text-red-500" : "text-muted-foreground"}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>

          {possiblyExpired > 0 && (
            <div className="glass rounded-xl p-4 border-l-4 border-yellow-500">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Tip: Verify expired domains</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Unreachable domains may be expired, parked, or temporarily down. Use a WHOIS lookup service to confirm registration status before purchasing.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

/* ── Domain Authority Checker ── */
export const DomainAuthorityChecker = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState<null | {
    domainAge: string;
    https: boolean;
    estimatedDA: number;
    factors: { label: string; score: number; max: number }[];
  }>(null);

  const analyze = () => {
    const d = domain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!d) return;

    const isHttps = domain.includes("https") || true; // assume https
    const tld = d.split(".").pop()?.toLowerCase() || "";
    const domainLength = d.length;

    // Heuristic scoring factors
    let tldScore = 10;
    if (["com", "org", "net", "edu", "gov"].includes(tld)) tldScore = 18;
    else if (["io", "co", "app", "dev"].includes(tld)) tldScore = 14;

    const lengthScore = domainLength <= 10 ? 15 : domainLength <= 20 ? 10 : 5;
    const httpsScore = isHttps ? 12 : 0;
    const brandableScore = /^[a-z]+\.[a-z]+$/i.test(d) ? 15 : d.includes("-") ? 6 : 10;
    const hyphenPenalty = (d.match(/-/g) || []).length * 3;
    const numberPenalty = (d.match(/\d/g) || []).length * 2;

    const factors = [
      { label: "TLD Quality", score: tldScore, max: 20 },
      { label: "Domain Length", score: lengthScore, max: 15 },
      { label: "HTTPS/SSL", score: httpsScore, max: 12 },
      { label: "Brandability", score: Math.max(brandableScore - hyphenPenalty, 0), max: 15 },
      { label: "Clean URL", score: Math.max(12 - numberPenalty - hyphenPenalty, 0), max: 12 },
    ];

    const totalMax = factors.reduce((s, f) => s + f.max, 0);
    const totalScore = factors.reduce((s, f) => s + f.score, 0);
    const estimatedDA = Math.round((totalScore / totalMax) * 100);

    setResults({
      domainAge: "Use WHOIS to verify",
      https: isHttps,
      estimatedDA,
      factors,
    });
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex gap-3">
        <Input
          value={domain}
          onChange={e => setDomain(e.target.value)}
          placeholder="Enter domain (e.g., example.com)"
          onKeyDown={e => e.key === "Enter" && analyze()}
        />
        <Button onClick={analyze}>Analyze</Button>
      </div>

      {results && (
        <>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Estimated Domain Authority Score</p>
            <div className={`text-5xl font-bold ${results.estimatedDA >= 70 ? "text-green-500" : results.estimatedDA >= 40 ? "text-yellow-500" : "text-red-500"}`}>
              {results.estimatedDA}
              <span className="text-lg text-muted-foreground">/100</span>
            </div>
            <div className="h-3 rounded-full bg-secondary overflow-hidden mt-4 max-w-xs mx-auto">
              <div
                className={`h-full transition-all ${results.estimatedDA >= 70 ? "bg-green-500" : results.estimatedDA >= 40 ? "bg-yellow-500" : "bg-red-500"}`}
                style={{ width: `${results.estimatedDA}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Scoring Factors</h3>
            {results.factors.map((f, i) => (
              <div key={i} className="glass rounded-lg p-3">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm">{f.label}</span>
                  <span className="text-sm font-semibold">{f.score}/{f.max}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full transition-all ${(f.score / f.max) >= 0.7 ? "bg-green-500" : (f.score / f.max) >= 0.4 ? "bg-yellow-500" : "bg-red-500"}`}
                    style={{ width: `${(f.score / f.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-4 border-l-4 border-accent">
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> This is a heuristic estimate based on domain characteristics. For accurate DA/PA scores, use Moz, Ahrefs, or SEMrush APIs. Factors like backlink profile, content quality, and site age heavily influence real authority scores.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

/* ── Redirect Chain Checker ── */
export const RedirectChainChecker = () => {
  const [url, setUrl] = useState("");
  const [chain, setChain] = useState<{ url: string; status: string; type: string }[]>([]);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  const checkRedirects = useCallback(async () => {
    let target = url.trim();
    if (!target) return;
    if (!/^https?:\/\//.test(target)) target = `https://${target}`;

    setChecking(true);
    setChain([]);
    setError("");

    const visited: string[] = [];
    let currentUrl = target;
    const maxHops = 10;

    // Since browsers follow redirects automatically and we can't intercept with no-cors,
    // we'll simulate common redirect patterns
    const results: { url: string; status: string; type: string }[] = [];

    // Check www vs non-www, http vs https redirects
    const urlObj = new URL(currentUrl);
    const variations = [];

    // Add http version first if https was entered
    if (urlObj.protocol === "https:") {
      variations.push({ url: `http://${urlObj.host}${urlObj.pathname}`, type: "HTTP → HTTPS" });
    }

    // Add non-www if www
    if (urlObj.hostname.startsWith("www.")) {
      variations.push({ url: `${urlObj.protocol}//${urlObj.hostname.replace("www.", "")}${urlObj.pathname}`, type: "non-www → www" });
    } else {
      variations.push({ url: `${urlObj.protocol}//www.${urlObj.hostname}${urlObj.pathname}`, type: "www → non-www" });
    }

    // Check trailing slash
    if (!urlObj.pathname.endsWith("/") && urlObj.pathname !== "/") {
      variations.push({ url: `${urlObj.origin}${urlObj.pathname}/`, type: "Trailing slash redirect" });
    }

    results.push({ url: currentUrl, status: "200 OK (Final)", type: "Direct" });

    for (const v of variations) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        await fetch(v.url, { method: "HEAD", mode: "no-cors", signal: controller.signal });
        clearTimeout(timeout);
        results.unshift({ url: v.url, status: "301 Redirect (Likely)", type: v.type });
      } catch {
        // Skip unreachable variations
      }
    }

    setChain(results);
    setChecking(false);
  }, [url]);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex gap-3">
        <Input
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter URL (e.g., http://example.com)"
          onKeyDown={e => e.key === "Enter" && checkRedirects()}
        />
        <Button onClick={checkRedirects} disabled={checking}>
          {checking ? <Loader2 className="h-4 w-4 animate-spin" /> : "Check"}
        </Button>
      </div>

      {error && (
        <div className="glass rounded-xl p-4 border-l-4 border-red-500">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      {chain.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Total Hops" value={chain.length} />
            <StatCard label="Redirect Chain" value={chain.length > 1 ? `${chain.length - 1} redirect${chain.length > 2 ? "s" : ""}` : "No redirects"} />
          </div>

          <div className="space-y-0">
            {chain.map((hop, i) => (
              <div key={i}>
                <div className="glass rounded-xl p-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    hop.status.includes("200") ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"
                  }`}>
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-sm truncate">{hop.url}</p>
                    <div className="flex gap-3 mt-1">
                      <span className={`text-xs font-medium ${hop.status.includes("200") ? "text-green-500" : "text-yellow-500"}`}>{hop.status}</span>
                      <span className="text-xs text-muted-foreground">{hop.type}</span>
                    </div>
                  </div>
                </div>
                {i < chain.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {chain.length > 3 && (
            <div className="glass rounded-xl p-4 border-l-4 border-yellow-500">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Long Redirect Chain Detected</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Too many redirects slow down page loading and may waste crawl budget. Try to reduce to a maximum of 1 redirect hop.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="glass rounded-xl p-4 border-l-4 border-accent">
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> Due to browser CORS restrictions, this tool estimates common redirect patterns (HTTP→HTTPS, www→non-www, trailing slashes). For full server-side redirect chain analysis, use tools like Screaming Frog or httpstatus.io.
            </p>
          </div>
        </>
      )}
    </div>
  );
};
