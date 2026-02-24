import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ToolsHub from "./pages/ToolsHub";
import ToolPage from "./pages/ToolPage";
import FreeSeoAudit from "./pages/FreeSeoAudit";
import FreeSeoResources from "./pages/FreeSeoResources";
import ResourceLandingPage from "./pages/ResourceLandingPage";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import LocationPage from "./pages/LocationPage";
import LocationsLang from "./pages/LocationsLang";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import Industries from "./pages/Industries";
import IndustryPage from "./pages/IndustryPage";
import Locations from "./pages/Locations";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminCaseStudies from "./pages/admin/AdminCaseStudies";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminSettings from "./pages/admin/AdminSettings";
import IndustriesLang from "./pages/IndustriesLang";
import IndustryPageLang from "./pages/IndustryPageLang";
import PpcServices from "./pages/PpcServices";
import PpcServicePage from "./pages/PpcServicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/ppc" element={<PpcServices />} />
          <Route path="/ppc/:slug" element={<PpcServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tools" element={<ToolsHub />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/free-seo-audit" element={<FreeSeoAudit />} />
          <Route path="/free-seo-resources" element={<FreeSeoResources />} />
          <Route path="/free-seo-resources/:slug" element={<ResourceLandingPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Admin */}
          <Route path="/wah/login" element={<AdminLogin />} />
          <Route path="/wah" element={<AdminDashboard />} />
          <Route path="/wah/blog" element={<AdminBlog />} />
          <Route path="/wah/case-studies" element={<AdminCaseStudies />} />
          <Route path="/wah/testimonials" element={<AdminTestimonials />} />
          <Route path="/wah/leads" element={<AdminLeads />} />
          <Route path="/wah/settings" element={<AdminSettings />} />

          {/* Multilingual industry pages */}
          <Route path="/:lang/industries" element={<IndustriesLang />} />
          <Route path="/:lang/industries/:slug" element={<IndustryPageLang />} />

          {/* Multilingual location hub pages */}
          <Route path="/:lang/locations" element={<LocationsLang />} />

          {/* Location pages - English (no prefix) */}
          <Route path="/:slug" element={<LocationPage />} />

          {/* Location pages - Language prefixed */}
          <Route path="/ar/:slug" element={<LocationPage />} />
          <Route path="/fr/:slug" element={<LocationPage />} />
          <Route path="/de/:slug" element={<LocationPage />} />
          <Route path="/nl/:slug" element={<LocationPage />} />
          <Route path="/it/:slug" element={<LocationPage />} />
          <Route path="/es/:slug" element={<LocationPage />} />
          <Route path="/pt/:slug" element={<LocationPage />} />
          <Route path="/da/:slug" element={<LocationPage />} />
          <Route path="/sv/:slug" element={<LocationPage />} />
          <Route path="/no/:slug" element={<LocationPage />} />
          <Route path="/fi/:slug" element={<LocationPage />} />
          <Route path="/pl/:slug" element={<LocationPage />} />
          <Route path="/cs/:slug" element={<LocationPage />} />
          <Route path="/hu/:slug" element={<LocationPage />} />
          <Route path="/ro/:slug" element={<LocationPage />} />
          <Route path="/el/:slug" element={<LocationPage />} />
          <Route path="/tr/:slug" element={<LocationPage />} />
          <Route path="/ja/:slug" element={<LocationPage />} />
          <Route path="/ko/:slug" element={<LocationPage />} />
          <Route path="/he/:slug" element={<LocationPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
