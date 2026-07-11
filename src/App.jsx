import { useState } from 'react'
// 🆕 useTranslation: أداة الترجمة — t للنصوص وi18n للتحكم باللغة
import { useTranslation } from 'react-i18next'
import EmergencyCard from './components/EmergencyCard'
import emergencyNumbers from './data/emergencyNumbers.json'
import Header from './components/Header'

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
    //🆕 يحفظ الاختيار بالمتصفح عشان يتذكره بالزيارة الجاية
    localStorage.setItem('najdah-language', newLang)
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
    <main className="min-h-screen bg-gradient-to-b from-red-50 via-gray-50 to-white p-6">

      {/* الهيدر الجديد: شعار + عنوان + زر لغة — كلهم بمكوّن واحد */}
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
          className="w-full bg-white border border-gray-300 rounded-xl py-3 text-lg font-bold text-gray-700 hover:bg-gray-50"
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