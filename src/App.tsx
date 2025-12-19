import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import SkinCare from "./pages/SkinCare";
import Aesthetics from "./pages/Aesthetics";
import HairTreatment from "./pages/HairTreatment";
import Wellness from "./pages/Wellness";
import Product from "./pages/Product";
import Academy from "./pages/Academy";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FutureSkincare2025 from "./pages/articles/FutureSkincare2025";
import TraditionalBodySpa from "./pages/articles/TraditionalBodySpa";
import AgelessBeauty from "./pages/articles/AgelessBeauty";
import HolisticGlow from "./pages/articles/HolisticGlow";
import SpaDay2025 from "./pages/articles/SpaDay2025";
import BeautyTrends2025 from "./pages/articles/BeautyTrends2025";
import BridalGlow from "./pages/articles/BridalGlow";
import AestheticsWellness from "./pages/articles/AestheticsWellness";
import SkinEveryAge from "./pages/articles/SkinEveryAge";
import SelfCareSuccess from "./pages/articles/SelfCareSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/skin-care" element={<SkinCare />} />
        <Route path="/services/aesthetics" element={<Aesthetics />} />
        <Route path="/services/hair-treatment" element={<HairTreatment />} />
        <Route path="/services/wellness" element={<Wellness />} />
        <Route path="/product" element={<Product />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/future-skincare-2025" element={<FutureSkincare2025 />} />
        <Route path="/articles/traditional-body-spa" element={<TraditionalBodySpa />} />
        <Route path="/articles/ageless-beauty" element={<AgelessBeauty />} />
        <Route path="/articles/holistic-glow" element={<HolisticGlow />} />
        <Route path="/articles/spa-day-2025" element={<SpaDay2025 />} />
        <Route path="/articles/beauty-trends-2025" element={<BeautyTrends2025 />} />
        <Route path="/articles/bridal-glow" element={<BridalGlow />} />
        <Route path="/articles/aesthetics-wellness" element={<AestheticsWellness />} />
        <Route path="/articles/skin-every-age" element={<SkinEveryAge />} />
        <Route path="/articles/self-care-success" element={<SelfCareSuccess />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
