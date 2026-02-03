import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  technology: string;
  industry: string;
  image: string;
  result: string;
  link?: string;
}

const mockPortfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Fashion Platform",
    description: "Full-featured online store for luxury fashion brand",
    category: "E-Commerce",
    technology: "Shopify",
    industry: "Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    result: "300% increase in sales"
  },
  {
    id: 2,
    title: "Healthcare Patient Portal",
    description: "Patient management system for healthcare provider",
    category: "Web",
    technology: "React",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
    result: "50% reduction in wait times"
  },
  {
    id: 3,
    title: "Food Delivery App",
    description: "On-demand food delivery platform",
    category: "Mobile",
    technology: "Flutter",
    industry: "Food & Restaurant",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop",
    result: "500K+ downloads"
  }
];

const categories = ["Web", "Mobile", "E-Commerce", "Branding", "Marketing"];
const technologies = ["React", "WordPress", "Flutter", "Shopify", "Laravel", "Next.js"];

const AdminPortfolio = () => {
  const [items, setItems] = useState<PortfolioItem[]>(mockPortfolio);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    technology: "",
    industry: "",
    image: "",
    result: "",
    link: ""
  });
  const { toast } = useToast();

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.technology.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingItem) {
      setItems(prev => prev.map(i => 
        i.id === editingItem.id ? { ...i, ...formData } : i
      ));
      toast({ title: "Item updated", description: "Portfolio item has been updated." });
    } else {
      const newItem: PortfolioItem = {
        id: Date.now(),
        ...formData
      };
      setItems(prev => [newItem, ...prev]);
      toast({ title: "Item created", description: "New portfolio item has been added." });
    }

    setIsDialogOpen(false);
    setEditingItem(null);
    setFormData({ title: "", description: "", category: "", technology: "", industry: "", image: "", result: "", link: "" });
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      technology: item.technology,
      industry: item.industry,
      image: item.image,
      result: item.result,
      link: item.link || ""
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
    toast({ title: "Item deleted", description: "Portfolio item has been removed." });
  };

  const openNewItem = () => {
    setEditingItem(null);
    setFormData({ title: "", description: "", category: "", technology: "", industry: "", image: "", result: "", link: "" });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Portfolio</h1>
          <p className="text-muted-foreground">Manage your portfolio items</p>
        </div>
        <Button onClick={openNewItem} variant="hero" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 rounded-full"
        />
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 flex gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-white">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent">{item.technology}</span>
                <span>•</span>
                <span>{item.industry}</span>
              </div>
              <h3 className="font-display font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
              <p className="text-sm font-medium text-primary mb-4">{item.result}</p>
              <div className="flex items-center justify-between">
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    View Live
                  </a>
                )}
                <div className="flex gap-2 ml-auto">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(item)} className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleDelete(item.id)}
                    className="h-8 w-8 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found.</p>
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Project" : "Add Project"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Project title"
                required
                className="rounded-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description"
                rows={2}
                required
                className="rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Technology</Label>
                <Select
                  value={formData.technology}
                  onValueChange={(value) => setFormData({ ...formData, technology: value })}
                >
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {technologies.map((tech) => (
                      <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="e.g., Healthcare, Finance"
                className="rounded-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="result">Result / Impact</Label>
              <Input
                id="result"
                value={formData.result}
                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                placeholder="e.g., 300% increase in sales"
                className="rounded-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://..."
                className="rounded-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="link">Live URL (optional)</Label>
              <Input
                id="link"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://..."
                className="rounded-full"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" variant="hero" className="flex-1">
                {editingItem ? "Update" : "Create"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPortfolio;
