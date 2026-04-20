import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ScrollToHash from "@/components/ScrollToHash";
import { lazy, Suspense, useEffect, useState } from "react";
import Index from "./pages/Index";

// Defer non-critical routes
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Defer non-critical floating UI until idle to free up main thread on first paint
const CookieBanner = lazy(() => import("@/components/CookieBanner"));
const FloatingContact = lazy(() => import("@/components/FloatingContact"));
const FloatingPhone = lazy(() => import("@/components/FloatingPhone"));
const SpringBanner = lazy(() => import("@/components/SpringBanner"));

const queryClient = new QueryClient();

const DeferredOverlays = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    const schedule = w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    const id = schedule(() => setReady(true));
    return () => {
      const cancel = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
      if (cancel) cancel(id as number);
      else window.clearTimeout(id as number);
    };
  }, []);

  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <CookieBanner />
      <FloatingContact />
      <FloatingPhone />
      <SpringBanner />
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <DeferredOverlays />
        <BrowserRouter>
          <ScrollToHash />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
