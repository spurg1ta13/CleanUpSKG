import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type Card = {
  titleKey: string;
  img: string;
  imgSmall: string;
  alt: string;
  title: string;
  desc: string;
};

const SpecializedCarousel = ({ cards }: { cards: Card[] }) => {
  return (
    <Carousel opts={{ loop: true, startIndex: 0, align: "center" }}>
      <CarouselContent className="-ml-4">
        {cards.map((c) => (
          <CarouselItem key={c.titleKey} className="pl-4 basis-full">
            <Card className="border-0 shadow-none overflow-hidden bg-transparent">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="h-[220px] overflow-hidden rounded-lg">
                    <img
                      src={c.img}
                      alt={c.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={300}
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-2" />
      <CarouselNext className="-right-2" />
    </Carousel>
  );
};

export default SpecializedCarousel;
