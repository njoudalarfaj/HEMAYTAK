// نستورد مكوّن البطاقة اللي بنيناه من مجلد components
import EmergencyCard from './components/EmergencyCard'
// نستورد مصفوفة الأرقام من ملف البيانات (مصدر الحقيقة الوحيد)
import emergencyNumbers from './data/emergencyNumbers.json'

function App() {
  // filter = تصفية: مر على كل عنصر، وخذ بس اللي primary حقه true
  // النتيجة: مصفوفة جديدة فيها السبع جهات الأساسية فقط (بدون الخدمات الإضافية)
  const primaryServices = emergencyNumbers.filter(
    (service) => service.primary === true
  )

  return (
    // الحاوية الرئيسية: min-h-screen تغطي طول الشاشة | bg-gray-100 خلفية رمادية فاتحة | p-6 حشوة داخلية
    <div className="min-h-screen bg-gray-100 p-6">

      {/* عنوان الموقع: mb-8 مسافة تحته تفصله عن البطاقات */}
      <h1 className="text-4xl font-bold text-red-600 text-center mb-8">  نجدة | Najdah </h1>

      {/* شبكة البطاقات (متجاوبة):
          grid = نظام شبكة
          grid-cols-1 = عمود واحد (الافتراضي - للجوال)
          md:grid-cols-2 = عمودين إذا الشاشة متوسطة أو أكبر
          gap-4 = مسافة بين البطاقات
          max-w-4xl mx-auto = عرض أقصى للشبكة + توسيطها بالصفحة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">

        {/* map = لكل جهة في القائمة المصفاة، أنشئ بطاقة ومرر لها بياناتها:
            service={service} → تمرير بيانات الجهة للبطاقة (props)
            key={service.id} → هوية فريدة لكل بطاقة، React يحتاجها لتتبع العناصر المتكررة */}
        {primaryServices.map((service) => (
          <EmergencyCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

// نصدّر المكوّن عشان main.jsx يقدر يستخدمه
export default App

/*

emergencyNumbers.json  (15 جهة)
        │
        ▼ filter → primary === true
primaryServices  (7 جهات أساسية)
        │
        ▼ map → بطاقة لكل جهة
7 × <EmergencyCard service={...} />
        │
        ▼ props: البطاقة تقرأ service.caseAr / nameAr / number
البطاقات على الشاشة 🃏

*/