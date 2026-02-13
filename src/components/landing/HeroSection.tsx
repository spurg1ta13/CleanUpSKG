import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden min-h-[70vh] flex items-center">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Professional cleaning team at work" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
          Professional <span className="text-primary">Cleaning</span> Services
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Comprehensive cleaning solutions for homes, businesses, and post-construction sites. We deliver spotless results with attention to every detail.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
          <a href="#contact">
            Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
