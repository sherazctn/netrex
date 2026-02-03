import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Edit, 
  Trash2, 
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface Office {
  id: number;
  country: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  isHQ: boolean;
  flag: string;
}

const mockOffices: Office[] = [
  {
    id: 1,
    country: "UAE",
    city: "Dubai",
    address: "Office 523, Block-C, 9W Dubai Airport Free Zone",
    phone: "+971 50 200 8313",
    email: "contact@netrex.ae",
    timezone: "GMT+4",
    isHQ: true,
    flag: "🇦🇪"
  },
  {
    id: 2,
    country: "USA",
    city: "New York",
    address: "418 Broadway STE N, Albany, New York 12207",
    phone: "+1 234 567 8900",
    email: "usa@netrex.ae",
    timezone: "GMT-5",
    isHQ: false,
    flag: "🇺🇸"
  },
  {
    id: 3,
    country: "UK",
    city: "London",
    address: "71-75 Shelton Street, Covent Garden, London",
    phone: "+44 20 1234 5678",
    email: "uk@netrex.ae",
    timezone: "GMT",
    isHQ: false,
    flag: "🇬🇧"
  },
  {
    id: 4,
    country: "Canada",
    city: "Vancouver",
    address: "1575 West Georgia Street, Vancouver, BC",
    phone: "+1 604 123 4567",
    email: "canada@netrex.ae",
    timezone: "GMT-8",
    isHQ: false,
    flag: "🇨🇦"
  },
  {
    id: 5,
    country: "Australia",
    city: "Brisbane",
    address: "240 Queen St, Brisbane City QLD 4000",
    phone: "+61 7 1234 5678",
    email: "australia@netrex.ae",
    timezone: "GMT+10",
    isHQ: false,
    flag: "🇦🇺"
  },
  {
    id: 6,
    country: "Pakistan",
    city: "Lahore",
    address: "21, J3 Johar Town, Lahore, Punjab",
    phone: "+92 42 1234 5678",
    email: "pakistan@netrex.ae",
    timezone: "GMT+5",
    isHQ: false,
    flag: "🇵🇰"
  }
];

const AdminOffices = () => {
  const [offices, setOffices] = useState<Office[]>(mockOffices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingOffice, setEditingOffice] = useState<Office | null>(null);
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    timezone: "",
    isHQ: false,
    flag: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingOffice) {
      setOffices(prev => prev.map(o => 
        o.id === editingOffice.id ? { ...o, ...formData } : o
      ));
      toast({ title: "Office updated", description: "Office details have been updated." });
    } else {
      const newOffice: Office = {
        id: Date.now(),
        ...formData
      };
      setOffices(prev => [...prev, newOffice]);
      toast({ title: "Office added", description: "New office has been added." });
    }

    setIsDialogOpen(false);
    setEditingOffice(null);
    setFormData({ country: "", city: "", address: "", phone: "", email: "", timezone: "", isHQ: false, flag: "" });
  };

  const handleEdit = (office: Office) => {
    setEditingOffice(office);
    setFormData({
      country: office.country,
      city: office.city,
      address: office.address,
      phone: office.phone,
      email: office.email,
      timezone: office.timezone,
      isHQ: office.isHQ,
      flag: office.flag
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setOffices(prev => prev.filter(o => o.id !== id));
    toast({ title: "Office deleted", description: "Office has been removed." });
  };

  const openNewOffice = () => {
    setEditingOffice(null);
    setFormData({ country: "", city: "", address: "", phone: "", email: "", timezone: "", isHQ: false, flag: "" });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Office Locations</h1>
          <p className="text-muted-foreground">Manage your global office locations</p>
        </div>
        <Button onClick={openNewOffice} variant="hero" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Office
        </Button>
      </div>

      {/* Offices Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offices.map((office, index) => (
          <motion.div
            key={office.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative p-6 rounded-2xl border transition-shadow hover:shadow-lg ${
              office.isHQ 
                ? "bg-primary text-white border-primary" 
                : "bg-card border-border"
            }`}
          >
            {office.isHQ && (
              <span className="absolute -top-2 -right-2 px-3 py-1 text-xs font-bold bg-background text-foreground rounded-full">
                HQ
              </span>
            )}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{office.flag}</span>
                <div>
                  <h3 className="font-display font-bold text-lg">{office.city}</h3>
                  <p className={office.isHQ ? "text-white/80" : "text-muted-foreground"}>{office.country}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className={`flex items-start gap-2 text-sm ${office.isHQ ? "text-white/80" : "text-muted-foreground"}`}>
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{office.address}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${office.isHQ ? "text-white/80" : "text-muted-foreground"}`}>
                <Phone className="h-4 w-4" />
                <span>{office.phone}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${office.isHQ ? "text-white/80" : "text-muted-foreground"}`}>
                <Mail className="h-4 w-4" />
                <span>{office.email}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${office.isHQ ? "text-white/80" : "text-muted-foreground"}`}>
                <Clock className="h-4 w-4" />
                <span>{office.timezone}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-current/10">
              <Button 
                variant={office.isHQ ? "glass" : "ghost"} 
                size="sm" 
                onClick={() => handleEdit(office)}
                className="flex-1"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button 
                variant={office.isHQ ? "glass" : "ghost"} 
                size="sm" 
                onClick={() => handleDelete(office.id)}
                className={`flex-1 ${office.isHQ ? "" : "text-destructive hover:text-destructive"}`}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingOffice ? "Edit Office" : "Add Office"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="UAE"
                  required
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Dubai"
                  required
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Full address"
                required
                className="rounded-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 50 200 8313"
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@netrex.ae"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input
                  id="timezone"
                  value={formData.timezone}
                  onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                  placeholder="GMT+4"
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="flag">Flag Emoji</Label>
                <Input
                  id="flag"
                  value={formData.flag}
                  onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
                  placeholder="🇦🇪"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
              <div>
                <Label htmlFor="isHQ" className="font-medium">Headquarters</Label>
                <p className="text-sm text-muted-foreground">Mark as main office</p>
              </div>
              <Switch
                id="isHQ"
                checked={formData.isHQ}
                onCheckedChange={(checked) => setFormData({ ...formData, isHQ: checked })}
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" variant="hero" className="flex-1">
                {editingOffice ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminOffices;
