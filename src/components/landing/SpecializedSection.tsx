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
    { icon: Droplets, titleKey: "steam", descKey: "steamDesc", img: steamImg, altKey: "steam" as const },
    { icon: Wind, titleKey: "pressure", descKey: "pressureDesc", img: pressureImg, altKey: "pressure" as const },
    { icon: GlassWater, titleKey: "window", descKey: "windowDesc", img: windowImg, altKey: "window" as const },
  ];

  return (
    <section id="specialized" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
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
                        <div className="overflow-hidden h-[300px]">
                          <img src={item.img} alt={t("alt", item.altKey)} className="w-full h-full object-cover" loading="lazy" decoding="async" width={600} height={300} />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
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
