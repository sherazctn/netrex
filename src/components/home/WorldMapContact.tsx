import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Wand2, X, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const locations = [
  {
    id: "ae", country: "UAE", city: "Dubai", flag: "🇦🇪",
    address: "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
    phone: "+971 50 200 8313", email: "info@netrexinc.com",
    hours: "Sun - Thu: 9AM - 6PM",
    coords: { lat: 25.2532, lng: 55.3657 }, isHQ: true,
    dialCode: "+971", countryCode: "AE",
    mapsUrl: "https://www.google.com/maps/search/NETREX+Web+Design+Development+Mobile+Apps+Digital+Marketing+Agency+Dubai+UAE",
  },
  {
    id: "us", country: "USA", city: "New York", flag: "🇺🇸",
    address: "418 Broadway STE N, Albany, New York 12207",
    phone: "+1 518 555 0123", email: "usa@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 42.6526, lng: -73.7562 }, isHQ: false,
    dialCode: "+1", countryCode: "US",
    mapsUrl: "https://www.google.com/maps/place/418+Broadway+STE+N,+Albany,+NY+12207",
  },
  {
    id: "uk", country: "UK", city: "London", flag: "🇬🇧",
    address: "25 The Shard, 32 London Bridge St, London",
    phone: "+44 20 7946 0958", email: "uk@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 51.5045, lng: -0.0865 }, isHQ: false,
    dialCode: "+44", countryCode: "GB",
    mapsUrl: "https://www.google.com/maps/search/NETREX+Web+Design+Development+Mobile+Apps+Digital+Marketing+Agency+London+UK",
  },
  {
    id: "de", country: "Germany", city: "Berlin", flag: "🇩🇪",
    address: "Kurfürstendamm 14, 10719 Berlin",
    phone: "+49 30 1234 5678", email: "de@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 52.5038, lng: 13.3286 }, isHQ: false,
    dialCode: "+49", countryCode: "DE",
    mapsUrl: "https://www.google.com/maps/search/Netrex+UG+Berlin",
  },
  {
    id: "ca", country: "Canada", city: "Vancouver", flag: "🇨🇦",
    address: "70 Burrard St, Vancouver, BC",
    phone: "+1 604 555 0189", email: "ca@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 49.2849, lng: -123.1140 }, isHQ: false,
    dialCode: "+1", countryCode: "CA",
    mapsUrl: "https://www.google.com/maps/search/NETREX+Web+Design+Development+Mobile+Apps+Digital+Marketing+Agency+Vancouver+Canada",
  },
  {
    id: "au", country: "Australia", city: "Melbourne", flag: "🇦🇺",
    address: "19 Bank Pl, Melbourne VIC 3000",
    phone: "+61 3 9000 0000", email: "au@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: -37.8136, lng: 144.9631 }, isHQ: false,
    dialCode: "+61", countryCode: "AU",
    mapsUrl: "https://www.google.com/maps/search/Netrex+Pty+Ltd+Melbourne",
  },
  {
    id: "sg", country: "Singapore", city: "Singapore", flag: "🇸🇬",
    address: "Level 39, Marina Bay Financial Centre, Tower 2",
    phone: "+65 6123 4567", email: "sg@netrexinc.com",
    hours: "Mon - Fri: 9AM - 6PM",
    coords: { lat: 1.2789, lng: 103.8536 }, isHQ: false,
    dialCode: "+65", countryCode: "SG",
    mapsUrl: "https://www.google.com/maps/search/Netrex+Pte+Ltd+Singapore",
  },
  {
    id: "sa", country: "Saudi Arabia", city: "Riyadh", flag: "🇸🇦",
    address: "22 King Abdullah Rd, Riyadh 12211",
    phone: "+966 11 234 5678", email: "sa@netrexinc.com",
    hours: "Sun - Thu: 9AM - 6PM",
    coords: { lat: 24.7136, lng: 46.6753 }, isHQ: false,
    dialCode: "+966", countryCode: "SA",
    mapsUrl: "https://www.google.com/maps/search/Netrex+Est+Riyadh",
  },
  {
    id: "pk", country: "Pakistan", city: "Lahore", flag: "🇵🇰",
    address: "21, J3 Block, Phase 2, Johar Town, Lahore",
    phone: "+92 42 3000 0000", email: "pk@netrexinc.com",
    hours: "Mon - Fri: 9AM - 6PM",
    coords: { lat: 31.4697, lng: 74.2728 }, isHQ: false,
    dialCode: "+92", countryCode: "PK",
    mapsUrl: "https://www.google.com/maps/search/NETREX+Web+Design+Development+Mobile+Apps+Digital+Marketing+Agency+Lahore+Pakistan",
  },
];

const quickSuggestions = [
  { label: "🌐 Website", text: "I need a professional website for my business. Looking for a modern, responsive design with CMS integration." },
  { label: "📱 Mobile App", text: "I need a mobile app (iOS & Android) for my business. Looking for a cross-platform solution with user authentication and push notifications." },
  { label: "🛒 E-Commerce Store", text: "I need an e-commerce store with product catalog, payment gateway integration, and inventory management." },
  { label: "🎨 UI/UX Redesign", text: "I need a complete UI/UX redesign for my existing platform to improve user experience and conversion rates." },
  { label: "📈 Digital Marketing", text: "I need a comprehensive digital marketing strategy including SEO, PPC, and social media marketing." },
  { label: "🤖 AI Chatbot", text: "I need an AI-powered chatbot for my website to handle customer queries and automate support." },
  { label: "🏢 Corporate Website", text: "I need a corporate website with multiple pages, team section, portfolio, blog, and contact forms." },
  { label: "☁️ Cloud Migration", text: "I need to migrate my existing application to the cloud with proper DevOps pipeline and scalability." },
];

const spamPatterns = [
  /\b(looking for (a )?job|job (opening|opportunity|vacancy|position)|apply for|resume|curriculum vitae|cv attached)\b/i,
  /\b(seo services|link building|backlink|guest post|sponsored post|buy (links|traffic|followers))\b/i,
  /\b(marketing agency|marketing services|we can (help|boost|increase)|grow your (business|traffic|sales))\b/i,
  /\b(crypto|bitcoin|forex|investment opportunity|make money (fast|online|quick))\b/i,
  /\b(web development services|we (offer|provide) (web|app|mobile|digital))\b/i,
  /\b(dear sir|dear madam|dear hiring|to whom it may concern)\b/i,
  /\b(partnership opportunity|collaboration opportunity|business proposal from)\b/i,
];

function isSpamMessage(message: string, name: string, email: string): string | null {
  const combined = `${name} ${message}`.toLowerCase();
  for (const pattern of spamPatterns) {
    if (pattern.test(combined)) {
      return "This form is for project inquiries only. Job applications, marketing pitches, and spam are not accepted.";
    }
  }
  if (message.trim().length < 20) {
    return "Please provide more details about your project requirements (at least 20 characters).";
  }
  const freeEmailDomains = ["mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email"];
  const emailDomain = email.split("@")[1]?.toLowerCase();
  if (emailDomain && freeEmailDomains.includes(emailDomain)) {
    return "Please use a valid business email address.";
  }
  return null;
}

export function WorldMapContact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneDialCode, setPhoneDialCode] = useState("+971");
  const handlePhoneChange = (val: string, dialCode: string) => {
    setPhoneNumber(val);
    setPhoneDialCode(dialCode);
  };
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", message: "",
  });

  useEffect(() => {
    setPhoneDialCode(activeLocation.dialCode);
  }, [activeLocation]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const spamResult = isSpamMessage(formData.message, formData.name, formData.email);
    if (spamResult) {
      toast({ title: "Submission Blocked", description: spamResult, variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.company || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${phoneDialCode} ${phoneNumber}\nCompany: ${formData.company}\nLocation: ${activeLocation.city}, ${activeLocation.country}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:leads@netrexinc.com?subject=${subject}&body=${body}`, '_blank');
    toast({ title: "Opening email client...", description: "Your inquiry is being prepared." });
    setFormData({ name: "", email: "", company: "", message: "" });
    setPhoneNumber("");
  };

  const handleSuggestionClick = (text: string) => {
    setFormData({ ...formData, message: text });
    setShowSuggestions(false);
  };

  const handleMapMarkerClick = () => {
    window.open(activeLocation.mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section-padding bg-[#1a1a1a] text-white overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t('contact.badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('contact.title')}{" "}
            <span className="text-primary">{t('contact.title.highlight')}</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((location) => {
            const isActive = activeLocation.id === location.id;
            return (
              <motion.button
                key={location.id}
                onClick={() => setActiveLocation(location)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                transition={isActive ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                className={`relative transition-all ${
                  isActive
                    ? "px-7 py-3.5 rounded-full text-sm font-bold bg-primary text-white shadow-lg shadow-primary/30"
                    : "px-5 py-3 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.15, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">{location.flag}</span>
                  {location.city}
                  {location.isHQ && (
                    <span className="ml-2 px-2 py-0.5 text-[10px] bg-white/20 rounded-full">HQ</span>
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-white/5"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full min-h-[500px]"
              >
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(activeLocation.address + ', ' + activeLocation.city + ', ' + activeLocation.country)}&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${activeLocation.city} Office Location`}
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                <div className="absolute bottom-4 left-4 bg-[#1a1a1a]/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activeLocation.flag}</span>
                    <div>
                      <div className="font-bold text-white">{activeLocation.city}</div>
                      <div className="text-sm text-white/60">{activeLocation.country}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleMapMarkerClick}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 cursor-pointer group"
                  title="Open in Google Maps"
                >
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <div className="relative">
                      <motion.div className="absolute -inset-3 rounded-full bg-primary/20" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
                      <motion.div className="absolute -inset-2 rounded-full bg-primary/30" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
                      <svg width="44" height="54" viewBox="0 0 44 54" fill="none" className="group-hover:scale-110 transition-transform">
                        <path d="M22 0C9.85 0 0 9.85 0 22c0 16.5 22 32 22 32s22-15.5 22-32C44 9.85 34.15 0 22 0z" fill="hsl(359 85% 53%)" />
                        <circle cx="22" cy="20" r="10" fill="white" />
                        <text x="22" y="25" textAnchor="middle" fill="hsl(359 85% 53%)" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">N</text>
                      </svg>
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Contact Form & Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <Phone className="h-6 w-6 text-primary mb-3" />
                    <div className="text-sm text-white/60 mb-1">{t('contact.phone')}</div>
                    <a href={`tel:${activeLocation.phone}`} className="font-semibold text-white hover:text-primary transition-colors text-sm">
                      {activeLocation.phone}
                    </a>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <Mail className="h-6 w-6 text-primary mb-3" />
                    <div className="text-sm text-white/60 mb-1">{t('contact.email')}</div>
                    <a href={`mailto:${activeLocation.email}`} className="font-semibold text-white hover:text-primary transition-colors text-sm break-all">
                      {activeLocation.email}
                    </a>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <Clock className="h-6 w-6 text-primary mb-3" />
                    <div className="text-sm text-white/60 mb-1">{t('contact.hours')}</div>
                    <div className="font-semibold text-white text-sm">{activeLocation.hours}</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                  <h3 className="font-display text-xl font-bold mb-2">{t('contact.form.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                    />
                    <Input
                      type="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PhoneInput
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      dialCode={phoneDialCode}
                      onDialCodeChange={setPhoneDialCode}
                      countryCode={activeLocation.countryCode}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                    <Input
                      placeholder={t('contact.form.company')}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                    />
                  </div>

                  <div className="relative flex-1" ref={suggestionsRef}>
                    <Textarea
                      placeholder={t('contact.form.message')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => !formData.message && setShowSuggestions(true)}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary min-h-[120px] resize-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSuggestions(!showSuggestions)}
                      className="absolute top-3 right-3 p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      title="Quick suggestions"
                    >
                      <Wand2 className="h-4 w-4" />
                    </button>

                    <AnimatePresence>
                      {showSuggestions && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a2a] border border-white/10 rounded-2xl p-3 z-20 shadow-xl max-h-60 overflow-y-auto"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-white/50 font-medium">Quick Suggestions</span>
                            <button onClick={() => setShowSuggestions(false)} className="text-white/40 hover:text-white">
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {quickSuggestions.map((s) => (
                              <button
                                key={s.label}
                                type="button"
                                onClick={() => handleSuggestionClick(s.text)}
                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/70 hover:bg-primary/20 hover:text-primary transition-colors"
                              >
                                {s.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="h-5 w-5" />
                    {t('contact.form.submit')}
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </form>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
