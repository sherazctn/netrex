import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  autoDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect language from browser/region. Runs once when there's no stored pref.
function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  const raw = (navigator.language || 'en').toLowerCase();
  const primary = raw.split('-')[0];
  const region = raw.split('-')[1] || '';

  // Arabic countries (region-based when browser is en)
  const arabicRegions = ['ae', 'sa', 'kw', 'qa', 'bh', 'om', 'eg', 'jo', 'lb'];
  if (primary === 'ar' || arabicRegions.includes(region)) return 'ar';
  if (primary === 'zh') return 'zh';
  if (primary === 'fr') return 'fr';
  if (primary === 'es') return 'es';
  if (primary === 'de') return 'de';
  if (primary === 'ru') return 'ru';
  if (primary === 'pt') return 'pt';
  if (primary === 'ja') return 'ja';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [autoDetected, setAutoDetected] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('netrex-language') as Language | null;
    if (stored) {
      setLanguageState(stored);
    } else {
      const detected = detectLanguage();
      setLanguageState(detected);
      // Only mark as auto-detected when it's a non-English pick
      if (detected !== 'en') setAutoDetected(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('netrex-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setAutoDetected(false);
    setLanguageState(lang);
  };

  const t = (key: string) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, autoDetected }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
