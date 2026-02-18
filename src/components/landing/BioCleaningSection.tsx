import { Sofa, BedDouble, Layers, Car } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import bioCleaningImg from "@/assets/bio-cleaning.jpg";
import { SHOW_PRICING } from "@/config/featureFlags";

const BioCleaningSection = () => {
  const { t } = useLanguage();

  const coverageItems = [
    { icon: Sofa, key: "upholstery" },
    { icon: BedDouble, key: "mattresses" },
    { icon: Layers, key: "carpets" },
    { icon: Car, key: "vehicle" },
  ];

  const bioPricingItems = [
    { key: "seat", price: "€15" },
    { key: "carpet", price: "€5 / τ.μ.", priceEn: "€5 / sq.m", priceRu: "€5 / кв.м" },
    { key: "childMattress", price: "€25" },
    { key: "mattressSingle", price: "€45" },
    { key: "mattressDouble", price: "€55" },
    { key: "mattressKing", price: "€60" },
    { key: "bed", price: "€5", from: true },
  ];

  const steamPricingItems = [
    { key: "shutter", price: "€5", from: true },
    { key: "radiator", price: "€5", from: true },
    { key: "windowFrame", price: "€5", from: true },
    { key: "wc", price: "€3 / τ.μ.", priceEn: "€3 / sq.m", priceRu: "€3 / кв.м" },
    { key: "grout", price: "€3 / τ.μ.", priceEn: "€3 / sq.m", priceRu: "€3 / кв.м" },
    { key: "windows", price: "€5", from: true },
  ];

  const { lang } = useLanguage();

  const getPrice = (item: { price: string; priceEn?: string; priceRu?: string; from?: boolean }) => {
    const fromLabel = item.from ? (lang === "el" ? "από " : lang === "ru" ? "от " : "from ") : "";
    let price = item.price;
    if (lang === "en" && item.priceEn) price = item.priceEn;
    if (lang === "ru" && item.priceRu) price = item.priceRu;
    return fromLabel + price;
  };

  const PricingTable = ({ items, section, heading }: { items: typeof bioPricingItems; section: string; heading: string }) => (
    <div className="mb-8 last:mb-0">
      <h3 className="font-semibold text-foreground mb-4">{heading}</h3>
      <div className="bg-background rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="text-left py-3 px-5 text-sm font-semibold">{t(section, "item")}</th>
              {SHOW_PRICING && <th className="text-right py-3 px-5 text-sm font-semibold">{t(section, "startingFrom")}</th>}
            </tr>
          </thead>
          <tbody>
            {items.map((p, i) => (
              <tr key={p.key} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                <td className="py-3 px-5 text-sm text-foreground">{t(section, p.key)}</td>
                {SHOW_PRICING && <td className="py-3 px-5 text-sm text-right font-semibold text-primary">{getPrice(p)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section id="bio-cleaning" className="py-8 md:py-12 bg-muted/50 section-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("bio", "heading")}</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t("bio", "description")}</p>
            <h3 className="font-semibold text-foreground mb-4">{t("bio", "whatWeClean")}</h3>
            <div className="grid grid-cols-2 gap-4">
              {coverageItems.map((c) => (
                <div key={c.key} className="flex items-center gap-3 p-3 rounded-lg bg-background shadow-sm">
                  <c.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{t("bio", c.key)}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl overflow-hidden shadow-sm">
              <img src={bioCleaningImg} alt="Professional bio-cleaning service for upholstery and sofas" className="w-full h-[300px] object-cover" loading="lazy" decoding="async" width={600} height={300} />
            </div>
          </div>
          <div>
            <PricingTable items={bioPricingItems} section="bio" heading={t("bio", "pricingTitle")} />
            <PricingTable items={steamPricingItems} section="steamPricing" heading={t("steamPricing", "heading")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioCleaningSection;
