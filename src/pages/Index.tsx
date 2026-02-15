import TopBar from "@/components/landing/TopBar";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import SpecializedSection from "@/components/landing/SpecializedSection";
import CommercialSection from "@/components/landing/CommercialSection";
import PostConstructionSection from "@/components/landing/PostConstructionSection";
import BioCleaningSection from "@/components/landing/BioCleaningSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: "CleanUp SKG - Υπηρεσίες Καθαρισμού Θεσσαλονίκη",
  alternateName: "CleanUp SKG",
  image: "https://cleanupskg.com/favicon.png",
  "@id": "https://cleanupskg.com",
  url: "https://cleanupskg.com",
  telephone: "+30-697-477-60587",
  email: "info@cleanupskg.com",
  description: "Επαγγελματικές υπηρεσίες καθαρισμού σπιτιών, γραφείων, μετακατασκευαστικός καθαρισμός, βιο-καθαρισμός και απολύμανση στη Θεσσαλονίκη.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Αριστείδου 19-21",
    addressLocality: "Καλαμαριά",
    addressRegion: "Θεσσαλονίκη",
    postalCode: "551 33",
    addressCountry: "GR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.58,
    longitude: 22.95,
  },
  areaServed: [
    { "@type": "City", name: "Thessaloniki" },
    { "@type": "City", name: "Kalamaria" },
    { "@type": "City", name: "Thermi" },
    { "@type": "City", name: "Pylaia" },
    { "@type": "City", name: "Panorama" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/cleanup.skg",
    "https://www.tiktok.com/@cleanup.skg",
  ],
  priceRange: "€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Υπηρεσίες Καθαρισμού",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Οικιακός Καθαρισμός / Residential Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Εμπορικός Καθαρισμός / Commercial Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Μετακατασκευαστικός Καθαρισμός / Post-Construction Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Βιο-Καθαρισμός / Bio-Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Απολύμανση με Ατμό / Steam Disinfection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Πλύσιμο υπό Πίεση / Pressure Washing" } },
    ],
  },
};

const seoTitles = {
  el: "CleanUp SKG | Επαγγελματικός Καθαρισμός Σπιτιού & Γραφείου Θεσσαλονίκη",
  en: "CleanUp SKG | Professional Home & Office Cleaning Thessaloniki Greece",
  ru: "CleanUp SKG | Профессиональная Уборка Домов и Офисов Салоники Греция",
};

const seoDescriptions = {
  el: "Επαγγελματικός καθαρισμός σπιτιών, γραφείων, μετακατασκευαστικός καθαρισμός & βιο-καθαρισμός στη Θεσσαλονίκη και Καλαμαριά. Ατμοκαθαρισμός, πλύσιμο υπό πίεση, απολύμανση. Δωρεάν εκτίμηση ☎ 697 477 6058.",
  en: "Professional home, office & post-construction cleaning in Thessaloniki, Greece. Bio-cleaning, steam disinfection, pressure washing. Serving Kalamaria, Thermi & Pylaia. Free estimates ☎ 697 477 6058.",
  ru: "Профессиональная уборка домов, офисов, послестроительная уборка и био-уборка в Салониках, Греция. Паровая дезинфекция, мойка под давлением. Каламарья, Терми, Пилея. Бесплатная оценка ☎ 697 477 6058.",
};

const Index = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seoTitles[lang]}
        description={seoDescriptions[lang]}
        path="/"
        jsonLd={localBusinessJsonLd}
      />
      <TopBar />
      <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecializedSection />
      <CommercialSection />
      <PostConstructionSection />
      <BioCleaningSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
  );
};

export default Index;
