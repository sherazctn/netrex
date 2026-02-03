import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Trash2, 
  Mail,
  Phone,
  Calendar,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  date: string;
  status: "new" | "read" | "replied";
}

const mockContacts: Contact[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@company.com",
    phone: "+1 234 567 8900",
    company: "Tech Corp",
    message: "We're interested in building a new e-commerce platform for our business. Can you provide a quote?",
    date: "2025-01-15 10:30",
    status: "new"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@startup.io",
    phone: "+1 987 654 3210",
    company: "Startup.io",
    message: "Looking for a mobile app development team. We have a project deadline in 3 months.",
    date: "2025-01-15 08:15",
    status: "new"
  },
  {
    id: 3,
    name: "Mike Brown",
    email: "mike@enterprise.com",
    phone: "+44 20 1234 5678",
    company: "Enterprise Ltd",
    message: "Need help with digital marketing and SEO for our corporate website.",
    date: "2025-01-14 16:45",
    status: "read"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@agency.co",
    phone: "+971 50 123 4567",
    company: "Creative Agency",
    message: "Interested in a complete rebrand including logo, website, and marketing materials.",
    date: "2025-01-14 09:00",
    status: "replied"
  },
  {
    id: 5,
    name: "Ahmed Hassan",
    email: "ahmed@fintech.ae",
    phone: "+971 55 987 6543",
    company: "FinTech Solutions",
    message: "We need a secure payment gateway integration for our banking app.",
    date: "2025-01-13 14:20",
    status: "replied"
  },
];

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleView = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);
    // Mark as read
    setContacts(prev => 
      prev.map(c => c.id === contact.id ? { ...c, status: "read" as const } : c)
    );
  };

  const handleDelete = (id: number) => {
    setContacts(prev => prev.filter(c => c.id !== id));
    toast({
      title: "Contact deleted",
      description: "The contact submission has been removed.",
    });
  };

  const handleExport = () => {
    const csv = [
      ["Name", "Email", "Phone", "Company", "Message", "Date", "Status"],
      ...contacts.map(c => [c.name, c.email, c.phone, c.company, c.message, c.date, c.status])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.csv";
    a.click();
    
    toast({
      title: "Export successful",
      description: "Contacts have been exported to CSV.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Contact Submissions</h1>
          <p className="text-muted-foreground">Manage contact form submissions</p>
        </div>
        <Button onClick={handleExport} variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full"
          />
        </div>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Company</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell className="hidden md:table-cell">{contact.company}</TableCell>
                <TableCell className="hidden lg:table-cell">{contact.date}</TableCell>
                <TableCell>
                  <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                    contact.status === "new" 
                      ? "bg-primary/10 text-primary" 
                      : contact.status === "replied"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {contact.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleView(contact)}
                      className="h-8 w-8"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(contact.id)}
                      className="h-8 w-8 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No contacts found.</p>
          </div>
        )}
      </motion.div>

      {/* View Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                  {selectedContact.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{selectedContact.name}</h3>
                  <p className="text-muted-foreground">{selectedContact.company}</p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href={`mailto:${selectedContact.email}`} className="hover:text-primary">
                    {selectedContact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href={`tel:${selectedContact.phone}`} className="hover:text-primary">
                    {selectedContact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>{selectedContact.date}</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Message</h4>
                <p className="text-muted-foreground p-4 rounded-xl bg-secondary/50">
                  {selectedContact.message}
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="hero" className="flex-1" asChild>
                  <a href={`mailto:${selectedContact.email}`}>
                    <Mail className="h-4 w-4" />
                    Reply via Email
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={`https://wa.me/${selectedContact.phone.replace(/\D/g, "")}`} target="_blank">
                    Reply via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminContacts;
