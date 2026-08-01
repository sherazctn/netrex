import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { getPostByIdOrSlug, blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = getPostByIdOrSlug(id ?? "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Article Not Found - NETREX Blog"
          description="This article does not exist or has been moved. Browse the NETREX Inc blog for the latest insights."
          canonical="https://netrex.lovable.app/blog"
          noindex
        />
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
  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "NETREX INC",
      logo: { "@type": "ImageObject", url: "https://netrex.lovable.app/favicon.ico" },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    keywords: (post.keywords ?? []).join(", "),
    mainEntityOfPage: `https://netrex.lovable.app/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://netrex.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://netrex.lovable.app/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://netrex.lovable.app/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title.length > 46 ? post.title : `${post.title} - NETREX Blog`}
        description={post.excerpt}
        canonical={`https://netrex.lovable.app/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        schema={{ "@context": "https://schema.org", "@graph": [articleSchema, breadcrumbSchema] }}
      />
      <Helmet>
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
      </Helmet>
      <Header />
      <main>
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
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2"><User className="h-4 w-4" />{post.author}</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{post.date}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

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

        <section className="pb-16">
          <div className="container-wide max-w-3xl mx-auto">
            <article className="prose prose-base max-w-none">
              {(() => {
                // Format inline: ***text*** → gradient, **text** → bold, *text* → italic
                const fmt = (s: string) =>
                  s
                    .replace(/\*\*\*(.+?)\*\*\*/g, '<span class="text-gradient font-bold">$1</span>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
                    .replace(/(^|[\s(])\*([^*\n]+?)\*(?=[\s.,;:!?)]|$)/g, '$1<em class="italic text-foreground/90">$2</em>');
                return post.content.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return <h2 key={i} className="font-display text-xl md:text-2xl font-bold mt-8 mb-3 text-foreground leading-snug" dangerouslySetInnerHTML={{ __html: fmt(paragraph.replace("## ", "")) }} />;
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-2 my-4">
                        {paragraph.split("\n").map((item, j) => (
                          <li key={j} className="text-muted-foreground flex items-start gap-2 leading-relaxed text-[15px] md:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: fmt(item.replace("- ", "")) }} />
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d\./)) {
                    return (
                      <ol key={i} className="space-y-2 my-4 list-decimal list-inside marker:text-primary marker:font-bold">
                        {paragraph.split("\n").map((item, j) => (
                          <li key={j} className="text-muted-foreground leading-relaxed text-[15px] md:text-base" dangerouslySetInnerHTML={{ __html: fmt(item.replace(/^\d+\.\s*/, "")) }} />
                        ))}
                      </ol>
                    );
                  }
                  return <p key={i} className="text-muted-foreground leading-relaxed mb-5 text-[15px] md:text-base" dangerouslySetInnerHTML={{ __html: fmt(paragraph) }} />;
                });
              })()}
            </article>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4 flex-wrap">
                <Share2 className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                <div className="flex gap-2">
                  <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="font-display text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link key={r.id} to={`/blog/${r.slug}`} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all">
                      <img src={r.image} alt={r.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="p-4">
                        <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">{r.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
