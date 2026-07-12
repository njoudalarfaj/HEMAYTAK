// مكوّن اختيار اللغة: زر يعرض اللغة الحالية + قائمة منسدلة بكل اللغات
import { useState } from 'react'
import { Globe, Check } from 'lucide-react'
import { LANGUAGES } from '../languages'

// يستقبل: اللغة الحالية + دالة التبديل (العقل يظل في App)
function LanguageSwitcher({ currentLang, onSelectLanguage }) {
  // حالة القائمة: مفتوحة أو مسكرة
  const [open, setOpen] = useState(false)

  // اسم اللغة الحالية لعرضه على الزر
  const current = LANGUAGES.find((l) => l.code === currentLang)

  // عند اختيار لغة: بدل اللغة وسكر القائمة
  const handleSelect = (code) => {
    onSelectLanguage(code)
    setOpen(false)
  }

  return (
    // relative: عشان القائمة المنسدلة تتموضع نسبة لهذا الصندوق
    <div className="relative">
      {/* الزر الرئيسي: أيقونة كوكب + اسم اللغة الحالية */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl px-4 py-2.5 font-bold text-gray-700 shadow-sm transition-all hover:shadow-md hover:bg-white"
      >
        <Globe size={18} />
        {current ? current.name : 'Language'}
      </button>

      {/* القائمة المنسدلة — تظهر فقط إذا open */}
      {open && (
        <>
          {/* طبقة شفافة خلف القائمة: الضغط بأي مكان خارجها يسكرها */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />

          {/* القائمة نفسها */}
          <div className="absolute top-full mt-2 start-0 z-20 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 min-w-48 max-h-80 overflow-y-auto">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                // dir لكل سطر حسب لغته: العربي والأوردو يمين والباقي يسار
                dir={lang.dir}
                className={
                  lang.code === currentLang
                    ? 'w-full flex items-center justify-between px-4 py-2.5 text-red-600 font-bold bg-red-50'
                    : 'w-full flex items-center justify-between px-4 py-2.5 text-gray-700 font-medium hover:bg-gray-50'
                }
              >
                {lang.name}
                {/* علامة صح جنب اللغة المختارة حاليًا */}
                {lang.code === currentLang && <Check size={16} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher