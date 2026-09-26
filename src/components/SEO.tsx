import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocaleSEO } from "@/lib/seo/keywords";
import { getPageMeta } from "@/lib/seo/pageMeta";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: object;
  noindex?: boolean;
  /** Optional per-language title overrides, keyed by language code. Falls back to `title`. */
  titleByLang?: Partial<Record<string, string>>;
  /** Optional per-language description overrides, keyed by language code. Falls back to `description`. */
  descriptionByLang?: Partial<Record<string, string>>;
  /** Optional per-language keyword clusters to emit as a meta keywords tag. */
  keywordsByLang?: Partial<Record<string, string[]>>;
}

const BASE_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/Vqfx8FUdYFXXlOeozfpTxyqtN652/social-images/social-1770045593276-343577505_926536685332507_7368618473633021357_n (3).jpg";


export function SEO({
  title,
  description,
  canonical,
  ogImage = BASE_OG_IMAGE,
  ogType = "website",
  schema,
  noindex = false,
  titleByLang,
  descriptionByLang,
  keywordsByLang,
}: SEOProps) {
  const { language } = useLanguage();
  const locale = getLocaleSEO(language);

  // Curated English title/description per path (see src/lib/seo/pageMeta.ts); noindex pages keep their own.
  const pageMeta = noindex ? undefined : getPageMeta(canonical);
  const localizedTitle = titleByLang?.[language] ?? pageMeta?.title ?? title;
  const localizedDescription = descriptionByLang?.[language] ?? pageMeta?.description ?? description;
  const localizedKeywords = keywordsByLang?.[language] ?? locale.keywords;

  const fullTitle = localizedTitle.includes("NETREX") ? localizedTitle : `${localizedTitle} - NETREX Inc`;

  // The static index.html ships a sitewide description/robots for non-JS crawlers.
  // Once a route mounts, drop those unmanaged duplicates so each page has exactly one.
  useEffect(() => {
    const strip = () => {
      ["description", "robots"].forEach((name) => {
        document
          .querySelectorAll(`head meta[name="${name}"]:not([data-rh])`)
          .forEach((el) => el.remove());
      });
      document
        .querySelectorAll('head link[rel="canonical"]:not([data-rh])')
        .forEach((el) => el.remove());
      document
        .querySelectorAll('head link[rel="alternate"][hreflang]:not([data-rh])')
        .forEach((el) => el.remove());
      // index.html ships homepage social tags; drop them so each page has only its own og:/twitter: tags.
      document
        .querySelectorAll('head meta[property^="og:"]:not([data-rh]), head meta[name^="twitter:"]:not([data-rh]):not([name="twitter:site"])')
        .forEach((el) => el.remove());
    };
    strip();
    const id = window.requestAnimationFrame(strip);
    return () => window.cancelAnimationFrame(id);
  }, [localizedDescription, canonical, noindex]);

  // Keep <html lang>/dir in sync as a safety net; LanguageContext already sets this on
  // language change, but this guarantees the SEO component reflects the active language too.
  useEffect(() => {
    document.documentElement.lang = locale.htmlLang;
    document.documentElement.dir = locale.dir;
  }, [locale]);

  return (
    <Helmet>
      <html lang={locale.htmlLang} dir={locale.dir} />
      <title>{fullTitle}</title>
      <meta name="description" content={localizedDescription} />
      {localizedKeywords && localizedKeywords.length > 0 && (
        <meta name="keywords" content={localizedKeywords.join(", ")} />
      )}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"}
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={localizedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale.htmlLang} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={localizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
