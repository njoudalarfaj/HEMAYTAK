// الفوتر: توثيق مراجعة الأرقام — عنصر مصداقية لموقع طوارئ
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="max-w-4xl mx-auto mt-12 pb-8 text-center">
      <p className="text-sm font-medium text-gray-500">{t('lastReviewed')}</p>
      <p className="text-xs text-gray-400 mt-1">{t('sourceNote')}</p>
    </footer>
  )
}

export default Footer