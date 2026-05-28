import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: object;
  noindex?: boolean;
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
}: SEOProps) {
  const fullTitle = title.includes("NETREX") ? title : `${title} — NETREX Inc`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
