import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// أيقونات Lucide المستخدمة بالبطاقات
import {
  Ambulance, Flame, Shield, CarFront, Route, Waves, PhoneCall,
  HeartHandshake, Baby, Stethoscope, Car, Zap, Droplets,
  Building2, ShieldAlert, Phone,
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
}

// خريطة الألوان: اسم اللون بالـ JSON ← كلاسات Tailwind (مكتوبة كاملة عشان Tailwind يشوفها)
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
  const caseText = isArabic ? service.caseAr : service.caseEn
  const nameText = isArabic ? service.nameAr : service.nameEn
  const Icon = iconMap[service.icon] || Phone
  const colorClasses = colorMap[service.color] || colorMap['gray']

  const handleCopy = () => {
    navigator.clipboard.writeText(service.number)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-lg shadow-gray-200/50 p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* صف العنوان: أيقونة + اسم الجهة (العنوان الرئيسي) */}
      <div className="flex items-center gap-3">
        <div className={`${colorClasses} rounded-2xl p-3 shrink-0`}>
          <Icon size={28} />
        </div>
        <h2 className="text-lg font-bold text-gray-900 leading-snug">{nameText}</h2>
      </div>

      {/* وصف الحالة بخط أصغر + الرقم الضخم */}
      <div className="flex items-end justify-between gap-3">
        <p className="text-sm text-gray-600 leading-relaxed">{caseText}</p>
        <span className="text-4xl font-black text-gray-900 tracking-tight shrink-0" dir="ltr">
          {service.number}
        </span>
      </div>

      {/* الأزرار */}
      <div className="flex gap-2">
        <a
          href={`tel:${service.number}`}
          aria-label={`${t('callNow')} ${nameText} ${service.number}`}
          className="flex-1 bg-red-600 text-white text-center text-lg font-bold rounded-2xl py-3.5 transition-colors hover:bg-red-700 active:bg-red-800"
        >
          {t('callNow')}
        </a>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`${t('copy')} ${nameText} ${service.number}`}
          className={
            copied
              ? 'bg-green-100 text-green-700 rounded-2xl px-5 font-bold transition-colors'
              : 'bg-gray-100 text-gray-600 rounded-2xl px-5 font-bold transition-colors hover:bg-gray-200'
          }
        >
          {copied ? t('copied') : t('copy')}
        </button>
      </div>
    </div>
  )
}

export default EmergencyCard