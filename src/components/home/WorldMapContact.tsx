import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const locations = [
  {
    id: "ae",
    country: "UAE",
    city: "Dubai",
    flag: "🇦🇪",
    address: "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
    phone: "+971 50 200 8313",
    email: "info@netrexinc.com",
    hours: "Sun - Thu: 9AM - 6PM",
    coords: { lat: 25.2532, lng: 55.3657 },
    isHQ: true,
    dialCode: "+971",
    countryCode: "AE",
  },
  {
    id: "us",
    country: "USA",
    city: "Albany",
    flag: "🇺🇸",
    address: "418 Broadway STE N, Albany, New York 12207",
    phone: "+1 518 555 0123",
    email: "usa@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 42.6526, lng: -73.7562 },
    isHQ: false,
    dialCode: "+1",
    countryCode: "US",
  },
  {
    id: "uk",
    country: "UK",
    city: "London",
    flag: "🇬🇧",
    address: "25 The Shard, 32 London Bridge St, London",
    phone: "+44 20 7946 0958",
    email: "uk@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 51.5045, lng: -0.0865 },
    isHQ: false,
    dialCode: "+44",
    countryCode: "GB",
  },
  {
    id: "de",
    country: "Germany",
    city: "Berlin",
    flag: "🇩🇪",
    address: "Kurfürstendamm 14, 10719 Berlin",
    phone: "+49 30 1234 5678",
    email: "germany@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 52.5038, lng: 13.3286 },
    isHQ: false,
    dialCode: "+49",
    countryCode: "DE",
  },
  {
    id: "ca",
    country: "Canada",
    city: "Vancouver",
    flag: "🇨🇦",
    address: "70 Burrard St, Vancouver, BC",
    phone: "+1 604 555 0189",
    email: "canada@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: 49.2849, lng: -123.1140 },
    isHQ: false,
    dialCode: "+1",
    countryCode: "CA",
  },
  {
    id: "au",
    country: "Australia",
    city: "Melbourne",
    flag: "🇦🇺",
    address: "19 Bank Pl, Melbourne VIC 3000",
    phone: "+61 3 9000 0000",
    email: "australia@netrexinc.com",
    hours: "Mon - Fri: 9AM - 5PM",
    coords: { lat: -37.8136, lng: 144.9631 },
    isHQ: false,
    dialCode: "+61",
    countryCode: "AU",
  },
  {
    id: "sg",
    country: "Singapore",
    city: "Singapore",
    flag: "🇸🇬",
    address: "Level 39, Marina Bay Financial Centre, Tower 2",
    phone: "+65 6123 4567",
    email: "singapore@netrexinc.com",
    hours: "Mon - Fri: 9AM - 6PM",
    coords: { lat: 1.2789, lng: 103.8536 },
    isHQ: false,
    dialCode: "+65",
    countryCode: "SG",
  },
  {
    id: "sa",
    country: "Saudi Arabia",
    city: "Riyadh",
    flag: "🇸🇦",
    address: "22 King Abdullah Rd, Riyadh 12211",
    phone: "+966 11 234 5678",
    email: "ksa@netrexinc.com",
    hours: "Sun - Thu: 9AM - 6PM",
    coords: { lat: 24.7136, lng: 46.6753 },
    isHQ: false,
    dialCode: "+966",
    countryCode: "SA",
  },
  {
    id: "pk",
    country: "Pakistan",
    city: "Lahore",
    flag: "🇵🇰",
    address: "21, J3 Block, Phase 2, Johar Town, Lahore",
    phone: "+92 42 3000 0000",
    email: "pakistan@netrexinc.com",
    hours: "Mon - Fri: 9AM - 6PM",
    coords: { lat: 31.4697, lng: 74.2728 },
    isHQ: false,
    dialCode: "+92",
    countryCode: "PK",
  },
];

export function WorldMapContact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneDialCode, setPhoneDialCode] = useState("+971");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // When country tab changes, update the phone dial code
  useEffect(() => {
    setPhoneDialCode(activeLocation.dialCode);
  }, [activeLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.company || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${phoneDialCode} ${phoneNumber}\nCompany: ${formData.company}\nLocation: ${activeLocation.city}, ${activeLocation.country}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:leads@netrexinc.com?subject=${subject}&body=${body}`, '_blank');
    toast({
      title: "Opening email client...",
      description: "Your inquiry is being prepared. You can also email us directly at leads@netrexinc.com",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
    setPhoneNumber("");
  };

  return (
    <section className="section-padding bg-foreground text-background overflow-hidden">
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
          <p className="text-background/70 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Country Tabs with pulse on active */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((location) => (
            <motion.button
              key={location.id}
              onClick={() => setActiveLocation(location)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeLocation.id === location.id
                  ? "bg-primary text-white"
                  : "bg-background/10 text-background hover:bg-background/20"
              }`}
            >
              {activeLocation.id === location.id && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [1, 1.08, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <span className="relative z-10 flex items-center">
                <span className="mr-2">{location.flag}</span>
                {location.city}
                {location.isHQ && (
                  <span className="ml-2 px-2 py-0.5 text-[10px] bg-white/20 rounded-full">
                    HQ
                  </span>
                )}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-background/5"
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
                  src={`https://www.google.com/maps?q=${activeLocation.coords.lat},${activeLocation.coords.lng}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${activeLocation.city} Office Location`}
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activeLocation.flag}</span>
                    <div>
                      <div className="font-bold text-foreground">{activeLocation.city}</div>
                      <div className="text-sm text-muted-foreground">{activeLocation.country}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-3 rounded-full bg-primary/20"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -inset-2 rounded-full bg-primary/30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                      <svg width="44" height="54" viewBox="0 0 44 54" fill="none">
                        <path
                          d="M22 0C9.85 0 0 9.85 0 22c0 16.5 22 32 22 32s22-15.5 22-32C44 9.85 34.15 0 22 0z"
                          fill="hsl(359 85% 53%)"
                        />
                        <circle cx="22" cy="20" r="10" fill="white" />
                        <text x="22" y="25" textAnchor="middle" fill="hsl(359 85% 53%)" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">N</text>
                      </svg>
                    </div>
                  </motion.div>
                </div>
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
                  <div className="p-5 rounded-2xl bg-background/5 border border-background/10">
                    <Phone className="h-6 w-6 text-primary mb-3" />
                    <div className="text-sm text-background/60 mb-1">{t('contact.phone')}</div>
                    <a href={`tel:${activeLocation.phone}`} className="font-semibold text-background hover:text-primary transition-colors text-sm">
                      {activeLocation.phone}
                    </a>
                  </div>
                  <div className="p-5 rounded-2xl bg-background/5 border border-background/10">
                    <Mail className="h-6 w-6 text-primary mb-3" />
                    <div className="text-sm text-background/60 mb-1">{t('contact.email')}</div>
                    <a href={`mailto:${activeLocation.email}`} className="font-semibold text-background hover:text-primary transition-colors text-sm break-all">
                      {activeLocation.email}
                    </a>
                  </div>
                  <div className="p-5 rounded-2xl bg-background/5 border border-background/10">
                    <Clock className="h-6 w-6 text-primary mb-3" />
                    <div className="text-sm text-background/60 mb-1">{t('contact.hours')}</div>
                    <div className="font-semibold text-background text-sm">
                      {activeLocation.hours}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-background/5 border border-background/10 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-background/60 mb-1">{t('contact.address')}</div>
                      <div className="font-semibold text-background">
                        {activeLocation.address}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 rounded-3xl bg-background/5 border border-background/10">
                  <h3 className="font-display font-bold text-xl mb-6">{t('contact.form.title')}</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder={t('contact.form.name')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-full h-12"
                        required
                      />
                      <Input
                        type="email"
                        placeholder={t('contact.form.email')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-full h-12"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <PhoneInput
                        value={phoneNumber}
                        onChange={(value, dialCode) => {
                          setPhoneNumber(value);
                          setPhoneDialCode(dialCode);
                        }}
                        placeholder={t('contact.form.phone')}
                        darkMode
                        className="h-12"
                        selectedCountryCode={activeLocation.countryCode}
                      />
                      <Input
                        placeholder={t('contact.form.company')}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-full h-12"
                      />
                    </div>
                    <Textarea
                      placeholder={t('contact.form.message')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 min-h-[120px] rounded-2xl resize-none"
                      required
                    />
                    <Button type="submit" size="lg" className="w-full group text-base bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
