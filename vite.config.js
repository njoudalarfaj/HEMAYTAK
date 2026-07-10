import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ⬅️ سطر جديد 1: استيراد إضافة Tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],   // ⬅️ تعديل 2: أضفنا tailwindcss() داخل القائمة
})