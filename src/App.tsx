import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Legal from "./pages/Legal";
import FAQ from "./pages/FAQ";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminContacts from "./pages/admin/AdminContacts";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminPortfolio from "./pages/admin/AdminPortfolio";
import AdminOffices from "./pages/admin/AdminOffices";
import AdminSettings from "./pages/admin/AdminSettings";
import WebsiteROICalculator from "./pages/tools/WebsiteROICalculator";
import MobileAppROICalculator from "./pages/tools/MobileAppROICalculator";
import MarketingROICalculator from "./pages/tools/MarketingROICalculator";
import BrandingROICalculator from "./pages/tools/BrandingROICalculator";
import EcommerceROICalculator from "./pages/tools/EcommerceROICalculator";
import SEOROICalculator from "./pages/tools/SEOROICalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:service" element={<ServicePage />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Tools */}
            <Route path="/tools/website-roi" element={<WebsiteROICalculator />} />
            <Route path="/tools/mobile-app-roi" element={<MobileAppROICalculator />} />
            <Route path="/tools/marketing-roi" element={<MarketingROICalculator />} />
            <Route path="/tools/branding-roi" element={<BrandingROICalculator />} />
            <Route path="/tools/ecommerce-roi" element={<EcommerceROICalculator />} />
            <Route path="/tools/seo-roi" element={<SEOROICalculator />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="portfolio" element={<AdminPortfolio />} />
              <Route path="offices" element={<AdminOffices />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
