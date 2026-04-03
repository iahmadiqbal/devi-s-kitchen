import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import WhoWeServe from "./pages/WhoWeServe";
import MealPrograms from "./pages/MealPrograms";
import NutritionQuality from "./pages/NutritionQuality";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import AppUnderConstruction from "./pages/AppUnderConstruction";
import NotFound from "./pages/NotFound";
import Hospitals from "./pages/services/Hospitals";
import SeniorLiving from "./pages/services/SeniorLiving";
import NGOs from "./pages/services/NGOs";
import IndividualMeals from "./pages/services/IndividualMeals";
import BulkSupply from "./pages/meal-programs/BulkSupply";
import DailyDelivery from "./pages/meal-programs/DailyDelivery";
import MonthlyTiffin from "./pages/meal-programs/MonthlyTiffin";
import CustomPlans from "./pages/meal-programs/CustomPlans";
import SpecialDietary from "./pages/meal-programs/SpecialDietary";

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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
