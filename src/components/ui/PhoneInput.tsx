import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const countries = [
  { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪' },
  { code: 'US', name: 'USA', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'UK', dialCode: '+44', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭' },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
];

const timezoneMap: Record<string, string> = {
  'Asia/Dubai': 'AE', 'Asia/Muscat': 'OM', 'Asia/Qatar': 'QA', 'Asia/Kuwait': 'KW',
  'Asia/Bahrain': 'BH', 'Asia/Riyadh': 'SA', 'Asia/Karachi': 'PK', 'Asia/Kolkata': 'IN',
  'Asia/Calcutta': 'IN', 'Asia/Dhaka': 'BD', 'Asia/Singapore': 'SG', 'Asia/Kuala_Lumpur': 'MY',
  'Asia/Jakarta': 'ID', 'Asia/Manila': 'PH', 'Asia/Tokyo': 'JP', 'Asia/Seoul': 'KR',
  'Asia/Shanghai': 'CN', 'Asia/Hong_Kong': 'CN', 'Asia/Istanbul': 'TR', 'Europe/Istanbul': 'TR',
  'America/New_York': 'US', 'America/Los_Angeles': 'US', 'America/Chicago': 'US',
  'America/Denver': 'US', 'America/Phoenix': 'US', 'America/Vancouver': 'CA',
  'America/Toronto': 'CA', 'America/Edmonton': 'CA', 'America/Sao_Paulo': 'BR',
  'America/Mexico_City': 'MX', 'Europe/London': 'GB', 'Europe/Dublin': 'IE',
  'Europe/Berlin': 'DE', 'Europe/Paris': 'FR', 'Europe/Madrid': 'ES', 'Europe/Rome': 'IT',
  'Europe/Amsterdam': 'NL', 'Europe/Brussels': 'BE', 'Europe/Zurich': 'CH',
  'Europe/Vienna': 'AT', 'Europe/Stockholm': 'SE', 'Europe/Oslo': 'NO',
  'Europe/Copenhagen': 'DK', 'Europe/Lisbon': 'PT', 'Europe/Warsaw': 'PL',
  'Europe/Moscow': 'RU', 'Africa/Cairo': 'EG', 'Africa/Lagos': 'NG',
  'Africa/Johannesburg': 'ZA', 'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU',
  'Australia/Brisbane': 'AU', 'Australia/Perth': 'AU', 'Pacific/Auckland': 'NZ',
};

interface PhoneInputProps {
  value: string;
  onChange: (value: string, dialCode: string) => void;
  placeholder?: string;
  className?: string;
  darkMode?: boolean;
  /** Fallback country when geo/locale detection is unavailable. */
  selectedCountryCode?: string;
}

export function PhoneInput({
  value,
  onChange,
  placeholder = 'Phone Number',
  className,
  darkMode = false,
  selectedCountryCode,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  /** Once geo detection lands or the visitor picks manually, external props stop overriding. */
  const locked = useRef(false);

  const applyCountry = (code?: string) => {
    const match = countries.find((c) => c.code === code);
    if (match) {
      setSelectedCountry(match);
      onChange(value, match.dialCode);
      return true;
    }
    return false;
  };

  // 1) Instant guess from browser timezone / locale, 2) precise IP geolocation.
  useEffect(() => {
    let cancelled = false;
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const localeRegion = new Intl.Locale(navigator.language).region;
      applyCountry(timezoneMap[tz] || localeRegion || undefined);
    } catch {
      /* detection unavailable - keep default */
    }

    const controller = new AbortController();
    fetch('https://ipwho.is/?fields=country_code', { signal: controller.signal })
      .then((r) => r.json())
      .then((data: { country_code?: string }) => {
        if (cancelled || !data?.country_code) return;
        if (applyCountry(data.country_code)) locked.current = true;
      })
      .catch(() => {
        /* offline or blocked - timezone guess stands */
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Office-tab fallback: only applies before geo detection or a manual pick.
  useEffect(() => {
    if (locked.current || !selectedCountryCode) return;
    applyCountry(selectedCountryCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountryCode]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country: typeof countries[0]) => {
    locked.current = true;
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
    onChange(value, country.dialCode);
  };

  // Matches the surrounding form fields in both themes.
  const fieldClasses = darkMode
    ? 'bg-white/5 border-white/10 text-white placeholder:text-white/50'
    : 'bg-background border-input text-foreground placeholder:text-muted-foreground';

  return (
    <div className={cn('relative', className)}>
      <div className="flex w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select country dial code"
          className={cn(
            'flex items-center gap-1.5 px-3 py-2 rounded-l-full border border-r-0 transition-colors flex-shrink-0',
            fieldClasses,
            darkMode ? 'hover:bg-white/10' : 'hover:bg-secondary'
          )}
        >
          <span className="text-base leading-none">{selectedCountry.flag}</span>
          <span className="text-xs font-semibold whitespace-nowrap">{selectedCountry.dialCode}</span>
          <ChevronDown className={cn('h-3 w-3 transition-transform flex-shrink-0 opacity-70', isOpen && 'rotate-180')} />
        </button>

        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ''), selectedCountry.dialCode)}
          placeholder={placeholder}
          className={cn(
            'flex-1 min-w-0 px-4 py-2 rounded-r-full border border-l-0 text-sm',
            fieldClasses,
            'focus:outline-none focus:border-primary'
          )}
        />
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div
            className={cn(
              'absolute top-full left-0 mt-2 w-72 rounded-2xl shadow-xl border z-50 overflow-hidden',
              darkMode ? 'bg-[#1f1f1f] border-white/10' : 'bg-card border-border'
            )}
          >
            <div className={cn('p-2 border-b', darkMode ? 'border-white/10' : 'border-border')}>
              <div className="relative">
                <Search className={cn('absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5', darkMode ? 'text-white/50' : 'text-muted-foreground')} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search country..."
                  className={cn(
                    'w-full pl-9 pr-3 py-2 rounded-xl text-sm focus:outline-none',
                    darkMode
                      ? 'bg-white/5 text-white placeholder:text-white/50'
                      : 'bg-secondary text-foreground placeholder:text-muted-foreground'
                  )}
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                    darkMode ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-secondary',
                    selectedCountry.code === country.code && (darkMode ? 'bg-white/10' : 'bg-secondary')
                  )}
                >
                  <span className="text-lg leading-none">{country.flag}</span>
                  <span className="flex-1 text-left">{country.name}</span>
                  <span className={darkMode ? 'text-white/50' : 'text-muted-foreground'}>{country.dialCode}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
