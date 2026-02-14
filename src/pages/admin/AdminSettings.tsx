import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const defaultSettings: Record<string, Record<string, string>> = {
  general: { site_name: "Shahab Abbasi", tagline: "SEO Strategist & GEO Expert", email: "contact@shahababbasi.com", phone: "+92 304 1316771" },
  seo: { default_meta_title: "Shahab Abbasi - SEO Strategist", default_meta_description: "Expert SEO services worldwide", google_analytics_id: "" },
  social: { linkedin: "https://www.linkedin.com/in/shahab-abbasi-seo-specialist/", facebook: "https://www.facebook.com/shahababbasi302/", instagram: "https://www.instagram.com/shahababbasi302", twitter: "https://x.com/ShahabAbbasi302", whatsapp: "923041316771" },
};

const AdminSettings = () => {
  const [settings, setSettings] = useState(defaultSettings);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetch_ = async () => {
      const { data } = await supabase.from("site_settings").select("*");
      if (data) {
        const merged = { ...defaultSettings };
        data.forEach((row) => {
          const val = row.value as Record<string, string> | null;
          if (val && merged[row.key]) merged[row.key] = { ...merged[row.key], ...val };
        });
        setSettings(merged);
      }
    };
    fetch_();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    for (const [key, value] of Object.entries(settings)) {
      await supabase.from("site_settings").upsert({ key, value }, { onConflict: "key" });
    }
    toast({ title: "Settings saved!" });
    setSaving(false);
  };

  const update = (section: string, field: string, val: string) => {
    setSettings((prev) => ({ ...prev, [section]: { ...prev[section], [field]: val } }));
  };

  return (
    <AdminLayout title="Site Settings">
      <div className="max-w-2xl space-y-8">
        {Object.entries(settings).map(([section, fields]) => (
          <div key={section} className="glass rounded-xl p-6 space-y-4">
            <h3 className="font-semibold capitalize text-lg">{section}</h3>
            {Object.entries(fields).map(([field, value]) => (
              <div key={field} className="space-y-1">
                <Label className="capitalize">{field.replace(/_/g, " ")}</Label>
                <Input value={value} onChange={(e) => update(section, field, e.target.value)} />
              </div>
            ))}
          </div>
        ))}
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          <Save className="h-4 w-4" /> {saving ? "Saving..." : "Save All Settings"}
        </Button>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
