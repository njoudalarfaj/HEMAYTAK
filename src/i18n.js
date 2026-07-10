// إعداد نظام الترجمة i18next
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// النصوص بكل لغة — كل نص له "مفتاح" نستدعيه فيه من الكود
const resources = {
  ar: {
    translation: {
      appTitle: 'نجدة',
      subtitle: 'اختر الحالة المناسبة لبدء الاتصال مباشرة',
      callNow: 'اتصل الآن',
      copy: 'نسخ',
      copied: 'تم النسخ ✓',
      showAll: 'عرض جميع الأرقام المهمة ▼',
      hideAll: 'إخفاء الأرقام الإضافية ▲',
    },
  },
  en: {
    translation: {
      appTitle: 'Najdah',
      subtitle: 'Choose your emergency to call directly',
      callNow: 'Call Now',
      copy: 'Copy',
      copied: 'Copied ✓',
      showAll: 'Show all important numbers ▼',
      hideAll: 'Hide additional numbers ▲',
    },
  },
}

i18n
  .use(initReactI18next) // اربط i18next بـ React
  .init({
    resources,           // النصوص اللي فوق
    lng: 'ar',           // اللغة الافتراضية عند فتح الموقع
    fallbackLng: 'ar',   // إذا مفتاح ناقص بلغة، ارجع للعربي
    interpolation: {
      escapeValue: false, // React يحمي من الثغرات بنفسه، ما نحتاج حماية مزدوجة
    },
  })

export default i18n