import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    content: `Artificial intelligence is rapidly transforming web development. From automated code generation to intelligent design systems, AI tools are reshaping how developers build websites and applications.\n\n## AI-Powered Code Generation\nTools like GitHub Copilot and ChatGPT are helping developers write code faster. These AI assistants can suggest entire code blocks, debug issues, and even generate full components based on natural language descriptions.\n\n## Intelligent Design Systems\nAI is also revolutionizing design. Platforms can now generate layouts, color schemes, and typography combinations that are optimized for user engagement and accessibility.\n\n## Personalized User Experiences\nMachine learning algorithms analyze user behavior to deliver personalized content, product recommendations, and dynamic interfaces that adapt to individual preferences.\n\n## Automated Testing & QA\nAI-driven testing tools can identify bugs, predict potential issues, and automatically generate test cases, significantly reducing the time needed for quality assurance.\n\n## The Road Ahead\nAs AI continues to evolve, we can expect even more sophisticated tools that blur the line between human creativity and machine efficiency. The key is to embrace these technologies while maintaining the human touch that makes great digital experiences.`,
    category: "Technology",
    author: "Sheraz Khan",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Mobile-First Design: Why It Matters",
    content: `In today's digital landscape, more than 60% of web traffic comes from mobile devices. This makes mobile-first design not just a trend, but a necessity.\n\n## What is Mobile-First Design?\nMobile-first design is an approach where you design for the smallest screen first, then progressively enhance the experience for larger screens.\n\n## Benefits of Mobile-First\n- **Better Performance**: Streamlined designs load faster on mobile networks\n- **Improved SEO**: Google uses mobile-first indexing\n- **Higher Engagement**: Users stay longer on well-optimized mobile sites\n- **Wider Reach**: Accessible to users in regions where mobile is the primary device\n\n## Key Principles\n1. **Content Priority**: Focus on essential content first\n2. **Touch-Friendly**: Design for finger taps, not mouse clicks\n3. **Progressive Enhancement**: Add complexity for larger screens\n4. **Performance Budget**: Set strict limits on page weight\n\n## Implementation Tips\nStart with a single-column layout, use relative units, implement lazy loading, and test on real devices throughout development.`,
    category: "Design",
    author: "Sarah Ahmed",
    date: "Jan 12, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "SEO Trends to Watch in 2025",
    content: `Search engine optimization continues to evolve. Here are the key trends shaping SEO in 2025.\n\n## AI-Generated Content & E-E-A-T\nGoogle's algorithms are becoming better at evaluating content quality. Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are more important than ever.\n\n## Voice Search Optimization\nWith smart speakers and voice assistants becoming ubiquitous, optimizing for conversational queries is crucial.\n\n## Core Web Vitals 2.0\nGoogle continues to refine its performance metrics. Interaction to Next Paint (INP) has replaced First Input Delay as a Core Web Vital.\n\n## Zero-Click Searches\nMore searches result in answers directly on the SERP. Structured data and featured snippet optimization are key.\n\n## Video SEO\nVideo content continues to dominate. Optimizing video titles, descriptions, and transcripts is essential.\n\n## Local SEO Evolution\nGoogle Business Profiles, local reviews, and proximity-based results continue to grow in importance for local businesses.`,
    category: "Marketing",
    author: "Ahmed Hassan",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Building Scalable E-Commerce Platforms",
    content: `Creating an e-commerce platform that can handle growth requires careful planning and the right technology choices.\n\n## Choosing the Right Architecture\nMicroservices architecture allows different parts of your platform to scale independently. This is crucial for handling traffic spikes during sales events.\n\n## Database Strategy\nUse a combination of relational databases for transactions and NoSQL databases for product catalogs and session management.\n\n## CDN & Caching\nImplement a robust CDN strategy to serve static assets quickly worldwide. Use Redis or Memcached for server-side caching.\n\n## Payment Processing\nIntegrate multiple payment gateways for redundancy. Support local payment methods for international markets.\n\n## Performance Optimization\n- Implement lazy loading for product images\n- Use server-side rendering for SEO\n- Optimize database queries with proper indexing\n- Implement connection pooling\n\n## Security Considerations\nPCI DSS compliance, SSL certificates, secure authentication, and regular security audits are non-negotiable.`,
    category: "Technology",
    author: "Sheraz Khan",
    date: "Jan 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
  },
  {
    id: 5,
    title: "The Psychology of Color in Branding",
    content: `Color is one of the most powerful tools in a brand's arsenal. Understanding color psychology can help you create more effective brand identities.\n\n## How Colors Influence Perception\n- **Red**: Energy, urgency, passion — used by Coca-Cola, Netflix\n- **Blue**: Trust, stability, professionalism — used by Facebook, IBM\n- **Green**: Growth, health, nature — used by Whole Foods, Spotify\n- **Yellow**: Optimism, warmth, attention — used by McDonald's, IKEA\n- **Purple**: Luxury, creativity, wisdom — used by Cadbury, Hallmark\n\n## Cultural Considerations\nColors carry different meanings across cultures. White symbolizes purity in Western cultures but mourning in some Asian cultures.\n\n## Choosing Your Brand Palette\n1. Define your brand personality\n2. Research your target audience\n3. Analyze competitor colors\n4. Test combinations for accessibility\n5. Create a comprehensive style guide\n\n## The 60-30-10 Rule\nUse your primary color for 60% of the design, secondary for 30%, and accent for 10%. This creates visual hierarchy and balance.`,
    category: "Design",
    author: "Fatima Ali",
    date: "Jan 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Case Study: 300% Revenue Growth",
    content: `Discover how we helped a fashion brand transform their digital presence and achieve remarkable growth.\n\n## The Challenge\nOur client, a boutique fashion brand, was struggling with low online visibility and stagnant sales despite having quality products.\n\n## Our Approach\n1. **Complete Website Redesign**: Built a modern, mobile-first e-commerce platform\n2. **SEO Overhaul**: Implemented technical SEO improvements and content strategy\n3. **Social Media Strategy**: Created engaging content across Instagram and TikTok\n4. **Email Marketing**: Set up automated email flows for cart abandonment and retention\n\n## The Results\n- **300% increase in online revenue** within 6 months\n- **150% increase in organic traffic**\n- **45% improvement in conversion rate**\n- **2x increase in average order value**\n\n## Key Takeaways\nA holistic digital strategy combining great design, technical excellence, and targeted marketing can produce extraordinary results. The key is consistency and data-driven decision making.`,
    category: "Case Studies",
    author: "Sheraz Khan",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">← Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8">
          <div className="container-wide max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image */}
        <section className="pb-8">
          <div className="container-wide max-w-4xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-3xl"
            />
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="container-wide max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return <h2 key={i} className="font-display text-2xl font-bold mt-10 mb-4 text-foreground">{paragraph.replace("## ", "")}</h2>;
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  return (
                    <ol key={i} className="space-y-2 my-4 list-decimal list-inside">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                      ))}
                    </ol>
                  );
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
              })}
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="flex items-center gap-4">
                <Share2 className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
