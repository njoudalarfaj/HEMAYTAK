// إعداد نظام الترجمة i18next
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// النصوص بكل لغة — كل نص له "مفتاح" نستدعيه فيه من الكود
const resources = {
  ar: {
    translation: {
      appTitle: 'حمايتك',
      subtitle: 'اختر الحالة الطارئة للاتصال مباشرة',
      callNow: 'اتصل الآن',
      copy: 'نسخ',
      copied: 'تم النسخ ✓',
      showAll: 'عرض جميع الأرقام المهمة ▼',
      hideAll: 'إخفاء الأرقام الإضافية ▲',
      emergencyNumber: 'رقم الطوارئ',
      serviceNumber: 'رقم الخدمة',
      lastReviewed: 'آخر مراجعة للأرقام: يوليو 2026',
      sourceNote: 'تم التحقق من الأرقام عبر المصادر الرسمية في المملكة العربية السعودية',
      disclaimer: 'حمايتك منصة معلوماتية مستقلة وليست جهة حكومية أو خدمة طوارئ رسمية',
      usageNote: 'يتحمل المستخدم مسؤولية صحة البلاغ والاستخدام المشروع لأرقام الخدمات',
      termsLink: 'شروط الاستخدام',
      privacyLink: 'سياسة الخصوصية',
      contactLink: 'تواصل معنا',
      copyright: '© 2026 حمايتك | HEMAYTAK. جميع الحقوق محفوظة.',
      copyrightNote: 'لا يجوز نسخ أو إعادة استخدام اسم المنصة أو شعارها أو تصميمها أو محتواها البرمجي دون إذن مسبق.',
      termsText: `حمايتك منصة معلوماتية مستقلة تهدف إلى تسهيل الوصول إلى أرقام الطوارئ والخدمات العامة في المملكة العربية السعودية، وليست جهة حكومية أو خدمة طوارئ رسمية.

يلتزم المستخدم باستخدام الأرقام للأغراض المخصصة لها فقط، ويتحمل المستخدم مسؤولية أي بلاغ كاذب أو اتصال عبثي أو استخدام غير مشروع، وفقًا للأنظمة المعمول بها في المملكة العربية السعودية.

تم التحقق من الأرقام عبر المصادر الرسمية وتتم مراجعتها دوريًا، وتبقى الجهات الرسمية هي المصدر النهائي والمعتمد. قد تتغير الأرقام أو الخدمات أو مناطق التغطية دون إشعار مسبق.

تعمل منصة حمايتك كدليل معلوماتي فقط، فهي لا تستقبل البلاغات أو المكالمات، ولا تتحكم في سرعة استجابة الجهات الرسمية أو مدى توفر خدماتها.

يمكن عرض الأرقام دون اتصال بالإنترنت بعد تحميل المنصة مسبقًا، لكن إجراء المكالمة يتطلب شبكة جوال أو خدمة Wi-Fi Calling.

حقوق الملكية الفكرية
تعود حقوق اسم حمايتك وشعارها وتصميمها ومحتواها البرمجي والمرئي إلى مالكة المشروع، ما لم يُذكر خلاف ذلك.

لا يجوز نسخ المنصة أو إعادة نشرها أو استخدام اسمها أو شعارها أو تصميمها أو كودها البرمجي أو أي جزء من محتواها لأغراض تجارية أو بطريقة توحي بوجود ارتباط رسمي، إلا بعد الحصول على إذن مسبق.

أسماء الجهات الرسمية وأرقامها وشعاراتها تعود إلى أصحابها، ويقتصر استخدامها داخل المنصة على الأغراض التعريفية والمعلوماتية.

باستخدامك للمنصة، فإنك تقر باطلاعك على شروط الاستخدام وسياسة الخصوصية المتاحتين في أسفل المنصة.

للاستفسارات: hemaytak@gmail.com`,
      privacyText: `آخر تحديث: يوليو 2026

البيانات الشخصية
لا تتطلب منصة حمايتك إنشاء حساب، ولا تجمع بشكل مباشر أي أسماء أو أرقام هوية أو أرقام هواتف أو مواقع دقيقة أو معلومات صحية أو تفاصيل بلاغات أو محتوى مكالمات.

البيانات المحفوظة على جهازك
قد يحفظ متصفحك محليًا تفضيل اللغة وملفات المنصة اللازمة للعمل دون إنترنت. تبقى هذه البيانات على جهازك، ويمكنك مسحها من إعدادات المتصفح في أي وقت.

إحصائيات الاستخدام
نستخدم Vercel Web Analytics لجمع إحصائيات استخدام عامة ومجهولة الهوية تساعدنا على تحسين المنصة، مثل عدد الزيارات والصفحات المعروضة ومصادر الوصول ومعلومات تقنية عامة عن المتصفحات والأجهزة.

لا تستخدم هذه الخدمة ملفات تعريف ارتباط للتتبع، ولا تزودنا بأسماء المستخدمين أو أرقام هواتفهم أو هوياتهم. ولا نستخدم الإحصائيات للتعرف على الزوار بشكل مباشر أو مراقبة مكالماتهم.

المكالمات
عند الضغط على "اتصل الآن" تفتح المنصة تطبيق الهاتف على جهازك، وتتم المكالمة عبر شبكتك الخاصة. لا تعلم حمايتك بالجهة التي اتصلت بها، ولا تسجل أو تحفظ أي محتوى أو معلومات عن مكالماتك.

مشاركة البيانات
لا نبيع بيانات المستخدمين ولا نشاركها مع معلنين. قد يعالج مزودو الاستضافة والإحصائيات بيانات تقنية محدودة وفق سياساتهم الخاصة وبالقدر اللازم فقط لتشغيل الخدمة وقياسها.

تواصل معنا: hemaytak@gmail.com`,
    },
  },
  en: {
    translation: {
      appTitle: 'Hemaytak',
      subtitle: 'Choose your emergency to call directly',
      callNow: 'Call Now',
      copy: 'Copy',
      copied: 'Copied ✓',
      showAll: 'Show all important numbers ▼',
      hideAll: 'Hide additional numbers ▲',
      emergencyNumber: 'Emergency No.',
      serviceNumber: 'Service No.',
      lastReviewed: 'Numbers last reviewed: July 2026',
      sourceNote: 'Verified through official sources in Saudi Arabia',
      disclaimer: 'Hemaytak is an independent informational platform and is not a government entity or an official emergency service',
      usageNote: 'Users are responsible for the accuracy of their reports and the lawful use of service numbers',
      termsLink: 'Terms of Use',
      privacyLink: 'Privacy Policy',
      contactLink: 'Contact Us',
      copyright: '© 2026 Hemaytak. All rights reserved.',
      copyrightNote: "The platform's name, logo, design, and software content may not be copied or reused without prior permission.",
      termsText: `Hemaytak is an independent informational platform that facilitates access to emergency and public-service numbers in Saudi Arabia. It is not a government entity or an official emergency service.

Users must use these numbers only for their intended purposes, and the user bears responsibility for any false report, prank call, or unlawful use, in accordance with the applicable laws of Saudi Arabia.

Numbers are verified through official sources and reviewed periodically. Official authorities remain the final and authoritative source. Numbers, services, and coverage areas may change without prior notice.

Hemaytak operates only as an informational directory. It does not receive reports or calls and does not control the response time or availability of official services.

Numbers may be viewed offline after the platform has been loaded successfully, but making a call requires cellular service or Wi-Fi Calling.

Intellectual Property
The name, logo, design, and software and visual content of Hemaytak belong to the project owner, unless stated otherwise.

The platform may not be copied, republished, or have its name, logo, design, source code, or any part of its content used for commercial purposes or in a way that implies official affiliation, without prior permission.

Names, numbers, and logos of official authorities belong to their respective owners and are used within the platform for identification and informational purposes only.

By using the platform, you acknowledge that you have reviewed the Terms of Use and Privacy Policy available in the platform footer.

Inquiries: hemaytak@gmail.com`,
      privacyText: `Last updated: July 2026

Personal data
Hemaytak does not require users to create an account and does not directly collect names, identification numbers, phone numbers, precise locations, health information, report details, or call content.

Data stored on your device
Your browser may locally store your language preference and the platform files required for offline access. This data remains on your device and can be cleared through your browser settings.

Usage analytics
We use Vercel Web Analytics to collect general, anonymized usage statistics that help us improve the platform, such as visit counts, pages viewed, referral sources, and general technical information about browsers and devices.

The service does not use tracking cookies and does not provide us with users' names, phone numbers, or identities. We do not use analytics to directly identify visitors or monitor their calls.

Calls
When you press "Call Now," the platform opens the phone application on your device, and the call is made through your own network. Hemaytak does not know which authority you called and does not record or store any call content or call information.

Data sharing
We do not sell user data or share it with advertisers. Hosting and analytics providers may process limited technical data according to their own policies and only as necessary to operate and measure the service.

Contact us: hemaytak@gmail.com`,},
  },
}

// نقرأ اللغة المحفوظة، وإذا ما في (أول زيارة) نبدأ عربي
const savedLanguage = localStorage.getItem('hemaytak-language') || 'ar'

i18n
  .use(initReactI18next) // اربط i18next بـ React
  .init({
    resources,           // النصوص اللي فوق
    lng: savedLanguage,  // اللغة من المحفوظ
    fallbackLng: 'ar',   // إذا مفتاح ناقص بلغة، ارجع للعربي
    interpolation: {
      escapeValue: false, // React يحمي من الثغرات بنفسه
    },
  })

// عند بدء التشغيل: اضبط اتجاه الصفحة حسب اللغة المحفوظة
document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
document.documentElement.lang = savedLanguage

export default i18n