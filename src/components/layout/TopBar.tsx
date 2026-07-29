import { Mail, Phone, MapPin } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function TopBar() {
  const { t } = useLanguage();
  return (
    <div className="hidden md:block bg-[#111] text-white/90 text-xs border-b border-white/10">
      <div className="container-wide flex items-center justify-between h-9">
        <div className="flex items-center gap-5">
          <a
            href="tel:+971502008313"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span>+971 50 200 8313</span>
          </a>
          <a
            href="mailto:info@netrexinc.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="h-3 w-3" />
            <span>info@netrexinc.com</span>
          </a>
          <span className="hidden lg:flex items-center gap-1.5 text-white/60">
            <MapPin className="h-3 w-3" />
            <span>{t('footer.headquarters')}: Dubai, UAE</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
