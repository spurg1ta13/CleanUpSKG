import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const faqData = [
  {
    q: {
      el: "Πόσο συχνά πρέπει να κάνω επαγγελματικό καθαρισμό στο σπίτι μου;",
      en: "How often should I get my home professionally cleaned?",
      ru: "Как часто нужно делать профессиональную уборку дома?",
    },
    a: {
      el: "Συνιστούμε τακτικό καθαρισμό κάθε 1-2 εβδομάδες και βαθύ καθαρισμό κάθε 3-6 μήνες, ανάλογα με το μέγεθος του νοικοκυριού, τα κατοικίδια και τον τρόπο ζωής σας.",
      en: "We recommend regular cleaning every 1-2 weeks and deep cleaning every 3-6 months, depending on your household size, pets, and lifestyle.",
      ru: "Мы рекомендуем регулярную уборку каждые 1-2 недели и генеральную уборку каждые 3-6 месяцев, в зависимости от размера домохозяйства, наличия домашних животных и образа жизни.",
    },
  },
  {
    q: {
      el: "Τι περιλαμβάνει ο βαθύς καθαρισμός;",
      en: "What does a deep cleaning service include?",
      ru: "Что включает генеральная уборка?",
    },
    a: {
      el: "Ο βαθύς καθαρισμός περιλαμβάνει καθαρισμό πίσω από συσκευές, μέσα σε ντουλάπια, αρμούς πλακιδίων, εσωτερικό φούρνου, αφαίρεση αλάτων, καθαρισμό παραθύρων και απολύμανση όλων των επιφανειών.",
      en: "Deep cleaning includes cleaning behind appliances, inside cabinets, tile grout, oven interiors, limescale removal, window cleaning, and sanitizing all surfaces.",
      ru: "Генеральная уборка включает чистку за бытовой техникой, внутри шкафов, швов плитки, духовки, удаление известкового налёта, мытьё окон и дезинфекцию всех поверхностей.",
    },
  },
  {
    q: {
      el: "Χρησιμοποιείτε φιλικά προς το περιβάλλον προϊόντα;",
      en: "Do you use eco-friendly cleaning products?",
      ru: "Вы используете экологичные чистящие средства?",
    },
    a: {
      el: "Ναι, χρησιμοποιούμε επαγγελματικά, φιλικά προς το περιβάλλον προϊόντα που είναι ασφαλή για παιδιά, κατοικίδια και ευαίσθητες επιφάνειες, χωρίς να υποβαθμίζεται η αποτελεσματικότητα.",
      en: "Yes, we use professional-grade eco-friendly products that are safe for children, pets, and sensitive surfaces without compromising cleaning effectiveness.",
      ru: "Да, мы используем профессиональные экологичные средства, безопасные для детей, домашних животных и деликатных поверхностей, без снижения эффективности уборки.",
    },
  },
  {
    q: {
      el: "Πόσο κοστίζει ο μετακατασκευαστικός καθαρισμός;",
      en: "How much does post-construction cleaning cost?",
      ru: "Сколько стоит послестроительная уборка?",
    },
    a: {
      el: "Η τιμή εξαρτάται από το μέγεθος του χώρου και τον βαθμό μόλυνσης. Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση — οι τιμές μας ξεκινούν από €4,50/τ.μ.",
      en: "The cost depends on the space size and contamination level. Contact us for a free estimate — our prices start from €4.50 per square meter.",
      ru: "Стоимость зависит от площади и степени загрязнения. Свяжитесь с нами для бесплатной оценки — наши цены начинаются от €4,50 за кв. м.",
    },
  },
  {
    q: {
      el: "Μπορώ να κλείσω ραντεβού για Σαββατοκύριακο;",
      en: "Can I book a cleaning on weekends?",
      ru: "Можно ли записаться на уборку в выходные?",
    },
    a: {
      el: "Εργαζόμαστε Δευτέρα έως Σάββατο, 8:00-18:00. Για ειδικές περιπτώσεις, επικοινωνήστε μαζί μας και θα προσπαθήσουμε να σας εξυπηρετήσουμε.",
      en: "We operate Monday to Saturday, 8:00-18:00. For special cases, contact us and we'll do our best to accommodate your schedule.",
      ru: "Мы работаем с понедельника по субботу, 8:00-18:00. В особых случаях свяжитесь с нами, и мы постараемся подстроиться под ваш график.",
    },
  },
  {
    q: {
      el: "Χρειάζεται να είμαι σπίτι κατά τη διάρκεια του καθαρισμού;",
      en: "Do I need to be home during the cleaning?",
      ru: "Нужно ли мне быть дома во время уборки?",
    },
    a: {
      el: "Όχι απαραίτητα. Πολλοί πελάτες μας αφήνουν κλειδί ή δίνουν πρόσβαση. Οι ομάδες μας είναι αδειοδοτημένες, ασφαλισμένες και πλήρως ελεγμένες.",
      en: "Not necessarily. Many of our clients leave a key or provide access. Our teams are licensed, insured, and fully background-checked.",
      ru: "Не обязательно. Многие клиенты оставляют ключ или предоставляют доступ. Наши команды лицензированы, застрахованы и полностью проверены.",
    },
  },
];

const FAQSection = () => {
  const { lang, t } = useLanguage();

  // JSON-LD for Google FAQ rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q[lang],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[lang],
      },
    })),
  };

  return (
    <section id="faq" className="py-8 md:py-12 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("faq", "heading")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("faq", "subtitle")}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" defaultValue={faqData.map((_, i) => `faq-${i}`)} className="space-y-3">
            {faqData.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-muted/50 rounded-xl border-0 px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold text-sm md:text-base hover:no-underline py-5">
                  {item.q[lang]}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {item.a[lang]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
