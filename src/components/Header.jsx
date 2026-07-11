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
      {/* الصف العلوي: أيقونة الشعار في طرف، وزر اللغة بالطرف الثاني */}
      <div className="flex items-center justify-between mb-2">
        <img src={logoIcon} alt="" className="h-14 w-14 object-contain" />

        <button
          type="button"
          onClick={onToggleLanguage}
          className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl px-5 py-2.5 font-bold text-gray-700 shadow-sm transition-all hover:shadow-md hover:bg-white"
        >
          {isArabic ? 'English' : 'العربية'}
        </button>
      </div>

      {/* الشعار الكتابي: كبير بمنتصف الصفحة — بطل المقدمة */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={logoName}
          alt={isArabic ? 'نجدة' : 'Najdah'}
          className="h-36 md:h-44 object-contain"
        />

        {/* السطر التوجيهي تحته مباشرة */}
       <p className="text-center text-gray-600 text-lg font-semibold tracking-wide">
          {t('subtitle')}
        </p>
      </div>
    </header>
  )
  
}

export default Header