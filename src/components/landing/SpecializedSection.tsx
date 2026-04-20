import { lazy, Suspense, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wind, GlassWater } from "lucide-react";
import steamImg from "@/assets/steam-cleaning.webp";
import pressureImg from "@/assets/pressure-washing.webp";
import windowImg from "@/assets/window-cleaning.webp";
import { useLanguage } from "@/i18n/LanguageContext";

// Lazy load carousel only on mobile to avoid Embla's forced reflows on desktop
const MobileCarousel = lazy(() => import("./SpecializedCarousel"));

const items = [
  { icon: GlassWater, titleKey: "window", descKey: "windowDesc", img: windowImg, altKey: "window" as const },
  { icon: Droplets, titleKey: "steam", descKey: "steamDesc", img: steamImg, altKey: "steam" as const },
  { icon: Wind, titleKey: "pressure", descKey: "pressureDesc", img: pressureImg, altKey: "pressure" as const },
] as const;

const Item = ({ img, alt, title, desc }: { img: string; alt: string; title: string; desc: string }) => (
  <Card className="border-0 shadow-none overflow-hidden bg-transparent">
    <CardContent className="p-0">
      <div className="flex flex-col">
        <div className="h-[220px] md:h-[280px] overflow-hidden rounded-lg">
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={600}
            height={300}
          />
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const SpecializedSection = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const cards = items.map((item) => ({
    ...item,
    title: t("specialized", item.titleKey),
    desc: t("specialized", item.descKey),
    alt: t("alt", item.altKey),
  }));

  return (
    <section id="specialized" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("specialized", "heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("specialized", "subtitle")}</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          {isMobile === false && (
            <div className="grid grid-cols-3 gap-4">
              {cards.map((c) => (
                <Item key={c.titleKey} img={c.img} alt={c.alt} title={c.title} desc={c.desc} />
              ))}
            </div>
          )}
          {isMobile === true && (
            <Suspense fallback={<div className="h-[400px]" />}>
              <MobileCarousel cards={cards} />
            </Suspense>
          )}
          {isMobile === null && (
            <div className="grid md:grid-cols-3 gap-4">
              {cards.slice(0, 1).map((c) => (
                <Item key={c.titleKey} img={c.img} alt={c.alt} title={c.title} desc={c.desc} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpecializedSection;
