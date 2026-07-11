// مكوّن الهيدر: الشعار + السطر التوجيهي + زر اللغة
import { useTranslation } from 'react-i18next'
// 🆕 شعاراتنا الخاصة من تصميمنا (بدل أيقونة Siren الجاهزة)
import logoIcon from '../assets/logo_icon.png'
import logoName from '../assets/logo_name.png'
// يستقبل دالة تبديل اللغة وحالة اللغة من App (لأن الزر عندنا هنا الحين)
function Header({ isArabic, onToggleLanguage }) {
  const { t } = useTranslation()

  return (
    <header className="max-w-4xl mx-auto mb-8">
      {/* الصف العلوي: الشعار يمين وزر اللغة يسار (ينعكسون تلقائيًا مع الاتجاه) */}
      <div className="flex items-center justify-between mb-6">

        {/* 🆕 الشعار: أيقونتنا + الاسم الكتابي من تصميمنا الخاص */}
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="" className="h-14 w-14 object-contain" />
          <img
            src={logoName}
            alt={isArabic ? 'نجدة' : 'Najdah'}
            className="h-12 object-contain"
          />
        </div>

        {/* زر اللغة — مثل ما هو */}
        <button
          type="button"
          onClick={onToggleLanguage}
          className="bg-white border border-gray-300 rounded-xl px-4 py-2 font-bold text-gray-700 hover:bg-gray-50"
        >
          {isArabic ? 'English' : 'العربية'}
        </button>
      </div>

      {/* السطر التوجيهي بالوسط */}
      <p className="text-center text-gray-600 text-lg">{t('subtitle')}</p>
    </header>
  )
}

export default Header