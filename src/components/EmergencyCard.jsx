// مكوّن بطاقة الطوارئ: يستقبل بيانات جهة واحدة (props) ويعرضها كبطاقة فيها زر اتصال
function EmergencyCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3">
      {/* اسم الحالة — الأبرز لأن المستخدم يعرف حالته أكثر من اسم الجهة */}
      <h2 className="text-xl font-bold text-gray-900">{service.caseAr}</h2>

      {/* اسم الجهة والرقم */}
      <p className="text-gray-600">
        {service.nameAr} — {service.number}
      </p>

      {/* زر الاتصال: رابط tel يفتح شاشة الاتصال بالجوال والرقم جاهز */}
      <a
        href={`tel:${service.number}`}
        className="bg-red-600 text-white text-center text-lg font-bold rounded-xl py-3 hover:bg-red-700"
      >
        اتصل الآن — {service.number}
      </a>
    </div>
  )
}

export default EmergencyCard