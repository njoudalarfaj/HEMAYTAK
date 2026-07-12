// قائمة اللغات المدعومة — المصدر الوحيد للغات بالمشروع كله
// code: رمز اللغة | name: اسمها بحروفها الأصلية | dir: اتجاه الكتابة

export const LANGUAGES = [
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'en', name: 'English', dir: 'ltr' },
  // 🔜 لغات المرحلة الثانية — تتفعل بعد مراجعة الترجمات من ناطقين أصليين:
  // { code: 'ur', name: 'اردو', dir: 'rtl' },
  // { code: 'bn', name: 'বাংলা', dir: 'ltr' },
  // { code: 'fil', name: 'Filipino', dir: 'ltr' },
  // { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },
  // { code: 'fr', name: 'Français', dir: 'ltr' },
  // { code: 'es', name: 'Español', dir: 'ltr' },
  // { code: 'zh', name: '简体中文', dir: 'ltr' },
  // { code: 'tr', name: 'Türkçe', dir: 'ltr' },
]

// دالة مساعدة: تعطيك اتجاه أي لغة من رمزها
export function getDirection(langCode) {
  const lang = LANGUAGES.find((l) => l.code === langCode)
  return lang ? lang.dir : 'ltr'
}