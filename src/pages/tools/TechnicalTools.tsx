import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton, CodeOutput, StatCard, ChecklistItem } from "@/components/tools/ToolUiPrimitives";

export const RobotsTxtGenerator = () => {
  const [sitemap, setSitemap] = useState("");
  const [rules, setRules] = useState([{ agent: "*", disallow: ["/admin/", "/private/"] }]);
  const addRule = () => setRules([...rules, { agent: "*", disallow: [""] }]);
  const output = rules.map(r => `User-agent: ${r.agent}\n${r.disallow.map(d => `Disallow: ${d}`).join("\n")}`).join("\n\n") + (sitemap ? `\n\nSitemap: ${sitemap}` : "");

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {rules.map((rule, ri) => (
          <div key={ri} className="glass rounded-xl p-4 space-y-3">
            <div><label className="text-xs font-medium">User-agent</label><Input value={rule.agent} onChange={e => { const n = [...rules]; n[ri].agent = e.target.value; setRules(n); }} /></div>
            {rule.disallow.map((d, di) => (
              <div key={di} className="flex gap-2">
                <Input value={d} onChange={e => { const n = [...rules]; n[ri].disallow[di] = e.target.value; setRules(n); }} placeholder="/path/" />
                <Button variant="outline" size="sm" onClick={() => { const n = [...rules]; n[ri].disallow.splice(di, 1); setRules(n); }}>×</Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => { const n = [...rules]; n[ri].disallow.push(""); setRules(n); }}>+ Add Path</Button>
          </div>
        ))}
        <Button variant="outline" onClick={addRule}>+ Add User-agent Rule</Button>
        <div><label className="text-sm font-medium mb-1.5 block">Sitemap URL</label><Input value={sitemap} onChange={e => setSitemap(e.target.value)} placeholder="https://example.com/sitemap.xml" /></div>
      </div>
      <CodeOutput code={output} label="robots.txt" />
    </div>
  );
};

export const SitemapGenerator = () => {
  const [urls, setUrls] = useState("");
  const [freq, setFreq] = useState("weekly");
  const [priority, setPriority] = useState("0.8");
  const lines = urls.split("\n").filter(u => u.trim());
  const today = new Date().toISOString().split("T")[0];
  const output = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.map(u => `  <url>\n    <loc>${u.trim()}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;

  return (
    <div className="space-y-6">
      <Textarea value={urls} onChange={e => setUrls(e.target.value)} placeholder="Enter one URL per line..." rows={8} />
      <div className="flex flex-wrap gap-4">
        <div><label className="text-xs font-medium mb-1 block">Frequency</label>
          <select value={freq} onChange={e => setFreq(e.target.value)} className="glass rounded-lg p-2 text-sm">{["always","hourly","daily","weekly","monthly","yearly","never"].map(f => <option key={f}>{f}</option>)}</select>
        </div>
        <div><label className="text-xs font-medium mb-1 block">Priority</label>
          <select value={priority} onChange={e => setPriority(e.target.value)} className="glass rounded-lg p-2 text-sm">{["1.0","0.9","0.8","0.7","0.6","0.5","0.4","0.3","0.2","0.1"].map(p => <option key={p}>{p}</option>)}</select>
        </div>
      </div>
      {lines.length > 0 && <CodeOutput code={output} label={`sitemap.xml (${lines.length} URLs)`} />}
    </div>
  );
};

export const HtaccessRedirectGenerator = () => {
  const [redirects, setRedirects] = useState([{ from: "", to: "", type: "301" }]);
  const add = () => setRedirects([...redirects, { from: "", to: "", type: "301" }]);
  const output = redirects.filter(r => r.from && r.to).map(r => `Redirect ${r.type} ${r.from} ${r.to}`).join("\n");

  return (
    <div className="space-y-6">
      {redirects.map((r, i) => (
        <div key={i} className="glass rounded-xl p-4 flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[150px]"><label className="text-xs font-medium mb-1 block">From</label><Input value={r.from} onChange={e => { const n = [...redirects]; n[i].from = e.target.value; setRedirects(n); }} placeholder="/old-page" /></div>
          <div className="flex-1 min-w-[150px]"><label className="text-xs font-medium mb-1 block">To</label><Input value={r.to} onChange={e => { const n = [...redirects]; n[i].to = e.target.value; setRedirects(n); }} placeholder="https://example.com/new-page" /></div>
          <select value={r.type} onChange={e => { const n = [...redirects]; n[i].type = e.target.value; setRedirects(n); }} className="glass rounded-lg p-2 text-sm"><option value="301">301</option><option value="302">302</option></select>
          <Button variant="outline" size="sm" onClick={() => setRedirects(redirects.filter((_, j) => j !== i))}>×</Button>
        </div>
      ))}
      <Button variant="outline" onClick={add}>+ Add Redirect</Button>
      {output && <CodeOutput code={output} label=".htaccess Redirects" />}
    </div>
  );
};

export const SchemaGenerator = () => {
  const [type, setType] = useState("LocalBusiness");
  const [fields, setFields] = useState<Record<string, string>>({});
  const set = (k: string, v: string) => setFields({ ...fields, [k]: v });
  const schemas: Record<string, { fields: string[]; build: () => object }> = {
    LocalBusiness: { fields: ["name","description","url","phone","street","city","state","zip","country"], build: () => ({ "@context":"https://schema.org","@type":"LocalBusiness",name:fields.name,description:fields.description,url:fields.url,telephone:fields.phone,address:{"@type":"PostalAddress",streetAddress:fields.street,addressLocality:fields.city,addressRegion:fields.state,postalCode:fields.zip,addressCountry:fields.country} }) },
    Article: { fields: ["headline","author","datePublished","dateModified","image","publisher","description"], build: () => ({ "@context":"https://schema.org","@type":"Article",headline:fields.headline,author:{"@type":"Person",name:fields.author},datePublished:fields.datePublished,dateModified:fields.dateModified,image:fields.image,publisher:{"@type":"Organization",name:fields.publisher},description:fields.description }) },
    Product: { fields: ["name","description","image","brand","price","currency","availability","sku"], build: () => ({ "@context":"https://schema.org","@type":"Product",name:fields.name,description:fields.description,image:fields.image,brand:{"@type":"Brand",name:fields.brand},offers:{"@type":"Offer",price:fields.price,priceCurrency:fields.currency||"USD",availability:`https://schema.org/${fields.availability||"InStock"}`},sku:fields.sku }) },
    FAQ: { fields: ["q1","a1","q2","a2","q3","a3"], build: () => ({ "@context":"https://schema.org","@type":"FAQPage",mainEntity:[{q:"q1",a:"a1"},{q:"q2",a:"a2"},{q:"q3",a:"a3"}].filter(x => fields[x.q]).map(x => ({"@type":"Question",name:fields[x.q],acceptedAnswer:{"@type":"Answer",text:fields[x.a]}})) }) },
    HowTo: { fields: ["name","description","step1","step2","step3","step4","totalTime"], build: () => ({ "@context":"https://schema.org","@type":"HowTo",name:fields.name,description:fields.description,totalTime:fields.totalTime,step:["step1","step2","step3","step4"].filter(s => fields[s]).map((s,i) => ({"@type":"HowToStep",position:i+1,text:fields[s]})) }) },
    Organization: { fields: ["name","url","logo","description","email","phone","sameAs"], build: () => ({ "@context":"https://schema.org","@type":"Organization",name:fields.name,url:fields.url,logo:fields.logo,description:fields.description,email:fields.email,telephone:fields.phone,sameAs:fields.sameAs?.split(",").map(s=>s.trim()) }) },
    Person: { fields: ["name","jobTitle","url","image","email","sameAs"], build: () => ({ "@context":"https://schema.org","@type":"Person",name:fields.name,jobTitle:fields.jobTitle,url:fields.url,image:fields.image,email:fields.email,sameAs:fields.sameAs?.split(",").map(s=>s.trim()) }) },
    Event: { fields: ["name","startDate","endDate","location","description","url","organizer"], build: () => ({ "@context":"https://schema.org","@type":"Event",name:fields.name,startDate:fields.startDate,endDate:fields.endDate,location:{"@type":"Place",name:fields.location},description:fields.description,url:fields.url,organizer:{"@type":"Organization",name:fields.organizer} }) },
    Course: { fields: ["name","description","provider","url","price","currency"], build: () => ({ "@context":"https://schema.org","@type":"Course",name:fields.name,description:fields.description,provider:{"@type":"Organization",name:fields.provider},url:fields.url,offers:{"@type":"Offer",price:fields.price,priceCurrency:fields.currency||"USD"} }) },
    JobPosting: { fields: ["title","description","company","location","salary","datePosted","validThrough"], build: () => ({ "@context":"https://schema.org","@type":"JobPosting",title:fields.title,description:fields.description,hiringOrganization:{"@type":"Organization",name:fields.company},jobLocation:{"@type":"Place",name:fields.location},baseSalary:fields.salary,datePosted:fields.datePosted,validThrough:fields.validThrough }) },
  };
  const schema = schemas[type];
  const output = JSON.stringify(schema.build(), null, 2);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {Object.keys(schemas).map(t => (
          <Button key={t} variant={type === t ? "default" : "outline"} size="sm" onClick={() => { setType(t); setFields({}); }}>{t}</Button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {schema.fields.map(f => (
            <div key={f}><label className="text-xs font-medium mb-1 block capitalize">{f.replace(/([A-Z])/g, " $1").replace(/(\d)/g, " $1")}</label>
              <Input value={fields[f] || ""} onChange={e => set(f, e.target.value)} placeholder={f} /></div>
          ))}
        </div>
        <CodeOutput code={output} label={`${type} JSON-LD`} />
      </div>
    </div>
  );
};

export const JsonLdValidator = () => {
  const [input, setInput] = useState("");
  let parsed: any = null;
  let error = "";
  try { if (input) { parsed = JSON.parse(input); } } catch (e: any) { error = e.message; }
  const hasContext = parsed?.["@context"];
  const hasType = parsed?.["@type"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Paste JSON-LD</label>
        <Textarea value={input} onChange={e => setInput(e.target.value)} placeholder='{"@context":"https://schema.org",...}' rows={16} className="resize-none font-mono text-xs" />
      </div>
      <div className="space-y-4">
        {error && <div className="glass rounded-xl p-4 border-l-4 border-l-destructive"><p className="text-sm font-medium text-destructive">Invalid JSON</p><p className="text-xs text-muted-foreground mt-1">{error}</p></div>}
        {parsed && !error && (
          <>
            <div className="glass rounded-xl p-4 border-l-4 border-l-accent"><p className="text-sm font-medium text-accent">Valid JSON ✓</p></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">@context</span><span className={`text-sm ${hasContext ? "text-accent" : "text-destructive"}`}>{hasContext ? "Present ✓" : "Missing ✗"}</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">@type</span><span className={`text-sm ${hasType ? "text-accent" : "text-destructive"}`}>{hasType || "Missing ✗"}</span></div>
            <div><p className="text-sm font-medium mb-2">Parsed Output</p><pre className="glass rounded-xl p-4 text-xs overflow-auto max-h-[300px] whitespace-pre-wrap">{JSON.stringify(parsed, null, 2)}</pre></div>
          </>
        )}
        {!input && <p className="text-sm text-muted-foreground">Paste JSON-LD to validate</p>}
      </div>
    </div>
  );
};

export const HreflangTagGenerator = () => {
  const [entries, setEntries] = useState([{ url: "", lang: "en" }]);
  const add = () => setEntries([...entries, { url: "", lang: "" }]);
  const langs = ["en","ar","fr","de","es","pt","it","nl","da","sv","no","fi","pl","cs","hu","ro","el","tr","ja","ko","he","zh","ru","hi","th"];
  const output = entries.filter(e => e.url && e.lang).map(e => `<link rel="alternate" hreflang="${e.lang}" href="${e.url}" />`).join("\n");

  return (
    <div className="space-y-6">
      {entries.map((e, i) => (
        <div key={i} className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[200px]"><label className="text-xs font-medium mb-1 block">URL</label><Input value={e.url} onChange={ev => { const n = [...entries]; n[i].url = ev.target.value; setEntries(n); }} placeholder="https://example.com/page" /></div>
          <div><label className="text-xs font-medium mb-1 block">Language</label>
            <select value={e.lang} onChange={ev => { const n = [...entries]; n[i].lang = ev.target.value; setEntries(n); }} className="glass rounded-lg p-2 text-sm">{langs.map(l => <option key={l} value={l}>{l}</option>)}</select>
          </div>
          <Button variant="outline" size="sm" onClick={() => setEntries(entries.filter((_, j) => j !== i))}>×</Button>
        </div>
      ))}
      <Button variant="outline" onClick={add}>+ Add Language</Button>
      {output && <CodeOutput code={output} label="Hreflang Tags" />}
    </div>
  );
};

export const SlugGenerator = () => {
  const [text, setText] = useState("");
  const slug = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
  return (
    <div className="space-y-6 max-w-2xl">
      <Input value={text} onChange={e => setText(e.target.value)} placeholder="Enter text to convert to a URL slug..." className="text-lg" />
      {text && (
        <div className="glass rounded-xl p-4 flex justify-between items-center">
          <code className="text-sm text-accent">{slug || "—"}</code>
          <CopyButton text={slug} />
        </div>
      )}
    </div>
  );
};

export const UrlEncoderDecoder = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  let result = "";
  try { result = mode === "encode" ? encodeURIComponent(text) : decodeURIComponent(text); } catch { result = "Invalid input"; }
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex gap-2">
        <Button variant={mode === "encode" ? "default" : "outline"} onClick={() => setMode("encode")}>Encode</Button>
        <Button variant={mode === "decode" ? "default" : "outline"} onClick={() => setMode("decode")}>Decode</Button>
      </div>
      <Textarea value={text} onChange={e => setText(e.target.value)} placeholder={mode === "encode" ? "Enter text to encode..." : "Enter encoded URL to decode..."} rows={4} />
      {text && (
        <div className="glass rounded-xl p-4">
          <div className="flex justify-between mb-2"><span className="text-sm font-medium">Result</span><CopyButton text={result} /></div>
          <p className="text-sm break-all text-muted-foreground">{result}</p>
        </div>
      )}
    </div>
  );
};

const STATUS_CODES: Record<string, { name: string; seo: string }> = {
  "200": { name: "OK", seo: "Page loads correctly. Ideal for all crawlable pages." },
  "201": { name: "Created", seo: "Resource created. Common in API responses." },
  "301": { name: "Moved Permanently", seo: "Passes ~90-99% link equity. Use for permanent URL changes." },
  "302": { name: "Found (Temporary)", seo: "Does NOT pass link equity. Use only for truly temporary redirects." },
  "304": { name: "Not Modified", seo: "Good for caching. Reduces server load." },
  "307": { name: "Temporary Redirect", seo: "Like 302 but preserves HTTP method. No link equity passed." },
  "308": { name: "Permanent Redirect", seo: "Like 301 but preserves HTTP method. Passes link equity." },
  "400": { name: "Bad Request", seo: "Indicates malformed request. Fix crawl errors in Search Console." },
  "401": { name: "Unauthorized", seo: "Page requires authentication. Won't be indexed." },
  "403": { name: "Forbidden", seo: "Access denied. Content won't be indexed by Google." },
  "404": { name: "Not Found", seo: "Soft 404s waste crawl budget. Remove/redirect broken links." },
  "410": { name: "Gone", seo: "Permanently removed. Google will deindex faster than 404." },
  "429": { name: "Too Many Requests", seo: "Rate limiting. Can slow down Googlebot crawling." },
  "500": { name: "Internal Server Error", seo: "Server issue. Persistent 500s will cause deindexing." },
  "502": { name: "Bad Gateway", seo: "Proxy/server issue. Temporary = OK, persistent = bad for SEO." },
  "503": { name: "Service Unavailable", seo: "Maintenance mode. Google will retry. Good for planned downtime." },
};

export const HttpStatusChecker = () => {
  const [code, setCode] = useState("");
  const status = STATUS_CODES[code];
  return (
    <div className="space-y-6 max-w-2xl">
      <Input value={code} onChange={e => setCode(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="Enter HTTP status code (e.g. 301)" className="text-lg" />
      {status && (
        <div className="glass rounded-xl p-6">
          <p className="text-2xl font-bold">{code} — {status.name}</p>
          <p className="text-sm text-muted-foreground mt-3">{status.seo}</p>
        </div>
      )}
      {code && !status && <p className="text-sm text-muted-foreground">Unknown status code. Try common codes like 200, 301, 404, 500.</p>}
      <div>
        <p className="text-sm font-medium mb-3">Common Status Codes</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.entries(STATUS_CODES).map(([c, s]) => (
            <button key={c} onClick={() => setCode(c)} className="glass rounded-lg p-2 text-left hover:bg-accent/5 transition-colors">
              <span className="font-bold text-sm">{c}</span>
              <p className="text-xs text-muted-foreground">{s.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PageSizeCalculator = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [images, setImages] = useState("");
  const vals = [Number(html)||0, Number(css)||0, Number(js)||0, Number(images)||0];
  const total = vals.reduce((a, b) => a + b, 0);
  const rating = total < 500 ? "Excellent" : total < 1000 ? "Good" : total < 2000 ? "Needs Work" : "Too Heavy";

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div><label className="text-xs font-medium mb-1 block">HTML (KB)</label><Input type="number" value={html} onChange={e => setHtml(e.target.value)} placeholder="50" /></div>
        <div><label className="text-xs font-medium mb-1 block">CSS (KB)</label><Input type="number" value={css} onChange={e => setCss(e.target.value)} placeholder="100" /></div>
        <div><label className="text-xs font-medium mb-1 block">JavaScript (KB)</label><Input type="number" value={js} onChange={e => setJs(e.target.value)} placeholder="200" /></div>
        <div><label className="text-xs font-medium mb-1 block">Images (KB)</label><Input type="number" value={images} onChange={e => setImages(e.target.value)} placeholder="500" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StatCard label="Total Size" value={`${total} KB`} />
        <StatCard label="Rating" value={rating} />
        <StatCard label="Est. Load (3G)" value={`${(total / 50).toFixed(1)}s`} />
        <StatCard label="Est. Load (4G)" value={`${(total / 500).toFixed(1)}s`} />
      </div>
    </div>
  );
};

const CWV_DATA = [
  { metric: "LCP (Largest Contentful Paint)", good: "≤ 2.5s", poor: "> 4.0s", desc: "Measures loading performance. The largest image or text block visible in the viewport.", fixes: ["Optimize images (WebP, lazy loading)","Use a CDN","Preload critical resources","Reduce server response time"] },
  { metric: "INP (Interaction to Next Paint)", good: "≤ 200ms", poor: "> 500ms", desc: "Measures responsiveness. The latency of all click, tap, and keyboard interactions.", fixes: ["Break up long tasks","Use web workers","Optimize event handlers","Reduce JavaScript execution"] },
  { metric: "CLS (Cumulative Layout Shift)", good: "≤ 0.1", poor: "> 0.25", desc: "Measures visual stability. How much the page layout shifts during loading.", fixes: ["Set image/video dimensions","Use CSS aspect-ratio","Avoid inserting content above existing","Use transform animations"] },
];

export const CoreWebVitalsGuide = () => {
  const [active, setActive] = useState(0);
  const cwv = CWV_DATA[active];
  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {CWV_DATA.map((c, i) => (
          <Button key={i} variant={active === i ? "default" : "outline"} size="sm" onClick={() => setActive(i)}>{c.metric.split(" ")[0]}</Button>
        ))}
      </div>
      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold">{cwv.metric}</h3>
        <p className="text-sm text-muted-foreground mt-2">{cwv.desc}</p>
        <div className="flex gap-4 mt-4">
          <div className="glass rounded-lg p-3 flex-1 text-center"><p className="text-xs text-muted-foreground">Good</p><p className="text-accent font-bold">{cwv.good}</p></div>
          <div className="glass rounded-lg p-3 flex-1 text-center"><p className="text-xs text-muted-foreground">Poor</p><p className="text-destructive font-bold">{cwv.poor}</p></div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">How to Fix</p>
          <ul className="space-y-1">{cwv.fixes.map((f, i) => <li key={i} className="text-sm text-muted-foreground">• {f}</li>)}</ul>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">Measure with: Google PageSpeed Insights, Chrome DevTools Lighthouse, or Search Console Core Web Vitals report.</p>
    </div>
  );
};

export const PageSpeedAnalyzer = () => {
  const [url, setUrl] = useState("");
  const checks = [
    { label: "Enable text compression (Gzip/Brotli)", impact: "High" },
    { label: "Serve images in next-gen formats (WebP/AVIF)", impact: "High" },
    { label: "Defer offscreen images (lazy loading)", impact: "High" },
    { label: "Minify CSS, JS, and HTML", impact: "Medium" },
    { label: "Eliminate render-blocking resources", impact: "High" },
    { label: "Reduce server response time (TTFB < 200ms)", impact: "High" },
    { label: "Use a CDN for static assets", impact: "Medium" },
    { label: "Preconnect to required origins", impact: "Medium" },
    { label: "Preload key requests (fonts, hero image)", impact: "Medium" },
    { label: "Avoid excessive DOM size (< 1500 nodes)", impact: "Medium" },
    { label: "Reduce JavaScript execution time", impact: "High" },
    { label: "Avoid multiple page redirects", impact: "Low" },
    { label: "Use efficient cache policy (long TTL)", impact: "Medium" },
    { label: "Remove unused CSS/JS", impact: "High" },
    { label: "Set explicit width/height on images", impact: "Low" },
  ];
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => { const n = new Set(checked); n.has(i) ? n.delete(i) : n.add(i); setChecked(n); };
  const pct = Math.round((checked.size / checks.length) * 100);

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Page URL (for reference)</label>
        <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com" />
      </div>
      {url && (
        <div className="glass rounded-xl p-4">
          <a href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline font-medium">→ Run Google PageSpeed Insights for this URL</a>
        </div>
      )}
      <div className="glass rounded-xl p-4 flex items-center justify-between">
        <span className="text-sm font-medium">{checked.size}/{checks.length} optimizations applied</span>
        <span className={`text-lg font-bold ${pct >= 80 ? "text-accent" : pct >= 50 ? "text-yellow-500" : "text-destructive"}`}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div className="h-full bg-accent transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="space-y-2 max-h-[500px] overflow-auto">
        {checks.map((item, i) => (
          <label key={i} className="flex items-start gap-3 p-3 glass rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
            <input type="checkbox" checked={checked.has(i)} onChange={() => toggle(i)} className="mt-1 rounded border-border" />
            <div className="flex-1">
              <span className={checked.has(i) ? "line-through text-muted-foreground" : ""}>{item.label}</span>
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${item.impact === "High" ? "bg-destructive/10 text-destructive" : item.impact === "Medium" ? "bg-yellow-500/10 text-yellow-600" : "bg-muted text-muted-foreground"}`}>{item.impact}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export const XmlToUrlConverter = () => {
  const [xml, setXml] = useState("");
  const urlPattern = /<loc>\s*(.*?)\s*<\/loc>/gi;
  const urls: string[] = [];
  let match;
  const xmlCopy = xml;
  while ((match = urlPattern.exec(xmlCopy)) !== null) {
    urls.push(match[1]);
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Paste XML Sitemap Content</label>
        <Textarea value={xml} onChange={e => setXml(e.target.value)} placeholder={'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://example.com/</loc></url>\n  <url><loc>https://example.com/about</loc></url>\n</urlset>'} rows={10} className="font-mono text-xs" />
      </div>
      {urls.length > 0 && (
        <div>
          <div className="flex justify-between mb-3">
            <p className="text-sm font-medium">{urls.length} URLs extracted</p>
            <CopyButton text={urls.join("\n")} />
          </div>
          <div className="space-y-1 max-h-[400px] overflow-auto">
            {urls.map((u, i) => (
              <div key={i} className="glass rounded-lg p-2 text-sm flex justify-between items-center">
                <a href={u} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline truncate flex-1">{u}</a>
                <CopyButton text={u} />
              </div>
            ))}
          </div>
        </div>
      )}
      {xml && urls.length === 0 && <p className="text-sm text-muted-foreground">No {"<loc>"} tags found. Paste valid XML sitemap content.</p>}
    </div>
  );
};
