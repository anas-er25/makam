import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HolyPlaces from "./pages/HolyPlaces";
import Palestine from "./pages/Palestine";
import About from "./pages/About";
import Layout from "./components/Layout";
import MyTools from "./pages/MyTools";
import BeFriend from "./pages/BeFriend";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import Books from "./pages/Books";
import MosqueDetails from "./pages/MosqueDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/holy-places" element={<HolyPlaces />} />
            <Route path="/palestine" element={<Palestine />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-tools" element={<MyTools />} />
            <Route path="/be-friend" element={<BeFriend />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/books" element={<Books />} />
            <Route path="/mosque/:id" element={<MosqueDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
