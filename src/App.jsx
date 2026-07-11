import { useState } from 'react'
// useTranslation: أداة الترجمة — t للنصوص وi18n للتحكم باللغة
import { useTranslation } from 'react-i18next'
import EmergencyCard from './components/EmergencyCard'
import emergencyNumbers from './data/emergencyNumbers.json'
import Header from './components/Header'

function App() {
  const [showAll, setShowAll] = useState(false)
  // نطلب أدوات الترجمة
  const { t, i18n } = useTranslation()

  // هل اللغة الحالية عربي؟ نحتاجها بأكثر من مكان
  const isArabic = i18n.language === 'ar'

  // تبديل اللغة مع انتقال ناعم: تلاشي ← تبديل خلف الستارة ← ظهور
  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar'

    // 1) نخفي الصفحة بنعومة (كلاس CSS يفعّل الشفافية)
    document.body.classList.add('lang-switching')

    // 2) بعد اكتمال التلاشي (250ms): نبدل اللغة والاتجاه والصفحة مخفية
    setTimeout(() => {
      i18n.changeLanguage(newLang)
      // يحفظ الاختيار بالمتصفح عشان يتذكره بالزيارة الجاية
      localStorage.setItem('najdah-language', newLang)
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = newLang

      // 3) نرجع الصفحة تظهر بنعومة
      document.body.classList.remove('lang-switching')
    }, 250)
  }

  const primaryServices = emergencyNumbers.filter(
    (service) => service.primary === true
  )
  const secondaryServices = emergencyNumbers.filter(
    (service) => !service.primary
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-100 p-6">

      {/* الهيدر: شعار + عنوان + زر لغة — كلهم بمكوّن واحد */}
      <Header isArabic={isArabic} onToggleLanguage={toggleLanguage} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {primaryServices.map((service) => (
          <EmergencyCard key={service.id} service={service} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="w-full bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl py-4 text-lg font-bold text-gray-700 shadow-sm transition-all hover:shadow-md hover:bg-white"
        >
          {showAll ? t('hideAll') : t('showAll')}
        </button>

        {showAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {secondaryServices.map((service) => (
              <EmergencyCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default App

/*

emergencyNumbers.json  (15 جهة)
        │
        ▼ filter → primary === true
primaryServices  (7 جهات أساسية)
        │
        ▼ map → بطاقة لكل جهة
7 × <EmergencyCard service={...} />
        │
        ▼ props: البطاقة تقرأ service.caseAr / nameAr / number
البطاقات على الشاشة 🃏

*/