/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  كتالوج المنتجات — هذا هو الملف الوحيد الذي تحتاج تعديله لإضافة منتجاتك.
 *  PRODUCT CATALOGUE — the only file you need to edit to list your products.
 *
 *  لإضافة منتج: افتح صفحته على Payhip، انسخ رابطها، وضعه في الحقل url.
 *  أي منتج بلا رابط يوجّه الزائر إلى صفحة المتجر الرئيسية.
 *
 *  السعر: رقم بالدولار (مثل 5)، أو 0 ليظهر «مجاناً»،
 *  أو null فلا يُعرض سعر إطلاقاً ويراه الزائر على Payhip.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** الفئات — id يجب أن يطابق حقل category في المنتجات. */
window.CATEGORIES = [
  { id: 'ebooks', icon: 'book', ar: 'كتب إلكترونية', en: 'Ebooks' },
];

window.PRODUCTS = [
  {
    id: 'debt-swamp-ar',
    category: 'ebooks',
    url: 'https://payhip.com/b/N8Xdy',
    price: 5,
    image: 'assets/img/book-ar.jpg',
    badge: null,
    name: {
      ar: 'الخروج من مستنقع الديون — النسخة العربية',
      en: 'Escaping the Quagmire of Debt — Arabic edition',
    },
    desc: {
      ar: 'خطة عملية للتحرر المالي والاستقرار: كتاب يقدّم خطة واضحة ومجرّبة للخروج من الديون وبناء مستقبل مالي مستقر. تأليف د. أحمد خالد المنصوري — دار النور.',
      en: 'A practical plan for financial freedom and stability — a clear, tested path out of debt toward a stable financial future. By Dr. Ahmed Khalid Al-Mansoori, Al-Noor Publishing. Arabic text.',
    },
    includes: [
      { ar: 'خطوات عملية قابلة للتطبيق', en: 'Practical, applicable steps' },
      { ar: 'استراتيجيات سداد ذكية', en: 'Smart repayment strategies' },
      { ar: 'تغيير ذهنيتك نحو الحرية المالية', en: 'A mindset shift toward financial freedom' },
      { ar: 'تحكّم في أموالك وثقة في قرارك', en: 'Control of your money and confidence in your decisions' },
    ],
  },
  {
    id: 'debt-swamp-en',
    category: 'ebooks',
    url: 'https://payhip.com/b/3gp9w',
    price: 5,
    image: 'assets/img/book-en.jpg',
    badge: null,
    name: {
      ar: 'الخروج من مستنقع الديون — النسخة الإنجليزية',
      en: 'Escaping the Quagmire of Debt — English edition',
    },
    desc: {
      ar: 'النسخة الإنجليزية من الكتاب: خطة عملية للتحرر المالي والاستقرار، بخطوات واضحة للسيطرة على أموالك وبناء مستقبل مستقر. تأليف د. أحمد خالد المنصوري — دار النور.',
      en: 'Take control, build freedom: a practical plan for financial freedom and stability, with clear steps to master your money and secure your future. By Dr. Ahmed Khalid Al-Mansoori, Al-Noor Publishing.',
    },
    includes: [
      { ar: 'خطة عملية واضحة خطوة بخطوة', en: 'A clear, practical step-by-step plan' },
      { ar: 'بناء الثروة والاستقرار المالي', en: 'Build wealth and financial stability' },
      { ar: 'مبادئ مجرّبة لإدارة المال وخفض الديون', en: 'Proven principles to manage money and reduce debt' },
      { ar: 'راحة بال دائمة وسيطرة على حياتك', en: 'Lasting peace of mind and control of your life' },
    ],
  },
];
