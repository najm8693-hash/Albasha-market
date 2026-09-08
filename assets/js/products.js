/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  كتالوج المنتجات — هذا هو الملف الوحيد الذي تحتاج تعديله لإضافة منتجاتك.
 *  PRODUCT CATALOGUE — the only file you need to edit to list your products.
 *
 *  لإضافة منتج: افتح صفحته على Payhip، انسخ رابطها، وضعه في الحقل url.
 *  أي منتج بلا رابط يوجّه الزائر إلى صفحة المتجر الرئيسية.
 *
 *  السعر: رقم بالدولار (مثل 9)، أو 0 ليظهر «مجاناً»،
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
    image: '',
    badge: { ar: 'عربي', en: 'Arabic' },
    name: {
      ar: 'الخروج من مستنقع الديون — النسخة العربية',
      en: 'Out of the Debt Swamp — Arabic edition',
    },
    desc: {
      ar: 'النسخة العربية من الكتاب، بتحميل فوري بعد الدفع.',
      en: 'The Arabic edition of the book, downloadable instantly after payment.',
    },
    includes: [],
  },
  {
    id: 'debt-swamp-en',
    category: 'ebooks',
    url: 'https://payhip.com/b/3gp9w',
    price: 5,
    image: '',
    badge: { ar: 'إنجليزي', en: 'English' },
    name: {
      ar: 'الخروج من مستنقع الديون — النسخة الإنجليزية',
      en: 'Out of the Debt Swamp — English edition',
    },
    desc: {
      ar: 'النسخة الإنجليزية من الكتاب، بتحميل فوري بعد الدفع.',
      en: 'The English edition of the book, downloadable instantly after payment.',
    },
    includes: [],
  },
];
