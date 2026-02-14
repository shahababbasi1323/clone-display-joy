import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Testimonial {
  id: string; client_name: string; client_title: string | null; company: string | null;
  content: string; rating: number | null; avatar_url: string | null; published: boolean | null; created_at: string;
}

const empty = { client_name: "", client_title: "", company: "", content: "", rating: 5, avatar_url: "", published: true };

const AdminTestimonials = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [editing, setEditing] = useState<typeof empty & { id?: string } | null>(null);
  const { toast } = useToast();

  const fetch_ = async () => {
    const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    if (data) setItems(data as Testimonial[]);
  };
  useEffect(() => { fetch_(); }, []);

  const save = async () => {
    if (!editing) return;
    const { id, ...rest } = editing;
    const op = id ? supabase.from("testimonials").update(rest).eq("id", id) : supabase.from("testimonials").insert(rest);
    const { error } = await op;
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Saved!" }); setEditing(null); fetch_();
  };

  const del = async (id: string) => {
    if (!confirm("Delete?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    toast({ title: "Deleted" }); fetch_();
  };

  return (
    <AdminLayout title="Testimonials">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">{items.length} testimonials</p>
        <Button onClick={() => setEditing({ ...empty })}><Plus className="h-4 w-4 mr-2" /> New Testimonial</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((i) => (
          <div key={i.id} className="glass rounded-xl p-5 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{i.client_name}</p>
                <p className="text-xs text-muted-foreground">{[i.client_title, i.company].filter(Boolean).join(" · ")}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => setEditing({ id: i.id, client_name: i.client_name, client_title: i.client_title || "", company: i.company || "", content: i.content, rating: i.rating ?? 5, avatar_url: i.avatar_url || "", published: i.published ?? true })} className="p-1.5 rounded hover:bg-secondary"><Pencil className="h-4 w-4" /></button>
                <button onClick={() => del(i.id)} className="p-1.5 rounded hover:bg-destructive/20 text-destructive"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
            <div className="flex gap-0.5">{Array.from({ length: i.rating ?? 5 }).map((_, idx) => <Star key={idx} className="h-3.5 w-3.5 fill-accent text-accent" />)}</div>
            <p className="text-sm text-muted-foreground line-clamp-3">{i.content}</p>
          </div>
        ))}
        {items.length === 0 && <p className="col-span-2 text-center text-muted-foreground py-12">No testimonials yet</p>}
      </div>
      <Dialog open={!!editing} onOpenChange={() => setEditing(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>{editing?.id ? "Edit" : "New"} Testimonial</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Client Name</Label><Input value={editing.client_name} onChange={e => setEditing({ ...editing, client_name: e.target.value })} /></div>
                <div className="space-y-2"><Label>Title</Label><Input value={editing.client_title} onChange={e => setEditing({ ...editing, client_title: e.target.value })} /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Company</Label><Input value={editing.company} onChange={e => setEditing({ ...editing, company: e.target.value })} /></div>
                <div className="space-y-2"><Label>Rating (1-5)</Label><Input type="number" min={1} max={5} value={editing.rating} onChange={e => setEditing({ ...editing, rating: Number(e.target.value) })} /></div>
              </div>
              <div className="space-y-2"><Label>Content</Label><Textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} rows={4} /></div>
              <div className="space-y-2"><Label>Avatar URL</Label><Input value={editing.avatar_url} onChange={e => setEditing({ ...editing, avatar_url: e.target.value })} /></div>
              <div className="flex items-center gap-3"><Switch checked={editing.published} onCheckedChange={v => setEditing({ ...editing, published: v })} /><Label>Published</Label></div>
              <div className="flex gap-3 justify-end"><Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button><Button onClick={save}>Save</Button></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminTestimonials;
