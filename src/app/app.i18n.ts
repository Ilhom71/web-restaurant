export type Lang = 'uz' | 'en' | 'ru';

export interface T {
  /* Navbar */
  navHome: string; navModules: string; navFeatures: string;
  navBenefits: string; navContact: string; navCta: string;
  /* Hero */
  heroTag: string; heroL1: string; heroL2: string; heroL3: string;
  heroDesc: string; heroBtn1: string; heroBtn2: string;
  heroS1: string; heroS2: string; heroS3: string; heroScroll: string;
  /* Why ERP */
  feTag: string; feTitle: string; feTitleGold: string; feTitleEnd: string;
  feC1Title: string; feC1Desc: string;
  feC2Title: string; feC2Desc: string;
  feC3Title: string; feC3Desc: string;
  /* How it works */
  hwTag: string; hwTitle1: string; hwTitleGold: string; hwTitle2: string;
  hwDesc1: string; hwDesc2: string; hwM1: string; hwM2: string; hwM3: string; hwBtn: string;
  /* Flow card */
  flHeader: string; flS1: string; flT1: string; flS2: string; flT2: string;
  flS3: string; flT3: string; flS4: string; flT4: string;
  flDishes: string; flWaiter: string; flPending: string; flInProgress: string; flDone: string;
  /* Modules */
  moTag: string; moTitle: string; moTitleGold: string; moDesc: string;
  moMoreBtn: string; moView: string;
  modules: { name: string; desc: string; tag: string }[];
  /* ERP Mockup */
  erTag: string; erTitle: string; erTitleGold: string; erTitleEnd: string;
  erDesc: string; erCap1: string; erCap2: string;
  /* About */
  abTag: string; abTitle: string; abTitleGold: string; abDesc: string;
  aboutBenefits: { title: string; desc: string }[];
  abBenHeader: string; abBenErr: string; abBenSpeed: string; abBenRev: string;
  abBefore: string; abAfter: string; abMonth: string;
  /* Stats banner */
  st1: string; st2: string; st3: string; st4: string;
  /* Contact */
  coTag: string; coTitle: string; coTitleGold: string; coTitleEnd: string;
  coSub: string; coPhone: string; coTelegram: string;
  coDemo: string; coDemoVal: string; coAddr: string; coAddrVal: string;
  /* Form */
  foTitle: string; foName: string; foPhone: string;
  foNamePh: string; foPhonePh: string;
  foRestaurant: string; foRestPh: string;
  foSubject: string; foSubjects: string[];
  foMessage: string; foMsgPh: string;
  foSubmit: string; foSending: string; foSuccess: string; foError: string;
  /* Footer */
  ftDesc: string; ftModCol: string; ftFeatCol: string; ftContactCol: string;
  ftLinks1: string[]; ftLinks2: string[];
  ftHours: string; ftCopy: string; ftPrivacy: string; ftTerms: string;
}

export const TRANSLATIONS: Record<Lang, T> = {

  /* ===================== O'ZBEK ===================== */
  uz: {
    navHome: "Bosh sahifa", navModules: "Modullar", navFeatures: "Imkoniyatlar",
    navBenefits: "Afzalliklar", navContact: "Aloqa", navCta: "Demo olish",

    heroTag: "Restoran Boshqaruv Tizimi",
    heroL1: "Restoraningizni", heroL2: "Aqlli va Tezkor", heroL3: "Boshqaring",
    heroDesc: "Buyurtmadan hisobotgacha — barchasi bir tizimda. Oshxona, ofitsiant, ombor va moliyani real vaqtda nazorat qiling. Samaradorlikni 3 baravar oshiring.",
    heroBtn1: "BEPUL DEMO OLISH", heroBtn2: "Modullarni Ko'rish",
    heroS1: "Modul", heroS2: "Buyurtma vaqti", heroS3: "Samaradorlik",
    heroScroll: "Pastga aylantiring",

    feTag: "Nima uchun ERP?",
    feTitle: "Restoran Boshqaruvini", feTitleGold: "Yangi Bosqichga", feTitleEnd: "Olib Chiqing",
    feC1Title: "Tez Buyurtma Olish",
    feC1Desc: "Ofitsiant planshetda buyurtma oladi — 30 soniyada oshxona ekraniga tushadi. Qog'oz va qalam yo'q, xatolik yo'q.",
    feC2Title: "Real-Vaqt Nazorat",
    feC2Desc: "Stol holati, buyurtma statusini, oshxona yuklanishini va daromadni real vaqtda bir ekrandan kuzating.",
    feC3Title: "Aqlli Hisobotlar",
    feC3Desc: "Kunlik, haftalik, oylik daromad hisobotlari. Eng ko'p sotilgan taomlar, eng faol vaqtlar avtomatik tahlil.",

    hwTag: "Buyurtma jarayoni",
    hwTitle1: "Buyurtma Olish —", hwTitleGold: "30 Soniyada", hwTitle2: "Oshxonaga Yetadi",
    hwDesc1: "Ofitsiant planshet yoki smartfonida mijoz buyurtmasini tanlaydi. Bir tugma bosish bilan buyurtma avtomatik ravishda oshxona ekraniga tushadi. Hech qanday ovozli buyruq, qog'oz yoki xatolik yo'q.",
    hwDesc2: "Oshxona ekranida taom tayyorlanganida ofitsiantga bildirishnoma boradi. Mijozga xizmat ko'rsatish tezligi 2–3 baravar oshadi, va to'lov jarayoni ham avtomatik hisoblanadi.",
    hwM1: "30s buyurtma", hwM2: "0 xatolik", hwM3: "4.9 reyting",
    hwBtn: "DEMO KO'RISH",

    flHeader: "Buyurtma jarayoni",
    flS1: "Buyurtma qabul qilindi", flT1: "14:32 — Stol №5",
    flS2: "Oshxonada tayyorlanmoqda", flT2: "Taxminiy: 15–20 daqiqa",
    flS3: "Mijozga yetkaziladi", flT3: "Kutilmoqda...",
    flS4: "To'lov amalga oshiriladi", flT4: "Naqd / Karta / QR",
    flDishes: "Taom", flWaiter: "Ofitsiant", flPending: "Kutmoqda", flInProgress: "Jarayonda", flDone: "✓",

    moTag: "Tizim Imkoniyatlari", moTitle: "ERP", moTitleGold: "Modullari",
    moDesc: "Har bir modul mustaqil ishlaydi va bir-biri bilan real vaqtda sinxronlashadi",
    moMoreBtn: "BARCHA MODULLARNI KO'RISH", moView: "Ko'rish",
    modules: [
      { name: "Buyurtma Boshqaruvi", desc: "Stol buyurtmalarini qabul qilish, tahrirlash, bekor qilish va status kuzatish", tag: "Asosiy modul" },
      { name: "Stol Boshqaruvi", desc: "Zal xaritasi, stol band/bo'sh holati, bronlash va uyg'unlashtirish boshqaruvi", tag: "Zalxona" },
      { name: "Oshxona Ekrani (KDS)", desc: "Oshxonadagi ekranda buyurtmalar, tayyorlanish vaqti va prioritet ko'rinishi", tag: "Oshxona" },
      { name: "Ombor Nazorati", desc: "Mahsulot kirim-chiqimi, qoldiq nazorati, avtomatik buyurtma signali va ogohlantirish", tag: "Inventar" },
      { name: "Kassa va To'lov", desc: "Naqd, karta, QR to'lov, chegirma, bonus tizimi va chek chiqarish", tag: "Moliya" },
      { name: "Moliyaviy Hisobotlar", desc: "Kunlik, haftalik, oylik daromad, xarajat, foyda hisobotlari va soliq hisobi", tag: "Tahlil" },
      { name: "Xodimlar Boshqaruvi", desc: "Smena jadval, ish vaqti hisobi, ofitsiant ko'rsatkichlari va maosh hisoblash", tag: "HR" },
      { name: "Menyu Boshqaruvi", desc: "Taomlar, narxlar, kategoriyalar, rasm va tavsiflarni osongina yangilab turing", tag: "Katalog" },
      { name: "Mijozlar Bazasi (CRM)", desc: "Doimiy mijozlar, buyurtma tarixi, bonus ballar va maxsus takliflar tizimi", tag: "CRM" },
    ],

    erTag: "Tizim Ko'rinishi", erTitle: "ERP", erTitleGold: "Boshqaruv", erTitleEnd: "Paneli",
    erDesc: "Barcha ma'lumotlar bir ekranda — real vaqtda, aniq va tushunarli",
    erCap1: "Buyurtmalar boshqaruv paneli", erCap2: "Daromad va tahlil paneli",

    abTag: "Nima o'zgaradi?", abTitle: "ERP Joriy Etgandan", abTitleGold: "Keyin",
    abDesc: "Restoran ERP tizimini joriy etgan so'ng, ko'plab restoranlar 3 oy ichida quyidagi natijalarni ko'rishdi:",
    aboutBenefits: [
      { title: "Buyurtma xatolari 90% kamaydi.", desc: " Qo'lda yozish va telefon orqali buyurtma xatoliklari yo'qoldi" },
      { title: "Xizmat ko'rsatish 2.5x tezlashdi.", desc: " Ofitsiantlar buyurtmani tezroq qabul qilib, ko'proq stollarga xizmat qiladi" },
      { title: "Ombor yo'qotishlari 60% kamaydi.", desc: " Mahsulot qoldiqlarini nazorat qilish avtomatlashdi" },
      { title: "Oylik daromad 30–40% oshdi.", desc: " Tezkor xizmat va xatosiz to'lov tufayli mijoz mamnuniyati oshdi" },
      { title: "Hisobot 5 daqiqada tayyor.", desc: " Endi oylik hisobotni qo'lda hisoblash shart emas — bir klik bilan tayyor" },
    ],
    abBenHeader: "Tizim joriy etilgandan so'ng",
    abBenErr: "Buyurtma xatolari", abBenSpeed: "Xizmat tezligi", abBenRev: "Oylik daromad",
    abBefore: "Avval", abAfter: "Keyin", abMonth: "oy ichida natija",

    st1: "ERP Moduli", st2: "Buyurtma vaqti", st3: "Tizim ishlashi", st4: "Texnik yordam",

    coTag: "Bog'lanish", coTitle: "Bepul", coTitleGold: "Demo", coTitleEnd: "Olish",
    coSub: "Tizimni sinab ko'ring — hech qanday to'lovsiz. Mutaxassisimiz siz uchun restoraningizga moslashtirilgan demo taqdim etadi.",
    coPhone: "Telefon", coTelegram: "Telegram",
    coDemo: "Demo muddati", coDemoVal: "14 kun — bepul",
    coAddr: "Manzil", coAddrVal: "Toshkent, O'zbekiston",

    foTitle: "Demo Uchun Murojaat",
    foName: "Ismingiz *", foPhone: "Telefon *",
    foNamePh: "To'liq ismingiz", foPhonePh: "+998 _ _ _ _ _ _ _ _ _",
    foRestaurant: "Restoran nomi", foRestPh: "Restoraningiz nomi",
    foSubject: "Qiziqish mavzusi",
    foSubjects: ["Bepul demo olish", "Buyurtma boshqaruvi", "Stol boshqaruvi", "Oshxona ekrani (KDS)", "Ombor nazorati", "Barcha modullar haqida"],
    foMessage: "Qo'shimcha ma'lumot", foMsgPh: "Restoraningiz, stol soni, muammolar haqida yozing...",
    foSubmit: "DEMO UCHUN MUROJAAT", foSending: "Yuborilmoqda...",
    foSuccess: "So'rovingiz qabul qilindi! 24 soat ichida javob beramiz.",
    foError: "Xatolik yuz berdi. Telegram orqali yozing: @ilhomuzb0001",

    ftDesc: "Restoran boshqaruvini modernizatsiya qiluvchi professional ERP yechimi. Buyurtmadan hisobotgacha — barchasi bir tizimda.",
    ftModCol: "Modullar", ftFeatCol: "Imkoniyatlar", ftContactCol: "Aloqa",
    ftLinks1: ["Buyurtma Boshqaruvi", "Stol Boshqaruvi", "Oshxona Ekrani", "Ombor Nazorati", "Kassa va To'lov", "Xodimlar HR"],
    ftLinks2: ["Real-vaqt Nazorat", "Moliyaviy Hisobot", "Menyu Boshqaruvi", "CRM Tizimi", "Statistika va Tahlil"],
    ftHours: "09:00 – 22:00",
    ftCopy: "© 2026 Restoran ERP Tizimi. Barcha huquqlar himoyalangan.",
    ftPrivacy: "Maxfiylik siyosati", ftTerms: "Foydalanish shartlari",
  },

  /* ===================== ENGLISH ===================== */
  en: {
    navHome: "Home", navModules: "Modules", navFeatures: "Features",
    navBenefits: "Benefits", navContact: "Contact", navCta: "Get Demo",

    heroTag: "Restaurant Management System",
    heroL1: "Your Restaurant,", heroL2: "Managed Smart", heroL3: "& Efficiently",
    heroDesc: "From orders to reports — all in one system. Monitor kitchen, staff, inventory and finance in real time. Triple your restaurant efficiency.",
    heroBtn1: "GET FREE DEMO", heroBtn2: "View Modules",
    heroS1: "Modules", heroS2: "Order time", heroS3: "Efficiency",
    heroScroll: "Scroll down",

    feTag: "Why ERP?",
    feTitle: "Take Your Restaurant", feTitleGold: "Management", feTitleEnd: "to the Next Level",
    feC1Title: "Fast Order Taking",
    feC1Desc: "Waiter takes the order on a tablet — it reaches the kitchen screen in 30 seconds. No paper, no pencil, no mistakes.",
    feC2Title: "Real-Time Monitoring",
    feC2Desc: "Monitor table status, order progress, kitchen load and revenue all in real time from a single dashboard.",
    feC3Title: "Smart Reports",
    feC3Desc: "Daily, weekly and monthly revenue reports. Top-selling dishes and peak hours analyzed automatically.",

    hwTag: "Order workflow",
    hwTitle1: "Order Placed —", hwTitleGold: "In 30 Seconds", hwTitle2: "To the Kitchen",
    hwDesc1: "The waiter selects the customer's order on a tablet or smartphone. With one tap, the order is automatically sent to the kitchen display. No voice commands, no paper, no errors.",
    hwDesc2: "When the dish is ready, the kitchen display notifies the waiter. Service speed increases 2–3x, and payment is calculated automatically.",
    hwM1: "30s order", hwM2: "Zero errors", hwM3: "4.9 rating",
    hwBtn: "VIEW DEMO",

    flHeader: "Order workflow",
    flS1: "Order received", flT1: "14:32 — Table №5",
    flS2: "Being prepared in kitchen", flT2: "Approx: 15–20 minutes",
    flS3: "Being delivered to customer", flT3: "Pending...",
    flS4: "Payment processed", flT4: "Cash / Card / QR",
    flDishes: "Dishes", flWaiter: "Waiter", flPending: "Pending", flInProgress: "In progress", flDone: "✓",

    moTag: "System Capabilities", moTitle: "ERP", moTitleGold: "Modules",
    moDesc: "Each module works independently and syncs with the others in real time",
    moMoreBtn: "VIEW ALL MODULES", moView: "View",
    modules: [
      { name: "Order Management", desc: "Accept, edit, cancel table orders and track their status in real time", tag: "Core module" },
      { name: "Table Management", desc: "Hall map, table availability, reservation and seating coordination", tag: "Hall" },
      { name: "Kitchen Display (KDS)", desc: "Orders, preparation time and priority shown on the kitchen screen", tag: "Kitchen" },
      { name: "Inventory Control", desc: "Product stock in/out, balance control, automatic reorder alerts", tag: "Inventory" },
      { name: "POS & Payments", desc: "Cash, card, QR payments, discounts, loyalty points and receipt printing", tag: "Finance" },
      { name: "Financial Reports", desc: "Daily, weekly, monthly revenue, expense and profit reports with tax tracking", tag: "Analytics" },
      { name: "Staff Management", desc: "Shift scheduling, work hours, waiter performance metrics and payroll", tag: "HR" },
      { name: "Menu Management", desc: "Easily update dishes, prices, categories, images and descriptions anytime", tag: "Catalog" },
      { name: "Customer Base (CRM)", desc: "Regular customers, order history, bonus points and special offers system", tag: "CRM" },
    ],

    erTag: "System Preview", erTitle: "ERP", erTitleGold: "Dashboard", erTitleEnd: "Panel",
    erDesc: "All data on one screen — real-time, accurate and easy to understand",
    erCap1: "Order management dashboard", erCap2: "Revenue and analytics panel",

    abTag: "What changes?", abTitle: "After Implementing", abTitleGold: "ERP",
    abDesc: "After adopting the Restaurant ERP system, many restaurants saw the following results within 3 months:",
    aboutBenefits: [
      { title: "Order errors dropped by 90%.", desc: " Manual writing and phone-based order mistakes were eliminated" },
      { title: "Service speed increased 2.5x.", desc: " Waiters take orders faster and serve more tables per shift" },
      { title: "Inventory losses reduced by 60%.", desc: " Stock monitoring and product tracking became fully automated" },
      { title: "Monthly revenue grew 30–40%.", desc: " Faster service and error-free payments increased customer satisfaction" },
      { title: "Reports ready in 5 minutes.", desc: " No more manual monthly calculations — one click and it's done" },
    ],
    abBenHeader: "After system implementation",
    abBenErr: "Order errors", abBenSpeed: "Service speed", abBenRev: "Monthly revenue",
    abBefore: "Before", abAfter: "After", abMonth: "months to see results",

    st1: "ERP Modules", st2: "Order time", st3: "System uptime", st4: "Support",

    coTag: "Contact Us", coTitle: "Get a", coTitleGold: "Free", coTitleEnd: "Demo",
    coSub: "Try the system at no cost. Our specialist will provide a demo tailored to your restaurant.",
    coPhone: "Phone", coTelegram: "Telegram",
    coDemo: "Demo period", coDemoVal: "14 days — free",
    coAddr: "Location", coAddrVal: "Tashkent, Uzbekistan",

    foTitle: "Request a Demo",
    foName: "Your name *", foPhone: "Phone *",
    foNamePh: "Full name", foPhonePh: "+998 _ _ _ _ _ _ _ _ _",
    foRestaurant: "Restaurant name", foRestPh: "Your restaurant name",
    foSubject: "Topic of interest",
    foSubjects: ["Get free demo", "Order management", "Table management", "Kitchen display (KDS)", "Inventory control", "All modules overview"],
    foMessage: "Additional info", foMsgPh: "Tell us about your restaurant, number of tables, current challenges...",
    foSubmit: "REQUEST DEMO", foSending: "Sending...",
    foSuccess: "Your request has been received! We'll get back to you within 24 hours.",
    foError: "An error occurred. Please reach us via Telegram: @ilhomuzb0001",

    ftDesc: "Professional ERP solution that modernizes restaurant management. From orders to reports — all in one system.",
    ftModCol: "Modules", ftFeatCol: "Features", ftContactCol: "Contact",
    ftLinks1: ["Order Management", "Table Management", "Kitchen Display", "Inventory Control", "POS & Payments", "Staff HR"],
    ftLinks2: ["Real-Time Monitoring", "Financial Reports", "Menu Management", "CRM System", "Analytics & Stats"],
    ftHours: "09:00 – 22:00",
    ftCopy: "© 2026 Restaurant ERP System. All rights reserved.",
    ftPrivacy: "Privacy Policy", ftTerms: "Terms of Service",
  },

  /* ===================== РУССКИЙ ===================== */
  ru: {
    navHome: "Главная", navModules: "Модули", navFeatures: "Возможности",
    navBenefits: "Преимущества", navContact: "Контакты", navCta: "Демо",

    heroTag: "Система управления рестораном",
    heroL1: "Управляйте", heroL2: "Рестораном Умно", heroL3: "и Эффективно",
    heroDesc: "От заказа до отчёта — всё в одной системе. Контролируйте кухню, официантов, склад и финансы в реальном времени. Повысьте эффективность в 3 раза.",
    heroBtn1: "ПОЛУЧИТЬ ДЕМО", heroBtn2: "Посмотреть модули",
    heroS1: "Модулей", heroS2: "Время заказа", heroS3: "Эффективность",
    heroScroll: "Прокрутите вниз",

    feTag: "Почему ERP?",
    feTitle: "Выведите управление", feTitleGold: "рестораном", feTitleEnd: "на новый уровень",
    feC1Title: "Быстрый приём заказов",
    feC1Desc: "Официант принимает заказ на планшете — за 30 секунд он появляется на экране кухни. Никакой бумаги и ошибок.",
    feC2Title: "Мониторинг в реальном времени",
    feC2Desc: "Следите за статусом столов, заказами, загрузкой кухни и выручкой в реальном времени с одного экрана.",
    feC3Title: "Умные отчёты",
    feC3Desc: "Ежедневные, еженедельные и ежемесячные отчёты по выручке. Самые популярные блюда и пиковые часы — автоматически.",

    hwTag: "Процесс заказа",
    hwTitle1: "Заказ принят —", hwTitleGold: "за 30 секунд", hwTitle2: "попадает на кухню",
    hwDesc1: "Официант выбирает заказ клиента на планшете или смартфоне. Одним нажатием заказ автоматически поступает на экран кухни. Никаких голосовых команд, бумаги или ошибок.",
    hwDesc2: "Когда блюдо готово, кухонный экран уведомляет официанта. Скорость обслуживания увеличивается в 2–3 раза, а оплата рассчитывается автоматически.",
    hwM1: "30с — заказ", hwM2: "0 ошибок", hwM3: "Рейтинг 4.9",
    hwBtn: "СМОТРЕТЬ ДЕМО",

    flHeader: "Процесс заказа",
    flS1: "Заказ принят", flT1: "14:32 — Стол №5",
    flS2: "Готовится на кухне", flT2: "Примерно: 15–20 минут",
    flS3: "Доставляется клиенту", flT3: "Ожидание...",
    flS4: "Оплата проведена", flT4: "Наличные / Карта / QR",
    flDishes: "Блюда", flWaiter: "Официант", flPending: "Ожидает", flInProgress: "В процессе", flDone: "✓",

    moTag: "Возможности системы", moTitle: "ERP", moTitleGold: "Модули",
    moDesc: "Каждый модуль работает независимо и синхронизируется с другими в реальном времени",
    moMoreBtn: "СМОТРЕТЬ ВСЕ МОДУЛИ", moView: "Смотреть",
    modules: [
      { name: "Управление заказами", desc: "Принимайте, редактируйте, отменяйте заказы и отслеживайте их статус", tag: "Основной" },
      { name: "Управление столами", desc: "Карта зала, статус столов, бронирование и координация рассадки", tag: "Зал" },
      { name: "Экран кухни (KDS)", desc: "Заказы, время приготовления и приоритеты отображаются на кухонном экране", tag: "Кухня" },
      { name: "Контроль склада", desc: "Приход/расход продуктов, остатки, автоматические сигналы о нехватке", tag: "Склад" },
      { name: "Касса и оплата", desc: "Наличные, карта, QR-оплата, скидки, бонусная система и печать чеков", tag: "Финансы" },
      { name: "Финансовые отчёты", desc: "Ежедневные, еженедельные, ежемесячные отчёты по выручке, расходам и прибыли", tag: "Аналитика" },
      { name: "Управление персоналом", desc: "График смен, учёт рабочего времени, показатели официантов и расчёт зарплаты", tag: "HR" },
      { name: "Управление меню", desc: "Легко обновляйте блюда, цены, категории, фото и описания в любое время", tag: "Каталог" },
      { name: "База клиентов (CRM)", desc: "Постоянные клиенты, история заказов, бонусные баллы и спецпредложения", tag: "CRM" },
    ],

    erTag: "Вид системы", erTitle: "ERP", erTitleGold: "Панель", erTitleEnd: "управления",
    erDesc: "Все данные на одном экране — в реальном времени, точно и понятно",
    erCap1: "Панель управления заказами", erCap2: "Панель выручки и аналитики",

    abTag: "Что изменится?", abTitle: "После внедрения", abTitleGold: "ERP",
    abDesc: "После внедрения ресторанной ERP многие заведения увидели следующие результаты в течение 3 месяцев:",
    aboutBenefits: [
      { title: "Ошибки в заказах снизились на 90%.", desc: " Ручные записи и ошибки при передаче заказов полностью устранены" },
      { title: "Скорость обслуживания выросла в 2.5 раза.", desc: " Официанты принимают заказы быстрее и обслуживают больше столов" },
      { title: "Потери на складе сократились на 60%.", desc: " Контроль остатков и движения продуктов полностью автоматизирован" },
      { title: "Ежемесячная выручка выросла на 30–40%.", desc: " Быстрое обслуживание и точная оплата повысили удовлетворённость клиентов" },
      { title: "Отчёт готов за 5 минут.", desc: " Больше не нужно считать вручную — один клик и отчёт готов" },
    ],
    abBenHeader: "После внедрения системы",
    abBenErr: "Ошибки в заказах", abBenSpeed: "Скорость сервиса", abBenRev: "Ежемесячная выручка",
    abBefore: "До", abAfter: "После", abMonth: "месяца до результата",

    st1: "ERP Модулей", st2: "Время заказа", st3: "Работоспособность", st4: "Поддержка",

    coTag: "Связаться", coTitle: "Получить", coTitleGold: "Бесплатное", coTitleEnd: "Демо",
    coSub: "Попробуйте систему без оплаты. Наш специалист проведёт демо, настроенное под ваш ресторан.",
    coPhone: "Телефон", coTelegram: "Телеграм",
    coDemo: "Срок демо", coDemoVal: "14 дней — бесплатно",
    coAddr: "Адрес", coAddrVal: "Ташкент, Узбекистан",

    foTitle: "Заявка на демо",
    foName: "Ваше имя *", foPhone: "Телефон *",
    foNamePh: "Полное имя", foPhonePh: "+998 _ _ _ _ _ _ _ _ _",
    foRestaurant: "Название ресторана", foRestPh: "Название вашего ресторана",
    foSubject: "Тема интереса",
    foSubjects: ["Получить бесплатное демо", "Управление заказами", "Управление столами", "Экран кухни (KDS)", "Контроль склада", "Обзор всех модулей"],
    foMessage: "Дополнительная информация", foMsgPh: "Расскажите о вашем ресторане, количестве столов, текущих проблемах...",
    foSubmit: "ОСТАВИТЬ ЗАЯВКУ", foSending: "Отправка...",
    foSuccess: "Ваша заявка принята! Мы свяжемся с вами в течение 24 часов.",
    foError: "Произошла ошибка. Напишите нам в Telegram: @ilhomuzb0001",

    ftDesc: "Профессиональное ERP-решение для модернизации управления рестораном. От заказа до отчёта — всё в одной системе.",
    ftModCol: "Модули", ftFeatCol: "Возможности", ftContactCol: "Контакты",
    ftLinks1: ["Управление заказами", "Управление столами", "Экран кухни", "Контроль склада", "Касса и оплата", "Персонал HR"],
    ftLinks2: ["Мониторинг в реал-времени", "Финансовые отчёты", "Управление меню", "CRM система", "Статистика и аналитика"],
    ftHours: "09:00 – 22:00",
    ftCopy: "© 2026 Ресторанная ERP Система. Все права защищены.",
    ftPrivacy: "Политика конфиденциальности", ftTerms: "Условия использования",
  },
};
