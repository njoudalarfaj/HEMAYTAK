// الفوتر: إخلاء المسؤولية + الروابط القانونية + التواصل + تاريخ المراجعة
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LegalModal from './LegalModal'

function Footer() {
  const { t } = useTranslation()
  // أي نافذة مفتوحة؟ null = ولا وحدة | 'terms' | 'privacy'
  const [openModal, setOpenModal] = useState(null)

  return (
    <footer className="max-w-4xl mx-auto mt-12 pb-8 text-center flex flex-col gap-3">
      {/* إخلاء المسؤولية — ثابت وواضح */}
      <p className="text-sm font-semibold text-gray-600">{t('disclaimer')}</p>

      {/* تنبيه مسؤولية الاستخدام */}
      <p className="text-xs text-gray-400">{t('usageNote')}</p>

      {/* الروابط: شروط | سياسة | تواصل */}
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
        <button
          type="button"
          onClick={() => setOpenModal('terms')}
          className="hover:text-red-600 underline-offset-4 hover:underline transition-colors"
        >
          {t('termsLink')}
        </button>
        <span className="text-gray-300">|</span>
        <button
          type="button"
          onClick={() => setOpenModal('privacy')}
          className="hover:text-red-600 underline-offset-4 hover:underline transition-colors"
        >
          {t('privacyLink')}
        </button>
        <span className="text-gray-300">|</span>
        <a
          href="mailto:hemaytak@gmail.com"
          className="hover:text-red-600 underline-offset-4 hover:underline transition-colors"
        >
          {t('contactLink')}
        </a>
      </div>

      {/* تاريخ المراجعة — مثل ما كان */}
      <div>
        <p className="text-sm font-medium text-gray-500">{t('lastReviewed')}</p>
        <p className="text-xs text-gray-400 mt-1">{t('sourceNote')}</p>
      </div>

    
      {/* حقوق الملكية */}
      <div className="pt-3 border-t border-gray-100">
        <p className="text-xs font-medium text-gray-400">{t('copyright')}</p>
      </div>


      {/* النوافذ — تظهر حسب الحالة */}
      {openModal === 'terms' && (
        <LegalModal
          title={t('termsLink')}
          content={t('termsText')}
          onClose={() => setOpenModal(null)}
        />
      )}
      {openModal === 'privacy' && (
        <LegalModal
          title={t('privacyLink')}
          content={t('privacyText')}
          onClose={() => setOpenModal(null)}
        />
      )}
    </footer>
  )
}

export default Footer