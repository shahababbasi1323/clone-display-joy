import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyButton, ChecklistItem, StatCard } from "@/components/tools/ToolUiPrimitives";

export const CtaGenerator = () => {
  const [pageType, setPageType] = useState("");
  const [goal, setGoal] = useState("");
  const templates = [
    ["Get Started","Start Free Trial","Sign Up Free","Join Now","Create Account"],
    ["Buy Now","Shop Now","Order Today","Get Yours","Grab the Deal"],
    ["Learn More","Read More","Discover How","See Details","Explore"],
    ["Download Free","Get Your Copy","Access Now","Claim Free Guide","Download PDF"],
    ["Book a Call","Schedule Demo","Get Free Quote","Talk to Expert","Request Consultation"],
    ["Subscribe","Join Newsletter","Stay Updated","Get Weekly Tips","Follow Us"],
  ];
  const ctas = pageType || goal ? [
    `Get Your Free ${pageType || "Consultation"} Now`,
    `Start ${goal || "Growing"} Today`,
    `Yes, I Want ${pageType || "Results"}!`,
    `Book Your Free ${pageType || "Strategy"} Call`,
    `Claim Your ${pageType || "Free"} ${goal || "Audit"}`,
    `Let's ${goal || "Get Started"} →`,
    `Ready to ${goal || "Grow"}? Contact Us`,
    `Get ${pageType || "Professional"} Help Now`,
    ...templates[Math.floor(Math.random() * templates.length)],
  ] : [];

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="text-sm font-medium mb-1 block">Page Type / Offer</label><Input value={pageType} onChange={e => setPageType(e.target.value)} placeholder="e.g. SEO Audit, Free Trial" /></div>
        <div><label className="text-sm font-medium mb-1 block">Goal / Action</label><Input value={goal} onChange={e => setGoal(e.target.value)} placeholder="e.g. boost rankings, save time" /></div>
      </div>
      {ctas.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ctas.map((cta, i) => (
            <div key={i} className="glass rounded-lg p-3 flex justify-between items-center">
              <span className="text-sm font-medium">{cta}</span>
              <CopyButton text={cta} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const AbTestDurationCalculator = () => {
  const [traffic, setTraffic] = useState("");
  const [convRate, setConvRate] = useState("");
  const [mde, setMde] = useState("");
  const t = Number(traffic) || 0;
  const cr = (Number(convRate) || 0) / 100;
  const effect = (Number(mde) || 0) / 100;
  // Simplified sample size calculation
  const sampleSize = cr > 0 && effect > 0 ? Math.ceil((16 * cr * (1 - cr)) / (effect * cr) ** 2) * 2 : 0;
  const days = t > 0 && sampleSize > 0 ? Math.ceil(sampleSize / t) : 0;

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-3 gap-4">
        <div><label className="text-xs font-medium mb-1 block">Daily Traffic</label><Input type="number" value={traffic} onChange={e => setTraffic(e.target.value)} placeholder="1000" /></div>
        <div><label className="text-xs font-medium mb-1 block">Conversion Rate (%)</label><Input type="number" value={convRate} onChange={e => setConvRate(e.target.value)} placeholder="3" /></div>
        <div><label className="text-xs font-medium mb-1 block">Min. Detectable Effect (%)</label><Input type="number" value={mde} onChange={e => setMde(e.target.value)} placeholder="10" /></div>
      </div>
      {days > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <StatCard label="Sample Size Needed" value={sampleSize.toLocaleString()} />
          <StatCard label="Test Duration" value={`${days} days`} />
          <StatCard label="Weeks" value={`${Math.ceil(days / 7)} weeks`} />
        </div>
      )}
      <p className="text-xs text-muted-foreground">💡 Always run tests for at least 1-2 full business cycles (weeks). Avoid stopping tests early.</p>
    </div>
  );
};

export const ColorContrastChecker = () => {
  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#ffffff");
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return [r, g, b].map(c => c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  };
  const luminance = (rgb: number[]) => 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  const l1 = luminance(hexToRgb(fg));
  const l2 = luminance(hexToRgb(bg));
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const aaSmall = ratio >= 4.5;
  const aaLarge = ratio >= 3;
  const aaaSmall = ratio >= 7;
  const aaaLarge = ratio >= 4.5;

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div><label className="text-sm font-medium mb-1.5 block">Text Color</label>
          <div className="flex gap-2"><input type="color" value={fg} onChange={e => setFg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" /><Input value={fg} onChange={e => setFg(e.target.value)} /></div>
        </div>
        <div><label className="text-sm font-medium mb-1.5 block">Background Color</label>
          <div className="flex gap-2"><input type="color" value={bg} onChange={e => setBg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" /><Input value={bg} onChange={e => setBg(e.target.value)} /></div>
        </div>
      </div>
      <div className="rounded-xl p-8 text-center" style={{ backgroundColor: bg, color: fg }}>
        <p className="text-2xl font-bold">Sample Text</p>
        <p className="text-sm mt-2">This is how your text will look with these colors.</p>
      </div>
      <div className="glass rounded-xl p-4 text-center">
        <p className="text-sm text-muted-foreground">Contrast Ratio</p>
        <p className="text-3xl font-bold">{ratio.toFixed(2)}:1</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className={`glass rounded-lg p-3 text-center ${aaSmall ? "border border-accent" : "border border-destructive"}`}><p className="text-xs text-muted-foreground">AA Small Text</p><p className={`font-bold ${aaSmall ? "text-accent" : "text-destructive"}`}>{aaSmall ? "PASS" : "FAIL"}</p></div>
        <div className={`glass rounded-lg p-3 text-center ${aaLarge ? "border border-accent" : "border border-destructive"}`}><p className="text-xs text-muted-foreground">AA Large Text</p><p className={`font-bold ${aaLarge ? "text-accent" : "text-destructive"}`}>{aaLarge ? "PASS" : "FAIL"}</p></div>
        <div className={`glass rounded-lg p-3 text-center ${aaaSmall ? "border border-accent" : "border border-destructive"}`}><p className="text-xs text-muted-foreground">AAA Small Text</p><p className={`font-bold ${aaaSmall ? "text-accent" : "text-destructive"}`}>{aaaSmall ? "PASS" : "FAIL"}</p></div>
        <div className={`glass rounded-lg p-3 text-center ${aaaLarge ? "border border-accent" : "border border-destructive"}`}><p className="text-xs text-muted-foreground">AAA Large Text</p><p className={`font-bold ${aaaLarge ? "text-accent" : "text-destructive"}`}>{aaaLarge ? "PASS" : "FAIL"}</p></div>
      </div>
    </div>
  );
};

const SPEED_ITEMS = [
  "Enable GZIP/Brotli compression","Minify CSS files","Minify JavaScript files","Minify HTML","Optimize images (WebP format)","Lazy load images and iframes","Use a CDN","Enable browser caching","Reduce server response time (TTFB < 200ms)","Eliminate render-blocking resources","Preload critical resources (fonts, hero image)","Use efficient CSS selectors","Remove unused CSS","Remove unused JavaScript","Defer non-critical JavaScript","Optimize web fonts (woff2, display:swap)","Reduce DOM size (< 1500 nodes)","Avoid excessive redirects","Use HTTP/2 or HTTP/3","Optimize third-party scripts","Set image dimensions (width/height)","Use srcset for responsive images","Implement critical CSS inlining","Reduce cookie size","Optimize database queries (server-side)",
];

export const PageSpeedChecklist = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => { const n = new Set(checked); n.has(i) ? n.delete(i) : n.add(i); setChecked(n); };
  const pct = Math.round((checked.size / SPEED_ITEMS.length) * 100);

  return (
    <div className="space-y-6">
      <div className="glass rounded-xl p-4 flex items-center justify-between">
        <span className="text-sm font-medium">{checked.size}/{SPEED_ITEMS.length} optimizations</span>
        <span className={`text-lg font-bold ${pct >= 80 ? "text-accent" : pct >= 50 ? "text-yellow-500" : "text-destructive"}`}>{pct}%</span>
      </div>
      <div className="space-y-2 max-h-[500px] overflow-auto">{SPEED_ITEMS.map((item, i) => <ChecklistItem key={i} label={item} checked={checked.has(i)} onChange={() => toggle(i)} />)}</div>
    </div>
  );
};
