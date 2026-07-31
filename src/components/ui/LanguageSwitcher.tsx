import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇦🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

export function LanguageSwitcher({ variant = "light" }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, autoDetected } = useLanguage();
  const controls = useAnimationControls();

  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Vibrate the language button on home load when we auto-picked a non-English locale,
  // to nudge visitors to confirm/change their language.
  useEffect(() => {
    if (!autoDetected) return;
    const isHome = typeof window !== 'undefined' && window.location.pathname === '/';
    if (!isHome) return;
    const t = setTimeout(() => {
      controls.start({
        x: [0, -3, 3, -3, 3, -2, 2, 0],
        transition: { duration: 0.8, repeat: 2, repeatDelay: 1.5 },
      });
    }, 900);
    return () => clearTimeout(t);
  }, [autoDetected, controls]);

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        animate={controls}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
          variant === "dark"
            ? "bg-white/10 text-white hover:bg-white/20"
            : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
        <span className="hidden lg:inline">{currentLang.name}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 bg-card rounded-2xl shadow-xl border border-border overflow-hidden z-50"
            >
              <div className="p-2 max-h-80 overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                      currentLang.code === lang.code
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {currentLang.code === lang.code && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto text-primary"
                      >
                        ✓
                      </motion.span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
