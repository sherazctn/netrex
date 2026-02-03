import { motion } from "framer-motion";
import { 
  MessageSquare, 
  FileText, 
  Briefcase, 
  TrendingUp,
  Eye,
  Users,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { 
    title: "Contact Submissions", 
    value: "127", 
    change: "+12%", 
    positive: true,
    icon: MessageSquare,
    href: "/admin/contacts"
  },
  { 
    title: "Blog Posts", 
    value: "24", 
    change: "+3", 
    positive: true,
    icon: FileText,
    href: "/admin/blog"
  },
  { 
    title: "Portfolio Items", 
    value: "45", 
    change: "+5", 
    positive: true,
    icon: Briefcase,
    href: "/admin/portfolio"
  },
  { 
    title: "Website Visitors", 
    value: "15.2K", 
    change: "+24%", 
    positive: true,
    icon: Eye,
    href: "#"
  },
];

const recentContacts = [
  { id: 1, name: "John Smith", email: "john@company.com", date: "2 hours ago", status: "new" },
  { id: 2, name: "Sarah Johnson", email: "sarah@startup.io", date: "5 hours ago", status: "new" },
  { id: 3, name: "Mike Brown", email: "mike@enterprise.com", date: "1 day ago", status: "read" },
  { id: 4, name: "Emily Davis", email: "emily@agency.co", date: "2 days ago", status: "replied" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              to={stat.href}
              className="block p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.positive ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.title}</div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-bold">Recent Contacts</h2>
            <Link to="/admin/contacts" className="text-primary text-sm hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentContacts.map((contact) => (
              <div 
                key={contact.id}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.email}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{contact.date}</div>
                  <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                    contact.status === "new" 
                      ? "bg-primary/10 text-primary" 
                      : contact.status === "replied"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {contact.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h2 className="font-display text-xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/admin/blog/new"
              className="p-6 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors text-center"
            >
              <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium">New Blog Post</div>
            </Link>
            <Link
              to="/admin/portfolio/new"
              className="p-6 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors text-center"
            >
              <Briefcase className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="font-medium">Add Portfolio</div>
            </Link>
            <Link
              to="/admin/contacts"
              className="p-6 rounded-xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-colors text-center"
            >
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="font-medium">View Messages</div>
            </Link>
            <Link
              to="/admin/settings"
              className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20 hover:bg-orange-500/10 transition-colors text-center"
            >
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <div className="font-medium">Manage Team</div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
