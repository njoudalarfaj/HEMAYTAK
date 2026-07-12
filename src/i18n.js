// إعداد نظام الترجمة i18next
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// النصوص بكل لغة — كل نص له "مفتاح" نستدعيه فيه من الكود
const resources = {
  ar: {
    translation: {
      appTitle: 'حمايتك',
      subtitle: 'اختر الحالة الطارئة للاتصال مباشرة',
      callNow: 'اتصل الآن',
      copy: 'نسخ',
      copied: 'تم النسخ ✓',
      showAll: 'عرض جميع الأرقام المهمة ▼',
      hideAll: 'إخفاء الأرقام الإضافية ▲',
      emergencyNumber: 'رقم الطوارئ',
      lastReviewed: 'آخر مراجعة للأرقام: يوليو 2026',
      sourceNote: 'تم التحقق من الأرقام عبر المصادر الرسمية في المملكة العربية السعودية',
      serviceNumber: 'رقم الخدمة',
    },
  },
  en: {
    translation: {
      appTitle: 'Hemaytak',
      subtitle: 'Choose your emergency to call directly',
      callNow: 'Call Now',
      copy: 'Copy',
      copied: 'Copied ✓',
      showAll: 'Show all important numbers ▼',
      hideAll: 'Hide additional numbers ▲',
      emergencyNumber: 'Emergency No.',
      lastReviewed: 'Numbers last reviewed: July 2026',
      sourceNote: 'Verified through official sources in Saudi Arabia',
      serviceNumber: 'Service No.',
    },
  },
}

// 🆕 نقرأ اللغة المحفوظة، وإذا ما في (أول زيارة) نبدأ عربي
const savedLanguage = localStorage.getItem('hemaytak-language') || 'ar'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,   // 🆕 كانت 'ar' ثابتة — صارت من المحفوظ
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  })

  // 🆕 هنا بالضبط — عند بدء التشغيل: اضبط اتجاه الصفحة حسب اللغة المحفوظة
  document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = savedLanguage

export default i18n