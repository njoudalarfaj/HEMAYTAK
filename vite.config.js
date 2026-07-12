import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // إعداد PWA: التثبيت على الشاشة + العمل بدون إنترنت
    VitePWA({
      registerType: 'autoUpdate', // يحدث نفسه تلقائيًا مع كل نشر جديد
      includeAssets: ['logo_icon.png'],
      manifest: {
        // بطاقة تعريف التطبيق — هذا اللي يقرأه الجوال عند التثبيت
        name: 'حمايتك | Hemaytak',
        short_name: 'حمايتك',
        description: 'أرقام الطوارئ بسرعة وسهولة — Emergency numbers, when it matters',
        theme_color: '#dc2626',      // لون شريط التطبيق (أحمر هويتنا)
        background_color: '#ffffff', // خلفية شاشة الفتح
        display: 'standalone',       // يفتح كتطبيق مستقل بدون شريط المتصفح
        dir: 'rtl',
        lang: 'ar',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // الحارس: يخزن كل ملفات الموقع بالجهاز — الأرقام تفتح بدون إنترنت
        globPatterns: ['**/*.{js,css,html,png,jpeg,svg,woff2}'],
      },
    }),
  ],
})