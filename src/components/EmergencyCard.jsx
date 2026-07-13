import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// أيقونات Lucide — Phone للاتصال وCopy وCheck للنسخ
import {
  Ambulance, Flame, Shield, CarFront, Route, Waves, PhoneCall,
  HeartHandshake, Baby, Stethoscope, Car, Zap, Droplets,
  Building2, ShieldAlert, Phone, Copy, Check, ShoppingBag,
} from 'lucide-react'

// خريطة: اسم الأيقونة بالـ JSON ← المكوّن الفعلي
const iconMap = {
  'ambulance': Ambulance,
  'flame': Flame,
  'shield': Shield,
  'car-front': CarFront,
  'route': Route,
  'waves': Waves,
  'phone-call': PhoneCall,
  'heart-handshake': HeartHandshake,
  'baby': Baby,
  'stethoscope': Stethoscope,
  'car': Car,
  'zap': Zap,
  'droplets': Droplets,
  'building-2': Building2,
  'shield-alert': ShieldAlert,
  'shopping-bag': ShoppingBag,
}

// خريطة الألوان: اسم اللون بالـ JSON ← كلاسات Tailwind
const colorMap = {
  'red': 'bg-red-100 text-red-600',
  'orange': 'bg-orange-100 text-orange-600',
  'blue': 'bg-blue-100 text-blue-600',
  'yellow': 'bg-yellow-100 text-yellow-700',
  'cyan': 'bg-cyan-100 text-cyan-700',
  'purple': 'bg-purple-100 text-purple-600',
  'green': 'bg-green-100 text-green-600',
  'gray': 'bg-gray-100 text-gray-600',
}

function EmergencyCard({ service }) {
  const [copied, setCopied] = useState(false)
  const { t, i18n } = useTranslation()

  // حسب اللغة: نقرأ الحقول العربية أو الإنجليزية
  const isArabic = i18n.language === 'ar'
// نقرأ النص بلغة الواجهة الحالية — وإن ما وجدت الترجمة نرجع للعربي ثم للبنية القديمة
// رمز اللغة الأساسي: en-US تصير en
  const lang = i18n.language?.split('-')[0]
  const caseText = service.case?.[lang] || (isArabic ? service.caseAr : service.caseEn)
  const nameText = service.name?.[lang] || (isArabic ? service.nameAr : service.nameEn)
  const Icon = iconMap[service.icon] || Phone
  const colorClasses = colorMap[service.color] || colorMap['gray']

  const handleCopy = () => {
    navigator.clipboard.writeText(service.number)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    // البطاقة: إطار رمادي خفيف + ظل ضيق + توهج أحمر خارجي عند hover
    <div className="bg-white/80 backdrop-blur-xl border border-gray-200/80 rounded-2xl shadow-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-red-300 hover:shadow-xl hover:shadow-red-100">

     {/* صف العنوان: أيقونة + عمود فيه (اسم الجهة فوق ووصف الحالة تحته مباشرة) */}
      <div className="flex items-start gap-3">
        <div className={`${colorClasses} rounded-xl p-3 shrink-0`}>
          <Icon size={26} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900 leading-snug">{nameText}</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed mt-0.5">{caseText}</p>
        </div>
      </div>

      

      {/* صف الشارة: الرقم بغلاف رمادي هادي + أيقونة النسخ */}
      <div className="flex items-center gap-1.5">
        <div className="bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 flex items-baseline gap-2">
          <span className="text-xs font-semibold text-gray-500">
            {service.primary ? t('emergencyNumber') : t('serviceNumber')}
          </span>
          <span className="text-2xl font-black text-gray-900 tracking-tight" dir="ltr">
            {service.number}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`${t('copy')} ${nameText} ${service.number}`}
          title={copied ? t('copied') : t('copy')}
          className={
            copied
              ? 'text-green-600 p-1.5 rounded-lg transition-colors'
              : 'text-gray-400 p-1.5 rounded-lg transition-colors hover:text-gray-600 hover:bg-gray-100'
          }
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>

      {/* خط فاصل خفيف قبل منطقة الزر */}
      <hr className="border-gray-100" />

      {/* زر الاتصال: أيقونة هاتف + يصغر عند الضغط */}
      <a
        href={`tel:${service.number}`}
        aria-label={`${t('callNow')} ${nameText} ${service.number}`}
        className="flex items-center justify-center gap-2 bg-red-600 text-white text-base font-bold rounded-xl py-2.5 shadow-sm shadow-red-200 transition-all hover:bg-red-700 active:scale-[0.98]"
      >
        <Phone size={18} />
        {t('callNow')}
      </a>
    </div>
  )
}

export default EmergencyCard