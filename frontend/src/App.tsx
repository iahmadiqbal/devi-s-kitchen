import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

// Lazy load pages
const WhoWeServe = lazy(() => import("./pages/WhoWeServe"));
const MealPrograms = lazy(() => import("./pages/MealPrograms"));
const NutritionQuality = lazy(() => import("./pages/NutritionQuality"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const AppUnderConstruction = lazy(() => import("./pages/AppUnderConstruction"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Hospitals = lazy(() => import("./pages/services/Hospitals"));
const SeniorLiving = lazy(() => import("./pages/services/SeniorLiving"));
const NGOs = lazy(() => import("./pages/services/NGOs"));
const IndividualMeals = lazy(() => import("./pages/services/IndividualMeals"));
const BulkSupply = lazy(() => import("./pages/meal-programs/BulkSupply"));
const DailyDelivery = lazy(() => import("./pages/meal-programs/DailyDelivery"));
const MonthlyTiffin = lazy(() => import("./pages/meal-programs/MonthlyTiffin"));
const CustomPlans = lazy(() => import("./pages/meal-programs/CustomPlans"));
const SpecialDietary = lazy(() => import("./pages/meal-programs/SpecialDietary"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/services/hospitals" element={<Hospitals />} />
            <Route path="/services/senior-living" element={<SeniorLiving />} />
            <Route path="/services/ngos" element={<NGOs />} />
            <Route path="/services/individual" element={<IndividualMeals />} />
            <Route path="/meal-programs" element={<MealPrograms />} />
            <Route path="/meal-programs/bulk-supply" element={<BulkSupply />} />
            <Route path="/meal-programs/daily-delivery" element={<DailyDelivery />} />
            <Route path="/meal-programs/monthly-tiffin" element={<MonthlyTiffin />} />
            <Route path="/meal-programs/custom-plans" element={<CustomPlans />} />
            <Route path="/meal-programs/special-dietary" element={<SpecialDietary />} />
            <Route path="/nutrition-quality" element={<NutritionQuality />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/app-under-construction" element={<AppUnderConstruction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
