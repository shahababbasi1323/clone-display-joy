import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Button variant="outline" size="sm" onClick={copy}>
      {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

export const StatCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="glass rounded-xl p-4 flex items-center justify-between">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="font-semibold text-lg">{value}</span>
  </div>
);

export const CodeOutput = ({ code, label = "Output" }: { code: string; label?: string }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium">{label}</span>
      <CopyButton text={code} />
    </div>
    <pre className="glass rounded-xl p-4 text-xs leading-relaxed overflow-auto max-h-[400px] whitespace-pre-wrap break-all">
      {code}
    </pre>
  </div>
);

export const ChecklistItem = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
  <label className="flex items-start gap-3 p-3 glass rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
    <input type="checkbox" checked={checked} onChange={onChange} className="mt-1 rounded border-border" />
    <span className={checked ? "line-through text-muted-foreground" : ""}>{label}</span>
  </label>
);

export const ScoreDisplay = ({ score, max = 100, label }: { score: number; max?: number; label: string }) => {
  const pct = Math.min((score / max) * 100, 100);
  const color = pct >= 70 ? "bg-green-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="glass rounded-xl p-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="font-bold text-lg">{score}/{max}</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div className={`h-full ${color} transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};
