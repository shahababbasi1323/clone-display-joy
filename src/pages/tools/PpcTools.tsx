import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StatCard, CopyButton, ChecklistItem, ScoreDisplay } from "@/components/tools/ToolUiPrimitives";

/* ──────────── Google Ads Budget Calculator ──────────── */
export const GoogleAdsBudgetCalculator = () => {
  const [dailyBudget, setDailyBudget] = useState("");
  const [avgCpc, setAvgCpc] = useState("");
  const [convRate, setConvRate] = useState("");
  const [avgOrderValue, setAvgOrderValue] = useState("");

  const daily = Number(dailyBudget) || 0;
  const cpc = Number(avgCpc) || 0;
  const cr = (Number(convRate) || 0) / 100;
  const aov = Number(avgOrderValue) || 0;

  const monthlyBudget = daily * 30.4;
  const dailyClicks = cpc > 0 ? Math.floor(daily / cpc) : 0;
  const monthlyClicks = Math.floor(dailyClicks * 30.4);
  const monthlyConversions = Math.floor(monthlyClicks * cr);
  const monthlyRevenue = monthlyConversions * aov;
  const roas = monthlyBudget > 0 ? monthlyRevenue / monthlyBudget : 0;
  const costPerConversion = monthlyConversions > 0 ? monthlyBudget / monthlyConversions : 0;

  return (
    <div className="space-y-6 max-w-2xl">
      <p className="text-sm text-muted-foreground">
        Plan your Google Ads budget by estimating clicks, conversions, and revenue based on your campaign metrics.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium mb-1 block">Daily Budget ($)</label>
          <Input type="number" value={dailyBudget} onChange={e => setDailyBudget(e.target.value)} placeholder="50" min="0" />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Average CPC ($)</label>
          <Input type="number" value={avgCpc} onChange={e => setAvgCpc(e.target.value)} placeholder="2.50" min="0" step="0.01" />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Conversion Rate (%)</label>
          <Input type="number" value={convRate} onChange={e => setConvRate(e.target.value)} placeholder="3.5" min="0" step="0.1" />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Avg Order Value ($)</label>
          <Input type="number" value={avgOrderValue} onChange={e => setAvgOrderValue(e.target.value)} placeholder="120" min="0" />
        </div>
      </div>

      {daily > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatCard label="Monthly Budget" value={`$${monthlyBudget.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
            <StatCard label="Daily Clicks" value={dailyClicks.toLocaleString()} />
            <StatCard label="Monthly Clicks" value={monthlyClicks.toLocaleString()} />
            <StatCard label="Monthly Conversions" value={monthlyConversions.toLocaleString()} />
            <StatCard label="Monthly Revenue" value={`$${monthlyRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
            <StatCard label="ROAS" value={`${roas.toFixed(2)}x`} />
          </div>
          <div className="glass rounded-xl p-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cost per Conversion</span>
              <span className="font-bold">${costPerConversion.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted-foreground">Profit (Revenue − Budget)</span>
              <span className={`font-bold ${monthlyRevenue - monthlyBudget >= 0 ? "text-green-400" : "text-red-400"}`}>
                ${(monthlyRevenue - monthlyBudget).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">💡 A healthy ROAS for most businesses is 3x–5x. Below 2x, consider optimizing your campaign or landing pages.</p>
        </div>
      )}
    </div>
  );
};

/* ──────────── ROAS Calculator ──────────── */
export const RoasCalculator = () => {
  const [adSpend, setAdSpend] = useState("");
  const [revenue, setRevenue] = useState("");
  const [cogs, setCogs] = useState("");

  const spend = Number(adSpend) || 0;
  const rev = Number(revenue) || 0;
  const cost = Number(cogs) || 0;

  const roas = spend > 0 ? rev / spend : 0;
  const grossProfit = rev - cost;
  const netProfit = grossProfit - spend;
  const profitableRoas = cost > 0 ? (cost + spend) / spend : 0;
  const acos = rev > 0 ? (spend / rev) * 100 : 0;

  return (
    <div className="space-y-6 max-w-2xl">
      <p className="text-sm text-muted-foreground">
        Calculate Return on Ad Spend (ROAS) and determine if your campaigns are profitable after accounting for cost of goods.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-medium mb-1 block">Total Ad Spend ($)</label>
          <Input type="number" value={adSpend} onChange={e => setAdSpend(e.target.value)} placeholder="5000" min="0" />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Revenue Generated ($)</label>
          <Input type="number" value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="20000" min="0" />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Cost of Goods Sold ($)</label>
          <Input type="number" value={cogs} onChange={e => setCogs(e.target.value)} placeholder="8000" min="0" />
        </div>
      </div>

      {spend > 0 && (
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground mb-1">Your ROAS</p>
            <p className={`text-5xl font-bold ${roas >= 3 ? "text-green-400" : roas >= 2 ? "text-yellow-400" : "text-red-400"}`}>
              {roas.toFixed(2)}x
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {roas >= 4 ? "🏆 Excellent — your campaigns are highly profitable" :
               roas >= 3 ? "✅ Good — solid return on your ad investment" :
               roas >= 2 ? "⚠️ Average — room for optimization" :
               "🔴 Below average — review targeting and landing pages"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="ACoS" value={`${acos.toFixed(1)}%`} />
            <StatCard label="Gross Profit" value={`$${grossProfit.toLocaleString()}`} />
            <StatCard label="Net Profit" value={`$${netProfit.toLocaleString()}`} />
            <StatCard label="Break-even ROAS" value={`${profitableRoas.toFixed(2)}x`} />
          </div>

          <p className="text-xs text-muted-foreground">💡 ACoS (Advertising Cost of Sales) is the inverse of ROAS. A lower ACoS means higher efficiency.</p>
        </div>
      )}
    </div>
  );
};

/* ──────────── Ad Copy Generator ──────────── */
export const AdCopyGenerator = () => {
  const [product, setProduct] = useState("");
  const [keywords, setKeywords] = useState("");
  const [usp, setUsp] = useState("");
  const [cta, setCta] = useState("Shop Now");

  const ctaOptions = ["Shop Now", "Get Started", "Learn More", "Book a Call", "Get a Quote", "Try Free", "Sign Up", "Buy Now"];

  const kw = keywords.trim();
  const prod = product.trim();
  const unique = usp.trim();

  const headlines: string[] = [];
  const descriptions: string[] = [];

  if (prod) {
    headlines.push(
      `${prod} — ${unique || "Best Deals Online"}`.slice(0, 30),
      `Top-Rated ${prod} | ${cta}`.slice(0, 30),
      `${prod} — Save Up to 50%`.slice(0, 30),
      `#1 ${prod} | Trusted Experts`.slice(0, 30),
      `Get ${prod} Today — Free Quote`.slice(0, 30),
      `${prod} — Fast & Affordable`.slice(0, 30),
    );
    descriptions.push(
      `Looking for ${prod.toLowerCase()}? ${unique || "We deliver top quality at competitive prices."} ${cta} today and see the difference.`.slice(0, 90),
      `${unique || `Discover premium ${prod.toLowerCase()}`}. ${kw ? `Searching for ${kw}?` : ""} Get started with a free consultation. ${cta}!`.slice(0, 90),
      `Trusted by 1000+ customers. Professional ${prod.toLowerCase()} with proven results. ${cta} — limited time offer available.`.slice(0, 90),
    );
  }

  const output = headlines.length > 0 ? `HEADLINES (max 30 chars each):\n${headlines.map((h, i) => `${i + 1}. ${h} (${h.length} chars)`).join("\n")}\n\nDESCRIPTIONS (max 90 chars each):\n${descriptions.map((d, i) => `${i + 1}. ${d} (${d.length} chars)`).join("\n")}` : "";

  return (
    <div className="space-y-6 max-w-2xl">
      <p className="text-sm text-muted-foreground">
        Generate Google Ads responsive search ad copy with headlines (30 chars) and descriptions (90 chars) optimized for your product.
      </p>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium mb-1 block">Product / Service Name *</label>
          <Input value={product} onChange={e => setProduct(e.target.value)} placeholder="e.g. SEO Services, Running Shoes, Web Design" maxLength={100} />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Target Keywords (optional)</label>
          <Input value={keywords} onChange={e => setKeywords(e.target.value)} placeholder="e.g. best SEO agency, buy running shoes" maxLength={200} />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Unique Selling Point (optional)</label>
          <Input value={usp} onChange={e => setUsp(e.target.value)} placeholder="e.g. 10+ years experience, Free shipping" maxLength={150} />
        </div>
        <div>
          <label className="text-xs font-medium mb-1 block">Call-to-Action</label>
          <div className="flex flex-wrap gap-2">
            {ctaOptions.map(c => (
              <Button key={c} variant={cta === c ? "default" : "outline"} size="sm" onClick={() => setCta(c)}>
                {c}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {output && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Generated Ad Copy</span>
            <CopyButton text={output} />
          </div>
          <pre className="glass rounded-xl p-4 text-xs leading-relaxed whitespace-pre-wrap">{output}</pre>
          <p className="text-xs text-muted-foreground mt-3">💡 Google recommends 15 headlines and 4 descriptions per RSA. Use these as starting points and create variations.</p>
        </div>
      )}
    </div>
  );
};

/* ──────────── Quality Score Estimator ──────────── */
export const QualityScoreEstimator = () => {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setChecks(prev => ({ ...prev, [key]: !prev[key] }));

  const factors = [
    { key: "keyword_in_headline", label: "Target keyword appears in at least one ad headline", weight: 2 },
    { key: "keyword_in_description", label: "Target keyword appears in at least one description", weight: 1 },
    { key: "keyword_in_url", label: "Keyword or close variant in display URL path", weight: 1 },
    { key: "landing_relevance", label: "Landing page content is directly relevant to the keyword", weight: 2 },
    { key: "landing_speed", label: "Landing page loads in under 3 seconds", weight: 1 },
    { key: "landing_mobile", label: "Landing page is fully mobile-responsive", weight: 1 },
    { key: "ctr_above", label: "Expected CTR is above industry average", weight: 2 },
    { key: "ad_extensions", label: "Using 4+ ad extensions (sitelinks, callouts, etc.)", weight: 1 },
    { key: "negative_keywords", label: "Negative keywords are set to reduce irrelevant clicks", weight: 1 },
    { key: "tight_ad_groups", label: "Ad group has fewer than 20 tightly themed keywords", weight: 1 },
    { key: "responsive_ads", label: "Using responsive search ads with 10+ headline variations", weight: 1 },
    { key: "landing_trust", label: "Landing page has trust signals (reviews, certifications, SSL)", weight: 1 },
  ];

  const totalWeight = factors.reduce((a, f) => a + f.weight, 0);
  const earnedWeight = factors.filter(f => checks[f.key]).reduce((a, f) => a + f.weight, 0);
  const score = Math.round((earnedWeight / totalWeight) * 10);
  const checkedCount = factors.filter(f => checks[f.key]).length;

  return (
    <div className="space-y-6 max-w-2xl">
      <p className="text-sm text-muted-foreground">
        Estimate your Google Ads Quality Score by checking the factors that apply to your campaign. Higher scores lower your CPC.
      </p>
      <div className="space-y-2">
        {factors.map(f => (
          <ChecklistItem key={f.key} label={f.label} checked={!!checks[f.key]} onChange={() => toggle(f.key)} />
        ))}
      </div>
      <ScoreDisplay score={score} max={10} label="Estimated Quality Score" />
      <div className="glass rounded-xl p-4 text-center">
        <p className="text-sm text-muted-foreground">{checkedCount}/{factors.length} factors met</p>
        <p className="text-xs text-muted-foreground mt-2">
          {score >= 8 ? "🏆 Excellent — you'll enjoy lower CPCs and better ad positions" :
           score >= 6 ? "✅ Good — a few improvements could further reduce costs" :
           score >= 4 ? "⚠️ Average — significant savings possible with optimization" :
           "🔴 Low — review ad relevance, landing page, and keyword match"}
        </p>
      </div>
    </div>
  );
};

/* ──────────── PPC Campaign Audit Checklist ──────────── */
export const PpcCampaignAuditChecklist = () => {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setChecks(prev => ({ ...prev, [key]: !prev[key] }));

  const sections = [
    {
      title: "Account Structure",
      items: [
        { key: "campaign_goals", label: "Each campaign has a clearly defined goal (leads, sales, awareness)" },
        { key: "ad_group_themes", label: "Ad groups are tightly themed with related keywords" },
        { key: "naming_convention", label: "Consistent naming convention across campaigns and ad groups" },
        { key: "campaign_types", label: "Using appropriate campaign types (Search, Display, Shopping, Performance Max)" },
      ],
    },
    {
      title: "Keywords & Targeting",
      items: [
        { key: "match_types", label: "Using a mix of match types (exact, phrase, broad with smart bidding)" },
        { key: "negative_kw", label: "Negative keyword lists are up to date and comprehensive" },
        { key: "search_terms", label: "Search terms report reviewed in the last 7 days" },
        { key: "keyword_conflicts", label: "No keyword conflicts between ad groups or campaigns" },
      ],
    },
    {
      title: "Ad Copy & Creative",
      items: [
        { key: "rsa_headlines", label: "Responsive search ads have 10+ unique headlines" },
        { key: "rsa_descriptions", label: "At least 4 descriptions per RSA with keyword inclusion" },
        { key: "ad_extensions", label: "Using sitelinks, callouts, structured snippets, and call extensions" },
        { key: "ad_testing", label: "Running A/B tests on ad copy variations" },
      ],
    },
    {
      title: "Bidding & Budget",
      items: [
        { key: "bid_strategy", label: "Bid strategy aligns with campaign goals (tCPA, tROAS, maximize conversions)" },
        { key: "budget_limits", label: "No campaigns are limited by budget consistently" },
        { key: "device_adjustments", label: "Device bid adjustments reviewed and optimized" },
        { key: "schedule_adjustments", label: "Ad schedule set based on conversion data patterns" },
      ],
    },
    {
      title: "Conversion Tracking",
      items: [
        { key: "conversion_actions", label: "Primary conversion actions are properly configured" },
        { key: "attribution_model", label: "Using data-driven or position-based attribution (not last-click)" },
        { key: "enhanced_conversions", label: "Enhanced conversions enabled for better tracking accuracy" },
        { key: "offline_conversions", label: "Offline conversion import set up (if applicable)" },
      ],
    },
  ];

  const total = sections.flatMap(s => s.items).length;
  const completed = sections.flatMap(s => s.items).filter(i => checks[i.key]).length;
  const score = Math.round((completed / total) * 100);

  return (
    <div className="space-y-6 max-w-2xl">
      <p className="text-sm text-muted-foreground">
        Run through this 20-point PPC audit checklist to identify optimization opportunities in your Google Ads campaigns.
      </p>

      <ScoreDisplay score={score} max={100} label="Audit Completion" />

      {sections.map(section => (
        <div key={section.title} className="space-y-2">
          <h3 className="font-semibold text-sm text-foreground">{section.title}</h3>
          {section.items.map(item => (
            <ChecklistItem key={item.key} label={item.label} checked={!!checks[item.key]} onChange={() => toggle(item.key)} />
          ))}
        </div>
      ))}

      <div className="glass rounded-xl p-4 text-center">
        <p className="text-sm font-medium">{completed}/{total} checks passed</p>
        <p className="text-xs text-muted-foreground mt-1">
          {score >= 80 ? "🏆 Your campaigns are well-optimized. Focus on scaling." :
           score >= 60 ? "✅ Good foundation — address remaining items for better performance." :
           score >= 40 ? "⚠️ Several optimization opportunities found. Prioritize high-impact items." :
           "🔴 Significant issues detected. Consider a professional PPC audit."}
        </p>
      </div>
    </div>
  );
};
