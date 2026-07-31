import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const socials = [
  { href: "https://www.facebook.com/netrex.official", label: "Facebook", Icon: () => <Facebook className="h-3 w-3" /> },
  { href: "https://www.instagram.com/netrex.official", label: "Instagram", Icon: () => <Instagram className="h-3 w-3" /> },
  { href: "https://www.linkedin.com/company/netrex-official", label: "LinkedIn", Icon: () => <Linkedin className="h-3 w-3" /> },
  { href: "https://x.com/netrex_official", label: "X", Icon: XIcon },
  { href: "https://www.youtube.com/@netrex.official", label: "YouTube", Icon: YouTubeIcon },
];

export function TopBar() {
  return (
    <div className="hidden md:block bg-background text-muted-foreground text-xs border-b border-border">
      <div className="container-wide flex items-center justify-between h-8">
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
          <div className="hidden lg:flex items-center gap-1.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
