import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Briefcase, MessageSquare, Mail } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ posts: 0, studies: 0, testimonials: 0, leads: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [p, s, t, l] = await Promise.all([
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("case_studies").select("id", { count: "exact", head: true }),
        supabase.from("testimonials").select("id", { count: "exact", head: true }),
        supabase.from("leads").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        posts: p.count ?? 0,
        studies: s.count ?? 0,
        testimonials: t.count ?? 0,
        leads: l.count ?? 0,
      });
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Blog Posts", value: stats.posts, icon: FileText, color: "text-primary" },
    { label: "Case Studies", value: stats.studies, icon: Briefcase, color: "text-accent" },
    { label: "Testimonials", value: stats.testimonials, icon: MessageSquare, color: "text-primary" },
    { label: "Leads", value: stats.leads, icon: Mail, color: "text-accent" },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.label} className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">{c.label}</span>
              <c.icon className={`h-5 w-5 ${c.color}`} />
            </div>
            <p className="text-3xl font-bold">{c.value}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
