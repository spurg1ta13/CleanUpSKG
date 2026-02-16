import { useState, useMemo } from "react";
import { Calculator, Plus, Minus, Check, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/i18n/LanguageContext";

type ServiceCategory = "cleaning" | "bio" | "steam";

interface CleaningService {
  key: string;
  pricePerSqm: number;
}

interface ItemService {
  key: string;
  price: number;
  unit: "item" | "sqm";
}

const cleaningServices: CleaningService[] = [
  { key: "residential", pricePerSqm: 0.5 },
  { key: "commercial", pricePerSqm: 3.5 },
  { key: "postConstruction", pricePerSqm: 4.5 },
];

const bioItems: ItemService[] = [
  { key: "seat", price: 15, unit: "item" },
  { key: "carpet", price: 5, unit: "sqm" },
  { key: "childMattress", price: 25, unit: "item" },
  { key: "mattressSingle", price: 35, unit: "item" },
  { key: "mattressDouble", price: 50, unit: "item" },
  { key: "mattressKing", price: 60, unit: "item" },
];

const steamItems: ItemService[] = [
  { key: "shutter", price: 5, unit: "item" },
  { key: "radiator", price: 8, unit: "item" },
  { key: "windowFrame", price: 10, unit: "item" },
  { key: "wc", price: 3, unit: "sqm" },
  { key: "grout", price: 3, unit: "sqm" },
];

interface SummaryLine {
  label: string;
  qty: number;
  unitLabel: string;
  unitPrice: number;
  subtotal: number;
}

const PriceCalculator = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const { t } = useLanguage();

  const [category, setCategory] = useState<ServiceCategory>("cleaning");
  const [sqm, setSqm] = useState<number>(0);
  const [selectedCleaning, setSelectedCleaning] = useState<string>("residential");
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({});
  const [showSummary, setShowSummary] = useState(false);

  const updateQty = (key: string, delta: number) => {
    setItemQuantities((prev) => ({
      ...prev,
      [key]: Math.max(0, (prev[key] || 0) + delta),
    }));
  };

  const setQty = (key: string, val: number) => {
    setItemQuantities((prev) => ({ ...prev, [key]: Math.max(0, val) }));
  };

  const summaryLines = useMemo<SummaryLine[]>(() => {
    const lines: SummaryLine[] = [];
    // Cleaning
    const svc = cleaningServices.find((s) => s.key === selectedCleaning);
    if (svc && sqm > 0) {
      lines.push({
        label: t("calc", svc.key),
        qty: sqm,
        unitLabel: t("calc", "sqm"),
        unitPrice: svc.pricePerSqm,
        subtotal: svc.pricePerSqm * sqm,
      });
    }
    // Bio items
    bioItems.forEach((item) => {
      const qty = itemQuantities[item.key] || 0;
      if (qty > 0) {
        lines.push({
          label: t("calc", item.key),
          qty,
          unitLabel: item.unit === "sqm" ? t("calc", "sqm") : t("calc", "piece"),
          unitPrice: item.price,
          subtotal: item.price * qty,
        });
      }
    });
    // Steam items
    steamItems.forEach((item) => {
      const qty = itemQuantities[item.key] || 0;
      if (qty > 0) {
        lines.push({
          label: t("calc", item.key),
          qty,
          unitLabel: item.unit === "sqm" ? t("calc", "sqm") : t("calc", "piece"),
          unitPrice: item.price,
          subtotal: item.price * qty,
        });
      }
    });
    return lines;
  }, [sqm, selectedCleaning, itemQuantities, t]);

  const total = useMemo(() => summaryLines.reduce((s, l) => s + l.subtotal, 0), [summaryLines]);

  const resetAll = () => {
    setSqm(0);
    setSelectedCleaning("residential");
    setItemQuantities({});
    setShowSummary(false);
  };

  const categories: { key: ServiceCategory; label: string }[] = [
    { key: "cleaning", label: t("calc", "tabCleaning") },
    { key: "bio", label: t("calc", "tabBio") },
    { key: "steam", label: t("calc", "tabSteam") },
  ];

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setShowSummary(false); }}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Calculator className="h-5 w-5 text-primary" />
            {showSummary ? t("calc", "summaryTitle") : t("calc", "title")}
          </DialogTitle>
          <DialogDescription>{showSummary ? t("calc", "summarySubtitle") : t("calc", "subtitle")}</DialogDescription>
        </DialogHeader>

        {!showSummary ? (
          <>
            {/* Category tabs */}
            <div className="flex gap-1 bg-muted rounded-lg p-1">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCategory(c.key)}
                  className={`flex-1 text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                    category === c.key
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Cleaning by sqm */}
            {category === "cleaning" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t("calc", "serviceType")}</label>
                  <div className="space-y-2">
                    {cleaningServices.map((svc) => (
                      <label
                        key={svc.key}
                        className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedCleaning === svc.key
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="cleaning"
                            checked={selectedCleaning === svc.key}
                            onChange={() => setSelectedCleaning(svc.key)}
                            className="accent-primary"
                          />
                          <span className="text-sm font-medium text-foreground">{t("calc", svc.key)}</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">€{svc.pricePerSqm.toFixed(2)}/{t("calc", "sqm")}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t("calc", "area")}</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={0}
                      value={sqm || ""}
                      onChange={(e) => setSqm(Number(e.target.value))}
                      placeholder="0"
                      className="text-center text-lg font-semibold"
                    />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{t("calc", "sqm")}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bio / Steam items */}
            {(category === "bio" || category === "steam") && (
              <div className="space-y-2">
                {(category === "bio" ? bioItems : steamItems).map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <span className="text-sm font-medium text-foreground">{t("calc", item.key)}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        €{item.price}/{item.unit === "sqm" ? t("calc", "sqm") : t("calc", "piece")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.key, -1)}
                        className="h-8 w-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <Input
                        type="number"
                        min={0}
                        value={itemQuantities[item.key] || ""}
                        onChange={(e) => setQty(item.key, Number(e.target.value))}
                        className="w-14 text-center text-sm font-semibold h-8 p-0"
                      />
                      <button
                        onClick={() => updateQty(item.key, 1)}
                        className="h-8 w-8 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total */}
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t("calc", "estimatedTotal")}</p>
                <p className="text-xs text-muted-foreground">{t("calc", "vatNote")}</p>
              </div>
              <p className="text-3xl font-extrabold text-primary">€{total.toFixed(2)}</p>
            </div>

            <Button
              className="w-full rounded-full"
              size="lg"
              disabled={total === 0}
              onClick={() => setShowSummary(true)}
            >
              {t("calc", "getQuote")}
            </Button>
          </>
        ) : (
          /* Summary view */
          <div className="space-y-4">
            {/* Selected items list */}
            <div className="space-y-2">
              {summaryLines.map((line, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{line.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {line.qty} {line.unitLabel} × €{line.unitPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground">€{line.subtotal.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{t("calc", "estimatedTotal")}</p>
                <p className="text-xs text-muted-foreground">{t("calc", "vatNote")}</p>
              </div>
              <p className="text-3xl font-extrabold text-primary">€{total.toFixed(2)}</p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 rounded-full"
                size="lg"
                onClick={() => setShowSummary(false)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("calc", "back")}
              </Button>
              <Button asChild className="flex-1 rounded-full" size="lg">
                <a href="#contact">{t("calc", "contactUs")}</a>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PriceCalculator;
