// مكوّن الهيدر: الشعار + السطر التوجيهي + زر اللغة
import { useTranslation } from 'react-i18next'
// 🆕 شعاراتنا الخاصة من تصميمنا (بدل أيقونة Siren الجاهزة)
import logoIcon from '../assets/logo_icon.png'
import logoName from '../assets/logo_name.png'
// يستقبل دالة تبديل اللغة وحالة اللغة من App (لأن الزر عندنا هنا الحين)
function Header({ isArabic, onToggleLanguage }) {
  const { t } = useTranslation()

    return (
    <header className="max-w-4xl mx-auto mb-10">
     {/* الصف العلوي: الأيقونة وزر اللغة متجاورين في طرف واحد */}
      <div className="flex items-center justify-end gap-3 mb-2">
        <button
          type="button"
          onClick={onToggleLanguage}
          className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl px-5 py-2.5 font-bold text-gray-700 shadow-sm transition-all hover:shadow-md hover:bg-white"
        >
          {isArabic ? 'English' : 'العربية'}
        </button>
        <img src={logoIcon} alt="" className="h-12 w-12 object-contain" />
      </div>

      {/* الشعار الكتابي: كبير بمنتصف الصفحة — بطل المقدمة */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={logoName}
          alt={isArabic ? 'نجدة' : 'Najdah'}
          className="h-36 md:h-44 object-contain"
        />

        {/* السطر التوجيهي تحته مباشرة */}
       <p className="text-center text-slate-800 text-lg font-semibold">
          {t('subtitle')}
        </p>
      </div>
    </header>
  )
  
}

export default Header