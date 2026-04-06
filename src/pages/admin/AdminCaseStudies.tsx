import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CaseStudy {
  id: string; slug: string; title: string; meta_title: string | null; meta_description: string | null;
  client_name: string | null; industry: string | null; challenge: string | null; solution: string | null;
  results: string | null; content: string; cover_image: string | null; published: boolean | null; created_at: string;
}

const empty = { slug: "", title: "", meta_title: "", meta_description: "", client_name: "", industry: "", challenge: "", solution: "", results: "", content: "", cover_image: "", published: false };

const AdminCaseStudies = () => {
  const [items, setItems] = useState<CaseStudy[]>([]);
  const [editing, setEditing] = useState<typeof empty & { id?: string } | null>(null);
  const { toast } = useToast();

  const fetch_ = async () => {
    const { data } = await supabase.from("case_studies").select("*").order("created_at", { ascending: false });
    if (data) setItems(data as CaseStudy[]);
  };
  useEffect(() => { fetch_(); }, []);

  const save = async () => {
    if (!editing) return;
    const { id, ...rest } = editing;
    const op = id
      ? supabase.from("case_studies").update(rest).eq("id", id)
      : supabase.from("case_studies").insert(rest);
    const { error } = await op;
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Saved!" }); setEditing(null); fetch_();
  };

  const del = async (id: string) => {
    if (!confirm("Delete?")) return;
    await supabase.from("case_studies").delete().eq("id", id);
    toast({ title: "Deleted" }); fetch_();
  };

  return (
    <AdminLayout title="Case Studies">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">{items.length} studies</p>
        <Button onClick={() => setEditing({ ...empty })}><Plus className="h-4 w-4 mr-2" /> New Study</Button>
      </div>
      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border text-left text-muted-foreground">
            <th className="p-4">Title</th><th className="p-4">Client</th><th className="p-4">Industry</th><th className="p-4">Status</th><th className="p-4 w-24"></th>
          </tr></thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id} className="border-b border-border/50 hover:bg-secondary/30">
                <td className="p-4 font-medium">{i.title}</td>
                <td className="p-4 text-muted-foreground">{i.client_name || "-"}</td>
                <td className="p-4 text-muted-foreground">{i.industry || "-"}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs ${i.published ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>{i.published ? "Published" : "Draft"}</span></td>
                <td className="p-4 flex gap-2">
                  <button onClick={() => setEditing({ id: i.id, slug: i.slug, title: i.title, meta_title: i.meta_title || "", meta_description: i.meta_description || "", client_name: i.client_name || "", industry: i.industry || "", challenge: i.challenge || "", solution: i.solution || "", results: i.results || "", content: i.content, cover_image: i.cover_image || "", published: i.published ?? false })} className="p-1.5 rounded hover:bg-secondary"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => del(i.id)} className="p-1.5 rounded hover:bg-destructive/20 text-destructive"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No case studies yet</td></tr>}
          </tbody>
        </table>
      </div>
      <Dialog open={!!editing} onOpenChange={() => setEditing(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing?.id ? "Edit" : "New"} Case Study</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Title</Label><Input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} /></div>
                <div className="space-y-2"><Label>Slug</Label><Input value={editing.slug} onChange={e => setEditing({ ...editing, slug: e.target.value })} /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Client Name</Label><Input value={editing.client_name} onChange={e => setEditing({ ...editing, client_name: e.target.value })} /></div>
                <div className="space-y-2"><Label>Industry</Label><Input value={editing.industry} onChange={e => setEditing({ ...editing, industry: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label>Challenge</Label><Textarea value={editing.challenge} onChange={e => setEditing({ ...editing, challenge: e.target.value })} rows={3} /></div>
              <div className="space-y-2"><Label>Solution</Label><Textarea value={editing.solution} onChange={e => setEditing({ ...editing, solution: e.target.value })} rows={3} /></div>
              <div className="space-y-2"><Label>Results</Label><Textarea value={editing.results} onChange={e => setEditing({ ...editing, results: e.target.value })} rows={3} /></div>
              <div className="space-y-2"><Label>Full Content</Label><Textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} rows={10} className="font-mono text-xs" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Meta Title</Label><Input value={editing.meta_title} onChange={e => setEditing({ ...editing, meta_title: e.target.value })} /></div>
                <div className="space-y-2"><Label>Cover Image URL</Label><Input value={editing.cover_image} onChange={e => setEditing({ ...editing, cover_image: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label>Meta Description</Label><Textarea value={editing.meta_description} onChange={e => setEditing({ ...editing, meta_description: e.target.value })} rows={2} /></div>
              <div className="flex items-center gap-3"><Switch checked={editing.published} onCheckedChange={v => setEditing({ ...editing, published: v })} /><Label>Published</Label></div>
              <div className="flex gap-3 justify-end"><Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button><Button onClick={save}>Save</Button></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminCaseStudies;
