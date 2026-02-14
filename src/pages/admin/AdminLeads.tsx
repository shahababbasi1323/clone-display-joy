import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Mail, Phone } from "lucide-react";

interface Lead {
  id: string; name: string; email: string; phone: string | null; company: string | null;
  message: string | null; source: string | null; status: string | null; created_at: string;
}

const statusColors: Record<string, string> = {
  new: "bg-primary/20 text-primary",
  contacted: "bg-accent/20 text-accent",
  qualified: "bg-accent/30 text-accent",
  closed: "bg-muted text-muted-foreground",
};

const AdminLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const { toast } = useToast();

  const fetch_ = async () => {
    const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    if (data) setLeads(data as Lead[]);
  };
  useEffect(() => { fetch_(); }, []);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("leads").update({ status }).eq("id", id);
    fetch_();
  };

  const del = async (id: string) => {
    if (!confirm("Delete lead?")) return;
    await supabase.from("leads").delete().eq("id", id);
    toast({ title: "Deleted" }); fetch_();
  };

  return (
    <AdminLayout title="Leads">
      <p className="text-muted-foreground mb-6">{leads.length} leads</p>
      <div className="space-y-4">
        {leads.map((l) => (
          <div key={l.id} className="glass rounded-xl p-5">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <p className="font-semibold">{l.name}</p>
                  <Badge variant="outline" className={statusColors[l.status || "new"]}>{l.status || "new"}</Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{l.email}</span>
                  {l.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{l.phone}</span>}
                  {l.company && <span>{l.company}</span>}
                </div>
                {l.message && <p className="text-sm mt-2 text-muted-foreground">{l.message}</p>}
                <p className="text-xs text-muted-foreground mt-1">{new Date(l.created_at).toLocaleString()} · {l.source}</p>
              </div>
              <div className="flex items-center gap-2">
                <Select value={l.status || "new"} onValueChange={(v) => updateStatus(l.id, v)}>
                  <SelectTrigger className="w-32 h-8"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
                <button onClick={() => del(l.id)} className="p-1.5 rounded hover:bg-destructive/20 text-destructive"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
        {leads.length === 0 && <p className="text-center text-muted-foreground py-12">No leads yet</p>}
      </div>
    </AdminLayout>
  );
};

export default AdminLeads;
