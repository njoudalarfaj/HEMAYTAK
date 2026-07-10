import { useState } from 'react'
// 🆕 نحتاج الترجمة هنا بعد: لنصوص الأزرار ولاختيار حقول البيانات
import { useTranslation } from 'react-i18next'

// 🆕 نستورد الأيقونات اللي نحتاجها من Lucide
import {
  Ambulance, Flame, Shield, CarFront, Route, Waves, PhoneCall,
  HeartHandshake, Baby, Stethoscope, Car, Zap, Droplets,
  Building2, ShieldAlert, Phone,
} from 'lucide-react'

// 🆕 خريطة: اسم الأيقونة بالـ JSON ← المكوّن الفعلي
// المفاتيح بين تنصيص لأن فيها شرطات (car-front مثلًا)
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


function EmergencyCard({ service }) {
  const [copied, setCopied] = useState(false)
  const { t, i18n } = useTranslation()

  // 🆕 حسب اللغة: نقرأ الحقل العربي أو الإنجليزي من نفس البيانات
  const isArabic = i18n.language === 'ar'
  const caseText = isArabic ? service.caseAr : service.caseEn
  const nameText = isArabic ? service.nameAr : service.nameEn
  const Icon = iconMap[service.icon] || Phone

  const handleCopy = () => {
    navigator.clipboard.writeText(service.number)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3">
     {/* 🆕 صف العنوان: أيقونة بدائرة حمراء فاتحة + نص الحالة */}

      <div className="flex items-center gap-3">
        <div className="bg-red-100 text-red-600 rounded-full p-3">
          <Icon size={28} />
        </div>
        <h2 className="text-xl font-bold text-gray-900">{caseText}</h2>
      </div>

      <p className="text-gray-600">
        {nameText} — {service.number}
      </p>

      <div className="flex gap-2">
        <a
          href={`tel:${service.number}`}
          className="flex-1 bg-red-600 text-white text-center text-lg font-bold rounded-xl py-3 hover:bg-red-700"
        >
          {/* 🆕 نص الزر من الترجمة */}
          {t('callNow')} — {service.number}
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className={
            copied
              ? 'bg-green-100 text-green-700 rounded-xl px-4 font-bold'
              : 'bg-gray-100 text-gray-700 rounded-xl px-4 font-bold hover:bg-gray-200'
          }
        >
          {copied ? t('copied') : t('copy')}
        </button>
      </div>
    </div>
  )
}

export default EmergencyCard