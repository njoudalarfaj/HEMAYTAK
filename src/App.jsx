// 🆕 نستورد useState من React — أداة "الذاكرة" للمكوّن
import { useState } from 'react'
import EmergencyCard from './components/EmergencyCard'
import emergencyNumbers from './data/emergencyNumbers.json'

function App() {
  // 🆕 حالة القسم الإضافي: showAll القيمة (تبدأ false = مسكّر)، setShowAll طريقة تغييرها
  const [showAll, setShowAll] = useState(false)

  // الأساسية: primary = true (السبعة)
  const primaryServices = emergencyNumbers.filter(
    (service) => service.primary === true
  )

  // 🆕 الإضافية: primary = false (الثمانية) — لاحظي ! قبل service.primary تعني "مو"
  const secondaryServices = emergencyNumbers.filter(
    (service) => !service.primary
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-8">نجدة</h1>

      {/* شبكة البطاقات الأساسية — مثل ما هي */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {primaryServices.map((service) => (
          <EmergencyCard key={service.id} service={service} />
        ))}
      </div>

      {/* 🆕 زر فتح/إغلاق القسم الإضافي */}
      <div className="max-w-4xl mx-auto mt-8">
        <button
          type="button"
          // عند الضغط: اقلب القيمة (كانت false تصير true والعكس) — ! تعني "عكس"
          onClick={() => setShowAll(!showAll)}
          className="w-full bg-white border border-gray-300 rounded-xl py-3 text-lg font-bold text-gray-700 hover:bg-gray-50"
        >
          {/* النص يتغير حسب الحالة: شرط ? قيمة-لو-صح : قيمة-لو-خطأ */}
          {showAll ? 'إخفاء الأرقام الإضافية ▲' : 'عرض جميع الأرقام المهمة ▼'}
        </button>

        {/* 🆕 العرض الشرطي: القسم يظهر فقط إذا showAll = true
            الصيغة: {شرط && (عناصر)} — إذا الشرط صح اعرض، إذا خطأ لا تعرض شيء */}
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