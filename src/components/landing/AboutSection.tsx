import { Shield, Award, Heart } from "lucide-react";

const features = [
  { icon: Shield, title: "Trusted", desc: "Licensed, insured, and background-checked teams you can rely on." },
  { icon: Award, title: "Quality", desc: "We use professional-grade products and proven techniques." },
  { icon: Heart, title: "Care", desc: "Every space is treated with attention to detail and respect." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          CleanPro is a dedicated team of cleaning professionals committed to transforming spaces. With years of experience, we deliver tailored cleaning solutions that exceed expectations — from cozy apartments to large commercial venues.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <f.icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
