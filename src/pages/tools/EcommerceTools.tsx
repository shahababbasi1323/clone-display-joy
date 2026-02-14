import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton, ChecklistItem, ScoreDisplay, CodeOutput } from "@/components/tools/ToolUiPrimitives";

export const ProductDescriptionOptimizer = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [keyword, setKeyword] = useState("");
  const words = desc.trim().split(/\s+/).filter(Boolean).length;
  const hasKeyword = keyword && desc.toLowerCase().includes(keyword.toLowerCase());
  const hasBenefits = /benefit|advantage|help|improve|boost|save|easy|fast|quality/i.test(desc);
  const hasFeatures = /feature|include|built|design|material|size|color|weight/i.test(desc);
  const hasCta = /buy|order|add to cart|get|shop|try|start/i.test(desc);
  const checks = [
    { name: "Word count (100+ recommended)", pass: words >= 100 },
    { name: "Target keyword present", pass: !!hasKeyword || !keyword },
    { name: "Benefits mentioned", pass: hasBenefits },
    { name: "Features described", pass: hasFeatures },
    { name: "Call-to-action included", pass: hasCta },
    { name: "Product name in description", pass: !name || desc.toLowerCase().includes(name.toLowerCase()) },
  ];
  const score = Math.round((checks.filter(c => c.pass).length / checks.length) * 100);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Product name" />
        <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Target keyword (optional)" />
      </div>
      <Textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Paste your product description..." rows={8} />
      {desc && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScoreDisplay score={score} label="Description Score" />
          <div className="space-y-2">{checks.map((c, i) => (
            <div key={i} className={`glass rounded-lg p-2 flex justify-between text-sm ${c.pass ? "" : "border-l-2 border-l-destructive"}`}>
              <span>{c.name}</span><span className={c.pass ? "text-accent" : "text-destructive"}>{c.pass ? "✓" : "✗"}</span>
            </div>
          ))}</div>
        </div>
      )}
    </div>
  );
};

export const EcommerceSchemaGenerator = () => {
  const [f, setF] = useState<Record<string, string>>({});
  const set = (k: string, v: string) => setF({ ...f, [k]: v });
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: f.name || "",
    description: f.description || "",
    image: f.image || "",
    brand: { "@type": "Brand", name: f.brand || "" },
    sku: f.sku || "",
    offers: {
      "@type": "Offer",
      price: f.price || "0",
      priceCurrency: f.currency || "USD",
      availability: `https://schema.org/${f.availability || "InStock"}`,
      url: f.url || "",
    },
    ...(f.rating ? { aggregateRating: { "@type": "AggregateRating", ratingValue: f.rating, reviewCount: f.reviewCount || "1" } } : {}),
  };
  const output = JSON.stringify(schema, null, 2);
  const fields = ["name","description","image","brand","sku","price","currency","availability","url","rating","reviewCount"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-3">{fields.map(field => (
        <div key={field}><label className="text-xs font-medium mb-1 block capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
          {field === "availability" ? (
            <select value={f[field] || "InStock"} onChange={e => set(field, e.target.value)} className="glass rounded-lg p-2 text-sm w-full">
              <option value="InStock">In Stock</option><option value="OutOfStock">Out of Stock</option><option value="PreOrder">Pre-Order</option><option value="LimitedAvailability">Limited</option>
            </select>
          ) : <Input value={f[field] || ""} onChange={e => set(field, e.target.value)} placeholder={field} />}
        </div>
      ))}</div>
      <CodeOutput code={output} label="Product Schema JSON-LD" />
    </div>
  );
};

const CAT_ITEMS = [
  "Category has unique H1 tag","Category has unique meta title (50-60 chars)","Category has unique meta description (140-160 chars)","Category page has 200+ words of unique description","Breadcrumb navigation is present","Category URL is clean and descriptive","Products show price, image, and rating","Pagination uses rel=next/prev or load more","Filters don't create duplicate URLs","Category has internal links to related categories","Schema markup (ItemList) is implemented","No thin content / boilerplate only","Mobile-friendly layout","Fast loading (< 3s)","Sort options don't create duplicate pages","Canonical tags are correctly set","Category appears in XML sitemap","No orphan category pages","User reviews/ratings visible","Related categories are linked",
];

export const CategoryPageOptimizer = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => { const n = new Set(checked); n.has(i) ? n.delete(i) : n.add(i); setChecked(n); };
  const pct = Math.round((checked.size / CAT_ITEMS.length) * 100);

  return (
    <div className="space-y-6">
      <div className="glass rounded-xl p-4 flex justify-between items-center">
        <span className="text-sm font-medium">{checked.size}/{CAT_ITEMS.length} optimized</span>
        <span className={`text-lg font-bold ${pct >= 80 ? "text-accent" : pct >= 50 ? "text-yellow-500" : "text-destructive"}`}>{pct}%</span>
      </div>
      <div className="space-y-2">{CAT_ITEMS.map((item, i) => <ChecklistItem key={i} label={item} checked={checked.has(i)} onChange={() => toggle(i)} />)}</div>
    </div>
  );
};
