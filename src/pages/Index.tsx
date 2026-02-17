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
    { "@type": "City", name: "Evosmos" },
    { "@type": "City", name: "Stavroupoli" },
    { "@type": "City", name: "Neapoli" },
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
    "https://www.facebook.com/share/1GBFUHR5yS/",
  ],
  priceRange: "€€",
  aggregateRating: undefined,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Υπηρεσίες Καθαρισμού",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Οικιακός Καθαρισμός / Residential Cleaning", description: "Professional home cleaning services including deep cleaning, regular maintenance, and move-in/move-out cleaning." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Εμπορικός Καθαρισμός / Commercial Cleaning", description: "Office and commercial space cleaning with flexible scheduling and eco-friendly products." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Μετακατασκευαστικός Καθαρισμός / Post-Construction Cleaning", description: "Thorough post-renovation and construction cleanup using HEPA-filtered equipment." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Βιο-Καθαρισμός / Bio-Cleaning", description: "Professional bio-cleaning for mattresses, sofas, carpets, and upholstery." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Απολύμανση με Ατμό / Steam Disinfection", description: "Chemical-free steam sanitization for deep disinfection of all surfaces." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Πλύσιμο υπό Πίεση / Pressure Washing", description: "High-pressure washing for exterior surfaces, driveways, and patios." } },
    ],
  },
};

const seoTitles = {
  el: "Επαγγελματικός Καθαρισμός Σπιτιού & Γραφείου Θεσσαλονίκη | CleanUp SKG",
  en: "Commercial & Office Cleaning Thessaloniki | CleanUp SKG",
  ru: "Коммерческая Уборка и Уборка Офисов Салоники | CleanUp SKG",
};

const seoDescriptions = {
  el: "Επαγγελματικές υπηρεσίες καθαρισμού σπιτιών & γραφείων στη Θεσσαλονίκη. Η CleanUp SKG προσφέρει αξιόπιστες, οικολογικές και εξατομικευμένες λύσεις για την επιχείρησή σας. Ζητήστε δωρεάν προσφορά!",
  en: "Professional commercial & office cleaning services in Thessaloniki. CleanUp SKG offers reliable, eco-friendly, and tailored solutions for your business. Get a free quote!",
  ru: "Профессиональные услуги коммерческой уборки и уборки офисов в Салониках. CleanUp SKG предлагает надёжные, экологичные и индивидуальные решения для вашего бизнеса. Получите бесплатную оценку!",
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
      <PricingSection />
      <SpecializedSection />
      <CommercialSection />
      <PostConstructionSection />
      <BioCleaningSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
  );
};

export default Index;
