import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatCard, CopyButton } from "@/components/tools/ToolUiPrimitives";

export const SeoRoiCalculator = () => {
  const [traffic, setTraffic] = useState("");
  const [convRate, setConvRate] = useState("");
  const [orderValue, setOrderValue] = useState("");
  const [seoCost, setSeoCost] = useState("");
  const t = Number(traffic) || 0;
  const cr = (Number(convRate) || 0) / 100;
  const aov = Number(orderValue) || 0;
  const cost = Number(seoCost) || 0;
  const revenue = t * cr * aov;
  const profit = revenue - cost;
  const roi = cost > 0 ? ((profit / cost) * 100) : 0;
  const breakeven = revenue > 0 ? Math.ceil(cost / (revenue / 12)) : 0;

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div><label className="text-xs font-medium mb-1 block">Monthly Organic Traffic</label><Input type="number" value={traffic} onChange={e => setTraffic(e.target.value)} placeholder="10000" /></div>
        <div><label className="text-xs font-medium mb-1 block">Conversion Rate (%)</label><Input type="number" value={convRate} onChange={e => setConvRate(e.target.value)} placeholder="2.5" /></div>
        <div><label className="text-xs font-medium mb-1 block">Avg Order Value ($)</label><Input type="number" value={orderValue} onChange={e => setOrderValue(e.target.value)} placeholder="100" /></div>
        <div><label className="text-xs font-medium mb-1 block">Monthly SEO Cost ($)</label><Input type="number" value={seoCost} onChange={e => setSeoCost(e.target.value)} placeholder="2000" /></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Monthly Revenue" value={`$${revenue.toLocaleString()}`} />
        <StatCard label="Monthly Profit" value={`$${profit.toLocaleString()}`} />
        <StatCard label="ROI" value={`${roi.toFixed(0)}%`} />
        <StatCard label="Break-even" value={breakeven > 0 ? `${breakeven} months` : "-"} />
      </div>
    </div>
  );
};

export const CpcSavingsCalculator = () => {
  const [keywords, setKeywords] = useState([{ keyword: "", volume: "", cpc: "" }]);
  const add = () => setKeywords([...keywords, { keyword: "", volume: "", cpc: "" }]);
  const totalMonthly = keywords.reduce((a, k) => a + (Number(k.volume) || 0) * (Number(k.cpc) || 0), 0);
  const totalYearly = totalMonthly * 12;

  return (
    <div className="space-y-6">
      {keywords.map((k, i) => (
        <div key={i} className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[150px]"><label className="text-xs font-medium mb-1 block">Keyword</label><Input value={k.keyword} onChange={e => { const n = [...keywords]; n[i].keyword = e.target.value; setKeywords(n); }} placeholder="seo services" /></div>
          <div className="w-28"><label className="text-xs font-medium mb-1 block">Monthly Vol</label><Input type="number" value={k.volume} onChange={e => { const n = [...keywords]; n[i].volume = e.target.value; setKeywords(n); }} placeholder="1000" /></div>
          <div className="w-24"><label className="text-xs font-medium mb-1 block">CPC ($)</label><Input type="number" value={k.cpc} onChange={e => { const n = [...keywords]; n[i].cpc = e.target.value; setKeywords(n); }} placeholder="5.00" /></div>
          <Button variant="outline" size="sm" onClick={() => setKeywords(keywords.filter((_, j) => j !== i))}>×</Button>
        </div>
      ))}
      <Button variant="outline" onClick={add}>+ Add Keyword</Button>
      <div className="grid grid-cols-2 gap-4">
        <StatCard label="Monthly PPC Cost" value={`$${totalMonthly.toLocaleString()}`} />
        <StatCard label="Yearly PPC Cost" value={`$${totalYearly.toLocaleString()}`} />
        <StatCard label="SEO Savings (Monthly)" value={`$${totalMonthly.toLocaleString()}`} />
        <StatCard label="SEO Savings (Yearly)" value={`$${totalYearly.toLocaleString()}`} />
      </div>
    </div>
  );
};

export const DomainAgeChecker = () => {
  const [domain, setDomain] = useState("");
  return (
    <div className="space-y-6 max-w-2xl">
      <Input value={domain} onChange={e => setDomain(e.target.value)} placeholder="Enter domain (e.g. example.com)" className="text-lg" />
      {domain && (
        <div className="space-y-4">
          <div className="glass rounded-xl p-4">
            <p className="text-sm font-medium mb-3">How to check domain age:</p>
            <div className="space-y-3">
              <div className="glass rounded-lg p-3">
                <p className="text-sm font-medium">1. WHOIS Lookup</p>
                <a href={`https://who.is/whois/${encodeURIComponent(domain)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">Check on who.is →</a>
              </div>
              <div className="glass rounded-lg p-3">
                <p className="text-sm font-medium">2. Wayback Machine</p>
                <a href={`https://web.archive.org/web/*/${encodeURIComponent(domain)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">View history on archive.org →</a>
              </div>
              <div className="glass rounded-lg p-3">
                <p className="text-sm font-medium">3. ICANN Lookup</p>
                <a href={`https://lookup.icann.org/lookup?name=${encodeURIComponent(domain)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">Check on ICANN →</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Older domains with clean history typically have more trust and authority in search engines.</p>
        </div>
      )}
    </div>
  );
};

export const WebsiteCostEstimator = () => {
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState<Set<string>>(new Set());
  const featureList = [
    { name: "CMS (WordPress/similar)", cost: 500 },
    { name: "E-commerce", cost: 2000 },
    { name: "User Authentication", cost: 800 },
    { name: "Blog/News", cost: 400 },
    { name: "Contact Forms", cost: 200 },
    { name: "Search Functionality", cost: 500 },
    { name: "Multi-language", cost: 1500 },
    { name: "API Integrations", cost: 1000 },
    { name: "Custom Design", cost: 2000 },
    { name: "SEO Optimization", cost: 500 },
    { name: "Analytics Setup", cost: 300 },
    { name: "SSL Certificate", cost: 100 },
  ];
  const toggle = (name: string) => { const n = new Set(features); n.has(name) ? n.delete(name) : n.add(name); setFeatures(n); };
  const baseCost = pages * 200;
  const featureCost = featureList.filter(f => features.has(f.name)).reduce((a, f) => a + f.cost, 0);
  const total = baseCost + featureCost;
  const low = Math.round(total * 0.7);
  const high = Math.round(total * 1.5);

  return (
    <div className="space-y-6 max-w-2xl">
      <div><label className="text-sm font-medium mb-1.5 block">Number of Pages</label>
        <Input type="number" value={pages} onChange={e => setPages(Math.max(1, Number(e.target.value)))} /></div>
      <div>
        <p className="text-sm font-medium mb-3">Select Features</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {featureList.map(f => (
            <label key={f.name} className="glass rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-accent/5">
              <input type="checkbox" checked={features.has(f.name)} onChange={() => toggle(f.name)} className="rounded" />
              <span className="text-sm flex-1">{f.name}</span>
              <span className="text-xs text-muted-foreground">+${f.cost}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="glass rounded-xl p-6 text-center">
        <p className="text-sm text-muted-foreground mb-2">Estimated Cost Range</p>
        <p className="text-3xl font-bold text-accent">${low.toLocaleString()} - ${high.toLocaleString()}</p>
        <p className="text-xs text-muted-foreground mt-2">Base: ${baseCost} ({pages} pages) + Features: ${featureCost}</p>
      </div>
    </div>
  );
};
