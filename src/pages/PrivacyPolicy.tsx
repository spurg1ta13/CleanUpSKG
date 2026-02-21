import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/landing/Navbar";
import TopBar from "@/components/landing/TopBar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  const { lang } = useLanguage();

  const content = {
    el: {
      title: "Πολιτική Απορρήτου",
      lastUpdated: "Τελευταία ενημέρωση: Φεβρουάριος 2026",
      sections: [
        {
          heading: "1. Εισαγωγή",
          text: "Η CleanUp SKG (εφεξής «εμείς», «μας») δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα. Η παρούσα πολιτική απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες που μας παρέχετε μέσω του ιστοτόπου μας.",
        },
        {
          heading: "2. Δεδομένα που Συλλέγουμε",
          text: "Συλλέγουμε μόνο τα δεδομένα που μας παρέχετε εθελοντικά μέσω των φορμών επικοινωνίας μας:\n• Ονοματεπώνυμο\n• Διεύθυνση email\n• Αριθμός τηλεφώνου\n• Το μήνυμά σας\n\nΔεν συλλέγουμε αυτόματα κανένα προσωπικό δεδομένο εκτός από cookies λειτουργικότητας.",
        },
        {
          heading: "3. Σκοπός Επεξεργασίας",
          text: "Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για:\n• Να απαντήσουμε στα αιτήματα επικοινωνίας σας\n• Να σας παρέχουμε προσφορές για τις υπηρεσίες μας\n• Να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας",
        },
        {
          heading: "4. Νομική Βάση",
          text: "Η επεξεργασία των δεδομένων σας βασίζεται στη ρητή συγκατάθεσή σας (Άρθρο 6(1)(α) ΓΚΠΔ) που παρέχετε κατά την υποβολή της φόρμας επικοινωνίας.",
        },
        {
          heading: "5. Αποθήκευση Δεδομένων",
          text: "Τα δεδομένα σας αποθηκεύονται σε ασφαλείς διακομιστές και διατηρούνται μόνο για όσο χρόνο είναι απαραίτητο για την εκπλήρωση του σκοπού για τον οποίο συλλέχθηκαν, με μέγιστη περίοδο 12 μηνών.",
        },
        {
          heading: "6. Δικαιώματά σας",
          text: "Σύμφωνα με τον ΓΚΠΔ, έχετε δικαίωμα:\n• Πρόσβασης στα δεδομένα σας\n• Διόρθωσης ανακριβών δεδομένων\n• Διαγραφής των δεδομένων σας\n• Ανάκλησης της συγκατάθεσής σας\n• Υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων\n\nΓια να ασκήσετε τα δικαιώματά σας, επικοινωνήστε μαζί μας στο info@cleanupskg.gr.",
        },
        {
          heading: "7. Cookies",
          text: "Ο ιστότοπός μας χρησιμοποιεί μόνο λειτουργικά cookies που είναι απαραίτητα για τη σωστή λειτουργία του. Μπορείτε να τα αποδεχτείτε ή να τα απορρίψετε μέσω του banner cookies.",
        },
        {
          heading: "8. Κοινοποίηση σε Τρίτους",
          text: "Δεν πουλάμε, ανταλλάσσουμε ή μεταβιβάζουμε τα προσωπικά σας δεδομένα σε τρίτους. Μπορεί να χρησιμοποιούμε αξιόπιστους παρόχους υπηρεσιών (π.χ. email) που δεσμεύονται συμβατικά να προστατεύουν τα δεδομένα σας.",
        },
        {
          heading: "9. Επικοινωνία",
          text: "Για οποιαδήποτε ερώτηση σχετικά με την πολιτική απορρήτου:\n\nCleanUp SKG\nΑριστείδου 19-21, Καλαμαριά 551 33\nEmail: info@cleanupskg.gr\nΤηλ: +30 697 477 6058",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: February 2026",
      sections: [
        {
          heading: "1. Introduction",
          text: "CleanUp SKG (hereinafter \"we\", \"us\") is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect the information you provide to us through our website.",
        },
        {
          heading: "2. Data We Collect",
          text: "We only collect data that you voluntarily provide through our contact forms:\n• Full name\n• Email address\n• Phone number\n• Your message\n\nWe do not automatically collect any personal data other than functional cookies.",
        },
        {
          heading: "3. Purpose of Processing",
          text: "We use your data exclusively to:\n• Respond to your contact requests\n• Provide you with quotes for our services\n• Improve your website experience",
        },
        {
          heading: "4. Legal Basis",
          text: "The processing of your data is based on your explicit consent (Article 6(1)(a) GDPR) which you provide when submitting the contact form.",
        },
        {
          heading: "5. Data Storage",
          text: "Your data is stored on secure servers and retained only for as long as necessary to fulfill the purpose for which it was collected, with a maximum period of 12 months.",
        },
        {
          heading: "6. Your Rights",
          text: "Under the GDPR, you have the right to:\n• Access your data\n• Rectify inaccurate data\n• Erase your data\n• Withdraw your consent\n• Lodge a complaint with the Data Protection Authority\n\nTo exercise your rights, contact us at info@cleanupskg.gr.",
        },
        {
          heading: "7. Cookies",
          text: "Our website uses only functional cookies necessary for proper operation. You can accept or decline them through the cookie banner.",
        },
        {
          heading: "8. Third-Party Sharing",
          text: "We do not sell, exchange, or transfer your personal data to third parties. We may use trusted service providers (e.g., email) who are contractually bound to protect your data.",
        },
        {
          heading: "9. Contact",
          text: "For any questions about our privacy policy:\n\nCleanUp SKG\nAristidou 19-21, Kalamaria 551 33\nEmail: info@cleanupskg.gr\nPhone: +30 697 477 6058",
        },
      ],
    },
    ru: {
      title: "Политика Конфиденциальности",
      lastUpdated: "Последнее обновление: Февраль 2026",
      sections: [
        {
          heading: "1. Введение",
          text: "CleanUp SKG (далее «мы», «нас») обязуется защищать ваши персональные данные. Настоящая политика конфиденциальности объясняет, как мы собираем, используем и защищаем информацию, которую вы предоставляете нам через наш веб-сайт.",
        },
        {
          heading: "2. Данные, которые мы собираем",
          text: "Мы собираем только данные, которые вы добровольно предоставляете через наши контактные формы:\n• Полное имя\n• Адрес электронной почты\n• Номер телефона\n• Ваше сообщение\n\nМы не собираем автоматически никаких персональных данных, кроме функциональных файлов cookie.",
        },
        {
          heading: "3. Цель обработки",
          text: "Мы используем ваши данные исключительно для:\n• Ответа на ваши запросы\n• Предоставления расценок на наши услуги\n• Улучшения вашего опыта на сайте",
        },
        {
          heading: "4. Правовая основа",
          text: "Обработка ваших данных основана на вашем явном согласии (Статья 6(1)(а) GDPR), которое вы даёте при отправке контактной формы.",
        },
        {
          heading: "5. Хранение данных",
          text: "Ваши данные хранятся на защищённых серверах и сохраняются только на время, необходимое для выполнения цели сбора, максимум 12 месяцев.",
        },
        {
          heading: "6. Ваши права",
          text: "В соответствии с GDPR, вы имеете право:\n• Получить доступ к своим данным\n• Исправить неточные данные\n• Удалить свои данные\n• Отозвать своё согласие\n• Подать жалобу в орган защиты данных\n\nДля реализации ваших прав свяжитесь с нами: info@cleanupskg.gr.",
        },
        {
          heading: "7. Файлы Cookie",
          text: "Наш сайт использует только функциональные файлы cookie, необходимые для корректной работы. Вы можете принять или отклонить их через баннер cookie.",
        },
        {
          heading: "8. Передача третьим лицам",
          text: "Мы не продаём, не обмениваем и не передаём ваши персональные данные третьим лицам. Мы можем использовать надёжных поставщиков услуг (например, email), которые обязаны по договору защищать ваши данные.",
        },
        {
          heading: "9. Контакты",
          text: "По любым вопросам о политике конфиденциальности:\n\nCleanUp SKG\nАристиду 19-21, Каламарья 551 33\nEmail: info@cleanupskg.gr\nТел: +30 697 477 6058",
        },
      ],
    },
  };

  const c = content[lang];

  const seoDescriptions = {
    el: "Πολιτική απορρήτου της CleanUp SKG — Μάθετε πώς προστατεύουμε τα προσωπικά σας δεδομένα σύμφωνα με τον ΓΚΠΔ.",
    en: "CleanUp SKG Privacy Policy — Learn how we protect your personal data in compliance with GDPR.",
    ru: "Политика конфиденциальности CleanUp SKG — Узнайте, как мы защищаем ваши персональные данные в соответствии с GDPR.",
  };

  return (
    <>
      <SEOHead
        title={`${c.title} | CleanUp SKG`}
        description={seoDescriptions[lang]}
        path="/privacy-policy"
      />
      <TopBar />
      <Navbar />
      <main className="min-h-screen pt-8 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{c.title}</h1>
          <p className="text-sm text-muted-foreground mb-10">{c.lastUpdated}</p>
          <div className="space-y-8">
            {c.sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-lg font-semibold text-foreground mb-2">{s.heading}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.text.split(/(info@cleanupskg\.gr|\+30 697 477 6058\d*)/).map((part, j) => {
                    if (part.match(/^info@cleanupskg\.gr$/)) {
                      return <a key={j} href="mailto:info@cleanupskg.gr" className="text-primary underline hover:text-primary/80">{part}</a>;
                    }
                    if (part.match(/^\+30 697 477 6058\d*$/)) {
                      return <a key={j} href="tel:+306974776058" className="text-primary underline hover:text-primary/80">{part}</a>;
                    }
                    return part;
                  })}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
