// Per-language / per-market SEO metadata for NETREX INC.
// Keywords are native-language, high-intent terms researched per office market,
// not literal translations of English marketing copy.

import type { Language } from "@/lib/translations";

export interface LocaleSEO {
  htmlLang: string;
  dir: "ltr" | "rtl";
  hreflang: string;
  homeTitle: string;
  homeDescription: string;
  keywords: string[];
}

// hreflang codes map to the primary market for each office/language pairing.
export const LOCALE_SEO: Record<Language, LocaleSEO> = {
  en: {
    htmlLang: "en",
    dir: "ltr",
    hreflang: "en",
    homeTitle: "NETREX Inc | Digital Marketing & Web Development Agency",
    homeDescription:
      "Global digital agency for web development, mobile apps, AI automation, branding, e-commerce, SEO & GEO. Offices in Dubai, New York, London, Vancouver, Melbourne & Singapore.",
    keywords: [
      "digital agency Dubai",
      "web development company UAE",
      "mobile app development agency USA",
      "web design agency London",
      "digital marketing agency New York",
      "SEO agency Singapore",
      "app development company Vancouver",
      "branding agency Melbourne",
      "generative engine optimization agency",
      "AI automation agency",
      "e-commerce development company",
      "ChatGPT SEO agency",
    ],
  },
  de: {
    htmlLang: "de",
    dir: "ltr",
    hreflang: "de",
    homeTitle: "NETREX Inc | Webentwicklung Agentur & Digitalagentur Berlin",
    homeDescription:
      "Webentwicklung Agentur und Digitalagentur in Berlin: App Entwicklung, SEO Agentur, E-Commerce und KI Automatisierung fuer Unternehmen in Deutschland und weltweit.",
    keywords: [
      "Webentwicklung Agentur",
      "Digitalagentur Berlin",
      "App Entwicklung Firma",
      "Webdesign Agentur Deutschland",
      "SEO Agentur Berlin",
      "E-Commerce Agentur",
      "KI Automatisierung Unternehmen",
      "Softwareentwicklung Berlin",
      "Online Marketing Agentur",
      "Suchmaschinenoptimierung Agentur",
    ],
  },
  fr: {
    htmlLang: "fr",
    dir: "ltr",
    hreflang: "fr",
    homeTitle: "NETREX Inc | Agence Web & Agence Digitale",
    homeDescription:
      "Agence web et agence digitale specialisee en developpement d'application mobile, creation de site internet et referencement SEO pour entreprises internationales.",
    keywords: [
      "agence web",
      "agence digitale",
      "developpement application mobile",
      "creation site internet",
      "referencement SEO",
      "agence de marketing digital",
      "agence de developpement web",
      "agence e-commerce",
      "optimisation moteur de recherche generatif",
      "agence branding",
    ],
  },
  es: {
    htmlLang: "es",
    dir: "ltr",
    hreflang: "es",
    homeTitle: "NETREX Inc | Agencia de Desarrollo Web y Marketing Digital",
    homeDescription:
      "Agencia de desarrollo web y marketing digital: desarrollo de aplicaciones moviles, diseno web, posicionamiento SEO y automatizacion con IA para empresas globales.",
    keywords: [
      "agencia de desarrollo web",
      "agencia de marketing digital",
      "desarrollo de aplicaciones moviles",
      "diseno web profesional",
      "agencia de posicionamiento SEO",
      "agencia de branding",
      "tienda online ecommerce",
      "automatizacion con inteligencia artificial",
    ],
  },
  ar: {
    htmlLang: "ar",
    dir: "rtl",
    hreflang: "ar",
    homeTitle: "نتركس | شركة تطوير مواقع وتسويق رقمي في دبي والرياض",
    homeDescription:
      "شركة تطوير مواقع وتطبيقات جوال وتسويق رقمي وتحسين محركات البحث في دبي والرياض، مع حلول الذكاء الاصطناعي وتحسين الظهور في محركات الإجابة الذكية.",
    keywords: [
      "شركة تطوير مواقع دبي",
      "شركة تسويق رقمي الرياض",
      "شركة تطبيقات جوال السعودية",
      "تصميم مواقع الكترونية الامارات",
      "شركة تحسين محركات البحث",
      "شركة برمجة تطبيقات",
      "شركة تجارة الكترونية",
      "أتمتة الذكاء الاصطناعي للشركات",
    ],
  },
  zh: {
    htmlLang: "zh",
    dir: "ltr",
    hreflang: "zh",
    homeTitle: "NETREX Inc | 网站开发与数字营销公司",
    homeDescription:
      "专业网站开发、移动应用开发、品牌设计、搜索引擎优化与人工智能自动化服务，服务全球客户，覆盖新加坡及亚太市场。",
    keywords: [
      "网站开发公司",
      "移动应用开发公司",
      "数字营销公司",
      "搜索引擎优化服务",
      "品牌设计公司",
      "电子商务网站开发",
      "人工智能自动化服务",
      "新加坡网站建设",
    ],
  },
  ru: {
    htmlLang: "ru",
    dir: "ltr",
    hreflang: "ru",
    homeTitle: "NETREX Inc | Разработка сайтов и цифровой маркетинг",
    homeDescription:
      "Агентство разработки сайтов, мобильных приложений и цифрового маркетинга: SEO продвижение, брендинг, e-commerce и автоматизация с ИИ для бизнеса по всему миру.",
    keywords: [
      "разработка сайтов",
      "агентство цифрового маркетинга",
      "разработка мобильных приложений",
      "seo продвижение сайта",
      "агентство брендинга",
      "разработка интернет магазина",
      "автоматизация бизнеса с ии",
    ],
  },
  pt: {
    htmlLang: "pt",
    dir: "ltr",
    hreflang: "pt",
    homeTitle: "NETREX Inc | Agencia de Desenvolvimento Web e Marketing Digital",
    homeDescription:
      "Agencia de desenvolvimento web e marketing digital: criacao de aplicativos moveis, design de sites, otimizacao SEO e automacao com inteligencia artificial.",
    keywords: [
      "agencia de desenvolvimento web",
      "agencia de marketing digital",
      "desenvolvimento de aplicativos moveis",
      "criacao de sites profissionais",
      "agencia de otimizacao SEO",
      "agencia de branding",
      "loja virtual e-commerce",
    ],
  },
  ja: {
    htmlLang: "ja",
    dir: "ltr",
    hreflang: "ja",
    homeTitle: "NETREX Inc | ウェブ制作・デジタルマーケティング会社",
    homeDescription:
      "ウェブ制作、アプリ開発、SEO対策、ブランディング、AI自動化までを提供するグローバルデジタルエージェンシー。",
    keywords: [
      "ウェブ制作会社",
      "アプリ開発会社",
      "デジタルマーケティング会社",
      "SEO対策会社",
      "ブランディング会社",
      "ECサイト制作",
      "AI自動化 導入支援",
    ],
  },
};

// x-default and per-language hreflang link targets, keyed by hreflang code.
export const HREFLANG_CODES: { code: string; lang: Language | "x-default" }[] = [
  { code: "x-default", lang: "en" },
  { code: "en", lang: "en" },
  { code: "ar", lang: "ar" },
  { code: "zh", lang: "zh" },
  { code: "fr", lang: "fr" },
  { code: "es", lang: "es" },
  { code: "de", lang: "de" },
  { code: "ru", lang: "ru" },
  { code: "pt", lang: "pt" },
  { code: "ja", lang: "ja" },
];

export function getLocaleSEO(lang: Language): LocaleSEO {
  return LOCALE_SEO[lang] || LOCALE_SEO.en;
}
