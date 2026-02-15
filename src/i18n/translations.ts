export type Lang = "el" | "en";

export const translations = {
  // Navbar
  nav: {
    home: { el: "Αρχική", en: "Home" },
    about: { el: "Σχετικά", en: "About" },
    services: { el: "Υπηρεσίες", en: "Services" },
    pricing: { el: "Τιμοκατάλογος", en: "Pricing" },
    contact: { el: "Επικοινωνία", en: "Contact" },
  },

  // TopBar
  topbar: {
    hours: { el: "Δευ - Σάβ: 8:00 - 18:00", en: "Mon - Sat: 8:00 - 18:00" },
  },

  // Hero
  hero: {
    title1: { el: "Επαγγελματικές", en: "Professional" },
    title2: { el: "Υπηρεσίες Καθαρισμού", en: "Cleaning Services" },
    subtitle: {
      el: "Ολοκληρωμένες λύσεις καθαρισμού για σπίτια, επιχειρήσεις και μετά την κατασκευή. Παραδίδουμε άψογα αποτελέσματα με προσοχή σε κάθε λεπτομέρεια.",
      en: "Comprehensive cleaning solutions for homes, businesses, and post-construction sites. We deliver spotless results with attention to every detail.",
    },
    cta: { el: "Δωρεάν Προσφορά", en: "Get a Free Quote" },
  },

  // About
  about: {
    heading: { el: "Ποιοι Είμαστε", en: "Who We Are" },
    description: {
      el: "Η CleanPro είναι μια αφοσιωμένη ομάδα επαγγελματιών καθαρισμού που δεσμεύεται να μεταμορφώνει χώρους. Με χρόνια εμπειρίας, παρέχουμε εξατομικευμένες λύσεις καθαρισμού που ξεπερνούν τις προσδοκίες — από μικρά διαμερίσματα έως μεγάλους εμπορικούς χώρους.",
      en: "CleanPro is a dedicated team of cleaning professionals committed to transforming spaces. With years of experience, we deliver tailored cleaning solutions that exceed expectations — from cozy apartments to large commercial venues.",
    },
    trusted: { el: "Αξιόπιστοι", en: "Trusted" },
    trustedDesc: { el: "Αδειοδοτημένες, ασφαλισμένες και ελεγμένες ομάδες στις οποίες μπορείτε να εμπιστευτείτε.", en: "Licensed, insured, and background-checked teams you can rely on." },
    quality: { el: "Ποιότητα", en: "Quality" },
    qualityDesc: { el: "Χρησιμοποιούμε επαγγελματικά προϊόντα και δοκιμασμένες τεχνικές.", en: "We use professional-grade products and proven techniques." },
    care: { el: "Φροντίδα", en: "Care" },
    careDesc: { el: "Κάθε χώρος αντιμετωπίζεται με προσοχή στη λεπτομέρεια και σεβασμό.", en: "Every space is treated with attention to detail and respect." },
  },

  // Services
  services: {
    heading: { el: "Οι Υπηρεσίες μας", en: "Our Services" },
    subtitle: { el: "Ολοκληρωμένες λύσεις καθαρισμού για κάθε ανάγκη.", en: "Comprehensive cleaning solutions tailored to every need." },
    residential: { el: "Οικιακός Καθαρισμός", en: "Residential Cleaning" },
    residentialDesc: { el: "Τακτικός και βαθύς καθαρισμός για σπίτια και διαμερίσματα. Προσαρμοσμένος στο πρόγραμμά σας.", en: "Regular and deep cleaning for homes, apartments, and condos. Customized to your schedule." },
    postConstruction: { el: "Μετακατασκευαστικός", en: "Post-Construction" },
    postConstructionDesc: { el: "Πλήρης απομάκρυνση μπαζών και γυάλισμα μετά από ανακαινίσεις ή νέες κατασκευές.", en: "Thorough debris removal and polishing after renovations or new builds." },
    commercial: { el: "Εμπορικός Καθαρισμός", en: "Commercial Cleaning" },
    commercialDesc: { el: "Γραφεία, εμπορικοί χώροι και εταιρικές εγκαταστάσεις πάντα καθαρά.", en: "Offices, retail spaces, and corporate facilities kept impeccably clean." },
    specialized: { el: "Εξειδικευμένες Υπηρεσίες", en: "Specialized Services" },
    specializedDesc: { el: "Απολύμανση με ατμό, πλύσιμο υπό πίεση, καθαρισμός παραθύρων και πολλά άλλα.", en: "Steam disinfection, pressure washing, window cleaning, and more." },
  },

  // Specialized
  specialized: {
    heading: { el: "Εξειδικευμένες Υπηρεσίες", en: "Specialized Services" },
    subtitle: { el: "Προηγμένες τεχνικές καθαρισμού για συγκεκριμένες ανάγκες.", en: "Advanced cleaning techniques for specific needs." },
    steam: { el: "Απολύμανση με Ατμό", en: "Steam Disinfection" },
    steamDesc: {
      el: "Καθαρισμός με ατμό υψηλής θερμοκρασίας που εξαλείφει το 99,9% των βακτηρίων και αλλεργιογόνων χωρίς σκληρά χημικά. Ιδανικό για κουζίνες, μπάνια και υγειονομικές εγκαταστάσεις.",
      en: "High-temperature steam cleaning that eliminates 99.9% of bacteria and allergens without harsh chemicals. Ideal for kitchens, bathrooms, and healthcare facilities.",
    },
    pressure: { el: "Πλύσιμο υπό Πίεση", en: "Pressure Washing" },
    pressureDesc: {
      el: "Βιομηχανικό πλύσιμο υπό πίεση για δρόμους, προσόψεις, βεράντες και πάρκινγκ. Αποκαθιστά τις επιφάνειες στην αρχική τους κατάσταση.",
      en: "Industrial-grade pressure washing for driveways, facades, patios, and parking areas. Restores surfaces to their original condition.",
    },
    window: { el: "Καθαρισμός Παραθύρων", en: "Window Cleaning" },
    windowDesc: {
      el: "Καθαρισμός παραθύρων χωρίς ραβδώσεις, εσωτερικά και εξωτερικά, για κτίρια οποιουδήποτε ύψους. Εγγυημένα κρυστάλλινα αποτελέσματα.",
      en: "Streak-free interior and exterior window cleaning for buildings of any height. Crystal-clear results guaranteed.",
    },
  },

  // Commercial
  commercial: {
    heading: { el: "Εμπορικός Καθαρισμός", en: "Commercial Cleaning" },
    description: {
      el: "Κρατάμε τις επιχειρήσεις πεντακάθαρες ώστε να μπορείτε να εστιάσετε σε αυτό που μετράει. Από την καθημερινή συντήρηση γραφείων μέχρι τον βαθύ καθαρισμό κουζινών, οι εμπορικές μας υπηρεσίες καλύπτουν κάθε πτυχή του χώρου εργασίας σας.",
      en: "We keep businesses spotless so you can focus on what matters. From daily office maintenance to deep kitchen degreasing, our commercial services cover every aspect of your workspace.",
    },
    office: { el: "Καθαρισμός Γραφείων", en: "Office Cleaning" },
    officeDesc: { el: "Καθημερινή ή εβδομαδιαία συντήρηση γραφείων, δάπεδα, τουαλέτες και κοινόχρηστους χώρους.", en: "Daily or weekly office maintenance including desks, floors, restrooms, and common areas." },
    restaurant: { el: "Χώροι Εστίασης", en: "Restaurant Areas" },
    restaurantDesc: { el: "Καθαρισμός χώρων εστίασης: τραπεζαρίες, μπαρ και χώροι εξυπηρέτησης πελατών.", en: "Front-of-house cleaning: dining areas, bars, and customer-facing spaces." },
    kitchen: { el: "Καθαρισμός Κουζίνας", en: "Kitchen Degreasing" },
    kitchenDesc: { el: "Βαθύς καθαρισμός βιομηχανικής κουζίνας: απορροφητήρες, λιποσυλλέκτες, εξοπλισμός και επιφάνειες.", en: "Industrial kitchen deep-clean: hoods, grease traps, equipment, and surfaces." },
  },

  // Post-Construction
  postConst: {
    heading: { el: "Μετακατασκευαστικός Καθαρισμός", en: "Post-Construction Cleaning" },
    subtitle: { el: "Μια συστηματική διαδικασία 3 βημάτων για τη μετατροπή κάθε εργοταξίου σε έτοιμο χώρο.", en: "A systematic 3-step process to transform any construction site into a move-in-ready space." },
    step: { el: "Βήμα", en: "Step" },
    inspection: { el: "Επιθεώρηση Χώρου", en: "Site Inspection" },
    inspectionDesc: { el: "Διεξοδική αξιολόγηση του χώρου για τον σχεδιασμό της διαδικασίας καθαρισμού.", en: "Thorough assessment of the site to plan the cleaning process and identify special requirements." },
    heavy: { el: "Βαρύς Καθαρισμός", en: "Heavy Cleaning" },
    heavyDesc: { el: "Απομάκρυνση μπαζών, σκόνης, υπολειμμάτων βαφής και οικοδομικών υλικών.", en: "Removal of debris, dust, paint residues, and construction materials from all surfaces." },
    polish: { el: "Τελικό Γυάλισμα", en: "Final Polish" },
    polishDesc: { el: "Λεπτομερείς τελικές πινελιές: παράθυρα, δάπεδα, εξαρτήματα γυαλισμένα στην τελειότητα.", en: "Detailed finishing touches: windows, floors, fixtures polished to perfection." },
  },

  // Bio-Cleaning
  bio: {
    heading: { el: "Βιο-Καθαρισμός", en: "Bio-Cleaning" },
    description: {
      el: "Επαγγελματικός υγρός-ξηρός καθαρισμός εκχύλισης που αφαιρεί βαθιά ενσωματωμένη βρωμιά, λεκέδες και αλλεργιογόνα. Ο προηγμένος εξοπλισμός μας φτάνει εκεί που ο κανονικός καθαρισμός δεν μπορεί.",
      en: "Professional wet-dry extraction cleaning that removes deep-seated dirt, stains, and allergens. Our advanced equipment reaches where regular cleaning can't.",
    },
    whatWeClean: { el: "Τι Καθαρίζουμε", en: "What We Clean" },
    upholstery: { el: "Σαλόνια & Καναπέδες", en: "Upholstery & Sofas" },
    mattresses: { el: "Στρώματα", en: "Mattresses" },
    carpets: { el: "Χαλιά & Μοκέτες", en: "Carpets & Rugs" },
    vehicle: { el: "Εσωτερικά Οχημάτων", en: "Vehicle Interiors" },
    pricingTitle: { el: "Τιμοκατάλογος Βιο-Καθαρισμού", en: "Bio-Cleaning Pricing" },
    item: { el: "Αντικείμενο", en: "Item" },
    startingFrom: { el: "Από", en: "Starting From" },
    armchair: { el: "Πολυθρόνα", en: "Armchair" },
    sofa2: { el: "Διθέσιος Καναπές", en: "2-Seat Sofa" },
    sofa3: { el: "Τριθέσιος Καναπές", en: "3-Seat Sofa" },
    mattressSingle: { el: "Στρώμα (Μονό)", en: "Mattress (Single)" },
    mattressDouble: { el: "Στρώμα (Διπλό)", en: "Mattress (Double)" },
    carInterior: { el: "Εσωτερικό Αυτοκινήτου", en: "Car Interior" },
  },

  // Pricing
  pricing: {
    heading: { el: "Διαφανής Τιμολόγηση", en: "Transparent Pricing" },
    subtitle: { el: "Ξεκάθαρες, ανταγωνιστικές τιμές χωρίς κρυφές χρεώσεις.", en: "Clear, competitive rates with no hidden fees." },
    perSqMeter: { el: "ανά τ.μ.", en: "per sq meter" },
    mostPopular: { el: "Πιο Δημοφιλές", en: "Most Popular" },
    getQuote: { el: "Ζητήστε Προσφορά", en: "Get Quote" },
    residential: { el: "Οικιακός", en: "Residential" },
    commercial: { el: "Εμπορικός", en: "Commercial" },
    postConstruction: { el: "Μετακατασκευαστικός", en: "Post-Construction" },
    residentialFeatures: {
      el: ["Τακτικός ή εφάπαξ καθαρισμός", "Κουζίνα & μπάνια", "Σφουγγάρισμα & σκούπισμα", "Ξεσκόνισμα όλων των επιφανειών", "Απομάκρυνση σκουπιδιών"],
      en: ["Regular or one-time cleaning", "Kitchen & bathrooms", "Floor mopping & vacuuming", "Dusting all surfaces", "Trash removal"],
    },
    commercialFeatures: {
      el: ["Καθημερινό ή εβδομαδιαίο πρόγραμμα", "Γραφεία & κοινόχρηστοι χώροι", "Απολύμανση τουαλετών", "Καθαρισμός παραθύρων & τζαμιών", "Συντήρηση δαπέδων"],
      en: ["Daily or weekly schedule", "Office desks & common areas", "Restroom sanitation", "Window & glass cleaning", "Floor maintenance"],
    },
    postConstructionFeatures: {
      el: ["Πλήρης απομάκρυνση μπαζών", "Καθαρισμός βαφής & κόλλας", "Βαθύ τρίψιμο δαπέδων", "Γυάλισμα παραθύρων & εξαρτημάτων", "Τελικός έλεγχος"],
      en: ["Full debris removal", "Paint & adhesive cleanup", "Deep floor scrubbing", "Window & fixture polish", "Final inspection included"],
    },
  },

  // Contact
  contact: {
    heading: { el: "Επικοινωνήστε μαζί μας", en: "Get in Touch" },
    subtitle: { el: "Ζητήστε δωρεάν προσφορά ή ρωτήστε μας οτιδήποτε.", en: "Request a free quote or ask us anything." },
    name: { el: "Ονοματεπώνυμο *", en: "Full Name *" },
    namePlaceholder: { el: "Γιάννης Παπαδόπουλος", en: "John Doe" },
    email: { el: "Email *", en: "Email *" },
    phone: { el: "Τηλέφωνο", en: "Phone" },
    message: { el: "Μήνυμα *", en: "Message *" },
    messagePlaceholder: { el: "Πείτε μας για τις ανάγκες καθαρισμού σας...", en: "Tell us about your cleaning needs..." },
    send: { el: "Αποστολή Μηνύματος", en: "Send Message" },
    sending: { el: "Αποστολή...", en: "Sending..." },
    successTitle: { el: "Το μήνυμα εστάλη!", en: "Message Sent!" },
    successDesc: { el: "Ευχαριστούμε που επικοινωνήσατε. Θα σας απαντήσουμε εντός 24 ωρών.", en: "Thank you for reaching out. We'll get back to you within 24 hours." },
    sendAnother: { el: "Νέο Μήνυμα", en: "Send Another Message" },
    nameRequired: { el: "Το όνομα είναι υποχρεωτικό", en: "Name is required" },
    emailRequired: { el: "Το email είναι υποχρεωτικό", en: "Email is required" },
    emailInvalid: { el: "Μη έγκυρη διεύθυνση email", en: "Invalid email address" },
    messageRequired: { el: "Το μήνυμα είναι υποχρεωτικό", en: "Message is required" },
    error: { el: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.", en: "Something went wrong. Please try again." },
    address: { el: "Αριστείδου 19-21, Καλαμαριά 551 33", en: "Aristidou 19-21, Kalamaria 551 33" },
  },

  // Footer
  footer: {
    description: {
      el: "Επαγγελματικές υπηρεσίες καθαρισμού για σπίτια, επιχειρήσεις και εργοτάξια. Ποιότητα που μπορείτε να εμπιστευτείτε.",
      en: "Professional cleaning services for homes, businesses, and construction sites. Quality you can trust.",
    },
    quickLinks: { el: "Γρήγοροι Σύνδεσμοι", en: "Quick Links" },
    servicesTitle: { el: "Υπηρεσίες", en: "Services" },
    followUs: { el: "Ακολουθήστε μας", en: "Follow Us" },
    residentialCleaning: { el: "Οικιακός Καθαρισμός", en: "Residential Cleaning" },
    commercialCleaning: { el: "Εμπορικός Καθαρισμός", en: "Commercial Cleaning" },
    postConstructionLabel: { el: "Μετακατασκευαστικός", en: "Post-Construction" },
    bioCleaning: { el: "Βιο-Καθαρισμός", en: "Bio-Cleaning" },
    specializedServices: { el: "Εξειδικευμένες Υπηρεσίες", en: "Specialized Services" },
    rights: { el: "Με επιφύλαξη παντός δικαιώματος.", en: "All rights reserved." },
  },
} as const;
