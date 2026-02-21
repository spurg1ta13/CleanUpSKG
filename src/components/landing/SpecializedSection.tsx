import { useState, useCallback, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wind, GlassWater } from "lucide-react";
import steamImg from "@/assets/steam-cleaning.jpg";
import pressureImg from "@/assets/pressure-washing.jpg";
import windowImg from "@/assets/window-cleaning.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const SpecializedSection = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { icon: GlassWater, titleKey: "window", descKey: "windowDesc", img: windowImg, altKey: "window" as const },
    { icon: Droplets, titleKey: "steam", descKey: "steamDesc", img: steamImg, altKey: "steam" as const },
    { icon: Wind, titleKey: "pressure", descKey: "pressureDesc", img: pressureImg, altKey: "pressure" as const },
  ];

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <section id="specialized" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("specialized", "heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("specialized", "subtitle")}</p>
        </div>
        <div className="max-w-6xl mx-auto px-12">
          <Carousel opts={{ loop: true, startIndex: 0, align: "center" }} setApi={setApi}>
            <CarouselContent className="-ml-4">
              {items.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <CarouselItem
                    key={item.titleKey}
                    className="pl-4 basis-[85%] md:basis-1/3"
                  >
                    <div
                      className="transition-all duration-300"
                      style={{
                        opacity: isActive ? 1 : 0.5,
                      }}
                    >
                      <Card className="border-0 shadow-md overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col">
                            <div className="h-[220px] md:h-[280px] overflow-hidden">
                              <img
                                src={item.img}
                                alt={t("alt", item.altKey)}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                                width={600}
                                height={300}
                              />
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {t("specialized", item.titleKey)}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {t("specialized", item.descKey)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
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
