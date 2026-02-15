export type Lang = "el" | "en" | "ru";

export const translations = {
  // Navbar
  nav: {
    home: { el: "Αρχική", en: "Home", ru: "Главная" },
    about: { el: "Σχετικά", en: "About", ru: "О нас" },
    services: { el: "Υπηρεσίες", en: "Services", ru: "Услуги" },
    pricing: { el: "Τιμοκατάλογος", en: "Pricing", ru: "Цены" },
    blog: { el: "Blog", en: "Blog", ru: "Блог" },
    contact: { el: "Επικοινωνία", en: "Contact", ru: "Контакты" },
  },

  // TopBar
  topbar: {
    hours: { el: "Δευ - Σάβ: 8:00 - 18:00", en: "Mon - Sat: 8:00 - 18:00", ru: "Пн - Сб: 8:00 - 18:00" },
  },

  // Hero
  hero: {
    title1: { el: "Επαγγελματικές", en: "Professional", ru: "Профессиональные" },
    title2: { el: "Υπηρεσίες Καθαρισμού", en: "Cleaning Services", ru: "Клининговые Услуги" },
    subtitle: {
      el: "Ολοκληρωμένες λύσεις καθαρισμού για σπίτια, επιχειρήσεις και μετά την κατασκευή. Παραδίδουμε άψογα αποτελέσματα με προσοχή σε κάθε λεπτομέρεια.",
      en: "Comprehensive cleaning solutions for homes, businesses, and post-construction sites. We deliver spotless results with attention to every detail.",
      ru: "Комплексные клининговые решения для домов, офисов и послестроительных объектов. Мы обеспечиваем безупречный результат с вниманием к каждой детали.",
    },
    cta: { el: "Δωρεάν Προσφορά", en: "Get a Free Quote", ru: "Бесплатная Оценка" },
  },

  // About
  about: {
    heading: { el: "Ποιοι Είμαστε", en: "Who We Are", ru: "О Нас" },
    description: {
      el: "Η CleanPro είναι μια αφοσιωμένη ομάδα επαγγελματιών καθαρισμού που δεσμεύεται να μεταμορφώνει χώρους. Με χρόνια εμπειρίας, παρέχουμε εξατομικευμένες λύσεις καθαρισμού που ξεπερνούν τις προσδοκίες — από μικρά διαμερίσματα έως μεγάλους εμπορικούς χώρους.",
      en: "CleanPro is a dedicated team of cleaning professionals committed to transforming spaces. With years of experience, we deliver tailored cleaning solutions that exceed expectations — from cozy apartments to large commercial venues.",
      ru: "CleanPro — это команда профессионалов клининга, которая преобразует пространства. Благодаря многолетнему опыту, мы предоставляем индивидуальные решения по уборке, превосходящие ожидания — от уютных квартир до крупных коммерческих объектов.",
    },
    trusted: { el: "Αξιόπιστοι", en: "Trusted", ru: "Надёжность" },
    trustedDesc: { el: "Αδειοδοτημένες, ασφαλισμένες και ελεγμένες ομάδες στις οποίες μπορείτε να εμπιστευτείτε.", en: "Licensed, insured, and background-checked teams you can rely on.", ru: "Лицензированные, застрахованные и проверенные команды, которым вы можете доверять." },
    quality: { el: "Ποιότητα", en: "Quality", ru: "Качество" },
    qualityDesc: { el: "Χρησιμοποιούμε επαγγελματικά προϊόντα και δοκιμασμένες τεχνικές.", en: "We use professional-grade products and proven techniques.", ru: "Мы используем профессиональные средства и проверенные методы." },
    care: { el: "Φροντίδα", en: "Care", ru: "Забота" },
    careDesc: { el: "Κάθε χώρος αντιμετωπίζεται με προσοχή στη λεπτομέρεια και σεβασμό.", en: "Every space is treated with attention to detail and respect.", ru: "Каждое пространство обрабатывается с вниманием к деталям и уважением." },
  },

  // Services
  services: {
    heading: { el: "Οι Υπηρεσίες μας", en: "Our Services", ru: "Наши Услуги" },
    subtitle: { el: "Ολοκληρωμένες λύσεις καθαρισμού για κάθε ανάγκη.", en: "Comprehensive cleaning solutions tailored to every need.", ru: "Комплексные клининговые решения для любых потребностей." },
    residential: { el: "Οικιακός Καθαρισμός", en: "Residential Cleaning", ru: "Уборка Жилых Помещений" },
    residentialDesc: { el: "Τακτικός και βαθύς καθαρισμός για σπίτια και διαμερίσματα. Προσαρμοσμένος στο πρόγραμμά σας.", en: "Regular and deep cleaning for homes, apartments, and condos. Customized to your schedule.", ru: "Регулярная и генеральная уборка домов и квартир. Подстраиваемся под ваш график." },
    postConstruction: { el: "Μετακατασκευαστικός", en: "Post-Construction", ru: "Послестроительная" },
    postConstructionDesc: { el: "Πλήρης απομάκρυνση μπαζών και γυάλισμα μετά από ανακαινίσεις ή νέες κατασκευές.", en: "Thorough debris removal and polishing after renovations or new builds.", ru: "Полное удаление строительного мусора и полировка после ремонта или нового строительства." },
    commercial: { el: "Εμπορικός Καθαρισμός", en: "Commercial Cleaning", ru: "Коммерческая Уборка" },
    commercialDesc: { el: "Γραφεία, εμπορικοί χώροι και εταιρικές εγκαταστάσεις πάντα καθαρά.", en: "Offices, retail spaces, and corporate facilities kept impeccably clean.", ru: "Офисы, торговые помещения и корпоративные объекты всегда в безупречной чистоте." },
    specialized: { el: "Εξειδικευμένες Υπηρεσίες", en: "Specialized Services", ru: "Специализированные Услуги" },
    specializedDesc: { el: "Απολύμανση με ατμό, πλύσιμο υπό πίεση, καθαρισμός παραθύρων και πολλά άλλα.", en: "Steam disinfection, pressure washing, window cleaning, and more.", ru: "Паровая дезинфекция, мойка под давлением, мытьё окон и многое другое." },
  },

  // Specialized
  specialized: {
    heading: { el: "Εξειδικευμένες Υπηρεσίες", en: "Specialized Services", ru: "Специализированные Услуги" },
    subtitle: { el: "Προηγμένες τεχνικές καθαρισμού για συγκεκριμένες ανάγκες.", en: "Advanced cleaning techniques for specific needs.", ru: "Передовые методы уборки для конкретных задач." },
    steam: { el: "Απολύμανση με Ατμό", en: "Steam Disinfection", ru: "Паровая Дезинфекция" },
    steamDesc: {
      el: "Καθαρισμός με ατμό υψηλής θερμοκρασίας που εξαλείφει το 99,9% των βακτηρίων και αλλεργιογόνων χωρίς σκληρά χημικά. Ιδανικό για κουζίνες, μπάνια και υγειονομικές εγκαταστάσεις.",
      en: "High-temperature steam cleaning that eliminates 99.9% of bacteria and allergens without harsh chemicals. Ideal for kitchens, bathrooms, and healthcare facilities.",
      ru: "Паровая очистка при высокой температуре, уничтожающая 99,9% бактерий и аллергенов без агрессивной химии. Идеально для кухонь, ванных и медицинских учреждений.",
    },
    pressure: { el: "Πλύσιμο υπό Πίεση", en: "Pressure Washing", ru: "Мойка Под Давлением" },
    pressureDesc: {
      el: "Βιομηχανικό πλύσιμο υπό πίεση για δρόμους, προσόψεις, βεράντες και πάρκινγκ. Αποκαθιστά τις επιφάνειες στην αρχική τους κατάσταση.",
      en: "Industrial-grade pressure washing for driveways, facades, patios, and parking areas. Restores surfaces to their original condition.",
      ru: "Промышленная мойка под давлением для подъездных путей, фасадов, террас и парковок. Возвращает поверхностям первоначальный вид.",
    },
    window: { el: "Καθαρισμός Παραθύρων", en: "Window Cleaning", ru: "Мытьё Окон" },
    windowDesc: {
      el: "Καθαρισμός παραθύρων χωρίς ραβδώσεις, εσωτερικά και εξωτερικά, για κτίρια οποιουδήποτε ύψους. Εγγυημένα κρυστάλλινα αποτελέσματα.",
      en: "Streak-free interior and exterior window cleaning for buildings of any height. Crystal-clear results guaranteed.",
      ru: "Мытьё окон без разводов, внутри и снаружи, для зданий любой высоты. Гарантированно кристально чистый результат.",
    },
  },

  // Commercial
  commercial: {
    heading: { el: "Εμπορικός Καθαρισμός", en: "Commercial Cleaning", ru: "Коммерческая Уборка" },
    description: {
      el: "Κρατάμε τις επιχειρήσεις πεντακάθαρες ώστε να μπορείτε να εστιάσετε σε αυτό που μετράει. Από την καθημερινή συντήρηση γραφείων μέχρι τον βαθύ καθαρισμό κουζινών, οι εμπορικές μας υπηρεσίες καλύπτουν κάθε πτυχή του χώρου εργασίας σας.",
      en: "We keep businesses spotless so you can focus on what matters. From daily office maintenance to deep kitchen degreasing, our commercial services cover every aspect of your workspace.",
      ru: "Мы поддерживаем безупречную чистоту в бизнесе, чтобы вы могли сосредоточиться на главном. От ежедневного обслуживания офисов до глубокой очистки кухонь — наши коммерческие услуги охватывают все аспекты вашего рабочего пространства.",
    },
    office: { el: "Καθαρισμός Γραφείων", en: "Office Cleaning", ru: "Уборка Офисов" },
    officeDesc: { el: "Καθημερινή ή εβδομαδιαία συντήρηση γραφείων, δάπεδα, τουαλέτες και κοινόχρηστους χώρους.", en: "Daily or weekly office maintenance including desks, floors, restrooms, and common areas.", ru: "Ежедневное или еженедельное обслуживание офисов: столы, полы, санузлы и общие зоны." },
    restaurant: { el: "Χώροι Εστίασης", en: "Restaurant Areas", ru: "Зоны Ресторанов" },
    restaurantDesc: { el: "Καθαρισμός χώρων εστίασης: τραπεζαρίες, μπαρ και χώροι εξυπηρέτησης πελατών.", en: "Front-of-house cleaning: dining areas, bars, and customer-facing spaces.", ru: "Уборка залов обслуживания: обеденные зоны, бары и клиентские пространства." },
    kitchen: { el: "Καθαρισμός Κουζίνας", en: "Kitchen Degreasing", ru: "Очистка Кухни" },
    kitchenDesc: { el: "Βαθύς καθαρισμός βιομηχανικής κουζίνας: απορροφητήρες, λιποσυλλέκτες, εξοπλισμός και επιφάνειες.", en: "Industrial kitchen deep-clean: hoods, grease traps, equipment, and surfaces.", ru: "Глубокая очистка промышленной кухни: вытяжки, жироуловители, оборудование и поверхности." },
  },

  // Post-Construction
  postConst: {
    heading: { el: "Μετακατασκευαστικός Καθαρισμός", en: "Post-Construction Cleaning", ru: "Послестроительная Уборка" },
    subtitle: { el: "Μια συστηματική διαδικασία 3 βημάτων για τη μετατροπή κάθε εργοταξίου σε έτοιμο χώρο.", en: "A systematic 3-step process to transform any construction site into a move-in-ready space.", ru: "Систематический 3-этапный процесс превращения строительной площадки в готовое к заселению пространство." },
    step: { el: "Βήμα", en: "Step", ru: "Этап" },
    inspection: { el: "Επιθεώρηση Χώρου", en: "Site Inspection", ru: "Осмотр Объекта" },
    inspectionDesc: { el: "Διεξοδική αξιολόγηση του χώρου για τον σχεδιασμό της διαδικασίας καθαρισμού.", en: "Thorough assessment of the site to plan the cleaning process and identify special requirements.", ru: "Тщательная оценка объекта для планирования процесса уборки и определения особых требований." },
    heavy: { el: "Βαρύς Καθαρισμός", en: "Heavy Cleaning", ru: "Основная Уборка" },
    heavyDesc: { el: "Απομάκρυνση μπαζών, σκόνης, υπολειμμάτων βαφής και οικοδομικών υλικών.", en: "Removal of debris, dust, paint residues, and construction materials from all surfaces.", ru: "Удаление мусора, пыли, остатков краски и строительных материалов со всех поверхностей." },
    polish: { el: "Τελικό Γυάλισμα", en: "Final Polish", ru: "Финальная Полировка" },
    polishDesc: { el: "Λεπτομερείς τελικές πινελιές: παράθυρα, δάπεδα, εξαρτήματα γυαλισμένα στην τελειότητα.", en: "Detailed finishing touches: windows, floors, fixtures polished to perfection.", ru: "Детальная финишная отделка: окна, полы, фурнитура отполированы до совершенства." },
  },

  // Bio-Cleaning
  bio: {
    heading: { el: "Βιο-Καθαρισμός", en: "Bio-Cleaning", ru: "Био-Уборка" },
    description: {
      el: "Επαγγελματικός υγρός-ξηρός καθαρισμός εκχύλισης που αφαιρεί βαθιά ενσωματωμένη βρωμιά, λεκέδες και αλλεργιογόνα. Ο προηγμένος εξοπλισμός μας φτάνει εκεί που ο κανονικός καθαρισμός δεν μπορεί.",
      en: "Professional wet-dry extraction cleaning that removes deep-seated dirt, stains, and allergens. Our advanced equipment reaches where regular cleaning can't.",
      ru: "Профессиональная экстракционная уборка, удаляющая глубоко въевшуюся грязь, пятна и аллергены. Наше современное оборудование достигает мест, недоступных обычной уборке.",
    },
    whatWeClean: { el: "Τι Καθαρίζουμε", en: "What We Clean", ru: "Что Мы Чистим" },
    upholstery: { el: "Σαλόνια & Καναπέδες", en: "Upholstery & Sofas", ru: "Мягкая Мебель и Диваны" },
    mattresses: { el: "Στρώματα", en: "Mattresses", ru: "Матрасы" },
    carpets: { el: "Χαλιά & Μοκέτες", en: "Carpets & Rugs", ru: "Ковры и Ковролин" },
    vehicle: { el: "Εσωτερικά Οχημάτων", en: "Vehicle Interiors", ru: "Салоны Автомобилей" },
    pricingTitle: { el: "Τιμοκατάλογος Βιο-Καθαρισμού", en: "Bio-Cleaning Pricing", ru: "Цены на Био-Уборку" },
    item: { el: "Αντικείμενο", en: "Item", ru: "Предмет" },
    startingFrom: { el: "Από", en: "Starting From", ru: "От" },
    armchair: { el: "Πολυθρόνα", en: "Armchair", ru: "Кресло" },
    sofa2: { el: "Διθέσιος Καναπές", en: "2-Seat Sofa", ru: "2-местный Диван" },
    sofa3: { el: "Τριθέσιος Καναπές", en: "3-Seat Sofa", ru: "3-местный Диван" },
    mattressSingle: { el: "Στρώμα (Μονό)", en: "Mattress (Single)", ru: "Матрас (Односпальный)" },
    mattressDouble: { el: "Στρώμα (Διπλό)", en: "Mattress (Double)", ru: "Матрас (Двуспальный)" },
    carInterior: { el: "Εσωτερικό Αυτοκινήτου", en: "Car Interior", ru: "Салон Автомобиля" },
  },

  // Pricing
  pricing: {
    heading: { el: "Διαφανής Τιμολόγηση", en: "Transparent Pricing", ru: "Прозрачные Цены" },
    subtitle: { el: "Ξεκάθαρες, ανταγωνιστικές τιμές χωρίς κρυφές χρεώσεις.", en: "Clear, competitive rates with no hidden fees.", ru: "Понятные, конкурентные цены без скрытых сборов." },
    perSqMeter: { el: "ανά τ.μ.", en: "per sq meter", ru: "за кв. м" },
    mostPopular: { el: "Πιο Δημοφιλές", en: "Most Popular", ru: "Самое Популярное" },
    getQuote: { el: "Ζητήστε Προσφορά", en: "Get Quote", ru: "Запросить" },
    from: { el: "από", en: "from", ru: "от" },
    residential: { el: "Οικιακός", en: "Residential", ru: "Жилой" },
    commercial: { el: "Εμπορικός", en: "Commercial", ru: "Коммерческий" },
    postConstruction: { el: "Μετακατασκευαστικός", en: "Post-Construction", ru: "Послестроительный" },
    residentialFeatures: {
      el: ["Τακτικός ή εφάπαξ καθαρισμός", "Κουζίνα & μπάνια", "Σφουγγάρισμα & σκούπισμα", "Ξεσκόνισμα όλων των επιφανειών", "Απομάκρυνση σκουπιδιών"],
      en: ["Regular or one-time cleaning", "Kitchen & bathrooms", "Floor mopping & vacuuming", "Dusting all surfaces", "Trash removal"],
      ru: ["Регулярная или разовая уборка", "Кухня и ванные", "Мытьё и пылесос полов", "Протирка всех поверхностей", "Вынос мусора"],
    },
    commercialFeatures: {
      el: ["Καθημερινό ή εβδομαδιαίο πρόγραμμα", "Γραφεία & κοινόχρηστοι χώροι", "Απολύμανση τουαλετών", "Καθαρισμός παραθύρων & τζαμιών", "Συντήρηση δαπέδων"],
      en: ["Daily or weekly schedule", "Office desks & common areas", "Restroom sanitation", "Window & glass cleaning", "Floor maintenance"],
      ru: ["Ежедневный или еженедельный график", "Офисы и общие зоны", "Санитарная обработка санузлов", "Мытьё окон и стёкол", "Уход за полами"],
    },
    postConstructionFeatures: {
      el: ["Πλήρης απομάκρυνση μπαζών", "Καθαρισμός βαφής & κόλλας", "Βαθύ τρίψιμο δαπέδων", "Γυάλισμα παραθύρων & εξαρτημάτων", "Τελικός έλεγχος"],
      en: ["Full debris removal", "Paint & adhesive cleanup", "Deep floor scrubbing", "Window & fixture polish", "Final inspection included"],
      ru: ["Полное удаление мусора", "Очистка от краски и клея", "Глубокая чистка полов", "Полировка окон и фурнитуры", "Финальная проверка"],
    },
  },

  // Contact
  contact: {
    heading: { el: "Επικοινωνήστε μαζί μας", en: "Get in Touch", ru: "Свяжитесь с Нами" },
    subtitle: { el: "Ζητήστε δωρεάν προσφορά ή ρωτήστε μας οτιδήποτε.", en: "Request a free quote or ask us anything.", ru: "Запросите бесплатную оценку или задайте любой вопрос." },
    name: { el: "Ονοματεπώνυμο *", en: "Full Name *", ru: "Полное Имя *" },
    namePlaceholder: { el: "Γιάννης Παπαδόπουλος", en: "John Doe", ru: "Иван Иванов" },
    email: { el: "Email *", en: "Email *", ru: "Email *" },
    phone: { el: "Τηλέφωνο", en: "Phone", ru: "Телефон" },
    message: { el: "Μήνυμα *", en: "Message *", ru: "Сообщение *" },
    messagePlaceholder: { el: "Πείτε μας για τις ανάγκες καθαρισμού σας...", en: "Tell us about your cleaning needs...", ru: "Расскажите нам о ваших потребностях в уборке..." },
    send: { el: "Αποστολή Μηνύματος", en: "Send Message", ru: "Отправить Сообщение" },
    sending: { el: "Αποστολή...", en: "Sending...", ru: "Отправка..." },
    successTitle: { el: "Το μήνυμα εστάλη!", en: "Message Sent!", ru: "Сообщение Отправлено!" },
    successDesc: { el: "Ευχαριστούμε που επικοινωνήσατε. Θα σας απαντήσουμε εντός 24 ωρών.", en: "Thank you for reaching out. We'll get back to you within 24 hours.", ru: "Спасибо за обращение. Мы ответим вам в течение 24 часов." },
    sendAnother: { el: "Νέο Μήνυμα", en: "Send Another Message", ru: "Новое Сообщение" },
    nameRequired: { el: "Το όνομα είναι υποχρεωτικό", en: "Name is required", ru: "Имя обязательно" },
    emailRequired: { el: "Το email είναι υποχρεωτικό", en: "Email is required", ru: "Email обязателен" },
    emailInvalid: { el: "Μη έγκυρη διεύθυνση email", en: "Invalid email address", ru: "Неверный email адрес" },
    messageRequired: { el: "Το μήνυμα είναι υποχρεωτικό", en: "Message is required", ru: "Сообщение обязательно" },
    error: { el: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.", en: "Something went wrong. Please try again.", ru: "Что-то пошло не так. Попробуйте снова." },
    address: { el: "Αριστείδου 19-21, Καλαμαριά 551 33", en: "Aristidou 19-21, Kalamaria 551 33", ru: "Аристиду 19-21, Каламарья 551 33" },
  },

  // Footer
  footer: {
    description: {
      el: "Επαγγελματικές υπηρεσίες καθαρισμού για σπίτια, επιχειρήσεις και εργοτάξια. Ποιότητα που μπορείτε να εμπιστευτείτε.",
      en: "Professional cleaning services for homes, businesses, and construction sites. Quality you can trust.",
      ru: "Профессиональные клининговые услуги для домов, офисов и строительных объектов. Качество, которому можно доверять.",
    },
    quickLinks: { el: "Γρήγοροι Σύνδεσμοι", en: "Quick Links", ru: "Быстрые Ссылки" },
    servicesTitle: { el: "Υπηρεσίες", en: "Services", ru: "Услуги" },
    followUs: { el: "Ακολουθήστε μας", en: "Follow Us", ru: "Подписывайтесь" },
    residentialCleaning: { el: "Οικιακός Καθαρισμός", en: "Residential Cleaning", ru: "Уборка Жилых Помещений" },
    commercialCleaning: { el: "Εμπορικός Καθαρισμός", en: "Commercial Cleaning", ru: "Коммерческая Уборка" },
    postConstructionLabel: { el: "Μετακατασκευαστικός", en: "Post-Construction", ru: "Послестроительная" },
    bioCleaning: { el: "Βιο-Καθαρισμός", en: "Bio-Cleaning", ru: "Био-Уборка" },
    specializedServices: { el: "Εξειδικευμένες Υπηρεσίες", en: "Specialized Services", ru: "Специализированные Услуги" },
    rights: { el: "Με επιφύλαξη παντός δικαιώματος.", en: "All rights reserved.", ru: "Все права защищены." },
  },

  // Blog
  blog: {
    heading: { el: "Άρθρα & Συμβουλές", en: "Articles & Tips", ru: "Статьи и Советы" },
    subtitle: { el: "Χρήσιμες πληροφορίες για τον καθαρισμό και τη συντήρηση του χώρου σας.", en: "Useful information about cleaning and maintaining your space.", ru: "Полезная информация об уборке и уходе за вашим пространством." },
    readMore: { el: "Διαβάστε Περισσότερα", en: "Read More", ru: "Читать Далее" },
    backToBlog: { el: "Πίσω στο Blog", en: "Back to Blog", ru: "Назад к Блогу" },
  },

  // FAQ
  faq: {
    heading: { el: "Συχνές Ερωτήσεις", en: "Frequently Asked Questions", ru: "Часто Задаваемые Вопросы" },
    subtitle: { el: "Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις για τις υπηρεσίες μας.", en: "Find answers to the most common questions about our services.", ru: "Найдите ответы на самые частые вопросы о наших услугах." },
  },

  // Cookies
  cookies: {
    message: {
      el: "Αυτός ο ιστότοπος χρησιμοποιεί cookies για να βελτιώσει την εμπειρία σας. Συνεχίζοντας την περιήγηση, συμφωνείτε με τη χρήση cookies.",
      en: "This website uses cookies to improve your experience. By continuing to browse, you agree to our use of cookies.",
      ru: "Этот сайт использует файлы cookie для улучшения вашего опыта. Продолжая просмотр, вы соглашаетесь с использованием cookie.",
    },
    accept: { el: "Αποδοχή", en: "Accept", ru: "Принять" },
    decline: { el: "Απόρριψη", en: "Decline", ru: "Отклонить" },
  },
} as const;
