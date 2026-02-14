import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wind, GlassWater } from "lucide-react";
import steamImg from "@/assets/steam-cleaning.jpg";
import pressureImg from "@/assets/pressure-washing.jpg";
import windowImg from "@/assets/window-cleaning.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const SpecializedSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Droplets, titleKey: "steam", descKey: "steamDesc", img: steamImg, alt: "Steam cleaning a kitchen surface" },
    { icon: Wind, titleKey: "pressure", descKey: "pressureDesc", img: pressureImg, alt: "Pressure washing a driveway" },
    { icon: GlassWater, titleKey: "window", descKey: "windowDesc", img: windowImg, alt: "Professional window cleaner on a building" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("specialized", "heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("specialized", "subtitle")}</p>
        </div>
        <div className="max-w-5xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {items.map((item) => (
                <CarouselItem key={item.titleKey} className="md:basis-1/2 lg:basis-1/1">
                  <Card className="border-0 shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="overflow-hidden">
                          <img src={item.img} alt={item.alt} className="w-full h-full object-cover min-h-[250px]" />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{t("specialized", item.titleKey)}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{t("specialized", item.descKey)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SpecializedSection;
