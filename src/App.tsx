import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ToolsHub from "./pages/ToolsHub";
import MetaTagGenerator from "./pages/tools/MetaTagGenerator";
import WordCounter from "./pages/tools/WordCounter";
import SerpPreview from "./pages/tools/SerpPreview";
import FreeSeoAudit from "./pages/FreeSeoAudit";
import FreeSeoResources from "./pages/FreeSeoResources";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import LocationPage from "./pages/LocationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tools" element={<ToolsHub />} />
          <Route path="/tools/meta-tag-generator" element={<MetaTagGenerator />} />
          <Route path="/tools/word-counter" element={<WordCounter />} />
          <Route path="/tools/google-serp-preview" element={<SerpPreview />} />
          <Route path="/free-seo-audit" element={<FreeSeoAudit />} />
          <Route path="/free-seo-resources" element={<FreeSeoResources />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

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
