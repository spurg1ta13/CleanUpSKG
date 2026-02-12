import { Search, Hammer, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "Site Inspection", desc: "Thorough assessment of the site to plan the cleaning process and identify special requirements." },
  { icon: Hammer, title: "Heavy Cleaning", desc: "Removal of debris, dust, paint residues, and construction materials from all surfaces." },
  { icon: CheckCircle, title: "Final Polish", desc: "Detailed finishing touches: windows, floors, fixtures polished to perfection." },
];

const PostConstructionSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Post-Construction Cleaning</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A systematic 3-step process to transform any construction site into a move-in-ready space.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.title} className="relative text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6 shadow-lg">
              <step.icon className="h-9 w-9" />
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden md:block absolute top-10 -right-4 h-6 w-6 text-primary/40 translate-x-1/2" />
            )}
            <h3 className="text-lg font-bold text-foreground mb-2">Step {i + 1}: {step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PostConstructionSection;
