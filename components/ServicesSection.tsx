import Image from 'next/image';
import ServiceCard from './ServiceCard';

const services = [
  { title: 'زيادة عدد الزبائن', desc: 'اجعل مطعمك يظهر أمام آلاف المستخدمين الباحثين عن أفضل أماكن الأكل في الجزائر.' },
  { title: 'نظام تقييم موثوق', desc: 'احصل على تقييمات حقيقية تساعدك على بناء الثقة وتحسين سمعة مطعمك.' },
  { title: 'تصنيف Yammy Stars', desc: 'ارتقِ في التصنيفات واحصل على شارات مميزة تزيد من جاذبية مطعمك للعملاء.' },
  { title: 'عروض وحملات تسويقية', desc: 'أنشئ عروضًا خاصة وحقق انتشارًا أكبر من خلال الحملات والإعلانات داخل التطبيق.' },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0F1720] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            نقدم حلولاً تقنية متكاملة تساعدك على تحقيق أهدافك بكفاءة واحترافية
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          {/* البطاقات اليسار - مزاحة للأسفل */}
          <div className="flex flex-col gap-6 lg:w-1/4 lg:mt-24">
            {services.slice(0, 2).map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
{/* الهاتف - المنتصف */}
<div className="relative w-[360px] h-[480px] flex-shrink-0 flex items-center justify-center">

  {/* خلفية خضراء */}
  <div className="absolute w-[320px] h-[320px] rounded-full bg-green-500 opacity-30 blur-3xl z-0" />

  {/* perspective container */}
  <div style={{ perspective: '1200px' }} className="relative z-10 w-full h-full flex items-center justify-center">
    <div
      style={{
        transform: 'rotateY(20deg) rotateX(10deg) rotateZ(-15deg)',
        transformStyle: 'preserve-3d',
        filter: 'drop-shadow(-15px 25px 35px rgba(0,0,0,0.65))',
      }}
    >
      {/* إطار الهاتف */}
      <div
        className="relative bg-[#1c1c1e] rounded-[44px] overflow-hidden"
        style={{
          width: '220px',
          height: '440px',
          border: '8px solid #3a3a3c',
          boxShadow: 'inset 0 0 0 1px #555',
        }}
      >
        {/* الشاشة */}
        <Image
          src="/screen3.png"
          alt="شاشة التطبيق"
          fill
          className="object-cover"
        />
        {/* الشق العلوي Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1c1c1e] rounded-full z-10" />
      </div>

      {/* الجانب الأيمن - عمق الهاتف */}
      <div
        className="absolute top-[8px] -right-[10px] bg-[#2a2a2c]"
        style={{
          width: '10px',
          height: 'calc(100% - 16px)',
          borderRadius: '0 8px 8px 0',
          transform: 'rotateY(90deg) translateZ(-5px)',
        }}
      />
    </div>
  </div>

  {/* بطاقة Key Features */}
  <div
    className="absolute bottom-6 right-0 z-20 bg-white text-gray-800 rounded-2xl shadow-2xl p-4 w-44"
    style={{ transform: 'rotate(0deg)' }}
  >
    <p className="font-bold text-sm mb-2">Key Features</p>
    <div className="flex items-start gap-2">
      <span className="text-yellow-400 text-xl">⚡</span>
      <div>
        <p className="font-semibold text-xs">Share Your Moments</p>
        <p className="text-xs text-gray-400 mt-1 leading-tight">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </div>
  </div>

</div>

          {/* البطاقات اليمين - في الأعلى */}
          <div className="flex flex-col gap-6 lg:w-1/4 lg:-mt-24">
            {services.slice(2, 4).map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}