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
const ContactDialog = lazy(() => import("@/components/ContactDialog"));

const queryClient = new QueryClient();

const DeferredOverlays = () => {
  const [ready, setReady] = useState(false);
  const [dialogReady, setDialogReady] = useState(false);

  useEffect(() => {
    // Defer non-critical floating UI until the user interacts with the page,
    // keeping initial JS (incl. backend client chunk) out of the LCP path.
    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      setReady(true);
      cleanup();
    };
    const events: Array<keyof WindowEventMap> = [
      "scroll",
      "pointerdown",
      "keydown",
      "touchstart",
      "mousemove",
      "wheel",
    ];
    const opts: AddEventListenerOptions = { once: true, passive: true, capture: true };
    events.forEach((e) => window.addEventListener(e, trigger, opts));
    // Fallback: load after 4s if user never interacts
    const timeoutId = window.setTimeout(trigger, 4000);
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, trigger, opts));
      window.clearTimeout(timeoutId);
    };
    return cleanup;
  }, []);

  useEffect(() => {
    // Mount ContactDialog only when it's actually requested, so the backend
    // client chunk isn't pulled in until needed.
    const handler = () => setDialogReady(true);
    window.addEventListener("open-contact-dialog", handler);
    const w = window as Window & { __contactDialogPending?: boolean };
    if (w.__contactDialogPending) setDialogReady(true);
    return () => window.removeEventListener("open-contact-dialog", handler);
  }, []);

  return (
    <Suspense fallback={null}>
      {ready && <CookieBanner />}
      {ready && <FloatingContact />}
      {ready && <FloatingPhone />}
      {ready && <SpringBanner />}
      {dialogReady && <ContactDialog />}
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
