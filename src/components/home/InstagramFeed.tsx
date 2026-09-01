import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const PROFILE_URL = "https://www.instagram.com/netrex.official";

interface FeedItem {
  id: string;
  caption: string;
  permalink: string;
  timestamp?: string;
  image: string;
  mediaType?: string;
}

// Shown until the Instagram connection is live, so the section never looks broken.
const placeholders = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop",
];

export function InstagramFeed() {
  const { t } = useLanguage();
  const [items, setItems] = useState<FeedItem[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("instagram-feed");
        if (error || !active) return;
        if (data?.connected && Array.isArray(data.items) && data.items.length) {
          setItems(data.items.slice(0, 6));
          setConnected(true);
        }
      } catch {
        /* fall back to placeholders */
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const tiles: FeedItem[] = connected
    ? items
    : placeholders.map((image, i) => ({
        id: `ph-${i}`,
        caption: "",
        permalink: PROFILE_URL,
        image,
      }));

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 -left-24 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              <Instagram className="h-4 w-4" />
              {t("instagram.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("instagram.title")}{" "}
              <span className="text-primary">@netrex.official</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t("instagram.desc")}</p>
          </div>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            {t("instagram.follow")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {tiles.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted"
            >
              <img
                src={item.image}
                alt={item.caption?.slice(0, 110) || `NETREX Instagram post ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-foreground/0 p-3 opacity-0 transition-all duration-300 group-hover:bg-foreground/60 group-hover:opacity-100">
                <span className="flex items-center gap-2 text-xs font-medium text-background">
                  <Heart className="h-3.5 w-3.5" />
                  {t("instagram.view")}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
