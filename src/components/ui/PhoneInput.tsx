import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
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
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string, dialCode: string) => void;
  placeholder?: string;
  className?: string;
  darkMode?: boolean;
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

  // Sync with external country code (from location tab)
  useEffect(() => {
    if (selectedCountryCode) {
      const match = countries.find(c => c.code === selectedCountryCode);
      if (match) {
        setSelectedCountry(match);
        onChange(value, match.dialCode);
      }
    }
  }, [selectedCountryCode]);

  // Auto-detect on mount if no external code
  useEffect(() => {
    if (selectedCountryCode) return;
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const locale = navigator.language;
      const timezoneMap: Record<string, string> = {
        'Asia/Dubai': 'AE', 'America/New_York': 'US', 'America/Los_Angeles': 'US',
        'America/Chicago': 'US', 'Europe/London': 'GB', 'America/Vancouver': 'CA',
        'America/Toronto': 'CA', 'Australia/Brisbane': 'AU', 'Australia/Sydney': 'AU',
        'Australia/Melbourne': 'AU', 'Asia/Karachi': 'PK', 'Asia/Kolkata': 'IN',
        'Asia/Riyadh': 'SA', 'Asia/Qatar': 'QA', 'Europe/Berlin': 'DE',
        'Europe/Paris': 'FR', 'Europe/Madrid': 'ES', 'Asia/Tokyo': 'JP',
        'Asia/Shanghai': 'CN', 'Asia/Singapore': 'SG',
      };
      const countryCode = timezoneMap[timezone] || locale.split('-')[1]?.toUpperCase();
      const detectedCountry = countries.find(c => c.code === countryCode);
      if (detectedCountry) setSelectedCountry(detectedCountry);
    } catch {
      console.log('Could not detect country');
    }
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.dialCode.includes(searchQuery)
  );

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
    onChange(value, country.dialCode);
  };

  const baseInputClasses = darkMode
    ? 'bg-background/10 border-background/20 text-background placeholder:text-background/40'
    : 'bg-background border-input text-foreground placeholder:text-muted-foreground';

  return (
    <div className={cn('relative', className)}>
      <div className="flex w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center gap-1.5 px-3 py-2 rounded-l-full border transition-colors flex-shrink-0',
            baseInputClasses,
            'border-r-0 hover:bg-secondary/50'
          )}
        >
          <span className="text-base">{selectedCountry.flag}</span>
          <span className="text-xs font-medium whitespace-nowrap">{selectedCountry.dialCode}</span>
          <ChevronDown className={cn('h-3 w-3 transition-transform flex-shrink-0', isOpen && 'rotate-180')} />
        </button>

        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ''), selectedCountry.dialCode)}
          placeholder={placeholder}
          className={cn(
            'flex-1 min-w-0 px-4 py-2 rounded-r-full border border-l-0',
            baseInputClasses,
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
          )}
        />
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className={cn(
            'absolute top-full left-0 mt-2 w-64 rounded-2xl shadow-xl border z-50 overflow-hidden',
            darkMode ? 'bg-foreground border-background/20' : 'bg-card border-border'
          )}>
            <div className="p-2 border-b border-border/20">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country..."
                className={cn(
                  'w-full px-3 py-2 rounded-xl text-sm',
                  darkMode 
                    ? 'bg-background/10 text-background placeholder:text-background/40' 
                    : 'bg-secondary text-foreground placeholder:text-muted-foreground'
                )}
                autoFocus
              />
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                    darkMode 
                      ? 'text-background hover:bg-background/10' 
                      : 'text-foreground hover:bg-secondary',
                    selectedCountry.code === country.code && (darkMode ? 'bg-background/20' : 'bg-secondary')
                  )}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1 text-left">{country.name}</span>
                  <span className="text-muted-foreground">{country.dialCode}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
