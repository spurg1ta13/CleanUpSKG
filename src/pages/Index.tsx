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
  "@type": "LocalBusiness",
  name: "CleanUp Cleaning Services",
  image: "https://cleanupskg.com/favicon.png",
  "@id": "https://cleanupskg.com",
  url: "https://cleanupskg.com",
  telephone: "+30-697-477-60587",
  email: "info@cleanupskg.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aristidou 19-21",
    addressLocality: "Kalamaria",
    postalCode: "551 33",
    addressCountry: "GR",
  },
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
};

const seoTitles = {
  el: "CleanUp - Επαγγελματικές Υπηρεσίες Καθαρισμού Θεσσαλονίκη",
  en: "CleanUp - Professional Cleaning Services Thessaloniki",
  ru: "CleanUp - Профессиональные Клининговые Услуги Салоники",
};

const seoDescriptions = {
  el: "Επαγγελματικός καθαρισμός σπιτιών, γραφείων και μετακατασκευαστικός καθαρισμός στη Θεσσαλονίκη. Βιο-καθαρισμός, απολύμανση με ατμό, πλύσιμο υπό πίεση.",
  en: "Professional home, office, and post-construction cleaning in Thessaloniki. Bio-cleaning, steam disinfection, pressure washing.",
  ru: "Профессиональная уборка домов, офисов и послестроительная уборка в Салониках. Био-уборка, паровая дезинфекция, мойка под давлением.",
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
