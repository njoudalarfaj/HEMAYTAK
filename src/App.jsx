import { useState } from 'react'
// 🆕 useTranslation: أداة الترجمة — t للنصوص وi18n للتحكم باللغة
import { useTranslation } from 'react-i18next'
import EmergencyCard from './components/EmergencyCard'
import emergencyNumbers from './data/emergencyNumbers.json'

function App() {
  const [showAll, setShowAll] = useState(false)
  // 🆕 نطلب أدوات الترجمة
  const { t, i18n } = useTranslation()

  // 🆕 هل اللغة الحالية عربي؟ نحتاجها بأكثر من مكان
  const isArabic = i18n.language === 'ar'

  // 🆕 دالة تبديل اللغة: إذا عربي روح إنجليزي والعكس + اقلب اتجاه الصفحة
  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
    // نعدل اتجاه الصفحة ولغتها في وسم html (اللي عدلناه يدويًا أول يوم، تذكرين؟)
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLang
  }

  const primaryServices = emergencyNumbers.filter(
    (service) => service.primary === true
  )
  const secondaryServices = emergencyNumbers.filter(
    (service) => !service.primary
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* 🆕 زر تبديل اللغة — يعرض اسم اللغة "الثانية" اللي بينقل لها */}
      <div className="max-w-4xl mx-auto flex justify-end mb-4">
        <button
          type="button"
          onClick={toggleLanguage}
          className="bg-white border border-gray-300 rounded-xl px-4 py-2 font-bold text-gray-700 hover:bg-gray-50"
        >
          {isArabic ? 'English' : 'العربية'}
        </button>
      </div>

      {/* 🆕 العنوان صار من الترجمة بدل نص ثابت */}
      <h1 className="text-4xl font-bold text-red-600 text-center mb-2">
        {t('appTitle')}
      </h1>
      {/* 🆕 سطر توجيهي تحت العنوان — من خطتك الأصلية */}
      <p className="text-center text-gray-600 mb-8">{t('subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {primaryServices.map((service) => (
          <EmergencyCard key={service.id} service={service} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="w-full bg-white border border-gray-300 rounded-xl py-3 text-lg font-bold text-gray-700 hover:bg-gray-50"
        >
          {/* 🆕 النصوص من الترجمة */}
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
    </div>
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