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

const Index = () => (
  <div className="min-h-screen">
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

export default Index;
