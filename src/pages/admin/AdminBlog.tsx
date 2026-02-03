import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Tag
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
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  status: "draft" | "published";
  image: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Explore how artificial intelligence is transforming the way we build websites.",
    category: "Technology",
    author: "Sheraz Khan",
    date: "2025-01-15",
    status: "published",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Mobile-First Design: Why It Matters",
    excerpt: "Learn why designing for mobile devices first leads to better user experiences.",
    category: "Design",
    author: "Sarah Ahmed",
    date: "2025-01-12",
    status: "published",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "SEO Trends to Watch in 2025",
    excerpt: "Stay ahead of the competition with these emerging SEO strategies.",
    category: "Marketing",
    author: "Ahmed Hassan",
    date: "2025-01-10",
    status: "draft",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop"
  },
];

const categories = ["Technology", "Design", "Marketing", "Business", "Case Studies"];

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "",
    author: "Sheraz Khan",
    status: "draft" as "draft" | "published",
    image: ""
  });
  const { toast } = useToast();

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      setPosts(prev => prev.map(p => 
        p.id === editingPost.id 
          ? { ...p, ...formData, date: new Date().toISOString().split("T")[0] }
          : p
      ));
      toast({ title: "Post updated", description: "Blog post has been updated successfully." });
    } else {
      const newPost: BlogPost = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split("T")[0]
      };
      setPosts(prev => [newPost, ...prev]);
      toast({ title: "Post created", description: "New blog post has been created." });
    }

    setIsDialogOpen(false);
    setEditingPost(null);
    setFormData({ title: "", excerpt: "", category: "", author: "Sheraz Khan", status: "draft", image: "" });
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      author: post.author,
      status: post.status,
      image: post.image
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setPosts(prev => prev.filter(p => p.id !== id));
    toast({ title: "Post deleted", description: "Blog post has been removed." });
  };

  const openNewPost = () => {
    setEditingPost(null);
    setFormData({ title: "", excerpt: "", category: "", author: "Sheraz Khan", status: "draft", image: "" });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Button onClick={openNewPost} variant="hero" className="gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 rounded-full"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${
                post.status === "published" 
                  ? "bg-green-500 text-white" 
                  : "bg-yellow-500 text-white"
              }`}>
                {post.status}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Tag className="h-3 w-3" />
                {post.category}
                <span className="mx-1">•</span>
                <Calendar className="h-3 w-3" />
                {post.date}
              </div>
              <h3 className="font-display font-bold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.author}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(post)} className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleDelete(post.id)}
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

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found.</p>
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingPost ? "Edit Post" : "New Blog Post"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter post title"
                required
                className="rounded-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief description of the post"
                rows={3}
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
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: "draft" | "published") => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger className="rounded-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" variant="hero" className="flex-1">
                {editingPost ? "Update" : "Create"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlog;
