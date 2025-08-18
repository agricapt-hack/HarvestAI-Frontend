import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Loans from "./pages/Loans";
import { AppProvider } from "./store/AppContext";
import GlobalModals from "./components/GlobalModals";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import SSOCallback from "./pages/SSOCallback";
import Recordings from "./pages/Recordings";
import Insurance from "./pages/Insurance";
import Marketplace from "./pages/Marketplace";
import MarketplaceProductDetail from "./pages/MarketplaceProductDetail";
// import { FloatingWizard } from "./components/FloatingWizard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GlobalModals />
        {/* <FloatingWizard /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/recordings" element={<Recordings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sso-callback" element={<SSOCallback />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/marketplace/:id" element={<MarketplaceProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
