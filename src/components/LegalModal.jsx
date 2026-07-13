// نافذة النصوص القانونية: تعرض الشروط أو السياسة فوق الصفحة
import { X } from 'lucide-react'

// يميز العناوين الفرعية: سطر واحد قصير لا ينتهي بعلامة ترقيم = عنوان
function isHeading(paragraph) {
  const clean = paragraph.trim()
  return (
    !clean.includes('\n') &&
    clean.length < 40 &&
    !/[.،:!؟?]$/.test(clean)
  )
}

function LegalModal({ title, content, onClose }) {
  // نقسم النص لفقرات عند الأسطر الفارغة
  const paragraphs = content.split('\n\n')

  return (
    <>
      {/* طبقة معتمة خلف النافذة — الضغط عليها يغلق */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* النافذة: بمنتصف الشاشة، تتمرر داخليًا */}
      <div className="fixed inset-x-4 top-[8%] bottom-[8%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] z-50 bg-white rounded-2xl shadow-2xl flex flex-col">
        {/* رأس النافذة */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* الجسم: فقرات مفككة — عناوين مميزة ونصوص مرتاحة */}
        <div className="p-6 overflow-y-auto flex flex-col gap-4">
          {paragraphs.map((paragraph, index) =>
            isHeading(paragraph) ? (
              // عنوان فرعي: أغمق وأثقل مع مسافة قبله
              <h3
                key={index}
                className="text-[15px] font-bold text-gray-900 mt-2 first:mt-0"
              >
                {paragraph}
              </h3>
            ) : (
              // فقرة عادية: تباعد أسطر مريح
              <p
                key={index}
                className="text-[15px] text-gray-600 leading-loose"
              >
                {paragraph}
              </p>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default LegalModal