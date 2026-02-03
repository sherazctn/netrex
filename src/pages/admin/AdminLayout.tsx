import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  Building2, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import netrexLogo from "@/assets/netrex-logo.png";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Contact Submissions", href: "/admin/contacts", icon: MessageSquare },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Portfolio", href: "/admin/portfolio", icon: Briefcase },
  { name: "Offices", href: "/admin/offices", icon: Building2 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check auth
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } hidden lg:block`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <img src={netrexLogo} alt="NETREX" className="h-10" />
              {isSidebarOpen && (
                <span className="font-display font-bold text-lg">Admin</span>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <link.icon className="h-5 w-5 flex-shrink-0" />
                {isSidebarOpen && <span>{link.name}</span>}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-3 top-20 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white"
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${isSidebarOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <img src={netrexLogo} alt="NETREX" className="h-8" />
            <span className="font-display font-bold">Admin</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-secondary"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden fixed inset-0 top-14 z-40 bg-card"
        >
          <nav className="p-4 space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"} pt-14 lg:pt-0`}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
