import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  category: string | null;
  tags: string[];
  author: string | null;
  published: boolean | null;
  published_at: string | null;
  created_at: string;
}

const emptyPost = {
  slug: "", title: "", meta_title: "", meta_description: "", excerpt: "",
  content: "", cover_image: "", category: "", tags: [] as string[], author: "Shahab Abbasi", published: false,
};

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<typeof emptyPost & { id?: string } | null>(null);
  const [tagsInput, setTagsInput] = useState("");
  const { toast } = useToast();

  const fetchPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    if (data) setPosts(data as BlogPost[]);
  };

  useEffect(() => { fetchPosts(); }, []);

  const openNew = () => { setEditing({ ...emptyPost }); setTagsInput(""); };
  const openEdit = (p: BlogPost) => {
    setEditing({ id: p.id, slug: p.slug, title: p.title, meta_title: p.meta_title || "", meta_description: p.meta_description || "", excerpt: p.excerpt || "", content: p.content, cover_image: p.cover_image || "", category: p.category || "", tags: p.tags || [], author: p.author || "Shahab Abbasi", published: p.published ?? false });
    setTagsInput((p.tags || []).join(", "));
  };

  const handleSave = async () => {
    if (!editing) return;
    const tags = tagsInput.split(",").map(t => t.trim()).filter(Boolean);
    const payload = { ...editing, tags, published_at: editing.published ? new Date().toISOString() : null };
    const { id, ...rest } = payload;

    if (id) {
      const { error } = await supabase.from("blog_posts").update(rest).eq("id", id);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    } else {
      const { error } = await supabase.from("blog_posts").insert(rest);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    }
    toast({ title: "Saved!" });
    setEditing(null);
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    toast({ title: "Deleted" });
    fetchPosts();
  };

  return (
    <AdminLayout title="Blog Posts">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">{posts.length} posts</p>
        <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" /> New Post</Button>
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border text-left text-muted-foreground">
            <th className="p-4">Title</th><th className="p-4">Category</th><th className="p-4">Status</th><th className="p-4">Date</th><th className="p-4 w-24"></th>
          </tr></thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-b border-border/50 hover:bg-secondary/30">
                <td className="p-4 font-medium">{p.title}</td>
                <td className="p-4 text-muted-foreground">{p.category || "-"}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${p.published ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="p-4 text-muted-foreground">{new Date(p.created_at).toLocaleDateString()}</td>
                <td className="p-4 flex gap-2">
                  <button onClick={() => openEdit(p)} className="p-1.5 rounded hover:bg-secondary"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(p.id)} className="p-1.5 rounded hover:bg-destructive/20 text-destructive"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No posts yet</td></tr>}
          </tbody>
        </table>
      </div>

      <Dialog open={!!editing} onOpenChange={() => setEditing(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing?.id ? "Edit Post" : "New Post"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Title</Label><Input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} /></div>
                <div className="space-y-2"><Label>Slug</Label><Input value={editing.slug} onChange={e => setEditing({ ...editing, slug: e.target.value })} /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Meta Title</Label><Input value={editing.meta_title} onChange={e => setEditing({ ...editing, meta_title: e.target.value })} /></div>
                <div className="space-y-2"><Label>Category</Label><Input value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label>Meta Description</Label><Textarea value={editing.meta_description} onChange={e => setEditing({ ...editing, meta_description: e.target.value })} /></div>
              <div className="space-y-2"><Label>Excerpt</Label><Textarea value={editing.excerpt} onChange={e => setEditing({ ...editing, excerpt: e.target.value })} rows={2} /></div>
              <div className="space-y-2"><Label>Content (Markdown/HTML)</Label><Textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} rows={12} className="font-mono text-xs" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Cover Image URL</Label><Input value={editing.cover_image} onChange={e => setEditing({ ...editing, cover_image: e.target.value })} /></div>
                <div className="space-y-2"><Label>Tags (comma-separated)</Label><Input value={tagsInput} onChange={e => setTagsInput(e.target.value)} /></div>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={editing.published} onCheckedChange={v => setEditing({ ...editing, published: v })} />
                <Label>Published</Label>
              </div>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
                <Button onClick={handleSave}>Save Post</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminBlog;
