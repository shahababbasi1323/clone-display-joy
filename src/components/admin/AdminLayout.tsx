import { ReactNode, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard, FileText, MapPin, Factory, Briefcase,
  MessageSquare, Mail, Settings, LogOut, ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", href: "/wah", icon: LayoutDashboard },
  { label: "Blog Posts", href: "/wah/blog", icon: FileText },
  { label: "Case Studies", href: "/wah/case-studies", icon: Briefcase },
  { label: "Testimonials", href: "/wah/testimonials", icon: MessageSquare },
  { label: "Leads", href: "/wah/leads", icon: Mail },
  { label: "Settings", href: "/wah/settings", icon: Settings },
];

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/wah/login");
    }
  }, [loading, user, isAdmin, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-sidebar-background flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" /> Back to Site
          </Link>
          <h2 className="mt-3 text-lg font-bold">
            <span className="text-gradient">Admin</span> Panel
          </h2>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2 px-3 truncate">{user.email}</p>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground"
            onClick={() => signOut().then(() => navigate("/wah/login"))}
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <header className="border-b border-border px-8 py-5">
          <h1 className="text-2xl font-bold">{title}</h1>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
