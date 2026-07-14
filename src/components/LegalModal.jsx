// نافذة النصوص القانونية: تعرض الشروط أو السياسة فوق الصفحة
import { X } from 'lucide-react'

// يميز العناوين: سطر قصير لا ينتهي بعلامة ترقيم = عنوان فرعي
function isHeading(line) {
  const clean = line.trim()
  return clean.length > 0 && clean.length < 40 && !/[.،:!؟?]$/.test(clean)
}

function LegalModal({ title, content, onClose }) {
  // نقسم النص لكتل عند الأسطر المزدوجة (بين الأقسام)
  const blocks = content.split('\n\n')

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

        {/* الجسم: كل كتلة نفكها — سطرها الأول إذا كان عنوانًا نميزه، والباقي فقرة */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5 text-start">
          {blocks.map((block, index) => {
            const lines = block.split('\n')
            const firstLine = lines[0]
            const rest = lines.slice(1).join('\n')

            // الكتلة تبدأ بعنوان (سطر قصير بدون ترقيم)؟
            if (isHeading(firstLine)) {
              return (
                <div key={index}>
                  {/* العنوان الفرعي: غامق وأكبر بسطر مستقل */}
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {firstLine}
                  </h3>
                  {/* فقرته تحته (إن وجدت) */}
                  {rest && (
                    <p className="text-[15px] text-gray-600 leading-loose">
                      {rest}
                    </p>
                  )}
                </div>
              )
            }

            // كتلة عادية بدون عنوان
            return (
              <p key={index} className="text-[15px] text-gray-600 leading-loose">
                {block}
              </p>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LegalModal