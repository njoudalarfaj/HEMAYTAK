// 🆕 نحتاج useState لحالة "تم النسخ"
import { useState } from 'react'

function EmergencyCard({ service }) {
  // 🆕 حالة النسخ: false = الزر طبيعي، true = يعرض "تم النسخ" مؤقتًا
  const [copied, setCopied] = useState(false)

  // 🆕 دالة النسخ — كتبناها منفصلة لأن فيها أكثر من خطوة
  const handleCopy = () => {
    // أمر المتصفح: انسخ النص للحافظة
    navigator.clipboard.writeText(service.number)
    // فعّلي حالة "تم النسخ" → الزر يتغير
    setCopied(true)
    // بعد ثانيتين (2000 ملي ثانية): رجعي الحالة طبيعية
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3">
      <h2 className="text-xl font-bold text-gray-900">{service.caseAr}</h2>

      <p className="text-gray-600">
        {service.nameAr} — {service.number}
      </p>

      {/* 🆕 صف الزرين: flex يخليهم جنب بعض | gap-2 مسافة بينهم */}
      <div className="flex gap-2">
        {/* زر الاتصال — ياخذ المساحة الأكبر (flex-1 = تمدد واملأ المتاح) */}
        <a
          href={`tel:${service.number}`}
          className="flex-1 bg-red-600 text-white text-center text-lg font-bold rounded-xl py-3 hover:bg-red-700"
        >
          اتصل الآن — {service.number}
        </a>

        {/* 🆕 زر النسخ — يتغير شكله ونصه حسب حالة copied */}
        <button
          type="button"
          onClick={handleCopy}
          className={
            copied
              ? 'bg-green-100 text-green-700 rounded-xl px-4 font-bold'
              : 'bg-gray-100 text-gray-700 rounded-xl px-4 font-bold hover:bg-gray-200'
          }
        >
          {copied ? 'تم النسخ ✓' : 'نسخ'}
        </button>
      </div>
    </div>
  )
}

export default EmergencyCard