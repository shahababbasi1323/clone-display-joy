import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton, ChecklistItem, StatCard } from "@/components/tools/ToolUiPrimitives";

const GMB_ITEMS = [
  "Business name is accurate and consistent with other listings","Complete business address is provided","Phone number is correct (local number preferred)","Business hours are up to date (including holiday hours)","Business category is accurate and specific","Secondary categories are added","Business description is written (750 chars max, keywords included)","Website URL is correct","Appointment URL is added (if applicable)","Products/Services are listed with descriptions","Profile photo is uploaded (high quality)","Cover photo is uploaded","Interior photos are added (3+)","Exterior photos are added (2+)","Team photos are added","Google Posts are published regularly (weekly)","Q&A section has questions and answers","Reviews are responded to (within 24-48 hours)","Services/Menu items are listed","Attributes are filled out (wheelchair accessible, etc.)","Messaging is enabled","Business logo is uploaded","Service areas are defined (if service-area business)","Opening date is set","From the business description is completed","Short name/URL is claimed","COVID-19 updates are current","Special hours for holidays are set","UTM parameters on website link","Verified by Google",
];

export const GmbAuditChecklist = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    const next = new Set(checked);
    next.has(i) ? next.delete(i) : next.add(i);
    setChecked(next);
  };
  const pct = Math.round((checked.size / GMB_ITEMS.length) * 100);

  return (
    <div className="space-y-6">
      <div className="glass rounded-xl p-4 flex items-center justify-between">
        <span className="text-sm font-medium">{checked.size}/{GMB_ITEMS.length} completed</span>
        <span className={`text-lg font-bold ${pct >= 80 ? "text-accent" : pct >= 50 ? "text-yellow-500" : "text-destructive"}`}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div className="h-full bg-accent transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="space-y-2 max-h-[500px] overflow-auto">
        {GMB_ITEMS.map((item, i) => (
          <ChecklistItem key={i} label={item} checked={checked.has(i)} onChange={() => toggle(i)} />
        ))}
      </div>
    </div>
  );
};

const CITATIONS: Record<string, string[]> = {
  US: ["Google Business Profile","Yelp","Bing Places","Apple Maps","Facebook Business","BBB","Yellow Pages","Foursquare","Manta","Angi","Thumbtack","MapQuest","Chamber of Commerce","Superpages"],
  UK: ["Google Business Profile","Yell.com","Bing Places","Thomson Local","FreeIndex","Scoot","Cylex UK","Brown Book","Hotfrog","Yelp UK","TrustPilot"],
  UAE: ["Google Business Profile","Yellow Pages UAE","DubaiCity.com","UAE Business Directory","Gulf News","Bayut","PropertyFinder","Dubizzle","ConnectME"],
  Pakistan: ["Google Business Profile","Jamal Yellow Pages","PakBiz","PakWheels","Olx.pk","Pakistan Yellow Pages","City Directory Pakistan"],
  Germany: ["Google Business Profile","Gelbe Seiten","Das Örtliche","11880","Yelp Germany","GoLocal","Branchenbuch","Stadtbranchenbuch"],
  France: ["Google Business Profile","Pages Jaunes","Yelp France","Kompass","Societe.com","Europages","Les Horaires"],
};

export const CitationSourceFinder = () => {
  const [country, setCountry] = useState("US");
  const sources = CITATIONS[country] || CITATIONS.US;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Select Country</label>
        <select value={country} onChange={e => setCountry(e.target.value)} className="glass rounded-lg p-2 text-sm w-full">
          {Object.keys(CITATIONS).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">{sources.length} citation sources for {country}</p>
        {sources.map((s, i) => (
          <div key={i} className="glass rounded-lg p-3 flex justify-between items-center">
            <span className="text-sm">{i + 1}. {s}</span>
            <span className="text-xs text-muted-foreground">#{i + 1} priority</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NapConsistencyChecker = () => {
  const [entries, setEntries] = useState([{ source: "", name: "", address: "", phone: "" }]);
  const add = () => setEntries([...entries, { source: "", name: "", address: "", phone: "" }]);
  const base = entries[0];
  const issues = entries.slice(1).filter(e => e.name || e.address || e.phone).map((e, i) => ({
    source: e.source || `Entry ${i + 2}`,
    nameMatch: !e.name || e.name.toLowerCase() === base.name.toLowerCase(),
    addressMatch: !e.address || e.address.toLowerCase() === base.address.toLowerCase(),
    phoneMatch: !e.phone || e.phone.replace(/\D/g, "") === base.phone.replace(/\D/g, ""),
  }));

  return (
    <div className="space-y-6">
      {entries.map((e, i) => (
        <div key={i} className="glass rounded-xl p-4 space-y-3">
          <div className="flex justify-between"><span className="text-sm font-medium">{i === 0 ? "Primary (Correct)" : `Source ${i + 1}`}</span>
            {i > 0 && <Button variant="outline" size="sm" onClick={() => setEntries(entries.filter((_, j) => j !== i))}>×</Button>}</div>
          {i > 0 && <Input value={e.source} onChange={ev => { const n = [...entries]; n[i].source = ev.target.value; setEntries(n); }} placeholder="Source name (e.g. Yelp)" />}
          <Input value={e.name} onChange={ev => { const n = [...entries]; n[i].name = ev.target.value; setEntries(n); }} placeholder="Business Name" />
          <Input value={e.address} onChange={ev => { const n = [...entries]; n[i].address = ev.target.value; setEntries(n); }} placeholder="Full Address" />
          <Input value={e.phone} onChange={ev => { const n = [...entries]; n[i].phone = ev.target.value; setEntries(n); }} placeholder="Phone Number" />
        </div>
      ))}
      <Button variant="outline" onClick={add}>+ Add Source</Button>
      {issues.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Consistency Report</p>
          {issues.map((issue, i) => (
            <div key={i} className="glass rounded-lg p-3 space-y-1">
              <p className="text-sm font-medium">{issue.source}</p>
              <div className="flex gap-4 text-xs">
                <span className={issue.nameMatch ? "text-accent" : "text-destructive"}>Name: {issue.nameMatch ? "✓ Match" : "✗ Mismatch"}</span>
                <span className={issue.addressMatch ? "text-accent" : "text-destructive"}>Address: {issue.addressMatch ? "✓ Match" : "✗ Mismatch"}</span>
                <span className={issue.phoneMatch ? "text-accent" : "text-destructive"}>Phone: {issue.phoneMatch ? "✓ Match" : "✗ Mismatch"}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ReviewResponseGenerator = () => {
  const [review, setReview] = useState("");
  const [type, setType] = useState<"positive" | "negative">("positive");
  const positive = review ? [
    `Thank you so much for your wonderful review! We truly appreciate your kind words and are thrilled to hear about your positive experience. Your feedback motivates our team to continue delivering the best service possible. We look forward to serving you again!`,
    `Wow, thank you for this amazing review! We're so glad you had a great experience with us. Your satisfaction is our top priority, and reviews like yours make our day. See you again soon!`,
    `Thank you for taking the time to share your experience! We're delighted to know you enjoyed our service. Your recommendation means the world to us. Looking forward to welcoming you back!`,
  ] : [];
  const negative = review ? [
    `Thank you for sharing your feedback. We sincerely apologize for the experience you described. This is not the standard we strive for, and we take your concerns very seriously. Please reach out to us directly at [email/phone] so we can make this right. We value your business and want to ensure a better experience next time.`,
    `We appreciate you bringing this to our attention, and we're sorry to hear about your experience. We understand your frustration and would like the opportunity to address your concerns directly. Please contact us at [email/phone], and we'll work to resolve this promptly.`,
    `Thank you for your honest feedback. We apologize for falling short of your expectations. We've already taken steps to address the issues you mentioned. We'd love the chance to make it up to you — please reach out to us directly so we can discuss a resolution.`,
  ] : [];
  const responses = type === "positive" ? positive : negative;

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button variant={type === "positive" ? "default" : "outline"} onClick={() => setType("positive")}>Positive Review</Button>
        <Button variant={type === "negative" ? "default" : "outline"} onClick={() => setType("negative")}>Negative Review</Button>
      </div>
      <Textarea value={review} onChange={e => setReview(e.target.value)} placeholder="Paste the customer review here..." rows={4} />
      {responses.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium">Response Options</p>
          {responses.map((r, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <div className="flex justify-end mb-2"><CopyButton text={r} /></div>
              <p className="text-sm text-muted-foreground">{r}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const LocalKeywordGenerator = () => {
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const modifiers = ["near me","services","company","agency","experts","professionals","best","top","affordable","cheap","emergency","24 hour","licensed","certified","rated","reviews"];
  const landmarks = ["near downtown","near airport","near university","near hospital","near mall","near park"];
  const keywords = service && city ? [
    `${service} in ${city}`,
    `${city} ${service}`,
    `${service} ${city}`,
    ...modifiers.map(m => `${m} ${service} ${city}`),
    ...modifiers.map(m => `${service} ${m} in ${city}`),
    ...landmarks.map(l => `${service} ${l} ${city}`),
  ] : [];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="text-sm font-medium mb-1 block">Service/Business Type</label><Input value={service} onChange={e => setService(e.target.value)} placeholder="e.g. plumber, dentist, seo" /></div>
        <div><label className="text-sm font-medium mb-1 block">City/Location</label><Input value={city} onChange={e => setCity(e.target.value)} placeholder="e.g. Dubai, London, New York" /></div>
      </div>
      {keywords.length > 0 && (
        <div>
          <div className="flex justify-between mb-3"><p className="text-sm font-medium">{keywords.length} local keywords</p><CopyButton text={keywords.join("\n")} /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[400px] overflow-auto">
            {keywords.map((k, i) => <div key={i} className="glass rounded-lg p-2 text-sm">{k}</div>)}
          </div>
        </div>
      )}
    </div>
  );
};
